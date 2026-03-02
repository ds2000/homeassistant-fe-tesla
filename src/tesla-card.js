import { LitElement, html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { sharedStyles, cardStyles } from './styles.js';
import { ENTITIES, entityId } from './entity-config.js';
import { ICONS } from './icons.js';
import { FACTORY_COLOURS } from './recolour.js';
import { TESLA_MODELS, getVariantColours } from './models.js';
import './editor.js';
import './menu-charger.js';
import './menu-climate.js';
import './menu-controls.js';
import './colour-picker.js';
import './model-picker.js';

// ─── Overlay image filenames ─────────────────────────────────────────────────
// Base images (opaque, used as the canvas)
const IMG_BASE       = 'base.png';
const IMG_TRUNK_OPEN = 'trunk-open.png';

// Transparent overlays composited on top of the base via CSS stacking.
// Z-order (furthest → nearest to camera in offcharge front 3/4 view):
const OVERLAY_Z_ORDER = ['chargeport', 'frunk', 'fr', 'ff', 'nr', 'nf'];

// When both same-side doors are open, use a combined overlay instead of
// stacking individual ones (handles shared interior correctly).
const COMBINED_OVERLAYS = {
  'nf+nr': 'nf-nr-combined-overlay.png',
  'ff+fr': 'ff-fr-combined-overlay.png',
};

// On-charge (rear 3/4 view): different z-order, no chargeport or ff overlays.
// Files use 'oncharge-' prefix so both sets coexist in the same directory.
const OVERLAY_Z_ORDER_ONCHARGE = ['frunk', 'nf', 'nr', 'fr'];
const COMBINED_OVERLAYS_ONCHARGE = {
  'nf+nr': 'oncharge-nf-nr-combined-overlay.png',
};

// localStorage key prefixes
const LS_COLOUR_PREFIX = 'tesla-card-colour-';
const LS_MODEL_PREFIX  = 'tesla-card-model-';
const LS_LAYOUT_PREFIX = 'tesla-card-layout-';

class TeslaCard extends LitElement {

  // Cache-bust version — changes on each page load to pick up new images
  static _imgVer = Date.now();

  static get properties() {
    return {
      hass:            { type: Object },
      config:          { type: Object },
      _menu:           { state: true },
      _imageError:     { state: true },
      _settingsView:   { state: true },   // null | 'main' | 'model' | 'colour'
      _modelOverride:  { state: true },   // { model, variant } | null
      _colourOverride: { state: true },   // { dir } | { dir:'custom', h, s } | null
      _layout:         { state: true },   // 'portrait' | 'landscape'
      _settingsSlide:  { state: true },   // null | 'left' | 'right' — panel transition direction
    };
  }

  static get styles() { return [sharedStyles, cardStyles]; }

  constructor() {
    super();
    this._menu            = null;
    this._imageError      = false;
    this._settingsView    = null;
    this._modelOverride   = null;
    this._colourOverride  = null;
    this._layout          = 'portrait';
    this._settingsSlide   = null;
    this._baseConfig      = null;
    this._combinedAvail   = {};   // { 'nf+nr': true/false, 'ff+fr': true/false, 'oc_nf+nr': ... }
    this._onchargeAvail   = false; // whether oncharge-base.png exists for current colour
    // Pre-bound so Lit reuses the same function reference across renders
    this._toggleCharger       = () => this._toggle('charger');
    this._toggleClimate       = () => this._toggle('climate');
    this._toggleControls      = () => this._toggle('controls');
    this._handleCloseMenu     = () => { this._menu = null; };
    this._handleColourChanged = (e) => this._onColourChanged(e);
    this._handleModelChanged  = (e) => this._onModelChanged(e);
    this._handleModelBack     = () => { this._settingsSlide = null; this._settingsView = 'main'; };
    this._handleColourBack    = () => { this._settingsSlide = 'left'; this._settingsView = 'model'; };
    this._handlePickerClose   = () => { this._settingsView = null; this._settingsSlide = null; };
  }

  // ─── Config ────────────────────────────────────────────────────────────────

  setConfig(config) {
    if (!config.car_name) throw new Error('car_name is required');
    this._baseConfig = {
      car_model:   '3',
      car_variant: '3.1',
      car_color:   'neutral',
      image_path:  '/hacsfiles/homeassistant-fe-tesla',
      show_speed:  true,
      ...config,
    };
    this._applyConfig();
  }

  _applyConfig() {
    const base = { ...this._baseConfig };
    if (this._modelOverride) {
      base.car_model   = this._modelOverride.model;
      base.car_variant = this._modelOverride.variant;
    }
    const co = this._colourOverride;
    if (co) {
      base.car_color = co.dir === 'custom' ? 'neutral' : co.dir;
    }
    this.config = base;
    this._preloadCombinedOverlays();
  }

  _preloadCombinedOverlays() {
    // Offcharge combined overlays
    for (const [key, filename] of Object.entries(COMBINED_OVERLAYS)) {
      const img = new Image();
      img.onload = () => { this._combinedAvail[key] = true; this.requestUpdate(); };
      img.onerror = () => { this._combinedAvail[key] = false; };
      img.src = this._overlayUrl(filename);
    }
    // Probe for on-charge base image (determines if oncharge set exists)
    const ocProbe = new Image();
    ocProbe.onload = () => { this._onchargeAvail = true; this.requestUpdate(); };
    ocProbe.onerror = () => { this._onchargeAvail = false; };
    ocProbe.src = this._overlayUrl('oncharge-base.png');
    // Oncharge combined overlays
    for (const [key, filename] of Object.entries(COMBINED_OVERLAYS_ONCHARGE)) {
      const img = new Image();
      img.onload = () => { this._combinedAvail['oc_' + key] = true; this.requestUpdate(); };
      img.onerror = () => { this._combinedAvail['oc_' + key] = false; };
      img.src = this._overlayUrl(filename);
    }
  }

  static getConfigElement() {
    return document.createElement('tesla-card-editor');
  }

  static getStubConfig() {
    return { car_name: '', car_model: '3', car_variant: '3.1', car_color: 'neutral', image_path: '/hacsfiles/homeassistant-fe-tesla' };
  }

  // ─── Persistence ───────────────────────────────────────────────────────────

  connectedCallback() {
    super.connectedCallback();
    if (this._baseConfig) {
      this._restoreModel();
      this._restoreColour();
    }
    this._restoreLayout();
  }

  // ── Colour ──

  _colourLsKey() {
    return LS_COLOUR_PREFIX + (this._baseConfig?.car_name ?? 'default');
  }

  _restoreColour() {
    try {
      const raw = localStorage.getItem(this._colourLsKey());
      if (!raw) return;
      try {
        this._colourOverride = JSON.parse(raw);
      } catch {
        // Legacy plain string format
        this._colourOverride = { dir: raw };
      }
      this._applyConfig();
    } catch { /* ignore corrupt localStorage */ }
  }

  _persistColour() {
    try {
      if (this._colourOverride) {
        localStorage.setItem(this._colourLsKey(), JSON.stringify(this._colourOverride));
      } else {
        localStorage.removeItem(this._colourLsKey());
      }
    } catch { /* localStorage might be full or disabled */ }
  }

  _onColourChanged(e) {
    const detail = e.detail;
    if (!detail) {
      this._colourOverride = null;
    } else if (detail.dir === 'custom') {
      this._colourOverride = { dir: 'custom', h: detail.h, s: detail.s };
    } else {
      this._colourOverride = { dir: detail.dir };
    }
    this._applyConfig();
    this._persistColour();
    this._imageError = false;
  }

  // ── Model ──

  _modelLsKey() {
    return LS_MODEL_PREFIX + (this._baseConfig?.car_name ?? 'default');
  }

  _restoreModel() {
    try {
      const raw = localStorage.getItem(this._modelLsKey());
      if (raw) {
        this._modelOverride = JSON.parse(raw);
        this._applyConfig();
      }
    } catch { /* ignore */ }
  }

  _persistModel() {
    try {
      if (this._modelOverride) {
        localStorage.setItem(this._modelLsKey(), JSON.stringify(this._modelOverride));
      } else {
        localStorage.removeItem(this._modelLsKey());
      }
    } catch { /* */ }
  }

  _onModelChanged(e) {
    const { model, variant } = e.detail;
    this._modelOverride = { model, variant };
    // Reset colour if current colour isn't available for the new model/variant
    const co = this._colourOverride;
    if (co && co.dir !== 'custom') {
      const availColours = getVariantColours(model, variant);
      if (!availColours.includes(co.dir)) {
        this._colourOverride = null;
        this._persistColour();
      }
    }
    this._applyConfig();
    this._persistModel();
    this._imageError = false;
    // Forward to colour picker
    this._settingsSlide = 'right';
    this._settingsView = 'colour';
  }

  // ── Layout ──

  _layoutLsKey() {
    return LS_LAYOUT_PREFIX + (this._baseConfig?.car_name ?? 'default');
  }

  _restoreLayout() {
    try {
      const raw = localStorage.getItem(this._layoutLsKey());
      if (raw === 'landscape') this._layout = 'landscape';
    } catch { /* ignore */ }
  }

  _persistLayout() {
    try {
      localStorage.setItem(this._layoutLsKey(), this._layout);
    } catch { /* */ }
  }

  _toggleLayout() {
    this._layout = this._layout === 'landscape' ? 'portrait' : 'landscape';
    this._persistLayout();
  }

  // ─── Image URL helpers ───────────────────────────────────────────────────

  _imgUrl(f) {
    const { image_path, car_model, car_variant, car_color } = this.config;
    return `${image_path}/${car_model}/${car_variant}/${car_color}/${f}?v=${TeslaCard._imgVer}`;
  }

  _overlayUrl(f) {
    const { image_path, car_model, car_variant, car_color } = this.config;
    return `${image_path}/${car_model}/${car_variant}/${car_color}/overlays/${f}?v=${TeslaCard._imgVer}`;
  }

  _btnUrl(f) {
    return `${this.config.image_path}/buttons/${f}?v=${TeslaCard._imgVer}`;
  }

  // ─── Custom colour helpers ───────────────────────────────────────────────

  /** Returns { h, s } for custom colour, or null */
  get _customColour() {
    const co = this._colourOverride;
    if (!co || co.dir !== 'custom') return null;
    return { h: co.h, s: co.s };
  }

  get _hasCustomOverlay() {
    const c = this._customColour;
    return !!c && c.s > 0;
  }

  _maskUrl(f) {
    const { image_path, car_model, car_variant } = this.config;
    const maskFile = f.replace('.png', '-mask.png');
    return `${image_path}/${car_model}/${car_variant}/neutral/${maskFile}?v=${TeslaCard._imgVer}`;
  }

  _customOverlayStyleFor(imageFile) {
    const c = this._customColour;
    if (!c || c.s === 0) return '';
    const mask = this._maskUrl(imageFile);
    return `position:absolute;inset:0;pointer-events:none;`
      + `background:hsl(${c.h},${c.s}%,50%);mix-blend-mode:color;`
      + `-webkit-mask-image:url(${mask});mask-image:url(${mask});`
      + `-webkit-mask-size:contain;mask-size:contain;`
      + `-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;`
      + `-webkit-mask-position:center;mask-position:center;`;
  }

  // ─── Entity helpers ────────────────────────────────────────────────────────

  _eid(t)      { return entityId(t, this.config.car_name); }
  _state(t)    { return this.hass?.states[this._eid(t)]; }
  _val(t)      { return this._state(t)?.state; }
  _attr(t, a)  { return this._state(t)?.attributes?.[a]; }

  // ─── Service call ──────────────────────────────────────────────────────────

  async _svc(domain, service, entityTpl, extra = {}) {
    try {
      await this.hass.callService(domain, service, {
        entity_id: this._eid(entityTpl),
        ...extra,
      });
    } catch (e) {
      console.error('[tesla-card] service error', domain, service, e);
    }
  }

  // ─── Menu toggle ───────────────────────────────────────────────────────────

  _toggle(m) {
    this._menu = this._menu === m ? null : m;
  }

  // ─── Settings navigation ───────────────────────────────────────────────────

  _openSettings()     { this._settingsView = 'main'; this._settingsSlide = null; }
  _openModelPicker()  { this._settingsView = 'model'; this._settingsSlide = null; }
  _closeSettings()    { this._settingsView = null; this._settingsSlide = null; }

  _onSettingsOverlayClick(e) {
    if (e.target === e.currentTarget) this._closeSettings();
  }

  // ─── Render ────────────────────────────────────────────────────────────────

  render() {
    if (!this.config || !this.hass) return html``;

    const menu = this._menu;
    const co = this._colourOverride;

    // ── Status values ──
    const batRaw    = this._val(ENTITIES.BATTERY_LEVEL);
    const battery   = batRaw != null ? Math.round(Number(batRaw)) : null;
    const batPct    = battery != null ? Math.max(0, Math.min(100, battery)) : 0;
    const batCls    = batPct >= 50 ? 'high' : batPct >= 20 ? 'medium' : 'low';
    const rangeRaw  = this._val(ENTITIES.BATTERY_RANGE);
    const rangeUnit = this._attr(ENTITIES.BATTERY_RANGE, 'unit_of_measurement') ?? 'km';
    const range     = rangeRaw != null ? `${Math.round(Number(rangeRaw))} ${rangeUnit}` : null;
    const charging  = this._val(ENTITIES.CHARGING) === 'on';
    const online    = this._val(ENTITIES.ONLINE) === 'on';
    const onlineEnt = this._state(ENTITIES.ONLINE);

    // Car image — overlay stacking
    const frunkOpen       = this._val(ENTITIES.FRUNK_COVER) === 'open'
                         || this._val(ENTITIES.FRUNK)         === 'on';
    const trunkOpen       = this._val(ENTITIES.TRUNK)         === 'on';
    const pluggedIn       = this._val(ENTITIES.PLUGGED_IN)    === 'on';
    const chargerDoorOpen = this._val(ENTITIES.CHARGER_DOOR) === 'open' || pluggedIn;

    // Individual door states from binary_sensor.{car_name}_doors attributes
    const doorState = {
      nf: this._attr(ENTITIES.DOORS, 'driver_front')    === true,
      nr: this._attr(ENTITIES.DOORS, 'driver_rear')     === true,
      ff: this._attr(ENTITIES.DOORS, 'passenger_front') === true,
      fr: this._attr(ENTITIES.DOORS, 'passenger_rear')  === true,
    };

    // When plugged in and on-charge images exist, switch to rear 3/4 view
    const useOncharge = pluggedIn && this._onchargeAvail;
    const prefix = useOncharge ? 'oncharge-' : '';

    // Base image: trunk-open swaps the entire base silhouette
    const baseImg = trunkOpen ? `${prefix}trunk-open.png` : `${prefix}base.png`;

    // Z-order and available overlays depend on camera angle.
    // On-charge view has no chargeport overlay (always visible) and no ff (not in frame).
    const zOrder = useOncharge ? OVERLAY_Z_ORDER_ONCHARGE : OVERLAY_Z_ORDER;
    const activeOverlays = {
      frunk: frunkOpen,
      nf: doorState.nf,
      nr: doorState.nr,
      fr: doorState.fr,
    };
    if (!useOncharge) {
      activeOverlays.chargeport = chargerDoorOpen;
      activeOverlays.ff = doorState.ff;
    }

    // Check for combined overlays (both same-side doors open)
    const combinedKey = useOncharge ? 'oc_nf+nr' : 'nf+nr';
    const useNfNrCombined = doorState.nf && doorState.nr && this._combinedAvail[combinedKey];
    const useFfFrCombined = !useOncharge && doorState.ff && doorState.fr && this._combinedAvail['ff+fr'];
    const combinedMap = useOncharge ? COMBINED_OVERLAYS_ONCHARGE : COMBINED_OVERLAYS;

    // Build list of overlay filenames to stack (z-ordered)
    const overlayFiles = [];
    let nfNrFirstSeen = false;
    let ffFrFirstSeen = false;

    for (const name of zOrder) {
      if (!activeOverlays[name]) continue;

      // Skip individual doors when using combined overlay;
      // insert combined at the position of the last constituent in z-order
      if ((name === 'nf' || name === 'nr') && useNfNrCombined) {
        if (nfNrFirstSeen) overlayFiles.push(combinedMap['nf+nr']);
        nfNrFirstSeen = true;
        continue;
      }
      if ((name === 'ff' || name === 'fr') && useFfFrCombined) {
        if (ffFrFirstSeen) overlayFiles.push(combinedMap['ff+fr']);
        ffFrFirstSeen = true;
        continue;
      }

      overlayFiles.push(`${prefix}${name}-overlay.png`);
    }

    // ── Derived display values for nav rows ──
    const lockState   = this._val(ENTITIES.DOOR_LOCK);
    const isLocked    = lockState === 'locked';
    const chgState    = this._val(ENTITIES.CHARGING_STATE) ?? '—';
    const chgRate     = this._val(ENTITIES.CHARGE_RATE);
    const chgRateUnit = this._attr(ENTITIES.CHARGE_RATE, 'unit_of_measurement') ?? 'kW';
    const climState   = this._val(ENTITIES.CLIMATE);
    const climOn      = climState != null && climState !== 'off' && climState !== 'unavailable';
    const tgtTempRaw  = this._attr(ENTITIES.CLIMATE, 'temperature');
    const tempUnit    = this._attr(ENTITIES.CLIMATE, 'temperature_unit') ?? '°C';
    const tempStr     = tgtTempRaw != null ? Number(tgtTempRaw).toFixed(1) : '—';

    const statusText = !online && onlineEnt ? 'Asleep'
      : this._val(ENTITIES.PARKING_BRAKE) === 'on' ? 'Parked'
      : (() => {
          if (!this.config.show_speed) return null;
          const s = this._attr(ENTITIES.LOCATION, 'speed');
          return s != null && Number(s) > 0 ? `${Math.round(Number(s))} km/h` : null;
        })();

    const chargerSub  = charging
      ? `Charging · ${chgRate ?? '—'} ${chgRateUnit}`
      : pluggedIn ? 'Plugged in' : chgState;
    const climateSub  = climOn ? `${tempStr}${tempUnit}` : 'Off';
    const controlsSub = lockState ? (isLocked ? 'Locked' : 'Unlocked') : null;

    // Location sublabel from device_tracker
    const locationState = this._val(ENTITIES.LOCATION);
    const locationSub   = locationState
      ? locationState.charAt(0).toUpperCase() + locationState.slice(1).replace(/_/g, ' ')
      : null;

    // Sentry mode for Security & Drivers row
    const sentryOn = this._val(ENTITIES.SENTRY_MODE) === 'on';

    // ── Settings sublabels ──
    const curModel   = TESLA_MODELS.find(m => m.id === this.config.car_model);
    const curVariant = curModel?.variants.find(v => v.id === this.config.car_variant);
    const modelSub   = curModel && curVariant
      ? `${curModel.name} · ${curVariant.label}`
      : this.config.car_model;

    const isCustom     = co?.dir === 'custom';
    const curColourObj = isCustom ? null : FACTORY_COLOURS.find(c => c.dir === this.config.car_color);
    const colourSub    = isCustom ? 'Custom' : (curColourObj?.name ?? this.config.car_color);

    // Available colours for current model/variant
    const availColours = getVariantColours(this.config.car_model, this.config.car_variant);
    const isLandscape = this._layout === 'landscape';

    return html`
      <ha-card class="${isLandscape ? 'landscape' : ''}">

        <!-- ── Header (hidden when a submenu is open) ─────── -->
        ${!menu ? html`
          <div class="header">
            <div class="header-left">
              <div class="car-name-row">
                <span class="car-name">${this.config.name ?? this.config.car_name}</span>
                <span class="icon name-chevron">${unsafeHTML(ICONS['chevron-down'])}</span>
              </div>
              <div class="battery-summary">
                ${battery != null ? html`
                  <div class="battery-bar-small">
                    <div class="battery-fill-small ${batCls}" style="width:${batPct}%"></div>
                  </div>
                  <span class="range-text">${range ?? '—'}</span>` : ''}
              </div>
              ${statusText ? html`<span class="status-text">${statusText}</span>` : ''}
            </div>
            <div class="header-right">
              <button class="icon-btn" title="Settings"
                @click=${() => this._openSettings()}>
                <span class="icon">${unsafeHTML(ICONS.settings)}</span>
              </button>
              <button class="icon-btn" title="Refresh"
                @click=${() => this._svc('button', 'press', ENTITIES.FORCE_UPDATE)}>
                <span class="icon">${unsafeHTML(ICONS.refresh)}</span>
              </button>
            </div>
          </div>
        ` : ''}

        <!-- ── Landing body (car + nav side-by-side in landscape) ── -->
        ${!menu ? html`
          <div class="landing-body">
            <div class="landing-left">
              <div class="car-image-area">
                ${this._imageError ? html`
                  <div class="car-image-placeholder">
                    <span class="icon">${unsafeHTML(ICONS.car)}</span>
                    <span>Image not found</span>
                  </div>` : html`
                  <img class="car-image"
                    src="${this._overlayUrl(baseImg)}"
                    alt="Tesla ${this.config.car_model}"
                    @error=${() => { this._imageError = true; }}
                    @load=${() => { this._imageError = false; }}
                  />
                  ${overlayFiles.map(f => html`
                    <img class="car-overlay"
                      src="${this._overlayUrl(f)}"
                      alt="" />`)}
                `}
                ${this._hasCustomOverlay ? html`
                  <div class="car-colour-overlay"
                    style="${this._customOverlayStyleFor(baseImg)}"></div>` : ''}
              </div>
              <!-- Quick action icons: lock, controls, charge, climate -->
              <div class="quick-actions">
                ${lockState ? html`
                  <button class="quick-btn ${isLocked ? 'q-locked' : 'q-unlocked'}"
                    @click=${() => this._svc('lock', isLocked ? 'unlock' : 'lock', ENTITIES.DOOR_LOCK)}>
                    <span class="icon">${unsafeHTML(isLocked ? ICONS.lock : ICONS.unlock)}</span>
                  </button>` : html`<span style="width:48px"></span>`}
                <button class="quick-btn" @click=${this._toggleControls}>
                  <span class="icon">${unsafeHTML(ICONS.car)}</span>
                </button>
                <button class="quick-btn ${charging ? 'q-active' : ''}" @click=${this._toggleCharger}>
                  <span class="icon">${unsafeHTML(ICONS['charge-bolt'])}</span>
                </button>
                <button class="quick-btn ${climOn ? 'q-active' : ''}" @click=${this._toggleClimate}>
                  <span class="icon">${unsafeHTML(ICONS['climate-fan'])}</span>
                </button>
              </div>
            </div>
            <div class="nav-rows">
              <button class="nav-row"
                @click=${this._toggleControls}>
                <span class="icon nav-icon">${unsafeHTML(ICONS.car)}</span>
                <div class="nav-text">
                  <span class="nav-label">Controls</span>
                  ${controlsSub ? html`<span class="nav-sublabel">${controlsSub}</span>` : ''}
                </div>
                <span class="icon nav-chevron">${unsafeHTML(ICONS['chevron-right'])}</span>
              </button>
              <button class="nav-row"
                @click=${this._toggleClimate}>
                <span class="icon nav-icon">${unsafeHTML(ICONS['climate-fan'])}</span>
                <div class="nav-text">
                  <span class="nav-label">Climate</span>
                  <span class="nav-sublabel">${climateSub}</span>
                </div>
                <span class="icon nav-chevron">${unsafeHTML(ICONS['chevron-right'])}</span>
              </button>
              <button class="nav-row" disabled>
                <span class="icon nav-icon">${unsafeHTML(ICONS.location)}</span>
                <div class="nav-text">
                  <span class="nav-label">Location</span>
                  ${locationSub ? html`<span class="nav-sublabel">${locationSub}</span>` : ''}
                </div>
                <span class="icon nav-chevron">${unsafeHTML(ICONS['chevron-right'])}</span>
              </button>
              <button class="nav-row"
                @click=${this._toggleCharger}>
                <span class="icon nav-icon">${unsafeHTML(ICONS['charge-bolt'])}</span>
                <div class="nav-text">
                  <span class="nav-label">Charging</span>
                  <span class="nav-sublabel">${chargerSub}</span>
                </div>
                <span class="icon nav-chevron">${unsafeHTML(ICONS['chevron-right'])}</span>
              </button>
              <button class="nav-row" disabled>
                <span class="icon nav-icon">${unsafeHTML(ICONS.schedule)}</span>
                <div class="nav-text">
                  <span class="nav-label">Set Schedules</span>
                </div>
                <span class="icon nav-chevron">${unsafeHTML(ICONS['chevron-right'])}</span>
              </button>
              <button class="nav-row" disabled>
                <span class="icon nav-icon">${unsafeHTML(ICONS.security)}</span>
                <div class="nav-text">
                  <span class="nav-label">Security & Drivers</span>
                  <span class="nav-sublabel">${sentryOn ? 'Sentry Mode active' : 'Phone key disconnected'}</span>
                </div>
                <span class="icon nav-chevron">${unsafeHTML(ICONS['chevron-right'])}</span>
              </button>
            </div>
          </div>
        ` : ''}

        <!-- ── Submenu panels ─────────────────────────────── -->
        ${menu === 'charger' ? html`
          <tesla-menu-charger
            .hass=${this.hass}
            .config=${this.config}
            .layout=${this._layout}
            @close-menu=${this._handleCloseMenu}>
          </tesla-menu-charger>` : ''}

        ${menu === 'climate' ? html`
          <tesla-menu-climate
            .hass=${this.hass}
            .config=${this.config}
            .customColour=${this._customColour}
            .layout=${this._layout}
            @close-menu=${this._handleCloseMenu}>
          </tesla-menu-climate>` : ''}

        ${menu === 'controls' ? html`
          <tesla-menu-controls
            .hass=${this.hass}
            .config=${this.config}
            .customColour=${this._customColour}
            .layout=${this._layout}
            @close-menu=${this._handleCloseMenu}>
          </tesla-menu-controls>` : ''}

        <!-- ── Settings: main menu ─────────────────────────── -->
        ${this._settingsView === 'main' ? html`
          <div class="settings-overlay"
            @click=${(e) => this._onSettingsOverlayClick(e)}>
            <div class="settings-panel">
              <div class="settings-header">
                <span class="settings-title">Settings</span>
                <button class="settings-close"
                  @click=${() => this._closeSettings()}>&times;</button>
              </div>
              <div class="settings-rows">
                <button class="settings-row"
                  @click=${() => this._openModelPicker()}>
                  <span class="icon settings-row-icon">${unsafeHTML(ICONS.car)}</span>
                  <div class="settings-row-text">
                    <span class="settings-row-label">Model & Colour</span>
                    <span class="settings-row-sub">${modelSub} · ${colourSub}</span>
                  </div>
                  <span class="icon settings-row-chevron">${unsafeHTML(ICONS['chevron-right'])}</span>
                </button>
                <button class="settings-row"
                  @click=${() => this._toggleLayout()}>
                  <span class="icon settings-row-icon">${unsafeHTML(ICONS.layout)}</span>
                  <div class="settings-row-text">
                    <span class="settings-row-label">Layout</span>
                    <span class="settings-row-sub">${this._layout === 'landscape' ? 'Landscape' : 'Portrait'}</span>
                  </div>
                  <span class="icon settings-row-chevron">${unsafeHTML(ICONS['chevron-right'])}</span>
                </button>
              </div>
            </div>
          </div>
        ` : ''}

        <!-- ── Settings: model picker ──────────────────────── -->
        ${this._settingsView === 'model' ? html`
          <tesla-model-picker
            .model=${this.config.car_model}
            .variant=${this.config.car_variant}
            slide-from=${this._settingsSlide ?? 'up'}
            @model-changed=${this._handleModelChanged}
            @picker-back=${this._handleModelBack}
            @picker-close=${this._handlePickerClose}>
          </tesla-model-picker>` : ''}

        <!-- ── Settings: colour picker ─────────────────────── -->
        ${this._settingsView === 'colour' ? html`
          <tesla-colour-picker
            .selected=${co?.dir ?? this.config.car_color}
            .available=${availColours}
            .customH=${co?.dir === 'custom' ? co.h : 0}
            .customS=${co?.dir === 'custom' ? co.s : 80}
            showBack
            slide-from=${this._settingsSlide ?? 'up'}
            @colour-changed=${this._handleColourChanged}
            @picker-back=${this._handleColourBack}
            @picker-close=${this._handlePickerClose}>
          </tesla-colour-picker>` : ''}

      </ha-card>
    `;
  }

  getCardSize() { return 5; }
}

customElements.define('tesla-card', TeslaCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type:        'tesla-card',
  name:        'Tesla Card',
  description: 'A Lovelace card for the alandtse/tesla Home Assistant integration',
  preview:     false,
});

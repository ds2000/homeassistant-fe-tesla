import { LitElement, html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { sharedStyles, cardStyles } from './styles.js';
import { getEntities, resolveEntityId } from './entity-config.js';
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
// Transparent overlays composited on top of the base via CSS stacking.
// Z-order (furthest → nearest to camera in offcharge front 3/4 view):
const OVERLAY_Z_ORDER = ['chargeport', 'frunk', 'fr', 'ff', 'nr', 'nf'];

// When both same-side doors are open, use a combined overlay instead of
// stacking individual ones (handles shared interior correctly).
const COMBINED_OVERLAYS = {
  'nf+nr': 'nf-nr-combined-overlay.png',
  'ff+fr': 'ff-fr-combined-overlay.png',
};

// When ALL four doors are open, use a single all-doors overlay instead of
// compositing two combined overlays — through the glass of one side, the
// base image would show closed body instead of the other side's open doors.
const ALL_DOORS_OVERLAY          = 'all-doors-overlay.png';
const ALL_DOORS_OVERLAY_ONCHARGE = 'oncharge-all-doors-overlay.png';

// On-charge (rear 3/4 view): different z-order, no chargeport or ff overlays.
// Files use 'oncharge-' prefix so both sets coexist in the same directory.
// fr renders below trunk (far-rear door is behind the trunk lid in rear 3/4 view).
const OVERLAY_BELOW_TRUNK_ONCHARGE = ['fr'];
const OVERLAY_Z_ORDER_ONCHARGE = ['frunk', 'nf', 'nr'];
const COMBINED_OVERLAYS_ONCHARGE = {
  'nf+nr': 'oncharge-nf-nr-combined-overlay.png',
};

// localStorage key prefixes
const LS_COLOUR_PREFIX = 'tesla-card-colour-';
const LS_MODEL_PREFIX  = 'tesla-card-model-';
const LS_LAYOUT_PREFIX = 'tesla-card-layout-';
const LS_SIZE_PREFIX   = 'tesla-card-size-';
const CARD_SIZES       = ['small', 'medium', 'large'];

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
      _cardSize:       { state: true },   // 'small' | 'medium' | 'large'
    };
  }

  static get styles() { return [sharedStyles, cardStyles]; }

  // ── Entity map (integration-aware) ──
  get E() { return getEntities(this.config?.integration); }

  constructor() {
    super();
    this._menu            = null;
    this._imageError      = false;
    this._settingsView    = null;
    this._modelOverride   = null;
    this._colourOverride  = null;
    this._layout          = 'portrait';
    this._settingsSlide   = null;
    this._cardSize        = 'medium';
    this._baseConfig      = null;
    this._combinedAvail   = {};   // { 'nf+nr': true/false, 'ff+fr': true/false, 'oc_nf+nr': ..., 'all': ..., 'oc_all': ... }
    this._onchargeAvail   = false; // whether oncharge-base.png exists for current colour
    this._cableAvail      = false; // whether oncharge-cable-overlay.png exists
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
    if (!config.car_name && config.integration !== 'entities') throw new Error('car_name is required');
    this._baseConfig = {
      car_model:   '3',
      car_variant: '3.1',
      car_color:   'red_multi_coat',
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
    // Probe for on-charge cable overlay (for charging glow animation)
    const cableProbe = new Image();
    cableProbe.onload = () => { this._cableAvail = true; this.requestUpdate(); };
    cableProbe.onerror = () => { this._cableAvail = false; };
    cableProbe.src = this._overlayUrl('oncharge-cable-overlay.png');
    // Oncharge combined overlays
    for (const [key, filename] of Object.entries(COMBINED_OVERLAYS_ONCHARGE)) {
      const img = new Image();
      img.onload = () => { this._combinedAvail['oc_' + key] = true; this.requestUpdate(); };
      img.onerror = () => { this._combinedAvail['oc_' + key] = false; };
      img.src = this._overlayUrl(filename);
    }
    // All-doors overlays (all 4 doors open simultaneously)
    const allProbe = new Image();
    allProbe.onload = () => { this._combinedAvail['all'] = true; this.requestUpdate(); };
    allProbe.onerror = () => { this._combinedAvail['all'] = false; };
    allProbe.src = this._overlayUrl(ALL_DOORS_OVERLAY);
    const ocAllProbe = new Image();
    ocAllProbe.onload = () => { this._combinedAvail['oc_all'] = true; this.requestUpdate(); };
    ocAllProbe.onerror = () => { this._combinedAvail['oc_all'] = false; };
    ocAllProbe.src = this._overlayUrl(ALL_DOORS_OVERLAY_ONCHARGE);
  }

  static getConfigElement() {
    return document.createElement('tesla-card-editor');
  }

  static getStubConfig() {
    return { car_name: '', car_model: '3', car_variant: '3.1', car_color: 'red_multi_coat', image_path: '/hacsfiles/homeassistant-fe-tesla' };
  }

  // ─── Persistence ───────────────────────────────────────────────────────────

  connectedCallback() {
    super.connectedCallback();
    if (this._baseConfig) {
      this._restoreModel();
      this._restoreColour();
    }
    this._restoreLayout();
    this._restoreSize();
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

  // ── Card Size ──

  _sizeLsKey() {
    return LS_SIZE_PREFIX + (this._baseConfig?.car_name ?? 'default');
  }

  _restoreSize() {
    try {
      const raw = localStorage.getItem(this._sizeLsKey());
      if (raw && CARD_SIZES.includes(raw)) this._cardSize = raw;
    } catch { /* ignore */ }
  }

  _persistSize() {
    try {
      localStorage.setItem(this._sizeLsKey(), this._cardSize);
    } catch { /* */ }
  }

  _setCardSize(size) {
    if (this._cardSize === size) return;
    this._cardSize = size;
    this._persistSize();
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

  _eid(t)      { return resolveEntityId(t, this.config.car_name, this.config.entity_overrides); }
  _state(t)    { const id = this._eid(t); return id ? this.hass?.states[id] : undefined; }
  _val(t)      { return this._state(t)?.state; }
  _attr(t, a)  { return this._state(t)?.attributes?.[a]; }

  // ─── Service call ──────────────────────────────────────────────────────────

  async _svc(domain, service, entityTpl, extra = {}) {
    if (!entityTpl) return;
    try {
      await this.hass.callService(domain, service, {
        entity_id: this._eid(entityTpl),
        ...extra,
      });
    } catch (e) {
      console.error('[tesla-card] service error', domain, service, e);
    }
  }

  // ─── Force refresh — wake car then poll all entities ───────────────────────

  async _forceRefresh() {
    // 1. Wake the car
    await this._svc('button', 'press', this.E.FORCE_UPDATE);

    // 2. After a delay, request HA to re-poll key entities
    const REFRESH_ENTITIES = [
      this.E.BATTERY_LEVEL, this.E.BATTERY_RANGE, this.E.CHARGING_STATE,
      this.E.CHARGE_RATE, this.E.CHARGING, this.E.PLUGGED_IN, this.E.ONLINE,
      this.E.CLIMATE, this.E.DOOR_LOCK, this.E.TEMPERATURE_INSIDE,
      this.E.TEMPERATURE_OUTSIDE, this.E.SENTRY_MODE,
      this.E.FRUNK_COVER, this.E.OPEN_TRUNK, this.E.CHARGER_DOOR,
      this.E.WINDOWS_COVER, this.E.CHARGE_LIMIT_NUMBER, this.E.CHARGING_AMPS_NUMBER,
      this.E.DOOR_DRIVER_FRONT, this.E.DOOR_DRIVER_REAR,
      this.E.DOOR_PASSENGER_FRONT, this.E.DOOR_PASSENGER_REAR,
      this.E.TIME_TO_FULL_CHARGE,
    ];

    // Collect valid entity IDs
    const entityIds = REFRESH_ENTITIES
      .map(tpl => this._eid(tpl))
      .filter(Boolean);

    // Wait for wake to take effect, then batch-update
    setTimeout(async () => {
      try {
        await this.hass.callService('homeassistant', 'update_entity', {
          entity_id: entityIds,
        });
      } catch (e) {
        console.error('[tesla-card] refresh error', e);
      }
    }, 5000);
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
    const batRaw    = this._val(this.E.BATTERY_LEVEL);
    const battery   = batRaw != null ? Math.round(Number(batRaw)) : null;
    const batPct    = battery != null ? Math.max(0, Math.min(100, battery)) : 0;
    const batClsBase = batPct >= 50 ? 'high' : batPct >= 20 ? 'medium' : 'low';
    const rangeRaw  = this._val(this.E.BATTERY_RANGE);
    const rangeUnit = this._attr(this.E.BATTERY_RANGE, 'unit_of_measurement') ?? 'km';
    const range     = rangeRaw != null ? `${Math.round(Number(rangeRaw))} ${rangeUnit}` : null;
    const charging  = this._val(this.E.CHARGING) === 'on';
    const batCls    = charging ? 'charging' : batClsBase;
    const online    = this._val(this.E.ONLINE) === 'on';
    const onlineEnt = this._state(this.E.ONLINE);

    // Time remaining to charge limit
    const timeToFullRaw = this._val(this.E.TIME_TO_FULL_CHARGE);
    const chgTimeRemaining = (() => {
      if (!charging || !timeToFullRaw || timeToFullRaw === 'unavailable') return null;
      const target = new Date(timeToFullRaw);
      if (isNaN(target)) return null;
      const diffMs = target - Date.now();
      if (diffMs <= 0) return 'Complete';
      const hrs = Math.floor(diffMs / 3600000);
      const mins = Math.round((diffMs % 3600000) / 60000);
      if (hrs >= 24) return '24+ hours remaining to charge limit';
      if (hrs > 0) return `${hrs}h ${mins}m remaining to charge limit`;
      return `${mins}m remaining to charge limit`;
    })();

    // Car image — overlay stacking
    const frunkOpen       = this._val(this.E.FRUNK_COVER) === 'open'
                         || this._val(this.E.FRUNK)         === 'on';
    const trunkOpen       = this._val(this.E.OPEN_TRUNK) === 'open'
                         || this._val(this.E.TRUNK)      === 'on';
    const pluggedIn       = this._val(this.E.PLUGGED_IN)    === 'on';
    const chargerDoorOpen = this._val(this.E.CHARGER_DOOR) === 'open' || pluggedIn;

    // Door states — Fleet has individual sensors, Custom has combined entity
    const doorState = this.E.DOOR_DRIVER_FRONT
      ? {
          nf: this._val(this.E.DOOR_DRIVER_FRONT)    === 'on',
          nr: this._val(this.E.DOOR_DRIVER_REAR)     === 'on',
          ff: this._val(this.E.DOOR_PASSENGER_FRONT) === 'on',
          fr: this._val(this.E.DOOR_PASSENGER_REAR)  === 'on',
        }
      : {
          nf: this._attr(this.E.DOORS, 'driver_front')    === true,
          nr: this._attr(this.E.DOORS, 'driver_rear')     === true,
          ff: this._attr(this.E.DOORS, 'passenger_front') === true,
          fr: this._attr(this.E.DOORS, 'passenger_rear')  === true,
        };

    // When plugged in and on-charge images exist, switch to rear 3/4 view
    const useOncharge = pluggedIn && this._onchargeAvail;
    const prefix = useOncharge ? 'oncharge-' : '';

    // Base is always base.png — trunk is a transparent overlay so that
    // belowTrunk overlays (oncharge fr) can render between base and trunk.
    const baseImg = `${prefix}base.png`;

    // Z-order and available overlays depend on camera angle.
    // On-charge view has no chargeport overlay (always visible) and no ff (not in frame).
    const zOrder = useOncharge ? OVERLAY_Z_ORDER_ONCHARGE : OVERLAY_Z_ORDER;
    const belowTrunk = useOncharge ? OVERLAY_BELOW_TRUNK_ONCHARGE : [];
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

    // Check for all-doors overlay (all 4 doors open simultaneously).
    // Uses a single overlay from the all_doors screenshot instead of
    // compositing individual/combined overlays — eliminates through-glass
    // artifacts where the base image body is visible instead of open doors.
    const allDoorsKey = useOncharge ? 'oc_all' : 'all';
    const allDoorsOpen = doorState.nf && doorState.nr && (useOncharge || doorState.ff) && (useOncharge || doorState.fr);
    const useAllDoors = allDoorsOpen && this._combinedAvail[allDoorsKey];

    // Check for combined overlays (both same-side doors open)
    const combinedKey = useOncharge ? 'oc_nf+nr' : 'nf+nr';
    const useNfNrCombined = !useAllDoors && doorState.nf && doorState.nr && this._combinedAvail[combinedKey];
    const useFfFrCombined = !useAllDoors && !useOncharge && doorState.ff && doorState.fr && this._combinedAvail['ff+fr'];
    const combinedMap = useOncharge ? COMBINED_OVERLAYS_ONCHARGE : COMBINED_OVERLAYS;

    // Overlays below trunk (oncharge: fr is behind trunk lid)
    const belowTrunkFiles = [];
    for (const name of belowTrunk) {
      if (useAllDoors && (name === 'fr' || name === 'ff' || name === 'nf' || name === 'nr')) continue;
      if (activeOverlays[name]) belowTrunkFiles.push(`${prefix}${name}-overlay.png`);
    }

    // Trunk overlay (transparent diff, not full base swap)
    const trunkOverlay = trunkOpen ? `${prefix}trunk-overlay.png` : null;

    // Build list of overlay filenames to stack above trunk (z-ordered)
    const overlayFiles = [];
    let nfNrFirstSeen = false;
    let ffFrFirstSeen = false;
    let allDoorsInserted = false;

    for (const name of zOrder) {
      if (!activeOverlays[name]) continue;

      // When using all-doors overlay, skip individual door overlays and
      // insert the all-doors overlay at the topmost door position
      if (useAllDoors && (name === 'nf' || name === 'nr' || name === 'ff' || name === 'fr')) {
        if (!allDoorsInserted) {
          // Defer insertion — we want it at the LAST door position in z-order
        } else {
          continue;
        }
        allDoorsInserted = true;
        continue;
      }

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

    // Insert all-doors overlay at the end (topmost, nearest to camera)
    if (useAllDoors) {
      const allDoorsFile = useOncharge ? ALL_DOORS_OVERLAY_ONCHARGE : ALL_DOORS_OVERLAY;
      overlayFiles.push(allDoorsFile);
    }

    // ── Derived display values for nav rows ──
    const lockState   = this._val(this.E.DOOR_LOCK);
    const isLocked    = lockState === 'locked';
    const chgState    = this._val(this.E.CHARGING_STATE) ?? '—';
    const chgRate     = this._val(this.E.CHARGE_RATE);
    const chgRateUnit = this._attr(this.E.CHARGE_RATE, 'unit_of_measurement') ?? 'kW';
    const climState   = this._val(this.E.CLIMATE);
    const climOn      = climState != null && climState !== 'off' && climState !== 'unavailable';
    const tgtTempRaw  = this._attr(this.E.CLIMATE, 'temperature');
    const tempUnit    = this._attr(this.E.CLIMATE, 'temperature_unit') ?? '°C';
    const tempStr     = tgtTempRaw != null ? Number(tgtTempRaw).toFixed(1) : '—';

    const statusText = !online && onlineEnt ? 'Asleep'
      : charging ? 'Charging'
      : this.E.PARKING_BRAKE && this._val(this.E.PARKING_BRAKE) === 'on' ? 'Parked'
      : (() => {
          if (!this.config.show_speed) return null;
          const s = this._attr(this.E.LOCATION, 'speed');
          if (s != null && Number(s) > 0) return `${Math.round(Number(s))} km/h`;
          return online ? 'Parked' : null;
        })();

    const chgRateDisp = chgRate != null ? Number(chgRate).toFixed(1) : '—';
    const chargerSub  = charging
      ? `Charging · ${chgRateDisp} ${chgRateUnit}`
      : pluggedIn ? 'Plugged in' : chgState;
    const climateSub  = climOn ? `${tempStr}${tempUnit}` : 'Off';
    const controlsSub = lockState ? (isLocked ? 'Locked' : 'Unlocked') : null;

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
    const sizeClass   = this._cardSize !== 'medium' ? `size-${this._cardSize}` : '';

    return html`
      <ha-card class="${isLandscape ? 'landscape' : ''} ${sizeClass}">

        <!-- ── Header (hidden when a submenu is open) ─────── -->
        ${!menu ? html`
          <div class="header">
            <div class="header-left">
              <div class="car-name-row">
                <span class="car-name">${this.config.name ?? this.config.car_name}</span>
                <span class="icon name-chevron">${unsafeHTML(ICONS['chevron-down'])}</span>
              </div>
              <div class="battery-summary${charging ? ' charging' : ''}">
                ${battery != null ? html`
                  <div class="battery-bar-small">
                    <div class="battery-fill-small ${batCls}" style="width:${batPct}%"></div>
                  </div>
                  <span class="range-text">${range ?? '—'}</span>
                  ${charging ? html`<span class="icon charging-bolt">${unsafeHTML(ICONS['charge-bolt'])}</span>` : ''}` : ''}
              </div>
              ${chgTimeRemaining ? html`<span class="status-text charging-status">${chgTimeRemaining}</span>`
                : statusText ? html`<span class="status-text">${statusText}</span>` : ''}
            </div>
            <div class="header-right">
              <button class="icon-btn" title="Settings"
                @click=${() => this._openSettings()}>
                <span class="icon">${unsafeHTML(ICONS.settings)}</span>
              </button>
              <button class="icon-btn" title="Refresh"
                @click=${() => this._forceRefresh()}>
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
                  ${belowTrunkFiles.map(f => html`
                    <img class="car-overlay"
                      src="${this._overlayUrl(f)}"
                      alt="" />`)}
                  ${trunkOverlay ? html`
                    <img class="car-overlay"
                      src="${this._overlayUrl(trunkOverlay)}"
                      alt="" />` : ''}
                  ${overlayFiles.map(f => html`
                    <img class="car-overlay"
                      src="${this._overlayUrl(f)}"
                      alt="" />`)}
                  ${charging && useOncharge && this._cableAvail ? html`
                    <img class="car-overlay charging-glow"
                      src="${this._overlayUrl('oncharge-cable-overlay.png')}"
                      alt="" />` : ''}
                `}
                ${this._hasCustomOverlay ? html`
                  <div class="car-colour-overlay"
                    style="${this._customOverlayStyleFor(baseImg)}"></div>` : ''}
              </div>
              <!-- Quick action icons: lock, controls, charge, climate -->
              <div class="quick-actions">
                ${lockState ? html`
                  <button class="quick-btn ${isLocked ? 'q-locked' : 'q-unlocked'}"
                    @click=${() => this._svc('lock', isLocked ? 'unlock' : 'lock', this.E.DOOR_LOCK)}>
                    <span class="icon">${unsafeHTML(isLocked ? ICONS.lock : ICONS.unlock)}</span>
                  </button>` : html`<span style="width:48px"></span>`}
                <button class="quick-btn" @click=${this._toggleControls}>
                  <span class="icon">${unsafeHTML(ICONS.car)}</span>
                </button>
                <button class="quick-btn ${charging ? 'q-active' : ''}" @click=${this._toggleCharger}>
                  <span class="icon">${unsafeHTML(ICONS['charge-bolt'])}</span>
                </button>
                <button class="quick-btn ${climOn ? 'q-active q-climate-on' : ''}" @click=${this._toggleClimate}>
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
              <button class="nav-row${climOn ? ' active' : ''}"
                @click=${this._toggleClimate}>
                <span class="icon nav-icon">${unsafeHTML(ICONS['climate-fan'])}</span>
                <div class="nav-text">
                  <span class="nav-label">Climate</span>
                  <span class="nav-sublabel">${climateSub}</span>
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
                <div class="settings-row settings-row-static">
                  <span class="icon settings-row-icon">${unsafeHTML(ICONS.resize)}</span>
                  <div class="settings-row-text">
                    <span class="settings-row-label">Card Size</span>
                  </div>
                  <div class="settings-size-control">
                    ${CARD_SIZES.map(s => html`
                      <button class="settings-size-btn${this._cardSize === s ? ' selected' : ''}"
                        @click=${(e) => { e.stopPropagation(); this._setCardSize(s); }}>
                        ${s === 'small' ? 'S' : s === 'medium' ? 'M' : 'L'}
                      </button>`)}
                  </div>
                </div>
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

  // Sections view grid hints — card fills the section by default
  getGridOptions() {
    return {
      columns: 12,       // full section width
      min_columns: 4,    // minimum ~1/3 section
      rows: 'auto',
      min_rows: 3,
    };
  }
}

customElements.define('tesla-card', TeslaCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type:        'tesla-card',
  name:        'Tesla Card',
  description: 'A Lovelace card for Tesla vehicles — supports both official Fleet and alandtse/tesla integrations',
  preview:     false,
});

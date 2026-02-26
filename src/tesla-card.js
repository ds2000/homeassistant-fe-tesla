import { LitElement, html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { sharedStyles, cardStyles } from './styles.js';
import { ENTITIES, entityId } from './entity-config.js';
import { ICONS } from './icons.js';
import { TESLA_MODELS, getModelSource } from './models.js';
import './editor.js';
import './menu-charger.js';
import './menu-climate.js';
import './menu-controls.js';
import './colour-picker.js';
import './model-picker.js';

// ─── Image filenames ──────────────────────────────────────────────────────────
const IMG_BASE             = 'base.png';
const IMG_CHARGE_PORT_OPEN = 'chargeport-open.png';
const IMG_FRUNK_OPEN       = 'frunk-open.png';

// localStorage key prefixes
const LS_COLOUR_PREFIX = 'tesla-card-colour-';
const LS_MODEL_PREFIX  = 'tesla-card-model-';

class TeslaCard extends LitElement {

  static get properties() {
    return {
      hass:           { type: Object },
      config:         { type: Object },
      _menu:          { state: true },
      _imageError:    { state: true },
      _settingsView:  { state: true },   // null | 'main' | 'model' | 'colour'
      _carColour:     { state: true },
      _modelOverride: { state: true },   // { model, variant } | null
    };
  }

  static get styles() { return [sharedStyles, cardStyles]; }

  constructor() {
    super();
    this._menu           = null;
    this._imageError     = false;
    this._settingsView   = null;
    this._carColour      = null;   // { h, s, name, filter? } | null
    this._modelOverride  = null;
    this._baseConfig     = null;
    // Pre-bound so Lit reuses the same function reference across renders
    this._toggleCharger       = () => this._toggle('charger');
    this._toggleClimate       = () => this._toggle('climate');
    this._toggleControls      = () => this._toggle('controls');
    this._handleCloseMenu     = () => { this._menu = null; };
    this._handleColourChanged = (e) => this._onColourChanged(e);
    this._handleModelChanged  = (e) => this._onModelChanged(e);
    this._handlePickerBack    = () => { this._settingsView = 'main'; };
    this._handlePickerClose   = () => { this._settingsView = null; };
  }

  // ─── Config ────────────────────────────────────────────────────────────────

  setConfig(config) {
    if (!config.car_name) throw new Error('car_name is required');
    this._baseConfig = {
      car_model:   '3',
      car_variant: '3.1',
      car_color:   'neutral',
      image_path:  '/local/Tesla',
      show_speed:  true,
      ...config,
    };
    this._applyConfig();
  }

  _applyConfig() {
    const o = this._modelOverride;
    this.config = o
      ? { ...this._baseConfig, car_model: o.model, car_variant: o.variant }
      : this._baseConfig;
  }

  static getConfigElement() {
    return document.createElement('tesla-card-editor');
  }

  static getStubConfig() {
    return { car_name: '', car_model: '3', car_variant: '3.1', car_color: 'neutral', image_path: '/local/Tesla' };
  }

  // ─── Persistence ───────────────────────────────────────────────────────────

  connectedCallback() {
    super.connectedCallback();
    if (this._baseConfig) {
      this._restoreModel();
      this._restoreColour();
    }
  }

  // ── Colour ──

  _colourLsKey() {
    return LS_COLOUR_PREFIX + (this._baseConfig?.car_name ?? 'default');
  }

  _restoreColour() {
    try {
      const raw = localStorage.getItem(this._colourLsKey());
      if (raw) this._carColour = JSON.parse(raw);
    } catch { /* ignore corrupt localStorage */ }
  }

  _persistColour() {
    try {
      if (this._carColour) {
        localStorage.setItem(this._colourLsKey(), JSON.stringify(this._carColour));
      } else {
        localStorage.removeItem(this._colourLsKey());
      }
    } catch { /* localStorage might be full or disabled */ }
  }

  _onColourChanged(e) {
    const detail = e.detail;
    if (!detail) {
      this._carColour = null;
    } else {
      const c = { h: detail.h, s: detail.s, name: detail.name };
      if (detail.blend)  c.blend  = detail.blend;
      if (detail.bg)     c.bg     = detail.bg;
      if (detail.filter) c.filter = detail.filter;
      this._carColour = c;
    }
    this._persistColour();
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
    this._applyConfig();
    this._persistModel();
    this._imageError = false;
  }

  // ─── Image + mask URL helpers ──────────────────────────────────────────────

  _imgUrl(f) {
    const { image_path, car_model, car_variant, car_color } = this.config;
    return `${image_path}/${car_model}/${car_variant}/${car_color}/${f}`;
  }

  _maskUrl(f) {
    const maskName = f.replace(/\.(png|jpg)$/i, '-mask.png');
    const { image_path, car_model, car_variant } = this.config;
    return `${image_path}/${car_model}/${car_variant}/neutral/${maskName}`;
  }

  _sourceUrl(f) {
    const source = getModelSource(this.config.car_model, this.config.car_variant);
    if (!source) return null;
    const { image_path, car_model, car_variant } = this.config;
    return `${image_path}/${car_model}/${car_variant}/${source}/${f}`;
  }

  _overlayStyle(f) {
    const c = this._carColour;
    if (!c) return '';
    const m = this._maskUrl(f);
    const mask = `-webkit-mask-image:url(${m});mask-image:url(${m});`;
    const src = this._sourceUrl(f);

    if (src && c.filter) {
      return `background-image:url(${src});filter:${c.filter};${mask}`;
    }
    if (c.s > 0) {
      return `background:hsl(${c.h},${c.s}%,50%);mix-blend-mode:color;${mask}`;
    }
    if (c.blend && c.bg) {
      return `background:${c.bg};mix-blend-mode:${c.blend};${mask}`;
    }
    return '';
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

  _openSettings()     { this._settingsView = 'main'; }
  _openModelPicker()  { this._settingsView = 'model'; }
  _openColourPicker() { this._settingsView = 'colour'; }
  _closeSettings()    { this._settingsView = null; }

  _onSettingsOverlayClick(e) {
    if (e.target === e.currentTarget) this._closeSettings();
  }

  // ─── Render ────────────────────────────────────────────────────────────────

  render() {
    if (!this.config || !this.hass) return html``;

    const menu = this._menu;
    const cc = this._carColour;
    const hasColour = !!cc && (cc.s > 0 || !!(cc.blend && cc.bg) || !!cc.filter);

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

    // Car image — prefer cover entity state, fall back to binary sensor
    const frunkCoverOpen  = this._val(ENTITIES.FRUNK_COVER) === 'open'
                         || this._val(ENTITIES.FRUNK)         === 'on';
    const chargerDoorOpen = this._val(ENTITIES.CHARGER_DOOR) === 'open'
                         || this._val(ENTITIES.PLUGGED_IN)    === 'on';
    let carImg = IMG_BASE;
    if (frunkCoverOpen)       carImg = IMG_FRUNK_OPEN;
    else if (chargerDoorOpen) carImg = IMG_CHARGE_PORT_OPEN;

    // ── Derived display values for nav rows ──
    const lockState   = this._val(ENTITIES.DOOR_LOCK);
    const isLocked    = lockState === 'locked';
    const pluggedIn   = this._val(ENTITIES.PLUGGED_IN) === 'on';
    const chgState    = this._val(ENTITIES.CHARGING_STATE) ?? '—';
    const chgRate     = this._val(ENTITIES.CHARGE_RATE);
    const chgRateUnit = this._attr(ENTITIES.CHARGE_RATE, 'unit_of_measurement') ?? 'kW';
    const climState   = this._val(ENTITIES.CLIMATE);
    const climOn      = climState != null && climState !== 'off' && climState !== 'unavailable';
    const tgtTempRaw  = this._attr(ENTITIES.CLIMATE, 'temperature');
    const tempUnit    = this._attr(ENTITIES.CLIMATE, 'temperature_unit') ?? '°C';
    const tempStr     = tgtTempRaw != null ? Number(tgtTempRaw).toFixed(1) : '—';

    const statusText = !online && onlineEnt ? 'Offline'
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

    // ── Settings sublabels ──
    const curModel   = TESLA_MODELS.find(m => m.id === this.config.car_model);
    const curVariant = curModel?.variants.find(v => v.id === this.config.car_variant);
    const modelSub   = curModel && curVariant
      ? `${curModel.name} · ${curVariant.label}`
      : this.config.car_model;
    const colourSub  = cc?.name ?? 'Default';
    const swatchBg   = cc
      ? (cc.s > 0 ? `hsl(${cc.h},${cc.s}%,50%)` : (cc.bg ?? '#71757a'))
      : '#71757a';

    return html`
      <ha-card>

        <!-- ── Header ─────────────────────────────────────── -->
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

        <!-- ── Default view: car image + colour overlay + quick icons ─── -->
        ${!menu ? html`
          <div>
            <div class="car-image-area">
              ${this._imageError ? html`
                <div class="car-image-placeholder">
                  <span class="icon">${unsafeHTML(ICONS.car)}</span>
                  <span>Image not found</span>
                </div>` : html`
                <img class="car-image"
                  src="${this._imgUrl(carImg)}"
                  alt="Tesla ${this.config.car_model}"
                  @error=${() => { this._imageError = true; }}
                  @load=${()  => { this._imageError = false; }}
                />`}
              ${hasColour ? html`
                <div class="car-colour-overlay"
                  style="${this._overlayStyle(carImg)}"></div>` : ''}
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
              <button class="quick-btn" @click=${this._toggleCharger}>
                <span class="icon${charging ? ' icon-on' : ''}">${unsafeHTML(ICONS['charge-bolt'])}</span>
              </button>
              <button class="quick-btn" @click=${this._toggleClimate}>
                <span class="icon${climOn ? ' icon-on' : ''}">${unsafeHTML(ICONS['climate-fan'])}</span>
              </button>
            </div>
          </div>
        ` : ''}

        <!-- ── Submenu panels ─────────────────────────────── -->
        ${menu === 'charger' ? html`
          <tesla-menu-charger
            .hass=${this.hass}
            .config=${this.config}
            @close-menu=${this._handleCloseMenu}>
          </tesla-menu-charger>` : ''}

        ${menu === 'climate' ? html`
          <tesla-menu-climate
            .hass=${this.hass}
            .config=${this.config}
            .carColour=${this._carColour}
            @close-menu=${this._handleCloseMenu}>
          </tesla-menu-climate>` : ''}

        ${menu === 'controls' ? html`
          <tesla-menu-controls
            .hass=${this.hass}
            .config=${this.config}
            .carColour=${this._carColour}
            @close-menu=${this._handleCloseMenu}>
          </tesla-menu-controls>` : ''}

        <!-- ── Nav rows (hidden when a submenu is open) ──── -->
        ${!menu ? html`
          <div class="nav-rows">
            <button class="nav-row"
              @click=${this._toggleControls}>
              <span class="icon nav-icon${!isLocked ? ' icon-on' : ''}">${unsafeHTML(ICONS.car)}</span>
              <div class="nav-text">
                <span class="nav-label">Controls</span>
                ${controlsSub ? html`<span class="nav-sublabel">${controlsSub}</span>` : ''}
              </div>
              <span class="icon nav-chevron">${unsafeHTML(ICONS['chevron-right'])}</span>
            </button>
            <button class="nav-row"
              @click=${this._toggleClimate}>
              <span class="icon nav-icon${climOn ? ' icon-on' : ''}">${unsafeHTML(ICONS['climate-fan'])}</span>
              <div class="nav-text">
                <span class="nav-label">Climate</span>
                <span class="nav-sublabel">${climateSub}</span>
              </div>
              <span class="icon nav-chevron">${unsafeHTML(ICONS['chevron-right'])}</span>
            </button>
            ${locationState != null ? html`
            <button class="nav-row" disabled>
              <span class="icon nav-icon">${unsafeHTML(ICONS.location)}</span>
              <div class="nav-text">
                <span class="nav-label">Location</span>
                ${locationSub ? html`<span class="nav-sublabel">${locationSub}</span>` : ''}
              </div>
              <span class="icon nav-chevron">${unsafeHTML(ICONS['chevron-right'])}</span>
            </button>` : ''}
            <button class="nav-row"
              @click=${this._toggleCharger}>
              <span class="icon nav-icon${charging ? ' icon-on' : ''}">${unsafeHTML(ICONS['charge-bolt'])}</span>
              <div class="nav-text">
                <span class="nav-label">Charging</span>
                <span class="nav-sublabel">${chargerSub}</span>
              </div>
              <span class="icon nav-chevron">${unsafeHTML(ICONS['chevron-right'])}</span>
            </button>
          </div>
        ` : ''}

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
                    <span class="settings-row-label">Model</span>
                    <span class="settings-row-sub">${modelSub}</span>
                  </div>
                  <span class="icon settings-row-chevron">${unsafeHTML(ICONS['chevron-right'])}</span>
                </button>
                <button class="settings-row"
                  @click=${() => this._openColourPicker()}>
                  <div class="settings-swatch" style="background:${swatchBg}"></div>
                  <div class="settings-row-text">
                    <span class="settings-row-label">Colour</span>
                    <span class="settings-row-sub">${colourSub}</span>
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
            @model-changed=${this._handleModelChanged}
            @picker-back=${this._handlePickerBack}
            @picker-close=${this._handlePickerClose}>
          </tesla-model-picker>` : ''}

        <!-- ── Settings: colour picker ─────────────────────── -->
        ${this._settingsView === 'colour' ? html`
          <tesla-colour-picker
            .colour=${this._carColour}
            showBack
            @colour-changed=${this._handleColourChanged}
            @picker-back=${this._handlePickerBack}
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

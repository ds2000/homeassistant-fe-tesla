import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { TeslaBase } from './tesla-base.js';

import { sharedStyles, controlsStyles } from './styles.js';
import { ICONS } from './icons.js';

class TeslaMenuControls extends TeslaBase {

  static get properties() {
    return {
      ...super.properties,
      _showTyres: { state: true },
    };
  }

  static get styles() { return [sharedStyles, controlsStyles]; }

  constructor() {
    super();
    this._showTyres = false;
  }

  _formatPressure(val, sourceUnit, displayUnit) {
    if (val == null || val === 'unknown' || val === 'unavailable') return '—';
    let n = Number(val);
    // Convert if source and display units differ
    if (sourceUnit === 'psi' && displayUnit === 'bar') n = n * 0.0689476;
    else if (sourceUnit === 'bar' && displayUnit === 'psi') n = n / 0.0689476;
    return n.toFixed(1);
  }

  render() {
    if (!this.config || !this.hass) return html``;

    const lockState     = this._val(this.E.DOOR_LOCK);
    const isLocked      = lockState === 'locked';

    const frunkOpen     = this._val(this.E.FRUNK_COVER) === 'open'
                       || this._val(this.E.FRUNK)        === 'on';
    const trunkOpen     = this._val(this.E.TRUNK) === 'on';

    const pluggedIn     = this._val(this.E.PLUGGED_IN) === 'on';
    const chargerDoorOpen = this._val(this.E.CHARGER_DOOR) === 'open' || pluggedIn;

    const windowsOpen   = this._val(this.E.WINDOWS_COVER) === 'open';
    const bgFile = pluggedIn ? 'controls-bg-charging.png' : 'controls-bg.png';

    // Tyre pressure — only show toggle if entities exist
    const hasTyres   = !!this._state(this.E.TYRE_FL);
    const sourceUnit = this._attr(this.E.TYRE_FL, 'unit_of_measurement') ?? 'psi';
    const dispUnit   = this.tyreUnit ?? 'psi';
    const tyreFL = this._formatPressure(this._val(this.E.TYRE_FL), sourceUnit, dispUnit);
    const tyreFR = this._formatPressure(this._val(this.E.TYRE_FR), sourceUnit, dispUnit);
    const tyreRL = this._formatPressure(this._val(this.E.TYRE_RL), sourceUnit, dispUnit);
    const tyreRR = this._formatPressure(this._val(this.E.TYRE_RR), sourceUnit, dispUnit);

    return html`
      <div class="controls-menu${this.layout === 'landscape' ? ' landscape' : ''}">
        <div class="panel-header">
          <button class="panel-back" @click=${this._close}>
            <span class="icon">${unsafeHTML(ICONS['chevron-left'])}</span>
          </button>
          <span class="panel-title">Controls</span>
          ${hasTyres ? html`
            <button class="panel-header-btn${this._showTyres ? ' active' : ''}"
              @click=${() => { this._showTyres = !this._showTyres; }}>
              <span class="icon">${unsafeHTML(ICONS.tyre)}</span>
            </button>` : ''}
        </div>
        <div class="ctrl-car-area">
          <img class="ctrl-car-bg"
            src="${this._imgUrl(bgFile)}"
            alt="Car top view" />
          ${this._hasCustomOverlay ? html`
            <div style="${this._customOverlayStyleFor(bgFile)}"></div>` : ''}

          ${this._showTyres ? html`
            <!-- Tyre pressure overlays -->
            <div class="tyre-label tyre-fl">
              <span class="tyre-value">${tyreFL}</span>
              <span class="tyre-unit">${dispUnit}</span>
            </div>
            <div class="tyre-label tyre-fr">
              <span class="tyre-value">${tyreFR}</span>
              <span class="tyre-unit">${dispUnit}</span>
            </div>
            <div class="tyre-label tyre-rl">
              <span class="tyre-value">${tyreRL}</span>
              <span class="tyre-unit">${dispUnit}</span>
            </div>
            <div class="tyre-label tyre-rr">
              <span class="tyre-value">${tyreRR}</span>
              <span class="tyre-unit">${dispUnit}</span>
            </div>
          ` : html`
            <!-- Frunk — text only, top centre (open only, must be closed physically) -->
            <button class="ctrl-zone ctrl-frunk"
              @click=${() => this._activate(this.E.FRUNK_COVER)}
              ?disabled=${frunkOpen}>
              ${frunkOpen ? 'Open' : 'Open'}
            </button>
            <!-- Lock — icon only, car centre -->
            <button class="ctrl-zone ctrl-lock"
              @click=${() => this._svc('lock', isLocked ? 'unlock' : 'lock', this.E.DOOR_LOCK)}>
              <span class="icon">${unsafeHTML(isLocked ? ICONS.lock : ICONS.unlock)}</span>
            </button>
            <!-- Trunk — text only, bottom centre -->
            <button class="ctrl-zone ctrl-trunk"
              @click=${() => this._activate(this.E.OPEN_TRUNK)}>
              ${trunkOpen ? 'Close' : 'Open'}
            </button>
            <!-- Charge port — icon only, bottom left -->
            <button class="ctrl-zone ctrl-port ${chargerDoorOpen ? 'port-open' : ''}"
              @click=${() => this._openClose(this.E.CHARGE_PORT_OPEN, this.E.CHARGE_PORT_CLOSE, chargerDoorOpen)}>
              <span class="icon">${unsafeHTML(ICONS['charge-bolt'])}</span>
            </button>
          `}
        </div>
        <div class="ctrl-actions">
          <button class="ctrl-action-btn"
            @click=${() => this._svc('button', 'press', this.E.FLASH_LIGHTS)}>
            <span class="icon">${unsafeHTML(ICONS['flash-lights'])}</span>
            <span>Flash</span>
          </button>
          <button class="ctrl-action-btn"
            @click=${() => this._svc('button', 'press', this.E.HORN)}>
            <span class="icon">${unsafeHTML(ICONS.horn)}</span>
            <span>Horn</span>
          </button>
          <button class="ctrl-action-btn"
            @click=${() => this._svc('button', 'press', this.E.REMOTE_START)}>
            <span class="icon">${unsafeHTML(ICONS['remote-start'])}</span>
            <span>Start</span>
          </button>
          <button class="ctrl-action-btn"
            @click=${() => this._svc('cover', windowsOpen ? 'close_cover' : 'open_cover', this.E.WINDOWS_COVER)}>
            <span class="icon">${unsafeHTML(windowsOpen ? ICONS['vent-close'] : ICONS['vent-open'])}</span>
            <span>${windowsOpen ? 'Close' : 'Vent'}</span>
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define('tesla-menu-controls', TeslaMenuControls);

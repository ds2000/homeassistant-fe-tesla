import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { TeslaBase } from './tesla-base.js';

import { sharedStyles, controlsStyles } from './styles.js';
import { ICONS } from './icons.js';

class TeslaMenuControls extends TeslaBase {

  static get styles() { return [sharedStyles, controlsStyles]; }

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

    return html`
      <div class="controls-menu${this.layout === 'landscape' ? ' landscape' : ''}">
        <div class="panel-header">
          <button class="panel-back" @click=${this._close}>
            <span class="icon">${unsafeHTML(ICONS['chevron-left'])}</span>
          </button>
          <span class="panel-title">Controls</span>
        </div>
        <div class="ctrl-car-area">
          <img class="ctrl-car-bg"
            src="${this._imgUrl(bgFile)}"
            alt="Car top view" />
          ${this._hasCustomOverlay ? html`
            <div style="${this._customOverlayStyleFor(bgFile)}"></div>` : ''}
          <!-- Frunk — text only, top centre (open only, must be closed physically) -->
          <button class="ctrl-zone ctrl-frunk"
            @click=${() => this._svc('cover', 'open_cover', this.E.FRUNK_COVER)}
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
            @click=${() => this._svc('cover', trunkOpen ? 'close_cover' : 'open_cover', this.E.OPEN_TRUNK)}>
            ${trunkOpen ? 'Close' : 'Open'}
          </button>
          <!-- Charge port — icon only, bottom left -->
          <button class="ctrl-zone ctrl-port ${chargerDoorOpen ? 'port-open' : ''}"
            @click=${() => this._openClose(this.E.CHARGE_PORT_OPEN, this.E.CHARGE_PORT_CLOSE, chargerDoorOpen)}>
            <span class="icon">${unsafeHTML(ICONS['charge-bolt'])}</span>
          </button>
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

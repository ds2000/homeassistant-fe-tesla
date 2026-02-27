import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { TeslaBase } from './tesla-base.js';
import { ENTITIES } from './entity-config.js';
import { sharedStyles, controlsStyles } from './styles.js';
import { ICONS } from './icons.js';

class TeslaMenuControls extends TeslaBase {

  static get styles() { return [sharedStyles, controlsStyles]; }

  render() {
    if (!this.config || !this.hass) return html``;

    const lockState     = this._val(ENTITIES.DOOR_LOCK);
    const isLocked      = lockState === 'locked';

    const frunkOpen     = this._val(ENTITIES.FRUNK_COVER) === 'open'
                       || this._val(ENTITIES.FRUNK)        === 'on';
    const trunkOpen     = this._val(ENTITIES.TRUNK) === 'on';

    const chargerDoorOpen = this._val(ENTITIES.CHARGER_DOOR) === 'open'
                         || this._val(ENTITIES.PLUGGED_IN)    === 'on';

    const windowsOpen   = this._val(ENTITIES.WINDOWS_COVER) === 'open';

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
            src="${this._imgUrl('controls-bg.png')}"
            alt="Car top view" />
          ${this._hasCustomOverlay ? html`
            <div style="${this._customOverlayStyleFor('controls-bg.png')}"></div>` : ''}
          <!-- Frunk — text only, top centre -->
          <button class="ctrl-zone ctrl-frunk"
            @click=${() => this._svc('cover', 'toggle_cover', ENTITIES.FRUNK_COVER)}>
            ${frunkOpen ? 'Close' : 'Open'}
          </button>
          <!-- Lock — icon only, car centre -->
          <button class="ctrl-zone ctrl-lock"
            @click=${() => this._svc('lock', isLocked ? 'unlock' : 'lock', ENTITIES.DOOR_LOCK)}>
            <span class="icon">${unsafeHTML(isLocked ? ICONS.lock : ICONS.unlock)}</span>
          </button>
          <!-- Trunk — text only, bottom centre -->
          <button class="ctrl-zone ctrl-trunk"
            @click=${() => this._svc('button', 'press', ENTITIES.OPEN_TRUNK)}>
            ${trunkOpen ? 'Close' : 'Open'}
          </button>
          <!-- Charge port — icon only, bottom left -->
          <button class="ctrl-zone ctrl-port ${chargerDoorOpen ? 'port-open' : ''}"
            @click=${() => this._svc('button', 'press', chargerDoorOpen ? ENTITIES.CHARGE_PORT_CLOSE : ENTITIES.CHARGE_PORT_OPEN)}>
            <span class="icon">${unsafeHTML(ICONS['charge-bolt'])}</span>
          </button>
        </div>
        <div class="ctrl-actions">
          <button class="ctrl-action-btn"
            @click=${() => this._svc('button', 'press', ENTITIES.FLASH_LIGHTS)}>
            <span class="icon">${unsafeHTML(ICONS['flash-lights'])}</span>
            <span>Flash</span>
          </button>
          <button class="ctrl-action-btn"
            @click=${() => this._svc('button', 'press', ENTITIES.HORN)}>
            <span class="icon">${unsafeHTML(ICONS.horn)}</span>
            <span>Horn</span>
          </button>
          <button class="ctrl-action-btn"
            @click=${() => this._svc('button', 'press', ENTITIES.REMOTE_START)}>
            <span class="icon">${unsafeHTML(ICONS['remote-start'])}</span>
            <span>Start</span>
          </button>
          <button class="ctrl-action-btn"
            @click=${() => this._svc('cover', windowsOpen ? 'close_cover' : 'open_cover', ENTITIES.WINDOWS_COVER)}>
            <span class="icon">${unsafeHTML(windowsOpen ? ICONS['vent-close'] : ICONS['vent-open'])}</span>
            <span>${windowsOpen ? 'Close' : 'Vent'}</span>
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define('tesla-menu-controls', TeslaMenuControls);

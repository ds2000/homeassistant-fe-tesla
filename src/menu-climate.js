import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { TeslaBase } from './tesla-base.js';
import { ENTITIES } from './entity-config.js';
import { sharedStyles, climateStyles } from './styles.js';
import { ICONS } from './icons.js';

class TeslaMenuClimate extends TeslaBase {

  static get properties() {
    return {
      ...super.properties,
      _pendingTemp:  { state: true },
      _climExpanded: { state: true },
    };
  }

  static get styles() { return [sharedStyles, climateStyles]; }

  constructor() {
    super();
    this._pendingTemp  = null;
    this._climExpanded = false;
  }

  // ── Temperature ───────────────────────────────────────────────────────────

  _adjustTemp(delta) {
    const step = Number(this._attr(ENTITIES.CLIMATE, 'target_temp_step') ?? 0.5);
    const min  = Number(this._attr(ENTITIES.CLIMATE, 'min_temp') ?? 15);
    const max  = Number(this._attr(ENTITIES.CLIMATE, 'max_temp') ?? 28);
    const cur  = this._pendingTemp ?? (this._attr(ENTITIES.CLIMATE, 'temperature') != null
      ? Number(this._attr(ENTITIES.CLIMATE, 'temperature')) : 22);
    this._pendingTemp = Math.max(min, Math.min(max, Math.round((cur + delta * step) / step) * step));
    clearTimeout(this._tempTimer);
    this._tempTimer = setTimeout(() => {
      this._svc('climate', 'set_temperature', ENTITIES.CLIMATE, { temperature: this._pendingTemp });
      this._pendingTemp = null;
    }, 800);
  }

  // ── Seat heat image — maps level to the correct SVG file ─────────────────

  _seatHeatFile(level) {
    if (!level || level === 'Off') return 'Tesla_Heated_Seat_Off.svg';
    const n = parseInt(level);
    if (!isNaN(n) && n >= 1 && n <= 3) return `Tesla_Heated_Seat_${n}.svg`;
    if (level === 'Low')    return 'Tesla_Heated_Seat_1.svg';
    if (level === 'Medium') return 'Tesla_Heated_Seat_2.svg';
    if (level === 'High')   return 'Tesla_Heated_Seat_3.svg';
    return 'Tesla_Heated_Seat_Off.svg';
  }

  // ── Close override — also reset expanded state ────────────────────────────

  _close() {
    this._climExpanded = false;
    super._close();
  }

  // ── Render ────────────────────────────────────────────────────────────────

  render() {
    if (!this.config || !this.hass) return html``;

    const climState     = this._val(ENTITIES.CLIMATE);
    const climOn        = climState != null && climState !== 'off' && climState !== 'unavailable';
    const tgtTempRaw    = this._attr(ENTITIES.CLIMATE, 'temperature');
    const tgtTemp       = tgtTempRaw != null ? Number(tgtTempRaw) : null;
    const dispTemp      = this._pendingTemp ?? tgtTemp;
    const tempUnit      = this._attr(ENTITIES.CLIMATE, 'temperature_unit') ?? '°C';
    const tempStr       = dispTemp != null ? dispTemp.toFixed(1) : '—';

    const isDefrost     = this._val(ENTITIES.DEFROST_SWITCH) === 'on';

    const leftSeat      = this._val(ENTITIES.HEATED_SEAT_LEFT);
    const rightSeat     = this._val(ENTITIES.HEATED_SEAT_RIGHT);
    const rearLeftSeat  = this._val(ENTITIES.HEATED_SEAT_REAR_LEFT);
    const rearCtrSeat   = this._val(ENTITIES.HEATED_SEAT_REAR_CENTER);
    const rearRightSeat = this._val(ENTITIES.HEATED_SEAT_REAR_RIGHT);

    const tempInRaw  = this._val(ENTITIES.TEMPERATURE_INSIDE);
    const tempInU    = this._attr(ENTITIES.TEMPERATURE_INSIDE, 'unit_of_measurement') ?? '°C';
    const tempIn     = tempInRaw != null ? `${Math.round(Number(tempInRaw))}${tempInU}` : null;
    const tempOutRaw = this._val(ENTITIES.TEMPERATURE_OUTSIDE);
    const tempOutU   = this._attr(ENTITIES.TEMPERATURE_OUTSIDE, 'unit_of_measurement') ?? '°C';
    const tempOut    = tempOutRaw != null ? `${Math.round(Number(tempOutRaw))}${tempOutU}` : null;

    const windowsOpen   = this._val(ENTITIES.WINDOWS_COVER) === 'open';
    const campMode      = this._val(ENTITIES.CAMP_MODE)  === 'on';
    const dogMode       = this._val(ENTITIES.DOG_MODE)   === 'on';
    const cabinOverheat = this._val(ENTITIES.CABIN_OVERHEAT) ?? 'Off';

    return html`
      <div class="climate-menu${this.layout === 'landscape' ? ' landscape' : ''}">

        <!-- Car area: outer clips, inner sizes to image, seats overlay image -->
        <div class="clim-car-area${this._climExpanded ? ' clim-car-collapsed' : ''}">
          <div class="clim-car-inner">
            <img class="clim-car-bg"
              src="${this._imgUrl('climate-bg.png')}"
              alt="Car interior view" />
            ${this._hasCustomOverlay ? html`
              <div style="${this._customOverlayStyleFor('climate-bg.png')}"></div>` : ''}

            <!-- Front seats -->
            <button class="clim-seat-zone clim-seat-fl"
              @click=${() => this._svc('select', 'select_next', ENTITIES.HEATED_SEAT_LEFT, { cycle: true })}>
              <img class="btn-img" src="${this._btnUrl(this._seatHeatFile(leftSeat ?? 'Off'))}" alt="" />
              <span class="clim-seat-label">${leftSeat ?? 'Off'}</span>
            </button>
            <button class="clim-seat-zone clim-seat-fr"
              @click=${() => this._svc('select', 'select_next', ENTITIES.HEATED_SEAT_RIGHT, { cycle: true })}>
              <img class="btn-img" src="${this._btnUrl(this._seatHeatFile(rightSeat ?? 'Off'))}" alt="" />
              <span class="clim-seat-label">${rightSeat ?? 'Off'}</span>
            </button>
            <!-- Rear seats -->
            <button class="clim-seat-zone clim-seat-rl"
              @click=${() => this._svc('select', 'select_next', ENTITIES.HEATED_SEAT_REAR_LEFT, { cycle: true })}>
              <img class="btn-img" src="${this._btnUrl(this._seatHeatFile(rearLeftSeat ?? 'Off'))}" alt="" />
              <span class="clim-seat-label">${rearLeftSeat ?? 'Off'}</span>
            </button>
            <button class="clim-seat-zone clim-seat-rc"
              @click=${() => this._svc('select', 'select_next', ENTITIES.HEATED_SEAT_REAR_CENTER, { cycle: true })}>
              <img class="btn-img" src="${this._btnUrl(this._seatHeatFile(rearCtrSeat ?? 'Off'))}" alt="" />
              <span class="clim-seat-label">${rearCtrSeat ?? 'Off'}</span>
            </button>
            <button class="clim-seat-zone clim-seat-rr"
              @click=${() => this._svc('select', 'select_next', ENTITIES.HEATED_SEAT_REAR_RIGHT, { cycle: true })}>
              <img class="btn-img" src="${this._btnUrl(this._seatHeatFile(rearRightSeat ?? 'Off'))}" alt="" />
              <span class="clim-seat-label">${rearRightSeat ?? 'Off'}</span>
            </button>
          </div>

          <!-- Floating back button (positioned in outer container) -->
          <button class="clim-back-btn" @click=${this._close}>
            <span class="icon">${unsafeHTML(ICONS['chevron-left'])}</span>
          </button>
        </div>

        <!-- Bottom sheet — drag-handle reveals extra controls -->
        <div class="clim-sheet${this._climExpanded ? ' expanded' : ''}">

          <!-- Drag handle pill — tap to expand/collapse -->
          <button class="clim-handle"
            @click=${() => { this._climExpanded = !this._climExpanded; }}>
            <span class="clim-handle-pill"></span>
          </button>

          <!-- Interior · Exterior temps -->
          ${(tempIn || tempOut) ? html`
            <div class="clim-temp-info">
              ${tempIn  ? html`Interior ${tempIn}`  : ''}
              ${tempIn && tempOut ? ' · ' : ''}
              ${tempOut ? html`Exterior ${tempOut}` : ''}
            </div>` : ''}

          <!-- Main control row: [Power/Off] [← 20.0° →] [Vent] -->
          <div class="clim-main-row">
            <button class="clim-icon-btn${climOn ? ' clim-active' : ''}"
              @click=${() => this._svc('climate', climOn ? 'turn_off' : 'turn_on', ENTITIES.CLIMATE)}>
              <span class="icon">${unsafeHTML(ICONS.power)}</span>
              <span>${climOn ? 'On' : 'Off'}</span>
            </button>

            <div class="clim-temp-control">
              <button class="clim-arrow-btn" @click=${() => this._adjustTemp(-1)}>
                <span class="icon">${unsafeHTML(ICONS['chevron-left'])}</span>
              </button>
              <span class="clim-temp-value">${tempStr}°</span>
              <button class="clim-arrow-btn" @click=${() => this._adjustTemp(+1)}>
                <span class="icon">${unsafeHTML(ICONS['chevron-right'])}</span>
              </button>
            </div>

            <button class="clim-icon-btn${windowsOpen ? ' clim-active' : ''}"
              @click=${() => this._svc('cover', windowsOpen ? 'close_cover' : 'open_cover', ENTITIES.WINDOWS_COVER)}>
              <span class="icon">${unsafeHTML(windowsOpen ? ICONS['vent-close'] : ICONS['vent-open'])}</span>
              <span>${windowsOpen ? 'Close' : 'Vent'}</span>
            </button>
          </div>

          <!-- Always-visible: Defrost Car -->
          <button class="clim-full-btn${isDefrost ? ' active' : ''}"
            @click=${() => this._svc('switch', isDefrost ? 'turn_off' : 'turn_on', ENTITIES.DEFROST_SWITCH)}>
            <span class="icon">${unsafeHTML(ICONS.defrost)}</span>
            <span>Defrost Car</span>
          </button>

          <!-- Expanded section — Camp Mode / Dog Mode + Cabin Overheat Protection -->
          <div class="clim-expanded-content">

            <!-- Camp Mode + Dog Mode in one grouped container -->
            <div class="clim-list-group">
              <button class="clim-list-item${campMode ? ' hot' : ''}"
                @click=${() => this._svc('switch', campMode ? 'turn_off' : 'turn_on', ENTITIES.CAMP_MODE)}>
                <span class="icon clim-list-icon">${unsafeHTML(ICONS.tent)}</span>
                <span class="clim-list-label">Camp Mode</span>
              </button>
              <button class="clim-list-item${dogMode ? ' hot' : ''}"
                @click=${() => this._svc('switch', dogMode ? 'turn_off' : 'turn_on', ENTITIES.DOG_MODE)}>
                <span class="icon clim-list-icon">${unsafeHTML(ICONS.dog)}</span>
                <span class="clim-list-label">Dog Mode</span>
              </button>
            </div>

            <!-- Separator line -->
            <div class="clim-separator"></div>

            <!-- Cabin Overheat Protection -->
            <div class="clim-section-title">Cabin Overheat Protection</div>
            <div class="clim-list-group clim-segment-group clim-list-group--last">
              ${(['Off', 'No A/C', 'On']).map(opt => html`
                <button class="clim-segment-btn${cabinOverheat === opt ? ' selected' : ''}"
                  @click=${() => this._svc('select', 'select_option', ENTITIES.CABIN_OVERHEAT, { option: opt })}>
                  ${opt}
                </button>`)}
            </div>

          </div><!-- /clim-expanded-content -->

        </div><!-- /clim-sheet -->
      </div>
    `;
  }
}

customElements.define('tesla-menu-climate', TeslaMenuClimate);

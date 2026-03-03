import { LitElement, html, css } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { FACTORY_COLOURS } from './recolour.js';
import { ICONS } from './icons.js';

class TeslaColourPicker extends LitElement {

  static get properties() {
    return {
      selected:    { type: String },     // current colour dir name e.g. 'red_multi_coat' or 'custom'
      available:   { type: Array },      // dirs that have images e.g. ['neutral','red_multi_coat']
      showBack:    { type: Boolean },
      customH:     { type: Number },     // current custom hue (0-360)
      customS:     { type: Number },     // current custom saturation (0-100)
      slideFrom:   { type: String, reflect: true, attribute: 'slide-from' },
      _showCustom: { state: true },
      _hue:        { state: true },
      _sat:        { state: true },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        font-family: system-ui, -apple-system, sans-serif;
      }

      .picker-overlay {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.65);
        z-index: 10;
        display: flex;
        align-items: flex-end;
        justify-content: center;
      }

      .picker-panel {
        width: 100%;
        max-height: 100%;
        background: #1c1c1e;
        border-radius: 16px 16px 0 0;
        padding: 0 0 20px;
        animation: slideUp 0.25s ease-out;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }

      @keyframes slideUp {
        from { transform: translateY(100%); opacity: 0; }
        to   { transform: translateY(0); opacity: 1; }
      }

      @keyframes slideFromRight {
        from { transform: translateX(30%); opacity: 0; }
        to   { transform: translateX(0); opacity: 1; }
      }

      @keyframes slideFromLeft {
        from { transform: translateX(-30%); opacity: 0; }
        to   { transform: translateX(0); opacity: 1; }
      }

      :host([slide-from="right"]) .picker-panel {
        animation: slideFromRight 0.25s ease-out;
      }

      :host([slide-from="left"]) .picker-panel {
        animation: slideFromLeft 0.25s ease-out;
      }

      .picker-header {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        padding: 16px 20px 12px;
        border-bottom: 1px solid rgba(255,255,255,0.07);
      }

      .picker-title {
        font-size: 0.95em;
        font-weight: 600;
        color: #ffffff;
      }

      .picker-back {
        position: absolute;
        left: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        background: transparent;
        border: none;
        color: rgba(255,255,255,0.6);
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        transition: color 0.15s ease;
      }

      .picker-back:hover { color: rgba(255,255,255,0.9); }

      .picker-back .icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 22px;
        height: 22px;
      }

      .picker-back .icon svg { width: 100%; height: 100%; }

      .picker-close {
        position: absolute;
        right: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        background: rgba(255,255,255,0.08);
        border: none;
        border-radius: 50%;
        color: rgba(255,255,255,0.6);
        font-size: 1.1em;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        transition: background 0.15s ease;
      }

      .picker-close:hover { background: rgba(255,255,255,0.15); }

      /* ── Swatches ─────────────────────────────────── */

      .picker-swatches {
        display: flex;
        justify-content: center;
        gap: 12px;
        padding: 24px 16px 16px;
        flex-wrap: wrap;
      }

      .swatch-btn {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 4px;
        -webkit-tap-highlight-color: transparent;
      }

      .swatch-circle {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 2px solid transparent;
        position: relative;
        transition: border-color 0.15s ease, transform 0.15s ease;
        box-shadow: 0 2px 8px rgba(0,0,0,0.4);
      }

      .swatch-btn:hover .swatch-circle { transform: scale(1.1); }
      .swatch-circle.selected { border-color: #ffffff; }

      .swatch-name {
        font-size: 0.62em;
        color: rgba(255,255,255,0.45);
        max-width: 54px;
        text-align: center;
        line-height: 1.2;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      /* ── Rainbow gradient for custom swatch ─────── */

      .swatch-rainbow {
        background: conic-gradient(
          hsl(0,85%,55%), hsl(60,85%,55%), hsl(120,85%,55%),
          hsl(180,85%,55%), hsl(240,85%,55%), hsl(300,85%,55%), hsl(360,85%,55%)
        );
      }

      /* ── Unavailable state ──────────────────────────── */

      .swatch-btn.unavailable {
        pointer-events: none;
        cursor: default;
      }

      .swatch-btn.unavailable .swatch-circle {
        opacity: 0.25;
      }

      .swatch-btn.unavailable .swatch-circle::after {
        content: '';
        position: absolute;
        top: 50%;
        left: -3px;
        right: -3px;
        height: 2px;
        background: rgba(255,255,255,0.6);
        transform: rotate(-45deg);
        border-radius: 1px;
      }

      .swatch-btn.unavailable .swatch-name {
        text-decoration: line-through;
        opacity: 0.25;
      }

      /* ── Custom sliders ───────────────────────────── */

      .picker-custom {
        padding: 16px 24px 0;
      }

      .slider-label {
        display: block;
        font-size: 0.75em;
        font-weight: 500;
        color: rgba(255,255,255,0.4);
        margin-bottom: 8px;
        letter-spacing: 0.03em;
      }

      .slider-row {
        margin-bottom: 16px;
      }

      .hue-slider,
      .sat-slider {
        width: 100%;
        height: 8px;
        appearance: none;
        -webkit-appearance: none;
        border-radius: 4px;
        cursor: pointer;
        outline: none;
        display: block;
      }

      .hue-slider {
        background: linear-gradient(to right,
          hsl(0,100%,50%), hsl(30,100%,50%), hsl(60,100%,50%),
          hsl(90,100%,50%), hsl(120,100%,50%), hsl(150,100%,50%),
          hsl(180,100%,50%), hsl(210,100%,50%), hsl(240,100%,50%),
          hsl(270,100%,50%), hsl(300,100%,50%), hsl(330,100%,50%),
          hsl(360,100%,50%)
        );
      }

      .sat-slider {
        background: linear-gradient(to right,
          hsl(var(--picker-hue, 0), 0%, 50%),
          hsl(var(--picker-hue, 0), 100%, 50%)
        );
      }

      .hue-slider::-webkit-slider-thumb,
      .sat-slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #ffffff;
        cursor: pointer;
        box-shadow: 0 2px 6px rgba(0,0,0,0.5);
        border: 2px solid rgba(255,255,255,0.9);
      }

      .hue-slider::-moz-range-thumb,
      .sat-slider::-moz-range-thumb {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #ffffff;
        cursor: pointer;
        border: 2px solid rgba(255,255,255,0.9);
        box-shadow: 0 2px 6px rgba(0,0,0,0.5);
      }

      /* ── Reset link ────────────────────────────────── */

      .picker-reset {
        display: block;
        width: 100%;
        padding: 14px 0 0;
        background: transparent;
        border: none;
        color: rgba(255,255,255,0.35);
        font-family: inherit;
        font-size: 0.82em;
        cursor: pointer;
        text-align: center;
        -webkit-tap-highlight-color: transparent;
        transition: color 0.15s ease;
      }

      .picker-reset:hover { color: rgba(255,255,255,0.7); }
    `;
  }

  constructor() {
    super();
    this.selected = 'neutral';
    this.available = ['neutral'];
    this.showBack = false;
    this.customH = 0;
    this.customS = 80;
    this._showCustom = false;
    this._hue = 0;
    this._sat = 80;
  }

  willUpdate(changed) {
    if (changed.has('selected') || changed.has('customH') || changed.has('customS')) {
      if (this.selected === 'custom') {
        this._showCustom = true;
        this._hue = this.customH ?? 0;
        this._sat = this.customS ?? 80;
      }
    }
  }

  _selectColour(fc) {
    this._showCustom = false;
    this.dispatchEvent(new CustomEvent('colour-changed', {
      detail: { dir: fc.dir, name: fc.name },
      bubbles: true, composed: true,
    }));
    this._close();
  }

  _openCustom() {
    this._showCustom = true;
  }

  _onHueInput(e) {
    this._hue = Number(e.target.value);
    this._fireCustomChange();
  }

  _onSatInput(e) {
    this._sat = Number(e.target.value);
    this._fireCustomChange();
  }

  _fireCustomChange() {
    this.dispatchEvent(new CustomEvent('colour-changed', {
      detail: { dir: 'custom', name: 'Custom', h: this._hue, s: this._sat },
      bubbles: true, composed: true,
    }));
  }

  _reset() {
    this._showCustom = false;
    this.dispatchEvent(new CustomEvent('colour-changed', {
      detail: null,
      bubbles: true, composed: true,
    }));
    this._close();
  }

  _back() {
    this.dispatchEvent(new CustomEvent('picker-back', {
      bubbles: true, composed: true,
    }));
  }

  _close() {
    this.dispatchEvent(new CustomEvent('picker-close', {
      bubbles: true, composed: true,
    }));
  }

  _onOverlayClick(e) {
    if (e.target === e.currentTarget) this._close();
  }

  render() {
    const avail = this.available ?? ['neutral'];
    const isCustom = this.selected === 'custom';

    return html`
      <div class="picker-overlay" @click=${this._onOverlayClick}>
        <div class="picker-panel">

          <div class="picker-header">
            ${this.showBack ? html`
              <button class="picker-back" @click=${this._back}>
                <span class="icon">${unsafeHTML(ICONS['chevron-left'])}</span>
              </button>` : ''}
            <span class="picker-title">Colour</span>
            <button class="picker-close" @click=${this._close}>&times;</button>
          </div>

          <div class="picker-swatches">
            ${FACTORY_COLOURS.map(fc => {
              const isAvail = avail.includes(fc.dir);
              const isSel = this.selected === fc.dir;
              return html`
                <button
                  class="swatch-btn${isAvail ? '' : ' unavailable'}"
                  @click=${isAvail ? () => this._selectColour(fc) : null}>
                  <div class="swatch-circle${isSel ? ' selected' : ''}"
                    style="background:${fc.swatch}"></div>
                  <span class="swatch-name">${fc.name}</span>
                </button>`;
            })}
            <button class="swatch-btn" @click=${() => this._openCustom()}>
              <div class="swatch-circle swatch-rainbow${isCustom ? ' selected' : ''}"></div>
              <span class="swatch-name">Custom</span>
            </button>
          </div>

          ${this._showCustom ? html`
            <div class="picker-custom" style="--picker-hue:${this._hue}">
              <div class="slider-row">
                <span class="slider-label">Hue</span>
                <input type="range" class="hue-slider" min="0" max="360"
                  .value=${String(this._hue)}
                  @input=${this._onHueInput} />
              </div>
              <div class="slider-row">
                <span class="slider-label">Saturation</span>
                <input type="range" class="sat-slider" min="0" max="100"
                  .value=${String(this._sat)}
                  @input=${this._onSatInput} />
              </div>
            </div>
          ` : ''}

          <button class="picker-reset" @click=${this._reset}>
            Reset to Default
          </button>

        </div>
      </div>
    `;
  }
}

customElements.define('tesla-colour-picker', TeslaColourPicker);

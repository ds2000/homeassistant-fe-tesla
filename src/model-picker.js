import { LitElement, html, css } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { TESLA_MODELS } from './models.js';
import { ICONS } from './icons.js';

class TeslaModelPicker extends LitElement {

  static get properties() {
    return {
      model:     { type: String },   // current model ID e.g. '3'
      variant:   { type: String },   // current variant ID e.g. '3.1'
      slideFrom: { type: String, reflect: true, attribute: 'slide-from' },
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
        flex-shrink: 0;
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
      .picker-back .icon { width: 22px; height: 22px; }

      .icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      .icon svg { width: 100%; height: 100%; }

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

      /* ── Model list ─────────────────────────── */

      .model-list {
        padding: 8px 0 0;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }

      .model-section {
        margin-bottom: 2px;
      }

      .model-section-title {
        font-size: 0.72em;
        font-weight: 600;
        color: rgba(255,255,255,0.3);
        text-transform: uppercase;
        letter-spacing: 0.06em;
        padding: 14px 20px 6px;
      }

      .model-group {
        margin: 0 16px;
        background: #2c2c2e;
        border-radius: 12px;
        overflow: hidden;
      }

      .model-item {
        display: flex;
        align-items: center;
        gap: 12px;
        width: 100%;
        padding: 14px 16px;
        background: transparent;
        border: none;
        border-bottom: 1px solid rgba(255,255,255,0.06);
        color: rgba(255,255,255,0.55);
        font-family: inherit;
        font-size: 0.92em;
        font-weight: 400;
        cursor: pointer;
        text-align: left;
        -webkit-tap-highlight-color: transparent;
        transition: background 0.12s ease;
      }

      .model-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        flex-shrink: 0;
        opacity: 0.45;
      }

      .model-icon .icon { width: 28px; height: 28px; }

      .model-item.selected .model-icon { opacity: 0.9; }

      .model-item:last-child { border-bottom: none; }
      .model-item:hover  { background: rgba(255,255,255,0.04); }
      .model-item:active { background: rgba(255,255,255,0.08); }

      .model-item.selected {
        color: #ffffff;
        font-weight: 500;
      }

      /* ── Unavailable state ─────────────────── */

      .model-item.unavailable {
        pointer-events: none;
        cursor: default;
        color: rgba(255,255,255,0.2);
      }

      .model-item.unavailable .model-label {
        text-decoration: line-through;
      }

      .model-item.unavailable:hover { background: transparent; }

      .model-label { flex: 1; }

      .model-check {
        width: 20px;
        height: 20px;
        color: #34c759;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .model-check .icon { width: 20px; height: 20px; }

      .model-no-images {
        font-size: 0.72em;
        color: rgba(255,255,255,0.2);
        font-style: italic;
        margin-left: 8px;
      }
    `;
  }

  _select(modelId, variantId) {
    this.dispatchEvent(new CustomEvent('model-changed', {
      detail: { model: modelId, variant: variantId },
      bubbles: true, composed: true,
    }));
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
    return html`
      <div class="picker-overlay" @click=${this._onOverlayClick}>
        <div class="picker-panel">
          <div class="picker-header">
            <button class="picker-back" @click=${this._back}>
              <span class="icon">${unsafeHTML(ICONS['chevron-left'])}</span>
            </button>
            <span class="picker-title">Model</span>
            <button class="picker-close" @click=${this._close}>&times;</button>
          </div>
          <div class="model-list">
            ${TESLA_MODELS.map(m => html`
              <div class="model-section">
                <div class="model-section-title">${m.name}</div>
                <div class="model-group">
                  ${m.variants.map(v => {
                    const sel = v.id === this.variant;
                    const hasImages = v.colours.length > 1 || v.colours[0] !== 'neutral';
                    const avail = hasImages || sel;
                    return html`
                      <button class="model-item${sel ? ' selected' : ''}${avail ? '' : ' unavailable'}"
                        @click=${avail ? () => this._select(m.id, v.id) : null}>
                        <span class="model-icon">
                          <span class="icon">${unsafeHTML(ICONS.car)}</span>
                        </span>
                        <span class="model-label">${v.label}</span>
                        ${!avail ? html`<span class="model-no-images">no images</span>` : ''}
                        ${sel ? html`
                          <span class="model-check">
                            <span class="icon">${unsafeHTML(ICONS.check)}</span>
                          </span>` : ''}
                      </button>`;
                  })}
                </div>
              </div>
            `)}
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('tesla-model-picker', TeslaModelPicker);

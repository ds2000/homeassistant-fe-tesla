import { LitElement, html, css } from 'lit';
import { TESLA_MODELS, getVariants } from './models.js';

export class TeslaCardEditor extends LitElement {
  static get properties() {
    return {
      hass: { type: Object },
      config: { type: Object },
    };
  }

  setConfig(config) {
    this.config = config;
  }

  _valueChanged(ev) {
    if (!this.config || !this.hass) return;
    const target = ev.target;
    const newConfig = { ...this.config, [target.name]: target.value };
    this.dispatchEvent(new CustomEvent('config-changed', { detail: { config: newConfig } }));
  }

  _modelChanged(ev) {
    if (!this.config || !this.hass) return;
    const modelId = ev.target.value;
    const variants = getVariants(modelId);
    const firstVariant = variants[0]?.id ?? '';
    const newConfig = { ...this.config, car_model: modelId, car_variant: firstVariant };
    this.dispatchEvent(new CustomEvent('config-changed', { detail: { config: newConfig } }));
  }

  render() {
    if (!this.config) return html``;

    const currentModel = this.config.car_model ?? '3';
    const variants = getVariants(currentModel);

    return html`
      <div class="editor">
        <label>
          Car Name (entity prefix) *
          <input
            name="car_name"
            .value=${this.config.car_name ?? ''}
            @change=${this._valueChanged}
            placeholder="e.g. my_tesla"
          />
        </label>
        <label>
          Model
          <select name="car_model" .value=${currentModel} @change=${this._modelChanged}>
            ${TESLA_MODELS.map(m => html`
              <option value="${m.id}" ?selected=${m.id === currentModel}>${m.name}</option>
            `)}
          </select>
        </label>
        <label>
          Variant
          <select name="car_variant" .value=${this.config.car_variant ?? ''} @change=${this._valueChanged}>
            ${variants.map(v => html`
              <option value="${v.id}" ?selected=${v.id === this.config.car_variant}>${v.label}</option>
            `)}
          </select>
        </label>
        <label>
          Image Path
          <input
            name="image_path"
            .value=${this.config.image_path ?? '/hacsfiles/homeassistant-fe-tesla'}
            @change=${this._valueChanged}
            placeholder="/hacsfiles/homeassistant-fe-tesla"
          />
        </label>
        <label>
          Display Name
          <input
            name="name"
            .value=${this.config.name ?? ''}
            @change=${this._valueChanged}
            placeholder="My Tesla"
          />
        </label>
      </div>
    `;
  }

  static get styles() {
    return css`
      .editor {
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 8px;
      }
      label {
        display: flex;
        flex-direction: column;
        gap: 4px;
        font-size: 0.9em;
        color: var(--primary-text-color);
      }
      input, select {
        padding: 6px 8px;
        border: 1px solid var(--divider-color, #ccc);
        border-radius: 4px;
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color, #000);
        font-size: 1em;
      }
    `;
  }
}

customElements.define('tesla-card-editor', TeslaCardEditor);

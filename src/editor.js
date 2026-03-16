import { LitElement, html, css } from 'lit';
import { TESLA_MODELS, getVariants } from './models.js';
import { ENTITY_GROUPS } from './entity-config.js';

// Ensure ha-entity-picker is loaded (HA lazy-loads it)
const loadEntityPicker = async () => {
  if (customElements.get('ha-entity-picker')) return;
  const helpers = await window.loadCardHelpers?.();
  if (helpers) {
    // Creating a dummy entities card forces HA to load the entity picker
    const el = await helpers.createCardElement({ type: 'entities', entities: [] });
    if (el) el.constructor;
  }
};

export class TeslaCardEditor extends LitElement {
  static get properties() {
    return {
      hass: { type: Object },
      config: { type: Object },
      _pickerLoaded: { state: true },
    };
  }

  constructor() {
    super();
    this._pickerLoaded = false;
  }

  async connectedCallback() {
    super.connectedCallback();
    await loadEntityPicker();
    this._pickerLoaded = true;
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

  _integrationChanged(ev) {
    if (!this.config || !this.hass) return;
    const newConfig = { ...this.config, integration: ev.target.value };
    // Set a default car_name for custom entities mode if empty
    if (ev.target.value === 'entities' && !newConfig.car_name) {
      newConfig.car_name = 'custom';
    }
    this.dispatchEvent(new CustomEvent('config-changed', { detail: { config: newConfig } }));
  }

  _entityOverrideChanged(key, ev) {
    if (!this.config || !this.hass) return;
    const value = ev.detail?.value ?? '';
    const overrides = { ...(this.config.entity_overrides ?? {}) };
    if (value) {
      overrides[key] = value;
    } else {
      delete overrides[key];
    }
    const newConfig = { ...this.config, entity_overrides: overrides };
    this.dispatchEvent(new CustomEvent('config-changed', { detail: { config: newConfig } }));
  }

  _overrideCount(group) {
    const overrides = this.config.entity_overrides ?? {};
    return group.keys.filter(k => overrides[k.key]).length;
  }

  render() {
    if (!this.config) return html``;

    const currentModel = this.config.car_model ?? '3';
    const variants = getVariants(currentModel);
    const integration = this.config.integration ?? 'fleet';
    const isCustomEntities = integration === 'entities';
    const overrides = this.config.entity_overrides ?? {};

    return html`
      <div class="editor">
        <label>
          Car Name (entity prefix)${isCustomEntities ? '' : ' *'}
          <input
            name="car_name"
            .value=${this.config.car_name ?? ''}
            @change=${this._valueChanged}
            placeholder=${isCustomEntities ? 'optional — used for storage keys' : 'e.g. my_tesla'}
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
          Integration
          <select name="integration" .value=${integration} @change=${(e) => this._integrationChanged(e)}>
            <option value="fleet" ?selected=${integration === 'fleet'}>Tesla Fleet (official)</option>
            <option value="custom" ?selected=${integration === 'custom'}>Tesla Custom (alandtse)</option>
            <option value="entities" ?selected=${integration === 'entities'}>Custom Entities</option>
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

        ${isCustomEntities ? html`
          <div class="entity-section-header">Entity Configuration</div>
          <div class="entity-hint">Map each function to an entity in your Home Assistant. Leave blank to skip.</div>
          <div class="entity-groups">
            ${ENTITY_GROUPS.map(group => {
              const count = this._overrideCount(group);
              const total = group.keys.length;
              return html`
                <details class="entity-group">
                  <summary class="entity-group-header">
                    <span class="entity-group-label">${group.label}</span>
                    <span class="entity-group-count${count > 0 ? ' has-overrides' : ''}">${count}/${total}</span>
                  </summary>
                  <div class="entity-group-body">
                    ${group.keys.map(k => html`
                      <div class="entity-row">
                        <span class="entity-row-label">${k.label}</span>
                        <ha-entity-picker
                          .hass=${this.hass}
                          .value=${overrides[k.key] ?? ''}
                          .label=${''}
                          .includeDomains=${[k.domain]}
                          allow-custom-entity
                          @value-changed=${(e) => this._entityOverrideChanged(k.key, e)}
                        ></ha-entity-picker>
                      </div>
                    `)}
                  </div>
                </details>
              `;
            })}
          </div>
        ` : ''}
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

      /* ── Custom entities section ────────────────────────── */

      .entity-section-header {
        font-size: 1em;
        font-weight: 600;
        color: var(--primary-text-color);
        margin-top: 8px;
        padding-bottom: 4px;
        border-bottom: 1px solid var(--divider-color, #ccc);
      }

      .entity-hint {
        font-size: 0.8em;
        color: var(--secondary-text-color, #888);
      }

      .entity-groups {
        display: flex;
        flex-direction: column;
        gap: 4px;
        max-height: 500px;
        overflow-y: auto;
      }

      .entity-group {
        border: 1px solid var(--divider-color, #ccc);
        border-radius: 6px;
        overflow: hidden;
      }

      .entity-group-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 12px;
        cursor: pointer;
        font-size: 0.9em;
        font-weight: 500;
        color: var(--primary-text-color);
        background: var(--card-background-color, #fff);
        user-select: none;
        list-style: none;
      }

      .entity-group-header::-webkit-details-marker { display: none; }

      .entity-group-header::before {
        content: '▸';
        margin-right: 8px;
        transition: transform 0.15s ease;
        font-size: 0.8em;
      }

      .entity-group[open] > .entity-group-header::before {
        transform: rotate(90deg);
      }

      .entity-group-count {
        font-size: 0.75em;
        color: var(--secondary-text-color, #888);
        background: var(--divider-color, #eee);
        padding: 1px 6px;
        border-radius: 8px;
      }

      .entity-group-count.has-overrides {
        background: var(--accent-color, #03a9f4);
        color: #fff;
      }

      .entity-group-body {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 8px 12px 12px;
        border-top: 1px solid var(--divider-color, #ccc);
      }

      .entity-row {
        display: flex;
        flex-direction: column;
        gap: 2px;
      }

      .entity-row-label {
        font-size: 0.8em;
        color: var(--secondary-text-color, #888);
      }

      .entity-row ha-entity-picker {
        width: 100%;
      }
    `;
  }
}

customElements.define('tesla-card-editor', TeslaCardEditor);

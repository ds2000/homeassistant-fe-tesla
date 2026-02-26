import { LitElement } from 'lit';
import { entityId } from './entity-config.js';
import { getModelSource } from './models.js';

/**
 * Shared base class for tesla-card submenu components.
 * Provides entity helpers and a close-menu dispatcher.
 */
export class TeslaBase extends LitElement {

  static get properties() {
    return {
      hass:      { type: Object },
      config:    { type: Object },
      carColour: { type: Object },  // { h, s, name, filter? } | null
    };
  }

  // ── Entity helpers ──────────────────────────────────────────────────────────

  _eid(t)      { return entityId(t, this.config.car_name); }
  _state(t)    { return this.hass?.states[this._eid(t)]; }
  _val(t)      { return this._state(t)?.state; }
  _attr(t, a)  { return this._state(t)?.attributes?.[a]; }
  _nattr(t, a) { const v = this._attr(t, a); return v != null ? Number(v) : null; }

  // ── Image URL builder ─────────────────────────────────────────────────────

  _imgUrl(f) {
    const { image_path, car_model, car_variant, car_color } = this.config;
    return `${image_path}/${car_model}/${car_variant}/${car_color}/${f}`;
  }

  /** Panel background images — always neutral, never colour-tinted. */
  _bgUrl(f) {
    const { image_path, car_model, car_variant } = this.config;
    return `${image_path}/${car_model}/${car_variant}/neutral/${f}`;
  }

  /** Body mask URL for a given image filename: base.png → base-mask.png */
  _maskUrl(f) {
    const maskName = f.replace(/\.(png|jpg)$/i, '-mask.png');
    const { image_path, car_model, car_variant } = this.config;
    return `${image_path}/${car_model}/${car_variant}/neutral/${maskName}`;
  }

  /** Coloured source image URL (e.g. red/base.png or white/base.png). Null if no source. */
  _sourceUrl(f) {
    const source = getModelSource(this.config.car_model, this.config.car_variant);
    if (!source) return null;
    const { image_path, car_model, car_variant } = this.config;
    return `${image_path}/${car_model}/${car_variant}/${source}/${f}`;
  }

  /** True when the current carColour needs a visible overlay. */
  get _hasOverlay() {
    const c = this.carColour;
    return !!c && (c.s > 0 || !!(c.blend && c.bg) || !!c.filter);
  }

  /**
   * CSS style string for the colour overlay div.
   *
   * Two rendering paths:
   *   1. Source available + filter: background-image with CSS filter (hue-rotate preserves depth)
   *   2. No source: flat CSS background with mix-blend-mode (current fallback)
   */
  _overlayStyle(f) {
    const c = this.carColour;
    if (!c) return '';
    const m = this._maskUrl(f);
    const mask = `-webkit-mask-image:url(${m});mask-image:url(${m});`;
    const src = this._sourceUrl(f);

    // Path 1: hue-rotate on coloured source image
    if (src && c.filter) {
      return `background-image:url(${src});filter:${c.filter};${mask}`;
    }

    // Path 2: flat overlay fallback
    if (c.s > 0) {
      return `background:hsl(${c.h},${c.s}%,50%);mix-blend-mode:color;${mask}`;
    }
    if (c.blend && c.bg) {
      return `background:${c.bg};mix-blend-mode:${c.blend};${mask}`;
    }
    return '';
  }

  // ── Service call ────────────────────────────────────────────────────────────

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

  // ── Close menu ──────────────────────────────────────────────────────────────

  _close() {
    this.dispatchEvent(new CustomEvent('close-menu', { bubbles: true, composed: true }));
  }
}

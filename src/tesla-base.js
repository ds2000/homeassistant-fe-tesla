import { LitElement } from 'lit';
import { entityId } from './entity-config.js';

/**
 * Shared base class for tesla-card submenu components.
 * Provides entity helpers and a close-menu dispatcher.
 */
export class TeslaBase extends LitElement {

  static _imgVer = Date.now();

  static get properties() {
    return {
      hass:         { type: Object },
      config:       { type: Object },
      customColour: { type: Object },  // { h, s } | null — for custom CSS overlay
      layout:       { type: String },  // 'portrait' | 'landscape'
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
    return `${image_path}/${car_model}/${car_variant}/${car_color}/${f}?v=${TeslaBase._imgVer}`;
  }

  // ── Button image URL builder ──────────────────────────────────────────────

  _btnUrl(f) {
    return `${this.config.image_path}/buttons/${f}?v=${TeslaBase._imgVer}`;
  }

  // ── Mask URL — always from neutral directory ─────────────────────────────

  _maskUrl(f) {
    const { image_path, car_model, car_variant } = this.config;
    const maskFile = f.replace('.png', '-mask.png');
    return `${image_path}/${car_model}/${car_variant}/neutral/${maskFile}?v=${TeslaBase._imgVer}`;
  }

  // ── Custom colour overlay style ───────────────────────────────────────────

  get _hasCustomOverlay() {
    return !!this.customColour && this.customColour.s > 0;
  }

  _customOverlayStyleFor(imageFile) {
    const c = this.customColour;
    if (!c || c.s === 0) return '';
    const mask = this._maskUrl(imageFile);
    return `position:absolute;inset:0;pointer-events:none;`
      + `background:hsl(${c.h},${c.s}%,50%);mix-blend-mode:color;`
      + `-webkit-mask-image:url(${mask});mask-image:url(${mask});`
      + `-webkit-mask-size:contain;mask-size:contain;`
      + `-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;`
      + `-webkit-mask-position:center;mask-position:center;`;
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

import { LitElement } from 'lit';
import { resolveEntityId, getEntities, FLEET_LOCALE_ALTS } from './entity-config.js';

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
      tyreUnit:     { type: String },  // 'psi' | 'bar'
    };
  }

  // ── Entity map (integration-aware) ─────────────────────────────────────────

  get E() { return getEntities(this.config?.integration); }

  // ── Entity helpers ──────────────────────────────────────────────────────────

  _eid(t) {
    const id = resolveEntityId(t, this.config.car_name, this.config.entity_overrides);
    if (id && !this.hass?.states[id] && FLEET_LOCALE_ALTS[t]) {
      const alt = resolveEntityId(FLEET_LOCALE_ALTS[t], this.config.car_name, this.config.entity_overrides);
      if (alt && this.hass?.states[alt]) return alt;
    }
    return id;
  }
  _state(t)    { const id = this._eid(t); return id ? this.hass?.states[id] : undefined; }
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
    // Ensure h/s are safe integers before interpolating into CSS
    const h = Math.round(Number(c.h) || 0);
    const s = Math.round(Number(c.s) || 0);
    if (s === 0) return '';
    const mask = this._maskUrl(imageFile);
    return `position:absolute;inset:0;pointer-events:none;`
      + `background:hsl(${h},${s}%,50%);mix-blend-mode:color;`
      + `-webkit-mask-image:url(${mask});mask-image:url(${mask});`
      + `-webkit-mask-size:contain;mask-size:contain;`
      + `-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;`
      + `-webkit-mask-position:center;mask-position:center;`;
  }

  // ── Domain helper ──────────────────────────────────────────────────────────

  _domainOf(t) { return t ? t.split('.')[0] : null; }

  /** Press a button or open a cover — picks the right service per domain */
  _activate(entityTpl) {
    const d = this._domainOf(entityTpl);
    if (d === 'cover') {
      const isOpen = this._val(entityTpl) === 'open';
      return this._svc('cover', isOpen ? 'close_cover' : 'open_cover', entityTpl);
    }
    return this._svc(d, 'press', entityTpl);
  }

  /** Open/close — works with both cover entities and separate button entities */
  _openClose(openTpl, closeTpl, isOpen) {
    const tpl = isOpen ? closeTpl : openTpl;
    const d = this._domainOf(tpl);
    if (d === 'cover') return this._svc('cover', isOpen ? 'close_cover' : 'open_cover', tpl);
    return this._svc(d, 'press', tpl);
  }

  // ── Service call ────────────────────────────────────────────────────────────

  async _svc(domain, service, entityTpl, extra = {}) {
    if (!entityTpl) return;
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

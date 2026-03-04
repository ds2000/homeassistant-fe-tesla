var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// node_modules/@lit/reactive-element/css-tag.js
var t = globalThis;
var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var s = Symbol();
var o = /* @__PURE__ */ new WeakMap();
var n = class {
  constructor(t4, e6, o6) {
    if (this._$cssResult$ = true, o6 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t4, this.t = e6;
  }
  get styleSheet() {
    let t4 = this.o;
    const s4 = this.t;
    if (e && void 0 === t4) {
      const e6 = void 0 !== s4 && 1 === s4.length;
      e6 && (t4 = o.get(s4)), void 0 === t4 && ((this.o = t4 = new CSSStyleSheet()).replaceSync(this.cssText), e6 && o.set(s4, t4));
    }
    return t4;
  }
  toString() {
    return this.cssText;
  }
};
var r = (t4) => new n("string" == typeof t4 ? t4 : t4 + "", void 0, s);
var i = (t4, ...e6) => {
  const o6 = 1 === t4.length ? t4[0] : e6.reduce((e7, s4, o7) => e7 + ((t5) => {
    if (true === t5._$cssResult$) return t5.cssText;
    if ("number" == typeof t5) return t5;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t5 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s4) + t4[o7 + 1], t4[0]);
  return new n(o6, t4, s);
};
var S = (s4, o6) => {
  if (e) s4.adoptedStyleSheets = o6.map((t4) => t4 instanceof CSSStyleSheet ? t4 : t4.styleSheet);
  else for (const e6 of o6) {
    const o7 = document.createElement("style"), n4 = t.litNonce;
    void 0 !== n4 && o7.setAttribute("nonce", n4), o7.textContent = e6.cssText, s4.appendChild(o7);
  }
};
var c = e ? (t4) => t4 : (t4) => t4 instanceof CSSStyleSheet ? ((t5) => {
  let e6 = "";
  for (const s4 of t5.cssRules) e6 += s4.cssText;
  return r(e6);
})(t4) : t4;

// node_modules/@lit/reactive-element/reactive-element.js
var { is: i2, defineProperty: e2, getOwnPropertyDescriptor: h, getOwnPropertyNames: r2, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object;
var a = globalThis;
var c2 = a.trustedTypes;
var l = c2 ? c2.emptyScript : "";
var p = a.reactiveElementPolyfillSupport;
var d = (t4, s4) => t4;
var u = { toAttribute(t4, s4) {
  switch (s4) {
    case Boolean:
      t4 = t4 ? l : null;
      break;
    case Object:
    case Array:
      t4 = null == t4 ? t4 : JSON.stringify(t4);
  }
  return t4;
}, fromAttribute(t4, s4) {
  let i6 = t4;
  switch (s4) {
    case Boolean:
      i6 = null !== t4;
      break;
    case Number:
      i6 = null === t4 ? null : Number(t4);
      break;
    case Object:
    case Array:
      try {
        i6 = JSON.parse(t4);
      } catch (t5) {
        i6 = null;
      }
  }
  return i6;
} };
var f = (t4, s4) => !i2(t4, s4);
var b = { attribute: true, type: String, converter: u, reflect: false, useDefault: false, hasChanged: f };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), a.litPropertyMetadata ?? (a.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
var y = class extends HTMLElement {
  static addInitializer(t4) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t4);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t4, s4 = b) {
    if (s4.state && (s4.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t4) && ((s4 = Object.create(s4)).wrapped = true), this.elementProperties.set(t4, s4), !s4.noAccessor) {
      const i6 = Symbol(), h3 = this.getPropertyDescriptor(t4, i6, s4);
      void 0 !== h3 && e2(this.prototype, t4, h3);
    }
  }
  static getPropertyDescriptor(t4, s4, i6) {
    const { get: e6, set: r4 } = h(this.prototype, t4) ?? { get() {
      return this[s4];
    }, set(t5) {
      this[s4] = t5;
    } };
    return { get: e6, set(s5) {
      const h3 = e6?.call(this);
      r4?.call(this, s5), this.requestUpdate(t4, h3, i6);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t4) {
    return this.elementProperties.get(t4) ?? b;
  }
  static _$Ei() {
    if (this.hasOwnProperty(d("elementProperties"))) return;
    const t4 = n2(this);
    t4.finalize(), void 0 !== t4.l && (this.l = [...t4.l]), this.elementProperties = new Map(t4.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(d("finalized"))) return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
      const t5 = this.properties, s4 = [...r2(t5), ...o2(t5)];
      for (const i6 of s4) this.createProperty(i6, t5[i6]);
    }
    const t4 = this[Symbol.metadata];
    if (null !== t4) {
      const s4 = litPropertyMetadata.get(t4);
      if (void 0 !== s4) for (const [t5, i6] of s4) this.elementProperties.set(t5, i6);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t5, s4] of this.elementProperties) {
      const i6 = this._$Eu(t5, s4);
      void 0 !== i6 && this._$Eh.set(i6, t5);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(s4) {
    const i6 = [];
    if (Array.isArray(s4)) {
      const e6 = new Set(s4.flat(1 / 0).reverse());
      for (const s5 of e6) i6.unshift(c(s5));
    } else void 0 !== s4 && i6.push(c(s4));
    return i6;
  }
  static _$Eu(t4, s4) {
    const i6 = s4.attribute;
    return false === i6 ? void 0 : "string" == typeof i6 ? i6 : "string" == typeof t4 ? t4.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((t4) => this.enableUpdating = t4), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t4) => t4(this));
  }
  addController(t4) {
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t4), void 0 !== this.renderRoot && this.isConnected && t4.hostConnected?.();
  }
  removeController(t4) {
    this._$EO?.delete(t4);
  }
  _$E_() {
    const t4 = /* @__PURE__ */ new Map(), s4 = this.constructor.elementProperties;
    for (const i6 of s4.keys()) this.hasOwnProperty(i6) && (t4.set(i6, this[i6]), delete this[i6]);
    t4.size > 0 && (this._$Ep = t4);
  }
  createRenderRoot() {
    const t4 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return S(t4, this.constructor.elementStyles), t4;
  }
  connectedCallback() {
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), this._$EO?.forEach((t4) => t4.hostConnected?.());
  }
  enableUpdating(t4) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t4) => t4.hostDisconnected?.());
  }
  attributeChangedCallback(t4, s4, i6) {
    this._$AK(t4, i6);
  }
  _$ET(t4, s4) {
    const i6 = this.constructor.elementProperties.get(t4), e6 = this.constructor._$Eu(t4, i6);
    if (void 0 !== e6 && true === i6.reflect) {
      const h3 = (void 0 !== i6.converter?.toAttribute ? i6.converter : u).toAttribute(s4, i6.type);
      this._$Em = t4, null == h3 ? this.removeAttribute(e6) : this.setAttribute(e6, h3), this._$Em = null;
    }
  }
  _$AK(t4, s4) {
    const i6 = this.constructor, e6 = i6._$Eh.get(t4);
    if (void 0 !== e6 && this._$Em !== e6) {
      const t5 = i6.getPropertyOptions(e6), h3 = "function" == typeof t5.converter ? { fromAttribute: t5.converter } : void 0 !== t5.converter?.fromAttribute ? t5.converter : u;
      this._$Em = e6;
      const r4 = h3.fromAttribute(s4, t5.type);
      this[e6] = r4 ?? this._$Ej?.get(e6) ?? r4, this._$Em = null;
    }
  }
  requestUpdate(t4, s4, i6, e6 = false, h3) {
    if (void 0 !== t4) {
      const r4 = this.constructor;
      if (false === e6 && (h3 = this[t4]), i6 ?? (i6 = r4.getPropertyOptions(t4)), !((i6.hasChanged ?? f)(h3, s4) || i6.useDefault && i6.reflect && h3 === this._$Ej?.get(t4) && !this.hasAttribute(r4._$Eu(t4, i6)))) return;
      this.C(t4, s4, i6);
    }
    false === this.isUpdatePending && (this._$ES = this._$EP());
  }
  C(t4, s4, { useDefault: i6, reflect: e6, wrapped: h3 }, r4) {
    i6 && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t4) && (this._$Ej.set(t4, r4 ?? s4 ?? this[t4]), true !== h3 || void 0 !== r4) || (this._$AL.has(t4) || (this.hasUpdated || i6 || (s4 = void 0), this._$AL.set(t4, s4)), true === e6 && this._$Em !== t4 && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t4));
  }
  async _$EP() {
    this.isUpdatePending = true;
    try {
      await this._$ES;
    } catch (t5) {
      Promise.reject(t5);
    }
    const t4 = this.scheduleUpdate();
    return null != t4 && await t4, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [t6, s5] of this._$Ep) this[t6] = s5;
        this._$Ep = void 0;
      }
      const t5 = this.constructor.elementProperties;
      if (t5.size > 0) for (const [s5, i6] of t5) {
        const { wrapped: t6 } = i6, e6 = this[s5];
        true !== t6 || this._$AL.has(s5) || void 0 === e6 || this.C(s5, void 0, i6, e6);
      }
    }
    let t4 = false;
    const s4 = this._$AL;
    try {
      t4 = this.shouldUpdate(s4), t4 ? (this.willUpdate(s4), this._$EO?.forEach((t5) => t5.hostUpdate?.()), this.update(s4)) : this._$EM();
    } catch (s5) {
      throw t4 = false, this._$EM(), s5;
    }
    t4 && this._$AE(s4);
  }
  willUpdate(t4) {
  }
  _$AE(t4) {
    this._$EO?.forEach((t5) => t5.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t4)), this.updated(t4);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t4) {
    return true;
  }
  update(t4) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((t5) => this._$ET(t5, this[t5]))), this._$EM();
  }
  updated(t4) {
  }
  firstUpdated(t4) {
  }
};
y.elementStyles = [], y.shadowRootOptions = { mode: "open" }, y[d("elementProperties")] = /* @__PURE__ */ new Map(), y[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: y }), (a.reactiveElementVersions ?? (a.reactiveElementVersions = [])).push("2.1.2");

// node_modules/lit-html/lit-html.js
var t2 = globalThis;
var i3 = (t4) => t4;
var s2 = t2.trustedTypes;
var e3 = s2 ? s2.createPolicy("lit-html", { createHTML: (t4) => t4 }) : void 0;
var h2 = "$lit$";
var o3 = `lit$${Math.random().toFixed(9).slice(2)}$`;
var n3 = "?" + o3;
var r3 = `<${n3}>`;
var l2 = document;
var c3 = () => l2.createComment("");
var a2 = (t4) => null === t4 || "object" != typeof t4 && "function" != typeof t4;
var u2 = Array.isArray;
var d2 = (t4) => u2(t4) || "function" == typeof t4?.[Symbol.iterator];
var f2 = "[ 	\n\f\r]";
var v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var _ = /-->/g;
var m = />/g;
var p2 = RegExp(`>|${f2}(?:([^\\s"'>=/]+)(${f2}*=${f2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
var g = /'/g;
var $ = /"/g;
var y2 = /^(?:script|style|textarea|title)$/i;
var x = (t4) => (i6, ...s4) => ({ _$litType$: t4, strings: i6, values: s4 });
var b2 = x(1);
var w = x(2);
var T = x(3);
var E = Symbol.for("lit-noChange");
var A = Symbol.for("lit-nothing");
var C = /* @__PURE__ */ new WeakMap();
var P = l2.createTreeWalker(l2, 129);
function V(t4, i6) {
  if (!u2(t4) || !t4.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== e3 ? e3.createHTML(i6) : i6;
}
var N = (t4, i6) => {
  const s4 = t4.length - 1, e6 = [];
  let n4, l3 = 2 === i6 ? "<svg>" : 3 === i6 ? "<math>" : "", c4 = v;
  for (let i7 = 0; i7 < s4; i7++) {
    const s5 = t4[i7];
    let a3, u3, d3 = -1, f3 = 0;
    for (; f3 < s5.length && (c4.lastIndex = f3, u3 = c4.exec(s5), null !== u3); ) f3 = c4.lastIndex, c4 === v ? "!--" === u3[1] ? c4 = _ : void 0 !== u3[1] ? c4 = m : void 0 !== u3[2] ? (y2.test(u3[2]) && (n4 = RegExp("</" + u3[2], "g")), c4 = p2) : void 0 !== u3[3] && (c4 = p2) : c4 === p2 ? ">" === u3[0] ? (c4 = n4 ?? v, d3 = -1) : void 0 === u3[1] ? d3 = -2 : (d3 = c4.lastIndex - u3[2].length, a3 = u3[1], c4 = void 0 === u3[3] ? p2 : '"' === u3[3] ? $ : g) : c4 === $ || c4 === g ? c4 = p2 : c4 === _ || c4 === m ? c4 = v : (c4 = p2, n4 = void 0);
    const x2 = c4 === p2 && t4[i7 + 1].startsWith("/>") ? " " : "";
    l3 += c4 === v ? s5 + r3 : d3 >= 0 ? (e6.push(a3), s5.slice(0, d3) + h2 + s5.slice(d3) + o3 + x2) : s5 + o3 + (-2 === d3 ? i7 : x2);
  }
  return [V(t4, l3 + (t4[s4] || "<?>") + (2 === i6 ? "</svg>" : 3 === i6 ? "</math>" : "")), e6];
};
var S2 = class _S {
  constructor({ strings: t4, _$litType$: i6 }, e6) {
    let r4;
    this.parts = [];
    let l3 = 0, a3 = 0;
    const u3 = t4.length - 1, d3 = this.parts, [f3, v2] = N(t4, i6);
    if (this.el = _S.createElement(f3, e6), P.currentNode = this.el.content, 2 === i6 || 3 === i6) {
      const t5 = this.el.content.firstChild;
      t5.replaceWith(...t5.childNodes);
    }
    for (; null !== (r4 = P.nextNode()) && d3.length < u3; ) {
      if (1 === r4.nodeType) {
        if (r4.hasAttributes()) for (const t5 of r4.getAttributeNames()) if (t5.endsWith(h2)) {
          const i7 = v2[a3++], s4 = r4.getAttribute(t5).split(o3), e7 = /([.?@])?(.*)/.exec(i7);
          d3.push({ type: 1, index: l3, name: e7[2], strings: s4, ctor: "." === e7[1] ? I : "?" === e7[1] ? L : "@" === e7[1] ? z : H }), r4.removeAttribute(t5);
        } else t5.startsWith(o3) && (d3.push({ type: 6, index: l3 }), r4.removeAttribute(t5));
        if (y2.test(r4.tagName)) {
          const t5 = r4.textContent.split(o3), i7 = t5.length - 1;
          if (i7 > 0) {
            r4.textContent = s2 ? s2.emptyScript : "";
            for (let s4 = 0; s4 < i7; s4++) r4.append(t5[s4], c3()), P.nextNode(), d3.push({ type: 2, index: ++l3 });
            r4.append(t5[i7], c3());
          }
        }
      } else if (8 === r4.nodeType) if (r4.data === n3) d3.push({ type: 2, index: l3 });
      else {
        let t5 = -1;
        for (; -1 !== (t5 = r4.data.indexOf(o3, t5 + 1)); ) d3.push({ type: 7, index: l3 }), t5 += o3.length - 1;
      }
      l3++;
    }
  }
  static createElement(t4, i6) {
    const s4 = l2.createElement("template");
    return s4.innerHTML = t4, s4;
  }
};
function M(t4, i6, s4 = t4, e6) {
  if (i6 === E) return i6;
  let h3 = void 0 !== e6 ? s4._$Co?.[e6] : s4._$Cl;
  const o6 = a2(i6) ? void 0 : i6._$litDirective$;
  return h3?.constructor !== o6 && (h3?._$AO?.(false), void 0 === o6 ? h3 = void 0 : (h3 = new o6(t4), h3._$AT(t4, s4, e6)), void 0 !== e6 ? (s4._$Co ?? (s4._$Co = []))[e6] = h3 : s4._$Cl = h3), void 0 !== h3 && (i6 = M(t4, h3._$AS(t4, i6.values), h3, e6)), i6;
}
var R = class {
  constructor(t4, i6) {
    this._$AV = [], this._$AN = void 0, this._$AD = t4, this._$AM = i6;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t4) {
    const { el: { content: i6 }, parts: s4 } = this._$AD, e6 = (t4?.creationScope ?? l2).importNode(i6, true);
    P.currentNode = e6;
    let h3 = P.nextNode(), o6 = 0, n4 = 0, r4 = s4[0];
    for (; void 0 !== r4; ) {
      if (o6 === r4.index) {
        let i7;
        2 === r4.type ? i7 = new k(h3, h3.nextSibling, this, t4) : 1 === r4.type ? i7 = new r4.ctor(h3, r4.name, r4.strings, this, t4) : 6 === r4.type && (i7 = new Z(h3, this, t4)), this._$AV.push(i7), r4 = s4[++n4];
      }
      o6 !== r4?.index && (h3 = P.nextNode(), o6++);
    }
    return P.currentNode = l2, e6;
  }
  p(t4) {
    let i6 = 0;
    for (const s4 of this._$AV) void 0 !== s4 && (void 0 !== s4.strings ? (s4._$AI(t4, s4, i6), i6 += s4.strings.length - 2) : s4._$AI(t4[i6])), i6++;
  }
};
var k = class _k {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t4, i6, s4, e6) {
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t4, this._$AB = i6, this._$AM = s4, this.options = e6, this._$Cv = e6?.isConnected ?? true;
  }
  get parentNode() {
    let t4 = this._$AA.parentNode;
    const i6 = this._$AM;
    return void 0 !== i6 && 11 === t4?.nodeType && (t4 = i6.parentNode), t4;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t4, i6 = this) {
    t4 = M(this, t4, i6), a2(t4) ? t4 === A || null == t4 || "" === t4 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t4 !== this._$AH && t4 !== E && this._(t4) : void 0 !== t4._$litType$ ? this.$(t4) : void 0 !== t4.nodeType ? this.T(t4) : d2(t4) ? this.k(t4) : this._(t4);
  }
  O(t4) {
    return this._$AA.parentNode.insertBefore(t4, this._$AB);
  }
  T(t4) {
    this._$AH !== t4 && (this._$AR(), this._$AH = this.O(t4));
  }
  _(t4) {
    this._$AH !== A && a2(this._$AH) ? this._$AA.nextSibling.data = t4 : this.T(l2.createTextNode(t4)), this._$AH = t4;
  }
  $(t4) {
    const { values: i6, _$litType$: s4 } = t4, e6 = "number" == typeof s4 ? this._$AC(t4) : (void 0 === s4.el && (s4.el = S2.createElement(V(s4.h, s4.h[0]), this.options)), s4);
    if (this._$AH?._$AD === e6) this._$AH.p(i6);
    else {
      const t5 = new R(e6, this), s5 = t5.u(this.options);
      t5.p(i6), this.T(s5), this._$AH = t5;
    }
  }
  _$AC(t4) {
    let i6 = C.get(t4.strings);
    return void 0 === i6 && C.set(t4.strings, i6 = new S2(t4)), i6;
  }
  k(t4) {
    u2(this._$AH) || (this._$AH = [], this._$AR());
    const i6 = this._$AH;
    let s4, e6 = 0;
    for (const h3 of t4) e6 === i6.length ? i6.push(s4 = new _k(this.O(c3()), this.O(c3()), this, this.options)) : s4 = i6[e6], s4._$AI(h3), e6++;
    e6 < i6.length && (this._$AR(s4 && s4._$AB.nextSibling, e6), i6.length = e6);
  }
  _$AR(t4 = this._$AA.nextSibling, s4) {
    for (this._$AP?.(false, true, s4); t4 !== this._$AB; ) {
      const s5 = i3(t4).nextSibling;
      i3(t4).remove(), t4 = s5;
    }
  }
  setConnected(t4) {
    void 0 === this._$AM && (this._$Cv = t4, this._$AP?.(t4));
  }
};
var H = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t4, i6, s4, e6, h3) {
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t4, this.name = i6, this._$AM = e6, this.options = h3, s4.length > 2 || "" !== s4[0] || "" !== s4[1] ? (this._$AH = Array(s4.length - 1).fill(new String()), this.strings = s4) : this._$AH = A;
  }
  _$AI(t4, i6 = this, s4, e6) {
    const h3 = this.strings;
    let o6 = false;
    if (void 0 === h3) t4 = M(this, t4, i6, 0), o6 = !a2(t4) || t4 !== this._$AH && t4 !== E, o6 && (this._$AH = t4);
    else {
      const e7 = t4;
      let n4, r4;
      for (t4 = h3[0], n4 = 0; n4 < h3.length - 1; n4++) r4 = M(this, e7[s4 + n4], i6, n4), r4 === E && (r4 = this._$AH[n4]), o6 || (o6 = !a2(r4) || r4 !== this._$AH[n4]), r4 === A ? t4 = A : t4 !== A && (t4 += (r4 ?? "") + h3[n4 + 1]), this._$AH[n4] = r4;
    }
    o6 && !e6 && this.j(t4);
  }
  j(t4) {
    t4 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t4 ?? "");
  }
};
var I = class extends H {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t4) {
    this.element[this.name] = t4 === A ? void 0 : t4;
  }
};
var L = class extends H {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t4) {
    this.element.toggleAttribute(this.name, !!t4 && t4 !== A);
  }
};
var z = class extends H {
  constructor(t4, i6, s4, e6, h3) {
    super(t4, i6, s4, e6, h3), this.type = 5;
  }
  _$AI(t4, i6 = this) {
    if ((t4 = M(this, t4, i6, 0) ?? A) === E) return;
    const s4 = this._$AH, e6 = t4 === A && s4 !== A || t4.capture !== s4.capture || t4.once !== s4.once || t4.passive !== s4.passive, h3 = t4 !== A && (s4 === A || e6);
    e6 && this.element.removeEventListener(this.name, this, s4), h3 && this.element.addEventListener(this.name, this, t4), this._$AH = t4;
  }
  handleEvent(t4) {
    "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t4) : this._$AH.handleEvent(t4);
  }
};
var Z = class {
  constructor(t4, i6, s4) {
    this.element = t4, this.type = 6, this._$AN = void 0, this._$AM = i6, this.options = s4;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t4) {
    M(this, t4);
  }
};
var B = t2.litHtmlPolyfillSupport;
B?.(S2, k), (t2.litHtmlVersions ?? (t2.litHtmlVersions = [])).push("3.3.2");
var D = (t4, i6, s4) => {
  const e6 = s4?.renderBefore ?? i6;
  let h3 = e6._$litPart$;
  if (void 0 === h3) {
    const t5 = s4?.renderBefore ?? null;
    e6._$litPart$ = h3 = new k(i6.insertBefore(c3(), t5), t5, void 0, s4 ?? {});
  }
  return h3._$AI(t4), h3;
};

// node_modules/lit-element/lit-element.js
var s3 = globalThis;
var i4 = class extends y {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var _a;
    const t4 = super.createRenderRoot();
    return (_a = this.renderOptions).renderBefore ?? (_a.renderBefore = t4.firstChild), t4;
  }
  update(t4) {
    const r4 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t4), this._$Do = D(r4, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(true);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(false);
  }
  render() {
    return E;
  }
};
i4._$litElement$ = true, i4["finalized"] = true, s3.litElementHydrateSupport?.({ LitElement: i4 });
var o4 = s3.litElementPolyfillSupport;
o4?.({ LitElement: i4 });
(s3.litElementVersions ?? (s3.litElementVersions = [])).push("4.2.2");

// node_modules/lit-html/directive.js
var t3 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
var e4 = (t4) => (...e6) => ({ _$litDirective$: t4, values: e6 });
var i5 = class {
  constructor(t4) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t4, e6, i6) {
    this._$Ct = t4, this._$AM = e6, this._$Ci = i6;
  }
  _$AS(t4, e6) {
    return this.update(t4, e6);
  }
  update(t4, e6) {
    return this.render(...e6);
  }
};

// node_modules/lit-html/directives/unsafe-html.js
var e5 = class extends i5 {
  constructor(i6) {
    if (super(i6), this.it = A, i6.type !== t3.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(r4) {
    if (r4 === A || null == r4) return this._t = void 0, this.it = r4;
    if (r4 === E) return r4;
    if ("string" != typeof r4) throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (r4 === this.it) return this._t;
    this.it = r4;
    const s4 = [r4];
    return s4.raw = s4, this._t = { _$litType$: this.constructor.resultType, strings: s4, values: [] };
  }
};
e5.directiveName = "unsafeHTML", e5.resultType = 1;
var o5 = e4(e5);

// src/styles.js
var sharedStyles = i`
  :host {
    display: block;
    font-family: 'Gotham', 'Gill Sans', 'Century Gothic', system-ui, -apple-system, sans-serif;
  }

  [hidden] { display: none !important; }

  /* Base icon — inline SVG container */
  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    pointer-events: none;
    transition: filter 0.15s ease;
  }

  .icon svg {
    width: 100%;
    height: 100%;
  }

  /* SVG button images (loaded via <img>) */
  .btn-img {
    transition: filter 0.15s ease;
  }

  /* Unified hover glow for all icon buttons */
  button:hover > .btn-img,
  button:hover > .icon {
    filter: drop-shadow(0 0 6px rgba(255,255,255,0.4));
  }

  /* Active / lit-up state for stateful icons */
  .icon-on { color: #ffffff; }

  /* ── Submenu panel enter animation ──────────────────────── */

  @keyframes panelSlideUp {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .controls-menu,
  .climate-menu,
  .charger-menu {
    animation: panelSlideUp 0.25s ease-out both;
  }

  /* ── Panel header (back chevron + centred title) ──────────── */

  .panel-header {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 14px 20px 12px;
    border-bottom: 1px solid rgba(255,255,255,0.07);
  }

  .panel-back {
    position: absolute;
    left: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    background: transparent;
    border: none;
    color: rgba(255,255,255,0.65);
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: color 0.15s ease;
  }

  .panel-back:hover {
    color: #ffffff;
  }

  .panel-back .icon {
    width: 26px;
    height: 26px;
  }

  .panel-title {
    font-size: 0.95em;
    font-weight: 600;
    color: #ffffff;
    letter-spacing: 0.01em;
  }

  /* Title + subtitle stack (used in charging panel header) */
  .panel-title-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
  }

  .panel-subtitle {
    font-size: 0.78em;
    font-weight: 400;
    color: rgba(255,255,255,0.4);
  }
`;
var chargerStyles = i`
  .charger-menu {
    display: flex;
    flex-direction: column;
    padding: 0;
  }

  /* Main card: charge limit + slider + amps stepper */
  .chg-card {
    margin: 16px 16px 0;
    background: #161719;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 14px;
    padding: 18px 18px 0;
    overflow: hidden;
  }

  .chg-limit-header { margin-bottom: 14px; }

  .chg-limit-title {
    display: block;
    font-size: 0.9em;
    font-weight: 700;
    color: #ffffff;
  }

  .chg-limit-sub {
    font-size: 0.78em;
    color: rgba(255,255,255,0.38);
    margin: 4px 0 0;
  }

  /* Green pill slider for charge limit */
  .chg-slider {
    width: 100%;
    height: 6px;
    appearance: none;
    -webkit-appearance: none;
    border-radius: 3px;
    cursor: pointer;
    outline: none;
    display: block;
    margin-bottom: 18px;
    background: linear-gradient(
      to right,
      #19d462 0%, #19d462 var(--pct, 80%),
      rgba(255,255,255,0.15) var(--pct, 80%), rgba(255,255,255,0.15) 100%
    );
  }

  .chg-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0,0,0,0.5);
    transition: transform 0.1s ease;
  }

  .chg-slider::-webkit-slider-thumb:active { transform: scale(1.15); }

  .chg-slider::-moz-range-thumb {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
    border: none;
    box-shadow: 0 2px 8px rgba(0,0,0,0.5);
  }

  /* Amps stepper row — darker band at bottom of card */
  .chg-amps-row {
    display: flex;
    align-items: center;
    margin: 0 -18px;
    border-top: 1px solid rgba(255,255,255,0.07);
    background: #1e1e20;
    padding: 2px 6px;
  }

  .chg-amps-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    color: rgba(255,255,255,0.5);
    cursor: pointer;
    padding: 12px 14px;
    border-radius: 6px;
    -webkit-tap-highlight-color: transparent;
    transition: color 0.15s ease;
  }

  .chg-amps-btn:hover  { color: rgba(255,255,255,0.9); }
  .chg-amps-btn:active { color: #ffffff; }
  .chg-amps-btn:disabled { opacity: 0.25; pointer-events: none; }

  .chg-amps-btn .icon {
    width: 20px;
    height: 20px;
  }

  .chg-amps-value {
    flex: 1;
    text-align: center;
    font-size: 0.88em;
    font-weight: 500;
    color: #ffffff;
  }

  /* Open Charge Port — plain centered text link */
  .chg-port-btn {
    display: block;
    width: 100%;
    padding: 16px;
    background: transparent;
    border: none;
    color: rgba(255,255,255,0.45);
    font-family: inherit;
    font-size: 0.88em;
    font-weight: 400;
    cursor: pointer;
    text-align: center;
    -webkit-tap-highlight-color: transparent;
    transition: color 0.15s ease;
  }

  .chg-port-btn:hover { color: rgba(255,255,255,0.85); }

`;
var climateStyles = i`
  .climate-menu {
    display: flex;
    flex-direction: column;
    padding: 0;
  }

  /* ── Car area — outer clips, inner sizes to image ─────────── */
  .clim-car-area {
    background: #161719;
    height: 500px;
    position: relative;
    overflow: hidden;
    transition: height 0.35s ease;
  }

  .clim-car-area.clim-car-collapsed {
    height: 260px;
  }

  /* Inner wrapper takes the image's natural size; seats are
     positioned as percentages of the image, so they always
     align regardless of how much the outer container clips. */
  .clim-car-inner {
    position: relative;
    width: 100%;
  }

  .clim-car-bg {
    width: 100%;
    height: auto;
    display: block;
    pointer-events: none;
  }

  /* ── Floating back button (overlaid on car image) ────────── */
  .clim-back-btn {
    position: absolute;
    top: 12px;
    left: 12px;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: transparent;
    border: none;
    color: rgba(255,255,255,0.65);
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: color 0.15s ease;
  }

  .clim-back-btn:hover {
    color: #ffffff;
  }

  .clim-back-btn .icon {
    width: 26px;
    height: 26px;
  }

  /* ── Seat heat tap zones ─────────────────────────────────── */
  .clim-seat-zone {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 8px 14px;
    border-radius: 10px;
    transform: translate(-50%, -50%);
    transition: background 0.15s ease;
    -webkit-tap-highlight-color: transparent;
  }

  .clim-seat-zone:hover  { background: rgba(255,255,255,0.06); }
  .clim-seat-zone:active { background: rgba(255,255,255,0.1); }

  .clim-seat-zone .icon {
    width: 29px;
    height: 29px;
  }

  .clim-seat-zone .btn-img {
    width: 29px;
    height: 29px;
    object-fit: contain;
    pointer-events: none;
  }

  .clim-seat-label {
    font-size: 0.65em;
    font-weight: 500;
    color: rgba(255,255,255,0.45);
    letter-spacing: 0.02em;
  }

  /* Seat positions — percentages of the image dimensions
     so they track the actual seats regardless of clip height.
     Based on Model 3 climate-bg.png (1100×1898). */
  .clim-seat-fl { top: 24%; left: 37%; }
  .clim-seat-fr { top: 24%; left: 66%; }
  .clim-seat-rl { top: 45%; left: 38%; }
  .clim-seat-rc { top: 45%; left: 52%; }
  .clim-seat-rr { top: 45%; left: 65%; }

  /* ── Bottom sheet ────────────────────────────────────────── */
  .clim-sheet {
    background: #161719;
    border-radius: 16px 16px 0 0;
    margin-top: -16px;
    position: relative;
    z-index: 1;
    padding-bottom: 4px;
  }

  /* Drag handle */
  .clim-handle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 14px 0 10px;
    background: transparent;
    border: none;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  .clim-handle-pill {
    width: 40px;
    height: 4px;
    background: rgba(255,255,255,0.18);
    border-radius: 2px;
    transition: background 0.15s ease;
  }

  .clim-handle:hover .clim-handle-pill { background: rgba(255,255,255,0.35); }

  /* Interior / Exterior temp info */
  .clim-temp-info {
    text-align: center;
    font-size: 0.82em;
    font-weight: 500;
    color: rgba(255,255,255,0.45);
    letter-spacing: 0.02em;
    padding: 0 20px 18px;
  }

  /* ── Main control row: [Power] [← Temp →] [Vent] ────────── */
  .clim-main-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px 22px;
  }

  .clim-icon-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    background: transparent;
    border: none;
    color: rgba(255,255,255,0.4);
    font-family: inherit;
    font-size: 0.72em;
    font-weight: 500;
    cursor: pointer;
    padding: 8px 10px;
    min-width: 56px;
    border-radius: 10px;
    transition: color 0.15s ease, background 0.15s ease;
    -webkit-tap-highlight-color: transparent;
  }

  .clim-icon-btn:hover  { color: rgba(255,255,255,0.8); background: rgba(255,255,255,0.05); }
  .clim-icon-btn.clim-active { color: #ffffff; }

  .clim-icon-btn .icon {
    width: 28px;
    height: 28px;
  }

  .clim-icon-btn .btn-img {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    object-fit: cover;
    pointer-events: none;
  }

  /* Temperature ← value → arrows */
  .clim-temp-control {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
    justify-content: center;
  }

  .clim-arrow-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    color: rgba(255,255,255,0.35);
    cursor: pointer;
    padding: 10px 8px;
    border-radius: 50%;
    transition: background 0.15s ease, color 0.15s ease;
    -webkit-tap-highlight-color: transparent;
  }

  .clim-arrow-btn:hover  { background: rgba(255,255,255,0.07); color: rgba(255,255,255,0.9); }
  .clim-arrow-btn:active { background: rgba(255,255,255,0.12); }

  .clim-arrow-btn .icon {
    width: 22px;
    height: 22px;
  }

  .clim-temp-value {
    font-size: 2.8em;
    font-weight: 300;
    color: #ffffff;
    letter-spacing: -0.02em;
    line-height: 1;
    min-width: 3ch;
    text-align: center;
  }

  /* ── Defrost Car — full-width outlined button ────────────── */
  .clim-full-btn {
    display: flex;
    align-items: center;
    gap: 14px;
    width: calc(100% - 32px);
    margin: 0 16px 10px;
    padding: 16px 18px;
    background: transparent;
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 12px;
    color: rgba(255,255,255,0.75);
    font-family: inherit;
    font-size: 0.9em;
    font-weight: 500;
    cursor: pointer;
    text-align: left;
    -webkit-tap-highlight-color: transparent;
    transition: background 0.15s ease, border-color 0.15s ease;
  }

  .clim-full-btn:hover { background: rgba(255,255,255,0.04); }

  .clim-full-btn.active {
    background: rgba(232,33,39,0.12);
    border-color: rgba(232,33,39,0.3);
    color: #ff7070;
  }

  .clim-full-btn .icon {
    width: 22px;
    height: 22px;
    color: rgba(255,255,255,0.45);
  }

  .clim-full-btn.active .icon { color: #e82127; }

  .clim-full-btn .btn-img-wide {
    height: 24px;
    object-fit: contain;
    pointer-events: none;
  }

  /* ── Expandable section ──────────────────────────────────── */
  .clim-expanded-content {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.35s ease;
  }

  .clim-sheet.expanded .clim-expanded-content {
    max-height: 520px;
  }

  /* List group */
  .clim-list-group {
    margin: 0 16px 10px;
    background: transparent;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px;
    overflow: hidden;
  }

  .clim-list-group--last { margin-bottom: 16px; }

  .clim-list-item {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 18px;
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(255,255,255,0.07);
    color: rgba(255,255,255,0.65);
    font-family: inherit;
    font-size: 0.88em;
    font-weight: 400;
    cursor: pointer;
    text-align: left;
    gap: 14px;
    -webkit-tap-highlight-color: transparent;
    transition: background 0.15s ease;
  }

  .clim-list-item:last-child { border-bottom: none; }
  .clim-list-item:hover  { background: rgba(255,255,255,0.04); }
  .clim-list-item:active { background: rgba(255,255,255,0.08); }

  .clim-list-item.hot { color: rgba(255,255,255,0.9); }

  .clim-list-icon {
    width: 22px;
    height: 22px;
    color: rgba(255,255,255,0.35);
  }

  .clim-list-item.hot .clim-list-icon { color: rgba(255,255,255,0.65); }

  .clim-list-label { flex: 1; }

  .clim-list-value {
    font-size: 0.85em;
    color: rgba(255,255,255,0.35);
  }

  .clim-list-item.hot .clim-list-value {
    color: rgba(255,255,255,0.7);
    font-weight: 600;
  }

  .clim-section-title {
    font-size: 0.9em;
    font-weight: 700;
    color: #ffffff;
    padding: 12px 16px 8px;
  }

  .clim-separator {
    height: 1px;
    background: rgba(255,255,255,0.1);
    margin: 8px 16px;
  }

  /* Segmented control */
  .clim-segment-group {
    display: flex;
    padding: 4px;
    gap: 2px;
  }

  .clim-segment-btn {
    flex: 1;
    padding: 14px 6px;
    background: transparent;
    border: none;
    color: rgba(255,255,255,0.35);
    font-family: inherit;
    font-size: 0.85em;
    font-weight: 500;
    cursor: pointer;
    text-align: center;
    border-radius: 9px;
    -webkit-tap-highlight-color: transparent;
    transition: background 0.15s ease, color 0.15s ease;
  }

  .clim-segment-btn:hover { color: rgba(255,255,255,0.65); }

  .clim-segment-btn.selected {
    background: rgba(255,255,255,0.08);
    color: rgba(255,255,255,0.9);
    font-weight: 600;
  }

  /* ── Landscape layout ─────────────────────────────────── */

  .climate-menu.landscape {
    flex-direction: row;
  }

  /* Car area: left side, height driven by image aspect ratio */
  .landscape .clim-car-area {
    flex: 0 0 50%;
    max-width: 50%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Ignore collapse in landscape — always show full car */
  .landscape .clim-car-area.clim-car-collapsed {
    height: auto;
  }

  .landscape .clim-car-inner {
    width: 100%;
    position: relative;
  }

  /* Right panel: no scrollbar, content flows naturally */
  .landscape .clim-sheet {
    flex: 1;
    margin-top: 0;
    border-radius: 0;
    overflow: visible;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-left: 1px solid rgba(255,255,255,0.06);
    padding-bottom: 8px;
  }

  /* Hide drag handle in landscape — not needed */
  .landscape .clim-handle {
    display: none;
  }

  /* Auto-expand the extra content in landscape */
  .landscape .clim-expanded-content {
    max-height: none;
  }

  /* Temp info: left-aligned, compact */
  .landscape .clim-temp-info {
    padding: 12px 16px 10px;
    text-align: left;
  }

  /* Main row: tighter for side panel */
  .landscape .clim-main-row {
    padding: 0 16px 12px;
  }

  /* Temperature value: scale down for narrower panel */
  .landscape .clim-temp-value {
    font-size: 2.2em;
  }

  /* Power/Vent buttons: tighter */
  .landscape .clim-icon-btn {
    padding: 6px 8px;
    min-width: 48px;
  }

  /* Defrost button: compact */
  .landscape .clim-full-btn {
    width: calc(100% - 28px);
    margin: 0 14px 6px;
    padding: 12px 14px;
  }

  /* List groups: compact margins */
  .landscape .clim-list-group {
    margin: 0 14px 6px;
  }

  .landscape .clim-list-item {
    padding: 12px 14px;
  }

  .landscape .clim-section-title {
    padding: 8px 14px 4px;
    font-size: 0.85em;
  }

  .landscape .clim-separator {
    margin: 4px 14px;
  }

  .landscape .clim-segment-group {
    padding: 3px;
  }

  .landscape .clim-segment-btn {
    padding: 10px 6px;
    font-size: 0.8em;
  }

`;
var controlsStyles = i`
  .controls-menu {
    display: flex;
    flex-direction: column;
    padding: 0;
  }

  /* Controls: car interaction area */
  .ctrl-car-area {
    position: relative;
    background: #161719;
    height: 400px;
    width: 100%;
    overflow: hidden;
  }

  .ctrl-car-bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    pointer-events: none;
    opacity: 0.85;
  }

  /* Tap zones — fully transparent, no borders */
  .ctrl-zone {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    color: rgba(255,255,255,0.75);
    font-family: inherit;
    font-size: 1.1em;
    font-weight: 400;
    letter-spacing: 0.02em;
    cursor: pointer;
    padding: 12px 24px;
    -webkit-tap-highlight-color: transparent;
    transition: color 0.15s ease;
    user-select: none;
  }

  .ctrl-zone:hover  { color: rgba(255,255,255,1); }
  .ctrl-zone:active { color: rgba(255,255,255,0.5); }

  /* Frunk: on the hood */
  .ctrl-frunk {
    top: 14%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  /* Lock: on glass roof — 50% (center) */
  .ctrl-lock {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgba(255,255,255,0.48);
    padding: 10px;
  }

  .ctrl-lock:hover { color: rgba(255,255,255,0.8); }

  .ctrl-lock .icon {
    width: 24px;
    height: 24px;
  }

  /* Trunk: rear deck */
  .ctrl-trunk {
    top: 78%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  /* Charge port: rear-left tail */
  .ctrl-port {
    top: 82%;
    left: 20%;
    transform: translate(-50%, -50%);
    padding: 8px 10px;
    color: rgba(255,255,255,0.28);
  }

  .ctrl-port:hover { color: rgba(255,255,255,0.6); }

  .ctrl-port .icon {
    width: 18px;
    height: 18px;
  }

  .ctrl-port.port-open { color: rgba(255,255,255,0.75); }

  /* Controls: bottom action bar */
  .ctrl-actions {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 16px 12px 20px;
    border-top: 1px solid rgba(255,255,255,0.05);
  }

  .ctrl-action-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    flex: 1;
    background: transparent;
    border: none;
    color: rgba(255,255,255,0.45);
    font-family: inherit;
    font-size: 0.7em;
    font-weight: 400;
    cursor: pointer;
    padding: 6px 4px;
    -webkit-tap-highlight-color: transparent;
    transition: color 0.15s ease;
  }

  .ctrl-action-btn:hover  { color: rgba(255,255,255,0.8); }
  .ctrl-action-btn:active { color: #ffffff; }

  .ctrl-action-btn .icon {
    width: 24px;
    height: 24px;
  }

  /* ── Landscape layout ─────────────────────────────────── */

  .controls-menu.landscape {
    flex-direction: row;
    flex-wrap: wrap;
  }

  /* Header spans full width */
  .landscape .panel-header {
    flex: 0 0 100%;
  }

  /* Car area: left side */
  .landscape .ctrl-car-area {
    flex: 0 0 55%;
    max-width: 55%;
    height: auto;
    min-height: 340px;
  }

  /* Action bar: right column, vertically centred */
  .landscape .ctrl-actions {
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    padding: 24px 20px;
    gap: 6px;
    border-top: none;
    border-left: 1px solid rgba(255,255,255,0.05);
  }

  /* Action buttons: horizontal row style in the vertical column */
  .landscape .ctrl-action-btn {
    flex-direction: row;
    gap: 14px;
    padding: 16px 20px;
    font-size: 0.82em;
    border-radius: 12px;
    transition: background 0.15s ease, color 0.15s ease;
  }

  .landscape .ctrl-action-btn:hover {
    background: rgba(255,255,255,0.04);
  }

  .landscape .ctrl-action-btn .icon {
    width: 22px;
    height: 22px;
  }


`;
var cardStyles = i`
  ha-card {
    display: block;
    background: var(--ha-card-background, #161719);
    color: #ffffff;
    overflow: hidden;
    position: relative;
    border-radius: 12px;
    padding: 0;
  }

  /* ── Staggered panel transitions ─────────────────────────── */

  @keyframes fadeSlideIn {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes chargePulse {
    0%, 100% { filter: brightness(1) drop-shadow(0 0 6px rgba(34, 197, 94, 0.3)) drop-shadow(0 0 12px rgba(34, 197, 94, 0.15)); }
    50%      { filter: brightness(1.5) drop-shadow(0 0 14px rgba(34, 197, 94, 0.9)) drop-shadow(0 0 28px rgba(34, 197, 94, 0.4)); }
  }

  .car-overlay.charging-glow {
    animation: chargePulse 2s ease-in-out infinite;
  }

  .header {
    animation: fadeSlideIn 0.25s ease-out both;
  }

  .car-image-area {
    animation: fadeSlideIn 0.3s ease-out 0.05s both;
  }

  .quick-actions {
    animation: fadeSlideIn 0.3s ease-out 0.1s both;
  }

  .nav-row:nth-child(1) { animation: fadeSlideIn 0.3s ease-out 0.12s both; }
  .nav-row:nth-child(2) { animation: fadeSlideIn 0.3s ease-out 0.16s both; }
  .nav-row:nth-child(3) { animation: fadeSlideIn 0.3s ease-out 0.20s both; }
  .nav-row:nth-child(4) { animation: fadeSlideIn 0.3s ease-out 0.24s both; }
  .nav-row:nth-child(5) { animation: fadeSlideIn 0.3s ease-out 0.28s both; }
  .nav-row:nth-child(6) { animation: fadeSlideIn 0.3s ease-out 0.32s both; }

  /* ── Header ──────────────────────────────────────────────── */

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 20px 20px 10px;
  }

  .header-left {
    display: flex;
    flex-direction: column;
  }

  .car-name-row {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .car-name {
    font-size: 1.55em;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: -0.01em;
    line-height: 1.1;
  }

  .name-chevron {
    width: 18px;
    height: 18px;
    color: rgba(255,255,255,0.35);
    margin-top: 2px;  /* optical alignment with large text */
  }

  .battery-summary {
    display: flex;
    align-items: center;
    gap: 7px;
    margin-top: 6px;
  }

  /* Small inline battery bar */
  .battery-bar-small {
    position: relative;
    width: 28px;
    height: 13px;
    border: 1.5px solid rgba(255,255,255,0.45);
    border-radius: 2px;
    overflow: hidden;
  }

  .battery-bar-small::after {
    content: '';
    position: absolute;
    right: -5px;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 6px;
    background: rgba(255,255,255,0.45);
    border-radius: 0 1px 1px 0;
  }

  .battery-fill-small {
    height: 100%;
    border-radius: 1px;
    transition: width 0.4s ease;
  }

  .battery-fill-small.high   { background: #ffffff; }
  .battery-fill-small.medium { background: #f39c12; }
  .battery-fill-small.low    { background: #e82127; }

  .range-text {
    font-size: 0.88em;
    font-weight: 500;
    color: rgba(255,255,255,0.8);
  }

  .status-text {
    font-size: 0.82em;
    color: rgba(255,255,255,0.38);
    margin-top: 3px;
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 6px;
    padding-top: 2px;
  }

  .icon-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: none;
    background: transparent;
    color: rgba(255,255,255,0.35);
    cursor: pointer;
    transition: color 0.15s ease;
    -webkit-tap-highlight-color: transparent;
  }

  .icon-btn:hover { color: rgba(255,255,255,0.8); }

  .icon-btn .icon {
    width: 20px;
    height: 20px;
  }

  /* ── Car image ───────────────────────────────────────────── */

  .car-image-area {
    position: relative;
    width: 100%;
    aspect-ratio: 417 / 262;
    background: #161719;
    overflow: hidden;
  }

  .car-image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    display: block;
  }

  .car-overlay {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    display: block;
    pointer-events: none;
  }

  .car-image-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 48px 0;
    color: rgba(255,255,255,0.18);
    font-size: 0.8em;
    width: 100%;
  }

  .car-image-placeholder .icon {
    width: 48px;
    height: 48px;
    color: rgba(255,255,255,0.12);
  }

  /* ── Quick action icon row ────────────────────────────────── */

  .quick-actions {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    padding: 16px 0 14px;
    background: #161719;
    border-bottom: 1px solid rgba(255,255,255,0.07);
  }

  .quick-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: none;
    background: transparent;
    color: rgba(255,255,255,0.4);
    cursor: pointer;
    transition: color 0.15s ease;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
  }

  .quick-btn:hover  { color: rgba(255,255,255,0.8); }
  .quick-btn:active { color: #ffffff; }

  .quick-btn.q-locked   { color: #ffffff; }    /* locked state */
  .quick-btn.q-unlocked { color: rgba(255,255,255,0.4); }
  .quick-btn.q-active   { color: #ffffff; }    /* on state (charging, climate) */

  .quick-btn .icon {
    width: 26px;
    height: 26px;
  }

  /* Official Tesla SVG button images in quick actions */
  .quick-btn .btn-img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
    pointer-events: none;
  }

  /* ── Nav rows ─────────────────────────────────────────────── */

  .nav-rows {
    display: flex;
    flex-direction: column;
  }

  .nav-row {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 18px 20px;
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    color: #ffffff;
    cursor: pointer;
    font-family: inherit;
    gap: 14px;
    text-align: left;
    transition: background 0.15s ease;
    -webkit-tap-highlight-color: transparent;
  }

  .nav-row:hover  { background: rgba(255,255,255,0.03); }
  .nav-row:hover .nav-icon { color: rgba(255,255,255,0.8); }
  .nav-row:last-child { border-bottom: none; }

  .nav-row:disabled {
    opacity: 1;
    pointer-events: none;
    cursor: default;
  }

  .nav-row.active {
    background: rgba(232,33,39,0.06);
  }

  .nav-icon {
    width: 22px;
    height: 22px;
    color: rgba(255,255,255,0.38);
    transition: color 0.15s ease;
  }

  .nav-row.active .nav-icon { color: #e82127; }

  /* Official Tesla SVG button images in nav rows */
  .nav-btn-img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
    pointer-events: none;
  }

  .nav-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .nav-label {
    font-size: 1em;
    font-weight: 600;
    color: #ffffff;
  }

  .nav-sublabel {
    font-size: 0.75em;
    color: rgba(255,255,255,0.38);
  }

  .nav-row.active .nav-sublabel { color: rgba(232,33,39,0.7); }

  .nav-chevron {
    width: 18px;
    height: 18px;
    color: rgba(255,255,255,0.2);
    transition: transform 0.2s ease, color 0.15s ease;
  }

  .nav-row.active .nav-chevron {
    transform: rotate(90deg);
    color: rgba(232,33,39,0.45);
  }

  /* ── State badges ────────────────────────────────────────── */

  .state-badge {
    display: inline-block;
    font-size: 0.68em;
    font-weight: 600;
    padding: 2px 8px;
    border-radius: 10px;
    letter-spacing: 0.03em;
    margin-top: 2px;
  }

  .state-badge.locked {
    color: #2ecc71;
    background: rgba(46,204,113,0.12);
    border: 1px solid rgba(46,204,113,0.25);
  }

  .state-badge.unlocked {
    color: #f39c12;
    background: rgba(243,156,18,0.12);
    border: 1px solid rgba(243,156,18,0.25);
  }

  /* ── Settings overlay ──────────────────────────────────────── */

  .settings-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.65);
    z-index: 10;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  .settings-panel {
    width: 100%;
    background: #161719;
    border-radius: 16px 16px 0 0;
    padding: 0 0 20px;
    animation: settingsSlideUp 0.2s ease-out;
  }

  @keyframes settingsSlideUp {
    from { transform: translateY(100%); }
    to   { transform: translateY(0); }
  }

  .settings-header {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 16px 20px 12px;
    border-bottom: 1px solid rgba(255,255,255,0.07);
  }

  .settings-title {
    font-size: 0.95em;
    font-weight: 600;
    color: #ffffff;
  }

  .settings-close {
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

  .settings-close:hover { background: rgba(255,255,255,0.15); }

  .settings-rows {
    padding: 8px 0;
  }

  .settings-row {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 20px;
    box-sizing: border-box;
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    color: #ffffff;
    cursor: pointer;
    font-family: inherit;
    gap: 14px;
    text-align: left;
    transition: background 0.15s ease;
    -webkit-tap-highlight-color: transparent;
  }

  .settings-row:last-child { border-bottom: none; }
  .settings-row:hover { background: rgba(255,255,255,0.03); }

  .settings-row:nth-child(1) { animation: fadeSlideIn 0.25s ease-out 0.1s both; }
  .settings-row:nth-child(2) { animation: fadeSlideIn 0.25s ease-out 0.16s both; }
  .settings-row:nth-child(3) { animation: fadeSlideIn 0.25s ease-out 0.22s both; }

  @keyframes fadeSlideIn {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .settings-row:active { background: rgba(255,255,255,0.06); }

  .settings-row-icon {
    width: 22px;
    height: 22px;
    color: rgba(255,255,255,0.45);
  }

  .settings-row-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .settings-row-label {
    font-size: 1em;
    font-weight: 600;
    color: #ffffff;
  }

  .settings-row-sub {
    font-size: 0.75em;
    color: rgba(255,255,255,0.38);
  }

  .settings-row-chevron {
    width: 18px;
    height: 18px;
    color: rgba(255,255,255,0.2);
  }

  /* ── Landing body (portrait = vertical stack, landscape = side-by-side) ── */

  .landing-body {
    display: flex;
    flex-direction: column;
  }

  .landing-left {
    display: flex;
    flex-direction: column;
  }

  /* ── Landscape layout ──────────────────────────────────── */

  ha-card.landscape {
    width: 150%;
    margin-left: -25%;
  }

  ha-card.landscape .landing-body {
    flex-direction: row;
  }

  ha-card.landscape .landing-left {
    flex: 0 0 55%;
    max-width: 55%;
    border-right: 1px solid rgba(255,255,255,0.06);
  }

  ha-card.landscape .car-image-area {
    aspect-ratio: auto;
    flex: 1;
    min-height: 200px;
  }

  ha-card.landscape .quick-actions {
    border-bottom: none;
    padding: 12px 0 10px;
    gap: 24px;
  }

  ha-card.landscape .nav-rows {
    flex: 1;
    overflow-y: auto;
  }

  ha-card.landscape .nav-row {
    padding: 14px 18px;
  }

  ha-card.landscape .nav-row .nav-label {
    font-size: 0.92em;
  }

  ha-card.landscape .nav-row .nav-sublabel {
    font-size: 0.72em;
  }

  /* ── Card size — uniform zoom scaling ────────────────────── */

  ha-card.size-small { zoom: 0.85; }
  ha-card.size-large { zoom: 1.15; }

  /* ── Settings: Card Size segmented control ─────────────────── */

  .settings-row-static {
    cursor: default;
  }

  .settings-row-static:hover {
    background: transparent;
  }

  .settings-size-control {
    display: flex;
    gap: 2px;
    background: rgba(255,255,255,0.06);
    border-radius: 8px;
    padding: 2px;
  }

  .settings-size-btn {
    padding: 6px 14px;
    border: none;
    background: transparent;
    color: rgba(255,255,255,0.4);
    font-family: inherit;
    font-size: 0.78em;
    font-weight: 500;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.15s ease, color 0.15s ease;
    -webkit-tap-highlight-color: transparent;
  }

  .settings-size-btn:hover {
    color: rgba(255,255,255,0.7);
  }

  .settings-size-btn.selected {
    background: rgba(255,255,255,0.12);
    color: #ffffff;
    font-weight: 600;
  }
`;

// src/entity-config.js
var ENTITIES = {
  // Sensors
  BATTERY_LEVEL: "sensor.{car_name}_battery",
  BATTERY_RANGE: "sensor.{car_name}_battery_range",
  CHARGE_RATE: "sensor.{car_name}_charge_rate",
  CHARGE_LIMIT: "sensor.{car_name}_charge_limit",
  CHARGING_STATE: "sensor.{car_name}_charging_state",
  TEMPERATURE_INSIDE: "sensor.{car_name}_temperature_inside",
  TEMPERATURE_OUTSIDE: "sensor.{car_name}_temperature_outside",
  SPEED: "sensor.{car_name}_speed",
  ODOMETER: "sensor.{car_name}_odometer",
  // Binary sensors
  CHARGING: "binary_sensor.{car_name}_charging",
  PLUGGED_IN: "binary_sensor.{car_name}_plugged_in",
  PARKING_BRAKE: "binary_sensor.{car_name}_parking_brake",
  FRUNK: "binary_sensor.{car_name}_frunk",
  TRUNK: "binary_sensor.{car_name}_trunk",
  DOORS: "binary_sensor.{car_name}_doors",
  WINDOWS: "binary_sensor.{car_name}_windows",
  LOCKED: "binary_sensor.{car_name}_locked",
  ONLINE: "binary_sensor.{car_name}_online",
  SENTRY_MODE: "binary_sensor.{car_name}_sentry_mode",
  // Locks
  DOOR_LOCK: "lock.{car_name}_doors",
  // Switches
  CHARGER_SWITCH: "switch.{car_name}_charger",
  SENTRY_MODE_SWITCH: "switch.{car_name}_sentry_mode",
  DEFROST_SWITCH: "switch.{car_name}_defrost",
  CAMP_MODE: "switch.{car_name}_camp_mode",
  DOG_MODE: "switch.{car_name}_dog_mode",
  // Select — cabin overheat protection (options: Off / No A/C / On)
  CABIN_OVERHEAT: "select.{car_name}_cabin_overheat_protection",
  // Select entities — heated seats (front + rear)
  HEATED_SEAT_LEFT: "select.{car_name}_heated_seat_left",
  HEATED_SEAT_RIGHT: "select.{car_name}_heated_seat_right",
  HEATED_SEAT_REAR_LEFT: "select.{car_name}_heated_seat_rear_left",
  HEATED_SEAT_REAR_CENTER: "select.{car_name}_heated_seat_rear_center",
  HEATED_SEAT_REAR_RIGHT: "select.{car_name}_heated_seat_rear_right",
  // Climate
  CLIMATE: "climate.{car_name}_hvac_climate_system",
  // Numbers (controllable)
  CHARGE_LIMIT_NUMBER: "number.{car_name}_charge_limit",
  CHARGING_AMPS_NUMBER: "number.{car_name}_charging_amps",
  // Buttons
  CHARGE_PORT_OPEN: "button.{car_name}_charge_port_open",
  CHARGE_PORT_CLOSE: "button.{car_name}_charge_port_close",
  VENT_WINDOWS: "button.{car_name}_vent_windows",
  CLOSE_WINDOWS: "button.{car_name}_close_windows",
  HORN: "button.{car_name}_horn",
  FLASH_LIGHTS: "button.{car_name}_flash_lights",
  REMOTE_START: "button.{car_name}_remote_start",
  OPEN_FRUNK: "button.{car_name}_frunk",
  OPEN_TRUNK: "button.{car_name}_trunk",
  FORCE_UPDATE: "button.{car_name}_force_data_update",
  // Covers (state: open/closed, service: cover.open_cover / close_cover / toggle_cover)
  WINDOWS_COVER: "cover.{car_name}_windows",
  FRUNK_COVER: "cover.{car_name}_frunk",
  CHARGER_DOOR: "cover.{car_name}_charger_door",
  // Sensors — charging session
  ENERGY_ADDED: "sensor.{car_name}_energy_added",
  // Device tracker
  LOCATION: "device_tracker.{car_name}_location_tracker"
};
function entityId(template, carName) {
  return template.replace("{car_name}", carName);
}

// src/icons.js
var ICONS = {
  // ── Lock / Unlock ────────────────────────────────────────────────────────────
  // Custom — filled padlock (extracted from Tesla_Door_Lock.svg, icon only)
  lock: `<svg viewBox="24 13 54 67" fill="currentColor" stroke="none">
    <path fill-rule="evenodd" d="
      M 51.01 15.62 C 60.29 15.63 67.36 22.81 67.39 32.00 Q 67.40 35.66 67.40 38.23 A 0.67 0.67 0.0 0 0 67.91 38.89 C 71.02 39.64 73.19 39.67 74.78 42.99 Q 75.53 44.58 75.53 49.12 Q 75.51 69.54 75.50 69.97 Q 75.34 74.60 72.13 76.54 Q 70.63 77.45 64.65 77.48 Q 57.83 77.51 50.99 77.50 Q 44.15 77.50 37.32 77.47 Q 31.35 77.44 29.85 76.52 Q 26.64 74.58 26.48 69.95 Q 26.47 69.52 26.47 49.10 Q 26.47 44.56 27.22 42.97 C 28.81 39.65 30.98 39.63 34.09 38.88 A 0.67 0.67 0.0 0 0 34.60 38.22 Q 34.61 35.65 34.62 31.99 C 34.65 22.80 41.74 15.62 51.01 15.62 Z
      M 39.95 39.00 L 62.05 39.00 A 0.57 0.57 0.0 0 0 62.62 38.43 L 62.62 32.80 A 12.30 11.49 90.0 0 0 51.13 20.50 L 50.87 20.50 A 12.30 11.49 -90.0 0 0 39.38 32.80 L 39.38 38.43 A 0.57 0.57 0.0 0 0 39.95 39.00 Z"/>
  </svg>`,
  // Custom — filled open padlock (extracted from Tesla_Door_Unlock.svg, icon only)
  unlock: `<svg viewBox="9 8 70 72" fill="currentColor" stroke="none">
    <path d="
      M 40.40 38.59 A 0.39 0.39 0.0 0 0 40.79 38.98 Q 65.09 39.02 66.45 38.97 C 71.80 38.79 76.50 40.38 76.49 46.01 Q 76.48 65.49 76.54 67.41 C 76.72 72.91 75.03 77.57 69.25 77.49 Q 67.64 77.47 37.81 77.54 Q 32.31 77.55 30.42 76.22 Q 27.43 74.12 27.49 69.49 Q 27.53 65.87 27.45 49.16 C 27.42 43.04 28.68 39.34 35.06 38.93 A 0.61 0.61 0.0 0 0 35.64 38.32 C 35.62 35.47 35.55 33.00 35.58 31.01 C 35.69 23.94 29.36 18.67 22.61 21.05 C 14.37 23.96 16.11 32.12 16.00 38.84 A 2.49 2.47 -0.7 0 1 13.62 41.27 L 13.48 41.28 A 2.32 2.32 0.0 0 1 11.06 39.05 Q 10.72 30.40 11.12 28.42 C 14.89 9.87 40.59 12.29 40.40 30.78 Q 40.36 34.85 40.40 38.59 Z"/>
  </svg>`,
  // ── Charging ─────────────────────────────────────────────────────────────────
  // https://tabler.io/icons/icon/bolt
  charging: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" />
  </svg>`,
  // https://tabler.io/icons/icon/plug-connected
  "charging-port": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5" />
    <path d="M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5" />
    <path d="M3 21l2.5 -2.5" />
    <path d="M18.5 5.5l2.5 -2.5" />
    <path d="M10 11l-2 2" />
    <path d="M13 14l-2 2" />
  </svg>`,
  // Custom — filled lightning bolt (extracted from Tesla_Charge_Port_Closed.svg, icon only)
  "charge-bolt": `<svg viewBox="27 16 50 74" fill="currentColor" stroke="none">
    <path d="
      M 51.98 87.97 C 51.08 88.15 50.36 87.55 50.36 86.67 Q 50.37 72.26 50.37 60.68 A 1.31 1.30 89.8 0 0 49.06 59.37 Q 32.91 59.40 29.75 59.36 Q 29.31 59.35 29.04 59.19 A 1.38 1.33 -59.7 0 1 28.59 57.33 Q 45.64 28.16 51.20 18.63 A 1.30 1.30 0.0 0 1 53.25 18.38 Q 53.71 18.85 53.69 20.00 Q 53.62 23.82 53.66 45.35 A 1.30 1.30 0.0 0 0 54.96 46.65 C 62.96 46.63 74.04 46.21 75.11 46.91 A 1.25 1.19 -58.3 0 1 75.46 48.55 Q 60.94 73.71 52.68 87.48 A 1.05 1.05 0.0 0 1 51.98 87.97 Z"/>
  </svg>`,
  // https://tabler.io/icons/icon/battery-charging
  battery: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M16 7h1a2 2 0 0 1 2 2v.5a.5 .5 0 0 0 .5 .5a.5 .5 0 0 1 .5 .5v3a.5 .5 0 0 1 -.5 .5a.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-2" />
    <path d="M8 7h-2a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h1" />
    <path d="M12 8l-2 4h3l-2 4" />
  </svg>`,
  // ── Climate ──────────────────────────────────────────────────────────────────
  // https://tabler.io/icons/icon/air-conditioning
  climate: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8 16a3 3 0 0 1 -3 3" />
    <path d="M16 16a3 3 0 0 0 3 3" />
    <path d="M12 16v4" />
    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -4" />
    <path d="M7 13v-3a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v3" />
  </svg>`,
  // https://tabler.io/icons/icon/propeller
  fan: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 13a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M14.167 10.5c.722 -1.538 1.156 -3.043 1.303 -4.514c.22 -1.63 -.762 -2.986 -3.47 -2.986s-3.69 1.357 -3.47 2.986c.147 1.471 .581 2.976 1.303 4.514" />
    <path d="M13.169 16.751c.97 1.395 2.057 2.523 3.257 3.386c1.3 1 2.967 .833 4.321 -1.512c1.354 -2.345 .67 -3.874 -.85 -4.498c-1.348 -.608 -2.868 -.985 -4.562 -1.128" />
    <path d="M8.664 13c-1.693 .143 -3.213 .52 -4.56 1.128c-1.522 .623 -2.206 2.153 -.852 4.498s3.02 2.517 4.321 1.512c1.2 -.863 2.287 -1.991 3.258 -3.386" />
  </svg>`,
  // Tesla_Climate_Fan_Off.svg — 4-blade pinwheel extracted from Tesla tile
  "climate-fan": `<svg viewBox="17 14 74 74" fill="currentColor" stroke="none">
    <path d="
      M 52.28 46.51
      A 2.65 2.65 0.0 0 1 49.64 49.17
      L 49.42 49.17
      A 16.41 16.35 89.9 0 1 33.04 32.79
      L 33.04 32.53
      A 16.41 16.35 89.9 0 1 49.36 16.09
      L 49.58 16.09
      A 2.65 2.65 0.0 0 1 52.24 18.73
      L 52.28 46.51 Z"/>
    <path d="
      M 58.31 49.25
      A 2.46 2.46 0.0 0 1 55.85 46.79
      L 55.85 46.36
      A 16.41 16.33 0.0 0 1 72.26 30.03
      L 72.48 30.03
      A 16.41 16.33 0.0 0 1 88.89 46.36
      L 88.89 46.79
      A 2.46 2.46 0.0 0 1 86.43 49.25
      L 58.31 49.25 Z"/>
    <path d="
      M 49.59 52.73
      A 2.55 2.55 0.0 0 1 52.15 55.27
      L 52.15 55.59
      A 16.42 16.35 -0.1 0 1 35.76 71.97
      L 35.54 71.97
      A 16.42 16.35 -0.1 0 1 19.09 55.65
      L 19.09 55.33
      A 2.55 2.55 0.0 0 1 21.63 52.77
      L 49.59 52.73 Z"/>
    <path d="
      M 55.72 55.47
      A 2.62 2.62 0.0 0 1 58.33 52.84
      L 58.55 52.84
      A 16.45 16.38 89.9 0 1 74.96 69.26
      L 74.96 69.46
      A 16.45 16.38 89.9 0 1 58.61 85.94
      L 58.39 85.94
      A 2.62 2.62 0.0 0 1 55.76 83.33
      L 55.72 55.47 Z"/>
  </svg>`,
  // https://tabler.io/icons/icon/windmill
  "windows-vent": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 12c2.76 0 5 -2.01 5 -4.5s-2.24 -4.5 -5 -4.5v9" />
    <path d="M12 12c0 2.76 2.01 5 4.5 5s4.5 -2.24 4.5 -5h-9" />
    <path d="M12 12c-2.76 0 -5 2.01 -5 4.5s2.24 4.5 5 4.5v-9" />
    <path d="M12 12c0 -2.76 -2.01 -5 -4.5 -5s-4.5 2.24 -4.5 5h9" />
  </svg>`,
  // Custom — front-view car with heat waves rising for defrost mode
  defrost: `<svg viewBox="0 0 24 24" fill="currentColor">
    <g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
      <path d="M9 13s1-1.5 0-3 1-3 0-4.5"/>
      <path d="M12 13s1-1.5 0-3 1-3 0-4.5"/>
      <path d="M15 13s1-1.5 0-3 1-3 0-4.5"/>
    </g>
    <path d="M10 15h4a1 1 0 0 1 1 1v.5h1a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h1V16a1 1 0 0 1 1-1z"/>
    <rect x="6" y="17.25" width="1" height=".75" rx=".375"/>
    <rect x="17" y="17.25" width="1" height=".75" rx=".375"/>
  </svg>`,
  // https://tabler.io/icons/icon/armchair
  "heated-seat": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M5 11a2 2 0 0 1 2 2v2h10v-2a2 2 0 1 1 4 0v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2" />
    <path d="M5 11v-5a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v5" />
    <path d="M6 19v2" />
    <path d="M18 19v2" />
  </svg>`,
  // Custom — A-frame tent for camp mode toggle
  tent: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 4L4 20h16L12 4z"/>
    <path d="M12 4v16"/>
    <path d="M10 20v-5l2-2 2 2v5"/>
  </svg>`,
  // Custom — dog profile for dog mode toggle
  dog: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 5.2C10 4 11 3 12 3s2.5 1.5 3 3l1.5 4H19c1.1 0 2 .9 2 2v5a2 2 0 0 1-2 2h-1v2"/>
    <path d="M6 19v-2H5a2 2 0 0 1-2-2v-5c0-1.1.9-2 2-2h2.5L9 6c.5-1.5 1-3 3-3"/>
    <path d="M6 19h12"/>
    <circle cx="9" cy="12" r="1" fill="currentColor" stroke="none"/>
  </svg>`,
  // ── Controls ─────────────────────────────────────────────────────────────────
  // Tesla_Car.svg — top-down car silhouette with windshield + headlight cutouts
  car: `<svg viewBox="20 28 64 50" fill="currentColor" stroke="none">
    <path fill-rule="evenodd" d="
      M 52.02 30.01
      Q 57.38 30.01 64.78 30.63
      C 72.36 31.27 73.45 37.79 75.24 43.81
      A 0.51 0.50 -53.5 0 0 76.23 43.66
      L 76.23 41.98
      A 0.81 0.81 0.0 0 1 76.99 41.17
      Q 80.66 40.97 81.97 43.63
      A 1.43 1.42 -17.4 0 1 80.91 45.66
      L 76.92 46.30
      A 0.34 0.34 0.0 0 0 76.80 46.92
      C 82.37 50.39 81.99 53.82 82.04 60.70
      Q 82.08 67.25 81.69 73.05
      A 2.13 2.12 -88.0 0 1 79.57 75.03
      L 74.22 75.03
      A 1.80 1.79 89.7 0 1 72.43 73.25
      Q 72.41 71.54 71.99 70.73
      A 0.46 0.45 -12.4 0 0 71.61 70.49
      Q 71.17 70.47 52.01 70.47
      Q 32.85 70.46 32.41 70.48
      A 0.46 0.45 12.4 0 0 32.03 70.72
      Q 31.61 71.53 31.59 73.24
      A 1.80 1.79 -89.7 0 1 29.80 75.02
      L 24.45 75.02
      A 2.13 2.12 88.0 0 1 22.33 73.04
      Q 21.94 67.24 21.98 60.69
      C 22.03 53.81 21.66 50.38 27.23 46.91
      A 0.34 0.34 0.0 0 0 27.11 46.29
      L 23.12 45.65
      A 1.43 1.42 17.5 0 1 22.06 43.62
      Q 23.37 40.96 27.04 41.16
      A 0.81 0.81 0.0 0 1 27.80 41.97
      L 27.80 43.65
      A 0.51 0.50 53.5 0 0 28.79 43.80
      C 30.58 37.78 31.67 31.26 39.25 30.63
      Q 46.65 30.01 52.02 30.01
      Z
      M 32.28 44.72
      L 71.72 44.72
      A 0.23 0.23 0.0 0 0 71.95 44.49
      L 71.95 44.14
      A 11.00 10.20 -90.0 0 0 61.75 33.14
      L 42.25 33.14
      A 11.00 10.20 -90.0 0 0 32.05 44.14
      L 32.05 44.49
      A 0.23 0.23 0.0 0 0 32.28 44.72
      Z
      M 25.82 51.04
      L 24.81 54.26
      A 1.15 1.15 0.0 0 0 25.56 55.70
      L 25.72 55.75
      A 9.72 2.81 17.4 0 0 35.84 55.98
      L 35.86 55.92
      A 9.72 2.81 17.4 0 0 27.42 50.33
      L 27.26 50.28
      A 1.15 1.15 0.0 0 0 25.82 51.04
      Z
      M 79.19 54.25
      L 78.18 51.05
      A 1.14 1.14 0.0 0 0 76.75 50.30
      L 76.57 50.36
      A 9.77 2.80 -17.4 0 0 68.09 55.95
      L 68.10 55.99
      A 9.77 2.80 -17.4 0 0 78.26 55.74
      L 78.44 55.68
      A 1.14 1.14 0.0 0 0 79.19 54.25
      Z"/>
  </svg>`,
  // Custom — car silhouette with front hood raised for frunk (Tesla-specific)
  frunk: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M2 16h20"/>
    <path d="M4 16l1.5-4h13L20 16"/>
    <path d="M5.5 12l1-3h3"/>
    <path d="M6.5 9l-1-2.5"/>
    <circle cx="6.5" cy="16" r="1.5"/>
    <circle cx="17.5" cy="16" r="1.5"/>
    <path d="M4 16v2"/>
    <path d="M20 16v2"/>
  </svg>`,
  // https://tabler.io/icons/icon/car
  trunk: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
  </svg>`,
  // https://tabler.io/icons/icon/shield
  sentry: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
  </svg>`,
  // Custom — headlight with beams (extracted from Tesla_Flash_Lights_Button.svg, icon only)
  "flash-lights": `<svg viewBox="55 15 75 58" fill="currentColor" stroke="none">
    <rect x="-13.17" y="-2.62" transform="translate(70.12,20.94) rotate(7.2)" width="26.34" height="5.24" rx="2.56"/>
    <path d="M 88.50 29.24 A 8.62 8.62 0.0 0 1 97.12 20.62 L 101.77 20.62 A 25.21 23.14 0 0 1 126.98 43.76 L 126.98 44.48 A 25.21 23.14 0 0 1 101.77 67.62 L 97.12 67.62 A 8.62 8.62 0.0 0 1 88.50 59.00 L 88.50 29.24 Z"/>
    <rect x="-13.09" y="-2.62" transform="translate(70.14,36.69) rotate(2.4)" width="26.18" height="5.24" rx="2.55"/>
    <rect x="-13.09" y="-2.61" transform="translate(70.12,52.44) rotate(-2.4)" width="26.18" height="5.22" rx="2.55"/>
    <rect x="-13.16" y="-2.62" transform="translate(70.13,67.31) rotate(-7.1)" width="26.32" height="5.24" rx="2.55"/>
  </svg>`,
  // Custom — horn (extracted from Tesla_Horn_Button.svg, icon only)
  horn: `<svg viewBox="45 18 78 55" fill="currentColor" stroke="none">
    <path fill-rule="evenodd" d="
      M 77.79 49.43 Q 66.93 52.07 61.08 62.13 C 59.21 65.34 58.43 71.35 53.06 70.37 Q 49.13 69.65 49.08 65.49 Q 48.90 51.71 49.05 26.80 Q 49.08 22.95 53.42 21.67 Q 56.68 20.71 59.59 24.40 C 60.54 25.60 61.39 28.68 62.40 30.32 Q 67.61 38.78 76.45 41.98 Q 80.81 43.56 90.70 43.42 Q 100.17 43.29 113.18 43.40 A 0.47 0.47 0.0 0 0 113.66 42.96 C 113.83 40.19 116.61 38.61 118.55 41.04 A 1.64 1.60 -66.7 0 1 118.90 41.96 Q 119.11 46.14 118.93 49.78 A 2.59 2.47 5.4 0 1 116.01 52.08 Q 114.00 51.82 113.74 49.21 A 0.68 0.67 87.2 0 0 113.07 48.60 L 109.06 48.60 A 0.45 0.44 77.1 0 0 108.66 49.24 Q 111.67 55.41 108.89 60.60 C 106.19 65.64 101.89 67.15 96.06 67.02 C 90.87 66.90 84.78 68.09 80.33 63.35 Q 75.04 57.72 78.22 49.92 A 0.37 0.37 0.0 0 0 77.79 49.43 Z
      M 104.89 54.83 A 6.14 6.14 0.0 0 0 98.75 48.69 L 88.51 48.69 A 6.14 6.14 0.0 0 0 82.37 54.83 L 82.37 55.55 A 6.14 6.14 0.0 0 0 88.51 61.69 L 98.75 61.69 A 6.14 6.14 0.0 0 0 104.89 55.55 L 104.89 54.83 Z"/>
  </svg>`,
  // Custom — key fob (extracted from Tesla_Start_Button.svg, icon only)
  "remote-start": `<svg viewBox="64 8 45 76" fill="currentColor" stroke="none">
    <path d="M 86.31 11.03 Q 94.51 10.77 104.02 15.38 A 2.62 2.61 22.9 0 1 105.34 18.62 L 105.27 18.83 A 2.30 2.30 0.0 0 1 102.33 20.21 Q 99.65 19.24 97.10 18.19 Q 92.40 16.26 86.31 16.26 Q 80.23 16.26 75.53 18.18 Q 72.98 19.23 70.29 20.20 A 2.30 2.30 0.0 0 1 67.36 18.82 L 67.29 18.61 A 2.62 2.61 -22.9 0 1 68.61 15.37 Q 78.12 10.77 86.31 11.03 Z"/>
    <path d="M 86.30 23.29 C 88.52 23.29 95.45 23.85 97.24 25.92 A 2.51 2.23 -47.5 0 1 97.19 28.91 Q 96.12 30.33 94.31 29.84 Q 89.50 28.53 86.30 28.54 Q 83.10 28.54 78.30 29.85 Q 76.48 30.34 75.41 28.92 A 2.51 2.23 47.4 0 1 75.36 25.93 C 77.14 23.86 84.07 23.29 86.30 23.29 Z"/>
    <path fill-rule="evenodd" d="M 103.81 72.17 A 8.83 8.83 0.0 0 1 94.98 81.00 L 77.64 81.00 A 8.83 8.83 0.0 0 1 68.81 72.17 L 68.81 44.33 A 8.83 8.83 0.0 0 1 77.64 35.50 L 94.98 35.50 A 8.83 8.83 0.0 0 1 103.81 44.33 L 103.81 72.17 Z M 89.79 49.50 A 3.49 3.49 0.0 0 0 86.30 46.01 A 3.49 3.49 0.0 0 0 82.81 49.50 A 3.49 3.49 0.0 0 0 86.30 52.99 A 3.49 3.49 0.0 0 0 89.79 49.50 Z"/>
  </svg>`,
  // Custom — map pin for vehicle location / navigation
  location: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
    <circle cx="12" cy="9" r="2.5"/>
  </svg>`,
  // ── Vent / Windows ──────────────────────────────────────────────────────────
  // Custom — side-view car with open windows (extracted from Tesla_Vent_Open_Windows_Button.svg)
  "vent-open": `<svg viewBox="50 17 68 68" fill="currentColor" stroke="none">
    <path fill-rule="evenodd" d="
      M 111.29 78.91 Q 109.12 81.07 106.78 81.11 Q 84.93 81.43 63.26 81.17 Q 57.61 81.10 55.36 77.39 Q 53.93 75.02 54.26 68.48 Q 54.44 64.89 54.20 51.46 C 54.07 44.34 56.72 42.29 61.54 37.51 Q 63.93 35.14 65.81 33.26 Q 67.70 31.38 70.08 29.00 C 74.87 24.20 76.93 21.56 84.05 21.72 Q 97.48 22.00 101.07 21.84 Q 107.61 21.53 109.98 22.97 Q 113.68 25.23 113.73 30.88 Q 113.91 52.55 113.51 74.40 Q 113.46 76.74 111.29 78.91 Z
      M 61.34 48.48 L 67.38 48.48 A 3.49 3.47 -67.2 0 0 69.83 47.47 Q 74.97 42.31 80.72 36.06 C 82.54 34.08 84.50 34.92 86.70 34.89 Q 99.59 34.75 105.63 35.02 A 1.85 1.85 0.0 0 0 107.57 33.17 L 107.57 30.38 A 2.45 2.44 -89.8 0 0 105.15 27.93 Q 97.41 27.86 84.51 27.92 Q 80.41 27.94 77.29 31.04 Q 75.92 32.39 75.24 33.02 Q 68.45 39.25 60.85 47.36 A 0.67 0.67 0.0 0 0 61.34 48.48 Z
      M 61.06 54.54 A 0.56 0.55 2.5 0 0 60.46 55.08 Q 60.33 62.00 60.43 72.54 Q 60.45 75.04 63.26 75.04 Q 101.67 74.98 104.77 74.96 Q 107.52 74.94 107.47 71.82 Q 107.38 65.56 107.50 55.49 A 0.58 0.57 89.5 0 0 106.92 54.91 Q 85.20 55.17 67.10 55.13 C 64.99 55.12 62.97 54.66 61.06 54.54 Z"/>
  </svg>`,
  // Custom — side-view car with closed windows (extracted from Tesla_Vent_Close_Windows_Button.svg)
  "vent-close": `<svg viewBox="50 17 68 68" fill="currentColor" stroke="none">
    <path fill-rule="evenodd" d="
      M 111.27 78.92 Q 109.11 81.07 106.78 81.13 Q 95.78 81.41 65.02 81.23 C 59.91 81.20 56.97 80.63 54.89 76.43 Q 54.16 74.97 54.19 71.59 Q 54.24 66.54 54.30 49.50 Q 54.32 44.66 57.67 41.19 Q 61.57 37.15 63.93 34.86 Q 64.80 34.02 65.67 33.15 Q 66.55 32.28 67.39 31.41 Q 69.69 29.06 73.75 25.18 Q 77.23 21.84 82.07 21.84 Q 99.11 21.85 104.16 21.82 Q 107.54 21.80 109.00 22.54 C 113.19 24.63 113.75 27.58 113.76 32.69 Q 113.82 63.45 113.49 74.45 Q 113.43 76.78 111.27 78.92 Z
      M 83.75 27.99 C 81.05 28.02 79.19 28.89 76.51 31.54 Q 69.41 38.56 63.00 45.00 Q 61.41 46.60 60.75 47.69 A 0.52 0.51 -74.3 0 0 61.18 48.47 L 67.86 48.47 A 2.12 2.10 -67.3 0 0 69.35 47.85 L 80.69 36.52 A 5.50 5.45 -67.4 0 1 84.57 34.90 L 106.11 34.90 A 1.35 1.34 -0.0 0 0 107.46 33.56 L 107.46 29.95 A 1.95 1.95 0.0 0 0 105.53 28.00 Q 93.62 27.86 83.75 27.99 Z
      M 107.26 54.95 L 60.62 54.87 A 0.23 0.23 0.0 0 0 60.39 55.10 L 60.36 72.14 A 3.11 2.81 0.1 0 0 63.46 74.95 L 104.34 75.03 A 3.11 2.81 0.1 0 0 107.46 72.22 L 107.49 55.18 A 0.23 0.23 0.0 0 0 107.26 54.95 Z"/>
  </svg>`,
  // ── Navigation / UI ──────────────────────────────────────────────────────────
  // https://tabler.io/icons/icon/chevron-left
  "chevron-left": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M15 6l-6 6l6 6" />
  </svg>`,
  // https://tabler.io/icons/icon/chevron-right
  "chevron-right": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 6l6 6l-6 6" />
  </svg>`,
  // https://tabler.io/icons/icon/chevron-up
  "chevron-up": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 15l6 -6l6 6" />
  </svg>`,
  // https://tabler.io/icons/icon/chevron-down
  "chevron-down": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 9l6 6l6 -6" />
  </svg>`,
  // https://tabler.io/icons/icon/check
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M5 12l5 5l10 -10" />
  </svg>`,
  // https://tabler.io/icons/icon/refresh
  refresh: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
    <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
  </svg>`,
  // https://tabler.io/icons/icon/settings
  settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065" />
    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
  </svg>`,
  // https://tabler.io/icons/icon/arrows-maximize — card size control
  resize: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M16 4l4 0l0 4" />
    <path d="M14 10l6 -6" />
    <path d="M8 20l-4 0l0 -4" />
    <path d="M4 20l6 -6" />
  </svg>`,
  // https://tabler.io/icons/icon/layout-sidebar-right — portrait/landscape toggle
  layout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
    <path d="M15 4v16" />
  </svg>`,
  // ── Power ───────────────────────────────────────────────────────────────────
  // https://tabler.io/icons/icon/power
  power: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M7 6a7.75 7.75 0 1 0 10 0" />
    <path d="M12 2v6" />
  </svg>`,
  // ── Schedule / Security ─────────────────────────────────────────────────────
  // https://tabler.io/icons/icon/clock-bolt
  schedule: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20.984 12.535a9 9 0 1 0 -5.249 7.47" />
    <path d="M12 7v5l2 2" />
    <path d="M19 16l-2 3h4l-2 3" />
  </svg>`,
  // https://tabler.io/icons/icon/shield-check
  security: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06" />
    <path d="M15 19l2 2l4 -4" />
  </svg>`,
  // ── Status ───────────────────────────────────────────────────────────────────
  // https://tabler.io/icons/icon/steering-wheel
  driving: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M12 14l0 7" />
    <path d="M10 12l-6.75 -2" />
    <path d="M14 12l6.75 -2" />
  </svg>`,
  // https://tabler.io/icons/icon/parking
  parked: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
    <path d="M10 16v-8h2.667c.736 0 1.333 .895 1.333 2s-.597 2 -1.333 2h-2.667" />
  </svg>`
};

// models.json
var models_default = {
  models: [
    {
      id: "3",
      name: "Model 3",
      variants: [
        {
          id: "3.1",
          label: "2017\u20132023",
          colours: [
            {
              id: "red_multi_coat",
              name: "Red Multi-Coat",
              swatch: "#c41e28",
              hasImages: true
            },
            {
              id: "deep_blue_metallic",
              name: "Deep Blue Metallic",
              swatch: "#223873"
            },
            {
              id: "pearl_white_multi_coat",
              name: "Pearl White Multi-Coat",
              swatch: "#f2f2f2"
            },
            {
              id: "midnight_silver_metallic",
              name: "Midnight Silver Metallic",
              swatch: "#71757a"
            },
            {
              id: "solid_black",
              name: "Solid Black",
              swatch: "#141414"
            },
            {
              id: "silver_metallic",
              name: "Silver Metallic",
              swatch: "#c0c0c0"
            }
          ]
        },
        {
          id: "3.2",
          label: "2024+ Highland",
          colours: [
            {
              id: "pearl_white",
              name: "Pearl White",
              swatch: "#f2f2f2"
            },
            {
              id: "solid_black",
              name: "Solid Black",
              swatch: "#141414"
            },
            {
              id: "quicksilver",
              name: "Quicksilver",
              swatch: "#9e9a91"
            },
            {
              id: "ultra_red",
              name: "Ultra Red",
              swatch: "#c41e28"
            },
            {
              id: "midnight_cherry_red",
              name: "Midnight Cherry Red",
              swatch: "#850029"
            }
          ]
        }
      ]
    },
    {
      id: "Y",
      name: "Model Y",
      variants: [
        {
          id: "Y.1",
          label: "2020\u20132024",
          colours: [
            {
              id: "pearl_white_multi_coat",
              name: "Pearl White Multi-Coat",
              swatch: "#f2f2f2"
            },
            {
              id: "solid_black",
              name: "Solid Black",
              swatch: "#141414"
            },
            {
              id: "midnight_silver_metallic",
              name: "Midnight Silver Metallic",
              swatch: "#71757a"
            },
            {
              id: "deep_blue_metallic",
              name: "Deep Blue Metallic",
              swatch: "#223873"
            },
            {
              id: "red_multi_coat",
              name: "Red Multi-Coat",
              swatch: "#c41e28"
            },
            {
              id: "midnight_cherry_red",
              name: "Midnight Cherry Red",
              swatch: "#850029"
            },
            {
              id: "quicksilver",
              name: "Quicksilver",
              swatch: "#9e9a91"
            }
          ]
        },
        {
          id: "Y.2",
          label: "2025+ Juniper",
          colours: [
            {
              id: "pearl_white",
              name: "Pearl White",
              swatch: "#f2f2f2"
            },
            {
              id: "solid_black",
              name: "Solid Black",
              swatch: "#141414"
            },
            {
              id: "quicksilver",
              name: "Quicksilver",
              swatch: "#9e9a91"
            },
            {
              id: "ultra_red",
              name: "Ultra Red",
              swatch: "#c41e28"
            },
            {
              id: "midnight_cherry_red",
              name: "Midnight Cherry Red",
              swatch: "#850029"
            }
          ]
        }
      ]
    },
    {
      id: "S",
      name: "Model S",
      variants: [
        {
          id: "S.1",
          label: "2012\u20132021",
          colours: [
            {
              id: "pearl_white_multi_coat",
              name: "Pearl White Multi-Coat",
              swatch: "#f2f2f2"
            },
            {
              id: "solid_black",
              name: "Solid Black",
              swatch: "#141414"
            },
            {
              id: "midnight_silver_metallic",
              name: "Midnight Silver Metallic",
              swatch: "#71757a"
            },
            {
              id: "deep_blue_metallic",
              name: "Deep Blue Metallic",
              swatch: "#223873"
            },
            {
              id: "red_multi_coat",
              name: "Red Multi-Coat",
              swatch: "#c41e28"
            },
            {
              id: "silver_metallic",
              name: "Silver Metallic",
              swatch: "#c0c0c0"
            }
          ]
        },
        {
          id: "S.2",
          label: "2021+ Refresh",
          colours: [
            {
              id: "pearl_white_multi_coat",
              name: "Pearl White Multi-Coat",
              swatch: "#f2f2f2"
            },
            {
              id: "solid_black",
              name: "Solid Black",
              swatch: "#141414"
            },
            {
              id: "midnight_silver_metallic",
              name: "Midnight Silver Metallic",
              swatch: "#71757a"
            },
            {
              id: "ultra_red",
              name: "Ultra Red",
              swatch: "#c41e28"
            },
            {
              id: "midnight_cherry_red",
              name: "Midnight Cherry Red",
              swatch: "#850029"
            },
            {
              id: "quicksilver",
              name: "Quicksilver",
              swatch: "#9e9a91"
            }
          ]
        }
      ]
    },
    {
      id: "X",
      name: "Model X",
      variants: [
        {
          id: "X.1",
          label: "2015\u20132021",
          colours: [
            {
              id: "solid_black",
              name: "Solid Black",
              swatch: "#141414"
            },
            {
              id: "pearl_white_multi_coat",
              name: "Pearl White Multi-Coat",
              swatch: "#f2f2f2"
            },
            {
              id: "midnight_silver_metallic",
              name: "Midnight Silver Metallic",
              swatch: "#71757a"
            },
            {
              id: "deep_blue_metallic",
              name: "Deep Blue Metallic",
              swatch: "#223873"
            },
            {
              id: "red_multi_coat",
              name: "Red Multi-Coat",
              swatch: "#c41e28"
            },
            {
              id: "silver_metallic",
              name: "Silver Metallic",
              swatch: "#c0c0c0"
            }
          ]
        },
        {
          id: "X.2",
          label: "2021+ Refresh",
          colours: [
            {
              id: "pearl_white_multi_coat",
              name: "Pearl White Multi-Coat",
              swatch: "#f2f2f2"
            },
            {
              id: "solid_black",
              name: "Solid Black",
              swatch: "#141414"
            },
            {
              id: "midnight_silver_metallic",
              name: "Midnight Silver Metallic",
              swatch: "#71757a"
            },
            {
              id: "ultra_red",
              name: "Ultra Red",
              swatch: "#c41e28"
            },
            {
              id: "midnight_cherry_red",
              name: "Midnight Cherry Red",
              swatch: "#850029"
            },
            {
              id: "quicksilver",
              name: "Quicksilver",
              swatch: "#9e9a91"
            }
          ]
        }
      ]
    },
    {
      id: "CT",
      name: "Cybertruck",
      variants: [
        {
          id: "CT.1",
          label: "2024+",
          colours: [
            {
              id: "stainless_steel",
              name: "Stainless Steel",
              swatch: "#b0b0b0"
            },
            {
              id: "satin_black",
              name: "Satin Black",
              swatch: "#1a1a1a"
            }
          ]
        }
      ]
    }
  ]
};

// src/recolour.js
var colourMap = /* @__PURE__ */ new Map();
for (const m2 of models_default.models)
  for (const v2 of m2.variants)
    for (const c4 of v2.colours)
      if (!colourMap.has(c4.id))
        colourMap.set(c4.id, { name: c4.name, dir: c4.id, swatch: c4.swatch });
var FACTORY_COLOURS = Array.from(colourMap.values());

// src/models.js
var TESLA_MODELS = models_default.models.map((m2) => ({
  id: m2.id,
  name: m2.name,
  variants: m2.variants.map((v2) => ({
    id: v2.id,
    label: v2.label,
    colours: ["neutral", ...v2.colours.filter((c4) => c4.hasImages).map((c4) => c4.id)],
    factoryColours: v2.colours
  }))
}));
function getVariantColours(modelId, variantId) {
  const model = TESLA_MODELS.find((m2) => m2.id === modelId);
  if (!model) return ["neutral"];
  const variant = model.variants.find((v2) => v2.id === variantId);
  return variant?.colours ?? ["neutral"];
}
function getVariants(modelId) {
  const model = TESLA_MODELS.find((m2) => m2.id === modelId);
  return model?.variants ?? [];
}

// src/editor.js
var TeslaCardEditor = class extends i4 {
  static get properties() {
    return {
      hass: { type: Object },
      config: { type: Object }
    };
  }
  setConfig(config) {
    this.config = config;
  }
  _valueChanged(ev) {
    if (!this.config || !this.hass) return;
    const target = ev.target;
    const newConfig = { ...this.config, [target.name]: target.value };
    this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: newConfig } }));
  }
  _modelChanged(ev) {
    if (!this.config || !this.hass) return;
    const modelId = ev.target.value;
    const variants = getVariants(modelId);
    const firstVariant = variants[0]?.id ?? "";
    const newConfig = { ...this.config, car_model: modelId, car_variant: firstVariant };
    this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: newConfig } }));
  }
  render() {
    if (!this.config) return b2``;
    const currentModel = this.config.car_model ?? "3";
    const variants = getVariants(currentModel);
    return b2`
      <div class="editor">
        <label>
          Car Name (entity prefix) *
          <input
            name="car_name"
            .value=${this.config.car_name ?? ""}
            @change=${this._valueChanged}
            placeholder="e.g. my_tesla"
          />
        </label>
        <label>
          Model
          <select name="car_model" .value=${currentModel} @change=${this._modelChanged}>
            ${TESLA_MODELS.map((m2) => b2`
              <option value="${m2.id}" ?selected=${m2.id === currentModel}>${m2.name}</option>
            `)}
          </select>
        </label>
        <label>
          Variant
          <select name="car_variant" .value=${this.config.car_variant ?? ""} @change=${this._valueChanged}>
            ${variants.map((v2) => b2`
              <option value="${v2.id}" ?selected=${v2.id === this.config.car_variant}>${v2.label}</option>
            `)}
          </select>
        </label>
        <label>
          Image Path
          <input
            name="image_path"
            .value=${this.config.image_path ?? "/hacsfiles/homeassistant-fe-tesla"}
            @change=${this._valueChanged}
            placeholder="/hacsfiles/homeassistant-fe-tesla"
          />
        </label>
        <label>
          Display Name
          <input
            name="name"
            .value=${this.config.name ?? ""}
            @change=${this._valueChanged}
            placeholder="My Tesla"
          />
        </label>
      </div>
    `;
  }
  static get styles() {
    return i`
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
};
customElements.define("tesla-card-editor", TeslaCardEditor);

// src/tesla-base.js
var _TeslaBase = class _TeslaBase extends i4 {
  static get properties() {
    return {
      hass: { type: Object },
      config: { type: Object },
      customColour: { type: Object },
      // { h, s } | null — for custom CSS overlay
      layout: { type: String }
      // 'portrait' | 'landscape'
    };
  }
  // ── Entity helpers ──────────────────────────────────────────────────────────
  _eid(t4) {
    return entityId(t4, this.config.car_name);
  }
  _state(t4) {
    return this.hass?.states[this._eid(t4)];
  }
  _val(t4) {
    return this._state(t4)?.state;
  }
  _attr(t4, a3) {
    return this._state(t4)?.attributes?.[a3];
  }
  _nattr(t4, a3) {
    const v2 = this._attr(t4, a3);
    return v2 != null ? Number(v2) : null;
  }
  // ── Image URL builder ─────────────────────────────────────────────────────
  _imgUrl(f3) {
    const { image_path, car_model, car_variant, car_color } = this.config;
    return `${image_path}/${car_model}/${car_variant}/${car_color}/${f3}?v=${_TeslaBase._imgVer}`;
  }
  // ── Button image URL builder ──────────────────────────────────────────────
  _btnUrl(f3) {
    return `${this.config.image_path}/buttons/${f3}?v=${_TeslaBase._imgVer}`;
  }
  // ── Mask URL — always from neutral directory ─────────────────────────────
  _maskUrl(f3) {
    const { image_path, car_model, car_variant } = this.config;
    const maskFile = f3.replace(".png", "-mask.png");
    return `${image_path}/${car_model}/${car_variant}/neutral/${maskFile}?v=${_TeslaBase._imgVer}`;
  }
  // ── Custom colour overlay style ───────────────────────────────────────────
  get _hasCustomOverlay() {
    return !!this.customColour && this.customColour.s > 0;
  }
  _customOverlayStyleFor(imageFile) {
    const c4 = this.customColour;
    if (!c4 || c4.s === 0) return "";
    const mask = this._maskUrl(imageFile);
    return `position:absolute;inset:0;pointer-events:none;background:hsl(${c4.h},${c4.s}%,50%);mix-blend-mode:color;-webkit-mask-image:url(${mask});mask-image:url(${mask});-webkit-mask-size:contain;mask-size:contain;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;`;
  }
  // ── Service call ────────────────────────────────────────────────────────────
  async _svc(domain, service, entityTpl, extra = {}) {
    try {
      await this.hass.callService(domain, service, {
        entity_id: this._eid(entityTpl),
        ...extra
      });
    } catch (e6) {
      console.error("[tesla-card] service error", domain, service, e6);
    }
  }
  // ── Close menu ──────────────────────────────────────────────────────────────
  _close() {
    this.dispatchEvent(new CustomEvent("close-menu", { bubbles: true, composed: true }));
  }
};
__publicField(_TeslaBase, "_imgVer", Date.now());
var TeslaBase = _TeslaBase;

// src/menu-charger.js
var TeslaMenuCharger = class extends TeslaBase {
  static get properties() {
    return {
      ...super.properties,
      _pendingLimit: { state: true },
      _pendingAmps: { state: true }
    };
  }
  static get styles() {
    return [sharedStyles, chargerStyles];
  }
  constructor() {
    super();
    this._pendingLimit = null;
    this._pendingAmps = null;
  }
  // ── Slider helpers ────────────────────────────────────────────────────────
  _pct(v2, mn, mx) {
    return Math.round((v2 - mn) / (mx - mn) * 100);
  }
  _onLimitInput(e6) {
    e6.target.style.setProperty("--pct", `${this._pct(+e6.target.value, +e6.target.min, +e6.target.max)}%`);
    this._pendingLimit = +e6.target.value;
  }
  _onLimitChange(e6) {
    this._pendingLimit = null;
    this._svc("number", "set_value", ENTITIES.CHARGE_LIMIT_NUMBER, { value: +e6.target.value });
  }
  _onAmpsInput(e6) {
    e6.target.style.setProperty("--pct", `${this._pct(+e6.target.value, +e6.target.min, +e6.target.max)}%`);
    this._pendingAmps = +e6.target.value;
  }
  _onAmpsChange(e6) {
    this._pendingAmps = null;
    this._svc("number", "set_value", ENTITIES.CHARGING_AMPS_NUMBER, { value: +e6.target.value });
  }
  _adjustAmps(delta) {
    const step = this._nattr(ENTITIES.CHARGING_AMPS_NUMBER, "step") ?? 1;
    const min = this._nattr(ENTITIES.CHARGING_AMPS_NUMBER, "min") ?? 5;
    const max = this._nattr(ENTITIES.CHARGING_AMPS_NUMBER, "max") ?? 32;
    const cur = this._pendingAmps ?? Number(this._val(ENTITIES.CHARGING_AMPS_NUMBER) ?? 16);
    this._pendingAmps = Math.max(min, Math.min(max, cur + delta * step));
    clearTimeout(this._ampsTimer);
    this._ampsTimer = setTimeout(() => {
      this._svc("number", "set_value", ENTITIES.CHARGING_AMPS_NUMBER, { value: this._pendingAmps });
      this._pendingAmps = null;
    }, 800);
  }
  // ── Render ────────────────────────────────────────────────────────────────
  render() {
    if (!this.config || !this.hass) return b2``;
    const rangeRaw = this._val(ENTITIES.BATTERY_RANGE);
    const rangeUnit = this._attr(ENTITIES.BATTERY_RANGE, "unit_of_measurement") ?? "km";
    const range = rangeRaw != null ? `${Math.round(Number(rangeRaw))} ${rangeUnit}` : null;
    const chargerDoorOpen = this._val(ENTITIES.CHARGER_DOOR) === "open" || this._val(ENTITIES.PLUGGED_IN) === "on";
    const limitVal = this._pendingLimit ?? Number(this._val(ENTITIES.CHARGE_LIMIT_NUMBER) ?? 80);
    const limitMin = this._nattr(ENTITIES.CHARGE_LIMIT_NUMBER, "min") ?? 50;
    const limitMax = this._nattr(ENTITIES.CHARGE_LIMIT_NUMBER, "max") ?? 100;
    const limitStep = this._nattr(ENTITIES.CHARGE_LIMIT_NUMBER, "step") ?? 1;
    const limitPct = this._pct(limitVal, limitMin, limitMax);
    const ampsVal = this._pendingAmps ?? Number(this._val(ENTITIES.CHARGING_AMPS_NUMBER) ?? 16);
    const ampsMin = this._nattr(ENTITIES.CHARGING_AMPS_NUMBER, "min") ?? 5;
    const ampsMax = this._nattr(ENTITIES.CHARGING_AMPS_NUMBER, "max") ?? 32;
    const addedRange = this._attr(ENTITIES.ENERGY_ADDED, "added_range");
    return b2`
      <div class="charger-menu${this.layout === "landscape" ? " landscape" : ""}">

        <!-- Header: "Charging" + range subtitle -->
        <div class="panel-header">
          <button class="panel-back" @click=${this._close}>
            <span class="icon">${o5(ICONS["chevron-left"])}</span>
          </button>
          <div class="panel-title-block">
            <span class="panel-title">Charging</span>
            ${range ? b2`<span class="panel-subtitle">${range}</span>` : ""}
          </div>
        </div>

        <!-- Charge limit card + amps stepper -->
        <div class="chg-card">
          <div class="chg-limit-header">
            <span class="chg-limit-title">Charge limit: ${limitVal}%</span>
            ${addedRange ? b2`
              <p class="chg-limit-sub">${addedRange} km added during last charging session</p>` : ""}
          </div>

          <!-- Green pill slider for charge limit -->
          <input type="range" class="chg-slider" style="--pct:${limitPct}%"
            min=${limitMin} max=${limitMax} step=${limitStep}
            .value=${String(limitVal)}
            @input=${this._onLimitInput} @change=${this._onLimitChange}/>

          <!-- Amps stepper row -->
          <div class="chg-amps-row">
            <button class="chg-amps-btn"
              ?disabled=${ampsVal <= ampsMin}
              @click=${() => this._adjustAmps(-1)}>
              <span class="icon">${o5(ICONS["chevron-left"])}</span>
            </button>
            <span class="chg-amps-value">${ampsVal} A</span>
            <button class="chg-amps-btn"
              ?disabled=${ampsVal >= ampsMax}
              @click=${() => this._adjustAmps(1)}>
              <span class="icon">${o5(ICONS["chevron-right"])}</span>
            </button>
          </div>
        </div>

        <!-- Open / Close Charge Port — plain text link -->
        <button class="chg-port-btn"
          @click=${() => this._svc("button", "press", chargerDoorOpen ? ENTITIES.CHARGE_PORT_CLOSE : ENTITIES.CHARGE_PORT_OPEN)}>
          ${chargerDoorOpen ? "Close Charge Port" : "Open Charge Port"}
        </button>

      </div>
    `;
  }
};
customElements.define("tesla-menu-charger", TeslaMenuCharger);

// src/menu-climate.js
var TeslaMenuClimate = class extends TeslaBase {
  static get properties() {
    return {
      ...super.properties,
      _pendingTemp: { state: true },
      _climExpanded: { state: true }
    };
  }
  static get styles() {
    return [sharedStyles, climateStyles];
  }
  constructor() {
    super();
    this._pendingTemp = null;
    this._climExpanded = false;
  }
  // ── Temperature ───────────────────────────────────────────────────────────
  _adjustTemp(delta) {
    const step = Number(this._attr(ENTITIES.CLIMATE, "target_temp_step") ?? 0.5);
    const min = Number(this._attr(ENTITIES.CLIMATE, "min_temp") ?? 15);
    const max = Number(this._attr(ENTITIES.CLIMATE, "max_temp") ?? 28);
    const cur = this._pendingTemp ?? (this._attr(ENTITIES.CLIMATE, "temperature") != null ? Number(this._attr(ENTITIES.CLIMATE, "temperature")) : 22);
    this._pendingTemp = Math.max(min, Math.min(max, Math.round((cur + delta * step) / step) * step));
    clearTimeout(this._tempTimer);
    this._tempTimer = setTimeout(() => {
      this._svc("climate", "set_temperature", ENTITIES.CLIMATE, { temperature: this._pendingTemp });
      this._pendingTemp = null;
    }, 800);
  }
  // ── Seat heat image — maps level to the correct SVG file ─────────────────
  _seatHeatFile(level) {
    if (!level || level === "Off") return "Tesla_Heated_Seat_Off.svg";
    const n4 = parseInt(level);
    if (!isNaN(n4) && n4 >= 1 && n4 <= 3) return `Tesla_Heated_Seat_${n4}.svg`;
    if (level === "Low") return "Tesla_Heated_Seat_1.svg";
    if (level === "Medium") return "Tesla_Heated_Seat_2.svg";
    if (level === "High") return "Tesla_Heated_Seat_3.svg";
    return "Tesla_Heated_Seat_Off.svg";
  }
  // ── Close override — also reset expanded state ────────────────────────────
  _close() {
    this._climExpanded = false;
    super._close();
  }
  // ── Render ────────────────────────────────────────────────────────────────
  render() {
    if (!this.config || !this.hass) return b2``;
    const climState = this._val(ENTITIES.CLIMATE);
    const climOn = climState != null && climState !== "off" && climState !== "unavailable";
    const tgtTempRaw = this._attr(ENTITIES.CLIMATE, "temperature");
    const tgtTemp = tgtTempRaw != null ? Number(tgtTempRaw) : null;
    const dispTemp = this._pendingTemp ?? tgtTemp;
    const tempUnit = this._attr(ENTITIES.CLIMATE, "temperature_unit") ?? "\xB0C";
    const tempStr = dispTemp != null ? dispTemp.toFixed(1) : "\u2014";
    const isDefrost = this._val(ENTITIES.DEFROST_SWITCH) === "on";
    const leftSeat = this._val(ENTITIES.HEATED_SEAT_LEFT);
    const rightSeat = this._val(ENTITIES.HEATED_SEAT_RIGHT);
    const rearLeftSeat = this._val(ENTITIES.HEATED_SEAT_REAR_LEFT);
    const rearCtrSeat = this._val(ENTITIES.HEATED_SEAT_REAR_CENTER);
    const rearRightSeat = this._val(ENTITIES.HEATED_SEAT_REAR_RIGHT);
    const tempInRaw = this._val(ENTITIES.TEMPERATURE_INSIDE);
    const tempInU = this._attr(ENTITIES.TEMPERATURE_INSIDE, "unit_of_measurement") ?? "\xB0C";
    const tempIn = tempInRaw != null ? `${Math.round(Number(tempInRaw))}${tempInU}` : null;
    const tempOutRaw = this._val(ENTITIES.TEMPERATURE_OUTSIDE);
    const tempOutU = this._attr(ENTITIES.TEMPERATURE_OUTSIDE, "unit_of_measurement") ?? "\xB0C";
    const tempOut = tempOutRaw != null ? `${Math.round(Number(tempOutRaw))}${tempOutU}` : null;
    const windowsOpen = this._val(ENTITIES.WINDOWS_COVER) === "open";
    const campMode = this._val(ENTITIES.CAMP_MODE) === "on";
    const dogMode = this._val(ENTITIES.DOG_MODE) === "on";
    const cabinOverheat = this._val(ENTITIES.CABIN_OVERHEAT) ?? "Off";
    const pluggedIn = this._val(ENTITIES.PLUGGED_IN) === "on";
    const climBgFile = pluggedIn ? "climate-bg-charging.png" : "climate-bg.png";
    return b2`
      <div class="climate-menu${this.layout === "landscape" ? " landscape" : ""}">

        <!-- Car area: outer clips, inner sizes to image, seats overlay image -->
        <div class="clim-car-area${this._climExpanded ? " clim-car-collapsed" : ""}">
          <div class="clim-car-inner">
            <img class="clim-car-bg"
              src="${this._imgUrl(climBgFile)}"
              alt="Car interior view" />
            ${this._hasCustomOverlay ? b2`
              <div style="${this._customOverlayStyleFor(climBgFile)}"></div>` : ""}

            <!-- Front seats -->
            <button class="clim-seat-zone clim-seat-fl"
              @click=${() => this._svc("select", "select_next", ENTITIES.HEATED_SEAT_LEFT, { cycle: true })}>
              <img class="btn-img" src="${this._btnUrl(this._seatHeatFile(leftSeat ?? "Off"))}" alt="" />
              <span class="clim-seat-label">${leftSeat ?? "Off"}</span>
            </button>
            <button class="clim-seat-zone clim-seat-fr"
              @click=${() => this._svc("select", "select_next", ENTITIES.HEATED_SEAT_RIGHT, { cycle: true })}>
              <img class="btn-img" src="${this._btnUrl(this._seatHeatFile(rightSeat ?? "Off"))}" alt="" />
              <span class="clim-seat-label">${rightSeat ?? "Off"}</span>
            </button>
            <!-- Rear seats -->
            <button class="clim-seat-zone clim-seat-rl"
              @click=${() => this._svc("select", "select_next", ENTITIES.HEATED_SEAT_REAR_LEFT, { cycle: true })}>
              <img class="btn-img" src="${this._btnUrl(this._seatHeatFile(rearLeftSeat ?? "Off"))}" alt="" />
              <span class="clim-seat-label">${rearLeftSeat ?? "Off"}</span>
            </button>
            <button class="clim-seat-zone clim-seat-rc"
              @click=${() => this._svc("select", "select_next", ENTITIES.HEATED_SEAT_REAR_CENTER, { cycle: true })}>
              <img class="btn-img" src="${this._btnUrl(this._seatHeatFile(rearCtrSeat ?? "Off"))}" alt="" />
              <span class="clim-seat-label">${rearCtrSeat ?? "Off"}</span>
            </button>
            <button class="clim-seat-zone clim-seat-rr"
              @click=${() => this._svc("select", "select_next", ENTITIES.HEATED_SEAT_REAR_RIGHT, { cycle: true })}>
              <img class="btn-img" src="${this._btnUrl(this._seatHeatFile(rearRightSeat ?? "Off"))}" alt="" />
              <span class="clim-seat-label">${rearRightSeat ?? "Off"}</span>
            </button>
          </div>

          <!-- Floating back button (positioned in outer container) -->
          <button class="clim-back-btn" @click=${this._close}>
            <span class="icon">${o5(ICONS["chevron-left"])}</span>
          </button>
        </div>

        <!-- Bottom sheet — drag-handle reveals extra controls -->
        <div class="clim-sheet${this._climExpanded ? " expanded" : ""}">

          <!-- Drag handle pill — tap to expand/collapse -->
          <button class="clim-handle"
            @click=${() => {
      this._climExpanded = !this._climExpanded;
    }}>
            <span class="clim-handle-pill"></span>
          </button>

          <!-- Interior · Exterior temps -->
          ${tempIn || tempOut ? b2`
            <div class="clim-temp-info">
              ${tempIn ? b2`Interior ${tempIn}` : ""}
              ${tempIn && tempOut ? " \xB7 " : ""}
              ${tempOut ? b2`Exterior ${tempOut}` : ""}
            </div>` : ""}

          <!-- Main control row: [Power/Off] [← 20.0° →] [Vent] -->
          <div class="clim-main-row">
            <button class="clim-icon-btn${climOn ? " clim-active" : ""}"
              @click=${() => this._svc("climate", climOn ? "turn_off" : "turn_on", ENTITIES.CLIMATE)}>
              <span class="icon">${o5(ICONS.power)}</span>
              <span>${climOn ? "On" : "Off"}</span>
            </button>

            <div class="clim-temp-control">
              <button class="clim-arrow-btn" @click=${() => this._adjustTemp(-1)}>
                <span class="icon">${o5(ICONS["chevron-left"])}</span>
              </button>
              <span class="clim-temp-value">${tempStr}°</span>
              <button class="clim-arrow-btn" @click=${() => this._adjustTemp(1)}>
                <span class="icon">${o5(ICONS["chevron-right"])}</span>
              </button>
            </div>

            <button class="clim-icon-btn${windowsOpen ? " clim-active" : ""}"
              @click=${() => this._svc("cover", windowsOpen ? "close_cover" : "open_cover", ENTITIES.WINDOWS_COVER)}>
              <span class="icon">${o5(windowsOpen ? ICONS["vent-close"] : ICONS["vent-open"])}</span>
              <span>${windowsOpen ? "Close" : "Vent"}</span>
            </button>
          </div>

          <!-- Always-visible: Defrost Car -->
          <button class="clim-full-btn${isDefrost ? " active" : ""}"
            @click=${() => this._svc("switch", isDefrost ? "turn_off" : "turn_on", ENTITIES.DEFROST_SWITCH)}>
            <span class="icon">${o5(ICONS.defrost)}</span>
            <span>Defrost Car</span>
          </button>

          <!-- Expanded section — Camp Mode / Dog Mode + Cabin Overheat Protection -->
          <div class="clim-expanded-content">

            <!-- Camp Mode + Dog Mode in one grouped container -->
            <div class="clim-list-group">
              <button class="clim-list-item${campMode ? " hot" : ""}"
                @click=${() => this._svc("switch", campMode ? "turn_off" : "turn_on", ENTITIES.CAMP_MODE)}>
                <span class="icon clim-list-icon">${o5(ICONS.tent)}</span>
                <span class="clim-list-label">Camp Mode</span>
              </button>
              <button class="clim-list-item${dogMode ? " hot" : ""}"
                @click=${() => this._svc("switch", dogMode ? "turn_off" : "turn_on", ENTITIES.DOG_MODE)}>
                <span class="icon clim-list-icon">${o5(ICONS.dog)}</span>
                <span class="clim-list-label">Dog Mode</span>
              </button>
            </div>

            <!-- Separator line -->
            <div class="clim-separator"></div>

            <!-- Cabin Overheat Protection -->
            <div class="clim-section-title">Cabin Overheat Protection</div>
            <div class="clim-list-group clim-segment-group clim-list-group--last">
              ${["Off", "No A/C", "On"].map((opt) => b2`
                <button class="clim-segment-btn${cabinOverheat === opt ? " selected" : ""}"
                  @click=${() => this._svc("select", "select_option", ENTITIES.CABIN_OVERHEAT, { option: opt })}>
                  ${opt}
                </button>`)}
            </div>

          </div><!-- /clim-expanded-content -->

        </div><!-- /clim-sheet -->
      </div>
    `;
  }
};
customElements.define("tesla-menu-climate", TeslaMenuClimate);

// src/menu-controls.js
var TeslaMenuControls = class extends TeslaBase {
  static get styles() {
    return [sharedStyles, controlsStyles];
  }
  render() {
    if (!this.config || !this.hass) return b2``;
    const lockState = this._val(ENTITIES.DOOR_LOCK);
    const isLocked = lockState === "locked";
    const frunkOpen = this._val(ENTITIES.FRUNK_COVER) === "open" || this._val(ENTITIES.FRUNK) === "on";
    const trunkOpen = this._val(ENTITIES.TRUNK) === "on";
    const pluggedIn = this._val(ENTITIES.PLUGGED_IN) === "on";
    const chargerDoorOpen = this._val(ENTITIES.CHARGER_DOOR) === "open" || pluggedIn;
    const windowsOpen = this._val(ENTITIES.WINDOWS_COVER) === "open";
    const bgFile = pluggedIn ? "controls-bg-charging.png" : "controls-bg.png";
    return b2`
      <div class="controls-menu${this.layout === "landscape" ? " landscape" : ""}">
        <div class="panel-header">
          <button class="panel-back" @click=${this._close}>
            <span class="icon">${o5(ICONS["chevron-left"])}</span>
          </button>
          <span class="panel-title">Controls</span>
        </div>
        <div class="ctrl-car-area">
          <img class="ctrl-car-bg"
            src="${this._imgUrl(bgFile)}"
            alt="Car top view" />
          ${this._hasCustomOverlay ? b2`
            <div style="${this._customOverlayStyleFor(bgFile)}"></div>` : ""}
          <!-- Frunk — text only, top centre -->
          <button class="ctrl-zone ctrl-frunk"
            @click=${() => this._svc("cover", "toggle_cover", ENTITIES.FRUNK_COVER)}>
            ${frunkOpen ? "Close" : "Open"}
          </button>
          <!-- Lock — icon only, car centre -->
          <button class="ctrl-zone ctrl-lock"
            @click=${() => this._svc("lock", isLocked ? "unlock" : "lock", ENTITIES.DOOR_LOCK)}>
            <span class="icon">${o5(isLocked ? ICONS.lock : ICONS.unlock)}</span>
          </button>
          <!-- Trunk — text only, bottom centre -->
          <button class="ctrl-zone ctrl-trunk"
            @click=${() => this._svc("button", "press", ENTITIES.OPEN_TRUNK)}>
            ${trunkOpen ? "Close" : "Open"}
          </button>
          <!-- Charge port — icon only, bottom left -->
          <button class="ctrl-zone ctrl-port ${chargerDoorOpen ? "port-open" : ""}"
            @click=${() => this._svc("button", "press", chargerDoorOpen ? ENTITIES.CHARGE_PORT_CLOSE : ENTITIES.CHARGE_PORT_OPEN)}>
            <span class="icon">${o5(ICONS["charge-bolt"])}</span>
          </button>
        </div>
        <div class="ctrl-actions">
          <button class="ctrl-action-btn"
            @click=${() => this._svc("button", "press", ENTITIES.FLASH_LIGHTS)}>
            <span class="icon">${o5(ICONS["flash-lights"])}</span>
            <span>Flash</span>
          </button>
          <button class="ctrl-action-btn"
            @click=${() => this._svc("button", "press", ENTITIES.HORN)}>
            <span class="icon">${o5(ICONS.horn)}</span>
            <span>Horn</span>
          </button>
          <button class="ctrl-action-btn"
            @click=${() => this._svc("button", "press", ENTITIES.REMOTE_START)}>
            <span class="icon">${o5(ICONS["remote-start"])}</span>
            <span>Start</span>
          </button>
          <button class="ctrl-action-btn"
            @click=${() => this._svc("cover", windowsOpen ? "close_cover" : "open_cover", ENTITIES.WINDOWS_COVER)}>
            <span class="icon">${o5(windowsOpen ? ICONS["vent-close"] : ICONS["vent-open"])}</span>
            <span>${windowsOpen ? "Close" : "Vent"}</span>
          </button>
        </div>
      </div>
    `;
  }
};
customElements.define("tesla-menu-controls", TeslaMenuControls);

// src/colour-picker.js
var TeslaColourPicker = class extends i4 {
  static get properties() {
    return {
      selected: { type: String },
      // current colour dir name e.g. 'red_multi_coat' or 'custom'
      available: { type: Array },
      // dirs that have images e.g. ['neutral','red_multi_coat']
      showBack: { type: Boolean },
      customH: { type: Number },
      // current custom hue (0-360)
      customS: { type: Number },
      // current custom saturation (0-100)
      slideFrom: { type: String, reflect: true, attribute: "slide-from" },
      _showCustom: { state: true },
      _hue: { state: true },
      _sat: { state: true }
    };
  }
  static get styles() {
    return i`
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
    this.selected = "neutral";
    this.available = ["neutral"];
    this.showBack = false;
    this.customH = 0;
    this.customS = 80;
    this._showCustom = false;
    this._hue = 0;
    this._sat = 80;
  }
  willUpdate(changed) {
    if (changed.has("selected") || changed.has("customH") || changed.has("customS")) {
      if (this.selected === "custom") {
        this._showCustom = true;
        this._hue = this.customH ?? 0;
        this._sat = this.customS ?? 80;
      }
    }
  }
  _selectColour(fc) {
    this._showCustom = false;
    this.dispatchEvent(new CustomEvent("colour-changed", {
      detail: { dir: fc.dir, name: fc.name },
      bubbles: true,
      composed: true
    }));
    this._close();
  }
  _openCustom() {
    this._showCustom = true;
  }
  _onHueInput(e6) {
    this._hue = Number(e6.target.value);
    this._fireCustomChange();
  }
  _onSatInput(e6) {
    this._sat = Number(e6.target.value);
    this._fireCustomChange();
  }
  _fireCustomChange() {
    this.dispatchEvent(new CustomEvent("colour-changed", {
      detail: { dir: "custom", name: "Custom", h: this._hue, s: this._sat },
      bubbles: true,
      composed: true
    }));
  }
  _reset() {
    this._showCustom = false;
    this.dispatchEvent(new CustomEvent("colour-changed", {
      detail: null,
      bubbles: true,
      composed: true
    }));
    this._close();
  }
  _back() {
    this.dispatchEvent(new CustomEvent("picker-back", {
      bubbles: true,
      composed: true
    }));
  }
  _close() {
    this.dispatchEvent(new CustomEvent("picker-close", {
      bubbles: true,
      composed: true
    }));
  }
  _onOverlayClick(e6) {
    if (e6.target === e6.currentTarget) this._close();
  }
  render() {
    const avail = this.available ?? ["neutral"];
    const isCustom = this.selected === "custom";
    return b2`
      <div class="picker-overlay" @click=${this._onOverlayClick}>
        <div class="picker-panel">

          <div class="picker-header">
            ${this.showBack ? b2`
              <button class="picker-back" @click=${this._back}>
                <span class="icon">${o5(ICONS["chevron-left"])}</span>
              </button>` : ""}
            <span class="picker-title">Colour</span>
            <button class="picker-close" @click=${this._close}>&times;</button>
          </div>

          <div class="picker-swatches">
            ${FACTORY_COLOURS.map((fc) => {
      const isAvail = avail.includes(fc.dir);
      const isSel = this.selected === fc.dir;
      return b2`
                <button
                  class="swatch-btn${isAvail ? "" : " unavailable"}"
                  @click=${isAvail ? () => this._selectColour(fc) : null}>
                  <div class="swatch-circle${isSel ? " selected" : ""}"
                    style="background:${fc.swatch}"></div>
                  <span class="swatch-name">${fc.name}</span>
                </button>`;
    })}
            <button class="swatch-btn" @click=${() => this._openCustom()}>
              <div class="swatch-circle swatch-rainbow${isCustom ? " selected" : ""}"></div>
              <span class="swatch-name">Custom</span>
            </button>
          </div>

          ${this._showCustom ? b2`
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
          ` : ""}

          <button class="picker-reset" @click=${this._reset}>
            Reset to Default
          </button>

        </div>
      </div>
    `;
  }
};
customElements.define("tesla-colour-picker", TeslaColourPicker);

// src/model-picker.js
var TeslaModelPicker = class extends i4 {
  static get properties() {
    return {
      model: { type: String },
      // current model ID e.g. '3'
      variant: { type: String },
      // current variant ID e.g. '3.1'
      slideFrom: { type: String, reflect: true, attribute: "slide-from" }
    };
  }
  static get styles() {
    return i`
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
    this.dispatchEvent(new CustomEvent("model-changed", {
      detail: { model: modelId, variant: variantId },
      bubbles: true,
      composed: true
    }));
  }
  _back() {
    this.dispatchEvent(new CustomEvent("picker-back", {
      bubbles: true,
      composed: true
    }));
  }
  _close() {
    this.dispatchEvent(new CustomEvent("picker-close", {
      bubbles: true,
      composed: true
    }));
  }
  _onOverlayClick(e6) {
    if (e6.target === e6.currentTarget) this._close();
  }
  render() {
    return b2`
      <div class="picker-overlay" @click=${this._onOverlayClick}>
        <div class="picker-panel">
          <div class="picker-header">
            <button class="picker-back" @click=${this._back}>
              <span class="icon">${o5(ICONS["chevron-left"])}</span>
            </button>
            <span class="picker-title">Model</span>
            <button class="picker-close" @click=${this._close}>&times;</button>
          </div>
          <div class="model-list">
            ${TESLA_MODELS.map((m2) => b2`
              <div class="model-section">
                <div class="model-section-title">${m2.name}</div>
                <div class="model-group">
                  ${m2.variants.map((v2) => {
      const sel = v2.id === this.variant;
      const hasImages = v2.colours.length > 1 || v2.colours[0] !== "neutral";
      const avail = hasImages || sel;
      return b2`
                      <button class="model-item${sel ? " selected" : ""}${avail ? "" : " unavailable"}"
                        @click=${avail ? () => this._select(m2.id, v2.id) : null}>
                        <span class="model-icon">
                          <span class="icon">${o5(ICONS.car)}</span>
                        </span>
                        <span class="model-label">${v2.label}</span>
                        ${!avail ? b2`<span class="model-no-images">no images</span>` : ""}
                        ${sel ? b2`
                          <span class="model-check">
                            <span class="icon">${o5(ICONS.check)}</span>
                          </span>` : ""}
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
};
customElements.define("tesla-model-picker", TeslaModelPicker);

// src/tesla-card.js
var OVERLAY_Z_ORDER = ["chargeport", "frunk", "fr", "ff", "nr", "nf"];
var COMBINED_OVERLAYS = {
  "nf+nr": "nf-nr-combined-overlay.png",
  "ff+fr": "ff-fr-combined-overlay.png"
};
var OVERLAY_BELOW_TRUNK_ONCHARGE = ["fr"];
var OVERLAY_Z_ORDER_ONCHARGE = ["frunk", "nf", "nr"];
var COMBINED_OVERLAYS_ONCHARGE = {
  "nf+nr": "oncharge-nf-nr-combined-overlay.png"
};
var LS_COLOUR_PREFIX = "tesla-card-colour-";
var LS_MODEL_PREFIX = "tesla-card-model-";
var LS_LAYOUT_PREFIX = "tesla-card-layout-";
var LS_SIZE_PREFIX = "tesla-card-size-";
var CARD_SIZES = ["small", "medium", "large"];
var _TeslaCard = class _TeslaCard extends i4 {
  static get properties() {
    return {
      hass: { type: Object },
      config: { type: Object },
      _menu: { state: true },
      _imageError: { state: true },
      _settingsView: { state: true },
      // null | 'main' | 'model' | 'colour'
      _modelOverride: { state: true },
      // { model, variant } | null
      _colourOverride: { state: true },
      // { dir } | { dir:'custom', h, s } | null
      _layout: { state: true },
      // 'portrait' | 'landscape'
      _settingsSlide: { state: true },
      // null | 'left' | 'right' — panel transition direction
      _cardSize: { state: true }
      // 'small' | 'medium' | 'large'
    };
  }
  static get styles() {
    return [sharedStyles, cardStyles];
  }
  constructor() {
    super();
    this._menu = null;
    this._imageError = false;
    this._settingsView = null;
    this._modelOverride = null;
    this._colourOverride = null;
    this._layout = "portrait";
    this._settingsSlide = null;
    this._cardSize = "medium";
    this._baseConfig = null;
    this._combinedAvail = {};
    this._onchargeAvail = false;
    this._cableAvail = false;
    this._toggleCharger = () => this._toggle("charger");
    this._toggleClimate = () => this._toggle("climate");
    this._toggleControls = () => this._toggle("controls");
    this._handleCloseMenu = () => {
      this._menu = null;
    };
    this._handleColourChanged = (e6) => this._onColourChanged(e6);
    this._handleModelChanged = (e6) => this._onModelChanged(e6);
    this._handleModelBack = () => {
      this._settingsSlide = null;
      this._settingsView = "main";
    };
    this._handleColourBack = () => {
      this._settingsSlide = "left";
      this._settingsView = "model";
    };
    this._handlePickerClose = () => {
      this._settingsView = null;
      this._settingsSlide = null;
    };
  }
  // ─── Config ────────────────────────────────────────────────────────────────
  setConfig(config) {
    if (!config.car_name) throw new Error("car_name is required");
    this._baseConfig = {
      car_model: "3",
      car_variant: "3.1",
      car_color: "red_multi_coat",
      image_path: "/hacsfiles/homeassistant-fe-tesla",
      show_speed: true,
      ...config
    };
    this._applyConfig();
  }
  _applyConfig() {
    const base = { ...this._baseConfig };
    if (this._modelOverride) {
      base.car_model = this._modelOverride.model;
      base.car_variant = this._modelOverride.variant;
    }
    const co = this._colourOverride;
    if (co) {
      base.car_color = co.dir === "custom" ? "neutral" : co.dir;
    }
    this.config = base;
    this._preloadCombinedOverlays();
  }
  _preloadCombinedOverlays() {
    for (const [key, filename] of Object.entries(COMBINED_OVERLAYS)) {
      const img = new Image();
      img.onload = () => {
        this._combinedAvail[key] = true;
        this.requestUpdate();
      };
      img.onerror = () => {
        this._combinedAvail[key] = false;
      };
      img.src = this._overlayUrl(filename);
    }
    const ocProbe = new Image();
    ocProbe.onload = () => {
      this._onchargeAvail = true;
      this.requestUpdate();
    };
    ocProbe.onerror = () => {
      this._onchargeAvail = false;
    };
    ocProbe.src = this._overlayUrl("oncharge-base.png");
    const cableProbe = new Image();
    cableProbe.onload = () => {
      this._cableAvail = true;
      this.requestUpdate();
    };
    cableProbe.onerror = () => {
      this._cableAvail = false;
    };
    cableProbe.src = this._overlayUrl("oncharge-cable-overlay.png");
    for (const [key, filename] of Object.entries(COMBINED_OVERLAYS_ONCHARGE)) {
      const img = new Image();
      img.onload = () => {
        this._combinedAvail["oc_" + key] = true;
        this.requestUpdate();
      };
      img.onerror = () => {
        this._combinedAvail["oc_" + key] = false;
      };
      img.src = this._overlayUrl(filename);
    }
  }
  static getConfigElement() {
    return document.createElement("tesla-card-editor");
  }
  static getStubConfig() {
    return { car_name: "", car_model: "3", car_variant: "3.1", car_color: "red_multi_coat", image_path: "/hacsfiles/homeassistant-fe-tesla" };
  }
  // ─── Persistence ───────────────────────────────────────────────────────────
  connectedCallback() {
    super.connectedCallback();
    if (this._baseConfig) {
      this._restoreModel();
      this._restoreColour();
    }
    this._restoreLayout();
    this._restoreSize();
  }
  // ── Colour ──
  _colourLsKey() {
    return LS_COLOUR_PREFIX + (this._baseConfig?.car_name ?? "default");
  }
  _restoreColour() {
    try {
      const raw = localStorage.getItem(this._colourLsKey());
      if (!raw) return;
      try {
        this._colourOverride = JSON.parse(raw);
      } catch {
        this._colourOverride = { dir: raw };
      }
      this._applyConfig();
    } catch {
    }
  }
  _persistColour() {
    try {
      if (this._colourOverride) {
        localStorage.setItem(this._colourLsKey(), JSON.stringify(this._colourOverride));
      } else {
        localStorage.removeItem(this._colourLsKey());
      }
    } catch {
    }
  }
  _onColourChanged(e6) {
    const detail = e6.detail;
    if (!detail) {
      this._colourOverride = null;
    } else if (detail.dir === "custom") {
      this._colourOverride = { dir: "custom", h: detail.h, s: detail.s };
    } else {
      this._colourOverride = { dir: detail.dir };
    }
    this._applyConfig();
    this._persistColour();
    this._imageError = false;
  }
  // ── Model ──
  _modelLsKey() {
    return LS_MODEL_PREFIX + (this._baseConfig?.car_name ?? "default");
  }
  _restoreModel() {
    try {
      const raw = localStorage.getItem(this._modelLsKey());
      if (raw) {
        this._modelOverride = JSON.parse(raw);
        this._applyConfig();
      }
    } catch {
    }
  }
  _persistModel() {
    try {
      if (this._modelOverride) {
        localStorage.setItem(this._modelLsKey(), JSON.stringify(this._modelOverride));
      } else {
        localStorage.removeItem(this._modelLsKey());
      }
    } catch {
    }
  }
  _onModelChanged(e6) {
    const { model, variant } = e6.detail;
    this._modelOverride = { model, variant };
    const co = this._colourOverride;
    if (co && co.dir !== "custom") {
      const availColours = getVariantColours(model, variant);
      if (!availColours.includes(co.dir)) {
        this._colourOverride = null;
        this._persistColour();
      }
    }
    this._applyConfig();
    this._persistModel();
    this._imageError = false;
    this._settingsSlide = "right";
    this._settingsView = "colour";
  }
  // ── Layout ──
  _layoutLsKey() {
    return LS_LAYOUT_PREFIX + (this._baseConfig?.car_name ?? "default");
  }
  _restoreLayout() {
    try {
      const raw = localStorage.getItem(this._layoutLsKey());
      if (raw === "landscape") this._layout = "landscape";
    } catch {
    }
  }
  _persistLayout() {
    try {
      localStorage.setItem(this._layoutLsKey(), this._layout);
    } catch {
    }
  }
  _toggleLayout() {
    this._layout = this._layout === "landscape" ? "portrait" : "landscape";
    this._persistLayout();
  }
  // ── Card Size ──
  _sizeLsKey() {
    return LS_SIZE_PREFIX + (this._baseConfig?.car_name ?? "default");
  }
  _restoreSize() {
    try {
      const raw = localStorage.getItem(this._sizeLsKey());
      if (raw && CARD_SIZES.includes(raw)) this._cardSize = raw;
    } catch {
    }
  }
  _persistSize() {
    try {
      localStorage.setItem(this._sizeLsKey(), this._cardSize);
    } catch {
    }
  }
  _setCardSize(size) {
    if (this._cardSize === size) return;
    this._cardSize = size;
    this._persistSize();
  }
  // ─── Image URL helpers ───────────────────────────────────────────────────
  _imgUrl(f3) {
    const { image_path, car_model, car_variant, car_color } = this.config;
    return `${image_path}/${car_model}/${car_variant}/${car_color}/${f3}?v=${_TeslaCard._imgVer}`;
  }
  _overlayUrl(f3) {
    const { image_path, car_model, car_variant, car_color } = this.config;
    return `${image_path}/${car_model}/${car_variant}/${car_color}/overlays/${f3}?v=${_TeslaCard._imgVer}`;
  }
  _btnUrl(f3) {
    return `${this.config.image_path}/buttons/${f3}?v=${_TeslaCard._imgVer}`;
  }
  // ─── Custom colour helpers ───────────────────────────────────────────────
  /** Returns { h, s } for custom colour, or null */
  get _customColour() {
    const co = this._colourOverride;
    if (!co || co.dir !== "custom") return null;
    return { h: co.h, s: co.s };
  }
  get _hasCustomOverlay() {
    const c4 = this._customColour;
    return !!c4 && c4.s > 0;
  }
  _maskUrl(f3) {
    const { image_path, car_model, car_variant } = this.config;
    const maskFile = f3.replace(".png", "-mask.png");
    return `${image_path}/${car_model}/${car_variant}/neutral/${maskFile}?v=${_TeslaCard._imgVer}`;
  }
  _customOverlayStyleFor(imageFile) {
    const c4 = this._customColour;
    if (!c4 || c4.s === 0) return "";
    const mask = this._maskUrl(imageFile);
    return `position:absolute;inset:0;pointer-events:none;background:hsl(${c4.h},${c4.s}%,50%);mix-blend-mode:color;-webkit-mask-image:url(${mask});mask-image:url(${mask});-webkit-mask-size:contain;mask-size:contain;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;`;
  }
  // ─── Entity helpers ────────────────────────────────────────────────────────
  _eid(t4) {
    return entityId(t4, this.config.car_name);
  }
  _state(t4) {
    return this.hass?.states[this._eid(t4)];
  }
  _val(t4) {
    return this._state(t4)?.state;
  }
  _attr(t4, a3) {
    return this._state(t4)?.attributes?.[a3];
  }
  // ─── Service call ──────────────────────────────────────────────────────────
  async _svc(domain, service, entityTpl, extra = {}) {
    try {
      await this.hass.callService(domain, service, {
        entity_id: this._eid(entityTpl),
        ...extra
      });
    } catch (e6) {
      console.error("[tesla-card] service error", domain, service, e6);
    }
  }
  // ─── Menu toggle ───────────────────────────────────────────────────────────
  _toggle(m2) {
    this._menu = this._menu === m2 ? null : m2;
  }
  // ─── Settings navigation ───────────────────────────────────────────────────
  _openSettings() {
    this._settingsView = "main";
    this._settingsSlide = null;
  }
  _openModelPicker() {
    this._settingsView = "model";
    this._settingsSlide = null;
  }
  _closeSettings() {
    this._settingsView = null;
    this._settingsSlide = null;
  }
  _onSettingsOverlayClick(e6) {
    if (e6.target === e6.currentTarget) this._closeSettings();
  }
  // ─── Render ────────────────────────────────────────────────────────────────
  render() {
    if (!this.config || !this.hass) return b2``;
    const menu = this._menu;
    const co = this._colourOverride;
    const batRaw = this._val(ENTITIES.BATTERY_LEVEL);
    const battery = batRaw != null ? Math.round(Number(batRaw)) : null;
    const batPct = battery != null ? Math.max(0, Math.min(100, battery)) : 0;
    const batCls = batPct >= 50 ? "high" : batPct >= 20 ? "medium" : "low";
    const rangeRaw = this._val(ENTITIES.BATTERY_RANGE);
    const rangeUnit = this._attr(ENTITIES.BATTERY_RANGE, "unit_of_measurement") ?? "km";
    const range = rangeRaw != null ? `${Math.round(Number(rangeRaw))} ${rangeUnit}` : null;
    const charging = this._val(ENTITIES.CHARGING) === "on";
    const online = this._val(ENTITIES.ONLINE) === "on";
    const onlineEnt = this._state(ENTITIES.ONLINE);
    const frunkOpen = this._val(ENTITIES.FRUNK_COVER) === "open" || this._val(ENTITIES.FRUNK) === "on";
    const trunkOpen = this._val(ENTITIES.TRUNK) === "on";
    const pluggedIn = this._val(ENTITIES.PLUGGED_IN) === "on";
    const chargerDoorOpen = this._val(ENTITIES.CHARGER_DOOR) === "open" || pluggedIn;
    const doorState = {
      nf: this._attr(ENTITIES.DOORS, "driver_front") === true,
      nr: this._attr(ENTITIES.DOORS, "driver_rear") === true,
      ff: this._attr(ENTITIES.DOORS, "passenger_front") === true,
      fr: this._attr(ENTITIES.DOORS, "passenger_rear") === true
    };
    const useOncharge = pluggedIn && this._onchargeAvail;
    const prefix = useOncharge ? "oncharge-" : "";
    const baseImg = `${prefix}base.png`;
    const zOrder = useOncharge ? OVERLAY_Z_ORDER_ONCHARGE : OVERLAY_Z_ORDER;
    const belowTrunk = useOncharge ? OVERLAY_BELOW_TRUNK_ONCHARGE : [];
    const activeOverlays = {
      frunk: frunkOpen,
      nf: doorState.nf,
      nr: doorState.nr,
      fr: doorState.fr
    };
    if (!useOncharge) {
      activeOverlays.chargeport = chargerDoorOpen;
      activeOverlays.ff = doorState.ff;
    }
    const combinedKey = useOncharge ? "oc_nf+nr" : "nf+nr";
    const useNfNrCombined = doorState.nf && doorState.nr && this._combinedAvail[combinedKey];
    const useFfFrCombined = !useOncharge && doorState.ff && doorState.fr && this._combinedAvail["ff+fr"];
    const combinedMap = useOncharge ? COMBINED_OVERLAYS_ONCHARGE : COMBINED_OVERLAYS;
    const belowTrunkFiles = [];
    for (const name of belowTrunk) {
      if (activeOverlays[name]) belowTrunkFiles.push(`${prefix}${name}-overlay.png`);
    }
    const trunkOverlay = trunkOpen ? `${prefix}trunk-overlay.png` : null;
    const overlayFiles = [];
    let nfNrFirstSeen = false;
    let ffFrFirstSeen = false;
    for (const name of zOrder) {
      if (!activeOverlays[name]) continue;
      if ((name === "nf" || name === "nr") && useNfNrCombined) {
        if (nfNrFirstSeen) overlayFiles.push(combinedMap["nf+nr"]);
        nfNrFirstSeen = true;
        continue;
      }
      if ((name === "ff" || name === "fr") && useFfFrCombined) {
        if (ffFrFirstSeen) overlayFiles.push(combinedMap["ff+fr"]);
        ffFrFirstSeen = true;
        continue;
      }
      overlayFiles.push(`${prefix}${name}-overlay.png`);
    }
    const lockState = this._val(ENTITIES.DOOR_LOCK);
    const isLocked = lockState === "locked";
    const chgState = this._val(ENTITIES.CHARGING_STATE) ?? "\u2014";
    const chgRate = this._val(ENTITIES.CHARGE_RATE);
    const chgRateUnit = this._attr(ENTITIES.CHARGE_RATE, "unit_of_measurement") ?? "kW";
    const climState = this._val(ENTITIES.CLIMATE);
    const climOn = climState != null && climState !== "off" && climState !== "unavailable";
    const tgtTempRaw = this._attr(ENTITIES.CLIMATE, "temperature");
    const tempUnit = this._attr(ENTITIES.CLIMATE, "temperature_unit") ?? "\xB0C";
    const tempStr = tgtTempRaw != null ? Number(tgtTempRaw).toFixed(1) : "\u2014";
    const statusText = !online && onlineEnt ? "Asleep" : this._val(ENTITIES.PARKING_BRAKE) === "on" ? "Parked" : (() => {
      if (!this.config.show_speed) return null;
      const s4 = this._attr(ENTITIES.LOCATION, "speed");
      return s4 != null && Number(s4) > 0 ? `${Math.round(Number(s4))} km/h` : null;
    })();
    const chargerSub = charging ? `Charging \xB7 ${chgRate ?? "\u2014"} ${chgRateUnit}` : pluggedIn ? "Plugged in" : chgState;
    const climateSub = climOn ? `${tempStr}${tempUnit}` : "Off";
    const controlsSub = lockState ? isLocked ? "Locked" : "Unlocked" : null;
    const locationState = this._val(ENTITIES.LOCATION);
    const locationSub = locationState ? locationState.charAt(0).toUpperCase() + locationState.slice(1).replace(/_/g, " ") : null;
    const sentryOn = this._val(ENTITIES.SENTRY_MODE) === "on";
    const curModel = TESLA_MODELS.find((m2) => m2.id === this.config.car_model);
    const curVariant = curModel?.variants.find((v2) => v2.id === this.config.car_variant);
    const modelSub = curModel && curVariant ? `${curModel.name} \xB7 ${curVariant.label}` : this.config.car_model;
    const isCustom = co?.dir === "custom";
    const curColourObj = isCustom ? null : FACTORY_COLOURS.find((c4) => c4.dir === this.config.car_color);
    const colourSub = isCustom ? "Custom" : curColourObj?.name ?? this.config.car_color;
    const availColours = getVariantColours(this.config.car_model, this.config.car_variant);
    const isLandscape = this._layout === "landscape";
    const sizeClass = this._cardSize !== "medium" ? `size-${this._cardSize}` : "";
    return b2`
      <ha-card class="${isLandscape ? "landscape" : ""} ${sizeClass}">

        <!-- ── Header (hidden when a submenu is open) ─────── -->
        ${!menu ? b2`
          <div class="header">
            <div class="header-left">
              <div class="car-name-row">
                <span class="car-name">${this.config.name ?? this.config.car_name}</span>
                <span class="icon name-chevron">${o5(ICONS["chevron-down"])}</span>
              </div>
              <div class="battery-summary">
                ${battery != null ? b2`
                  <div class="battery-bar-small">
                    <div class="battery-fill-small ${batCls}" style="width:${batPct}%"></div>
                  </div>
                  <span class="range-text">${range ?? "\u2014"}</span>` : ""}
              </div>
              ${statusText ? b2`<span class="status-text">${statusText}</span>` : ""}
            </div>
            <div class="header-right">
              <button class="icon-btn" title="Settings"
                @click=${() => this._openSettings()}>
                <span class="icon">${o5(ICONS.settings)}</span>
              </button>
              <button class="icon-btn" title="Refresh"
                @click=${() => this._svc("button", "press", ENTITIES.FORCE_UPDATE)}>
                <span class="icon">${o5(ICONS.refresh)}</span>
              </button>
            </div>
          </div>
        ` : ""}

        <!-- ── Landing body (car + nav side-by-side in landscape) ── -->
        ${!menu ? b2`
          <div class="landing-body">
            <div class="landing-left">
              <div class="car-image-area">
                ${this._imageError ? b2`
                  <div class="car-image-placeholder">
                    <span class="icon">${o5(ICONS.car)}</span>
                    <span>Image not found</span>
                  </div>` : b2`
                  <img class="car-image"
                    src="${this._overlayUrl(baseImg)}"
                    alt="Tesla ${this.config.car_model}"
                    @error=${() => {
      this._imageError = true;
    }}
                    @load=${() => {
      this._imageError = false;
    }}
                  />
                  ${belowTrunkFiles.map((f3) => b2`
                    <img class="car-overlay"
                      src="${this._overlayUrl(f3)}"
                      alt="" />`)}
                  ${trunkOverlay ? b2`
                    <img class="car-overlay"
                      src="${this._overlayUrl(trunkOverlay)}"
                      alt="" />` : ""}
                  ${overlayFiles.map((f3) => b2`
                    <img class="car-overlay"
                      src="${this._overlayUrl(f3)}"
                      alt="" />`)}
                  ${charging && useOncharge && this._cableAvail ? b2`
                    <img class="car-overlay charging-glow"
                      src="${this._overlayUrl("oncharge-cable-overlay.png")}"
                      alt="" />` : ""}
                `}
                ${this._hasCustomOverlay ? b2`
                  <div class="car-colour-overlay"
                    style="${this._customOverlayStyleFor(baseImg)}"></div>` : ""}
              </div>
              <!-- Quick action icons: lock, controls, charge, climate -->
              <div class="quick-actions">
                ${lockState ? b2`
                  <button class="quick-btn ${isLocked ? "q-locked" : "q-unlocked"}"
                    @click=${() => this._svc("lock", isLocked ? "unlock" : "lock", ENTITIES.DOOR_LOCK)}>
                    <span class="icon">${o5(isLocked ? ICONS.lock : ICONS.unlock)}</span>
                  </button>` : b2`<span style="width:48px"></span>`}
                <button class="quick-btn" @click=${this._toggleControls}>
                  <span class="icon">${o5(ICONS.car)}</span>
                </button>
                <button class="quick-btn ${charging ? "q-active" : ""}" @click=${this._toggleCharger}>
                  <span class="icon">${o5(ICONS["charge-bolt"])}</span>
                </button>
                <button class="quick-btn ${climOn ? "q-active" : ""}" @click=${this._toggleClimate}>
                  <span class="icon">${o5(ICONS["climate-fan"])}</span>
                </button>
              </div>
            </div>
            <div class="nav-rows">
              <button class="nav-row"
                @click=${this._toggleControls}>
                <span class="icon nav-icon">${o5(ICONS.car)}</span>
                <div class="nav-text">
                  <span class="nav-label">Controls</span>
                  ${controlsSub ? b2`<span class="nav-sublabel">${controlsSub}</span>` : ""}
                </div>
                <span class="icon nav-chevron">${o5(ICONS["chevron-right"])}</span>
              </button>
              <button class="nav-row"
                @click=${this._toggleClimate}>
                <span class="icon nav-icon">${o5(ICONS["climate-fan"])}</span>
                <div class="nav-text">
                  <span class="nav-label">Climate</span>
                  <span class="nav-sublabel">${climateSub}</span>
                </div>
                <span class="icon nav-chevron">${o5(ICONS["chevron-right"])}</span>
              </button>
              <button class="nav-row" disabled>
                <span class="icon nav-icon">${o5(ICONS.location)}</span>
                <div class="nav-text">
                  <span class="nav-label">Location</span>
                  ${locationSub ? b2`<span class="nav-sublabel">${locationSub}</span>` : ""}
                </div>
                <span class="icon nav-chevron">${o5(ICONS["chevron-right"])}</span>
              </button>
              <button class="nav-row"
                @click=${this._toggleCharger}>
                <span class="icon nav-icon">${o5(ICONS["charge-bolt"])}</span>
                <div class="nav-text">
                  <span class="nav-label">Charging</span>
                  <span class="nav-sublabel">${chargerSub}</span>
                </div>
                <span class="icon nav-chevron">${o5(ICONS["chevron-right"])}</span>
              </button>
              <button class="nav-row" disabled>
                <span class="icon nav-icon">${o5(ICONS.schedule)}</span>
                <div class="nav-text">
                  <span class="nav-label">Set Schedules</span>
                </div>
                <span class="icon nav-chevron">${o5(ICONS["chevron-right"])}</span>
              </button>
              <button class="nav-row" disabled>
                <span class="icon nav-icon">${o5(ICONS.security)}</span>
                <div class="nav-text">
                  <span class="nav-label">Security & Drivers</span>
                  <span class="nav-sublabel">${sentryOn ? "Sentry Mode active" : "Phone key disconnected"}</span>
                </div>
                <span class="icon nav-chevron">${o5(ICONS["chevron-right"])}</span>
              </button>
            </div>
          </div>
        ` : ""}

        <!-- ── Submenu panels ─────────────────────────────── -->
        ${menu === "charger" ? b2`
          <tesla-menu-charger
            .hass=${this.hass}
            .config=${this.config}
            .layout=${this._layout}

            @close-menu=${this._handleCloseMenu}>
          </tesla-menu-charger>` : ""}

        ${menu === "climate" ? b2`
          <tesla-menu-climate
            .hass=${this.hass}
            .config=${this.config}
            .customColour=${this._customColour}
            .layout=${this._layout}

            @close-menu=${this._handleCloseMenu}>
          </tesla-menu-climate>` : ""}

        ${menu === "controls" ? b2`
          <tesla-menu-controls
            .hass=${this.hass}
            .config=${this.config}
            .customColour=${this._customColour}
            .layout=${this._layout}

            @close-menu=${this._handleCloseMenu}>
          </tesla-menu-controls>` : ""}

        <!-- ── Settings: main menu ─────────────────────────── -->
        ${this._settingsView === "main" ? b2`
          <div class="settings-overlay"
            @click=${(e6) => this._onSettingsOverlayClick(e6)}>
            <div class="settings-panel">
              <div class="settings-header">
                <span class="settings-title">Settings</span>
                <button class="settings-close"
                  @click=${() => this._closeSettings()}>&times;</button>
              </div>
              <div class="settings-rows">
                <button class="settings-row"
                  @click=${() => this._openModelPicker()}>
                  <span class="icon settings-row-icon">${o5(ICONS.car)}</span>
                  <div class="settings-row-text">
                    <span class="settings-row-label">Model & Colour</span>
                    <span class="settings-row-sub">${modelSub} · ${colourSub}</span>
                  </div>
                  <span class="icon settings-row-chevron">${o5(ICONS["chevron-right"])}</span>
                </button>
                <div class="settings-row settings-row-static">
                  <span class="icon settings-row-icon">${o5(ICONS.resize)}</span>
                  <div class="settings-row-text">
                    <span class="settings-row-label">Card Size</span>
                  </div>
                  <div class="settings-size-control">
                    ${CARD_SIZES.map((s4) => b2`
                      <button class="settings-size-btn${this._cardSize === s4 ? " selected" : ""}"
                        @click=${(e6) => {
      e6.stopPropagation();
      this._setCardSize(s4);
    }}>
                        ${s4 === "small" ? "S" : s4 === "medium" ? "M" : "L"}
                      </button>`)}
                  </div>
                </div>
                <button class="settings-row"
                  @click=${() => this._toggleLayout()}>
                  <span class="icon settings-row-icon">${o5(ICONS.layout)}</span>
                  <div class="settings-row-text">
                    <span class="settings-row-label">Layout</span>
                    <span class="settings-row-sub">${this._layout === "landscape" ? "Landscape" : "Portrait"}</span>
                  </div>
                  <span class="icon settings-row-chevron">${o5(ICONS["chevron-right"])}</span>
                </button>
              </div>
            </div>
          </div>
        ` : ""}

        <!-- ── Settings: model picker ──────────────────────── -->
        ${this._settingsView === "model" ? b2`
          <tesla-model-picker
            .model=${this.config.car_model}
            .variant=${this.config.car_variant}
            slide-from=${this._settingsSlide ?? "up"}
            @model-changed=${this._handleModelChanged}
            @picker-back=${this._handleModelBack}
            @picker-close=${this._handlePickerClose}>
          </tesla-model-picker>` : ""}

        <!-- ── Settings: colour picker ─────────────────────── -->
        ${this._settingsView === "colour" ? b2`
          <tesla-colour-picker
            .selected=${co?.dir ?? this.config.car_color}
            .available=${availColours}
            .customH=${co?.dir === "custom" ? co.h : 0}
            .customS=${co?.dir === "custom" ? co.s : 80}
            showBack
            slide-from=${this._settingsSlide ?? "up"}
            @colour-changed=${this._handleColourChanged}
            @picker-back=${this._handleColourBack}
            @picker-close=${this._handlePickerClose}>
          </tesla-colour-picker>` : ""}

      </ha-card>
    `;
  }
  getCardSize() {
    return 5;
  }
  // Sections view grid hints — card fills the section by default
  getGridOptions() {
    return {
      columns: 12,
      // full section width
      min_columns: 4,
      // minimum ~1/3 section
      rows: "auto",
      min_rows: 3
    };
  }
};
// Cache-bust version — changes on each page load to pick up new images
__publicField(_TeslaCard, "_imgVer", Date.now());
var TeslaCard = _TeslaCard;
customElements.define("tesla-card", TeslaCard);
window.customCards = window.customCards || [];
window.customCards.push({
  type: "tesla-card",
  name: "Tesla Card",
  description: "A Lovelace card for the alandtse/tesla Home Assistant integration",
  preview: false
});
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9zcmMvY3NzLXRhZy50cyIsICIuLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L3NyYy9yZWFjdGl2ZS1lbGVtZW50LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9zcmMvbGl0LWh0bWwudHMiLCAiLi4vbm9kZV9tb2R1bGVzL2xpdC1lbGVtZW50L3NyYy9saXQtZWxlbWVudC50cyIsICIuLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvc3JjL2RpcmVjdGl2ZS50cyIsICIuLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvc3JjL2RpcmVjdGl2ZXMvdW5zYWZlLWh0bWwudHMiLCAiLi4vc3JjL3N0eWxlcy5qcyIsICIuLi9zcmMvZW50aXR5LWNvbmZpZy5qcyIsICIuLi9zcmMvaWNvbnMuanMiLCAiLi4vbW9kZWxzLmpzb24iLCAiLi4vc3JjL3JlY29sb3VyLmpzIiwgIi4uL3NyYy9tb2RlbHMuanMiLCAiLi4vc3JjL2VkaXRvci5qcyIsICIuLi9zcmMvdGVzbGEtYmFzZS5qcyIsICIuLi9zcmMvbWVudS1jaGFyZ2VyLmpzIiwgIi4uL3NyYy9tZW51LWNsaW1hdGUuanMiLCAiLi4vc3JjL21lbnUtY29udHJvbHMuanMiLCAiLi4vc3JjL2NvbG91ci1waWNrZXIuanMiLCAiLi4vc3JjL21vZGVsLXBpY2tlci5qcyIsICIuLi9zcmMvdGVzbGEtY2FyZC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5cbmNvbnN0IE5PREVfTU9ERSA9IGZhbHNlO1xuXG4vLyBBbGxvd3MgbWluaWZpZXJzIHRvIHJlbmFtZSByZWZlcmVuY2VzIHRvIGdsb2JhbFRoaXNcbmNvbnN0IGdsb2JhbCA9IGdsb2JhbFRoaXM7XG5cbi8qKlxuICogV2hldGhlciB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzIGBhZG9wdGVkU3R5bGVTaGVldHNgLlxuICovXG5leHBvcnQgY29uc3Qgc3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzOiBib29sZWFuID1cbiAgZ2xvYmFsLlNoYWRvd1Jvb3QgJiZcbiAgKGdsb2JhbC5TaGFkeUNTUyA9PT0gdW5kZWZpbmVkIHx8IGdsb2JhbC5TaGFkeUNTUy5uYXRpdmVTaGFkb3cpICYmXG4gICdhZG9wdGVkU3R5bGVTaGVldHMnIGluIERvY3VtZW50LnByb3RvdHlwZSAmJlxuICAncmVwbGFjZScgaW4gQ1NTU3R5bGVTaGVldC5wcm90b3R5cGU7XG5cbi8qKlxuICogQSBDU1NSZXN1bHQgb3IgbmF0aXZlIENTU1N0eWxlU2hlZXQuXG4gKlxuICogSW4gYnJvd3NlcnMgdGhhdCBzdXBwb3J0IGNvbnN0cnVjdGlibGUgQ1NTIHN0eWxlIHNoZWV0cywgQ1NTU3R5bGVTaGVldFxuICogb2JqZWN0IGNhbiBiZSB1c2VkIGZvciBzdHlsaW5nIGFsb25nIHNpZGUgQ1NTUmVzdWx0IGZyb20gdGhlIGBjc3NgXG4gKiB0ZW1wbGF0ZSB0YWcuXG4gKi9cbmV4cG9ydCB0eXBlIENTU1Jlc3VsdE9yTmF0aXZlID0gQ1NTUmVzdWx0IHwgQ1NTU3R5bGVTaGVldDtcblxuZXhwb3J0IHR5cGUgQ1NTUmVzdWx0QXJyYXkgPSBBcnJheTxDU1NSZXN1bHRPck5hdGl2ZSB8IENTU1Jlc3VsdEFycmF5PjtcblxuLyoqXG4gKiBBIHNpbmdsZSBDU1NSZXN1bHQsIENTU1N0eWxlU2hlZXQsIG9yIGFuIGFycmF5IG9yIG5lc3RlZCBhcnJheXMgb2YgdGhvc2UuXG4gKi9cbmV4cG9ydCB0eXBlIENTU1Jlc3VsdEdyb3VwID0gQ1NTUmVzdWx0T3JOYXRpdmUgfCBDU1NSZXN1bHRBcnJheTtcblxuY29uc3QgY29uc3RydWN0aW9uVG9rZW4gPSBTeW1ib2woKTtcblxuY29uc3QgY3NzVGFnQ2FjaGUgPSBuZXcgV2Vha01hcDxUZW1wbGF0ZVN0cmluZ3NBcnJheSwgQ1NTU3R5bGVTaGVldD4oKTtcblxuLyoqXG4gKiBBIGNvbnRhaW5lciBmb3IgYSBzdHJpbmcgb2YgQ1NTIHRleHQsIHRoYXQgbWF5IGJlIHVzZWQgdG8gY3JlYXRlIGEgQ1NTU3R5bGVTaGVldC5cbiAqXG4gKiBDU1NSZXN1bHQgaXMgdGhlIHJldHVybiB2YWx1ZSBvZiBgY3NzYC10YWdnZWQgdGVtcGxhdGUgbGl0ZXJhbHMgYW5kXG4gKiBgdW5zYWZlQ1NTKClgLiBJbiBvcmRlciB0byBlbnN1cmUgdGhhdCBDU1NSZXN1bHRzIGFyZSBvbmx5IGNyZWF0ZWQgdmlhIHRoZVxuICogYGNzc2AgdGFnIGFuZCBgdW5zYWZlQ1NTKClgLCBDU1NSZXN1bHQgY2Fubm90IGJlIGNvbnN0cnVjdGVkIGRpcmVjdGx5LlxuICovXG5leHBvcnQgY2xhc3MgQ1NTUmVzdWx0IHtcbiAgLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbiAgWydfJGNzc1Jlc3VsdCQnXSA9IHRydWU7XG4gIHJlYWRvbmx5IGNzc1RleHQ6IHN0cmluZztcbiAgcHJpdmF0ZSBfc3R5bGVTaGVldD86IENTU1N0eWxlU2hlZXQ7XG4gIHByaXZhdGUgX3N0cmluZ3M6IFRlbXBsYXRlU3RyaW5nc0FycmF5IHwgdW5kZWZpbmVkO1xuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoXG4gICAgY3NzVGV4dDogc3RyaW5nLFxuICAgIHN0cmluZ3M6IFRlbXBsYXRlU3RyaW5nc0FycmF5IHwgdW5kZWZpbmVkLFxuICAgIHNhZmVUb2tlbjogc3ltYm9sXG4gICkge1xuICAgIGlmIChzYWZlVG9rZW4gIT09IGNvbnN0cnVjdGlvblRva2VuKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdDU1NSZXN1bHQgaXMgbm90IGNvbnN0cnVjdGFibGUuIFVzZSBgdW5zYWZlQ1NTYCBvciBgY3NzYCBpbnN0ZWFkLidcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMuY3NzVGV4dCA9IGNzc1RleHQ7XG4gICAgdGhpcy5fc3RyaW5ncyA9IHN0cmluZ3M7XG4gIH1cblxuICAvLyBUaGlzIGlzIGEgZ2V0dGVyIHNvIHRoYXQgaXQncyBsYXp5LiBJbiBwcmFjdGljZSwgdGhpcyBtZWFucyBzdHlsZXNoZWV0c1xuICAvLyBhcmUgbm90IGNyZWF0ZWQgdW50aWwgdGhlIGZpcnN0IGVsZW1lbnQgaW5zdGFuY2UgaXMgbWFkZS5cbiAgZ2V0IHN0eWxlU2hlZXQoKTogQ1NTU3R5bGVTaGVldCB8IHVuZGVmaW5lZCB7XG4gICAgLy8gSWYgYHN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0c2AgaXMgdHJ1ZSB0aGVuIHdlIGFzc3VtZSBDU1NTdHlsZVNoZWV0IGlzXG4gICAgLy8gY29uc3RydWN0YWJsZS5cbiAgICBsZXQgc3R5bGVTaGVldCA9IHRoaXMuX3N0eWxlU2hlZXQ7XG4gICAgY29uc3Qgc3RyaW5ncyA9IHRoaXMuX3N0cmluZ3M7XG4gICAgaWYgKHN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0cyAmJiBzdHlsZVNoZWV0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGNhY2hlYWJsZSA9IHN0cmluZ3MgIT09IHVuZGVmaW5lZCAmJiBzdHJpbmdzLmxlbmd0aCA9PT0gMTtcbiAgICAgIGlmIChjYWNoZWFibGUpIHtcbiAgICAgICAgc3R5bGVTaGVldCA9IGNzc1RhZ0NhY2hlLmdldChzdHJpbmdzKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdHlsZVNoZWV0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgKHRoaXMuX3N0eWxlU2hlZXQgPSBzdHlsZVNoZWV0ID0gbmV3IENTU1N0eWxlU2hlZXQoKSkucmVwbGFjZVN5bmMoXG4gICAgICAgICAgdGhpcy5jc3NUZXh0XG4gICAgICAgICk7XG4gICAgICAgIGlmIChjYWNoZWFibGUpIHtcbiAgICAgICAgICBjc3NUYWdDYWNoZS5zZXQoc3RyaW5ncywgc3R5bGVTaGVldCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlU2hlZXQ7XG4gIH1cblxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNzc1RleHQ7XG4gIH1cbn1cblxudHlwZSBDb25zdHJ1Y3RhYmxlQ1NTUmVzdWx0ID0gQ1NTUmVzdWx0ICYge1xuICBuZXcgKFxuICAgIGNzc1RleHQ6IHN0cmluZyxcbiAgICBzdHJpbmdzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSB8IHVuZGVmaW5lZCxcbiAgICBzYWZlVG9rZW46IHN5bWJvbFxuICApOiBDU1NSZXN1bHQ7XG59O1xuXG5jb25zdCB0ZXh0RnJvbUNTU1Jlc3VsdCA9ICh2YWx1ZTogQ1NTUmVzdWx0R3JvdXAgfCBudW1iZXIpID0+IHtcbiAgLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbiAgaWYgKCh2YWx1ZSBhcyBDU1NSZXN1bHQpWydfJGNzc1Jlc3VsdCQnXSA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiAodmFsdWUgYXMgQ1NTUmVzdWx0KS5jc3NUZXh0O1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYFZhbHVlIHBhc3NlZCB0byAnY3NzJyBmdW5jdGlvbiBtdXN0IGJlIGEgJ2NzcycgZnVuY3Rpb24gcmVzdWx0OiBgICtcbiAgICAgICAgYCR7dmFsdWV9LiBVc2UgJ3Vuc2FmZUNTUycgdG8gcGFzcyBub24tbGl0ZXJhbCB2YWx1ZXMsIGJ1dCB0YWtlIGNhcmUgYCArXG4gICAgICAgIGB0byBlbnN1cmUgcGFnZSBzZWN1cml0eS5gXG4gICAgKTtcbiAgfVxufTtcblxuLyoqXG4gKiBXcmFwIGEgdmFsdWUgZm9yIGludGVycG9sYXRpb24gaW4gYSB7QGxpbmtjb2RlIGNzc30gdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWwuXG4gKlxuICogVGhpcyBpcyB1bnNhZmUgYmVjYXVzZSB1bnRydXN0ZWQgQ1NTIHRleHQgY2FuIGJlIHVzZWQgdG8gcGhvbmUgaG9tZVxuICogb3IgZXhmaWx0cmF0ZSBkYXRhIHRvIGFuIGF0dGFja2VyIGNvbnRyb2xsZWQgc2l0ZS4gVGFrZSBjYXJlIHRvIG9ubHkgdXNlXG4gKiB0aGlzIHdpdGggdHJ1c3RlZCBpbnB1dC5cbiAqL1xuZXhwb3J0IGNvbnN0IHVuc2FmZUNTUyA9ICh2YWx1ZTogdW5rbm93bikgPT5cbiAgbmV3IChDU1NSZXN1bHQgYXMgQ29uc3RydWN0YWJsZUNTU1Jlc3VsdCkoXG4gICAgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogU3RyaW5nKHZhbHVlKSxcbiAgICB1bmRlZmluZWQsXG4gICAgY29uc3RydWN0aW9uVG9rZW5cbiAgKTtcblxuLyoqXG4gKiBBIHRlbXBsYXRlIGxpdGVyYWwgdGFnIHdoaWNoIGNhbiBiZSB1c2VkIHdpdGggTGl0RWxlbWVudCdzXG4gKiB7QGxpbmtjb2RlIExpdEVsZW1lbnQuc3R5bGVzfSBwcm9wZXJ0eSB0byBzZXQgZWxlbWVudCBzdHlsZXMuXG4gKlxuICogRm9yIHNlY3VyaXR5IHJlYXNvbnMsIG9ubHkgbGl0ZXJhbCBzdHJpbmcgdmFsdWVzIGFuZCBudW1iZXIgbWF5IGJlIHVzZWQgaW5cbiAqIGVtYmVkZGVkIGV4cHJlc3Npb25zLiBUbyBpbmNvcnBvcmF0ZSBub24tbGl0ZXJhbCB2YWx1ZXMge0BsaW5rY29kZSB1bnNhZmVDU1N9XG4gKiBtYXkgYmUgdXNlZCBpbnNpZGUgYW4gZXhwcmVzc2lvbi5cbiAqL1xuZXhwb3J0IGNvbnN0IGNzcyA9IChcbiAgc3RyaW5nczogVGVtcGxhdGVTdHJpbmdzQXJyYXksXG4gIC4uLnZhbHVlczogKENTU1Jlc3VsdEdyb3VwIHwgbnVtYmVyKVtdXG4pOiBDU1NSZXN1bHQgPT4ge1xuICBjb25zdCBjc3NUZXh0ID1cbiAgICBzdHJpbmdzLmxlbmd0aCA9PT0gMVxuICAgICAgPyBzdHJpbmdzWzBdXG4gICAgICA6IHZhbHVlcy5yZWR1Y2UoXG4gICAgICAgICAgKGFjYywgdiwgaWR4KSA9PiBhY2MgKyB0ZXh0RnJvbUNTU1Jlc3VsdCh2KSArIHN0cmluZ3NbaWR4ICsgMV0sXG4gICAgICAgICAgc3RyaW5nc1swXVxuICAgICAgICApO1xuICByZXR1cm4gbmV3IChDU1NSZXN1bHQgYXMgQ29uc3RydWN0YWJsZUNTU1Jlc3VsdCkoXG4gICAgY3NzVGV4dCxcbiAgICBzdHJpbmdzLFxuICAgIGNvbnN0cnVjdGlvblRva2VuXG4gICk7XG59O1xuXG4vKipcbiAqIEFwcGxpZXMgdGhlIGdpdmVuIHN0eWxlcyB0byBhIGBzaGFkb3dSb290YC4gV2hlbiBTaGFkb3cgRE9NIGlzXG4gKiBhdmFpbGFibGUgYnV0IGBhZG9wdGVkU3R5bGVTaGVldHNgIGlzIG5vdCwgc3R5bGVzIGFyZSBhcHBlbmRlZCB0byB0aGVcbiAqIGBzaGFkb3dSb290YCB0byBbbWltaWMgdGhlIG5hdGl2ZSBmZWF0dXJlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvU2hhZG93Um9vdC9hZG9wdGVkU3R5bGVTaGVldHMpLlxuICogTm90ZSwgd2hlbiBzaGltbWluZyBpcyB1c2VkLCBhbnkgc3R5bGVzIHRoYXQgYXJlIHN1YnNlcXVlbnRseSBwbGFjZWQgaW50b1xuICogdGhlIHNoYWRvd1Jvb3Qgc2hvdWxkIGJlIHBsYWNlZCAqYmVmb3JlKiBhbnkgc2hpbW1lZCBhZG9wdGVkIHN0eWxlcy4gVGhpc1xuICogd2lsbCBtYXRjaCBzcGVjIGJlaGF2aW9yIHRoYXQgZ2l2ZXMgYWRvcHRlZCBzaGVldHMgcHJlY2VkZW5jZSBvdmVyIHN0eWxlcyBpblxuICogc2hhZG93Um9vdC5cbiAqL1xuZXhwb3J0IGNvbnN0IGFkb3B0U3R5bGVzID0gKFxuICByZW5kZXJSb290OiBTaGFkb3dSb290LFxuICBzdHlsZXM6IEFycmF5PENTU1Jlc3VsdE9yTmF0aXZlPlxuKSA9PiB7XG4gIGlmIChzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMpIHtcbiAgICAocmVuZGVyUm9vdCBhcyBTaGFkb3dSb290KS5hZG9wdGVkU3R5bGVTaGVldHMgPSBzdHlsZXMubWFwKChzKSA9PlxuICAgICAgcyBpbnN0YW5jZW9mIENTU1N0eWxlU2hlZXQgPyBzIDogcy5zdHlsZVNoZWV0IVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgZm9yIChjb25zdCBzIG9mIHN0eWxlcykge1xuICAgICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgIGNvbnN0IG5vbmNlID0gKGdsb2JhbCBhcyBhbnkpWydsaXROb25jZSddO1xuICAgICAgaWYgKG5vbmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKCdub25jZScsIG5vbmNlKTtcbiAgICAgIH1cbiAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gKHMgYXMgQ1NTUmVzdWx0KS5jc3NUZXh0O1xuICAgICAgcmVuZGVyUm9vdC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBjc3NSZXN1bHRGcm9tU3R5bGVTaGVldCA9IChzaGVldDogQ1NTU3R5bGVTaGVldCkgPT4ge1xuICBsZXQgY3NzVGV4dCA9ICcnO1xuICBmb3IgKGNvbnN0IHJ1bGUgb2Ygc2hlZXQuY3NzUnVsZXMpIHtcbiAgICBjc3NUZXh0ICs9IHJ1bGUuY3NzVGV4dDtcbiAgfVxuICByZXR1cm4gdW5zYWZlQ1NTKGNzc1RleHQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldENvbXBhdGlibGVTdHlsZSA9XG4gIHN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0cyB8fFxuICAoTk9ERV9NT0RFICYmIGdsb2JhbC5DU1NTdHlsZVNoZWV0ID09PSB1bmRlZmluZWQpXG4gICAgPyAoczogQ1NTUmVzdWx0T3JOYXRpdmUpID0+IHNcbiAgICA6IChzOiBDU1NSZXN1bHRPck5hdGl2ZSkgPT5cbiAgICAgICAgcyBpbnN0YW5jZW9mIENTU1N0eWxlU2hlZXQgPyBjc3NSZXN1bHRGcm9tU3R5bGVTaGVldChzKSA6IHM7XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5cbi8qKlxuICogVXNlIHRoaXMgbW9kdWxlIGlmIHlvdSB3YW50IHRvIGNyZWF0ZSB5b3VyIG93biBiYXNlIGNsYXNzIGV4dGVuZGluZ1xuICoge0BsaW5rIFJlYWN0aXZlRWxlbWVudH0uXG4gKiBAcGFja2FnZURvY3VtZW50YXRpb25cbiAqL1xuXG5pbXBvcnQge1xuICBnZXRDb21wYXRpYmxlU3R5bGUsXG4gIGFkb3B0U3R5bGVzLFxuICBDU1NSZXN1bHRHcm91cCxcbiAgQ1NTUmVzdWx0T3JOYXRpdmUsXG59IGZyb20gJy4vY3NzLXRhZy5qcyc7XG5pbXBvcnQgdHlwZSB7XG4gIFJlYWN0aXZlQ29udHJvbGxlcixcbiAgUmVhY3RpdmVDb250cm9sbGVySG9zdCxcbn0gZnJvbSAnLi9yZWFjdGl2ZS1jb250cm9sbGVyLmpzJztcblxuLy8gSW4gdGhlIE5vZGUgYnVpbGQsIHRoaXMgaW1wb3J0IHdpbGwgYmUgaW5qZWN0ZWQgYnkgUm9sbHVwOlxuLy8gaW1wb3J0IHtIVE1MRWxlbWVudCwgY3VzdG9tRWxlbWVudHN9IGZyb20gJ0BsaXQtbGFicy9zc3ItZG9tLXNoaW0nO1xuXG5leHBvcnQgKiBmcm9tICcuL2Nzcy10YWcuanMnO1xuZXhwb3J0IHR5cGUge1xuICBSZWFjdGl2ZUNvbnRyb2xsZXIsXG4gIFJlYWN0aXZlQ29udHJvbGxlckhvc3QsXG59IGZyb20gJy4vcmVhY3RpdmUtY29udHJvbGxlci5qcyc7XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgYHJlYWRvbmx5YCBtb2RpZmllciBmcm9tIHByb3BlcnRpZXMgaW4gdGhlIHVuaW9uIEsuXG4gKlxuICogVGhpcyBpcyBhIHNhZmVyIHdheSB0byBjYXN0IGEgdmFsdWUgdG8gYSB0eXBlIHdpdGggYSBtdXRhYmxlIHZlcnNpb24gb2YgYVxuICogcmVhZG9ubHkgZmllbGQsIHRoYW4gY2FzdGluZyB0byBhbiBpbnRlcmZhY2Ugd2l0aCB0aGUgZmllbGQgcmUtZGVjbGFyZWRcbiAqIGJlY2F1c2UgaXQgcHJlc2VydmVzIHRoZSB0eXBlIG9mIGFsbCB0aGUgZmllbGRzIGFuZCB3YXJucyBvbiB0eXBvcy5cbiAqL1xudHlwZSBNdXRhYmxlPFQsIEsgZXh0ZW5kcyBrZXlvZiBUPiA9IE9taXQ8VCwgSz4gJiB7XG4gIC1yZWFkb25seSBbUCBpbiBrZXlvZiBQaWNrPFQsIEs+XTogUCBleHRlbmRzIEsgPyBUW1BdIDogbmV2ZXI7XG59O1xuXG4vLyBUT0RPIChqdXN0aW5mYWduYW5pKTogQWRkIGBoYXNPd25gIGhlcmUgd2hlbiB3ZSBzaGlwIEVTMjAyMlxuY29uc3Qge1xuICBpcyxcbiAgZGVmaW5lUHJvcGVydHksXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzLFxuICBnZXRQcm90b3R5cGVPZixcbn0gPSBPYmplY3Q7XG5cbmNvbnN0IE5PREVfTU9ERSA9IGZhbHNlO1xuXG4vLyBMZXRzIGEgbWluaWZpZXIgcmVwbGFjZSBnbG9iYWxUaGlzIHJlZmVyZW5jZXMgd2l0aCBhIG1pbmlmaWVkIG5hbWVcbmNvbnN0IGdsb2JhbCA9IGdsb2JhbFRoaXM7XG5cbmlmIChOT0RFX01PREUpIHtcbiAgZ2xvYmFsLmN1c3RvbUVsZW1lbnRzID8/PSBjdXN0b21FbGVtZW50cztcbn1cblxuY29uc3QgREVWX01PREUgPSB0cnVlO1xuXG5sZXQgaXNzdWVXYXJuaW5nOiAoY29kZTogc3RyaW5nLCB3YXJuaW5nOiBzdHJpbmcpID0+IHZvaWQ7XG5cbmNvbnN0IHRydXN0ZWRUeXBlcyA9IChnbG9iYWwgYXMgdW5rbm93biBhcyB7dHJ1c3RlZFR5cGVzPzoge2VtcHR5U2NyaXB0OiAnJ319KVxuICAudHJ1c3RlZFR5cGVzO1xuXG4vLyBUZW1wb3Jhcnkgd29ya2Fyb3VuZCBmb3IgaHR0cHM6Ly9jcmJ1Zy5jb20vOTkzMjY4XG4vLyBDdXJyZW50bHksIGFueSBhdHRyaWJ1dGUgc3RhcnRpbmcgd2l0aCBcIm9uXCIgaXMgY29uc2lkZXJlZCB0byBiZSBhXG4vLyBUcnVzdGVkU2NyaXB0IHNvdXJjZS4gU3VjaCBib29sZWFuIGF0dHJpYnV0ZXMgbXVzdCBiZSBzZXQgdG8gdGhlIGVxdWl2YWxlbnRcbi8vIHRydXN0ZWQgZW1wdHlTY3JpcHQgdmFsdWUuXG5jb25zdCBlbXB0eVN0cmluZ0ZvckJvb2xlYW5BdHRyaWJ1dGUgPSB0cnVzdGVkVHlwZXNcbiAgPyAodHJ1c3RlZFR5cGVzLmVtcHR5U2NyaXB0IGFzIHVua25vd24gYXMgJycpXG4gIDogJyc7XG5cbmNvbnN0IHBvbHlmaWxsU3VwcG9ydCA9IERFVl9NT0RFXG4gID8gZ2xvYmFsLnJlYWN0aXZlRWxlbWVudFBvbHlmaWxsU3VwcG9ydERldk1vZGVcbiAgOiBnbG9iYWwucmVhY3RpdmVFbGVtZW50UG9seWZpbGxTdXBwb3J0O1xuXG5pZiAoREVWX01PREUpIHtcbiAgLy8gRW5zdXJlIHdhcm5pbmdzIGFyZSBpc3N1ZWQgb25seSAxeCwgZXZlbiBpZiBtdWx0aXBsZSB2ZXJzaW9ucyBvZiBMaXRcbiAgLy8gYXJlIGxvYWRlZC5cbiAgZ2xvYmFsLmxpdElzc3VlZFdhcm5pbmdzID8/PSBuZXcgU2V0KCk7XG5cbiAgLyoqXG4gICAqIElzc3VlIGEgd2FybmluZyBpZiB3ZSBoYXZlbid0IGFscmVhZHksIGJhc2VkIGVpdGhlciBvbiBgY29kZWAgb3IgYHdhcm5pbmdgLlxuICAgKiBXYXJuaW5ncyBhcmUgZGlzYWJsZWQgYXV0b21hdGljYWxseSBvbmx5IGJ5IGB3YXJuaW5nYDsgZGlzYWJsaW5nIHZpYSBgY29kZWBcbiAgICogY2FuIGJlIGRvbmUgYnkgdXNlcnMuXG4gICAqL1xuICBpc3N1ZVdhcm5pbmcgPSAoY29kZTogc3RyaW5nLCB3YXJuaW5nOiBzdHJpbmcpID0+IHtcbiAgICB3YXJuaW5nICs9IGAgU2VlIGh0dHBzOi8vbGl0LmRldi9tc2cvJHtjb2RlfSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO1xuICAgIGlmIChcbiAgICAgICFnbG9iYWwubGl0SXNzdWVkV2FybmluZ3MhLmhhcyh3YXJuaW5nKSAmJlxuICAgICAgIWdsb2JhbC5saXRJc3N1ZWRXYXJuaW5ncyEuaGFzKGNvZGUpXG4gICAgKSB7XG4gICAgICBjb25zb2xlLndhcm4od2FybmluZyk7XG4gICAgICBnbG9iYWwubGl0SXNzdWVkV2FybmluZ3MhLmFkZCh3YXJuaW5nKTtcbiAgICB9XG4gIH07XG5cbiAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xuICAgIGlzc3VlV2FybmluZyhcbiAgICAgICdkZXYtbW9kZScsXG4gICAgICBgTGl0IGlzIGluIGRldiBtb2RlLiBOb3QgcmVjb21tZW5kZWQgZm9yIHByb2R1Y3Rpb24hYFxuICAgICk7XG5cbiAgICAvLyBJc3N1ZSBwb2x5ZmlsbCBzdXBwb3J0IHdhcm5pbmcuXG4gICAgaWYgKGdsb2JhbC5TaGFkeURPTT8uaW5Vc2UgJiYgcG9seWZpbGxTdXBwb3J0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlzc3VlV2FybmluZyhcbiAgICAgICAgJ3BvbHlmaWxsLXN1cHBvcnQtbWlzc2luZycsXG4gICAgICAgIGBTaGFkb3cgRE9NIGlzIGJlaW5nIHBvbHlmaWxsZWQgdmlhIFxcYFNoYWR5RE9NXFxgIGJ1dCBgICtcbiAgICAgICAgICBgdGhlIFxcYHBvbHlmaWxsLXN1cHBvcnRcXGAgbW9kdWxlIGhhcyBub3QgYmVlbiBsb2FkZWQuYFxuICAgICAgKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIENvbnRhaW5zIHR5cGVzIHRoYXQgYXJlIHBhcnQgb2YgdGhlIHVuc3RhYmxlIGRlYnVnIEFQSS5cbiAqXG4gKiBFdmVyeXRoaW5nIGluIHRoaXMgQVBJIGlzIG5vdCBzdGFibGUgYW5kIG1heSBjaGFuZ2Ugb3IgYmUgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlLFxuICogZXZlbiBvbiBwYXRjaCByZWxlYXNlcy5cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1uYW1lc3BhY2VcbmV4cG9ydCBuYW1lc3BhY2UgUmVhY3RpdmVVbnN0YWJsZSB7XG4gIC8qKlxuICAgKiBXaGVuIExpdCBpcyBydW5uaW5nIGluIGRldiBtb2RlIGFuZCBgd2luZG93LmVtaXRMaXREZWJ1Z0xvZ0V2ZW50c2AgaXMgdHJ1ZSxcbiAgICogd2Ugd2lsbCBlbWl0ICdsaXQtZGVidWcnIGV2ZW50cyB0byB3aW5kb3csIHdpdGggbGl2ZSBkZXRhaWxzIGFib3V0IHRoZSB1cGRhdGUgYW5kIHJlbmRlclxuICAgKiBsaWZlY3ljbGUuIFRoZXNlIGNhbiBiZSB1c2VmdWwgZm9yIHdyaXRpbmcgZGVidWcgdG9vbGluZyBhbmQgdmlzdWFsaXphdGlvbnMuXG4gICAqXG4gICAqIFBsZWFzZSBiZSBhd2FyZSB0aGF0IHJ1bm5pbmcgd2l0aCB3aW5kb3cuZW1pdExpdERlYnVnTG9nRXZlbnRzIGhhcyBwZXJmb3JtYW5jZSBvdmVyaGVhZCxcbiAgICogbWFraW5nIGNlcnRhaW4gb3BlcmF0aW9ucyB0aGF0IGFyZSBub3JtYWxseSB2ZXJ5IGNoZWFwIChsaWtlIGEgbm8tb3AgcmVuZGVyKSBtdWNoIHNsb3dlcixcbiAgICogYmVjYXVzZSB3ZSBtdXN0IGNvcHkgZGF0YSBhbmQgZGlzcGF0Y2ggZXZlbnRzLlxuICAgKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1uYW1lc3BhY2VcbiAgZXhwb3J0IG5hbWVzcGFjZSBEZWJ1Z0xvZyB7XG4gICAgZXhwb3J0IHR5cGUgRW50cnkgPSBVcGRhdGU7XG4gICAgZXhwb3J0IGludGVyZmFjZSBVcGRhdGUge1xuICAgICAga2luZDogJ3VwZGF0ZSc7XG4gICAgfVxuICB9XG59XG5cbmludGVyZmFjZSBEZWJ1Z0xvZ2dpbmdXaW5kb3cge1xuICAvLyBFdmVuIGluIGRldiBtb2RlLCB3ZSBnZW5lcmFsbHkgZG9uJ3Qgd2FudCB0byBlbWl0IHRoZXNlIGV2ZW50cywgYXMgdGhhdCdzXG4gIC8vIGFub3RoZXIgbGV2ZWwgb2YgY29zdCwgc28gb25seSBlbWl0IHRoZW0gd2hlbiBERVZfTU9ERSBpcyB0cnVlIF9hbmRfIHdoZW5cbiAgLy8gd2luZG93LmVtaXRMaXREZWJ1Z0V2ZW50cyBpcyB0cnVlLlxuICBlbWl0TGl0RGVidWdMb2dFdmVudHM/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIFVzZWZ1bCBmb3IgdmlzdWFsaXppbmcgYW5kIGxvZ2dpbmcgaW5zaWdodHMgaW50byB3aGF0IHRoZSBMaXQgdGVtcGxhdGUgc3lzdGVtIGlzIGRvaW5nLlxuICpcbiAqIENvbXBpbGVkIG91dCBvZiBwcm9kIG1vZGUgYnVpbGRzLlxuICovXG5jb25zdCBkZWJ1Z0xvZ0V2ZW50ID0gREVWX01PREVcbiAgPyAoZXZlbnQ6IFJlYWN0aXZlVW5zdGFibGUuRGVidWdMb2cuRW50cnkpID0+IHtcbiAgICAgIGNvbnN0IHNob3VsZEVtaXQgPSAoZ2xvYmFsIGFzIHVua25vd24gYXMgRGVidWdMb2dnaW5nV2luZG93KVxuICAgICAgICAuZW1pdExpdERlYnVnTG9nRXZlbnRzO1xuICAgICAgaWYgKCFzaG91bGRFbWl0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGdsb2JhbC5kaXNwYXRjaEV2ZW50KFxuICAgICAgICBuZXcgQ3VzdG9tRXZlbnQ8UmVhY3RpdmVVbnN0YWJsZS5EZWJ1Z0xvZy5FbnRyeT4oJ2xpdC1kZWJ1ZycsIHtcbiAgICAgICAgICBkZXRhaWw6IGV2ZW50LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIDogdW5kZWZpbmVkO1xuXG4vKlxuICogV2hlbiB1c2luZyBDbG9zdXJlIENvbXBpbGVyLCBKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5KHByb3BlcnR5LCBvYmplY3QpIGlzXG4gKiByZXBsYWNlZCBhdCBjb21waWxlIHRpbWUgYnkgdGhlIG11bmdlZCBuYW1lIGZvciBvYmplY3RbcHJvcGVydHldLiBXZSBjYW5ub3RcbiAqIGFsaWFzIHRoaXMgZnVuY3Rpb24sIHNvIHdlIGhhdmUgdG8gdXNlIGEgc21hbGwgc2hpbSB0aGF0IGhhcyB0aGUgc2FtZVxuICogYmVoYXZpb3Igd2hlbiBub3QgY29tcGlsaW5nLlxuICovXG4vKkBfX0lOTElORV9fKi9cbmNvbnN0IEpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkgPSA8UCBleHRlbmRzIFByb3BlcnR5S2V5PihcbiAgcHJvcDogUCxcbiAgX29iajogdW5rbm93blxuKTogUCA9PiBwcm9wO1xuXG4vKipcbiAqIENvbnZlcnRzIHByb3BlcnR5IHZhbHVlcyB0byBhbmQgZnJvbSBhdHRyaWJ1dGUgdmFsdWVzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIENvbXBsZXhBdHRyaWJ1dGVDb252ZXJ0ZXI8VHlwZSA9IHVua25vd24sIFR5cGVIaW50ID0gdW5rbm93bj4ge1xuICAvKipcbiAgICogQ2FsbGVkIHRvIGNvbnZlcnQgYW4gYXR0cmlidXRlIHZhbHVlIHRvIGEgcHJvcGVydHlcbiAgICogdmFsdWUuXG4gICAqL1xuICBmcm9tQXR0cmlidXRlPyh2YWx1ZTogc3RyaW5nIHwgbnVsbCwgdHlwZT86IFR5cGVIaW50KTogVHlwZTtcblxuICAvKipcbiAgICogQ2FsbGVkIHRvIGNvbnZlcnQgYSBwcm9wZXJ0eSB2YWx1ZSB0byBhbiBhdHRyaWJ1dGVcbiAgICogdmFsdWUuXG4gICAqXG4gICAqIEl0IHJldHVybnMgdW5rbm93biBpbnN0ZWFkIG9mIHN0cmluZywgdG8gYmUgY29tcGF0aWJsZSB3aXRoXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL3RydXN0ZWQtdHlwZXMgKGFuZCBzaW1pbGFyIGVmZm9ydHMpLlxuICAgKi9cbiAgdG9BdHRyaWJ1dGU/KHZhbHVlOiBUeXBlLCB0eXBlPzogVHlwZUhpbnQpOiB1bmtub3duO1xufVxuXG50eXBlIEF0dHJpYnV0ZUNvbnZlcnRlcjxUeXBlID0gdW5rbm93biwgVHlwZUhpbnQgPSB1bmtub3duPiA9XG4gIHwgQ29tcGxleEF0dHJpYnV0ZUNvbnZlcnRlcjxUeXBlPlxuICB8ICgodmFsdWU6IHN0cmluZyB8IG51bGwsIHR5cGU/OiBUeXBlSGludCkgPT4gVHlwZSk7XG5cbi8qKlxuICogRGVmaW5lcyBvcHRpb25zIGZvciBhIHByb3BlcnR5IGFjY2Vzc29yLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFByb3BlcnR5RGVjbGFyYXRpb248VHlwZSA9IHVua25vd24sIFR5cGVIaW50ID0gdW5rbm93bj4ge1xuICAvKipcbiAgICogV2hlbiBzZXQgdG8gYHRydWVgLCBpbmRpY2F0ZXMgdGhlIHByb3BlcnR5IGlzIGludGVybmFsIHByaXZhdGUgc3RhdGUuIFRoZVxuICAgKiBwcm9wZXJ0eSBzaG91bGQgbm90IGJlIHNldCBieSB1c2Vycy4gV2hlbiB1c2luZyBUeXBlU2NyaXB0LCB0aGlzIHByb3BlcnR5XG4gICAqIHNob3VsZCBiZSBtYXJrZWQgYXMgYHByaXZhdGVgIG9yIGBwcm90ZWN0ZWRgLCBhbmQgaXQgaXMgYWxzbyBhIGNvbW1vblxuICAgKiBwcmFjdGljZSB0byB1c2UgYSBsZWFkaW5nIGBfYCBpbiB0aGUgbmFtZS4gVGhlIHByb3BlcnR5IGlzIG5vdCBhZGRlZCB0b1xuICAgKiBgb2JzZXJ2ZWRBdHRyaWJ1dGVzYC5cbiAgICovXG4gIHJlYWRvbmx5IHN0YXRlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogSW5kaWNhdGVzIGhvdyBhbmQgd2hldGhlciB0aGUgcHJvcGVydHkgYmVjb21lcyBhbiBvYnNlcnZlZCBhdHRyaWJ1dGUuXG4gICAqIElmIHRoZSB2YWx1ZSBpcyBgZmFsc2VgLCB0aGUgcHJvcGVydHkgaXMgbm90IGFkZGVkIHRvIGBvYnNlcnZlZEF0dHJpYnV0ZXNgLlxuICAgKiBJZiB0cnVlIG9yIGFic2VudCwgdGhlIGxvd2VyY2FzZWQgcHJvcGVydHkgbmFtZSBpcyBvYnNlcnZlZCAoZS5nLiBgZm9vQmFyYFxuICAgKiBiZWNvbWVzIGBmb29iYXJgKS4gSWYgYSBzdHJpbmcsIHRoZSBzdHJpbmcgdmFsdWUgaXMgb2JzZXJ2ZWQgKGUuZ1xuICAgKiBgYXR0cmlidXRlOiAnZm9vLWJhcidgKS5cbiAgICovXG4gIHJlYWRvbmx5IGF0dHJpYnV0ZT86IGJvb2xlYW4gfCBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGUgdHlwZSBvZiB0aGUgcHJvcGVydHkuIFRoaXMgaXMgdXNlZCBvbmx5IGFzIGEgaGludCBmb3IgdGhlXG4gICAqIGBjb252ZXJ0ZXJgIHRvIGRldGVybWluZSBob3cgdG8gY29udmVydCB0aGUgYXR0cmlidXRlXG4gICAqIHRvL2Zyb20gYSBwcm9wZXJ0eS5cbiAgICovXG4gIHJlYWRvbmx5IHR5cGU/OiBUeXBlSGludDtcblxuICAvKipcbiAgICogSW5kaWNhdGVzIGhvdyB0byBjb252ZXJ0IHRoZSBhdHRyaWJ1dGUgdG8vZnJvbSBhIHByb3BlcnR5LiBJZiB0aGlzIHZhbHVlXG4gICAqIGlzIGEgZnVuY3Rpb24sIGl0IGlzIHVzZWQgdG8gY29udmVydCB0aGUgYXR0cmlidXRlIHZhbHVlIGEgdGhlIHByb3BlcnR5XG4gICAqIHZhbHVlLiBJZiBpdCdzIGFuIG9iamVjdCwgaXQgY2FuIGhhdmUga2V5cyBmb3IgYGZyb21BdHRyaWJ1dGVgIGFuZFxuICAgKiBgdG9BdHRyaWJ1dGVgLiBJZiBubyBgdG9BdHRyaWJ1dGVgIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIGFuZFxuICAgKiBgcmVmbGVjdGAgaXMgc2V0IHRvIGB0cnVlYCwgdGhlIHByb3BlcnR5IHZhbHVlIGlzIHNldCBkaXJlY3RseSB0byB0aGVcbiAgICogYXR0cmlidXRlLiBBIGRlZmF1bHQgYGNvbnZlcnRlcmAgaXMgdXNlZCBpZiBub25lIGlzIHByb3ZpZGVkOyBpdCBzdXBwb3J0c1xuICAgKiBgQm9vbGVhbmAsIGBTdHJpbmdgLCBgTnVtYmVyYCwgYE9iamVjdGAsIGFuZCBgQXJyYXlgLiBOb3RlLFxuICAgKiB3aGVuIGEgcHJvcGVydHkgY2hhbmdlcyBhbmQgdGhlIGNvbnZlcnRlciBpcyB1c2VkIHRvIHVwZGF0ZSB0aGUgYXR0cmlidXRlLFxuICAgKiB0aGUgcHJvcGVydHkgaXMgbmV2ZXIgdXBkYXRlZCBhZ2FpbiBhcyBhIHJlc3VsdCBvZiB0aGUgYXR0cmlidXRlIGNoYW5naW5nLFxuICAgKiBhbmQgdmljZSB2ZXJzYS5cbiAgICovXG4gIHJlYWRvbmx5IGNvbnZlcnRlcj86IEF0dHJpYnV0ZUNvbnZlcnRlcjxUeXBlLCBUeXBlSGludD47XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyBpZiB0aGUgcHJvcGVydHkgc2hvdWxkIHJlZmxlY3QgdG8gYW4gYXR0cmlidXRlLlxuICAgKiBJZiBgdHJ1ZWAsIHdoZW4gdGhlIHByb3BlcnR5IGlzIHNldCwgdGhlIGF0dHJpYnV0ZSBpcyBzZXQgdXNpbmcgdGhlXG4gICAqIGF0dHJpYnV0ZSBuYW1lIGRldGVybWluZWQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBmb3IgdGhlIGBhdHRyaWJ1dGVgXG4gICAqIHByb3BlcnR5IG9wdGlvbiBhbmQgdGhlIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eSBjb252ZXJ0ZWQgdXNpbmcgdGhlIHJ1bGVzXG4gICAqIGZyb20gdGhlIGBjb252ZXJ0ZXJgIHByb3BlcnR5IG9wdGlvbi5cbiAgICovXG4gIHJlYWRvbmx5IHJlZmxlY3Q/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRoYXQgaW5kaWNhdGVzIGlmIGEgcHJvcGVydHkgc2hvdWxkIGJlIGNvbnNpZGVyZWQgY2hhbmdlZCB3aGVuXG4gICAqIGl0IGlzIHNldC4gVGhlIGZ1bmN0aW9uIHNob3VsZCB0YWtlIHRoZSBgbmV3VmFsdWVgIGFuZCBgb2xkVmFsdWVgIGFuZFxuICAgKiByZXR1cm4gYHRydWVgIGlmIGFuIHVwZGF0ZSBzaG91bGQgYmUgcmVxdWVzdGVkLlxuICAgKi9cbiAgaGFzQ2hhbmdlZD8odmFsdWU6IFR5cGUsIG9sZFZhbHVlOiBUeXBlKTogYm9vbGVhbjtcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgYW4gYWNjZXNzb3Igd2lsbCBiZSBjcmVhdGVkIGZvciB0aGlzIHByb3BlcnR5LiBCeVxuICAgKiBkZWZhdWx0LCBhbiBhY2Nlc3NvciB3aWxsIGJlIGdlbmVyYXRlZCBmb3IgdGhpcyBwcm9wZXJ0eSB0aGF0IHJlcXVlc3RzIGFuXG4gICAqIHVwZGF0ZSB3aGVuIHNldC4gSWYgdGhpcyBmbGFnIGlzIGB0cnVlYCwgbm8gYWNjZXNzb3Igd2lsbCBiZSBjcmVhdGVkLCBhbmRcbiAgICogaXQgd2lsbCBiZSB0aGUgdXNlcidzIHJlc3BvbnNpYmlsaXR5IHRvIGNhbGxcbiAgICogYHRoaXMucmVxdWVzdFVwZGF0ZShwcm9wZXJ0eU5hbWUsIG9sZFZhbHVlKWAgdG8gcmVxdWVzdCBhbiB1cGRhdGUgd2hlblxuICAgKiB0aGUgcHJvcGVydHkgY2hhbmdlcy5cbiAgICovXG4gIHJlYWRvbmx5IG5vQWNjZXNzb3I/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoaXMgcHJvcGVydHkgaXMgd3JhcHBpbmcgYWNjZXNzb3JzLiBUaGlzIGlzIHNldCBieSBgQHByb3BlcnR5YFxuICAgKiB0byBjb250cm9sIHRoZSBpbml0aWFsIHZhbHVlIGNoYW5nZSBhbmQgcmVmbGVjdGlvbiBsb2dpYy5cbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuICB3cmFwcGVkPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogV2hlbiBgdHJ1ZWAsIHVzZXMgdGhlIGluaXRpYWwgdmFsdWUgb2YgdGhlIHByb3BlcnR5IGFzIHRoZSBkZWZhdWx0IHZhbHVlLFxuICAgKiB3aGljaCBjaGFuZ2VzIGhvdyBhdHRyaWJ1dGVzIGFyZSBoYW5kbGVkOlxuICAgKiAgLSBUaGUgaW5pdGlhbCB2YWx1ZSBkb2VzICpub3QqIHJlZmxlY3QsIGV2ZW4gaWYgdGhlIGByZWZsZWN0YCBvcHRpb24gaXMgYHRydWVgLlxuICAgKiAgICBTdWJzZXF1ZW50IGNoYW5nZXMgdG8gdGhlIHByb3BlcnR5IHdpbGwgcmVmbGVjdCwgZXZlbiBpZiB0aGV5IGFyZSBlcXVhbCB0byB0aGVcbiAgICogICAgIGRlZmF1bHQgdmFsdWUuXG4gICAqICAtIFdoZW4gdGhlIGF0dHJpYnV0ZSBpcyByZW1vdmVkLCB0aGUgcHJvcGVydHkgaXMgc2V0IHRvIHRoZSBkZWZhdWx0IHZhbHVlXG4gICAqICAtIFRoZSBpbml0aWFsIHZhbHVlIHdpbGwgbm90IHRyaWdnZXIgYW4gb2xkIHZhbHVlIGluIHRoZSBgY2hhbmdlZFByb3BlcnRpZXNgIG1hcFxuICAgKiAgICBhcmd1bWVudCB0byB1cGRhdGUgbGlmZWN5Y2xlIG1ldGhvZHMuXG4gICAqXG4gICAqIFdoZW4gc2V0LCBwcm9wZXJ0aWVzIG11c3QgYmUgaW5pdGlhbGl6ZWQsIGVpdGhlciB3aXRoIGEgZmllbGQgaW5pdGlhbGl6ZXIsIG9yIGFuXG4gICAqIGFzc2lnbm1lbnQgaW4gdGhlIGNvbnN0cnVjdG9yLiBOb3QgaW5pdGlhbGl6aW5nIHRoZSBwcm9wZXJ0eSBtYXkgbGVhZCB0b1xuICAgKiBpbXByb3BlciBoYW5kbGluZyBvZiBzdWJzZXF1ZW50IHByb3BlcnR5IGFzc2lnbm1lbnRzLlxuICAgKlxuICAgKiBXaGlsZSB0aGlzIGJlaGF2aW9yIGlzIG9wdC1pbiwgbW9zdCBwcm9wZXJ0aWVzIHRoYXQgcmVmbGVjdCB0byBhdHRyaWJ1dGVzIHNob3VsZFxuICAgKiB1c2UgYHVzZURlZmF1bHQ6IHRydWVgIHNvIHRoYXQgdGhlaXIgaW5pdGlhbCB2YWx1ZXMgZG8gbm90IHJlZmxlY3QuXG4gICAqL1xuICB1c2VEZWZhdWx0PzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBNYXAgb2YgcHJvcGVydGllcyB0byBQcm9wZXJ0eURlY2xhcmF0aW9uIG9wdGlvbnMuIEZvciBlYWNoIHByb3BlcnR5IGFuXG4gKiBhY2Nlc3NvciBpcyBtYWRlLCBhbmQgdGhlIHByb3BlcnR5IGlzIHByb2Nlc3NlZCBhY2NvcmRpbmcgdG8gdGhlXG4gKiBQcm9wZXJ0eURlY2xhcmF0aW9uIG9wdGlvbnMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcGVydHlEZWNsYXJhdGlvbnMge1xuICByZWFkb25seSBba2V5OiBzdHJpbmddOiBQcm9wZXJ0eURlY2xhcmF0aW9uO1xufVxuXG50eXBlIFByb3BlcnR5RGVjbGFyYXRpb25NYXAgPSBNYXA8UHJvcGVydHlLZXksIFByb3BlcnR5RGVjbGFyYXRpb24+O1xuXG50eXBlIEF0dHJpYnV0ZU1hcCA9IE1hcDxzdHJpbmcsIFByb3BlcnR5S2V5PjtcblxuLyoqXG4gKiBBIE1hcCBvZiBwcm9wZXJ0eSBrZXlzIHRvIHZhbHVlcy5cbiAqXG4gKiBUYWtlcyBhbiBvcHRpb25hbCB0eXBlIHBhcmFtZXRlciBULCB3aGljaCB3aGVuIHNwZWNpZmllZCBhcyBhIG5vbi1hbnksXG4gKiBub24tdW5rbm93biB0eXBlLCB3aWxsIG1ha2UgdGhlIE1hcCBtb3JlIHN0cm9uZ2x5LXR5cGVkLCBhc3NvY2lhdGluZyB0aGUgbWFwXG4gKiBrZXlzIHdpdGggdGhlaXIgY29ycmVzcG9uZGluZyB2YWx1ZSB0eXBlIG9uIFQuXG4gKlxuICogVXNlIGBQcm9wZXJ0eVZhbHVlczx0aGlzPmAgd2hlbiBvdmVycmlkaW5nIFJlYWN0aXZlRWxlbWVudC51cGRhdGUoKSBhbmRcbiAqIG90aGVyIGxpZmVjeWNsZSBtZXRob2RzIGluIG9yZGVyIHRvIGdldCBzdHJvbmdlciB0eXBlLWNoZWNraW5nIG9uIGtleXNcbiAqIGFuZCB2YWx1ZXMuXG4gKi9cbi8vIFRoaXMgdHlwZSBpcyBjb25kaXRpb25hbCBzbyB0aGF0IGlmIHRoZSBwYXJhbWV0ZXIgVCBpcyBub3Qgc3BlY2lmaWVkLCBvclxuLy8gaXMgYGFueWAsIHRoZSB0eXBlIHdpbGwgaW5jbHVkZSBgTWFwPFByb3BlcnR5S2V5LCB1bmtub3duPmAuIFNpbmNlIFQgaXMgbm90XG4vLyBnaXZlbiBpbiB0aGUgdXNlcyBvZiBQcm9wZXJ0eVZhbHVlcyBpbiB0aGlzIGZpbGUsIGFsbCB1c2VzIGhlcmUgZmFsbGJhY2sgdG9cbi8vIG1lYW5pbmcgYE1hcDxQcm9wZXJ0eUtleSwgdW5rbm93bj5gLCBidXQgaWYgYSBkZXZlbG9wZXIgdXNlc1xuLy8gYFByb3BlcnR5VmFsdWVzPHRoaXM+YCAob3IgYW55IG90aGVyIHZhbHVlIGZvciBUKSB0aGV5IHdpbGwgZ2V0IGFcbi8vIHN0cm9uZ2x5LXR5cGVkIE1hcCB0eXBlLlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbmV4cG9ydCB0eXBlIFByb3BlcnR5VmFsdWVzPFQgPSBhbnk+ID0gVCBleHRlbmRzIG9iamVjdFxuICA/IFByb3BlcnR5VmFsdWVNYXA8VD5cbiAgOiBNYXA8UHJvcGVydHlLZXksIHVua25vd24+O1xuXG4vKipcbiAqIERvIG5vdCB1c2UsIGluc3RlYWQgcHJlZmVyIHtAbGlua2NvZGUgUHJvcGVydHlWYWx1ZXN9LlxuICovXG4vLyBUaGlzIHR5cGUgbXVzdCBiZSBleHBvcnRlZCBzdWNoIHRoYXQgSmF2YVNjcmlwdCBnZW5lcmF0ZWQgYnkgdGhlIEdvb2dsZVxuLy8gQ2xvc3VyZSBDb21waWxlciBjYW4gaW1wb3J0IGEgdHlwZSByZWZlcmVuY2UuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BlcnR5VmFsdWVNYXA8VD4gZXh0ZW5kcyBNYXA8UHJvcGVydHlLZXksIHVua25vd24+IHtcbiAgZ2V0PEsgZXh0ZW5kcyBrZXlvZiBUPihrOiBLKTogVFtLXSB8IHVuZGVmaW5lZDtcbiAgc2V0PEsgZXh0ZW5kcyBrZXlvZiBUPihrZXk6IEssIHZhbHVlOiBUW0tdKTogdGhpcztcbiAgaGFzPEsgZXh0ZW5kcyBrZXlvZiBUPihrOiBLKTogYm9vbGVhbjtcbiAgZGVsZXRlPEsgZXh0ZW5kcyBrZXlvZiBUPihrOiBLKTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRDb252ZXJ0ZXI6IENvbXBsZXhBdHRyaWJ1dGVDb252ZXJ0ZXIgPSB7XG4gIHRvQXR0cmlidXRlKHZhbHVlOiB1bmtub3duLCB0eXBlPzogdW5rbm93bik6IHVua25vd24ge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBCb29sZWFuOlxuICAgICAgICB2YWx1ZSA9IHZhbHVlID8gZW1wdHlTdHJpbmdGb3JCb29sZWFuQXR0cmlidXRlIDogbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIE9iamVjdDpcbiAgICAgIGNhc2UgQXJyYXk6XG4gICAgICAgIC8vIGlmIHRoZSB2YWx1ZSBpcyBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgcGFzcyB0aGlzIHRocm91Z2hcbiAgICAgICAgLy8gdG8gYWxsb3cgcmVtb3Zpbmcvbm8gY2hhbmdlIGJlaGF2aW9yLlxuICAgICAgICB2YWx1ZSA9IHZhbHVlID09IG51bGwgPyB2YWx1ZSA6IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcblxuICBmcm9tQXR0cmlidXRlKHZhbHVlOiBzdHJpbmcgfCBudWxsLCB0eXBlPzogdW5rbm93bikge1xuICAgIGxldCBmcm9tVmFsdWU6IHVua25vd24gPSB2YWx1ZTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgQm9vbGVhbjpcbiAgICAgICAgZnJvbVZhbHVlID0gdmFsdWUgIT09IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBOdW1iZXI6XG4gICAgICAgIGZyb21WYWx1ZSA9IHZhbHVlID09PSBudWxsID8gbnVsbCA6IE51bWJlcih2YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBPYmplY3Q6XG4gICAgICBjYXNlIEFycmF5OlxuICAgICAgICAvLyBEbyAqbm90KiBnZW5lcmF0ZSBleGNlcHRpb24gd2hlbiBpbnZhbGlkIEpTT04gaXMgc2V0IGFzIGVsZW1lbnRzXG4gICAgICAgIC8vIGRvbid0IG5vcm1hbGx5IGNvbXBsYWluIG9uIGJlaW5nIG1pcy1jb25maWd1cmVkLlxuICAgICAgICAvLyBUT0RPKHNvcnZlbGwpOiBEbyBnZW5lcmF0ZSBleGNlcHRpb24gaW4gKmRldiBtb2RlKi5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBBc3NlcnQgdG8gYWRoZXJlIHRvIEJhemVsJ3MgXCJtdXN0IHR5cGUgYXNzZXJ0IEpTT04gcGFyc2VcIiBydWxlLlxuICAgICAgICAgIGZyb21WYWx1ZSA9IEpTT04ucGFyc2UodmFsdWUhKSBhcyB1bmtub3duO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgZnJvbVZhbHVlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIGZyb21WYWx1ZTtcbiAgfSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGFzQ2hhbmdlZCB7XG4gICh2YWx1ZTogdW5rbm93biwgb2xkOiB1bmtub3duKTogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBDaGFuZ2UgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRydWUgaWYgYHZhbHVlYCBpcyBkaWZmZXJlbnQgZnJvbSBgb2xkVmFsdWVgLlxuICogVGhpcyBtZXRob2QgaXMgdXNlZCBhcyB0aGUgZGVmYXVsdCBmb3IgYSBwcm9wZXJ0eSdzIGBoYXNDaGFuZ2VkYCBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vdEVxdWFsOiBIYXNDaGFuZ2VkID0gKHZhbHVlOiB1bmtub3duLCBvbGQ6IHVua25vd24pOiBib29sZWFuID0+XG4gICFpcyh2YWx1ZSwgb2xkKTtcblxuY29uc3QgZGVmYXVsdFByb3BlcnR5RGVjbGFyYXRpb246IFByb3BlcnR5RGVjbGFyYXRpb24gPSB7XG4gIGF0dHJpYnV0ZTogdHJ1ZSxcbiAgdHlwZTogU3RyaW5nLFxuICBjb252ZXJ0ZXI6IGRlZmF1bHRDb252ZXJ0ZXIsXG4gIHJlZmxlY3Q6IGZhbHNlLFxuICB1c2VEZWZhdWx0OiBmYWxzZSxcbiAgaGFzQ2hhbmdlZDogbm90RXF1YWwsXG59O1xuXG4vKipcbiAqIEEgc3RyaW5nIHJlcHJlc2VudGluZyBvbmUgb2YgdGhlIHN1cHBvcnRlZCBkZXYgbW9kZSB3YXJuaW5nIGNhdGVnb3JpZXMuXG4gKi9cbmV4cG9ydCB0eXBlIFdhcm5pbmdLaW5kID1cbiAgfCAnY2hhbmdlLWluLXVwZGF0ZSdcbiAgfCAnbWlncmF0aW9uJ1xuICB8ICdhc3luYy1wZXJmb3JtLXVwZGF0ZSc7XG5cbmV4cG9ydCB0eXBlIEluaXRpYWxpemVyID0gKGVsZW1lbnQ6IFJlYWN0aXZlRWxlbWVudCkgPT4gdm9pZDtcblxuLy8gVGVtcG9yYXJ5LCB1bnRpbCBnb29nbGUzIGlzIG9uIFR5cGVTY3JpcHQgNS4yXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBTeW1ib2xDb25zdHJ1Y3RvciB7XG4gICAgcmVhZG9ubHkgbWV0YWRhdGE6IHVuaXF1ZSBzeW1ib2w7XG4gIH1cbn1cblxuLy8gRW5zdXJlIG1ldGFkYXRhIGlzIGVuYWJsZWQuIFR5cGVTY3JpcHQgZG9lcyBub3QgcG9seWZpbGxcbi8vIFN5bWJvbC5tZXRhZGF0YSwgc28gd2UgbXVzdCBlbnN1cmUgdGhhdCBpdCBleGlzdHMuXG4oU3ltYm9sIGFzIHttZXRhZGF0YTogc3ltYm9sfSkubWV0YWRhdGEgPz89IFN5bWJvbCgnbWV0YWRhdGEnKTtcblxuZGVjbGFyZSBnbG9iYWwge1xuICAvLyBUaGlzIGlzIHB1YmxpYyBnbG9iYWwgQVBJLCBkbyBub3QgY2hhbmdlIVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdmFyXG4gIHZhciBsaXRQcm9wZXJ0eU1ldGFkYXRhOiBXZWFrTWFwPFxuICAgIG9iamVjdCxcbiAgICBNYXA8UHJvcGVydHlLZXksIFByb3BlcnR5RGVjbGFyYXRpb24+XG4gID47XG59XG5cbi8vIE1hcCBmcm9tIGEgY2xhc3MncyBtZXRhZGF0YSBvYmplY3QgdG8gcHJvcGVydHkgb3B0aW9uc1xuLy8gTm90ZSB0aGF0IHdlIG11c3QgdXNlIG51bGxpc2gtY29hbGVzY2luZyBhc3NpZ25tZW50IHNvIHRoYXQgd2Ugb25seSB1c2Ugb25lXG4vLyBtYXAgZXZlbiBpZiB3ZSBsb2FkIG11bHRpcGxlIHZlcnNpb24gb2YgdGhpcyBtb2R1bGUuXG5nbG9iYWwubGl0UHJvcGVydHlNZXRhZGF0YSA/Pz0gbmV3IFdlYWtNYXA8XG4gIG9iamVjdCxcbiAgTWFwPFByb3BlcnR5S2V5LCBQcm9wZXJ0eURlY2xhcmF0aW9uPlxuPigpO1xuXG4vKipcbiAqIEJhc2UgZWxlbWVudCBjbGFzcyB3aGljaCBtYW5hZ2VzIGVsZW1lbnQgcHJvcGVydGllcyBhbmQgYXR0cmlidXRlcy4gV2hlblxuICogcHJvcGVydGllcyBjaGFuZ2UsIHRoZSBgdXBkYXRlYCBtZXRob2QgaXMgYXN5bmNocm9ub3VzbHkgY2FsbGVkLiBUaGlzIG1ldGhvZFxuICogc2hvdWxkIGJlIHN1cHBsaWVkIGJ5IHN1YmNsYXNzZXMgdG8gcmVuZGVyIHVwZGF0ZXMgYXMgZGVzaXJlZC5cbiAqIEBub0luaGVyaXREb2NcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJlYWN0aXZlRWxlbWVudFxuICAvLyBJbiB0aGUgTm9kZSBidWlsZCwgdGhpcyBgZXh0ZW5kc2AgY2xhdXNlIHdpbGwgYmUgc3Vic3RpdHV0ZWQgd2l0aFxuICAvLyBgKGdsb2JhbFRoaXMuSFRNTEVsZW1lbnQgPz8gSFRNTEVsZW1lbnQpYC5cbiAgLy9cbiAgLy8gVGhpcyB3YXksIHdlIHdpbGwgZmlyc3QgcHJlZmVyIGFueSBnbG9iYWwgYEhUTUxFbGVtZW50YCBwb2x5ZmlsbCB0aGF0IHRoZVxuICAvLyB1c2VyIGhhcyBhc3NpZ25lZCwgYW5kIHRoZW4gZmFsbCBiYWNrIHRvIHRoZSBgSFRNTEVsZW1lbnRgIHNoaW0gd2hpY2ggaGFzXG4gIC8vIGJlZW4gaW1wb3J0ZWQgKHNlZSBub3RlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlIGFib3V0IGhvdyB0aGlzIGltcG9ydCBpc1xuICAvLyBnZW5lcmF0ZWQgYnkgUm9sbHVwKS4gTm90ZSB0aGF0IHRoZSBgSFRNTEVsZW1lbnRgIHZhcmlhYmxlIGhhcyBiZWVuXG4gIC8vIHNoYWRvd2VkIGJ5IHRoaXMgaW1wb3J0LCBzbyBpdCBubyBsb25nZXIgcmVmZXJzIHRvIHRoZSBnbG9iYWwuXG4gIGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAgaW1wbGVtZW50cyBSZWFjdGl2ZUNvbnRyb2xsZXJIb3N0XG57XG4gIC8vIE5vdGU6IHRoZXNlIGFyZSBwYXRjaGVkIGluIG9ubHkgaW4gREVWX01PREUuXG4gIC8qKlxuICAgKiBSZWFkIG9yIHNldCBhbGwgdGhlIGVuYWJsZWQgd2FybmluZyBjYXRlZ29yaWVzIGZvciB0aGlzIGNsYXNzLlxuICAgKlxuICAgKiBUaGlzIHByb3BlcnR5IGlzIG9ubHkgdXNlZCBpbiBkZXZlbG9wbWVudCBidWlsZHMuXG4gICAqXG4gICAqIEBub2NvbGxhcHNlXG4gICAqIEBjYXRlZ29yeSBkZXYtbW9kZVxuICAgKi9cbiAgc3RhdGljIGVuYWJsZWRXYXJuaW5ncz86IFdhcm5pbmdLaW5kW107XG5cbiAgLyoqXG4gICAqIEVuYWJsZSB0aGUgZ2l2ZW4gd2FybmluZyBjYXRlZ29yeSBmb3IgdGhpcyBjbGFzcy5cbiAgICpcbiAgICogVGhpcyBtZXRob2Qgb25seSBleGlzdHMgaW4gZGV2ZWxvcG1lbnQgYnVpbGRzLCBzbyBpdCBzaG91bGQgYmUgYWNjZXNzZWRcbiAgICogd2l0aCBhIGd1YXJkIGxpa2U6XG4gICAqXG4gICAqIGBgYHRzXG4gICAqIC8vIEVuYWJsZSBmb3IgYWxsIFJlYWN0aXZlRWxlbWVudCBzdWJjbGFzc2VzXG4gICAqIFJlYWN0aXZlRWxlbWVudC5lbmFibGVXYXJuaW5nPy4oJ21pZ3JhdGlvbicpO1xuICAgKlxuICAgKiAvLyBFbmFibGUgZm9yIG9ubHkgTXlFbGVtZW50IGFuZCBzdWJjbGFzc2VzXG4gICAqIE15RWxlbWVudC5lbmFibGVXYXJuaW5nPy4oJ21pZ3JhdGlvbicpO1xuICAgKiBgYGBcbiAgICpcbiAgICogQG5vY29sbGFwc2VcbiAgICogQGNhdGVnb3J5IGRldi1tb2RlXG4gICAqL1xuICBzdGF0aWMgZW5hYmxlV2FybmluZz86ICh3YXJuaW5nS2luZDogV2FybmluZ0tpbmQpID0+IHZvaWQ7XG5cbiAgLyoqXG4gICAqIERpc2FibGUgdGhlIGdpdmVuIHdhcm5pbmcgY2F0ZWdvcnkgZm9yIHRoaXMgY2xhc3MuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIG9ubHkgZXhpc3RzIGluIGRldmVsb3BtZW50IGJ1aWxkcywgc28gaXQgc2hvdWxkIGJlIGFjY2Vzc2VkXG4gICAqIHdpdGggYSBndWFyZCBsaWtlOlxuICAgKlxuICAgKiBgYGB0c1xuICAgKiAvLyBEaXNhYmxlIGZvciBhbGwgUmVhY3RpdmVFbGVtZW50IHN1YmNsYXNzZXNcbiAgICogUmVhY3RpdmVFbGVtZW50LmRpc2FibGVXYXJuaW5nPy4oJ21pZ3JhdGlvbicpO1xuICAgKlxuICAgKiAvLyBEaXNhYmxlIGZvciBvbmx5IE15RWxlbWVudCBhbmQgc3ViY2xhc3Nlc1xuICAgKiBNeUVsZW1lbnQuZGlzYWJsZVdhcm5pbmc/LignbWlncmF0aW9uJyk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBAbm9jb2xsYXBzZVxuICAgKiBAY2F0ZWdvcnkgZGV2LW1vZGVcbiAgICovXG4gIHN0YXRpYyBkaXNhYmxlV2FybmluZz86ICh3YXJuaW5nS2luZDogV2FybmluZ0tpbmQpID0+IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEFkZHMgYW4gaW5pdGlhbGl6ZXIgZnVuY3Rpb24gdG8gdGhlIGNsYXNzIHRoYXQgaXMgY2FsbGVkIGR1cmluZyBpbnN0YW5jZVxuICAgKiBjb25zdHJ1Y3Rpb24uXG4gICAqXG4gICAqIFRoaXMgaXMgdXNlZnVsIGZvciBjb2RlIHRoYXQgcnVucyBhZ2FpbnN0IGEgYFJlYWN0aXZlRWxlbWVudGBcbiAgICogc3ViY2xhc3MsIHN1Y2ggYXMgYSBkZWNvcmF0b3IsIHRoYXQgbmVlZHMgdG8gZG8gd29yayBmb3IgZWFjaFxuICAgKiBpbnN0YW5jZSwgc3VjaCBhcyBzZXR0aW5nIHVwIGEgYFJlYWN0aXZlQ29udHJvbGxlcmAuXG4gICAqXG4gICAqIGBgYHRzXG4gICAqIGNvbnN0IG15RGVjb3JhdG9yID0gKHRhcmdldDogdHlwZW9mIFJlYWN0aXZlRWxlbWVudCwga2V5OiBzdHJpbmcpID0+IHtcbiAgICogICB0YXJnZXQuYWRkSW5pdGlhbGl6ZXIoKGluc3RhbmNlOiBSZWFjdGl2ZUVsZW1lbnQpID0+IHtcbiAgICogICAgIC8vIFRoaXMgaXMgcnVuIGR1cmluZyBjb25zdHJ1Y3Rpb24gb2YgdGhlIGVsZW1lbnRcbiAgICogICAgIG5ldyBNeUNvbnRyb2xsZXIoaW5zdGFuY2UpO1xuICAgKiAgIH0pO1xuICAgKiB9XG4gICAqIGBgYFxuICAgKlxuICAgKiBEZWNvcmF0aW5nIGEgZmllbGQgd2lsbCB0aGVuIGNhdXNlIGVhY2ggaW5zdGFuY2UgdG8gcnVuIGFuIGluaXRpYWxpemVyXG4gICAqIHRoYXQgYWRkcyBhIGNvbnRyb2xsZXI6XG4gICAqXG4gICAqIGBgYHRzXG4gICAqIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIExpdEVsZW1lbnQge1xuICAgKiAgIEBteURlY29yYXRvciBmb287XG4gICAqIH1cbiAgICogYGBgXG4gICAqXG4gICAqIEluaXRpYWxpemVycyBhcmUgc3RvcmVkIHBlci1jb25zdHJ1Y3Rvci4gQWRkaW5nIGFuIGluaXRpYWxpemVyIHRvIGFcbiAgICogc3ViY2xhc3MgZG9lcyBub3QgYWRkIGl0IHRvIGEgc3VwZXJjbGFzcy4gU2luY2UgaW5pdGlhbGl6ZXJzIGFyZSBydW4gaW5cbiAgICogY29uc3RydWN0b3JzLCBpbml0aWFsaXplcnMgd2lsbCBydW4gaW4gb3JkZXIgb2YgdGhlIGNsYXNzIGhpZXJhcmNoeSxcbiAgICogc3RhcnRpbmcgd2l0aCBzdXBlcmNsYXNzZXMgYW5kIHByb2dyZXNzaW5nIHRvIHRoZSBpbnN0YW5jZSdzIGNsYXNzLlxuICAgKlxuICAgKiBAbm9jb2xsYXBzZVxuICAgKi9cbiAgc3RhdGljIGFkZEluaXRpYWxpemVyKGluaXRpYWxpemVyOiBJbml0aWFsaXplcikge1xuICAgIHRoaXMuX19wcmVwYXJlKCk7XG4gICAgKHRoaXMuX2luaXRpYWxpemVycyA/Pz0gW10pLnB1c2goaW5pdGlhbGl6ZXIpO1xuICB9XG5cbiAgc3RhdGljIF9pbml0aWFsaXplcnM/OiBJbml0aWFsaXplcltdO1xuXG4gIC8qXG4gICAqIER1ZSB0byBjbG9zdXJlIGNvbXBpbGVyIEVTNiBjb21waWxhdGlvbiBidWdzLCBAbm9jb2xsYXBzZSBpcyByZXF1aXJlZCBvblxuICAgKiBhbGwgc3RhdGljIG1ldGhvZHMgYW5kIHByb3BlcnRpZXMgd2l0aCBpbml0aWFsaXplcnMuICBSZWZlcmVuY2U6XG4gICAqIC0gaHR0cHM6Ly9naXRodWIuY29tL2dvb2dsZS9jbG9zdXJlLWNvbXBpbGVyL2lzc3Vlcy8xNzc2XG4gICAqL1xuXG4gIC8qKlxuICAgKiBNYXBzIGF0dHJpYnV0ZSBuYW1lcyB0byBwcm9wZXJ0aWVzOyBmb3IgZXhhbXBsZSBgZm9vYmFyYCBhdHRyaWJ1dGUgdG9cbiAgICogYGZvb0JhcmAgcHJvcGVydHkuIENyZWF0ZWQgbGF6aWx5IG9uIHVzZXIgc3ViY2xhc3NlcyB3aGVuIGZpbmFsaXppbmcgdGhlXG4gICAqIGNsYXNzLlxuICAgKiBAbm9jb2xsYXBzZVxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgX19hdHRyaWJ1dGVUb1Byb3BlcnR5TWFwOiBBdHRyaWJ1dGVNYXA7XG5cbiAgLyoqXG4gICAqIE1hcmtzIGNsYXNzIGFzIGhhdmluZyBiZWVuIGZpbmFsaXplZCwgd2hpY2ggaW5jbHVkZXMgY3JlYXRpbmcgcHJvcGVydGllc1xuICAgKiBmcm9tIGBzdGF0aWMgcHJvcGVydGllc2AsIGJ1dCBkb2VzICpub3QqIGluY2x1ZGUgYWxsIHByb3BlcnRpZXMgY3JlYXRlZFxuICAgKiBmcm9tIGRlY29yYXRvcnMuXG4gICAqIEBub2NvbGxhcHNlXG4gICAqL1xuICBwcm90ZWN0ZWQgc3RhdGljIGZpbmFsaXplZDogdHJ1ZSB8IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICogTWVtb2l6ZWQgbGlzdCBvZiBhbGwgZWxlbWVudCBwcm9wZXJ0aWVzLCBpbmNsdWRpbmcgYW55IHN1cGVyY2xhc3NcbiAgICogcHJvcGVydGllcy4gQ3JlYXRlZCBsYXppbHkgb24gdXNlciBzdWJjbGFzc2VzIHdoZW4gZmluYWxpemluZyB0aGUgY2xhc3MuXG4gICAqXG4gICAqIEBub2NvbGxhcHNlXG4gICAqIEBjYXRlZ29yeSBwcm9wZXJ0aWVzXG4gICAqL1xuICBzdGF0aWMgZWxlbWVudFByb3BlcnRpZXM6IFByb3BlcnR5RGVjbGFyYXRpb25NYXA7XG5cbiAgLyoqXG4gICAqIFVzZXItc3VwcGxpZWQgb2JqZWN0IHRoYXQgbWFwcyBwcm9wZXJ0eSBuYW1lcyB0byBgUHJvcGVydHlEZWNsYXJhdGlvbmBcbiAgICogb2JqZWN0cyBjb250YWluaW5nIG9wdGlvbnMgZm9yIGNvbmZpZ3VyaW5nIHJlYWN0aXZlIHByb3BlcnRpZXMuIFdoZW5cbiAgICogYSByZWFjdGl2ZSBwcm9wZXJ0eSBpcyBzZXQgdGhlIGVsZW1lbnQgd2lsbCB1cGRhdGUgYW5kIHJlbmRlci5cbiAgICpcbiAgICogQnkgZGVmYXVsdCBwcm9wZXJ0aWVzIGFyZSBwdWJsaWMgZmllbGRzLCBhbmQgYXMgc3VjaCwgdGhleSBzaG91bGQgYmVcbiAgICogY29uc2lkZXJlZCBhcyBwcmltYXJpbHkgc2V0dGFibGUgYnkgZWxlbWVudCB1c2VycywgZWl0aGVyIHZpYSBhdHRyaWJ1dGUgb3JcbiAgICogdGhlIHByb3BlcnR5IGl0c2VsZi5cbiAgICpcbiAgICogR2VuZXJhbGx5LCBwcm9wZXJ0aWVzIHRoYXQgYXJlIGNoYW5nZWQgYnkgdGhlIGVsZW1lbnQgc2hvdWxkIGJlIHByaXZhdGUgb3JcbiAgICogcHJvdGVjdGVkIGZpZWxkcyBhbmQgc2hvdWxkIHVzZSB0aGUgYHN0YXRlOiB0cnVlYCBvcHRpb24uIFByb3BlcnRpZXNcbiAgICogbWFya2VkIGFzIGBzdGF0ZWAgZG8gbm90IHJlZmxlY3QgZnJvbSB0aGUgY29ycmVzcG9uZGluZyBhdHRyaWJ1dGVcbiAgICpcbiAgICogSG93ZXZlciwgc29tZXRpbWVzIGVsZW1lbnQgY29kZSBkb2VzIG5lZWQgdG8gc2V0IGEgcHVibGljIHByb3BlcnR5LiBUaGlzXG4gICAqIHNob3VsZCB0eXBpY2FsbHkgb25seSBiZSBkb25lIGluIHJlc3BvbnNlIHRvIHVzZXIgaW50ZXJhY3Rpb24sIGFuZCBhbiBldmVudFxuICAgKiBzaG91bGQgYmUgZmlyZWQgaW5mb3JtaW5nIHRoZSB1c2VyOyBmb3IgZXhhbXBsZSwgYSBjaGVja2JveCBzZXRzIGl0c1xuICAgKiBgY2hlY2tlZGAgcHJvcGVydHkgd2hlbiBjbGlja2VkIGFuZCBmaXJlcyBhIGBjaGFuZ2VkYCBldmVudC4gTXV0YXRpbmdcbiAgICogcHVibGljIHByb3BlcnRpZXMgc2hvdWxkIHR5cGljYWxseSBub3QgYmUgZG9uZSBmb3Igbm9uLXByaW1pdGl2ZSAob2JqZWN0IG9yXG4gICAqIGFycmF5KSBwcm9wZXJ0aWVzLiBJbiBvdGhlciBjYXNlcyB3aGVuIGFuIGVsZW1lbnQgbmVlZHMgdG8gbWFuYWdlIHN0YXRlLCBhXG4gICAqIHByaXZhdGUgcHJvcGVydHkgc2V0IHdpdGggdGhlIGBzdGF0ZTogdHJ1ZWAgb3B0aW9uIHNob3VsZCBiZSB1c2VkLiBXaGVuXG4gICAqIG5lZWRlZCwgc3RhdGUgcHJvcGVydGllcyBjYW4gYmUgaW5pdGlhbGl6ZWQgdmlhIHB1YmxpYyBwcm9wZXJ0aWVzIHRvXG4gICAqIGZhY2lsaXRhdGUgY29tcGxleCBpbnRlcmFjdGlvbnMuXG4gICAqIEBub2NvbGxhcHNlXG4gICAqIEBjYXRlZ29yeSBwcm9wZXJ0aWVzXG4gICAqL1xuICBzdGF0aWMgcHJvcGVydGllczogUHJvcGVydHlEZWNsYXJhdGlvbnM7XG5cbiAgLyoqXG4gICAqIE1lbW9pemVkIGxpc3Qgb2YgYWxsIGVsZW1lbnQgc3R5bGVzLlxuICAgKiBDcmVhdGVkIGxhemlseSBvbiB1c2VyIHN1YmNsYXNzZXMgd2hlbiBmaW5hbGl6aW5nIHRoZSBjbGFzcy5cbiAgICogQG5vY29sbGFwc2VcbiAgICogQGNhdGVnb3J5IHN0eWxlc1xuICAgKi9cbiAgc3RhdGljIGVsZW1lbnRTdHlsZXM6IEFycmF5PENTU1Jlc3VsdE9yTmF0aXZlPiA9IFtdO1xuXG4gIC8qKlxuICAgKiBBcnJheSBvZiBzdHlsZXMgdG8gYXBwbHkgdG8gdGhlIGVsZW1lbnQuIFRoZSBzdHlsZXMgc2hvdWxkIGJlIGRlZmluZWRcbiAgICogdXNpbmcgdGhlIHtAbGlua2NvZGUgY3NzfSB0YWcgZnVuY3Rpb24sIHZpYSBjb25zdHJ1Y3RpYmxlIHN0eWxlc2hlZXRzLCBvclxuICAgKiBpbXBvcnRlZCBmcm9tIG5hdGl2ZSBDU1MgbW9kdWxlIHNjcmlwdHMuXG4gICAqXG4gICAqIE5vdGUgb24gQ29udGVudCBTZWN1cml0eSBQb2xpY3k6XG4gICAqXG4gICAqIEVsZW1lbnQgc3R5bGVzIGFyZSBpbXBsZW1lbnRlZCB3aXRoIGA8c3R5bGU+YCB0YWdzIHdoZW4gdGhlIGJyb3dzZXIgZG9lc24ndFxuICAgKiBzdXBwb3J0IGFkb3B0ZWQgU3R5bGVTaGVldHMuIFRvIHVzZSBzdWNoIGA8c3R5bGU+YCB0YWdzIHdpdGggdGhlIHN0eWxlLXNyY1xuICAgKiBDU1AgZGlyZWN0aXZlLCB0aGUgc3R5bGUtc3JjIHZhbHVlIG11c3QgZWl0aGVyIGluY2x1ZGUgJ3Vuc2FmZS1pbmxpbmUnIG9yXG4gICAqIGBub25jZS08YmFzZTY0LXZhbHVlPmAgd2l0aCBgPGJhc2U2NC12YWx1ZT5gIHJlcGxhY2VkIGJlIGEgc2VydmVyLWdlbmVyYXRlZFxuICAgKiBub25jZS5cbiAgICpcbiAgICogVG8gcHJvdmlkZSBhIG5vbmNlIHRvIHVzZSBvbiBnZW5lcmF0ZWQgYDxzdHlsZT5gIGVsZW1lbnRzLCBzZXRcbiAgICogYHdpbmRvdy5saXROb25jZWAgdG8gYSBzZXJ2ZXItZ2VuZXJhdGVkIG5vbmNlIGluIHlvdXIgcGFnZSdzIEhUTUwsIGJlZm9yZVxuICAgKiBsb2FkaW5nIGFwcGxpY2F0aW9uIGNvZGU6XG4gICAqXG4gICAqIGBgYGh0bWxcbiAgICogPHNjcmlwdD5cbiAgICogICAvLyBHZW5lcmF0ZWQgYW5kIHVuaXF1ZSBwZXIgcmVxdWVzdDpcbiAgICogICB3aW5kb3cubGl0Tm9uY2UgPSAnYTFiMmMzZDQnO1xuICAgKiA8L3NjcmlwdD5cbiAgICogYGBgXG4gICAqIEBub2NvbGxhcHNlXG4gICAqIEBjYXRlZ29yeSBzdHlsZXNcbiAgICovXG4gIHN0YXRpYyBzdHlsZXM/OiBDU1NSZXN1bHRHcm91cDtcblxuICAvKipcbiAgICogUmV0dXJucyBhIGxpc3Qgb2YgYXR0cmlidXRlcyBjb3JyZXNwb25kaW5nIHRvIHRoZSByZWdpc3RlcmVkIHByb3BlcnRpZXMuXG4gICAqIEBub2NvbGxhcHNlXG4gICAqIEBjYXRlZ29yeSBhdHRyaWJ1dGVzXG4gICAqL1xuICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcbiAgICAvLyBFbnN1cmUgd2UndmUgY3JlYXRlZCBhbGwgcHJvcGVydGllc1xuICAgIHRoaXMuZmluYWxpemUoKTtcbiAgICAvLyB0aGlzLl9fYXR0cmlidXRlVG9Qcm9wZXJ0eU1hcCBpcyBvbmx5IHVuZGVmaW5lZCBhZnRlciBmaW5hbGl6ZSgpIGluXG4gICAgLy8gUmVhY3RpdmVFbGVtZW50IGl0c2VsZi4gUmVhY3RpdmVFbGVtZW50Lm9ic2VydmVkQXR0cmlidXRlcyBpcyBvbmx5XG4gICAgLy8gYWNjZXNzZWQgd2l0aCBSZWFjdGl2ZUVsZW1lbnQgYXMgdGhlIHJlY2VpdmVyIHdoZW4gYSBzdWJjbGFzcyBvciBtaXhpblxuICAgIC8vIGNhbGxzIHN1cGVyLm9ic2VydmVkQXR0cmlidXRlc1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLl9fYXR0cmlidXRlVG9Qcm9wZXJ0eU1hcCAmJiBbLi4udGhpcy5fX2F0dHJpYnV0ZVRvUHJvcGVydHlNYXAua2V5cygpXVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9faW5zdGFuY2VQcm9wZXJ0aWVzPzogUHJvcGVydHlWYWx1ZXMgPSB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBwcm9wZXJ0eSBhY2Nlc3NvciBvbiB0aGUgZWxlbWVudCBwcm90b3R5cGUgaWYgb25lIGRvZXMgbm90IGV4aXN0XG4gICAqIGFuZCBzdG9yZXMgYSB7QGxpbmtjb2RlIFByb3BlcnR5RGVjbGFyYXRpb259IGZvciB0aGUgcHJvcGVydHkgd2l0aCB0aGVcbiAgICogZ2l2ZW4gb3B0aW9ucy4gVGhlIHByb3BlcnR5IHNldHRlciBjYWxscyB0aGUgcHJvcGVydHkncyBgaGFzQ2hhbmdlZGBcbiAgICogcHJvcGVydHkgb3B0aW9uIG9yIHVzZXMgYSBzdHJpY3QgaWRlbnRpdHkgY2hlY2sgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90XG4gICAqIHRvIHJlcXVlc3QgYW4gdXBkYXRlLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBtYXkgYmUgb3ZlcnJpZGRlbiB0byBjdXN0b21pemUgcHJvcGVydGllczsgaG93ZXZlcixcbiAgICogd2hlbiBkb2luZyBzbywgaXQncyBpbXBvcnRhbnQgdG8gY2FsbCBgc3VwZXIuY3JlYXRlUHJvcGVydHlgIHRvIGVuc3VyZVxuICAgKiB0aGUgcHJvcGVydHkgaXMgc2V0dXAgY29ycmVjdGx5LiBUaGlzIG1ldGhvZCBjYWxsc1xuICAgKiBgZ2V0UHJvcGVydHlEZXNjcmlwdG9yYCBpbnRlcm5hbGx5IHRvIGdldCBhIGRlc2NyaXB0b3IgdG8gaW5zdGFsbC5cbiAgICogVG8gY3VzdG9taXplIHdoYXQgcHJvcGVydGllcyBkbyB3aGVuIHRoZXkgYXJlIGdldCBvciBzZXQsIG92ZXJyaWRlXG4gICAqIGBnZXRQcm9wZXJ0eURlc2NyaXB0b3JgLiBUbyBjdXN0b21pemUgdGhlIG9wdGlvbnMgZm9yIGEgcHJvcGVydHksXG4gICAqIGltcGxlbWVudCBgY3JlYXRlUHJvcGVydHlgIGxpa2UgdGhpczpcbiAgICpcbiAgICogYGBgdHNcbiAgICogc3RhdGljIGNyZWF0ZVByb3BlcnR5KG5hbWUsIG9wdGlvbnMpIHtcbiAgICogICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihvcHRpb25zLCB7bXlPcHRpb246IHRydWV9KTtcbiAgICogICBzdXBlci5jcmVhdGVQcm9wZXJ0eShuYW1lLCBvcHRpb25zKTtcbiAgICogfVxuICAgKiBgYGBcbiAgICpcbiAgICogQG5vY29sbGFwc2VcbiAgICogQGNhdGVnb3J5IHByb3BlcnRpZXNcbiAgICovXG4gIHN0YXRpYyBjcmVhdGVQcm9wZXJ0eShcbiAgICBuYW1lOiBQcm9wZXJ0eUtleSxcbiAgICBvcHRpb25zOiBQcm9wZXJ0eURlY2xhcmF0aW9uID0gZGVmYXVsdFByb3BlcnR5RGVjbGFyYXRpb25cbiAgKSB7XG4gICAgLy8gSWYgdGhpcyBpcyBhIHN0YXRlIHByb3BlcnR5LCBmb3JjZSB0aGUgYXR0cmlidXRlIHRvIGZhbHNlLlxuICAgIGlmIChvcHRpb25zLnN0YXRlKSB7XG4gICAgICAob3B0aW9ucyBhcyBNdXRhYmxlPFByb3BlcnR5RGVjbGFyYXRpb24sICdhdHRyaWJ1dGUnPikuYXR0cmlidXRlID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuX19wcmVwYXJlKCk7XG4gICAgLy8gV2hldGhlciB0aGlzIHByb3BlcnR5IGlzIHdyYXBwaW5nIGFjY2Vzc29ycy5cbiAgICAvLyBIZWxwcyBjb250cm9sIHRoZSBpbml0aWFsIHZhbHVlIGNoYW5nZSBhbmQgcmVmbGVjdGlvbiBsb2dpYy5cbiAgICBpZiAodGhpcy5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuY3JlYXRlKG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy53cmFwcGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50UHJvcGVydGllcy5zZXQobmFtZSwgb3B0aW9ucyk7XG4gICAgaWYgKCFvcHRpb25zLm5vQWNjZXNzb3IpIHtcbiAgICAgIGNvbnN0IGtleSA9IERFVl9NT0RFXG4gICAgICAgID8gLy8gVXNlIFN5bWJvbC5mb3IgaW4gZGV2IG1vZGUgdG8gbWFrZSBpdCBlYXNpZXIgdG8gbWFpbnRhaW4gc3RhdGVcbiAgICAgICAgICAvLyB3aGVuIGRvaW5nIEhNUi5cbiAgICAgICAgICBTeW1ib2wuZm9yKGAke1N0cmluZyhuYW1lKX0gKEBwcm9wZXJ0eSgpIGNhY2hlKWApXG4gICAgICAgIDogU3ltYm9sKCk7XG4gICAgICBjb25zdCBkZXNjcmlwdG9yID0gdGhpcy5nZXRQcm9wZXJ0eURlc2NyaXB0b3IobmFtZSwga2V5LCBvcHRpb25zKTtcbiAgICAgIGlmIChkZXNjcmlwdG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZGVmaW5lUHJvcGVydHkodGhpcy5wcm90b3R5cGUsIG5hbWUsIGRlc2NyaXB0b3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcHJvcGVydHkgZGVzY3JpcHRvciB0byBiZSBkZWZpbmVkIG9uIHRoZSBnaXZlbiBuYW1lZCBwcm9wZXJ0eS5cbiAgICogSWYgbm8gZGVzY3JpcHRvciBpcyByZXR1cm5lZCwgdGhlIHByb3BlcnR5IHdpbGwgbm90IGJlY29tZSBhbiBhY2Nlc3Nvci5cbiAgICogRm9yIGV4YW1wbGUsXG4gICAqXG4gICAqIGBgYHRzXG4gICAqIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIExpdEVsZW1lbnQge1xuICAgKiAgIHN0YXRpYyBnZXRQcm9wZXJ0eURlc2NyaXB0b3IobmFtZSwga2V5LCBvcHRpb25zKSB7XG4gICAqICAgICBjb25zdCBkZWZhdWx0RGVzY3JpcHRvciA9XG4gICAqICAgICAgICAgc3VwZXIuZ2V0UHJvcGVydHlEZXNjcmlwdG9yKG5hbWUsIGtleSwgb3B0aW9ucyk7XG4gICAqICAgICBjb25zdCBzZXR0ZXIgPSBkZWZhdWx0RGVzY3JpcHRvci5zZXQ7XG4gICAqICAgICByZXR1cm4ge1xuICAgKiAgICAgICBnZXQ6IGRlZmF1bHREZXNjcmlwdG9yLmdldCxcbiAgICogICAgICAgc2V0KHZhbHVlKSB7XG4gICAqICAgICAgICAgc2V0dGVyLmNhbGwodGhpcywgdmFsdWUpO1xuICAgKiAgICAgICAgIC8vIGN1c3RvbSBhY3Rpb24uXG4gICAqICAgICAgIH0sXG4gICAqICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICogICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgKiAgICAgfVxuICAgKiAgIH1cbiAgICogfVxuICAgKiBgYGBcbiAgICpcbiAgICogQG5vY29sbGFwc2VcbiAgICogQGNhdGVnb3J5IHByb3BlcnRpZXNcbiAgICovXG4gIHByb3RlY3RlZCBzdGF0aWMgZ2V0UHJvcGVydHlEZXNjcmlwdG9yKFxuICAgIG5hbWU6IFByb3BlcnR5S2V5LFxuICAgIGtleTogc3RyaW5nIHwgc3ltYm9sLFxuICAgIG9wdGlvbnM6IFByb3BlcnR5RGVjbGFyYXRpb25cbiAgKTogUHJvcGVydHlEZXNjcmlwdG9yIHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCB7Z2V0LCBzZXR9ID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMucHJvdG90eXBlLCBuYW1lKSA/PyB7XG4gICAgICBnZXQodGhpczogUmVhY3RpdmVFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzW2tleSBhcyBrZXlvZiB0eXBlb2YgdGhpc107XG4gICAgICB9LFxuICAgICAgc2V0KHRoaXM6IFJlYWN0aXZlRWxlbWVudCwgdjogdW5rbm93bikge1xuICAgICAgICAodGhpcyBhcyB1bmtub3duIGFzIFJlY29yZDxzdHJpbmcgfCBzeW1ib2wsIHVua25vd24+KVtrZXldID0gdjtcbiAgICAgIH0sXG4gICAgfTtcbiAgICBpZiAoREVWX01PREUgJiYgZ2V0ID09IG51bGwpIHtcbiAgICAgIGlmICgndmFsdWUnIGluIChnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcy5wcm90b3R5cGUsIG5hbWUpID8/IHt9KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEZpZWxkICR7SlNPTi5zdHJpbmdpZnkoU3RyaW5nKG5hbWUpKX0gb24gYCArXG4gICAgICAgICAgICBgJHt0aGlzLm5hbWV9IHdhcyBkZWNsYXJlZCBhcyBhIHJlYWN0aXZlIHByb3BlcnR5IGAgK1xuICAgICAgICAgICAgYGJ1dCBpdCdzIGFjdHVhbGx5IGRlY2xhcmVkIGFzIGEgdmFsdWUgb24gdGhlIHByb3RvdHlwZS4gYCArXG4gICAgICAgICAgICBgVXN1YWxseSB0aGlzIGlzIGR1ZSB0byB1c2luZyBAcHJvcGVydHkgb3IgQHN0YXRlIG9uIGEgbWV0aG9kLmBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlzc3VlV2FybmluZyhcbiAgICAgICAgJ3JlYWN0aXZlLXByb3BlcnR5LXdpdGhvdXQtZ2V0dGVyJyxcbiAgICAgICAgYEZpZWxkICR7SlNPTi5zdHJpbmdpZnkoU3RyaW5nKG5hbWUpKX0gb24gYCArXG4gICAgICAgICAgYCR7dGhpcy5uYW1lfSB3YXMgZGVjbGFyZWQgYXMgYSByZWFjdGl2ZSBwcm9wZXJ0eSBgICtcbiAgICAgICAgICBgYnV0IGl0IGRvZXMgbm90IGhhdmUgYSBnZXR0ZXIuIFRoaXMgd2lsbCBiZSBhbiBlcnJvciBpbiBhIGAgK1xuICAgICAgICAgIGBmdXR1cmUgdmVyc2lvbiBvZiBMaXQuYFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGdldCxcbiAgICAgIHNldCh0aGlzOiBSZWFjdGl2ZUVsZW1lbnQsIHZhbHVlOiB1bmtub3duKSB7XG4gICAgICAgIGNvbnN0IG9sZFZhbHVlID0gZ2V0Py5jYWxsKHRoaXMpO1xuICAgICAgICBzZXQ/LmNhbGwodGhpcywgdmFsdWUpO1xuICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUobmFtZSwgb2xkVmFsdWUsIG9wdGlvbnMpO1xuICAgICAgfSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBwcm9wZXJ0eSBvcHRpb25zIGFzc29jaWF0ZWQgd2l0aCB0aGUgZ2l2ZW4gcHJvcGVydHkuXG4gICAqIFRoZXNlIG9wdGlvbnMgYXJlIGRlZmluZWQgd2l0aCBhIGBQcm9wZXJ0eURlY2xhcmF0aW9uYCB2aWEgdGhlIGBwcm9wZXJ0aWVzYFxuICAgKiBvYmplY3Qgb3IgdGhlIGBAcHJvcGVydHlgIGRlY29yYXRvciBhbmQgYXJlIHJlZ2lzdGVyZWQgaW5cbiAgICogYGNyZWF0ZVByb3BlcnR5KC4uLilgLlxuICAgKlxuICAgKiBOb3RlLCB0aGlzIG1ldGhvZCBzaG91bGQgYmUgY29uc2lkZXJlZCBcImZpbmFsXCIgYW5kIG5vdCBvdmVycmlkZGVuLiBUb1xuICAgKiBjdXN0b21pemUgdGhlIG9wdGlvbnMgZm9yIGEgZ2l2ZW4gcHJvcGVydHksIG92ZXJyaWRlXG4gICAqIHtAbGlua2NvZGUgY3JlYXRlUHJvcGVydHl9LlxuICAgKlxuICAgKiBAbm9jb2xsYXBzZVxuICAgKiBAZmluYWxcbiAgICogQGNhdGVnb3J5IHByb3BlcnRpZXNcbiAgICovXG4gIHN0YXRpYyBnZXRQcm9wZXJ0eU9wdGlvbnMobmFtZTogUHJvcGVydHlLZXkpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UHJvcGVydGllcy5nZXQobmFtZSkgPz8gZGVmYXVsdFByb3BlcnR5RGVjbGFyYXRpb247XG4gIH1cblxuICAvLyBUZW1wb3JhcnksIHVudGlsIGdvb2dsZTMgaXMgb24gVHlwZVNjcmlwdCA1LjJcbiAgZGVjbGFyZSBzdGF0aWMgW1N5bWJvbC5tZXRhZGF0YV06IG9iamVjdCAmIFJlY29yZDxQcm9wZXJ0eUtleSwgdW5rbm93bj47XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHN0YXRpYyBvd24gcHJvcGVydGllcyBvZiB0aGUgY2xhc3MgdXNlZCBpbiBib29ra2VlcGluZ1xuICAgKiBmb3IgZWxlbWVudCBwcm9wZXJ0aWVzLCBpbml0aWFsaXplcnMsIGV0Yy5cbiAgICpcbiAgICogQ2FuIGJlIGNhbGxlZCBtdWx0aXBsZSB0aW1lcyBieSBjb2RlIHRoYXQgbmVlZHMgdG8gZW5zdXJlIHRoZXNlXG4gICAqIHByb3BlcnRpZXMgZXhpc3QgYmVmb3JlIHVzaW5nIHRoZW0uXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGVuc3VyZXMgdGhlIHN1cGVyY2xhc3MgaXMgZmluYWxpemVkIHNvIHRoYXQgaW5oZXJpdGVkXG4gICAqIHByb3BlcnR5IG1ldGFkYXRhIGNhbiBiZSBjb3BpZWQgZG93bi5cbiAgICogQG5vY29sbGFwc2VcbiAgICovXG4gIHByaXZhdGUgc3RhdGljIF9fcHJlcGFyZSgpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmhhc093blByb3BlcnR5KEpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkoJ2VsZW1lbnRQcm9wZXJ0aWVzJywgdGhpcykpXG4gICAgKSB7XG4gICAgICAvLyBBbHJlYWR5IHByZXBhcmVkXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIEZpbmFsaXplIGFueSBzdXBlcmNsYXNzZXNcbiAgICBjb25zdCBzdXBlckN0b3IgPSBnZXRQcm90b3R5cGVPZih0aGlzKSBhcyB0eXBlb2YgUmVhY3RpdmVFbGVtZW50O1xuICAgIHN1cGVyQ3Rvci5maW5hbGl6ZSgpO1xuXG4gICAgLy8gQ3JlYXRlIG93biBzZXQgb2YgaW5pdGlhbGl6ZXJzIGZvciB0aGlzIGNsYXNzIGlmIGFueSBleGlzdCBvbiB0aGVcbiAgICAvLyBzdXBlcmNsYXNzIGFuZCBjb3B5IHRoZW0gZG93bi4gTm90ZSwgZm9yIGEgc21hbGwgcGVyZiBib29zdCwgYXZvaWRcbiAgICAvLyBjcmVhdGluZyBpbml0aWFsaXplcnMgdW5sZXNzIG5lZWRlZC5cbiAgICBpZiAoc3VwZXJDdG9yLl9pbml0aWFsaXplcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5faW5pdGlhbGl6ZXJzID0gWy4uLnN1cGVyQ3Rvci5faW5pdGlhbGl6ZXJzXTtcbiAgICB9XG4gICAgLy8gSW5pdGlhbGl6ZSBlbGVtZW50UHJvcGVydGllcyBmcm9tIHRoZSBzdXBlcmNsYXNzXG4gICAgdGhpcy5lbGVtZW50UHJvcGVydGllcyA9IG5ldyBNYXAoc3VwZXJDdG9yLmVsZW1lbnRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5pc2hlcyBzZXR0aW5nIHVwIHRoZSBjbGFzcyBzbyB0aGF0IGl0J3MgcmVhZHkgdG8gYmUgcmVnaXN0ZXJlZFxuICAgKiBhcyBhIGN1c3RvbSBlbGVtZW50IGFuZCBpbnN0YW50aWF0ZWQuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBieSB0aGUgUmVhY3RpdmVFbGVtZW50Lm9ic2VydmVkQXR0cmlidXRlcyBnZXR0ZXIuXG4gICAqIElmIHlvdSBvdmVycmlkZSB0aGUgb2JzZXJ2ZWRBdHRyaWJ1dGVzIGdldHRlciwgeW91IG11c3QgZWl0aGVyIGNhbGxcbiAgICogc3VwZXIub2JzZXJ2ZWRBdHRyaWJ1dGVzIHRvIHRyaWdnZXIgZmluYWxpemF0aW9uLCBvciBjYWxsIGZpbmFsaXplKClcbiAgICogeW91cnNlbGYuXG4gICAqXG4gICAqIEBub2NvbGxhcHNlXG4gICAqL1xuICBwcm90ZWN0ZWQgc3RhdGljIGZpbmFsaXplKCkge1xuICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KEpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkoJ2ZpbmFsaXplZCcsIHRoaXMpKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmZpbmFsaXplZCA9IHRydWU7XG4gICAgdGhpcy5fX3ByZXBhcmUoKTtcblxuICAgIC8vIENyZWF0ZSBwcm9wZXJ0aWVzIGZyb20gdGhlIHN0YXRpYyBwcm9wZXJ0aWVzIGJsb2NrOlxuICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KEpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkoJ3Byb3BlcnRpZXMnLCB0aGlzKSkpIHtcbiAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wZXJ0aWVzO1xuICAgICAgY29uc3QgcHJvcEtleXMgPSBbXG4gICAgICAgIC4uLmdldE93blByb3BlcnR5TmFtZXMocHJvcHMpLFxuICAgICAgICAuLi5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocHJvcHMpLFxuICAgICAgXSBhcyBBcnJheTxrZXlvZiB0eXBlb2YgcHJvcHM+O1xuICAgICAgZm9yIChjb25zdCBwIG9mIHByb3BLZXlzKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlUHJvcGVydHkocCwgcHJvcHNbcF0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENyZWF0ZSBwcm9wZXJ0aWVzIGZyb20gc3RhbmRhcmQgZGVjb3JhdG9yIG1ldGFkYXRhOlxuICAgIGNvbnN0IG1ldGFkYXRhID0gdGhpc1tTeW1ib2wubWV0YWRhdGFdO1xuICAgIGlmIChtZXRhZGF0YSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJvcGVydGllcyA9IGxpdFByb3BlcnR5TWV0YWRhdGEuZ2V0KG1ldGFkYXRhKTtcbiAgICAgIGlmIChwcm9wZXJ0aWVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZm9yIChjb25zdCBbcCwgb3B0aW9uc10gb2YgcHJvcGVydGllcykge1xuICAgICAgICAgIHRoaXMuZWxlbWVudFByb3BlcnRpZXMuc2V0KHAsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHRoZSBhdHRyaWJ1dGUtdG8tcHJvcGVydHkgbWFwXG4gICAgdGhpcy5fX2F0dHJpYnV0ZVRvUHJvcGVydHlNYXAgPSBuZXcgTWFwKCk7XG4gICAgZm9yIChjb25zdCBbcCwgb3B0aW9uc10gb2YgdGhpcy5lbGVtZW50UHJvcGVydGllcykge1xuICAgICAgY29uc3QgYXR0ciA9IHRoaXMuX19hdHRyaWJ1dGVOYW1lRm9yUHJvcGVydHkocCwgb3B0aW9ucyk7XG4gICAgICBpZiAoYXR0ciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX19hdHRyaWJ1dGVUb1Byb3BlcnR5TWFwLnNldChhdHRyLCBwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnRTdHlsZXMgPSB0aGlzLmZpbmFsaXplU3R5bGVzKHRoaXMuc3R5bGVzKTtcblxuICAgIGlmIChERVZfTU9ERSkge1xuICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoJ2NyZWF0ZVByb3BlcnR5JykpIHtcbiAgICAgICAgaXNzdWVXYXJuaW5nKFxuICAgICAgICAgICduby1vdmVycmlkZS1jcmVhdGUtcHJvcGVydHknLFxuICAgICAgICAgICdPdmVycmlkaW5nIFJlYWN0aXZlRWxlbWVudC5jcmVhdGVQcm9wZXJ0eSgpIGlzIGRlcHJlY2F0ZWQuICcgK1xuICAgICAgICAgICAgJ1RoZSBvdmVycmlkZSB3aWxsIG5vdCBiZSBjYWxsZWQgd2l0aCBzdGFuZGFyZCBkZWNvcmF0b3JzJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoJ2dldFByb3BlcnR5RGVzY3JpcHRvcicpKSB7XG4gICAgICAgIGlzc3VlV2FybmluZyhcbiAgICAgICAgICAnbm8tb3ZlcnJpZGUtZ2V0LXByb3BlcnR5LWRlc2NyaXB0b3InLFxuICAgICAgICAgICdPdmVycmlkaW5nIFJlYWN0aXZlRWxlbWVudC5nZXRQcm9wZXJ0eURlc2NyaXB0b3IoKSBpcyBkZXByZWNhdGVkLiAnICtcbiAgICAgICAgICAgICdUaGUgb3ZlcnJpZGUgd2lsbCBub3QgYmUgY2FsbGVkIHdpdGggc3RhbmRhcmQgZGVjb3JhdG9ycydcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT3B0aW9ucyB1c2VkIHdoZW4gY2FsbGluZyBgYXR0YWNoU2hhZG93YC4gU2V0IHRoaXMgcHJvcGVydHkgdG8gY3VzdG9taXplXG4gICAqIHRoZSBvcHRpb25zIGZvciB0aGUgc2hhZG93Um9vdDsgZm9yIGV4YW1wbGUsIHRvIGNyZWF0ZSBhIGNsb3NlZFxuICAgKiBzaGFkb3dSb290OiBge21vZGU6ICdjbG9zZWQnfWAuXG4gICAqXG4gICAqIE5vdGUsIHRoZXNlIG9wdGlvbnMgYXJlIHVzZWQgaW4gYGNyZWF0ZVJlbmRlclJvb3RgLiBJZiB0aGlzIG1ldGhvZFxuICAgKiBpcyBjdXN0b21pemVkLCBvcHRpb25zIHNob3VsZCBiZSByZXNwZWN0ZWQgaWYgcG9zc2libGUuXG4gICAqIEBub2NvbGxhcHNlXG4gICAqIEBjYXRlZ29yeSByZW5kZXJpbmdcbiAgICovXG4gIHN0YXRpYyBzaGFkb3dSb290T3B0aW9uczogU2hhZG93Um9vdEluaXQgPSB7bW9kZTogJ29wZW4nfTtcblxuICAvKipcbiAgICogVGFrZXMgdGhlIHN0eWxlcyB0aGUgdXNlciBzdXBwbGllZCB2aWEgdGhlIGBzdGF0aWMgc3R5bGVzYCBwcm9wZXJ0eSBhbmRcbiAgICogcmV0dXJucyB0aGUgYXJyYXkgb2Ygc3R5bGVzIHRvIGFwcGx5IHRvIHRoZSBlbGVtZW50LlxuICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBpbnRlZ3JhdGUgaW50byBhIHN0eWxlIG1hbmFnZW1lbnQgc3lzdGVtLlxuICAgKlxuICAgKiBTdHlsZXMgYXJlIGRlZHVwbGljYXRlZCBwcmVzZXJ2aW5nIHRoZSBfbGFzdF8gaW5zdGFuY2UgaW4gdGhlIGxpc3QuIFRoaXNcbiAgICogaXMgYSBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24gdG8gYXZvaWQgZHVwbGljYXRlZCBzdHlsZXMgdGhhdCBjYW4gb2NjdXJcbiAgICogZXNwZWNpYWxseSB3aGVuIGNvbXBvc2luZyB2aWEgc3ViY2xhc3NpbmcuIFRoZSBsYXN0IGl0ZW0gaXMga2VwdCB0byB0cnlcbiAgICogdG8gcHJlc2VydmUgdGhlIGNhc2NhZGUgb3JkZXIgd2l0aCB0aGUgYXNzdW1wdGlvbiB0aGF0IGl0J3MgbW9zdCBpbXBvcnRhbnRcbiAgICogdGhhdCBsYXN0IGFkZGVkIHN0eWxlcyBvdmVycmlkZSBwcmV2aW91cyBzdHlsZXMuXG4gICAqXG4gICAqIEBub2NvbGxhcHNlXG4gICAqIEBjYXRlZ29yeSBzdHlsZXNcbiAgICovXG4gIHByb3RlY3RlZCBzdGF0aWMgZmluYWxpemVTdHlsZXMoXG4gICAgc3R5bGVzPzogQ1NTUmVzdWx0R3JvdXBcbiAgKTogQXJyYXk8Q1NTUmVzdWx0T3JOYXRpdmU+IHtcbiAgICBjb25zdCBlbGVtZW50U3R5bGVzID0gW107XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc3R5bGVzKSkge1xuICAgICAgLy8gRGVkdXBlIHRoZSBmbGF0dGVuZWQgYXJyYXkgaW4gcmV2ZXJzZSBvcmRlciB0byBwcmVzZXJ2ZSB0aGUgbGFzdCBpdGVtcy5cbiAgICAgIC8vIENhc3RpbmcgdG8gQXJyYXk8dW5rbm93bj4gd29ya3MgYXJvdW5kIFRTIGVycm9yIHRoYXRcbiAgICAgIC8vIGFwcGVhcnMgdG8gY29tZSBmcm9tIHRyeWluZyB0byBmbGF0dGVuIGEgdHlwZSBDU1NSZXN1bHRBcnJheS5cbiAgICAgIGNvbnN0IHNldCA9IG5ldyBTZXQoKHN0eWxlcyBhcyBBcnJheTx1bmtub3duPikuZmxhdChJbmZpbml0eSkucmV2ZXJzZSgpKTtcbiAgICAgIC8vIFRoZW4gcHJlc2VydmUgb3JpZ2luYWwgb3JkZXIgYnkgYWRkaW5nIHRoZSBzZXQgaXRlbXMgaW4gcmV2ZXJzZSBvcmRlci5cbiAgICAgIGZvciAoY29uc3QgcyBvZiBzZXQpIHtcbiAgICAgICAgZWxlbWVudFN0eWxlcy51bnNoaWZ0KGdldENvbXBhdGlibGVTdHlsZShzIGFzIENTU1Jlc3VsdE9yTmF0aXZlKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzdHlsZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZWxlbWVudFN0eWxlcy5wdXNoKGdldENvbXBhdGlibGVTdHlsZShzdHlsZXMpKTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnRTdHlsZXM7XG4gIH1cblxuICAvKipcbiAgICogTm9kZSBvciBTaGFkb3dSb290IGludG8gd2hpY2ggZWxlbWVudCBET00gc2hvdWxkIGJlIHJlbmRlcmVkLiBEZWZhdWx0c1xuICAgKiB0byBhbiBvcGVuIHNoYWRvd1Jvb3QuXG4gICAqIEBjYXRlZ29yeSByZW5kZXJpbmdcbiAgICovXG4gIHJlYWRvbmx5IHJlbmRlclJvb3QhOiBIVE1MRWxlbWVudCB8IERvY3VtZW50RnJhZ21lbnQ7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHByb3BlcnR5IG5hbWUgZm9yIHRoZSBnaXZlbiBhdHRyaWJ1dGUgYG5hbWVgLlxuICAgKiBAbm9jb2xsYXBzZVxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgX19hdHRyaWJ1dGVOYW1lRm9yUHJvcGVydHkoXG4gICAgbmFtZTogUHJvcGVydHlLZXksXG4gICAgb3B0aW9uczogUHJvcGVydHlEZWNsYXJhdGlvblxuICApIHtcbiAgICBjb25zdCBhdHRyaWJ1dGUgPSBvcHRpb25zLmF0dHJpYnV0ZTtcbiAgICByZXR1cm4gYXR0cmlidXRlID09PSBmYWxzZVxuICAgICAgPyB1bmRlZmluZWRcbiAgICAgIDogdHlwZW9mIGF0dHJpYnV0ZSA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBhdHRyaWJ1dGVcbiAgICAgICAgOiB0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICA/IG5hbWUudG9Mb3dlckNhc2UoKVxuICAgICAgICAgIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgLy8gSW5pdGlhbGl6ZSB0byBhbiB1bnJlc29sdmVkIFByb21pc2Ugc28gd2UgY2FuIG1ha2Ugc3VyZSB0aGUgZWxlbWVudCBoYXNcbiAgLy8gY29ubmVjdGVkIGJlZm9yZSBmaXJzdCB1cGRhdGUuXG4gIHByaXZhdGUgX191cGRhdGVQcm9taXNlITogUHJvbWlzZTxib29sZWFuPjtcblxuICAvKipcbiAgICogVHJ1ZSBpZiB0aGVyZSBpcyBhIHBlbmRpbmcgdXBkYXRlIGFzIGEgcmVzdWx0IG9mIGNhbGxpbmcgYHJlcXVlc3RVcGRhdGUoKWAuXG4gICAqIFNob3VsZCBvbmx5IGJlIHJlYWQuXG4gICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAqL1xuICBpc1VwZGF0ZVBlbmRpbmcgPSBmYWxzZTtcblxuICAvKipcbiAgICogSXMgc2V0IHRvIGB0cnVlYCBhZnRlciB0aGUgZmlyc3QgdXBkYXRlLiBUaGUgZWxlbWVudCBjb2RlIGNhbm5vdCBhc3N1bWVcbiAgICogdGhhdCBgcmVuZGVyUm9vdGAgZXhpc3RzIGJlZm9yZSB0aGUgZWxlbWVudCBgaGFzVXBkYXRlZGAuXG4gICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAqL1xuICBoYXNVcGRhdGVkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIE1hcCB3aXRoIGtleXMgZm9yIGFueSBwcm9wZXJ0aWVzIHRoYXQgaGF2ZSBjaGFuZ2VkIHNpbmNlIHRoZSBsYXN0XG4gICAqIHVwZGF0ZSBjeWNsZSB3aXRoIHByZXZpb3VzIHZhbHVlcy5cbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuICBfJGNoYW5nZWRQcm9wZXJ0aWVzITogUHJvcGVydHlWYWx1ZXM7XG5cbiAgLyoqXG4gICAqIFJlY29yZHMgcHJvcGVydHkgZGVmYXVsdCB2YWx1ZXMgd2hlbiB0aGVcbiAgICogYHVzZURlZmF1bHRgIG9wdGlvbiBpcyB1c2VkLlxuICAgKi9cbiAgcHJpdmF0ZSBfX2RlZmF1bHRWYWx1ZXM/OiBNYXA8UHJvcGVydHlLZXksIHVua25vd24+O1xuXG4gIC8qKlxuICAgKiBQcm9wZXJ0aWVzIHRoYXQgc2hvdWxkIGJlIHJlZmxlY3RlZCB3aGVuIHVwZGF0ZWQuXG4gICAqL1xuICBwcml2YXRlIF9fcmVmbGVjdGluZ1Byb3BlcnRpZXM/OiBTZXQ8UHJvcGVydHlLZXk+O1xuXG4gIC8qKlxuICAgKiBOYW1lIG9mIGN1cnJlbnRseSByZWZsZWN0aW5nIHByb3BlcnR5XG4gICAqL1xuICBwcml2YXRlIF9fcmVmbGVjdGluZ1Byb3BlcnR5OiBQcm9wZXJ0eUtleSB8IG51bGwgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBTZXQgb2YgY29udHJvbGxlcnMuXG4gICAqL1xuICBwcml2YXRlIF9fY29udHJvbGxlcnM/OiBTZXQ8UmVhY3RpdmVDb250cm9sbGVyPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19pbml0aWFsaXplKCk7XG4gIH1cblxuICAvKipcbiAgICogSW50ZXJuYWwgb25seSBvdmVycmlkZSBwb2ludCBmb3IgY3VzdG9taXppbmcgd29yayBkb25lIHdoZW4gZWxlbWVudHNcbiAgICogYXJlIGNvbnN0cnVjdGVkLlxuICAgKi9cbiAgcHJpdmF0ZSBfX2luaXRpYWxpemUoKSB7XG4gICAgdGhpcy5fX3VwZGF0ZVByb21pc2UgPSBuZXcgUHJvbWlzZTxib29sZWFuPihcbiAgICAgIChyZXMpID0+ICh0aGlzLmVuYWJsZVVwZGF0aW5nID0gcmVzKVxuICAgICk7XG4gICAgdGhpcy5fJGNoYW5nZWRQcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuICAgIC8vIFRoaXMgZW5xdWV1ZXMgYSBtaWNyb3Rhc2sgdGhhdCBtdXN0IHJ1biBiZWZvcmUgdGhlIGZpcnN0IHVwZGF0ZSwgc28gaXRcbiAgICAvLyBtdXN0IGJlIGNhbGxlZCBiZWZvcmUgcmVxdWVzdFVwZGF0ZSgpXG4gICAgdGhpcy5fX3NhdmVJbnN0YW5jZVByb3BlcnRpZXMoKTtcbiAgICAvLyBlbnN1cmVzIGZpcnN0IHVwZGF0ZSB3aWxsIGJlIGNhdWdodCBieSBhbiBlYXJseSBhY2Nlc3Mgb2ZcbiAgICAvLyBgdXBkYXRlQ29tcGxldGVgXG4gICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCk7XG4gICAgKHRoaXMuY29uc3RydWN0b3IgYXMgdHlwZW9mIFJlYWN0aXZlRWxlbWVudCkuX2luaXRpYWxpemVycz8uZm9yRWFjaCgoaSkgPT5cbiAgICAgIGkodGhpcylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGBSZWFjdGl2ZUNvbnRyb2xsZXJgIHRvIHBhcnRpY2lwYXRlIGluIHRoZSBlbGVtZW50J3MgcmVhY3RpdmVcbiAgICogdXBkYXRlIGN5Y2xlLiBUaGUgZWxlbWVudCBhdXRvbWF0aWNhbGx5IGNhbGxzIGludG8gYW55IHJlZ2lzdGVyZWRcbiAgICogY29udHJvbGxlcnMgZHVyaW5nIGl0cyBsaWZlY3ljbGUgY2FsbGJhY2tzLlxuICAgKlxuICAgKiBJZiB0aGUgZWxlbWVudCBpcyBjb25uZWN0ZWQgd2hlbiBgYWRkQ29udHJvbGxlcigpYCBpcyBjYWxsZWQsIHRoZVxuICAgKiBjb250cm9sbGVyJ3MgYGhvc3RDb25uZWN0ZWQoKWAgY2FsbGJhY2sgd2lsbCBiZSBpbW1lZGlhdGVseSBjYWxsZWQuXG4gICAqIEBjYXRlZ29yeSBjb250cm9sbGVyc1xuICAgKi9cbiAgYWRkQ29udHJvbGxlcihjb250cm9sbGVyOiBSZWFjdGl2ZUNvbnRyb2xsZXIpIHtcbiAgICAodGhpcy5fX2NvbnRyb2xsZXJzID8/PSBuZXcgU2V0KCkpLmFkZChjb250cm9sbGVyKTtcbiAgICAvLyBJZiBhIGNvbnRyb2xsZXIgaXMgYWRkZWQgYWZ0ZXIgdGhlIGVsZW1lbnQgaGFzIGJlZW4gY29ubmVjdGVkLFxuICAgIC8vIGNhbGwgaG9zdENvbm5lY3RlZC4gTm90ZSwgcmUtdXNpbmcgZXhpc3RlbmNlIG9mIGByZW5kZXJSb290YCBoZXJlXG4gICAgLy8gKHdoaWNoIGlzIHNldCBpbiBjb25uZWN0ZWRDYWxsYmFjaykgdG8gYXZvaWQgdGhlIG5lZWQgdG8gdHJhY2sgYVxuICAgIC8vIGZpcnN0IGNvbm5lY3RlZCBzdGF0ZS5cbiAgICBpZiAodGhpcy5yZW5kZXJSb290ICE9PSB1bmRlZmluZWQgJiYgdGhpcy5pc0Nvbm5lY3RlZCkge1xuICAgICAgY29udHJvbGxlci5ob3N0Q29ubmVjdGVkPy4oKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIGBSZWFjdGl2ZUNvbnRyb2xsZXJgIGZyb20gdGhlIGVsZW1lbnQuXG4gICAqIEBjYXRlZ29yeSBjb250cm9sbGVyc1xuICAgKi9cbiAgcmVtb3ZlQ29udHJvbGxlcihjb250cm9sbGVyOiBSZWFjdGl2ZUNvbnRyb2xsZXIpIHtcbiAgICB0aGlzLl9fY29udHJvbGxlcnM/LmRlbGV0ZShjb250cm9sbGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXhlcyBhbnkgcHJvcGVydGllcyBzZXQgb24gdGhlIGluc3RhbmNlIGJlZm9yZSB1cGdyYWRlIHRpbWUuXG4gICAqIE90aGVyd2lzZSB0aGVzZSB3b3VsZCBzaGFkb3cgdGhlIGFjY2Vzc29yIGFuZCBicmVhayB0aGVzZSBwcm9wZXJ0aWVzLlxuICAgKiBUaGUgcHJvcGVydGllcyBhcmUgc3RvcmVkIGluIGEgTWFwIHdoaWNoIGlzIHBsYXllZCBiYWNrIGFmdGVyIHRoZVxuICAgKiBjb25zdHJ1Y3RvciBydW5zLlxuICAgKi9cbiAgcHJpdmF0ZSBfX3NhdmVJbnN0YW5jZVByb3BlcnRpZXMoKSB7XG4gICAgY29uc3QgaW5zdGFuY2VQcm9wZXJ0aWVzID0gbmV3IE1hcDxQcm9wZXJ0eUtleSwgdW5rbm93bj4oKTtcbiAgICBjb25zdCBlbGVtZW50UHJvcGVydGllcyA9ICh0aGlzLmNvbnN0cnVjdG9yIGFzIHR5cGVvZiBSZWFjdGl2ZUVsZW1lbnQpXG4gICAgICAuZWxlbWVudFByb3BlcnRpZXM7XG4gICAgZm9yIChjb25zdCBwIG9mIGVsZW1lbnRQcm9wZXJ0aWVzLmtleXMoKSBhcyBJdGVyYWJsZUl0ZXJhdG9yPGtleW9mIHRoaXM+KSB7XG4gICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICBpbnN0YW5jZVByb3BlcnRpZXMuc2V0KHAsIHRoaXNbcF0pO1xuICAgICAgICBkZWxldGUgdGhpc1twXTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGluc3RhbmNlUHJvcGVydGllcy5zaXplID4gMCkge1xuICAgICAgdGhpcy5fX2luc3RhbmNlUHJvcGVydGllcyA9IGluc3RhbmNlUHJvcGVydGllcztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbm9kZSBpbnRvIHdoaWNoIHRoZSBlbGVtZW50IHNob3VsZCByZW5kZXIgYW5kIGJ5IGRlZmF1bHRcbiAgICogY3JlYXRlcyBhbmQgcmV0dXJucyBhbiBvcGVuIHNoYWRvd1Jvb3QuIEltcGxlbWVudCB0byBjdXN0b21pemUgd2hlcmUgdGhlXG4gICAqIGVsZW1lbnQncyBET00gaXMgcmVuZGVyZWQuIEZvciBleGFtcGxlLCB0byByZW5kZXIgaW50byB0aGUgZWxlbWVudCdzXG4gICAqIGNoaWxkTm9kZXMsIHJldHVybiBgdGhpc2AuXG4gICAqXG4gICAqIEByZXR1cm4gUmV0dXJucyBhIG5vZGUgaW50byB3aGljaCB0byByZW5kZXIuXG4gICAqIEBjYXRlZ29yeSByZW5kZXJpbmdcbiAgICovXG4gIHByb3RlY3RlZCBjcmVhdGVSZW5kZXJSb290KCk6IEhUTUxFbGVtZW50IHwgRG9jdW1lbnRGcmFnbWVudCB7XG4gICAgY29uc3QgcmVuZGVyUm9vdCA9XG4gICAgICB0aGlzLnNoYWRvd1Jvb3QgPz9cbiAgICAgIHRoaXMuYXR0YWNoU2hhZG93KFxuICAgICAgICAodGhpcy5jb25zdHJ1Y3RvciBhcyB0eXBlb2YgUmVhY3RpdmVFbGVtZW50KS5zaGFkb3dSb290T3B0aW9uc1xuICAgICAgKTtcbiAgICBhZG9wdFN0eWxlcyhcbiAgICAgIHJlbmRlclJvb3QsXG4gICAgICAodGhpcy5jb25zdHJ1Y3RvciBhcyB0eXBlb2YgUmVhY3RpdmVFbGVtZW50KS5lbGVtZW50U3R5bGVzXG4gICAgKTtcbiAgICByZXR1cm4gcmVuZGVyUm9vdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbiBmaXJzdCBjb25uZWN0aW9uLCBjcmVhdGVzIHRoZSBlbGVtZW50J3MgcmVuZGVyUm9vdCwgc2V0cyB1cFxuICAgKiBlbGVtZW50IHN0eWxpbmcsIGFuZCBlbmFibGVzIHVwZGF0aW5nLlxuICAgKiBAY2F0ZWdvcnkgbGlmZWN5Y2xlXG4gICAqL1xuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAvLyBDcmVhdGUgcmVuZGVyUm9vdCBiZWZvcmUgY29udHJvbGxlcnMgYGhvc3RDb25uZWN0ZWRgXG4gICAgKHRoaXMgYXMgTXV0YWJsZTx0eXBlb2YgdGhpcywgJ3JlbmRlclJvb3QnPikucmVuZGVyUm9vdCA/Pz1cbiAgICAgIHRoaXMuY3JlYXRlUmVuZGVyUm9vdCgpO1xuICAgIHRoaXMuZW5hYmxlVXBkYXRpbmcodHJ1ZSk7XG4gICAgdGhpcy5fX2NvbnRyb2xsZXJzPy5mb3JFYWNoKChjKSA9PiBjLmhvc3RDb25uZWN0ZWQ/LigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOb3RlLCB0aGlzIG1ldGhvZCBzaG91bGQgYmUgY29uc2lkZXJlZCBmaW5hbCBhbmQgbm90IG92ZXJyaWRkZW4uIEl0IGlzXG4gICAqIG92ZXJyaWRkZW4gb24gdGhlIGVsZW1lbnQgaW5zdGFuY2Ugd2l0aCBhIGZ1bmN0aW9uIHRoYXQgdHJpZ2dlcnMgdGhlIGZpcnN0XG4gICAqIHVwZGF0ZS5cbiAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICovXG4gIHByb3RlY3RlZCBlbmFibGVVcGRhdGluZyhfcmVxdWVzdGVkVXBkYXRlOiBib29sZWFuKSB7fVxuXG4gIC8qKlxuICAgKiBBbGxvd3MgZm9yIGBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpYCBpbiBleHRlbnNpb25zIHdoaWxlXG4gICAqIHJlc2VydmluZyB0aGUgcG9zc2liaWxpdHkgb2YgbWFraW5nIG5vbi1icmVha2luZyBmZWF0dXJlIGFkZGl0aW9uc1xuICAgKiB3aGVuIGRpc2Nvbm5lY3RpbmcgYXQgc29tZSBwb2ludCBpbiB0aGUgZnV0dXJlLlxuICAgKiBAY2F0ZWdvcnkgbGlmZWN5Y2xlXG4gICAqL1xuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLl9fY29udHJvbGxlcnM/LmZvckVhY2goKGMpID0+IGMuaG9zdERpc2Nvbm5lY3RlZD8uKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN5bmNocm9uaXplcyBwcm9wZXJ0eSB2YWx1ZXMgd2hlbiBhdHRyaWJ1dGVzIGNoYW5nZS5cbiAgICpcbiAgICogU3BlY2lmaWNhbGx5LCB3aGVuIGFuIGF0dHJpYnV0ZSBpcyBzZXQsIHRoZSBjb3JyZXNwb25kaW5nIHByb3BlcnR5IGlzIHNldC5cbiAgICogWW91IHNob3VsZCByYXJlbHkgbmVlZCB0byBpbXBsZW1lbnQgdGhpcyBjYWxsYmFjay4gSWYgdGhpcyBtZXRob2QgaXNcbiAgICogb3ZlcnJpZGRlbiwgYHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBfb2xkLCB2YWx1ZSlgIG11c3QgYmVcbiAgICogY2FsbGVkLlxuICAgKlxuICAgKiBTZWUgW3Jlc3BvbmRpbmcgdG8gYXR0cmlidXRlIGNoYW5nZXNdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XZWJfY29tcG9uZW50cy9Vc2luZ19jdXN0b21fZWxlbWVudHMjcmVzcG9uZGluZ190b19hdHRyaWJ1dGVfY2hhbmdlcylcbiAgICogb24gTUROIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYC5cbiAgICogQGNhdGVnb3J5IGF0dHJpYnV0ZXNcbiAgICovXG4gIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgX29sZDogc3RyaW5nIHwgbnVsbCxcbiAgICB2YWx1ZTogc3RyaW5nIHwgbnVsbFxuICApIHtcbiAgICB0aGlzLl8kYXR0cmlidXRlVG9Qcm9wZXJ0eShuYW1lLCB2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIF9fcHJvcGVydHlUb0F0dHJpYnV0ZShuYW1lOiBQcm9wZXJ0eUtleSwgdmFsdWU6IHVua25vd24pIHtcbiAgICBjb25zdCBlbGVtUHJvcGVydGllczogUHJvcGVydHlEZWNsYXJhdGlvbk1hcCA9IChcbiAgICAgIHRoaXMuY29uc3RydWN0b3IgYXMgdHlwZW9mIFJlYWN0aXZlRWxlbWVudFxuICAgICkuZWxlbWVudFByb3BlcnRpZXM7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGVsZW1Qcm9wZXJ0aWVzLmdldChuYW1lKSE7XG4gICAgY29uc3QgYXR0ciA9IChcbiAgICAgIHRoaXMuY29uc3RydWN0b3IgYXMgdHlwZW9mIFJlYWN0aXZlRWxlbWVudFxuICAgICkuX19hdHRyaWJ1dGVOYW1lRm9yUHJvcGVydHkobmFtZSwgb3B0aW9ucyk7XG4gICAgaWYgKGF0dHIgIT09IHVuZGVmaW5lZCAmJiBvcHRpb25zLnJlZmxlY3QgPT09IHRydWUpIHtcbiAgICAgIGNvbnN0IGNvbnZlcnRlciA9XG4gICAgICAgIChvcHRpb25zLmNvbnZlcnRlciBhcyBDb21wbGV4QXR0cmlidXRlQ29udmVydGVyKT8udG9BdHRyaWJ1dGUgIT09XG4gICAgICAgIHVuZGVmaW5lZFxuICAgICAgICAgID8gKG9wdGlvbnMuY29udmVydGVyIGFzIENvbXBsZXhBdHRyaWJ1dGVDb252ZXJ0ZXIpXG4gICAgICAgICAgOiBkZWZhdWx0Q29udmVydGVyO1xuICAgICAgY29uc3QgYXR0clZhbHVlID0gY29udmVydGVyLnRvQXR0cmlidXRlISh2YWx1ZSwgb3B0aW9ucy50eXBlKTtcbiAgICAgIGlmIChcbiAgICAgICAgREVWX01PREUgJiZcbiAgICAgICAgKHRoaXMuY29uc3RydWN0b3IgYXMgdHlwZW9mIFJlYWN0aXZlRWxlbWVudCkuZW5hYmxlZFdhcm5pbmdzIS5pbmNsdWRlcyhcbiAgICAgICAgICAnbWlncmF0aW9uJ1xuICAgICAgICApICYmXG4gICAgICAgIGF0dHJWYWx1ZSA9PT0gdW5kZWZpbmVkXG4gICAgICApIHtcbiAgICAgICAgaXNzdWVXYXJuaW5nKFxuICAgICAgICAgICd1bmRlZmluZWQtYXR0cmlidXRlLXZhbHVlJyxcbiAgICAgICAgICBgVGhlIGF0dHJpYnV0ZSB2YWx1ZSBmb3IgdGhlICR7bmFtZSBhcyBzdHJpbmd9IHByb3BlcnR5IGlzIGAgK1xuICAgICAgICAgICAgYHVuZGVmaW5lZCBvbiBlbGVtZW50ICR7dGhpcy5sb2NhbE5hbWV9LiBUaGUgYXR0cmlidXRlIHdpbGwgYmUgYCArXG4gICAgICAgICAgICBgcmVtb3ZlZCwgYnV0IGluIHRoZSBwcmV2aW91cyB2ZXJzaW9uIG9mIFxcYFJlYWN0aXZlRWxlbWVudFxcYCwgYCArXG4gICAgICAgICAgICBgdGhlIGF0dHJpYnV0ZSB3b3VsZCBub3QgaGF2ZSBjaGFuZ2VkLmBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIC8vIFRyYWNrIGlmIHRoZSBwcm9wZXJ0eSBpcyBiZWluZyByZWZsZWN0ZWQgdG8gYXZvaWRcbiAgICAgIC8vIHNldHRpbmcgdGhlIHByb3BlcnR5IGFnYWluIHZpYSBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYC4gTm90ZTpcbiAgICAgIC8vIDEuIHRoaXMgdGFrZXMgYWR2YW50YWdlIG9mIHRoZSBmYWN0IHRoYXQgdGhlIGNhbGxiYWNrIGlzIHN5bmNocm9ub3VzLlxuICAgICAgLy8gMi4gd2lsbCBiZWhhdmUgaW5jb3JyZWN0bHkgaWYgbXVsdGlwbGUgYXR0cmlidXRlcyBhcmUgaW4gdGhlIHJlYWN0aW9uXG4gICAgICAvLyBzdGFjayBhdCB0aW1lIG9mIGNhbGxpbmcuIEhvd2V2ZXIsIHNpbmNlIHdlIHByb2Nlc3MgYXR0cmlidXRlc1xuICAgICAgLy8gaW4gYHVwZGF0ZWAgdGhpcyBzaG91bGQgbm90IGJlIHBvc3NpYmxlIChvciBhbiBleHRyZW1lIGNvcm5lciBjYXNlXG4gICAgICAvLyB0aGF0IHdlJ2QgbGlrZSB0byBkaXNjb3ZlcikuXG4gICAgICAvLyBtYXJrIHN0YXRlIHJlZmxlY3RpbmdcbiAgICAgIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydHkgPSBuYW1lO1xuICAgICAgaWYgKGF0dHJWYWx1ZSA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKGF0dHIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoYXR0ciwgYXR0clZhbHVlIGFzIHN0cmluZyk7XG4gICAgICB9XG4gICAgICAvLyBtYXJrIHN0YXRlIG5vdCByZWZsZWN0aW5nXG4gICAgICB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnR5ID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF8kYXR0cmlidXRlVG9Qcm9wZXJ0eShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBudWxsKSB7XG4gICAgY29uc3QgY3RvciA9IHRoaXMuY29uc3RydWN0b3IgYXMgdHlwZW9mIFJlYWN0aXZlRWxlbWVudDtcbiAgICAvLyBOb3RlLCBoaW50IHRoaXMgYXMgYW4gYEF0dHJpYnV0ZU1hcGAgc28gY2xvc3VyZSBjbGVhcmx5IHVuZGVyc3RhbmRzXG4gICAgLy8gdGhlIHR5cGU7IGl0IGhhcyBpc3N1ZXMgd2l0aCB0cmFja2luZyB0eXBlcyB0aHJvdWdoIHN0YXRpY3NcbiAgICBjb25zdCBwcm9wTmFtZSA9IChjdG9yLl9fYXR0cmlidXRlVG9Qcm9wZXJ0eU1hcCBhcyBBdHRyaWJ1dGVNYXApLmdldChuYW1lKTtcbiAgICAvLyBVc2UgdHJhY2tpbmcgaW5mbyB0byBhdm9pZCByZWZsZWN0aW5nIGEgcHJvcGVydHkgdmFsdWUgdG8gYW4gYXR0cmlidXRlXG4gICAgLy8gaWYgaXQgd2FzIGp1c3Qgc2V0IGJlY2F1c2UgdGhlIGF0dHJpYnV0ZSBjaGFuZ2VkLlxuICAgIGlmIChwcm9wTmFtZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydHkgIT09IHByb3BOYW1lKSB7XG4gICAgICBjb25zdCBvcHRpb25zID0gY3Rvci5nZXRQcm9wZXJ0eU9wdGlvbnMocHJvcE5hbWUpO1xuICAgICAgY29uc3QgY29udmVydGVyID1cbiAgICAgICAgdHlwZW9mIG9wdGlvbnMuY29udmVydGVyID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgPyB7ZnJvbUF0dHJpYnV0ZTogb3B0aW9ucy5jb252ZXJ0ZXJ9XG4gICAgICAgICAgOiBvcHRpb25zLmNvbnZlcnRlcj8uZnJvbUF0dHJpYnV0ZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IG9wdGlvbnMuY29udmVydGVyXG4gICAgICAgICAgICA6IGRlZmF1bHRDb252ZXJ0ZXI7XG4gICAgICAvLyBtYXJrIHN0YXRlIHJlZmxlY3RpbmdcbiAgICAgIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydHkgPSBwcm9wTmFtZTtcbiAgICAgIGNvbnN0IGNvbnZlcnRlZFZhbHVlID0gY29udmVydGVyLmZyb21BdHRyaWJ1dGUhKHZhbHVlLCBvcHRpb25zLnR5cGUpO1xuICAgICAgdGhpc1twcm9wTmFtZSBhcyBrZXlvZiB0aGlzXSA9XG4gICAgICAgIGNvbnZlcnRlZFZhbHVlID8/XG4gICAgICAgIHRoaXMuX19kZWZhdWx0VmFsdWVzPy5nZXQocHJvcE5hbWUpID8/XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgIChjb252ZXJ0ZWRWYWx1ZSBhcyBhbnkpO1xuICAgICAgLy8gbWFyayBzdGF0ZSBub3QgcmVmbGVjdGluZ1xuICAgICAgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0eSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3RzIGFuIHVwZGF0ZSB3aGljaCBpcyBwcm9jZXNzZWQgYXN5bmNocm9ub3VzbHkuIFRoaXMgc2hvdWxkIGJlIGNhbGxlZFxuICAgKiB3aGVuIGFuIGVsZW1lbnQgc2hvdWxkIHVwZGF0ZSBiYXNlZCBvbiBzb21lIHN0YXRlIG5vdCB0cmlnZ2VyZWQgYnkgc2V0dGluZ1xuICAgKiBhIHJlYWN0aXZlIHByb3BlcnR5LiBJbiB0aGlzIGNhc2UsIHBhc3Mgbm8gYXJndW1lbnRzLiBJdCBzaG91bGQgYWxzbyBiZVxuICAgKiBjYWxsZWQgd2hlbiBtYW51YWxseSBpbXBsZW1lbnRpbmcgYSBwcm9wZXJ0eSBzZXR0ZXIuIEluIHRoaXMgY2FzZSwgcGFzcyB0aGVcbiAgICogcHJvcGVydHkgYG5hbWVgIGFuZCBgb2xkVmFsdWVgIHRvIGVuc3VyZSB0aGF0IGFueSBjb25maWd1cmVkIHByb3BlcnR5XG4gICAqIG9wdGlvbnMgYXJlIGhvbm9yZWQuXG4gICAqXG4gICAqIEBwYXJhbSBuYW1lIG5hbWUgb2YgcmVxdWVzdGluZyBwcm9wZXJ0eVxuICAgKiBAcGFyYW0gb2xkVmFsdWUgb2xkIHZhbHVlIG9mIHJlcXVlc3RpbmcgcHJvcGVydHlcbiAgICogQHBhcmFtIG9wdGlvbnMgcHJvcGVydHkgb3B0aW9ucyB0byB1c2UgaW5zdGVhZCBvZiB0aGUgcHJldmlvdXNseVxuICAgKiAgICAgY29uZmlndXJlZCBvcHRpb25zXG4gICAqIEBwYXJhbSB1c2VOZXdWYWx1ZSBpZiB0cnVlLCB0aGUgbmV3VmFsdWUgYXJndW1lbnQgaXMgdXNlZCBpbnN0ZWFkIG9mXG4gICAqICAgICByZWFkaW5nIHRoZSBwcm9wZXJ0eSB2YWx1ZS4gVGhpcyBpcyBpbXBvcnRhbnQgdG8gdXNlIGlmIHRoZSByZWFjdGl2ZVxuICAgKiAgICAgcHJvcGVydHkgaXMgYSBzdGFuZGFyZCBwcml2YXRlIGFjY2Vzc29yLCBhcyBvcHBvc2VkIHRvIGEgcGxhaW5cbiAgICogICAgIHByb3BlcnR5LCBzaW5jZSBwcml2YXRlIG1lbWJlcnMgY2FuJ3QgYmUgZHluYW1pY2FsbHkgcmVhZCBieSBuYW1lLlxuICAgKiBAcGFyYW0gbmV3VmFsdWUgdGhlIG5ldyB2YWx1ZSBvZiB0aGUgcHJvcGVydHkuIFRoaXMgaXMgb25seSB1c2VkIGlmXG4gICAqICAgICBgdXNlTmV3VmFsdWVgIGlzIHRydWUuXG4gICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAqL1xuICByZXF1ZXN0VXBkYXRlKFxuICAgIG5hbWU/OiBQcm9wZXJ0eUtleSxcbiAgICBvbGRWYWx1ZT86IHVua25vd24sXG4gICAgb3B0aW9ucz86IFByb3BlcnR5RGVjbGFyYXRpb24sXG4gICAgdXNlTmV3VmFsdWUgPSBmYWxzZSxcbiAgICBuZXdWYWx1ZT86IHVua25vd25cbiAgKTogdm9pZCB7XG4gICAgLy8gSWYgd2UgaGF2ZSBhIHByb3BlcnR5IGtleSwgcGVyZm9ybSBwcm9wZXJ0eSB1cGRhdGUgc3RlcHMuXG4gICAgaWYgKG5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKERFVl9NT0RFICYmIChuYW1lIGFzIHVua25vd24pIGluc3RhbmNlb2YgRXZlbnQpIHtcbiAgICAgICAgaXNzdWVXYXJuaW5nKFxuICAgICAgICAgIGBgLFxuICAgICAgICAgIGBUaGUgcmVxdWVzdFVwZGF0ZSgpIG1ldGhvZCB3YXMgY2FsbGVkIHdpdGggYW4gRXZlbnQgYXMgdGhlIHByb3BlcnR5IG5hbWUuIFRoaXMgaXMgcHJvYmFibHkgYSBtaXN0YWtlIGNhdXNlZCBieSBiaW5kaW5nIHRoaXMucmVxdWVzdFVwZGF0ZSBhcyBhbiBldmVudCBsaXN0ZW5lci4gSW5zdGVhZCBiaW5kIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGNhbGwgaXQgd2l0aCBubyBhcmd1bWVudHM6ICgpID0+IHRoaXMucmVxdWVzdFVwZGF0ZSgpYFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY29uc3QgY3RvciA9IHRoaXMuY29uc3RydWN0b3IgYXMgdHlwZW9mIFJlYWN0aXZlRWxlbWVudDtcbiAgICAgIGlmICh1c2VOZXdWYWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgbmV3VmFsdWUgPSB0aGlzW25hbWUgYXMga2V5b2YgdGhpc107XG4gICAgICB9XG4gICAgICBvcHRpb25zID8/PSBjdG9yLmdldFByb3BlcnR5T3B0aW9ucyhuYW1lKTtcbiAgICAgIGNvbnN0IGNoYW5nZWQgPVxuICAgICAgICAob3B0aW9ucy5oYXNDaGFuZ2VkID8/IG5vdEVxdWFsKShuZXdWYWx1ZSwgb2xkVmFsdWUpIHx8XG4gICAgICAgIC8vIFdoZW4gdGhlcmUgaXMgbm8gY2hhbmdlLCBjaGVjayBhIGNvcm5lciBjYXNlIHRoYXQgY2FuIG9jY3VyIHdoZW5cbiAgICAgICAgLy8gMS4gdGhlcmUncyBhIGluaXRpYWwgdmFsdWUgd2hpY2ggd2FzIG5vdCByZWZsZWN0ZWRcbiAgICAgICAgLy8gMi4gdGhlIHByb3BlcnR5IGlzIHN1YnNlcXVlbnRseSBzZXQgdG8gdGhpcyB2YWx1ZS5cbiAgICAgICAgLy8gRm9yIGV4YW1wbGUsIGBwcm9wOiB7dXNlRGVmYXVsdDogdHJ1ZSwgcmVmbGVjdDogdHJ1ZX1gXG4gICAgICAgIC8vIGFuZCBlbC5wcm9wID0gJ2ZvbycuIFRoaXMgc2hvdWxkIGJlIGNvbnNpZGVyZWQgYSBjaGFuZ2UgaWYgdGhlXG4gICAgICAgIC8vIGF0dHJpYnV0ZSBpcyBub3Qgc2V0IGJlY2F1c2Ugd2Ugd2lsbCBub3cgcmVmbGVjdCB0aGUgcHJvcGVydHkgdG8gdGhlIGF0dHJpYnV0ZS5cbiAgICAgICAgKG9wdGlvbnMudXNlRGVmYXVsdCAmJlxuICAgICAgICAgIG9wdGlvbnMucmVmbGVjdCAmJlxuICAgICAgICAgIG5ld1ZhbHVlID09PSB0aGlzLl9fZGVmYXVsdFZhbHVlcz8uZ2V0KG5hbWUpICYmXG4gICAgICAgICAgIXRoaXMuaGFzQXR0cmlidXRlKGN0b3IuX19hdHRyaWJ1dGVOYW1lRm9yUHJvcGVydHkobmFtZSwgb3B0aW9ucykhKSk7XG4gICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICB0aGlzLl8kY2hhbmdlUHJvcGVydHkobmFtZSwgb2xkVmFsdWUsIG9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQWJvcnQgdGhlIHJlcXVlc3QgaWYgdGhlIHByb3BlcnR5IHNob3VsZCBub3QgYmUgY29uc2lkZXJlZCBjaGFuZ2VkLlxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLmlzVXBkYXRlUGVuZGluZyA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuX191cGRhdGVQcm9taXNlID0gdGhpcy5fX2VucXVldWVVcGRhdGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBfJGNoYW5nZVByb3BlcnR5KFxuICAgIG5hbWU6IFByb3BlcnR5S2V5LFxuICAgIG9sZFZhbHVlOiB1bmtub3duLFxuICAgIHt1c2VEZWZhdWx0LCByZWZsZWN0LCB3cmFwcGVkfTogUHJvcGVydHlEZWNsYXJhdGlvbixcbiAgICBpbml0aWFsaXplVmFsdWU/OiB1bmtub3duXG4gICkge1xuICAgIC8vIFJlY29yZCBkZWZhdWx0IHZhbHVlIHdoZW4gdXNlRGVmYXVsdCBpcyB1c2VkLiBUaGlzIGFsbG93cyB1cyB0b1xuICAgIC8vIHJlc3RvcmUgdGhpcyB2YWx1ZSB3aGVuIHRoZSBhdHRyaWJ1dGUgaXMgcmVtb3ZlZC5cbiAgICBpZiAodXNlRGVmYXVsdCAmJiAhKHRoaXMuX19kZWZhdWx0VmFsdWVzID8/PSBuZXcgTWFwKCkpLmhhcyhuYW1lKSkge1xuICAgICAgdGhpcy5fX2RlZmF1bHRWYWx1ZXMuc2V0KFxuICAgICAgICBuYW1lLFxuICAgICAgICBpbml0aWFsaXplVmFsdWUgPz8gb2xkVmFsdWUgPz8gdGhpc1tuYW1lIGFzIGtleW9mIHRoaXNdXG4gICAgICApO1xuICAgICAgLy8gaWYgdGhpcyBpcyBub3Qgd3JhcHBpbmcgYW4gYWNjZXNzb3IsIGl0IG11c3QgYmUgYW4gaW5pdGlhbCBzZXR0aW5nXG4gICAgICAvLyBhbmQgaW4gdGhpcyBjYXNlIHdlIGRvIG5vdCB3YW50IHRvIHJlY29yZCB0aGUgY2hhbmdlIG9yIHJlZmxlY3QuXG4gICAgICBpZiAod3JhcHBlZCAhPT0gdHJ1ZSB8fCBpbml0aWFsaXplVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFRPRE8gKGp1c3RpbmZhZ25hbmkpOiBDcmVhdGUgYSBiZW5jaG1hcmsgb2YgTWFwLmhhcygpICsgTWFwLnNldChcbiAgICAvLyB2cyBqdXN0IE1hcC5zZXQoKVxuICAgIGlmICghdGhpcy5fJGNoYW5nZWRQcm9wZXJ0aWVzLmhhcyhuYW1lKSkge1xuICAgICAgLy8gT24gdGhlIGluaXRpYWwgY2hhbmdlLCB0aGUgb2xkIHZhbHVlIHNob3VsZCBiZSBgdW5kZWZpbmVkYCwgZXhjZXB0XG4gICAgICAvLyB3aXRoIGB1c2VEZWZhdWx0YFxuICAgICAgaWYgKCF0aGlzLmhhc1VwZGF0ZWQgJiYgIXVzZURlZmF1bHQpIHtcbiAgICAgICAgb2xkVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICB0aGlzLl8kY2hhbmdlZFByb3BlcnRpZXMuc2V0KG5hbWUsIG9sZFZhbHVlKTtcbiAgICB9XG4gICAgLy8gQWRkIHRvIHJlZmxlY3RpbmcgcHJvcGVydGllcyBzZXQuXG4gICAgLy8gTm90ZSwgaXQncyBpbXBvcnRhbnQgdGhhdCBldmVyeSBjaGFuZ2UgaGFzIGEgY2hhbmNlIHRvIGFkZCB0aGVcbiAgICAvLyBwcm9wZXJ0eSB0byBgX19yZWZsZWN0aW5nUHJvcGVydGllc2AuIFRoaXMgZW5zdXJlcyBzZXR0aW5nXG4gICAgLy8gYXR0cmlidXRlICsgcHJvcGVydHkgcmVmbGVjdHMgY29ycmVjdGx5LlxuICAgIGlmIChyZWZsZWN0ID09PSB0cnVlICYmIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydHkgIT09IG5hbWUpIHtcbiAgICAgICh0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnRpZXMgPz89IG5ldyBTZXQ8UHJvcGVydHlLZXk+KCkpLmFkZChuYW1lKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB1cCB0aGUgZWxlbWVudCB0byBhc3luY2hyb25vdXNseSB1cGRhdGUuXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIF9fZW5xdWV1ZVVwZGF0ZSgpIHtcbiAgICB0aGlzLmlzVXBkYXRlUGVuZGluZyA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIC8vIEVuc3VyZSBhbnkgcHJldmlvdXMgdXBkYXRlIGhhcyByZXNvbHZlZCBiZWZvcmUgdXBkYXRpbmcuXG4gICAgICAvLyBUaGlzIGBhd2FpdGAgYWxzbyBlbnN1cmVzIHRoYXQgcHJvcGVydHkgY2hhbmdlcyBhcmUgYmF0Y2hlZC5cbiAgICAgIGF3YWl0IHRoaXMuX191cGRhdGVQcm9taXNlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIFJlZmlyZSBhbnkgcHJldmlvdXMgZXJyb3JzIGFzeW5jIHNvIHRoZXkgZG8gbm90IGRpc3J1cHQgdGhlIHVwZGF0ZVxuICAgICAgLy8gY3ljbGUuIEVycm9ycyBhcmUgcmVmaXJlZCBzbyBkZXZlbG9wZXJzIGhhdmUgYSBjaGFuY2UgdG8gb2JzZXJ2ZVxuICAgICAgLy8gdGhlbSwgYW5kIHRoaXMgY2FuIGJlIGRvbmUgYnkgaW1wbGVtZW50aW5nXG4gICAgICAvLyBgd2luZG93Lm9udW5oYW5kbGVkcmVqZWN0aW9uYC5cbiAgICAgIFByb21pc2UucmVqZWN0KGUpO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLnNjaGVkdWxlVXBkYXRlKCk7XG4gICAgLy8gSWYgYHNjaGVkdWxlVXBkYXRlYCByZXR1cm5zIGEgUHJvbWlzZSwgd2UgYXdhaXQgaXQuIFRoaXMgaXMgZG9uZSB0b1xuICAgIC8vIGVuYWJsZSBjb29yZGluYXRpbmcgdXBkYXRlcyB3aXRoIGEgc2NoZWR1bGVyLiBOb3RlLCB0aGUgcmVzdWx0IGlzXG4gICAgLy8gY2hlY2tlZCB0byBhdm9pZCBkZWxheWluZyBhbiBhZGRpdGlvbmFsIG1pY3JvdGFzayB1bmxlc3Mgd2UgbmVlZCB0by5cbiAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgIGF3YWl0IHJlc3VsdDtcbiAgICB9XG4gICAgcmV0dXJuICF0aGlzLmlzVXBkYXRlUGVuZGluZztcbiAgfVxuXG4gIC8qKlxuICAgKiBTY2hlZHVsZXMgYW4gZWxlbWVudCB1cGRhdGUuIFlvdSBjYW4gb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gY2hhbmdlIHRoZVxuICAgKiB0aW1pbmcgb2YgdXBkYXRlcyBieSByZXR1cm5pbmcgYSBQcm9taXNlLiBUaGUgdXBkYXRlIHdpbGwgYXdhaXQgdGhlXG4gICAqIHJldHVybmVkIFByb21pc2UsIGFuZCB5b3Ugc2hvdWxkIHJlc29sdmUgdGhlIFByb21pc2UgdG8gYWxsb3cgdGhlIHVwZGF0ZVxuICAgKiB0byBwcm9jZWVkLiBJZiB0aGlzIG1ldGhvZCBpcyBvdmVycmlkZGVuLCBgc3VwZXIuc2NoZWR1bGVVcGRhdGUoKWBcbiAgICogbXVzdCBiZSBjYWxsZWQuXG4gICAqXG4gICAqIEZvciBpbnN0YW5jZSwgdG8gc2NoZWR1bGUgdXBkYXRlcyB0byBvY2N1ciBqdXN0IGJlZm9yZSB0aGUgbmV4dCBmcmFtZTpcbiAgICpcbiAgICogYGBgdHNcbiAgICogb3ZlcnJpZGUgcHJvdGVjdGVkIGFzeW5jIHNjaGVkdWxlVXBkYXRlKCk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgKiAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gcmVzb2x2ZSgpKSk7XG4gICAqICAgc3VwZXIuc2NoZWR1bGVVcGRhdGUoKTtcbiAgICogfVxuICAgKiBgYGBcbiAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICovXG4gIHByb3RlY3RlZCBzY2hlZHVsZVVwZGF0ZSgpOiB2b2lkIHwgUHJvbWlzZTx1bmtub3duPiB7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5wZXJmb3JtVXBkYXRlKCk7XG4gICAgaWYgKFxuICAgICAgREVWX01PREUgJiZcbiAgICAgICh0aGlzLmNvbnN0cnVjdG9yIGFzIHR5cGVvZiBSZWFjdGl2ZUVsZW1lbnQpLmVuYWJsZWRXYXJuaW5ncyEuaW5jbHVkZXMoXG4gICAgICAgICdhc3luYy1wZXJmb3JtLXVwZGF0ZSdcbiAgICAgICkgJiZcbiAgICAgIHR5cGVvZiAocmVzdWx0IGFzIHVua25vd24gYXMgUHJvbWlzZTx1bmtub3duPiB8IHVuZGVmaW5lZCk/LnRoZW4gPT09XG4gICAgICAgICdmdW5jdGlvbidcbiAgICApIHtcbiAgICAgIGlzc3VlV2FybmluZyhcbiAgICAgICAgJ2FzeW5jLXBlcmZvcm0tdXBkYXRlJyxcbiAgICAgICAgYEVsZW1lbnQgJHt0aGlzLmxvY2FsTmFtZX0gcmV0dXJuZWQgYSBQcm9taXNlIGZyb20gcGVyZm9ybVVwZGF0ZSgpLiBgICtcbiAgICAgICAgICBgVGhpcyBiZWhhdmlvciBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgYCArXG4gICAgICAgICAgYHZlcnNpb24gb2YgUmVhY3RpdmVFbGVtZW50LmBcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYW4gZWxlbWVudCB1cGRhdGUuIE5vdGUsIGlmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZHVyaW5nIHRoZVxuICAgKiB1cGRhdGUsIGBmaXJzdFVwZGF0ZWRgIGFuZCBgdXBkYXRlZGAgd2lsbCBub3QgYmUgY2FsbGVkLlxuICAgKlxuICAgKiBDYWxsIGBwZXJmb3JtVXBkYXRlKClgIHRvIGltbWVkaWF0ZWx5IHByb2Nlc3MgYSBwZW5kaW5nIHVwZGF0ZS4gVGhpcyBzaG91bGRcbiAgICogZ2VuZXJhbGx5IG5vdCBiZSBuZWVkZWQsIGJ1dCBpdCBjYW4gYmUgZG9uZSBpbiByYXJlIGNhc2VzIHdoZW4geW91IG5lZWQgdG9cbiAgICogdXBkYXRlIHN5bmNocm9ub3VzbHkuXG4gICAqXG4gICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAqL1xuICBwcm90ZWN0ZWQgcGVyZm9ybVVwZGF0ZSgpOiB2b2lkIHtcbiAgICAvLyBBYm9ydCBhbnkgdXBkYXRlIGlmIG9uZSBpcyBub3QgcGVuZGluZyB3aGVuIHRoaXMgaXMgY2FsbGVkLlxuICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiBgcGVyZm9ybVVwZGF0ZWAgaXMgY2FsbGVkIGVhcmx5IHRvIFwiZmx1c2hcIlxuICAgIC8vIHRoZSB1cGRhdGUuXG4gICAgaWYgKCF0aGlzLmlzVXBkYXRlUGVuZGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkZWJ1Z0xvZ0V2ZW50Py4oe2tpbmQ6ICd1cGRhdGUnfSk7XG4gICAgaWYgKCF0aGlzLmhhc1VwZGF0ZWQpIHtcbiAgICAgIC8vIENyZWF0ZSByZW5kZXJSb290IGJlZm9yZSBmaXJzdCB1cGRhdGUuIFRoaXMgb2NjdXJzIGluIGBjb25uZWN0ZWRDYWxsYmFja2BcbiAgICAgIC8vIGJ1dCBpcyBkb25lIGhlcmUgdG8gc3VwcG9ydCBvdXQgb2YgdHJlZSBjYWxscyB0byBgZW5hYmxlVXBkYXRpbmdgL2BwZXJmb3JtVXBkYXRlYC5cbiAgICAgICh0aGlzIGFzIE11dGFibGU8dHlwZW9mIHRoaXMsICdyZW5kZXJSb290Jz4pLnJlbmRlclJvb3QgPz89XG4gICAgICAgIHRoaXMuY3JlYXRlUmVuZGVyUm9vdCgpO1xuICAgICAgaWYgKERFVl9NT0RFKSB7XG4gICAgICAgIC8vIFByb2R1Y2Ugd2FybmluZyBpZiBhbnkgcmVhY3RpdmUgcHJvcGVydGllcyBvbiB0aGUgcHJvdG90eXBlIGFyZVxuICAgICAgICAvLyBzaGFkb3dlZCBieSBjbGFzcyBmaWVsZHMuIEluc3RhbmNlIGZpZWxkcyBzZXQgYmVmb3JlIHVwZ3JhZGUgYXJlXG4gICAgICAgIC8vIGRlbGV0ZWQgYnkgdGhpcyBwb2ludCwgc28gYW55IG93biBwcm9wZXJ0eSBpcyBjYXVzZWQgYnkgY2xhc3MgZmllbGRcbiAgICAgICAgLy8gaW5pdGlhbGl6YXRpb24gaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgICBjb25zdCBjdG9yID0gdGhpcy5jb25zdHJ1Y3RvciBhcyB0eXBlb2YgUmVhY3RpdmVFbGVtZW50O1xuICAgICAgICBjb25zdCBzaGFkb3dlZFByb3BlcnRpZXMgPSBbLi4uY3Rvci5lbGVtZW50UHJvcGVydGllcy5rZXlzKCldLmZpbHRlcihcbiAgICAgICAgICAocCkgPT4gdGhpcy5oYXNPd25Qcm9wZXJ0eShwKSAmJiBwIGluIGdldFByb3RvdHlwZU9mKHRoaXMpXG4gICAgICAgICk7XG4gICAgICAgIGlmIChzaGFkb3dlZFByb3BlcnRpZXMubGVuZ3RoKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBmb2xsb3dpbmcgcHJvcGVydGllcyBvbiBlbGVtZW50ICR7dGhpcy5sb2NhbE5hbWV9IHdpbGwgbm90IGAgK1xuICAgICAgICAgICAgICBgdHJpZ2dlciB1cGRhdGVzIGFzIGV4cGVjdGVkIGJlY2F1c2UgdGhleSBhcmUgc2V0IHVzaW5nIGNsYXNzIGAgK1xuICAgICAgICAgICAgICBgZmllbGRzOiAke3NoYWRvd2VkUHJvcGVydGllcy5qb2luKCcsICcpfS4gYCArXG4gICAgICAgICAgICAgIGBOYXRpdmUgY2xhc3MgZmllbGRzIGFuZCBzb21lIGNvbXBpbGVkIG91dHB1dCB3aWxsIG92ZXJ3cml0ZSBgICtcbiAgICAgICAgICAgICAgYGFjY2Vzc29ycyB1c2VkIGZvciBkZXRlY3RpbmcgY2hhbmdlcy4gU2VlIGAgK1xuICAgICAgICAgICAgICBgaHR0cHM6Ly9saXQuZGV2L21zZy9jbGFzcy1maWVsZC1zaGFkb3dpbmcgYCArXG4gICAgICAgICAgICAgIGBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gTWl4aW4gaW5zdGFuY2UgcHJvcGVydGllcyBvbmNlLCBpZiB0aGV5IGV4aXN0LlxuICAgICAgaWYgKHRoaXMuX19pbnN0YW5jZVByb3BlcnRpZXMpIHtcbiAgICAgICAgLy8gVE9ETyAoanVzdGluZmFnbmFuaSk6IHNob3VsZCB3ZSB1c2UgdGhlIHN0b3JlZCB2YWx1ZT8gQ291bGQgYSBuZXcgdmFsdWVcbiAgICAgICAgLy8gaGF2ZSBiZWVuIHNldCBzaW5jZSB3ZSBzdG9yZWQgdGhlIG93biBwcm9wZXJ0eSB2YWx1ZT9cbiAgICAgICAgZm9yIChjb25zdCBbcCwgdmFsdWVdIG9mIHRoaXMuX19pbnN0YW5jZVByb3BlcnRpZXMpIHtcbiAgICAgICAgICB0aGlzW3AgYXMga2V5b2YgdGhpc10gPSB2YWx1ZSBhcyB0aGlzW2tleW9mIHRoaXNdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX19pbnN0YW5jZVByb3BlcnRpZXMgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICAvLyBUcmlnZ2VyIGluaXRpYWwgdmFsdWUgcmVmbGVjdGlvbiBhbmQgcG9wdWxhdGUgdGhlIGluaXRpYWxcbiAgICAgIC8vIGBjaGFuZ2VkUHJvcGVydGllc2AgbWFwLCBidXQgb25seSBmb3IgdGhlIGNhc2Ugb2YgcHJvcGVydGllcyBjcmVhdGVkXG4gICAgICAvLyB2aWEgYGNyZWF0ZVByb3BlcnR5YCBvbiBhY2Nlc3NvcnMsIHdoaWNoIHdpbGwgbm90IGhhdmUgYWxyZWFkeVxuICAgICAgLy8gcG9wdWxhdGVkIHRoZSBgY2hhbmdlZFByb3BlcnRpZXNgIG1hcCBzaW5jZSB0aGV5IGFyZSBub3Qgc2V0LlxuICAgICAgLy8gV2UgY2FuJ3Qga25vdyBpZiB0aGVzZSBhY2Nlc3NvcnMgaGFkIGluaXRpYWxpemVycywgc28gd2UganVzdCBzZXRcbiAgICAgIC8vIHRoZW0gYW55d2F5IC0gYSBkaWZmZXJlbmNlIGZyb20gZXhwZXJpbWVudGFsIGRlY29yYXRvcnMgb24gZmllbGRzIGFuZFxuICAgICAgLy8gc3RhbmRhcmQgZGVjb3JhdG9ycyBvbiBhdXRvLWFjY2Vzc29ycy5cbiAgICAgIC8vIEZvciBjb250ZXh0IHNlZTpcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9saXQvbGl0L3B1bGwvNDE4MyNpc3N1ZWNvbW1lbnQtMTcxMTk1OTYzNVxuICAgICAgY29uc3QgZWxlbWVudFByb3BlcnRpZXMgPSAodGhpcy5jb25zdHJ1Y3RvciBhcyB0eXBlb2YgUmVhY3RpdmVFbGVtZW50KVxuICAgICAgICAuZWxlbWVudFByb3BlcnRpZXM7XG4gICAgICBpZiAoZWxlbWVudFByb3BlcnRpZXMuc2l6ZSA+IDApIHtcbiAgICAgICAgZm9yIChjb25zdCBbcCwgb3B0aW9uc10gb2YgZWxlbWVudFByb3BlcnRpZXMpIHtcbiAgICAgICAgICBjb25zdCB7d3JhcHBlZH0gPSBvcHRpb25zO1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpc1twIGFzIGtleW9mIHRoaXNdO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHdyYXBwZWQgPT09IHRydWUgJiZcbiAgICAgICAgICAgICF0aGlzLl8kY2hhbmdlZFByb3BlcnRpZXMuaGFzKHApICYmXG4gICAgICAgICAgICB2YWx1ZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLl8kY2hhbmdlUHJvcGVydHkocCwgdW5kZWZpbmVkLCBvcHRpb25zLCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBzaG91bGRVcGRhdGUgPSBmYWxzZTtcbiAgICBjb25zdCBjaGFuZ2VkUHJvcGVydGllcyA9IHRoaXMuXyRjaGFuZ2VkUHJvcGVydGllcztcbiAgICB0cnkge1xuICAgICAgc2hvdWxkVXBkYXRlID0gdGhpcy5zaG91bGRVcGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgaWYgKHNob3VsZFVwZGF0ZSkge1xuICAgICAgICB0aGlzLndpbGxVcGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICB0aGlzLl9fY29udHJvbGxlcnM/LmZvckVhY2goKGMpID0+IGMuaG9zdFVwZGF0ZT8uKCkpO1xuICAgICAgICB0aGlzLnVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9fbWFya1VwZGF0ZWQoKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBQcmV2ZW50IGBmaXJzdFVwZGF0ZWRgIGFuZCBgdXBkYXRlZGAgZnJvbSBydW5uaW5nIHdoZW4gdGhlcmUncyBhblxuICAgICAgLy8gdXBkYXRlIGV4Y2VwdGlvbi5cbiAgICAgIHNob3VsZFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgLy8gRW5zdXJlIGVsZW1lbnQgY2FuIGFjY2VwdCBhZGRpdGlvbmFsIHVwZGF0ZXMgYWZ0ZXIgYW4gZXhjZXB0aW9uLlxuICAgICAgdGhpcy5fX21hcmtVcGRhdGVkKCk7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgICAvLyBUaGUgdXBkYXRlIGlzIG5vIGxvbmdlciBjb25zaWRlcmVkIHBlbmRpbmcgYW5kIGZ1cnRoZXIgdXBkYXRlcyBhcmUgbm93IGFsbG93ZWQuXG4gICAgaWYgKHNob3VsZFVwZGF0ZSkge1xuICAgICAgdGhpcy5fJGRpZFVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEludm9rZWQgYmVmb3JlIGB1cGRhdGUoKWAgdG8gY29tcHV0ZSB2YWx1ZXMgbmVlZGVkIGR1cmluZyB0aGUgdXBkYXRlLlxuICAgKlxuICAgKiBJbXBsZW1lbnQgYHdpbGxVcGRhdGVgIHRvIGNvbXB1dGUgcHJvcGVydHkgdmFsdWVzIHRoYXQgZGVwZW5kIG9uIG90aGVyXG4gICAqIHByb3BlcnRpZXMgYW5kIGFyZSB1c2VkIGluIHRoZSByZXN0IG9mIHRoZSB1cGRhdGUgcHJvY2Vzcy5cbiAgICpcbiAgICogYGBgdHNcbiAgICogd2lsbFVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcykge1xuICAgKiAgIC8vIG9ubHkgbmVlZCB0byBjaGVjayBjaGFuZ2VkIHByb3BlcnRpZXMgZm9yIGFuIGV4cGVuc2l2ZSBjb21wdXRhdGlvbi5cbiAgICogICBpZiAoY2hhbmdlZFByb3BlcnRpZXMuaGFzKCdmaXJzdE5hbWUnKSB8fCBjaGFuZ2VkUHJvcGVydGllcy5oYXMoJ2xhc3ROYW1lJykpIHtcbiAgICogICAgIHRoaXMuc2hhID0gY29tcHV0ZVNIQShgJHt0aGlzLmZpcnN0TmFtZX0gJHt0aGlzLmxhc3ROYW1lfWApO1xuICAgKiAgIH1cbiAgICogfVxuICAgKlxuICAgKiByZW5kZXIoKSB7XG4gICAqICAgcmV0dXJuIGh0bWxgU0hBOiAke3RoaXMuc2hhfWA7XG4gICAqIH1cbiAgICogYGBgXG4gICAqXG4gICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAqL1xuICBwcm90ZWN0ZWQgd2lsbFVwZGF0ZShfY2hhbmdlZFByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzKTogdm9pZCB7fVxuXG4gIC8vIE5vdGUsIHRoaXMgaXMgYW4gb3ZlcnJpZGUgcG9pbnQgZm9yIHBvbHlmaWxsLXN1cHBvcnQuXG4gIC8vIEBpbnRlcm5hbFxuICBfJGRpZFVwZGF0ZShjaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICB0aGlzLl9fY29udHJvbGxlcnM/LmZvckVhY2goKGMpID0+IGMuaG9zdFVwZGF0ZWQ/LigpKTtcbiAgICBpZiAoIXRoaXMuaGFzVXBkYXRlZCkge1xuICAgICAgdGhpcy5oYXNVcGRhdGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICBpZiAoXG4gICAgICBERVZfTU9ERSAmJlxuICAgICAgdGhpcy5pc1VwZGF0ZVBlbmRpbmcgJiZcbiAgICAgICh0aGlzLmNvbnN0cnVjdG9yIGFzIHR5cGVvZiBSZWFjdGl2ZUVsZW1lbnQpLmVuYWJsZWRXYXJuaW5ncyEuaW5jbHVkZXMoXG4gICAgICAgICdjaGFuZ2UtaW4tdXBkYXRlJ1xuICAgICAgKVxuICAgICkge1xuICAgICAgaXNzdWVXYXJuaW5nKFxuICAgICAgICAnY2hhbmdlLWluLXVwZGF0ZScsXG4gICAgICAgIGBFbGVtZW50ICR7dGhpcy5sb2NhbE5hbWV9IHNjaGVkdWxlZCBhbiB1cGRhdGUgYCArXG4gICAgICAgICAgYChnZW5lcmFsbHkgYmVjYXVzZSBhIHByb3BlcnR5IHdhcyBzZXQpIGAgK1xuICAgICAgICAgIGBhZnRlciBhbiB1cGRhdGUgY29tcGxldGVkLCBjYXVzaW5nIGEgbmV3IHVwZGF0ZSB0byBiZSBzY2hlZHVsZWQuIGAgK1xuICAgICAgICAgIGBUaGlzIGlzIGluZWZmaWNpZW50IGFuZCBzaG91bGQgYmUgYXZvaWRlZCB1bmxlc3MgdGhlIG5leHQgdXBkYXRlIGAgK1xuICAgICAgICAgIGBjYW4gb25seSBiZSBzY2hlZHVsZWQgYXMgYSBzaWRlIGVmZmVjdCBvZiB0aGUgcHJldmlvdXMgdXBkYXRlLmBcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfX21hcmtVcGRhdGVkKCkge1xuICAgIHRoaXMuXyRjaGFuZ2VkUHJvcGVydGllcyA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLmlzVXBkYXRlUGVuZGluZyA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgZWxlbWVudCBoYXMgY29tcGxldGVkIHVwZGF0aW5nLlxuICAgKiBUaGUgUHJvbWlzZSB2YWx1ZSBpcyBhIGJvb2xlYW4gdGhhdCBpcyBgdHJ1ZWAgaWYgdGhlIGVsZW1lbnQgY29tcGxldGVkIHRoZVxuICAgKiB1cGRhdGUgd2l0aG91dCB0cmlnZ2VyaW5nIGFub3RoZXIgdXBkYXRlLiBUaGUgUHJvbWlzZSByZXN1bHQgaXMgYGZhbHNlYCBpZlxuICAgKiBhIHByb3BlcnR5IHdhcyBzZXQgaW5zaWRlIGB1cGRhdGVkKClgLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgYW5cbiAgICogZXhjZXB0aW9uIHdhcyB0aHJvd24gZHVyaW5nIHRoZSB1cGRhdGUuXG4gICAqXG4gICAqIFRvIGF3YWl0IGFkZGl0aW9uYWwgYXN5bmNocm9ub3VzIHdvcmssIG92ZXJyaWRlIHRoZSBgZ2V0VXBkYXRlQ29tcGxldGVgXG4gICAqIG1ldGhvZC4gRm9yIGV4YW1wbGUsIGl0IGlzIHNvbWV0aW1lcyB1c2VmdWwgdG8gYXdhaXQgYSByZW5kZXJlZCBlbGVtZW50XG4gICAqIGJlZm9yZSBmdWxmaWxsaW5nIHRoaXMgUHJvbWlzZS4gVG8gZG8gdGhpcywgZmlyc3QgYXdhaXRcbiAgICogYHN1cGVyLmdldFVwZGF0ZUNvbXBsZXRlKClgLCB0aGVuIGFueSBzdWJzZXF1ZW50IHN0YXRlLlxuICAgKlxuICAgKiBAcmV0dXJuIEEgcHJvbWlzZSBvZiBhIGJvb2xlYW4gdGhhdCByZXNvbHZlcyB0byB0cnVlIGlmIHRoZSB1cGRhdGUgY29tcGxldGVkXG4gICAqICAgICB3aXRob3V0IHRyaWdnZXJpbmcgYW5vdGhlciB1cGRhdGUuXG4gICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAqL1xuICBnZXQgdXBkYXRlQ29tcGxldGUoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VXBkYXRlQ29tcGxldGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBwb2ludCBmb3IgdGhlIGB1cGRhdGVDb21wbGV0ZWAgcHJvbWlzZS5cbiAgICpcbiAgICogSXQgaXMgbm90IHNhZmUgdG8gb3ZlcnJpZGUgdGhlIGB1cGRhdGVDb21wbGV0ZWAgZ2V0dGVyIGRpcmVjdGx5IGR1ZSB0byBhXG4gICAqIGxpbWl0YXRpb24gaW4gVHlwZVNjcmlwdCB3aGljaCBtZWFucyBpdCBpcyBub3QgcG9zc2libGUgdG8gY2FsbCBhXG4gICAqIHN1cGVyY2xhc3MgZ2V0dGVyIChlLmcuIGBzdXBlci51cGRhdGVDb21wbGV0ZS50aGVuKC4uLilgKSB3aGVuIHRoZSB0YXJnZXRcbiAgICogbGFuZ3VhZ2UgaXMgRVM1IChodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzMzOCkuXG4gICAqIFRoaXMgbWV0aG9kIHNob3VsZCBiZSBvdmVycmlkZGVuIGluc3RlYWQuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiBgYGB0c1xuICAgKiBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgICogICBvdmVycmlkZSBhc3luYyBnZXRVcGRhdGVDb21wbGV0ZSgpIHtcbiAgICogICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHN1cGVyLmdldFVwZGF0ZUNvbXBsZXRlKCk7XG4gICAqICAgICBhd2FpdCB0aGlzLl9teUNoaWxkLnVwZGF0ZUNvbXBsZXRlO1xuICAgKiAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICogICB9XG4gICAqIH1cbiAgICogYGBgXG4gICAqXG4gICAqIEByZXR1cm4gQSBwcm9taXNlIG9mIGEgYm9vbGVhbiB0aGF0IHJlc29sdmVzIHRvIHRydWUgaWYgdGhlIHVwZGF0ZSBjb21wbGV0ZWRcbiAgICogICAgIHdpdGhvdXQgdHJpZ2dlcmluZyBhbm90aGVyIHVwZGF0ZS5cbiAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICovXG4gIHByb3RlY3RlZCBnZXRVcGRhdGVDb21wbGV0ZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5fX3VwZGF0ZVByb21pc2U7XG4gIH1cblxuICAvKipcbiAgICogQ29udHJvbHMgd2hldGhlciBvciBub3QgYHVwZGF0ZSgpYCBzaG91bGQgYmUgY2FsbGVkIHdoZW4gdGhlIGVsZW1lbnQgcmVxdWVzdHNcbiAgICogYW4gdXBkYXRlLiBCeSBkZWZhdWx0LCB0aGlzIG1ldGhvZCBhbHdheXMgcmV0dXJucyBgdHJ1ZWAsIGJ1dCB0aGlzIGNhbiBiZVxuICAgKiBjdXN0b21pemVkIHRvIGNvbnRyb2wgd2hlbiB0byB1cGRhdGUuXG4gICAqXG4gICAqIEBwYXJhbSBfY2hhbmdlZFByb3BlcnRpZXMgTWFwIG9mIGNoYW5nZWQgcHJvcGVydGllcyB3aXRoIG9sZCB2YWx1ZXNcbiAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICovXG4gIHByb3RlY3RlZCBzaG91bGRVcGRhdGUoX2NoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlcyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIGVsZW1lbnQuIFRoaXMgbWV0aG9kIHJlZmxlY3RzIHByb3BlcnR5IHZhbHVlcyB0byBhdHRyaWJ1dGVzLlxuICAgKiBJdCBjYW4gYmUgb3ZlcnJpZGRlbiB0byByZW5kZXIgYW5kIGtlZXAgdXBkYXRlZCBlbGVtZW50IERPTS5cbiAgICogU2V0dGluZyBwcm9wZXJ0aWVzIGluc2lkZSB0aGlzIG1ldGhvZCB3aWxsICpub3QqIHRyaWdnZXJcbiAgICogYW5vdGhlciB1cGRhdGUuXG4gICAqXG4gICAqIEBwYXJhbSBfY2hhbmdlZFByb3BlcnRpZXMgTWFwIG9mIGNoYW5nZWQgcHJvcGVydGllcyB3aXRoIG9sZCB2YWx1ZXNcbiAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICovXG4gIHByb3RlY3RlZCB1cGRhdGUoX2NoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlcykge1xuICAgIC8vIFRoZSBmb3JFYWNoKCkgZXhwcmVzc2lvbiB3aWxsIG9ubHkgcnVuIHdoZW4gX19yZWZsZWN0aW5nUHJvcGVydGllcyBpc1xuICAgIC8vIGRlZmluZWQsIGFuZCBpdCByZXR1cm5zIHVuZGVmaW5lZCwgc2V0dGluZyBfX3JlZmxlY3RpbmdQcm9wZXJ0aWVzIHRvXG4gICAgLy8gdW5kZWZpbmVkXG4gICAgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0aWVzICYmPSB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnRpZXMuZm9yRWFjaCgocCkgPT5cbiAgICAgIHRoaXMuX19wcm9wZXJ0eVRvQXR0cmlidXRlKHAsIHRoaXNbcCBhcyBrZXlvZiB0aGlzXSlcbiAgICApIGFzIHVuZGVmaW5lZDtcbiAgICB0aGlzLl9fbWFya1VwZGF0ZWQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZva2VkIHdoZW5ldmVyIHRoZSBlbGVtZW50IGlzIHVwZGF0ZWQuIEltcGxlbWVudCB0byBwZXJmb3JtXG4gICAqIHBvc3QtdXBkYXRpbmcgdGFza3MgdmlhIERPTSBBUElzLCBmb3IgZXhhbXBsZSwgZm9jdXNpbmcgYW4gZWxlbWVudC5cbiAgICpcbiAgICogU2V0dGluZyBwcm9wZXJ0aWVzIGluc2lkZSB0aGlzIG1ldGhvZCB3aWxsIHRyaWdnZXIgdGhlIGVsZW1lbnQgdG8gdXBkYXRlXG4gICAqIGFnYWluIGFmdGVyIHRoaXMgdXBkYXRlIGN5Y2xlIGNvbXBsZXRlcy5cbiAgICpcbiAgICogQHBhcmFtIF9jaGFuZ2VkUHJvcGVydGllcyBNYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzIHdpdGggb2xkIHZhbHVlc1xuICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgKi9cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoX2NoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlcykge31cblxuICAvKipcbiAgICogSW52b2tlZCB3aGVuIHRoZSBlbGVtZW50IGlzIGZpcnN0IHVwZGF0ZWQuIEltcGxlbWVudCB0byBwZXJmb3JtIG9uZSB0aW1lXG4gICAqIHdvcmsgb24gdGhlIGVsZW1lbnQgYWZ0ZXIgdXBkYXRlLlxuICAgKlxuICAgKiBgYGB0c1xuICAgKiBmaXJzdFVwZGF0ZWQoKSB7XG4gICAqICAgdGhpcy5yZW5kZXJSb290LmdldEVsZW1lbnRCeUlkKCdteS10ZXh0LWFyZWEnKS5mb2N1cygpO1xuICAgKiB9XG4gICAqIGBgYFxuICAgKlxuICAgKiBTZXR0aW5nIHByb3BlcnRpZXMgaW5zaWRlIHRoaXMgbWV0aG9kIHdpbGwgdHJpZ2dlciB0aGUgZWxlbWVudCB0byB1cGRhdGVcbiAgICogYWdhaW4gYWZ0ZXIgdGhpcyB1cGRhdGUgY3ljbGUgY29tcGxldGVzLlxuICAgKlxuICAgKiBAcGFyYW0gX2NoYW5nZWRQcm9wZXJ0aWVzIE1hcCBvZiBjaGFuZ2VkIHByb3BlcnRpZXMgd2l0aCBvbGQgdmFsdWVzXG4gICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAqL1xuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKF9jaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZXMpIHt9XG59XG4vLyBBc3NpZ25lZCBoZXJlIHRvIHdvcmsgYXJvdW5kIGEganNjb21waWxlciBidWcgd2l0aCBzdGF0aWMgZmllbGRzXG4vLyB3aGVuIGNvbXBpbGluZyB0byBFUzUuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlL2Nsb3N1cmUtY29tcGlsZXIvaXNzdWVzLzMxNzdcbihSZWFjdGl2ZUVsZW1lbnQgYXMgdW5rbm93biBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilbXG4gIEpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkoJ2VsZW1lbnRQcm9wZXJ0aWVzJywgUmVhY3RpdmVFbGVtZW50KVxuXSA9IG5ldyBNYXAoKTtcbihSZWFjdGl2ZUVsZW1lbnQgYXMgdW5rbm93biBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilbXG4gIEpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkoJ2ZpbmFsaXplZCcsIFJlYWN0aXZlRWxlbWVudClcbl0gPSBuZXcgTWFwKCk7XG5cbi8vIEFwcGx5IHBvbHlmaWxscyBpZiBhdmFpbGFibGVcbnBvbHlmaWxsU3VwcG9ydD8uKHtSZWFjdGl2ZUVsZW1lbnR9KTtcblxuLy8gRGV2IG1vZGUgd2FybmluZ3MuLi5cbmlmIChERVZfTU9ERSkge1xuICAvLyBEZWZhdWx0IHdhcm5pbmcgc2V0LlxuICBSZWFjdGl2ZUVsZW1lbnQuZW5hYmxlZFdhcm5pbmdzID0gW1xuICAgICdjaGFuZ2UtaW4tdXBkYXRlJyxcbiAgICAnYXN5bmMtcGVyZm9ybS11cGRhdGUnLFxuICBdO1xuICBjb25zdCBlbnN1cmVPd25XYXJuaW5ncyA9IGZ1bmN0aW9uIChjdG9yOiB0eXBlb2YgUmVhY3RpdmVFbGVtZW50KSB7XG4gICAgaWYgKFxuICAgICAgIWN0b3IuaGFzT3duUHJvcGVydHkoSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eSgnZW5hYmxlZFdhcm5pbmdzJywgY3RvcikpXG4gICAgKSB7XG4gICAgICBjdG9yLmVuYWJsZWRXYXJuaW5ncyA9IGN0b3IuZW5hYmxlZFdhcm5pbmdzIS5zbGljZSgpO1xuICAgIH1cbiAgfTtcbiAgUmVhY3RpdmVFbGVtZW50LmVuYWJsZVdhcm5pbmcgPSBmdW5jdGlvbiAoXG4gICAgdGhpczogdHlwZW9mIFJlYWN0aXZlRWxlbWVudCxcbiAgICB3YXJuaW5nOiBXYXJuaW5nS2luZFxuICApIHtcbiAgICBlbnN1cmVPd25XYXJuaW5ncyh0aGlzKTtcbiAgICBpZiAoIXRoaXMuZW5hYmxlZFdhcm5pbmdzIS5pbmNsdWRlcyh3YXJuaW5nKSkge1xuICAgICAgdGhpcy5lbmFibGVkV2FybmluZ3MhLnB1c2god2FybmluZyk7XG4gICAgfVxuICB9O1xuICBSZWFjdGl2ZUVsZW1lbnQuZGlzYWJsZVdhcm5pbmcgPSBmdW5jdGlvbiAoXG4gICAgdGhpczogdHlwZW9mIFJlYWN0aXZlRWxlbWVudCxcbiAgICB3YXJuaW5nOiBXYXJuaW5nS2luZFxuICApIHtcbiAgICBlbnN1cmVPd25XYXJuaW5ncyh0aGlzKTtcbiAgICBjb25zdCBpID0gdGhpcy5lbmFibGVkV2FybmluZ3MhLmluZGV4T2Yod2FybmluZyk7XG4gICAgaWYgKGkgPj0gMCkge1xuICAgICAgdGhpcy5lbmFibGVkV2FybmluZ3MhLnNwbGljZShpLCAxKTtcbiAgICB9XG4gIH07XG59XG5cbi8vIElNUE9SVEFOVDogZG8gbm90IGNoYW5nZSB0aGUgcHJvcGVydHkgbmFtZSBvciB0aGUgYXNzaWdubWVudCBleHByZXNzaW9uLlxuLy8gVGhpcyBsaW5lIHdpbGwgYmUgdXNlZCBpbiByZWdleGVzIHRvIHNlYXJjaCBmb3IgUmVhY3RpdmVFbGVtZW50IHVzYWdlLlxuKGdsb2JhbC5yZWFjdGl2ZUVsZW1lbnRWZXJzaW9ucyA/Pz0gW10pLnB1c2goJzIuMS4yJyk7XG5pZiAoREVWX01PREUgJiYgZ2xvYmFsLnJlYWN0aXZlRWxlbWVudFZlcnNpb25zLmxlbmd0aCA+IDEpIHtcbiAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xuICAgIGlzc3VlV2FybmluZyEoXG4gICAgICAnbXVsdGlwbGUtdmVyc2lvbnMnLFxuICAgICAgYE11bHRpcGxlIHZlcnNpb25zIG9mIExpdCBsb2FkZWQuIExvYWRpbmcgbXVsdGlwbGUgdmVyc2lvbnMgYCArXG4gICAgICAgIGBpcyBub3QgcmVjb21tZW5kZWQuYFxuICAgICk7XG4gIH0pO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuXG4vLyBJTVBPUlRBTlQ6IHRoZXNlIGltcG9ydHMgbXVzdCBiZSB0eXBlLW9ubHlcbmltcG9ydCB0eXBlIHtEaXJlY3RpdmUsIERpcmVjdGl2ZVJlc3VsdCwgUGFydEluZm99IGZyb20gJy4vZGlyZWN0aXZlLmpzJztcbmltcG9ydCB0eXBlIHtUcnVzdGVkSFRNTCwgVHJ1c3RlZFR5cGVzV2luZG93fSBmcm9tICd0cnVzdGVkLXR5cGVzL2xpYi9pbmRleC5qcyc7XG5cbmNvbnN0IERFVl9NT0RFID0gdHJ1ZTtcbmNvbnN0IEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUyA9IHRydWU7XG5jb25zdCBFTkFCTEVfU0hBRFlET01fTk9QQVRDSCA9IHRydWU7XG5jb25zdCBOT0RFX01PREUgPSBmYWxzZTtcblxuLy8gQWxsb3dzIG1pbmlmaWVycyB0byByZW5hbWUgcmVmZXJlbmNlcyB0byBnbG9iYWxUaGlzXG5jb25zdCBnbG9iYWwgPSBnbG9iYWxUaGlzO1xuXG4vKipcbiAqIENvbnRhaW5zIHR5cGVzIHRoYXQgYXJlIHBhcnQgb2YgdGhlIHVuc3RhYmxlIGRlYnVnIEFQSS5cbiAqXG4gKiBFdmVyeXRoaW5nIGluIHRoaXMgQVBJIGlzIG5vdCBzdGFibGUgYW5kIG1heSBjaGFuZ2Ugb3IgYmUgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlLFxuICogZXZlbiBvbiBwYXRjaCByZWxlYXNlcy5cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1uYW1lc3BhY2VcbmV4cG9ydCBuYW1lc3BhY2UgTGl0VW5zdGFibGUge1xuICAvKipcbiAgICogV2hlbiBMaXQgaXMgcnVubmluZyBpbiBkZXYgbW9kZSBhbmQgYHdpbmRvdy5lbWl0TGl0RGVidWdMb2dFdmVudHNgIGlzIHRydWUsXG4gICAqIHdlIHdpbGwgZW1pdCAnbGl0LWRlYnVnJyBldmVudHMgdG8gd2luZG93LCB3aXRoIGxpdmUgZGV0YWlscyBhYm91dCB0aGUgdXBkYXRlIGFuZCByZW5kZXJcbiAgICogbGlmZWN5Y2xlLiBUaGVzZSBjYW4gYmUgdXNlZnVsIGZvciB3cml0aW5nIGRlYnVnIHRvb2xpbmcgYW5kIHZpc3VhbGl6YXRpb25zLlxuICAgKlxuICAgKiBQbGVhc2UgYmUgYXdhcmUgdGhhdCBydW5uaW5nIHdpdGggd2luZG93LmVtaXRMaXREZWJ1Z0xvZ0V2ZW50cyBoYXMgcGVyZm9ybWFuY2Ugb3ZlcmhlYWQsXG4gICAqIG1ha2luZyBjZXJ0YWluIG9wZXJhdGlvbnMgdGhhdCBhcmUgbm9ybWFsbHkgdmVyeSBjaGVhcCAobGlrZSBhIG5vLW9wIHJlbmRlcikgbXVjaCBzbG93ZXIsXG4gICAqIGJlY2F1c2Ugd2UgbXVzdCBjb3B5IGRhdGEgYW5kIGRpc3BhdGNoIGV2ZW50cy5cbiAgICovXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbmFtZXNwYWNlXG4gIGV4cG9ydCBuYW1lc3BhY2UgRGVidWdMb2cge1xuICAgIGV4cG9ydCB0eXBlIEVudHJ5ID1cbiAgICAgIHwgVGVtcGxhdGVQcmVwXG4gICAgICB8IFRlbXBsYXRlSW5zdGFudGlhdGVkXG4gICAgICB8IFRlbXBsYXRlSW5zdGFudGlhdGVkQW5kVXBkYXRlZFxuICAgICAgfCBUZW1wbGF0ZVVwZGF0aW5nXG4gICAgICB8IEJlZ2luUmVuZGVyXG4gICAgICB8IEVuZFJlbmRlclxuICAgICAgfCBDb21taXRQYXJ0RW50cnlcbiAgICAgIHwgU2V0UGFydFZhbHVlO1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgVGVtcGxhdGVQcmVwIHtcbiAgICAgIGtpbmQ6ICd0ZW1wbGF0ZSBwcmVwJztcbiAgICAgIHRlbXBsYXRlOiBUZW1wbGF0ZTtcbiAgICAgIHN0cmluZ3M6IFRlbXBsYXRlU3RyaW5nc0FycmF5O1xuICAgICAgY2xvbmFibGVUZW1wbGF0ZTogSFRNTFRlbXBsYXRlRWxlbWVudDtcbiAgICAgIHBhcnRzOiBUZW1wbGF0ZVBhcnRbXTtcbiAgICB9XG4gICAgZXhwb3J0IGludGVyZmFjZSBCZWdpblJlbmRlciB7XG4gICAgICBraW5kOiAnYmVnaW4gcmVuZGVyJztcbiAgICAgIGlkOiBudW1iZXI7XG4gICAgICB2YWx1ZTogdW5rbm93bjtcbiAgICAgIGNvbnRhaW5lcjogUmVuZGVyUm9vdE5vZGU7XG4gICAgICBvcHRpb25zOiBSZW5kZXJPcHRpb25zIHwgdW5kZWZpbmVkO1xuICAgICAgcGFydDogQ2hpbGRQYXJ0IHwgdW5kZWZpbmVkO1xuICAgIH1cbiAgICBleHBvcnQgaW50ZXJmYWNlIEVuZFJlbmRlciB7XG4gICAgICBraW5kOiAnZW5kIHJlbmRlcic7XG4gICAgICBpZDogbnVtYmVyO1xuICAgICAgdmFsdWU6IHVua25vd247XG4gICAgICBjb250YWluZXI6IFJlbmRlclJvb3ROb2RlO1xuICAgICAgb3B0aW9uczogUmVuZGVyT3B0aW9ucyB8IHVuZGVmaW5lZDtcbiAgICAgIHBhcnQ6IENoaWxkUGFydDtcbiAgICB9XG4gICAgZXhwb3J0IGludGVyZmFjZSBUZW1wbGF0ZUluc3RhbnRpYXRlZCB7XG4gICAgICBraW5kOiAndGVtcGxhdGUgaW5zdGFudGlhdGVkJztcbiAgICAgIHRlbXBsYXRlOiBUZW1wbGF0ZSB8IENvbXBpbGVkVGVtcGxhdGU7XG4gICAgICBpbnN0YW5jZTogVGVtcGxhdGVJbnN0YW5jZTtcbiAgICAgIG9wdGlvbnM6IFJlbmRlck9wdGlvbnMgfCB1bmRlZmluZWQ7XG4gICAgICBmcmFnbWVudDogTm9kZTtcbiAgICAgIHBhcnRzOiBBcnJheTxQYXJ0IHwgdW5kZWZpbmVkPjtcbiAgICAgIHZhbHVlczogdW5rbm93bltdO1xuICAgIH1cbiAgICBleHBvcnQgaW50ZXJmYWNlIFRlbXBsYXRlSW5zdGFudGlhdGVkQW5kVXBkYXRlZCB7XG4gICAgICBraW5kOiAndGVtcGxhdGUgaW5zdGFudGlhdGVkIGFuZCB1cGRhdGVkJztcbiAgICAgIHRlbXBsYXRlOiBUZW1wbGF0ZSB8IENvbXBpbGVkVGVtcGxhdGU7XG4gICAgICBpbnN0YW5jZTogVGVtcGxhdGVJbnN0YW5jZTtcbiAgICAgIG9wdGlvbnM6IFJlbmRlck9wdGlvbnMgfCB1bmRlZmluZWQ7XG4gICAgICBmcmFnbWVudDogTm9kZTtcbiAgICAgIHBhcnRzOiBBcnJheTxQYXJ0IHwgdW5kZWZpbmVkPjtcbiAgICAgIHZhbHVlczogdW5rbm93bltdO1xuICAgIH1cbiAgICBleHBvcnQgaW50ZXJmYWNlIFRlbXBsYXRlVXBkYXRpbmcge1xuICAgICAga2luZDogJ3RlbXBsYXRlIHVwZGF0aW5nJztcbiAgICAgIHRlbXBsYXRlOiBUZW1wbGF0ZSB8IENvbXBpbGVkVGVtcGxhdGU7XG4gICAgICBpbnN0YW5jZTogVGVtcGxhdGVJbnN0YW5jZTtcbiAgICAgIG9wdGlvbnM6IFJlbmRlck9wdGlvbnMgfCB1bmRlZmluZWQ7XG4gICAgICBwYXJ0czogQXJyYXk8UGFydCB8IHVuZGVmaW5lZD47XG4gICAgICB2YWx1ZXM6IHVua25vd25bXTtcbiAgICB9XG4gICAgZXhwb3J0IGludGVyZmFjZSBTZXRQYXJ0VmFsdWUge1xuICAgICAga2luZDogJ3NldCBwYXJ0JztcbiAgICAgIHBhcnQ6IFBhcnQ7XG4gICAgICB2YWx1ZTogdW5rbm93bjtcbiAgICAgIHZhbHVlSW5kZXg6IG51bWJlcjtcbiAgICAgIHZhbHVlczogdW5rbm93bltdO1xuICAgICAgdGVtcGxhdGVJbnN0YW5jZTogVGVtcGxhdGVJbnN0YW5jZTtcbiAgICB9XG5cbiAgICBleHBvcnQgdHlwZSBDb21taXRQYXJ0RW50cnkgPVxuICAgICAgfCBDb21taXROb3RoaW5nVG9DaGlsZEVudHJ5XG4gICAgICB8IENvbW1pdFRleHRcbiAgICAgIHwgQ29tbWl0Tm9kZVxuICAgICAgfCBDb21taXRBdHRyaWJ1dGVcbiAgICAgIHwgQ29tbWl0UHJvcGVydHlcbiAgICAgIHwgQ29tbWl0Qm9vbGVhbkF0dHJpYnV0ZVxuICAgICAgfCBDb21taXRFdmVudExpc3RlbmVyXG4gICAgICB8IENvbW1pdFRvRWxlbWVudEJpbmRpbmc7XG5cbiAgICBleHBvcnQgaW50ZXJmYWNlIENvbW1pdE5vdGhpbmdUb0NoaWxkRW50cnkge1xuICAgICAga2luZDogJ2NvbW1pdCBub3RoaW5nIHRvIGNoaWxkJztcbiAgICAgIHN0YXJ0OiBDaGlsZE5vZGU7XG4gICAgICBlbmQ6IENoaWxkTm9kZSB8IG51bGw7XG4gICAgICBwYXJlbnQ6IERpc2Nvbm5lY3RhYmxlIHwgdW5kZWZpbmVkO1xuICAgICAgb3B0aW9uczogUmVuZGVyT3B0aW9ucyB8IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBleHBvcnQgaW50ZXJmYWNlIENvbW1pdFRleHQge1xuICAgICAga2luZDogJ2NvbW1pdCB0ZXh0JztcbiAgICAgIG5vZGU6IFRleHQ7XG4gICAgICB2YWx1ZTogdW5rbm93bjtcbiAgICAgIG9wdGlvbnM6IFJlbmRlck9wdGlvbnMgfCB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgZXhwb3J0IGludGVyZmFjZSBDb21taXROb2RlIHtcbiAgICAgIGtpbmQ6ICdjb21taXQgbm9kZSc7XG4gICAgICBzdGFydDogTm9kZTtcbiAgICAgIHBhcmVudDogRGlzY29ubmVjdGFibGUgfCB1bmRlZmluZWQ7XG4gICAgICB2YWx1ZTogTm9kZTtcbiAgICAgIG9wdGlvbnM6IFJlbmRlck9wdGlvbnMgfCB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgZXhwb3J0IGludGVyZmFjZSBDb21taXRBdHRyaWJ1dGUge1xuICAgICAga2luZDogJ2NvbW1pdCBhdHRyaWJ1dGUnO1xuICAgICAgZWxlbWVudDogRWxlbWVudDtcbiAgICAgIG5hbWU6IHN0cmluZztcbiAgICAgIHZhbHVlOiB1bmtub3duO1xuICAgICAgb3B0aW9uczogUmVuZGVyT3B0aW9ucyB8IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBleHBvcnQgaW50ZXJmYWNlIENvbW1pdFByb3BlcnR5IHtcbiAgICAgIGtpbmQ6ICdjb21taXQgcHJvcGVydHknO1xuICAgICAgZWxlbWVudDogRWxlbWVudDtcbiAgICAgIG5hbWU6IHN0cmluZztcbiAgICAgIHZhbHVlOiB1bmtub3duO1xuICAgICAgb3B0aW9uczogUmVuZGVyT3B0aW9ucyB8IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBleHBvcnQgaW50ZXJmYWNlIENvbW1pdEJvb2xlYW5BdHRyaWJ1dGUge1xuICAgICAga2luZDogJ2NvbW1pdCBib29sZWFuIGF0dHJpYnV0ZSc7XG4gICAgICBlbGVtZW50OiBFbGVtZW50O1xuICAgICAgbmFtZTogc3RyaW5nO1xuICAgICAgdmFsdWU6IGJvb2xlYW47XG4gICAgICBvcHRpb25zOiBSZW5kZXJPcHRpb25zIHwgdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ29tbWl0RXZlbnRMaXN0ZW5lciB7XG4gICAgICBraW5kOiAnY29tbWl0IGV2ZW50IGxpc3RlbmVyJztcbiAgICAgIGVsZW1lbnQ6IEVsZW1lbnQ7XG4gICAgICBuYW1lOiBzdHJpbmc7XG4gICAgICB2YWx1ZTogdW5rbm93bjtcbiAgICAgIG9sZExpc3RlbmVyOiB1bmtub3duO1xuICAgICAgb3B0aW9uczogUmVuZGVyT3B0aW9ucyB8IHVuZGVmaW5lZDtcbiAgICAgIC8vIFRydWUgaWYgd2UncmUgcmVtb3ZpbmcgdGhlIG9sZCBldmVudCBsaXN0ZW5lciAoZS5nLiBiZWNhdXNlIHNldHRpbmdzIGNoYW5nZWQsIG9yIHZhbHVlIGlzIG5vdGhpbmcpXG4gICAgICByZW1vdmVMaXN0ZW5lcjogYm9vbGVhbjtcbiAgICAgIC8vIFRydWUgaWYgd2UncmUgYWRkaW5nIGEgbmV3IGV2ZW50IGxpc3RlbmVyIChlLmcuIGJlY2F1c2UgZmlyc3QgcmVuZGVyLCBvciBzZXR0aW5ncyBjaGFuZ2VkKVxuICAgICAgYWRkTGlzdGVuZXI6IGJvb2xlYW47XG4gICAgfVxuXG4gICAgZXhwb3J0IGludGVyZmFjZSBDb21taXRUb0VsZW1lbnRCaW5kaW5nIHtcbiAgICAgIGtpbmQ6ICdjb21taXQgdG8gZWxlbWVudCBiaW5kaW5nJztcbiAgICAgIGVsZW1lbnQ6IEVsZW1lbnQ7XG4gICAgICB2YWx1ZTogdW5rbm93bjtcbiAgICAgIG9wdGlvbnM6IFJlbmRlck9wdGlvbnMgfCB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG59XG5cbmludGVyZmFjZSBEZWJ1Z0xvZ2dpbmdXaW5kb3cge1xuICAvLyBFdmVuIGluIGRldiBtb2RlLCB3ZSBnZW5lcmFsbHkgZG9uJ3Qgd2FudCB0byBlbWl0IHRoZXNlIGV2ZW50cywgYXMgdGhhdCdzXG4gIC8vIGFub3RoZXIgbGV2ZWwgb2YgY29zdCwgc28gb25seSBlbWl0IHRoZW0gd2hlbiBERVZfTU9ERSBpcyB0cnVlIF9hbmRfIHdoZW5cbiAgLy8gd2luZG93LmVtaXRMaXREZWJ1Z0V2ZW50cyBpcyB0cnVlLlxuICBlbWl0TGl0RGVidWdMb2dFdmVudHM/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIFVzZWZ1bCBmb3IgdmlzdWFsaXppbmcgYW5kIGxvZ2dpbmcgaW5zaWdodHMgaW50byB3aGF0IHRoZSBMaXQgdGVtcGxhdGUgc3lzdGVtIGlzIGRvaW5nLlxuICpcbiAqIENvbXBpbGVkIG91dCBvZiBwcm9kIG1vZGUgYnVpbGRzLlxuICovXG5jb25zdCBkZWJ1Z0xvZ0V2ZW50ID0gREVWX01PREVcbiAgPyAoZXZlbnQ6IExpdFVuc3RhYmxlLkRlYnVnTG9nLkVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBzaG91bGRFbWl0ID0gKGdsb2JhbCBhcyB1bmtub3duIGFzIERlYnVnTG9nZ2luZ1dpbmRvdylcbiAgICAgICAgLmVtaXRMaXREZWJ1Z0xvZ0V2ZW50cztcbiAgICAgIGlmICghc2hvdWxkRW1pdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBnbG9iYWwuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgbmV3IEN1c3RvbUV2ZW50PExpdFVuc3RhYmxlLkRlYnVnTG9nLkVudHJ5PignbGl0LWRlYnVnJywge1xuICAgICAgICAgIGRldGFpbDogZXZlbnQsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgOiB1bmRlZmluZWQ7XG4vLyBVc2VkIGZvciBjb25uZWN0aW5nIGJlZ2luUmVuZGVyIGFuZCBlbmRSZW5kZXIgZXZlbnRzIHdoZW4gdGhlcmUgYXJlIG5lc3RlZFxuLy8gcmVuZGVycyB3aGVuIGVycm9ycyBhcmUgdGhyb3duIHByZXZlbnRpbmcgYW4gZW5kUmVuZGVyIGV2ZW50IGZyb20gYmVpbmdcbi8vIGNhbGxlZC5cbmxldCBkZWJ1Z0xvZ1JlbmRlcklkID0gMDtcblxubGV0IGlzc3VlV2FybmluZzogKGNvZGU6IHN0cmluZywgd2FybmluZzogc3RyaW5nKSA9PiB2b2lkO1xuXG5pZiAoREVWX01PREUpIHtcbiAgZ2xvYmFsLmxpdElzc3VlZFdhcm5pbmdzID8/PSBuZXcgU2V0KCk7XG5cbiAgLyoqXG4gICAqIElzc3VlIGEgd2FybmluZyBpZiB3ZSBoYXZlbid0IGFscmVhZHksIGJhc2VkIGVpdGhlciBvbiBgY29kZWAgb3IgYHdhcm5pbmdgLlxuICAgKiBXYXJuaW5ncyBhcmUgZGlzYWJsZWQgYXV0b21hdGljYWxseSBvbmx5IGJ5IGB3YXJuaW5nYDsgZGlzYWJsaW5nIHZpYSBgY29kZWBcbiAgICogY2FuIGJlIGRvbmUgYnkgdXNlcnMuXG4gICAqL1xuICBpc3N1ZVdhcm5pbmcgPSAoY29kZTogc3RyaW5nLCB3YXJuaW5nOiBzdHJpbmcpID0+IHtcbiAgICB3YXJuaW5nICs9IGNvZGVcbiAgICAgID8gYCBTZWUgaHR0cHM6Ly9saXQuZGV2L21zZy8ke2NvZGV9IGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIDogJyc7XG4gICAgaWYgKFxuICAgICAgIWdsb2JhbC5saXRJc3N1ZWRXYXJuaW5ncyEuaGFzKHdhcm5pbmcpICYmXG4gICAgICAhZ2xvYmFsLmxpdElzc3VlZFdhcm5pbmdzIS5oYXMoY29kZSlcbiAgICApIHtcbiAgICAgIGNvbnNvbGUud2Fybih3YXJuaW5nKTtcbiAgICAgIGdsb2JhbC5saXRJc3N1ZWRXYXJuaW5ncyEuYWRkKHdhcm5pbmcpO1xuICAgIH1cbiAgfTtcblxuICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgaXNzdWVXYXJuaW5nKFxuICAgICAgJ2Rldi1tb2RlJyxcbiAgICAgIGBMaXQgaXMgaW4gZGV2IG1vZGUuIE5vdCByZWNvbW1lbmRlZCBmb3IgcHJvZHVjdGlvbiFgXG4gICAgKTtcbiAgfSk7XG59XG5cbmNvbnN0IHdyYXAgPVxuICBFTkFCTEVfU0hBRFlET01fTk9QQVRDSCAmJlxuICBnbG9iYWwuU2hhZHlET00/LmluVXNlICYmXG4gIGdsb2JhbC5TaGFkeURPTT8ubm9QYXRjaCA9PT0gdHJ1ZVxuICAgID8gKGdsb2JhbC5TaGFkeURPTSEud3JhcCBhcyA8VCBleHRlbmRzIE5vZGU+KG5vZGU6IFQpID0+IFQpXG4gICAgOiA8VCBleHRlbmRzIE5vZGU+KG5vZGU6IFQpID0+IG5vZGU7XG5cbmNvbnN0IHRydXN0ZWRUeXBlcyA9IChnbG9iYWwgYXMgdW5rbm93biBhcyBUcnVzdGVkVHlwZXNXaW5kb3cpLnRydXN0ZWRUeXBlcztcblxuLyoqXG4gKiBPdXIgVHJ1c3RlZFR5cGVQb2xpY3kgZm9yIEhUTUwgd2hpY2ggaXMgZGVjbGFyZWQgdXNpbmcgdGhlIGh0bWwgdGVtcGxhdGVcbiAqIHRhZyBmdW5jdGlvbi5cbiAqXG4gKiBUaGF0IEhUTUwgaXMgYSBkZXZlbG9wZXItYXV0aG9yZWQgY29uc3RhbnQsIGFuZCBpcyBwYXJzZWQgd2l0aCBpbm5lckhUTUxcbiAqIGJlZm9yZSBhbnkgdW50cnVzdGVkIGV4cHJlc3Npb25zIGhhdmUgYmVlbiBtaXhlZCBpbi4gVGhlcmVmb3IgaXQgaXNcbiAqIGNvbnNpZGVyZWQgc2FmZSBieSBjb25zdHJ1Y3Rpb24uXG4gKi9cbmNvbnN0IHBvbGljeSA9IHRydXN0ZWRUeXBlc1xuICA/IHRydXN0ZWRUeXBlcy5jcmVhdGVQb2xpY3koJ2xpdC1odG1sJywge1xuICAgICAgY3JlYXRlSFRNTDogKHMpID0+IHMsXG4gICAgfSlcbiAgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVXNlZCB0byBzYW5pdGl6ZSBhbnkgdmFsdWUgYmVmb3JlIGl0IGlzIHdyaXR0ZW4gaW50byB0aGUgRE9NLiBUaGlzIGNhbiBiZVxuICogdXNlZCB0byBpbXBsZW1lbnQgYSBzZWN1cml0eSBwb2xpY3kgb2YgYWxsb3dlZCBhbmQgZGlzYWxsb3dlZCB2YWx1ZXMgaW5cbiAqIG9yZGVyIHRvIHByZXZlbnQgWFNTIGF0dGFja3MuXG4gKlxuICogT25lIHdheSBvZiB1c2luZyB0aGlzIGNhbGxiYWNrIHdvdWxkIGJlIHRvIGNoZWNrIGF0dHJpYnV0ZXMgYW5kIHByb3BlcnRpZXNcbiAqIGFnYWluc3QgYSBsaXN0IG9mIGhpZ2ggcmlzayBmaWVsZHMsIGFuZCByZXF1aXJlIHRoYXQgdmFsdWVzIHdyaXR0ZW4gdG8gc3VjaFxuICogZmllbGRzIGJlIGluc3RhbmNlcyBvZiBhIGNsYXNzIHdoaWNoIGlzIHNhZmUgYnkgY29uc3RydWN0aW9uLiBDbG9zdXJlJ3MgU2FmZVxuICogSFRNTCBUeXBlcyBpcyBvbmUgaW1wbGVtZW50YXRpb24gb2YgdGhpcyB0ZWNobmlxdWUgKFxuICogaHR0cHM6Ly9naXRodWIuY29tL2dvb2dsZS9zYWZlLWh0bWwtdHlwZXMvYmxvYi9tYXN0ZXIvZG9jL3NhZmVodG1sLXR5cGVzLm1kKS5cbiAqIFRoZSBUcnVzdGVkVHlwZXMgcG9seWZpbGwgaW4gQVBJLW9ubHkgbW9kZSBjb3VsZCBhbHNvIGJlIHVzZWQgYXMgYSBiYXNpc1xuICogZm9yIHRoaXMgdGVjaG5pcXVlIChodHRwczovL2dpdGh1Yi5jb20vV0lDRy90cnVzdGVkLXR5cGVzKS5cbiAqXG4gKiBAcGFyYW0gbm9kZSBUaGUgSFRNTCBub2RlICh1c3VhbGx5IGVpdGhlciBhICN0ZXh0IG5vZGUgb3IgYW4gRWxlbWVudCkgdGhhdFxuICogICAgIGlzIGJlaW5nIHdyaXR0ZW4gdG8uIE5vdGUgdGhhdCB0aGlzIGlzIGp1c3QgYW4gZXhlbXBsYXIgbm9kZSwgdGhlIHdyaXRlXG4gKiAgICAgbWF5IHRha2UgcGxhY2UgYWdhaW5zdCBhbm90aGVyIGluc3RhbmNlIG9mIHRoZSBzYW1lIGNsYXNzIG9mIG5vZGUuXG4gKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiBhbiBhdHRyaWJ1dGUgb3IgcHJvcGVydHkgKGZvciBleGFtcGxlLCAnaHJlZicpLlxuICogQHBhcmFtIHR5cGUgSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHdyaXRlIHRoYXQncyBhYm91dCB0byBiZSBwZXJmb3JtZWQgd2lsbFxuICogICAgIGJlIHRvIGEgcHJvcGVydHkgb3IgYSBub2RlLlxuICogQHJldHVybiBBIGZ1bmN0aW9uIHRoYXQgd2lsbCBzYW5pdGl6ZSB0aGlzIGNsYXNzIG9mIHdyaXRlcy5cbiAqL1xuZXhwb3J0IHR5cGUgU2FuaXRpemVyRmFjdG9yeSA9IChcbiAgbm9kZTogTm9kZSxcbiAgbmFtZTogc3RyaW5nLFxuICB0eXBlOiAncHJvcGVydHknIHwgJ2F0dHJpYnV0ZSdcbikgPT4gVmFsdWVTYW5pdGl6ZXI7XG5cbi8qKlxuICogQSBmdW5jdGlvbiB3aGljaCBjYW4gc2FuaXRpemUgdmFsdWVzIHRoYXQgd2lsbCBiZSB3cml0dGVuIHRvIGEgc3BlY2lmaWMga2luZFxuICogb2YgRE9NIHNpbmsuXG4gKlxuICogU2VlIFNhbml0aXplckZhY3RvcnkuXG4gKlxuICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBzYW5pdGl6ZS4gV2lsbCBiZSB0aGUgYWN0dWFsIHZhbHVlIHBhc3NlZCBpbnRvXG4gKiAgICAgdGhlIGxpdC1odG1sIHRlbXBsYXRlIGxpdGVyYWwsIHNvIHRoaXMgY291bGQgYmUgb2YgYW55IHR5cGUuXG4gKiBAcmV0dXJuIFRoZSB2YWx1ZSB0byB3cml0ZSB0byB0aGUgRE9NLiBVc3VhbGx5IHRoZSBzYW1lIGFzIHRoZSBpbnB1dCB2YWx1ZSxcbiAqICAgICB1bmxlc3Mgc2FuaXRpemF0aW9uIGlzIG5lZWRlZC5cbiAqL1xuZXhwb3J0IHR5cGUgVmFsdWVTYW5pdGl6ZXIgPSAodmFsdWU6IHVua25vd24pID0+IHVua25vd247XG5cbmNvbnN0IGlkZW50aXR5RnVuY3Rpb246IFZhbHVlU2FuaXRpemVyID0gKHZhbHVlOiB1bmtub3duKSA9PiB2YWx1ZTtcbmNvbnN0IG5vb3BTYW5pdGl6ZXI6IFNhbml0aXplckZhY3RvcnkgPSAoXG4gIF9ub2RlOiBOb2RlLFxuICBfbmFtZTogc3RyaW5nLFxuICBfdHlwZTogJ3Byb3BlcnR5JyB8ICdhdHRyaWJ1dGUnXG4pID0+IGlkZW50aXR5RnVuY3Rpb247XG5cbi8qKiBTZXRzIHRoZSBnbG9iYWwgc2FuaXRpemVyIGZhY3RvcnkuICovXG5jb25zdCBzZXRTYW5pdGl6ZXIgPSAobmV3U2FuaXRpemVyOiBTYW5pdGl6ZXJGYWN0b3J5KSA9PiB7XG4gIGlmICghRU5BQkxFX0VYVFJBX1NFQ1VSSVRZX0hPT0tTKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChzYW5pdGl6ZXJGYWN0b3J5SW50ZXJuYWwgIT09IG5vb3BTYW5pdGl6ZXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgQXR0ZW1wdGVkIHRvIG92ZXJ3cml0ZSBleGlzdGluZyBsaXQtaHRtbCBzZWN1cml0eSBwb2xpY3kuYCArXG4gICAgICAgIGAgc2V0U2FuaXRpemVET01WYWx1ZUZhY3Rvcnkgc2hvdWxkIGJlIGNhbGxlZCBhdCBtb3N0IG9uY2UuYFxuICAgICk7XG4gIH1cbiAgc2FuaXRpemVyRmFjdG9yeUludGVybmFsID0gbmV3U2FuaXRpemVyO1xufTtcblxuLyoqXG4gKiBPbmx5IHVzZWQgaW4gaW50ZXJuYWwgdGVzdHMsIG5vdCBhIHBhcnQgb2YgdGhlIHB1YmxpYyBBUEkuXG4gKi9cbmNvbnN0IF90ZXN0T25seUNsZWFyU2FuaXRpemVyRmFjdG9yeURvTm90Q2FsbE9yRWxzZSA9ICgpID0+IHtcbiAgc2FuaXRpemVyRmFjdG9yeUludGVybmFsID0gbm9vcFNhbml0aXplcjtcbn07XG5cbmNvbnN0IGNyZWF0ZVNhbml0aXplcjogU2FuaXRpemVyRmFjdG9yeSA9IChub2RlLCBuYW1lLCB0eXBlKSA9PiB7XG4gIHJldHVybiBzYW5pdGl6ZXJGYWN0b3J5SW50ZXJuYWwobm9kZSwgbmFtZSwgdHlwZSk7XG59O1xuXG4vLyBBZGRlZCB0byBhbiBhdHRyaWJ1dGUgbmFtZSB0byBtYXJrIHRoZSBhdHRyaWJ1dGUgYXMgYm91bmQgc28gd2UgY2FuIGZpbmRcbi8vIGl0IGVhc2lseS5cbmNvbnN0IGJvdW5kQXR0cmlidXRlU3VmZml4ID0gJyRsaXQkJztcblxuLy8gVGhpcyBtYXJrZXIgaXMgdXNlZCBpbiBtYW55IHN5bnRhY3RpYyBwb3NpdGlvbnMgaW4gSFRNTCwgc28gaXQgbXVzdCBiZVxuLy8gYSB2YWxpZCBlbGVtZW50IG5hbWUgYW5kIGF0dHJpYnV0ZSBuYW1lLiBXZSBkb24ndCBzdXBwb3J0IGR5bmFtaWMgbmFtZXMgKHlldClcbi8vIGJ1dCB0aGlzIGF0IGxlYXN0IGVuc3VyZXMgdGhhdCB0aGUgcGFyc2UgdHJlZSBpcyBjbG9zZXIgdG8gdGhlIHRlbXBsYXRlXG4vLyBpbnRlbnRpb24uXG5jb25zdCBtYXJrZXIgPSBgbGl0JCR7TWF0aC5yYW5kb20oKS50b0ZpeGVkKDkpLnNsaWNlKDIpfSRgO1xuXG4vLyBTdHJpbmcgdXNlZCB0byB0ZWxsIGlmIGEgY29tbWVudCBpcyBhIG1hcmtlciBjb21tZW50XG5jb25zdCBtYXJrZXJNYXRjaCA9ICc/JyArIG1hcmtlcjtcblxuLy8gVGV4dCB1c2VkIHRvIGluc2VydCBhIGNvbW1lbnQgbWFya2VyIG5vZGUuIFdlIHVzZSBwcm9jZXNzaW5nIGluc3RydWN0aW9uXG4vLyBzeW50YXggYmVjYXVzZSBpdCdzIHNsaWdodGx5IHNtYWxsZXIsIGJ1dCBwYXJzZXMgYXMgYSBjb21tZW50IG5vZGUuXG5jb25zdCBub2RlTWFya2VyID0gYDwke21hcmtlck1hdGNofT5gO1xuXG5jb25zdCBkID1cbiAgTk9ERV9NT0RFICYmIGdsb2JhbC5kb2N1bWVudCA9PT0gdW5kZWZpbmVkXG4gICAgPyAoe1xuICAgICAgICBjcmVhdGVUcmVlV2Fsa2VyKCkge1xuICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgIH0gYXMgdW5rbm93biBhcyBEb2N1bWVudClcbiAgICA6IGRvY3VtZW50O1xuXG4vLyBDcmVhdGVzIGEgZHluYW1pYyBtYXJrZXIuIFdlIG5ldmVyIGhhdmUgdG8gc2VhcmNoIGZvciB0aGVzZSBpbiB0aGUgRE9NLlxuY29uc3QgY3JlYXRlTWFya2VyID0gKCkgPT4gZC5jcmVhdGVDb21tZW50KCcnKTtcblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdHlwZW9mLW9wZXJhdG9yXG50eXBlIFByaW1pdGl2ZSA9IG51bGwgfCB1bmRlZmluZWQgfCBib29sZWFuIHwgbnVtYmVyIHwgc3RyaW5nIHwgc3ltYm9sIHwgYmlnaW50O1xuY29uc3QgaXNQcmltaXRpdmUgPSAodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBQcmltaXRpdmUgPT5cbiAgdmFsdWUgPT09IG51bGwgfHwgKHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsdWUgIT0gJ2Z1bmN0aW9uJyk7XG5jb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbmNvbnN0IGlzSXRlcmFibGUgPSAodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBJdGVyYWJsZTx1bmtub3duPiA9PlxuICBpc0FycmF5KHZhbHVlKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICB0eXBlb2YgKHZhbHVlIGFzIGFueSk/LltTeW1ib2wuaXRlcmF0b3JdID09PSAnZnVuY3Rpb24nO1xuXG5jb25zdCBTUEFDRV9DSEFSID0gYFsgXFx0XFxuXFxmXFxyXWA7XG5jb25zdCBBVFRSX1ZBTFVFX0NIQVIgPSBgW14gXFx0XFxuXFxmXFxyXCInXFxgPD49XWA7XG5jb25zdCBOQU1FX0NIQVIgPSBgW15cXFxcc1wiJz49L11gO1xuXG4vLyBUaGVzZSByZWdleGVzIHJlcHJlc2VudCB0aGUgZml2ZSBwYXJzaW5nIHN0YXRlcyB0aGF0IHdlIGNhcmUgYWJvdXQgaW4gdGhlXG4vLyBUZW1wbGF0ZSdzIEhUTUwgc2Nhbm5lci4gVGhleSBtYXRjaCB0aGUgKmVuZCogb2YgdGhlIHN0YXRlIHRoZXkncmUgbmFtZWRcbi8vIGFmdGVyLlxuLy8gRGVwZW5kaW5nIG9uIHRoZSBtYXRjaCwgd2UgdHJhbnNpdGlvbiB0byBhIG5ldyBzdGF0ZS4gSWYgdGhlcmUncyBubyBtYXRjaCxcbi8vIHdlIHN0YXkgaW4gdGhlIHNhbWUgc3RhdGUuXG4vLyBOb3RlIHRoYXQgdGhlIHJlZ2V4ZXMgYXJlIHN0YXRlZnVsLiBXZSB1dGlsaXplIGxhc3RJbmRleCBhbmQgc3luYyBpdFxuLy8gYWNyb3NzIHRoZSBtdWx0aXBsZSByZWdleGVzIHVzZWQuIEluIGFkZGl0aW9uIHRvIHRoZSBmaXZlIHJlZ2V4ZXMgYmVsb3dcbi8vIHdlIGFsc28gZHluYW1pY2FsbHkgY3JlYXRlIGEgcmVnZXggdG8gZmluZCB0aGUgbWF0Y2hpbmcgZW5kIHRhZ3MgZm9yIHJhd1xuLy8gdGV4dCBlbGVtZW50cy5cblxuLyoqXG4gKiBFbmQgb2YgdGV4dCBpczogYDxgIGZvbGxvd2VkIGJ5OlxuICogICAoY29tbWVudCBzdGFydCkgb3IgKHRhZykgb3IgKGR5bmFtaWMgdGFnIGJpbmRpbmcpXG4gKi9cbmNvbnN0IHRleHRFbmRSZWdleCA9IC88KD86KCEtLXxcXC9bXmEtekEtWl0pfChcXC8/W2EtekEtWl1bXj5cXHNdKil8KFxcLz8kKSkvZztcbmNvbnN0IENPTU1FTlRfU1RBUlQgPSAxO1xuY29uc3QgVEFHX05BTUUgPSAyO1xuY29uc3QgRFlOQU1JQ19UQUdfTkFNRSA9IDM7XG5cbmNvbnN0IGNvbW1lbnRFbmRSZWdleCA9IC8tLT4vZztcbi8qKlxuICogQ29tbWVudHMgbm90IHN0YXJ0ZWQgd2l0aCA8IS0tLCBsaWtlIDwveywgY2FuIGJlIGVuZGVkIGJ5IGEgc2luZ2xlIGA+YFxuICovXG5jb25zdCBjb21tZW50MkVuZFJlZ2V4ID0gLz4vZztcblxuLyoqXG4gKiBUaGUgdGFnRW5kIHJlZ2V4IG1hdGNoZXMgdGhlIGVuZCBvZiB0aGUgXCJpbnNpZGUgYW4gb3BlbmluZ1wiIHRhZyBzeW50YXhcbiAqIHBvc2l0aW9uLiBJdCBlaXRoZXIgbWF0Y2hlcyBhIGA+YCwgYW4gYXR0cmlidXRlLWxpa2Ugc2VxdWVuY2UsIG9yIHRoZSBlbmRcbiAqIG9mIHRoZSBzdHJpbmcgYWZ0ZXIgYSBzcGFjZSAoYXR0cmlidXRlLW5hbWUgcG9zaXRpb24gZW5kaW5nKS5cbiAqXG4gKiBTZWUgYXR0cmlidXRlcyBpbiB0aGUgSFRNTCBzcGVjOlxuICogaHR0cHM6Ly93d3cudzMub3JnL1RSL2h0bWw1L3N5bnRheC5odG1sI2VsZW1lbnRzLWF0dHJpYnV0ZXNcbiAqXG4gKiBcIiBcXHRcXG5cXGZcXHJcIiBhcmUgSFRNTCBzcGFjZSBjaGFyYWN0ZXJzOlxuICogaHR0cHM6Ly9pbmZyYS5zcGVjLndoYXR3Zy5vcmcvI2FzY2lpLXdoaXRlc3BhY2VcbiAqXG4gKiBTbyBhbiBhdHRyaWJ1dGUgaXM6XG4gKiAgKiBUaGUgbmFtZTogYW55IGNoYXJhY3RlciBleGNlcHQgYSB3aGl0ZXNwYWNlIGNoYXJhY3RlciwgKFwiKSwgKCcpLCBcIj5cIixcbiAqICAgIFwiPVwiLCBvciBcIi9cIi4gTm90ZTogdGhpcyBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgSFRNTCBzcGVjIHdoaWNoIGFsc28gZXhjbHVkZXMgY29udHJvbCBjaGFyYWN0ZXJzLlxuICogICogRm9sbG93ZWQgYnkgemVybyBvciBtb3JlIHNwYWNlIGNoYXJhY3RlcnNcbiAqICAqIEZvbGxvd2VkIGJ5IFwiPVwiXG4gKiAgKiBGb2xsb3dlZCBieSB6ZXJvIG9yIG1vcmUgc3BhY2UgY2hhcmFjdGVyc1xuICogICogRm9sbG93ZWQgYnk6XG4gKiAgICAqIEFueSBjaGFyYWN0ZXIgZXhjZXB0IHNwYWNlLCAoJyksIChcIiksIFwiPFwiLCBcIj5cIiwgXCI9XCIsIChgKSwgb3JcbiAqICAgICogKFwiKSB0aGVuIGFueSBub24tKFwiKSwgb3JcbiAqICAgICogKCcpIHRoZW4gYW55IG5vbi0oJylcbiAqL1xuY29uc3QgdGFnRW5kUmVnZXggPSBuZXcgUmVnRXhwKFxuICBgPnwke1NQQUNFX0NIQVJ9KD86KCR7TkFNRV9DSEFSfSspKCR7U1BBQ0VfQ0hBUn0qPSR7U1BBQ0VfQ0hBUn0qKD86JHtBVFRSX1ZBTFVFX0NIQVJ9fChcInwnKXwpKXwkKWAsXG4gICdnJ1xuKTtcbmNvbnN0IEVOVElSRV9NQVRDSCA9IDA7XG5jb25zdCBBVFRSSUJVVEVfTkFNRSA9IDE7XG5jb25zdCBTUEFDRVNfQU5EX0VRVUFMUyA9IDI7XG5jb25zdCBRVU9URV9DSEFSID0gMztcblxuY29uc3Qgc2luZ2xlUXVvdGVBdHRyRW5kUmVnZXggPSAvJy9nO1xuY29uc3QgZG91YmxlUXVvdGVBdHRyRW5kUmVnZXggPSAvXCIvZztcbi8qKlxuICogTWF0Y2hlcyB0aGUgcmF3IHRleHQgZWxlbWVudHMuXG4gKlxuICogQ29tbWVudHMgYXJlIG5vdCBwYXJzZWQgd2l0aGluIHJhdyB0ZXh0IGVsZW1lbnRzLCBzbyB3ZSBuZWVkIHRvIHNlYXJjaCB0aGVpclxuICogdGV4dCBjb250ZW50IGZvciBtYXJrZXIgc3RyaW5ncy5cbiAqL1xuY29uc3QgcmF3VGV4dEVsZW1lbnQgPSAvXig/OnNjcmlwdHxzdHlsZXx0ZXh0YXJlYXx0aXRsZSkkL2k7XG5cbi8qKiBUZW1wbGF0ZVJlc3VsdCB0eXBlcyAqL1xuY29uc3QgSFRNTF9SRVNVTFQgPSAxO1xuY29uc3QgU1ZHX1JFU1VMVCA9IDI7XG5jb25zdCBNQVRITUxfUkVTVUxUID0gMztcblxudHlwZSBSZXN1bHRUeXBlID0gdHlwZW9mIEhUTUxfUkVTVUxUIHwgdHlwZW9mIFNWR19SRVNVTFQgfCB0eXBlb2YgTUFUSE1MX1JFU1VMVDtcblxuLy8gVGVtcGxhdGVQYXJ0IHR5cGVzXG4vLyBJTVBPUlRBTlQ6IHRoZXNlIG11c3QgbWF0Y2ggdGhlIHZhbHVlcyBpbiBQYXJ0VHlwZVxuY29uc3QgQVRUUklCVVRFX1BBUlQgPSAxO1xuY29uc3QgQ0hJTERfUEFSVCA9IDI7XG5jb25zdCBQUk9QRVJUWV9QQVJUID0gMztcbmNvbnN0IEJPT0xFQU5fQVRUUklCVVRFX1BBUlQgPSA0O1xuY29uc3QgRVZFTlRfUEFSVCA9IDU7XG5jb25zdCBFTEVNRU5UX1BBUlQgPSA2O1xuY29uc3QgQ09NTUVOVF9QQVJUID0gNztcblxuLyoqXG4gKiBUaGUgcmV0dXJuIHR5cGUgb2YgdGhlIHRlbXBsYXRlIHRhZyBmdW5jdGlvbnMsIHtAbGlua2NvZGUgaHRtbH0gYW5kXG4gKiB7QGxpbmtjb2RlIHN2Z30gd2hlbiBpdCBoYXNuJ3QgYmVlbiBjb21waWxlZCBieSBAbGl0LWxhYnMvY29tcGlsZXIuXG4gKlxuICogQSBgVGVtcGxhdGVSZXN1bHRgIG9iamVjdCBob2xkcyBhbGwgdGhlIGluZm9ybWF0aW9uIGFib3V0IGEgdGVtcGxhdGVcbiAqIGV4cHJlc3Npb24gcmVxdWlyZWQgdG8gcmVuZGVyIGl0OiB0aGUgdGVtcGxhdGUgc3RyaW5ncywgZXhwcmVzc2lvbiB2YWx1ZXMsXG4gKiBhbmQgdHlwZSBvZiB0ZW1wbGF0ZSAoaHRtbCBvciBzdmcpLlxuICpcbiAqIGBUZW1wbGF0ZVJlc3VsdGAgb2JqZWN0cyBkbyBub3QgY3JlYXRlIGFueSBET00gb24gdGhlaXIgb3duLiBUbyBjcmVhdGUgb3JcbiAqIHVwZGF0ZSBET00geW91IG5lZWQgdG8gcmVuZGVyIHRoZSBgVGVtcGxhdGVSZXN1bHRgLiBTZWVcbiAqIFtSZW5kZXJpbmddKGh0dHBzOi8vbGl0LmRldi9kb2NzL2NvbXBvbmVudHMvcmVuZGVyaW5nKSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKi9cbmV4cG9ydCB0eXBlIFVuY29tcGlsZWRUZW1wbGF0ZVJlc3VsdDxUIGV4dGVuZHMgUmVzdWx0VHlwZSA9IFJlc3VsdFR5cGU+ID0ge1xuICAvLyBUaGlzIHByb3BlcnR5IG5lZWRzIHRvIHJlbWFpbiB1bm1pbmlmaWVkLlxuICBbJ18kbGl0VHlwZSQnXTogVDtcbiAgc3RyaW5nczogVGVtcGxhdGVTdHJpbmdzQXJyYXk7XG4gIHZhbHVlczogdW5rbm93bltdO1xufTtcblxuLyoqXG4gKiBUaGlzIGlzIGEgdGVtcGxhdGUgcmVzdWx0IHRoYXQgbWF5IGJlIGVpdGhlciB1bmNvbXBpbGVkIG9yIGNvbXBpbGVkLlxuICpcbiAqIEluIHRoZSBmdXR1cmUsIFRlbXBsYXRlUmVzdWx0IHdpbGwgYmUgdGhpcyB0eXBlLiBJZiB5b3Ugd2FudCB0byBleHBsaWNpdGx5XG4gKiBub3RlIHRoYXQgYSB0ZW1wbGF0ZSByZXN1bHQgaXMgcG90ZW50aWFsbHkgY29tcGlsZWQsIHlvdSBjYW4gcmVmZXJlbmNlIHRoaXNcbiAqIHR5cGUgYW5kIGl0IHdpbGwgY29udGludWUgdG8gYmVoYXZlIHRoZSBzYW1lIHRocm91Z2ggdGhlIG5leHQgbWFqb3IgdmVyc2lvblxuICogb2YgTGl0LiBUaGlzIGNhbiBiZSB1c2VmdWwgZm9yIGNvZGUgdGhhdCB3YW50cyB0byBwcmVwYXJlIGZvciB0aGUgbmV4dFxuICogbWFqb3IgdmVyc2lvbiBvZiBMaXQuXG4gKi9cbmV4cG9ydCB0eXBlIE1heWJlQ29tcGlsZWRUZW1wbGF0ZVJlc3VsdDxUIGV4dGVuZHMgUmVzdWx0VHlwZSA9IFJlc3VsdFR5cGU+ID1cbiAgfCBVbmNvbXBpbGVkVGVtcGxhdGVSZXN1bHQ8VD5cbiAgfCBDb21waWxlZFRlbXBsYXRlUmVzdWx0O1xuXG4vKipcbiAqIFRoZSByZXR1cm4gdHlwZSBvZiB0aGUgdGVtcGxhdGUgdGFnIGZ1bmN0aW9ucywge0BsaW5rY29kZSBodG1sfSBhbmRcbiAqIHtAbGlua2NvZGUgc3ZnfS5cbiAqXG4gKiBBIGBUZW1wbGF0ZVJlc3VsdGAgb2JqZWN0IGhvbGRzIGFsbCB0aGUgaW5mb3JtYXRpb24gYWJvdXQgYSB0ZW1wbGF0ZVxuICogZXhwcmVzc2lvbiByZXF1aXJlZCB0byByZW5kZXIgaXQ6IHRoZSB0ZW1wbGF0ZSBzdHJpbmdzLCBleHByZXNzaW9uIHZhbHVlcyxcbiAqIGFuZCB0eXBlIG9mIHRlbXBsYXRlIChodG1sIG9yIHN2ZykuXG4gKlxuICogYFRlbXBsYXRlUmVzdWx0YCBvYmplY3RzIGRvIG5vdCBjcmVhdGUgYW55IERPTSBvbiB0aGVpciBvd24uIFRvIGNyZWF0ZSBvclxuICogdXBkYXRlIERPTSB5b3UgbmVlZCB0byByZW5kZXIgdGhlIGBUZW1wbGF0ZVJlc3VsdGAuIFNlZVxuICogW1JlbmRlcmluZ10oaHR0cHM6Ly9saXQuZGV2L2RvY3MvY29tcG9uZW50cy9yZW5kZXJpbmcpIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIEluIExpdCA0LCB0aGlzIHR5cGUgd2lsbCBiZSBhbiBhbGlhcyBvZlxuICogTWF5YmVDb21waWxlZFRlbXBsYXRlUmVzdWx0LCBzbyB0aGF0IGNvZGUgd2lsbCBnZXQgdHlwZSBlcnJvcnMgaWYgaXQgYXNzdW1lc1xuICogdGhhdCBMaXQgdGVtcGxhdGVzIGFyZSBub3QgY29tcGlsZWQuIFdoZW4gZGVsaWJlcmF0ZWx5IHdvcmtpbmcgd2l0aCBvbmx5XG4gKiBvbmUsIHVzZSBlaXRoZXIge0BsaW5rY29kZSBDb21waWxlZFRlbXBsYXRlUmVzdWx0fSBvclxuICoge0BsaW5rY29kZSBVbmNvbXBpbGVkVGVtcGxhdGVSZXN1bHR9IGV4cGxpY2l0bHkuXG4gKi9cbmV4cG9ydCB0eXBlIFRlbXBsYXRlUmVzdWx0PFQgZXh0ZW5kcyBSZXN1bHRUeXBlID0gUmVzdWx0VHlwZT4gPVxuICBVbmNvbXBpbGVkVGVtcGxhdGVSZXN1bHQ8VD47XG5cbmV4cG9ydCB0eXBlIEhUTUxUZW1wbGF0ZVJlc3VsdCA9IFRlbXBsYXRlUmVzdWx0PHR5cGVvZiBIVE1MX1JFU1VMVD47XG5cbmV4cG9ydCB0eXBlIFNWR1RlbXBsYXRlUmVzdWx0ID0gVGVtcGxhdGVSZXN1bHQ8dHlwZW9mIFNWR19SRVNVTFQ+O1xuXG5leHBvcnQgdHlwZSBNYXRoTUxUZW1wbGF0ZVJlc3VsdCA9IFRlbXBsYXRlUmVzdWx0PHR5cGVvZiBNQVRITUxfUkVTVUxUPjtcblxuLyoqXG4gKiBBIFRlbXBsYXRlUmVzdWx0IHRoYXQgaGFzIGJlZW4gY29tcGlsZWQgYnkgQGxpdC1sYWJzL2NvbXBpbGVyLCBza2lwcGluZyB0aGVcbiAqIHByZXBhcmUgc3RlcC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb21waWxlZFRlbXBsYXRlUmVzdWx0IHtcbiAgLy8gVGhpcyBpcyBhIGZhY3RvcnkgaW4gb3JkZXIgdG8gbWFrZSB0ZW1wbGF0ZSBpbml0aWFsaXphdGlvbiBsYXp5XG4gIC8vIGFuZCBhbGxvdyBTaGFkeVJlbmRlck9wdGlvbnMgc2NvcGUgdG8gYmUgcGFzc2VkIGluLlxuICAvLyBUaGlzIHByb3BlcnR5IG5lZWRzIHRvIHJlbWFpbiB1bm1pbmlmaWVkLlxuICBbJ18kbGl0VHlwZSQnXTogQ29tcGlsZWRUZW1wbGF0ZTtcbiAgdmFsdWVzOiB1bmtub3duW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcGlsZWRUZW1wbGF0ZSBleHRlbmRzIE9taXQ8VGVtcGxhdGUsICdlbCc+IHtcbiAgLy8gZWwgaXMgb3ZlcnJpZGRlbiB0byBiZSBvcHRpb25hbC4gV2UgaW5pdGlhbGl6ZSBpdCBvbiBmaXJzdCByZW5kZXJcbiAgZWw/OiBIVE1MVGVtcGxhdGVFbGVtZW50O1xuXG4gIC8vIFRoZSBwcmVwYXJlZCBIVE1MIHN0cmluZyB0byBjcmVhdGUgYSB0ZW1wbGF0ZSBlbGVtZW50IGZyb20uXG4gIC8vIFRoZSB0eXBlIGlzIGEgVGVtcGxhdGVTdHJpbmdzQXJyYXkgdG8gZ3VhcmFudGVlIHRoYXQgdGhlIHZhbHVlIGNhbWUgZnJvbVxuICAvLyBzb3VyY2UgY29kZSwgcHJldmVudGluZyBhIEpTT04gaW5qZWN0aW9uIGF0dGFjay5cbiAgaDogVGVtcGxhdGVTdHJpbmdzQXJyYXk7XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgdGVtcGxhdGUgbGl0ZXJhbCB0YWcgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgVGVtcGxhdGVSZXN1bHQgd2l0aFxuICogdGhlIGdpdmVuIHJlc3VsdCB0eXBlLlxuICovXG5jb25zdCB0YWcgPVxuICA8VCBleHRlbmRzIFJlc3VsdFR5cGU+KHR5cGU6IFQpID0+XG4gIChzdHJpbmdzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgLi4udmFsdWVzOiB1bmtub3duW10pOiBUZW1wbGF0ZVJlc3VsdDxUPiA9PiB7XG4gICAgLy8gV2FybiBhZ2FpbnN0IHRlbXBsYXRlcyBvY3RhbCBlc2NhcGUgc2VxdWVuY2VzXG4gICAgLy8gV2UgZG8gdGhpcyBoZXJlIHJhdGhlciB0aGFuIGluIHJlbmRlciBzbyB0aGF0IHRoZSB3YXJuaW5nIGlzIGNsb3NlciB0byB0aGVcbiAgICAvLyB0ZW1wbGF0ZSBkZWZpbml0aW9uLlxuICAgIGlmIChERVZfTU9ERSAmJiBzdHJpbmdzLnNvbWUoKHMpID0+IHMgPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ1NvbWUgdGVtcGxhdGUgc3RyaW5ncyBhcmUgdW5kZWZpbmVkLlxcbicgK1xuICAgICAgICAgICdUaGlzIGlzIHByb2JhYmx5IGNhdXNlZCBieSBpbGxlZ2FsIG9jdGFsIGVzY2FwZSBzZXF1ZW5jZXMuJ1xuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKERFVl9NT0RFKSB7XG4gICAgICAvLyBJbXBvcnQgc3RhdGljLWh0bWwuanMgcmVzdWx0cyBpbiBhIGNpcmN1bGFyIGRlcGVuZGVuY3kgd2hpY2ggZzMgZG9lc24ndFxuICAgICAgLy8gaGFuZGxlLiBJbnN0ZWFkIHdlIGtub3cgdGhhdCBzdGF0aWMgdmFsdWVzIG11c3QgaGF2ZSB0aGUgZmllbGRcbiAgICAgIC8vIGBfJGxpdFN0YXRpYyRgLlxuICAgICAgaWYgKFxuICAgICAgICB2YWx1ZXMuc29tZSgodmFsKSA9PiAodmFsIGFzIHtfJGxpdFN0YXRpYyQ6IHVua25vd259KT8uWydfJGxpdFN0YXRpYyQnXSlcbiAgICAgICkge1xuICAgICAgICBpc3N1ZVdhcm5pbmcoXG4gICAgICAgICAgJycsXG4gICAgICAgICAgYFN0YXRpYyB2YWx1ZXMgJ2xpdGVyYWwnIG9yICd1bnNhZmVTdGF0aWMnIGNhbm5vdCBiZSB1c2VkIGFzIHZhbHVlcyB0byBub24tc3RhdGljIHRlbXBsYXRlcy5cXG5gICtcbiAgICAgICAgICAgIGBQbGVhc2UgdXNlIHRoZSBzdGF0aWMgJ2h0bWwnIHRhZyBmdW5jdGlvbi4gU2VlIGh0dHBzOi8vbGl0LmRldi9kb2NzL3RlbXBsYXRlcy9leHByZXNzaW9ucy8jc3RhdGljLWV4cHJlc3Npb25zYFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbiAgICAgIFsnXyRsaXRUeXBlJCddOiB0eXBlLFxuICAgICAgc3RyaW5ncyxcbiAgICAgIHZhbHVlcyxcbiAgICB9O1xuICB9O1xuXG4vKipcbiAqIEludGVycHJldHMgYSB0ZW1wbGF0ZSBsaXRlcmFsIGFzIGFuIEhUTUwgdGVtcGxhdGUgdGhhdCBjYW4gZWZmaWNpZW50bHlcbiAqIHJlbmRlciB0byBhbmQgdXBkYXRlIGEgY29udGFpbmVyLlxuICpcbiAqIGBgYHRzXG4gKiBjb25zdCBoZWFkZXIgPSAodGl0bGU6IHN0cmluZykgPT4gaHRtbGA8aDE+JHt0aXRsZX08L2gxPmA7XG4gKiBgYGBcbiAqXG4gKiBUaGUgYGh0bWxgIHRhZyByZXR1cm5zIGEgZGVzY3JpcHRpb24gb2YgdGhlIERPTSB0byByZW5kZXIgYXMgYSB2YWx1ZS4gSXQgaXNcbiAqIGxhenksIG1lYW5pbmcgbm8gd29yayBpcyBkb25lIHVudGlsIHRoZSB0ZW1wbGF0ZSBpcyByZW5kZXJlZC4gV2hlbiByZW5kZXJpbmcsXG4gKiBpZiBhIHRlbXBsYXRlIGNvbWVzIGZyb20gdGhlIHNhbWUgZXhwcmVzc2lvbiBhcyBhIHByZXZpb3VzbHkgcmVuZGVyZWQgcmVzdWx0LFxuICogaXQncyBlZmZpY2llbnRseSB1cGRhdGVkIGluc3RlYWQgb2YgcmVwbGFjZWQuXG4gKi9cbmV4cG9ydCBjb25zdCBodG1sID0gdGFnKEhUTUxfUkVTVUxUKTtcblxuLyoqXG4gKiBJbnRlcnByZXRzIGEgdGVtcGxhdGUgbGl0ZXJhbCBhcyBhbiBTVkcgZnJhZ21lbnQgdGhhdCBjYW4gZWZmaWNpZW50bHkgcmVuZGVyXG4gKiB0byBhbmQgdXBkYXRlIGEgY29udGFpbmVyLlxuICpcbiAqIGBgYHRzXG4gKiBjb25zdCByZWN0ID0gc3ZnYDxyZWN0IHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiPjwvcmVjdD5gO1xuICpcbiAqIGNvbnN0IG15SW1hZ2UgPSBodG1sYFxuICogICA8c3ZnIHZpZXdCb3g9XCIwIDAgMTAgMTBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gKiAgICAgJHtyZWN0fVxuICogICA8L3N2Zz5gO1xuICogYGBgXG4gKlxuICogVGhlIGBzdmdgICp0YWcgZnVuY3Rpb24qIHNob3VsZCBvbmx5IGJlIHVzZWQgZm9yIFNWRyBmcmFnbWVudHMsIG9yIGVsZW1lbnRzXG4gKiB0aGF0IHdvdWxkIGJlIGNvbnRhaW5lZCAqKmluc2lkZSoqIGFuIGA8c3ZnPmAgSFRNTCBlbGVtZW50LiBBIGNvbW1vbiBlcnJvciBpc1xuICogcGxhY2luZyBhbiBgPHN2Zz5gICplbGVtZW50KiBpbiBhIHRlbXBsYXRlIHRhZ2dlZCB3aXRoIHRoZSBgc3ZnYCB0YWdcbiAqIGZ1bmN0aW9uLiBUaGUgYDxzdmc+YCBlbGVtZW50IGlzIGFuIEhUTUwgZWxlbWVudCBhbmQgc2hvdWxkIGJlIHVzZWQgd2l0aGluIGFcbiAqIHRlbXBsYXRlIHRhZ2dlZCB3aXRoIHRoZSB7QGxpbmtjb2RlIGh0bWx9IHRhZyBmdW5jdGlvbi5cbiAqXG4gKiBJbiBMaXRFbGVtZW50IHVzYWdlLCBpdCdzIGludmFsaWQgdG8gcmV0dXJuIGFuIFNWRyBmcmFnbWVudCBmcm9tIHRoZVxuICogYHJlbmRlcigpYCBtZXRob2QsIGFzIHRoZSBTVkcgZnJhZ21lbnQgd2lsbCBiZSBjb250YWluZWQgd2l0aGluIHRoZSBlbGVtZW50J3NcbiAqIHNoYWRvdyByb290IGFuZCB0aHVzIG5vdCBiZSBwcm9wZXJseSBjb250YWluZWQgd2l0aGluIGFuIGA8c3ZnPmAgSFRNTFxuICogZWxlbWVudC5cbiAqL1xuZXhwb3J0IGNvbnN0IHN2ZyA9IHRhZyhTVkdfUkVTVUxUKTtcblxuLyoqXG4gKiBJbnRlcnByZXRzIGEgdGVtcGxhdGUgbGl0ZXJhbCBhcyBNYXRoTUwgZnJhZ21lbnQgdGhhdCBjYW4gZWZmaWNpZW50bHkgcmVuZGVyXG4gKiB0byBhbmQgdXBkYXRlIGEgY29udGFpbmVyLlxuICpcbiAqIGBgYHRzXG4gKiBjb25zdCBudW0gPSBtYXRobWxgPG1uPjE8L21uPmA7XG4gKlxuICogY29uc3QgZXEgPSBodG1sYFxuICogICA8bWF0aD5cbiAqICAgICAke251bX1cbiAqICAgPC9tYXRoPmA7XG4gKiBgYGBcbiAqXG4gKiBUaGUgYG1hdGhtbGAgKnRhZyBmdW5jdGlvbiogc2hvdWxkIG9ubHkgYmUgdXNlZCBmb3IgTWF0aE1MIGZyYWdtZW50cywgb3JcbiAqIGVsZW1lbnRzIHRoYXQgd291bGQgYmUgY29udGFpbmVkICoqaW5zaWRlKiogYSBgPG1hdGg+YCBIVE1MIGVsZW1lbnQuIEEgY29tbW9uXG4gKiBlcnJvciBpcyBwbGFjaW5nIGEgYDxtYXRoPmAgKmVsZW1lbnQqIGluIGEgdGVtcGxhdGUgdGFnZ2VkIHdpdGggdGhlIGBtYXRobWxgXG4gKiB0YWcgZnVuY3Rpb24uIFRoZSBgPG1hdGg+YCBlbGVtZW50IGlzIGFuIEhUTUwgZWxlbWVudCBhbmQgc2hvdWxkIGJlIHVzZWRcbiAqIHdpdGhpbiBhIHRlbXBsYXRlIHRhZ2dlZCB3aXRoIHRoZSB7QGxpbmtjb2RlIGh0bWx9IHRhZyBmdW5jdGlvbi5cbiAqXG4gKiBJbiBMaXRFbGVtZW50IHVzYWdlLCBpdCdzIGludmFsaWQgdG8gcmV0dXJuIGFuIE1hdGhNTCBmcmFnbWVudCBmcm9tIHRoZVxuICogYHJlbmRlcigpYCBtZXRob2QsIGFzIHRoZSBNYXRoTUwgZnJhZ21lbnQgd2lsbCBiZSBjb250YWluZWQgd2l0aGluIHRoZVxuICogZWxlbWVudCdzIHNoYWRvdyByb290IGFuZCB0aHVzIG5vdCBiZSBwcm9wZXJseSBjb250YWluZWQgd2l0aGluIGEgYDxtYXRoPmBcbiAqIEhUTUwgZWxlbWVudC5cbiAqL1xuZXhwb3J0IGNvbnN0IG1hdGhtbCA9IHRhZyhNQVRITUxfUkVTVUxUKTtcblxuLyoqXG4gKiBBIHNlbnRpbmVsIHZhbHVlIHRoYXQgc2lnbmFscyB0aGF0IGEgdmFsdWUgd2FzIGhhbmRsZWQgYnkgYSBkaXJlY3RpdmUgYW5kXG4gKiBzaG91bGQgbm90IGJlIHdyaXR0ZW4gdG8gdGhlIERPTS5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vQ2hhbmdlID0gU3ltYm9sLmZvcignbGl0LW5vQ2hhbmdlJyk7XG5cbi8qKlxuICogQSBzZW50aW5lbCB2YWx1ZSB0aGF0IHNpZ25hbHMgYSBDaGlsZFBhcnQgdG8gZnVsbHkgY2xlYXIgaXRzIGNvbnRlbnQuXG4gKlxuICogYGBgdHNcbiAqIGNvbnN0IGJ1dHRvbiA9IGh0bWxgJHtcbiAqICB1c2VyLmlzQWRtaW5cbiAqICAgID8gaHRtbGA8YnV0dG9uPkRFTEVURTwvYnV0dG9uPmBcbiAqICAgIDogbm90aGluZ1xuICogfWA7XG4gKiBgYGBcbiAqXG4gKiBQcmVmZXIgdXNpbmcgYG5vdGhpbmdgIG92ZXIgb3RoZXIgZmFsc3kgdmFsdWVzIGFzIGl0IHByb3ZpZGVzIGEgY29uc2lzdGVudFxuICogYmVoYXZpb3IgYmV0d2VlbiB2YXJpb3VzIGV4cHJlc3Npb24gYmluZGluZyBjb250ZXh0cy5cbiAqXG4gKiBJbiBjaGlsZCBleHByZXNzaW9ucywgYHVuZGVmaW5lZGAsIGBudWxsYCwgYCcnYCwgYW5kIGBub3RoaW5nYCBhbGwgYmVoYXZlIHRoZVxuICogc2FtZSBhbmQgcmVuZGVyIG5vIG5vZGVzLiBJbiBhdHRyaWJ1dGUgZXhwcmVzc2lvbnMsIGBub3RoaW5nYCBfcmVtb3Zlc18gdGhlXG4gKiBhdHRyaWJ1dGUsIHdoaWxlIGB1bmRlZmluZWRgIGFuZCBgbnVsbGAgd2lsbCByZW5kZXIgYW4gZW1wdHkgc3RyaW5nLiBJblxuICogcHJvcGVydHkgZXhwcmVzc2lvbnMgYG5vdGhpbmdgIGJlY29tZXMgYHVuZGVmaW5lZGAuXG4gKi9cbmV4cG9ydCBjb25zdCBub3RoaW5nID0gU3ltYm9sLmZvcignbGl0LW5vdGhpbmcnKTtcblxuLyoqXG4gKiBUaGUgY2FjaGUgb2YgcHJlcGFyZWQgdGVtcGxhdGVzLCBrZXllZCBieSB0aGUgdGFnZ2VkIFRlbXBsYXRlU3RyaW5nc0FycmF5XG4gKiBhbmQgX25vdF8gYWNjb3VudGluZyBmb3IgdGhlIHNwZWNpZmljIHRlbXBsYXRlIHRhZyB1c2VkLiBUaGlzIG1lYW5zIHRoYXRcbiAqIHRlbXBsYXRlIHRhZ3MgY2Fubm90IGJlIGR5bmFtaWMgLSB0aGV5IG11c3Qgc3RhdGljYWxseSBiZSBvbmUgb2YgaHRtbCwgc3ZnLFxuICogb3IgYXR0ci4gVGhpcyByZXN0cmljdGlvbiBzaW1wbGlmaWVzIHRoZSBjYWNoZSBsb29rdXAsIHdoaWNoIGlzIG9uIHRoZSBob3RcbiAqIHBhdGggZm9yIHJlbmRlcmluZy5cbiAqL1xuY29uc3QgdGVtcGxhdGVDYWNoZSA9IG5ldyBXZWFrTWFwPFRlbXBsYXRlU3RyaW5nc0FycmF5LCBUZW1wbGF0ZT4oKTtcblxuLyoqXG4gKiBPYmplY3Qgc3BlY2lmeWluZyBvcHRpb25zIGZvciBjb250cm9sbGluZyBsaXQtaHRtbCByZW5kZXJpbmcuIE5vdGUgdGhhdFxuICogd2hpbGUgYHJlbmRlcmAgbWF5IGJlIGNhbGxlZCBtdWx0aXBsZSB0aW1lcyBvbiB0aGUgc2FtZSBgY29udGFpbmVyYCAoYW5kXG4gKiBgcmVuZGVyQmVmb3JlYCByZWZlcmVuY2Ugbm9kZSkgdG8gZWZmaWNpZW50bHkgdXBkYXRlIHRoZSByZW5kZXJlZCBjb250ZW50LFxuICogb25seSB0aGUgb3B0aW9ucyBwYXNzZWQgaW4gZHVyaW5nIHRoZSBmaXJzdCByZW5kZXIgYXJlIHJlc3BlY3RlZCBkdXJpbmdcbiAqIHRoZSBsaWZldGltZSBvZiByZW5kZXJzIHRvIHRoYXQgdW5pcXVlIGBjb250YWluZXJgICsgYHJlbmRlckJlZm9yZWBcbiAqIGNvbWJpbmF0aW9uLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJlbmRlck9wdGlvbnMge1xuICAvKipcbiAgICogQW4gb2JqZWN0IHRvIHVzZSBhcyB0aGUgYHRoaXNgIHZhbHVlIGZvciBldmVudCBsaXN0ZW5lcnMuIEl0J3Mgb2Z0ZW5cbiAgICogdXNlZnVsIHRvIHNldCB0aGlzIHRvIHRoZSBob3N0IGNvbXBvbmVudCByZW5kZXJpbmcgYSB0ZW1wbGF0ZS5cbiAgICovXG4gIGhvc3Q/OiBvYmplY3Q7XG4gIC8qKlxuICAgKiBBIERPTSBub2RlIGJlZm9yZSB3aGljaCB0byByZW5kZXIgY29udGVudCBpbiB0aGUgY29udGFpbmVyLlxuICAgKi9cbiAgcmVuZGVyQmVmb3JlPzogQ2hpbGROb2RlIHwgbnVsbDtcbiAgLyoqXG4gICAqIE5vZGUgdXNlZCBmb3IgY2xvbmluZyB0aGUgdGVtcGxhdGUgKGBpbXBvcnROb2RlYCB3aWxsIGJlIGNhbGxlZCBvbiB0aGlzXG4gICAqIG5vZGUpLiBUaGlzIGNvbnRyb2xzIHRoZSBgb3duZXJEb2N1bWVudGAgb2YgdGhlIHJlbmRlcmVkIERPTSwgYWxvbmcgd2l0aFxuICAgKiBhbnkgaW5oZXJpdGVkIGNvbnRleHQuIERlZmF1bHRzIHRvIHRoZSBnbG9iYWwgYGRvY3VtZW50YC5cbiAgICovXG4gIGNyZWF0aW9uU2NvcGU/OiB7aW1wb3J0Tm9kZShub2RlOiBOb2RlLCBkZWVwPzogYm9vbGVhbik6IE5vZGV9O1xuICAvKipcbiAgICogVGhlIGluaXRpYWwgY29ubmVjdGVkIHN0YXRlIGZvciB0aGUgdG9wLWxldmVsIHBhcnQgYmVpbmcgcmVuZGVyZWQuIElmIG5vXG4gICAqIGBpc0Nvbm5lY3RlZGAgb3B0aW9uIGlzIHNldCwgYEFzeW5jRGlyZWN0aXZlYHMgd2lsbCBiZSBjb25uZWN0ZWQgYnlcbiAgICogZGVmYXVsdC4gU2V0IHRvIGBmYWxzZWAgaWYgdGhlIGluaXRpYWwgcmVuZGVyIG9jY3VycyBpbiBhIGRpc2Nvbm5lY3RlZCB0cmVlXG4gICAqIGFuZCBgQXN5bmNEaXJlY3RpdmVgcyBzaG91bGQgc2VlIGBpc0Nvbm5lY3RlZCA9PT0gZmFsc2VgIGZvciB0aGVpciBpbml0aWFsXG4gICAqIHJlbmRlci4gVGhlIGBwYXJ0LnNldENvbm5lY3RlZCgpYCBtZXRob2QgbXVzdCBiZSB1c2VkIHN1YnNlcXVlbnQgdG8gaW5pdGlhbFxuICAgKiByZW5kZXIgdG8gY2hhbmdlIHRoZSBjb25uZWN0ZWQgc3RhdGUgb2YgdGhlIHBhcnQuXG4gICAqL1xuICBpc0Nvbm5lY3RlZD86IGJvb2xlYW47XG59XG5cbi8qKlxuICogVGhlIHJvb3QgRE9NIG5vZGUgZm9yIHJlbmRlcmluZy5cbiAqL1xuZXhwb3J0IHR5cGUgUmVuZGVyUm9vdE5vZGUgPSBIVE1MRWxlbWVudCB8IFNWR0VsZW1lbnQgfCBEb2N1bWVudEZyYWdtZW50O1xuXG5jb25zdCB3YWxrZXIgPSBkLmNyZWF0ZVRyZWVXYWxrZXIoXG4gIGQsXG4gIDEyOSAvKiBOb2RlRmlsdGVyLlNIT1dfe0VMRU1FTlR8Q09NTUVOVH0gKi9cbik7XG5cbmxldCBzYW5pdGl6ZXJGYWN0b3J5SW50ZXJuYWw6IFNhbml0aXplckZhY3RvcnkgPSBub29wU2FuaXRpemVyO1xuXG4vL1xuLy8gQ2xhc3NlcyBvbmx5IGJlbG93IGhlcmUsIGNvbnN0IHZhcmlhYmxlIGRlY2xhcmF0aW9ucyBvbmx5IGFib3ZlIGhlcmUuLi5cbi8vXG4vLyBLZWVwaW5nIHZhcmlhYmxlIGRlY2xhcmF0aW9ucyBhbmQgY2xhc3NlcyB0b2dldGhlciBpbXByb3ZlcyBtaW5pZmljYXRpb24uXG4vLyBJbnRlcmZhY2VzIGFuZCB0eXBlIGFsaWFzZXMgY2FuIGJlIGludGVybGVhdmVkIGZyZWVseS5cbi8vXG5cbi8vIFR5cGUgZm9yIGNsYXNzZXMgdGhhdCBoYXZlIGEgYF9kaXJlY3RpdmVgIG9yIGBfZGlyZWN0aXZlc1tdYCBmaWVsZCwgdXNlZCBieVxuLy8gYHJlc29sdmVEaXJlY3RpdmVgXG5leHBvcnQgaW50ZXJmYWNlIERpcmVjdGl2ZVBhcmVudCB7XG4gIF8kcGFyZW50PzogRGlyZWN0aXZlUGFyZW50O1xuICBfJGlzQ29ubmVjdGVkOiBib29sZWFuO1xuICBfX2RpcmVjdGl2ZT86IERpcmVjdGl2ZTtcbiAgX19kaXJlY3RpdmVzPzogQXJyYXk8RGlyZWN0aXZlIHwgdW5kZWZpbmVkPjtcbn1cblxuZnVuY3Rpb24gdHJ1c3RGcm9tVGVtcGxhdGVTdHJpbmcoXG4gIHRzYTogVGVtcGxhdGVTdHJpbmdzQXJyYXksXG4gIHN0cmluZ0Zyb21UU0E6IHN0cmluZ1xuKTogVHJ1c3RlZEhUTUwge1xuICAvLyBBIHNlY3VyaXR5IGNoZWNrIHRvIHByZXZlbnQgc3Bvb2Zpbmcgb2YgTGl0IHRlbXBsYXRlIHJlc3VsdHMuXG4gIC8vIEluIHRoZSBmdXR1cmUsIHdlIG1heSBiZSBhYmxlIHRvIHJlcGxhY2UgdGhpcyB3aXRoIEFycmF5LmlzVGVtcGxhdGVPYmplY3QsXG4gIC8vIHRob3VnaCB3ZSBtaWdodCBuZWVkIHRvIG1ha2UgdGhhdCBjaGVjayBpbnNpZGUgb2YgdGhlIGh0bWwgYW5kIHN2Z1xuICAvLyBmdW5jdGlvbnMsIGJlY2F1c2UgcHJlY29tcGlsZWQgdGVtcGxhdGVzIGRvbid0IGNvbWUgaW4gYXNcbiAgLy8gVGVtcGxhdGVTdHJpbmdBcnJheSBvYmplY3RzLlxuICBpZiAoIWlzQXJyYXkodHNhKSB8fCAhdHNhLmhhc093blByb3BlcnR5KCdyYXcnKSkge1xuICAgIGxldCBtZXNzYWdlID0gJ2ludmFsaWQgdGVtcGxhdGUgc3RyaW5ncyBhcnJheSc7XG4gICAgaWYgKERFVl9NT0RFKSB7XG4gICAgICBtZXNzYWdlID0gYFxuICAgICAgICAgIEludGVybmFsIEVycm9yOiBleHBlY3RlZCB0ZW1wbGF0ZSBzdHJpbmdzIHRvIGJlIGFuIGFycmF5XG4gICAgICAgICAgd2l0aCBhICdyYXcnIGZpZWxkLiBGYWtpbmcgYSB0ZW1wbGF0ZSBzdHJpbmdzIGFycmF5IGJ5XG4gICAgICAgICAgY2FsbGluZyBodG1sIG9yIHN2ZyBsaWtlIGFuIG9yZGluYXJ5IGZ1bmN0aW9uIGlzIGVmZmVjdGl2ZWx5XG4gICAgICAgICAgdGhlIHNhbWUgYXMgY2FsbGluZyB1bnNhZmVIdG1sIGFuZCBjYW4gbGVhZCB0byBtYWpvciBzZWN1cml0eVxuICAgICAgICAgIGlzc3VlcywgZS5nLiBvcGVuaW5nIHlvdXIgY29kZSB1cCB0byBYU1MgYXR0YWNrcy5cbiAgICAgICAgICBJZiB5b3UncmUgdXNpbmcgdGhlIGh0bWwgb3Igc3ZnIHRhZ2dlZCB0ZW1wbGF0ZSBmdW5jdGlvbnMgbm9ybWFsbHlcbiAgICAgICAgICBhbmQgc3RpbGwgc2VlaW5nIHRoaXMgZXJyb3IsIHBsZWFzZSBmaWxlIGEgYnVnIGF0XG4gICAgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2xpdC9saXQvaXNzdWVzL25ldz90ZW1wbGF0ZT1idWdfcmVwb3J0Lm1kXG4gICAgICAgICAgYW5kIGluY2x1ZGUgaW5mb3JtYXRpb24gYWJvdXQgeW91ciBidWlsZCB0b29saW5nLCBpZiBhbnkuXG4gICAgICAgIGBcbiAgICAgICAgLnRyaW0oKVxuICAgICAgICAucmVwbGFjZSgvXFxuICovZywgJ1xcbicpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIH1cbiAgcmV0dXJuIHBvbGljeSAhPT0gdW5kZWZpbmVkXG4gICAgPyBwb2xpY3kuY3JlYXRlSFRNTChzdHJpbmdGcm9tVFNBKVxuICAgIDogKHN0cmluZ0Zyb21UU0EgYXMgdW5rbm93biBhcyBUcnVzdGVkSFRNTCk7XG59XG5cbi8qKlxuICogUmV0dXJucyBhbiBIVE1MIHN0cmluZyBmb3IgdGhlIGdpdmVuIFRlbXBsYXRlU3RyaW5nc0FycmF5IGFuZCByZXN1bHQgdHlwZVxuICogKEhUTUwgb3IgU1ZHKSwgYWxvbmcgd2l0aCB0aGUgY2FzZS1zZW5zaXRpdmUgYm91bmQgYXR0cmlidXRlIG5hbWVzIGluXG4gKiB0ZW1wbGF0ZSBvcmRlci4gVGhlIEhUTUwgY29udGFpbnMgY29tbWVudCBtYXJrZXJzIGRlbm90aW5nIHRoZSBgQ2hpbGRQYXJ0YHNcbiAqIGFuZCBzdWZmaXhlcyBvbiBib3VuZCBhdHRyaWJ1dGVzIGRlbm90aW5nIHRoZSBgQXR0cmlidXRlUGFydHNgLlxuICpcbiAqIEBwYXJhbSBzdHJpbmdzIHRlbXBsYXRlIHN0cmluZ3MgYXJyYXlcbiAqIEBwYXJhbSB0eXBlIEhUTUwgb3IgU1ZHXG4gKiBAcmV0dXJuIEFycmF5IGNvbnRhaW5pbmcgYFtodG1sLCBhdHRyTmFtZXNdYCAoYXJyYXkgcmV0dXJuZWQgZm9yIHRlcnNlbmVzcyxcbiAqICAgICB0byBhdm9pZCBvYmplY3QgZmllbGRzIHNpbmNlIHRoaXMgY29kZSBpcyBzaGFyZWQgd2l0aCBub24tbWluaWZpZWQgU1NSXG4gKiAgICAgY29kZSlcbiAqL1xuY29uc3QgZ2V0VGVtcGxhdGVIdG1sID0gKFxuICBzdHJpbmdzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSxcbiAgdHlwZTogUmVzdWx0VHlwZVxuKTogW1RydXN0ZWRIVE1MLCBBcnJheTxzdHJpbmc+XSA9PiB7XG4gIC8vIEluc2VydCBtYWtlcnMgaW50byB0aGUgdGVtcGxhdGUgSFRNTCB0byByZXByZXNlbnQgdGhlIHBvc2l0aW9uIG9mXG4gIC8vIGJpbmRpbmdzLiBUaGUgZm9sbG93aW5nIGNvZGUgc2NhbnMgdGhlIHRlbXBsYXRlIHN0cmluZ3MgdG8gZGV0ZXJtaW5lIHRoZVxuICAvLyBzeW50YWN0aWMgcG9zaXRpb24gb2YgdGhlIGJpbmRpbmdzLiBUaGV5IGNhbiBiZSBpbiB0ZXh0IHBvc2l0aW9uLCB3aGVyZVxuICAvLyB3ZSBpbnNlcnQgYW4gSFRNTCBjb21tZW50LCBhdHRyaWJ1dGUgdmFsdWUgcG9zaXRpb24sIHdoZXJlIHdlIGluc2VydCBhXG4gIC8vIHNlbnRpbmVsIHN0cmluZyBhbmQgcmUtd3JpdGUgdGhlIGF0dHJpYnV0ZSBuYW1lLCBvciBpbnNpZGUgYSB0YWcgd2hlcmVcbiAgLy8gd2UgaW5zZXJ0IHRoZSBzZW50aW5lbCBzdHJpbmcuXG4gIGNvbnN0IGwgPSBzdHJpbmdzLmxlbmd0aCAtIDE7XG4gIC8vIFN0b3JlcyB0aGUgY2FzZS1zZW5zaXRpdmUgYm91bmQgYXR0cmlidXRlIG5hbWVzIGluIHRoZSBvcmRlciBvZiB0aGVpclxuICAvLyBwYXJ0cy4gRWxlbWVudFBhcnRzIGFyZSBhbHNvIHJlZmxlY3RlZCBpbiB0aGlzIGFycmF5IGFzIHVuZGVmaW5lZFxuICAvLyByYXRoZXIgdGhhbiBhIHN0cmluZywgdG8gZGlzYW1iaWd1YXRlIGZyb20gYXR0cmlidXRlIGJpbmRpbmdzLlxuICBjb25zdCBhdHRyTmFtZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgbGV0IGh0bWwgPVxuICAgIHR5cGUgPT09IFNWR19SRVNVTFQgPyAnPHN2Zz4nIDogdHlwZSA9PT0gTUFUSE1MX1JFU1VMVCA/ICc8bWF0aD4nIDogJyc7XG5cbiAgLy8gV2hlbiB3ZSdyZSBpbnNpZGUgYSByYXcgdGV4dCB0YWcgKG5vdCBpdCdzIHRleHQgY29udGVudCksIHRoZSByZWdleFxuICAvLyB3aWxsIHN0aWxsIGJlIHRhZ1JlZ2V4IHNvIHdlIGNhbiBmaW5kIGF0dHJpYnV0ZXMsIGJ1dCB3aWxsIHN3aXRjaCB0b1xuICAvLyB0aGlzIHJlZ2V4IHdoZW4gdGhlIHRhZyBlbmRzLlxuICBsZXQgcmF3VGV4dEVuZFJlZ2V4OiBSZWdFeHAgfCB1bmRlZmluZWQ7XG5cbiAgLy8gVGhlIGN1cnJlbnQgcGFyc2luZyBzdGF0ZSwgcmVwcmVzZW50ZWQgYXMgYSByZWZlcmVuY2UgdG8gb25lIG9mIHRoZVxuICAvLyByZWdleGVzXG4gIGxldCByZWdleCA9IHRleHRFbmRSZWdleDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgIGNvbnN0IHMgPSBzdHJpbmdzW2ldO1xuICAgIC8vIFRoZSBpbmRleCBvZiB0aGUgZW5kIG9mIHRoZSBsYXN0IGF0dHJpYnV0ZSBuYW1lLiBXaGVuIHRoaXMgaXNcbiAgICAvLyBwb3NpdGl2ZSBhdCBlbmQgb2YgYSBzdHJpbmcsIGl0IG1lYW5zIHdlJ3JlIGluIGFuIGF0dHJpYnV0ZSB2YWx1ZVxuICAgIC8vIHBvc2l0aW9uIGFuZCBuZWVkIHRvIHJld3JpdGUgdGhlIGF0dHJpYnV0ZSBuYW1lLlxuICAgIC8vIFdlIGFsc28gdXNlIGEgc3BlY2lhbCB2YWx1ZSBvZiAtMiB0byBpbmRpY2F0ZSB0aGF0IHdlIGVuY291bnRlcmVkXG4gICAgLy8gdGhlIGVuZCBvZiBhIHN0cmluZyBpbiBhdHRyaWJ1dGUgbmFtZSBwb3NpdGlvbi5cbiAgICBsZXQgYXR0ck5hbWVFbmRJbmRleCA9IC0xO1xuICAgIGxldCBhdHRyTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIGxldCBsYXN0SW5kZXggPSAwO1xuICAgIGxldCBtYXRjaCE6IFJlZ0V4cEV4ZWNBcnJheSB8IG51bGw7XG5cbiAgICAvLyBUaGUgY29uZGl0aW9ucyBpbiB0aGlzIGxvb3AgaGFuZGxlIHRoZSBjdXJyZW50IHBhcnNlIHN0YXRlLCBhbmQgdGhlXG4gICAgLy8gYXNzaWdubWVudHMgdG8gdGhlIGByZWdleGAgdmFyaWFibGUgYXJlIHRoZSBzdGF0ZSB0cmFuc2l0aW9ucy5cbiAgICB3aGlsZSAobGFzdEluZGV4IDwgcy5sZW5ndGgpIHtcbiAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBzdGFydCBzZWFyY2hpbmcgZnJvbSB3aGVyZSB3ZSBwcmV2aW91c2x5IGxlZnQgb2ZmXG4gICAgICByZWdleC5sYXN0SW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICBtYXRjaCA9IHJlZ2V4LmV4ZWMocyk7XG4gICAgICBpZiAobWF0Y2ggPT09IG51bGwpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBsYXN0SW5kZXggPSByZWdleC5sYXN0SW5kZXg7XG4gICAgICBpZiAocmVnZXggPT09IHRleHRFbmRSZWdleCkge1xuICAgICAgICBpZiAobWF0Y2hbQ09NTUVOVF9TVEFSVF0gPT09ICchLS0nKSB7XG4gICAgICAgICAgcmVnZXggPSBjb21tZW50RW5kUmVnZXg7XG4gICAgICAgIH0gZWxzZSBpZiAobWF0Y2hbQ09NTUVOVF9TVEFSVF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIFdlIHN0YXJ0ZWQgYSB3ZWlyZCBjb21tZW50LCBsaWtlIDwve1xuICAgICAgICAgIHJlZ2V4ID0gY29tbWVudDJFbmRSZWdleDtcbiAgICAgICAgfSBlbHNlIGlmIChtYXRjaFtUQUdfTkFNRV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmIChyYXdUZXh0RWxlbWVudC50ZXN0KG1hdGNoW1RBR19OQU1FXSkpIHtcbiAgICAgICAgICAgIC8vIFJlY29yZCBpZiB3ZSBlbmNvdW50ZXIgYSByYXctdGV4dCBlbGVtZW50LiBXZSdsbCBzd2l0Y2ggdG9cbiAgICAgICAgICAgIC8vIHRoaXMgcmVnZXggYXQgdGhlIGVuZCBvZiB0aGUgdGFnLlxuICAgICAgICAgICAgcmF3VGV4dEVuZFJlZ2V4ID0gbmV3IFJlZ0V4cChgPC8ke21hdGNoW1RBR19OQU1FXX1gLCAnZycpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZWdleCA9IHRhZ0VuZFJlZ2V4O1xuICAgICAgICB9IGVsc2UgaWYgKG1hdGNoW0RZTkFNSUNfVEFHX05BTUVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoREVWX01PREUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgJ0JpbmRpbmdzIGluIHRhZyBuYW1lcyBhcmUgbm90IHN1cHBvcnRlZC4gUGxlYXNlIHVzZSBzdGF0aWMgdGVtcGxhdGVzIGluc3RlYWQuICcgK1xuICAgICAgICAgICAgICAgICdTZWUgaHR0cHM6Ly9saXQuZGV2L2RvY3MvdGVtcGxhdGVzL2V4cHJlc3Npb25zLyNzdGF0aWMtZXhwcmVzc2lvbnMnXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZWdleCA9IHRhZ0VuZFJlZ2V4O1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHJlZ2V4ID09PSB0YWdFbmRSZWdleCkge1xuICAgICAgICBpZiAobWF0Y2hbRU5USVJFX01BVENIXSA9PT0gJz4nKSB7XG4gICAgICAgICAgLy8gRW5kIG9mIGEgdGFnLiBJZiB3ZSBoYWQgc3RhcnRlZCBhIHJhdy10ZXh0IGVsZW1lbnQsIHVzZSB0aGF0XG4gICAgICAgICAgLy8gcmVnZXhcbiAgICAgICAgICByZWdleCA9IHJhd1RleHRFbmRSZWdleCA/PyB0ZXh0RW5kUmVnZXg7XG4gICAgICAgICAgLy8gV2UgbWF5IGJlIGVuZGluZyBhbiB1bnF1b3RlZCBhdHRyaWJ1dGUgdmFsdWUsIHNvIG1ha2Ugc3VyZSB3ZVxuICAgICAgICAgIC8vIGNsZWFyIGFueSBwZW5kaW5nIGF0dHJOYW1lRW5kSW5kZXhcbiAgICAgICAgICBhdHRyTmFtZUVuZEluZGV4ID0gLTE7XG4gICAgICAgIH0gZWxzZSBpZiAobWF0Y2hbQVRUUklCVVRFX05BTUVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBBdHRyaWJ1dGUgbmFtZSBwb3NpdGlvblxuICAgICAgICAgIGF0dHJOYW1lRW5kSW5kZXggPSAtMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhdHRyTmFtZUVuZEluZGV4ID0gcmVnZXgubGFzdEluZGV4IC0gbWF0Y2hbU1BBQ0VTX0FORF9FUVVBTFNdLmxlbmd0aDtcbiAgICAgICAgICBhdHRyTmFtZSA9IG1hdGNoW0FUVFJJQlVURV9OQU1FXTtcbiAgICAgICAgICByZWdleCA9XG4gICAgICAgICAgICBtYXRjaFtRVU9URV9DSEFSXSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgID8gdGFnRW5kUmVnZXhcbiAgICAgICAgICAgICAgOiBtYXRjaFtRVU9URV9DSEFSXSA9PT0gJ1wiJ1xuICAgICAgICAgICAgICAgID8gZG91YmxlUXVvdGVBdHRyRW5kUmVnZXhcbiAgICAgICAgICAgICAgICA6IHNpbmdsZVF1b3RlQXR0ckVuZFJlZ2V4O1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICByZWdleCA9PT0gZG91YmxlUXVvdGVBdHRyRW5kUmVnZXggfHxcbiAgICAgICAgcmVnZXggPT09IHNpbmdsZVF1b3RlQXR0ckVuZFJlZ2V4XG4gICAgICApIHtcbiAgICAgICAgcmVnZXggPSB0YWdFbmRSZWdleDtcbiAgICAgIH0gZWxzZSBpZiAocmVnZXggPT09IGNvbW1lbnRFbmRSZWdleCB8fCByZWdleCA9PT0gY29tbWVudDJFbmRSZWdleCkge1xuICAgICAgICByZWdleCA9IHRleHRFbmRSZWdleDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE5vdCBvbmUgb2YgdGhlIGZpdmUgc3RhdGUgcmVnZXhlcywgc28gaXQgbXVzdCBiZSB0aGUgZHluYW1pY2FsbHlcbiAgICAgICAgLy8gY3JlYXRlZCByYXcgdGV4dCByZWdleCBhbmQgd2UncmUgYXQgdGhlIGNsb3NlIG9mIHRoYXQgZWxlbWVudC5cbiAgICAgICAgcmVnZXggPSB0YWdFbmRSZWdleDtcbiAgICAgICAgcmF3VGV4dEVuZFJlZ2V4ID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChERVZfTU9ERSkge1xuICAgICAgLy8gSWYgd2UgaGF2ZSBhIGF0dHJOYW1lRW5kSW5kZXgsIHdoaWNoIGluZGljYXRlcyB0aGF0IHdlIHNob3VsZFxuICAgICAgLy8gcmV3cml0ZSB0aGUgYXR0cmlidXRlIG5hbWUsIGFzc2VydCB0aGF0IHdlJ3JlIGluIGEgdmFsaWQgYXR0cmlidXRlXG4gICAgICAvLyBwb3NpdGlvbiAtIGVpdGhlciBpbiBhIHRhZywgb3IgYSBxdW90ZWQgYXR0cmlidXRlIHZhbHVlLlxuICAgICAgY29uc29sZS5hc3NlcnQoXG4gICAgICAgIGF0dHJOYW1lRW5kSW5kZXggPT09IC0xIHx8XG4gICAgICAgICAgcmVnZXggPT09IHRhZ0VuZFJlZ2V4IHx8XG4gICAgICAgICAgcmVnZXggPT09IHNpbmdsZVF1b3RlQXR0ckVuZFJlZ2V4IHx8XG4gICAgICAgICAgcmVnZXggPT09IGRvdWJsZVF1b3RlQXR0ckVuZFJlZ2V4LFxuICAgICAgICAndW5leHBlY3RlZCBwYXJzZSBzdGF0ZSBCJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBXZSBoYXZlIGZvdXIgY2FzZXM6XG4gICAgLy8gIDEuIFdlJ3JlIGluIHRleHQgcG9zaXRpb24sIGFuZCBub3QgaW4gYSByYXcgdGV4dCBlbGVtZW50XG4gICAgLy8gICAgIChyZWdleCA9PT0gdGV4dEVuZFJlZ2V4KTogaW5zZXJ0IGEgY29tbWVudCBtYXJrZXIuXG4gICAgLy8gIDIuIFdlIGhhdmUgYSBub24tbmVnYXRpdmUgYXR0ck5hbWVFbmRJbmRleCB3aGljaCBtZWFucyB3ZSBuZWVkIHRvXG4gICAgLy8gICAgIHJld3JpdGUgdGhlIGF0dHJpYnV0ZSBuYW1lIHRvIGFkZCBhIGJvdW5kIGF0dHJpYnV0ZSBzdWZmaXguXG4gICAgLy8gIDMuIFdlJ3JlIGF0IHRoZSBub24tZmlyc3QgYmluZGluZyBpbiBhIG11bHRpLWJpbmRpbmcgYXR0cmlidXRlLCB1c2UgYVxuICAgIC8vICAgICBwbGFpbiBtYXJrZXIuXG4gICAgLy8gIDQuIFdlJ3JlIHNvbWV3aGVyZSBlbHNlIGluc2lkZSB0aGUgdGFnLiBJZiB3ZSdyZSBpbiBhdHRyaWJ1dGUgbmFtZVxuICAgIC8vICAgICBwb3NpdGlvbiAoYXR0ck5hbWVFbmRJbmRleCA9PT0gLTIpLCBhZGQgYSBzZXF1ZW50aWFsIHN1ZmZpeCB0b1xuICAgIC8vICAgICBnZW5lcmF0ZSBhIHVuaXF1ZSBhdHRyaWJ1dGUgbmFtZS5cblxuICAgIC8vIERldGVjdCBhIGJpbmRpbmcgbmV4dCB0byBzZWxmLWNsb3NpbmcgdGFnIGVuZCBhbmQgaW5zZXJ0IGEgc3BhY2UgdG9cbiAgICAvLyBzZXBhcmF0ZSB0aGUgbWFya2VyIGZyb20gdGhlIHRhZyBlbmQ6XG4gICAgY29uc3QgZW5kID1cbiAgICAgIHJlZ2V4ID09PSB0YWdFbmRSZWdleCAmJiBzdHJpbmdzW2kgKyAxXS5zdGFydHNXaXRoKCcvPicpID8gJyAnIDogJyc7XG4gICAgaHRtbCArPVxuICAgICAgcmVnZXggPT09IHRleHRFbmRSZWdleFxuICAgICAgICA/IHMgKyBub2RlTWFya2VyXG4gICAgICAgIDogYXR0ck5hbWVFbmRJbmRleCA+PSAwXG4gICAgICAgICAgPyAoYXR0ck5hbWVzLnB1c2goYXR0ck5hbWUhKSxcbiAgICAgICAgICAgIHMuc2xpY2UoMCwgYXR0ck5hbWVFbmRJbmRleCkgK1xuICAgICAgICAgICAgICBib3VuZEF0dHJpYnV0ZVN1ZmZpeCArXG4gICAgICAgICAgICAgIHMuc2xpY2UoYXR0ck5hbWVFbmRJbmRleCkpICtcbiAgICAgICAgICAgIG1hcmtlciArXG4gICAgICAgICAgICBlbmRcbiAgICAgICAgICA6IHMgKyBtYXJrZXIgKyAoYXR0ck5hbWVFbmRJbmRleCA9PT0gLTIgPyBpIDogZW5kKTtcbiAgfVxuXG4gIGNvbnN0IGh0bWxSZXN1bHQ6IHN0cmluZyB8IFRydXN0ZWRIVE1MID1cbiAgICBodG1sICtcbiAgICAoc3RyaW5nc1tsXSB8fCAnPD8+JykgK1xuICAgICh0eXBlID09PSBTVkdfUkVTVUxUID8gJzwvc3ZnPicgOiB0eXBlID09PSBNQVRITUxfUkVTVUxUID8gJzwvbWF0aD4nIDogJycpO1xuXG4gIC8vIFJldHVybmVkIGFzIGFuIGFycmF5IGZvciB0ZXJzZW5lc3NcbiAgcmV0dXJuIFt0cnVzdEZyb21UZW1wbGF0ZVN0cmluZyhzdHJpbmdzLCBodG1sUmVzdWx0KSwgYXR0ck5hbWVzXTtcbn07XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCB0eXBlIHtUZW1wbGF0ZX07XG5jbGFzcyBUZW1wbGF0ZSB7XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgZWwhOiBIVE1MVGVtcGxhdGVFbGVtZW50O1xuXG4gIHBhcnRzOiBBcnJheTxUZW1wbGF0ZVBhcnQ+ID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbiAgICB7c3RyaW5ncywgWydfJGxpdFR5cGUkJ106IHR5cGV9OiBVbmNvbXBpbGVkVGVtcGxhdGVSZXN1bHQsXG4gICAgb3B0aW9ucz86IFJlbmRlck9wdGlvbnNcbiAgKSB7XG4gICAgbGV0IG5vZGU6IE5vZGUgfCBudWxsO1xuICAgIGxldCBub2RlSW5kZXggPSAwO1xuICAgIGxldCBhdHRyTmFtZUluZGV4ID0gMDtcbiAgICBjb25zdCBwYXJ0Q291bnQgPSBzdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgcGFydHMgPSB0aGlzLnBhcnRzO1xuXG4gICAgLy8gQ3JlYXRlIHRlbXBsYXRlIGVsZW1lbnRcbiAgICBjb25zdCBbaHRtbCwgYXR0ck5hbWVzXSA9IGdldFRlbXBsYXRlSHRtbChzdHJpbmdzLCB0eXBlKTtcbiAgICB0aGlzLmVsID0gVGVtcGxhdGUuY3JlYXRlRWxlbWVudChodG1sLCBvcHRpb25zKTtcbiAgICB3YWxrZXIuY3VycmVudE5vZGUgPSB0aGlzLmVsLmNvbnRlbnQ7XG5cbiAgICAvLyBSZS1wYXJlbnQgU1ZHIG9yIE1hdGhNTCBub2RlcyBpbnRvIHRlbXBsYXRlIHJvb3RcbiAgICBpZiAodHlwZSA9PT0gU1ZHX1JFU1VMVCB8fCB0eXBlID09PSBNQVRITUxfUkVTVUxUKSB7XG4gICAgICBjb25zdCB3cmFwcGVyID0gdGhpcy5lbC5jb250ZW50LmZpcnN0Q2hpbGQhO1xuICAgICAgd3JhcHBlci5yZXBsYWNlV2l0aCguLi53cmFwcGVyLmNoaWxkTm9kZXMpO1xuICAgIH1cblxuICAgIC8vIFdhbGsgdGhlIHRlbXBsYXRlIHRvIGZpbmQgYmluZGluZyBtYXJrZXJzIGFuZCBjcmVhdGUgVGVtcGxhdGVQYXJ0c1xuICAgIHdoaWxlICgobm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpKSAhPT0gbnVsbCAmJiBwYXJ0cy5sZW5ndGggPCBwYXJ0Q291bnQpIHtcbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgIGlmIChERVZfTU9ERSkge1xuICAgICAgICAgIGNvbnN0IHRhZyA9IChub2RlIGFzIEVsZW1lbnQpLmxvY2FsTmFtZTtcbiAgICAgICAgICAvLyBXYXJuIGlmIGB0ZXh0YXJlYWAgaW5jbHVkZXMgYW4gZXhwcmVzc2lvbiBhbmQgdGhyb3cgaWYgYHRlbXBsYXRlYFxuICAgICAgICAgIC8vIGRvZXMgc2luY2UgdGhlc2UgYXJlIG5vdCBzdXBwb3J0ZWQuIFdlIGRvIHRoaXMgYnkgY2hlY2tpbmdcbiAgICAgICAgICAvLyBpbm5lckhUTUwgZm9yIGFueXRoaW5nIHRoYXQgbG9va3MgbGlrZSBhIG1hcmtlci4gVGhpcyBjYXRjaGVzXG4gICAgICAgICAgLy8gY2FzZXMgbGlrZSBiaW5kaW5ncyBpbiB0ZXh0YXJlYSB0aGVyZSBtYXJrZXJzIHR1cm4gaW50byB0ZXh0IG5vZGVzLlxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIC9eKD86dGV4dGFyZWF8dGVtcGxhdGUpJC9pIS50ZXN0KHRhZykgJiZcbiAgICAgICAgICAgIChub2RlIGFzIEVsZW1lbnQpLmlubmVySFRNTC5pbmNsdWRlcyhtYXJrZXIpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zdCBtID1cbiAgICAgICAgICAgICAgYEV4cHJlc3Npb25zIGFyZSBub3Qgc3VwcG9ydGVkIGluc2lkZSBcXGAke3RhZ31cXGAgYCArXG4gICAgICAgICAgICAgIGBlbGVtZW50cy4gU2VlIGh0dHBzOi8vbGl0LmRldi9tc2cvZXhwcmVzc2lvbi1pbi0ke3RhZ30gZm9yIG1vcmUgYCArXG4gICAgICAgICAgICAgIGBpbmZvcm1hdGlvbi5gO1xuICAgICAgICAgICAgaWYgKHRhZyA9PT0gJ3RlbXBsYXRlJykge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobSk7XG4gICAgICAgICAgICB9IGVsc2UgaXNzdWVXYXJuaW5nKCcnLCBtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gVE9ETyAoanVzdGluZmFnbmFuaSk6IGZvciBhdHRlbXB0ZWQgZHluYW1pYyB0YWcgbmFtZXMsIHdlIGRvbid0XG4gICAgICAgIC8vIGluY3JlbWVudCB0aGUgYmluZGluZ0luZGV4LCBhbmQgaXQnbGwgYmUgb2ZmIGJ5IDEgaW4gdGhlIGVsZW1lbnRcbiAgICAgICAgLy8gYW5kIG9mZiBieSB0d28gYWZ0ZXIgaXQuXG4gICAgICAgIGlmICgobm9kZSBhcyBFbGVtZW50KS5oYXNBdHRyaWJ1dGVzKCkpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgKG5vZGUgYXMgRWxlbWVudCkuZ2V0QXR0cmlidXRlTmFtZXMoKSkge1xuICAgICAgICAgICAgaWYgKG5hbWUuZW5kc1dpdGgoYm91bmRBdHRyaWJ1dGVTdWZmaXgpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHJlYWxOYW1lID0gYXR0ck5hbWVzW2F0dHJOYW1lSW5kZXgrK107XG4gICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gKG5vZGUgYXMgRWxlbWVudCkuZ2V0QXR0cmlidXRlKG5hbWUpITtcbiAgICAgICAgICAgICAgY29uc3Qgc3RhdGljcyA9IHZhbHVlLnNwbGl0KG1hcmtlcik7XG4gICAgICAgICAgICAgIGNvbnN0IG0gPSAvKFsuP0BdKT8oLiopLy5leGVjKHJlYWxOYW1lKSE7XG4gICAgICAgICAgICAgIHBhcnRzLnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IEFUVFJJQlVURV9QQVJULFxuICAgICAgICAgICAgICAgIGluZGV4OiBub2RlSW5kZXgsXG4gICAgICAgICAgICAgICAgbmFtZTogbVsyXSxcbiAgICAgICAgICAgICAgICBzdHJpbmdzOiBzdGF0aWNzLFxuICAgICAgICAgICAgICAgIGN0b3I6XG4gICAgICAgICAgICAgICAgICBtWzFdID09PSAnLidcbiAgICAgICAgICAgICAgICAgICAgPyBQcm9wZXJ0eVBhcnRcbiAgICAgICAgICAgICAgICAgICAgOiBtWzFdID09PSAnPydcbiAgICAgICAgICAgICAgICAgICAgICA/IEJvb2xlYW5BdHRyaWJ1dGVQYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgOiBtWzFdID09PSAnQCdcbiAgICAgICAgICAgICAgICAgICAgICAgID8gRXZlbnRQYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICA6IEF0dHJpYnV0ZVBhcnQsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAobm9kZSBhcyBFbGVtZW50KS5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5hbWUuc3RhcnRzV2l0aChtYXJrZXIpKSB7XG4gICAgICAgICAgICAgIHBhcnRzLnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IEVMRU1FTlRfUEFSVCxcbiAgICAgICAgICAgICAgICBpbmRleDogbm9kZUluZGV4LFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgKG5vZGUgYXMgRWxlbWVudCkucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBUT0RPIChqdXN0aW5mYWduYW5pKTogYmVuY2htYXJrIHRoZSByZWdleCBhZ2FpbnN0IHRlc3RpbmcgZm9yIGVhY2hcbiAgICAgICAgLy8gb2YgdGhlIDMgcmF3IHRleHQgZWxlbWVudCBuYW1lcy5cbiAgICAgICAgaWYgKHJhd1RleHRFbGVtZW50LnRlc3QoKG5vZGUgYXMgRWxlbWVudCkudGFnTmFtZSkpIHtcbiAgICAgICAgICAvLyBGb3IgcmF3IHRleHQgZWxlbWVudHMgd2UgbmVlZCB0byBzcGxpdCB0aGUgdGV4dCBjb250ZW50IG9uXG4gICAgICAgICAgLy8gbWFya2VycywgY3JlYXRlIGEgVGV4dCBub2RlIGZvciBlYWNoIHNlZ21lbnQsIGFuZCBjcmVhdGVcbiAgICAgICAgICAvLyBhIFRlbXBsYXRlUGFydCBmb3IgZWFjaCBtYXJrZXIuXG4gICAgICAgICAgY29uc3Qgc3RyaW5ncyA9IChub2RlIGFzIEVsZW1lbnQpLnRleHRDb250ZW50IS5zcGxpdChtYXJrZXIpO1xuICAgICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IHN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICAgICAgICBpZiAobGFzdEluZGV4ID4gMCkge1xuICAgICAgICAgICAgKG5vZGUgYXMgRWxlbWVudCkudGV4dENvbnRlbnQgPSB0cnVzdGVkVHlwZXNcbiAgICAgICAgICAgICAgPyAodHJ1c3RlZFR5cGVzLmVtcHR5U2NyaXB0IGFzIHVua25vd24gYXMgJycpXG4gICAgICAgICAgICAgIDogJyc7XG4gICAgICAgICAgICAvLyBHZW5lcmF0ZSBhIG5ldyB0ZXh0IG5vZGUgZm9yIGVhY2ggbGl0ZXJhbCBzZWN0aW9uXG4gICAgICAgICAgICAvLyBUaGVzZSBub2RlcyBhcmUgYWxzbyB1c2VkIGFzIHRoZSBtYXJrZXJzIGZvciBjaGlsZCBwYXJ0c1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXN0SW5kZXg7IGkrKykge1xuICAgICAgICAgICAgICAobm9kZSBhcyBFbGVtZW50KS5hcHBlbmQoc3RyaW5nc1tpXSwgY3JlYXRlTWFya2VyKCkpO1xuICAgICAgICAgICAgICAvLyBXYWxrIHBhc3QgdGhlIG1hcmtlciBub2RlIHdlIGp1c3QgYWRkZWRcbiAgICAgICAgICAgICAgd2Fsa2VyLm5leHROb2RlKCk7XG4gICAgICAgICAgICAgIHBhcnRzLnB1c2goe3R5cGU6IENISUxEX1BBUlQsIGluZGV4OiArK25vZGVJbmRleH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTm90ZSBiZWNhdXNlIHRoaXMgbWFya2VyIGlzIGFkZGVkIGFmdGVyIHRoZSB3YWxrZXIncyBjdXJyZW50XG4gICAgICAgICAgICAvLyBub2RlLCBpdCB3aWxsIGJlIHdhbGtlZCB0byBpbiB0aGUgb3V0ZXIgbG9vcCAoYW5kIGlnbm9yZWQpLCBzb1xuICAgICAgICAgICAgLy8gd2UgZG9uJ3QgbmVlZCB0byBhZGp1c3Qgbm9kZUluZGV4IGhlcmVcbiAgICAgICAgICAgIChub2RlIGFzIEVsZW1lbnQpLmFwcGVuZChzdHJpbmdzW2xhc3RJbmRleF0sIGNyZWF0ZU1hcmtlcigpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gOCkge1xuICAgICAgICBjb25zdCBkYXRhID0gKG5vZGUgYXMgQ29tbWVudCkuZGF0YTtcbiAgICAgICAgaWYgKGRhdGEgPT09IG1hcmtlck1hdGNoKSB7XG4gICAgICAgICAgcGFydHMucHVzaCh7dHlwZTogQ0hJTERfUEFSVCwgaW5kZXg6IG5vZGVJbmRleH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBpID0gLTE7XG4gICAgICAgICAgd2hpbGUgKChpID0gKG5vZGUgYXMgQ29tbWVudCkuZGF0YS5pbmRleE9mKG1hcmtlciwgaSArIDEpKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIC8vIENvbW1lbnQgbm9kZSBoYXMgYSBiaW5kaW5nIG1hcmtlciBpbnNpZGUsIG1ha2UgYW4gaW5hY3RpdmUgcGFydFxuICAgICAgICAgICAgLy8gVGhlIGJpbmRpbmcgd29uJ3Qgd29yaywgYnV0IHN1YnNlcXVlbnQgYmluZGluZ3Mgd2lsbFxuICAgICAgICAgICAgcGFydHMucHVzaCh7dHlwZTogQ09NTUVOVF9QQVJULCBpbmRleDogbm9kZUluZGV4fSk7XG4gICAgICAgICAgICAvLyBNb3ZlIHRvIHRoZSBlbmQgb2YgdGhlIG1hdGNoXG4gICAgICAgICAgICBpICs9IG1hcmtlci5sZW5ndGggLSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbm9kZUluZGV4Kys7XG4gICAgfVxuXG4gICAgaWYgKERFVl9NT0RFKSB7XG4gICAgICAvLyBJZiB0aGVyZSB3YXMgYSBkdXBsaWNhdGUgYXR0cmlidXRlIG9uIGEgdGFnLCB0aGVuIHdoZW4gdGhlIHRhZyBpc1xuICAgICAgLy8gcGFyc2VkIGludG8gYW4gZWxlbWVudCB0aGUgYXR0cmlidXRlIGdldHMgZGUtZHVwbGljYXRlZC4gV2UgY2FuIGRldGVjdFxuICAgICAgLy8gdGhpcyBtaXNtYXRjaCBpZiB3ZSBoYXZlbid0IHByZWNpc2VseSBjb25zdW1lZCBldmVyeSBhdHRyaWJ1dGUgbmFtZVxuICAgICAgLy8gd2hlbiBwcmVwYXJpbmcgdGhlIHRlbXBsYXRlLiBUaGlzIHdvcmtzIGJlY2F1c2UgYGF0dHJOYW1lc2AgaXMgYnVpbHRcbiAgICAgIC8vIGZyb20gdGhlIHRlbXBsYXRlIHN0cmluZyBhbmQgYGF0dHJOYW1lSW5kZXhgIGNvbWVzIGZyb20gcHJvY2Vzc2luZyB0aGVcbiAgICAgIC8vIHJlc3VsdGluZyBET00uXG4gICAgICBpZiAoYXR0ck5hbWVzLmxlbmd0aCAhPT0gYXR0ck5hbWVJbmRleCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYERldGVjdGVkIGR1cGxpY2F0ZSBhdHRyaWJ1dGUgYmluZGluZ3MuIFRoaXMgb2NjdXJzIGlmIHlvdXIgdGVtcGxhdGUgYCArXG4gICAgICAgICAgICBgaGFzIGR1cGxpY2F0ZSBhdHRyaWJ1dGVzIG9uIGFuIGVsZW1lbnQgdGFnLiBGb3IgZXhhbXBsZSBgICtcbiAgICAgICAgICAgIGBcIjxpbnB1dCA/ZGlzYWJsZWQ9XFwke3RydWV9ID9kaXNhYmxlZD1cXCR7ZmFsc2V9PlwiIGNvbnRhaW5zIGEgYCArXG4gICAgICAgICAgICBgZHVwbGljYXRlIFwiZGlzYWJsZWRcIiBhdHRyaWJ1dGUuIFRoZSBlcnJvciB3YXMgZGV0ZWN0ZWQgaW4gYCArXG4gICAgICAgICAgICBgdGhlIGZvbGxvd2luZyB0ZW1wbGF0ZTogXFxuYCArXG4gICAgICAgICAgICAnYCcgK1xuICAgICAgICAgICAgc3RyaW5ncy5qb2luKCckey4uLn0nKSArXG4gICAgICAgICAgICAnYCdcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBXZSBjb3VsZCBzZXQgd2Fsa2VyLmN1cnJlbnROb2RlIHRvIGFub3RoZXIgbm9kZSBoZXJlIHRvIHByZXZlbnQgYSBtZW1vcnlcbiAgICAvLyBsZWFrLCBidXQgZXZlcnkgdGltZSB3ZSBwcmVwYXJlIGEgdGVtcGxhdGUsIHdlIGltbWVkaWF0ZWx5IHJlbmRlciBpdFxuICAgIC8vIGFuZCByZS11c2UgdGhlIHdhbGtlciBpbiBuZXcgVGVtcGxhdGVJbnN0YW5jZS5fY2xvbmUoKS5cbiAgICBkZWJ1Z0xvZ0V2ZW50ICYmXG4gICAgICBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAga2luZDogJ3RlbXBsYXRlIHByZXAnLFxuICAgICAgICB0ZW1wbGF0ZTogdGhpcyxcbiAgICAgICAgY2xvbmFibGVUZW1wbGF0ZTogdGhpcy5lbCxcbiAgICAgICAgcGFydHM6IHRoaXMucGFydHMsXG4gICAgICAgIHN0cmluZ3MsXG4gICAgICB9KTtcbiAgfVxuXG4gIC8vIE92ZXJyaWRkZW4gdmlhIGBsaXRIdG1sUG9seWZpbGxTdXBwb3J0YCB0byBwcm92aWRlIHBsYXRmb3JtIHN1cHBvcnQuXG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMgY3JlYXRlRWxlbWVudChodG1sOiBUcnVzdGVkSFRNTCwgX29wdGlvbnM/OiBSZW5kZXJPcHRpb25zKSB7XG4gICAgY29uc3QgZWwgPSBkLmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgZWwuaW5uZXJIVE1MID0gaHRtbCBhcyB1bmtub3duIGFzIHN0cmluZztcbiAgICByZXR1cm4gZWw7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBEaXNjb25uZWN0YWJsZSB7XG4gIF8kcGFyZW50PzogRGlzY29ubmVjdGFibGU7XG4gIF8kZGlzY29ubmVjdGFibGVDaGlsZHJlbj86IFNldDxEaXNjb25uZWN0YWJsZT47XG4gIC8vIFJhdGhlciB0aGFuIGhvbGQgY29ubmVjdGlvbiBzdGF0ZSBvbiBpbnN0YW5jZXMsIERpc2Nvbm5lY3RhYmxlcyByZWN1cnNpdmVseVxuICAvLyBmZXRjaCB0aGUgY29ubmVjdGlvbiBzdGF0ZSBmcm9tIHRoZSBSb290UGFydCB0aGV5IGFyZSBjb25uZWN0ZWQgaW4gdmlhXG4gIC8vIGdldHRlcnMgdXAgdGhlIERpc2Nvbm5lY3RhYmxlIHRyZWUgdmlhIF8kcGFyZW50IHJlZmVyZW5jZXMuIFRoaXMgcHVzaGVzIHRoZVxuICAvLyBjb3N0IG9mIHRyYWNraW5nIHRoZSBpc0Nvbm5lY3RlZCBzdGF0ZSB0byBgQXN5bmNEaXJlY3RpdmVzYCwgYW5kIGF2b2lkc1xuICAvLyBuZWVkaW5nIHRvIHBhc3MgYWxsIERpc2Nvbm5lY3RhYmxlcyAocGFydHMsIHRlbXBsYXRlIGluc3RhbmNlcywgYW5kXG4gIC8vIGRpcmVjdGl2ZXMpIHRoZWlyIGNvbm5lY3Rpb24gc3RhdGUgZWFjaCB0aW1lIGl0IGNoYW5nZXMsIHdoaWNoIHdvdWxkIGJlXG4gIC8vIGNvc3RseSBmb3IgdHJlZXMgdGhhdCBoYXZlIG5vIEFzeW5jRGlyZWN0aXZlcy5cbiAgXyRpc0Nvbm5lY3RlZDogYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZURpcmVjdGl2ZShcbiAgcGFydDogQ2hpbGRQYXJ0IHwgQXR0cmlidXRlUGFydCB8IEVsZW1lbnRQYXJ0LFxuICB2YWx1ZTogdW5rbm93bixcbiAgcGFyZW50OiBEaXJlY3RpdmVQYXJlbnQgPSBwYXJ0LFxuICBhdHRyaWJ1dGVJbmRleD86IG51bWJlclxuKTogdW5rbm93biB7XG4gIC8vIEJhaWwgZWFybHkgaWYgdGhlIHZhbHVlIGlzIGV4cGxpY2l0bHkgbm9DaGFuZ2UuIE5vdGUsIHRoaXMgbWVhbnMgYW55XG4gIC8vIG5lc3RlZCBkaXJlY3RpdmUgaXMgc3RpbGwgYXR0YWNoZWQgYW5kIGlzIG5vdCBydW4uXG4gIGlmICh2YWx1ZSA9PT0gbm9DaGFuZ2UpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgbGV0IGN1cnJlbnREaXJlY3RpdmUgPVxuICAgIGF0dHJpYnV0ZUluZGV4ICE9PSB1bmRlZmluZWRcbiAgICAgID8gKHBhcmVudCBhcyBBdHRyaWJ1dGVQYXJ0KS5fX2RpcmVjdGl2ZXM/LlthdHRyaWJ1dGVJbmRleF1cbiAgICAgIDogKHBhcmVudCBhcyBDaGlsZFBhcnQgfCBFbGVtZW50UGFydCB8IERpcmVjdGl2ZSkuX19kaXJlY3RpdmU7XG4gIGNvbnN0IG5leHREaXJlY3RpdmVDb25zdHJ1Y3RvciA9IGlzUHJpbWl0aXZlKHZhbHVlKVxuICAgID8gdW5kZWZpbmVkXG4gICAgOiAvLyBUaGlzIHByb3BlcnR5IG5lZWRzIHRvIHJlbWFpbiB1bm1pbmlmaWVkLlxuICAgICAgKHZhbHVlIGFzIERpcmVjdGl2ZVJlc3VsdClbJ18kbGl0RGlyZWN0aXZlJCddO1xuICBpZiAoY3VycmVudERpcmVjdGl2ZT8uY29uc3RydWN0b3IgIT09IG5leHREaXJlY3RpdmVDb25zdHJ1Y3Rvcikge1xuICAgIC8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG4gICAgY3VycmVudERpcmVjdGl2ZT8uWydfJG5vdGlmeURpcmVjdGl2ZUNvbm5lY3Rpb25DaGFuZ2VkJ10/LihmYWxzZSk7XG4gICAgaWYgKG5leHREaXJlY3RpdmVDb25zdHJ1Y3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjdXJyZW50RGlyZWN0aXZlID0gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50RGlyZWN0aXZlID0gbmV3IG5leHREaXJlY3RpdmVDb25zdHJ1Y3RvcihwYXJ0IGFzIFBhcnRJbmZvKTtcbiAgICAgIGN1cnJlbnREaXJlY3RpdmUuXyRpbml0aWFsaXplKHBhcnQsIHBhcmVudCwgYXR0cmlidXRlSW5kZXgpO1xuICAgIH1cbiAgICBpZiAoYXR0cmlidXRlSW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgKChwYXJlbnQgYXMgQXR0cmlidXRlUGFydCkuX19kaXJlY3RpdmVzID8/PSBbXSlbYXR0cmlidXRlSW5kZXhdID1cbiAgICAgICAgY3VycmVudERpcmVjdGl2ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgKHBhcmVudCBhcyBDaGlsZFBhcnQgfCBEaXJlY3RpdmUpLl9fZGlyZWN0aXZlID0gY3VycmVudERpcmVjdGl2ZTtcbiAgICB9XG4gIH1cbiAgaWYgKGN1cnJlbnREaXJlY3RpdmUgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhbHVlID0gcmVzb2x2ZURpcmVjdGl2ZShcbiAgICAgIHBhcnQsXG4gICAgICBjdXJyZW50RGlyZWN0aXZlLl8kcmVzb2x2ZShwYXJ0LCAodmFsdWUgYXMgRGlyZWN0aXZlUmVzdWx0KS52YWx1ZXMpLFxuICAgICAgY3VycmVudERpcmVjdGl2ZSxcbiAgICAgIGF0dHJpYnV0ZUluZGV4XG4gICAgKTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCB0eXBlIHtUZW1wbGF0ZUluc3RhbmNlfTtcbi8qKlxuICogQW4gdXBkYXRlYWJsZSBpbnN0YW5jZSBvZiBhIFRlbXBsYXRlLiBIb2xkcyByZWZlcmVuY2VzIHRvIHRoZSBQYXJ0cyB1c2VkIHRvXG4gKiB1cGRhdGUgdGhlIHRlbXBsYXRlIGluc3RhbmNlLlxuICovXG5jbGFzcyBUZW1wbGF0ZUluc3RhbmNlIGltcGxlbWVudHMgRGlzY29ubmVjdGFibGUge1xuICBfJHRlbXBsYXRlOiBUZW1wbGF0ZTtcbiAgXyRwYXJ0czogQXJyYXk8UGFydCB8IHVuZGVmaW5lZD4gPSBbXTtcblxuICAvKiogQGludGVybmFsICovXG4gIF8kcGFyZW50OiBDaGlsZFBhcnQ7XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgXyRkaXNjb25uZWN0YWJsZUNoaWxkcmVuPzogU2V0PERpc2Nvbm5lY3RhYmxlPiA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZTogVGVtcGxhdGUsIHBhcmVudDogQ2hpbGRQYXJ0KSB7XG4gICAgdGhpcy5fJHRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgdGhpcy5fJHBhcmVudCA9IHBhcmVudDtcbiAgfVxuXG4gIC8vIENhbGxlZCBieSBDaGlsZFBhcnQgcGFyZW50Tm9kZSBnZXR0ZXJcbiAgZ2V0IHBhcmVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuXyRwYXJlbnQucGFyZW50Tm9kZTtcbiAgfVxuXG4gIC8vIFNlZSBjb21tZW50IGluIERpc2Nvbm5lY3RhYmxlIGludGVyZmFjZSBmb3Igd2h5IHRoaXMgaXMgYSBnZXR0ZXJcbiAgZ2V0IF8kaXNDb25uZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuXyRwYXJlbnQuXyRpc0Nvbm5lY3RlZDtcbiAgfVxuXG4gIC8vIFRoaXMgbWV0aG9kIGlzIHNlcGFyYXRlIGZyb20gdGhlIGNvbnN0cnVjdG9yIGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm4gYVxuICAvLyBEb2N1bWVudEZyYWdtZW50IGFuZCB3ZSBkb24ndCB3YW50IHRvIGhvbGQgb250byBpdCB3aXRoIGFuIGluc3RhbmNlIGZpZWxkLlxuICBfY2xvbmUob3B0aW9uczogUmVuZGVyT3B0aW9ucyB8IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGVsOiB7Y29udGVudH0sXG4gICAgICBwYXJ0czogcGFydHMsXG4gICAgfSA9IHRoaXMuXyR0ZW1wbGF0ZTtcbiAgICBjb25zdCBmcmFnbWVudCA9IChvcHRpb25zPy5jcmVhdGlvblNjb3BlID8/IGQpLmltcG9ydE5vZGUoY29udGVudCwgdHJ1ZSk7XG4gICAgd2Fsa2VyLmN1cnJlbnROb2RlID0gZnJhZ21lbnQ7XG5cbiAgICBsZXQgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpITtcbiAgICBsZXQgbm9kZUluZGV4ID0gMDtcbiAgICBsZXQgcGFydEluZGV4ID0gMDtcbiAgICBsZXQgdGVtcGxhdGVQYXJ0ID0gcGFydHNbMF07XG5cbiAgICB3aGlsZSAodGVtcGxhdGVQYXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChub2RlSW5kZXggPT09IHRlbXBsYXRlUGFydC5pbmRleCkge1xuICAgICAgICBsZXQgcGFydDogUGFydCB8IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKHRlbXBsYXRlUGFydC50eXBlID09PSBDSElMRF9QQVJUKSB7XG4gICAgICAgICAgcGFydCA9IG5ldyBDaGlsZFBhcnQoXG4gICAgICAgICAgICBub2RlIGFzIEhUTUxFbGVtZW50LFxuICAgICAgICAgICAgbm9kZS5uZXh0U2libGluZyxcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmICh0ZW1wbGF0ZVBhcnQudHlwZSA9PT0gQVRUUklCVVRFX1BBUlQpIHtcbiAgICAgICAgICBwYXJ0ID0gbmV3IHRlbXBsYXRlUGFydC5jdG9yKFxuICAgICAgICAgICAgbm9kZSBhcyBIVE1MRWxlbWVudCxcbiAgICAgICAgICAgIHRlbXBsYXRlUGFydC5uYW1lLFxuICAgICAgICAgICAgdGVtcGxhdGVQYXJ0LnN0cmluZ3MsXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAodGVtcGxhdGVQYXJ0LnR5cGUgPT09IEVMRU1FTlRfUEFSVCkge1xuICAgICAgICAgIHBhcnQgPSBuZXcgRWxlbWVudFBhcnQobm9kZSBhcyBIVE1MRWxlbWVudCwgdGhpcywgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fJHBhcnRzLnB1c2gocGFydCk7XG4gICAgICAgIHRlbXBsYXRlUGFydCA9IHBhcnRzWysrcGFydEluZGV4XTtcbiAgICAgIH1cbiAgICAgIGlmIChub2RlSW5kZXggIT09IHRlbXBsYXRlUGFydD8uaW5kZXgpIHtcbiAgICAgICAgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpITtcbiAgICAgICAgbm9kZUluZGV4Kys7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFdlIG5lZWQgdG8gc2V0IHRoZSBjdXJyZW50Tm9kZSBhd2F5IGZyb20gdGhlIGNsb25lZCB0cmVlIHNvIHRoYXQgd2VcbiAgICAvLyBkb24ndCBob2xkIG9udG8gdGhlIHRyZWUgZXZlbiBpZiB0aGUgdHJlZSBpcyBkZXRhY2hlZCBhbmQgc2hvdWxkIGJlXG4gICAgLy8gZnJlZWQuXG4gICAgd2Fsa2VyLmN1cnJlbnROb2RlID0gZDtcbiAgICByZXR1cm4gZnJhZ21lbnQ7XG4gIH1cblxuICBfdXBkYXRlKHZhbHVlczogQXJyYXk8dW5rbm93bj4pIHtcbiAgICBsZXQgaSA9IDA7XG4gICAgZm9yIChjb25zdCBwYXJ0IG9mIHRoaXMuXyRwYXJ0cykge1xuICAgICAgaWYgKHBhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkZWJ1Z0xvZ0V2ZW50ICYmXG4gICAgICAgICAgZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICBraW5kOiAnc2V0IHBhcnQnLFxuICAgICAgICAgICAgcGFydCxcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZXNbaV0sXG4gICAgICAgICAgICB2YWx1ZUluZGV4OiBpLFxuICAgICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgICAgdGVtcGxhdGVJbnN0YW5jZTogdGhpcyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgaWYgKChwYXJ0IGFzIEF0dHJpYnV0ZVBhcnQpLnN0cmluZ3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIChwYXJ0IGFzIEF0dHJpYnV0ZVBhcnQpLl8kc2V0VmFsdWUodmFsdWVzLCBwYXJ0IGFzIEF0dHJpYnV0ZVBhcnQsIGkpO1xuICAgICAgICAgIC8vIFRoZSBudW1iZXIgb2YgdmFsdWVzIHRoZSBwYXJ0IGNvbnN1bWVzIGlzIHBhcnQuc3RyaW5ncy5sZW5ndGggLSAxXG4gICAgICAgICAgLy8gc2luY2UgdmFsdWVzIGFyZSBpbiBiZXR3ZWVuIHRlbXBsYXRlIHNwYW5zLiBXZSBpbmNyZW1lbnQgaSBieSAxXG4gICAgICAgICAgLy8gbGF0ZXIgaW4gdGhlIGxvb3AsIHNvIGluY3JlbWVudCBpdCBieSBwYXJ0LnN0cmluZ3MubGVuZ3RoIC0gMiBoZXJlXG4gICAgICAgICAgaSArPSAocGFydCBhcyBBdHRyaWJ1dGVQYXJ0KS5zdHJpbmdzIS5sZW5ndGggLSAyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcnQuXyRzZXRWYWx1ZSh2YWx1ZXNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpKys7XG4gICAgfVxuICB9XG59XG5cbi8qXG4gKiBQYXJ0c1xuICovXG50eXBlIEF0dHJpYnV0ZVRlbXBsYXRlUGFydCA9IHtcbiAgcmVhZG9ubHkgdHlwZTogdHlwZW9mIEFUVFJJQlVURV9QQVJUO1xuICByZWFkb25seSBpbmRleDogbnVtYmVyO1xuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gIHJlYWRvbmx5IGN0b3I6IHR5cGVvZiBBdHRyaWJ1dGVQYXJ0O1xuICByZWFkb25seSBzdHJpbmdzOiBSZWFkb25seUFycmF5PHN0cmluZz47XG59O1xudHlwZSBDaGlsZFRlbXBsYXRlUGFydCA9IHtcbiAgcmVhZG9ubHkgdHlwZTogdHlwZW9mIENISUxEX1BBUlQ7XG4gIHJlYWRvbmx5IGluZGV4OiBudW1iZXI7XG59O1xudHlwZSBFbGVtZW50VGVtcGxhdGVQYXJ0ID0ge1xuICByZWFkb25seSB0eXBlOiB0eXBlb2YgRUxFTUVOVF9QQVJUO1xuICByZWFkb25seSBpbmRleDogbnVtYmVyO1xufTtcbnR5cGUgQ29tbWVudFRlbXBsYXRlUGFydCA9IHtcbiAgcmVhZG9ubHkgdHlwZTogdHlwZW9mIENPTU1FTlRfUEFSVDtcbiAgcmVhZG9ubHkgaW5kZXg6IG51bWJlcjtcbn07XG5cbi8qKlxuICogQSBUZW1wbGF0ZVBhcnQgcmVwcmVzZW50cyBhIGR5bmFtaWMgcGFydCBpbiBhIHRlbXBsYXRlLCBiZWZvcmUgdGhlIHRlbXBsYXRlXG4gKiBpcyBpbnN0YW50aWF0ZWQuIFdoZW4gYSB0ZW1wbGF0ZSBpcyBpbnN0YW50aWF0ZWQgUGFydHMgYXJlIGNyZWF0ZWQgZnJvbVxuICogVGVtcGxhdGVQYXJ0cy5cbiAqL1xudHlwZSBUZW1wbGF0ZVBhcnQgPVxuICB8IENoaWxkVGVtcGxhdGVQYXJ0XG4gIHwgQXR0cmlidXRlVGVtcGxhdGVQYXJ0XG4gIHwgRWxlbWVudFRlbXBsYXRlUGFydFxuICB8IENvbW1lbnRUZW1wbGF0ZVBhcnQ7XG5cbmV4cG9ydCB0eXBlIFBhcnQgPVxuICB8IENoaWxkUGFydFxuICB8IEF0dHJpYnV0ZVBhcnRcbiAgfCBQcm9wZXJ0eVBhcnRcbiAgfCBCb29sZWFuQXR0cmlidXRlUGFydFxuICB8IEVsZW1lbnRQYXJ0XG4gIHwgRXZlbnRQYXJ0O1xuXG5leHBvcnQgdHlwZSB7Q2hpbGRQYXJ0fTtcbmNsYXNzIENoaWxkUGFydCBpbXBsZW1lbnRzIERpc2Nvbm5lY3RhYmxlIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENISUxEX1BBUlQ7XG4gIHJlYWRvbmx5IG9wdGlvbnM6IFJlbmRlck9wdGlvbnMgfCB1bmRlZmluZWQ7XG4gIF8kY29tbWl0dGVkVmFsdWU6IHVua25vd24gPSBub3RoaW5nO1xuICAvKiogQGludGVybmFsICovXG4gIF9fZGlyZWN0aXZlPzogRGlyZWN0aXZlO1xuICAvKiogQGludGVybmFsICovXG4gIF8kc3RhcnROb2RlOiBDaGlsZE5vZGU7XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgXyRlbmROb2RlOiBDaGlsZE5vZGUgfCBudWxsO1xuICBwcml2YXRlIF90ZXh0U2FuaXRpemVyOiBWYWx1ZVNhbml0aXplciB8IHVuZGVmaW5lZDtcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfJHBhcmVudDogRGlzY29ubmVjdGFibGUgfCB1bmRlZmluZWQ7XG4gIC8qKlxuICAgKiBDb25uZWN0aW9uIHN0YXRlIGZvciBSb290UGFydHMgb25seSAoaS5lLiBDaGlsZFBhcnQgd2l0aG91dCBfJHBhcmVudFxuICAgKiByZXR1cm5lZCBmcm9tIHRvcC1sZXZlbCBgcmVuZGVyYCkuIFRoaXMgZmllbGQgaXMgdW51c2VkIG90aGVyd2lzZS4gVGhlXG4gICAqIGludGVudGlvbiB3b3VsZCBiZSBjbGVhcmVyIGlmIHdlIG1hZGUgYFJvb3RQYXJ0YCBhIHN1YmNsYXNzIG9mIGBDaGlsZFBhcnRgXG4gICAqIHdpdGggdGhpcyBmaWVsZCAoYW5kIGEgZGlmZmVyZW50IF8kaXNDb25uZWN0ZWQgZ2V0dGVyKSwgYnV0IHRoZSBzdWJjbGFzc1xuICAgKiBjYXVzZWQgYSBwZXJmIHJlZ3Jlc3Npb24sIHBvc3NpYmx5IGR1ZSB0byBtYWtpbmcgY2FsbCBzaXRlcyBwb2x5bW9ycGhpYy5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBfX2lzQ29ubmVjdGVkOiBib29sZWFuO1xuXG4gIC8vIFNlZSBjb21tZW50IGluIERpc2Nvbm5lY3RhYmxlIGludGVyZmFjZSBmb3Igd2h5IHRoaXMgaXMgYSBnZXR0ZXJcbiAgZ2V0IF8kaXNDb25uZWN0ZWQoKSB7XG4gICAgLy8gQ2hpbGRQYXJ0cyB0aGF0IGFyZSBub3QgYXQgdGhlIHJvb3Qgc2hvdWxkIGFsd2F5cyBiZSBjcmVhdGVkIHdpdGggYVxuICAgIC8vIHBhcmVudDsgb25seSBSb290Q2hpbGROb2RlJ3Mgd29uJ3QsIHNvIHRoZXkgcmV0dXJuIHRoZSBsb2NhbCBpc0Nvbm5lY3RlZFxuICAgIC8vIHN0YXRlXG4gICAgcmV0dXJuIHRoaXMuXyRwYXJlbnQ/Ll8kaXNDb25uZWN0ZWQgPz8gdGhpcy5fX2lzQ29ubmVjdGVkO1xuICB9XG5cbiAgLy8gVGhlIGZvbGxvd2luZyBmaWVsZHMgd2lsbCBiZSBwYXRjaGVkIG9udG8gQ2hpbGRQYXJ0cyB3aGVuIHJlcXVpcmVkIGJ5XG4gIC8vIEFzeW5jRGlyZWN0aXZlXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgXyRkaXNjb25uZWN0YWJsZUNoaWxkcmVuPzogU2V0PERpc2Nvbm5lY3RhYmxlPiA9IHVuZGVmaW5lZDtcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfJG5vdGlmeUNvbm5lY3Rpb25DaGFuZ2VkPyhcbiAgICBpc0Nvbm5lY3RlZDogYm9vbGVhbixcbiAgICByZW1vdmVGcm9tUGFyZW50PzogYm9vbGVhbixcbiAgICBmcm9tPzogbnVtYmVyXG4gICk6IHZvaWQ7XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgXyRyZXBhcmVudERpc2Nvbm5lY3RhYmxlcz8ocGFyZW50OiBEaXNjb25uZWN0YWJsZSk6IHZvaWQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgc3RhcnROb2RlOiBDaGlsZE5vZGUsXG4gICAgZW5kTm9kZTogQ2hpbGROb2RlIHwgbnVsbCxcbiAgICBwYXJlbnQ6IFRlbXBsYXRlSW5zdGFuY2UgfCBDaGlsZFBhcnQgfCB1bmRlZmluZWQsXG4gICAgb3B0aW9uczogUmVuZGVyT3B0aW9ucyB8IHVuZGVmaW5lZFxuICApIHtcbiAgICB0aGlzLl8kc3RhcnROb2RlID0gc3RhcnROb2RlO1xuICAgIHRoaXMuXyRlbmROb2RlID0gZW5kTm9kZTtcbiAgICB0aGlzLl8kcGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgLy8gTm90ZSBfX2lzQ29ubmVjdGVkIGlzIG9ubHkgZXZlciBhY2Nlc3NlZCBvbiBSb290UGFydHMgKGkuZS4gd2hlbiB0aGVyZSBpc1xuICAgIC8vIG5vIF8kcGFyZW50KTsgdGhlIHZhbHVlIG9uIGEgbm9uLXJvb3QtcGFydCBpcyBcImRvbid0IGNhcmVcIiwgYnV0IGNoZWNraW5nXG4gICAgLy8gZm9yIHBhcmVudCB3b3VsZCBiZSBtb3JlIGNvZGVcbiAgICB0aGlzLl9faXNDb25uZWN0ZWQgPSBvcHRpb25zPy5pc0Nvbm5lY3RlZCA/PyB0cnVlO1xuICAgIGlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICAgIC8vIEV4cGxpY2l0bHkgaW5pdGlhbGl6ZSBmb3IgY29uc2lzdGVudCBjbGFzcyBzaGFwZS5cbiAgICAgIHRoaXMuX3RleHRTYW5pdGl6ZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBwYXJlbnQgbm9kZSBpbnRvIHdoaWNoIHRoZSBwYXJ0IHJlbmRlcnMgaXRzIGNvbnRlbnQuXG4gICAqXG4gICAqIEEgQ2hpbGRQYXJ0J3MgY29udGVudCBjb25zaXN0cyBvZiBhIHJhbmdlIG9mIGFkamFjZW50IGNoaWxkIG5vZGVzIG9mXG4gICAqIGAucGFyZW50Tm9kZWAsIHBvc3NpYmx5IGJvcmRlcmVkIGJ5ICdtYXJrZXIgbm9kZXMnIChgLnN0YXJ0Tm9kZWAgYW5kXG4gICAqIGAuZW5kTm9kZWApLlxuICAgKlxuICAgKiAtIElmIGJvdGggYC5zdGFydE5vZGVgIGFuZCBgLmVuZE5vZGVgIGFyZSBub24tbnVsbCwgdGhlbiB0aGUgcGFydCdzIGNvbnRlbnRcbiAgICogY29uc2lzdHMgb2YgYWxsIHNpYmxpbmdzIGJldHdlZW4gYC5zdGFydE5vZGVgIGFuZCBgLmVuZE5vZGVgLCBleGNsdXNpdmVseS5cbiAgICpcbiAgICogLSBJZiBgLnN0YXJ0Tm9kZWAgaXMgbm9uLW51bGwgYnV0IGAuZW5kTm9kZWAgaXMgbnVsbCwgdGhlbiB0aGUgcGFydCdzXG4gICAqIGNvbnRlbnQgY29uc2lzdHMgb2YgYWxsIHNpYmxpbmdzIGZvbGxvd2luZyBgLnN0YXJ0Tm9kZWAsIHVwIHRvIGFuZFxuICAgKiBpbmNsdWRpbmcgdGhlIGxhc3QgY2hpbGQgb2YgYC5wYXJlbnROb2RlYC4gSWYgYC5lbmROb2RlYCBpcyBub24tbnVsbCwgdGhlblxuICAgKiBgLnN0YXJ0Tm9kZWAgd2lsbCBhbHdheXMgYmUgbm9uLW51bGwuXG4gICAqXG4gICAqIC0gSWYgYm90aCBgLmVuZE5vZGVgIGFuZCBgLnN0YXJ0Tm9kZWAgYXJlIG51bGwsIHRoZW4gdGhlIHBhcnQncyBjb250ZW50XG4gICAqIGNvbnNpc3RzIG9mIGFsbCBjaGlsZCBub2RlcyBvZiBgLnBhcmVudE5vZGVgLlxuICAgKi9cbiAgZ2V0IHBhcmVudE5vZGUoKTogTm9kZSB7XG4gICAgbGV0IHBhcmVudE5vZGU6IE5vZGUgPSB3cmFwKHRoaXMuXyRzdGFydE5vZGUpLnBhcmVudE5vZGUhO1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuXyRwYXJlbnQ7XG4gICAgaWYgKFxuICAgICAgcGFyZW50ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIHBhcmVudE5vZGU/Lm5vZGVUeXBlID09PSAxMSAvKiBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UICovXG4gICAgKSB7XG4gICAgICAvLyBJZiB0aGUgcGFyZW50Tm9kZSBpcyBhIERvY3VtZW50RnJhZ21lbnQsIGl0IG1heSBiZSBiZWNhdXNlIHRoZSBET00gaXNcbiAgICAgIC8vIHN0aWxsIGluIHRoZSBjbG9uZWQgZnJhZ21lbnQgZHVyaW5nIGluaXRpYWwgcmVuZGVyOyBpZiBzbywgZ2V0IHRoZSByZWFsXG4gICAgICAvLyBwYXJlbnROb2RlIHRoZSBwYXJ0IHdpbGwgYmUgY29tbWl0dGVkIGludG8gYnkgYXNraW5nIHRoZSBwYXJlbnQuXG4gICAgICBwYXJlbnROb2RlID0gKHBhcmVudCBhcyBDaGlsZFBhcnQgfCBUZW1wbGF0ZUluc3RhbmNlKS5wYXJlbnROb2RlO1xuICAgIH1cbiAgICByZXR1cm4gcGFyZW50Tm9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgcGFydCdzIGxlYWRpbmcgbWFya2VyIG5vZGUsIGlmIGFueS4gU2VlIGAucGFyZW50Tm9kZWAgZm9yIG1vcmVcbiAgICogaW5mb3JtYXRpb24uXG4gICAqL1xuICBnZXQgc3RhcnROb2RlKCk6IE5vZGUgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fJHN0YXJ0Tm9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgcGFydCdzIHRyYWlsaW5nIG1hcmtlciBub2RlLCBpZiBhbnkuIFNlZSBgLnBhcmVudE5vZGVgIGZvciBtb3JlXG4gICAqIGluZm9ybWF0aW9uLlxuICAgKi9cbiAgZ2V0IGVuZE5vZGUoKTogTm9kZSB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl8kZW5kTm9kZTtcbiAgfVxuXG4gIF8kc2V0VmFsdWUodmFsdWU6IHVua25vd24sIGRpcmVjdGl2ZVBhcmVudDogRGlyZWN0aXZlUGFyZW50ID0gdGhpcyk6IHZvaWQge1xuICAgIGlmIChERVZfTU9ERSAmJiB0aGlzLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRoaXMgXFxgQ2hpbGRQYXJ0XFxgIGhhcyBubyBcXGBwYXJlbnROb2RlXFxgIGFuZCB0aGVyZWZvcmUgY2Fubm90IGFjY2VwdCBhIHZhbHVlLiBUaGlzIGxpa2VseSBtZWFucyB0aGUgZWxlbWVudCBjb250YWluaW5nIHRoZSBwYXJ0IHdhcyBtYW5pcHVsYXRlZCBpbiBhbiB1bnN1cHBvcnRlZCB3YXkgb3V0c2lkZSBvZiBMaXQncyBjb250cm9sIHN1Y2ggdGhhdCB0aGUgcGFydCdzIG1hcmtlciBub2RlcyB3ZXJlIGVqZWN0ZWQgZnJvbSBET00uIEZvciBleGFtcGxlLCBzZXR0aW5nIHRoZSBlbGVtZW50J3MgXFxgaW5uZXJIVE1MXFxgIG9yIFxcYHRleHRDb250ZW50XFxgIGNhbiBkbyB0aGlzLmBcbiAgICAgICk7XG4gICAgfVxuICAgIHZhbHVlID0gcmVzb2x2ZURpcmVjdGl2ZSh0aGlzLCB2YWx1ZSwgZGlyZWN0aXZlUGFyZW50KTtcbiAgICBpZiAoaXNQcmltaXRpdmUodmFsdWUpKSB7XG4gICAgICAvLyBOb24tcmVuZGVyaW5nIGNoaWxkIHZhbHVlcy4gSXQncyBpbXBvcnRhbnQgdGhhdCB0aGVzZSBkbyBub3QgcmVuZGVyXG4gICAgICAvLyBlbXB0eSB0ZXh0IG5vZGVzIHRvIGF2b2lkIGlzc3VlcyB3aXRoIHByZXZlbnRpbmcgZGVmYXVsdCA8c2xvdD5cbiAgICAgIC8vIGZhbGxiYWNrIGNvbnRlbnQuXG4gICAgICBpZiAodmFsdWUgPT09IG5vdGhpbmcgfHwgdmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgaWYgKHRoaXMuXyRjb21taXR0ZWRWYWx1ZSAhPT0gbm90aGluZykge1xuICAgICAgICAgIGRlYnVnTG9nRXZlbnQgJiZcbiAgICAgICAgICAgIGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAgICBraW5kOiAnY29tbWl0IG5vdGhpbmcgdG8gY2hpbGQnLFxuICAgICAgICAgICAgICBzdGFydDogdGhpcy5fJHN0YXJ0Tm9kZSxcbiAgICAgICAgICAgICAgZW5kOiB0aGlzLl8kZW5kTm9kZSxcbiAgICAgICAgICAgICAgcGFyZW50OiB0aGlzLl8kcGFyZW50LFxuICAgICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLl8kY2xlYXIoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSBub3RoaW5nO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSAhPT0gdGhpcy5fJGNvbW1pdHRlZFZhbHVlICYmIHZhbHVlICE9PSBub0NoYW5nZSkge1xuICAgICAgICB0aGlzLl9jb21taXRUZXh0KHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIC8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG4gICAgfSBlbHNlIGlmICgodmFsdWUgYXMgVGVtcGxhdGVSZXN1bHQpWydfJGxpdFR5cGUkJ10gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fY29tbWl0VGVtcGxhdGVSZXN1bHQodmFsdWUgYXMgVGVtcGxhdGVSZXN1bHQpO1xuICAgIH0gZWxzZSBpZiAoKHZhbHVlIGFzIE5vZGUpLm5vZGVUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChERVZfTU9ERSAmJiB0aGlzLm9wdGlvbnM/Lmhvc3QgPT09IHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2NvbW1pdFRleHQoXG4gICAgICAgICAgYFtwcm9iYWJsZSBtaXN0YWtlOiByZW5kZXJlZCBhIHRlbXBsYXRlJ3MgaG9zdCBpbiBpdHNlbGYgYCArXG4gICAgICAgICAgICBgKGNvbW1vbmx5IGNhdXNlZCBieSB3cml0aW5nIFxcJHt0aGlzfSBpbiBhIHRlbXBsYXRlXWBcbiAgICAgICAgKTtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIGBBdHRlbXB0ZWQgdG8gcmVuZGVyIHRoZSB0ZW1wbGF0ZSBob3N0YCxcbiAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICBgaW5zaWRlIGl0c2VsZi4gVGhpcyBpcyBhbG1vc3QgYWx3YXlzIGEgbWlzdGFrZSwgYW5kIGluIGRldiBtb2RlIGAsXG4gICAgICAgICAgYHdlIHJlbmRlciBzb21lIHdhcm5pbmcgdGV4dC4gSW4gcHJvZHVjdGlvbiBob3dldmVyLCB3ZSdsbCBgLFxuICAgICAgICAgIGByZW5kZXIgaXQsIHdoaWNoIHdpbGwgdXN1YWxseSByZXN1bHQgaW4gYW4gZXJyb3IsIGFuZCBzb21ldGltZXMgYCxcbiAgICAgICAgICBgaW4gdGhlIGVsZW1lbnQgZGlzYXBwZWFyaW5nIGZyb20gdGhlIERPTS5gXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NvbW1pdE5vZGUodmFsdWUgYXMgTm9kZSk7XG4gICAgfSBlbHNlIGlmIChpc0l0ZXJhYmxlKHZhbHVlKSkge1xuICAgICAgdGhpcy5fY29tbWl0SXRlcmFibGUodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBGYWxsYmFjaywgd2lsbCByZW5kZXIgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvblxuICAgICAgdGhpcy5fY29tbWl0VGV4dCh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaW5zZXJ0PFQgZXh0ZW5kcyBOb2RlPihub2RlOiBUKSB7XG4gICAgcmV0dXJuIHdyYXAod3JhcCh0aGlzLl8kc3RhcnROb2RlKS5wYXJlbnROb2RlISkuaW5zZXJ0QmVmb3JlKFxuICAgICAgbm9kZSxcbiAgICAgIHRoaXMuXyRlbmROb2RlXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbW1pdE5vZGUodmFsdWU6IE5vZGUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fJGNvbW1pdHRlZFZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5fJGNsZWFyKCk7XG4gICAgICBpZiAoXG4gICAgICAgIEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUyAmJlxuICAgICAgICBzYW5pdGl6ZXJGYWN0b3J5SW50ZXJuYWwgIT09IG5vb3BTYW5pdGl6ZXJcbiAgICAgICkge1xuICAgICAgICBjb25zdCBwYXJlbnROb2RlTmFtZSA9IHRoaXMuXyRzdGFydE5vZGUucGFyZW50Tm9kZT8ubm9kZU5hbWU7XG4gICAgICAgIGlmIChwYXJlbnROb2RlTmFtZSA9PT0gJ1NUWUxFJyB8fCBwYXJlbnROb2RlTmFtZSA9PT0gJ1NDUklQVCcpIHtcbiAgICAgICAgICBsZXQgbWVzc2FnZSA9ICdGb3JiaWRkZW4nO1xuICAgICAgICAgIGlmIChERVZfTU9ERSkge1xuICAgICAgICAgICAgaWYgKHBhcmVudE5vZGVOYW1lID09PSAnU1RZTEUnKSB7XG4gICAgICAgICAgICAgIG1lc3NhZ2UgPVxuICAgICAgICAgICAgICAgIGBMaXQgZG9lcyBub3Qgc3VwcG9ydCBiaW5kaW5nIGluc2lkZSBzdHlsZSBub2Rlcy4gYCArXG4gICAgICAgICAgICAgICAgYFRoaXMgaXMgYSBzZWN1cml0eSByaXNrLCBhcyBzdHlsZSBpbmplY3Rpb24gYXR0YWNrcyBjYW4gYCArXG4gICAgICAgICAgICAgICAgYGV4ZmlsdHJhdGUgZGF0YSBhbmQgc3Bvb2YgVUlzLiBgICtcbiAgICAgICAgICAgICAgICBgQ29uc2lkZXIgaW5zdGVhZCB1c2luZyBjc3NcXGAuLi5cXGAgbGl0ZXJhbHMgYCArXG4gICAgICAgICAgICAgICAgYHRvIGNvbXBvc2Ugc3R5bGVzLCBhbmQgZG8gZHluYW1pYyBzdHlsaW5nIHdpdGggYCArXG4gICAgICAgICAgICAgICAgYGNzcyBjdXN0b20gcHJvcGVydGllcywgOjpwYXJ0cywgPHNsb3Q+cywgYCArXG4gICAgICAgICAgICAgICAgYGFuZCBieSBtdXRhdGluZyB0aGUgRE9NIHJhdGhlciB0aGFuIHN0eWxlc2hlZXRzLmA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBtZXNzYWdlID1cbiAgICAgICAgICAgICAgICBgTGl0IGRvZXMgbm90IHN1cHBvcnQgYmluZGluZyBpbnNpZGUgc2NyaXB0IG5vZGVzLiBgICtcbiAgICAgICAgICAgICAgICBgVGhpcyBpcyBhIHNlY3VyaXR5IHJpc2ssIGFzIGl0IGNvdWxkIGFsbG93IGFyYml0cmFyeSBgICtcbiAgICAgICAgICAgICAgICBgY29kZSBleGVjdXRpb24uYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkZWJ1Z0xvZ0V2ZW50ICYmXG4gICAgICAgIGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgIGtpbmQ6ICdjb21taXQgbm9kZScsXG4gICAgICAgICAgc3RhcnQ6IHRoaXMuXyRzdGFydE5vZGUsXG4gICAgICAgICAgcGFyZW50OiB0aGlzLl8kcGFyZW50LFxuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgIH0pO1xuICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID0gdGhpcy5faW5zZXJ0KHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jb21taXRUZXh0KHZhbHVlOiB1bmtub3duKTogdm9pZCB7XG4gICAgLy8gSWYgdGhlIGNvbW1pdHRlZCB2YWx1ZSBpcyBhIHByaW1pdGl2ZSBpdCBtZWFucyB3ZSBjYWxsZWQgX2NvbW1pdFRleHQgb25cbiAgICAvLyB0aGUgcHJldmlvdXMgcmVuZGVyLCBhbmQgd2Uga25vdyB0aGF0IHRoaXMuXyRzdGFydE5vZGUubmV4dFNpYmxpbmcgaXMgYVxuICAgIC8vIFRleHQgbm9kZS4gV2UgY2FuIG5vdyBqdXN0IHJlcGxhY2UgdGhlIHRleHQgY29udGVudCAoLmRhdGEpIG9mIHRoZSBub2RlLlxuICAgIGlmIChcbiAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSAhPT0gbm90aGluZyAmJlxuICAgICAgaXNQcmltaXRpdmUodGhpcy5fJGNvbW1pdHRlZFZhbHVlKVxuICAgICkge1xuICAgICAgY29uc3Qgbm9kZSA9IHdyYXAodGhpcy5fJHN0YXJ0Tm9kZSkubmV4dFNpYmxpbmcgYXMgVGV4dDtcbiAgICAgIGlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICAgICAgaWYgKHRoaXMuX3RleHRTYW5pdGl6ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuX3RleHRTYW5pdGl6ZXIgPSBjcmVhdGVTYW5pdGl6ZXIobm9kZSwgJ2RhdGEnLCAncHJvcGVydHknKTtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSA9IHRoaXMuX3RleHRTYW5pdGl6ZXIodmFsdWUpO1xuICAgICAgfVxuICAgICAgZGVidWdMb2dFdmVudCAmJlxuICAgICAgICBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICBraW5kOiAnY29tbWl0IHRleHQnLFxuICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICB9KTtcbiAgICAgIChub2RlIGFzIFRleHQpLmRhdGEgPSB2YWx1ZSBhcyBzdHJpbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICAgICAgY29uc3QgdGV4dE5vZGUgPSBkLmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICAgICAgdGhpcy5fY29tbWl0Tm9kZSh0ZXh0Tm9kZSk7XG4gICAgICAgIC8vIFdoZW4gc2V0dGluZyB0ZXh0IGNvbnRlbnQsIGZvciBzZWN1cml0eSBwdXJwb3NlcyBpdCBtYXR0ZXJzIGEgbG90XG4gICAgICAgIC8vIHdoYXQgdGhlIHBhcmVudCBpcy4gRm9yIGV4YW1wbGUsIDxzdHlsZT4gYW5kIDxzY3JpcHQ+IG5lZWQgdG8gYmVcbiAgICAgICAgLy8gaGFuZGxlZCB3aXRoIGNhcmUsIHdoaWxlIDxzcGFuPiBkb2VzIG5vdC4gU28gZmlyc3Qgd2UgbmVlZCB0byBwdXQgYVxuICAgICAgICAvLyB0ZXh0IG5vZGUgaW50byB0aGUgZG9jdW1lbnQsIHRoZW4gd2UgY2FuIHNhbml0aXplIGl0cyBjb250ZW50LlxuICAgICAgICBpZiAodGhpcy5fdGV4dFNhbml0aXplciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5fdGV4dFNhbml0aXplciA9IGNyZWF0ZVNhbml0aXplcih0ZXh0Tm9kZSwgJ2RhdGEnLCAncHJvcGVydHknKTtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSA9IHRoaXMuX3RleHRTYW5pdGl6ZXIodmFsdWUpO1xuICAgICAgICBkZWJ1Z0xvZ0V2ZW50ICYmXG4gICAgICAgICAgZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICBraW5kOiAnY29tbWl0IHRleHQnLFxuICAgICAgICAgICAgbm9kZTogdGV4dE5vZGUsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgdGV4dE5vZGUuZGF0YSA9IHZhbHVlIGFzIHN0cmluZztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2NvbW1pdE5vZGUoZC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSBhcyBzdHJpbmcpKTtcbiAgICAgICAgZGVidWdMb2dFdmVudCAmJlxuICAgICAgICAgIGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAga2luZDogJ2NvbW1pdCB0ZXh0JyxcbiAgICAgICAgICAgIG5vZGU6IHdyYXAodGhpcy5fJHN0YXJ0Tm9kZSkubmV4dFNpYmxpbmcgYXMgVGV4dCxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbW1pdFRlbXBsYXRlUmVzdWx0KFxuICAgIHJlc3VsdDogVGVtcGxhdGVSZXN1bHQgfCBDb21waWxlZFRlbXBsYXRlUmVzdWx0XG4gICk6IHZvaWQge1xuICAgIC8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG4gICAgY29uc3Qge3ZhbHVlcywgWydfJGxpdFR5cGUkJ106IHR5cGV9ID0gcmVzdWx0O1xuICAgIC8vIElmICRsaXRUeXBlJCBpcyBhIG51bWJlciwgcmVzdWx0IGlzIGEgcGxhaW4gVGVtcGxhdGVSZXN1bHQgYW5kIHdlIGdldFxuICAgIC8vIHRoZSB0ZW1wbGF0ZSBmcm9tIHRoZSB0ZW1wbGF0ZSBjYWNoZS4gSWYgbm90LCByZXN1bHQgaXMgYVxuICAgIC8vIENvbXBpbGVkVGVtcGxhdGVSZXN1bHQgYW5kIF8kbGl0VHlwZSQgaXMgYSBDb21waWxlZFRlbXBsYXRlIGFuZCB3ZSBuZWVkXG4gICAgLy8gdG8gY3JlYXRlIHRoZSA8dGVtcGxhdGU+IGVsZW1lbnQgdGhlIGZpcnN0IHRpbWUgd2Ugc2VlIGl0LlxuICAgIGNvbnN0IHRlbXBsYXRlOiBUZW1wbGF0ZSB8IENvbXBpbGVkVGVtcGxhdGUgPVxuICAgICAgdHlwZW9mIHR5cGUgPT09ICdudW1iZXInXG4gICAgICAgID8gdGhpcy5fJGdldFRlbXBsYXRlKHJlc3VsdCBhcyBVbmNvbXBpbGVkVGVtcGxhdGVSZXN1bHQpXG4gICAgICAgIDogKHR5cGUuZWwgPT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgKHR5cGUuZWwgPSBUZW1wbGF0ZS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICB0cnVzdEZyb21UZW1wbGF0ZVN0cmluZyh0eXBlLmgsIHR5cGUuaFswXSksXG4gICAgICAgICAgICAgIHRoaXMub3B0aW9uc1xuICAgICAgICAgICAgKSksXG4gICAgICAgICAgdHlwZSk7XG5cbiAgICBpZiAoKHRoaXMuXyRjb21taXR0ZWRWYWx1ZSBhcyBUZW1wbGF0ZUluc3RhbmNlKT8uXyR0ZW1wbGF0ZSA9PT0gdGVtcGxhdGUpIHtcbiAgICAgIGRlYnVnTG9nRXZlbnQgJiZcbiAgICAgICAgZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAga2luZDogJ3RlbXBsYXRlIHVwZGF0aW5nJyxcbiAgICAgICAgICB0ZW1wbGF0ZSxcbiAgICAgICAgICBpbnN0YW5jZTogdGhpcy5fJGNvbW1pdHRlZFZhbHVlIGFzIFRlbXBsYXRlSW5zdGFuY2UsXG4gICAgICAgICAgcGFydHM6ICh0aGlzLl8kY29tbWl0dGVkVmFsdWUgYXMgVGVtcGxhdGVJbnN0YW5jZSkuXyRwYXJ0cyxcbiAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgdmFsdWVzLFxuICAgICAgICB9KTtcbiAgICAgICh0aGlzLl8kY29tbWl0dGVkVmFsdWUgYXMgVGVtcGxhdGVJbnN0YW5jZSkuX3VwZGF0ZSh2YWx1ZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBUZW1wbGF0ZUluc3RhbmNlKHRlbXBsYXRlIGFzIFRlbXBsYXRlLCB0aGlzKTtcbiAgICAgIGNvbnN0IGZyYWdtZW50ID0gaW5zdGFuY2UuX2Nsb25lKHRoaXMub3B0aW9ucyk7XG4gICAgICBkZWJ1Z0xvZ0V2ZW50ICYmXG4gICAgICAgIGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgIGtpbmQ6ICd0ZW1wbGF0ZSBpbnN0YW50aWF0ZWQnLFxuICAgICAgICAgIHRlbXBsYXRlLFxuICAgICAgICAgIGluc3RhbmNlLFxuICAgICAgICAgIHBhcnRzOiBpbnN0YW5jZS5fJHBhcnRzLFxuICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICBmcmFnbWVudCxcbiAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgIH0pO1xuICAgICAgaW5zdGFuY2UuX3VwZGF0ZSh2YWx1ZXMpO1xuICAgICAgZGVidWdMb2dFdmVudCAmJlxuICAgICAgICBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICBraW5kOiAndGVtcGxhdGUgaW5zdGFudGlhdGVkIGFuZCB1cGRhdGVkJyxcbiAgICAgICAgICB0ZW1wbGF0ZSxcbiAgICAgICAgICBpbnN0YW5jZSxcbiAgICAgICAgICBwYXJ0czogaW5zdGFuY2UuXyRwYXJ0cyxcbiAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgZnJhZ21lbnQsXG4gICAgICAgICAgdmFsdWVzLFxuICAgICAgICB9KTtcbiAgICAgIHRoaXMuX2NvbW1pdE5vZGUoZnJhZ21lbnQpO1xuICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID0gaW5zdGFuY2U7XG4gICAgfVxuICB9XG5cbiAgLy8gT3ZlcnJpZGRlbiB2aWEgYGxpdEh0bWxQb2x5ZmlsbFN1cHBvcnRgIHRvIHByb3ZpZGUgcGxhdGZvcm0gc3VwcG9ydC5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfJGdldFRlbXBsYXRlKHJlc3VsdDogVW5jb21waWxlZFRlbXBsYXRlUmVzdWx0KSB7XG4gICAgbGV0IHRlbXBsYXRlID0gdGVtcGxhdGVDYWNoZS5nZXQocmVzdWx0LnN0cmluZ3MpO1xuICAgIGlmICh0ZW1wbGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0ZW1wbGF0ZUNhY2hlLnNldChyZXN1bHQuc3RyaW5ncywgKHRlbXBsYXRlID0gbmV3IFRlbXBsYXRlKHJlc3VsdCkpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29tbWl0SXRlcmFibGUodmFsdWU6IEl0ZXJhYmxlPHVua25vd24+KTogdm9pZCB7XG4gICAgLy8gRm9yIGFuIEl0ZXJhYmxlLCB3ZSBjcmVhdGUgYSBuZXcgSW5zdGFuY2VQYXJ0IHBlciBpdGVtLCB0aGVuIHNldCBpdHNcbiAgICAvLyB2YWx1ZSB0byB0aGUgaXRlbS4gVGhpcyBpcyBhIGxpdHRsZSBiaXQgb2Ygb3ZlcmhlYWQgZm9yIGV2ZXJ5IGl0ZW0gaW5cbiAgICAvLyBhbiBJdGVyYWJsZSwgYnV0IGl0IGxldHMgdXMgcmVjdXJzZSBlYXNpbHkgYW5kIGVmZmljaWVudGx5IHVwZGF0ZSBBcnJheXNcbiAgICAvLyBvZiBUZW1wbGF0ZVJlc3VsdHMgdGhhdCB3aWxsIGJlIGNvbW1vbmx5IHJldHVybmVkIGZyb20gZXhwcmVzc2lvbnMgbGlrZTpcbiAgICAvLyBhcnJheS5tYXAoKGkpID0+IGh0bWxgJHtpfWApLCBieSByZXVzaW5nIGV4aXN0aW5nIFRlbXBsYXRlSW5zdGFuY2VzLlxuXG4gICAgLy8gSWYgdmFsdWUgaXMgYW4gYXJyYXksIHRoZW4gdGhlIHByZXZpb3VzIHJlbmRlciB3YXMgb2YgYW5cbiAgICAvLyBpdGVyYWJsZSBhbmQgdmFsdWUgd2lsbCBjb250YWluIHRoZSBDaGlsZFBhcnRzIGZyb20gdGhlIHByZXZpb3VzXG4gICAgLy8gcmVuZGVyLiBJZiB2YWx1ZSBpcyBub3QgYW4gYXJyYXksIGNsZWFyIHRoaXMgcGFydCBhbmQgbWFrZSBhIG5ld1xuICAgIC8vIGFycmF5IGZvciBDaGlsZFBhcnRzLlxuICAgIGlmICghaXNBcnJheSh0aGlzLl8kY29tbWl0dGVkVmFsdWUpKSB7XG4gICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSBbXTtcbiAgICAgIHRoaXMuXyRjbGVhcigpO1xuICAgIH1cblxuICAgIC8vIExldHMgdXMga2VlcCB0cmFjayBvZiBob3cgbWFueSBpdGVtcyB3ZSBzdGFtcGVkIHNvIHdlIGNhbiBjbGVhciBsZWZ0b3ZlclxuICAgIC8vIGl0ZW1zIGZyb20gYSBwcmV2aW91cyByZW5kZXJcbiAgICBjb25zdCBpdGVtUGFydHMgPSB0aGlzLl8kY29tbWl0dGVkVmFsdWUgYXMgQ2hpbGRQYXJ0W107XG4gICAgbGV0IHBhcnRJbmRleCA9IDA7XG4gICAgbGV0IGl0ZW1QYXJ0OiBDaGlsZFBhcnQgfCB1bmRlZmluZWQ7XG5cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdmFsdWUpIHtcbiAgICAgIGlmIChwYXJ0SW5kZXggPT09IGl0ZW1QYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgLy8gSWYgbm8gZXhpc3RpbmcgcGFydCwgY3JlYXRlIGEgbmV3IG9uZVxuICAgICAgICAvLyBUT0RPIChqdXN0aW5mYWduYW5pKTogdGVzdCBwZXJmIGltcGFjdCBvZiBhbHdheXMgY3JlYXRpbmcgdHdvIHBhcnRzXG4gICAgICAgIC8vIGluc3RlYWQgb2Ygc2hhcmluZyBwYXJ0cyBiZXR3ZWVuIG5vZGVzXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9saXQvbGl0L2lzc3Vlcy8xMjY2XG4gICAgICAgIGl0ZW1QYXJ0cy5wdXNoKFxuICAgICAgICAgIChpdGVtUGFydCA9IG5ldyBDaGlsZFBhcnQoXG4gICAgICAgICAgICB0aGlzLl9pbnNlcnQoY3JlYXRlTWFya2VyKCkpLFxuICAgICAgICAgICAgdGhpcy5faW5zZXJ0KGNyZWF0ZU1hcmtlcigpKSxcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNcbiAgICAgICAgICApKVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmV1c2UgYW4gZXhpc3RpbmcgcGFydFxuICAgICAgICBpdGVtUGFydCA9IGl0ZW1QYXJ0c1twYXJ0SW5kZXhdO1xuICAgICAgfVxuICAgICAgaXRlbVBhcnQuXyRzZXRWYWx1ZShpdGVtKTtcbiAgICAgIHBhcnRJbmRleCsrO1xuICAgIH1cblxuICAgIGlmIChwYXJ0SW5kZXggPCBpdGVtUGFydHMubGVuZ3RoKSB7XG4gICAgICAvLyBpdGVtUGFydHMgYWx3YXlzIGhhdmUgZW5kIG5vZGVzXG4gICAgICB0aGlzLl8kY2xlYXIoXG4gICAgICAgIGl0ZW1QYXJ0ICYmIHdyYXAoaXRlbVBhcnQuXyRlbmROb2RlISkubmV4dFNpYmxpbmcsXG4gICAgICAgIHBhcnRJbmRleFxuICAgICAgKTtcbiAgICAgIC8vIFRydW5jYXRlIHRoZSBwYXJ0cyBhcnJheSBzbyBfdmFsdWUgcmVmbGVjdHMgdGhlIGN1cnJlbnQgc3RhdGVcbiAgICAgIGl0ZW1QYXJ0cy5sZW5ndGggPSBwYXJ0SW5kZXg7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIG5vZGVzIGNvbnRhaW5lZCB3aXRoaW4gdGhpcyBQYXJ0IGZyb20gdGhlIERPTS5cbiAgICpcbiAgICogQHBhcmFtIHN0YXJ0IFN0YXJ0IG5vZGUgdG8gY2xlYXIgZnJvbSwgZm9yIGNsZWFyaW5nIGEgc3Vic2V0IG9mIHRoZSBwYXJ0J3NcbiAgICogICAgIERPTSAodXNlZCB3aGVuIHRydW5jYXRpbmcgaXRlcmFibGVzKVxuICAgKiBAcGFyYW0gZnJvbSAgV2hlbiBgc3RhcnRgIGlzIHNwZWNpZmllZCwgdGhlIGluZGV4IHdpdGhpbiB0aGUgaXRlcmFibGUgZnJvbVxuICAgKiAgICAgd2hpY2ggQ2hpbGRQYXJ0cyBhcmUgYmVpbmcgcmVtb3ZlZCwgdXNlZCBmb3IgZGlzY29ubmVjdGluZyBkaXJlY3RpdmVzXG4gICAqICAgICBpbiB0aG9zZSBQYXJ0cy5cbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuICBfJGNsZWFyKFxuICAgIHN0YXJ0OiBDaGlsZE5vZGUgfCBudWxsID0gd3JhcCh0aGlzLl8kc3RhcnROb2RlKS5uZXh0U2libGluZyxcbiAgICBmcm9tPzogbnVtYmVyXG4gICkge1xuICAgIHRoaXMuXyRub3RpZnlDb25uZWN0aW9uQ2hhbmdlZD8uKGZhbHNlLCB0cnVlLCBmcm9tKTtcbiAgICB3aGlsZSAoc3RhcnQgIT09IHRoaXMuXyRlbmROb2RlKSB7XG4gICAgICAvLyBUaGUgbm9uLW51bGwgYXNzZXJ0aW9uIGlzIHNhZmUgYmVjYXVzZSBpZiBfJHN0YXJ0Tm9kZS5uZXh0U2libGluZyBpc1xuICAgICAgLy8gbnVsbCwgdGhlbiBfJGVuZE5vZGUgaXMgYWxzbyBudWxsLCBhbmQgd2Ugd291bGQgbm90IGhhdmUgZW50ZXJlZCB0aGlzXG4gICAgICAvLyBsb29wLlxuICAgICAgY29uc3QgbiA9IHdyYXAoc3RhcnQhKS5uZXh0U2libGluZztcbiAgICAgIHdyYXAoc3RhcnQhKS5yZW1vdmUoKTtcbiAgICAgIHN0YXJ0ID0gbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW1wbGVtZW50YXRpb24gb2YgUm9vdFBhcnQncyBgaXNDb25uZWN0ZWRgLiBOb3RlIHRoYXQgdGhpcyBtZXRob2RcbiAgICogc2hvdWxkIG9ubHkgYmUgY2FsbGVkIG9uIGBSb290UGFydGBzICh0aGUgYENoaWxkUGFydGAgcmV0dXJuZWQgZnJvbSBhXG4gICAqIHRvcC1sZXZlbCBgcmVuZGVyKClgIGNhbGwpLiBJdCBoYXMgbm8gZWZmZWN0IG9uIG5vbi1yb290IENoaWxkUGFydHMuXG4gICAqIEBwYXJhbSBpc0Nvbm5lY3RlZCBXaGV0aGVyIHRvIHNldFxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHNldENvbm5lY3RlZChpc0Nvbm5lY3RlZDogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl8kcGFyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX19pc0Nvbm5lY3RlZCA9IGlzQ29ubmVjdGVkO1xuICAgICAgdGhpcy5fJG5vdGlmeUNvbm5lY3Rpb25DaGFuZ2VkPy4oaXNDb25uZWN0ZWQpO1xuICAgIH0gZWxzZSBpZiAoREVWX01PREUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ3BhcnQuc2V0Q29ubmVjdGVkKCkgbWF5IG9ubHkgYmUgY2FsbGVkIG9uIGEgJyArXG4gICAgICAgICAgJ1Jvb3RQYXJ0IHJldHVybmVkIGZyb20gcmVuZGVyKCkuJ1xuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBIHRvcC1sZXZlbCBgQ2hpbGRQYXJ0YCByZXR1cm5lZCBmcm9tIGByZW5kZXJgIHRoYXQgbWFuYWdlcyB0aGUgY29ubmVjdGVkXG4gKiBzdGF0ZSBvZiBgQXN5bmNEaXJlY3RpdmVgcyBjcmVhdGVkIHRocm91Z2hvdXQgdGhlIHRyZWUgYmVsb3cgaXQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9vdFBhcnQgZXh0ZW5kcyBDaGlsZFBhcnQge1xuICAvKipcbiAgICogU2V0cyB0aGUgY29ubmVjdGlvbiBzdGF0ZSBmb3IgYEFzeW5jRGlyZWN0aXZlYHMgY29udGFpbmVkIHdpdGhpbiB0aGlzIHJvb3RcbiAgICogQ2hpbGRQYXJ0LlxuICAgKlxuICAgKiBsaXQtaHRtbCBkb2VzIG5vdCBhdXRvbWF0aWNhbGx5IG1vbml0b3IgdGhlIGNvbm5lY3RlZG5lc3Mgb2YgRE9NIHJlbmRlcmVkO1xuICAgKiBhcyBzdWNoLCBpdCBpcyB0aGUgcmVzcG9uc2liaWxpdHkgb2YgdGhlIGNhbGxlciB0byBgcmVuZGVyYCB0byBlbnN1cmUgdGhhdFxuICAgKiBgcGFydC5zZXRDb25uZWN0ZWQoZmFsc2UpYCBpcyBjYWxsZWQgYmVmb3JlIHRoZSBwYXJ0IG9iamVjdCBpcyBwb3RlbnRpYWxseVxuICAgKiBkaXNjYXJkZWQsIHRvIGVuc3VyZSB0aGF0IGBBc3luY0RpcmVjdGl2ZWBzIGhhdmUgYSBjaGFuY2UgdG8gZGlzcG9zZSBvZlxuICAgKiBhbnkgcmVzb3VyY2VzIGJlaW5nIGhlbGQuIElmIGEgYFJvb3RQYXJ0YCB0aGF0IHdhcyBwcmV2aW91c2x5XG4gICAqIGRpc2Nvbm5lY3RlZCBpcyBzdWJzZXF1ZW50bHkgcmUtY29ubmVjdGVkIChhbmQgaXRzIGBBc3luY0RpcmVjdGl2ZWBzIHNob3VsZFxuICAgKiByZS1jb25uZWN0KSwgYHNldENvbm5lY3RlZCh0cnVlKWAgc2hvdWxkIGJlIGNhbGxlZC5cbiAgICpcbiAgICogQHBhcmFtIGlzQ29ubmVjdGVkIFdoZXRoZXIgZGlyZWN0aXZlcyB3aXRoaW4gdGhpcyB0cmVlIHNob3VsZCBiZSBjb25uZWN0ZWRcbiAgICogb3Igbm90XG4gICAqL1xuICBzZXRDb25uZWN0ZWQoaXNDb25uZWN0ZWQ6IGJvb2xlYW4pOiB2b2lkO1xufVxuXG5leHBvcnQgdHlwZSB7QXR0cmlidXRlUGFydH07XG5jbGFzcyBBdHRyaWJ1dGVQYXJ0IGltcGxlbWVudHMgRGlzY29ubmVjdGFibGUge1xuICByZWFkb25seSB0eXBlOlxuICAgIHwgdHlwZW9mIEFUVFJJQlVURV9QQVJUXG4gICAgfCB0eXBlb2YgUFJPUEVSVFlfUEFSVFxuICAgIHwgdHlwZW9mIEJPT0xFQU5fQVRUUklCVVRFX1BBUlRcbiAgICB8IHR5cGVvZiBFVkVOVF9QQVJUID0gQVRUUklCVVRFX1BBUlQ7XG4gIHJlYWRvbmx5IGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gIHJlYWRvbmx5IG9wdGlvbnM6IFJlbmRlck9wdGlvbnMgfCB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIElmIHRoaXMgYXR0cmlidXRlIHBhcnQgcmVwcmVzZW50cyBhbiBpbnRlcnBvbGF0aW9uLCB0aGlzIGNvbnRhaW5zIHRoZVxuICAgKiBzdGF0aWMgc3RyaW5ncyBvZiB0aGUgaW50ZXJwb2xhdGlvbi4gRm9yIHNpbmdsZS12YWx1ZSwgY29tcGxldGUgYmluZGluZ3MsXG4gICAqIHRoaXMgaXMgdW5kZWZpbmVkLlxuICAgKi9cbiAgcmVhZG9ubHkgc3RyaW5ncz86IFJlYWRvbmx5QXJyYXk8c3RyaW5nPjtcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfJGNvbW1pdHRlZFZhbHVlOiB1bmtub3duIHwgQXJyYXk8dW5rbm93bj4gPSBub3RoaW5nO1xuICAvKiogQGludGVybmFsICovXG4gIF9fZGlyZWN0aXZlcz86IEFycmF5PERpcmVjdGl2ZSB8IHVuZGVmaW5lZD47XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgXyRwYXJlbnQ6IERpc2Nvbm5lY3RhYmxlO1xuICAvKiogQGludGVybmFsICovXG4gIF8kZGlzY29ubmVjdGFibGVDaGlsZHJlbj86IFNldDxEaXNjb25uZWN0YWJsZT4gPSB1bmRlZmluZWQ7XG5cbiAgcHJvdGVjdGVkIF9zYW5pdGl6ZXI6IFZhbHVlU2FuaXRpemVyIHwgdW5kZWZpbmVkO1xuXG4gIGdldCB0YWdOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQudGFnTmFtZTtcbiAgfVxuXG4gIC8vIFNlZSBjb21tZW50IGluIERpc2Nvbm5lY3RhYmxlIGludGVyZmFjZSBmb3Igd2h5IHRoaXMgaXMgYSBnZXR0ZXJcbiAgZ2V0IF8kaXNDb25uZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuXyRwYXJlbnQuXyRpc0Nvbm5lY3RlZDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBzdHJpbmdzOiBSZWFkb25seUFycmF5PHN0cmluZz4sXG4gICAgcGFyZW50OiBEaXNjb25uZWN0YWJsZSxcbiAgICBvcHRpb25zOiBSZW5kZXJPcHRpb25zIHwgdW5kZWZpbmVkXG4gICkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLl8kcGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgaWYgKHN0cmluZ3MubGVuZ3RoID4gMiB8fCBzdHJpbmdzWzBdICE9PSAnJyB8fCBzdHJpbmdzWzFdICE9PSAnJykge1xuICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID0gbmV3IEFycmF5KHN0cmluZ3MubGVuZ3RoIC0gMSkuZmlsbChuZXcgU3RyaW5nKCkpO1xuICAgICAgdGhpcy5zdHJpbmdzID0gc3RyaW5ncztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID0gbm90aGluZztcbiAgICB9XG4gICAgaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUykge1xuICAgICAgdGhpcy5fc2FuaXRpemVyID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiB0aGlzIHBhcnQgYnkgcmVzb2x2aW5nIHRoZSB2YWx1ZSBmcm9tIHBvc3NpYmx5IG11bHRpcGxlXG4gICAqIHZhbHVlcyBhbmQgc3RhdGljIHN0cmluZ3MgYW5kIGNvbW1pdHRpbmcgaXQgdG8gdGhlIERPTS5cbiAgICogSWYgdGhpcyBwYXJ0IGlzIHNpbmdsZS12YWx1ZWQsIGB0aGlzLl9zdHJpbmdzYCB3aWxsIGJlIHVuZGVmaW5lZCwgYW5kIHRoZVxuICAgKiBtZXRob2Qgd2lsbCBiZSBjYWxsZWQgd2l0aCBhIHNpbmdsZSB2YWx1ZSBhcmd1bWVudC4gSWYgdGhpcyBwYXJ0IGlzXG4gICAqIG11bHRpLXZhbHVlLCBgdGhpcy5fc3RyaW5nc2Agd2lsbCBiZSBkZWZpbmVkLCBhbmQgdGhlIG1ldGhvZCBpcyBjYWxsZWRcbiAgICogd2l0aCB0aGUgdmFsdWUgYXJyYXkgb2YgdGhlIHBhcnQncyBvd25pbmcgVGVtcGxhdGVJbnN0YW5jZSwgYW5kIGFuIG9mZnNldFxuICAgKiBpbnRvIHRoZSB2YWx1ZSBhcnJheSBmcm9tIHdoaWNoIHRoZSB2YWx1ZXMgc2hvdWxkIGJlIHJlYWQuXG4gICAqIFRoaXMgbWV0aG9kIGlzIG92ZXJsb2FkZWQgdGhpcyB3YXkgdG8gZWxpbWluYXRlIHNob3J0LWxpdmVkIGFycmF5IHNsaWNlc1xuICAgKiBvZiB0aGUgdGVtcGxhdGUgaW5zdGFuY2UgdmFsdWVzLCBhbmQgYWxsb3cgYSBmYXN0LXBhdGggZm9yIHNpbmdsZS12YWx1ZWRcbiAgICogcGFydHMuXG4gICAqXG4gICAqIEBwYXJhbSB2YWx1ZSBUaGUgcGFydCB2YWx1ZSwgb3IgYW4gYXJyYXkgb2YgdmFsdWVzIGZvciBtdWx0aS12YWx1ZWQgcGFydHNcbiAgICogQHBhcmFtIHZhbHVlSW5kZXggdGhlIGluZGV4IHRvIHN0YXJ0IHJlYWRpbmcgdmFsdWVzIGZyb20uIGB1bmRlZmluZWRgIGZvclxuICAgKiAgIHNpbmdsZS12YWx1ZWQgcGFydHNcbiAgICogQHBhcmFtIG5vQ29tbWl0IGNhdXNlcyB0aGUgcGFydCB0byBub3QgY29tbWl0IGl0cyB2YWx1ZSB0byB0aGUgRE9NLiBVc2VkXG4gICAqICAgaW4gaHlkcmF0aW9uIHRvIHByaW1lIGF0dHJpYnV0ZSBwYXJ0cyB3aXRoIHRoZWlyIGZpcnN0LXJlbmRlcmVkIHZhbHVlLFxuICAgKiAgIGJ1dCBub3Qgc2V0IHRoZSBhdHRyaWJ1dGUsIGFuZCBpbiBTU1IgdG8gbm8tb3AgdGhlIERPTSBvcGVyYXRpb24gYW5kXG4gICAqICAgY2FwdHVyZSB0aGUgdmFsdWUgZm9yIHNlcmlhbGl6YXRpb24uXG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgXyRzZXRWYWx1ZShcbiAgICB2YWx1ZTogdW5rbm93biB8IEFycmF5PHVua25vd24+LFxuICAgIGRpcmVjdGl2ZVBhcmVudDogRGlyZWN0aXZlUGFyZW50ID0gdGhpcyxcbiAgICB2YWx1ZUluZGV4PzogbnVtYmVyLFxuICAgIG5vQ29tbWl0PzogYm9vbGVhblxuICApIHtcbiAgICBjb25zdCBzdHJpbmdzID0gdGhpcy5zdHJpbmdzO1xuXG4gICAgLy8gV2hldGhlciBhbnkgb2YgdGhlIHZhbHVlcyBoYXMgY2hhbmdlZCwgZm9yIGRpcnR5LWNoZWNraW5nXG4gICAgbGV0IGNoYW5nZSA9IGZhbHNlO1xuXG4gICAgaWYgKHN0cmluZ3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gU2luZ2xlLXZhbHVlIGJpbmRpbmcgY2FzZVxuICAgICAgdmFsdWUgPSByZXNvbHZlRGlyZWN0aXZlKHRoaXMsIHZhbHVlLCBkaXJlY3RpdmVQYXJlbnQsIDApO1xuICAgICAgY2hhbmdlID1cbiAgICAgICAgIWlzUHJpbWl0aXZlKHZhbHVlKSB8fFxuICAgICAgICAodmFsdWUgIT09IHRoaXMuXyRjb21taXR0ZWRWYWx1ZSAmJiB2YWx1ZSAhPT0gbm9DaGFuZ2UpO1xuICAgICAgaWYgKGNoYW5nZSkge1xuICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSW50ZXJwb2xhdGlvbiBjYXNlXG4gICAgICBjb25zdCB2YWx1ZXMgPSB2YWx1ZSBhcyBBcnJheTx1bmtub3duPjtcbiAgICAgIHZhbHVlID0gc3RyaW5nc1swXTtcblxuICAgICAgbGV0IGksIHY7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgc3RyaW5ncy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgdiA9IHJlc29sdmVEaXJlY3RpdmUodGhpcywgdmFsdWVzW3ZhbHVlSW5kZXghICsgaV0sIGRpcmVjdGl2ZVBhcmVudCwgaSk7XG5cbiAgICAgICAgaWYgKHYgPT09IG5vQ2hhbmdlKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIHVzZXItcHJvdmlkZWQgdmFsdWUgaXMgYG5vQ2hhbmdlYCwgdXNlIHRoZSBwcmV2aW91cyB2YWx1ZVxuICAgICAgICAgIHYgPSAodGhpcy5fJGNvbW1pdHRlZFZhbHVlIGFzIEFycmF5PHVua25vd24+KVtpXTtcbiAgICAgICAgfVxuICAgICAgICBjaGFuZ2UgfHw9XG4gICAgICAgICAgIWlzUHJpbWl0aXZlKHYpIHx8IHYgIT09ICh0aGlzLl8kY29tbWl0dGVkVmFsdWUgYXMgQXJyYXk8dW5rbm93bj4pW2ldO1xuICAgICAgICBpZiAodiA9PT0gbm90aGluZykge1xuICAgICAgICAgIHZhbHVlID0gbm90aGluZztcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSAhPT0gbm90aGluZykge1xuICAgICAgICAgIHZhbHVlICs9ICh2ID8/ICcnKSArIHN0cmluZ3NbaSArIDFdO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdlIGFsd2F5cyByZWNvcmQgZWFjaCB2YWx1ZSwgZXZlbiBpZiBvbmUgaXMgYG5vdGhpbmdgLCBmb3IgZnV0dXJlXG4gICAgICAgIC8vIGNoYW5nZSBkZXRlY3Rpb24uXG4gICAgICAgICh0aGlzLl8kY29tbWl0dGVkVmFsdWUgYXMgQXJyYXk8dW5rbm93bj4pW2ldID0gdjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNoYW5nZSAmJiAhbm9Db21taXQpIHtcbiAgICAgIHRoaXMuX2NvbW1pdFZhbHVlKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9jb21taXRWYWx1ZSh2YWx1ZTogdW5rbm93bikge1xuICAgIGlmICh2YWx1ZSA9PT0gbm90aGluZykge1xuICAgICAgKHdyYXAodGhpcy5lbGVtZW50KSBhcyBFbGVtZW50KS5yZW1vdmVBdHRyaWJ1dGUodGhpcy5uYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUykge1xuICAgICAgICBpZiAodGhpcy5fc2FuaXRpemVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLl9zYW5pdGl6ZXIgPSBzYW5pdGl6ZXJGYWN0b3J5SW50ZXJuYWwoXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICAgICAgICB0aGlzLm5hbWUsXG4gICAgICAgICAgICAnYXR0cmlidXRlJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUgPSB0aGlzLl9zYW5pdGl6ZXIodmFsdWUgPz8gJycpO1xuICAgICAgfVxuICAgICAgZGVidWdMb2dFdmVudCAmJlxuICAgICAgICBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICBraW5kOiAnY29tbWl0IGF0dHJpYnV0ZScsXG4gICAgICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50LFxuICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgIH0pO1xuICAgICAgKHdyYXAodGhpcy5lbGVtZW50KSBhcyBFbGVtZW50KS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgIHRoaXMubmFtZSxcbiAgICAgICAgKHZhbHVlID8/ICcnKSBhcyBzdHJpbmdcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB0eXBlIHtQcm9wZXJ0eVBhcnR9O1xuY2xhc3MgUHJvcGVydHlQYXJ0IGV4dGVuZHMgQXR0cmlidXRlUGFydCB7XG4gIG92ZXJyaWRlIHJlYWRvbmx5IHR5cGUgPSBQUk9QRVJUWV9QQVJUO1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgb3ZlcnJpZGUgX2NvbW1pdFZhbHVlKHZhbHVlOiB1bmtub3duKSB7XG4gICAgaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUykge1xuICAgICAgaWYgKHRoaXMuX3Nhbml0aXplciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX3Nhbml0aXplciA9IHNhbml0aXplckZhY3RvcnlJbnRlcm5hbChcbiAgICAgICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICAgICAgdGhpcy5uYW1lLFxuICAgICAgICAgICdwcm9wZXJ0eSdcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHZhbHVlID0gdGhpcy5fc2FuaXRpemVyKHZhbHVlKTtcbiAgICB9XG4gICAgZGVidWdMb2dFdmVudCAmJlxuICAgICAgZGVidWdMb2dFdmVudCh7XG4gICAgICAgIGtpbmQ6ICdjb21taXQgcHJvcGVydHknLFxuICAgICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG4gICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgIH0pO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgKHRoaXMuZWxlbWVudCBhcyBhbnkpW3RoaXMubmFtZV0gPSB2YWx1ZSA9PT0gbm90aGluZyA/IHVuZGVmaW5lZCA6IHZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIHtCb29sZWFuQXR0cmlidXRlUGFydH07XG5jbGFzcyBCb29sZWFuQXR0cmlidXRlUGFydCBleHRlbmRzIEF0dHJpYnV0ZVBhcnQge1xuICBvdmVycmlkZSByZWFkb25seSB0eXBlID0gQk9PTEVBTl9BVFRSSUJVVEVfUEFSVDtcblxuICAvKiogQGludGVybmFsICovXG4gIG92ZXJyaWRlIF9jb21taXRWYWx1ZSh2YWx1ZTogdW5rbm93bikge1xuICAgIGRlYnVnTG9nRXZlbnQgJiZcbiAgICAgIGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICBraW5kOiAnY29tbWl0IGJvb2xlYW4gYXR0cmlidXRlJyxcbiAgICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50LFxuICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgIHZhbHVlOiAhISh2YWx1ZSAmJiB2YWx1ZSAhPT0gbm90aGluZyksXG4gICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgIH0pO1xuICAgICh3cmFwKHRoaXMuZWxlbWVudCkgYXMgRWxlbWVudCkudG9nZ2xlQXR0cmlidXRlKFxuICAgICAgdGhpcy5uYW1lLFxuICAgICAgISF2YWx1ZSAmJiB2YWx1ZSAhPT0gbm90aGluZ1xuICAgICk7XG4gIH1cbn1cblxudHlwZSBFdmVudExpc3RlbmVyV2l0aE9wdGlvbnMgPSBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0ICZcbiAgUGFydGlhbDxBZGRFdmVudExpc3RlbmVyT3B0aW9ucz47XG5cbi8qKlxuICogQW4gQXR0cmlidXRlUGFydCB0aGF0IG1hbmFnZXMgYW4gZXZlbnQgbGlzdGVuZXIgdmlhIGFkZC9yZW1vdmVFdmVudExpc3RlbmVyLlxuICpcbiAqIFRoaXMgcGFydCB3b3JrcyBieSBhZGRpbmcgaXRzZWxmIGFzIHRoZSBldmVudCBsaXN0ZW5lciBvbiBhbiBlbGVtZW50LCB0aGVuXG4gKiBkZWxlZ2F0aW5nIHRvIHRoZSB2YWx1ZSBwYXNzZWQgdG8gaXQuIFRoaXMgcmVkdWNlcyB0aGUgbnVtYmVyIG9mIGNhbGxzIHRvXG4gKiBhZGQvcmVtb3ZlRXZlbnRMaXN0ZW5lciBpZiB0aGUgbGlzdGVuZXIgY2hhbmdlcyBmcmVxdWVudGx5LCBzdWNoIGFzIHdoZW4gYW5cbiAqIGlubGluZSBmdW5jdGlvbiBpcyB1c2VkIGFzIGEgbGlzdGVuZXIuXG4gKlxuICogQmVjYXVzZSBldmVudCBvcHRpb25zIGFyZSBwYXNzZWQgd2hlbiBhZGRpbmcgbGlzdGVuZXJzLCB3ZSBtdXN0IHRha2UgY2FzZVxuICogdG8gYWRkIGFuZCByZW1vdmUgdGhlIHBhcnQgYXMgYSBsaXN0ZW5lciB3aGVuIHRoZSBldmVudCBvcHRpb25zIGNoYW5nZS5cbiAqL1xuZXhwb3J0IHR5cGUge0V2ZW50UGFydH07XG5jbGFzcyBFdmVudFBhcnQgZXh0ZW5kcyBBdHRyaWJ1dGVQYXJ0IHtcbiAgb3ZlcnJpZGUgcmVhZG9ubHkgdHlwZSA9IEVWRU5UX1BBUlQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIHN0cmluZ3M6IFJlYWRvbmx5QXJyYXk8c3RyaW5nPixcbiAgICBwYXJlbnQ6IERpc2Nvbm5lY3RhYmxlLFxuICAgIG9wdGlvbnM6IFJlbmRlck9wdGlvbnMgfCB1bmRlZmluZWRcbiAgKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgbmFtZSwgc3RyaW5ncywgcGFyZW50LCBvcHRpb25zKTtcblxuICAgIGlmIChERVZfTU9ERSAmJiB0aGlzLnN0cmluZ3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgQSBcXGA8JHtlbGVtZW50LmxvY2FsTmFtZX0+XFxgIGhhcyBhIFxcYEAke25hbWV9PS4uLlxcYCBsaXN0ZW5lciB3aXRoIGAgK1xuICAgICAgICAgICdpbnZhbGlkIGNvbnRlbnQuIEV2ZW50IGxpc3RlbmVycyBpbiB0ZW1wbGF0ZXMgbXVzdCBoYXZlIGV4YWN0bHkgJyArXG4gICAgICAgICAgJ29uZSBleHByZXNzaW9uIGFuZCBubyBzdXJyb3VuZGluZyB0ZXh0LidcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLy8gRXZlbnRQYXJ0IGRvZXMgbm90IHVzZSB0aGUgYmFzZSBfJHNldFZhbHVlL19yZXNvbHZlVmFsdWUgaW1wbGVtZW50YXRpb25cbiAgLy8gc2luY2UgdGhlIGRpcnR5IGNoZWNraW5nIGlzIG1vcmUgY29tcGxleFxuICAvKiogQGludGVybmFsICovXG4gIG92ZXJyaWRlIF8kc2V0VmFsdWUoXG4gICAgbmV3TGlzdGVuZXI6IHVua25vd24sXG4gICAgZGlyZWN0aXZlUGFyZW50OiBEaXJlY3RpdmVQYXJlbnQgPSB0aGlzXG4gICkge1xuICAgIG5ld0xpc3RlbmVyID1cbiAgICAgIHJlc29sdmVEaXJlY3RpdmUodGhpcywgbmV3TGlzdGVuZXIsIGRpcmVjdGl2ZVBhcmVudCwgMCkgPz8gbm90aGluZztcbiAgICBpZiAobmV3TGlzdGVuZXIgPT09IG5vQ2hhbmdlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG9sZExpc3RlbmVyID0gdGhpcy5fJGNvbW1pdHRlZFZhbHVlO1xuXG4gICAgLy8gSWYgdGhlIG5ldyB2YWx1ZSBpcyBub3RoaW5nIG9yIGFueSBvcHRpb25zIGNoYW5nZSB3ZSBoYXZlIHRvIHJlbW92ZSB0aGVcbiAgICAvLyBwYXJ0IGFzIGEgbGlzdGVuZXIuXG4gICAgY29uc3Qgc2hvdWxkUmVtb3ZlTGlzdGVuZXIgPVxuICAgICAgKG5ld0xpc3RlbmVyID09PSBub3RoaW5nICYmIG9sZExpc3RlbmVyICE9PSBub3RoaW5nKSB8fFxuICAgICAgKG5ld0xpc3RlbmVyIGFzIEV2ZW50TGlzdGVuZXJXaXRoT3B0aW9ucykuY2FwdHVyZSAhPT1cbiAgICAgICAgKG9sZExpc3RlbmVyIGFzIEV2ZW50TGlzdGVuZXJXaXRoT3B0aW9ucykuY2FwdHVyZSB8fFxuICAgICAgKG5ld0xpc3RlbmVyIGFzIEV2ZW50TGlzdGVuZXJXaXRoT3B0aW9ucykub25jZSAhPT1cbiAgICAgICAgKG9sZExpc3RlbmVyIGFzIEV2ZW50TGlzdGVuZXJXaXRoT3B0aW9ucykub25jZSB8fFxuICAgICAgKG5ld0xpc3RlbmVyIGFzIEV2ZW50TGlzdGVuZXJXaXRoT3B0aW9ucykucGFzc2l2ZSAhPT1cbiAgICAgICAgKG9sZExpc3RlbmVyIGFzIEV2ZW50TGlzdGVuZXJXaXRoT3B0aW9ucykucGFzc2l2ZTtcblxuICAgIC8vIElmIHRoZSBuZXcgdmFsdWUgaXMgbm90IG5vdGhpbmcgYW5kIHdlIHJlbW92ZWQgdGhlIGxpc3RlbmVyLCB3ZSBoYXZlXG4gICAgLy8gdG8gYWRkIHRoZSBwYXJ0IGFzIGEgbGlzdGVuZXIuXG4gICAgY29uc3Qgc2hvdWxkQWRkTGlzdGVuZXIgPVxuICAgICAgbmV3TGlzdGVuZXIgIT09IG5vdGhpbmcgJiZcbiAgICAgIChvbGRMaXN0ZW5lciA9PT0gbm90aGluZyB8fCBzaG91bGRSZW1vdmVMaXN0ZW5lcik7XG5cbiAgICBkZWJ1Z0xvZ0V2ZW50ICYmXG4gICAgICBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAga2luZDogJ2NvbW1pdCBldmVudCBsaXN0ZW5lcicsXG4gICAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcbiAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICB2YWx1ZTogbmV3TGlzdGVuZXIsXG4gICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgcmVtb3ZlTGlzdGVuZXI6IHNob3VsZFJlbW92ZUxpc3RlbmVyLFxuICAgICAgICBhZGRMaXN0ZW5lcjogc2hvdWxkQWRkTGlzdGVuZXIsXG4gICAgICAgIG9sZExpc3RlbmVyLFxuICAgICAgfSk7XG4gICAgaWYgKHNob3VsZFJlbW92ZUxpc3RlbmVyKSB7XG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgdGhpcy5uYW1lLFxuICAgICAgICB0aGlzLFxuICAgICAgICBvbGRMaXN0ZW5lciBhcyBFdmVudExpc3RlbmVyV2l0aE9wdGlvbnNcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChzaG91bGRBZGRMaXN0ZW5lcikge1xuICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgIHRoaXMubmFtZSxcbiAgICAgICAgdGhpcyxcbiAgICAgICAgbmV3TGlzdGVuZXIgYXMgRXZlbnRMaXN0ZW5lcldpdGhPcHRpb25zXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSBuZXdMaXN0ZW5lcjtcbiAgfVxuXG4gIGhhbmRsZUV2ZW50KGV2ZW50OiBFdmVudCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUuY2FsbCh0aGlzLm9wdGlvbnM/Lmhvc3QgPz8gdGhpcy5lbGVtZW50LCBldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICh0aGlzLl8kY29tbWl0dGVkVmFsdWUgYXMgRXZlbnRMaXN0ZW5lck9iamVjdCkuaGFuZGxlRXZlbnQoZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgdHlwZSB7RWxlbWVudFBhcnR9O1xuY2xhc3MgRWxlbWVudFBhcnQgaW1wbGVtZW50cyBEaXNjb25uZWN0YWJsZSB7XG4gIHJlYWRvbmx5IHR5cGUgPSBFTEVNRU5UX1BBUlQ7XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfX2RpcmVjdGl2ZT86IERpcmVjdGl2ZTtcblxuICAvLyBUaGlzIGlzIHRvIGVuc3VyZSB0aGF0IGV2ZXJ5IFBhcnQgaGFzIGEgXyRjb21taXR0ZWRWYWx1ZVxuICBfJGNvbW1pdHRlZFZhbHVlOiB1bmRlZmluZWQ7XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfJHBhcmVudCE6IERpc2Nvbm5lY3RhYmxlO1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgXyRkaXNjb25uZWN0YWJsZUNoaWxkcmVuPzogU2V0PERpc2Nvbm5lY3RhYmxlPiA9IHVuZGVmaW5lZDtcblxuICBvcHRpb25zOiBSZW5kZXJPcHRpb25zIHwgdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtZW50OiBFbGVtZW50LFxuICAgIHBhcmVudDogRGlzY29ubmVjdGFibGUsXG4gICAgb3B0aW9uczogUmVuZGVyT3B0aW9ucyB8IHVuZGVmaW5lZFxuICApIHtcbiAgICB0aGlzLl8kcGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICAvLyBTZWUgY29tbWVudCBpbiBEaXNjb25uZWN0YWJsZSBpbnRlcmZhY2UgZm9yIHdoeSB0aGlzIGlzIGEgZ2V0dGVyXG4gIGdldCBfJGlzQ29ubmVjdGVkKCkge1xuICAgIHJldHVybiB0aGlzLl8kcGFyZW50Ll8kaXNDb25uZWN0ZWQ7XG4gIH1cblxuICBfJHNldFZhbHVlKHZhbHVlOiB1bmtub3duKTogdm9pZCB7XG4gICAgZGVidWdMb2dFdmVudCAmJlxuICAgICAgZGVidWdMb2dFdmVudCh7XG4gICAgICAgIGtpbmQ6ICdjb21taXQgdG8gZWxlbWVudCBiaW5kaW5nJyxcbiAgICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50LFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgfSk7XG4gICAgcmVzb2x2ZURpcmVjdGl2ZSh0aGlzLCB2YWx1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBFTkQgVVNFUlMgU0hPVUxEIE5PVCBSRUxZIE9OIFRISVMgT0JKRUNULlxuICpcbiAqIFByaXZhdGUgZXhwb3J0cyBmb3IgdXNlIGJ5IG90aGVyIExpdCBwYWNrYWdlcywgbm90IGludGVuZGVkIGZvciB1c2UgYnlcbiAqIGV4dGVybmFsIHVzZXJzLlxuICpcbiAqIFdlIGN1cnJlbnRseSBkbyBub3QgbWFrZSBhIG1hbmdsZWQgcm9sbHVwIGJ1aWxkIG9mIHRoZSBsaXQtc3NyIGNvZGUuIEluIG9yZGVyXG4gKiB0byBrZWVwIGEgbnVtYmVyIG9mIChvdGhlcndpc2UgcHJpdmF0ZSkgdG9wLWxldmVsIGV4cG9ydHMgbWFuZ2xlZCBpbiB0aGVcbiAqIGNsaWVudCBzaWRlIGNvZGUsIHdlIGV4cG9ydCBhIF8kTEggb2JqZWN0IGNvbnRhaW5pbmcgdGhvc2UgbWVtYmVycyAob3JcbiAqIGhlbHBlciBtZXRob2RzIGZvciBhY2Nlc3NpbmcgcHJpdmF0ZSBmaWVsZHMgb2YgdGhvc2UgbWVtYmVycyksIGFuZCB0aGVuXG4gKiByZS1leHBvcnQgdGhlbSBmb3IgdXNlIGluIGxpdC1zc3IuIFRoaXMga2VlcHMgbGl0LXNzciBhZ25vc3RpYyB0byB3aGV0aGVyIHRoZVxuICogY2xpZW50LXNpZGUgY29kZSBpcyBiZWluZyB1c2VkIGluIGBkZXZgIG1vZGUgb3IgYHByb2RgIG1vZGUuXG4gKlxuICogVGhpcyBoYXMgYSB1bmlxdWUgbmFtZSwgdG8gZGlzYW1iaWd1YXRlIGl0IGZyb20gcHJpdmF0ZSBleHBvcnRzIGluXG4gKiBsaXQtZWxlbWVudCwgd2hpY2ggcmUtZXhwb3J0cyBhbGwgb2YgbGl0LWh0bWwuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IF8kTEggPSB7XG4gIC8vIFVzZWQgaW4gbGl0LXNzclxuICBfYm91bmRBdHRyaWJ1dGVTdWZmaXg6IGJvdW5kQXR0cmlidXRlU3VmZml4LFxuICBfbWFya2VyOiBtYXJrZXIsXG4gIF9tYXJrZXJNYXRjaDogbWFya2VyTWF0Y2gsXG4gIF9IVE1MX1JFU1VMVDogSFRNTF9SRVNVTFQsXG4gIF9nZXRUZW1wbGF0ZUh0bWw6IGdldFRlbXBsYXRlSHRtbCxcbiAgLy8gVXNlZCBpbiB0ZXN0cyBhbmQgcHJpdmF0ZS1zc3Itc3VwcG9ydFxuICBfVGVtcGxhdGVJbnN0YW5jZTogVGVtcGxhdGVJbnN0YW5jZSxcbiAgX2lzSXRlcmFibGU6IGlzSXRlcmFibGUsXG4gIF9yZXNvbHZlRGlyZWN0aXZlOiByZXNvbHZlRGlyZWN0aXZlLFxuICBfQ2hpbGRQYXJ0OiBDaGlsZFBhcnQsXG4gIF9BdHRyaWJ1dGVQYXJ0OiBBdHRyaWJ1dGVQYXJ0LFxuICBfQm9vbGVhbkF0dHJpYnV0ZVBhcnQ6IEJvb2xlYW5BdHRyaWJ1dGVQYXJ0LFxuICBfRXZlbnRQYXJ0OiBFdmVudFBhcnQsXG4gIF9Qcm9wZXJ0eVBhcnQ6IFByb3BlcnR5UGFydCxcbiAgX0VsZW1lbnRQYXJ0OiBFbGVtZW50UGFydCxcbn07XG5cbi8vIEFwcGx5IHBvbHlmaWxscyBpZiBhdmFpbGFibGVcbmNvbnN0IHBvbHlmaWxsU3VwcG9ydCA9IERFVl9NT0RFXG4gID8gZ2xvYmFsLmxpdEh0bWxQb2x5ZmlsbFN1cHBvcnREZXZNb2RlXG4gIDogZ2xvYmFsLmxpdEh0bWxQb2x5ZmlsbFN1cHBvcnQ7XG5wb2x5ZmlsbFN1cHBvcnQ/LihUZW1wbGF0ZSwgQ2hpbGRQYXJ0KTtcblxuLy8gSU1QT1JUQU5UOiBkbyBub3QgY2hhbmdlIHRoZSBwcm9wZXJ0eSBuYW1lIG9yIHRoZSBhc3NpZ25tZW50IGV4cHJlc3Npb24uXG4vLyBUaGlzIGxpbmUgd2lsbCBiZSB1c2VkIGluIHJlZ2V4ZXMgdG8gc2VhcmNoIGZvciBsaXQtaHRtbCB1c2FnZS5cbihnbG9iYWwubGl0SHRtbFZlcnNpb25zID8/PSBbXSkucHVzaCgnMy4zLjInKTtcbmlmIChERVZfTU9ERSAmJiBnbG9iYWwubGl0SHRtbFZlcnNpb25zLmxlbmd0aCA+IDEpIHtcbiAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xuICAgIGlzc3VlV2FybmluZyEoXG4gICAgICAnbXVsdGlwbGUtdmVyc2lvbnMnLFxuICAgICAgYE11bHRpcGxlIHZlcnNpb25zIG9mIExpdCBsb2FkZWQuIGAgK1xuICAgICAgICBgTG9hZGluZyBtdWx0aXBsZSB2ZXJzaW9ucyBpcyBub3QgcmVjb21tZW5kZWQuYFxuICAgICk7XG4gIH0pO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgYSB2YWx1ZSwgdXN1YWxseSBhIGxpdC1odG1sIFRlbXBsYXRlUmVzdWx0LCB0byB0aGUgY29udGFpbmVyLlxuICpcbiAqIFRoaXMgZXhhbXBsZSByZW5kZXJzIHRoZSB0ZXh0IFwiSGVsbG8sIFpvZSFcIiBpbnNpZGUgYSBwYXJhZ3JhcGggdGFnLCBhcHBlbmRpbmdcbiAqIGl0IHRvIHRoZSBjb250YWluZXIgYGRvY3VtZW50LmJvZHlgLlxuICpcbiAqIGBgYGpzXG4gKiBpbXBvcnQge2h0bWwsIHJlbmRlcn0gZnJvbSAnbGl0JztcbiAqXG4gKiBjb25zdCBuYW1lID0gXCJab2VcIjtcbiAqIHJlbmRlcihodG1sYDxwPkhlbGxvLCAke25hbWV9ITwvcD5gLCBkb2N1bWVudC5ib2R5KTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB2YWx1ZSBBbnkgW3JlbmRlcmFibGVcbiAqICAgdmFsdWVdKGh0dHBzOi8vbGl0LmRldi9kb2NzL3RlbXBsYXRlcy9leHByZXNzaW9ucy8jY2hpbGQtZXhwcmVzc2lvbnMpLFxuICogICB0eXBpY2FsbHkgYSB7QGxpbmtjb2RlIFRlbXBsYXRlUmVzdWx0fSBjcmVhdGVkIGJ5IGV2YWx1YXRpbmcgYSB0ZW1wbGF0ZSB0YWdcbiAqICAgbGlrZSB7QGxpbmtjb2RlIGh0bWx9IG9yIHtAbGlua2NvZGUgc3ZnfS5cbiAqIEBwYXJhbSBjb250YWluZXIgQSBET00gY29udGFpbmVyIHRvIHJlbmRlciB0by4gVGhlIGZpcnN0IHJlbmRlciB3aWxsIGFwcGVuZFxuICogICB0aGUgcmVuZGVyZWQgdmFsdWUgdG8gdGhlIGNvbnRhaW5lciwgYW5kIHN1YnNlcXVlbnQgcmVuZGVycyB3aWxsXG4gKiAgIGVmZmljaWVudGx5IHVwZGF0ZSB0aGUgcmVuZGVyZWQgdmFsdWUgaWYgdGhlIHNhbWUgcmVzdWx0IHR5cGUgd2FzXG4gKiAgIHByZXZpb3VzbHkgcmVuZGVyZWQgdGhlcmUuXG4gKiBAcGFyYW0gb3B0aW9ucyBTZWUge0BsaW5rY29kZSBSZW5kZXJPcHRpb25zfSBmb3Igb3B0aW9ucyBkb2N1bWVudGF0aW9uLlxuICogQHNlZVxuICoge0BsaW5rIGh0dHBzOi8vbGl0LmRldi9kb2NzL2xpYnJhcmllcy9zdGFuZGFsb25lLXRlbXBsYXRlcy8jcmVuZGVyaW5nLWxpdC1odG1sLXRlbXBsYXRlc3wgUmVuZGVyaW5nIExpdCBIVE1MIFRlbXBsYXRlc31cbiAqL1xuZXhwb3J0IGNvbnN0IHJlbmRlciA9IChcbiAgdmFsdWU6IHVua25vd24sXG4gIGNvbnRhaW5lcjogUmVuZGVyUm9vdE5vZGUsXG4gIG9wdGlvbnM/OiBSZW5kZXJPcHRpb25zXG4pOiBSb290UGFydCA9PiB7XG4gIGlmIChERVZfTU9ERSAmJiBjb250YWluZXIgPT0gbnVsbCkge1xuICAgIC8vIEdpdmUgYSBjbGVhcmVyIGVycm9yIG1lc3NhZ2UgdGhhblxuICAgIC8vICAgICBVbmNhdWdodCBUeXBlRXJyb3I6IENhbm5vdCByZWFkIHByb3BlcnRpZXMgb2YgbnVsbCAocmVhZGluZ1xuICAgIC8vICAgICAnXyRsaXRQYXJ0JCcpXG4gICAgLy8gd2hpY2ggcmVhZHMgbGlrZSBhbiBpbnRlcm5hbCBMaXQgZXJyb3IuXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIGNvbnRhaW5lciB0byByZW5kZXIgaW50byBtYXkgbm90IGJlICR7Y29udGFpbmVyfWApO1xuICB9XG4gIGNvbnN0IHJlbmRlcklkID0gREVWX01PREUgPyBkZWJ1Z0xvZ1JlbmRlcklkKysgOiAwO1xuICBjb25zdCBwYXJ0T3duZXJOb2RlID0gb3B0aW9ucz8ucmVuZGVyQmVmb3JlID8/IGNvbnRhaW5lcjtcbiAgLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgbGV0IHBhcnQ6IENoaWxkUGFydCA9IChwYXJ0T3duZXJOb2RlIGFzIGFueSlbJ18kbGl0UGFydCQnXTtcbiAgZGVidWdMb2dFdmVudCAmJlxuICAgIGRlYnVnTG9nRXZlbnQoe1xuICAgICAga2luZDogJ2JlZ2luIHJlbmRlcicsXG4gICAgICBpZDogcmVuZGVySWQsXG4gICAgICB2YWx1ZSxcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIG9wdGlvbnMsXG4gICAgICBwYXJ0LFxuICAgIH0pO1xuICBpZiAocGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgZW5kTm9kZSA9IG9wdGlvbnM/LnJlbmRlckJlZm9yZSA/PyBudWxsO1xuICAgIC8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAocGFydE93bmVyTm9kZSBhcyBhbnkpWydfJGxpdFBhcnQkJ10gPSBwYXJ0ID0gbmV3IENoaWxkUGFydChcbiAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUoY3JlYXRlTWFya2VyKCksIGVuZE5vZGUpLFxuICAgICAgZW5kTm9kZSxcbiAgICAgIHVuZGVmaW5lZCxcbiAgICAgIG9wdGlvbnMgPz8ge31cbiAgICApO1xuICB9XG4gIHBhcnQuXyRzZXRWYWx1ZSh2YWx1ZSk7XG4gIGRlYnVnTG9nRXZlbnQgJiZcbiAgICBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgIGtpbmQ6ICdlbmQgcmVuZGVyJyxcbiAgICAgIGlkOiByZW5kZXJJZCxcbiAgICAgIHZhbHVlLFxuICAgICAgY29udGFpbmVyLFxuICAgICAgb3B0aW9ucyxcbiAgICAgIHBhcnQsXG4gICAgfSk7XG4gIHJldHVybiBwYXJ0IGFzIFJvb3RQYXJ0O1xufTtcblxuaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUykge1xuICByZW5kZXIuc2V0U2FuaXRpemVyID0gc2V0U2FuaXRpemVyO1xuICByZW5kZXIuY3JlYXRlU2FuaXRpemVyID0gY3JlYXRlU2FuaXRpemVyO1xuICBpZiAoREVWX01PREUpIHtcbiAgICByZW5kZXIuX3Rlc3RPbmx5Q2xlYXJTYW5pdGl6ZXJGYWN0b3J5RG9Ob3RDYWxsT3JFbHNlID1cbiAgICAgIF90ZXN0T25seUNsZWFyU2FuaXRpemVyRmFjdG9yeURvTm90Q2FsbE9yRWxzZTtcbiAgfVxufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuXG4vKipcbiAqIFRoZSBtYWluIExpdEVsZW1lbnQgbW9kdWxlLCB3aGljaCBkZWZpbmVzIHRoZSB7QGxpbmtjb2RlIExpdEVsZW1lbnR9IGJhc2VcbiAqIGNsYXNzIGFuZCByZWxhdGVkIEFQSXMuXG4gKlxuICogTGl0RWxlbWVudCBjb21wb25lbnRzIGNhbiBkZWZpbmUgYSB0ZW1wbGF0ZSBhbmQgYSBzZXQgb2Ygb2JzZXJ2ZWRcbiAqIHByb3BlcnRpZXMuIENoYW5naW5nIGFuIG9ic2VydmVkIHByb3BlcnR5IHRyaWdnZXJzIGEgcmUtcmVuZGVyIG9mIHRoZVxuICogZWxlbWVudC5cbiAqXG4gKiBJbXBvcnQge0BsaW5rY29kZSBMaXRFbGVtZW50fSBhbmQge0BsaW5rY29kZSBodG1sfSBmcm9tIHRoaXMgbW9kdWxlIHRvXG4gKiBjcmVhdGUgYSBjb21wb25lbnQ6XG4gKlxuICogIGBgYGpzXG4gKiBpbXBvcnQge0xpdEVsZW1lbnQsIGh0bWx9IGZyb20gJ2xpdC1lbGVtZW50JztcbiAqXG4gKiBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAqXG4gKiAgIC8vIERlY2xhcmUgb2JzZXJ2ZWQgcHJvcGVydGllc1xuICogICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gKiAgICAgcmV0dXJuIHtcbiAqICAgICAgIGFkamVjdGl2ZToge31cbiAqICAgICB9XG4gKiAgIH1cbiAqXG4gKiAgIGNvbnN0cnVjdG9yKCkge1xuICogICAgIHRoaXMuYWRqZWN0aXZlID0gJ2F3ZXNvbWUnO1xuICogICB9XG4gKlxuICogICAvLyBEZWZpbmUgdGhlIGVsZW1lbnQncyB0ZW1wbGF0ZVxuICogICByZW5kZXIoKSB7XG4gKiAgICAgcmV0dXJuIGh0bWxgPHA+eW91ciAke2FkamVjdGl2ZX0gdGVtcGxhdGUgaGVyZTwvcD5gO1xuICogICB9XG4gKiB9XG4gKlxuICogY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdteS1lbGVtZW50JywgTXlFbGVtZW50KTtcbiAqIGBgYFxuICpcbiAqIGBMaXRFbGVtZW50YCBleHRlbmRzIHtAbGlua2NvZGUgUmVhY3RpdmVFbGVtZW50fSBhbmQgYWRkcyBsaXQtaHRtbFxuICogdGVtcGxhdGluZy4gVGhlIGBSZWFjdGl2ZUVsZW1lbnRgIGNsYXNzIGlzIHByb3ZpZGVkIGZvciB1c2VycyB0aGF0IHdhbnQgdG9cbiAqIGJ1aWxkIHRoZWlyIG93biBjdXN0b20gZWxlbWVudCBiYXNlIGNsYXNzZXMgdGhhdCBkb24ndCB1c2UgbGl0LWh0bWwuXG4gKlxuICogQHBhY2thZ2VEb2N1bWVudGF0aW9uXG4gKi9cbmltcG9ydCB7UHJvcGVydHlWYWx1ZXMsIFJlYWN0aXZlRWxlbWVudH0gZnJvbSAnQGxpdC9yZWFjdGl2ZS1lbGVtZW50JztcbmltcG9ydCB7cmVuZGVyLCBSZW5kZXJPcHRpb25zLCBub0NoYW5nZSwgUm9vdFBhcnR9IGZyb20gJ2xpdC1odG1sJztcbmV4cG9ydCAqIGZyb20gJ0BsaXQvcmVhY3RpdmUtZWxlbWVudCc7XG5leHBvcnQgKiBmcm9tICdsaXQtaHRtbCc7XG5cbmltcG9ydCB7TGl0VW5zdGFibGV9IGZyb20gJ2xpdC1odG1sJztcbmltcG9ydCB7UmVhY3RpdmVVbnN0YWJsZX0gZnJvbSAnQGxpdC9yZWFjdGl2ZS1lbGVtZW50JztcblxuLyoqXG4gKiBDb250YWlucyB0eXBlcyB0aGF0IGFyZSBwYXJ0IG9mIHRoZSB1bnN0YWJsZSBkZWJ1ZyBBUEkuXG4gKlxuICogRXZlcnl0aGluZyBpbiB0aGlzIEFQSSBpcyBub3Qgc3RhYmxlIGFuZCBtYXkgY2hhbmdlIG9yIGJlIHJlbW92ZWQgaW4gdGhlIGZ1dHVyZSxcbiAqIGV2ZW4gb24gcGF0Y2ggcmVsZWFzZXMuXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbmFtZXNwYWNlXG5leHBvcnQgbmFtZXNwYWNlIFVuc3RhYmxlIHtcbiAgLyoqXG4gICAqIFdoZW4gTGl0IGlzIHJ1bm5pbmcgaW4gZGV2IG1vZGUgYW5kIGB3aW5kb3cuZW1pdExpdERlYnVnTG9nRXZlbnRzYCBpcyB0cnVlLFxuICAgKiB3ZSB3aWxsIGVtaXQgJ2xpdC1kZWJ1ZycgZXZlbnRzIHRvIHdpbmRvdywgd2l0aCBsaXZlIGRldGFpbHMgYWJvdXQgdGhlIHVwZGF0ZSBhbmQgcmVuZGVyXG4gICAqIGxpZmVjeWNsZS4gVGhlc2UgY2FuIGJlIHVzZWZ1bCBmb3Igd3JpdGluZyBkZWJ1ZyB0b29saW5nIGFuZCB2aXN1YWxpemF0aW9ucy5cbiAgICpcbiAgICogUGxlYXNlIGJlIGF3YXJlIHRoYXQgcnVubmluZyB3aXRoIHdpbmRvdy5lbWl0TGl0RGVidWdMb2dFdmVudHMgaGFzIHBlcmZvcm1hbmNlIG92ZXJoZWFkLFxuICAgKiBtYWtpbmcgY2VydGFpbiBvcGVyYXRpb25zIHRoYXQgYXJlIG5vcm1hbGx5IHZlcnkgY2hlYXAgKGxpa2UgYSBuby1vcCByZW5kZXIpIG11Y2ggc2xvd2VyLFxuICAgKiBiZWNhdXNlIHdlIG11c3QgY29weSBkYXRhIGFuZCBkaXNwYXRjaCBldmVudHMuXG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5hbWVzcGFjZVxuICBleHBvcnQgbmFtZXNwYWNlIERlYnVnTG9nIHtcbiAgICBleHBvcnQgdHlwZSBFbnRyeSA9XG4gICAgICB8IExpdFVuc3RhYmxlLkRlYnVnTG9nLkVudHJ5XG4gICAgICB8IFJlYWN0aXZlVW5zdGFibGUuRGVidWdMb2cuRW50cnk7XG4gIH1cbn1cbi8qXG4gKiBXaGVuIHVzaW5nIENsb3N1cmUgQ29tcGlsZXIsIEpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkocHJvcGVydHksIG9iamVjdCkgaXNcbiAqIHJlcGxhY2VkIGF0IGNvbXBpbGUgdGltZSBieSB0aGUgbXVuZ2VkIG5hbWUgZm9yIG9iamVjdFtwcm9wZXJ0eV0uIFdlIGNhbm5vdFxuICogYWxpYXMgdGhpcyBmdW5jdGlvbiwgc28gd2UgaGF2ZSB0byB1c2UgYSBzbWFsbCBzaGltIHRoYXQgaGFzIHRoZSBzYW1lXG4gKiBiZWhhdmlvciB3aGVuIG5vdCBjb21waWxpbmcuXG4gKi9cbi8qQF9fSU5MSU5FX18qL1xuY29uc3QgSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eSA9IDxQIGV4dGVuZHMgUHJvcGVydHlLZXk+KFxuICBwcm9wOiBQLFxuICBfb2JqOiB1bmtub3duXG4pOiBQID0+IHByb3A7XG5cbmNvbnN0IERFVl9NT0RFID0gdHJ1ZTtcbi8vIEFsbG93cyBtaW5pZmllcnMgdG8gcmVuYW1lIHJlZmVyZW5jZXMgdG8gZ2xvYmFsVGhpc1xuY29uc3QgZ2xvYmFsID0gZ2xvYmFsVGhpcztcblxubGV0IGlzc3VlV2FybmluZzogKGNvZGU6IHN0cmluZywgd2FybmluZzogc3RyaW5nKSA9PiB2b2lkO1xuXG5pZiAoREVWX01PREUpIHtcbiAgLy8gRW5zdXJlIHdhcm5pbmdzIGFyZSBpc3N1ZWQgb25seSAxeCwgZXZlbiBpZiBtdWx0aXBsZSB2ZXJzaW9ucyBvZiBMaXRcbiAgLy8gYXJlIGxvYWRlZC5cbiAgZ2xvYmFsLmxpdElzc3VlZFdhcm5pbmdzID8/PSBuZXcgU2V0KCk7XG5cbiAgLyoqXG4gICAqIElzc3VlIGEgd2FybmluZyBpZiB3ZSBoYXZlbid0IGFscmVhZHksIGJhc2VkIGVpdGhlciBvbiBgY29kZWAgb3IgYHdhcm5pbmdgLlxuICAgKiBXYXJuaW5ncyBhcmUgZGlzYWJsZWQgYXV0b21hdGljYWxseSBvbmx5IGJ5IGB3YXJuaW5nYDsgZGlzYWJsaW5nIHZpYSBgY29kZWBcbiAgICogY2FuIGJlIGRvbmUgYnkgdXNlcnMuXG4gICAqL1xuICBpc3N1ZVdhcm5pbmcgPSAoY29kZTogc3RyaW5nLCB3YXJuaW5nOiBzdHJpbmcpID0+IHtcbiAgICB3YXJuaW5nICs9IGAgU2VlIGh0dHBzOi8vbGl0LmRldi9tc2cvJHtjb2RlfSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO1xuICAgIGlmIChcbiAgICAgICFnbG9iYWwubGl0SXNzdWVkV2FybmluZ3MhLmhhcyh3YXJuaW5nKSAmJlxuICAgICAgIWdsb2JhbC5saXRJc3N1ZWRXYXJuaW5ncyEuaGFzKGNvZGUpXG4gICAgKSB7XG4gICAgICBjb25zb2xlLndhcm4od2FybmluZyk7XG4gICAgICBnbG9iYWwubGl0SXNzdWVkV2FybmluZ3MhLmFkZCh3YXJuaW5nKTtcbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogQmFzZSBlbGVtZW50IGNsYXNzIHRoYXQgbWFuYWdlcyBlbGVtZW50IHByb3BlcnRpZXMgYW5kIGF0dHJpYnV0ZXMsIGFuZFxuICogcmVuZGVycyBhIGxpdC1odG1sIHRlbXBsYXRlLlxuICpcbiAqIFRvIGRlZmluZSBhIGNvbXBvbmVudCwgc3ViY2xhc3MgYExpdEVsZW1lbnRgIGFuZCBpbXBsZW1lbnQgYVxuICogYHJlbmRlcmAgbWV0aG9kIHRvIHByb3ZpZGUgdGhlIGNvbXBvbmVudCdzIHRlbXBsYXRlLiBEZWZpbmUgcHJvcGVydGllc1xuICogdXNpbmcgdGhlIHtAbGlua2NvZGUgTGl0RWxlbWVudC5wcm9wZXJ0aWVzIHByb3BlcnRpZXN9IHByb3BlcnR5IG9yIHRoZVxuICoge0BsaW5rY29kZSBwcm9wZXJ0eX0gZGVjb3JhdG9yLlxuICovXG5leHBvcnQgY2xhc3MgTGl0RWxlbWVudCBleHRlbmRzIFJlYWN0aXZlRWxlbWVudCB7XG4gIC8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG4gIHN0YXRpYyBbJ18kbGl0RWxlbWVudCQnXSA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEBjYXRlZ29yeSByZW5kZXJpbmdcbiAgICovXG4gIHJlYWRvbmx5IHJlbmRlck9wdGlvbnM6IFJlbmRlck9wdGlvbnMgPSB7aG9zdDogdGhpc307XG5cbiAgcHJpdmF0ZSBfX2NoaWxkUGFydDogUm9vdFBhcnQgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIEBjYXRlZ29yeSByZW5kZXJpbmdcbiAgICovXG4gIHByb3RlY3RlZCBvdmVycmlkZSBjcmVhdGVSZW5kZXJSb290KCkge1xuICAgIGNvbnN0IHJlbmRlclJvb3QgPSBzdXBlci5jcmVhdGVSZW5kZXJSb290KCk7XG4gICAgLy8gV2hlbiBhZG9wdGVkU3R5bGVTaGVldHMgYXJlIHNoaW1tZWQsIHRoZXkgYXJlIGluc2VydGVkIGludG8gdGhlXG4gICAgLy8gc2hhZG93Um9vdCBieSBjcmVhdGVSZW5kZXJSb290LiBBZGp1c3QgdGhlIHJlbmRlckJlZm9yZSBub2RlIHNvIHRoYXRcbiAgICAvLyBhbnkgc3R5bGVzIGluIExpdCBjb250ZW50IHJlbmRlciBiZWZvcmUgYWRvcHRlZFN0eWxlU2hlZXRzLiBUaGlzIGlzXG4gICAgLy8gaW1wb3J0YW50IHNvIHRoYXQgYWRvcHRlZFN0eWxlU2hlZXRzIGhhdmUgcHJlY2VkZW5jZSBvdmVyIHN0eWxlcyBpblxuICAgIC8vIHRoZSBzaGFkb3dSb290LlxuICAgIHRoaXMucmVuZGVyT3B0aW9ucy5yZW5kZXJCZWZvcmUgPz89IHJlbmRlclJvb3QhLmZpcnN0Q2hpbGQgYXMgQ2hpbGROb2RlO1xuICAgIHJldHVybiByZW5kZXJSb290O1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIGVsZW1lbnQuIFRoaXMgbWV0aG9kIHJlZmxlY3RzIHByb3BlcnR5IHZhbHVlcyB0byBhdHRyaWJ1dGVzXG4gICAqIGFuZCBjYWxscyBgcmVuZGVyYCB0byByZW5kZXIgRE9NIHZpYSBsaXQtaHRtbC4gU2V0dGluZyBwcm9wZXJ0aWVzIGluc2lkZVxuICAgKiB0aGlzIG1ldGhvZCB3aWxsICpub3QqIHRyaWdnZXIgYW5vdGhlciB1cGRhdGUuXG4gICAqIEBwYXJhbSBjaGFuZ2VkUHJvcGVydGllcyBNYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzIHdpdGggb2xkIHZhbHVlc1xuICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgKi9cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIHVwZGF0ZShjaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICAvLyBTZXR0aW5nIHByb3BlcnRpZXMgaW4gYHJlbmRlcmAgc2hvdWxkIG5vdCB0cmlnZ2VyIGFuIHVwZGF0ZS4gU2luY2VcbiAgICAvLyB1cGRhdGVzIGFyZSBhbGxvd2VkIGFmdGVyIHN1cGVyLnVwZGF0ZSwgaXQncyBpbXBvcnRhbnQgdG8gY2FsbCBgcmVuZGVyYFxuICAgIC8vIGJlZm9yZSB0aGF0LlxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5yZW5kZXIoKTtcbiAgICBpZiAoIXRoaXMuaGFzVXBkYXRlZCkge1xuICAgICAgdGhpcy5yZW5kZXJPcHRpb25zLmlzQ29ubmVjdGVkID0gdGhpcy5pc0Nvbm5lY3RlZDtcbiAgICB9XG4gICAgc3VwZXIudXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICB0aGlzLl9fY2hpbGRQYXJ0ID0gcmVuZGVyKHZhbHVlLCB0aGlzLnJlbmRlclJvb3QsIHRoaXMucmVuZGVyT3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogSW52b2tlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgYWRkZWQgdG8gdGhlIGRvY3VtZW50J3MgRE9NLlxuICAgKlxuICAgKiBJbiBgY29ubmVjdGVkQ2FsbGJhY2soKWAgeW91IHNob3VsZCBzZXR1cCB0YXNrcyB0aGF0IHNob3VsZCBvbmx5IG9jY3VyIHdoZW5cbiAgICogdGhlIGVsZW1lbnQgaXMgY29ubmVjdGVkIHRvIHRoZSBkb2N1bWVudC4gVGhlIG1vc3QgY29tbW9uIG9mIHRoZXNlIGlzXG4gICAqIGFkZGluZyBldmVudCBsaXN0ZW5lcnMgdG8gbm9kZXMgZXh0ZXJuYWwgdG8gdGhlIGVsZW1lbnQsIGxpa2UgYSBrZXlkb3duXG4gICAqIGV2ZW50IGhhbmRsZXIgYWRkZWQgdG8gdGhlIHdpbmRvdy5cbiAgICpcbiAgICogYGBgdHNcbiAgICogY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAqICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICogICBhZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlS2V5ZG93bik7XG4gICAqIH1cbiAgICogYGBgXG4gICAqXG4gICAqIFR5cGljYWxseSwgYW55dGhpbmcgZG9uZSBpbiBgY29ubmVjdGVkQ2FsbGJhY2soKWAgc2hvdWxkIGJlIHVuZG9uZSB3aGVuIHRoZVxuICAgKiBlbGVtZW50IGlzIGRpc2Nvbm5lY3RlZCwgaW4gYGRpc2Nvbm5lY3RlZENhbGxiYWNrKClgLlxuICAgKlxuICAgKiBAY2F0ZWdvcnkgbGlmZWN5Y2xlXG4gICAqL1xuICBvdmVycmlkZSBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX19jaGlsZFBhcnQ/LnNldENvbm5lY3RlZCh0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZva2VkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyByZW1vdmVkIGZyb20gdGhlIGRvY3VtZW50J3MgRE9NLlxuICAgKlxuICAgKiBUaGlzIGNhbGxiYWNrIGlzIHRoZSBtYWluIHNpZ25hbCB0byB0aGUgZWxlbWVudCB0aGF0IGl0IG1heSBubyBsb25nZXIgYmVcbiAgICogdXNlZC4gYGRpc2Nvbm5lY3RlZENhbGxiYWNrKClgIHNob3VsZCBlbnN1cmUgdGhhdCBub3RoaW5nIGlzIGhvbGRpbmcgYVxuICAgKiByZWZlcmVuY2UgdG8gdGhlIGVsZW1lbnQgKHN1Y2ggYXMgZXZlbnQgbGlzdGVuZXJzIGFkZGVkIHRvIG5vZGVzIGV4dGVybmFsXG4gICAqIHRvIHRoZSBlbGVtZW50KSwgc28gdGhhdCBpdCBpcyBmcmVlIHRvIGJlIGdhcmJhZ2UgY29sbGVjdGVkLlxuICAgKlxuICAgKiBgYGB0c1xuICAgKiBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICogICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgKiAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlS2V5ZG93bik7XG4gICAqIH1cbiAgICogYGBgXG4gICAqXG4gICAqIEFuIGVsZW1lbnQgbWF5IGJlIHJlLWNvbm5lY3RlZCBhZnRlciBiZWluZyBkaXNjb25uZWN0ZWQuXG4gICAqXG4gICAqIEBjYXRlZ29yeSBsaWZlY3ljbGVcbiAgICovXG4gIG92ZXJyaWRlIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5fX2NoaWxkUGFydD8uc2V0Q29ubmVjdGVkKGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZva2VkIG9uIGVhY2ggdXBkYXRlIHRvIHBlcmZvcm0gcmVuZGVyaW5nIHRhc2tzLiBUaGlzIG1ldGhvZCBtYXkgcmV0dXJuXG4gICAqIGFueSB2YWx1ZSByZW5kZXJhYmxlIGJ5IGxpdC1odG1sJ3MgYENoaWxkUGFydGAgLSB0eXBpY2FsbHkgYVxuICAgKiBgVGVtcGxhdGVSZXN1bHRgLiBTZXR0aW5nIHByb3BlcnRpZXMgaW5zaWRlIHRoaXMgbWV0aG9kIHdpbGwgKm5vdCogdHJpZ2dlclxuICAgKiB0aGUgZWxlbWVudCB0byB1cGRhdGUuXG4gICAqIEBjYXRlZ29yeSByZW5kZXJpbmdcbiAgICovXG4gIHByb3RlY3RlZCByZW5kZXIoKTogdW5rbm93biB7XG4gICAgcmV0dXJuIG5vQ2hhbmdlO1xuICB9XG59XG5cbi8qKlxuICogRW5zdXJlIHRoaXMgY2xhc3MgaXMgbWFya2VkIGFzIGBmaW5hbGl6ZWRgIGFzIGFuIG9wdGltaXphdGlvbiBlbnN1cmluZ1xuICogaXQgd2lsbCBub3QgbmVlZGxlc3NseSB0cnkgdG8gYGZpbmFsaXplYC5cbiAqXG4gKiBOb3RlIHRoaXMgcHJvcGVydHkgbmFtZSBpcyBhIHN0cmluZyB0byBwcmV2ZW50IGJyZWFraW5nIENsb3N1cmUgSlMgQ29tcGlsZXJcbiAqIG9wdGltaXphdGlvbnMuIFNlZSBAbGl0L3JlYWN0aXZlLWVsZW1lbnQgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKi9cbihMaXRFbGVtZW50IGFzIHVua25vd24gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pW1xuICBKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5KCdmaW5hbGl6ZWQnLCBMaXRFbGVtZW50KVxuXSA9IHRydWU7XG5cbi8vIEluc3RhbGwgaHlkcmF0aW9uIGlmIGF2YWlsYWJsZVxuZ2xvYmFsLmxpdEVsZW1lbnRIeWRyYXRlU3VwcG9ydD8uKHtMaXRFbGVtZW50fSk7XG5cbi8vIEFwcGx5IHBvbHlmaWxscyBpZiBhdmFpbGFibGVcbmNvbnN0IHBvbHlmaWxsU3VwcG9ydCA9IERFVl9NT0RFXG4gID8gZ2xvYmFsLmxpdEVsZW1lbnRQb2x5ZmlsbFN1cHBvcnREZXZNb2RlXG4gIDogZ2xvYmFsLmxpdEVsZW1lbnRQb2x5ZmlsbFN1cHBvcnQ7XG5wb2x5ZmlsbFN1cHBvcnQ/Lih7TGl0RWxlbWVudH0pO1xuXG4vKipcbiAqIEVORCBVU0VSUyBTSE9VTEQgTk9UIFJFTFkgT04gVEhJUyBPQkpFQ1QuXG4gKlxuICogUHJpdmF0ZSBleHBvcnRzIGZvciB1c2UgYnkgb3RoZXIgTGl0IHBhY2thZ2VzLCBub3QgaW50ZW5kZWQgZm9yIHVzZSBieVxuICogZXh0ZXJuYWwgdXNlcnMuXG4gKlxuICogV2UgY3VycmVudGx5IGRvIG5vdCBtYWtlIGEgbWFuZ2xlZCByb2xsdXAgYnVpbGQgb2YgdGhlIGxpdC1zc3IgY29kZS4gSW4gb3JkZXJcbiAqIHRvIGtlZXAgYSBudW1iZXIgb2YgKG90aGVyd2lzZSBwcml2YXRlKSB0b3AtbGV2ZWwgZXhwb3J0cyAgbWFuZ2xlZCBpbiB0aGVcbiAqIGNsaWVudCBzaWRlIGNvZGUsIHdlIGV4cG9ydCBhIF8kTEUgb2JqZWN0IGNvbnRhaW5pbmcgdGhvc2UgbWVtYmVycyAob3JcbiAqIGhlbHBlciBtZXRob2RzIGZvciBhY2Nlc3NpbmcgcHJpdmF0ZSBmaWVsZHMgb2YgdGhvc2UgbWVtYmVycyksIGFuZCB0aGVuXG4gKiByZS1leHBvcnQgdGhlbSBmb3IgdXNlIGluIGxpdC1zc3IuIFRoaXMga2VlcHMgbGl0LXNzciBhZ25vc3RpYyB0byB3aGV0aGVyIHRoZVxuICogY2xpZW50LXNpZGUgY29kZSBpcyBiZWluZyB1c2VkIGluIGBkZXZgIG1vZGUgb3IgYHByb2RgIG1vZGUuXG4gKlxuICogVGhpcyBoYXMgYSB1bmlxdWUgbmFtZSwgdG8gZGlzYW1iaWd1YXRlIGl0IGZyb20gcHJpdmF0ZSBleHBvcnRzIGluXG4gKiBsaXQtaHRtbCwgc2luY2UgdGhpcyBtb2R1bGUgcmUtZXhwb3J0cyBhbGwgb2YgbGl0LWh0bWwuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IF8kTEUgPSB7XG4gIF8kYXR0cmlidXRlVG9Qcm9wZXJ0eTogKFxuICAgIGVsOiBMaXRFbGVtZW50LFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICB2YWx1ZTogc3RyaW5nIHwgbnVsbFxuICApID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAoZWwgYXMgYW55KS5fJGF0dHJpYnV0ZVRvUHJvcGVydHkobmFtZSwgdmFsdWUpO1xuICB9LFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgXyRjaGFuZ2VkUHJvcGVydGllczogKGVsOiBMaXRFbGVtZW50KSA9PiAoZWwgYXMgYW55KS5fJGNoYW5nZWRQcm9wZXJ0aWVzLFxufTtcblxuLy8gSU1QT1JUQU5UOiBkbyBub3QgY2hhbmdlIHRoZSBwcm9wZXJ0eSBuYW1lIG9yIHRoZSBhc3NpZ25tZW50IGV4cHJlc3Npb24uXG4vLyBUaGlzIGxpbmUgd2lsbCBiZSB1c2VkIGluIHJlZ2V4ZXMgdG8gc2VhcmNoIGZvciBMaXRFbGVtZW50IHVzYWdlLlxuKGdsb2JhbC5saXRFbGVtZW50VmVyc2lvbnMgPz89IFtdKS5wdXNoKCc0LjIuMicpO1xuaWYgKERFVl9NT0RFICYmIGdsb2JhbC5saXRFbGVtZW50VmVyc2lvbnMubGVuZ3RoID4gMSkge1xuICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgaXNzdWVXYXJuaW5nIShcbiAgICAgICdtdWx0aXBsZS12ZXJzaW9ucycsXG4gICAgICBgTXVsdGlwbGUgdmVyc2lvbnMgb2YgTGl0IGxvYWRlZC4gTG9hZGluZyBtdWx0aXBsZSB2ZXJzaW9ucyBgICtcbiAgICAgICAgYGlzIG5vdCByZWNvbW1lbmRlZC5gXG4gICAgKTtcbiAgfSk7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5cbmltcG9ydCB7RGlzY29ubmVjdGFibGUsIFBhcnR9IGZyb20gJy4vbGl0LWh0bWwuanMnO1xuXG5leHBvcnQge1xuICBBdHRyaWJ1dGVQYXJ0LFxuICBCb29sZWFuQXR0cmlidXRlUGFydCxcbiAgQ2hpbGRQYXJ0LFxuICBFbGVtZW50UGFydCxcbiAgRXZlbnRQYXJ0LFxuICBQYXJ0LFxuICBQcm9wZXJ0eVBhcnQsXG59IGZyb20gJy4vbGl0LWh0bWwuanMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERpcmVjdGl2ZUNsYXNzIHtcbiAgbmV3IChwYXJ0OiBQYXJ0SW5mbyk6IERpcmVjdGl2ZTtcbn1cblxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgdHlwZSBleHRyYWN0cyB0aGUgc2lnbmF0dXJlIG9mIGEgZGlyZWN0aXZlIGNsYXNzJ3MgcmVuZGVyKClcbiAqIG1ldGhvZCBzbyB3ZSBjYW4gdXNlIGl0IGZvciB0aGUgdHlwZSBvZiB0aGUgZ2VuZXJhdGVkIGRpcmVjdGl2ZSBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IHR5cGUgRGlyZWN0aXZlUGFyYW1ldGVyczxDIGV4dGVuZHMgRGlyZWN0aXZlPiA9IFBhcmFtZXRlcnM8Q1sncmVuZGVyJ10+O1xuXG4vKipcbiAqIEEgZ2VuZXJhdGVkIGRpcmVjdGl2ZSBmdW5jdGlvbiBkb2Vzbid0IGV2YWx1YXRlIHRoZSBkaXJlY3RpdmUsIGJ1dCBqdXN0XG4gKiByZXR1cm5zIGEgRGlyZWN0aXZlUmVzdWx0IG9iamVjdCB0aGF0IGNhcHR1cmVzIHRoZSBhcmd1bWVudHMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGlyZWN0aXZlUmVzdWx0PEMgZXh0ZW5kcyBEaXJlY3RpdmVDbGFzcyA9IERpcmVjdGl2ZUNsYXNzPiB7XG4gIC8qKlxuICAgKiBUaGlzIHByb3BlcnR5IG5lZWRzIHRvIHJlbWFpbiB1bm1pbmlmaWVkLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIFsnXyRsaXREaXJlY3RpdmUkJ106IEM7XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgdmFsdWVzOiBEaXJlY3RpdmVQYXJhbWV0ZXJzPEluc3RhbmNlVHlwZTxDPj47XG59XG5cbmV4cG9ydCBjb25zdCBQYXJ0VHlwZSA9IHtcbiAgQVRUUklCVVRFOiAxLFxuICBDSElMRDogMixcbiAgUFJPUEVSVFk6IDMsXG4gIEJPT0xFQU5fQVRUUklCVVRFOiA0LFxuICBFVkVOVDogNSxcbiAgRUxFTUVOVDogNixcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIFBhcnRUeXBlID0gKHR5cGVvZiBQYXJ0VHlwZSlba2V5b2YgdHlwZW9mIFBhcnRUeXBlXTtcblxuZXhwb3J0IGludGVyZmFjZSBDaGlsZFBhcnRJbmZvIHtcbiAgcmVhZG9ubHkgdHlwZTogdHlwZW9mIFBhcnRUeXBlLkNISUxEO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEF0dHJpYnV0ZVBhcnRJbmZvIHtcbiAgcmVhZG9ubHkgdHlwZTpcbiAgICB8IHR5cGVvZiBQYXJ0VHlwZS5BVFRSSUJVVEVcbiAgICB8IHR5cGVvZiBQYXJ0VHlwZS5QUk9QRVJUWVxuICAgIHwgdHlwZW9mIFBhcnRUeXBlLkJPT0xFQU5fQVRUUklCVVRFXG4gICAgfCB0eXBlb2YgUGFydFR5cGUuRVZFTlQ7XG4gIHJlYWRvbmx5IHN0cmluZ3M/OiBSZWFkb25seUFycmF5PHN0cmluZz47XG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgcmVhZG9ubHkgdGFnTmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVsZW1lbnRQYXJ0SW5mbyB7XG4gIHJlYWRvbmx5IHR5cGU6IHR5cGVvZiBQYXJ0VHlwZS5FTEVNRU5UO1xufVxuXG4vKipcbiAqIEluZm9ybWF0aW9uIGFib3V0IHRoZSBwYXJ0IGEgZGlyZWN0aXZlIGlzIGJvdW5kIHRvLlxuICpcbiAqIFRoaXMgaXMgdXNlZnVsIGZvciBjaGVja2luZyB0aGF0IGEgZGlyZWN0aXZlIGlzIGF0dGFjaGVkIHRvIGEgdmFsaWQgcGFydCxcbiAqIHN1Y2ggYXMgd2l0aCBkaXJlY3RpdmUgdGhhdCBjYW4gb25seSBiZSB1c2VkIG9uIGF0dHJpYnV0ZSBiaW5kaW5ncy5cbiAqL1xuZXhwb3J0IHR5cGUgUGFydEluZm8gPSBDaGlsZFBhcnRJbmZvIHwgQXR0cmlidXRlUGFydEluZm8gfCBFbGVtZW50UGFydEluZm87XG5cbi8qKlxuICogQ3JlYXRlcyBhIHVzZXItZmFjaW5nIGRpcmVjdGl2ZSBmdW5jdGlvbiBmcm9tIGEgRGlyZWN0aXZlIGNsYXNzLiBUaGlzXG4gKiBmdW5jdGlvbiBoYXMgdGhlIHNhbWUgcGFyYW1ldGVycyBhcyB0aGUgZGlyZWN0aXZlJ3MgcmVuZGVyKCkgbWV0aG9kLlxuICovXG5leHBvcnQgY29uc3QgZGlyZWN0aXZlID1cbiAgPEMgZXh0ZW5kcyBEaXJlY3RpdmVDbGFzcz4oYzogQykgPT5cbiAgKC4uLnZhbHVlczogRGlyZWN0aXZlUGFyYW1ldGVyczxJbnN0YW5jZVR5cGU8Qz4+KTogRGlyZWN0aXZlUmVzdWx0PEM+ID0+ICh7XG4gICAgLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbiAgICBbJ18kbGl0RGlyZWN0aXZlJCddOiBjLFxuICAgIHZhbHVlcyxcbiAgfSk7XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgY3JlYXRpbmcgY3VzdG9tIGRpcmVjdGl2ZXMuIFVzZXJzIHNob3VsZCBleHRlbmQgdGhpcyBjbGFzcyxcbiAqIGltcGxlbWVudCBgcmVuZGVyYCBhbmQvb3IgYHVwZGF0ZWAsIGFuZCB0aGVuIHBhc3MgdGhlaXIgc3ViY2xhc3MgdG9cbiAqIGBkaXJlY3RpdmVgLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGlyZWN0aXZlIGltcGxlbWVudHMgRGlzY29ubmVjdGFibGUge1xuICAvL0BpbnRlcm5hbFxuICBfX3BhcnQhOiBQYXJ0O1xuICAvL0BpbnRlcm5hbFxuICBfX2F0dHJpYnV0ZUluZGV4OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIC8vQGludGVybmFsXG4gIF9fZGlyZWN0aXZlPzogRGlyZWN0aXZlO1xuXG4gIC8vQGludGVybmFsXG4gIF8kcGFyZW50ITogRGlzY29ubmVjdGFibGU7XG5cbiAgLy8gVGhlc2Ugd2lsbCBvbmx5IGV4aXN0IG9uIHRoZSBBc3luY0RpcmVjdGl2ZSBzdWJjbGFzc1xuICAvL0BpbnRlcm5hbFxuICBfJGRpc2Nvbm5lY3RhYmxlQ2hpbGRyZW4/OiBTZXQ8RGlzY29ubmVjdGFibGU+O1xuICAvLyBUaGlzIHByb3BlcnR5IG5lZWRzIHRvIHJlbWFpbiB1bm1pbmlmaWVkLlxuICAvL0BpbnRlcm5hbFxuICBbJ18kbm90aWZ5RGlyZWN0aXZlQ29ubmVjdGlvbkNoYW5nZWQnXT8oaXNDb25uZWN0ZWQ6IGJvb2xlYW4pOiB2b2lkO1xuXG4gIGNvbnN0cnVjdG9yKF9wYXJ0SW5mbzogUGFydEluZm8pIHt9XG5cbiAgLy8gU2VlIGNvbW1lbnQgaW4gRGlzY29ubmVjdGFibGUgaW50ZXJmYWNlIGZvciB3aHkgdGhpcyBpcyBhIGdldHRlclxuICBnZXQgXyRpc0Nvbm5lY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fJHBhcmVudC5fJGlzQ29ubmVjdGVkO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfJGluaXRpYWxpemUoXG4gICAgcGFydDogUGFydCxcbiAgICBwYXJlbnQ6IERpc2Nvbm5lY3RhYmxlLFxuICAgIGF0dHJpYnV0ZUluZGV4OiBudW1iZXIgfCB1bmRlZmluZWRcbiAgKSB7XG4gICAgdGhpcy5fX3BhcnQgPSBwYXJ0O1xuICAgIHRoaXMuXyRwYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy5fX2F0dHJpYnV0ZUluZGV4ID0gYXR0cmlidXRlSW5kZXg7XG4gIH1cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfJHJlc29sdmUocGFydDogUGFydCwgcHJvcHM6IEFycmF5PHVua25vd24+KTogdW5rbm93biB7XG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKHBhcnQsIHByb3BzKTtcbiAgfVxuXG4gIGFic3RyYWN0IHJlbmRlciguLi5wcm9wczogQXJyYXk8dW5rbm93bj4pOiB1bmtub3duO1xuXG4gIHVwZGF0ZShfcGFydDogUGFydCwgcHJvcHM6IEFycmF5PHVua25vd24+KTogdW5rbm93biB7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyKC4uLnByb3BzKTtcbiAgfVxufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuXG5pbXBvcnQge25vdGhpbmcsIFRlbXBsYXRlUmVzdWx0LCBub0NoYW5nZX0gZnJvbSAnLi4vbGl0LWh0bWwuanMnO1xuaW1wb3J0IHtkaXJlY3RpdmUsIERpcmVjdGl2ZSwgUGFydEluZm8sIFBhcnRUeXBlfSBmcm9tICcuLi9kaXJlY3RpdmUuanMnO1xuXG5jb25zdCBIVE1MX1JFU1VMVCA9IDE7XG5cbmV4cG9ydCBjbGFzcyBVbnNhZmVIVE1MRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgc3RhdGljIGRpcmVjdGl2ZU5hbWUgPSAndW5zYWZlSFRNTCc7XG4gIHN0YXRpYyByZXN1bHRUeXBlID0gSFRNTF9SRVNVTFQ7XG5cbiAgcHJpdmF0ZSBfdmFsdWU6IHVua25vd24gPSBub3RoaW5nO1xuICBwcml2YXRlIF90ZW1wbGF0ZVJlc3VsdD86IFRlbXBsYXRlUmVzdWx0O1xuXG4gIGNvbnN0cnVjdG9yKHBhcnRJbmZvOiBQYXJ0SW5mbykge1xuICAgIHN1cGVyKHBhcnRJbmZvKTtcbiAgICBpZiAocGFydEluZm8udHlwZSAhPT0gUGFydFR5cGUuQ0hJTEQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYCR7XG4gICAgICAgICAgKHRoaXMuY29uc3RydWN0b3IgYXMgdHlwZW9mIFVuc2FmZUhUTUxEaXJlY3RpdmUpLmRpcmVjdGl2ZU5hbWVcbiAgICAgICAgfSgpIGNhbiBvbmx5IGJlIHVzZWQgaW4gY2hpbGQgYmluZGluZ3NgXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcih2YWx1ZTogc3RyaW5nIHwgdHlwZW9mIG5vdGhpbmcgfCB0eXBlb2Ygbm9DaGFuZ2UgfCB1bmRlZmluZWQgfCBudWxsKSB7XG4gICAgaWYgKHZhbHVlID09PSBub3RoaW5nIHx8IHZhbHVlID09IG51bGwpIHtcbiAgICAgIHRoaXMuX3RlbXBsYXRlUmVzdWx0ID0gdW5kZWZpbmVkO1xuICAgICAgcmV0dXJuICh0aGlzLl92YWx1ZSA9IHZhbHVlKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09PSBub0NoYW5nZSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGAke1xuICAgICAgICAgICh0aGlzLmNvbnN0cnVjdG9yIGFzIHR5cGVvZiBVbnNhZmVIVE1MRGlyZWN0aXZlKS5kaXJlY3RpdmVOYW1lXG4gICAgICAgIH0oKSBjYWxsZWQgd2l0aCBhIG5vbi1zdHJpbmcgdmFsdWVgXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT09IHRoaXMuX3ZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVSZXN1bHQ7XG4gICAgfVxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgY29uc3Qgc3RyaW5ncyA9IFt2YWx1ZV0gYXMgdW5rbm93biBhcyBUZW1wbGF0ZVN0cmluZ3NBcnJheTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIChzdHJpbmdzIGFzIGFueSkucmF3ID0gc3RyaW5ncztcbiAgICAvLyBXQVJOSU5HOiBpbXBlcnNvbmF0aW5nIGEgVGVtcGxhdGVSZXN1bHQgbGlrZSB0aGlzIGlzIGV4dHJlbWVseVxuICAgIC8vIGRhbmdlcm91cy4gVGhpcmQtcGFydHkgZGlyZWN0aXZlcyBzaG91bGQgbm90IGRvIHRoaXMuXG4gICAgcmV0dXJuICh0aGlzLl90ZW1wbGF0ZVJlc3VsdCA9IHtcbiAgICAgIC8vIENhc3QgdG8gYSBrbm93biBzZXQgb2YgaW50ZWdlcnMgdGhhdCBzYXRpc2Z5IFJlc3VsdFR5cGUgc28gdGhhdCB3ZVxuICAgICAgLy8gZG9uJ3QgaGF2ZSB0byBleHBvcnQgUmVzdWx0VHlwZSBhbmQgcG9zc2libHkgZW5jb3VyYWdlIHRoaXMgcGF0dGVybi5cbiAgICAgIC8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG4gICAgICBbJ18kbGl0VHlwZSQnXTogKHRoaXMuY29uc3RydWN0b3IgYXMgdHlwZW9mIFVuc2FmZUhUTUxEaXJlY3RpdmUpXG4gICAgICAgIC5yZXN1bHRUeXBlIGFzIDEgfCAyLFxuICAgICAgc3RyaW5ncyxcbiAgICAgIHZhbHVlczogW10sXG4gICAgfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSByZXN1bHQgYXMgSFRNTCwgcmF0aGVyIHRoYW4gdGV4dC5cbiAqXG4gKiBUaGUgdmFsdWVzIGB1bmRlZmluZWRgLCBgbnVsbGAsIGFuZCBgbm90aGluZ2AsIHdpbGwgYWxsIHJlc3VsdCBpbiBubyBjb250ZW50XG4gKiAoZW1wdHkgc3RyaW5nKSBiZWluZyByZW5kZXJlZC5cbiAqXG4gKiBOb3RlLCB0aGlzIGlzIHVuc2FmZSB0byB1c2Ugd2l0aCBhbnkgdXNlci1wcm92aWRlZCBpbnB1dCB0aGF0IGhhc24ndCBiZWVuXG4gKiBzYW5pdGl6ZWQgb3IgZXNjYXBlZCwgYXMgaXQgbWF5IGxlYWQgdG8gY3Jvc3Mtc2l0ZS1zY3JpcHRpbmdcbiAqIHZ1bG5lcmFiaWxpdGllcy5cbiAqL1xuZXhwb3J0IGNvbnN0IHVuc2FmZUhUTUwgPSBkaXJlY3RpdmUoVW5zYWZlSFRNTERpcmVjdGl2ZSk7XG4iLCAiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztcblxuLy8gXHUyNTAwXHUyNTAwIFNoYXJlZCBzdHlsZXMgKHVzZWQgYnkgcGFuZWxzICsgbWFpbiBjYXJkKSBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxuZXhwb3J0IGNvbnN0IHNoYXJlZFN0eWxlcyA9IGNzc2BcbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtZmFtaWx5OiAnR290aGFtJywgJ0dpbGwgU2FucycsICdDZW50dXJ5IEdvdGhpYycsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgc2Fucy1zZXJpZjtcbiAgfVxuXG4gIFtoaWRkZW5dIHsgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG5cbiAgLyogQmFzZSBpY29uIFx1MjAxNCBpbmxpbmUgU1ZHIGNvbnRhaW5lciAqL1xuICAuaWNvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIDAuMTVzIGVhc2U7XG4gIH1cblxuICAuaWNvbiBzdmcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC8qIFNWRyBidXR0b24gaW1hZ2VzIChsb2FkZWQgdmlhIDxpbWc+KSAqL1xuICAuYnRuLWltZyB7XG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIDAuMTVzIGVhc2U7XG4gIH1cblxuICAvKiBVbmlmaWVkIGhvdmVyIGdsb3cgZm9yIGFsbCBpY29uIGJ1dHRvbnMgKi9cbiAgYnV0dG9uOmhvdmVyID4gLmJ0bi1pbWcsXG4gIGJ1dHRvbjpob3ZlciA+IC5pY29uIHtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCA2cHggcmdiYSgyNTUsMjU1LDI1NSwwLjQpKTtcbiAgfVxuXG4gIC8qIEFjdGl2ZSAvIGxpdC11cCBzdGF0ZSBmb3Igc3RhdGVmdWwgaWNvbnMgKi9cbiAgLmljb24tb24geyBjb2xvcjogI2ZmZmZmZjsgfVxuXG4gIC8qIFx1MjUwMFx1MjUwMCBTdWJtZW51IHBhbmVsIGVudGVyIGFuaW1hdGlvbiBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgKi9cblxuICBAa2V5ZnJhbWVzIHBhbmVsU2xpZGVVcCB7XG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMnB4KTsgfVxuICAgIHRvICAgeyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbiAgfVxuXG4gIC5jb250cm9scy1tZW51LFxuICAuY2xpbWF0ZS1tZW51LFxuICAuY2hhcmdlci1tZW51IHtcbiAgICBhbmltYXRpb246IHBhbmVsU2xpZGVVcCAwLjI1cyBlYXNlLW91dCBib3RoO1xuICB9XG5cbiAgLyogXHUyNTAwXHUyNTAwIFBhbmVsIGhlYWRlciAoYmFjayBjaGV2cm9uICsgY2VudHJlZCB0aXRsZSkgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwICovXG5cbiAgLnBhbmVsLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHggMTJweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA3KTtcbiAgfVxuXG4gIC5wYW5lbC1iYWNrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDM2cHg7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjY1KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlO1xuICB9XG5cbiAgLnBhbmVsLWJhY2s6aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG5cbiAgLnBhbmVsLWJhY2sgLmljb24ge1xuICAgIHdpZHRoOiAyNnB4O1xuICAgIGhlaWdodDogMjZweDtcbiAgfVxuXG4gIC5wYW5lbC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAwLjk1ZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICB9XG5cbiAgLyogVGl0bGUgKyBzdWJ0aXRsZSBzdGFjayAodXNlZCBpbiBjaGFyZ2luZyBwYW5lbCBoZWFkZXIpICovXG4gIC5wYW5lbC10aXRsZS1ibG9jayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAycHg7XG4gIH1cblxuICAucGFuZWwtc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMC43OGVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC40KTtcbiAgfVxuYDtcblxuLy8gXHUyNTAwXHUyNTAwIENoYXJnZXIgcGFuZWwgc3R5bGVzIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXG5leHBvcnQgY29uc3QgY2hhcmdlclN0eWxlcyA9IGNzc2BcbiAgLmNoYXJnZXItbWVudSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAvKiBNYWluIGNhcmQ6IGNoYXJnZSBsaW1pdCArIHNsaWRlciArIGFtcHMgc3RlcHBlciAqL1xuICAuY2hnLWNhcmQge1xuICAgIG1hcmdpbjogMTZweCAxNnB4IDA7XG4gICAgYmFja2dyb3VuZDogIzE2MTcxOTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgcGFkZGluZzogMThweCAxOHB4IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5jaGctbGltaXQtaGVhZGVyIHsgbWFyZ2luLWJvdHRvbTogMTRweDsgfVxuXG4gIC5jaGctbGltaXQtdGl0bGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuXG4gIC5jaGctbGltaXQtc3ViIHtcbiAgICBmb250LXNpemU6IDAuNzhlbTtcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjM4KTtcbiAgICBtYXJnaW46IDRweCAwIDA7XG4gIH1cblxuICAvKiBHcmVlbiBwaWxsIHNsaWRlciBmb3IgY2hhcmdlIGxpbWl0ICovXG4gIC5jaGctc2xpZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICB0byByaWdodCxcbiAgICAgICMxOWQ0NjIgMCUsICMxOWQ0NjIgdmFyKC0tcGN0LCA4MCUpLFxuICAgICAgcmdiYSgyNTUsMjU1LDI1NSwwLjE1KSB2YXIoLS1wY3QsIDgwJSksIHJnYmEoMjU1LDI1NSwyNTUsMC4xNSkgMTAwJVxuICAgICk7XG4gIH1cblxuICAuY2hnLXNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICB3aWR0aDogMjJweDtcbiAgICBoZWlnaHQ6IDIycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLDAuNSk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZTtcbiAgfVxuXG4gIC5jaGctc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYjphY3RpdmUgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpOyB9XG5cbiAgLmNoZy1zbGlkZXI6Oi1tb3otcmFuZ2UtdGh1bWIge1xuICAgIHdpZHRoOiAyMnB4O1xuICAgIGhlaWdodDogMjJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLDAuNSk7XG4gIH1cblxuICAvKiBBbXBzIHN0ZXBwZXIgcm93IFx1MjAxNCBkYXJrZXIgYmFuZCBhdCBib3R0b20gb2YgY2FyZCAqL1xuICAuY2hnLWFtcHMtcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIC0xOHB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDcpO1xuICAgIGJhY2tncm91bmQ6ICMxZTFlMjA7XG4gICAgcGFkZGluZzogMnB4IDZweDtcbiAgfVxuXG4gIC5jaGctYW1wcy1idG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMTJweCAxNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2U7XG4gIH1cblxuICAuY2hnLWFtcHMtYnRuOmhvdmVyICB7IGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOSk7IH1cbiAgLmNoZy1hbXBzLWJ0bjphY3RpdmUgeyBjb2xvcjogI2ZmZmZmZjsgfVxuICAuY2hnLWFtcHMtYnRuOmRpc2FibGVkIHsgb3BhY2l0eTogMC4yNTsgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cblxuICAuY2hnLWFtcHMtYnRuIC5pY29uIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gIH1cblxuICAuY2hnLWFtcHMtdmFsdWUge1xuICAgIGZsZXg6IDE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMC44OGVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cblxuICAvKiBPcGVuIENoYXJnZSBQb3J0IFx1MjAxNCBwbGFpbiBjZW50ZXJlZCB0ZXh0IGxpbmsgKi9cbiAgLmNoZy1wb3J0LWJ0biB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC40NSk7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiAwLjg4ZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZTtcbiAgfVxuXG4gIC5jaGctcG9ydC1idG46aG92ZXIgeyBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjg1KTsgfVxuXG5gO1xuXG4vLyBcdTI1MDBcdTI1MDAgQ2xpbWF0ZSBwYW5lbCBzdHlsZXMgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cbmV4cG9ydCBjb25zdCBjbGltYXRlU3R5bGVzID0gY3NzYFxuICAuY2xpbWF0ZS1tZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC8qIFx1MjUwMFx1MjUwMCBDYXIgYXJlYSBcdTIwMTQgb3V0ZXIgY2xpcHMsIGlubmVyIHNpemVzIHRvIGltYWdlIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMCAqL1xuICAuY2xpbS1jYXItYXJlYSB7XG4gICAgYmFja2dyb3VuZDogIzE2MTcxOTtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjM1cyBlYXNlO1xuICB9XG5cbiAgLmNsaW0tY2FyLWFyZWEuY2xpbS1jYXItY29sbGFwc2VkIHtcbiAgICBoZWlnaHQ6IDI2MHB4O1xuICB9XG5cbiAgLyogSW5uZXIgd3JhcHBlciB0YWtlcyB0aGUgaW1hZ2UncyBuYXR1cmFsIHNpemU7IHNlYXRzIGFyZVxuICAgICBwb3NpdGlvbmVkIGFzIHBlcmNlbnRhZ2VzIG9mIHRoZSBpbWFnZSwgc28gdGhleSBhbHdheXNcbiAgICAgYWxpZ24gcmVnYXJkbGVzcyBvZiBob3cgbXVjaCB0aGUgb3V0ZXIgY29udGFpbmVyIGNsaXBzLiAqL1xuICAuY2xpbS1jYXItaW5uZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5jbGltLWNhci1iZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgLyogXHUyNTAwXHUyNTAwIEZsb2F0aW5nIGJhY2sgYnV0dG9uIChvdmVybGFpZCBvbiBjYXIgaW1hZ2UpIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMCAqL1xuICAuY2xpbS1iYWNrLWJ0biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTJweDtcbiAgICBsZWZ0OiAxMnB4O1xuICAgIHotaW5kZXg6IDI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42NSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZTtcbiAgfVxuXG4gIC5jbGltLWJhY2stYnRuOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuXG4gIC5jbGltLWJhY2stYnRuIC5pY29uIHtcbiAgICB3aWR0aDogMjZweDtcbiAgICBoZWlnaHQ6IDI2cHg7XG4gIH1cblxuICAvKiBcdTI1MDBcdTI1MDAgU2VhdCBoZWF0IHRhcCB6b25lcyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgKi9cbiAgLmNsaW0tc2VhdC16b25lIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAycHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiA4cHggMTRweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNXMgZWFzZTtcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgLmNsaW0tc2VhdC16b25lOmhvdmVyICB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7IH1cbiAgLmNsaW0tc2VhdC16b25lOmFjdGl2ZSB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTsgfVxuXG4gIC5jbGltLXNlYXQtem9uZSAuaWNvbiB7XG4gICAgd2lkdGg6IDI5cHg7XG4gICAgaGVpZ2h0OiAyOXB4O1xuICB9XG5cbiAgLmNsaW0tc2VhdC16b25lIC5idG4taW1nIHtcbiAgICB3aWR0aDogMjlweDtcbiAgICBoZWlnaHQ6IDI5cHg7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gIC5jbGltLXNlYXQtbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMC42NWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC40NSk7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgfVxuXG4gIC8qIFNlYXQgcG9zaXRpb25zIFx1MjAxNCBwZXJjZW50YWdlcyBvZiB0aGUgaW1hZ2UgZGltZW5zaW9uc1xuICAgICBzbyB0aGV5IHRyYWNrIHRoZSBhY3R1YWwgc2VhdHMgcmVnYXJkbGVzcyBvZiBjbGlwIGhlaWdodC5cbiAgICAgQmFzZWQgb24gTW9kZWwgMyBjbGltYXRlLWJnLnBuZyAoMTEwMFx1MDBENzE4OTgpLiAqL1xuICAuY2xpbS1zZWF0LWZsIHsgdG9wOiAyNCU7IGxlZnQ6IDM3JTsgfVxuICAuY2xpbS1zZWF0LWZyIHsgdG9wOiAyNCU7IGxlZnQ6IDY2JTsgfVxuICAuY2xpbS1zZWF0LXJsIHsgdG9wOiA0NSU7IGxlZnQ6IDM4JTsgfVxuICAuY2xpbS1zZWF0LXJjIHsgdG9wOiA0NSU7IGxlZnQ6IDUyJTsgfVxuICAuY2xpbS1zZWF0LXJyIHsgdG9wOiA0NSU7IGxlZnQ6IDY1JTsgfVxuXG4gIC8qIFx1MjUwMFx1MjUwMCBCb3R0b20gc2hlZXQgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwICovXG4gIC5jbGltLXNoZWV0IHtcbiAgICBiYWNrZ3JvdW5kOiAjMTYxNzE5O1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHggMTZweCAwIDA7XG4gICAgbWFyZ2luLXRvcDogLTE2cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgfVxuXG4gIC8qIERyYWcgaGFuZGxlICovXG4gIC5jbGltLWhhbmRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDE0cHggMCAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIC5jbGltLWhhbmRsZS1waWxsIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMTgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzIGVhc2U7XG4gIH1cblxuICAuY2xpbS1oYW5kbGU6aG92ZXIgLmNsaW0taGFuZGxlLXBpbGwgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMzUpOyB9XG5cbiAgLyogSW50ZXJpb3IgLyBFeHRlcmlvciB0ZW1wIGluZm8gKi9cbiAgLmNsaW0tdGVtcC1pbmZvIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAwLjgyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjQ1KTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICAgIHBhZGRpbmc6IDAgMjBweCAxOHB4O1xuICB9XG5cbiAgLyogXHUyNTAwXHUyNTAwIE1haW4gY29udHJvbCByb3c6IFtQb3dlcl0gW1x1MjE5MCBUZW1wIFx1MjE5Ml0gW1ZlbnRdIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMCAqL1xuICAuY2xpbS1tYWluLXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAwIDI0cHggMjJweDtcbiAgfVxuXG4gIC5jbGltLWljb24tYnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDZweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC40KTtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBmb250LXNpemU6IDAuNzJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICBtaW4td2lkdGg6IDU2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBiYWNrZ3JvdW5kIDAuMTVzIGVhc2U7XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIC5jbGltLWljb24tYnRuOmhvdmVyICB7IGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNSk7IH1cbiAgLmNsaW0taWNvbi1idG4uY2xpbS1hY3RpdmUgeyBjb2xvcjogI2ZmZmZmZjsgfVxuXG4gIC5jbGltLWljb24tYnRuIC5pY29uIHtcbiAgICB3aWR0aDogMjhweDtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gIH1cblxuICAuY2xpbS1pY29uLWJ0biAuYnRuLWltZyB7XG4gICAgd2lkdGg6IDQ0cHg7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gIC8qIFRlbXBlcmF0dXJlIFx1MjE5MCB2YWx1ZSBcdTIxOTIgYXJyb3dzICovXG4gIC5jbGltLXRlbXAtY29udHJvbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMnB4O1xuICAgIGZsZXg6IDE7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAuY2xpbS1hcnJvdy1idG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4zNSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDEwcHggOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzIGVhc2UsIGNvbG9yIDAuMTVzIGVhc2U7XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIC5jbGltLWFycm93LWJ0bjpob3ZlciAgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDcpOyBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjkpOyB9XG4gIC5jbGltLWFycm93LWJ0bjphY3RpdmUgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMTIpOyB9XG5cbiAgLmNsaW0tYXJyb3ctYnRuIC5pY29uIHtcbiAgICB3aWR0aDogMjJweDtcbiAgICBoZWlnaHQ6IDIycHg7XG4gIH1cblxuICAuY2xpbS10ZW1wLXZhbHVlIHtcbiAgICBmb250LXNpemU6IDIuOGVtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgbWluLXdpZHRoOiAzY2g7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLyogXHUyNTAwXHUyNTAwIERlZnJvc3QgQ2FyIFx1MjAxNCBmdWxsLXdpZHRoIG91dGxpbmVkIGJ1dHRvbiBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgKi9cbiAgLmNsaW0tZnVsbC1idG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDE0cHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xuICAgIG1hcmdpbjogMCAxNnB4IDEwcHg7XG4gICAgcGFkZGluZzogMTZweCAxOHB4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xMik7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjc1KTtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xuICB9XG5cbiAgLmNsaW0tZnVsbC1idG46aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDQpOyB9XG5cbiAgLmNsaW0tZnVsbC1idG4uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzMiwzMywzOSwwLjEyKTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjMyLDMzLDM5LDAuMyk7XG4gICAgY29sb3I6ICNmZjcwNzA7XG4gIH1cblxuICAuY2xpbS1mdWxsLWJ0biAuaWNvbiB7XG4gICAgd2lkdGg6IDIycHg7XG4gICAgaGVpZ2h0OiAyMnB4O1xuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNDUpO1xuICB9XG5cbiAgLmNsaW0tZnVsbC1idG4uYWN0aXZlIC5pY29uIHsgY29sb3I6ICNlODIxMjc7IH1cblxuICAuY2xpbS1mdWxsLWJ0biAuYnRuLWltZy13aWRlIHtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gIC8qIFx1MjUwMFx1MjUwMCBFeHBhbmRhYmxlIHNlY3Rpb24gXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwICovXG4gIC5jbGltLWV4cGFuZGVkLWNvbnRlbnQge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWF4LWhlaWdodDogMDtcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMzVzIGVhc2U7XG4gIH1cblxuICAuY2xpbS1zaGVldC5leHBhbmRlZCAuY2xpbS1leHBhbmRlZC1jb250ZW50IHtcbiAgICBtYXgtaGVpZ2h0OiA1MjBweDtcbiAgfVxuXG4gIC8qIExpc3QgZ3JvdXAgKi9cbiAgLmNsaW0tbGlzdC1ncm91cCB7XG4gICAgbWFyZ2luOiAwIDE2cHggMTBweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLmNsaW0tbGlzdC1ncm91cC0tbGFzdCB7IG1hcmdpbi1ib3R0b206IDE2cHg7IH1cblxuICAuY2xpbS1saXN0LWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNnB4IDE4cHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDcpO1xuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNjUpO1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogMC44OGVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZ2FwOiAxNHB4O1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cyBlYXNlO1xuICB9XG5cbiAgLmNsaW0tbGlzdC1pdGVtOmxhc3QtY2hpbGQgeyBib3JkZXItYm90dG9tOiBub25lOyB9XG4gIC5jbGltLWxpc3QtaXRlbTpob3ZlciAgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDQpOyB9XG4gIC5jbGltLWxpc3QtaXRlbTphY3RpdmUgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDgpOyB9XG5cbiAgLmNsaW0tbGlzdC1pdGVtLmhvdCB7IGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOSk7IH1cblxuICAuY2xpbS1saXN0LWljb24ge1xuICAgIHdpZHRoOiAyMnB4O1xuICAgIGhlaWdodDogMjJweDtcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjM1KTtcbiAgfVxuXG4gIC5jbGltLWxpc3QtaXRlbS5ob3QgLmNsaW0tbGlzdC1pY29uIHsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42NSk7IH1cblxuICAuY2xpbS1saXN0LWxhYmVsIHsgZmxleDogMTsgfVxuXG4gIC5jbGltLWxpc3QtdmFsdWUge1xuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMzUpO1xuICB9XG5cbiAgLmNsaW0tbGlzdC1pdGVtLmhvdCAuY2xpbS1saXN0LXZhbHVlIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjcpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cblxuICAuY2xpbS1zZWN0aW9uLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMTJweCAxNnB4IDhweDtcbiAgfVxuXG4gIC5jbGltLXNlcGFyYXRvciB7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xuICAgIG1hcmdpbjogOHB4IDE2cHg7XG4gIH1cblxuICAvKiBTZWdtZW50ZWQgY29udHJvbCAqL1xuICAuY2xpbS1zZWdtZW50LWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBnYXA6IDJweDtcbiAgfVxuXG4gIC5jbGltLXNlZ21lbnQtYnRuIHtcbiAgICBmbGV4OiAxO1xuICAgIHBhZGRpbmc6IDE0cHggNnB4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjM1KTtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBmb250LXNpemU6IDAuODVlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cyBlYXNlLCBjb2xvciAwLjE1cyBlYXNlO1xuICB9XG5cbiAgLmNsaW0tc2VnbWVudC1idG46aG92ZXIgeyBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjY1KTsgfVxuXG4gIC5jbGltLXNlZ21lbnQtYnRuLnNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDgpO1xuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOSk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuXG4gIC8qIFx1MjUwMFx1MjUwMCBMYW5kc2NhcGUgbGF5b3V0IFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMCAqL1xuXG4gIC5jbGltYXRlLW1lbnUubGFuZHNjYXBlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG5cbiAgLyogQ2FyIGFyZWE6IGxlZnQgc2lkZSwgaGVpZ2h0IGRyaXZlbiBieSBpbWFnZSBhc3BlY3QgcmF0aW8gKi9cbiAgLmxhbmRzY2FwZSAuY2xpbS1jYXItYXJlYSB7XG4gICAgZmxleDogMCAwIDUwJTtcbiAgICBtYXgtd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLyogSWdub3JlIGNvbGxhcHNlIGluIGxhbmRzY2FwZSBcdTIwMTQgYWx3YXlzIHNob3cgZnVsbCBjYXIgKi9cbiAgLmxhbmRzY2FwZSAuY2xpbS1jYXItYXJlYS5jbGltLWNhci1jb2xsYXBzZWQge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIC5sYW5kc2NhcGUgLmNsaW0tY2FyLWlubmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAvKiBSaWdodCBwYW5lbDogbm8gc2Nyb2xsYmFyLCBjb250ZW50IGZsb3dzIG5hdHVyYWxseSAqL1xuICAubGFuZHNjYXBlIC5jbGltLXNoZWV0IHtcbiAgICBmbGV4OiAxO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDYpO1xuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gIH1cblxuICAvKiBIaWRlIGRyYWcgaGFuZGxlIGluIGxhbmRzY2FwZSBcdTIwMTQgbm90IG5lZWRlZCAqL1xuICAubGFuZHNjYXBlIC5jbGltLWhhbmRsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC8qIEF1dG8tZXhwYW5kIHRoZSBleHRyYSBjb250ZW50IGluIGxhbmRzY2FwZSAqL1xuICAubGFuZHNjYXBlIC5jbGltLWV4cGFuZGVkLWNvbnRlbnQge1xuICAgIG1heC1oZWlnaHQ6IG5vbmU7XG4gIH1cblxuICAvKiBUZW1wIGluZm86IGxlZnQtYWxpZ25lZCwgY29tcGFjdCAqL1xuICAubGFuZHNjYXBlIC5jbGltLXRlbXAtaW5mbyB7XG4gICAgcGFkZGluZzogMTJweCAxNnB4IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gIC8qIE1haW4gcm93OiB0aWdodGVyIGZvciBzaWRlIHBhbmVsICovXG4gIC5sYW5kc2NhcGUgLmNsaW0tbWFpbi1yb3cge1xuICAgIHBhZGRpbmc6IDAgMTZweCAxMnB4O1xuICB9XG5cbiAgLyogVGVtcGVyYXR1cmUgdmFsdWU6IHNjYWxlIGRvd24gZm9yIG5hcnJvd2VyIHBhbmVsICovXG4gIC5sYW5kc2NhcGUgLmNsaW0tdGVtcC12YWx1ZSB7XG4gICAgZm9udC1zaXplOiAyLjJlbTtcbiAgfVxuXG4gIC8qIFBvd2VyL1ZlbnQgYnV0dG9uczogdGlnaHRlciAqL1xuICAubGFuZHNjYXBlIC5jbGltLWljb24tYnRuIHtcbiAgICBwYWRkaW5nOiA2cHggOHB4O1xuICAgIG1pbi13aWR0aDogNDhweDtcbiAgfVxuXG4gIC8qIERlZnJvc3QgYnV0dG9uOiBjb21wYWN0ICovXG4gIC5sYW5kc2NhcGUgLmNsaW0tZnVsbC1idG4ge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyOHB4KTtcbiAgICBtYXJnaW46IDAgMTRweCA2cHg7XG4gICAgcGFkZGluZzogMTJweCAxNHB4O1xuICB9XG5cbiAgLyogTGlzdCBncm91cHM6IGNvbXBhY3QgbWFyZ2lucyAqL1xuICAubGFuZHNjYXBlIC5jbGltLWxpc3QtZ3JvdXAge1xuICAgIG1hcmdpbjogMCAxNHB4IDZweDtcbiAgfVxuXG4gIC5sYW5kc2NhcGUgLmNsaW0tbGlzdC1pdGVtIHtcbiAgICBwYWRkaW5nOiAxMnB4IDE0cHg7XG4gIH1cblxuICAubGFuZHNjYXBlIC5jbGltLXNlY3Rpb24tdGl0bGUge1xuICAgIHBhZGRpbmc6IDhweCAxNHB4IDRweDtcbiAgICBmb250LXNpemU6IDAuODVlbTtcbiAgfVxuXG4gIC5sYW5kc2NhcGUgLmNsaW0tc2VwYXJhdG9yIHtcbiAgICBtYXJnaW46IDRweCAxNHB4O1xuICB9XG5cbiAgLmxhbmRzY2FwZSAuY2xpbS1zZWdtZW50LWdyb3VwIHtcbiAgICBwYWRkaW5nOiAzcHg7XG4gIH1cblxuICAubGFuZHNjYXBlIC5jbGltLXNlZ21lbnQtYnRuIHtcbiAgICBwYWRkaW5nOiAxMHB4IDZweDtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICB9XG5cbmA7XG5cbi8vIFx1MjUwMFx1MjUwMCBDb250cm9scyBwYW5lbCBzdHlsZXMgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cbmV4cG9ydCBjb25zdCBjb250cm9sc1N0eWxlcyA9IGNzc2BcbiAgLmNvbnRyb2xzLW1lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLyogQ29udHJvbHM6IGNhciBpbnRlcmFjdGlvbiBhcmVhICovXG4gIC5jdHJsLWNhci1hcmVhIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogIzE2MTcxOTtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAuY3RybC1jYXItYmcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBpbnNldDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBvcGFjaXR5OiAwLjg1O1xuICB9XG5cbiAgLyogVGFwIHpvbmVzIFx1MjAxNCBmdWxseSB0cmFuc3BhcmVudCwgbm8gYm9yZGVycyAqL1xuICAuY3RybC16b25lIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjc1KTtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMTJweCAyNHB4O1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuXG4gIC5jdHJsLXpvbmU6aG92ZXIgIHsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMSk7IH1cbiAgLmN0cmwtem9uZTphY3RpdmUgeyBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjUpOyB9XG5cbiAgLyogRnJ1bms6IG9uIHRoZSBob29kICovXG4gIC5jdHJsLWZydW5rIHtcbiAgICB0b3A6IDE0JTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cblxuICAvKiBMb2NrOiBvbiBnbGFzcyByb29mIFx1MjAxNCA1MCUgKGNlbnRlcikgKi9cbiAgLmN0cmwtbG9jayB7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNDgpO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICAuY3RybC1sb2NrOmhvdmVyIHsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTsgfVxuXG4gIC5jdHJsLWxvY2sgLmljb24ge1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgfVxuXG4gIC8qIFRydW5rOiByZWFyIGRlY2sgKi9cbiAgLmN0cmwtdHJ1bmsge1xuICAgIHRvcDogNzglO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxuXG4gIC8qIENoYXJnZSBwb3J0OiByZWFyLWxlZnQgdGFpbCAqL1xuICAuY3RybC1wb3J0IHtcbiAgICB0b3A6IDgyJTtcbiAgICBsZWZ0OiAyMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgcGFkZGluZzogOHB4IDEwcHg7XG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4yOCk7XG4gIH1cblxuICAuY3RybC1wb3J0OmhvdmVyIHsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42KTsgfVxuXG4gIC5jdHJsLXBvcnQgLmljb24ge1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGhlaWdodDogMThweDtcbiAgfVxuXG4gIC5jdHJsLXBvcnQucG9ydC1vcGVuIHsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC43NSk7IH1cblxuICAvKiBDb250cm9sczogYm90dG9tIGFjdGlvbiBiYXIgKi9cbiAgLmN0cmwtYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDE2cHggMTJweCAyMHB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpO1xuICB9XG5cbiAgLmN0cmwtYWN0aW9uLWJ0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA2cHg7XG4gICAgZmxleDogMTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC40NSk7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiA2cHggNHB4O1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZTtcbiAgfVxuXG4gIC5jdHJsLWFjdGlvbi1idG46aG92ZXIgIHsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTsgfVxuICAuY3RybC1hY3Rpb24tYnRuOmFjdGl2ZSB7IGNvbG9yOiAjZmZmZmZmOyB9XG5cbiAgLmN0cmwtYWN0aW9uLWJ0biAuaWNvbiB7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICB9XG5cbiAgLyogXHUyNTAwXHUyNTAwIExhbmRzY2FwZSBsYXlvdXQgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwICovXG5cbiAgLmNvbnRyb2xzLW1lbnUubGFuZHNjYXBlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuXG4gIC8qIEhlYWRlciBzcGFucyBmdWxsIHdpZHRoICovXG4gIC5sYW5kc2NhcGUgLnBhbmVsLWhlYWRlciB7XG4gICAgZmxleDogMCAwIDEwMCU7XG4gIH1cblxuICAvKiBDYXIgYXJlYTogbGVmdCBzaWRlICovXG4gIC5sYW5kc2NhcGUgLmN0cmwtY2FyLWFyZWEge1xuICAgIGZsZXg6IDAgMCA1NSU7XG4gICAgbWF4LXdpZHRoOiA1NSU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDM0MHB4O1xuICB9XG5cbiAgLyogQWN0aW9uIGJhcjogcmlnaHQgY29sdW1uLCB2ZXJ0aWNhbGx5IGNlbnRyZWQgKi9cbiAgLmxhbmRzY2FwZSAuY3RybC1hY3Rpb25zIHtcbiAgICBmbGV4OiAxO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgcGFkZGluZzogMjRweCAyMHB4O1xuICAgIGdhcDogNnB4O1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpO1xuICB9XG5cbiAgLyogQWN0aW9uIGJ1dHRvbnM6IGhvcml6b250YWwgcm93IHN0eWxlIGluIHRoZSB2ZXJ0aWNhbCBjb2x1bW4gKi9cbiAgLmxhbmRzY2FwZSAuY3RybC1hY3Rpb24tYnRuIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGdhcDogMTRweDtcbiAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gICAgZm9udC1zaXplOiAwLjgyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzIGVhc2UsIGNvbG9yIDAuMTVzIGVhc2U7XG4gIH1cblxuICAubGFuZHNjYXBlIC5jdHJsLWFjdGlvbi1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNCk7XG4gIH1cblxuICAubGFuZHNjYXBlIC5jdHJsLWFjdGlvbi1idG4gLmljb24ge1xuICAgIHdpZHRoOiAyMnB4O1xuICAgIGhlaWdodDogMjJweDtcbiAgfVxuXG5cbmA7XG5cbi8vIFx1MjUwMFx1MjUwMCBNYWluIGNhcmQgc3R5bGVzIChoZWFkZXIsIGNhciBpbWFnZSwgcXVpY2sgYWN0aW9ucywgbmF2IHJvd3MsIGV0Yy4pIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXG5leHBvcnQgY29uc3QgY2FyZFN0eWxlcyA9IGNzc2BcbiAgaGEtY2FyZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taGEtY2FyZC1iYWNrZ3JvdW5kLCAjMTYxNzE5KTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAvKiBcdTI1MDBcdTI1MDAgU3RhZ2dlcmVkIHBhbmVsIHRyYW5zaXRpb25zIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMCAqL1xuXG4gIEBrZXlmcmFtZXMgZmFkZVNsaWRlSW4ge1xuICAgIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOHB4KTsgfVxuICAgIHRvICAgeyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgY2hhcmdlUHVsc2Uge1xuICAgIDAlLCAxMDAlIHsgZmlsdGVyOiBicmlnaHRuZXNzKDEpIGRyb3Atc2hhZG93KDAgMCA2cHggcmdiYSgzNCwgMTk3LCA5NCwgMC4zKSkgZHJvcC1zaGFkb3coMCAwIDEycHggcmdiYSgzNCwgMTk3LCA5NCwgMC4xNSkpOyB9XG4gICAgNTAlICAgICAgeyBmaWx0ZXI6IGJyaWdodG5lc3MoMS41KSBkcm9wLXNoYWRvdygwIDAgMTRweCByZ2JhKDM0LCAxOTcsIDk0LCAwLjkpKSBkcm9wLXNoYWRvdygwIDAgMjhweCByZ2JhKDM0LCAxOTcsIDk0LCAwLjQpKTsgfVxuICB9XG5cbiAgLmNhci1vdmVybGF5LmNoYXJnaW5nLWdsb3cge1xuICAgIGFuaW1hdGlvbjogY2hhcmdlUHVsc2UgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIH1cblxuICAuaGVhZGVyIHtcbiAgICBhbmltYXRpb246IGZhZGVTbGlkZUluIDAuMjVzIGVhc2Utb3V0IGJvdGg7XG4gIH1cblxuICAuY2FyLWltYWdlLWFyZWEge1xuICAgIGFuaW1hdGlvbjogZmFkZVNsaWRlSW4gMC4zcyBlYXNlLW91dCAwLjA1cyBib3RoO1xuICB9XG5cbiAgLnF1aWNrLWFjdGlvbnMge1xuICAgIGFuaW1hdGlvbjogZmFkZVNsaWRlSW4gMC4zcyBlYXNlLW91dCAwLjFzIGJvdGg7XG4gIH1cblxuICAubmF2LXJvdzpudGgtY2hpbGQoMSkgeyBhbmltYXRpb246IGZhZGVTbGlkZUluIDAuM3MgZWFzZS1vdXQgMC4xMnMgYm90aDsgfVxuICAubmF2LXJvdzpudGgtY2hpbGQoMikgeyBhbmltYXRpb246IGZhZGVTbGlkZUluIDAuM3MgZWFzZS1vdXQgMC4xNnMgYm90aDsgfVxuICAubmF2LXJvdzpudGgtY2hpbGQoMykgeyBhbmltYXRpb246IGZhZGVTbGlkZUluIDAuM3MgZWFzZS1vdXQgMC4yMHMgYm90aDsgfVxuICAubmF2LXJvdzpudGgtY2hpbGQoNCkgeyBhbmltYXRpb246IGZhZGVTbGlkZUluIDAuM3MgZWFzZS1vdXQgMC4yNHMgYm90aDsgfVxuICAubmF2LXJvdzpudGgtY2hpbGQoNSkgeyBhbmltYXRpb246IGZhZGVTbGlkZUluIDAuM3MgZWFzZS1vdXQgMC4yOHMgYm90aDsgfVxuICAubmF2LXJvdzpudGgtY2hpbGQoNikgeyBhbmltYXRpb246IGZhZGVTbGlkZUluIDAuM3MgZWFzZS1vdXQgMC4zMnMgYm90aDsgfVxuXG4gIC8qIFx1MjUwMFx1MjUwMCBIZWFkZXIgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwICovXG5cbiAgLmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogMjBweCAyMHB4IDEwcHg7XG4gIH1cblxuICAuaGVhZGVyLWxlZnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5jYXItbmFtZS1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDVweDtcbiAgfVxuXG4gIC5jYXItbmFtZSB7XG4gICAgZm9udC1zaXplOiAxLjU1ZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcbiAgICBsaW5lLWhlaWdodDogMS4xO1xuICB9XG5cbiAgLm5hbWUtY2hldnJvbiB7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMzUpO1xuICAgIG1hcmdpbi10b3A6IDJweDsgIC8qIG9wdGljYWwgYWxpZ25tZW50IHdpdGggbGFyZ2UgdGV4dCAqL1xuICB9XG5cbiAgLmJhdHRlcnktc3VtbWFyeSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogN3B4O1xuICAgIG1hcmdpbi10b3A6IDZweDtcbiAgfVxuXG4gIC8qIFNtYWxsIGlubGluZSBiYXR0ZXJ5IGJhciAqL1xuICAuYmF0dGVyeS1iYXItc21hbGwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMjhweDtcbiAgICBoZWlnaHQ6IDEzcHg7XG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNDUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLmJhdHRlcnktYmFyLXNtYWxsOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAtNXB4O1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB3aWR0aDogM3B4O1xuICAgIGhlaWdodDogNnB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC40NSk7XG4gICAgYm9yZGVyLXJhZGl1czogMCAxcHggMXB4IDA7XG4gIH1cblxuICAuYmF0dGVyeS1maWxsLXNtYWxsIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNHMgZWFzZTtcbiAgfVxuXG4gIC5iYXR0ZXJ5LWZpbGwtc21hbGwuaGlnaCAgIHsgYmFja2dyb3VuZDogI2ZmZmZmZjsgfVxuICAuYmF0dGVyeS1maWxsLXNtYWxsLm1lZGl1bSB7IGJhY2tncm91bmQ6ICNmMzljMTI7IH1cbiAgLmJhdHRlcnktZmlsbC1zbWFsbC5sb3cgICAgeyBiYWNrZ3JvdW5kOiAjZTgyMTI3OyB9XG5cbiAgLnJhbmdlLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMC44OGVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcbiAgfVxuXG4gIC5zdGF0dXMtdGV4dCB7XG4gICAgZm9udC1zaXplOiAwLjgyZW07XG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4zOCk7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xuICB9XG5cbiAgLmhlYWRlci1yaWdodCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNnB4O1xuICAgIHBhZGRpbmctdG9wOiAycHg7XG4gIH1cblxuICAuaWNvbi1idG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMzRweDtcbiAgICBoZWlnaHQ6IDM0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjM1KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZTtcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgLmljb24tYnRuOmhvdmVyIHsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTsgfVxuXG4gIC5pY29uLWJ0biAuaWNvbiB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICB9XG5cbiAgLyogXHUyNTAwXHUyNTAwIENhciBpbWFnZSBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgKi9cblxuICAuY2FyLWltYWdlLWFyZWEge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhc3BlY3QtcmF0aW86IDQxNyAvIDI2MjtcbiAgICBiYWNrZ3JvdW5kOiAjMTYxNzE5O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAuY2FyLWltYWdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaW5zZXQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuY2FyLW92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBpbnNldDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gIC5jYXItaW1hZ2UtcGxhY2Vob2xkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogOHB4O1xuICAgIHBhZGRpbmc6IDQ4cHggMDtcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjE4KTtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmNhci1pbWFnZS1wbGFjZWhvbGRlciAuaWNvbiB7XG4gICAgd2lkdGg6IDQ4cHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMTIpO1xuICB9XG5cbiAgLyogXHUyNTAwXHUyNTAwIFF1aWNrIGFjdGlvbiBpY29uIHJvdyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgKi9cblxuICAucXVpY2stYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMzJweDtcbiAgICBwYWRkaW5nOiAxNnB4IDAgMTRweDtcbiAgICBiYWNrZ3JvdW5kOiAjMTYxNzE5O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDcpO1xuICB9XG5cbiAgLnF1aWNrLWJ0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA0OHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2U7XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuXG4gIC5xdWljay1idG46aG92ZXIgIHsgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTsgfVxuICAucXVpY2stYnRuOmFjdGl2ZSB7IGNvbG9yOiAjZmZmZmZmOyB9XG5cbiAgLnF1aWNrLWJ0bi5xLWxvY2tlZCAgIHsgY29sb3I6ICNmZmZmZmY7IH0gICAgLyogbG9ja2VkIHN0YXRlICovXG4gIC5xdWljay1idG4ucS11bmxvY2tlZCB7IGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNCk7IH1cbiAgLnF1aWNrLWJ0bi5xLWFjdGl2ZSAgIHsgY29sb3I6ICNmZmZmZmY7IH0gICAgLyogb24gc3RhdGUgKGNoYXJnaW5nLCBjbGltYXRlKSAqL1xuXG4gIC5xdWljay1idG4gLmljb24ge1xuICAgIHdpZHRoOiAyNnB4O1xuICAgIGhlaWdodDogMjZweDtcbiAgfVxuXG4gIC8qIE9mZmljaWFsIFRlc2xhIFNWRyBidXR0b24gaW1hZ2VzIGluIHF1aWNrIGFjdGlvbnMgKi9cbiAgLnF1aWNrLWJ0biAuYnRuLWltZyB7XG4gICAgd2lkdGg6IDQ4cHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gIC8qIFx1MjUwMFx1MjUwMCBOYXYgcm93cyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgKi9cblxuICAubmF2LXJvd3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5uYXYtcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMThweCAyMHB4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA2KTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgZ2FwOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cyBlYXNlO1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAubmF2LXJvdzpob3ZlciAgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDMpOyB9XG4gIC5uYXYtcm93OmhvdmVyIC5uYXYtaWNvbiB7IGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7IH1cbiAgLm5hdi1yb3c6bGFzdC1jaGlsZCB7IGJvcmRlci1ib3R0b206IG5vbmU7IH1cblxuICAubmF2LXJvdzpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cblxuICAubmF2LXJvdy5hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjMyLDMzLDM5LDAuMDYpO1xuICB9XG5cbiAgLm5hdi1pY29uIHtcbiAgICB3aWR0aDogMjJweDtcbiAgICBoZWlnaHQ6IDIycHg7XG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4zOCk7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZTtcbiAgfVxuXG4gIC5uYXYtcm93LmFjdGl2ZSAubmF2LWljb24geyBjb2xvcjogI2U4MjEyNzsgfVxuXG4gIC8qIE9mZmljaWFsIFRlc2xhIFNWRyBidXR0b24gaW1hZ2VzIGluIG5hdiByb3dzICovXG4gIC5uYXYtYnRuLWltZyB7XG4gICAgd2lkdGg6IDI4cHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gIC5uYXYtdGV4dCB7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAycHg7XG4gIH1cblxuICAubmF2LWxhYmVsIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG5cbiAgLm5hdi1zdWJsYWJlbCB7XG4gICAgZm9udC1zaXplOiAwLjc1ZW07XG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4zOCk7XG4gIH1cblxuICAubmF2LXJvdy5hY3RpdmUgLm5hdi1zdWJsYWJlbCB7IGNvbG9yOiByZ2JhKDIzMiwzMywzOSwwLjcpOyB9XG5cbiAgLm5hdi1jaGV2cm9uIHtcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLCBjb2xvciAwLjE1cyBlYXNlO1xuICB9XG5cbiAgLm5hdi1yb3cuYWN0aXZlIC5uYXYtY2hldnJvbiB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIGNvbG9yOiByZ2JhKDIzMiwzMywzOSwwLjQ1KTtcbiAgfVxuXG4gIC8qIFx1MjUwMFx1MjUwMCBTdGF0ZSBiYWRnZXMgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwICovXG5cbiAgLnN0YXRlLWJhZGdlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAwLjY4ZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwYWRkaW5nOiAycHggOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgICBtYXJnaW4tdG9wOiAycHg7XG4gIH1cblxuICAuc3RhdGUtYmFkZ2UubG9ja2VkIHtcbiAgICBjb2xvcjogIzJlY2M3MTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDQ2LDIwNCwxMTMsMC4xMik7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg0NiwyMDQsMTEzLDAuMjUpO1xuICB9XG5cbiAgLnN0YXRlLWJhZGdlLnVubG9ja2VkIHtcbiAgICBjb2xvcjogI2YzOWMxMjtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MywxNTYsMTgsMC4xMik7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNDMsMTU2LDE4LDAuMjUpO1xuICB9XG5cbiAgLyogXHUyNTAwXHUyNTAwIFNldHRpbmdzIG92ZXJsYXkgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwICovXG5cbiAgLnNldHRpbmdzLW92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBpbnNldDogMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLnNldHRpbmdzLXBhbmVsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjMTYxNzE5O1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHggMTZweCAwIDA7XG4gICAgcGFkZGluZzogMCAwIDIwcHg7XG4gICAgYW5pbWF0aW9uOiBzZXR0aW5nc1NsaWRlVXAgMC4ycyBlYXNlLW91dDtcbiAgfVxuXG4gIEBrZXlmcmFtZXMgc2V0dGluZ3NTbGlkZVVwIHtcbiAgICBmcm9tIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpOyB9XG4gICAgdG8gICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICB9XG5cbiAgLnNldHRpbmdzLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxNnB4IDIwcHggMTJweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA3KTtcbiAgfVxuXG4gIC5zZXR0aW5ncy10aXRsZSB7XG4gICAgZm9udC1zaXplOiAwLjk1ZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuXG4gIC5zZXR0aW5ncy1jbG9zZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA4KTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNik7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzIGVhc2U7XG4gIH1cblxuICAuc2V0dGluZ3MtY2xvc2U6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMTUpOyB9XG5cbiAgLnNldHRpbmdzLXJvd3Mge1xuICAgIHBhZGRpbmc6IDhweCAwO1xuICB9XG5cbiAgLnNldHRpbmdzLXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA2KTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgZ2FwOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cyBlYXNlO1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAuc2V0dGluZ3Mtcm93Omxhc3QtY2hpbGQgeyBib3JkZXItYm90dG9tOiBub25lOyB9XG4gIC5zZXR0aW5ncy1yb3c6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDMpOyB9XG5cbiAgLnNldHRpbmdzLXJvdzpudGgtY2hpbGQoMSkgeyBhbmltYXRpb246IGZhZGVTbGlkZUluIDAuMjVzIGVhc2Utb3V0IDAuMXMgYm90aDsgfVxuICAuc2V0dGluZ3Mtcm93Om50aC1jaGlsZCgyKSB7IGFuaW1hdGlvbjogZmFkZVNsaWRlSW4gMC4yNXMgZWFzZS1vdXQgMC4xNnMgYm90aDsgfVxuICAuc2V0dGluZ3Mtcm93Om50aC1jaGlsZCgzKSB7IGFuaW1hdGlvbjogZmFkZVNsaWRlSW4gMC4yNXMgZWFzZS1vdXQgMC4yMnMgYm90aDsgfVxuXG4gIEBrZXlmcmFtZXMgZmFkZVNsaWRlSW4ge1xuICAgIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOHB4KTsgfVxuICAgIHRvICAgeyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbiAgfVxuICAuc2V0dGluZ3Mtcm93OmFjdGl2ZSB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNik7IH1cblxuICAuc2V0dGluZ3Mtcm93LWljb24ge1xuICAgIHdpZHRoOiAyMnB4O1xuICAgIGhlaWdodDogMjJweDtcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjQ1KTtcbiAgfVxuXG4gIC5zZXR0aW5ncy1yb3ctdGV4dCB7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAycHg7XG4gIH1cblxuICAuc2V0dGluZ3Mtcm93LWxhYmVsIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG5cbiAgLnNldHRpbmdzLXJvdy1zdWIge1xuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMzgpO1xuICB9XG5cbiAgLnNldHRpbmdzLXJvdy1jaGV2cm9uIHtcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcbiAgfVxuXG4gIC8qIFx1MjUwMFx1MjUwMCBMYW5kaW5nIGJvZHkgKHBvcnRyYWl0ID0gdmVydGljYWwgc3RhY2ssIGxhbmRzY2FwZSA9IHNpZGUtYnktc2lkZSkgXHUyNTAwXHUyNTAwICovXG5cbiAgLmxhbmRpbmctYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLmxhbmRpbmctbGVmdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLyogXHUyNTAwXHUyNTAwIExhbmRzY2FwZSBsYXlvdXQgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwICovXG5cbiAgaGEtY2FyZC5sYW5kc2NhcGUge1xuICAgIHdpZHRoOiAxNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMjUlO1xuICB9XG5cbiAgaGEtY2FyZC5sYW5kc2NhcGUgLmxhbmRpbmctYm9keSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuXG4gIGhhLWNhcmQubGFuZHNjYXBlIC5sYW5kaW5nLWxlZnQge1xuICAgIGZsZXg6IDAgMCA1NSU7XG4gICAgbWF4LXdpZHRoOiA1NSU7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA2KTtcbiAgfVxuXG4gIGhhLWNhcmQubGFuZHNjYXBlIC5jYXItaW1hZ2UtYXJlYSB7XG4gICAgYXNwZWN0LXJhdGlvOiBhdXRvO1xuICAgIGZsZXg6IDE7XG4gICAgbWluLWhlaWdodDogMjAwcHg7XG4gIH1cblxuICBoYS1jYXJkLmxhbmRzY2FwZSAucXVpY2stYWN0aW9ucyB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICBwYWRkaW5nOiAxMnB4IDAgMTBweDtcbiAgICBnYXA6IDI0cHg7XG4gIH1cblxuICBoYS1jYXJkLmxhbmRzY2FwZSAubmF2LXJvd3Mge1xuICAgIGZsZXg6IDE7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxuXG4gIGhhLWNhcmQubGFuZHNjYXBlIC5uYXYtcm93IHtcbiAgICBwYWRkaW5nOiAxNHB4IDE4cHg7XG4gIH1cblxuICBoYS1jYXJkLmxhbmRzY2FwZSAubmF2LXJvdyAubmF2LWxhYmVsIHtcbiAgICBmb250LXNpemU6IDAuOTJlbTtcbiAgfVxuXG4gIGhhLWNhcmQubGFuZHNjYXBlIC5uYXYtcm93IC5uYXYtc3VibGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMC43MmVtO1xuICB9XG5cbiAgLyogXHUyNTAwXHUyNTAwIENhcmQgc2l6ZSBcdTIwMTQgdW5pZm9ybSB6b29tIHNjYWxpbmcgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwICovXG5cbiAgaGEtY2FyZC5zaXplLXNtYWxsIHsgem9vbTogMC44NTsgfVxuICBoYS1jYXJkLnNpemUtbGFyZ2UgeyB6b29tOiAxLjE1OyB9XG5cbiAgLyogXHUyNTAwXHUyNTAwIFNldHRpbmdzOiBDYXJkIFNpemUgc2VnbWVudGVkIGNvbnRyb2wgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwICovXG5cbiAgLnNldHRpbmdzLXJvdy1zdGF0aWMge1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxuXG4gIC5zZXR0aW5ncy1yb3ctc3RhdGljOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIC5zZXR0aW5ncy1zaXplLWNvbnRyb2wge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAycHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA2KTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcGFkZGluZzogMnB4O1xuICB9XG5cbiAgLnNldHRpbmdzLXNpemUtYnRuIHtcbiAgICBwYWRkaW5nOiA2cHggMTRweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC40KTtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBmb250LXNpemU6IDAuNzhlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cyBlYXNlLCBjb2xvciAwLjE1cyBlYXNlO1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAuc2V0dGluZ3Mtc2l6ZS1idG46aG92ZXIge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNyk7XG4gIH1cblxuICAuc2V0dGluZ3Mtc2l6ZS1idG4uc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4xMik7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuYDtcbiIsICIvLyBFbnRpdHkgc3VmZml4IGNvbnN0YW50cyBcdTIwMTQgYWxsIElEcyBhcmUgZGVyaXZlZCBmcm9tIGNhcl9uYW1lIGF0IHJ1bnRpbWUuXG4vLyBQYXR0ZXJuOiB7ZW50aXR5X3R5cGV9LntjYXJfbmFtZX1fe1NVRkZJWH1cblxuZXhwb3J0IGNvbnN0IEVOVElUSUVTID0ge1xuICAvLyBTZW5zb3JzXG4gIEJBVFRFUllfTEVWRUw6ICAgICAgICAnc2Vuc29yLntjYXJfbmFtZX1fYmF0dGVyeScsXG4gIEJBVFRFUllfUkFOR0U6ICAgICAgICAnc2Vuc29yLntjYXJfbmFtZX1fYmF0dGVyeV9yYW5nZScsXG4gIENIQVJHRV9SQVRFOiAgICAgICAgICAnc2Vuc29yLntjYXJfbmFtZX1fY2hhcmdlX3JhdGUnLFxuICBDSEFSR0VfTElNSVQ6ICAgICAgICAgJ3NlbnNvci57Y2FyX25hbWV9X2NoYXJnZV9saW1pdCcsXG4gIENIQVJHSU5HX1NUQVRFOiAgICAgICAnc2Vuc29yLntjYXJfbmFtZX1fY2hhcmdpbmdfc3RhdGUnLFxuICBURU1QRVJBVFVSRV9JTlNJREU6ICAgJ3NlbnNvci57Y2FyX25hbWV9X3RlbXBlcmF0dXJlX2luc2lkZScsXG4gIFRFTVBFUkFUVVJFX09VVFNJREU6ICAnc2Vuc29yLntjYXJfbmFtZX1fdGVtcGVyYXR1cmVfb3V0c2lkZScsXG4gIFNQRUVEOiAgICAgICAgICAgICAgICAnc2Vuc29yLntjYXJfbmFtZX1fc3BlZWQnLFxuICBPRE9NRVRFUjogICAgICAgICAgICAgJ3NlbnNvci57Y2FyX25hbWV9X29kb21ldGVyJyxcblxuICAvLyBCaW5hcnkgc2Vuc29yc1xuICBDSEFSR0lORzogICAgICAgICAgICAgJ2JpbmFyeV9zZW5zb3Iue2Nhcl9uYW1lfV9jaGFyZ2luZycsXG4gIFBMVUdHRURfSU46ICAgICAgICAgICAnYmluYXJ5X3NlbnNvci57Y2FyX25hbWV9X3BsdWdnZWRfaW4nLFxuICBQQVJLSU5HX0JSQUtFOiAgICAgICAgJ2JpbmFyeV9zZW5zb3Iue2Nhcl9uYW1lfV9wYXJraW5nX2JyYWtlJyxcbiAgRlJVTks6ICAgICAgICAgICAgICAgICdiaW5hcnlfc2Vuc29yLntjYXJfbmFtZX1fZnJ1bmsnLFxuICBUUlVOSzogICAgICAgICAgICAgICAgJ2JpbmFyeV9zZW5zb3Iue2Nhcl9uYW1lfV90cnVuaycsXG4gIERPT1JTOiAgICAgICAgICAgICAgICAnYmluYXJ5X3NlbnNvci57Y2FyX25hbWV9X2Rvb3JzJyxcbiAgV0lORE9XUzogICAgICAgICAgICAgICdiaW5hcnlfc2Vuc29yLntjYXJfbmFtZX1fd2luZG93cycsXG4gIExPQ0tFRDogICAgICAgICAgICAgICAnYmluYXJ5X3NlbnNvci57Y2FyX25hbWV9X2xvY2tlZCcsXG4gIE9OTElORTogICAgICAgICAgICAgICAnYmluYXJ5X3NlbnNvci57Y2FyX25hbWV9X29ubGluZScsXG4gIFNFTlRSWV9NT0RFOiAgICAgICAgICAnYmluYXJ5X3NlbnNvci57Y2FyX25hbWV9X3NlbnRyeV9tb2RlJyxcblxuICAvLyBMb2Nrc1xuICBET09SX0xPQ0s6ICAgICAgICAgICAgJ2xvY2sue2Nhcl9uYW1lfV9kb29ycycsXG5cbiAgLy8gU3dpdGNoZXNcbiAgQ0hBUkdFUl9TV0lUQ0g6ICAgICAgICdzd2l0Y2gue2Nhcl9uYW1lfV9jaGFyZ2VyJyxcbiAgU0VOVFJZX01PREVfU1dJVENIOiAgICdzd2l0Y2gue2Nhcl9uYW1lfV9zZW50cnlfbW9kZScsXG4gIERFRlJPU1RfU1dJVENIOiAgICAgICAnc3dpdGNoLntjYXJfbmFtZX1fZGVmcm9zdCcsXG4gIENBTVBfTU9ERTogICAgICAgICAgICAnc3dpdGNoLntjYXJfbmFtZX1fY2FtcF9tb2RlJyxcbiAgRE9HX01PREU6ICAgICAgICAgICAgICdzd2l0Y2gue2Nhcl9uYW1lfV9kb2dfbW9kZScsXG5cbiAgLy8gU2VsZWN0IFx1MjAxNCBjYWJpbiBvdmVyaGVhdCBwcm90ZWN0aW9uIChvcHRpb25zOiBPZmYgLyBObyBBL0MgLyBPbilcbiAgQ0FCSU5fT1ZFUkhFQVQ6ICAgICAgICdzZWxlY3Que2Nhcl9uYW1lfV9jYWJpbl9vdmVyaGVhdF9wcm90ZWN0aW9uJyxcblxuICAvLyBTZWxlY3QgZW50aXRpZXMgXHUyMDE0IGhlYXRlZCBzZWF0cyAoZnJvbnQgKyByZWFyKVxuICBIRUFURURfU0VBVF9MRUZUOiAgICAgICAgICdzZWxlY3Que2Nhcl9uYW1lfV9oZWF0ZWRfc2VhdF9sZWZ0JyxcbiAgSEVBVEVEX1NFQVRfUklHSFQ6ICAgICAgICAnc2VsZWN0LntjYXJfbmFtZX1faGVhdGVkX3NlYXRfcmlnaHQnLFxuICBIRUFURURfU0VBVF9SRUFSX0xFRlQ6ICAgICdzZWxlY3Que2Nhcl9uYW1lfV9oZWF0ZWRfc2VhdF9yZWFyX2xlZnQnLFxuICBIRUFURURfU0VBVF9SRUFSX0NFTlRFUjogICdzZWxlY3Que2Nhcl9uYW1lfV9oZWF0ZWRfc2VhdF9yZWFyX2NlbnRlcicsXG4gIEhFQVRFRF9TRUFUX1JFQVJfUklHSFQ6ICAgJ3NlbGVjdC57Y2FyX25hbWV9X2hlYXRlZF9zZWF0X3JlYXJfcmlnaHQnLFxuXG4gIC8vIENsaW1hdGVcbiAgQ0xJTUFURTogICAgICAgICAgICAgICdjbGltYXRlLntjYXJfbmFtZX1faHZhY19jbGltYXRlX3N5c3RlbScsXG5cbiAgLy8gTnVtYmVycyAoY29udHJvbGxhYmxlKVxuICBDSEFSR0VfTElNSVRfTlVNQkVSOiAgJ251bWJlci57Y2FyX25hbWV9X2NoYXJnZV9saW1pdCcsXG4gIENIQVJHSU5HX0FNUFNfTlVNQkVSOiAnbnVtYmVyLntjYXJfbmFtZX1fY2hhcmdpbmdfYW1wcycsXG5cbiAgLy8gQnV0dG9uc1xuICBDSEFSR0VfUE9SVF9PUEVOOiAgICAgJ2J1dHRvbi57Y2FyX25hbWV9X2NoYXJnZV9wb3J0X29wZW4nLFxuICBDSEFSR0VfUE9SVF9DTE9TRTogICAgJ2J1dHRvbi57Y2FyX25hbWV9X2NoYXJnZV9wb3J0X2Nsb3NlJyxcbiAgVkVOVF9XSU5ET1dTOiAgICAgICAgICdidXR0b24ue2Nhcl9uYW1lfV92ZW50X3dpbmRvd3MnLFxuICBDTE9TRV9XSU5ET1dTOiAgICAgICAgJ2J1dHRvbi57Y2FyX25hbWV9X2Nsb3NlX3dpbmRvd3MnLFxuICBIT1JOOiAgICAgICAgICAgICAgICAgJ2J1dHRvbi57Y2FyX25hbWV9X2hvcm4nLFxuICBGTEFTSF9MSUdIVFM6ICAgICAgICAgJ2J1dHRvbi57Y2FyX25hbWV9X2ZsYXNoX2xpZ2h0cycsXG4gIFJFTU9URV9TVEFSVDogICAgICAgICAnYnV0dG9uLntjYXJfbmFtZX1fcmVtb3RlX3N0YXJ0JyxcbiAgT1BFTl9GUlVOSzogICAgICAgICAgICdidXR0b24ue2Nhcl9uYW1lfV9mcnVuaycsXG4gIE9QRU5fVFJVTks6ICAgICAgICAgICAnYnV0dG9uLntjYXJfbmFtZX1fdHJ1bmsnLFxuICBGT1JDRV9VUERBVEU6ICAgICAgICAgJ2J1dHRvbi57Y2FyX25hbWV9X2ZvcmNlX2RhdGFfdXBkYXRlJyxcblxuICAvLyBDb3ZlcnMgKHN0YXRlOiBvcGVuL2Nsb3NlZCwgc2VydmljZTogY292ZXIub3Blbl9jb3ZlciAvIGNsb3NlX2NvdmVyIC8gdG9nZ2xlX2NvdmVyKVxuICBXSU5ET1dTX0NPVkVSOiAgICAgICAgJ2NvdmVyLntjYXJfbmFtZX1fd2luZG93cycsXG4gIEZSVU5LX0NPVkVSOiAgICAgICAgICAnY292ZXIue2Nhcl9uYW1lfV9mcnVuaycsXG4gIENIQVJHRVJfRE9PUjogICAgICAgICAnY292ZXIue2Nhcl9uYW1lfV9jaGFyZ2VyX2Rvb3InLFxuXG4gIC8vIFNlbnNvcnMgXHUyMDE0IGNoYXJnaW5nIHNlc3Npb25cbiAgRU5FUkdZX0FEREVEOiAgICAgICAgICdzZW5zb3Iue2Nhcl9uYW1lfV9lbmVyZ3lfYWRkZWQnLFxuXG4gIC8vIERldmljZSB0cmFja2VyXG4gIExPQ0FUSU9OOiAgICAgICAgICAgICAnZGV2aWNlX3RyYWNrZXIue2Nhcl9uYW1lfV9sb2NhdGlvbl90cmFja2VyJyxcbn07XG5cbi8qKlxuICogUmVzb2x2ZSBhbiBlbnRpdHkgSUQgdGVtcGxhdGUgZm9yIGEgZ2l2ZW4gY2FyX25hbWUuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGUgIFx1MjAxNCBlLmcuIEVOVElUSUVTLkJBVFRFUllfTEVWRUxcbiAqIEBwYXJhbSB7c3RyaW5nfSBjYXJOYW1lICAgXHUyMDE0IGUuZy4gJ3RlcnJhbmNlJ1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVudGl0eUlkKHRlbXBsYXRlLCBjYXJOYW1lKSB7XG4gIHJldHVybiB0ZW1wbGF0ZS5yZXBsYWNlKCd7Y2FyX25hbWV9JywgY2FyTmFtZSk7XG59XG4iLCAiLy8gVGVzbGEgQ2FyZCBcdTIwMTQgU1ZHIEljb24gU2V0XG4vLyBUYWJsZXIgSWNvbnMgKE1JVCk6IHN0cm9rZS13aWR0aCBhZGp1c3RlZCB0byAxLjUsIGJsYW5rIGNsaXBwaW5nIHBhdGggcmVtb3ZlZC5cbi8vIEN1c3RvbSBpY29ucyBmb3IgVGVzbGEtc3BlY2lmaWMgc2hhcGVzIHdoZXJlIG5vIFRhYmxlciBlcXVpdmFsZW50IGV4aXN0cy5cbi8vIEFsbCBpY29uczogdmlld0JveCAwIDAgMjQgMjQsIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiLCBzdHJva2Utd2lkdGg9XCIxLjVcIixcbi8vICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiLCBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiLCBmaWxsPVwibm9uZVwiXG5cbmV4cG9ydCBjb25zdCBJQ09OUyA9IHtcblxuICAvLyBcdTI1MDBcdTI1MDAgTG9jayAvIFVubG9jayBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxuICAvLyBDdXN0b20gXHUyMDE0IGZpbGxlZCBwYWRsb2NrIChleHRyYWN0ZWQgZnJvbSBUZXNsYV9Eb29yX0xvY2suc3ZnLCBpY29uIG9ubHkpXG4gIGxvY2s6IGA8c3ZnIHZpZXdCb3g9XCIyNCAxMyA1NCA2N1wiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBzdHJva2U9XCJub25lXCI+XG4gICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJcbiAgICAgIE0gNTEuMDEgMTUuNjIgQyA2MC4yOSAxNS42MyA2Ny4zNiAyMi44MSA2Ny4zOSAzMi4wMCBRIDY3LjQwIDM1LjY2IDY3LjQwIDM4LjIzIEEgMC42NyAwLjY3IDAuMCAwIDAgNjcuOTEgMzguODkgQyA3MS4wMiAzOS42NCA3My4xOSAzOS42NyA3NC43OCA0Mi45OSBRIDc1LjUzIDQ0LjU4IDc1LjUzIDQ5LjEyIFEgNzUuNTEgNjkuNTQgNzUuNTAgNjkuOTcgUSA3NS4zNCA3NC42MCA3Mi4xMyA3Ni41NCBRIDcwLjYzIDc3LjQ1IDY0LjY1IDc3LjQ4IFEgNTcuODMgNzcuNTEgNTAuOTkgNzcuNTAgUSA0NC4xNSA3Ny41MCAzNy4zMiA3Ny40NyBRIDMxLjM1IDc3LjQ0IDI5Ljg1IDc2LjUyIFEgMjYuNjQgNzQuNTggMjYuNDggNjkuOTUgUSAyNi40NyA2OS41MiAyNi40NyA0OS4xMCBRIDI2LjQ3IDQ0LjU2IDI3LjIyIDQyLjk3IEMgMjguODEgMzkuNjUgMzAuOTggMzkuNjMgMzQuMDkgMzguODggQSAwLjY3IDAuNjcgMC4wIDAgMCAzNC42MCAzOC4yMiBRIDM0LjYxIDM1LjY1IDM0LjYyIDMxLjk5IEMgMzQuNjUgMjIuODAgNDEuNzQgMTUuNjIgNTEuMDEgMTUuNjIgWlxuICAgICAgTSAzOS45NSAzOS4wMCBMIDYyLjA1IDM5LjAwIEEgMC41NyAwLjU3IDAuMCAwIDAgNjIuNjIgMzguNDMgTCA2Mi42MiAzMi44MCBBIDEyLjMwIDExLjQ5IDkwLjAgMCAwIDUxLjEzIDIwLjUwIEwgNTAuODcgMjAuNTAgQSAxMi4zMCAxMS40OSAtOTAuMCAwIDAgMzkuMzggMzIuODAgTCAzOS4zOCAzOC40MyBBIDAuNTcgMC41NyAwLjAgMCAwIDM5Ljk1IDM5LjAwIFpcIi8+XG4gIDwvc3ZnPmAsXG5cbiAgLy8gQ3VzdG9tIFx1MjAxNCBmaWxsZWQgb3BlbiBwYWRsb2NrIChleHRyYWN0ZWQgZnJvbSBUZXNsYV9Eb29yX1VubG9jay5zdmcsIGljb24gb25seSlcbiAgdW5sb2NrOiBgPHN2ZyB2aWV3Qm94PVwiOSA4IDcwIDcyXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHN0cm9rZT1cIm5vbmVcIj5cbiAgICA8cGF0aCBkPVwiXG4gICAgICBNIDQwLjQwIDM4LjU5IEEgMC4zOSAwLjM5IDAuMCAwIDAgNDAuNzkgMzguOTggUSA2NS4wOSAzOS4wMiA2Ni40NSAzOC45NyBDIDcxLjgwIDM4Ljc5IDc2LjUwIDQwLjM4IDc2LjQ5IDQ2LjAxIFEgNzYuNDggNjUuNDkgNzYuNTQgNjcuNDEgQyA3Ni43MiA3Mi45MSA3NS4wMyA3Ny41NyA2OS4yNSA3Ny40OSBRIDY3LjY0IDc3LjQ3IDM3LjgxIDc3LjU0IFEgMzIuMzEgNzcuNTUgMzAuNDIgNzYuMjIgUSAyNy40MyA3NC4xMiAyNy40OSA2OS40OSBRIDI3LjUzIDY1Ljg3IDI3LjQ1IDQ5LjE2IEMgMjcuNDIgNDMuMDQgMjguNjggMzkuMzQgMzUuMDYgMzguOTMgQSAwLjYxIDAuNjEgMC4wIDAgMCAzNS42NCAzOC4zMiBDIDM1LjYyIDM1LjQ3IDM1LjU1IDMzLjAwIDM1LjU4IDMxLjAxIEMgMzUuNjkgMjMuOTQgMjkuMzYgMTguNjcgMjIuNjEgMjEuMDUgQyAxNC4zNyAyMy45NiAxNi4xMSAzMi4xMiAxNi4wMCAzOC44NCBBIDIuNDkgMi40NyAtMC43IDAgMSAxMy42MiA0MS4yNyBMIDEzLjQ4IDQxLjI4IEEgMi4zMiAyLjMyIDAuMCAwIDEgMTEuMDYgMzkuMDUgUSAxMC43MiAzMC40MCAxMS4xMiAyOC40MiBDIDE0Ljg5IDkuODcgNDAuNTkgMTIuMjkgNDAuNDAgMzAuNzggUSA0MC4zNiAzNC44NSA0MC40MCAzOC41OSBaXCIvPlxuICA8L3N2Zz5gLFxuXG4gIC8vIFx1MjUwMFx1MjUwMCBDaGFyZ2luZyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxuICAvLyBodHRwczovL3RhYmxlci5pby9pY29ucy9pY29uL2JvbHRcbiAgY2hhcmdpbmc6IGA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+XG4gICAgPHBhdGggZD1cIk0xMyAzbDAgN2w2IDBsLTggMTFsMCAtN2wtNiAwbDggLTExXCIgLz5cbiAgPC9zdmc+YCxcblxuICAvLyBodHRwczovL3RhYmxlci5pby9pY29ucy9pY29uL3BsdWctY29ubmVjdGVkXG4gICdjaGFyZ2luZy1wb3J0JzogYDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj5cbiAgICA8cGF0aCBkPVwiTTcgMTJsNSA1bC0xLjUgMS41YTMuNTM2IDMuNTM2IDAgMSAxIC01IC01bDEuNSAtMS41XCIgLz5cbiAgICA8cGF0aCBkPVwiTTE3IDEybC01IC01bDEuNSAtMS41YTMuNTM2IDMuNTM2IDAgMSAxIDUgNWwtMS41IDEuNVwiIC8+XG4gICAgPHBhdGggZD1cIk0zIDIxbDIuNSAtMi41XCIgLz5cbiAgICA8cGF0aCBkPVwiTTE4LjUgNS41bDIuNSAtMi41XCIgLz5cbiAgICA8cGF0aCBkPVwiTTEwIDExbC0yIDJcIiAvPlxuICAgIDxwYXRoIGQ9XCJNMTMgMTRsLTIgMlwiIC8+XG4gIDwvc3ZnPmAsXG5cbiAgLy8gQ3VzdG9tIFx1MjAxNCBmaWxsZWQgbGlnaHRuaW5nIGJvbHQgKGV4dHJhY3RlZCBmcm9tIFRlc2xhX0NoYXJnZV9Qb3J0X0Nsb3NlZC5zdmcsIGljb24gb25seSlcbiAgJ2NoYXJnZS1ib2x0JzogYDxzdmcgdmlld0JveD1cIjI3IDE2IDUwIDc0XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHN0cm9rZT1cIm5vbmVcIj5cbiAgICA8cGF0aCBkPVwiXG4gICAgICBNIDUxLjk4IDg3Ljk3IEMgNTEuMDggODguMTUgNTAuMzYgODcuNTUgNTAuMzYgODYuNjcgUSA1MC4zNyA3Mi4yNiA1MC4zNyA2MC42OCBBIDEuMzEgMS4zMCA4OS44IDAgMCA0OS4wNiA1OS4zNyBRIDMyLjkxIDU5LjQwIDI5Ljc1IDU5LjM2IFEgMjkuMzEgNTkuMzUgMjkuMDQgNTkuMTkgQSAxLjM4IDEuMzMgLTU5LjcgMCAxIDI4LjU5IDU3LjMzIFEgNDUuNjQgMjguMTYgNTEuMjAgMTguNjMgQSAxLjMwIDEuMzAgMC4wIDAgMSA1My4yNSAxOC4zOCBRIDUzLjcxIDE4Ljg1IDUzLjY5IDIwLjAwIFEgNTMuNjIgMjMuODIgNTMuNjYgNDUuMzUgQSAxLjMwIDEuMzAgMC4wIDAgMCA1NC45NiA0Ni42NSBDIDYyLjk2IDQ2LjYzIDc0LjA0IDQ2LjIxIDc1LjExIDQ2LjkxIEEgMS4yNSAxLjE5IC01OC4zIDAgMSA3NS40NiA0OC41NSBRIDYwLjk0IDczLjcxIDUyLjY4IDg3LjQ4IEEgMS4wNSAxLjA1IDAuMCAwIDEgNTEuOTggODcuOTcgWlwiLz5cbiAgPC9zdmc+YCxcblxuICAvLyBodHRwczovL3RhYmxlci5pby9pY29ucy9pY29uL2JhdHRlcnktY2hhcmdpbmdcbiAgYmF0dGVyeTogYDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj5cbiAgICA8cGF0aCBkPVwiTTE2IDdoMWEyIDIgMCAwIDEgMiAydi41YS41IC41IDAgMCAwIC41IC41YS41IC41IDAgMCAxIC41IC41djNhLjUgLjUgMCAwIDEgLS41IC41YS41IC41IDAgMCAwIC0uNSAuNXYuNWEyIDIgMCAwIDEgLTIgMmgtMlwiIC8+XG4gICAgPHBhdGggZD1cIk04IDdoLTJhMiAyIDAgMCAwIC0yIDJ2NmEyIDIgMCAwIDAgMiAyaDFcIiAvPlxuICAgIDxwYXRoIGQ9XCJNMTIgOGwtMiA0aDNsLTIgNFwiIC8+XG4gIDwvc3ZnPmAsXG5cbiAgLy8gXHUyNTAwXHUyNTAwIENsaW1hdGUgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cbiAgLy8gaHR0cHM6Ly90YWJsZXIuaW8vaWNvbnMvaWNvbi9haXItY29uZGl0aW9uaW5nXG4gIGNsaW1hdGU6IGA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+XG4gICAgPHBhdGggZD1cIk04IDE2YTMgMyAwIDAgMSAtMyAzXCIgLz5cbiAgICA8cGF0aCBkPVwiTTE2IDE2YTMgMyAwIDAgMCAzIDNcIiAvPlxuICAgIDxwYXRoIGQ9XCJNMTIgMTZ2NFwiIC8+XG4gICAgPHBhdGggZD1cIk0zIDdhMiAyIDAgMCAxIDIgLTJoMTRhMiAyIDAgMCAxIDIgMnY0YTIgMiAwIDAgMSAtMiAyaC0xNGEyIDIgMCAwIDEgLTIgLTJsMCAtNFwiIC8+XG4gICAgPHBhdGggZD1cIk03IDEzdi0zYTEgMSAwIDAgMSAxIC0xaDhhMSAxIDAgMCAxIDEgMXYzXCIgLz5cbiAgPC9zdmc+YCxcblxuICAvLyBodHRwczovL3RhYmxlci5pby9pY29ucy9pY29uL3Byb3BlbGxlclxuICBmYW46IGA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+XG4gICAgPHBhdGggZD1cIk05IDEzYTMgMyAwIDEgMCA2IDBhMyAzIDAgMSAwIC02IDBcIiAvPlxuICAgIDxwYXRoIGQ9XCJNMTQuMTY3IDEwLjVjLjcyMiAtMS41MzggMS4xNTYgLTMuMDQzIDEuMzAzIC00LjUxNGMuMjIgLTEuNjMgLS43NjIgLTIuOTg2IC0zLjQ3IC0yLjk4NnMtMy42OSAxLjM1NyAtMy40NyAyLjk4NmMuMTQ3IDEuNDcxIC41ODEgMi45NzYgMS4zMDMgNC41MTRcIiAvPlxuICAgIDxwYXRoIGQ9XCJNMTMuMTY5IDE2Ljc1MWMuOTcgMS4zOTUgMi4wNTcgMi41MjMgMy4yNTcgMy4zODZjMS4zIDEgMi45NjcgLjgzMyA0LjMyMSAtMS41MTJjMS4zNTQgLTIuMzQ1IC42NyAtMy44NzQgLS44NSAtNC40OThjLTEuMzQ4IC0uNjA4IC0yLjg2OCAtLjk4NSAtNC41NjIgLTEuMTI4XCIgLz5cbiAgICA8cGF0aCBkPVwiTTguNjY0IDEzYy0xLjY5MyAuMTQzIC0zLjIxMyAuNTIgLTQuNTYgMS4xMjhjLTEuNTIyIC42MjMgLTIuMjA2IDIuMTUzIC0uODUyIDQuNDk4czMuMDIgMi41MTcgNC4zMjEgMS41MTJjMS4yIC0uODYzIDIuMjg3IC0xLjk5MSAzLjI1OCAtMy4zODZcIiAvPlxuICA8L3N2Zz5gLFxuXG4gIC8vIFRlc2xhX0NsaW1hdGVfRmFuX09mZi5zdmcgXHUyMDE0IDQtYmxhZGUgcGlud2hlZWwgZXh0cmFjdGVkIGZyb20gVGVzbGEgdGlsZVxuICAnY2xpbWF0ZS1mYW4nOiBgPHN2ZyB2aWV3Qm94PVwiMTcgMTQgNzQgNzRcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlPVwibm9uZVwiPlxuICAgIDxwYXRoIGQ9XCJcbiAgICAgIE0gNTIuMjggNDYuNTFcbiAgICAgIEEgMi42NSAyLjY1IDAuMCAwIDEgNDkuNjQgNDkuMTdcbiAgICAgIEwgNDkuNDIgNDkuMTdcbiAgICAgIEEgMTYuNDEgMTYuMzUgODkuOSAwIDEgMzMuMDQgMzIuNzlcbiAgICAgIEwgMzMuMDQgMzIuNTNcbiAgICAgIEEgMTYuNDEgMTYuMzUgODkuOSAwIDEgNDkuMzYgMTYuMDlcbiAgICAgIEwgNDkuNTggMTYuMDlcbiAgICAgIEEgMi42NSAyLjY1IDAuMCAwIDEgNTIuMjQgMTguNzNcbiAgICAgIEwgNTIuMjggNDYuNTEgWlwiLz5cbiAgICA8cGF0aCBkPVwiXG4gICAgICBNIDU4LjMxIDQ5LjI1XG4gICAgICBBIDIuNDYgMi40NiAwLjAgMCAxIDU1Ljg1IDQ2Ljc5XG4gICAgICBMIDU1Ljg1IDQ2LjM2XG4gICAgICBBIDE2LjQxIDE2LjMzIDAuMCAwIDEgNzIuMjYgMzAuMDNcbiAgICAgIEwgNzIuNDggMzAuMDNcbiAgICAgIEEgMTYuNDEgMTYuMzMgMC4wIDAgMSA4OC44OSA0Ni4zNlxuICAgICAgTCA4OC44OSA0Ni43OVxuICAgICAgQSAyLjQ2IDIuNDYgMC4wIDAgMSA4Ni40MyA0OS4yNVxuICAgICAgTCA1OC4zMSA0OS4yNSBaXCIvPlxuICAgIDxwYXRoIGQ9XCJcbiAgICAgIE0gNDkuNTkgNTIuNzNcbiAgICAgIEEgMi41NSAyLjU1IDAuMCAwIDEgNTIuMTUgNTUuMjdcbiAgICAgIEwgNTIuMTUgNTUuNTlcbiAgICAgIEEgMTYuNDIgMTYuMzUgLTAuMSAwIDEgMzUuNzYgNzEuOTdcbiAgICAgIEwgMzUuNTQgNzEuOTdcbiAgICAgIEEgMTYuNDIgMTYuMzUgLTAuMSAwIDEgMTkuMDkgNTUuNjVcbiAgICAgIEwgMTkuMDkgNTUuMzNcbiAgICAgIEEgMi41NSAyLjU1IDAuMCAwIDEgMjEuNjMgNTIuNzdcbiAgICAgIEwgNDkuNTkgNTIuNzMgWlwiLz5cbiAgICA8cGF0aCBkPVwiXG4gICAgICBNIDU1LjcyIDU1LjQ3XG4gICAgICBBIDIuNjIgMi42MiAwLjAgMCAxIDU4LjMzIDUyLjg0XG4gICAgICBMIDU4LjU1IDUyLjg0XG4gICAgICBBIDE2LjQ1IDE2LjM4IDg5LjkgMCAxIDc0Ljk2IDY5LjI2XG4gICAgICBMIDc0Ljk2IDY5LjQ2XG4gICAgICBBIDE2LjQ1IDE2LjM4IDg5LjkgMCAxIDU4LjYxIDg1Ljk0XG4gICAgICBMIDU4LjM5IDg1Ljk0XG4gICAgICBBIDIuNjIgMi42MiAwLjAgMCAxIDU1Ljc2IDgzLjMzXG4gICAgICBMIDU1LjcyIDU1LjQ3IFpcIi8+XG4gIDwvc3ZnPmAsXG5cbiAgLy8gaHR0cHM6Ly90YWJsZXIuaW8vaWNvbnMvaWNvbi93aW5kbWlsbFxuICAnd2luZG93cy12ZW50JzogYDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj5cbiAgICA8cGF0aCBkPVwiTTEyIDEyYzIuNzYgMCA1IC0yLjAxIDUgLTQuNXMtMi4yNCAtNC41IC01IC00LjV2OVwiIC8+XG4gICAgPHBhdGggZD1cIk0xMiAxMmMwIDIuNzYgMi4wMSA1IDQuNSA1czQuNSAtMi4yNCA0LjUgLTVoLTlcIiAvPlxuICAgIDxwYXRoIGQ9XCJNMTIgMTJjLTIuNzYgMCAtNSAyLjAxIC01IDQuNXMyLjI0IDQuNSA1IDQuNXYtOVwiIC8+XG4gICAgPHBhdGggZD1cIk0xMiAxMmMwIC0yLjc2IC0yLjAxIC01IC00LjUgLTVzLTQuNSAyLjI0IC00LjUgNWg5XCIgLz5cbiAgPC9zdmc+YCxcblxuICAvLyBDdXN0b20gXHUyMDE0IGZyb250LXZpZXcgY2FyIHdpdGggaGVhdCB3YXZlcyByaXNpbmcgZm9yIGRlZnJvc3QgbW9kZVxuICBkZWZyb3N0OiBgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPlxuICAgIDxnIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiPlxuICAgICAgPHBhdGggZD1cIk05IDEzczEtMS41IDAtMyAxLTMgMC00LjVcIi8+XG4gICAgICA8cGF0aCBkPVwiTTEyIDEzczEtMS41IDAtMyAxLTMgMC00LjVcIi8+XG4gICAgICA8cGF0aCBkPVwiTTE1IDEzczEtMS41IDAtMyAxLTMgMC00LjVcIi8+XG4gICAgPC9nPlxuICAgIDxwYXRoIGQ9XCJNMTAgMTVoNGExIDEgMCAwIDEgMSAxdi41aDFhMSAxIDAgMCAxIDEgMXYxLjVhMSAxIDAgMCAxLTEgMUg4YTEgMSAwIDAgMS0xLTF2LTEuNWExIDEgMCAwIDEgMS0xaDFWMTZhMSAxIDAgMCAxIDEtMXpcIi8+XG4gICAgPHJlY3QgeD1cIjZcIiB5PVwiMTcuMjVcIiB3aWR0aD1cIjFcIiBoZWlnaHQ9XCIuNzVcIiByeD1cIi4zNzVcIi8+XG4gICAgPHJlY3QgeD1cIjE3XCIgeT1cIjE3LjI1XCIgd2lkdGg9XCIxXCIgaGVpZ2h0PVwiLjc1XCIgcng9XCIuMzc1XCIvPlxuICA8L3N2Zz5gLFxuXG4gIC8vIGh0dHBzOi8vdGFibGVyLmlvL2ljb25zL2ljb24vYXJtY2hhaXJcbiAgJ2hlYXRlZC1zZWF0JzogYDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj5cbiAgICA8cGF0aCBkPVwiTTUgMTFhMiAyIDAgMCAxIDIgMnYyaDEwdi0yYTIgMiAwIDEgMSA0IDB2NGEyIDIgMCAwIDEgLTIgMmgtMTRhMiAyIDAgMCAxIC0yIC0ydi00YTIgMiAwIDAgMSAyIC0yXCIgLz5cbiAgICA8cGF0aCBkPVwiTTUgMTF2LTVhMyAzIDAgMCAxIDMgLTNoOGEzIDMgMCAwIDEgMyAzdjVcIiAvPlxuICAgIDxwYXRoIGQ9XCJNNiAxOXYyXCIgLz5cbiAgICA8cGF0aCBkPVwiTTE4IDE5djJcIiAvPlxuICA8L3N2Zz5gLFxuXG4gIC8vIEN1c3RvbSBcdTIwMTQgQS1mcmFtZSB0ZW50IGZvciBjYW1wIG1vZGUgdG9nZ2xlXG4gIHRlbnQ6IGA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+XG4gICAgPHBhdGggZD1cIk0xMiA0TDQgMjBoMTZMMTIgNHpcIi8+XG4gICAgPHBhdGggZD1cIk0xMiA0djE2XCIvPlxuICAgIDxwYXRoIGQ9XCJNMTAgMjB2LTVsMi0yIDIgMnY1XCIvPlxuICA8L3N2Zz5gLFxuXG4gIC8vIEN1c3RvbSBcdTIwMTQgZG9nIHByb2ZpbGUgZm9yIGRvZyBtb2RlIHRvZ2dsZVxuICBkb2c6IGA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+XG4gICAgPHBhdGggZD1cIk0xMCA1LjJDMTAgNCAxMSAzIDEyIDNzMi41IDEuNSAzIDNsMS41IDRIMTljMS4xIDAgMiAuOSAyIDJ2NWEyIDIgMCAwIDEtMiAyaC0xdjJcIi8+XG4gICAgPHBhdGggZD1cIk02IDE5di0ySDVhMiAyIDAgMCAxLTItMnYtNWMwLTEuMS45LTIgMi0yaDIuNUw5IDZjLjUtMS41IDEtMyAzLTNcIi8+XG4gICAgPHBhdGggZD1cIk02IDE5aDEyXCIvPlxuICAgIDxjaXJjbGUgY3g9XCI5XCIgY3k9XCIxMlwiIHI9XCIxXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHN0cm9rZT1cIm5vbmVcIi8+XG4gIDwvc3ZnPmAsXG5cbiAgLy8gXHUyNTAwXHUyNTAwIENvbnRyb2xzIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXG4gIC8vIFRlc2xhX0Nhci5zdmcgXHUyMDE0IHRvcC1kb3duIGNhciBzaWxob3VldHRlIHdpdGggd2luZHNoaWVsZCArIGhlYWRsaWdodCBjdXRvdXRzXG4gIGNhcjogYDxzdmcgdmlld0JveD1cIjIwIDI4IDY0IDUwXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHN0cm9rZT1cIm5vbmVcIj5cbiAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIlxuICAgICAgTSA1Mi4wMiAzMC4wMVxuICAgICAgUSA1Ny4zOCAzMC4wMSA2NC43OCAzMC42M1xuICAgICAgQyA3Mi4zNiAzMS4yNyA3My40NSAzNy43OSA3NS4yNCA0My44MVxuICAgICAgQSAwLjUxIDAuNTAgLTUzLjUgMCAwIDc2LjIzIDQzLjY2XG4gICAgICBMIDc2LjIzIDQxLjk4XG4gICAgICBBIDAuODEgMC44MSAwLjAgMCAxIDc2Ljk5IDQxLjE3XG4gICAgICBRIDgwLjY2IDQwLjk3IDgxLjk3IDQzLjYzXG4gICAgICBBIDEuNDMgMS40MiAtMTcuNCAwIDEgODAuOTEgNDUuNjZcbiAgICAgIEwgNzYuOTIgNDYuMzBcbiAgICAgIEEgMC4zNCAwLjM0IDAuMCAwIDAgNzYuODAgNDYuOTJcbiAgICAgIEMgODIuMzcgNTAuMzkgODEuOTkgNTMuODIgODIuMDQgNjAuNzBcbiAgICAgIFEgODIuMDggNjcuMjUgODEuNjkgNzMuMDVcbiAgICAgIEEgMi4xMyAyLjEyIC04OC4wIDAgMSA3OS41NyA3NS4wM1xuICAgICAgTCA3NC4yMiA3NS4wM1xuICAgICAgQSAxLjgwIDEuNzkgODkuNyAwIDEgNzIuNDMgNzMuMjVcbiAgICAgIFEgNzIuNDEgNzEuNTQgNzEuOTkgNzAuNzNcbiAgICAgIEEgMC40NiAwLjQ1IC0xMi40IDAgMCA3MS42MSA3MC40OVxuICAgICAgUSA3MS4xNyA3MC40NyA1Mi4wMSA3MC40N1xuICAgICAgUSAzMi44NSA3MC40NiAzMi40MSA3MC40OFxuICAgICAgQSAwLjQ2IDAuNDUgMTIuNCAwIDAgMzIuMDMgNzAuNzJcbiAgICAgIFEgMzEuNjEgNzEuNTMgMzEuNTkgNzMuMjRcbiAgICAgIEEgMS44MCAxLjc5IC04OS43IDAgMSAyOS44MCA3NS4wMlxuICAgICAgTCAyNC40NSA3NS4wMlxuICAgICAgQSAyLjEzIDIuMTIgODguMCAwIDEgMjIuMzMgNzMuMDRcbiAgICAgIFEgMjEuOTQgNjcuMjQgMjEuOTggNjAuNjlcbiAgICAgIEMgMjIuMDMgNTMuODEgMjEuNjYgNTAuMzggMjcuMjMgNDYuOTFcbiAgICAgIEEgMC4zNCAwLjM0IDAuMCAwIDAgMjcuMTEgNDYuMjlcbiAgICAgIEwgMjMuMTIgNDUuNjVcbiAgICAgIEEgMS40MyAxLjQyIDE3LjUgMCAxIDIyLjA2IDQzLjYyXG4gICAgICBRIDIzLjM3IDQwLjk2IDI3LjA0IDQxLjE2XG4gICAgICBBIDAuODEgMC44MSAwLjAgMCAxIDI3LjgwIDQxLjk3XG4gICAgICBMIDI3LjgwIDQzLjY1XG4gICAgICBBIDAuNTEgMC41MCA1My41IDAgMCAyOC43OSA0My44MFxuICAgICAgQyAzMC41OCAzNy43OCAzMS42NyAzMS4yNiAzOS4yNSAzMC42M1xuICAgICAgUSA0Ni42NSAzMC4wMSA1Mi4wMiAzMC4wMVxuICAgICAgWlxuICAgICAgTSAzMi4yOCA0NC43MlxuICAgICAgTCA3MS43MiA0NC43MlxuICAgICAgQSAwLjIzIDAuMjMgMC4wIDAgMCA3MS45NSA0NC40OVxuICAgICAgTCA3MS45NSA0NC4xNFxuICAgICAgQSAxMS4wMCAxMC4yMCAtOTAuMCAwIDAgNjEuNzUgMzMuMTRcbiAgICAgIEwgNDIuMjUgMzMuMTRcbiAgICAgIEEgMTEuMDAgMTAuMjAgLTkwLjAgMCAwIDMyLjA1IDQ0LjE0XG4gICAgICBMIDMyLjA1IDQ0LjQ5XG4gICAgICBBIDAuMjMgMC4yMyAwLjAgMCAwIDMyLjI4IDQ0LjcyXG4gICAgICBaXG4gICAgICBNIDI1LjgyIDUxLjA0XG4gICAgICBMIDI0LjgxIDU0LjI2XG4gICAgICBBIDEuMTUgMS4xNSAwLjAgMCAwIDI1LjU2IDU1LjcwXG4gICAgICBMIDI1LjcyIDU1Ljc1XG4gICAgICBBIDkuNzIgMi44MSAxNy40IDAgMCAzNS44NCA1NS45OFxuICAgICAgTCAzNS44NiA1NS45MlxuICAgICAgQSA5LjcyIDIuODEgMTcuNCAwIDAgMjcuNDIgNTAuMzNcbiAgICAgIEwgMjcuMjYgNTAuMjhcbiAgICAgIEEgMS4xNSAxLjE1IDAuMCAwIDAgMjUuODIgNTEuMDRcbiAgICAgIFpcbiAgICAgIE0gNzkuMTkgNTQuMjVcbiAgICAgIEwgNzguMTggNTEuMDVcbiAgICAgIEEgMS4xNCAxLjE0IDAuMCAwIDAgNzYuNzUgNTAuMzBcbiAgICAgIEwgNzYuNTcgNTAuMzZcbiAgICAgIEEgOS43NyAyLjgwIC0xNy40IDAgMCA2OC4wOSA1NS45NVxuICAgICAgTCA2OC4xMCA1NS45OVxuICAgICAgQSA5Ljc3IDIuODAgLTE3LjQgMCAwIDc4LjI2IDU1Ljc0XG4gICAgICBMIDc4LjQ0IDU1LjY4XG4gICAgICBBIDEuMTQgMS4xNCAwLjAgMCAwIDc5LjE5IDU0LjI1XG4gICAgICBaXCIvPlxuICA8L3N2Zz5gLFxuXG4gIC8vIEN1c3RvbSBcdTIwMTQgY2FyIHNpbGhvdWV0dGUgd2l0aCBmcm9udCBob29kIHJhaXNlZCBmb3IgZnJ1bmsgKFRlc2xhLXNwZWNpZmljKVxuICBmcnVuazogYDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj5cbiAgICA8cGF0aCBkPVwiTTIgMTZoMjBcIi8+XG4gICAgPHBhdGggZD1cIk00IDE2bDEuNS00aDEzTDIwIDE2XCIvPlxuICAgIDxwYXRoIGQ9XCJNNS41IDEybDEtM2gzXCIvPlxuICAgIDxwYXRoIGQ9XCJNNi41IDlsLTEtMi41XCIvPlxuICAgIDxjaXJjbGUgY3g9XCI2LjVcIiBjeT1cIjE2XCIgcj1cIjEuNVwiLz5cbiAgICA8Y2lyY2xlIGN4PVwiMTcuNVwiIGN5PVwiMTZcIiByPVwiMS41XCIvPlxuICAgIDxwYXRoIGQ9XCJNNCAxNnYyXCIvPlxuICAgIDxwYXRoIGQ9XCJNMjAgMTZ2MlwiLz5cbiAgPC9zdmc+YCxcblxuICAvLyBodHRwczovL3RhYmxlci5pby9pY29ucy9pY29uL2NhclxuICB0cnVuazogYDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj5cbiAgICA8cGF0aCBkPVwiTTUgMTdhMiAyIDAgMSAwIDQgMGEyIDIgMCAxIDAgLTQgMFwiIC8+XG4gICAgPHBhdGggZD1cIk0xNSAxN2EyIDIgMCAxIDAgNCAwYTIgMiAwIDEgMCAtNCAwXCIgLz5cbiAgICA8cGF0aCBkPVwiTTUgMTdoLTJ2LTZsMiAtNWg5bDQgNWgxYTIgMiAwIDAgMSAyIDJ2NGgtMm0tNCAwaC02bS02IC02aDE1bS02IDB2LTVcIiAvPlxuICA8L3N2Zz5gLFxuXG4gIC8vIGh0dHBzOi8vdGFibGVyLmlvL2ljb25zL2ljb24vc2hpZWxkXG4gIHNlbnRyeTogYDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj5cbiAgICA8cGF0aCBkPVwiTTEyIDNhMTIgMTIgMCAwIDAgOC41IDNhMTIgMTIgMCAwIDEgLTguNSAxNWExMiAxMiAwIDAgMSAtOC41IC0xNWExMiAxMiAwIDAgMCA4LjUgLTNcIiAvPlxuICA8L3N2Zz5gLFxuXG4gIC8vIEN1c3RvbSBcdTIwMTQgaGVhZGxpZ2h0IHdpdGggYmVhbXMgKGV4dHJhY3RlZCBmcm9tIFRlc2xhX0ZsYXNoX0xpZ2h0c19CdXR0b24uc3ZnLCBpY29uIG9ubHkpXG4gICdmbGFzaC1saWdodHMnOiBgPHN2ZyB2aWV3Qm94PVwiNTUgMTUgNzUgNThcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlPVwibm9uZVwiPlxuICAgIDxyZWN0IHg9XCItMTMuMTdcIiB5PVwiLTIuNjJcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNzAuMTIsMjAuOTQpIHJvdGF0ZSg3LjIpXCIgd2lkdGg9XCIyNi4zNFwiIGhlaWdodD1cIjUuMjRcIiByeD1cIjIuNTZcIi8+XG4gICAgPHBhdGggZD1cIk0gODguNTAgMjkuMjQgQSA4LjYyIDguNjIgMC4wIDAgMSA5Ny4xMiAyMC42MiBMIDEwMS43NyAyMC42MiBBIDI1LjIxIDIzLjE0IDAgMCAxIDEyNi45OCA0My43NiBMIDEyNi45OCA0NC40OCBBIDI1LjIxIDIzLjE0IDAgMCAxIDEwMS43NyA2Ny42MiBMIDk3LjEyIDY3LjYyIEEgOC42MiA4LjYyIDAuMCAwIDEgODguNTAgNTkuMDAgTCA4OC41MCAyOS4yNCBaXCIvPlxuICAgIDxyZWN0IHg9XCItMTMuMDlcIiB5PVwiLTIuNjJcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNzAuMTQsMzYuNjkpIHJvdGF0ZSgyLjQpXCIgd2lkdGg9XCIyNi4xOFwiIGhlaWdodD1cIjUuMjRcIiByeD1cIjIuNTVcIi8+XG4gICAgPHJlY3QgeD1cIi0xMy4wOVwiIHk9XCItMi42MVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg3MC4xMiw1Mi40NCkgcm90YXRlKC0yLjQpXCIgd2lkdGg9XCIyNi4xOFwiIGhlaWdodD1cIjUuMjJcIiByeD1cIjIuNTVcIi8+XG4gICAgPHJlY3QgeD1cIi0xMy4xNlwiIHk9XCItMi42MlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg3MC4xMyw2Ny4zMSkgcm90YXRlKC03LjEpXCIgd2lkdGg9XCIyNi4zMlwiIGhlaWdodD1cIjUuMjRcIiByeD1cIjIuNTVcIi8+XG4gIDwvc3ZnPmAsXG5cbiAgLy8gQ3VzdG9tIFx1MjAxNCBob3JuIChleHRyYWN0ZWQgZnJvbSBUZXNsYV9Ib3JuX0J1dHRvbi5zdmcsIGljb24gb25seSlcbiAgaG9ybjogYDxzdmcgdmlld0JveD1cIjQ1IDE4IDc4IDU1XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHN0cm9rZT1cIm5vbmVcIj5cbiAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIlxuICAgICAgTSA3Ny43OSA0OS40MyBRIDY2LjkzIDUyLjA3IDYxLjA4IDYyLjEzIEMgNTkuMjEgNjUuMzQgNTguNDMgNzEuMzUgNTMuMDYgNzAuMzcgUSA0OS4xMyA2OS42NSA0OS4wOCA2NS40OSBRIDQ4LjkwIDUxLjcxIDQ5LjA1IDI2LjgwIFEgNDkuMDggMjIuOTUgNTMuNDIgMjEuNjcgUSA1Ni42OCAyMC43MSA1OS41OSAyNC40MCBDIDYwLjU0IDI1LjYwIDYxLjM5IDI4LjY4IDYyLjQwIDMwLjMyIFEgNjcuNjEgMzguNzggNzYuNDUgNDEuOTggUSA4MC44MSA0My41NiA5MC43MCA0My40MiBRIDEwMC4xNyA0My4yOSAxMTMuMTggNDMuNDAgQSAwLjQ3IDAuNDcgMC4wIDAgMCAxMTMuNjYgNDIuOTYgQyAxMTMuODMgNDAuMTkgMTE2LjYxIDM4LjYxIDExOC41NSA0MS4wNCBBIDEuNjQgMS42MCAtNjYuNyAwIDEgMTE4LjkwIDQxLjk2IFEgMTE5LjExIDQ2LjE0IDExOC45MyA0OS43OCBBIDIuNTkgMi40NyA1LjQgMCAxIDExNi4wMSA1Mi4wOCBRIDExNC4wMCA1MS44MiAxMTMuNzQgNDkuMjEgQSAwLjY4IDAuNjcgODcuMiAwIDAgMTEzLjA3IDQ4LjYwIEwgMTA5LjA2IDQ4LjYwIEEgMC40NSAwLjQ0IDc3LjEgMCAwIDEwOC42NiA0OS4yNCBRIDExMS42NyA1NS40MSAxMDguODkgNjAuNjAgQyAxMDYuMTkgNjUuNjQgMTAxLjg5IDY3LjE1IDk2LjA2IDY3LjAyIEMgOTAuODcgNjYuOTAgODQuNzggNjguMDkgODAuMzMgNjMuMzUgUSA3NS4wNCA1Ny43MiA3OC4yMiA0OS45MiBBIDAuMzcgMC4zNyAwLjAgMCAwIDc3Ljc5IDQ5LjQzIFpcbiAgICAgIE0gMTA0Ljg5IDU0LjgzIEEgNi4xNCA2LjE0IDAuMCAwIDAgOTguNzUgNDguNjkgTCA4OC41MSA0OC42OSBBIDYuMTQgNi4xNCAwLjAgMCAwIDgyLjM3IDU0LjgzIEwgODIuMzcgNTUuNTUgQSA2LjE0IDYuMTQgMC4wIDAgMCA4OC41MSA2MS42OSBMIDk4Ljc1IDYxLjY5IEEgNi4xNCA2LjE0IDAuMCAwIDAgMTA0Ljg5IDU1LjU1IEwgMTA0Ljg5IDU0LjgzIFpcIi8+XG4gIDwvc3ZnPmAsXG5cbiAgLy8gQ3VzdG9tIFx1MjAxNCBrZXkgZm9iIChleHRyYWN0ZWQgZnJvbSBUZXNsYV9TdGFydF9CdXR0b24uc3ZnLCBpY29uIG9ubHkpXG4gICdyZW1vdGUtc3RhcnQnOiBgPHN2ZyB2aWV3Qm94PVwiNjQgOCA0NSA3NlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBzdHJva2U9XCJub25lXCI+XG4gICAgPHBhdGggZD1cIk0gODYuMzEgMTEuMDMgUSA5NC41MSAxMC43NyAxMDQuMDIgMTUuMzggQSAyLjYyIDIuNjEgMjIuOSAwIDEgMTA1LjM0IDE4LjYyIEwgMTA1LjI3IDE4LjgzIEEgMi4zMCAyLjMwIDAuMCAwIDEgMTAyLjMzIDIwLjIxIFEgOTkuNjUgMTkuMjQgOTcuMTAgMTguMTkgUSA5Mi40MCAxNi4yNiA4Ni4zMSAxNi4yNiBRIDgwLjIzIDE2LjI2IDc1LjUzIDE4LjE4IFEgNzIuOTggMTkuMjMgNzAuMjkgMjAuMjAgQSAyLjMwIDIuMzAgMC4wIDAgMSA2Ny4zNiAxOC44MiBMIDY3LjI5IDE4LjYxIEEgMi42MiAyLjYxIC0yMi45IDAgMSA2OC42MSAxNS4zNyBRIDc4LjEyIDEwLjc3IDg2LjMxIDExLjAzIFpcIi8+XG4gICAgPHBhdGggZD1cIk0gODYuMzAgMjMuMjkgQyA4OC41MiAyMy4yOSA5NS40NSAyMy44NSA5Ny4yNCAyNS45MiBBIDIuNTEgMi4yMyAtNDcuNSAwIDEgOTcuMTkgMjguOTEgUSA5Ni4xMiAzMC4zMyA5NC4zMSAyOS44NCBRIDg5LjUwIDI4LjUzIDg2LjMwIDI4LjU0IFEgODMuMTAgMjguNTQgNzguMzAgMjkuODUgUSA3Ni40OCAzMC4zNCA3NS40MSAyOC45MiBBIDIuNTEgMi4yMyA0Ny40IDAgMSA3NS4zNiAyNS45MyBDIDc3LjE0IDIzLjg2IDg0LjA3IDIzLjI5IDg2LjMwIDIzLjI5IFpcIi8+XG4gICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNIDEwMy44MSA3Mi4xNyBBIDguODMgOC44MyAwLjAgMCAxIDk0Ljk4IDgxLjAwIEwgNzcuNjQgODEuMDAgQSA4LjgzIDguODMgMC4wIDAgMSA2OC44MSA3Mi4xNyBMIDY4LjgxIDQ0LjMzIEEgOC44MyA4LjgzIDAuMCAwIDEgNzcuNjQgMzUuNTAgTCA5NC45OCAzNS41MCBBIDguODMgOC44MyAwLjAgMCAxIDEwMy44MSA0NC4zMyBMIDEwMy44MSA3Mi4xNyBaIE0gODkuNzkgNDkuNTAgQSAzLjQ5IDMuNDkgMC4wIDAgMCA4Ni4zMCA0Ni4wMSBBIDMuNDkgMy40OSAwLjAgMCAwIDgyLjgxIDQ5LjUwIEEgMy40OSAzLjQ5IDAuMCAwIDAgODYuMzAgNTIuOTkgQSAzLjQ5IDMuNDkgMC4wIDAgMCA4OS43OSA0OS41MCBaXCIvPlxuICA8L3N2Zz5gLFxuXG4gIC8vIEN1c3RvbSBcdTIwMTQgbWFwIHBpbiBmb3IgdmVoaWNsZSBsb2NhdGlvbiAvIG5hdmlnYXRpb25cbiAgbG9jYXRpb246IGA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+XG4gICAgPHBhdGggZD1cIk0xMiAyQzguMTMgMiA1IDUuMTMgNSA5YzAgNS4yNSA3IDEzIDcgMTNzNy03Ljc1IDctMTNjMC0zLjg3LTMuMTMtNy03LTd6XCIvPlxuICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiOVwiIHI9XCIyLjVcIi8+XG4gIDwvc3ZnPmAsXG5cbiAgLy8gXHUyNTAwXHUyNTAwIFZlbnQgLyBXaW5kb3dzIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXG4gIC8vIEN1c3RvbSBcdTIwMTQgc2lkZS12aWV3IGNhciB3aXRoIG9wZW4gd2luZG93cyAoZXh0cmFjdGVkIGZyb20gVGVzbGFfVmVudF9PcGVuX1dpbmRvd3NfQnV0dG9uLnN2ZylcbiAgJ3ZlbnQtb3Blbic6IGA8c3ZnIHZpZXdCb3g9XCI1MCAxNyA2OCA2OFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBzdHJva2U9XCJub25lXCI+XG4gICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJcbiAgICAgIE0gMTExLjI5IDc4LjkxIFEgMTA5LjEyIDgxLjA3IDEwNi43OCA4MS4xMSBRIDg0LjkzIDgxLjQzIDYzLjI2IDgxLjE3IFEgNTcuNjEgODEuMTAgNTUuMzYgNzcuMzkgUSA1My45MyA3NS4wMiA1NC4yNiA2OC40OCBRIDU0LjQ0IDY0Ljg5IDU0LjIwIDUxLjQ2IEMgNTQuMDcgNDQuMzQgNTYuNzIgNDIuMjkgNjEuNTQgMzcuNTEgUSA2My45MyAzNS4xNCA2NS44MSAzMy4yNiBRIDY3LjcwIDMxLjM4IDcwLjA4IDI5LjAwIEMgNzQuODcgMjQuMjAgNzYuOTMgMjEuNTYgODQuMDUgMjEuNzIgUSA5Ny40OCAyMi4wMCAxMDEuMDcgMjEuODQgUSAxMDcuNjEgMjEuNTMgMTA5Ljk4IDIyLjk3IFEgMTEzLjY4IDI1LjIzIDExMy43MyAzMC44OCBRIDExMy45MSA1Mi41NSAxMTMuNTEgNzQuNDAgUSAxMTMuNDYgNzYuNzQgMTExLjI5IDc4LjkxIFpcbiAgICAgIE0gNjEuMzQgNDguNDggTCA2Ny4zOCA0OC40OCBBIDMuNDkgMy40NyAtNjcuMiAwIDAgNjkuODMgNDcuNDcgUSA3NC45NyA0Mi4zMSA4MC43MiAzNi4wNiBDIDgyLjU0IDM0LjA4IDg0LjUwIDM0LjkyIDg2LjcwIDM0Ljg5IFEgOTkuNTkgMzQuNzUgMTA1LjYzIDM1LjAyIEEgMS44NSAxLjg1IDAuMCAwIDAgMTA3LjU3IDMzLjE3IEwgMTA3LjU3IDMwLjM4IEEgMi40NSAyLjQ0IC04OS44IDAgMCAxMDUuMTUgMjcuOTMgUSA5Ny40MSAyNy44NiA4NC41MSAyNy45MiBRIDgwLjQxIDI3Ljk0IDc3LjI5IDMxLjA0IFEgNzUuOTIgMzIuMzkgNzUuMjQgMzMuMDIgUSA2OC40NSAzOS4yNSA2MC44NSA0Ny4zNiBBIDAuNjcgMC42NyAwLjAgMCAwIDYxLjM0IDQ4LjQ4IFpcbiAgICAgIE0gNjEuMDYgNTQuNTQgQSAwLjU2IDAuNTUgMi41IDAgMCA2MC40NiA1NS4wOCBRIDYwLjMzIDYyLjAwIDYwLjQzIDcyLjU0IFEgNjAuNDUgNzUuMDQgNjMuMjYgNzUuMDQgUSAxMDEuNjcgNzQuOTggMTA0Ljc3IDc0Ljk2IFEgMTA3LjUyIDc0Ljk0IDEwNy40NyA3MS44MiBRIDEwNy4zOCA2NS41NiAxMDcuNTAgNTUuNDkgQSAwLjU4IDAuNTcgODkuNSAwIDAgMTA2LjkyIDU0LjkxIFEgODUuMjAgNTUuMTcgNjcuMTAgNTUuMTMgQyA2NC45OSA1NS4xMiA2Mi45NyA1NC42NiA2MS4wNiA1NC41NCBaXCIvPlxuICA8L3N2Zz5gLFxuXG4gIC8vIEN1c3RvbSBcdTIwMTQgc2lkZS12aWV3IGNhciB3aXRoIGNsb3NlZCB3aW5kb3dzIChleHRyYWN0ZWQgZnJvbSBUZXNsYV9WZW50X0Nsb3NlX1dpbmRvd3NfQnV0dG9uLnN2ZylcbiAgJ3ZlbnQtY2xvc2UnOiBgPHN2ZyB2aWV3Qm94PVwiNTAgMTcgNjggNjhcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlPVwibm9uZVwiPlxuICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiXG4gICAgICBNIDExMS4yNyA3OC45MiBRIDEwOS4xMSA4MS4wNyAxMDYuNzggODEuMTMgUSA5NS43OCA4MS40MSA2NS4wMiA4MS4yMyBDIDU5LjkxIDgxLjIwIDU2Ljk3IDgwLjYzIDU0Ljg5IDc2LjQzIFEgNTQuMTYgNzQuOTcgNTQuMTkgNzEuNTkgUSA1NC4yNCA2Ni41NCA1NC4zMCA0OS41MCBRIDU0LjMyIDQ0LjY2IDU3LjY3IDQxLjE5IFEgNjEuNTcgMzcuMTUgNjMuOTMgMzQuODYgUSA2NC44MCAzNC4wMiA2NS42NyAzMy4xNSBRIDY2LjU1IDMyLjI4IDY3LjM5IDMxLjQxIFEgNjkuNjkgMjkuMDYgNzMuNzUgMjUuMTggUSA3Ny4yMyAyMS44NCA4Mi4wNyAyMS44NCBRIDk5LjExIDIxLjg1IDEwNC4xNiAyMS44MiBRIDEwNy41NCAyMS44MCAxMDkuMDAgMjIuNTQgQyAxMTMuMTkgMjQuNjMgMTEzLjc1IDI3LjU4IDExMy43NiAzMi42OSBRIDExMy44MiA2My40NSAxMTMuNDkgNzQuNDUgUSAxMTMuNDMgNzYuNzggMTExLjI3IDc4LjkyIFpcbiAgICAgIE0gODMuNzUgMjcuOTkgQyA4MS4wNSAyOC4wMiA3OS4xOSAyOC44OSA3Ni41MSAzMS41NCBRIDY5LjQxIDM4LjU2IDYzLjAwIDQ1LjAwIFEgNjEuNDEgNDYuNjAgNjAuNzUgNDcuNjkgQSAwLjUyIDAuNTEgLTc0LjMgMCAwIDYxLjE4IDQ4LjQ3IEwgNjcuODYgNDguNDcgQSAyLjEyIDIuMTAgLTY3LjMgMCAwIDY5LjM1IDQ3Ljg1IEwgODAuNjkgMzYuNTIgQSA1LjUwIDUuNDUgLTY3LjQgMCAxIDg0LjU3IDM0LjkwIEwgMTA2LjExIDM0LjkwIEEgMS4zNSAxLjM0IC0wLjAgMCAwIDEwNy40NiAzMy41NiBMIDEwNy40NiAyOS45NSBBIDEuOTUgMS45NSAwLjAgMCAwIDEwNS41MyAyOC4wMCBRIDkzLjYyIDI3Ljg2IDgzLjc1IDI3Ljk5IFpcbiAgICAgIE0gMTA3LjI2IDU0Ljk1IEwgNjAuNjIgNTQuODcgQSAwLjIzIDAuMjMgMC4wIDAgMCA2MC4zOSA1NS4xMCBMIDYwLjM2IDcyLjE0IEEgMy4xMSAyLjgxIDAuMSAwIDAgNjMuNDYgNzQuOTUgTCAxMDQuMzQgNzUuMDMgQSAzLjExIDIuODEgMC4xIDAgMCAxMDcuNDYgNzIuMjIgTCAxMDcuNDkgNTUuMTggQSAwLjIzIDAuMjMgMC4wIDAgMCAxMDcuMjYgNTQuOTUgWlwiLz5cbiAgPC9zdmc+YCxcblxuICAvLyBcdTI1MDBcdTI1MDAgTmF2aWdhdGlvbiAvIFVJIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXG4gIC8vIGh0dHBzOi8vdGFibGVyLmlvL2ljb25zL2ljb24vY2hldnJvbi1sZWZ0XG4gICdjaGV2cm9uLWxlZnQnOiBgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPlxuICAgIDxwYXRoIGQ9XCJNMTUgNmwtNiA2bDYgNlwiIC8+XG4gIDwvc3ZnPmAsXG5cbiAgLy8gaHR0cHM6Ly90YWJsZXIuaW8vaWNvbnMvaWNvbi9jaGV2cm9uLXJpZ2h0XG4gICdjaGV2cm9uLXJpZ2h0JzogYDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj5cbiAgICA8cGF0aCBkPVwiTTkgNmw2IDZsLTYgNlwiIC8+XG4gIDwvc3ZnPmAsXG5cbiAgLy8gaHR0cHM6Ly90YWJsZXIuaW8vaWNvbnMvaWNvbi9jaGV2cm9uLXVwXG4gICdjaGV2cm9uLXVwJzogYDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj5cbiAgICA8cGF0aCBkPVwiTTYgMTVsNiAtNmw2IDZcIiAvPlxuICA8L3N2Zz5gLFxuXG4gIC8vIGh0dHBzOi8vdGFibGVyLmlvL2ljb25zL2ljb24vY2hldnJvbi1kb3duXG4gICdjaGV2cm9uLWRvd24nOiBgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPlxuICAgIDxwYXRoIGQ9XCJNNiA5bDYgNmw2IC02XCIgLz5cbiAgPC9zdmc+YCxcblxuICAvLyBodHRwczovL3RhYmxlci5pby9pY29ucy9pY29uL2NoZWNrXG4gIGNoZWNrOiBgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPlxuICAgIDxwYXRoIGQ9XCJNNSAxMmw1IDVsMTAgLTEwXCIgLz5cbiAgPC9zdmc+YCxcblxuICAvLyBodHRwczovL3RhYmxlci5pby9pY29ucy9pY29uL3JlZnJlc2hcbiAgcmVmcmVzaDogYDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj5cbiAgICA8cGF0aCBkPVwiTTIwIDExYTguMSA4LjEgMCAwIDAgLTE1LjUgLTJtLS41IC00djRoNFwiIC8+XG4gICAgPHBhdGggZD1cIk00IDEzYTguMSA4LjEgMCAwIDAgMTUuNSAybS41IDR2LTRoLTRcIiAvPlxuICA8L3N2Zz5gLFxuXG4gIC8vIGh0dHBzOi8vdGFibGVyLmlvL2ljb25zL2ljb24vc2V0dGluZ3NcbiAgc2V0dGluZ3M6IGA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+XG4gICAgPHBhdGggZD1cIk0xMC4zMjUgNC4zMTdjLjQyNiAtMS43NTYgMi45MjQgLTEuNzU2IDMuMzUgMGExLjcyNCAxLjcyNCAwIDAgMCAyLjU3MyAxLjA2NmMxLjU0MyAtLjk0IDMuMzEgLjgyNiAyLjM3IDIuMzdhMS43MjQgMS43MjQgMCAwIDAgMS4wNjUgMi41NzJjMS43NTYgLjQyNiAxLjc1NiAyLjkyNCAwIDMuMzVhMS43MjQgMS43MjQgMCAwIDAgLTEuMDY2IDIuNTczYy45NCAxLjU0MyAtLjgyNiAzLjMxIC0yLjM3IDIuMzdhMS43MjQgMS43MjQgMCAwIDAgLTIuNTcyIDEuMDY1Yy0uNDI2IDEuNzU2IC0yLjkyNCAxLjc1NiAtMy4zNSAwYTEuNzI0IDEuNzI0IDAgMCAwIC0yLjU3MyAtMS4wNjZjLTEuNTQzIC45NCAtMy4zMSAtLjgyNiAtMi4zNyAtMi4zN2ExLjcyNCAxLjcyNCAwIDAgMCAtMS4wNjUgLTIuNTcyYy0xLjc1NiAtLjQyNiAtMS43NTYgLTIuOTI0IDAgLTMuMzVhMS43MjQgMS43MjQgMCAwIDAgMS4wNjYgLTIuNTczYy0uOTQgLTEuNTQzIC44MjYgLTMuMzEgMi4zNyAtMi4zN2MxIC42MDggMi4yOTYgLjA3IDIuNTcyIC0xLjA2NVwiIC8+XG4gICAgPHBhdGggZD1cIk05IDEyYTMgMyAwIDEgMCA2IDBhMyAzIDAgMCAwIC02IDBcIiAvPlxuICA8L3N2Zz5gLFxuXG4gIC8vIGh0dHBzOi8vdGFibGVyLmlvL2ljb25zL2ljb24vYXJyb3dzLW1heGltaXplIFx1MjAxNCBjYXJkIHNpemUgY29udHJvbFxuICByZXNpemU6IGA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+XG4gICAgPHBhdGggZD1cIk0xNiA0bDQgMGwwIDRcIiAvPlxuICAgIDxwYXRoIGQ9XCJNMTQgMTBsNiAtNlwiIC8+XG4gICAgPHBhdGggZD1cIk04IDIwbC00IDBsMCAtNFwiIC8+XG4gICAgPHBhdGggZD1cIk00IDIwbDYgLTZcIiAvPlxuICA8L3N2Zz5gLFxuXG4gIC8vIGh0dHBzOi8vdGFibGVyLmlvL2ljb25zL2ljb24vbGF5b3V0LXNpZGViYXItcmlnaHQgXHUyMDE0IHBvcnRyYWl0L2xhbmRzY2FwZSB0b2dnbGVcbiAgbGF5b3V0OiBgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPlxuICAgIDxwYXRoIGQ9XCJNNCA0bTAgMmEyIDIgMCAwIDEgMiAtMmgxMmEyIDIgMCAwIDEgMiAydjEyYTIgMiAwIDAgMSAtMiAyaC0xMmEyIDIgMCAwIDEgLTIgLTJ6XCIgLz5cbiAgICA8cGF0aCBkPVwiTTE1IDR2MTZcIiAvPlxuICA8L3N2Zz5gLFxuXG4gIC8vIFx1MjUwMFx1MjUwMCBQb3dlciBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxuICAvLyBodHRwczovL3RhYmxlci5pby9pY29ucy9pY29uL3Bvd2VyXG4gIHBvd2VyOiBgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPlxuICAgIDxwYXRoIGQ9XCJNNyA2YTcuNzUgNy43NSAwIDEgMCAxMCAwXCIgLz5cbiAgICA8cGF0aCBkPVwiTTEyIDJ2NlwiIC8+XG4gIDwvc3ZnPmAsXG5cbiAgLy8gXHUyNTAwXHUyNTAwIFNjaGVkdWxlIC8gU2VjdXJpdHkgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cbiAgLy8gaHR0cHM6Ly90YWJsZXIuaW8vaWNvbnMvaWNvbi9jbG9jay1ib2x0XG4gIHNjaGVkdWxlOiBgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPlxuICAgIDxwYXRoIGQ9XCJNMjAuOTg0IDEyLjUzNWE5IDkgMCAxIDAgLTUuMjQ5IDcuNDdcIiAvPlxuICAgIDxwYXRoIGQ9XCJNMTIgN3Y1bDIgMlwiIC8+XG4gICAgPHBhdGggZD1cIk0xOSAxNmwtMiAzaDRsLTIgM1wiIC8+XG4gIDwvc3ZnPmAsXG5cbiAgLy8gaHR0cHM6Ly90YWJsZXIuaW8vaWNvbnMvaWNvbi9zaGllbGQtY2hlY2tcbiAgc2VjdXJpdHk6IGA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+XG4gICAgPHBhdGggZD1cIk0xMS40NiAyMC44NDZhMTIgMTIgMCAwIDEgLTcuOTYgLTE0Ljg0NmExMiAxMiAwIDAgMCA4LjUgLTNhMTIgMTIgMCAwIDAgOC41IDNhMTIgMTIgMCAwIDEgLS4wOSA3LjA2XCIgLz5cbiAgICA8cGF0aCBkPVwiTTE1IDE5bDIgMmw0IC00XCIgLz5cbiAgPC9zdmc+YCxcblxuICAvLyBcdTI1MDBcdTI1MDAgU3RhdHVzIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXG4gIC8vIGh0dHBzOi8vdGFibGVyLmlvL2ljb25zL2ljb24vc3RlZXJpbmctd2hlZWxcbiAgZHJpdmluZzogYDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj5cbiAgICA8cGF0aCBkPVwiTTMgMTJhOSA5IDAgMSAwIDE4IDBhOSA5IDAgMSAwIC0xOCAwXCIgLz5cbiAgICA8cGF0aCBkPVwiTTEwIDEyYTIgMiAwIDEgMCA0IDBhMiAyIDAgMSAwIC00IDBcIiAvPlxuICAgIDxwYXRoIGQ9XCJNMTIgMTRsMCA3XCIgLz5cbiAgICA8cGF0aCBkPVwiTTEwIDEybC02Ljc1IC0yXCIgLz5cbiAgICA8cGF0aCBkPVwiTTE0IDEybDYuNzUgLTJcIiAvPlxuICA8L3N2Zz5gLFxuXG4gIC8vIGh0dHBzOi8vdGFibGVyLmlvL2ljb25zL2ljb24vcGFya2luZ1xuICBwYXJrZWQ6IGA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+XG4gICAgPHBhdGggZD1cIk0zIDVhMiAyIDAgMCAxIDIgLTJoMTRhMiAyIDAgMCAxIDIgMnYxNGEyIDIgMCAwIDEgLTIgMmgtMTRhMiAyIDAgMCAxIC0yIC0ydi0xNFwiIC8+XG4gICAgPHBhdGggZD1cIk0xMCAxNnYtOGgyLjY2N2MuNzM2IDAgMS4zMzMgLjg5NSAxLjMzMyAycy0uNTk3IDIgLTEuMzMzIDJoLTIuNjY3XCIgLz5cbiAgPC9zdmc+YCxcblxufTtcbiIsICJ7XG4gIFwibW9kZWxzXCI6IFtcbiAgICB7XG4gICAgICBcImlkXCI6IFwiM1wiLFxuICAgICAgXCJuYW1lXCI6IFwiTW9kZWwgM1wiLFxuICAgICAgXCJ2YXJpYW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IFwiMy4xXCIsXG4gICAgICAgICAgXCJsYWJlbFwiOiBcIjIwMTdcdTIwMTMyMDIzXCIsXG4gICAgICAgICAgXCJjb2xvdXJzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJpZFwiOiBcInJlZF9tdWx0aV9jb2F0XCIsXG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcIlJlZCBNdWx0aS1Db2F0XCIsXG4gICAgICAgICAgICAgIFwic3dhdGNoXCI6IFwiI2M0MWUyOFwiLFxuICAgICAgICAgICAgICBcImhhc0ltYWdlc1wiOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImlkXCI6IFwiZGVlcF9ibHVlX21ldGFsbGljXCIsXG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcIkRlZXAgQmx1ZSBNZXRhbGxpY1wiLFxuICAgICAgICAgICAgICBcInN3YXRjaFwiOiBcIiMyMjM4NzNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJpZFwiOiBcInBlYXJsX3doaXRlX211bHRpX2NvYXRcIixcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUGVhcmwgV2hpdGUgTXVsdGktQ29hdFwiLFxuICAgICAgICAgICAgICBcInN3YXRjaFwiOiBcIiNmMmYyZjJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJpZFwiOiBcIm1pZG5pZ2h0X3NpbHZlcl9tZXRhbGxpY1wiLFxuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNaWRuaWdodCBTaWx2ZXIgTWV0YWxsaWNcIixcbiAgICAgICAgICAgICAgXCJzd2F0Y2hcIjogXCIjNzE3NTdhXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiaWRcIjogXCJzb2xpZF9ibGFja1wiLFxuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJTb2xpZCBCbGFja1wiLFxuICAgICAgICAgICAgICBcInN3YXRjaFwiOiBcIiMxNDE0MTRcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJpZFwiOiBcInNpbHZlcl9tZXRhbGxpY1wiLFxuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJTaWx2ZXIgTWV0YWxsaWNcIixcbiAgICAgICAgICAgICAgXCJzd2F0Y2hcIjogXCIjYzBjMGMwXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IFwiMy4yXCIsXG4gICAgICAgICAgXCJsYWJlbFwiOiBcIjIwMjQrIEhpZ2hsYW5kXCIsXG4gICAgICAgICAgXCJjb2xvdXJzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJpZFwiOiBcInBlYXJsX3doaXRlXCIsXG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcIlBlYXJsIFdoaXRlXCIsXG4gICAgICAgICAgICAgIFwic3dhdGNoXCI6IFwiI2YyZjJmMlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImlkXCI6IFwic29saWRfYmxhY2tcIixcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiU29saWQgQmxhY2tcIixcbiAgICAgICAgICAgICAgXCJzd2F0Y2hcIjogXCIjMTQxNDE0XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiaWRcIjogXCJxdWlja3NpbHZlclwiLFxuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJRdWlja3NpbHZlclwiLFxuICAgICAgICAgICAgICBcInN3YXRjaFwiOiBcIiM5ZTlhOTFcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJpZFwiOiBcInVsdHJhX3JlZFwiLFxuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJVbHRyYSBSZWRcIixcbiAgICAgICAgICAgICAgXCJzd2F0Y2hcIjogXCIjYzQxZTI4XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiaWRcIjogXCJtaWRuaWdodF9jaGVycnlfcmVkXCIsXG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1pZG5pZ2h0IENoZXJyeSBSZWRcIixcbiAgICAgICAgICAgICAgXCJzd2F0Y2hcIjogXCIjODUwMDI5XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogXCJZXCIsXG4gICAgICBcIm5hbWVcIjogXCJNb2RlbCBZXCIsXG4gICAgICBcInZhcmlhbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogXCJZLjFcIixcbiAgICAgICAgICBcImxhYmVsXCI6IFwiMjAyMFx1MjAxMzIwMjRcIixcbiAgICAgICAgICBcImNvbG91cnNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImlkXCI6IFwicGVhcmxfd2hpdGVfbXVsdGlfY29hdFwiLFxuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJQZWFybCBXaGl0ZSBNdWx0aS1Db2F0XCIsXG4gICAgICAgICAgICAgIFwic3dhdGNoXCI6IFwiI2YyZjJmMlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImlkXCI6IFwic29saWRfYmxhY2tcIixcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiU29saWQgQmxhY2tcIixcbiAgICAgICAgICAgICAgXCJzd2F0Y2hcIjogXCIjMTQxNDE0XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiaWRcIjogXCJtaWRuaWdodF9zaWx2ZXJfbWV0YWxsaWNcIixcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWlkbmlnaHQgU2lsdmVyIE1ldGFsbGljXCIsXG4gICAgICAgICAgICAgIFwic3dhdGNoXCI6IFwiIzcxNzU3YVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImlkXCI6IFwiZGVlcF9ibHVlX21ldGFsbGljXCIsXG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcIkRlZXAgQmx1ZSBNZXRhbGxpY1wiLFxuICAgICAgICAgICAgICBcInN3YXRjaFwiOiBcIiMyMjM4NzNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJpZFwiOiBcInJlZF9tdWx0aV9jb2F0XCIsXG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcIlJlZCBNdWx0aS1Db2F0XCIsXG4gICAgICAgICAgICAgIFwic3dhdGNoXCI6IFwiI2M0MWUyOFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImlkXCI6IFwibWlkbmlnaHRfY2hlcnJ5X3JlZFwiLFxuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNaWRuaWdodCBDaGVycnkgUmVkXCIsXG4gICAgICAgICAgICAgIFwic3dhdGNoXCI6IFwiIzg1MDAyOVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImlkXCI6IFwicXVpY2tzaWx2ZXJcIixcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUXVpY2tzaWx2ZXJcIixcbiAgICAgICAgICAgICAgXCJzd2F0Y2hcIjogXCIjOWU5YTkxXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IFwiWS4yXCIsXG4gICAgICAgICAgXCJsYWJlbFwiOiBcIjIwMjUrIEp1bmlwZXJcIixcbiAgICAgICAgICBcImNvbG91cnNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImlkXCI6IFwicGVhcmxfd2hpdGVcIixcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUGVhcmwgV2hpdGVcIixcbiAgICAgICAgICAgICAgXCJzd2F0Y2hcIjogXCIjZjJmMmYyXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiaWRcIjogXCJzb2xpZF9ibGFja1wiLFxuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJTb2xpZCBCbGFja1wiLFxuICAgICAgICAgICAgICBcInN3YXRjaFwiOiBcIiMxNDE0MTRcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJpZFwiOiBcInF1aWNrc2lsdmVyXCIsXG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcIlF1aWNrc2lsdmVyXCIsXG4gICAgICAgICAgICAgIFwic3dhdGNoXCI6IFwiIzllOWE5MVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImlkXCI6IFwidWx0cmFfcmVkXCIsXG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcIlVsdHJhIFJlZFwiLFxuICAgICAgICAgICAgICBcInN3YXRjaFwiOiBcIiNjNDFlMjhcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJpZFwiOiBcIm1pZG5pZ2h0X2NoZXJyeV9yZWRcIixcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWlkbmlnaHQgQ2hlcnJ5IFJlZFwiLFxuICAgICAgICAgICAgICBcInN3YXRjaFwiOiBcIiM4NTAwMjlcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiBcIlNcIixcbiAgICAgIFwibmFtZVwiOiBcIk1vZGVsIFNcIixcbiAgICAgIFwidmFyaWFudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiBcIlMuMVwiLFxuICAgICAgICAgIFwibGFiZWxcIjogXCIyMDEyXHUyMDEzMjAyMVwiLFxuICAgICAgICAgIFwiY29sb3Vyc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiaWRcIjogXCJwZWFybF93aGl0ZV9tdWx0aV9jb2F0XCIsXG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcIlBlYXJsIFdoaXRlIE11bHRpLUNvYXRcIixcbiAgICAgICAgICAgICAgXCJzd2F0Y2hcIjogXCIjZjJmMmYyXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiaWRcIjogXCJzb2xpZF9ibGFja1wiLFxuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJTb2xpZCBCbGFja1wiLFxuICAgICAgICAgICAgICBcInN3YXRjaFwiOiBcIiMxNDE0MTRcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJpZFwiOiBcIm1pZG5pZ2h0X3NpbHZlcl9tZXRhbGxpY1wiLFxuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNaWRuaWdodCBTaWx2ZXIgTWV0YWxsaWNcIixcbiAgICAgICAgICAgICAgXCJzd2F0Y2hcIjogXCIjNzE3NTdhXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiaWRcIjogXCJkZWVwX2JsdWVfbWV0YWxsaWNcIixcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRGVlcCBCbHVlIE1ldGFsbGljXCIsXG4gICAgICAgICAgICAgIFwic3dhdGNoXCI6IFwiIzIyMzg3M1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImlkXCI6IFwicmVkX211bHRpX2NvYXRcIixcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUmVkIE11bHRpLUNvYXRcIixcbiAgICAgICAgICAgICAgXCJzd2F0Y2hcIjogXCIjYzQxZTI4XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiaWRcIjogXCJzaWx2ZXJfbWV0YWxsaWNcIixcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiU2lsdmVyIE1ldGFsbGljXCIsXG4gICAgICAgICAgICAgIFwic3dhdGNoXCI6IFwiI2MwYzBjMFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiBcIlMuMlwiLFxuICAgICAgICAgIFwibGFiZWxcIjogXCIyMDIxKyBSZWZyZXNoXCIsXG4gICAgICAgICAgXCJjb2xvdXJzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJpZFwiOiBcInBlYXJsX3doaXRlX211bHRpX2NvYXRcIixcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUGVhcmwgV2hpdGUgTXVsdGktQ29hdFwiLFxuICAgICAgICAgICAgICBcInN3YXRjaFwiOiBcIiNmMmYyZjJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJpZFwiOiBcInNvbGlkX2JsYWNrXCIsXG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcIlNvbGlkIEJsYWNrXCIsXG4gICAgICAgICAgICAgIFwic3dhdGNoXCI6IFwiIzE0MTQxNFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImlkXCI6IFwibWlkbmlnaHRfc2lsdmVyX21ldGFsbGljXCIsXG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1pZG5pZ2h0IFNpbHZlciBNZXRhbGxpY1wiLFxuICAgICAgICAgICAgICBcInN3YXRjaFwiOiBcIiM3MTc1N2FcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJpZFwiOiBcInVsdHJhX3JlZFwiLFxuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJVbHRyYSBSZWRcIixcbiAgICAgICAgICAgICAgXCJzd2F0Y2hcIjogXCIjYzQxZTI4XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiaWRcIjogXCJtaWRuaWdodF9jaGVycnlfcmVkXCIsXG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1pZG5pZ2h0IENoZXJyeSBSZWRcIixcbiAgICAgICAgICAgICAgXCJzd2F0Y2hcIjogXCIjODUwMDI5XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiaWRcIjogXCJxdWlja3NpbHZlclwiLFxuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJRdWlja3NpbHZlclwiLFxuICAgICAgICAgICAgICBcInN3YXRjaFwiOiBcIiM5ZTlhOTFcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiBcIlhcIixcbiAgICAgIFwibmFtZVwiOiBcIk1vZGVsIFhcIixcbiAgICAgIFwidmFyaWFudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiBcIlguMVwiLFxuICAgICAgICAgIFwibGFiZWxcIjogXCIyMDE1XHUyMDEzMjAyMVwiLFxuICAgICAgICAgIFwiY29sb3Vyc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiaWRcIjogXCJzb2xpZF9ibGFja1wiLFxuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJTb2xpZCBCbGFja1wiLFxuICAgICAgICAgICAgICBcInN3YXRjaFwiOiBcIiMxNDE0MTRcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJpZFwiOiBcInBlYXJsX3doaXRlX211bHRpX2NvYXRcIixcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUGVhcmwgV2hpdGUgTXVsdGktQ29hdFwiLFxuICAgICAgICAgICAgICBcInN3YXRjaFwiOiBcIiNmMmYyZjJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJpZFwiOiBcIm1pZG5pZ2h0X3NpbHZlcl9tZXRhbGxpY1wiLFxuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNaWRuaWdodCBTaWx2ZXIgTWV0YWxsaWNcIixcbiAgICAgICAgICAgICAgXCJzd2F0Y2hcIjogXCIjNzE3NTdhXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiaWRcIjogXCJkZWVwX2JsdWVfbWV0YWxsaWNcIixcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRGVlcCBCbHVlIE1ldGFsbGljXCIsXG4gICAgICAgICAgICAgIFwic3dhdGNoXCI6IFwiIzIyMzg3M1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImlkXCI6IFwicmVkX211bHRpX2NvYXRcIixcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUmVkIE11bHRpLUNvYXRcIixcbiAgICAgICAgICAgICAgXCJzd2F0Y2hcIjogXCIjYzQxZTI4XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiaWRcIjogXCJzaWx2ZXJfbWV0YWxsaWNcIixcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiU2lsdmVyIE1ldGFsbGljXCIsXG4gICAgICAgICAgICAgIFwic3dhdGNoXCI6IFwiI2MwYzBjMFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiBcIlguMlwiLFxuICAgICAgICAgIFwibGFiZWxcIjogXCIyMDIxKyBSZWZyZXNoXCIsXG4gICAgICAgICAgXCJjb2xvdXJzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJpZFwiOiBcInBlYXJsX3doaXRlX211bHRpX2NvYXRcIixcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUGVhcmwgV2hpdGUgTXVsdGktQ29hdFwiLFxuICAgICAgICAgICAgICBcInN3YXRjaFwiOiBcIiNmMmYyZjJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJpZFwiOiBcInNvbGlkX2JsYWNrXCIsXG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcIlNvbGlkIEJsYWNrXCIsXG4gICAgICAgICAgICAgIFwic3dhdGNoXCI6IFwiIzE0MTQxNFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImlkXCI6IFwibWlkbmlnaHRfc2lsdmVyX21ldGFsbGljXCIsXG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1pZG5pZ2h0IFNpbHZlciBNZXRhbGxpY1wiLFxuICAgICAgICAgICAgICBcInN3YXRjaFwiOiBcIiM3MTc1N2FcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJpZFwiOiBcInVsdHJhX3JlZFwiLFxuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJVbHRyYSBSZWRcIixcbiAgICAgICAgICAgICAgXCJzd2F0Y2hcIjogXCIjYzQxZTI4XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiaWRcIjogXCJtaWRuaWdodF9jaGVycnlfcmVkXCIsXG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1pZG5pZ2h0IENoZXJyeSBSZWRcIixcbiAgICAgICAgICAgICAgXCJzd2F0Y2hcIjogXCIjODUwMDI5XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiaWRcIjogXCJxdWlja3NpbHZlclwiLFxuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJRdWlja3NpbHZlclwiLFxuICAgICAgICAgICAgICBcInN3YXRjaFwiOiBcIiM5ZTlhOTFcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiBcIkNUXCIsXG4gICAgICBcIm5hbWVcIjogXCJDeWJlcnRydWNrXCIsXG4gICAgICBcInZhcmlhbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogXCJDVC4xXCIsXG4gICAgICAgICAgXCJsYWJlbFwiOiBcIjIwMjQrXCIsXG4gICAgICAgICAgXCJjb2xvdXJzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJpZFwiOiBcInN0YWlubGVzc19zdGVlbFwiLFxuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJTdGFpbmxlc3MgU3RlZWxcIixcbiAgICAgICAgICAgICAgXCJzd2F0Y2hcIjogXCIjYjBiMGIwXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiaWRcIjogXCJzYXRpbl9ibGFja1wiLFxuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJTYXRpbiBCbGFja1wiLFxuICAgICAgICAgICAgICBcInN3YXRjaFwiOiBcIiMxYTFhMWFcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuIiwgIi8vIEZhY3RvcnkgVGVzbGEgY29sb3VycyBmb3IgdGhlIGNvbG91ciBwaWNrZXIgXHUyMDE0IGRlcml2ZWQgZnJvbSBtb2RlbHMuanNvbi5cbi8vIGBkaXJgIG1hcHMgdG8gdGhlIGltYWdlIGRpcmVjdG9yeSBuYW1lIHVuZGVyIHttb2RlbH0ve3ZhcmlhbnR9Ly5cblxuaW1wb3J0IG1vZGVsc0RhdGEgZnJvbSAnLi4vbW9kZWxzLmpzb24nO1xuXG5jb25zdCBjb2xvdXJNYXAgPSBuZXcgTWFwKCk7XG5mb3IgKGNvbnN0IG0gb2YgbW9kZWxzRGF0YS5tb2RlbHMpXG4gIGZvciAoY29uc3QgdiBvZiBtLnZhcmlhbnRzKVxuICAgIGZvciAoY29uc3QgYyBvZiB2LmNvbG91cnMpXG4gICAgICBpZiAoIWNvbG91ck1hcC5oYXMoYy5pZCkpXG4gICAgICAgIGNvbG91ck1hcC5zZXQoYy5pZCwgeyBuYW1lOiBjLm5hbWUsIGRpcjogYy5pZCwgc3dhdGNoOiBjLnN3YXRjaCB9KTtcblxuZXhwb3J0IGNvbnN0IEZBQ1RPUllfQ09MT1VSUyA9IEFycmF5LmZyb20oY29sb3VyTWFwLnZhbHVlcygpKTtcbiIsICIvLyBUZXNsYSBtb2RlbCBkZWZpbml0aW9ucyBcdTIwMTQgZGVyaXZlZCBmcm9tIG1vZGVscy5qc29uIChzaW5nbGUgc291cmNlIG9mIHRydXRoKS5cbi8vIGBjb2xvdXJzYDogYXJyYXkgb2YgaW1hZ2UgZGlyZWN0b3J5IG5hbWVzIGF2YWlsYWJsZSBmb3IgdGhpcyB2YXJpYW50IChwaWNrZXIgc2hvd3MgdGhlc2UpLlxuLy8gYGZhY3RvcnlDb2xvdXJzYDogZnVsbCBjYXRhbG9ndWUgZnJvbSBtb2RlbHMuanNvbiAodXNlZCBieSB1cGxvYWRlciBhbmQgY29sb3VyIHBpY2tlcikuXG5cbmltcG9ydCBtb2RlbHNEYXRhIGZyb20gJy4uL21vZGVscy5qc29uJztcblxuZXhwb3J0IGNvbnN0IFRFU0xBX01PREVMUyA9IG1vZGVsc0RhdGEubW9kZWxzLm1hcChtID0+ICh7XG4gIGlkOiBtLmlkLFxuICBuYW1lOiBtLm5hbWUsXG4gIHZhcmlhbnRzOiBtLnZhcmlhbnRzLm1hcCh2ID0+ICh7XG4gICAgaWQ6IHYuaWQsXG4gICAgbGFiZWw6IHYubGFiZWwsXG4gICAgY29sb3VyczogWyduZXV0cmFsJywgLi4udi5jb2xvdXJzLmZpbHRlcihjID0+IGMuaGFzSW1hZ2VzKS5tYXAoYyA9PiBjLmlkKV0sXG4gICAgZmFjdG9yeUNvbG91cnM6IHYuY29sb3VycyxcbiAgfSkpLFxufSkpO1xuXG4vKipcbiAqIEdldCB0aGUgbGlzdCBvZiBhdmFpbGFibGUgY29sb3VyIGRpcmVjdG9yaWVzIGZvciBhIG1vZGVsICsgdmFyaWFudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFZhcmlhbnRDb2xvdXJzKG1vZGVsSWQsIHZhcmlhbnRJZCkge1xuICBjb25zdCBtb2RlbCA9IFRFU0xBX01PREVMUy5maW5kKG0gPT4gbS5pZCA9PT0gbW9kZWxJZCk7XG4gIGlmICghbW9kZWwpIHJldHVybiBbJ25ldXRyYWwnXTtcbiAgY29uc3QgdmFyaWFudCA9IG1vZGVsLnZhcmlhbnRzLmZpbmQodiA9PiB2LmlkID09PSB2YXJpYW50SWQpO1xuICByZXR1cm4gdmFyaWFudD8uY29sb3VycyA/PyBbJ25ldXRyYWwnXTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIHZhcmlhbnQgaGFzIGltYWdlcyAobW9yZSB0aGFuIGp1c3QgbmV1dHJhbCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYW50SGFzSW1hZ2VzKG1vZGVsSWQsIHZhcmlhbnRJZCkge1xuICBjb25zdCBtb2RlbCA9IFRFU0xBX01PREVMUy5maW5kKG0gPT4gbS5pZCA9PT0gbW9kZWxJZCk7XG4gIGlmICghbW9kZWwpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIG1vZGVsLnZhcmlhbnRzLnNvbWUodiA9PiB2LmlkID09PSB2YXJpYW50SWQpO1xufVxuXG4vKipcbiAqIEdldCB2YXJpYW50cyBmb3IgYSBnaXZlbiBtb2RlbCBJRC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFZhcmlhbnRzKG1vZGVsSWQpIHtcbiAgY29uc3QgbW9kZWwgPSBURVNMQV9NT0RFTFMuZmluZChtID0+IG0uaWQgPT09IG1vZGVsSWQpO1xuICByZXR1cm4gbW9kZWw/LnZhcmlhbnRzID8/IFtdO1xufVxuIiwgImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwsIGNzcyB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBURVNMQV9NT0RFTFMsIGdldFZhcmlhbnRzIH0gZnJvbSAnLi9tb2RlbHMuanMnO1xuXG5leHBvcnQgY2xhc3MgVGVzbGFDYXJkRWRpdG9yIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogeyB0eXBlOiBPYmplY3QgfSxcbiAgICAgIGNvbmZpZzogeyB0eXBlOiBPYmplY3QgfSxcbiAgICB9O1xuICB9XG5cbiAgc2V0Q29uZmlnKGNvbmZpZykge1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICB9XG5cbiAgX3ZhbHVlQ2hhbmdlZChldikge1xuICAgIGlmICghdGhpcy5jb25maWcgfHwgIXRoaXMuaGFzcykgcmV0dXJuO1xuICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldDtcbiAgICBjb25zdCBuZXdDb25maWcgPSB7IC4uLnRoaXMuY29uZmlnLCBbdGFyZ2V0Lm5hbWVdOiB0YXJnZXQudmFsdWUgfTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjb25maWctY2hhbmdlZCcsIHsgZGV0YWlsOiB7IGNvbmZpZzogbmV3Q29uZmlnIH0gfSkpO1xuICB9XG5cbiAgX21vZGVsQ2hhbmdlZChldikge1xuICAgIGlmICghdGhpcy5jb25maWcgfHwgIXRoaXMuaGFzcykgcmV0dXJuO1xuICAgIGNvbnN0IG1vZGVsSWQgPSBldi50YXJnZXQudmFsdWU7XG4gICAgY29uc3QgdmFyaWFudHMgPSBnZXRWYXJpYW50cyhtb2RlbElkKTtcbiAgICBjb25zdCBmaXJzdFZhcmlhbnQgPSB2YXJpYW50c1swXT8uaWQgPz8gJyc7XG4gICAgY29uc3QgbmV3Q29uZmlnID0geyAuLi50aGlzLmNvbmZpZywgY2FyX21vZGVsOiBtb2RlbElkLCBjYXJfdmFyaWFudDogZmlyc3RWYXJpYW50IH07XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY29uZmlnLWNoYW5nZWQnLCB7IGRldGFpbDogeyBjb25maWc6IG5ld0NvbmZpZyB9IH0pKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnKSByZXR1cm4gaHRtbGBgO1xuXG4gICAgY29uc3QgY3VycmVudE1vZGVsID0gdGhpcy5jb25maWcuY2FyX21vZGVsID8/ICczJztcbiAgICBjb25zdCB2YXJpYW50cyA9IGdldFZhcmlhbnRzKGN1cnJlbnRNb2RlbCk7XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJlZGl0b3JcIj5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIENhciBOYW1lIChlbnRpdHkgcHJlZml4KSAqXG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBuYW1lPVwiY2FyX25hbWVcIlxuICAgICAgICAgICAgLnZhbHVlPSR7dGhpcy5jb25maWcuY2FyX25hbWUgPz8gJyd9XG4gICAgICAgICAgICBAY2hhbmdlPSR7dGhpcy5fdmFsdWVDaGFuZ2VkfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIG15X3Rlc2xhXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgTW9kZWxcbiAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJjYXJfbW9kZWxcIiAudmFsdWU9JHtjdXJyZW50TW9kZWx9IEBjaGFuZ2U9JHt0aGlzLl9tb2RlbENoYW5nZWR9PlxuICAgICAgICAgICAgJHtURVNMQV9NT0RFTFMubWFwKG0gPT4gaHRtbGBcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIiR7bS5pZH1cIiA/c2VsZWN0ZWQ9JHttLmlkID09PSBjdXJyZW50TW9kZWx9PiR7bS5uYW1lfTwvb3B0aW9uPlxuICAgICAgICAgICAgYCl9XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBWYXJpYW50XG4gICAgICAgICAgPHNlbGVjdCBuYW1lPVwiY2FyX3ZhcmlhbnRcIiAudmFsdWU9JHt0aGlzLmNvbmZpZy5jYXJfdmFyaWFudCA/PyAnJ30gQGNoYW5nZT0ke3RoaXMuX3ZhbHVlQ2hhbmdlZH0+XG4gICAgICAgICAgICAke3ZhcmlhbnRzLm1hcCh2ID0+IGh0bWxgXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIke3YuaWR9XCIgP3NlbGVjdGVkPSR7di5pZCA9PT0gdGhpcy5jb25maWcuY2FyX3ZhcmlhbnR9PiR7di5sYWJlbH08L29wdGlvbj5cbiAgICAgICAgICAgIGApfVxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgSW1hZ2UgUGF0aFxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgbmFtZT1cImltYWdlX3BhdGhcIlxuICAgICAgICAgICAgLnZhbHVlPSR7dGhpcy5jb25maWcuaW1hZ2VfcGF0aCA/PyAnL2hhY3NmaWxlcy9ob21lYXNzaXN0YW50LWZlLXRlc2xhJ31cbiAgICAgICAgICAgIEBjaGFuZ2U9JHt0aGlzLl92YWx1ZUNoYW5nZWR9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIi9oYWNzZmlsZXMvaG9tZWFzc2lzdGFudC1mZS10ZXNsYVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIERpc3BsYXkgTmFtZVxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgLnZhbHVlPSR7dGhpcy5jb25maWcubmFtZSA/PyAnJ31cbiAgICAgICAgICAgIEBjaGFuZ2U9JHt0aGlzLl92YWx1ZUNoYW5nZWR9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk15IFRlc2xhXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xuICAgIHJldHVybiBjc3NgXG4gICAgICAuZWRpdG9yIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZ2FwOiAxMnB4O1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICB9XG4gICAgICBsYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogNHB4O1xuICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIGlucHV0LCBzZWxlY3Qge1xuICAgICAgICBwYWRkaW5nOiA2cHggOHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yLCAjY2NjKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJhY2tncm91bmQtY29sb3IsICNmZmYpO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yLCAjMDAwKTtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3Rlc2xhLWNhcmQtZWRpdG9yJywgVGVzbGFDYXJkRWRpdG9yKTtcbiIsICJpbXBvcnQgeyBMaXRFbGVtZW50IH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IGVudGl0eUlkIH0gZnJvbSAnLi9lbnRpdHktY29uZmlnLmpzJztcblxuLyoqXG4gKiBTaGFyZWQgYmFzZSBjbGFzcyBmb3IgdGVzbGEtY2FyZCBzdWJtZW51IGNvbXBvbmVudHMuXG4gKiBQcm92aWRlcyBlbnRpdHkgaGVscGVycyBhbmQgYSBjbG9zZS1tZW51IGRpc3BhdGNoZXIuXG4gKi9cbmV4cG9ydCBjbGFzcyBUZXNsYUJhc2UgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICBzdGF0aWMgX2ltZ1ZlciA9IERhdGUubm93KCk7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiAgICAgICAgIHsgdHlwZTogT2JqZWN0IH0sXG4gICAgICBjb25maWc6ICAgICAgIHsgdHlwZTogT2JqZWN0IH0sXG4gICAgICBjdXN0b21Db2xvdXI6IHsgdHlwZTogT2JqZWN0IH0sICAvLyB7IGgsIHMgfSB8IG51bGwgXHUyMDE0IGZvciBjdXN0b20gQ1NTIG92ZXJsYXlcbiAgICAgIGxheW91dDogICAgICAgeyB0eXBlOiBTdHJpbmcgfSwgIC8vICdwb3J0cmFpdCcgfCAnbGFuZHNjYXBlJ1xuICAgIH07XG4gIH1cblxuICAvLyBcdTI1MDBcdTI1MDAgRW50aXR5IGhlbHBlcnMgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cbiAgX2VpZCh0KSAgICAgIHsgcmV0dXJuIGVudGl0eUlkKHQsIHRoaXMuY29uZmlnLmNhcl9uYW1lKTsgfVxuICBfc3RhdGUodCkgICAgeyByZXR1cm4gdGhpcy5oYXNzPy5zdGF0ZXNbdGhpcy5fZWlkKHQpXTsgfVxuICBfdmFsKHQpICAgICAgeyByZXR1cm4gdGhpcy5fc3RhdGUodCk/LnN0YXRlOyB9XG4gIF9hdHRyKHQsIGEpICB7IHJldHVybiB0aGlzLl9zdGF0ZSh0KT8uYXR0cmlidXRlcz8uW2FdOyB9XG4gIF9uYXR0cih0LCBhKSB7IGNvbnN0IHYgPSB0aGlzLl9hdHRyKHQsIGEpOyByZXR1cm4gdiAhPSBudWxsID8gTnVtYmVyKHYpIDogbnVsbDsgfVxuXG4gIC8vIFx1MjUwMFx1MjUwMCBJbWFnZSBVUkwgYnVpbGRlciBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxuICBfaW1nVXJsKGYpIHtcbiAgICBjb25zdCB7IGltYWdlX3BhdGgsIGNhcl9tb2RlbCwgY2FyX3ZhcmlhbnQsIGNhcl9jb2xvciB9ID0gdGhpcy5jb25maWc7XG4gICAgcmV0dXJuIGAke2ltYWdlX3BhdGh9LyR7Y2FyX21vZGVsfS8ke2Nhcl92YXJpYW50fS8ke2Nhcl9jb2xvcn0vJHtmfT92PSR7VGVzbGFCYXNlLl9pbWdWZXJ9YDtcbiAgfVxuXG4gIC8vIFx1MjUwMFx1MjUwMCBCdXR0b24gaW1hZ2UgVVJMIGJ1aWxkZXIgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cbiAgX2J0blVybChmKSB7XG4gICAgcmV0dXJuIGAke3RoaXMuY29uZmlnLmltYWdlX3BhdGh9L2J1dHRvbnMvJHtmfT92PSR7VGVzbGFCYXNlLl9pbWdWZXJ9YDtcbiAgfVxuXG4gIC8vIFx1MjUwMFx1MjUwMCBNYXNrIFVSTCBcdTIwMTQgYWx3YXlzIGZyb20gbmV1dHJhbCBkaXJlY3RvcnkgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cbiAgX21hc2tVcmwoZikge1xuICAgIGNvbnN0IHsgaW1hZ2VfcGF0aCwgY2FyX21vZGVsLCBjYXJfdmFyaWFudCB9ID0gdGhpcy5jb25maWc7XG4gICAgY29uc3QgbWFza0ZpbGUgPSBmLnJlcGxhY2UoJy5wbmcnLCAnLW1hc2sucG5nJyk7XG4gICAgcmV0dXJuIGAke2ltYWdlX3BhdGh9LyR7Y2FyX21vZGVsfS8ke2Nhcl92YXJpYW50fS9uZXV0cmFsLyR7bWFza0ZpbGV9P3Y9JHtUZXNsYUJhc2UuX2ltZ1Zlcn1gO1xuICB9XG5cbiAgLy8gXHUyNTAwXHUyNTAwIEN1c3RvbSBjb2xvdXIgb3ZlcmxheSBzdHlsZSBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxuICBnZXQgX2hhc0N1c3RvbU92ZXJsYXkoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5jdXN0b21Db2xvdXIgJiYgdGhpcy5jdXN0b21Db2xvdXIucyA+IDA7XG4gIH1cblxuICBfY3VzdG9tT3ZlcmxheVN0eWxlRm9yKGltYWdlRmlsZSkge1xuICAgIGNvbnN0IGMgPSB0aGlzLmN1c3RvbUNvbG91cjtcbiAgICBpZiAoIWMgfHwgYy5zID09PSAwKSByZXR1cm4gJyc7XG4gICAgY29uc3QgbWFzayA9IHRoaXMuX21hc2tVcmwoaW1hZ2VGaWxlKTtcbiAgICByZXR1cm4gYHBvc2l0aW9uOmFic29sdXRlO2luc2V0OjA7cG9pbnRlci1ldmVudHM6bm9uZTtgXG4gICAgICArIGBiYWNrZ3JvdW5kOmhzbCgke2MuaH0sJHtjLnN9JSw1MCUpO21peC1ibGVuZC1tb2RlOmNvbG9yO2BcbiAgICAgICsgYC13ZWJraXQtbWFzay1pbWFnZTp1cmwoJHttYXNrfSk7bWFzay1pbWFnZTp1cmwoJHttYXNrfSk7YFxuICAgICAgKyBgLXdlYmtpdC1tYXNrLXNpemU6Y29udGFpbjttYXNrLXNpemU6Y29udGFpbjtgXG4gICAgICArIGAtd2Via2l0LW1hc2stcmVwZWF0Om5vLXJlcGVhdDttYXNrLXJlcGVhdDpuby1yZXBlYXQ7YFxuICAgICAgKyBgLXdlYmtpdC1tYXNrLXBvc2l0aW9uOmNlbnRlcjttYXNrLXBvc2l0aW9uOmNlbnRlcjtgO1xuICB9XG5cbiAgLy8gXHUyNTAwXHUyNTAwIFNlcnZpY2UgY2FsbCBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxuICBhc3luYyBfc3ZjKGRvbWFpbiwgc2VydmljZSwgZW50aXR5VHBsLCBleHRyYSA9IHt9KSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuaGFzcy5jYWxsU2VydmljZShkb21haW4sIHNlcnZpY2UsIHtcbiAgICAgICAgZW50aXR5X2lkOiB0aGlzLl9laWQoZW50aXR5VHBsKSxcbiAgICAgICAgLi4uZXh0cmEsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbdGVzbGEtY2FyZF0gc2VydmljZSBlcnJvcicsIGRvbWFpbiwgc2VydmljZSwgZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gXHUyNTAwXHUyNTAwIENsb3NlIG1lbnUgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cbiAgX2Nsb3NlKCkge1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2Nsb3NlLW1lbnUnLCB7IGJ1YmJsZXM6IHRydWUsIGNvbXBvc2VkOiB0cnVlIH0pKTtcbiAgfVxufVxuIiwgImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgdW5zYWZlSFRNTCB9IGZyb20gJ2xpdC9kaXJlY3RpdmVzL3Vuc2FmZS1odG1sLmpzJztcbmltcG9ydCB7IFRlc2xhQmFzZSB9IGZyb20gJy4vdGVzbGEtYmFzZS5qcyc7XG5pbXBvcnQgeyBFTlRJVElFUyB9IGZyb20gJy4vZW50aXR5LWNvbmZpZy5qcyc7XG5pbXBvcnQgeyBzaGFyZWRTdHlsZXMsIGNoYXJnZXJTdHlsZXMgfSBmcm9tICcuL3N0eWxlcy5qcyc7XG5pbXBvcnQgeyBJQ09OUyB9IGZyb20gJy4vaWNvbnMuanMnO1xuXG5jbGFzcyBUZXNsYU1lbnVDaGFyZ2VyIGV4dGVuZHMgVGVzbGFCYXNlIHtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN1cGVyLnByb3BlcnRpZXMsXG4gICAgICBfcGVuZGluZ0xpbWl0OiB7IHN0YXRlOiB0cnVlIH0sXG4gICAgICBfcGVuZGluZ0FtcHM6ICB7IHN0YXRlOiB0cnVlIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCkgeyByZXR1cm4gW3NoYXJlZFN0eWxlcywgY2hhcmdlclN0eWxlc107IH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX3BlbmRpbmdMaW1pdCA9IG51bGw7XG4gICAgdGhpcy5fcGVuZGluZ0FtcHMgID0gbnVsbDtcbiAgfVxuXG4gIC8vIFx1MjUwMFx1MjUwMCBTbGlkZXIgaGVscGVycyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxuICBfcGN0KHYsIG1uLCBteCkgeyByZXR1cm4gTWF0aC5yb3VuZCgoKHYgLSBtbikgLyAobXggLSBtbikpICogMTAwKTsgfVxuXG4gIF9vbkxpbWl0SW5wdXQoZSkge1xuICAgIGUudGFyZ2V0LnN0eWxlLnNldFByb3BlcnR5KCctLXBjdCcsIGAke3RoaXMuX3BjdCgrZS50YXJnZXQudmFsdWUsICtlLnRhcmdldC5taW4sICtlLnRhcmdldC5tYXgpfSVgKTtcbiAgICB0aGlzLl9wZW5kaW5nTGltaXQgPSArZS50YXJnZXQudmFsdWU7XG4gIH1cblxuICBfb25MaW1pdENoYW5nZShlKSB7XG4gICAgdGhpcy5fcGVuZGluZ0xpbWl0ID0gbnVsbDtcbiAgICB0aGlzLl9zdmMoJ251bWJlcicsICdzZXRfdmFsdWUnLCBFTlRJVElFUy5DSEFSR0VfTElNSVRfTlVNQkVSLCB7IHZhbHVlOiArZS50YXJnZXQudmFsdWUgfSk7XG4gIH1cblxuICBfb25BbXBzSW5wdXQoZSkge1xuICAgIGUudGFyZ2V0LnN0eWxlLnNldFByb3BlcnR5KCctLXBjdCcsIGAke3RoaXMuX3BjdCgrZS50YXJnZXQudmFsdWUsICtlLnRhcmdldC5taW4sICtlLnRhcmdldC5tYXgpfSVgKTtcbiAgICB0aGlzLl9wZW5kaW5nQW1wcyA9ICtlLnRhcmdldC52YWx1ZTtcbiAgfVxuXG4gIF9vbkFtcHNDaGFuZ2UoZSkge1xuICAgIHRoaXMuX3BlbmRpbmdBbXBzID0gbnVsbDtcbiAgICB0aGlzLl9zdmMoJ251bWJlcicsICdzZXRfdmFsdWUnLCBFTlRJVElFUy5DSEFSR0lOR19BTVBTX05VTUJFUiwgeyB2YWx1ZTogK2UudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgX2FkanVzdEFtcHMoZGVsdGEpIHtcbiAgICBjb25zdCBzdGVwID0gdGhpcy5fbmF0dHIoRU5USVRJRVMuQ0hBUkdJTkdfQU1QU19OVU1CRVIsICdzdGVwJykgPz8gMTtcbiAgICBjb25zdCBtaW4gID0gdGhpcy5fbmF0dHIoRU5USVRJRVMuQ0hBUkdJTkdfQU1QU19OVU1CRVIsICdtaW4nKSAgPz8gNTtcbiAgICBjb25zdCBtYXggID0gdGhpcy5fbmF0dHIoRU5USVRJRVMuQ0hBUkdJTkdfQU1QU19OVU1CRVIsICdtYXgnKSAgPz8gMzI7XG4gICAgY29uc3QgY3VyICA9IHRoaXMuX3BlbmRpbmdBbXBzID8/IE51bWJlcih0aGlzLl92YWwoRU5USVRJRVMuQ0hBUkdJTkdfQU1QU19OVU1CRVIpID8/IDE2KTtcbiAgICB0aGlzLl9wZW5kaW5nQW1wcyA9IE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCBjdXIgKyBkZWx0YSAqIHN0ZXApKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fYW1wc1RpbWVyKTtcbiAgICB0aGlzLl9hbXBzVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX3N2YygnbnVtYmVyJywgJ3NldF92YWx1ZScsIEVOVElUSUVTLkNIQVJHSU5HX0FNUFNfTlVNQkVSLCB7IHZhbHVlOiB0aGlzLl9wZW5kaW5nQW1wcyB9KTtcbiAgICAgIHRoaXMuX3BlbmRpbmdBbXBzID0gbnVsbDtcbiAgICB9LCA4MDApO1xuICB9XG5cbiAgLy8gXHUyNTAwXHUyNTAwIFJlbmRlciBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxuICByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZyB8fCAhdGhpcy5oYXNzKSByZXR1cm4gaHRtbGBgO1xuXG4gICAgY29uc3QgcmFuZ2VSYXcgID0gdGhpcy5fdmFsKEVOVElUSUVTLkJBVFRFUllfUkFOR0UpO1xuICAgIGNvbnN0IHJhbmdlVW5pdCA9IHRoaXMuX2F0dHIoRU5USVRJRVMuQkFUVEVSWV9SQU5HRSwgJ3VuaXRfb2ZfbWVhc3VyZW1lbnQnKSA/PyAna20nO1xuICAgIGNvbnN0IHJhbmdlICAgICA9IHJhbmdlUmF3ICE9IG51bGwgPyBgJHtNYXRoLnJvdW5kKE51bWJlcihyYW5nZVJhdykpfSAke3JhbmdlVW5pdH1gIDogbnVsbDtcblxuICAgIGNvbnN0IGNoYXJnZXJEb29yT3BlbiA9IHRoaXMuX3ZhbChFTlRJVElFUy5DSEFSR0VSX0RPT1IpID09PSAnb3BlbidcbiAgICAgICAgICAgICAgICAgICAgICAgICB8fCB0aGlzLl92YWwoRU5USVRJRVMuUExVR0dFRF9JTikgICAgPT09ICdvbic7XG5cbiAgICBjb25zdCBsaW1pdFZhbCAgPSB0aGlzLl9wZW5kaW5nTGltaXQgPz8gTnVtYmVyKHRoaXMuX3ZhbChFTlRJVElFUy5DSEFSR0VfTElNSVRfTlVNQkVSKSA/PyA4MCk7XG4gICAgY29uc3QgbGltaXRNaW4gID0gdGhpcy5fbmF0dHIoRU5USVRJRVMuQ0hBUkdFX0xJTUlUX05VTUJFUiwgJ21pbicpICA/PyA1MDtcbiAgICBjb25zdCBsaW1pdE1heCAgPSB0aGlzLl9uYXR0cihFTlRJVElFUy5DSEFSR0VfTElNSVRfTlVNQkVSLCAnbWF4JykgID8/IDEwMDtcbiAgICBjb25zdCBsaW1pdFN0ZXAgPSB0aGlzLl9uYXR0cihFTlRJVElFUy5DSEFSR0VfTElNSVRfTlVNQkVSLCAnc3RlcCcpID8/IDE7XG4gICAgY29uc3QgbGltaXRQY3QgID0gdGhpcy5fcGN0KGxpbWl0VmFsLCBsaW1pdE1pbiwgbGltaXRNYXgpO1xuXG4gICAgY29uc3QgYW1wc1ZhbCAgID0gdGhpcy5fcGVuZGluZ0FtcHMgPz8gTnVtYmVyKHRoaXMuX3ZhbChFTlRJVElFUy5DSEFSR0lOR19BTVBTX05VTUJFUikgPz8gMTYpO1xuICAgIGNvbnN0IGFtcHNNaW4gICA9IHRoaXMuX25hdHRyKEVOVElUSUVTLkNIQVJHSU5HX0FNUFNfTlVNQkVSLCAnbWluJykgPz8gNTtcbiAgICBjb25zdCBhbXBzTWF4ICAgPSB0aGlzLl9uYXR0cihFTlRJVElFUy5DSEFSR0lOR19BTVBTX05VTUJFUiwgJ21heCcpID8/IDMyO1xuXG4gICAgY29uc3QgYWRkZWRSYW5nZSA9IHRoaXMuX2F0dHIoRU5USVRJRVMuRU5FUkdZX0FEREVELCAnYWRkZWRfcmFuZ2UnKTtcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cImNoYXJnZXItbWVudSR7dGhpcy5sYXlvdXQgPT09ICdsYW5kc2NhcGUnID8gJyBsYW5kc2NhcGUnIDogJyd9XCI+XG5cbiAgICAgICAgPCEtLSBIZWFkZXI6IFwiQ2hhcmdpbmdcIiArIHJhbmdlIHN1YnRpdGxlIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGVyXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBhbmVsLWJhY2tcIiBAY2xpY2s9JHt0aGlzLl9jbG9zZX0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj4ke3Vuc2FmZUhUTUwoSUNPTlNbJ2NoZXZyb24tbGVmdCddKX08L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLXRpdGxlLWJsb2NrXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBhbmVsLXRpdGxlXCI+Q2hhcmdpbmc8L3NwYW4+XG4gICAgICAgICAgICAke3JhbmdlID8gaHRtbGA8c3BhbiBjbGFzcz1cInBhbmVsLXN1YnRpdGxlXCI+JHtyYW5nZX08L3NwYW4+YCA6ICcnfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tIENoYXJnZSBsaW1pdCBjYXJkICsgYW1wcyBzdGVwcGVyIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2hnLWNhcmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hnLWxpbWl0LWhlYWRlclwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaGctbGltaXQtdGl0bGVcIj5DaGFyZ2UgbGltaXQ6ICR7bGltaXRWYWx9JTwvc3Bhbj5cbiAgICAgICAgICAgICR7YWRkZWRSYW5nZSA/IGh0bWxgXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2hnLWxpbWl0LXN1YlwiPiR7YWRkZWRSYW5nZX0ga20gYWRkZWQgZHVyaW5nIGxhc3QgY2hhcmdpbmcgc2Vzc2lvbjwvcD5gIDogJyd9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8IS0tIEdyZWVuIHBpbGwgc2xpZGVyIGZvciBjaGFyZ2UgbGltaXQgLS0+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIGNsYXNzPVwiY2hnLXNsaWRlclwiIHN0eWxlPVwiLS1wY3Q6JHtsaW1pdFBjdH0lXCJcbiAgICAgICAgICAgIG1pbj0ke2xpbWl0TWlufSBtYXg9JHtsaW1pdE1heH0gc3RlcD0ke2xpbWl0U3RlcH1cbiAgICAgICAgICAgIC52YWx1ZT0ke1N0cmluZyhsaW1pdFZhbCl9XG4gICAgICAgICAgICBAaW5wdXQ9JHt0aGlzLl9vbkxpbWl0SW5wdXR9IEBjaGFuZ2U9JHt0aGlzLl9vbkxpbWl0Q2hhbmdlfS8+XG5cbiAgICAgICAgICA8IS0tIEFtcHMgc3RlcHBlciByb3cgLS0+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNoZy1hbXBzLXJvd1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNoZy1hbXBzLWJ0blwiXG4gICAgICAgICAgICAgID9kaXNhYmxlZD0ke2FtcHNWYWwgPD0gYW1wc01pbn1cbiAgICAgICAgICAgICAgQGNsaWNrPSR7KCkgPT4gdGhpcy5fYWRqdXN0QW1wcygtMSl9PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj4ke3Vuc2FmZUhUTUwoSUNPTlNbJ2NoZXZyb24tbGVmdCddKX08L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hnLWFtcHMtdmFsdWVcIj4ke2FtcHNWYWx9IEE8L3NwYW4+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2hnLWFtcHMtYnRuXCJcbiAgICAgICAgICAgICAgP2Rpc2FibGVkPSR7YW1wc1ZhbCA+PSBhbXBzTWF4fVxuICAgICAgICAgICAgICBAY2xpY2s9JHsoKSA9PiB0aGlzLl9hZGp1c3RBbXBzKCsxKX0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiPiR7dW5zYWZlSFRNTChJQ09OU1snY2hldnJvbi1yaWdodCddKX08L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSBPcGVuIC8gQ2xvc2UgQ2hhcmdlIFBvcnQgXHUyMDE0IHBsYWluIHRleHQgbGluayAtLT5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNoZy1wb3J0LWJ0blwiXG4gICAgICAgICAgQGNsaWNrPSR7KCkgPT4gdGhpcy5fc3ZjKCdidXR0b24nLCAncHJlc3MnLCBjaGFyZ2VyRG9vck9wZW4gPyBFTlRJVElFUy5DSEFSR0VfUE9SVF9DTE9TRSA6IEVOVElUSUVTLkNIQVJHRV9QT1JUX09QRU4pfT5cbiAgICAgICAgICAke2NoYXJnZXJEb29yT3BlbiA/ICdDbG9zZSBDaGFyZ2UgUG9ydCcgOiAnT3BlbiBDaGFyZ2UgUG9ydCd9XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndGVzbGEtbWVudS1jaGFyZ2VyJywgVGVzbGFNZW51Q2hhcmdlcik7XG4iLCAiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyB1bnNhZmVIVE1MIH0gZnJvbSAnbGl0L2RpcmVjdGl2ZXMvdW5zYWZlLWh0bWwuanMnO1xuaW1wb3J0IHsgVGVzbGFCYXNlIH0gZnJvbSAnLi90ZXNsYS1iYXNlLmpzJztcbmltcG9ydCB7IEVOVElUSUVTIH0gZnJvbSAnLi9lbnRpdHktY29uZmlnLmpzJztcbmltcG9ydCB7IHNoYXJlZFN0eWxlcywgY2xpbWF0ZVN0eWxlcyB9IGZyb20gJy4vc3R5bGVzLmpzJztcbmltcG9ydCB7IElDT05TIH0gZnJvbSAnLi9pY29ucy5qcyc7XG5cbmNsYXNzIFRlc2xhTWVudUNsaW1hdGUgZXh0ZW5kcyBUZXNsYUJhc2Uge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3VwZXIucHJvcGVydGllcyxcbiAgICAgIF9wZW5kaW5nVGVtcDogIHsgc3RhdGU6IHRydWUgfSxcbiAgICAgIF9jbGltRXhwYW5kZWQ6IHsgc3RhdGU6IHRydWUgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKSB7IHJldHVybiBbc2hhcmVkU3R5bGVzLCBjbGltYXRlU3R5bGVzXTsgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fcGVuZGluZ1RlbXAgID0gbnVsbDtcbiAgICB0aGlzLl9jbGltRXhwYW5kZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8vIFx1MjUwMFx1MjUwMCBUZW1wZXJhdHVyZSBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxuICBfYWRqdXN0VGVtcChkZWx0YSkge1xuICAgIGNvbnN0IHN0ZXAgPSBOdW1iZXIodGhpcy5fYXR0cihFTlRJVElFUy5DTElNQVRFLCAndGFyZ2V0X3RlbXBfc3RlcCcpID8/IDAuNSk7XG4gICAgY29uc3QgbWluICA9IE51bWJlcih0aGlzLl9hdHRyKEVOVElUSUVTLkNMSU1BVEUsICdtaW5fdGVtcCcpID8/IDE1KTtcbiAgICBjb25zdCBtYXggID0gTnVtYmVyKHRoaXMuX2F0dHIoRU5USVRJRVMuQ0xJTUFURSwgJ21heF90ZW1wJykgPz8gMjgpO1xuICAgIGNvbnN0IGN1ciAgPSB0aGlzLl9wZW5kaW5nVGVtcCA/PyAodGhpcy5fYXR0cihFTlRJVElFUy5DTElNQVRFLCAndGVtcGVyYXR1cmUnKSAhPSBudWxsXG4gICAgICA/IE51bWJlcih0aGlzLl9hdHRyKEVOVElUSUVTLkNMSU1BVEUsICd0ZW1wZXJhdHVyZScpKSA6IDIyKTtcbiAgICB0aGlzLl9wZW5kaW5nVGVtcCA9IE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCBNYXRoLnJvdW5kKChjdXIgKyBkZWx0YSAqIHN0ZXApIC8gc3RlcCkgKiBzdGVwKSk7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RlbXBUaW1lcik7XG4gICAgdGhpcy5fdGVtcFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9zdmMoJ2NsaW1hdGUnLCAnc2V0X3RlbXBlcmF0dXJlJywgRU5USVRJRVMuQ0xJTUFURSwgeyB0ZW1wZXJhdHVyZTogdGhpcy5fcGVuZGluZ1RlbXAgfSk7XG4gICAgICB0aGlzLl9wZW5kaW5nVGVtcCA9IG51bGw7XG4gICAgfSwgODAwKTtcbiAgfVxuXG4gIC8vIFx1MjUwMFx1MjUwMCBTZWF0IGhlYXQgaW1hZ2UgXHUyMDE0IG1hcHMgbGV2ZWwgdG8gdGhlIGNvcnJlY3QgU1ZHIGZpbGUgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cbiAgX3NlYXRIZWF0RmlsZShsZXZlbCkge1xuICAgIGlmICghbGV2ZWwgfHwgbGV2ZWwgPT09ICdPZmYnKSByZXR1cm4gJ1Rlc2xhX0hlYXRlZF9TZWF0X09mZi5zdmcnO1xuICAgIGNvbnN0IG4gPSBwYXJzZUludChsZXZlbCk7XG4gICAgaWYgKCFpc05hTihuKSAmJiBuID49IDEgJiYgbiA8PSAzKSByZXR1cm4gYFRlc2xhX0hlYXRlZF9TZWF0XyR7bn0uc3ZnYDtcbiAgICBpZiAobGV2ZWwgPT09ICdMb3cnKSAgICByZXR1cm4gJ1Rlc2xhX0hlYXRlZF9TZWF0XzEuc3ZnJztcbiAgICBpZiAobGV2ZWwgPT09ICdNZWRpdW0nKSByZXR1cm4gJ1Rlc2xhX0hlYXRlZF9TZWF0XzIuc3ZnJztcbiAgICBpZiAobGV2ZWwgPT09ICdIaWdoJykgICByZXR1cm4gJ1Rlc2xhX0hlYXRlZF9TZWF0XzMuc3ZnJztcbiAgICByZXR1cm4gJ1Rlc2xhX0hlYXRlZF9TZWF0X09mZi5zdmcnO1xuICB9XG5cbiAgLy8gXHUyNTAwXHUyNTAwIENsb3NlIG92ZXJyaWRlIFx1MjAxNCBhbHNvIHJlc2V0IGV4cGFuZGVkIHN0YXRlIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXG4gIF9jbG9zZSgpIHtcbiAgICB0aGlzLl9jbGltRXhwYW5kZWQgPSBmYWxzZTtcbiAgICBzdXBlci5fY2xvc2UoKTtcbiAgfVxuXG4gIC8vIFx1MjUwMFx1MjUwMCBSZW5kZXIgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5jb25maWcgfHwgIXRoaXMuaGFzcykgcmV0dXJuIGh0bWxgYDtcblxuICAgIGNvbnN0IGNsaW1TdGF0ZSAgICAgPSB0aGlzLl92YWwoRU5USVRJRVMuQ0xJTUFURSk7XG4gICAgY29uc3QgY2xpbU9uICAgICAgICA9IGNsaW1TdGF0ZSAhPSBudWxsICYmIGNsaW1TdGF0ZSAhPT0gJ29mZicgJiYgY2xpbVN0YXRlICE9PSAndW5hdmFpbGFibGUnO1xuICAgIGNvbnN0IHRndFRlbXBSYXcgICAgPSB0aGlzLl9hdHRyKEVOVElUSUVTLkNMSU1BVEUsICd0ZW1wZXJhdHVyZScpO1xuICAgIGNvbnN0IHRndFRlbXAgICAgICAgPSB0Z3RUZW1wUmF3ICE9IG51bGwgPyBOdW1iZXIodGd0VGVtcFJhdykgOiBudWxsO1xuICAgIGNvbnN0IGRpc3BUZW1wICAgICAgPSB0aGlzLl9wZW5kaW5nVGVtcCA/PyB0Z3RUZW1wO1xuICAgIGNvbnN0IHRlbXBVbml0ICAgICAgPSB0aGlzLl9hdHRyKEVOVElUSUVTLkNMSU1BVEUsICd0ZW1wZXJhdHVyZV91bml0JykgPz8gJ1x1MDBCMEMnO1xuICAgIGNvbnN0IHRlbXBTdHIgICAgICAgPSBkaXNwVGVtcCAhPSBudWxsID8gZGlzcFRlbXAudG9GaXhlZCgxKSA6ICdcdTIwMTQnO1xuXG4gICAgY29uc3QgaXNEZWZyb3N0ICAgICA9IHRoaXMuX3ZhbChFTlRJVElFUy5ERUZST1NUX1NXSVRDSCkgPT09ICdvbic7XG5cbiAgICBjb25zdCBsZWZ0U2VhdCAgICAgID0gdGhpcy5fdmFsKEVOVElUSUVTLkhFQVRFRF9TRUFUX0xFRlQpO1xuICAgIGNvbnN0IHJpZ2h0U2VhdCAgICAgPSB0aGlzLl92YWwoRU5USVRJRVMuSEVBVEVEX1NFQVRfUklHSFQpO1xuICAgIGNvbnN0IHJlYXJMZWZ0U2VhdCAgPSB0aGlzLl92YWwoRU5USVRJRVMuSEVBVEVEX1NFQVRfUkVBUl9MRUZUKTtcbiAgICBjb25zdCByZWFyQ3RyU2VhdCAgID0gdGhpcy5fdmFsKEVOVElUSUVTLkhFQVRFRF9TRUFUX1JFQVJfQ0VOVEVSKTtcbiAgICBjb25zdCByZWFyUmlnaHRTZWF0ID0gdGhpcy5fdmFsKEVOVElUSUVTLkhFQVRFRF9TRUFUX1JFQVJfUklHSFQpO1xuXG4gICAgY29uc3QgdGVtcEluUmF3ICA9IHRoaXMuX3ZhbChFTlRJVElFUy5URU1QRVJBVFVSRV9JTlNJREUpO1xuICAgIGNvbnN0IHRlbXBJblUgICAgPSB0aGlzLl9hdHRyKEVOVElUSUVTLlRFTVBFUkFUVVJFX0lOU0lERSwgJ3VuaXRfb2ZfbWVhc3VyZW1lbnQnKSA/PyAnXHUwMEIwQyc7XG4gICAgY29uc3QgdGVtcEluICAgICA9IHRlbXBJblJhdyAhPSBudWxsID8gYCR7TWF0aC5yb3VuZChOdW1iZXIodGVtcEluUmF3KSl9JHt0ZW1wSW5VfWAgOiBudWxsO1xuICAgIGNvbnN0IHRlbXBPdXRSYXcgPSB0aGlzLl92YWwoRU5USVRJRVMuVEVNUEVSQVRVUkVfT1VUU0lERSk7XG4gICAgY29uc3QgdGVtcE91dFUgICA9IHRoaXMuX2F0dHIoRU5USVRJRVMuVEVNUEVSQVRVUkVfT1VUU0lERSwgJ3VuaXRfb2ZfbWVhc3VyZW1lbnQnKSA/PyAnXHUwMEIwQyc7XG4gICAgY29uc3QgdGVtcE91dCAgICA9IHRlbXBPdXRSYXcgIT0gbnVsbCA/IGAke01hdGgucm91bmQoTnVtYmVyKHRlbXBPdXRSYXcpKX0ke3RlbXBPdXRVfWAgOiBudWxsO1xuXG4gICAgY29uc3Qgd2luZG93c09wZW4gICA9IHRoaXMuX3ZhbChFTlRJVElFUy5XSU5ET1dTX0NPVkVSKSA9PT0gJ29wZW4nO1xuICAgIGNvbnN0IGNhbXBNb2RlICAgICAgPSB0aGlzLl92YWwoRU5USVRJRVMuQ0FNUF9NT0RFKSAgPT09ICdvbic7XG4gICAgY29uc3QgZG9nTW9kZSAgICAgICA9IHRoaXMuX3ZhbChFTlRJVElFUy5ET0dfTU9ERSkgICA9PT0gJ29uJztcbiAgICBjb25zdCBjYWJpbk92ZXJoZWF0ID0gdGhpcy5fdmFsKEVOVElUSUVTLkNBQklOX09WRVJIRUFUKSA/PyAnT2ZmJztcbiAgICBjb25zdCBwbHVnZ2VkSW4gICAgID0gdGhpcy5fdmFsKEVOVElUSUVTLlBMVUdHRURfSU4pID09PSAnb24nO1xuICAgIGNvbnN0IGNsaW1CZ0ZpbGUgICAgPSBwbHVnZ2VkSW4gPyAnY2xpbWF0ZS1iZy1jaGFyZ2luZy5wbmcnIDogJ2NsaW1hdGUtYmcucG5nJztcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cImNsaW1hdGUtbWVudSR7dGhpcy5sYXlvdXQgPT09ICdsYW5kc2NhcGUnID8gJyBsYW5kc2NhcGUnIDogJyd9XCI+XG5cbiAgICAgICAgPCEtLSBDYXIgYXJlYTogb3V0ZXIgY2xpcHMsIGlubmVyIHNpemVzIHRvIGltYWdlLCBzZWF0cyBvdmVybGF5IGltYWdlIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2xpbS1jYXItYXJlYSR7dGhpcy5fY2xpbUV4cGFuZGVkID8gJyBjbGltLWNhci1jb2xsYXBzZWQnIDogJyd9XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNsaW0tY2FyLWlubmVyXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwiY2xpbS1jYXItYmdcIlxuICAgICAgICAgICAgICBzcmM9XCIke3RoaXMuX2ltZ1VybChjbGltQmdGaWxlKX1cIlxuICAgICAgICAgICAgICBhbHQ9XCJDYXIgaW50ZXJpb3Igdmlld1wiIC8+XG4gICAgICAgICAgICAke3RoaXMuX2hhc0N1c3RvbU92ZXJsYXkgPyBodG1sYFxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiJHt0aGlzLl9jdXN0b21PdmVybGF5U3R5bGVGb3IoY2xpbUJnRmlsZSl9XCI+PC9kaXY+YCA6ICcnfVxuXG4gICAgICAgICAgICA8IS0tIEZyb250IHNlYXRzIC0tPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNsaW0tc2VhdC16b25lIGNsaW0tc2VhdC1mbFwiXG4gICAgICAgICAgICAgIEBjbGljaz0keygpID0+IHRoaXMuX3N2Yygnc2VsZWN0JywgJ3NlbGVjdF9uZXh0JywgRU5USVRJRVMuSEVBVEVEX1NFQVRfTEVGVCwgeyBjeWNsZTogdHJ1ZSB9KX0+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJidG4taW1nXCIgc3JjPVwiJHt0aGlzLl9idG5VcmwodGhpcy5fc2VhdEhlYXRGaWxlKGxlZnRTZWF0ID8/ICdPZmYnKSl9XCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbGltLXNlYXQtbGFiZWxcIj4ke2xlZnRTZWF0ID8/ICdPZmYnfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNsaW0tc2VhdC16b25lIGNsaW0tc2VhdC1mclwiXG4gICAgICAgICAgICAgIEBjbGljaz0keygpID0+IHRoaXMuX3N2Yygnc2VsZWN0JywgJ3NlbGVjdF9uZXh0JywgRU5USVRJRVMuSEVBVEVEX1NFQVRfUklHSFQsIHsgY3ljbGU6IHRydWUgfSl9PlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiYnRuLWltZ1wiIHNyYz1cIiR7dGhpcy5fYnRuVXJsKHRoaXMuX3NlYXRIZWF0RmlsZShyaWdodFNlYXQgPz8gJ09mZicpKX1cIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsaW0tc2VhdC1sYWJlbFwiPiR7cmlnaHRTZWF0ID8/ICdPZmYnfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPCEtLSBSZWFyIHNlYXRzIC0tPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNsaW0tc2VhdC16b25lIGNsaW0tc2VhdC1ybFwiXG4gICAgICAgICAgICAgIEBjbGljaz0keygpID0+IHRoaXMuX3N2Yygnc2VsZWN0JywgJ3NlbGVjdF9uZXh0JywgRU5USVRJRVMuSEVBVEVEX1NFQVRfUkVBUl9MRUZULCB7IGN5Y2xlOiB0cnVlIH0pfT5cbiAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImJ0bi1pbWdcIiBzcmM9XCIke3RoaXMuX2J0blVybCh0aGlzLl9zZWF0SGVhdEZpbGUocmVhckxlZnRTZWF0ID8/ICdPZmYnKSl9XCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbGltLXNlYXQtbGFiZWxcIj4ke3JlYXJMZWZ0U2VhdCA/PyAnT2ZmJ308L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjbGltLXNlYXQtem9uZSBjbGltLXNlYXQtcmNcIlxuICAgICAgICAgICAgICBAY2xpY2s9JHsoKSA9PiB0aGlzLl9zdmMoJ3NlbGVjdCcsICdzZWxlY3RfbmV4dCcsIEVOVElUSUVTLkhFQVRFRF9TRUFUX1JFQVJfQ0VOVEVSLCB7IGN5Y2xlOiB0cnVlIH0pfT5cbiAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImJ0bi1pbWdcIiBzcmM9XCIke3RoaXMuX2J0blVybCh0aGlzLl9zZWF0SGVhdEZpbGUocmVhckN0clNlYXQgPz8gJ09mZicpKX1cIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsaW0tc2VhdC1sYWJlbFwiPiR7cmVhckN0clNlYXQgPz8gJ09mZid9PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2xpbS1zZWF0LXpvbmUgY2xpbS1zZWF0LXJyXCJcbiAgICAgICAgICAgICAgQGNsaWNrPSR7KCkgPT4gdGhpcy5fc3ZjKCdzZWxlY3QnLCAnc2VsZWN0X25leHQnLCBFTlRJVElFUy5IRUFURURfU0VBVF9SRUFSX1JJR0hULCB7IGN5Y2xlOiB0cnVlIH0pfT5cbiAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImJ0bi1pbWdcIiBzcmM9XCIke3RoaXMuX2J0blVybCh0aGlzLl9zZWF0SGVhdEZpbGUocmVhclJpZ2h0U2VhdCA/PyAnT2ZmJykpfVwiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2xpbS1zZWF0LWxhYmVsXCI+JHtyZWFyUmlnaHRTZWF0ID8/ICdPZmYnfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPCEtLSBGbG9hdGluZyBiYWNrIGJ1dHRvbiAocG9zaXRpb25lZCBpbiBvdXRlciBjb250YWluZXIpIC0tPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjbGltLWJhY2stYnRuXCIgQGNsaWNrPSR7dGhpcy5fY2xvc2V9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+JHt1bnNhZmVIVE1MKElDT05TWydjaGV2cm9uLWxlZnQnXSl9PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tIEJvdHRvbSBzaGVldCBcdTIwMTQgZHJhZy1oYW5kbGUgcmV2ZWFscyBleHRyYSBjb250cm9scyAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNsaW0tc2hlZXQke3RoaXMuX2NsaW1FeHBhbmRlZCA/ICcgZXhwYW5kZWQnIDogJyd9XCI+XG5cbiAgICAgICAgICA8IS0tIERyYWcgaGFuZGxlIHBpbGwgXHUyMDE0IHRhcCB0byBleHBhbmQvY29sbGFwc2UgLS0+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNsaW0taGFuZGxlXCJcbiAgICAgICAgICAgIEBjbGljaz0keygpID0+IHsgdGhpcy5fY2xpbUV4cGFuZGVkID0gIXRoaXMuX2NsaW1FeHBhbmRlZDsgfX0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsaW0taGFuZGxlLXBpbGxcIj48L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICA8IS0tIEludGVyaW9yIFx1MDBCNyBFeHRlcmlvciB0ZW1wcyAtLT5cbiAgICAgICAgICAkeyh0ZW1wSW4gfHwgdGVtcE91dCkgPyBodG1sYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsaW0tdGVtcC1pbmZvXCI+XG4gICAgICAgICAgICAgICR7dGVtcEluICA/IGh0bWxgSW50ZXJpb3IgJHt0ZW1wSW59YCAgOiAnJ31cbiAgICAgICAgICAgICAgJHt0ZW1wSW4gJiYgdGVtcE91dCA/ICcgXHUwMEI3ICcgOiAnJ31cbiAgICAgICAgICAgICAgJHt0ZW1wT3V0ID8gaHRtbGBFeHRlcmlvciAke3RlbXBPdXR9YCA6ICcnfVxuICAgICAgICAgICAgPC9kaXY+YCA6ICcnfVxuXG4gICAgICAgICAgPCEtLSBNYWluIGNvbnRyb2wgcm93OiBbUG93ZXIvT2ZmXSBbXHUyMTkwIDIwLjBcdTAwQjAgXHUyMTkyXSBbVmVudF0gLS0+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNsaW0tbWFpbi1yb3dcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjbGltLWljb24tYnRuJHtjbGltT24gPyAnIGNsaW0tYWN0aXZlJyA6ICcnfVwiXG4gICAgICAgICAgICAgIEBjbGljaz0keygpID0+IHRoaXMuX3N2YygnY2xpbWF0ZScsIGNsaW1PbiA/ICd0dXJuX29mZicgOiAndHVybl9vbicsIEVOVElUSUVTLkNMSU1BVEUpfT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+JHt1bnNhZmVIVE1MKElDT05TLnBvd2VyKX08L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuPiR7Y2xpbU9uID8gJ09uJyA6ICdPZmYnfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xpbS10ZW1wLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNsaW0tYXJyb3ctYnRuXCIgQGNsaWNrPSR7KCkgPT4gdGhpcy5fYWRqdXN0VGVtcCgtMSl9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiPiR7dW5zYWZlSFRNTChJQ09OU1snY2hldnJvbi1sZWZ0J10pfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2xpbS10ZW1wLXZhbHVlXCI+JHt0ZW1wU3RyfVx1MDBCMDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNsaW0tYXJyb3ctYnRuXCIgQGNsaWNrPSR7KCkgPT4gdGhpcy5fYWRqdXN0VGVtcCgrMSl9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiPiR7dW5zYWZlSFRNTChJQ09OU1snY2hldnJvbi1yaWdodCddKX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjbGltLWljb24tYnRuJHt3aW5kb3dzT3BlbiA/ICcgY2xpbS1hY3RpdmUnIDogJyd9XCJcbiAgICAgICAgICAgICAgQGNsaWNrPSR7KCkgPT4gdGhpcy5fc3ZjKCdjb3ZlcicsIHdpbmRvd3NPcGVuID8gJ2Nsb3NlX2NvdmVyJyA6ICdvcGVuX2NvdmVyJywgRU5USVRJRVMuV0lORE9XU19DT1ZFUil9PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj4ke3Vuc2FmZUhUTUwod2luZG93c09wZW4gPyBJQ09OU1sndmVudC1jbG9zZSddIDogSUNPTlNbJ3ZlbnQtb3BlbiddKX08L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuPiR7d2luZG93c09wZW4gPyAnQ2xvc2UnIDogJ1ZlbnQnfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPCEtLSBBbHdheXMtdmlzaWJsZTogRGVmcm9zdCBDYXIgLS0+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNsaW0tZnVsbC1idG4ke2lzRGVmcm9zdCA/ICcgYWN0aXZlJyA6ICcnfVwiXG4gICAgICAgICAgICBAY2xpY2s9JHsoKSA9PiB0aGlzLl9zdmMoJ3N3aXRjaCcsIGlzRGVmcm9zdCA/ICd0dXJuX29mZicgOiAndHVybl9vbicsIEVOVElUSUVTLkRFRlJPU1RfU1dJVENIKX0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj4ke3Vuc2FmZUhUTUwoSUNPTlMuZGVmcm9zdCl9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+RGVmcm9zdCBDYXI8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICA8IS0tIEV4cGFuZGVkIHNlY3Rpb24gXHUyMDE0IENhbXAgTW9kZSAvIERvZyBNb2RlICsgQ2FiaW4gT3ZlcmhlYXQgUHJvdGVjdGlvbiAtLT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xpbS1leHBhbmRlZC1jb250ZW50XCI+XG5cbiAgICAgICAgICAgIDwhLS0gQ2FtcCBNb2RlICsgRG9nIE1vZGUgaW4gb25lIGdyb3VwZWQgY29udGFpbmVyIC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsaW0tbGlzdC1ncm91cFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2xpbS1saXN0LWl0ZW0ke2NhbXBNb2RlID8gJyBob3QnIDogJyd9XCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9JHsoKSA9PiB0aGlzLl9zdmMoJ3N3aXRjaCcsIGNhbXBNb2RlID8gJ3R1cm5fb2ZmJyA6ICd0dXJuX29uJywgRU5USVRJRVMuQ0FNUF9NT0RFKX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGNsaW0tbGlzdC1pY29uXCI+JHt1bnNhZmVIVE1MKElDT05TLnRlbnQpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsaW0tbGlzdC1sYWJlbFwiPkNhbXAgTW9kZTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjbGltLWxpc3QtaXRlbSR7ZG9nTW9kZSA/ICcgaG90JyA6ICcnfVwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPSR7KCkgPT4gdGhpcy5fc3ZjKCdzd2l0Y2gnLCBkb2dNb2RlID8gJ3R1cm5fb2ZmJyA6ICd0dXJuX29uJywgRU5USVRJRVMuRE9HX01PREUpfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gY2xpbS1saXN0LWljb25cIj4ke3Vuc2FmZUhUTUwoSUNPTlMuZG9nKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbGltLWxpc3QtbGFiZWxcIj5Eb2cgTW9kZTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPCEtLSBTZXBhcmF0b3IgbGluZSAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbGltLXNlcGFyYXRvclwiPjwvZGl2PlxuXG4gICAgICAgICAgICA8IS0tIENhYmluIE92ZXJoZWF0IFByb3RlY3Rpb24gLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xpbS1zZWN0aW9uLXRpdGxlXCI+Q2FiaW4gT3ZlcmhlYXQgUHJvdGVjdGlvbjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsaW0tbGlzdC1ncm91cCBjbGltLXNlZ21lbnQtZ3JvdXAgY2xpbS1saXN0LWdyb3VwLS1sYXN0XCI+XG4gICAgICAgICAgICAgICR7KFsnT2ZmJywgJ05vIEEvQycsICdPbiddKS5tYXAob3B0ID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNsaW0tc2VnbWVudC1idG4ke2NhYmluT3ZlcmhlYXQgPT09IG9wdCA/ICcgc2VsZWN0ZWQnIDogJyd9XCJcbiAgICAgICAgICAgICAgICAgIEBjbGljaz0keygpID0+IHRoaXMuX3N2Yygnc2VsZWN0JywgJ3NlbGVjdF9vcHRpb24nLCBFTlRJVElFUy5DQUJJTl9PVkVSSEVBVCwgeyBvcHRpb246IG9wdCB9KX0+XG4gICAgICAgICAgICAgICAgICAke29wdH1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5gKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPC9kaXY+PCEtLSAvY2xpbS1leHBhbmRlZC1jb250ZW50IC0tPlxuXG4gICAgICAgIDwvZGl2PjwhLS0gL2NsaW0tc2hlZXQgLS0+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndGVzbGEtbWVudS1jbGltYXRlJywgVGVzbGFNZW51Q2xpbWF0ZSk7XG4iLCAiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyB1bnNhZmVIVE1MIH0gZnJvbSAnbGl0L2RpcmVjdGl2ZXMvdW5zYWZlLWh0bWwuanMnO1xuaW1wb3J0IHsgVGVzbGFCYXNlIH0gZnJvbSAnLi90ZXNsYS1iYXNlLmpzJztcbmltcG9ydCB7IEVOVElUSUVTIH0gZnJvbSAnLi9lbnRpdHktY29uZmlnLmpzJztcbmltcG9ydCB7IHNoYXJlZFN0eWxlcywgY29udHJvbHNTdHlsZXMgfSBmcm9tICcuL3N0eWxlcy5qcyc7XG5pbXBvcnQgeyBJQ09OUyB9IGZyb20gJy4vaWNvbnMuanMnO1xuXG5jbGFzcyBUZXNsYU1lbnVDb250cm9scyBleHRlbmRzIFRlc2xhQmFzZSB7XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKSB7IHJldHVybiBbc2hhcmVkU3R5bGVzLCBjb250cm9sc1N0eWxlc107IH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZyB8fCAhdGhpcy5oYXNzKSByZXR1cm4gaHRtbGBgO1xuXG4gICAgY29uc3QgbG9ja1N0YXRlICAgICA9IHRoaXMuX3ZhbChFTlRJVElFUy5ET09SX0xPQ0spO1xuICAgIGNvbnN0IGlzTG9ja2VkICAgICAgPSBsb2NrU3RhdGUgPT09ICdsb2NrZWQnO1xuXG4gICAgY29uc3QgZnJ1bmtPcGVuICAgICA9IHRoaXMuX3ZhbChFTlRJVElFUy5GUlVOS19DT1ZFUikgPT09ICdvcGVuJ1xuICAgICAgICAgICAgICAgICAgICAgICB8fCB0aGlzLl92YWwoRU5USVRJRVMuRlJVTkspICAgICAgICA9PT0gJ29uJztcbiAgICBjb25zdCB0cnVua09wZW4gICAgID0gdGhpcy5fdmFsKEVOVElUSUVTLlRSVU5LKSA9PT0gJ29uJztcblxuICAgIGNvbnN0IHBsdWdnZWRJbiAgICAgPSB0aGlzLl92YWwoRU5USVRJRVMuUExVR0dFRF9JTikgPT09ICdvbic7XG4gICAgY29uc3QgY2hhcmdlckRvb3JPcGVuID0gdGhpcy5fdmFsKEVOVElUSUVTLkNIQVJHRVJfRE9PUikgPT09ICdvcGVuJyB8fCBwbHVnZ2VkSW47XG5cbiAgICBjb25zdCB3aW5kb3dzT3BlbiAgID0gdGhpcy5fdmFsKEVOVElUSUVTLldJTkRPV1NfQ09WRVIpID09PSAnb3Blbic7XG4gICAgY29uc3QgYmdGaWxlID0gcGx1Z2dlZEluID8gJ2NvbnRyb2xzLWJnLWNoYXJnaW5nLnBuZycgOiAnY29udHJvbHMtYmcucG5nJztcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xzLW1lbnUke3RoaXMubGF5b3V0ID09PSAnbGFuZHNjYXBlJyA/ICcgbGFuZHNjYXBlJyA6ICcnfVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGVyXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBhbmVsLWJhY2tcIiBAY2xpY2s9JHt0aGlzLl9jbG9zZX0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj4ke3Vuc2FmZUhUTUwoSUNPTlNbJ2NoZXZyb24tbGVmdCddKX08L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJwYW5lbC10aXRsZVwiPkNvbnRyb2xzPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImN0cmwtY2FyLWFyZWFcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzPVwiY3RybC1jYXItYmdcIlxuICAgICAgICAgICAgc3JjPVwiJHt0aGlzLl9pbWdVcmwoYmdGaWxlKX1cIlxuICAgICAgICAgICAgYWx0PVwiQ2FyIHRvcCB2aWV3XCIgLz5cbiAgICAgICAgICAke3RoaXMuX2hhc0N1c3RvbU92ZXJsYXkgPyBodG1sYFxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cIiR7dGhpcy5fY3VzdG9tT3ZlcmxheVN0eWxlRm9yKGJnRmlsZSl9XCI+PC9kaXY+YCA6ICcnfVxuICAgICAgICAgIDwhLS0gRnJ1bmsgXHUyMDE0IHRleHQgb25seSwgdG9wIGNlbnRyZSAtLT5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY3RybC16b25lIGN0cmwtZnJ1bmtcIlxuICAgICAgICAgICAgQGNsaWNrPSR7KCkgPT4gdGhpcy5fc3ZjKCdjb3ZlcicsICd0b2dnbGVfY292ZXInLCBFTlRJVElFUy5GUlVOS19DT1ZFUil9PlxuICAgICAgICAgICAgJHtmcnVua09wZW4gPyAnQ2xvc2UnIDogJ09wZW4nfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwhLS0gTG9jayBcdTIwMTQgaWNvbiBvbmx5LCBjYXIgY2VudHJlIC0tPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjdHJsLXpvbmUgY3RybC1sb2NrXCJcbiAgICAgICAgICAgIEBjbGljaz0keygpID0+IHRoaXMuX3N2YygnbG9jaycsIGlzTG9ja2VkID8gJ3VubG9jaycgOiAnbG9jaycsIEVOVElUSUVTLkRPT1JfTE9DSyl9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+JHt1bnNhZmVIVE1MKGlzTG9ja2VkID8gSUNPTlMubG9jayA6IElDT05TLnVubG9jayl9PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwhLS0gVHJ1bmsgXHUyMDE0IHRleHQgb25seSwgYm90dG9tIGNlbnRyZSAtLT5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY3RybC16b25lIGN0cmwtdHJ1bmtcIlxuICAgICAgICAgICAgQGNsaWNrPSR7KCkgPT4gdGhpcy5fc3ZjKCdidXR0b24nLCAncHJlc3MnLCBFTlRJVElFUy5PUEVOX1RSVU5LKX0+XG4gICAgICAgICAgICAke3RydW5rT3BlbiA/ICdDbG9zZScgOiAnT3Blbid9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPCEtLSBDaGFyZ2UgcG9ydCBcdTIwMTQgaWNvbiBvbmx5LCBib3R0b20gbGVmdCAtLT5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY3RybC16b25lIGN0cmwtcG9ydCAke2NoYXJnZXJEb29yT3BlbiA/ICdwb3J0LW9wZW4nIDogJyd9XCJcbiAgICAgICAgICAgIEBjbGljaz0keygpID0+IHRoaXMuX3N2YygnYnV0dG9uJywgJ3ByZXNzJywgY2hhcmdlckRvb3JPcGVuID8gRU5USVRJRVMuQ0hBUkdFX1BPUlRfQ0xPU0UgOiBFTlRJVElFUy5DSEFSR0VfUE9SVF9PUEVOKX0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj4ke3Vuc2FmZUhUTUwoSUNPTlNbJ2NoYXJnZS1ib2x0J10pfTwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjdHJsLWFjdGlvbnNcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY3RybC1hY3Rpb24tYnRuXCJcbiAgICAgICAgICAgIEBjbGljaz0keygpID0+IHRoaXMuX3N2YygnYnV0dG9uJywgJ3ByZXNzJywgRU5USVRJRVMuRkxBU0hfTElHSFRTKX0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj4ke3Vuc2FmZUhUTUwoSUNPTlNbJ2ZsYXNoLWxpZ2h0cyddKX08L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj5GbGFzaDwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY3RybC1hY3Rpb24tYnRuXCJcbiAgICAgICAgICAgIEBjbGljaz0keygpID0+IHRoaXMuX3N2YygnYnV0dG9uJywgJ3ByZXNzJywgRU5USVRJRVMuSE9STil9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+JHt1bnNhZmVIVE1MKElDT05TLmhvcm4pfTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuPkhvcm48L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImN0cmwtYWN0aW9uLWJ0blwiXG4gICAgICAgICAgICBAY2xpY2s9JHsoKSA9PiB0aGlzLl9zdmMoJ2J1dHRvbicsICdwcmVzcycsIEVOVElUSUVTLlJFTU9URV9TVEFSVCl9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+JHt1bnNhZmVIVE1MKElDT05TWydyZW1vdGUtc3RhcnQnXSl9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+U3RhcnQ8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImN0cmwtYWN0aW9uLWJ0blwiXG4gICAgICAgICAgICBAY2xpY2s9JHsoKSA9PiB0aGlzLl9zdmMoJ2NvdmVyJywgd2luZG93c09wZW4gPyAnY2xvc2VfY292ZXInIDogJ29wZW5fY292ZXInLCBFTlRJVElFUy5XSU5ET1dTX0NPVkVSKX0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj4ke3Vuc2FmZUhUTUwod2luZG93c09wZW4gPyBJQ09OU1sndmVudC1jbG9zZSddIDogSUNPTlNbJ3ZlbnQtb3BlbiddKX08L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj4ke3dpbmRvd3NPcGVuID8gJ0Nsb3NlJyA6ICdWZW50J308L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3Rlc2xhLW1lbnUtY29udHJvbHMnLCBUZXNsYU1lbnVDb250cm9scyk7XG4iLCAiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCwgY3NzIH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IHVuc2FmZUhUTUwgfSBmcm9tICdsaXQvZGlyZWN0aXZlcy91bnNhZmUtaHRtbC5qcyc7XG5pbXBvcnQgeyBGQUNUT1JZX0NPTE9VUlMgfSBmcm9tICcuL3JlY29sb3VyLmpzJztcbmltcG9ydCB7IElDT05TIH0gZnJvbSAnLi9pY29ucy5qcyc7XG5cbmNsYXNzIFRlc2xhQ29sb3VyUGlja2VyIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzZWxlY3RlZDogICAgeyB0eXBlOiBTdHJpbmcgfSwgICAgIC8vIGN1cnJlbnQgY29sb3VyIGRpciBuYW1lIGUuZy4gJ3JlZF9tdWx0aV9jb2F0JyBvciAnY3VzdG9tJ1xuICAgICAgYXZhaWxhYmxlOiAgIHsgdHlwZTogQXJyYXkgfSwgICAgICAvLyBkaXJzIHRoYXQgaGF2ZSBpbWFnZXMgZS5nLiBbJ25ldXRyYWwnLCdyZWRfbXVsdGlfY29hdCddXG4gICAgICBzaG93QmFjazogICAgeyB0eXBlOiBCb29sZWFuIH0sXG4gICAgICBjdXN0b21IOiAgICAgeyB0eXBlOiBOdW1iZXIgfSwgICAgIC8vIGN1cnJlbnQgY3VzdG9tIGh1ZSAoMC0zNjApXG4gICAgICBjdXN0b21TOiAgICAgeyB0eXBlOiBOdW1iZXIgfSwgICAgIC8vIGN1cnJlbnQgY3VzdG9tIHNhdHVyYXRpb24gKDAtMTAwKVxuICAgICAgc2xpZGVGcm9tOiAgIHsgdHlwZTogU3RyaW5nLCByZWZsZWN0OiB0cnVlLCBhdHRyaWJ1dGU6ICdzbGlkZS1mcm9tJyB9LFxuICAgICAgX3Nob3dDdXN0b206IHsgc3RhdGU6IHRydWUgfSxcbiAgICAgIF9odWU6ICAgICAgICB7IHN0YXRlOiB0cnVlIH0sXG4gICAgICBfc2F0OiAgICAgICAgeyBzdGF0ZTogdHJ1ZSB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgc2Fucy1zZXJpZjtcbiAgICAgIH1cblxuICAgICAgLnBpY2tlci1vdmVybGF5IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBpbnNldDogMDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjY1KTtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5waWNrZXItcGFuZWwge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogIzFjMWMxZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweCAxNnB4IDAgMDtcbiAgICAgICAgcGFkZGluZzogMCAwIDIwcHg7XG4gICAgICAgIGFuaW1hdGlvbjogc2xpZGVVcCAwLjI1cyBlYXNlLW91dDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIHNsaWRlVXAge1xuICAgICAgICBmcm9tIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpOyBvcGFjaXR5OiAwOyB9XG4gICAgICAgIHRvICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IG9wYWNpdHk6IDE7IH1cbiAgICAgIH1cblxuICAgICAgQGtleWZyYW1lcyBzbGlkZUZyb21SaWdodCB7XG4gICAgICAgIGZyb20geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzAlKTsgb3BhY2l0eTogMDsgfVxuICAgICAgICB0byAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyBvcGFjaXR5OiAxOyB9XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgc2xpZGVGcm9tTGVmdCB7XG4gICAgICAgIGZyb20geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwJSk7IG9wYWNpdHk6IDA7IH1cbiAgICAgICAgdG8gICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgb3BhY2l0eTogMTsgfVxuICAgICAgfVxuXG4gICAgICA6aG9zdChbc2xpZGUtZnJvbT1cInJpZ2h0XCJdKSAucGlja2VyLXBhbmVsIHtcbiAgICAgICAgYW5pbWF0aW9uOiBzbGlkZUZyb21SaWdodCAwLjI1cyBlYXNlLW91dDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3NsaWRlLWZyb209XCJsZWZ0XCJdKSAucGlja2VyLXBhbmVsIHtcbiAgICAgICAgYW5pbWF0aW9uOiBzbGlkZUZyb21MZWZ0IDAuMjVzIGVhc2Utb3V0O1xuICAgICAgfVxuXG4gICAgICAucGlja2VyLWhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggMjBweCAxMnB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA3KTtcbiAgICAgIH1cblxuICAgICAgLnBpY2tlci10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45NWVtO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIH1cblxuICAgICAgLnBpY2tlci1iYWNrIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAxMnB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlO1xuICAgICAgfVxuXG4gICAgICAucGlja2VyLWJhY2s6aG92ZXIgeyBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjkpOyB9XG5cbiAgICAgIC5waWNrZXItYmFjayAuaWNvbiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDIycHg7XG4gICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgIH1cblxuICAgICAgLnBpY2tlci1iYWNrIC5pY29uIHN2ZyB7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IH1cblxuICAgICAgLnBpY2tlci1jbG9zZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDEycHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDgpO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcbiAgICAgICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzIGVhc2U7XG4gICAgICB9XG5cbiAgICAgIC5waWNrZXItY2xvc2U6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMTUpOyB9XG5cbiAgICAgIC8qIFx1MjUwMFx1MjUwMCBTd2F0Y2hlcyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgKi9cblxuICAgICAgLnBpY2tlci1zd2F0Y2hlcyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBnYXA6IDEycHg7XG4gICAgICAgIHBhZGRpbmc6IDI0cHggMTZweCAxNnB4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICB9XG5cbiAgICAgIC5zd2F0Y2gtYnRuIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA2cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuXG4gICAgICAuc3dhdGNoLWNpcmNsZSB7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UsIHRyYW5zZm9ybSAwLjE1cyBlYXNlO1xuICAgICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLDAsMCwwLjQpO1xuICAgICAgfVxuXG4gICAgICAuc3dhdGNoLWJ0bjpob3ZlciAuc3dhdGNoLWNpcmNsZSB7IHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgfVxuICAgICAgLnN3YXRjaC1jaXJjbGUuc2VsZWN0ZWQgeyBib3JkZXItY29sb3I6ICNmZmZmZmY7IH1cblxuICAgICAgLnN3YXRjaC1uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjYyZW07XG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNDUpO1xuICAgICAgICBtYXgtd2lkdGg6IDU0cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICB9XG5cbiAgICAgIC8qIFx1MjUwMFx1MjUwMCBSYWluYm93IGdyYWRpZW50IGZvciBjdXN0b20gc3dhdGNoIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMCAqL1xuXG4gICAgICAuc3dhdGNoLXJhaW5ib3cge1xuICAgICAgICBiYWNrZ3JvdW5kOiBjb25pYy1ncmFkaWVudChcbiAgICAgICAgICBoc2woMCw4NSUsNTUlKSwgaHNsKDYwLDg1JSw1NSUpLCBoc2woMTIwLDg1JSw1NSUpLFxuICAgICAgICAgIGhzbCgxODAsODUlLDU1JSksIGhzbCgyNDAsODUlLDU1JSksIGhzbCgzMDAsODUlLDU1JSksIGhzbCgzNjAsODUlLDU1JSlcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLyogXHUyNTAwXHUyNTAwIFVuYXZhaWxhYmxlIHN0YXRlIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMCAqL1xuXG4gICAgICAuc3dhdGNoLWJ0bi51bmF2YWlsYWJsZSB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICB9XG5cbiAgICAgIC5zd2F0Y2gtYnRuLnVuYXZhaWxhYmxlIC5zd2F0Y2gtY2lyY2xlIHtcbiAgICAgICAgb3BhY2l0eTogMC4yNTtcbiAgICAgIH1cblxuICAgICAgLnN3YXRjaC1idG4udW5hdmFpbGFibGUgLnN3YXRjaC1jaXJjbGU6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IC0zcHg7XG4gICAgICAgIHJpZ2h0OiAtM3B4O1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxcHg7XG4gICAgICB9XG5cbiAgICAgIC5zd2F0Y2gtYnRuLnVuYXZhaWxhYmxlIC5zd2F0Y2gtbmFtZSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICBvcGFjaXR5OiAwLjI1O1xuICAgICAgfVxuXG4gICAgICAvKiBcdTI1MDBcdTI1MDAgQ3VzdG9tIHNsaWRlcnMgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwICovXG5cbiAgICAgIC5waWNrZXItY3VzdG9tIHtcbiAgICAgICAgcGFkZGluZzogMTZweCAyNHB4IDA7XG4gICAgICB9XG5cbiAgICAgIC5zbGlkZXItbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAwLjc1ZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNCk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgICAgIH1cblxuICAgICAgLnNsaWRlci1yb3cge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICAuaHVlLXNsaWRlcixcbiAgICAgIC5zYXQtc2xpZGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgLmh1ZS1zbGlkZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsXG4gICAgICAgICAgaHNsKDAsMTAwJSw1MCUpLCBoc2woMzAsMTAwJSw1MCUpLCBoc2woNjAsMTAwJSw1MCUpLFxuICAgICAgICAgIGhzbCg5MCwxMDAlLDUwJSksIGhzbCgxMjAsMTAwJSw1MCUpLCBoc2woMTUwLDEwMCUsNTAlKSxcbiAgICAgICAgICBoc2woMTgwLDEwMCUsNTAlKSwgaHNsKDIxMCwxMDAlLDUwJSksIGhzbCgyNDAsMTAwJSw1MCUpLFxuICAgICAgICAgIGhzbCgyNzAsMTAwJSw1MCUpLCBoc2woMzAwLDEwMCUsNTAlKSwgaHNsKDMzMCwxMDAlLDUwJSksXG4gICAgICAgICAgaHNsKDM2MCwxMDAlLDUwJSlcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLnNhdC1zbGlkZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsXG4gICAgICAgICAgaHNsKHZhcigtLXBpY2tlci1odWUsIDApLCAwJSwgNTAlKSxcbiAgICAgICAgICBoc2wodmFyKC0tcGlja2VyLWh1ZSwgMCksIDEwMCUsIDUwJSlcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLmh1ZS1zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iLFxuICAgICAgLnNhdC1zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwwLDAsMC41KTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjkpO1xuICAgICAgfVxuXG4gICAgICAuaHVlLXNsaWRlcjo6LW1vei1yYW5nZS10aHVtYixcbiAgICAgIC5zYXQtc2xpZGVyOjotbW96LXJhbmdlLXRodW1iIHtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC45KTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwwLDAsMC41KTtcbiAgICAgIH1cblxuICAgICAgLyogXHUyNTAwXHUyNTAwIFJlc2V0IGxpbmsgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwICovXG5cbiAgICAgIC5waWNrZXItcmVzZXQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDE0cHggMCAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjM1KTtcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44MmVtO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZTtcbiAgICAgIH1cblxuICAgICAgLnBpY2tlci1yZXNldDpob3ZlciB7IGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNyk7IH1cbiAgICBgO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnNlbGVjdGVkID0gJ25ldXRyYWwnO1xuICAgIHRoaXMuYXZhaWxhYmxlID0gWyduZXV0cmFsJ107XG4gICAgdGhpcy5zaG93QmFjayA9IGZhbHNlO1xuICAgIHRoaXMuY3VzdG9tSCA9IDA7XG4gICAgdGhpcy5jdXN0b21TID0gODA7XG4gICAgdGhpcy5fc2hvd0N1c3RvbSA9IGZhbHNlO1xuICAgIHRoaXMuX2h1ZSA9IDA7XG4gICAgdGhpcy5fc2F0ID0gODA7XG4gIH1cblxuICB3aWxsVXBkYXRlKGNoYW5nZWQpIHtcbiAgICBpZiAoY2hhbmdlZC5oYXMoJ3NlbGVjdGVkJykgfHwgY2hhbmdlZC5oYXMoJ2N1c3RvbUgnKSB8fCBjaGFuZ2VkLmhhcygnY3VzdG9tUycpKSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZCA9PT0gJ2N1c3RvbScpIHtcbiAgICAgICAgdGhpcy5fc2hvd0N1c3RvbSA9IHRydWU7XG4gICAgICAgIHRoaXMuX2h1ZSA9IHRoaXMuY3VzdG9tSCA/PyAwO1xuICAgICAgICB0aGlzLl9zYXQgPSB0aGlzLmN1c3RvbVMgPz8gODA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX3NlbGVjdENvbG91cihmYykge1xuICAgIHRoaXMuX3Nob3dDdXN0b20gPSBmYWxzZTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjb2xvdXItY2hhbmdlZCcsIHtcbiAgICAgIGRldGFpbDogeyBkaXI6IGZjLmRpciwgbmFtZTogZmMubmFtZSB9LFxuICAgICAgYnViYmxlczogdHJ1ZSwgY29tcG9zZWQ6IHRydWUsXG4gICAgfSkpO1xuICAgIHRoaXMuX2Nsb3NlKCk7XG4gIH1cblxuICBfb3BlbkN1c3RvbSgpIHtcbiAgICB0aGlzLl9zaG93Q3VzdG9tID0gdHJ1ZTtcbiAgfVxuXG4gIF9vbkh1ZUlucHV0KGUpIHtcbiAgICB0aGlzLl9odWUgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpO1xuICAgIHRoaXMuX2ZpcmVDdXN0b21DaGFuZ2UoKTtcbiAgfVxuXG4gIF9vblNhdElucHV0KGUpIHtcbiAgICB0aGlzLl9zYXQgPSBOdW1iZXIoZS50YXJnZXQudmFsdWUpO1xuICAgIHRoaXMuX2ZpcmVDdXN0b21DaGFuZ2UoKTtcbiAgfVxuXG4gIF9maXJlQ3VzdG9tQ2hhbmdlKCkge1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NvbG91ci1jaGFuZ2VkJywge1xuICAgICAgZGV0YWlsOiB7IGRpcjogJ2N1c3RvbScsIG5hbWU6ICdDdXN0b20nLCBoOiB0aGlzLl9odWUsIHM6IHRoaXMuX3NhdCB9LFxuICAgICAgYnViYmxlczogdHJ1ZSwgY29tcG9zZWQ6IHRydWUsXG4gICAgfSkpO1xuICB9XG5cbiAgX3Jlc2V0KCkge1xuICAgIHRoaXMuX3Nob3dDdXN0b20gPSBmYWxzZTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjb2xvdXItY2hhbmdlZCcsIHtcbiAgICAgIGRldGFpbDogbnVsbCxcbiAgICAgIGJ1YmJsZXM6IHRydWUsIGNvbXBvc2VkOiB0cnVlLFxuICAgIH0pKTtcbiAgICB0aGlzLl9jbG9zZSgpO1xuICB9XG5cbiAgX2JhY2soKSB7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgncGlja2VyLWJhY2snLCB7XG4gICAgICBidWJibGVzOiB0cnVlLCBjb21wb3NlZDogdHJ1ZSxcbiAgICB9KSk7XG4gIH1cblxuICBfY2xvc2UoKSB7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgncGlja2VyLWNsb3NlJywge1xuICAgICAgYnViYmxlczogdHJ1ZSwgY29tcG9zZWQ6IHRydWUsXG4gICAgfSkpO1xuICB9XG5cbiAgX29uT3ZlcmxheUNsaWNrKGUpIHtcbiAgICBpZiAoZS50YXJnZXQgPT09IGUuY3VycmVudFRhcmdldCkgdGhpcy5fY2xvc2UoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBhdmFpbCA9IHRoaXMuYXZhaWxhYmxlID8/IFsnbmV1dHJhbCddO1xuICAgIGNvbnN0IGlzQ3VzdG9tID0gdGhpcy5zZWxlY3RlZCA9PT0gJ2N1c3RvbSc7XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJwaWNrZXItb3ZlcmxheVwiIEBjbGljaz0ke3RoaXMuX29uT3ZlcmxheUNsaWNrfT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBpY2tlci1wYW5lbFwiPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBpY2tlci1oZWFkZXJcIj5cbiAgICAgICAgICAgICR7dGhpcy5zaG93QmFjayA/IGh0bWxgXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwaWNrZXItYmFja1wiIEBjbGljaz0ke3RoaXMuX2JhY2t9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiPiR7dW5zYWZlSFRNTChJQ09OU1snY2hldnJvbi1sZWZ0J10pfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+YCA6ICcnfVxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwaWNrZXItdGl0bGVcIj5Db2xvdXI8L3NwYW4+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicGlja2VyLWNsb3NlXCIgQGNsaWNrPSR7dGhpcy5fY2xvc2V9PiZ0aW1lczs8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaWNrZXItc3dhdGNoZXNcIj5cbiAgICAgICAgICAgICR7RkFDVE9SWV9DT0xPVVJTLm1hcChmYyA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGlzQXZhaWwgPSBhdmFpbC5pbmNsdWRlcyhmYy5kaXIpO1xuICAgICAgICAgICAgICBjb25zdCBpc1NlbCA9IHRoaXMuc2VsZWN0ZWQgPT09IGZjLmRpcjtcbiAgICAgICAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzd2F0Y2gtYnRuJHtpc0F2YWlsID8gJycgOiAnIHVuYXZhaWxhYmxlJ31cIlxuICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7aXNBdmFpbCA/ICgpID0+IHRoaXMuX3NlbGVjdENvbG91cihmYykgOiBudWxsfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzd2F0Y2gtY2lyY2xlJHtpc1NlbCA/ICcgc2VsZWN0ZWQnIDogJyd9XCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJiYWNrZ3JvdW5kOiR7ZmMuc3dhdGNofVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzd2F0Y2gtbmFtZVwiPiR7ZmMubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+YDtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInN3YXRjaC1idG5cIiBAY2xpY2s9JHsoKSA9PiB0aGlzLl9vcGVuQ3VzdG9tKCl9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3dhdGNoLWNpcmNsZSBzd2F0Y2gtcmFpbmJvdyR7aXNDdXN0b20gPyAnIHNlbGVjdGVkJyA6ICcnfVwiPjwvZGl2PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN3YXRjaC1uYW1lXCI+Q3VzdG9tPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAke3RoaXMuX3Nob3dDdXN0b20gPyBodG1sYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpY2tlci1jdXN0b21cIiBzdHlsZT1cIi0tcGlja2VyLWh1ZToke3RoaXMuX2h1ZX1cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNsaWRlci1yb3dcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNsaWRlci1sYWJlbFwiPkh1ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgY2xhc3M9XCJodWUtc2xpZGVyXCIgbWluPVwiMFwiIG1heD1cIjM2MFwiXG4gICAgICAgICAgICAgICAgICAudmFsdWU9JHtTdHJpbmcodGhpcy5faHVlKX1cbiAgICAgICAgICAgICAgICAgIEBpbnB1dD0ke3RoaXMuX29uSHVlSW5wdXR9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2xpZGVyLXJvd1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2xpZGVyLWxhYmVsXCI+U2F0dXJhdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgY2xhc3M9XCJzYXQtc2xpZGVyXCIgbWluPVwiMFwiIG1heD1cIjEwMFwiXG4gICAgICAgICAgICAgICAgICAudmFsdWU9JHtTdHJpbmcodGhpcy5fc2F0KX1cbiAgICAgICAgICAgICAgICAgIEBpbnB1dD0ke3RoaXMuX29uU2F0SW5wdXR9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgYCA6ICcnfVxuXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBpY2tlci1yZXNldFwiIEBjbGljaz0ke3RoaXMuX3Jlc2V0fT5cbiAgICAgICAgICAgIFJlc2V0IHRvIERlZmF1bHRcbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd0ZXNsYS1jb2xvdXItcGlja2VyJywgVGVzbGFDb2xvdXJQaWNrZXIpO1xuIiwgImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwsIGNzcyB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyB1bnNhZmVIVE1MIH0gZnJvbSAnbGl0L2RpcmVjdGl2ZXMvdW5zYWZlLWh0bWwuanMnO1xuaW1wb3J0IHsgVEVTTEFfTU9ERUxTIH0gZnJvbSAnLi9tb2RlbHMuanMnO1xuaW1wb3J0IHsgSUNPTlMgfSBmcm9tICcuL2ljb25zLmpzJztcblxuY2xhc3MgVGVzbGFNb2RlbFBpY2tlciBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbW9kZWw6ICAgICB7IHR5cGU6IFN0cmluZyB9LCAgIC8vIGN1cnJlbnQgbW9kZWwgSUQgZS5nLiAnMydcbiAgICAgIHZhcmlhbnQ6ICAgeyB0eXBlOiBTdHJpbmcgfSwgICAvLyBjdXJyZW50IHZhcmlhbnQgSUQgZS5nLiAnMy4xJ1xuICAgICAgc2xpZGVGcm9tOiB7IHR5cGU6IFN0cmluZywgcmVmbGVjdDogdHJ1ZSwgYXR0cmlidXRlOiAnc2xpZGUtZnJvbScgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKSB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIHNhbnMtc2VyaWY7XG4gICAgICB9XG5cbiAgICAgIC5waWNrZXItb3ZlcmxheSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaW5zZXQ6IDA7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42NSk7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAucGlja2VyLXBhbmVsIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6ICMxYzFjMWU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHggMTZweCAwIDA7XG4gICAgICAgIHBhZGRpbmc6IDAgMCAyMHB4O1xuICAgICAgICBhbmltYXRpb246IHNsaWRlVXAgMC4yNXMgZWFzZS1vdXQ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgc2xpZGVVcCB7XG4gICAgICAgIGZyb20geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7IG9wYWNpdHk6IDA7IH1cbiAgICAgICAgdG8gICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgb3BhY2l0eTogMTsgfVxuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIHNsaWRlRnJvbVJpZ2h0IHtcbiAgICAgICAgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMCUpOyBvcGFjaXR5OiAwOyB9XG4gICAgICAgIHRvICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IG9wYWNpdHk6IDE7IH1cbiAgICAgIH1cblxuICAgICAgQGtleWZyYW1lcyBzbGlkZUZyb21MZWZ0IHtcbiAgICAgICAgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzAlKTsgb3BhY2l0eTogMDsgfVxuICAgICAgICB0byAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyBvcGFjaXR5OiAxOyB9XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtzbGlkZS1mcm9tPVwicmlnaHRcIl0pIC5waWNrZXItcGFuZWwge1xuICAgICAgICBhbmltYXRpb246IHNsaWRlRnJvbVJpZ2h0IDAuMjVzIGVhc2Utb3V0O1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbc2xpZGUtZnJvbT1cImxlZnRcIl0pIC5waWNrZXItcGFuZWwge1xuICAgICAgICBhbmltYXRpb246IHNsaWRlRnJvbUxlZnQgMC4yNXMgZWFzZS1vdXQ7XG4gICAgICB9XG5cbiAgICAgIC5waWNrZXItaGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZzogMTZweCAyMHB4IDEycHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDcpO1xuICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgIH1cblxuICAgICAgLnBpY2tlci10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45NWVtO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIH1cblxuICAgICAgLnBpY2tlci1iYWNrIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAxMnB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlO1xuICAgICAgfVxuXG4gICAgICAucGlja2VyLWJhY2s6aG92ZXIgeyBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjkpOyB9XG4gICAgICAucGlja2VyLWJhY2sgLmljb24geyB3aWR0aDogMjJweDsgaGVpZ2h0OiAyMnB4OyB9XG5cbiAgICAgIC5pY29uIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuaWNvbiBzdmcgeyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyB9XG5cbiAgICAgIC5waWNrZXItY2xvc2Uge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAxMnB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA4KTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNik7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cyBlYXNlO1xuICAgICAgfVxuXG4gICAgICAucGlja2VyLWNsb3NlOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjE1KTsgfVxuXG4gICAgICAvKiBcdTI1MDBcdTI1MDAgTW9kZWwgbGlzdCBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgKi9cblxuICAgICAgLm1vZGVsLWxpc3Qge1xuICAgICAgICBwYWRkaW5nOiA4cHggMCAwO1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgICB9XG5cbiAgICAgIC5tb2RlbC1zZWN0aW9uIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgICAgfVxuXG4gICAgICAubW9kZWwtc2VjdGlvbi10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43MmVtO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuICAgICAgICBwYWRkaW5nOiAxNHB4IDIwcHggNnB4O1xuICAgICAgfVxuXG4gICAgICAubW9kZWwtZ3JvdXAge1xuICAgICAgICBtYXJnaW46IDAgMTZweDtcbiAgICAgICAgYmFja2dyb3VuZDogIzJjMmMyZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgLm1vZGVsLWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDEycHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMDYpO1xuICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjU1KTtcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45MmVtO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xMnMgZWFzZTtcbiAgICAgIH1cblxuICAgICAgLm1vZGVsLWljb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICAgIGhlaWdodDogMjhweDtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIG9wYWNpdHk6IDAuNDU7XG4gICAgICB9XG5cbiAgICAgIC5tb2RlbC1pY29uIC5pY29uIHsgd2lkdGg6IDI4cHg7IGhlaWdodDogMjhweDsgfVxuXG4gICAgICAubW9kZWwtaXRlbS5zZWxlY3RlZCAubW9kZWwtaWNvbiB7IG9wYWNpdHk6IDAuOTsgfVxuXG4gICAgICAubW9kZWwtaXRlbTpsYXN0LWNoaWxkIHsgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxuICAgICAgLm1vZGVsLWl0ZW06aG92ZXIgIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA0KTsgfVxuICAgICAgLm1vZGVsLWl0ZW06YWN0aXZlIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA4KTsgfVxuXG4gICAgICAubW9kZWwtaXRlbS5zZWxlY3RlZCB7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgfVxuXG4gICAgICAvKiBcdTI1MDBcdTI1MDAgVW5hdmFpbGFibGUgc3RhdGUgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwICovXG5cbiAgICAgIC5tb2RlbC1pdGVtLnVuYXZhaWxhYmxlIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcbiAgICAgIH1cblxuICAgICAgLm1vZGVsLWl0ZW0udW5hdmFpbGFibGUgLm1vZGVsLWxhYmVsIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICB9XG5cbiAgICAgIC5tb2RlbC1pdGVtLnVuYXZhaWxhYmxlOmhvdmVyIHsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cblxuICAgICAgLm1vZGVsLWxhYmVsIHsgZmxleDogMTsgfVxuXG4gICAgICAubW9kZWwtY2hlY2sge1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBjb2xvcjogIzM0Yzc1OTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5tb2RlbC1jaGVjayAuaWNvbiB7IHdpZHRoOiAyMHB4OyBoZWlnaHQ6IDIwcHg7IH1cblxuICAgICAgLm1vZGVsLW5vLWltYWdlcyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43MmVtO1xuICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjIpO1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICB9XG4gICAgYDtcbiAgfVxuXG4gIF9zZWxlY3QobW9kZWxJZCwgdmFyaWFudElkKSB7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnbW9kZWwtY2hhbmdlZCcsIHtcbiAgICAgIGRldGFpbDogeyBtb2RlbDogbW9kZWxJZCwgdmFyaWFudDogdmFyaWFudElkIH0sXG4gICAgICBidWJibGVzOiB0cnVlLCBjb21wb3NlZDogdHJ1ZSxcbiAgICB9KSk7XG4gIH1cblxuICBfYmFjaygpIHtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdwaWNrZXItYmFjaycsIHtcbiAgICAgIGJ1YmJsZXM6IHRydWUsIGNvbXBvc2VkOiB0cnVlLFxuICAgIH0pKTtcbiAgfVxuXG4gIF9jbG9zZSgpIHtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdwaWNrZXItY2xvc2UnLCB7XG4gICAgICBidWJibGVzOiB0cnVlLCBjb21wb3NlZDogdHJ1ZSxcbiAgICB9KSk7XG4gIH1cblxuICBfb25PdmVybGF5Q2xpY2soZSkge1xuICAgIGlmIChlLnRhcmdldCA9PT0gZS5jdXJyZW50VGFyZ2V0KSB0aGlzLl9jbG9zZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cInBpY2tlci1vdmVybGF5XCIgQGNsaWNrPSR7dGhpcy5fb25PdmVybGF5Q2xpY2t9PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGlja2VyLXBhbmVsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBpY2tlci1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwaWNrZXItYmFja1wiIEBjbGljaz0ke3RoaXMuX2JhY2t9PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj4ke3Vuc2FmZUhUTUwoSUNPTlNbJ2NoZXZyb24tbGVmdCddKX08L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicGlja2VyLXRpdGxlXCI+TW9kZWw8L3NwYW4+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicGlja2VyLWNsb3NlXCIgQGNsaWNrPSR7dGhpcy5fY2xvc2V9PiZ0aW1lczs8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kZWwtbGlzdFwiPlxuICAgICAgICAgICAgJHtURVNMQV9NT0RFTFMubWFwKG0gPT4gaHRtbGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGVsLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kZWwtc2VjdGlvbi10aXRsZVwiPiR7bS5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RlbC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgJHttLnZhcmlhbnRzLm1hcCh2ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsID0gdi5pZCA9PT0gdGhpcy52YXJpYW50O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBoYXNJbWFnZXMgPSB2LmNvbG91cnMubGVuZ3RoID4gMSB8fCB2LmNvbG91cnNbMF0gIT09ICduZXV0cmFsJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXZhaWwgPSBoYXNJbWFnZXMgfHwgc2VsO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibW9kZWwtaXRlbSR7c2VsID8gJyBzZWxlY3RlZCcgOiAnJ30ke2F2YWlsID8gJycgOiAnIHVuYXZhaWxhYmxlJ31cIlxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7YXZhaWwgPyAoKSA9PiB0aGlzLl9zZWxlY3QobS5pZCwgdi5pZCkgOiBudWxsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibW9kZWwtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj4ke3Vuc2FmZUhUTUwoSUNPTlMuY2FyKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1vZGVsLWxhYmVsXCI+JHt2LmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7IWF2YWlsID8gaHRtbGA8c3BhbiBjbGFzcz1cIm1vZGVsLW5vLWltYWdlc1wiPm5vIGltYWdlczwvc3Bhbj5gIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAke3NlbCA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibW9kZWwtY2hlY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj4ke3Vuc2FmZUhUTUwoSUNPTlMuY2hlY2spfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPmAgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5gO1xuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3Rlc2xhLW1vZGVsLXBpY2tlcicsIFRlc2xhTW9kZWxQaWNrZXIpO1xuIiwgImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgdW5zYWZlSFRNTCB9IGZyb20gJ2xpdC9kaXJlY3RpdmVzL3Vuc2FmZS1odG1sLmpzJztcbmltcG9ydCB7IHNoYXJlZFN0eWxlcywgY2FyZFN0eWxlcyB9IGZyb20gJy4vc3R5bGVzLmpzJztcbmltcG9ydCB7IEVOVElUSUVTLCBlbnRpdHlJZCB9IGZyb20gJy4vZW50aXR5LWNvbmZpZy5qcyc7XG5pbXBvcnQgeyBJQ09OUyB9IGZyb20gJy4vaWNvbnMuanMnO1xuaW1wb3J0IHsgRkFDVE9SWV9DT0xPVVJTIH0gZnJvbSAnLi9yZWNvbG91ci5qcyc7XG5pbXBvcnQgeyBURVNMQV9NT0RFTFMsIGdldFZhcmlhbnRDb2xvdXJzIH0gZnJvbSAnLi9tb2RlbHMuanMnO1xuaW1wb3J0ICcuL2VkaXRvci5qcyc7XG5pbXBvcnQgJy4vbWVudS1jaGFyZ2VyLmpzJztcbmltcG9ydCAnLi9tZW51LWNsaW1hdGUuanMnO1xuaW1wb3J0ICcuL21lbnUtY29udHJvbHMuanMnO1xuaW1wb3J0ICcuL2NvbG91ci1waWNrZXIuanMnO1xuaW1wb3J0ICcuL21vZGVsLXBpY2tlci5qcyc7XG5cbi8vIFx1MjUwMFx1MjUwMFx1MjUwMCBPdmVybGF5IGltYWdlIGZpbGVuYW1lcyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcbi8vIEJhc2UgaW1hZ2VzIChvcGFxdWUsIHVzZWQgYXMgdGhlIGNhbnZhcylcbmNvbnN0IElNR19CQVNFICAgICAgID0gJ2Jhc2UucG5nJztcblxuLy8gVHJhbnNwYXJlbnQgb3ZlcmxheXMgY29tcG9zaXRlZCBvbiB0b3Agb2YgdGhlIGJhc2UgdmlhIENTUyBzdGFja2luZy5cbi8vIFotb3JkZXIgKGZ1cnRoZXN0IFx1MjE5MiBuZWFyZXN0IHRvIGNhbWVyYSBpbiBvZmZjaGFyZ2UgZnJvbnQgMy80IHZpZXcpOlxuY29uc3QgT1ZFUkxBWV9aX09SREVSID0gWydjaGFyZ2Vwb3J0JywgJ2ZydW5rJywgJ2ZyJywgJ2ZmJywgJ25yJywgJ25mJ107XG5cbi8vIFdoZW4gYm90aCBzYW1lLXNpZGUgZG9vcnMgYXJlIG9wZW4sIHVzZSBhIGNvbWJpbmVkIG92ZXJsYXkgaW5zdGVhZCBvZlxuLy8gc3RhY2tpbmcgaW5kaXZpZHVhbCBvbmVzIChoYW5kbGVzIHNoYXJlZCBpbnRlcmlvciBjb3JyZWN0bHkpLlxuY29uc3QgQ09NQklORURfT1ZFUkxBWVMgPSB7XG4gICduZitucic6ICduZi1uci1jb21iaW5lZC1vdmVybGF5LnBuZycsXG4gICdmZitmcic6ICdmZi1mci1jb21iaW5lZC1vdmVybGF5LnBuZycsXG59O1xuXG4vLyBPbi1jaGFyZ2UgKHJlYXIgMy80IHZpZXcpOiBkaWZmZXJlbnQgei1vcmRlciwgbm8gY2hhcmdlcG9ydCBvciBmZiBvdmVybGF5cy5cbi8vIEZpbGVzIHVzZSAnb25jaGFyZ2UtJyBwcmVmaXggc28gYm90aCBzZXRzIGNvZXhpc3QgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuLy8gZnIgcmVuZGVycyBiZWxvdyB0cnVuayAoZmFyLXJlYXIgZG9vciBpcyBiZWhpbmQgdGhlIHRydW5rIGxpZCBpbiByZWFyIDMvNCB2aWV3KS5cbmNvbnN0IE9WRVJMQVlfQkVMT1dfVFJVTktfT05DSEFSR0UgPSBbJ2ZyJ107XG5jb25zdCBPVkVSTEFZX1pfT1JERVJfT05DSEFSR0UgPSBbJ2ZydW5rJywgJ25mJywgJ25yJ107XG5jb25zdCBDT01CSU5FRF9PVkVSTEFZU19PTkNIQVJHRSA9IHtcbiAgJ25mK25yJzogJ29uY2hhcmdlLW5mLW5yLWNvbWJpbmVkLW92ZXJsYXkucG5nJyxcbn07XG5cbi8vIGxvY2FsU3RvcmFnZSBrZXkgcHJlZml4ZXNcbmNvbnN0IExTX0NPTE9VUl9QUkVGSVggPSAndGVzbGEtY2FyZC1jb2xvdXItJztcbmNvbnN0IExTX01PREVMX1BSRUZJWCAgPSAndGVzbGEtY2FyZC1tb2RlbC0nO1xuY29uc3QgTFNfTEFZT1VUX1BSRUZJWCA9ICd0ZXNsYS1jYXJkLWxheW91dC0nO1xuY29uc3QgTFNfU0laRV9QUkVGSVggICA9ICd0ZXNsYS1jYXJkLXNpemUtJztcbmNvbnN0IENBUkRfU0laRVMgICAgICAgPSBbJ3NtYWxsJywgJ21lZGl1bScsICdsYXJnZSddO1xuXG5jbGFzcyBUZXNsYUNhcmQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICAvLyBDYWNoZS1idXN0IHZlcnNpb24gXHUyMDE0IGNoYW5nZXMgb24gZWFjaCBwYWdlIGxvYWQgdG8gcGljayB1cCBuZXcgaW1hZ2VzXG4gIHN0YXRpYyBfaW1nVmVyID0gRGF0ZS5ub3coKTtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6ICAgICAgICAgICAgeyB0eXBlOiBPYmplY3QgfSxcbiAgICAgIGNvbmZpZzogICAgICAgICAgeyB0eXBlOiBPYmplY3QgfSxcbiAgICAgIF9tZW51OiAgICAgICAgICAgeyBzdGF0ZTogdHJ1ZSB9LFxuICAgICAgX2ltYWdlRXJyb3I6ICAgICB7IHN0YXRlOiB0cnVlIH0sXG4gICAgICBfc2V0dGluZ3NWaWV3OiAgIHsgc3RhdGU6IHRydWUgfSwgICAvLyBudWxsIHwgJ21haW4nIHwgJ21vZGVsJyB8ICdjb2xvdXInXG4gICAgICBfbW9kZWxPdmVycmlkZTogIHsgc3RhdGU6IHRydWUgfSwgICAvLyB7IG1vZGVsLCB2YXJpYW50IH0gfCBudWxsXG4gICAgICBfY29sb3VyT3ZlcnJpZGU6IHsgc3RhdGU6IHRydWUgfSwgICAvLyB7IGRpciB9IHwgeyBkaXI6J2N1c3RvbScsIGgsIHMgfSB8IG51bGxcbiAgICAgIF9sYXlvdXQ6ICAgICAgICAgeyBzdGF0ZTogdHJ1ZSB9LCAgIC8vICdwb3J0cmFpdCcgfCAnbGFuZHNjYXBlJ1xuICAgICAgX3NldHRpbmdzU2xpZGU6ICB7IHN0YXRlOiB0cnVlIH0sICAgLy8gbnVsbCB8ICdsZWZ0JyB8ICdyaWdodCcgXHUyMDE0IHBhbmVsIHRyYW5zaXRpb24gZGlyZWN0aW9uXG4gICAgICBfY2FyZFNpemU6ICAgICAgIHsgc3RhdGU6IHRydWUgfSwgICAvLyAnc21hbGwnIHwgJ21lZGl1bScgfCAnbGFyZ2UnXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCkgeyByZXR1cm4gW3NoYXJlZFN0eWxlcywgY2FyZFN0eWxlc107IH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX21lbnUgICAgICAgICAgICA9IG51bGw7XG4gICAgdGhpcy5faW1hZ2VFcnJvciAgICAgID0gZmFsc2U7XG4gICAgdGhpcy5fc2V0dGluZ3NWaWV3ICAgID0gbnVsbDtcbiAgICB0aGlzLl9tb2RlbE92ZXJyaWRlICAgPSBudWxsO1xuICAgIHRoaXMuX2NvbG91ck92ZXJyaWRlICA9IG51bGw7XG4gICAgdGhpcy5fbGF5b3V0ICAgICAgICAgID0gJ3BvcnRyYWl0JztcbiAgICB0aGlzLl9zZXR0aW5nc1NsaWRlICAgPSBudWxsO1xuICAgIHRoaXMuX2NhcmRTaXplICAgICAgICA9ICdtZWRpdW0nO1xuICAgIHRoaXMuX2Jhc2VDb25maWcgICAgICA9IG51bGw7XG4gICAgdGhpcy5fY29tYmluZWRBdmFpbCAgID0ge307ICAgLy8geyAnbmYrbnInOiB0cnVlL2ZhbHNlLCAnZmYrZnInOiB0cnVlL2ZhbHNlLCAnb2NfbmYrbnInOiAuLi4gfVxuICAgIHRoaXMuX29uY2hhcmdlQXZhaWwgICA9IGZhbHNlOyAvLyB3aGV0aGVyIG9uY2hhcmdlLWJhc2UucG5nIGV4aXN0cyBmb3IgY3VycmVudCBjb2xvdXJcbiAgICB0aGlzLl9jYWJsZUF2YWlsICAgICAgPSBmYWxzZTsgLy8gd2hldGhlciBvbmNoYXJnZS1jYWJsZS1vdmVybGF5LnBuZyBleGlzdHNcbiAgICAvLyBQcmUtYm91bmQgc28gTGl0IHJldXNlcyB0aGUgc2FtZSBmdW5jdGlvbiByZWZlcmVuY2UgYWNyb3NzIHJlbmRlcnNcbiAgICB0aGlzLl90b2dnbGVDaGFyZ2VyICAgICAgID0gKCkgPT4gdGhpcy5fdG9nZ2xlKCdjaGFyZ2VyJyk7XG4gICAgdGhpcy5fdG9nZ2xlQ2xpbWF0ZSAgICAgICA9ICgpID0+IHRoaXMuX3RvZ2dsZSgnY2xpbWF0ZScpO1xuICAgIHRoaXMuX3RvZ2dsZUNvbnRyb2xzICAgICAgPSAoKSA9PiB0aGlzLl90b2dnbGUoJ2NvbnRyb2xzJyk7XG4gICAgdGhpcy5faGFuZGxlQ2xvc2VNZW51ICAgICA9ICgpID0+IHsgdGhpcy5fbWVudSA9IG51bGw7IH07XG4gICAgdGhpcy5faGFuZGxlQ29sb3VyQ2hhbmdlZCA9IChlKSA9PiB0aGlzLl9vbkNvbG91ckNoYW5nZWQoZSk7XG4gICAgdGhpcy5faGFuZGxlTW9kZWxDaGFuZ2VkICA9IChlKSA9PiB0aGlzLl9vbk1vZGVsQ2hhbmdlZChlKTtcbiAgICB0aGlzLl9oYW5kbGVNb2RlbEJhY2sgICAgID0gKCkgPT4geyB0aGlzLl9zZXR0aW5nc1NsaWRlID0gbnVsbDsgdGhpcy5fc2V0dGluZ3NWaWV3ID0gJ21haW4nOyB9O1xuICAgIHRoaXMuX2hhbmRsZUNvbG91ckJhY2sgICAgPSAoKSA9PiB7IHRoaXMuX3NldHRpbmdzU2xpZGUgPSAnbGVmdCc7IHRoaXMuX3NldHRpbmdzVmlldyA9ICdtb2RlbCc7IH07XG4gICAgdGhpcy5faGFuZGxlUGlja2VyQ2xvc2UgICA9ICgpID0+IHsgdGhpcy5fc2V0dGluZ3NWaWV3ID0gbnVsbDsgdGhpcy5fc2V0dGluZ3NTbGlkZSA9IG51bGw7IH07XG4gIH1cblxuICAvLyBcdTI1MDBcdTI1MDBcdTI1MDAgQ29uZmlnIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXG4gIHNldENvbmZpZyhjb25maWcpIHtcbiAgICBpZiAoIWNvbmZpZy5jYXJfbmFtZSkgdGhyb3cgbmV3IEVycm9yKCdjYXJfbmFtZSBpcyByZXF1aXJlZCcpO1xuICAgIHRoaXMuX2Jhc2VDb25maWcgPSB7XG4gICAgICBjYXJfbW9kZWw6ICAgJzMnLFxuICAgICAgY2FyX3ZhcmlhbnQ6ICczLjEnLFxuICAgICAgY2FyX2NvbG9yOiAgICdyZWRfbXVsdGlfY29hdCcsXG4gICAgICBpbWFnZV9wYXRoOiAgJy9oYWNzZmlsZXMvaG9tZWFzc2lzdGFudC1mZS10ZXNsYScsXG4gICAgICBzaG93X3NwZWVkOiAgdHJ1ZSxcbiAgICAgIC4uLmNvbmZpZyxcbiAgICB9O1xuICAgIHRoaXMuX2FwcGx5Q29uZmlnKCk7XG4gIH1cblxuICBfYXBwbHlDb25maWcoKSB7XG4gICAgY29uc3QgYmFzZSA9IHsgLi4udGhpcy5fYmFzZUNvbmZpZyB9O1xuICAgIGlmICh0aGlzLl9tb2RlbE92ZXJyaWRlKSB7XG4gICAgICBiYXNlLmNhcl9tb2RlbCAgID0gdGhpcy5fbW9kZWxPdmVycmlkZS5tb2RlbDtcbiAgICAgIGJhc2UuY2FyX3ZhcmlhbnQgPSB0aGlzLl9tb2RlbE92ZXJyaWRlLnZhcmlhbnQ7XG4gICAgfVxuICAgIGNvbnN0IGNvID0gdGhpcy5fY29sb3VyT3ZlcnJpZGU7XG4gICAgaWYgKGNvKSB7XG4gICAgICBiYXNlLmNhcl9jb2xvciA9IGNvLmRpciA9PT0gJ2N1c3RvbScgPyAnbmV1dHJhbCcgOiBjby5kaXI7XG4gICAgfVxuICAgIHRoaXMuY29uZmlnID0gYmFzZTtcbiAgICB0aGlzLl9wcmVsb2FkQ29tYmluZWRPdmVybGF5cygpO1xuICB9XG5cbiAgX3ByZWxvYWRDb21iaW5lZE92ZXJsYXlzKCkge1xuICAgIC8vIE9mZmNoYXJnZSBjb21iaW5lZCBvdmVybGF5c1xuICAgIGZvciAoY29uc3QgW2tleSwgZmlsZW5hbWVdIG9mIE9iamVjdC5lbnRyaWVzKENPTUJJTkVEX09WRVJMQVlTKSkge1xuICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICBpbWcub25sb2FkID0gKCkgPT4geyB0aGlzLl9jb21iaW5lZEF2YWlsW2tleV0gPSB0cnVlOyB0aGlzLnJlcXVlc3RVcGRhdGUoKTsgfTtcbiAgICAgIGltZy5vbmVycm9yID0gKCkgPT4geyB0aGlzLl9jb21iaW5lZEF2YWlsW2tleV0gPSBmYWxzZTsgfTtcbiAgICAgIGltZy5zcmMgPSB0aGlzLl9vdmVybGF5VXJsKGZpbGVuYW1lKTtcbiAgICB9XG4gICAgLy8gUHJvYmUgZm9yIG9uLWNoYXJnZSBiYXNlIGltYWdlIChkZXRlcm1pbmVzIGlmIG9uY2hhcmdlIHNldCBleGlzdHMpXG4gICAgY29uc3Qgb2NQcm9iZSA9IG5ldyBJbWFnZSgpO1xuICAgIG9jUHJvYmUub25sb2FkID0gKCkgPT4geyB0aGlzLl9vbmNoYXJnZUF2YWlsID0gdHJ1ZTsgdGhpcy5yZXF1ZXN0VXBkYXRlKCk7IH07XG4gICAgb2NQcm9iZS5vbmVycm9yID0gKCkgPT4geyB0aGlzLl9vbmNoYXJnZUF2YWlsID0gZmFsc2U7IH07XG4gICAgb2NQcm9iZS5zcmMgPSB0aGlzLl9vdmVybGF5VXJsKCdvbmNoYXJnZS1iYXNlLnBuZycpO1xuICAgIC8vIFByb2JlIGZvciBvbi1jaGFyZ2UgY2FibGUgb3ZlcmxheSAoZm9yIGNoYXJnaW5nIGdsb3cgYW5pbWF0aW9uKVxuICAgIGNvbnN0IGNhYmxlUHJvYmUgPSBuZXcgSW1hZ2UoKTtcbiAgICBjYWJsZVByb2JlLm9ubG9hZCA9ICgpID0+IHsgdGhpcy5fY2FibGVBdmFpbCA9IHRydWU7IHRoaXMucmVxdWVzdFVwZGF0ZSgpOyB9O1xuICAgIGNhYmxlUHJvYmUub25lcnJvciA9ICgpID0+IHsgdGhpcy5fY2FibGVBdmFpbCA9IGZhbHNlOyB9O1xuICAgIGNhYmxlUHJvYmUuc3JjID0gdGhpcy5fb3ZlcmxheVVybCgnb25jaGFyZ2UtY2FibGUtb3ZlcmxheS5wbmcnKTtcbiAgICAvLyBPbmNoYXJnZSBjb21iaW5lZCBvdmVybGF5c1xuICAgIGZvciAoY29uc3QgW2tleSwgZmlsZW5hbWVdIG9mIE9iamVjdC5lbnRyaWVzKENPTUJJTkVEX09WRVJMQVlTX09OQ0hBUkdFKSkge1xuICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICBpbWcub25sb2FkID0gKCkgPT4geyB0aGlzLl9jb21iaW5lZEF2YWlsWydvY18nICsga2V5XSA9IHRydWU7IHRoaXMucmVxdWVzdFVwZGF0ZSgpOyB9O1xuICAgICAgaW1nLm9uZXJyb3IgPSAoKSA9PiB7IHRoaXMuX2NvbWJpbmVkQXZhaWxbJ29jXycgKyBrZXldID0gZmFsc2U7IH07XG4gICAgICBpbWcuc3JjID0gdGhpcy5fb3ZlcmxheVVybChmaWxlbmFtZSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldENvbmZpZ0VsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rlc2xhLWNhcmQtZWRpdG9yJyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0U3R1YkNvbmZpZygpIHtcbiAgICByZXR1cm4geyBjYXJfbmFtZTogJycsIGNhcl9tb2RlbDogJzMnLCBjYXJfdmFyaWFudDogJzMuMScsIGNhcl9jb2xvcjogJ3JlZF9tdWx0aV9jb2F0JywgaW1hZ2VfcGF0aDogJy9oYWNzZmlsZXMvaG9tZWFzc2lzdGFudC1mZS10ZXNsYScgfTtcbiAgfVxuXG4gIC8vIFx1MjUwMFx1MjUwMFx1MjUwMCBQZXJzaXN0ZW5jZSBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGlmICh0aGlzLl9iYXNlQ29uZmlnKSB7XG4gICAgICB0aGlzLl9yZXN0b3JlTW9kZWwoKTtcbiAgICAgIHRoaXMuX3Jlc3RvcmVDb2xvdXIoKTtcbiAgICB9XG4gICAgdGhpcy5fcmVzdG9yZUxheW91dCgpO1xuICAgIHRoaXMuX3Jlc3RvcmVTaXplKCk7XG4gIH1cblxuICAvLyBcdTI1MDBcdTI1MDAgQ29sb3VyIFx1MjUwMFx1MjUwMFxuXG4gIF9jb2xvdXJMc0tleSgpIHtcbiAgICByZXR1cm4gTFNfQ09MT1VSX1BSRUZJWCArICh0aGlzLl9iYXNlQ29uZmlnPy5jYXJfbmFtZSA/PyAnZGVmYXVsdCcpO1xuICB9XG5cbiAgX3Jlc3RvcmVDb2xvdXIoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJhdyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuX2NvbG91ckxzS2V5KCkpO1xuICAgICAgaWYgKCFyYXcpIHJldHVybjtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuX2NvbG91ck92ZXJyaWRlID0gSlNPTi5wYXJzZShyYXcpO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIExlZ2FjeSBwbGFpbiBzdHJpbmcgZm9ybWF0XG4gICAgICAgIHRoaXMuX2NvbG91ck92ZXJyaWRlID0geyBkaXI6IHJhdyB9O1xuICAgICAgfVxuICAgICAgdGhpcy5fYXBwbHlDb25maWcoKTtcbiAgICB9IGNhdGNoIHsgLyogaWdub3JlIGNvcnJ1cHQgbG9jYWxTdG9yYWdlICovIH1cbiAgfVxuXG4gIF9wZXJzaXN0Q29sb3VyKCkge1xuICAgIHRyeSB7XG4gICAgICBpZiAodGhpcy5fY29sb3VyT3ZlcnJpZGUpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5fY29sb3VyTHNLZXkoKSwgSlNPTi5zdHJpbmdpZnkodGhpcy5fY29sb3VyT3ZlcnJpZGUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMuX2NvbG91ckxzS2V5KCkpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggeyAvKiBsb2NhbFN0b3JhZ2UgbWlnaHQgYmUgZnVsbCBvciBkaXNhYmxlZCAqLyB9XG4gIH1cblxuICBfb25Db2xvdXJDaGFuZ2VkKGUpIHtcbiAgICBjb25zdCBkZXRhaWwgPSBlLmRldGFpbDtcbiAgICBpZiAoIWRldGFpbCkge1xuICAgICAgdGhpcy5fY29sb3VyT3ZlcnJpZGUgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAoZGV0YWlsLmRpciA9PT0gJ2N1c3RvbScpIHtcbiAgICAgIHRoaXMuX2NvbG91ck92ZXJyaWRlID0geyBkaXI6ICdjdXN0b20nLCBoOiBkZXRhaWwuaCwgczogZGV0YWlsLnMgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29sb3VyT3ZlcnJpZGUgPSB7IGRpcjogZGV0YWlsLmRpciB9O1xuICAgIH1cbiAgICB0aGlzLl9hcHBseUNvbmZpZygpO1xuICAgIHRoaXMuX3BlcnNpc3RDb2xvdXIoKTtcbiAgICB0aGlzLl9pbWFnZUVycm9yID0gZmFsc2U7XG4gIH1cblxuICAvLyBcdTI1MDBcdTI1MDAgTW9kZWwgXHUyNTAwXHUyNTAwXG5cbiAgX21vZGVsTHNLZXkoKSB7XG4gICAgcmV0dXJuIExTX01PREVMX1BSRUZJWCArICh0aGlzLl9iYXNlQ29uZmlnPy5jYXJfbmFtZSA/PyAnZGVmYXVsdCcpO1xuICB9XG5cbiAgX3Jlc3RvcmVNb2RlbCgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmF3ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5fbW9kZWxMc0tleSgpKTtcbiAgICAgIGlmIChyYXcpIHtcbiAgICAgICAgdGhpcy5fbW9kZWxPdmVycmlkZSA9IEpTT04ucGFyc2UocmF3KTtcbiAgICAgICAgdGhpcy5fYXBwbHlDb25maWcoKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIHsgLyogaWdub3JlICovIH1cbiAgfVxuXG4gIF9wZXJzaXN0TW9kZWwoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh0aGlzLl9tb2RlbE92ZXJyaWRlKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuX21vZGVsTHNLZXkoKSwgSlNPTi5zdHJpbmdpZnkodGhpcy5fbW9kZWxPdmVycmlkZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5fbW9kZWxMc0tleSgpKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIHsgLyogKi8gfVxuICB9XG5cbiAgX29uTW9kZWxDaGFuZ2VkKGUpIHtcbiAgICBjb25zdCB7IG1vZGVsLCB2YXJpYW50IH0gPSBlLmRldGFpbDtcbiAgICB0aGlzLl9tb2RlbE92ZXJyaWRlID0geyBtb2RlbCwgdmFyaWFudCB9O1xuICAgIC8vIFJlc2V0IGNvbG91ciBpZiBjdXJyZW50IGNvbG91ciBpc24ndCBhdmFpbGFibGUgZm9yIHRoZSBuZXcgbW9kZWwvdmFyaWFudFxuICAgIGNvbnN0IGNvID0gdGhpcy5fY29sb3VyT3ZlcnJpZGU7XG4gICAgaWYgKGNvICYmIGNvLmRpciAhPT0gJ2N1c3RvbScpIHtcbiAgICAgIGNvbnN0IGF2YWlsQ29sb3VycyA9IGdldFZhcmlhbnRDb2xvdXJzKG1vZGVsLCB2YXJpYW50KTtcbiAgICAgIGlmICghYXZhaWxDb2xvdXJzLmluY2x1ZGVzKGNvLmRpcikpIHtcbiAgICAgICAgdGhpcy5fY29sb3VyT3ZlcnJpZGUgPSBudWxsO1xuICAgICAgICB0aGlzLl9wZXJzaXN0Q29sb3VyKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2FwcGx5Q29uZmlnKCk7XG4gICAgdGhpcy5fcGVyc2lzdE1vZGVsKCk7XG4gICAgdGhpcy5faW1hZ2VFcnJvciA9IGZhbHNlO1xuICAgIC8vIEZvcndhcmQgdG8gY29sb3VyIHBpY2tlclxuICAgIHRoaXMuX3NldHRpbmdzU2xpZGUgPSAncmlnaHQnO1xuICAgIHRoaXMuX3NldHRpbmdzVmlldyA9ICdjb2xvdXInO1xuICB9XG5cbiAgLy8gXHUyNTAwXHUyNTAwIExheW91dCBcdTI1MDBcdTI1MDBcblxuICBfbGF5b3V0THNLZXkoKSB7XG4gICAgcmV0dXJuIExTX0xBWU9VVF9QUkVGSVggKyAodGhpcy5fYmFzZUNvbmZpZz8uY2FyX25hbWUgPz8gJ2RlZmF1bHQnKTtcbiAgfVxuXG4gIF9yZXN0b3JlTGF5b3V0KCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByYXcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLl9sYXlvdXRMc0tleSgpKTtcbiAgICAgIGlmIChyYXcgPT09ICdsYW5kc2NhcGUnKSB0aGlzLl9sYXlvdXQgPSAnbGFuZHNjYXBlJztcbiAgICB9IGNhdGNoIHsgLyogaWdub3JlICovIH1cbiAgfVxuXG4gIF9wZXJzaXN0TGF5b3V0KCkge1xuICAgIHRyeSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLl9sYXlvdXRMc0tleSgpLCB0aGlzLl9sYXlvdXQpO1xuICAgIH0gY2F0Y2ggeyAvKiAqLyB9XG4gIH1cblxuICBfdG9nZ2xlTGF5b3V0KCkge1xuICAgIHRoaXMuX2xheW91dCA9IHRoaXMuX2xheW91dCA9PT0gJ2xhbmRzY2FwZScgPyAncG9ydHJhaXQnIDogJ2xhbmRzY2FwZSc7XG4gICAgdGhpcy5fcGVyc2lzdExheW91dCgpO1xuICB9XG5cbiAgLy8gXHUyNTAwXHUyNTAwIENhcmQgU2l6ZSBcdTI1MDBcdTI1MDBcblxuICBfc2l6ZUxzS2V5KCkge1xuICAgIHJldHVybiBMU19TSVpFX1BSRUZJWCArICh0aGlzLl9iYXNlQ29uZmlnPy5jYXJfbmFtZSA/PyAnZGVmYXVsdCcpO1xuICB9XG5cbiAgX3Jlc3RvcmVTaXplKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByYXcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLl9zaXplTHNLZXkoKSk7XG4gICAgICBpZiAocmF3ICYmIENBUkRfU0laRVMuaW5jbHVkZXMocmF3KSkgdGhpcy5fY2FyZFNpemUgPSByYXc7XG4gICAgfSBjYXRjaCB7IC8qIGlnbm9yZSAqLyB9XG4gIH1cblxuICBfcGVyc2lzdFNpemUoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuX3NpemVMc0tleSgpLCB0aGlzLl9jYXJkU2l6ZSk7XG4gICAgfSBjYXRjaCB7IC8qICovIH1cbiAgfVxuXG4gIF9zZXRDYXJkU2l6ZShzaXplKSB7XG4gICAgaWYgKHRoaXMuX2NhcmRTaXplID09PSBzaXplKSByZXR1cm47XG4gICAgdGhpcy5fY2FyZFNpemUgPSBzaXplO1xuICAgIHRoaXMuX3BlcnNpc3RTaXplKCk7XG4gIH1cblxuICAvLyBcdTI1MDBcdTI1MDBcdTI1MDAgSW1hZ2UgVVJMIGhlbHBlcnMgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cbiAgX2ltZ1VybChmKSB7XG4gICAgY29uc3QgeyBpbWFnZV9wYXRoLCBjYXJfbW9kZWwsIGNhcl92YXJpYW50LCBjYXJfY29sb3IgfSA9IHRoaXMuY29uZmlnO1xuICAgIHJldHVybiBgJHtpbWFnZV9wYXRofS8ke2Nhcl9tb2RlbH0vJHtjYXJfdmFyaWFudH0vJHtjYXJfY29sb3J9LyR7Zn0/dj0ke1Rlc2xhQ2FyZC5faW1nVmVyfWA7XG4gIH1cblxuICBfb3ZlcmxheVVybChmKSB7XG4gICAgY29uc3QgeyBpbWFnZV9wYXRoLCBjYXJfbW9kZWwsIGNhcl92YXJpYW50LCBjYXJfY29sb3IgfSA9IHRoaXMuY29uZmlnO1xuICAgIHJldHVybiBgJHtpbWFnZV9wYXRofS8ke2Nhcl9tb2RlbH0vJHtjYXJfdmFyaWFudH0vJHtjYXJfY29sb3J9L292ZXJsYXlzLyR7Zn0/dj0ke1Rlc2xhQ2FyZC5faW1nVmVyfWA7XG4gIH1cblxuICBfYnRuVXJsKGYpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5jb25maWcuaW1hZ2VfcGF0aH0vYnV0dG9ucy8ke2Z9P3Y9JHtUZXNsYUNhcmQuX2ltZ1Zlcn1gO1xuICB9XG5cbiAgLy8gXHUyNTAwXHUyNTAwXHUyNTAwIEN1c3RvbSBjb2xvdXIgaGVscGVycyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxuICAvKiogUmV0dXJucyB7IGgsIHMgfSBmb3IgY3VzdG9tIGNvbG91ciwgb3IgbnVsbCAqL1xuICBnZXQgX2N1c3RvbUNvbG91cigpIHtcbiAgICBjb25zdCBjbyA9IHRoaXMuX2NvbG91ck92ZXJyaWRlO1xuICAgIGlmICghY28gfHwgY28uZGlyICE9PSAnY3VzdG9tJykgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIHsgaDogY28uaCwgczogY28ucyB9O1xuICB9XG5cbiAgZ2V0IF9oYXNDdXN0b21PdmVybGF5KCkge1xuICAgIGNvbnN0IGMgPSB0aGlzLl9jdXN0b21Db2xvdXI7XG4gICAgcmV0dXJuICEhYyAmJiBjLnMgPiAwO1xuICB9XG5cbiAgX21hc2tVcmwoZikge1xuICAgIGNvbnN0IHsgaW1hZ2VfcGF0aCwgY2FyX21vZGVsLCBjYXJfdmFyaWFudCB9ID0gdGhpcy5jb25maWc7XG4gICAgY29uc3QgbWFza0ZpbGUgPSBmLnJlcGxhY2UoJy5wbmcnLCAnLW1hc2sucG5nJyk7XG4gICAgcmV0dXJuIGAke2ltYWdlX3BhdGh9LyR7Y2FyX21vZGVsfS8ke2Nhcl92YXJpYW50fS9uZXV0cmFsLyR7bWFza0ZpbGV9P3Y9JHtUZXNsYUNhcmQuX2ltZ1Zlcn1gO1xuICB9XG5cbiAgX2N1c3RvbU92ZXJsYXlTdHlsZUZvcihpbWFnZUZpbGUpIHtcbiAgICBjb25zdCBjID0gdGhpcy5fY3VzdG9tQ29sb3VyO1xuICAgIGlmICghYyB8fCBjLnMgPT09IDApIHJldHVybiAnJztcbiAgICBjb25zdCBtYXNrID0gdGhpcy5fbWFza1VybChpbWFnZUZpbGUpO1xuICAgIHJldHVybiBgcG9zaXRpb246YWJzb2x1dGU7aW5zZXQ6MDtwb2ludGVyLWV2ZW50czpub25lO2BcbiAgICAgICsgYGJhY2tncm91bmQ6aHNsKCR7Yy5ofSwke2Muc30lLDUwJSk7bWl4LWJsZW5kLW1vZGU6Y29sb3I7YFxuICAgICAgKyBgLXdlYmtpdC1tYXNrLWltYWdlOnVybCgke21hc2t9KTttYXNrLWltYWdlOnVybCgke21hc2t9KTtgXG4gICAgICArIGAtd2Via2l0LW1hc2stc2l6ZTpjb250YWluO21hc2stc2l6ZTpjb250YWluO2BcbiAgICAgICsgYC13ZWJraXQtbWFzay1yZXBlYXQ6bm8tcmVwZWF0O21hc2stcmVwZWF0Om5vLXJlcGVhdDtgXG4gICAgICArIGAtd2Via2l0LW1hc2stcG9zaXRpb246Y2VudGVyO21hc2stcG9zaXRpb246Y2VudGVyO2A7XG4gIH1cblxuICAvLyBcdTI1MDBcdTI1MDBcdTI1MDAgRW50aXR5IGhlbHBlcnMgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5cbiAgX2VpZCh0KSAgICAgIHsgcmV0dXJuIGVudGl0eUlkKHQsIHRoaXMuY29uZmlnLmNhcl9uYW1lKTsgfVxuICBfc3RhdGUodCkgICAgeyByZXR1cm4gdGhpcy5oYXNzPy5zdGF0ZXNbdGhpcy5fZWlkKHQpXTsgfVxuICBfdmFsKHQpICAgICAgeyByZXR1cm4gdGhpcy5fc3RhdGUodCk/LnN0YXRlOyB9XG4gIF9hdHRyKHQsIGEpICB7IHJldHVybiB0aGlzLl9zdGF0ZSh0KT8uYXR0cmlidXRlcz8uW2FdOyB9XG5cbiAgLy8gXHUyNTAwXHUyNTAwXHUyNTAwIFNlcnZpY2UgY2FsbCBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxuICBhc3luYyBfc3ZjKGRvbWFpbiwgc2VydmljZSwgZW50aXR5VHBsLCBleHRyYSA9IHt9KSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuaGFzcy5jYWxsU2VydmljZShkb21haW4sIHNlcnZpY2UsIHtcbiAgICAgICAgZW50aXR5X2lkOiB0aGlzLl9laWQoZW50aXR5VHBsKSxcbiAgICAgICAgLi4uZXh0cmEsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbdGVzbGEtY2FyZF0gc2VydmljZSBlcnJvcicsIGRvbWFpbiwgc2VydmljZSwgZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gXHUyNTAwXHUyNTAwXHUyNTAwIE1lbnUgdG9nZ2xlIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXG4gIF90b2dnbGUobSkge1xuICAgIHRoaXMuX21lbnUgPSB0aGlzLl9tZW51ID09PSBtID8gbnVsbCA6IG07XG4gIH1cblxuICAvLyBcdTI1MDBcdTI1MDBcdTI1MDAgU2V0dGluZ3MgbmF2aWdhdGlvbiBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxuICBfb3BlblNldHRpbmdzKCkgICAgIHsgdGhpcy5fc2V0dGluZ3NWaWV3ID0gJ21haW4nOyB0aGlzLl9zZXR0aW5nc1NsaWRlID0gbnVsbDsgfVxuICBfb3Blbk1vZGVsUGlja2VyKCkgIHsgdGhpcy5fc2V0dGluZ3NWaWV3ID0gJ21vZGVsJzsgdGhpcy5fc2V0dGluZ3NTbGlkZSA9IG51bGw7IH1cbiAgX2Nsb3NlU2V0dGluZ3MoKSAgICB7IHRoaXMuX3NldHRpbmdzVmlldyA9IG51bGw7IHRoaXMuX3NldHRpbmdzU2xpZGUgPSBudWxsOyB9XG5cbiAgX29uU2V0dGluZ3NPdmVybGF5Q2xpY2soZSkge1xuICAgIGlmIChlLnRhcmdldCA9PT0gZS5jdXJyZW50VGFyZ2V0KSB0aGlzLl9jbG9zZVNldHRpbmdzKCk7XG4gIH1cblxuICAvLyBcdTI1MDBcdTI1MDBcdTI1MDAgUmVuZGVyIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnIHx8ICF0aGlzLmhhc3MpIHJldHVybiBodG1sYGA7XG5cbiAgICBjb25zdCBtZW51ID0gdGhpcy5fbWVudTtcbiAgICBjb25zdCBjbyA9IHRoaXMuX2NvbG91ck92ZXJyaWRlO1xuXG4gICAgLy8gXHUyNTAwXHUyNTAwIFN0YXR1cyB2YWx1ZXMgXHUyNTAwXHUyNTAwXG4gICAgY29uc3QgYmF0UmF3ICAgID0gdGhpcy5fdmFsKEVOVElUSUVTLkJBVFRFUllfTEVWRUwpO1xuICAgIGNvbnN0IGJhdHRlcnkgICA9IGJhdFJhdyAhPSBudWxsID8gTWF0aC5yb3VuZChOdW1iZXIoYmF0UmF3KSkgOiBudWxsO1xuICAgIGNvbnN0IGJhdFBjdCAgICA9IGJhdHRlcnkgIT0gbnVsbCA/IE1hdGgubWF4KDAsIE1hdGgubWluKDEwMCwgYmF0dGVyeSkpIDogMDtcbiAgICBjb25zdCBiYXRDbHMgICAgPSBiYXRQY3QgPj0gNTAgPyAnaGlnaCcgOiBiYXRQY3QgPj0gMjAgPyAnbWVkaXVtJyA6ICdsb3cnO1xuICAgIGNvbnN0IHJhbmdlUmF3ICA9IHRoaXMuX3ZhbChFTlRJVElFUy5CQVRURVJZX1JBTkdFKTtcbiAgICBjb25zdCByYW5nZVVuaXQgPSB0aGlzLl9hdHRyKEVOVElUSUVTLkJBVFRFUllfUkFOR0UsICd1bml0X29mX21lYXN1cmVtZW50JykgPz8gJ2ttJztcbiAgICBjb25zdCByYW5nZSAgICAgPSByYW5nZVJhdyAhPSBudWxsID8gYCR7TWF0aC5yb3VuZChOdW1iZXIocmFuZ2VSYXcpKX0gJHtyYW5nZVVuaXR9YCA6IG51bGw7XG4gICAgY29uc3QgY2hhcmdpbmcgID0gdGhpcy5fdmFsKEVOVElUSUVTLkNIQVJHSU5HKSA9PT0gJ29uJztcbiAgICBjb25zdCBvbmxpbmUgICAgPSB0aGlzLl92YWwoRU5USVRJRVMuT05MSU5FKSA9PT0gJ29uJztcbiAgICBjb25zdCBvbmxpbmVFbnQgPSB0aGlzLl9zdGF0ZShFTlRJVElFUy5PTkxJTkUpO1xuXG4gICAgLy8gQ2FyIGltYWdlIFx1MjAxNCBvdmVybGF5IHN0YWNraW5nXG4gICAgY29uc3QgZnJ1bmtPcGVuICAgICAgID0gdGhpcy5fdmFsKEVOVElUSUVTLkZSVU5LX0NPVkVSKSA9PT0gJ29wZW4nXG4gICAgICAgICAgICAgICAgICAgICAgICAgfHwgdGhpcy5fdmFsKEVOVElUSUVTLkZSVU5LKSAgICAgICAgID09PSAnb24nO1xuICAgIGNvbnN0IHRydW5rT3BlbiAgICAgICA9IHRoaXMuX3ZhbChFTlRJVElFUy5UUlVOSykgICAgICAgICA9PT0gJ29uJztcbiAgICBjb25zdCBwbHVnZ2VkSW4gICAgICAgPSB0aGlzLl92YWwoRU5USVRJRVMuUExVR0dFRF9JTikgICAgPT09ICdvbic7XG4gICAgY29uc3QgY2hhcmdlckRvb3JPcGVuID0gdGhpcy5fdmFsKEVOVElUSUVTLkNIQVJHRVJfRE9PUikgPT09ICdvcGVuJyB8fCBwbHVnZ2VkSW47XG5cbiAgICAvLyBJbmRpdmlkdWFsIGRvb3Igc3RhdGVzIGZyb20gYmluYXJ5X3NlbnNvci57Y2FyX25hbWV9X2Rvb3JzIGF0dHJpYnV0ZXNcbiAgICBjb25zdCBkb29yU3RhdGUgPSB7XG4gICAgICBuZjogdGhpcy5fYXR0cihFTlRJVElFUy5ET09SUywgJ2RyaXZlcl9mcm9udCcpICAgID09PSB0cnVlLFxuICAgICAgbnI6IHRoaXMuX2F0dHIoRU5USVRJRVMuRE9PUlMsICdkcml2ZXJfcmVhcicpICAgICA9PT0gdHJ1ZSxcbiAgICAgIGZmOiB0aGlzLl9hdHRyKEVOVElUSUVTLkRPT1JTLCAncGFzc2VuZ2VyX2Zyb250JykgPT09IHRydWUsXG4gICAgICBmcjogdGhpcy5fYXR0cihFTlRJVElFUy5ET09SUywgJ3Bhc3Nlbmdlcl9yZWFyJykgID09PSB0cnVlLFxuICAgIH07XG5cbiAgICAvLyBXaGVuIHBsdWdnZWQgaW4gYW5kIG9uLWNoYXJnZSBpbWFnZXMgZXhpc3QsIHN3aXRjaCB0byByZWFyIDMvNCB2aWV3XG4gICAgY29uc3QgdXNlT25jaGFyZ2UgPSBwbHVnZ2VkSW4gJiYgdGhpcy5fb25jaGFyZ2VBdmFpbDtcbiAgICBjb25zdCBwcmVmaXggPSB1c2VPbmNoYXJnZSA/ICdvbmNoYXJnZS0nIDogJyc7XG5cbiAgICAvLyBCYXNlIGlzIGFsd2F5cyBiYXNlLnBuZyBcdTIwMTQgdHJ1bmsgaXMgYSB0cmFuc3BhcmVudCBvdmVybGF5IHNvIHRoYXRcbiAgICAvLyBiZWxvd1RydW5rIG92ZXJsYXlzIChvbmNoYXJnZSBmcikgY2FuIHJlbmRlciBiZXR3ZWVuIGJhc2UgYW5kIHRydW5rLlxuICAgIGNvbnN0IGJhc2VJbWcgPSBgJHtwcmVmaXh9YmFzZS5wbmdgO1xuXG4gICAgLy8gWi1vcmRlciBhbmQgYXZhaWxhYmxlIG92ZXJsYXlzIGRlcGVuZCBvbiBjYW1lcmEgYW5nbGUuXG4gICAgLy8gT24tY2hhcmdlIHZpZXcgaGFzIG5vIGNoYXJnZXBvcnQgb3ZlcmxheSAoYWx3YXlzIHZpc2libGUpIGFuZCBubyBmZiAobm90IGluIGZyYW1lKS5cbiAgICBjb25zdCB6T3JkZXIgPSB1c2VPbmNoYXJnZSA/IE9WRVJMQVlfWl9PUkRFUl9PTkNIQVJHRSA6IE9WRVJMQVlfWl9PUkRFUjtcbiAgICBjb25zdCBiZWxvd1RydW5rID0gdXNlT25jaGFyZ2UgPyBPVkVSTEFZX0JFTE9XX1RSVU5LX09OQ0hBUkdFIDogW107XG4gICAgY29uc3QgYWN0aXZlT3ZlcmxheXMgPSB7XG4gICAgICBmcnVuazogZnJ1bmtPcGVuLFxuICAgICAgbmY6IGRvb3JTdGF0ZS5uZixcbiAgICAgIG5yOiBkb29yU3RhdGUubnIsXG4gICAgICBmcjogZG9vclN0YXRlLmZyLFxuICAgIH07XG4gICAgaWYgKCF1c2VPbmNoYXJnZSkge1xuICAgICAgYWN0aXZlT3ZlcmxheXMuY2hhcmdlcG9ydCA9IGNoYXJnZXJEb29yT3BlbjtcbiAgICAgIGFjdGl2ZU92ZXJsYXlzLmZmID0gZG9vclN0YXRlLmZmO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBjb21iaW5lZCBvdmVybGF5cyAoYm90aCBzYW1lLXNpZGUgZG9vcnMgb3BlbilcbiAgICBjb25zdCBjb21iaW5lZEtleSA9IHVzZU9uY2hhcmdlID8gJ29jX25mK25yJyA6ICduZitucic7XG4gICAgY29uc3QgdXNlTmZOckNvbWJpbmVkID0gZG9vclN0YXRlLm5mICYmIGRvb3JTdGF0ZS5uciAmJiB0aGlzLl9jb21iaW5lZEF2YWlsW2NvbWJpbmVkS2V5XTtcbiAgICBjb25zdCB1c2VGZkZyQ29tYmluZWQgPSAhdXNlT25jaGFyZ2UgJiYgZG9vclN0YXRlLmZmICYmIGRvb3JTdGF0ZS5mciAmJiB0aGlzLl9jb21iaW5lZEF2YWlsWydmZitmciddO1xuICAgIGNvbnN0IGNvbWJpbmVkTWFwID0gdXNlT25jaGFyZ2UgPyBDT01CSU5FRF9PVkVSTEFZU19PTkNIQVJHRSA6IENPTUJJTkVEX09WRVJMQVlTO1xuXG4gICAgLy8gT3ZlcmxheXMgYmVsb3cgdHJ1bmsgKG9uY2hhcmdlOiBmciBpcyBiZWhpbmQgdHJ1bmsgbGlkKVxuICAgIGNvbnN0IGJlbG93VHJ1bmtGaWxlcyA9IFtdO1xuICAgIGZvciAoY29uc3QgbmFtZSBvZiBiZWxvd1RydW5rKSB7XG4gICAgICBpZiAoYWN0aXZlT3ZlcmxheXNbbmFtZV0pIGJlbG93VHJ1bmtGaWxlcy5wdXNoKGAke3ByZWZpeH0ke25hbWV9LW92ZXJsYXkucG5nYCk7XG4gICAgfVxuXG4gICAgLy8gVHJ1bmsgb3ZlcmxheSAodHJhbnNwYXJlbnQgZGlmZiwgbm90IGZ1bGwgYmFzZSBzd2FwKVxuICAgIGNvbnN0IHRydW5rT3ZlcmxheSA9IHRydW5rT3BlbiA/IGAke3ByZWZpeH10cnVuay1vdmVybGF5LnBuZ2AgOiBudWxsO1xuXG4gICAgLy8gQnVpbGQgbGlzdCBvZiBvdmVybGF5IGZpbGVuYW1lcyB0byBzdGFjayBhYm92ZSB0cnVuayAoei1vcmRlcmVkKVxuICAgIGNvbnN0IG92ZXJsYXlGaWxlcyA9IFtdO1xuICAgIGxldCBuZk5yRmlyc3RTZWVuID0gZmFsc2U7XG4gICAgbGV0IGZmRnJGaXJzdFNlZW4gPSBmYWxzZTtcblxuICAgIGZvciAoY29uc3QgbmFtZSBvZiB6T3JkZXIpIHtcbiAgICAgIGlmICghYWN0aXZlT3ZlcmxheXNbbmFtZV0pIGNvbnRpbnVlO1xuXG4gICAgICAvLyBTa2lwIGluZGl2aWR1YWwgZG9vcnMgd2hlbiB1c2luZyBjb21iaW5lZCBvdmVybGF5O1xuICAgICAgLy8gaW5zZXJ0IGNvbWJpbmVkIGF0IHRoZSBwb3NpdGlvbiBvZiB0aGUgbGFzdCBjb25zdGl0dWVudCBpbiB6LW9yZGVyXG4gICAgICBpZiAoKG5hbWUgPT09ICduZicgfHwgbmFtZSA9PT0gJ25yJykgJiYgdXNlTmZOckNvbWJpbmVkKSB7XG4gICAgICAgIGlmIChuZk5yRmlyc3RTZWVuKSBvdmVybGF5RmlsZXMucHVzaChjb21iaW5lZE1hcFsnbmYrbnInXSk7XG4gICAgICAgIG5mTnJGaXJzdFNlZW4gPSB0cnVlO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICgobmFtZSA9PT0gJ2ZmJyB8fCBuYW1lID09PSAnZnInKSAmJiB1c2VGZkZyQ29tYmluZWQpIHtcbiAgICAgICAgaWYgKGZmRnJGaXJzdFNlZW4pIG92ZXJsYXlGaWxlcy5wdXNoKGNvbWJpbmVkTWFwWydmZitmciddKTtcbiAgICAgICAgZmZGckZpcnN0U2VlbiA9IHRydWU7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBvdmVybGF5RmlsZXMucHVzaChgJHtwcmVmaXh9JHtuYW1lfS1vdmVybGF5LnBuZ2ApO1xuICAgIH1cblxuICAgIC8vIFx1MjUwMFx1MjUwMCBEZXJpdmVkIGRpc3BsYXkgdmFsdWVzIGZvciBuYXYgcm93cyBcdTI1MDBcdTI1MDBcbiAgICBjb25zdCBsb2NrU3RhdGUgICA9IHRoaXMuX3ZhbChFTlRJVElFUy5ET09SX0xPQ0spO1xuICAgIGNvbnN0IGlzTG9ja2VkICAgID0gbG9ja1N0YXRlID09PSAnbG9ja2VkJztcbiAgICBjb25zdCBjaGdTdGF0ZSAgICA9IHRoaXMuX3ZhbChFTlRJVElFUy5DSEFSR0lOR19TVEFURSkgPz8gJ1x1MjAxNCc7XG4gICAgY29uc3QgY2hnUmF0ZSAgICAgPSB0aGlzLl92YWwoRU5USVRJRVMuQ0hBUkdFX1JBVEUpO1xuICAgIGNvbnN0IGNoZ1JhdGVVbml0ID0gdGhpcy5fYXR0cihFTlRJVElFUy5DSEFSR0VfUkFURSwgJ3VuaXRfb2ZfbWVhc3VyZW1lbnQnKSA/PyAna1cnO1xuICAgIGNvbnN0IGNsaW1TdGF0ZSAgID0gdGhpcy5fdmFsKEVOVElUSUVTLkNMSU1BVEUpO1xuICAgIGNvbnN0IGNsaW1PbiAgICAgID0gY2xpbVN0YXRlICE9IG51bGwgJiYgY2xpbVN0YXRlICE9PSAnb2ZmJyAmJiBjbGltU3RhdGUgIT09ICd1bmF2YWlsYWJsZSc7XG4gICAgY29uc3QgdGd0VGVtcFJhdyAgPSB0aGlzLl9hdHRyKEVOVElUSUVTLkNMSU1BVEUsICd0ZW1wZXJhdHVyZScpO1xuICAgIGNvbnN0IHRlbXBVbml0ICAgID0gdGhpcy5fYXR0cihFTlRJVElFUy5DTElNQVRFLCAndGVtcGVyYXR1cmVfdW5pdCcpID8/ICdcdTAwQjBDJztcbiAgICBjb25zdCB0ZW1wU3RyICAgICA9IHRndFRlbXBSYXcgIT0gbnVsbCA/IE51bWJlcih0Z3RUZW1wUmF3KS50b0ZpeGVkKDEpIDogJ1x1MjAxNCc7XG5cbiAgICBjb25zdCBzdGF0dXNUZXh0ID0gIW9ubGluZSAmJiBvbmxpbmVFbnQgPyAnQXNsZWVwJ1xuICAgICAgOiB0aGlzLl92YWwoRU5USVRJRVMuUEFSS0lOR19CUkFLRSkgPT09ICdvbicgPyAnUGFya2VkJ1xuICAgICAgOiAoKCkgPT4ge1xuICAgICAgICAgIGlmICghdGhpcy5jb25maWcuc2hvd19zcGVlZCkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgY29uc3QgcyA9IHRoaXMuX2F0dHIoRU5USVRJRVMuTE9DQVRJT04sICdzcGVlZCcpO1xuICAgICAgICAgIHJldHVybiBzICE9IG51bGwgJiYgTnVtYmVyKHMpID4gMCA/IGAke01hdGgucm91bmQoTnVtYmVyKHMpKX0ga20vaGAgOiBudWxsO1xuICAgICAgICB9KSgpO1xuXG4gICAgY29uc3QgY2hhcmdlclN1YiAgPSBjaGFyZ2luZ1xuICAgICAgPyBgQ2hhcmdpbmcgXHUwMEI3ICR7Y2hnUmF0ZSA/PyAnXHUyMDE0J30gJHtjaGdSYXRlVW5pdH1gXG4gICAgICA6IHBsdWdnZWRJbiA/ICdQbHVnZ2VkIGluJyA6IGNoZ1N0YXRlO1xuICAgIGNvbnN0IGNsaW1hdGVTdWIgID0gY2xpbU9uID8gYCR7dGVtcFN0cn0ke3RlbXBVbml0fWAgOiAnT2ZmJztcbiAgICBjb25zdCBjb250cm9sc1N1YiA9IGxvY2tTdGF0ZSA/IChpc0xvY2tlZCA/ICdMb2NrZWQnIDogJ1VubG9ja2VkJykgOiBudWxsO1xuXG4gICAgLy8gTG9jYXRpb24gc3VibGFiZWwgZnJvbSBkZXZpY2VfdHJhY2tlclxuICAgIGNvbnN0IGxvY2F0aW9uU3RhdGUgPSB0aGlzLl92YWwoRU5USVRJRVMuTE9DQVRJT04pO1xuICAgIGNvbnN0IGxvY2F0aW9uU3ViICAgPSBsb2NhdGlvblN0YXRlXG4gICAgICA/IGxvY2F0aW9uU3RhdGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBsb2NhdGlvblN0YXRlLnNsaWNlKDEpLnJlcGxhY2UoL18vZywgJyAnKVxuICAgICAgOiBudWxsO1xuXG4gICAgLy8gU2VudHJ5IG1vZGUgZm9yIFNlY3VyaXR5ICYgRHJpdmVycyByb3dcbiAgICBjb25zdCBzZW50cnlPbiA9IHRoaXMuX3ZhbChFTlRJVElFUy5TRU5UUllfTU9ERSkgPT09ICdvbic7XG5cbiAgICAvLyBcdTI1MDBcdTI1MDAgU2V0dGluZ3Mgc3VibGFiZWxzIFx1MjUwMFx1MjUwMFxuICAgIGNvbnN0IGN1ck1vZGVsICAgPSBURVNMQV9NT0RFTFMuZmluZChtID0+IG0uaWQgPT09IHRoaXMuY29uZmlnLmNhcl9tb2RlbCk7XG4gICAgY29uc3QgY3VyVmFyaWFudCA9IGN1ck1vZGVsPy52YXJpYW50cy5maW5kKHYgPT4gdi5pZCA9PT0gdGhpcy5jb25maWcuY2FyX3ZhcmlhbnQpO1xuICAgIGNvbnN0IG1vZGVsU3ViICAgPSBjdXJNb2RlbCAmJiBjdXJWYXJpYW50XG4gICAgICA/IGAke2N1ck1vZGVsLm5hbWV9IFx1MDBCNyAke2N1clZhcmlhbnQubGFiZWx9YFxuICAgICAgOiB0aGlzLmNvbmZpZy5jYXJfbW9kZWw7XG5cbiAgICBjb25zdCBpc0N1c3RvbSAgICAgPSBjbz8uZGlyID09PSAnY3VzdG9tJztcbiAgICBjb25zdCBjdXJDb2xvdXJPYmogPSBpc0N1c3RvbSA/IG51bGwgOiBGQUNUT1JZX0NPTE9VUlMuZmluZChjID0+IGMuZGlyID09PSB0aGlzLmNvbmZpZy5jYXJfY29sb3IpO1xuICAgIGNvbnN0IGNvbG91clN1YiAgICA9IGlzQ3VzdG9tID8gJ0N1c3RvbScgOiAoY3VyQ29sb3VyT2JqPy5uYW1lID8/IHRoaXMuY29uZmlnLmNhcl9jb2xvcik7XG5cbiAgICAvLyBBdmFpbGFibGUgY29sb3VycyBmb3IgY3VycmVudCBtb2RlbC92YXJpYW50XG4gICAgY29uc3QgYXZhaWxDb2xvdXJzID0gZ2V0VmFyaWFudENvbG91cnModGhpcy5jb25maWcuY2FyX21vZGVsLCB0aGlzLmNvbmZpZy5jYXJfdmFyaWFudCk7XG4gICAgY29uc3QgaXNMYW5kc2NhcGUgPSB0aGlzLl9sYXlvdXQgPT09ICdsYW5kc2NhcGUnO1xuICAgIGNvbnN0IHNpemVDbGFzcyAgID0gdGhpcy5fY2FyZFNpemUgIT09ICdtZWRpdW0nID8gYHNpemUtJHt0aGlzLl9jYXJkU2l6ZX1gIDogJyc7XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1jYXJkIGNsYXNzPVwiJHtpc0xhbmRzY2FwZSA/ICdsYW5kc2NhcGUnIDogJyd9ICR7c2l6ZUNsYXNzfVwiPlxuXG4gICAgICAgIDwhLS0gXHUyNTAwXHUyNTAwIEhlYWRlciAoaGlkZGVuIHdoZW4gYSBzdWJtZW51IGlzIG9wZW4pIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMCAtLT5cbiAgICAgICAgJHshbWVudSA/IGh0bWxgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1sZWZ0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXItbmFtZS1yb3dcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhci1uYW1lXCI+JHt0aGlzLmNvbmZpZy5uYW1lID8/IHRoaXMuY29uZmlnLmNhcl9uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gbmFtZS1jaGV2cm9uXCI+JHt1bnNhZmVIVE1MKElDT05TWydjaGV2cm9uLWRvd24nXSl9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJhdHRlcnktc3VtbWFyeVwiPlxuICAgICAgICAgICAgICAgICR7YmF0dGVyeSAhPSBudWxsID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYXR0ZXJ5LWJhci1zbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmF0dGVyeS1maWxsLXNtYWxsICR7YmF0Q2xzfVwiIHN0eWxlPVwid2lkdGg6JHtiYXRQY3R9JVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhbmdlLXRleHRcIj4ke3JhbmdlID8/ICdcdTIwMTQnfTwvc3Bhbj5gIDogJyd9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAke3N0YXR1c1RleHQgPyBodG1sYDxzcGFuIGNsYXNzPVwic3RhdHVzLXRleHRcIj4ke3N0YXR1c1RleHR9PC9zcGFuPmAgOiAnJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1yaWdodFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiaWNvbi1idG5cIiB0aXRsZT1cIlNldHRpbmdzXCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9JHsoKSA9PiB0aGlzLl9vcGVuU2V0dGluZ3MoKX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+JHt1bnNhZmVIVE1MKElDT05TLnNldHRpbmdzKX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiaWNvbi1idG5cIiB0aXRsZT1cIlJlZnJlc2hcIlxuICAgICAgICAgICAgICAgIEBjbGljaz0keygpID0+IHRoaXMuX3N2YygnYnV0dG9uJywgJ3ByZXNzJywgRU5USVRJRVMuRk9SQ0VfVVBEQVRFKX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+JHt1bnNhZmVIVE1MKElDT05TLnJlZnJlc2gpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYCA6ICcnfVxuXG4gICAgICAgIDwhLS0gXHUyNTAwXHUyNTAwIExhbmRpbmcgYm9keSAoY2FyICsgbmF2IHNpZGUtYnktc2lkZSBpbiBsYW5kc2NhcGUpIFx1MjUwMFx1MjUwMCAtLT5cbiAgICAgICAgJHshbWVudSA/IGh0bWxgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxhbmRpbmctYm9keVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhbmRpbmctbGVmdFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyLWltYWdlLWFyZWFcIj5cbiAgICAgICAgICAgICAgICAke3RoaXMuX2ltYWdlRXJyb3IgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhci1pbWFnZS1wbGFjZWhvbGRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj4ke3Vuc2FmZUhUTUwoSUNPTlMuY2FyKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkltYWdlIG5vdCBmb3VuZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PmAgOiBodG1sYFxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImNhci1pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIiR7dGhpcy5fb3ZlcmxheVVybChiYXNlSW1nKX1cIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJUZXNsYSAke3RoaXMuY29uZmlnLmNhcl9tb2RlbH1cIlxuICAgICAgICAgICAgICAgICAgICBAZXJyb3I9JHsoKSA9PiB7IHRoaXMuX2ltYWdlRXJyb3IgPSB0cnVlOyB9fVxuICAgICAgICAgICAgICAgICAgICBAbG9hZD0keygpID0+IHsgdGhpcy5faW1hZ2VFcnJvciA9IGZhbHNlOyB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICR7YmVsb3dUcnVua0ZpbGVzLm1hcChmID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJjYXItb3ZlcmxheVwiXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiJHt0aGlzLl9vdmVybGF5VXJsKGYpfVwiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCIgLz5gKX1cbiAgICAgICAgICAgICAgICAgICR7dHJ1bmtPdmVybGF5ID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImNhci1vdmVybGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIke3RoaXMuX292ZXJsYXlVcmwodHJ1bmtPdmVybGF5KX1cIlxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiIC8+YCA6ICcnfVxuICAgICAgICAgICAgICAgICAgJHtvdmVybGF5RmlsZXMubWFwKGYgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImNhci1vdmVybGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIke3RoaXMuX292ZXJsYXlVcmwoZil9XCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIiAvPmApfVxuICAgICAgICAgICAgICAgICAgJHtjaGFyZ2luZyAmJiB1c2VPbmNoYXJnZSAmJiB0aGlzLl9jYWJsZUF2YWlsID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImNhci1vdmVybGF5IGNoYXJnaW5nLWdsb3dcIlxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIiR7dGhpcy5fb3ZlcmxheVVybCgnb25jaGFyZ2UtY2FibGUtb3ZlcmxheS5wbmcnKX1cIlxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiIC8+YCA6ICcnfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgJHt0aGlzLl9oYXNDdXN0b21PdmVybGF5ID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXItY29sb3VyLW92ZXJsYXlcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIiR7dGhpcy5fY3VzdG9tT3ZlcmxheVN0eWxlRm9yKGJhc2VJbWcpfVwiPjwvZGl2PmAgOiAnJ31cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwhLS0gUXVpY2sgYWN0aW9uIGljb25zOiBsb2NrLCBjb250cm9scywgY2hhcmdlLCBjbGltYXRlIC0tPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicXVpY2stYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICR7bG9ja1N0YXRlID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJxdWljay1idG4gJHtpc0xvY2tlZCA/ICdxLWxvY2tlZCcgOiAncS11bmxvY2tlZCd9XCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7KCkgPT4gdGhpcy5fc3ZjKCdsb2NrJywgaXNMb2NrZWQgPyAndW5sb2NrJyA6ICdsb2NrJywgRU5USVRJRVMuRE9PUl9MT0NLKX0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiPiR7dW5zYWZlSFRNTChpc0xvY2tlZCA/IElDT05TLmxvY2sgOiBJQ09OUy51bmxvY2spfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPmAgOiBodG1sYDxzcGFuIHN0eWxlPVwid2lkdGg6NDhweFwiPjwvc3Bhbj5gfVxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJxdWljay1idG5cIiBAY2xpY2s9JHt0aGlzLl90b2dnbGVDb250cm9sc30+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj4ke3Vuc2FmZUhUTUwoSUNPTlMuY2FyKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInF1aWNrLWJ0biAke2NoYXJnaW5nID8gJ3EtYWN0aXZlJyA6ICcnfVwiIEBjbGljaz0ke3RoaXMuX3RvZ2dsZUNoYXJnZXJ9PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+JHt1bnNhZmVIVE1MKElDT05TWydjaGFyZ2UtYm9sdCddKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInF1aWNrLWJ0biAke2NsaW1PbiA/ICdxLWFjdGl2ZScgOiAnJ31cIiBAY2xpY2s9JHt0aGlzLl90b2dnbGVDbGltYXRlfT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiPiR7dW5zYWZlSFRNTChJQ09OU1snY2xpbWF0ZS1mYW4nXSl9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi1yb3dzXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJuYXYtcm93XCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl90b2dnbGVDb250cm9sc30+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIG5hdi1pY29uXCI+JHt1bnNhZmVIVE1MKElDT05TLmNhcil9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXYtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXYtbGFiZWxcIj5Db250cm9sczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICR7Y29udHJvbHNTdWIgPyBodG1sYDxzcGFuIGNsYXNzPVwibmF2LXN1YmxhYmVsXCI+JHtjb250cm9sc1N1Yn08L3NwYW4+YCA6ICcnfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBuYXYtY2hldnJvblwiPiR7dW5zYWZlSFRNTChJQ09OU1snY2hldnJvbi1yaWdodCddKX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibmF2LXJvd1wiXG4gICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fdG9nZ2xlQ2xpbWF0ZX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIG5hdi1pY29uXCI+JHt1bnNhZmVIVE1MKElDT05TWydjbGltYXRlLWZhbiddKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdi1sYWJlbFwiPkNsaW1hdGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdi1zdWJsYWJlbFwiPiR7Y2xpbWF0ZVN1Yn08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIG5hdi1jaGV2cm9uXCI+JHt1bnNhZmVIVE1MKElDT05TWydjaGV2cm9uLXJpZ2h0J10pfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJuYXYtcm93XCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIG5hdi1pY29uXCI+JHt1bnNhZmVIVE1MKElDT05TLmxvY2F0aW9uKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdi1sYWJlbFwiPkxvY2F0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgJHtsb2NhdGlvblN1YiA/IGh0bWxgPHNwYW4gY2xhc3M9XCJuYXYtc3VibGFiZWxcIj4ke2xvY2F0aW9uU3VifTwvc3Bhbj5gIDogJyd9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIG5hdi1jaGV2cm9uXCI+JHt1bnNhZmVIVE1MKElDT05TWydjaGV2cm9uLXJpZ2h0J10pfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJuYXYtcm93XCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl90b2dnbGVDaGFyZ2VyfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gbmF2LWljb25cIj4ke3Vuc2FmZUhUTUwoSUNPTlNbJ2NoYXJnZS1ib2x0J10pfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2LXRleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2LWxhYmVsXCI+Q2hhcmdpbmc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdi1zdWJsYWJlbFwiPiR7Y2hhcmdlclN1Yn08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIG5hdi1jaGV2cm9uXCI+JHt1bnNhZmVIVE1MKElDT05TWydjaGV2cm9uLXJpZ2h0J10pfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJuYXYtcm93XCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIG5hdi1pY29uXCI+JHt1bnNhZmVIVE1MKElDT05TLnNjaGVkdWxlKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdi1sYWJlbFwiPlNldCBTY2hlZHVsZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIG5hdi1jaGV2cm9uXCI+JHt1bnNhZmVIVE1MKElDT05TWydjaGV2cm9uLXJpZ2h0J10pfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJuYXYtcm93XCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIG5hdi1pY29uXCI+JHt1bnNhZmVIVE1MKElDT05TLnNlY3VyaXR5KX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdi1sYWJlbFwiPlNlY3VyaXR5ICYgRHJpdmVyczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2LXN1YmxhYmVsXCI+JHtzZW50cnlPbiA/ICdTZW50cnkgTW9kZSBhY3RpdmUnIDogJ1Bob25lIGtleSBkaXNjb25uZWN0ZWQnfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gbmF2LWNoZXZyb25cIj4ke3Vuc2FmZUhUTUwoSUNPTlNbJ2NoZXZyb24tcmlnaHQnXSl9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgIDogJyd9XG5cbiAgICAgICAgPCEtLSBcdTI1MDBcdTI1MDAgU3VibWVudSBwYW5lbHMgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwIC0tPlxuICAgICAgICAke21lbnUgPT09ICdjaGFyZ2VyJyA/IGh0bWxgXG4gICAgICAgICAgPHRlc2xhLW1lbnUtY2hhcmdlclxuICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAuY29uZmlnPSR7dGhpcy5jb25maWd9XG4gICAgICAgICAgICAubGF5b3V0PSR7dGhpcy5fbGF5b3V0fVxuXG4gICAgICAgICAgICBAY2xvc2UtbWVudT0ke3RoaXMuX2hhbmRsZUNsb3NlTWVudX0+XG4gICAgICAgICAgPC90ZXNsYS1tZW51LWNoYXJnZXI+YCA6ICcnfVxuXG4gICAgICAgICR7bWVudSA9PT0gJ2NsaW1hdGUnID8gaHRtbGBcbiAgICAgICAgICA8dGVzbGEtbWVudS1jbGltYXRlXG4gICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgIC5jb25maWc9JHt0aGlzLmNvbmZpZ31cbiAgICAgICAgICAgIC5jdXN0b21Db2xvdXI9JHt0aGlzLl9jdXN0b21Db2xvdXJ9XG4gICAgICAgICAgICAubGF5b3V0PSR7dGhpcy5fbGF5b3V0fVxuXG4gICAgICAgICAgICBAY2xvc2UtbWVudT0ke3RoaXMuX2hhbmRsZUNsb3NlTWVudX0+XG4gICAgICAgICAgPC90ZXNsYS1tZW51LWNsaW1hdGU+YCA6ICcnfVxuXG4gICAgICAgICR7bWVudSA9PT0gJ2NvbnRyb2xzJyA/IGh0bWxgXG4gICAgICAgICAgPHRlc2xhLW1lbnUtY29udHJvbHNcbiAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgLmNvbmZpZz0ke3RoaXMuY29uZmlnfVxuICAgICAgICAgICAgLmN1c3RvbUNvbG91cj0ke3RoaXMuX2N1c3RvbUNvbG91cn1cbiAgICAgICAgICAgIC5sYXlvdXQ9JHt0aGlzLl9sYXlvdXR9XG5cbiAgICAgICAgICAgIEBjbG9zZS1tZW51PSR7dGhpcy5faGFuZGxlQ2xvc2VNZW51fT5cbiAgICAgICAgICA8L3Rlc2xhLW1lbnUtY29udHJvbHM+YCA6ICcnfVxuXG4gICAgICAgIDwhLS0gXHUyNTAwXHUyNTAwIFNldHRpbmdzOiBtYWluIG1lbnUgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwIC0tPlxuICAgICAgICAke3RoaXMuX3NldHRpbmdzVmlldyA9PT0gJ21haW4nID8gaHRtbGBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3Mtb3ZlcmxheVwiXG4gICAgICAgICAgICBAY2xpY2s9JHsoZSkgPT4gdGhpcy5fb25TZXR0aW5nc092ZXJsYXlDbGljayhlKX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtcGFuZWxcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2V0dGluZ3MtdGl0bGVcIj5TZXR0aW5nczwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic2V0dGluZ3MtY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7KCkgPT4gdGhpcy5fY2xvc2VTZXR0aW5ncygpfT4mdGltZXM7PC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3Mtcm93c1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzZXR0aW5ncy1yb3dcIlxuICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7KCkgPT4gdGhpcy5fb3Blbk1vZGVsUGlja2VyKCl9PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIHNldHRpbmdzLXJvdy1pY29uXCI+JHt1bnNhZmVIVE1MKElDT05TLmNhcil9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLXJvdy10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2V0dGluZ3Mtcm93LWxhYmVsXCI+TW9kZWwgJiBDb2xvdXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2V0dGluZ3Mtcm93LXN1YlwiPiR7bW9kZWxTdWJ9IFx1MDBCNyAke2NvbG91clN1Yn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBzZXR0aW5ncy1yb3ctY2hldnJvblwiPiR7dW5zYWZlSFRNTChJQ09OU1snY2hldnJvbi1yaWdodCddKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLXJvdyBzZXR0aW5ncy1yb3ctc3RhdGljXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gc2V0dGluZ3Mtcm93LWljb25cIj4ke3Vuc2FmZUhUTUwoSUNPTlMucmVzaXplKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3Mtcm93LXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzZXR0aW5ncy1yb3ctbGFiZWxcIj5DYXJkIFNpemU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1zaXplLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgJHtDQVJEX1NJWkVTLm1hcChzID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNldHRpbmdzLXNpemUtYnRuJHt0aGlzLl9jYXJkU2l6ZSA9PT0gcyA/ICcgc2VsZWN0ZWQnIDogJyd9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz0keyhlKSA9PiB7IGUuc3RvcFByb3BhZ2F0aW9uKCk7IHRoaXMuX3NldENhcmRTaXplKHMpOyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7cyA9PT0gJ3NtYWxsJyA/ICdTJyA6IHMgPT09ICdtZWRpdW0nID8gJ00nIDogJ0wnfVxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPmApfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNldHRpbmdzLXJvd1wiXG4gICAgICAgICAgICAgICAgICBAY2xpY2s9JHsoKSA9PiB0aGlzLl90b2dnbGVMYXlvdXQoKX0+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gc2V0dGluZ3Mtcm93LWljb25cIj4ke3Vuc2FmZUhUTUwoSUNPTlMubGF5b3V0KX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3Mtcm93LXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzZXR0aW5ncy1yb3ctbGFiZWxcIj5MYXlvdXQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2V0dGluZ3Mtcm93LXN1YlwiPiR7dGhpcy5fbGF5b3V0ID09PSAnbGFuZHNjYXBlJyA/ICdMYW5kc2NhcGUnIDogJ1BvcnRyYWl0J308L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBzZXR0aW5ncy1yb3ctY2hldnJvblwiPiR7dW5zYWZlSFRNTChJQ09OU1snY2hldnJvbi1yaWdodCddKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIGAgOiAnJ31cblxuICAgICAgICA8IS0tIFx1MjUwMFx1MjUwMCBTZXR0aW5nczogbW9kZWwgcGlja2VyIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMCAtLT5cbiAgICAgICAgJHt0aGlzLl9zZXR0aW5nc1ZpZXcgPT09ICdtb2RlbCcgPyBodG1sYFxuICAgICAgICAgIDx0ZXNsYS1tb2RlbC1waWNrZXJcbiAgICAgICAgICAgIC5tb2RlbD0ke3RoaXMuY29uZmlnLmNhcl9tb2RlbH1cbiAgICAgICAgICAgIC52YXJpYW50PSR7dGhpcy5jb25maWcuY2FyX3ZhcmlhbnR9XG4gICAgICAgICAgICBzbGlkZS1mcm9tPSR7dGhpcy5fc2V0dGluZ3NTbGlkZSA/PyAndXAnfVxuICAgICAgICAgICAgQG1vZGVsLWNoYW5nZWQ9JHt0aGlzLl9oYW5kbGVNb2RlbENoYW5nZWR9XG4gICAgICAgICAgICBAcGlja2VyLWJhY2s9JHt0aGlzLl9oYW5kbGVNb2RlbEJhY2t9XG4gICAgICAgICAgICBAcGlja2VyLWNsb3NlPSR7dGhpcy5faGFuZGxlUGlja2VyQ2xvc2V9PlxuICAgICAgICAgIDwvdGVzbGEtbW9kZWwtcGlja2VyPmAgOiAnJ31cblxuICAgICAgICA8IS0tIFx1MjUwMFx1MjUwMCBTZXR0aW5nczogY29sb3VyIHBpY2tlciBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDAgLS0+XG4gICAgICAgICR7dGhpcy5fc2V0dGluZ3NWaWV3ID09PSAnY29sb3VyJyA/IGh0bWxgXG4gICAgICAgICAgPHRlc2xhLWNvbG91ci1waWNrZXJcbiAgICAgICAgICAgIC5zZWxlY3RlZD0ke2NvPy5kaXIgPz8gdGhpcy5jb25maWcuY2FyX2NvbG9yfVxuICAgICAgICAgICAgLmF2YWlsYWJsZT0ke2F2YWlsQ29sb3Vyc31cbiAgICAgICAgICAgIC5jdXN0b21IPSR7Y28/LmRpciA9PT0gJ2N1c3RvbScgPyBjby5oIDogMH1cbiAgICAgICAgICAgIC5jdXN0b21TPSR7Y28/LmRpciA9PT0gJ2N1c3RvbScgPyBjby5zIDogODB9XG4gICAgICAgICAgICBzaG93QmFja1xuICAgICAgICAgICAgc2xpZGUtZnJvbT0ke3RoaXMuX3NldHRpbmdzU2xpZGUgPz8gJ3VwJ31cbiAgICAgICAgICAgIEBjb2xvdXItY2hhbmdlZD0ke3RoaXMuX2hhbmRsZUNvbG91ckNoYW5nZWR9XG4gICAgICAgICAgICBAcGlja2VyLWJhY2s9JHt0aGlzLl9oYW5kbGVDb2xvdXJCYWNrfVxuICAgICAgICAgICAgQHBpY2tlci1jbG9zZT0ke3RoaXMuX2hhbmRsZVBpY2tlckNsb3NlfT5cbiAgICAgICAgICA8L3Rlc2xhLWNvbG91ci1waWNrZXI+YCA6ICcnfVxuXG4gICAgICA8L2hhLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIGdldENhcmRTaXplKCkgeyByZXR1cm4gNTsgfVxuXG4gIC8vIFNlY3Rpb25zIHZpZXcgZ3JpZCBoaW50cyBcdTIwMTQgY2FyZCBmaWxscyB0aGUgc2VjdGlvbiBieSBkZWZhdWx0XG4gIGdldEdyaWRPcHRpb25zKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb2x1bW5zOiAxMiwgICAgICAgLy8gZnVsbCBzZWN0aW9uIHdpZHRoXG4gICAgICBtaW5fY29sdW1uczogNCwgICAgLy8gbWluaW11bSB+MS8zIHNlY3Rpb25cbiAgICAgIHJvd3M6ICdhdXRvJyxcbiAgICAgIG1pbl9yb3dzOiAzLFxuICAgIH07XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd0ZXNsYS1jYXJkJywgVGVzbGFDYXJkKTtcblxud2luZG93LmN1c3RvbUNhcmRzID0gd2luZG93LmN1c3RvbUNhcmRzIHx8IFtdO1xud2luZG93LmN1c3RvbUNhcmRzLnB1c2goe1xuICB0eXBlOiAgICAgICAgJ3Rlc2xhLWNhcmQnLFxuICBuYW1lOiAgICAgICAgJ1Rlc2xhIENhcmQnLFxuICBkZXNjcmlwdGlvbjogJ0EgTG92ZWxhY2UgY2FyZCBmb3IgdGhlIGFsYW5kdHNlL3Rlc2xhIEhvbWUgQXNzaXN0YW50IGludGVncmF0aW9uJyxcbiAgcHJldmlldzogICAgIGZhbHNlLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7OztBQU1BLElBR01BLElBQVNDO0FBSGYsSUFRYUMsSUFDWEYsRUFBT0csZUFBQUEsV0FDTkgsRUFBT0ksWUFBMEJKLEVBQU9JLFNBQVNDLGlCQUNsRCx3QkFBd0JDLFNBQVNDLGFBQ2pDLGFBQWFDLGNBQWNEO0FBWjdCLElBOEJNRSxJQUFvQkMsT0FBQUE7QUE5QjFCLElBZ0NNQyxJQUFjLG9CQUFJQztBQUFBQSxJQVNYQyxJQVRXRCxNQVNYQztFQU9YLFlBQ0VDLElBQ0FDLElBQ0FDLElBQUFBO0FBRUEsUUFWRkMsS0FBZSxlQUFBLE1BVVRELE9BQWNQLEVBQ2hCLE9BQVVTLE1BQ1IsbUVBQUE7QUFHSkQsU0FBS0gsVUFBVUEsSUFDZkcsS0FBS0UsSUFBV0o7RUFDbEI7RUFJQSxJQUFBLGFBQUlLO0FBR0YsUUFBSUEsS0FBYUgsS0FBS0k7QUFDdEIsVUFBTU4sS0FBVUUsS0FBS0U7QUFDckIsUUFBSWpCLEtBQUFBLFdBQStCa0IsSUFBMEI7QUFDM0QsWUFBTUUsS0FBQUEsV0FBWVAsTUFBNEMsTUFBbkJBLEdBQVFRO0FBQy9DRCxNQUFBQSxPQUNGRixLQUFhVCxFQUFZYSxJQUFJVCxFQUFBQSxJQUFBQSxXQUUzQkssUUFDREgsS0FBS0ksSUFBY0QsS0FBYSxJQUFJWixpQkFBaUJpQixZQUNwRFIsS0FBS0gsT0FBQUEsR0FFSFEsTUFDRlgsRUFBWWUsSUFBSVgsSUFBU0ssRUFBQUE7SUFHL0I7QUFDQSxXQUFPQTtFQUNUO0VBRUEsV0FBQU87QUFDRSxXQUFPVixLQUFLSDtFQUNkO0FBQUE7QUFXRixJQXNCYWMsSUFBYUMsQ0FBQUEsT0FDeEIsSUFBS2hCLEVBQ2MsWUFBQSxPQUFWZ0IsS0FBcUJBLEtBQWVBLEtBQVBDLElBQUFBLFFBRXBDckIsQ0FBQUE7QUExQkosSUFxQ2FzQixJQUFNLENBQ2pCaEIsT0FDR2lC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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWdIckIsSUFBTSxnQkFBZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXlJdEIsSUFBTSxnQkFBZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBcWZ0QixJQUFNLGlCQUFpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE2THZCLElBQU0sYUFBYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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QUFBQTtBQUFBO0FBQUE7QUFBQSxFQTRDZixnQkFBZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBU2hCLFNBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBWVQsZUFBZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFTZixNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFRTixLQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBV0wsS0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBdUVMLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFhUCxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFRUCxRQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1SLGdCQUFnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFTaEIsTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU9OLGdCQUFnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU9oQixVQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFTVixhQUFhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFRYixjQUFjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVVkLGdCQUFnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNaEIsaUJBQWlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1qQixjQUFjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1kLGdCQUFnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNaEIsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNUCxTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT1QsVUFBVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU9WLFFBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBU1IsUUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBU1IsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBU1AsVUFBVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBUVYsVUFBVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBU1YsU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVVULFFBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1WOzs7QUN2YUE7QUFBQSxFQUNFLFFBQVU7QUFBQSxJQUNSO0FBQUEsTUFDRSxJQUFNO0FBQUEsTUFDTixNQUFRO0FBQUEsTUFDUixVQUFZO0FBQUEsUUFDVjtBQUFBLFVBQ0UsSUFBTTtBQUFBLFVBQ04sT0FBUztBQUFBLFVBQ1QsU0FBVztBQUFBLFlBQ1Q7QUFBQSxjQUNFLElBQU07QUFBQSxjQUNOLE1BQVE7QUFBQSxjQUNSLFFBQVU7QUFBQSxjQUNWLFdBQWE7QUFBQSxZQUNmO0FBQUEsWUFDQTtBQUFBLGNBQ0UsSUFBTTtBQUFBLGNBQ04sTUFBUTtBQUFBLGNBQ1IsUUFBVTtBQUFBLFlBQ1o7QUFBQSxZQUNBO0FBQUEsY0FDRSxJQUFNO0FBQUEsY0FDTixNQUFRO0FBQUEsY0FDUixRQUFVO0FBQUEsWUFDWjtBQUFBLFlBQ0E7QUFBQSxjQUNFLElBQU07QUFBQSxjQUNOLE1BQVE7QUFBQSxjQUNSLFFBQVU7QUFBQSxZQUNaO0FBQUEsWUFDQTtBQUFBLGNBQ0UsSUFBTTtBQUFBLGNBQ04sTUFBUTtBQUFBLGNBQ1IsUUFBVTtBQUFBLFlBQ1o7QUFBQSxZQUNBO0FBQUEsY0FDRSxJQUFNO0FBQUEsY0FDTixNQUFRO0FBQUEsY0FDUixRQUFVO0FBQUEsWUFDWjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsSUFBTTtBQUFBLFVBQ04sT0FBUztBQUFBLFVBQ1QsU0FBVztBQUFBLFlBQ1Q7QUFBQSxjQUNFLElBQU07QUFBQSxjQUNOLE1BQVE7QUFBQSxjQUNSLFFBQVU7QUFBQSxZQUNaO0FBQUEsWUFDQTtBQUFBLGNBQ0UsSUFBTTtBQUFBLGNBQ04sTUFBUTtBQUFBLGNBQ1IsUUFBVTtBQUFBLFlBQ1o7QUFBQSxZQUNBO0FBQUEsY0FDRSxJQUFNO0FBQUEsY0FDTixNQUFRO0FBQUEsY0FDUixRQUFVO0FBQUEsWUFDWjtBQUFBLFlBQ0E7QUFBQSxjQUNFLElBQU07QUFBQSxjQUNOLE1BQVE7QUFBQSxjQUNSLFFBQVU7QUFBQSxZQUNaO0FBQUEsWUFDQTtBQUFBLGNBQ0UsSUFBTTtBQUFBLGNBQ04sTUFBUTtBQUFBLGNBQ1IsUUFBVTtBQUFBLFlBQ1o7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsSUFBTTtBQUFBLE1BQ04sTUFBUTtBQUFBLE1BQ1IsVUFBWTtBQUFBLFFBQ1Y7QUFBQSxVQUNFLElBQU07QUFBQSxVQUNOLE9BQVM7QUFBQSxVQUNULFNBQVc7QUFBQSxZQUNUO0FBQUEsY0FDRSxJQUFNO0FBQUEsY0FDTixNQUFRO0FBQUEsY0FDUixRQUFVO0FBQUEsWUFDWjtBQUFBLFlBQ0E7QUFBQSxjQUNFLElBQU07QUFBQSxjQUNOLE1BQVE7QUFBQSxjQUNSLFFBQVU7QUFBQSxZQUNaO0FBQUEsWUFDQTtBQUFBLGNBQ0UsSUFBTTtBQUFBLGNBQ04sTUFBUTtBQUFBLGNBQ1IsUUFBVTtBQUFBLFlBQ1o7QUFBQSxZQUNBO0FBQUEsY0FDRSxJQUFNO0FBQUEsY0FDTixNQUFRO0FBQUEsY0FDUixRQUFVO0FBQUEsWUFDWjtBQUFBLFlBQ0E7QUFBQSxjQUNFLElBQU07QUFBQSxjQUNOLE1BQVE7QUFBQSxjQUNSLFFBQVU7QUFBQSxZQUNaO0FBQUEsWUFDQTtBQUFBLGNBQ0UsSUFBTTtBQUFBLGNBQ04sTUFBUTtBQUFBLGNBQ1IsUUFBVTtBQUFBLFlBQ1o7QUFBQSxZQUNBO0FBQUEsY0FDRSxJQUFNO0FBQUEsY0FDTixNQUFRO0FBQUEsY0FDUixRQUFVO0FBQUEsWUFDWjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsSUFBTTtBQUFBLFVBQ04sT0FBUztBQUFBLFVBQ1QsU0FBVztBQUFBLFlBQ1Q7QUFBQSxjQUNFLElBQU07QUFBQSxjQUNOLE1BQVE7QUFBQSxjQUNSLFFBQVU7QUFBQSxZQUNaO0FBQUEsWUFDQTtBQUFBLGNBQ0UsSUFBTTtBQUFBLGNBQ04sTUFBUTtBQUFBLGNBQ1IsUUFBVTtBQUFBLFlBQ1o7QUFBQSxZQUNBO0FBQUEsY0FDRSxJQUFNO0FBQUEsY0FDTixNQUFRO0FBQUEsY0FDUixRQUFVO0FBQUEsWUFDWjtBQUFBLFlBQ0E7QUFBQSxjQUNFLElBQU07QUFBQSxjQUNOLE1BQVE7QUFBQSxjQUNSLFFBQVU7QUFBQSxZQUNaO0FBQUEsWUFDQTtBQUFBLGNBQ0UsSUFBTTtBQUFBLGNBQ04sTUFBUTtBQUFBLGNBQ1IsUUFBVTtBQUFBLFlBQ1o7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsSUFBTTtBQUFBLE1BQ04sTUFBUTtBQUFBLE1BQ1IsVUFBWTtBQUFBLFFBQ1Y7QUFBQSxVQUNFLElBQU07QUFBQSxVQUNOLE9BQVM7QUFBQSxVQUNULFNBQVc7QUFBQSxZQUNUO0FBQUEsY0FDRSxJQUFNO0FBQUEsY0FDTixNQUFRO0FBQUEsY0FDUixRQUFVO0FBQUEsWUFDWjtBQUFBLFlBQ0E7QUFBQSxjQUNFLElBQU07QUFBQSxjQUNOLE1BQVE7QUFBQSxjQUNSLFFBQVU7QUFBQSxZQUNaO0FBQUEsWUFDQTtBQUFBLGNBQ0UsSUFBTTtBQUFBLGNBQ04sTUFBUTtBQUFBLGNBQ1IsUUFBVTtBQUFBLFlBQ1o7QUFBQSxZQUNBO0FBQUEsY0FDRSxJQUFNO0FBQUEsY0FDTixNQUFRO0FBQUEsY0FDUixRQUFVO0FBQUEsWUFDWjtBQUFBLFlBQ0E7QUFBQSxjQUNFLElBQU07QUFBQSxjQUNOLE1BQVE7QUFBQSxjQUNSLFFBQVU7QUFBQSxZQUNaO0FBQUEsWUFDQTtBQUFBLGNBQ0UsSUFBTTtBQUFBLGNBQ04sTUFBUTtBQUFBLGNBQ1IsUUFBVTtBQUFBLFlBQ1o7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLElBQU07QUFBQSxVQUNOLE9BQVM7QUFBQSxVQUNULFNBQVc7QUFBQSxZQUNUO0FBQUEsY0FDRSxJQUFNO0FBQUEsY0FDTixNQUFRO0FBQUEsY0FDUixRQUFVO0FBQUEsWUFDWjtBQUFBLFlBQ0E7QUFBQSxjQUNFLElBQU07QUFBQSxjQUNOLE1BQVE7QUFBQSxjQUNSLFFBQVU7QUFBQSxZQUNaO0FBQUEsWUFDQTtBQUFBLGNBQ0UsSUFBTTtBQUFBLGNBQ04sTUFBUTtBQUFBLGNBQ1IsUUFBVTtBQUFBLFlBQ1o7QUFBQSxZQUNBO0FBQUEsY0FDRSxJQUFNO0FBQUEsY0FDTixNQUFRO0FBQUEsY0FDUixRQUFVO0FBQUEsWUFDWjtBQUFBLFlBQ0E7QUFBQSxjQUNFLElBQU07QUFBQSxjQUNOLE1BQVE7QUFBQSxjQUNSLFFBQVU7QUFBQSxZQUNaO0FBQUEsWUFDQTtBQUFBLGNBQ0UsSUFBTTtBQUFBLGNBQ04sTUFBUTtBQUFBLGNBQ1IsUUFBVTtBQUFBLFlBQ1o7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsSUFBTTtBQUFBLE1BQ04sTUFBUTtBQUFBLE1BQ1IsVUFBWTtBQUFBLFFBQ1Y7QUFBQSxVQUNFLElBQU07QUFBQSxVQUNOLE9BQVM7QUFBQSxVQUNULFNBQVc7QUFBQSxZQUNUO0FBQUEsY0FDRSxJQUFNO0FBQUEsY0FDTixNQUFRO0FBQUEsY0FDUixRQUFVO0FBQUEsWUFDWjtBQUFBLFlBQ0E7QUFBQSxjQUNFLElBQU07QUFBQSxjQUNOLE1BQVE7QUFBQSxjQUNSLFFBQVU7QUFBQSxZQUNaO0FBQUEsWUFDQTtBQUFBLGNBQ0UsSUFBTTtBQUFBLGNBQ04sTUFBUTtBQUFBLGNBQ1IsUUFBVTtBQUFBLFlBQ1o7QUFBQSxZQUNBO0FBQUEsY0FDRSxJQUFNO0FBQUEsY0FDTixNQUFRO0FBQUEsY0FDUixRQUFVO0FBQUEsWUFDWjtBQUFBLFlBQ0E7QUFBQSxjQUNFLElBQU07QUFBQSxjQUNOLE1BQVE7QUFBQSxjQUNSLFFBQVU7QUFBQSxZQUNaO0FBQUEsWUFDQTtBQUFBLGNBQ0UsSUFBTTtBQUFBLGNBQ04sTUFBUTtBQUFBLGNBQ1IsUUFBVTtBQUFBLFlBQ1o7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLElBQU07QUFBQSxVQUNOLE9BQVM7QUFBQSxVQUNULFNBQVc7QUFBQSxZQUNUO0FBQUEsY0FDRSxJQUFNO0FBQUEsY0FDTixNQUFRO0FBQUEsY0FDUixRQUFVO0FBQUEsWUFDWjtBQUFBLFlBQ0E7QUFBQSxjQUNFLElBQU07QUFBQSxjQUNOLE1BQVE7QUFBQSxjQUNSLFFBQVU7QUFBQSxZQUNaO0FBQUEsWUFDQTtBQUFBLGNBQ0UsSUFBTTtBQUFBLGNBQ04sTUFBUTtBQUFBLGNB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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QU4sY0FBK0JFLEdBQVc7QUFBQSxFQUV4QyxXQUFXLGFBQWE7QUFDdEIsV0FBTztBQUFBLE1BQ0wsT0FBVyxFQUFFLE1BQU0sT0FBTztBQUFBO0FBQUEsTUFDMUIsU0FBVyxFQUFFLE1BQU0sT0FBTztBQUFBO0FBQUEsTUFDMUIsV0FBVyxFQUFFLE1BQU0sUUFBUSxTQUFTLE1BQU0sV0FBVyxhQUFhO0FBQUEsSUFDcEU7QUFBQSxFQUNGO0FBQUEsRUFFQSxXQUFXLFNBQVM7QUFDbEIsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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SDVCLElBQU0sWUFBTjtBQXF2QkEsZUFBZSxPQUFPLGNBQWMsU0FBUztBQUU3QyxPQUFPLGNBQWMsT0FBTyxlQUFlLENBQUM7QUFDNUMsT0FBTyxZQUFZLEtBQUs7QUFBQSxFQUN0QixNQUFhO0FBQUEsRUFDYixNQUFhO0FBQUEsRUFDYixhQUFhO0FBQUEsRUFDYixTQUFhO0FBQ2YsQ0FBQzsiLAogICJuYW1lcyI6IFsiZ2xvYmFsIiwgImdsb2JhbFRoaXMiLCAic3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzIiwgIlNoYWRvd1Jvb3QiLCAiU2hhZHlDU1MiLCAibmF0aXZlU2hhZG93IiwgIkRvY3VtZW50IiwgInByb3RvdHlwZSIsICJDU1NTdHlsZVNoZWV0IiwgImNvbnN0cnVjdGlvblRva2VuIiwgIlN5bWJvbCIsICJjc3NUYWdDYWNoZSIsICJXZWFrTWFwIiwgIkNTU1Jlc3VsdCIsICJjc3NUZXh0IiwgInN0cmluZ3MiLCAic2FmZVRva2VuIiwgInRoaXMiLCAiRXJyb3IiLCAiX3N0cmluZ3MiLCAic3R5bGVTaGVldCIsICJfc3R5bGVTaGVldCIsICJjYWNoZWFibGUiLCAibGVuZ3RoIiwgImdldCIsICJyZXBsYWNlU3luYyIsICJzZXQiLCAidG9TdHJpbmciLCAidW5zYWZlQ1NTIiwgInZhbHVlIiwgIlN0cmluZyIsICJjc3MiLCAidmFsdWVzIiwgInJlZHVjZSIsICJhY2MiLCAidiIsICJpZHgiLCAiYWRvcHRTdHlsZXMiLCAicmVuZGVyUm9vdCIsICJzdHlsZXMiLCAiYWRvcHRlZFN0eWxlU2hlZXRzIiwgIm1hcCIsICJzIiwgInN0eWxlIiwgImRvY3VtZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAibm9uY2UiLCAic2V0QXR0cmlidXRlIiwgInRleHRDb250ZW50IiwgImFwcGVuZENoaWxkIiwgImdldENvbXBhdGlibGVTdHlsZSIsICJzaGVldCIsICJydWxlIiwgImNzc1J1bGVzIiwgImlzIiwgImRlZmluZVByb3BlcnR5IiwgImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsICJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwgImdldE93blByb3BlcnR5U3ltYm9scyIsICJnZXRQcm90b3R5cGVPZiIsICJPYmplY3QiLCAiZ2xvYmFsIiwgImdsb2JhbFRoaXMiLCAidHJ1c3RlZFR5cGVzIiwgImVtcHR5U3RyaW5nRm9yQm9vbGVhbkF0dHJpYnV0ZSIsICJlbXB0eVNjcmlwdCIsICJwb2x5ZmlsbFN1cHBvcnQiLCAicmVhY3RpdmVFbGVtZW50UG9seWZpbGxTdXBwb3J0IiwgIkpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkiLCAicHJvcCIsICJfb2JqIiwgImRlZmF1bHRDb252ZXJ0ZXIiLCAidmFsdWUiLCAidHlwZSIsICJCb29sZWFuIiwgIkFycmF5IiwgIkpTT04iLCAic3RyaW5naWZ5IiwgImZyb21WYWx1ZSIsICJOdW1iZXIiLCAicGFyc2UiLCAiZSIsICJub3RFcXVhbCIsICJvbGQiLCAiZGVmYXVsdFByb3BlcnR5RGVjbGFyYXRpb24iLCAiYXR0cmlidXRlIiwgIlN0cmluZyIsICJjb252ZXJ0ZXIiLCAicmVmbGVjdCIsICJ1c2VEZWZhdWx0IiwgImhhc0NoYW5nZWQiLCAiU3ltYm9sIiwgIm1ldGFkYXRhIiwgImxpdFByb3BlcnR5TWV0YWRhdGEiLCAiV2Vha01hcCIsICJSZWFjdGl2ZUVsZW1lbnQiLCAiSFRNTEVsZW1lbnQiLCAiaW5pdGlhbGl6ZXIiLCAidGhpcyIsICJfX3ByZXBhcmUiLCAiX2luaXRpYWxpemVycyIsICJwdXNoIiwgIm9ic2VydmVkQXR0cmlidXRlcyIsICJmaW5hbGl6ZSIsICJfX2F0dHJpYnV0ZVRvUHJvcGVydHlNYXAiLCAia2V5cyIsICJuYW1lIiwgIm9wdGlvbnMiLCAic3RhdGUiLCAicHJvdG90eXBlIiwgImhhc093blByb3BlcnR5IiwgImNyZWF0ZSIsICJ3cmFwcGVkIiwgImVsZW1lbnRQcm9wZXJ0aWVzIiwgInNldCIsICJub0FjY2Vzc29yIiwgImtleSIsICJkZXNjcmlwdG9yIiwgImdldFByb3BlcnR5RGVzY3JpcHRvciIsICJnZXQiLCAidiIsICJvbGRWYWx1ZSIsICJjYWxsIiwgInJlcXVlc3RVcGRhdGUiLCAiY29uZmlndXJhYmxlIiwgImVudW1lcmFibGUiLCAic3VwZXJDdG9yIiwgIk1hcCIsICJmaW5hbGl6ZWQiLCAicHJvcHMiLCAicHJvcGVydGllcyIsICJwcm9wS2V5cyIsICJwIiwgImNyZWF0ZVByb3BlcnR5IiwgImF0dHIiLCAiX19hdHRyaWJ1dGVOYW1lRm9yUHJvcGVydHkiLCAiZWxlbWVudFN0eWxlcyIsICJmaW5hbGl6ZVN0eWxlcyIsICJzdHlsZXMiLCAiaXNBcnJheSIsICJTZXQiLCAiZmxhdCIsICJJbmZpbml0eSIsICJyZXZlcnNlIiwgInMiLCAidW5zaGlmdCIsICJnZXRDb21wYXRpYmxlU3R5bGUiLCAidG9Mb3dlckNhc2UiLCAiY29uc3RydWN0b3IiLCAic3VwZXIiLCAiX19pbnN0YW5jZVByb3BlcnRpZXMiLCAiaXNVcGRhdGVQZW5kaW5nIiwgImhhc1VwZGF0ZWQiLCAiX19yZWZsZWN0aW5nUHJvcGVydHkiLCAiX19pbml0aWFsaXplIiwgIl9fdXBkYXRlUHJvbWlzZSIsICJQcm9taXNlIiwgInJlcyIsICJlbmFibGVVcGRhdGluZyIsICJfJGNoYW5nZWRQcm9wZXJ0aWVzIiwgIl9fc2F2ZUluc3RhbmNlUHJvcGVydGllcyIsICJmb3JFYWNoIiwgImkiLCAiY29udHJvbGxlciIsICJfX2NvbnRyb2xsZXJzIiwgImFkZCIsICJyZW5kZXJSb290IiwgImlzQ29ubmVjdGVkIiwgImhvc3RDb25uZWN0ZWQiLCAiZGVsZXRlIiwgImluc3RhbmNlUHJvcGVydGllcyIsICJzaXplIiwgImNyZWF0ZVJlbmRlclJvb3QiLCAic2hhZG93Um9vdCIsICJhdHRhY2hTaGFkb3ciLCAic2hhZG93Um9vdE9wdGlvbnMiLCAiYWRvcHRTdHlsZXMiLCAiY29ubmVjdGVkQ2FsbGJhY2siLCAiYyIsICJfcmVxdWVzdGVkVXBkYXRlIiwgImRpc2Nvbm5lY3RlZENhbGxiYWNrIiwgImhvc3REaXNjb25uZWN0ZWQiLCAiX29sZCIsICJfJGF0dHJpYnV0ZVRvUHJvcGVydHkiLCAiYXR0clZhbHVlIiwgInRvQXR0cmlidXRlIiwgInJlbW92ZUF0dHJpYnV0ZSIsICJzZXRBdHRyaWJ1dGUiLCAiY3RvciIsICJwcm9wTmFtZSIsICJnZXRQcm9wZXJ0eU9wdGlvbnMiLCAiZnJvbUF0dHJpYnV0ZSIsICJjb252ZXJ0ZWRWYWx1ZSIsICJfX2RlZmF1bHRWYWx1ZXMiLCAidXNlTmV3VmFsdWUiLCAibmV3VmFsdWUiLCAiaGFzQXR0cmlidXRlIiwgIl8kY2hhbmdlUHJvcGVydHkiLCAiX19lbnF1ZXVlVXBkYXRlIiwgImluaXRpYWxpemVWYWx1ZSIsICJoYXMiLCAiX19yZWZsZWN0aW5nUHJvcGVydGllcyIsICJyZWplY3QiLCAicmVzdWx0IiwgInNjaGVkdWxlVXBkYXRlIiwgInBlcmZvcm1VcGRhdGUiLCAic2hvdWxkVXBkYXRlIiwgImNoYW5nZWRQcm9wZXJ0aWVzIiwgIndpbGxVcGRhdGUiLCAiaG9zdFVwZGF0ZSIsICJ1cGRhdGUiLCAiX19tYXJrVXBkYXRlZCIsICJfJGRpZFVwZGF0ZSIsICJfY2hhbmdlZFByb3BlcnRpZXMiLCAiaG9zdFVwZGF0ZWQiLCAiZmlyc3RVcGRhdGVkIiwgInVwZGF0ZWQiLCAidXBkYXRlQ29tcGxldGUiLCAiZ2V0VXBkYXRlQ29tcGxldGUiLCAiX19wcm9wZXJ0eVRvQXR0cmlidXRlIiwgIm1vZGUiLCAicmVhY3RpdmVFbGVtZW50VmVyc2lvbnMiLCAiZ2xvYmFsIiwgImdsb2JhbFRoaXMiLCAid3JhcCIsICJub2RlIiwgInRydXN0ZWRUeXBlcyIsICJwb2xpY3kiLCAiY3JlYXRlUG9saWN5IiwgImNyZWF0ZUhUTUwiLCAicyIsICJib3VuZEF0dHJpYnV0ZVN1ZmZpeCIsICJtYXJrZXIiLCAiTWF0aCIsICJyYW5kb20iLCAidG9GaXhlZCIsICJzbGljZSIsICJtYXJrZXJNYXRjaCIsICJub2RlTWFya2VyIiwgImQiLCAiZG9jdW1lbnQiLCAiY3JlYXRlTWFya2VyIiwgImNyZWF0ZUNvbW1lbnQiLCAiaXNQcmltaXRpdmUiLCAidmFsdWUiLCAiaXNBcnJheSIsICJBcnJheSIsICJpc0l0ZXJhYmxlIiwgIlN5bWJvbCIsICJpdGVyYXRvciIsICJTUEFDRV9DSEFSIiwgInRleHRFbmRSZWdleCIsICJjb21tZW50RW5kUmVnZXgiLCAiY29tbWVudDJFbmRSZWdleCIsICJ0YWdFbmRSZWdleCIsICJSZWdFeHAiLCAic2luZ2xlUXVvdGVBdHRyRW5kUmVnZXgiLCAiZG91YmxlUXVvdGVBdHRyRW5kUmVnZXgiLCAicmF3VGV4dEVsZW1lbnQiLCAidGFnIiwgInR5cGUiLCAic3RyaW5ncyIsICJ2YWx1ZXMiLCAiXyRsaXRUeXBlJCIsICJodG1sIiwgInN2ZyIsICJtYXRobWwiLCAibm9DaGFuZ2UiLCAiZm9yIiwgIm5vdGhpbmciLCAidGVtcGxhdGVDYWNoZSIsICJXZWFrTWFwIiwgIndhbGtlciIsICJjcmVhdGVUcmVlV2Fsa2VyIiwgInRydXN0RnJvbVRlbXBsYXRlU3RyaW5nIiwgInRzYSIsICJzdHJpbmdGcm9tVFNBIiwgImhhc093blByb3BlcnR5IiwgIkVycm9yIiwgImdldFRlbXBsYXRlSHRtbCIsICJsIiwgImxlbmd0aCIsICJhdHRyTmFtZXMiLCAicmF3VGV4dEVuZFJlZ2V4IiwgInJlZ2V4IiwgImkiLCAiYXR0ck5hbWUiLCAibWF0Y2giLCAiYXR0ck5hbWVFbmRJbmRleCIsICJsYXN0SW5kZXgiLCAiZXhlYyIsICJ0ZXN0IiwgImVuZCIsICJzdGFydHNXaXRoIiwgInB1c2giLCAiVGVtcGxhdGUiLCAiY29uc3RydWN0b3IiLCAib3B0aW9ucyIsICJ0aGlzIiwgInBhcnRzIiwgIm5vZGVJbmRleCIsICJhdHRyTmFtZUluZGV4IiwgInBhcnRDb3VudCIsICJlbCIsICJjcmVhdGVFbGVtZW50IiwgImN1cnJlbnROb2RlIiwgImNvbnRlbnQiLCAid3JhcHBlciIsICJmaXJzdENoaWxkIiwgInJlcGxhY2VXaXRoIiwgImNoaWxkTm9kZXMiLCAibmV4dE5vZGUiLCAibm9kZVR5cGUiLCAiaGFzQXR0cmlidXRlcyIsICJuYW1lIiwgImdldEF0dHJpYnV0ZU5hbWVzIiwgImVuZHNXaXRoIiwgInJlYWxOYW1lIiwgInN0YXRpY3MiLCAiZ2V0QXR0cmlidXRlIiwgInNwbGl0IiwgIm0iLCAiaW5kZXgiLCAiY3RvciIsICJQcm9wZXJ0eVBhcnQiLCAiQm9vbGVhbkF0dHJpYnV0ZVBhcnQiLCAiRXZlbnRQYXJ0IiwgIkF0dHJpYnV0ZVBhcnQiLCAicmVtb3ZlQXR0cmlidXRlIiwgInRhZ05hbWUiLCAidGV4dENvbnRlbnQiLCAiZW1wdHlTY3JpcHQiLCAiYXBwZW5kIiwgImRhdGEiLCAiaW5kZXhPZiIsICJfb3B0aW9ucyIsICJpbm5lckhUTUwiLCAicmVzb2x2ZURpcmVjdGl2ZSIsICJwYXJ0IiwgInBhcmVudCIsICJhdHRyaWJ1dGVJbmRleCIsICJjdXJyZW50RGlyZWN0aXZlIiwgIl9fZGlyZWN0aXZlcyIsICJfX2RpcmVjdGl2ZSIsICJuZXh0RGlyZWN0aXZlQ29uc3RydWN0b3IiLCAiXyRpbml0aWFsaXplIiwgIl8kcmVzb2x2ZSIsICJUZW1wbGF0ZUluc3RhbmNlIiwgInRlbXBsYXRlIiwgIl8kcGFydHMiLCAiXyRkaXNjb25uZWN0YWJsZUNoaWxkcmVuIiwgIl8kdGVtcGxhdGUiLCAiXyRwYXJlbnQiLCAicGFyZW50Tm9kZSIsICJfJGlzQ29ubmVjdGVkIiwgImZyYWdtZW50IiwgImNyZWF0aW9uU2NvcGUiLCAiaW1wb3J0Tm9kZSIsICJwYXJ0SW5kZXgiLCAidGVtcGxhdGVQYXJ0IiwgIkNoaWxkUGFydCIsICJuZXh0U2libGluZyIsICJFbGVtZW50UGFydCIsICJfJHNldFZhbHVlIiwgIl9faXNDb25uZWN0ZWQiLCAic3RhcnROb2RlIiwgImVuZE5vZGUiLCAiXyRjb21taXR0ZWRWYWx1ZSIsICJfJHN0YXJ0Tm9kZSIsICJfJGVuZE5vZGUiLCAiaXNDb25uZWN0ZWQiLCAiZGlyZWN0aXZlUGFyZW50IiwgIl8kY2xlYXIiLCAiX2NvbW1pdFRleHQiLCAiX2NvbW1pdFRlbXBsYXRlUmVzdWx0IiwgIl9jb21taXROb2RlIiwgIl9jb21taXRJdGVyYWJsZSIsICJpbnNlcnRCZWZvcmUiLCAiX2luc2VydCIsICJjcmVhdGVUZXh0Tm9kZSIsICJyZXN1bHQiLCAiXyRnZXRUZW1wbGF0ZSIsICJoIiwgIl91cGRhdGUiLCAiaW5zdGFuY2UiLCAiX2Nsb25lIiwgImdldCIsICJzZXQiLCAiaXRlbVBhcnRzIiwgIml0ZW1QYXJ0IiwgIml0ZW0iLCAic3RhcnQiLCAiZnJvbSIsICJfJG5vdGlmeUNvbm5lY3Rpb25DaGFuZ2VkIiwgIm4iLCAicmVtb3ZlIiwgImVsZW1lbnQiLCAiZmlsbCIsICJTdHJpbmciLCAidmFsdWVJbmRleCIsICJub0NvbW1pdCIsICJjaGFuZ2UiLCAidiIsICJfY29tbWl0VmFsdWUiLCAic2V0QXR0cmlidXRlIiwgInRvZ2dsZUF0dHJpYnV0ZSIsICJzdXBlciIsICJuZXdMaXN0ZW5lciIsICJvbGRMaXN0ZW5lciIsICJzaG91bGRSZW1vdmVMaXN0ZW5lciIsICJjYXB0dXJlIiwgIm9uY2UiLCAicGFzc2l2ZSIsICJzaG91bGRBZGRMaXN0ZW5lciIsICJyZW1vdmVFdmVudExpc3RlbmVyIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiZXZlbnQiLCAiY2FsbCIsICJob3N0IiwgImhhbmRsZUV2ZW50IiwgInBvbHlmaWxsU3VwcG9ydCIsICJnbG9iYWwiLCAibGl0SHRtbFBvbHlmaWxsU3VwcG9ydCIsICJUZW1wbGF0ZSIsICJDaGlsZFBhcnQiLCAibGl0SHRtbFZlcnNpb25zIiwgInB1c2giLCAicmVuZGVyIiwgInZhbHVlIiwgImNvbnRhaW5lciIsICJvcHRpb25zIiwgInBhcnRPd25lck5vZGUiLCAicmVuZGVyQmVmb3JlIiwgInBhcnQiLCAiZW5kTm9kZSIsICJpbnNlcnRCZWZvcmUiLCAiY3JlYXRlTWFya2VyIiwgIl8kc2V0VmFsdWUiLCAiZ2xvYmFsIiwgImdsb2JhbFRoaXMiLCAiTGl0RWxlbWVudCIsICJSZWFjdGl2ZUVsZW1lbnQiLCAiY29uc3RydWN0b3IiLCAidGhpcyIsICJyZW5kZXJPcHRpb25zIiwgImhvc3QiLCAiX19jaGlsZFBhcnQiLCAiY3JlYXRlUmVuZGVyUm9vdCIsICJyZW5kZXJSb290IiwgInN1cGVyIiwgInJlbmRlckJlZm9yZSIsICJmaXJzdENoaWxkIiwgImNoYW5nZWRQcm9wZXJ0aWVzIiwgInZhbHVlIiwgInJlbmRlciIsICJoYXNVcGRhdGVkIiwgImlzQ29ubmVjdGVkIiwgInVwZGF0ZSIsICJjb25uZWN0ZWRDYWxsYmFjayIsICJzZXRDb25uZWN0ZWQiLCAiZGlzY29ubmVjdGVkQ2FsbGJhY2siLCAibm9DaGFuZ2UiLCAibGl0RWxlbWVudEh5ZHJhdGVTdXBwb3J0IiwgInBvbHlmaWxsU3VwcG9ydCIsICJsaXRFbGVtZW50UG9seWZpbGxTdXBwb3J0IiwgImdsb2JhbCIsICJsaXRFbGVtZW50VmVyc2lvbnMiLCAicHVzaCIsICJQYXJ0VHlwZSIsICJBVFRSSUJVVEUiLCAiQ0hJTEQiLCAiUFJPUEVSVFkiLCAiQk9PTEVBTl9BVFRSSUJVVEUiLCAiRVZFTlQiLCAiRUxFTUVOVCIsICJkaXJlY3RpdmUiLCAiYyIsICJ2YWx1ZXMiLCAiXyRsaXREaXJlY3RpdmUkIiwgIkRpcmVjdGl2ZSIsICJfcGFydEluZm8iLCAiXyRpc0Nvbm5lY3RlZCIsICJ0aGlzIiwgIl8kcGFyZW50IiwgInBhcnQiLCAicGFyZW50IiwgImF0dHJpYnV0ZUluZGV4IiwgIl9fcGFydCIsICJfX2F0dHJpYnV0ZUluZGV4IiwgInByb3BzIiwgInVwZGF0ZSIsICJfcGFydCIsICJyZW5kZXIiLCAiVW5zYWZlSFRNTERpcmVjdGl2ZSIsICJEaXJlY3RpdmUiLCAicGFydEluZm8iLCAic3VwZXIiLCAidGhpcyIsICJfdmFsdWUiLCAibm90aGluZyIsICJ0eXBlIiwgIlBhcnRUeXBlIiwgIkNISUxEIiwgIkVycm9yIiwgImNvbnN0cnVjdG9yIiwgImRpcmVjdGl2ZU5hbWUiLCAidmFsdWUiLCAiX3RlbXBsYXRlUmVzdWx0IiwgIm5vQ2hhbmdlIiwgInN0cmluZ3MiLCAicmF3IiwgIl8kbGl0VHlwZSQiLCAicmVzdWx0VHlwZSIsICJ2YWx1ZXMiLCAidW5zYWZlSFRNTCIsICJkaXJlY3RpdmUiLCAibSIsICJ2IiwgImMiLCAibSIsICJ2IiwgImMiLCAibSIsICJpIiwgImIiLCAibSIsICJ2IiwgImkiLCAidCIsICJhIiwgInYiLCAiZiIsICJjIiwgImUiLCAidiIsICJlIiwgImIiLCAibyIsICJuIiwgImIiLCAibyIsICJiIiwgIm8iLCAiaSIsICJlIiwgImIiLCAibyIsICJpIiwgImUiLCAiYiIsICJvIiwgIm0iLCAidiIsICJpIiwgImUiLCAiZiIsICJjIiwgInQiLCAiYSIsICJtIiwgImIiLCAicyIsICJ2IiwgIm8iXQp9Cg==

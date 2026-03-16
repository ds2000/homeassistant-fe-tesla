var Xe=Object.defineProperty;var Je=(a,t,e)=>t in a?Xe(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var pt=(a,t,e)=>Je(a,typeof t!="symbol"?t+"":t,e);var mt=globalThis,ut=mt.ShadowRoot&&(mt.ShadyCSS===void 0||mt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Tt=Symbol(),ce=new WeakMap,K=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Tt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(ut&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=ce.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ce.set(e,t))}return t}toString(){return this.cssText}},he=a=>new K(typeof a=="string"?a:a+"",void 0,Tt),y=(a,...t)=>{let e=a.length===1?a[0]:t.reduce((i,s,n)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+a[n+1],a[0]);return new K(e,a,Tt)},de=(a,t)=>{if(ut)a.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let i=document.createElement("style"),s=mt.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,a.appendChild(i)}},Mt=ut?a=>a:a=>a instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return he(e)})(a):a;var{is:ti,defineProperty:ei,getOwnPropertyDescriptor:ii,getOwnPropertyNames:si,getOwnPropertySymbols:ai,getPrototypeOf:ni}=Object,S=globalThis,pe=S.trustedTypes,ri=pe?pe.emptyScript:"",oi=S.reactiveElementPolyfillSupport,Y=(a,t)=>a,Nt={toAttribute(a,t){switch(t){case Boolean:a=a?ri:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,t){let e=a;switch(t){case Boolean:e=a!==null;break;case Number:e=a===null?null:Number(a);break;case Object:case Array:try{e=JSON.parse(a)}catch{e=null}}return e}},ue=(a,t)=>!ti(a,t),me={attribute:!0,type:String,converter:Nt,reflect:!1,useDefault:!1,hasChanged:ue};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),S.litPropertyMetadata??(S.litPropertyMetadata=new WeakMap);var A=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=me){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&ei(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){let{get:s,set:n}=ii(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get:s,set(r){let d=s?.call(this);n?.call(this,r),this.requestUpdate(t,d,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??me}static _$Ei(){if(this.hasOwnProperty(Y("elementProperties")))return;let t=ni(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Y("properties"))){let e=this.properties,i=[...si(e),...ai(e)];for(let s of i)this.createProperty(s,e[s])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let s of i)e.unshift(Mt(s))}else t!==void 0&&e.push(Mt(t));return e}static _$Eu(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return de(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){let n=(i.converter?.toAttribute!==void 0?i.converter:Nt).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){let i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){let n=i.getPropertyOptions(s),r=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:Nt;this._$Em=s;let d=r.fromAttribute(e,n.type);this[s]=d??this._$Ej?.get(s)??d,this._$Em=null}}requestUpdate(t,e,i,s=!1,n){if(t!==void 0){let r=this.constructor;if(s===!1&&(n=this[t]),i??(i=r.getPropertyOptions(t)),!((i.hasChanged??ue)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},r){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,r??e??this[t]),n!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[s,n]of i){let{wrapped:r}=n,d=this[s];r!==!0||this._$AL.has(s)||d===void 0||this.C(s,void 0,n,d)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[Y("elementProperties")]=new Map,A[Y("finalized")]=new Map,oi?.({ReactiveElement:A}),(S.reactiveElementVersions??(S.reactiveElementVersions=[])).push("2.1.2");var Z=globalThis,ge=a=>a,gt=Z.trustedTypes,_e=gt?gt.createPolicy("lit-html",{createHTML:a=>a}):void 0,ye="$lit$",O=`lit$${Math.random().toFixed(9).slice(2)}$`,ke="?"+O,li=`<${ke}>`,H=document,X=()=>H.createComment(""),J=a=>a===null||typeof a!="object"&&typeof a!="function",Gt=Array.isArray,ci=a=>Gt(a)||typeof a?.[Symbol.iterator]=="function",Lt=`[ 	
\f\r]`,q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fe=/-->/g,be=/>/g,I=RegExp(`>|${Lt}(?:([^\\s"'>=/]+)(${Lt}*=${Lt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ve=/'/g,Ee=/"/g,we=/^(?:script|style|textarea|title)$/i,zt=a=>(t,...e)=>({_$litType$:a,strings:t,values:e}),o=zt(1),Si=zt(2),Oi=zt(3),R=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),xe=new WeakMap,D=H.createTreeWalker(H,129);function Ae(a,t){if(!Gt(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return _e!==void 0?_e.createHTML(t):t}var hi=(a,t)=>{let e=a.length-1,i=[],s,n=t===2?"<svg>":t===3?"<math>":"",r=q;for(let d=0;d<e;d++){let h=a[d],g,m,u=-1,_=0;for(;_<h.length&&(r.lastIndex=_,m=r.exec(h),m!==null);)_=r.lastIndex,r===q?m[1]==="!--"?r=fe:m[1]!==void 0?r=be:m[2]!==void 0?(we.test(m[2])&&(s=RegExp("</"+m[2],"g")),r=I):m[3]!==void 0&&(r=I):r===I?m[0]===">"?(r=s??q,u=-1):m[1]===void 0?u=-2:(u=r.lastIndex-m[2].length,g=m[1],r=m[3]===void 0?I:m[3]==='"'?Ee:ve):r===Ee||r===ve?r=I:r===fe||r===be?r=q:(r=I,s=void 0);let v=r===I&&a[d+1].startsWith("/>")?" ":"";n+=r===q?h+li:u>=0?(i.push(g),h.slice(0,u)+ye+h.slice(u)+O+v):h+O+(u===-2?d:v)}return[Ae(a,n+(a[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},tt=class a{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0,d=t.length-1,h=this.parts,[g,m]=hi(t,e);if(this.el=a.createElement(g,i),D.currentNode=this.el.content,e===2||e===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(s=D.nextNode())!==null&&h.length<d;){if(s.nodeType===1){if(s.hasAttributes())for(let u of s.getAttributeNames())if(u.endsWith(ye)){let _=m[r++],v=s.getAttribute(u).split(O),k=/([.?@])?(.*)/.exec(_);h.push({type:1,index:n,name:k[2],strings:v,ctor:k[1]==="."?Dt:k[1]==="?"?Ht:k[1]==="@"?Pt:z}),s.removeAttribute(u)}else u.startsWith(O)&&(h.push({type:6,index:n}),s.removeAttribute(u));if(we.test(s.tagName)){let u=s.textContent.split(O),_=u.length-1;if(_>0){s.textContent=gt?gt.emptyScript:"";for(let v=0;v<_;v++)s.append(u[v],X()),D.nextNode(),h.push({type:2,index:++n});s.append(u[_],X())}}}else if(s.nodeType===8)if(s.data===ke)h.push({type:2,index:n});else{let u=-1;for(;(u=s.data.indexOf(O,u+1))!==-1;)h.push({type:7,index:n}),u+=O.length-1}n++}}static createElement(t,e){let i=H.createElement("template");return i.innerHTML=t,i}};function G(a,t,e=a,i){if(t===R)return t;let s=i!==void 0?e._$Co?.[i]:e._$Cl,n=J(t)?void 0:t._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),n===void 0?s=void 0:(s=new n(a),s._$AT(a,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=G(a,s._$AS(a,t.values),s,i)),t}var It=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??H).importNode(e,!0);D.currentNode=s;let n=D.nextNode(),r=0,d=0,h=i[0];for(;h!==void 0;){if(r===h.index){let g;h.type===2?g=new et(n,n.nextSibling,this,t):h.type===1?g=new h.ctor(n,h.name,h.strings,this,t):h.type===6&&(g=new Ut(n,this,t)),this._$AV.push(g),h=i[++d]}r!==h?.index&&(n=D.nextNode(),r++)}return D.currentNode=H,s}p(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},et=class a{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),J(t)?t===f||t==null||t===""?(this._$AH!==f&&this._$AR(),this._$AH=f):t!==this._$AH&&t!==R&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ci(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==f&&J(this._$AH)?this._$AA.nextSibling.data=t:this.T(H.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=tt.createElement(Ae(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{let n=new It(s,this),r=n.u(this.options);n.p(e),this.T(r),this._$AH=n}}_$AC(t){let e=xe.get(t.strings);return e===void 0&&xe.set(t.strings,e=new tt(t)),e}k(t){Gt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let n of t)s===e.length?e.push(i=new a(this.O(X()),this.O(X()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let i=ge(t).nextSibling;ge(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},z=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=f,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=f}_$AI(t,e=this,i,s){let n=this.strings,r=!1;if(n===void 0)t=G(this,t,e,0),r=!J(t)||t!==this._$AH&&t!==R,r&&(this._$AH=t);else{let d=t,h,g;for(t=n[0],h=0;h<n.length-1;h++)g=G(this,d[i+h],e,h),g===R&&(g=this._$AH[h]),r||(r=!J(g)||g!==this._$AH[h]),g===f?t=f:t!==f&&(t+=(g??"")+n[h+1]),this._$AH[h]=g}r&&!s&&this.j(t)}j(t){t===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Dt=class extends z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===f?void 0:t}},Ht=class extends z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==f)}},Pt=class extends z{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??f)===R)return;let i=this._$AH,s=t===f&&i!==f||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==f&&(i===f||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Ut=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}};var di=Z.litHtmlPolyfillSupport;di?.(tt,et),(Z.litHtmlVersions??(Z.litHtmlVersions=[])).push("3.3.2");var Re=(a,t,e)=>{let i=e?.renderBefore??t,s=i._$litPart$;if(s===void 0){let n=e?.renderBefore??null;i._$litPart$=s=new et(t.insertBefore(X(),n),n,void 0,e??{})}return s._$AI(a),s};var it=globalThis,E=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Re(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return R}};E._$litElement$=!0,E.finalized=!0,it.litElementHydrateSupport?.({LitElement:E});var pi=it.litElementPolyfillSupport;pi?.({LitElement:E});(it.litElementVersions??(it.litElementVersions=[])).push("4.2.2");var $e={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ce=a=>(...t)=>({_$litDirective$:a,values:t}),_t=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var st=class extends _t{constructor(t){if(super(t),this.it=f,t.type!==$e.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===f||t==null)return this._t=void 0,this.it=t;if(t===R)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};st.directiveName="unsafeHTML",st.resultType=1;var c=Ce(st);var T=y`
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
`,Se=y`
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

`,Oe=y`
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

`,Te=y`
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


`,Me=y`
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

  .battery-fill-small.high     { background: #ffffff; }
  .battery-fill-small.medium   { background: #f39c12; }
  .battery-fill-small.low      { background: #e82127; }
  .battery-fill-small.charging { background: #3dd68c; }

  .range-text {
    font-size: 0.88em;
    font-weight: 500;
    color: rgba(255,255,255,0.8);
  }

  .battery-summary.charging .range-text { color: #3dd68c; font-weight: 600; }

  .charging-bolt {
    width: 16px;
    height: 16px;
    color: #3dd68c;
    margin-left: 2px;
  }

  .charging-status {
    color: rgba(255,255,255,0.45);
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
  .quick-btn.q-unlocked { color: #ffffff; }
  .quick-btn.q-active   { color: #ffffff; }    /* on state (charging, climate) */
  .quick-btn.q-climate-on .icon { animation: gentle-spin 6s linear infinite; }

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

  .nav-row.active .nav-icon { color: #ffffff; animation: gentle-spin 6s linear infinite; }

  @keyframes gentle-spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }

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

  .nav-row.active .nav-sublabel { color: rgba(255,255,255,0.55); }

  .nav-chevron {
    width: 18px;
    height: 18px;
    color: rgba(255,255,255,0.2);
    transition: transform 0.2s ease, color 0.15s ease;
  }

  .nav-row.active .nav-chevron {
    color: rgba(255,255,255,0.2);
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
`;var at={BATTERY_LEVEL:"sensor.{car_name}_battery_level",BATTERY_RANGE:"sensor.{car_name}_battery_range",CHARGE_RATE:"sensor.{car_name}_charge_rate",CHARGE_LIMIT:"number.{car_name}_charge_limit",CHARGING_STATE:"sensor.{car_name}_charging",TEMPERATURE_INSIDE:"sensor.{car_name}_inside_temperature",TEMPERATURE_OUTSIDE:"sensor.{car_name}_outside_temperature",SPEED:"sensor.{car_name}_speed",ODOMETER:"sensor.{car_name}_odometer",CHARGING:"switch.{car_name}_charge",PLUGGED_IN:"binary_sensor.{car_name}_charge_cable",PARKING_BRAKE:null,FRUNK:null,TRUNK:null,DOORS:null,WINDOWS:null,LOCKED:null,ONLINE:"binary_sensor.{car_name}_status",SENTRY_MODE:"switch.{car_name}_sentry_mode",DOOR_DRIVER_FRONT:"binary_sensor.{car_name}_front_driver_door",DOOR_DRIVER_REAR:"binary_sensor.{car_name}_rear_driver_door",DOOR_PASSENGER_FRONT:"binary_sensor.{car_name}_front_passenger_door",DOOR_PASSENGER_REAR:"binary_sensor.{car_name}_rear_passenger_door",WINDOW_DRIVER_FRONT:"binary_sensor.{car_name}_front_driver_window",WINDOW_DRIVER_REAR:"binary_sensor.{car_name}_rear_driver_window",WINDOW_PASSENGER_FRONT:"binary_sensor.{car_name}_front_passenger_window",WINDOW_PASSENGER_REAR:"binary_sensor.{car_name}_rear_passenger_window",DOOR_LOCK:"lock.{car_name}_lock",CHARGER_SWITCH:"switch.{car_name}_charge",SENTRY_MODE_SWITCH:"switch.{car_name}_sentry_mode",DEFROST_SWITCH:"switch.{car_name}_defrost",CAMP_MODE:null,DOG_MODE:null,CABIN_OVERHEAT:"climate.{car_name}_cabin_overheat_protection",HEATED_SEAT_LEFT:"select.{car_name}_seat_heater_front_left",HEATED_SEAT_RIGHT:"select.{car_name}_seat_heater_front_right",HEATED_SEAT_REAR_LEFT:"select.{car_name}_seat_heater_rear_left",HEATED_SEAT_REAR_CENTER:"select.{car_name}_seat_heater_rear_center",HEATED_SEAT_REAR_RIGHT:"select.{car_name}_seat_heater_rear_right",CLIMATE:"climate.{car_name}_climate",CHARGE_LIMIT_NUMBER:"number.{car_name}_charge_limit",CHARGING_AMPS_NUMBER:"number.{car_name}_charge_current",CHARGE_PORT_OPEN:"cover.{car_name}_charge_port_door",CHARGE_PORT_CLOSE:"cover.{car_name}_charge_port_door",HORN:"button.{car_name}_honk_horn",FLASH_LIGHTS:"button.{car_name}_flash_lights",REMOTE_START:"button.{car_name}_keyless_driving",OPEN_FRUNK:"cover.{car_name}_froot",OPEN_TRUNK:"cover.{car_name}_boot",FORCE_UPDATE:"button.{car_name}_wake",WINDOWS_COVER:"cover.{car_name}_vent_windows",FRUNK_COVER:"cover.{car_name}_froot",CHARGER_DOOR:"cover.{car_name}_charge_port_door",ENERGY_ADDED:"sensor.{car_name}_charge_energy_added",TIME_TO_FULL_CHARGE:"sensor.{car_name}_time_to_full_charge",LOCATION:"device_tracker.{car_name}_location"},mi={BATTERY_LEVEL:"sensor.{car_name}_battery",BATTERY_RANGE:"sensor.{car_name}_battery_range",CHARGE_RATE:"sensor.{car_name}_charge_rate",CHARGE_LIMIT:"sensor.{car_name}_charge_limit",CHARGING_STATE:"sensor.{car_name}_charging_state",TEMPERATURE_INSIDE:"sensor.{car_name}_temperature_inside",TEMPERATURE_OUTSIDE:"sensor.{car_name}_temperature_outside",SPEED:"sensor.{car_name}_speed",ODOMETER:"sensor.{car_name}_odometer",CHARGING:"binary_sensor.{car_name}_charging",PLUGGED_IN:"binary_sensor.{car_name}_plugged_in",PARKING_BRAKE:"binary_sensor.{car_name}_parking_brake",FRUNK:"binary_sensor.{car_name}_frunk",TRUNK:"binary_sensor.{car_name}_trunk",DOORS:"binary_sensor.{car_name}_doors",WINDOWS:"binary_sensor.{car_name}_windows",LOCKED:"binary_sensor.{car_name}_locked",ONLINE:"binary_sensor.{car_name}_online",SENTRY_MODE:"binary_sensor.{car_name}_sentry_mode",DOOR_DRIVER_FRONT:null,DOOR_DRIVER_REAR:null,DOOR_PASSENGER_FRONT:null,DOOR_PASSENGER_REAR:null,WINDOW_DRIVER_FRONT:null,WINDOW_DRIVER_REAR:null,WINDOW_PASSENGER_FRONT:null,WINDOW_PASSENGER_REAR:null,DOOR_LOCK:"lock.{car_name}_doors",CHARGER_SWITCH:"switch.{car_name}_charger",SENTRY_MODE_SWITCH:"switch.{car_name}_sentry_mode",DEFROST_SWITCH:"switch.{car_name}_defrost",CAMP_MODE:"switch.{car_name}_camp_mode",DOG_MODE:"switch.{car_name}_dog_mode",CABIN_OVERHEAT:"select.{car_name}_cabin_overheat_protection",HEATED_SEAT_LEFT:"select.{car_name}_heated_seat_left",HEATED_SEAT_RIGHT:"select.{car_name}_heated_seat_right",HEATED_SEAT_REAR_LEFT:"select.{car_name}_heated_seat_rear_left",HEATED_SEAT_REAR_CENTER:"select.{car_name}_heated_seat_rear_center",HEATED_SEAT_REAR_RIGHT:"select.{car_name}_heated_seat_rear_right",CLIMATE:"climate.{car_name}_hvac_climate_system",CHARGE_LIMIT_NUMBER:"number.{car_name}_charge_limit",CHARGING_AMPS_NUMBER:"number.{car_name}_charging_amps",CHARGE_PORT_OPEN:"button.{car_name}_charge_port_open",CHARGE_PORT_CLOSE:"button.{car_name}_charge_port_close",HORN:"button.{car_name}_horn",FLASH_LIGHTS:"button.{car_name}_flash_lights",REMOTE_START:"button.{car_name}_remote_start",OPEN_FRUNK:"button.{car_name}_frunk",OPEN_TRUNK:"button.{car_name}_trunk",FORCE_UPDATE:"button.{car_name}_force_data_update",WINDOWS_COVER:"cover.{car_name}_windows",FRUNK_COVER:"cover.{car_name}_frunk",CHARGER_DOOR:"cover.{car_name}_charger_door",ENERGY_ADDED:"sensor.{car_name}_energy_added",TIME_TO_FULL_CHARGE:"sensor.{car_name}_time_to_full_charge",LOCATION:"device_tracker.{car_name}_location_tracker"},ui={fleet:at,custom:mi},Bt=[{label:"Sensors",keys:[{key:"BATTERY_LEVEL",label:"Battery Level",domain:"sensor"},{key:"BATTERY_RANGE",label:"Battery Range",domain:"sensor"},{key:"CHARGING_STATE",label:"Charging State",domain:"sensor"},{key:"CHARGE_RATE",label:"Charge Rate",domain:"sensor"},{key:"TEMPERATURE_INSIDE",label:"Inside Temperature",domain:"sensor"},{key:"TEMPERATURE_OUTSIDE",label:"Outside Temperature",domain:"sensor"},{key:"SPEED",label:"Speed",domain:"sensor"},{key:"ODOMETER",label:"Odometer",domain:"sensor"},{key:"ENERGY_ADDED",label:"Energy Added",domain:"sensor"}]},{label:"Status",keys:[{key:"ONLINE",label:"Online Status",domain:"binary_sensor"},{key:"PLUGGED_IN",label:"Plugged In",domain:"binary_sensor"},{key:"CHARGING",label:"Charge Switch",domain:"switch"},{key:"SENTRY_MODE",label:"Sentry Mode",domain:"switch"}]},{label:"Doors",keys:[{key:"DOOR_DRIVER_FRONT",label:"Driver Front",domain:"binary_sensor"},{key:"DOOR_DRIVER_REAR",label:"Driver Rear",domain:"binary_sensor"},{key:"DOOR_PASSENGER_FRONT",label:"Passenger Front",domain:"binary_sensor"},{key:"DOOR_PASSENGER_REAR",label:"Passenger Rear",domain:"binary_sensor"}]},{label:"Windows",keys:[{key:"WINDOW_DRIVER_FRONT",label:"Driver Front",domain:"binary_sensor"},{key:"WINDOW_DRIVER_REAR",label:"Driver Rear",domain:"binary_sensor"},{key:"WINDOW_PASSENGER_FRONT",label:"Passenger Front",domain:"binary_sensor"},{key:"WINDOW_PASSENGER_REAR",label:"Passenger Rear",domain:"binary_sensor"}]},{label:"Lock",keys:[{key:"DOOR_LOCK",label:"Door Lock",domain:"lock"}]},{label:"Climate",keys:[{key:"CLIMATE",label:"Climate",domain:"climate"},{key:"DEFROST_SWITCH",label:"Defrost",domain:"switch"},{key:"HEATED_SEAT_LEFT",label:"Heated Seat Front Left",domain:"select"},{key:"HEATED_SEAT_RIGHT",label:"Heated Seat Front Right",domain:"select"},{key:"HEATED_SEAT_REAR_LEFT",label:"Heated Seat Rear Left",domain:"select"},{key:"HEATED_SEAT_REAR_CENTER",label:"Heated Seat Rear Center",domain:"select"},{key:"HEATED_SEAT_REAR_RIGHT",label:"Heated Seat Rear Right",domain:"select"},{key:"CABIN_OVERHEAT",label:"Cabin Overheat Protection",domain:"climate"},{key:"WINDOWS_COVER",label:"Windows (vent/close)",domain:"cover"}]},{label:"Charging",keys:[{key:"CHARGE_LIMIT_NUMBER",label:"Charge Limit",domain:"number"},{key:"CHARGING_AMPS_NUMBER",label:"Charging Amps",domain:"number"},{key:"CHARGER_DOOR",label:"Charge Port Door",domain:"cover"}]},{label:"Covers & Buttons",keys:[{key:"OPEN_FRUNK",label:"Frunk",domain:"cover"},{key:"OPEN_TRUNK",label:"Trunk",domain:"cover"},{key:"HORN",label:"Horn",domain:"button"},{key:"FLASH_LIGHTS",label:"Flash Lights",domain:"button"},{key:"REMOTE_START",label:"Remote Start",domain:"button"},{key:"FORCE_UPDATE",label:"Wake / Refresh",domain:"button"}]},{label:"Location",keys:[{key:"LOCATION",label:"Location Tracker",domain:"device_tracker"}]}],Ne={CHARGER_SWITCH:"CHARGING",SENTRY_MODE_SWITCH:"SENTRY_MODE",FRUNK_COVER:"OPEN_FRUNK",CHARGE_LIMIT:"CHARGE_LIMIT_NUMBER",CHARGE_PORT_OPEN:"CHARGER_DOOR",CHARGE_PORT_CLOSE:"CHARGER_DOOR"},gi=new Set(Bt.flatMap(a=>a.keys.map(t=>t.key))),ft={};for(let[a,t]of Object.entries(at))t&&gi.has(a)&&(ft[t]=a);for(let[a,t]of Object.entries(at))t&&!ft[t]&&(ft[t]=a);function bt(a="fleet"){return a==="entities"?at:ui[a]||at}function vt(a,t,e){if(!a)return null;if(e){let i=ft[a];if(i&&!e[i]&&Ne[i]&&(i=Ne[i]),i&&e[i])return e[i]}return a.replace("{car_name}",(t??"").toLowerCase())}var l={lock:`<svg viewBox="24 13 54 67" fill="currentColor" stroke="none">
    <path fill-rule="evenodd" d="
      M 51.01 15.62 C 60.29 15.63 67.36 22.81 67.39 32.00 Q 67.40 35.66 67.40 38.23 A 0.67 0.67 0.0 0 0 67.91 38.89 C 71.02 39.64 73.19 39.67 74.78 42.99 Q 75.53 44.58 75.53 49.12 Q 75.51 69.54 75.50 69.97 Q 75.34 74.60 72.13 76.54 Q 70.63 77.45 64.65 77.48 Q 57.83 77.51 50.99 77.50 Q 44.15 77.50 37.32 77.47 Q 31.35 77.44 29.85 76.52 Q 26.64 74.58 26.48 69.95 Q 26.47 69.52 26.47 49.10 Q 26.47 44.56 27.22 42.97 C 28.81 39.65 30.98 39.63 34.09 38.88 A 0.67 0.67 0.0 0 0 34.60 38.22 Q 34.61 35.65 34.62 31.99 C 34.65 22.80 41.74 15.62 51.01 15.62 Z
      M 39.95 39.00 L 62.05 39.00 A 0.57 0.57 0.0 0 0 62.62 38.43 L 62.62 32.80 A 12.30 11.49 90.0 0 0 51.13 20.50 L 50.87 20.50 A 12.30 11.49 -90.0 0 0 39.38 32.80 L 39.38 38.43 A 0.57 0.57 0.0 0 0 39.95 39.00 Z"/>
  </svg>`,unlock:`<svg viewBox="9 8 70 72" fill="currentColor" stroke="none">
    <path d="
      M 40.40 38.59 A 0.39 0.39 0.0 0 0 40.79 38.98 Q 65.09 39.02 66.45 38.97 C 71.80 38.79 76.50 40.38 76.49 46.01 Q 76.48 65.49 76.54 67.41 C 76.72 72.91 75.03 77.57 69.25 77.49 Q 67.64 77.47 37.81 77.54 Q 32.31 77.55 30.42 76.22 Q 27.43 74.12 27.49 69.49 Q 27.53 65.87 27.45 49.16 C 27.42 43.04 28.68 39.34 35.06 38.93 A 0.61 0.61 0.0 0 0 35.64 38.32 C 35.62 35.47 35.55 33.00 35.58 31.01 C 35.69 23.94 29.36 18.67 22.61 21.05 C 14.37 23.96 16.11 32.12 16.00 38.84 A 2.49 2.47 -0.7 0 1 13.62 41.27 L 13.48 41.28 A 2.32 2.32 0.0 0 1 11.06 39.05 Q 10.72 30.40 11.12 28.42 C 14.89 9.87 40.59 12.29 40.40 30.78 Q 40.36 34.85 40.40 38.59 Z"/>
  </svg>`,charging:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" />
  </svg>`,"charging-port":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5" />
    <path d="M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5" />
    <path d="M3 21l2.5 -2.5" />
    <path d="M18.5 5.5l2.5 -2.5" />
    <path d="M10 11l-2 2" />
    <path d="M13 14l-2 2" />
  </svg>`,"charge-bolt":`<svg viewBox="27 16 50 74" fill="currentColor" stroke="none">
    <path d="
      M 51.98 87.97 C 51.08 88.15 50.36 87.55 50.36 86.67 Q 50.37 72.26 50.37 60.68 A 1.31 1.30 89.8 0 0 49.06 59.37 Q 32.91 59.40 29.75 59.36 Q 29.31 59.35 29.04 59.19 A 1.38 1.33 -59.7 0 1 28.59 57.33 Q 45.64 28.16 51.20 18.63 A 1.30 1.30 0.0 0 1 53.25 18.38 Q 53.71 18.85 53.69 20.00 Q 53.62 23.82 53.66 45.35 A 1.30 1.30 0.0 0 0 54.96 46.65 C 62.96 46.63 74.04 46.21 75.11 46.91 A 1.25 1.19 -58.3 0 1 75.46 48.55 Q 60.94 73.71 52.68 87.48 A 1.05 1.05 0.0 0 1 51.98 87.97 Z"/>
  </svg>`,battery:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M16 7h1a2 2 0 0 1 2 2v.5a.5 .5 0 0 0 .5 .5a.5 .5 0 0 1 .5 .5v3a.5 .5 0 0 1 -.5 .5a.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-2" />
    <path d="M8 7h-2a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h1" />
    <path d="M12 8l-2 4h3l-2 4" />
  </svg>`,climate:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8 16a3 3 0 0 1 -3 3" />
    <path d="M16 16a3 3 0 0 0 3 3" />
    <path d="M12 16v4" />
    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -4" />
    <path d="M7 13v-3a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v3" />
  </svg>`,fan:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 13a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M14.167 10.5c.722 -1.538 1.156 -3.043 1.303 -4.514c.22 -1.63 -.762 -2.986 -3.47 -2.986s-3.69 1.357 -3.47 2.986c.147 1.471 .581 2.976 1.303 4.514" />
    <path d="M13.169 16.751c.97 1.395 2.057 2.523 3.257 3.386c1.3 1 2.967 .833 4.321 -1.512c1.354 -2.345 .67 -3.874 -.85 -4.498c-1.348 -.608 -2.868 -.985 -4.562 -1.128" />
    <path d="M8.664 13c-1.693 .143 -3.213 .52 -4.56 1.128c-1.522 .623 -2.206 2.153 -.852 4.498s3.02 2.517 4.321 1.512c1.2 -.863 2.287 -1.991 3.258 -3.386" />
  </svg>`,"climate-fan":`<svg viewBox="17 14 74 74" fill="currentColor" stroke="none">
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
  </svg>`,"windows-vent":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 12c2.76 0 5 -2.01 5 -4.5s-2.24 -4.5 -5 -4.5v9" />
    <path d="M12 12c0 2.76 2.01 5 4.5 5s4.5 -2.24 4.5 -5h-9" />
    <path d="M12 12c-2.76 0 -5 2.01 -5 4.5s2.24 4.5 5 4.5v-9" />
    <path d="M12 12c0 -2.76 -2.01 -5 -4.5 -5s-4.5 2.24 -4.5 5h9" />
  </svg>`,defrost:`<svg viewBox="0 0 24 24" fill="currentColor">
    <g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
      <path d="M9 13s1-1.5 0-3 1-3 0-4.5"/>
      <path d="M12 13s1-1.5 0-3 1-3 0-4.5"/>
      <path d="M15 13s1-1.5 0-3 1-3 0-4.5"/>
    </g>
    <path d="M10 15h4a1 1 0 0 1 1 1v.5h1a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h1V16a1 1 0 0 1 1-1z"/>
    <rect x="6" y="17.25" width="1" height=".75" rx=".375"/>
    <rect x="17" y="17.25" width="1" height=".75" rx=".375"/>
  </svg>`,"heated-seat":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M5 11a2 2 0 0 1 2 2v2h10v-2a2 2 0 1 1 4 0v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2" />
    <path d="M5 11v-5a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v5" />
    <path d="M6 19v2" />
    <path d="M18 19v2" />
  </svg>`,tent:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 4L4 20h16L12 4z"/>
    <path d="M12 4v16"/>
    <path d="M10 20v-5l2-2 2 2v5"/>
  </svg>`,dog:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 5.2C10 4 11 3 12 3s2.5 1.5 3 3l1.5 4H19c1.1 0 2 .9 2 2v5a2 2 0 0 1-2 2h-1v2"/>
    <path d="M6 19v-2H5a2 2 0 0 1-2-2v-5c0-1.1.9-2 2-2h2.5L9 6c.5-1.5 1-3 3-3"/>
    <path d="M6 19h12"/>
    <circle cx="9" cy="12" r="1" fill="currentColor" stroke="none"/>
  </svg>`,car:`<svg viewBox="20 28 64 50" fill="currentColor" stroke="none">
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
  </svg>`,frunk:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M2 16h20"/>
    <path d="M4 16l1.5-4h13L20 16"/>
    <path d="M5.5 12l1-3h3"/>
    <path d="M6.5 9l-1-2.5"/>
    <circle cx="6.5" cy="16" r="1.5"/>
    <circle cx="17.5" cy="16" r="1.5"/>
    <path d="M4 16v2"/>
    <path d="M20 16v2"/>
  </svg>`,trunk:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
  </svg>`,sentry:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
  </svg>`,"flash-lights":`<svg viewBox="55 15 75 58" fill="currentColor" stroke="none">
    <rect x="-13.17" y="-2.62" transform="translate(70.12,20.94) rotate(7.2)" width="26.34" height="5.24" rx="2.56"/>
    <path d="M 88.50 29.24 A 8.62 8.62 0.0 0 1 97.12 20.62 L 101.77 20.62 A 25.21 23.14 0 0 1 126.98 43.76 L 126.98 44.48 A 25.21 23.14 0 0 1 101.77 67.62 L 97.12 67.62 A 8.62 8.62 0.0 0 1 88.50 59.00 L 88.50 29.24 Z"/>
    <rect x="-13.09" y="-2.62" transform="translate(70.14,36.69) rotate(2.4)" width="26.18" height="5.24" rx="2.55"/>
    <rect x="-13.09" y="-2.61" transform="translate(70.12,52.44) rotate(-2.4)" width="26.18" height="5.22" rx="2.55"/>
    <rect x="-13.16" y="-2.62" transform="translate(70.13,67.31) rotate(-7.1)" width="26.32" height="5.24" rx="2.55"/>
  </svg>`,horn:`<svg viewBox="45 18 78 55" fill="currentColor" stroke="none">
    <path fill-rule="evenodd" d="
      M 77.79 49.43 Q 66.93 52.07 61.08 62.13 C 59.21 65.34 58.43 71.35 53.06 70.37 Q 49.13 69.65 49.08 65.49 Q 48.90 51.71 49.05 26.80 Q 49.08 22.95 53.42 21.67 Q 56.68 20.71 59.59 24.40 C 60.54 25.60 61.39 28.68 62.40 30.32 Q 67.61 38.78 76.45 41.98 Q 80.81 43.56 90.70 43.42 Q 100.17 43.29 113.18 43.40 A 0.47 0.47 0.0 0 0 113.66 42.96 C 113.83 40.19 116.61 38.61 118.55 41.04 A 1.64 1.60 -66.7 0 1 118.90 41.96 Q 119.11 46.14 118.93 49.78 A 2.59 2.47 5.4 0 1 116.01 52.08 Q 114.00 51.82 113.74 49.21 A 0.68 0.67 87.2 0 0 113.07 48.60 L 109.06 48.60 A 0.45 0.44 77.1 0 0 108.66 49.24 Q 111.67 55.41 108.89 60.60 C 106.19 65.64 101.89 67.15 96.06 67.02 C 90.87 66.90 84.78 68.09 80.33 63.35 Q 75.04 57.72 78.22 49.92 A 0.37 0.37 0.0 0 0 77.79 49.43 Z
      M 104.89 54.83 A 6.14 6.14 0.0 0 0 98.75 48.69 L 88.51 48.69 A 6.14 6.14 0.0 0 0 82.37 54.83 L 82.37 55.55 A 6.14 6.14 0.0 0 0 88.51 61.69 L 98.75 61.69 A 6.14 6.14 0.0 0 0 104.89 55.55 L 104.89 54.83 Z"/>
  </svg>`,"remote-start":`<svg viewBox="64 8 45 76" fill="currentColor" stroke="none">
    <path d="M 86.31 11.03 Q 94.51 10.77 104.02 15.38 A 2.62 2.61 22.9 0 1 105.34 18.62 L 105.27 18.83 A 2.30 2.30 0.0 0 1 102.33 20.21 Q 99.65 19.24 97.10 18.19 Q 92.40 16.26 86.31 16.26 Q 80.23 16.26 75.53 18.18 Q 72.98 19.23 70.29 20.20 A 2.30 2.30 0.0 0 1 67.36 18.82 L 67.29 18.61 A 2.62 2.61 -22.9 0 1 68.61 15.37 Q 78.12 10.77 86.31 11.03 Z"/>
    <path d="M 86.30 23.29 C 88.52 23.29 95.45 23.85 97.24 25.92 A 2.51 2.23 -47.5 0 1 97.19 28.91 Q 96.12 30.33 94.31 29.84 Q 89.50 28.53 86.30 28.54 Q 83.10 28.54 78.30 29.85 Q 76.48 30.34 75.41 28.92 A 2.51 2.23 47.4 0 1 75.36 25.93 C 77.14 23.86 84.07 23.29 86.30 23.29 Z"/>
    <path fill-rule="evenodd" d="M 103.81 72.17 A 8.83 8.83 0.0 0 1 94.98 81.00 L 77.64 81.00 A 8.83 8.83 0.0 0 1 68.81 72.17 L 68.81 44.33 A 8.83 8.83 0.0 0 1 77.64 35.50 L 94.98 35.50 A 8.83 8.83 0.0 0 1 103.81 44.33 L 103.81 72.17 Z M 89.79 49.50 A 3.49 3.49 0.0 0 0 86.30 46.01 A 3.49 3.49 0.0 0 0 82.81 49.50 A 3.49 3.49 0.0 0 0 86.30 52.99 A 3.49 3.49 0.0 0 0 89.79 49.50 Z"/>
  </svg>`,location:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
    <circle cx="12" cy="9" r="2.5"/>
  </svg>`,"vent-open":`<svg viewBox="50 17 68 68" fill="currentColor" stroke="none">
    <path fill-rule="evenodd" d="
      M 111.29 78.91 Q 109.12 81.07 106.78 81.11 Q 84.93 81.43 63.26 81.17 Q 57.61 81.10 55.36 77.39 Q 53.93 75.02 54.26 68.48 Q 54.44 64.89 54.20 51.46 C 54.07 44.34 56.72 42.29 61.54 37.51 Q 63.93 35.14 65.81 33.26 Q 67.70 31.38 70.08 29.00 C 74.87 24.20 76.93 21.56 84.05 21.72 Q 97.48 22.00 101.07 21.84 Q 107.61 21.53 109.98 22.97 Q 113.68 25.23 113.73 30.88 Q 113.91 52.55 113.51 74.40 Q 113.46 76.74 111.29 78.91 Z
      M 61.34 48.48 L 67.38 48.48 A 3.49 3.47 -67.2 0 0 69.83 47.47 Q 74.97 42.31 80.72 36.06 C 82.54 34.08 84.50 34.92 86.70 34.89 Q 99.59 34.75 105.63 35.02 A 1.85 1.85 0.0 0 0 107.57 33.17 L 107.57 30.38 A 2.45 2.44 -89.8 0 0 105.15 27.93 Q 97.41 27.86 84.51 27.92 Q 80.41 27.94 77.29 31.04 Q 75.92 32.39 75.24 33.02 Q 68.45 39.25 60.85 47.36 A 0.67 0.67 0.0 0 0 61.34 48.48 Z
      M 61.06 54.54 A 0.56 0.55 2.5 0 0 60.46 55.08 Q 60.33 62.00 60.43 72.54 Q 60.45 75.04 63.26 75.04 Q 101.67 74.98 104.77 74.96 Q 107.52 74.94 107.47 71.82 Q 107.38 65.56 107.50 55.49 A 0.58 0.57 89.5 0 0 106.92 54.91 Q 85.20 55.17 67.10 55.13 C 64.99 55.12 62.97 54.66 61.06 54.54 Z"/>
  </svg>`,"vent-close":`<svg viewBox="50 17 68 68" fill="currentColor" stroke="none">
    <path fill-rule="evenodd" d="
      M 111.27 78.92 Q 109.11 81.07 106.78 81.13 Q 95.78 81.41 65.02 81.23 C 59.91 81.20 56.97 80.63 54.89 76.43 Q 54.16 74.97 54.19 71.59 Q 54.24 66.54 54.30 49.50 Q 54.32 44.66 57.67 41.19 Q 61.57 37.15 63.93 34.86 Q 64.80 34.02 65.67 33.15 Q 66.55 32.28 67.39 31.41 Q 69.69 29.06 73.75 25.18 Q 77.23 21.84 82.07 21.84 Q 99.11 21.85 104.16 21.82 Q 107.54 21.80 109.00 22.54 C 113.19 24.63 113.75 27.58 113.76 32.69 Q 113.82 63.45 113.49 74.45 Q 113.43 76.78 111.27 78.92 Z
      M 83.75 27.99 C 81.05 28.02 79.19 28.89 76.51 31.54 Q 69.41 38.56 63.00 45.00 Q 61.41 46.60 60.75 47.69 A 0.52 0.51 -74.3 0 0 61.18 48.47 L 67.86 48.47 A 2.12 2.10 -67.3 0 0 69.35 47.85 L 80.69 36.52 A 5.50 5.45 -67.4 0 1 84.57 34.90 L 106.11 34.90 A 1.35 1.34 -0.0 0 0 107.46 33.56 L 107.46 29.95 A 1.95 1.95 0.0 0 0 105.53 28.00 Q 93.62 27.86 83.75 27.99 Z
      M 107.26 54.95 L 60.62 54.87 A 0.23 0.23 0.0 0 0 60.39 55.10 L 60.36 72.14 A 3.11 2.81 0.1 0 0 63.46 74.95 L 104.34 75.03 A 3.11 2.81 0.1 0 0 107.46 72.22 L 107.49 55.18 A 0.23 0.23 0.0 0 0 107.26 54.95 Z"/>
  </svg>`,"chevron-left":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M15 6l-6 6l6 6" />
  </svg>`,"chevron-right":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 6l6 6l-6 6" />
  </svg>`,"chevron-up":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 15l6 -6l6 6" />
  </svg>`,"chevron-down":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 9l6 6l6 -6" />
  </svg>`,check:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M5 12l5 5l10 -10" />
  </svg>`,refresh:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
    <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
  </svg>`,settings:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065" />
    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
  </svg>`,resize:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M16 4l4 0l0 4" />
    <path d="M14 10l6 -6" />
    <path d="M8 20l-4 0l0 -4" />
    <path d="M4 20l6 -6" />
  </svg>`,layout:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
    <path d="M15 4v16" />
  </svg>`,power:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M7 6a7.75 7.75 0 1 0 10 0" />
    <path d="M12 2v6" />
  </svg>`,schedule:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20.984 12.535a9 9 0 1 0 -5.249 7.47" />
    <path d="M12 7v5l2 2" />
    <path d="M19 16l-2 3h4l-2 3" />
  </svg>`,security:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06" />
    <path d="M15 19l2 2l4 -4" />
  </svg>`,driving:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M12 14l0 7" />
    <path d="M10 12l-6.75 -2" />
    <path d="M14 12l6.75 -2" />
  </svg>`,parked:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
    <path d="M10 16v-8h2.667c.736 0 1.333 .895 1.333 2s-.597 2 -1.333 2h-2.667" />
  </svg>`};var Et={models:[{id:"3",name:"Model 3",variants:[{id:"3.1",label:"2017\u20132023",colours:[{id:"red_multi_coat",name:"Red Multi-Coat",swatch:"#c41e28",hasImages:!0},{id:"deep_blue_metallic",name:"Deep Blue Metallic",swatch:"#223873",hasImages:!0},{id:"pearl_white_multi_coat",name:"Pearl White Multi-Coat",swatch:"#f2f2f2"},{id:"midnight_silver_metallic",name:"Midnight Silver Metallic",swatch:"#71757a"},{id:"solid_black",name:"Solid Black",swatch:"#141414"},{id:"silver_metallic",name:"Silver Metallic",swatch:"#c0c0c0"}]},{id:"3.2",label:"2024+ Highland",colours:[{id:"pearl_white",name:"Pearl White",swatch:"#f2f2f2"},{id:"solid_black",name:"Solid Black",swatch:"#141414"},{id:"quicksilver",name:"Quicksilver",swatch:"#9e9a91"},{id:"ultra_red",name:"Ultra Red",swatch:"#c41e28"},{id:"midnight_cherry_red",name:"Midnight Cherry Red",swatch:"#850029"},{id:"stealth_grey",name:"Stealth Grey",swatch:"#515356"}]}]},{id:"Y",name:"Model Y",variants:[{id:"Y.1",label:"2020\u20132024",colours:[{id:"pearl_white_multi_coat",name:"Pearl White Multi-Coat",swatch:"#f2f2f2"},{id:"solid_black",name:"Solid Black",swatch:"#141414"},{id:"midnight_silver_metallic",name:"Midnight Silver Metallic",swatch:"#71757a"},{id:"deep_blue_metallic",name:"Deep Blue Metallic",swatch:"#223873"},{id:"red_multi_coat",name:"Red Multi-Coat",swatch:"#c41e28"},{id:"midnight_cherry_red",name:"Midnight Cherry Red",swatch:"#850029"},{id:"quicksilver",name:"Quicksilver",swatch:"#9e9a91"},{id:"stealth_grey",name:"Stealth Grey",swatch:"#515356"}]},{id:"Y.2",label:"2025+ Juniper",colours:[{id:"pearl_white",name:"Pearl White",swatch:"#f2f2f2"},{id:"solid_black",name:"Solid Black",swatch:"#141414"},{id:"quicksilver",name:"Quicksilver",swatch:"#9e9a91"},{id:"ultra_red",name:"Ultra Red",swatch:"#c41e28"},{id:"midnight_cherry_red",name:"Midnight Cherry Red",swatch:"#850029"},{id:"stealth_grey",name:"Stealth Grey",swatch:"#515356"}]}]},{id:"S",name:"Model S",variants:[{id:"S.1",label:"2012\u20132021",colours:[{id:"pearl_white_multi_coat",name:"Pearl White Multi-Coat",swatch:"#f2f2f2"},{id:"solid_black",name:"Solid Black",swatch:"#141414"},{id:"midnight_silver_metallic",name:"Midnight Silver Metallic",swatch:"#71757a"},{id:"deep_blue_metallic",name:"Deep Blue Metallic",swatch:"#223873"},{id:"red_multi_coat",name:"Red Multi-Coat",swatch:"#c41e28"},{id:"silver_metallic",name:"Silver Metallic",swatch:"#c0c0c0"}]},{id:"S.2",label:"2021+ Refresh",colours:[{id:"pearl_white_multi_coat",name:"Pearl White Multi-Coat",swatch:"#f2f2f2"},{id:"solid_black",name:"Solid Black",swatch:"#141414"},{id:"midnight_silver_metallic",name:"Midnight Silver Metallic",swatch:"#71757a"},{id:"ultra_red",name:"Ultra Red",swatch:"#c41e28"},{id:"midnight_cherry_red",name:"Midnight Cherry Red",swatch:"#850029"},{id:"quicksilver",name:"Quicksilver",swatch:"#9e9a91"},{id:"stealth_grey",name:"Stealth Grey",swatch:"#515356"}]}]},{id:"X",name:"Model X",variants:[{id:"X.1",label:"2015\u20132021",colours:[{id:"solid_black",name:"Solid Black",swatch:"#141414"},{id:"pearl_white_multi_coat",name:"Pearl White Multi-Coat",swatch:"#f2f2f2"},{id:"midnight_silver_metallic",name:"Midnight Silver Metallic",swatch:"#71757a"},{id:"deep_blue_metallic",name:"Deep Blue Metallic",swatch:"#223873"},{id:"red_multi_coat",name:"Red Multi-Coat",swatch:"#c41e28"},{id:"silver_metallic",name:"Silver Metallic",swatch:"#c0c0c0"}]},{id:"X.2",label:"2021+ Refresh",colours:[{id:"pearl_white_multi_coat",name:"Pearl White Multi-Coat",swatch:"#f2f2f2"},{id:"solid_black",name:"Solid Black",swatch:"#141414"},{id:"midnight_silver_metallic",name:"Midnight Silver Metallic",swatch:"#71757a"},{id:"ultra_red",name:"Ultra Red",swatch:"#c41e28"},{id:"midnight_cherry_red",name:"Midnight Cherry Red",swatch:"#850029"},{id:"quicksilver",name:"Quicksilver",swatch:"#9e9a91"},{id:"stealth_grey",name:"Stealth Grey",swatch:"#515356"}]}]},{id:"CT",name:"Cybertruck",variants:[{id:"CT.1",label:"2024+",colours:[{id:"stainless_steel",name:"Stainless Steel",swatch:"#b0b0b0"},{id:"satin_black",name:"Satin Black",swatch:"#1a1a1a"}]}]}]};var Ft=new Map;for(let a of Et.models)for(let t of a.variants)for(let e of t.colours)Ft.has(e.id)||Ft.set(e.id,{name:e.name,dir:e.id,swatch:e.swatch});var xt=Array.from(Ft.values());var M=Et.models.map(a=>({id:a.id,name:a.name,variants:a.variants.map(t=>({id:t.id,label:t.label,colours:["neutral",...t.colours.filter(e=>e.hasImages).map(e=>e.id)],factoryColours:t.colours}))}));function jt(a,t){let e=M.find(s=>s.id===a);return e?e.variants.find(s=>s.id===t)?.colours??["neutral"]:["neutral"]}function Qt(a){return M.find(e=>e.id===a)?.variants??[]}var Vt=class extends E{static get properties(){return{hass:{type:Object},config:{type:Object}}}setConfig(t){this.config=t}_valueChanged(t){if(!this.config||!this.hass)return;let e=t.target,i={...this.config,[e.name]:e.value};this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:i}}))}_modelChanged(t){if(!this.config||!this.hass)return;let e=t.target.value,s=Qt(e)[0]?.id??"",n={...this.config,car_model:e,car_variant:s};this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:n}}))}_integrationChanged(t){if(!this.config||!this.hass)return;let e={...this.config,integration:t.target.value};t.target.value==="entities"&&!e.car_name&&(e.car_name="custom"),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e}}))}_entityOverrideInput(t,e){if(!this.config||!this.hass)return;let i=e.target.value.trim(),s={...this.config.entity_overrides??{}};i?s[t]=i:delete s[t];let n={...this.config,entity_overrides:s};this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:n}}))}_overrideCount(t){let e=this.config.entity_overrides??{};return t.keys.filter(i=>e[i.key]).length}_entitiesForDomain(t){return this.hass?.states?Object.keys(this.hass.states).filter(e=>e.startsWith(t+".")).sort():[]}render(){if(!this.config)return o``;let t=this.config.car_model??"3",e=Qt(t),i=this.config.integration??"fleet",s=i==="entities",n=this.config.entity_overrides??{};return o`
      <div class="editor">
        <label>
          Car Name (entity prefix)${s?"":" *"}
          <input
            name="car_name"
            .value=${this.config.car_name??""}
            @change=${this._valueChanged}
            placeholder=${s?"optional \u2014 used for storage keys":"e.g. my_tesla"}
          />
        </label>
        <label>
          Model
          <select name="car_model" .value=${t} @change=${this._modelChanged}>
            ${M.map(r=>o`
              <option value="${r.id}" ?selected=${r.id===t}>${r.name}</option>
            `)}
          </select>
        </label>
        <label>
          Variant
          <select name="car_variant" .value=${this.config.car_variant??""} @change=${this._valueChanged}>
            ${e.map(r=>o`
              <option value="${r.id}" ?selected=${r.id===this.config.car_variant}>${r.label}</option>
            `)}
          </select>
        </label>
        <label>
          Integration
          <select name="integration" .value=${i} @change=${r=>this._integrationChanged(r)}>
            <option value="fleet" ?selected=${i==="fleet"}>Tesla Fleet (official)</option>
            <option value="custom" ?selected=${i==="custom"}>Tesla Custom (alandtse)</option>
            <option value="entities" ?selected=${i==="entities"}>Custom Entities</option>
          </select>
        </label>
        <label>
          Image Path
          <input
            name="image_path"
            .value=${this.config.image_path??"/hacsfiles/homeassistant-fe-tesla"}
            @change=${this._valueChanged}
            placeholder="/hacsfiles/homeassistant-fe-tesla"
          />
        </label>
        <label>
          Display Name
          <input
            name="name"
            .value=${this.config.name??""}
            @change=${this._valueChanged}
            placeholder="My Tesla"
          />
        </label>

        ${s?o`
          <div class="entity-section-header">Entity Configuration</div>
          <div class="entity-hint">Map each function to an entity in your Home Assistant. Leave blank to skip.</div>
          <div class="entity-groups">
            ${Bt.map(r=>{let d=this._overrideCount(r),h=r.keys.length;return o`
                <details class="entity-group">
                  <summary class="entity-group-header">
                    <span class="entity-group-label">${r.label}</span>
                    <span class="entity-group-count${d>0?" has-overrides":""}">${d}/${h}</span>
                  </summary>
                  <div class="entity-group-body">
                    ${r.keys.map(g=>{let m=`el-${g.key}`,u=this._entitiesForDomain(g.domain);return o`
                        <div class="entity-row">
                          <span class="entity-row-label">${g.label}</span>
                          <input
                            class="entity-input"
                            type="text"
                            list=${m}
                            .value=${n[g.key]??""}
                            placeholder="${g.domain}."
                            @change=${_=>this._entityOverrideInput(g.key,_)}
                          />
                          <datalist id=${m}>
                            ${u.map(_=>o`<option value=${_}></option>`)}
                          </datalist>
                        </div>
                      `})}
                  </div>
                </details>
              `})}
          </div>
        `:""}
      </div>
    `}static get styles(){return y`
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

      .entity-input {
        width: 100%;
        box-sizing: border-box;
      }
    `}};customElements.define("tesla-card-editor",Vt);var B=class B extends E{static get properties(){return{hass:{type:Object},config:{type:Object},customColour:{type:Object},layout:{type:String}}}get E(){return bt(this.config?.integration)}_eid(t){return vt(t,this.config.car_name,this.config.entity_overrides)}_state(t){let e=this._eid(t);return e?this.hass?.states[e]:void 0}_val(t){return this._state(t)?.state}_attr(t,e){return this._state(t)?.attributes?.[e]}_nattr(t,e){let i=this._attr(t,e);return i!=null?Number(i):null}_imgUrl(t){let{image_path:e,car_model:i,car_variant:s,car_color:n}=this.config;return`${e}/${i}/${s}/${n}/${t}?v=${B._imgVer}`}_btnUrl(t){return`${this.config.image_path}/buttons/${t}?v=${B._imgVer}`}_maskUrl(t){let{image_path:e,car_model:i,car_variant:s}=this.config,n=t.replace(".png","-mask.png");return`${e}/${i}/${s}/neutral/${n}?v=${B._imgVer}`}get _hasCustomOverlay(){return!!this.customColour&&this.customColour.s>0}_customOverlayStyleFor(t){let e=this.customColour;if(!e||e.s===0)return"";let i=this._maskUrl(t);return`position:absolute;inset:0;pointer-events:none;background:hsl(${e.h},${e.s}%,50%);mix-blend-mode:color;-webkit-mask-image:url(${i});mask-image:url(${i});-webkit-mask-size:contain;mask-size:contain;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;`}_domainOf(t){return t?t.split(".")[0]:null}_activate(t){let e=this._domainOf(t);if(e==="cover"){let i=this._val(t)==="open";return this._svc("cover",i?"close_cover":"open_cover",t)}return this._svc(e,"press",t)}_openClose(t,e,i){let s=i?e:t,n=this._domainOf(s);return n==="cover"?this._svc("cover",i?"close_cover":"open_cover",s):this._svc(n,"press",s)}async _svc(t,e,i,s={}){if(i)try{await this.hass.callService(t,e,{entity_id:this._eid(i),...s})}catch(n){console.error("[tesla-card] service error",t,e,n)}}_close(){this.dispatchEvent(new CustomEvent("close-menu",{bubbles:!0,composed:!0}))}};pt(B,"_imgVer",Date.now());var N=B;var Wt=class extends N{static get properties(){return{...super.properties,_pendingLimit:{state:!0},_pendingAmps:{state:!0}}}static get styles(){return[T,Se]}constructor(){super(),this._pendingLimit=null,this._pendingAmps=null}_pct(t,e,i){return Math.round((t-e)/(i-e)*100)}_onLimitInput(t){t.target.style.setProperty("--pct",`${this._pct(+t.target.value,+t.target.min,+t.target.max)}%`),this._pendingLimit=+t.target.value}_onLimitChange(t){this._pendingLimit=null,this._svc("number","set_value",this.E.CHARGE_LIMIT_NUMBER,{value:+t.target.value})}_onAmpsInput(t){t.target.style.setProperty("--pct",`${this._pct(+t.target.value,+t.target.min,+t.target.max)}%`),this._pendingAmps=+t.target.value}_onAmpsChange(t){this._pendingAmps=null,this._svc("number","set_value",this.E.CHARGING_AMPS_NUMBER,{value:+t.target.value})}_adjustAmps(t){let e=this._nattr(this.E.CHARGING_AMPS_NUMBER,"step")??1,i=this._nattr(this.E.CHARGING_AMPS_NUMBER,"min")??5,s=this._nattr(this.E.CHARGING_AMPS_NUMBER,"max")??32,n=this._pendingAmps??Number(this._val(this.E.CHARGING_AMPS_NUMBER)??16);this._pendingAmps=Math.max(i,Math.min(s,n+t*e)),clearTimeout(this._ampsTimer),this._ampsTimer=setTimeout(()=>{this._svc("number","set_value",this.E.CHARGING_AMPS_NUMBER,{value:this._pendingAmps}),this._pendingAmps=null},800)}render(){if(!this.config||!this.hass)return o``;let t=this._val(this.E.BATTERY_RANGE),e=this._attr(this.E.BATTERY_RANGE,"unit_of_measurement")??"km",i=t!=null?`${Math.round(Number(t))} ${e}`:null,s=this._val(this.E.CHARGER_DOOR)==="open"||this._val(this.E.PLUGGED_IN)==="on",n=this._pendingLimit??Number(this._val(this.E.CHARGE_LIMIT_NUMBER)??80),r=this._nattr(this.E.CHARGE_LIMIT_NUMBER,"min")??50,d=this._nattr(this.E.CHARGE_LIMIT_NUMBER,"max")??100,h=this._nattr(this.E.CHARGE_LIMIT_NUMBER,"step")??1,g=this._pct(n,r,d),m=this._pendingAmps??Number(this._val(this.E.CHARGING_AMPS_NUMBER)??16),u=this._nattr(this.E.CHARGING_AMPS_NUMBER,"min")??5,_=this._nattr(this.E.CHARGING_AMPS_NUMBER,"max")??32,v=this._attr(this.E.ENERGY_ADDED,"added_range");return o`
      <div class="charger-menu${this.layout==="landscape"?" landscape":""}">

        <!-- Header: "Charging" + range subtitle -->
        <div class="panel-header">
          <button class="panel-back" @click=${this._close}>
            <span class="icon">${c(l["chevron-left"])}</span>
          </button>
          <div class="panel-title-block">
            <span class="panel-title">Charging</span>
            ${i?o`<span class="panel-subtitle">${i}</span>`:""}
          </div>
        </div>

        <!-- Charge limit card + amps stepper -->
        <div class="chg-card">
          <div class="chg-limit-header">
            <span class="chg-limit-title">Charge limit: ${n}%</span>
            ${v?o`
              <p class="chg-limit-sub">${v} km added during last charging session</p>`:""}
          </div>

          <!-- Green pill slider for charge limit -->
          <input type="range" class="chg-slider" style="--pct:${g}%"
            min=${r} max=${d} step=${h}
            .value=${String(n)}
            @input=${this._onLimitInput} @change=${this._onLimitChange}/>

          <!-- Amps stepper row -->
          <div class="chg-amps-row">
            <button class="chg-amps-btn"
              ?disabled=${m<=u}
              @click=${()=>this._adjustAmps(-1)}>
              <span class="icon">${c(l["chevron-left"])}</span>
            </button>
            <span class="chg-amps-value">${m} A</span>
            <button class="chg-amps-btn"
              ?disabled=${m>=_}
              @click=${()=>this._adjustAmps(1)}>
              <span class="icon">${c(l["chevron-right"])}</span>
            </button>
          </div>
        </div>

        <!-- Open / Close Charge Port — plain text link -->
        <button class="chg-port-btn"
          @click=${()=>this._openClose(this.E.CHARGE_PORT_OPEN,this.E.CHARGE_PORT_CLOSE,s)}>
          ${s?"Close Charge Port":"Open Charge Port"}
        </button>

      </div>
    `}};customElements.define("tesla-menu-charger",Wt);var Kt=class extends N{static get properties(){return{...super.properties,_pendingTemp:{state:!0},_climExpanded:{state:!0}}}static get styles(){return[T,Oe]}constructor(){super(),this._pendingTemp=null,this._climExpanded=!1}_adjustTemp(t){let e=Number(this._attr(this.E.CLIMATE,"target_temp_step")??.5),i=Number(this._attr(this.E.CLIMATE,"min_temp")??15),s=Number(this._attr(this.E.CLIMATE,"max_temp")??28),n=this._pendingTemp??(this._attr(this.E.CLIMATE,"temperature")!=null?Number(this._attr(this.E.CLIMATE,"temperature")):22);this._pendingTemp=Math.max(i,Math.min(s,Math.round((n+t*e)/e)*e)),clearTimeout(this._tempTimer),this._tempTimer=setTimeout(()=>{this._svc("climate","set_temperature",this.E.CLIMATE,{temperature:this._pendingTemp}),this._pendingTemp=null},800)}_seatHeatFile(t){if(!t)return"Tesla_Heated_Seat_Off.svg";let e=t.toLowerCase();if(e==="off")return"Tesla_Heated_Seat_Off.svg";if(e==="low")return"Tesla_Heated_Seat_1.svg";if(e==="medium")return"Tesla_Heated_Seat_2.svg";if(e==="high")return"Tesla_Heated_Seat_3.svg";let i=parseInt(t);return!isNaN(i)&&i>=1&&i<=3?`Tesla_Heated_Seat_${i}.svg`:"Tesla_Heated_Seat_Off.svg"}_setCabinOverheat(t){if(this._domainOf(this.E.CABIN_OVERHEAT)==="climate"){let s={Off:"off","No A/C":"fan_only",On:"cool"}[t]??"off";s==="off"?this._svc("climate","turn_off",this.E.CABIN_OVERHEAT):this._svc("climate","set_hvac_mode",this.E.CABIN_OVERHEAT,{hvac_mode:s})}else this._svc("select","select_option",this.E.CABIN_OVERHEAT,{option:t})}_togglePresetOrSwitch(t,e,i){return i?this._svc("switch",e?"turn_off":"turn_on",i):this._svc("climate","set_preset_mode",this.E.CLIMATE,{preset_mode:e?"off":t})}_close(){this._climExpanded=!1,super._close()}render(){if(!this.config||!this.hass)return o``;let t=this._val(this.E.CLIMATE),e=t!=null&&t!=="off"&&t!=="unavailable",i=this._attr(this.E.CLIMATE,"temperature"),s=i!=null?Number(i):null,n=this._pendingTemp??s,r=n!=null?n.toFixed(1):"\u2014",d=this._val(this.E.DEFROST_SWITCH)==="on",h=this._val(this.E.HEATED_SEAT_LEFT),g=this._val(this.E.HEATED_SEAT_RIGHT),m=!!this._state(this.E.HEATED_SEAT_REAR_LEFT),u=!!this._state(this.E.HEATED_SEAT_REAR_CENTER),_=!!this._state(this.E.HEATED_SEAT_REAR_RIGHT),v=m?this._val(this.E.HEATED_SEAT_REAR_LEFT):null,k=u?this._val(this.E.HEATED_SEAT_REAR_CENTER):null,F=_?this._val(this.E.HEATED_SEAT_REAR_RIGHT):null,nt=this._val(this.E.TEMPERATURE_INSIDE),yt=this._attr(this.E.TEMPERATURE_INSIDE,"unit_of_measurement")??"\xB0C",$=nt!=null?`${Math.round(Number(nt))}${yt}`:null,rt=this._val(this.E.TEMPERATURE_OUTSIDE),x=this._attr(this.E.TEMPERATURE_OUTSIDE,"unit_of_measurement")??"\xB0C",b=rt!=null?`${Math.round(Number(rt))}${x}`:null,w=this._val(this.E.WINDOWS_COVER)==="open",j=this._attr(this.E.CLIMATE,"preset_modes")??[],ot=this._attr(this.E.CLIMATE,"preset_mode")??"off",lt=!!this.E.CAMP_MODE||j.includes("camp"),L=!!this.E.DOG_MODE||j.includes("dog"),ct=this.E.CAMP_MODE?this._val(this.E.CAMP_MODE)==="on":ot==="camp",kt=this.E.DOG_MODE?this._val(this.E.DOG_MODE)==="on":ot==="dog",C=!!this.E.CABIN_OVERHEAT,ht=this._val(this.E.CABIN_OVERHEAT)??"Off",wt=C&&this._domainOf(this.E.CABIN_OVERHEAT)==="climate"?{off:"Off",fan_only:"No A/C",cool:"On"}[ht]??"Off":ht,Q=this._val(this.E.PLUGGED_IN)==="on"?"climate-bg-charging.png":"climate-bg.png";return o`
      <div class="climate-menu${this.layout==="landscape"?" landscape":""}">

        <!-- Car area: outer clips, inner sizes to image, seats overlay image -->
        <div class="clim-car-area${this._climExpanded?" clim-car-collapsed":""}">
          <div class="clim-car-inner">
            <img class="clim-car-bg"
              src="${this._imgUrl(Q)}"
              alt="Car interior view" />
            ${this._hasCustomOverlay?o`
              <div style="${this._customOverlayStyleFor(Q)}"></div>`:""}

            <!-- Front seats -->
            <button class="clim-seat-zone clim-seat-fl"
              @click=${()=>this._svc("select","select_next",this.E.HEATED_SEAT_LEFT,{cycle:!0})}>
              <img class="btn-img" src="${this._btnUrl(this._seatHeatFile(h??"Off"))}" alt="" />
              <span class="clim-seat-label">${h??"Off"}</span>
            </button>
            <button class="clim-seat-zone clim-seat-fr"
              @click=${()=>this._svc("select","select_next",this.E.HEATED_SEAT_RIGHT,{cycle:!0})}>
              <img class="btn-img" src="${this._btnUrl(this._seatHeatFile(g??"Off"))}" alt="" />
              <span class="clim-seat-label">${g??"Off"}</span>
            </button>
            <!-- Rear seats (only if entities exist) -->
            ${m?o`
              <button class="clim-seat-zone clim-seat-rl"
                @click=${()=>this._svc("select","select_next",this.E.HEATED_SEAT_REAR_LEFT,{cycle:!0})}>
                <img class="btn-img" src="${this._btnUrl(this._seatHeatFile(v??"Off"))}" alt="" />
                <span class="clim-seat-label">${v??"Off"}</span>
              </button>`:""}
            ${u?o`
              <button class="clim-seat-zone clim-seat-rc"
                @click=${()=>this._svc("select","select_next",this.E.HEATED_SEAT_REAR_CENTER,{cycle:!0})}>
                <img class="btn-img" src="${this._btnUrl(this._seatHeatFile(k??"Off"))}" alt="" />
                <span class="clim-seat-label">${k??"Off"}</span>
              </button>`:""}
            ${_?o`
              <button class="clim-seat-zone clim-seat-rr"
                @click=${()=>this._svc("select","select_next",this.E.HEATED_SEAT_REAR_RIGHT,{cycle:!0})}>
                <img class="btn-img" src="${this._btnUrl(this._seatHeatFile(F??"Off"))}" alt="" />
                <span class="clim-seat-label">${F??"Off"}</span>
              </button>`:""}
          </div>

          <!-- Floating back button (positioned in outer container) -->
          <button class="clim-back-btn" @click=${this._close}>
            <span class="icon">${c(l["chevron-left"])}</span>
          </button>
        </div>

        <!-- Bottom sheet — drag-handle reveals extra controls -->
        <div class="clim-sheet${this._climExpanded?" expanded":""}">

          <!-- Drag handle pill — tap to expand/collapse -->
          <button class="clim-handle"
            @click=${()=>{this._climExpanded=!this._climExpanded}}>
            <span class="clim-handle-pill"></span>
          </button>

          <!-- Interior · Exterior temps -->
          ${$||b?o`
            <div class="clim-temp-info">
              ${$?o`Interior ${$}`:""}
              ${$&&b?" \xB7 ":""}
              ${b?o`Exterior ${b}`:""}
            </div>`:""}

          <!-- Main control row: [Power/Off] [← 20.0° →] [Vent] -->
          <div class="clim-main-row">
            <button class="clim-icon-btn${e?" clim-active":""}"
              @click=${()=>this._svc("climate",e?"turn_off":"turn_on",this.E.CLIMATE)}>
              <span class="icon">${c(l.power)}</span>
              <span>${e?"On":"Off"}</span>
            </button>

            <div class="clim-temp-control">
              <button class="clim-arrow-btn" @click=${()=>this._adjustTemp(-1)}>
                <span class="icon">${c(l["chevron-left"])}</span>
              </button>
              <span class="clim-temp-value">${r}°</span>
              <button class="clim-arrow-btn" @click=${()=>this._adjustTemp(1)}>
                <span class="icon">${c(l["chevron-right"])}</span>
              </button>
            </div>

            <button class="clim-icon-btn${w?" clim-active":""}"
              @click=${()=>this._svc("cover",w?"close_cover":"open_cover",this.E.WINDOWS_COVER)}>
              <span class="icon">${c(w?l["vent-close"]:l["vent-open"])}</span>
              <span>${w?"Close":"Vent"}</span>
            </button>
          </div>

          <!-- Always-visible: Defrost Car -->
          <button class="clim-full-btn${d?" active":""}"
            @click=${()=>this._svc("switch",d?"turn_off":"turn_on",this.E.DEFROST_SWITCH)}>
            <span class="icon">${c(l.defrost)}</span>
            <span>Defrost Car</span>
          </button>

          <!-- Expanded section — Camp Mode / Dog Mode + Cabin Overheat Protection -->
          <div class="clim-expanded-content">

            <!-- Camp Mode + Dog Mode -->
            ${lt||L?o`
              <div class="clim-list-group">
                ${lt?o`
                  <button class="clim-list-item${ct?" hot":""}"
                    @click=${()=>this._togglePresetOrSwitch("camp",ct,this.E.CAMP_MODE)}>
                    <span class="icon clim-list-icon">${c(l.tent)}</span>
                    <span class="clim-list-label">Camp Mode</span>
                  </button>`:""}
                ${L?o`
                  <button class="clim-list-item${kt?" hot":""}"
                    @click=${()=>this._togglePresetOrSwitch("dog",kt,this.E.DOG_MODE)}>
                    <span class="icon clim-list-icon">${c(l.dog)}</span>
                    <span class="clim-list-label">Dog Mode</span>
                  </button>`:""}
              </div>
              <div class="clim-separator"></div>
            `:""}

            <!-- Cabin Overheat Protection -->
            ${C?o`
              <div class="clim-section-title">Cabin Overheat Protection</div>
              <div class="clim-list-group clim-segment-group clim-list-group--last">
                ${["Off","No A/C","On"].map(U=>o`
                  <button class="clim-segment-btn${wt===U?" selected":""}"
                    @click=${()=>this._setCabinOverheat(U)}>
                    ${U}
                  </button>`)}
              </div>
            `:""}

          </div><!-- /clim-expanded-content -->

        </div><!-- /clim-sheet -->
      </div>
    `}};customElements.define("tesla-menu-climate",Kt);var Yt=class extends N{static get styles(){return[T,Te]}render(){if(!this.config||!this.hass)return o``;let e=this._val(this.E.DOOR_LOCK)==="locked",i=this._val(this.E.FRUNK_COVER)==="open"||this._val(this.E.FRUNK)==="on",s=this._val(this.E.TRUNK)==="on",n=this._val(this.E.PLUGGED_IN)==="on",r=this._val(this.E.CHARGER_DOOR)==="open"||n,d=this._val(this.E.WINDOWS_COVER)==="open",h=n?"controls-bg-charging.png":"controls-bg.png";return o`
      <div class="controls-menu${this.layout==="landscape"?" landscape":""}">
        <div class="panel-header">
          <button class="panel-back" @click=${this._close}>
            <span class="icon">${c(l["chevron-left"])}</span>
          </button>
          <span class="panel-title">Controls</span>
        </div>
        <div class="ctrl-car-area">
          <img class="ctrl-car-bg"
            src="${this._imgUrl(h)}"
            alt="Car top view" />
          ${this._hasCustomOverlay?o`
            <div style="${this._customOverlayStyleFor(h)}"></div>`:""}
          <!-- Frunk — text only, top centre (open only, must be closed physically) -->
          <button class="ctrl-zone ctrl-frunk"
            @click=${()=>this._svc("cover","open_cover",this.E.FRUNK_COVER)}
            ?disabled=${i}>
            ${"Open"}
          </button>
          <!-- Lock — icon only, car centre -->
          <button class="ctrl-zone ctrl-lock"
            @click=${()=>this._svc("lock",e?"unlock":"lock",this.E.DOOR_LOCK)}>
            <span class="icon">${c(e?l.lock:l.unlock)}</span>
          </button>
          <!-- Trunk — text only, bottom centre -->
          <button class="ctrl-zone ctrl-trunk"
            @click=${()=>this._svc("cover",s?"close_cover":"open_cover",this.E.OPEN_TRUNK)}>
            ${s?"Close":"Open"}
          </button>
          <!-- Charge port — icon only, bottom left -->
          <button class="ctrl-zone ctrl-port ${r?"port-open":""}"
            @click=${()=>this._openClose(this.E.CHARGE_PORT_OPEN,this.E.CHARGE_PORT_CLOSE,r)}>
            <span class="icon">${c(l["charge-bolt"])}</span>
          </button>
        </div>
        <div class="ctrl-actions">
          <button class="ctrl-action-btn"
            @click=${()=>this._svc("button","press",this.E.FLASH_LIGHTS)}>
            <span class="icon">${c(l["flash-lights"])}</span>
            <span>Flash</span>
          </button>
          <button class="ctrl-action-btn"
            @click=${()=>this._svc("button","press",this.E.HORN)}>
            <span class="icon">${c(l.horn)}</span>
            <span>Horn</span>
          </button>
          <button class="ctrl-action-btn"
            @click=${()=>this._svc("button","press",this.E.REMOTE_START)}>
            <span class="icon">${c(l["remote-start"])}</span>
            <span>Start</span>
          </button>
          <button class="ctrl-action-btn"
            @click=${()=>this._svc("cover",d?"close_cover":"open_cover",this.E.WINDOWS_COVER)}>
            <span class="icon">${c(d?l["vent-close"]:l["vent-open"])}</span>
            <span>${d?"Close":"Vent"}</span>
          </button>
        </div>
      </div>
    `}};customElements.define("tesla-menu-controls",Yt);var qt=class extends E{static get properties(){return{selected:{type:String},available:{type:Array},showBack:{type:Boolean},customH:{type:Number},customS:{type:Number},slideFrom:{type:String,reflect:!0,attribute:"slide-from"},_showCustom:{state:!0},_hue:{state:!0},_sat:{state:!0}}}static get styles(){return y`
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
    `}constructor(){super(),this.selected="neutral",this.available=["neutral"],this.showBack=!1,this.customH=0,this.customS=80,this._showCustom=!1,this._hue=0,this._sat=80}willUpdate(t){(t.has("selected")||t.has("customH")||t.has("customS"))&&this.selected==="custom"&&(this._showCustom=!0,this._hue=this.customH??0,this._sat=this.customS??80)}_selectColour(t){this._showCustom=!1,this.dispatchEvent(new CustomEvent("colour-changed",{detail:{dir:t.dir,name:t.name},bubbles:!0,composed:!0})),this._close()}_openCustom(){this._showCustom=!0}_onHueInput(t){this._hue=Number(t.target.value),this._fireCustomChange()}_onSatInput(t){this._sat=Number(t.target.value),this._fireCustomChange()}_fireCustomChange(){this.dispatchEvent(new CustomEvent("colour-changed",{detail:{dir:"custom",name:"Custom",h:this._hue,s:this._sat},bubbles:!0,composed:!0}))}_reset(){this._showCustom=!1,this.dispatchEvent(new CustomEvent("colour-changed",{detail:null,bubbles:!0,composed:!0})),this._close()}_back(){this.dispatchEvent(new CustomEvent("picker-back",{bubbles:!0,composed:!0}))}_close(){this.dispatchEvent(new CustomEvent("picker-close",{bubbles:!0,composed:!0}))}_onOverlayClick(t){t.target===t.currentTarget&&this._close()}render(){let t=this.available??["neutral"],e=this.selected==="custom";return o`
      <div class="picker-overlay" @click=${this._onOverlayClick}>
        <div class="picker-panel">

          <div class="picker-header">
            ${this.showBack?o`
              <button class="picker-back" @click=${this._back}>
                <span class="icon">${c(l["chevron-left"])}</span>
              </button>`:""}
            <span class="picker-title">Colour</span>
            <button class="picker-close" @click=${this._close}>&times;</button>
          </div>

          <div class="picker-swatches">
            ${xt.map(i=>{let s=t.includes(i.dir),n=this.selected===i.dir;return o`
                <button
                  class="swatch-btn${s?"":" unavailable"}"
                  @click=${s?()=>this._selectColour(i):null}>
                  <div class="swatch-circle${n?" selected":""}"
                    style="background:${i.swatch}"></div>
                  <span class="swatch-name">${i.name}</span>
                </button>`})}
            <button class="swatch-btn" @click=${()=>this._openCustom()}>
              <div class="swatch-circle swatch-rainbow${e?" selected":""}"></div>
              <span class="swatch-name">Custom</span>
            </button>
          </div>

          ${this._showCustom?o`
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
          `:""}

          <button class="picker-reset" @click=${this._reset}>
            Reset to Default
          </button>

        </div>
      </div>
    `}};customElements.define("tesla-colour-picker",qt);var Zt=class extends E{static get properties(){return{model:{type:String},variant:{type:String},slideFrom:{type:String,reflect:!0,attribute:"slide-from"}}}static get styles(){return y`
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
    `}_select(t,e){this.dispatchEvent(new CustomEvent("model-changed",{detail:{model:t,variant:e},bubbles:!0,composed:!0}))}_back(){this.dispatchEvent(new CustomEvent("picker-back",{bubbles:!0,composed:!0}))}_close(){this.dispatchEvent(new CustomEvent("picker-close",{bubbles:!0,composed:!0}))}_onOverlayClick(t){t.target===t.currentTarget&&this._close()}render(){return o`
      <div class="picker-overlay" @click=${this._onOverlayClick}>
        <div class="picker-panel">
          <div class="picker-header">
            <button class="picker-back" @click=${this._back}>
              <span class="icon">${c(l["chevron-left"])}</span>
            </button>
            <span class="picker-title">Model</span>
            <button class="picker-close" @click=${this._close}>&times;</button>
          </div>
          <div class="model-list">
            ${M.map(t=>o`
              <div class="model-section">
                <div class="model-section-title">${t.name}</div>
                <div class="model-group">
                  ${t.variants.map(e=>{let i=e.id===this.variant,n=e.colours.length>1||e.colours[0]!=="neutral"||i;return o`
                      <button class="model-item${i?" selected":""}${n?"":" unavailable"}"
                        @click=${n?()=>this._select(t.id,e.id):null}>
                        <span class="model-icon">
                          <span class="icon">${c(l.car)}</span>
                        </span>
                        <span class="model-label">${e.label}</span>
                        ${n?"":o`<span class="model-no-images">no images</span>`}
                        ${i?o`
                          <span class="model-check">
                            <span class="icon">${c(l.check)}</span>
                          </span>`:""}
                      </button>`})}
                </div>
              </div>
            `)}
          </div>
        </div>
      </div>
    `}};customElements.define("tesla-model-picker",Zt);var fi=["chargeport","frunk","fr","ff","nr","nf"],Le={"nf+nr":"nf-nr-combined-overlay.png","ff+fr":"ff-fr-combined-overlay.png"},Ie="all-doors-overlay.png",De="oncharge-all-doors-overlay.png",bi=["fr"],vi=["frunk","nf","nr"],He={"nf+nr":"oncharge-nf-nr-combined-overlay.png"},Ei="tesla-card-colour-",xi="tesla-card-model-",yi="tesla-card-layout-",ki="tesla-card-size-",Pe=["small","medium","large"],P=class P extends E{static get properties(){return{hass:{type:Object},config:{type:Object},_menu:{state:!0},_imageError:{state:!0},_settingsView:{state:!0},_modelOverride:{state:!0},_colourOverride:{state:!0},_layout:{state:!0},_settingsSlide:{state:!0},_cardSize:{state:!0}}}static get styles(){return[T,Me]}get E(){return bt(this.config?.integration)}constructor(){super(),this._menu=null,this._imageError=!1,this._settingsView=null,this._modelOverride=null,this._colourOverride=null,this._layout="portrait",this._settingsSlide=null,this._cardSize="medium",this._baseConfig=null,this._combinedAvail={},this._onchargeAvail=!1,this._cableAvail=!1,this._toggleCharger=()=>this._toggle("charger"),this._toggleClimate=()=>this._toggle("climate"),this._toggleControls=()=>this._toggle("controls"),this._handleCloseMenu=()=>{this._menu=null},this._handleColourChanged=t=>this._onColourChanged(t),this._handleModelChanged=t=>this._onModelChanged(t),this._handleModelBack=()=>{this._settingsSlide=null,this._settingsView="main"},this._handleColourBack=()=>{this._settingsSlide="left",this._settingsView="model"},this._handlePickerClose=()=>{this._settingsView=null,this._settingsSlide=null}}setConfig(t){if(!t.car_name&&t.integration!=="entities")throw new Error("car_name is required");this._baseConfig={car_model:"3",car_variant:"3.1",car_color:"red_multi_coat",image_path:"/hacsfiles/homeassistant-fe-tesla",show_speed:!0,...t},this._applyConfig()}_applyConfig(){let t={...this._baseConfig};this._modelOverride&&(t.car_model=this._modelOverride.model,t.car_variant=this._modelOverride.variant);let e=this._colourOverride;e&&(t.car_color=e.dir==="custom"?"neutral":e.dir),this.config=t,this._preloadCombinedOverlays()}_preloadCombinedOverlays(){for(let[n,r]of Object.entries(Le)){let d=new Image;d.onload=()=>{this._combinedAvail[n]=!0,this.requestUpdate()},d.onerror=()=>{this._combinedAvail[n]=!1},d.src=this._overlayUrl(r)}let t=new Image;t.onload=()=>{this._onchargeAvail=!0,this.requestUpdate()},t.onerror=()=>{this._onchargeAvail=!1},t.src=this._overlayUrl("oncharge-base.png");let e=new Image;e.onload=()=>{this._cableAvail=!0,this.requestUpdate()},e.onerror=()=>{this._cableAvail=!1},e.src=this._overlayUrl("oncharge-cable-overlay.png");for(let[n,r]of Object.entries(He)){let d=new Image;d.onload=()=>{this._combinedAvail["oc_"+n]=!0,this.requestUpdate()},d.onerror=()=>{this._combinedAvail["oc_"+n]=!1},d.src=this._overlayUrl(r)}let i=new Image;i.onload=()=>{this._combinedAvail.all=!0,this.requestUpdate()},i.onerror=()=>{this._combinedAvail.all=!1},i.src=this._overlayUrl(Ie);let s=new Image;s.onload=()=>{this._combinedAvail.oc_all=!0,this.requestUpdate()},s.onerror=()=>{this._combinedAvail.oc_all=!1},s.src=this._overlayUrl(De)}static getConfigElement(){return document.createElement("tesla-card-editor")}static getStubConfig(){return{car_name:"",car_model:"3",car_variant:"3.1",car_color:"red_multi_coat",image_path:"/hacsfiles/homeassistant-fe-tesla"}}connectedCallback(){super.connectedCallback(),this._baseConfig&&(this._restoreModel(),this._restoreColour()),this._restoreLayout(),this._restoreSize()}_colourLsKey(){return Ei+(this._baseConfig?.car_name??"default")}_restoreColour(){try{let t=localStorage.getItem(this._colourLsKey());if(!t)return;try{this._colourOverride=JSON.parse(t)}catch{this._colourOverride={dir:t}}this._applyConfig()}catch{}}_persistColour(){try{this._colourOverride?localStorage.setItem(this._colourLsKey(),JSON.stringify(this._colourOverride)):localStorage.removeItem(this._colourLsKey())}catch{}}_onColourChanged(t){let e=t.detail;e?e.dir==="custom"?this._colourOverride={dir:"custom",h:e.h,s:e.s}:this._colourOverride={dir:e.dir}:this._colourOverride=null,this._applyConfig(),this._persistColour(),this._imageError=!1}_modelLsKey(){return xi+(this._baseConfig?.car_name??"default")}_restoreModel(){try{let t=localStorage.getItem(this._modelLsKey());t&&(this._modelOverride=JSON.parse(t),this._applyConfig())}catch{}}_persistModel(){try{this._modelOverride?localStorage.setItem(this._modelLsKey(),JSON.stringify(this._modelOverride)):localStorage.removeItem(this._modelLsKey())}catch{}}_onModelChanged(t){let{model:e,variant:i}=t.detail;this._modelOverride={model:e,variant:i};let s=this._colourOverride;s&&s.dir!=="custom"&&(jt(e,i).includes(s.dir)||(this._colourOverride=null,this._persistColour())),this._applyConfig(),this._persistModel(),this._imageError=!1,this._settingsSlide="right",this._settingsView="colour"}_layoutLsKey(){return yi+(this._baseConfig?.car_name??"default")}_restoreLayout(){try{localStorage.getItem(this._layoutLsKey())==="landscape"&&(this._layout="landscape")}catch{}}_persistLayout(){try{localStorage.setItem(this._layoutLsKey(),this._layout)}catch{}}_toggleLayout(){this._layout=this._layout==="landscape"?"portrait":"landscape",this._persistLayout()}_sizeLsKey(){return ki+(this._baseConfig?.car_name??"default")}_restoreSize(){try{let t=localStorage.getItem(this._sizeLsKey());t&&Pe.includes(t)&&(this._cardSize=t)}catch{}}_persistSize(){try{localStorage.setItem(this._sizeLsKey(),this._cardSize)}catch{}}_setCardSize(t){this._cardSize!==t&&(this._cardSize=t,this._persistSize())}_imgUrl(t){let{image_path:e,car_model:i,car_variant:s,car_color:n}=this.config;return`${e}/${i}/${s}/${n}/${t}?v=${P._imgVer}`}_overlayUrl(t){let{image_path:e,car_model:i,car_variant:s,car_color:n}=this.config;return`${e}/${i}/${s}/${n}/overlays/${t}?v=${P._imgVer}`}_btnUrl(t){return`${this.config.image_path}/buttons/${t}?v=${P._imgVer}`}get _customColour(){let t=this._colourOverride;return!t||t.dir!=="custom"?null:{h:t.h,s:t.s}}get _hasCustomOverlay(){let t=this._customColour;return!!t&&t.s>0}_maskUrl(t){let{image_path:e,car_model:i,car_variant:s}=this.config,n=t.replace(".png","-mask.png");return`${e}/${i}/${s}/neutral/${n}?v=${P._imgVer}`}_customOverlayStyleFor(t){let e=this._customColour;if(!e||e.s===0)return"";let i=this._maskUrl(t);return`position:absolute;inset:0;pointer-events:none;background:hsl(${e.h},${e.s}%,50%);mix-blend-mode:color;-webkit-mask-image:url(${i});mask-image:url(${i});-webkit-mask-size:contain;mask-size:contain;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;`}_eid(t){return vt(t,this.config.car_name,this.config.entity_overrides)}_state(t){let e=this._eid(t);return e?this.hass?.states[e]:void 0}_val(t){return this._state(t)?.state}_attr(t,e){return this._state(t)?.attributes?.[e]}async _svc(t,e,i,s={}){if(i)try{await this.hass.callService(t,e,{entity_id:this._eid(i),...s})}catch(n){console.error("[tesla-card] service error",t,e,n)}}async _forceRefresh(){await this._svc("button","press",this.E.FORCE_UPDATE);let e=[this.E.BATTERY_LEVEL,this.E.BATTERY_RANGE,this.E.CHARGING_STATE,this.E.CHARGE_RATE,this.E.CHARGING,this.E.PLUGGED_IN,this.E.ONLINE,this.E.CLIMATE,this.E.DOOR_LOCK,this.E.TEMPERATURE_INSIDE,this.E.TEMPERATURE_OUTSIDE,this.E.SENTRY_MODE,this.E.FRUNK_COVER,this.E.OPEN_TRUNK,this.E.CHARGER_DOOR,this.E.WINDOWS_COVER,this.E.CHARGE_LIMIT_NUMBER,this.E.CHARGING_AMPS_NUMBER,this.E.DOOR_DRIVER_FRONT,this.E.DOOR_DRIVER_REAR,this.E.DOOR_PASSENGER_FRONT,this.E.DOOR_PASSENGER_REAR,this.E.TIME_TO_FULL_CHARGE].map(i=>this._eid(i)).filter(Boolean);setTimeout(async()=>{try{await this.hass.callService("homeassistant","update_entity",{entity_id:e})}catch(i){console.error("[tesla-card] refresh error",i)}},5e3)}_toggle(t){this._menu=this._menu===t?null:t}_openSettings(){this._settingsView="main",this._settingsSlide=null}_openModelPicker(){this._settingsView="model",this._settingsSlide=null}_closeSettings(){this._settingsView=null,this._settingsSlide=null}_onSettingsOverlayClick(t){t.target===t.currentTarget&&this._closeSettings()}render(){if(!this.config||!this.hass)return o``;let t=this._menu,e=this._colourOverride,i=this._val(this.E.BATTERY_LEVEL),s=i!=null?Math.round(Number(i)):null,n=s!=null?Math.max(0,Math.min(100,s)):0,r=n>=50?"high":n>=20?"medium":"low",d=this._val(this.E.BATTERY_RANGE),h=this._attr(this.E.BATTERY_RANGE,"unit_of_measurement")??"km",g=d!=null?`${Math.round(Number(d))} ${h}`:null,m=this._val(this.E.CHARGING)==="on",u=m?"charging":r,_=this._val(this.E.ONLINE)==="on",v=this._state(this.E.ONLINE),k=this._val(this.E.TIME_TO_FULL_CHARGE),F=(()=>{if(!m||!k||k==="unavailable")return null;let p=new Date(k);if(isNaN(p))return null;let W=p-Date.now();if(W<=0)return"Complete";let Ot=Math.floor(W/36e5),le=Math.round(W%36e5/6e4);return Ot>=24?"24+ hours remaining to charge limit":Ot>0?`${Ot}h ${le}m remaining to charge limit`:`${le}m remaining to charge limit`})(),nt=this._val(this.E.FRUNK_COVER)==="open"||this._val(this.E.FRUNK)==="on",yt=this._val(this.E.OPEN_TRUNK)==="open"||this._val(this.E.TRUNK)==="on",$=this._val(this.E.PLUGGED_IN)==="on",rt=this._val(this.E.CHARGER_DOOR)==="open"||$,x=this.E.DOOR_DRIVER_FRONT?{nf:this._val(this.E.DOOR_DRIVER_FRONT)==="on",nr:this._val(this.E.DOOR_DRIVER_REAR)==="on",ff:this._val(this.E.DOOR_PASSENGER_FRONT)==="on",fr:this._val(this.E.DOOR_PASSENGER_REAR)==="on"}:{nf:this._attr(this.E.DOORS,"driver_front")===!0,nr:this._attr(this.E.DOORS,"driver_rear")===!0,ff:this._attr(this.E.DOORS,"passenger_front")===!0,fr:this._attr(this.E.DOORS,"passenger_rear")===!0},b=$&&this._onchargeAvail,w=b?"oncharge-":"",j=`${w}base.png`,ot=b?vi:fi,lt=b?bi:[],L={frunk:nt,nf:x.nf,nr:x.nr,fr:x.fr};b||(L.chargeport=rt,L.ff=x.ff);let ct=b?"oc_all":"all",C=x.nf&&x.nr&&(b||x.ff)&&(b||x.fr)&&this._combinedAvail[ct],ht=b?"oc_nf+nr":"nf+nr",Jt=!C&&x.nf&&x.nr&&this._combinedAvail[ht],wt=!C&&!b&&x.ff&&x.fr&&this._combinedAvail["ff+fr"],At=b?He:Le,Q=[];for(let p of lt)C&&(p==="fr"||p==="ff"||p==="nf"||p==="nr")||L[p]&&Q.push(`${w}${p}-overlay.png`);let U=yt?`${w}trunk-overlay.png`:null,V=[],te=!1,ee=!1,ie=!1;for(let p of ot)if(L[p]){if(C&&(p==="nf"||p==="nr"||p==="ff"||p==="fr")){if(ie)continue;ie=!0;continue}if((p==="nf"||p==="nr")&&Jt){te&&V.push(At["nf+nr"]),te=!0;continue}if((p==="ff"||p==="fr")&&wt){ee&&V.push(At["ff+fr"]),ee=!0;continue}V.push(`${w}${p}-overlay.png`)}if(C){let p=b?De:Ie;V.push(p)}let Rt=this._val(this.E.DOOR_LOCK),dt=Rt==="locked",Ue=this._val(this.E.CHARGING_STATE)??"\u2014",Ge=this._val(this.E.CHARGE_RATE),ze=this._attr(this.E.CHARGE_RATE,"unit_of_measurement")??"kW",$t=this._val(this.E.CLIMATE),Ct=$t!=null&&$t!=="off"&&$t!=="unavailable",se=this._attr(this.E.CLIMATE,"temperature"),Be=this._attr(this.E.CLIMATE,"temperature_unit")??"\xB0C",Fe=se!=null?Number(se).toFixed(1):"\u2014",ae=!_&&v?"Asleep":m?"Charging":this.E.PARKING_BRAKE&&this._val(this.E.PARKING_BRAKE)==="on"?"Parked":(()=>{if(!this.config.show_speed)return null;let p=this._attr(this.E.LOCATION,"speed");return p!=null&&Number(p)>0?`${Math.round(Number(p))} km/h`:_?"Parked":null})(),je=m?`Charging \xB7 ${Ge??"\u2014"} ${ze}`:$?"Plugged in":Ue,Qe=Ct?`${Fe}${Be}`:"Off",ne=Rt?dt?"Locked":"Unlocked":null,St=M.find(p=>p.id===this.config.car_model),re=St?.variants.find(p=>p.id===this.config.car_variant),Ve=St&&re?`${St.name} \xB7 ${re.label}`:this.config.car_model,oe=e?.dir==="custom",We=oe?null:xt.find(p=>p.dir===this.config.car_color),Ke=oe?"Custom":We?.name??this.config.car_color,Ye=jt(this.config.car_model,this.config.car_variant),qe=this._layout==="landscape",Ze=this._cardSize!=="medium"?`size-${this._cardSize}`:"";return o`
      <ha-card class="${qe?"landscape":""} ${Ze}">

        <!-- ── Header (hidden when a submenu is open) ─────── -->
        ${t?"":o`
          <div class="header">
            <div class="header-left">
              <div class="car-name-row">
                <span class="car-name">${this.config.name??this.config.car_name}</span>
                <span class="icon name-chevron">${c(l["chevron-down"])}</span>
              </div>
              <div class="battery-summary${m?" charging":""}">
                ${s!=null?o`
                  <div class="battery-bar-small">
                    <div class="battery-fill-small ${u}" style="width:${n}%"></div>
                  </div>
                  <span class="range-text">${g??"\u2014"}</span>
                  ${m?o`<span class="icon charging-bolt">${c(l["charge-bolt"])}</span>`:""}`:""}
              </div>
              ${F?o`<span class="status-text charging-status">${F}</span>`:ae?o`<span class="status-text">${ae}</span>`:""}
            </div>
            <div class="header-right">
              <button class="icon-btn" title="Settings"
                @click=${()=>this._openSettings()}>
                <span class="icon">${c(l.settings)}</span>
              </button>
              <button class="icon-btn" title="Refresh"
                @click=${()=>this._forceRefresh()}>
                <span class="icon">${c(l.refresh)}</span>
              </button>
            </div>
          </div>
        `}

        <!-- ── Landing body (car + nav side-by-side in landscape) ── -->
        ${t?"":o`
          <div class="landing-body">
            <div class="landing-left">
              <div class="car-image-area">
                ${this._imageError?o`
                  <div class="car-image-placeholder">
                    <span class="icon">${c(l.car)}</span>
                    <span>Image not found</span>
                  </div>`:o`
                  <img class="car-image"
                    src="${this._overlayUrl(j)}"
                    alt="Tesla ${this.config.car_model}"
                    @error=${()=>{this._imageError=!0}}
                    @load=${()=>{this._imageError=!1}}
                  />
                  ${Q.map(p=>o`
                    <img class="car-overlay"
                      src="${this._overlayUrl(p)}"
                      alt="" />`)}
                  ${U?o`
                    <img class="car-overlay"
                      src="${this._overlayUrl(U)}"
                      alt="" />`:""}
                  ${V.map(p=>o`
                    <img class="car-overlay"
                      src="${this._overlayUrl(p)}"
                      alt="" />`)}
                  ${m&&b&&this._cableAvail?o`
                    <img class="car-overlay charging-glow"
                      src="${this._overlayUrl("oncharge-cable-overlay.png")}"
                      alt="" />`:""}
                `}
                ${this._hasCustomOverlay?o`
                  <div class="car-colour-overlay"
                    style="${this._customOverlayStyleFor(j)}"></div>`:""}
              </div>
              <!-- Quick action icons: lock, controls, charge, climate -->
              <div class="quick-actions">
                ${Rt?o`
                  <button class="quick-btn ${dt?"q-locked":"q-unlocked"}"
                    @click=${()=>this._svc("lock",dt?"unlock":"lock",this.E.DOOR_LOCK)}>
                    <span class="icon">${c(dt?l.lock:l.unlock)}</span>
                  </button>`:o`<span style="width:48px"></span>`}
                <button class="quick-btn" @click=${this._toggleControls}>
                  <span class="icon">${c(l.car)}</span>
                </button>
                <button class="quick-btn ${m?"q-active":""}" @click=${this._toggleCharger}>
                  <span class="icon">${c(l["charge-bolt"])}</span>
                </button>
                <button class="quick-btn ${Ct?"q-active q-climate-on":""}" @click=${this._toggleClimate}>
                  <span class="icon">${c(l["climate-fan"])}</span>
                </button>
              </div>
            </div>
            <div class="nav-rows">
              <button class="nav-row"
                @click=${this._toggleControls}>
                <span class="icon nav-icon">${c(l.car)}</span>
                <div class="nav-text">
                  <span class="nav-label">Controls</span>
                  ${ne?o`<span class="nav-sublabel">${ne}</span>`:""}
                </div>
                <span class="icon nav-chevron">${c(l["chevron-right"])}</span>
              </button>
              <button class="nav-row${Ct?" active":""}"
                @click=${this._toggleClimate}>
                <span class="icon nav-icon">${c(l["climate-fan"])}</span>
                <div class="nav-text">
                  <span class="nav-label">Climate</span>
                  <span class="nav-sublabel">${Qe}</span>
                </div>
                <span class="icon nav-chevron">${c(l["chevron-right"])}</span>
              </button>
              <button class="nav-row"
                @click=${this._toggleCharger}>
                <span class="icon nav-icon">${c(l["charge-bolt"])}</span>
                <div class="nav-text">
                  <span class="nav-label">Charging</span>
                  <span class="nav-sublabel">${je}</span>
                </div>
                <span class="icon nav-chevron">${c(l["chevron-right"])}</span>
              </button>
            </div>
          </div>
        `}

        <!-- ── Submenu panels ─────────────────────────────── -->
        ${t==="charger"?o`
          <tesla-menu-charger
            .hass=${this.hass}
            .config=${this.config}
            .layout=${this._layout}

            @close-menu=${this._handleCloseMenu}>
          </tesla-menu-charger>`:""}

        ${t==="climate"?o`
          <tesla-menu-climate
            .hass=${this.hass}
            .config=${this.config}
            .customColour=${this._customColour}
            .layout=${this._layout}

            @close-menu=${this._handleCloseMenu}>
          </tesla-menu-climate>`:""}

        ${t==="controls"?o`
          <tesla-menu-controls
            .hass=${this.hass}
            .config=${this.config}
            .customColour=${this._customColour}
            .layout=${this._layout}

            @close-menu=${this._handleCloseMenu}>
          </tesla-menu-controls>`:""}

        <!-- ── Settings: main menu ─────────────────────────── -->
        ${this._settingsView==="main"?o`
          <div class="settings-overlay"
            @click=${p=>this._onSettingsOverlayClick(p)}>
            <div class="settings-panel">
              <div class="settings-header">
                <span class="settings-title">Settings</span>
                <button class="settings-close"
                  @click=${()=>this._closeSettings()}>&times;</button>
              </div>
              <div class="settings-rows">
                <button class="settings-row"
                  @click=${()=>this._openModelPicker()}>
                  <span class="icon settings-row-icon">${c(l.car)}</span>
                  <div class="settings-row-text">
                    <span class="settings-row-label">Model & Colour</span>
                    <span class="settings-row-sub">${Ve} · ${Ke}</span>
                  </div>
                  <span class="icon settings-row-chevron">${c(l["chevron-right"])}</span>
                </button>
                <div class="settings-row settings-row-static">
                  <span class="icon settings-row-icon">${c(l.resize)}</span>
                  <div class="settings-row-text">
                    <span class="settings-row-label">Card Size</span>
                  </div>
                  <div class="settings-size-control">
                    ${Pe.map(p=>o`
                      <button class="settings-size-btn${this._cardSize===p?" selected":""}"
                        @click=${W=>{W.stopPropagation(),this._setCardSize(p)}}>
                        ${p==="small"?"S":p==="medium"?"M":"L"}
                      </button>`)}
                  </div>
                </div>
                <button class="settings-row"
                  @click=${()=>this._toggleLayout()}>
                  <span class="icon settings-row-icon">${c(l.layout)}</span>
                  <div class="settings-row-text">
                    <span class="settings-row-label">Layout</span>
                    <span class="settings-row-sub">${this._layout==="landscape"?"Landscape":"Portrait"}</span>
                  </div>
                  <span class="icon settings-row-chevron">${c(l["chevron-right"])}</span>
                </button>
              </div>
            </div>
          </div>
        `:""}

        <!-- ── Settings: model picker ──────────────────────── -->
        ${this._settingsView==="model"?o`
          <tesla-model-picker
            .model=${this.config.car_model}
            .variant=${this.config.car_variant}
            slide-from=${this._settingsSlide??"up"}
            @model-changed=${this._handleModelChanged}
            @picker-back=${this._handleModelBack}
            @picker-close=${this._handlePickerClose}>
          </tesla-model-picker>`:""}

        <!-- ── Settings: colour picker ─────────────────────── -->
        ${this._settingsView==="colour"?o`
          <tesla-colour-picker
            .selected=${e?.dir??this.config.car_color}
            .available=${Ye}
            .customH=${e?.dir==="custom"?e.h:0}
            .customS=${e?.dir==="custom"?e.s:80}
            showBack
            slide-from=${this._settingsSlide??"up"}
            @colour-changed=${this._handleColourChanged}
            @picker-back=${this._handleColourBack}
            @picker-close=${this._handlePickerClose}>
          </tesla-colour-picker>`:""}

      </ha-card>
    `}getCardSize(){return 5}getGridOptions(){return{columns:12,min_columns:4,rows:"auto",min_rows:3}}};pt(P,"_imgVer",Date.now());var Xt=P;customElements.define("tesla-card",Xt);window.customCards=window.customCards||[];window.customCards.push({type:"tesla-card",name:"Tesla Card",description:"A Lovelace card for Tesla vehicles \u2014 supports both official Fleet and alandtse/tesla integrations",preview:!1});
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
lit-html/directive.js:
lit-html/directives/unsafe-html.js:
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
*/

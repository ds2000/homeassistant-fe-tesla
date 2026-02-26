var et=globalThis,st=et.ShadowRoot&&(et.ShadyCSS===void 0||et.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ct=Symbol(),Nt=new WeakMap,z=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==ct)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(st&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=Nt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Nt.set(e,t))}return t}toString(){return this.cssText}},It=o=>new z(typeof o=="string"?o:o+"",void 0,ct),x=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((s,i,n)=>s+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[n+1],o[0]);return new z(e,o,ct)},Lt=(o,t)=>{if(st)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),i=et.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,o.appendChild(s)}},ht=st?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return It(e)})(o):o;var{is:pe,defineProperty:de,getOwnPropertyDescriptor:ue,getOwnPropertyNames:ge,getOwnPropertySymbols:me,getPrototypeOf:_e}=Object,C=globalThis,Ht=C.trustedTypes,fe=Ht?Ht.emptyScript:"",be=C.reactiveElementPolyfillSupport,G=(o,t)=>o,pt={toAttribute(o,t){switch(t){case Boolean:o=o?fe:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Pt=(o,t)=>!pe(o,t),Ut={attribute:!0,type:String,converter:pt,reflect:!1,useDefault:!1,hasChanged:Pt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),C.litPropertyMetadata??(C.litPropertyMetadata=new WeakMap);var y=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Ut){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&de(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){let{get:i,set:n}=ue(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get:i,set(a){let u=i?.call(this);n?.call(this,a),this.requestUpdate(t,u,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ut}static _$Ei(){if(this.hasOwnProperty(G("elementProperties")))return;let t=_e(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(G("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(G("properties"))){let e=this.properties,s=[...ge(e),...me(e)];for(let i of s)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(ht(i))}else t!==void 0&&e.push(ht(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Lt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let n=(s.converter?.toAttribute!==void 0?s.converter:pt).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let n=s.getPropertyOptions(i),a=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:pt;this._$Em=i;let u=a.fromAttribute(e,n.type);this[i]=u??this._$Ej?.get(i)??u,this._$Em=null}}requestUpdate(t,e,s,i=!1,n){if(t!==void 0){let a=this.constructor;if(i===!1&&(n=this[t]),s??(s=a.getPropertyOptions(t)),!((s.hasChanged??Pt)(n,e)||s.useDefault&&s.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:n},a){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,a??e??this[t]),n!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,n]of s){let{wrapped:a}=n,u=this[i];a!==!0||this._$AL.has(i)||u===void 0||this.C(i,void 0,n,u)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[G("elementProperties")]=new Map,y[G("finalized")]=new Map,be?.({ReactiveElement:y}),(C.reactiveElementVersions??(C.reactiveElementVersions=[])).push("2.1.2");var K=globalThis,Dt=o=>o,it=K.trustedTypes,jt=it?it.createPolicy("lit-html",{createHTML:o=>o}):void 0,Ft="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,Wt="?"+A,ve=`<${Wt}>`,L=document,F=()=>L.createComment(""),W=o=>o===null||typeof o!="object"&&typeof o!="function",bt=Array.isArray,xe=o=>bt(o)||typeof o?.[Symbol.iterator]=="function",dt=`[ 	
\f\r]`,V=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Bt=/-->/g,zt=/>/g,N=RegExp(`>|${dt}(?:([^\\s"'>=/]+)(${dt}*=${dt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Gt=/'/g,Vt=/"/g,qt=/^(?:script|style|textarea|title)$/i,vt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),l=vt(1),Ne=vt(2),Ie=vt(3),E=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),Kt=new WeakMap,I=L.createTreeWalker(L,129);function Yt(o,t){if(!bt(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return jt!==void 0?jt.createHTML(t):t}var ke=(o,t)=>{let e=o.length-1,s=[],i,n=t===2?"<svg>":t===3?"<math>":"",a=V;for(let u=0;u<e;u++){let p=o[u],g,m,d=-1,f=0;for(;f<p.length&&(a.lastIndex=f,m=a.exec(p),m!==null);)f=a.lastIndex,a===V?m[1]==="!--"?a=Bt:m[1]!==void 0?a=zt:m[2]!==void 0?(qt.test(m[2])&&(i=RegExp("</"+m[2],"g")),a=N):m[3]!==void 0&&(a=N):a===N?m[0]===">"?(a=i??V,d=-1):m[1]===void 0?d=-2:(d=a.lastIndex-m[2].length,g=m[1],a=m[3]===void 0?N:m[3]==='"'?Vt:Gt):a===Vt||a===Gt?a=N:a===Bt||a===zt?a=V:(a=N,i=void 0);let b=a===N&&o[u+1].startsWith("/>")?" ":"";n+=a===V?p+ve:d>=0?(s.push(g),p.slice(0,d)+Ft+p.slice(d)+A+b):p+A+(d===-2?u:b)}return[Yt(o,n+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},q=class o{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,a=0,u=t.length-1,p=this.parts,[g,m]=ke(t,e);if(this.el=o.createElement(g,s),I.currentNode=this.el.content,e===2||e===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=I.nextNode())!==null&&p.length<u;){if(i.nodeType===1){if(i.hasAttributes())for(let d of i.getAttributeNames())if(d.endsWith(Ft)){let f=m[a++],b=i.getAttribute(d).split(A),k=/([.?@])?(.*)/.exec(f);p.push({type:1,index:n,name:k[2],strings:b,ctor:k[1]==="."?gt:k[1]==="?"?mt:k[1]==="@"?_t:D}),i.removeAttribute(d)}else d.startsWith(A)&&(p.push({type:6,index:n}),i.removeAttribute(d));if(qt.test(i.tagName)){let d=i.textContent.split(A),f=d.length-1;if(f>0){i.textContent=it?it.emptyScript:"";for(let b=0;b<f;b++)i.append(d[b],F()),I.nextNode(),p.push({type:2,index:++n});i.append(d[f],F())}}}else if(i.nodeType===8)if(i.data===Wt)p.push({type:2,index:n});else{let d=-1;for(;(d=i.data.indexOf(A,d+1))!==-1;)p.push({type:7,index:n}),d+=A.length-1}n++}}static createElement(t,e){let s=L.createElement("template");return s.innerHTML=t,s}};function P(o,t,e=o,s){if(t===E)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl,n=W(t)?void 0:t._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(o),i._$AT(o,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=P(o,i._$AS(o,t.values),i,s)),t}var ut=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??L).importNode(e,!0);I.currentNode=i;let n=I.nextNode(),a=0,u=0,p=s[0];for(;p!==void 0;){if(a===p.index){let g;p.type===2?g=new Y(n,n.nextSibling,this,t):p.type===1?g=new p.ctor(n,p.name,p.strings,this,t):p.type===6&&(g=new ft(n,this,t)),this._$AV.push(g),p=s[++u]}a!==p?.index&&(n=I.nextNode(),a++)}return I.currentNode=L,i}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},Y=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=P(this,t,e),W(t)?t===_||t==null||t===""?(this._$AH!==_&&this._$AR(),this._$AH=_):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):xe(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==_&&W(this._$AH)?this._$AA.nextSibling.data=t:this.T(L.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=q.createElement(Yt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{let n=new ut(i,this),a=n.u(this.options);n.p(e),this.T(a),this._$AH=n}}_$AC(t){let e=Kt.get(t.strings);return e===void 0&&Kt.set(t.strings,e=new q(t)),e}k(t){bt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let n of t)i===e.length?e.push(s=new o(this.O(F()),this.O(F()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let s=Dt(t).nextSibling;Dt(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},D=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=_,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=_}_$AI(t,e=this,s,i){let n=this.strings,a=!1;if(n===void 0)t=P(this,t,e,0),a=!W(t)||t!==this._$AH&&t!==E,a&&(this._$AH=t);else{let u=t,p,g;for(t=n[0],p=0;p<n.length-1;p++)g=P(this,u[s+p],e,p),g===E&&(g=this._$AH[p]),a||(a=!W(g)||g!==this._$AH[p]),g===_?t=_:t!==_&&(t+=(g??"")+n[p+1]),this._$AH[p]=g}a&&!i&&this.j(t)}j(t){t===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},gt=class extends D{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===_?void 0:t}},mt=class extends D{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==_)}},_t=class extends D{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=P(this,t,e,0)??_)===E)return;let s=this._$AH,i=t===_&&s!==_||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==_&&(s===_||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},ft=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}};var $e=K.litHtmlPolyfillSupport;$e?.(q,Y),(K.litHtmlVersions??(K.litHtmlVersions=[])).push("3.3.2");var Xt=(o,t,e)=>{let s=e?.renderBefore??t,i=s._$litPart$;if(i===void 0){let n=e?.renderBefore??null;s._$litPart$=i=new Y(t.insertBefore(F(),n),n,void 0,e??{})}return i._$AI(o),i};var X=globalThis,v=class extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Xt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return E}};v._$litElement$=!0,v.finalized=!0,X.litElementHydrateSupport?.({LitElement:v});var we=X.litElementPolyfillSupport;we?.({LitElement:v});(X.litElementVersions??(X.litElementVersions=[])).push("4.2.2");var Jt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Zt=o=>(...t)=>({_$litDirective$:o,values:t}),nt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var J=class extends nt{constructor(t){if(super(t),this.it=_,t.type!==Jt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===_||t==null)return this._t=void 0,this.it=t;if(t===E)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};J.directiveName="unsafeHTML",J.resultType=1;var c=Zt(J);var S=x`
  :host {
    display: block;
    font-family: system-ui, -apple-system, sans-serif;
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
  }

  .icon svg {
    width: 100%;
    height: 100%;
  }

  /* Active / lit-up state for stateful icons */
  .icon-on { color: #ffffff; }

  /* ── Colour overlay (CSS mask + blend for body recolouring) ── */

  .car-colour-overlay {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    -webkit-mask-size: contain;
    mask-size: contain;
    -webkit-mask-position: center;
    mask-position: center;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
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
`,Qt=x`
  .charger-menu {
    display: flex;
    flex-direction: column;
    padding: 0;
  }

  /* Main card: charge limit + slider + amps stepper */
  .chg-card {
    margin: 16px 16px 0;
    background: #1c1c1e;
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
    background: #252527;
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
`,te=x`
  .climate-menu {
    display: flex;
    flex-direction: column;
    padding: 0;
  }

  /* Car area — dark slab with seat heat tap zones overlaid */
  .clim-car-area {
    background: #080808;
    height: 220px;
    position: relative;
    overflow: hidden;
  }

  .clim-car-bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    pointer-events: none;
    opacity: 0.85;
  }

  /* Seat heat tap zones (positioned in the car area) */
  .clim-seat-zone {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 10px 14px;
    border-radius: 10px;
    transform: translate(-50%, -50%);
    transition: background 0.15s ease;
    -webkit-tap-highlight-color: transparent;
  }

  .clim-seat-zone:hover  { background: rgba(255,255,255,0.06); }
  .clim-seat-zone:active { background: rgba(255,255,255,0.1); }

  .clim-seat-zone .icon {
    width: 28px;
    height: 28px;
  }

  .clim-seat-zone span {
    font-size: 0.62em;
    font-weight: 500;
    color: rgba(255,255,255,0.35);
    letter-spacing: 0.02em;
  }

  /* Seat positions — approximate top-down car layout */
  .clim-seat-fl { top: 32%; left: 25%; }  /* front driver   */
  .clim-seat-fr { top: 32%; left: 75%; }  /* front passenger*/
  .clim-seat-rl { top: 70%; left: 22%; }  /* rear left      */
  .clim-seat-rc { top: 70%; left: 50%; }  /* rear centre    */
  .clim-seat-rr { top: 70%; left: 78%; }  /* rear right     */

  /* Bottom sheet container — slides up when expanded */
  .clim-sheet {
    background: #111111;
    border-radius: 14px 14px 0 0;
    margin-top: -14px;   /* overlap the car area slightly */
    position: relative;
    z-index: 1;
    padding-bottom: 4px;
  }

  /* Drag handle row */
  .clim-handle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 12px 0 8px;
    background: transparent;
    border: none;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  .clim-handle-pill {
    width: 36px;
    height: 4px;
    background: rgba(255,255,255,0.2);
    border-radius: 2px;
    transition: background 0.15s ease;
  }

  .clim-handle:hover .clim-handle-pill { background: rgba(255,255,255,0.38); }

  /* Interior / Exterior temp info line */
  .clim-temp-info {
    text-align: center;
    font-size: 0.8em;
    font-weight: 500;
    color: rgba(255,255,255,0.45);
    letter-spacing: 0.02em;
    padding: 0 20px 16px;
  }

  /* Main control row: [Power] [← Temp →] [Vent] */
  .clim-main-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px 20px;
  }

  /* Power / Vent icon+label buttons */
  .clim-icon-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    background: transparent;
    border: none;
    color: rgba(255,255,255,0.45);
    font-family: inherit;
    font-size: 0.72em;
    font-weight: 500;
    cursor: pointer;
    padding: 8px 10px;
    min-width: 52px;
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
    color: rgba(255,255,255,0.4);
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

  /* Defrost Car — full-width pill button (always visible) */
  .clim-full-btn {
    display: flex;
    align-items: center;
    gap: 14px;
    width: calc(100% - 32px);
    margin: 0 16px 10px;
    padding: 16px 18px;
    background: #1c1c1e;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 12px;
    color: rgba(255,255,255,0.85);
    font-family: inherit;
    font-size: 0.9em;
    font-weight: 500;
    cursor: pointer;
    text-align: left;
    -webkit-tap-highlight-color: transparent;
    transition: background 0.15s ease;
  }

  .clim-full-btn:hover { background: #252528; }

  .clim-full-btn.active {
    background: rgba(232,33,39,0.15);
    border-color: rgba(232,33,39,0.3);
    color: #ff7070;
  }

  .clim-full-btn .icon {
    width: 22px;
    height: 22px;
    color: rgba(255,255,255,0.5);
  }

  .clim-full-btn.active .icon { color: #e82127; }

  /* Expandable heated seat section */
  .clim-expanded-content {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.35s ease;
  }

  .clim-sheet.expanded .clim-expanded-content {
    max-height: 520px;
  }

  /* List group container — matches Tesla app Camp Mode / Dog Mode style */
  .clim-list-group {
    margin: 0 16px 10px;
    background: #1c1c1e;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 12px;
    overflow: hidden;
  }

  .clim-list-group--last { margin-bottom: 16px; }

  /* Each row in the list group */
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

  .clim-list-item.hot {
    color: rgba(255,255,255,0.9);
  }

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

  /* Section title — matches "Cabin Overheat Protection" bold white heading */
  .clim-section-title {
    font-size: 0.9em;
    font-weight: 700;
    color: #ffffff;
    padding: 12px 16px 8px;
  }

  /* Horizontal separator between Camp/Dog group and Overheat section */
  .clim-separator {
    height: 1px;
    background: rgba(255,255,255,0.1);
    margin: 8px 16px;
  }

  /* Segmented control container — extends .clim-list-group */
  .clim-segment-group {
    display: flex;
    padding: 4px;
    gap: 2px;
  }

  /* Each segment option button */
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
`,ee=x`
  .controls-menu {
    display: flex;
    flex-direction: column;
    padding: 0;
  }

  /* Controls: car interaction area */
  .ctrl-car-area {
    position: relative;
    background: #080808;
    height: 300px;
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
    color: rgba(255,255,255,0.88);
    font-family: inherit;
    font-size: 1.1em;
    font-weight: 400;
    cursor: pointer;
    padding: 14px 28px;
    -webkit-tap-highlight-color: transparent;
    transition: color 0.12s ease;
    user-select: none;
  }

  .ctrl-zone:active { color: rgba(255,255,255,0.5); }

  /* Frunk: upper area, text only */
  .ctrl-frunk {
    top: 14%;
    left: 50%;
    transform: translateX(-50%);
  }

  /* Lock: car centre, icon only — larger icon */
  .ctrl-lock {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .ctrl-lock .icon {
    width: 34px;
    height: 34px;
  }

  /* Trunk: lower area, text only */
  .ctrl-trunk {
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
  }

  /* Charge port: bottom-left — small icon, highlights when open */
  .ctrl-port {
    bottom: 16%;
    left: 5%;
    padding: 10px 12px;
    color: rgba(255,255,255,0.35);
    font-size: 1em;
  }

  .ctrl-port .icon {
    width: 22px;
    height: 22px;
  }

  .ctrl-port.port-open { color: #ffffff; }

  /* Controls: bottom action bar */
  .ctrl-actions {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 14px 8px 18px;
    border-top: 1px solid rgba(255,255,255,0.07);
  }

  .ctrl-action-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    flex: 1;
    background: transparent;
    border: none;
    color: rgba(255,255,255,0.5);
    font-family: inherit;
    font-size: 0.72em;
    cursor: pointer;
    padding: 6px 4px;
    -webkit-tap-highlight-color: transparent;
    transition: color 0.15s ease;
  }

  .ctrl-action-btn:hover  { color: rgba(255,255,255,0.85); }
  .ctrl-action-btn:active { color: #ffffff; }

  .ctrl-action-btn .icon {
    width: 26px;
    height: 26px;
  }
`,se=x`
  ha-card {
    display: block;
    background: var(--ha-card-background, #0d0d0d);
    color: #ffffff;
    overflow: hidden;
    position: relative;
    border-radius: 12px;
    padding: 0;
  }

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

  .online-badge {
    font-size: 0.68em;
    padding: 3px 8px;
    border-radius: 12px;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .online-badge.online {
    background: rgba(39,174,96,0.15);
    color: #2ecc71;
    border: 1px solid rgba(46,204,113,0.3);
  }

  .online-badge.offline {
    background: rgba(192,57,43,0.15);
    color: #e74c3c;
    border: 1px solid rgba(231,76,60,0.3);
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

  .icon-btn:hover { color: rgba(255,255,255,0.75); }

  .icon-btn .icon {
    width: 20px;
    height: 20px;
  }

  /* ── Car image ───────────────────────────────────────────── */

  .car-image-area {
    position: relative;
    width: 100%;
    background: #0d0d0d;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 160px;
    overflow: hidden;
  }

  .car-image {
    width: 100%;
    max-height: 260px;
    object-fit: contain;
    object-position: center;
    display: block;
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
    background: #0d0d0d;
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

  .quick-btn .icon {
    width: 26px;
    height: 26px;
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
  .nav-row:last-child { border-bottom: none; }

  .nav-row.active {
    background: rgba(232,33,39,0.06);
  }

  .nav-icon {
    width: 22px;
    height: 22px;
    color: rgba(255,255,255,0.38);
  }

  .nav-row.active .nav-icon { color: #e82127; }

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
    background: #1c1c1e;
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
  .settings-row:active { background: rgba(255,255,255,0.06); }

  .settings-row-icon {
    width: 22px;
    height: 22px;
    color: rgba(255,255,255,0.45);
  }

  .settings-swatch {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 2px solid rgba(255,255,255,0.15);
    flex-shrink: 0;
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
`;var r={BATTERY_LEVEL:"sensor.{car_name}_battery",BATTERY_RANGE:"sensor.{car_name}_battery_range",CHARGE_RATE:"sensor.{car_name}_charge_rate",CHARGE_LIMIT:"sensor.{car_name}_charge_limit",CHARGING_STATE:"sensor.{car_name}_charging_state",TEMPERATURE_INSIDE:"sensor.{car_name}_temperature_inside",TEMPERATURE_OUTSIDE:"sensor.{car_name}_temperature_outside",SPEED:"sensor.{car_name}_speed",ODOMETER:"sensor.{car_name}_odometer",CHARGING:"binary_sensor.{car_name}_charging",PLUGGED_IN:"binary_sensor.{car_name}_plugged_in",PARKING_BRAKE:"binary_sensor.{car_name}_parking_brake",FRUNK:"binary_sensor.{car_name}_frunk",TRUNK:"binary_sensor.{car_name}_trunk",DOORS:"binary_sensor.{car_name}_doors",WINDOWS:"binary_sensor.{car_name}_windows",LOCKED:"binary_sensor.{car_name}_locked",ONLINE:"binary_sensor.{car_name}_online",SENTRY_MODE:"binary_sensor.{car_name}_sentry_mode",DOOR_LOCK:"lock.{car_name}_doors",CHARGER_SWITCH:"switch.{car_name}_charger",SENTRY_MODE_SWITCH:"switch.{car_name}_sentry_mode",DEFROST_SWITCH:"switch.{car_name}_defrost",CAMP_MODE:"switch.{car_name}_camp_mode",DOG_MODE:"switch.{car_name}_dog_mode",CABIN_OVERHEAT:"select.{car_name}_cabin_overheat_protection",HEATED_SEAT_LEFT:"select.{car_name}_heated_seat_left",HEATED_SEAT_RIGHT:"select.{car_name}_heated_seat_right",HEATED_SEAT_REAR_LEFT:"select.{car_name}_heated_seat_rear_left",HEATED_SEAT_REAR_CENTER:"select.{car_name}_heated_seat_rear_center",HEATED_SEAT_REAR_RIGHT:"select.{car_name}_heated_seat_rear_right",CLIMATE:"climate.{car_name}_hvac_climate_system",CHARGE_LIMIT_NUMBER:"number.{car_name}_charge_limit",CHARGING_AMPS_NUMBER:"number.{car_name}_charging_amps",CHARGE_PORT_OPEN:"button.{car_name}_charge_port_open",CHARGE_PORT_CLOSE:"button.{car_name}_charge_port_close",VENT_WINDOWS:"button.{car_name}_vent_windows",CLOSE_WINDOWS:"button.{car_name}_close_windows",HORN:"button.{car_name}_horn",FLASH_LIGHTS:"button.{car_name}_flash_lights",REMOTE_START:"button.{car_name}_remote_start",OPEN_FRUNK:"button.{car_name}_frunk",OPEN_TRUNK:"button.{car_name}_trunk",FORCE_UPDATE:"button.{car_name}_force_data_update",WINDOWS_COVER:"cover.{car_name}_windows",FRUNK_COVER:"cover.{car_name}_frunk",CHARGER_DOOR:"cover.{car_name}_charger_door",ENERGY_ADDED:"sensor.{car_name}_energy_added",LOCATION:"device_tracker.{car_name}_location_tracker"};function rt(o,t){return o.replace("{car_name}",t)}var h={lock:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6" />
    <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
  </svg>`,unlock:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -6" />
    <path d="M11 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M8 11v-5a4 4 0 0 1 8 0" />
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
  </svg>`,"charge-bolt":`<svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M13.5 2L5 13h5.5L8.5 22l10-11h-5.5z"/>
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
  </svg>`,"climate-fan":`<svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <circle cx="12" cy="12" r="1.5"/>
    <path d="M12 12C12 8 11 5 8 4 5 3 5 7 7 10 8 11 10 12 12 12Z"/>
    <path d="M12 12C16 12 19 11 20 8 21 5 17 5 14 7 13 8 12 10 12 12Z"/>
    <path d="M12 12C12 16 13 19 16 20 19 21 19 17 17 14 16 13 14 12 12 12Z"/>
    <path d="M12 12C8 12 5 13 4 16 3 19 7 19 10 17 11 16 12 14 12 12Z"/>
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
  </svg>`,car:`<svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M8 6h8a2 2 0 0 1 2 2v2l2 2a1 1 0 0 1 1 1v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a1 1 0 0 1 1-1l2-2V8a2 2 0 0 1 2-2z"/>
    <rect x="1.5" y="12.5" width="1.5" height="1.5" rx=".75"/>
    <rect x="21" y="12.5" width="1.5" height="1.5" rx=".75"/>
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
  </svg>`,"flash-lights":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 6h-2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2l3-3V9L9 6z"/>
    <path d="M15 8h4"/>
    <path d="M15 12h5"/>
    <path d="M15 16h4"/>
  </svg>`,horn:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M18 8a6 6 0 0 1 0 8"/>
    <path d="M21 5a10 10 0 0 1 0 14"/>
    <path d="M3 10v4a1 1 0 0 0 1 1h2l4 4V5L6 9H4a1 1 0 0 0-1 1z"/>
  </svg>`,"remote-start":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="8" cy="12" r="4"/>
    <path d="M12 12h8"/>
    <path d="M17 9v3"/>
    <path d="M20 9v3"/>
  </svg>`,location:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
    <circle cx="12" cy="9" r="2.5"/>
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
  </svg>`};var M=[{id:"3",name:"Model 3",variants:[{id:"3.1",label:"2017\u20132023",source:"red"},{id:"3.2",label:"2024+ Highland",source:null}]},{id:"Y",name:"Model Y",variants:[{id:"Y.1",label:"2020\u20132024",source:"white"},{id:"Y.2",label:"2025+ Juniper",source:null}]},{id:"S",name:"Model S",variants:[{id:"S.1",label:"2012\u20132021",source:"white"},{id:"S.2",label:"2021+ Refresh",source:null}]},{id:"X",name:"Model X",variants:[{id:"X.1",label:"2015\u20132021",source:null},{id:"X.2",label:"2021+ Refresh",source:null}]},{id:"CT",name:"Cybertruck",variants:[{id:"CT.1",label:"2024+",source:null}]}];function ot(o,t){let e=M.find(i=>i.id===o);return e?e.variants.find(i=>i.id===t)?.source??null:null}function xt(o){return M.find(e=>e.id===o)?.variants??[]}var kt=class extends v{static get properties(){return{hass:{type:Object},config:{type:Object}}}setConfig(t){this.config=t}_valueChanged(t){if(!this.config||!this.hass)return;let e=t.target,s={...this.config,[e.name]:e.value};this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:s}}))}_modelChanged(t){if(!this.config||!this.hass)return;let e=t.target.value,i=xt(e)[0]?.id??"",n={...this.config,car_model:e,car_variant:i};this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:n}}))}render(){if(!this.config)return l``;let t=this.config.car_model??"3",e=xt(t);return l`
      <div class="editor">
        <label>
          Car Name (entity prefix) *
          <input
            name="car_name"
            .value=${this.config.car_name??""}
            @change=${this._valueChanged}
            placeholder="e.g. my_tesla"
          />
        </label>
        <label>
          Model
          <select name="car_model" .value=${t} @change=${this._modelChanged}>
            ${M.map(s=>l`
              <option value="${s.id}" ?selected=${s.id===t}>${s.name}</option>
            `)}
          </select>
        </label>
        <label>
          Variant
          <select name="car_variant" .value=${this.config.car_variant??""} @change=${this._valueChanged}>
            ${e.map(s=>l`
              <option value="${s.id}" ?selected=${s.id===this.config.car_variant}>${s.label}</option>
            `)}
          </select>
        </label>
        <label>
          Image Path
          <input
            name="image_path"
            .value=${this.config.image_path??"/local/Tesla"}
            @change=${this._valueChanged}
            placeholder="/local/Tesla"
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
      </div>
    `}static get styles(){return x`
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
    `}};customElements.define("tesla-card-editor",kt);var T=class extends v{static get properties(){return{hass:{type:Object},config:{type:Object},carColour:{type:Object}}}_eid(t){return rt(t,this.config.car_name)}_state(t){return this.hass?.states[this._eid(t)]}_val(t){return this._state(t)?.state}_attr(t,e){return this._state(t)?.attributes?.[e]}_nattr(t,e){let s=this._attr(t,e);return s!=null?Number(s):null}_imgUrl(t){let{image_path:e,car_model:s,car_variant:i,car_color:n}=this.config;return`${e}/${s}/${i}/${n}/${t}`}_bgUrl(t){let{image_path:e,car_model:s,car_variant:i}=this.config;return`${e}/${s}/${i}/neutral/${t}`}_maskUrl(t){let e=t.replace(/\.(png|jpg)$/i,"-mask.png"),{image_path:s,car_model:i,car_variant:n}=this.config;return`${s}/${i}/${n}/neutral/${e}`}_sourceUrl(t){let e=ot(this.config.car_model,this.config.car_variant);if(!e)return null;let{image_path:s,car_model:i,car_variant:n}=this.config;return`${s}/${i}/${n}/${e}/${t}`}get _hasOverlay(){let t=this.carColour;return!!t&&(t.s>0||!!(t.blend&&t.bg)||!!t.filter)}_overlayStyle(t){let e=this.carColour;if(!e)return"";let s=this._maskUrl(t),i=`-webkit-mask-image:url(${s});mask-image:url(${s});`,n=this._sourceUrl(t);return n&&e.filter?`background-image:url(${n});filter:${e.filter};${i}`:e.s>0?`background:hsl(${e.h},${e.s}%,50%);mix-blend-mode:color;${i}`:e.blend&&e.bg?`background:${e.bg};mix-blend-mode:${e.blend};${i}`:""}async _svc(t,e,s,i={}){try{await this.hass.callService(t,e,{entity_id:this._eid(s),...i})}catch(n){console.error("[tesla-card] service error",t,e,n)}}_close(){this.dispatchEvent(new CustomEvent("close-menu",{bubbles:!0,composed:!0}))}};var $t=class extends T{static get properties(){return{...super.properties,_pendingLimit:{state:!0},_pendingAmps:{state:!0}}}static get styles(){return[S,Qt]}constructor(){super(),this._pendingLimit=null,this._pendingAmps=null}_pct(t,e,s){return Math.round((t-e)/(s-e)*100)}_onLimitInput(t){t.target.style.setProperty("--pct",`${this._pct(+t.target.value,+t.target.min,+t.target.max)}%`),this._pendingLimit=+t.target.value}_onLimitChange(t){this._pendingLimit=null,this._svc("number","set_value",r.CHARGE_LIMIT_NUMBER,{value:+t.target.value})}_onAmpsInput(t){t.target.style.setProperty("--pct",`${this._pct(+t.target.value,+t.target.min,+t.target.max)}%`),this._pendingAmps=+t.target.value}_onAmpsChange(t){this._pendingAmps=null,this._svc("number","set_value",r.CHARGING_AMPS_NUMBER,{value:+t.target.value})}_adjustAmps(t){let e=this._nattr(r.CHARGING_AMPS_NUMBER,"step")??1,s=this._nattr(r.CHARGING_AMPS_NUMBER,"min")??5,i=this._nattr(r.CHARGING_AMPS_NUMBER,"max")??32,n=this._pendingAmps??Number(this._val(r.CHARGING_AMPS_NUMBER)??16);this._pendingAmps=Math.max(s,Math.min(i,n+t*e)),clearTimeout(this._ampsTimer),this._ampsTimer=setTimeout(()=>{this._svc("number","set_value",r.CHARGING_AMPS_NUMBER,{value:this._pendingAmps}),this._pendingAmps=null},800)}render(){if(!this.config||!this.hass)return l``;let t=this._val(r.BATTERY_RANGE),e=this._attr(r.BATTERY_RANGE,"unit_of_measurement")??"km",s=t!=null?`${Math.round(Number(t))} ${e}`:null,i=this._val(r.CHARGER_DOOR)==="open"||this._val(r.PLUGGED_IN)==="on",n=this._pendingLimit??Number(this._val(r.CHARGE_LIMIT_NUMBER)??80),a=this._nattr(r.CHARGE_LIMIT_NUMBER,"min")??50,u=this._nattr(r.CHARGE_LIMIT_NUMBER,"max")??100,p=this._nattr(r.CHARGE_LIMIT_NUMBER,"step")??1,g=this._pct(n,a,u),m=this._pendingAmps??Number(this._val(r.CHARGING_AMPS_NUMBER)??16),d=this._nattr(r.CHARGING_AMPS_NUMBER,"min")??5,f=this._nattr(r.CHARGING_AMPS_NUMBER,"max")??32,b=this._attr(r.ENERGY_ADDED,"added_range");return l`
      <div class="charger-menu">

        <!-- Header: "Charging" + range subtitle -->
        <div class="panel-header">
          <button class="panel-back" @click=${this._close}>
            <span class="icon">${c(h["chevron-left"])}</span>
          </button>
          <div class="panel-title-block">
            <span class="panel-title">Charging</span>
            ${s?l`<span class="panel-subtitle">${s}</span>`:""}
          </div>
        </div>

        <!-- Charge limit card + amps stepper -->
        <div class="chg-card">
          <div class="chg-limit-header">
            <span class="chg-limit-title">Charge limit: ${n}%</span>
            ${b?l`
              <p class="chg-limit-sub">${b} km added during last charging session</p>`:""}
          </div>

          <!-- Green pill slider for charge limit -->
          <input type="range" class="chg-slider" style="--pct:${g}%"
            min=${a} max=${u} step=${p}
            .value=${String(n)}
            @input=${this._onLimitInput} @change=${this._onLimitChange}/>

          <!-- Amps stepper row -->
          <div class="chg-amps-row">
            <button class="chg-amps-btn"
              ?disabled=${m<=d}
              @click=${()=>this._adjustAmps(-1)}>
              <span class="icon">${c(h["chevron-left"])}</span>
            </button>
            <span class="chg-amps-value">${m} A</span>
            <button class="chg-amps-btn"
              ?disabled=${m>=f}
              @click=${()=>this._adjustAmps(1)}>
              <span class="icon">${c(h["chevron-right"])}</span>
            </button>
          </div>
        </div>

        <!-- Open / Close Charge Port — plain text link -->
        <button class="chg-port-btn"
          @click=${()=>this._svc("button","press",i?r.CHARGE_PORT_CLOSE:r.CHARGE_PORT_OPEN)}>
          ${i?"Close Charge Port":"Open Charge Port"}
        </button>

      </div>
    `}};customElements.define("tesla-menu-charger",$t);var wt=class extends T{static get properties(){return{...super.properties,_pendingTemp:{state:!0},_climExpanded:{state:!0}}}static get styles(){return[S,te]}constructor(){super(),this._pendingTemp=null,this._climExpanded=!1}_adjustTemp(t){let e=Number(this._attr(r.CLIMATE,"target_temp_step")??.5),s=Number(this._attr(r.CLIMATE,"min_temp")??15),i=Number(this._attr(r.CLIMATE,"max_temp")??28),n=this._pendingTemp??(this._attr(r.CLIMATE,"temperature")!=null?Number(this._attr(r.CLIMATE,"temperature")):22);this._pendingTemp=Math.max(s,Math.min(i,Math.round((n+t*e)/e)*e)),clearTimeout(this._tempTimer),this._tempTimer=setTimeout(()=>{this._svc("climate","set_temperature",r.CLIMATE,{temperature:this._pendingTemp}),this._pendingTemp=null},800)}_seatHeatSvg(t){let e=t==="High"?3:t==="Medium"?2:t==="Low"?1:0,s="#e82127",i="rgba(255,255,255,0.25)",n=(a,u)=>`<path d="M${a} 5c-2 2.5 2 5 0 7c-2 2.5 2 5 0 7" stroke="${u?s:i}" fill="none"/>`;return`<svg viewBox="0 0 24 24" stroke-width="2.8" stroke-linecap="round">${n(6,e>=1)}${n(12,e>=2)}${n(18,e>=3)}</svg>`}_close(){this._climExpanded=!1,super._close()}render(){if(!this.config||!this.hass)return l``;let t=this._val(r.CLIMATE),e=t!=null&&t!=="off"&&t!=="unavailable",s=this._attr(r.CLIMATE,"temperature"),i=s!=null?Number(s):null,n=this._pendingTemp??i,a=this._attr(r.CLIMATE,"temperature_unit")??"\xB0C",u=n!=null?n.toFixed(1):"\u2014",p=this._val(r.DEFROST_SWITCH)==="on",g=this._val(r.HEATED_SEAT_LEFT),m=this._val(r.HEATED_SEAT_RIGHT),d=this._val(r.HEATED_SEAT_REAR_LEFT),f=this._val(r.HEATED_SEAT_REAR_CENTER),b=this._val(r.HEATED_SEAT_REAR_RIGHT),k=this._val(r.TEMPERATURE_INSIDE),at=this._attr(r.TEMPERATURE_INSIDE,"unit_of_measurement")??"\xB0C",$=k!=null?`${Math.round(Number(k))}${at}`:null,H=this._val(r.TEMPERATURE_OUTSIDE),R=this._attr(r.TEMPERATURE_OUTSIDE,"unit_of_measurement")??"\xB0C",U=H!=null?`${Math.round(Number(H))}${R}`:null,j=this._val(r.WINDOWS_COVER)==="open",Z=this._val(r.CAMP_MODE)==="on",Q=this._val(r.DOG_MODE)==="on",B=this._val(r.CABIN_OVERHEAT)??"Off";return l`
      <div class="climate-menu">
        <div class="panel-header">
          <button class="panel-back" @click=${this._close}>
            <span class="icon">${c(h["chevron-left"])}</span>
          </button>
          <span class="panel-title">Climate</span>
        </div>

        <!-- Car area: seat heat tap zones overlaid on interior image -->
        <div class="clim-car-area">
          <img class="clim-car-bg"
            src="${this._bgUrl("climate-bg.png")}"
            alt="Car interior view" />
          ${this._hasOverlay?l`
            <div class="car-colour-overlay"
              style="${this._overlayStyle("climate-bg.png")}"></div>`:""}
          <!-- Front seats -->
          <button class="clim-seat-zone clim-seat-fl"
            @click=${()=>this._svc("select","select_next",r.HEATED_SEAT_LEFT,{cycle:!0})}>
            <span class="icon">${c(this._seatHeatSvg(g??"Off"))}</span>
            <span>${g??"Off"}</span>
          </button>
          <button class="clim-seat-zone clim-seat-fr"
            @click=${()=>this._svc("select","select_next",r.HEATED_SEAT_RIGHT,{cycle:!0})}>
            <span class="icon">${c(this._seatHeatSvg(m??"Off"))}</span>
            <span>${m??"Off"}</span>
          </button>
          <!-- Rear seats -->
          <button class="clim-seat-zone clim-seat-rl"
            @click=${()=>this._svc("select","select_next",r.HEATED_SEAT_REAR_LEFT,{cycle:!0})}>
            <span class="icon">${c(this._seatHeatSvg(d??"Off"))}</span>
            <span>${d??"Off"}</span>
          </button>
          <button class="clim-seat-zone clim-seat-rc"
            @click=${()=>this._svc("select","select_next",r.HEATED_SEAT_REAR_CENTER,{cycle:!0})}>
            <span class="icon">${c(this._seatHeatSvg(f??"Off"))}</span>
            <span>${f??"Off"}</span>
          </button>
          <button class="clim-seat-zone clim-seat-rr"
            @click=${()=>this._svc("select","select_next",r.HEATED_SEAT_REAR_RIGHT,{cycle:!0})}>
            <span class="icon">${c(this._seatHeatSvg(b??"Off"))}</span>
            <span>${b??"Off"}</span>
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
          ${$||U?l`
            <div class="clim-temp-info">
              ${$?l`Interior ${$}`:""}
              ${$&&U?" \xB7 ":""}
              ${U?l`Exterior ${U}`:""}
            </div>`:""}

          <!-- Main control row: [Power/Off] [← 20.0° →] [Vent] -->
          <div class="clim-main-row">
            <button class="clim-icon-btn${e?" clim-active":""}"
              @click=${()=>this._svc("climate",e?"turn_off":"turn_on",r.CLIMATE)}>
              <span class="icon">${c(h["climate-fan"])}</span>
              <span>${e?"On":"Off"}</span>
            </button>

            <div class="clim-temp-control">
              <button class="clim-arrow-btn" @click=${()=>this._adjustTemp(-1)}>
                <span class="icon">${c(h["chevron-left"])}</span>
              </button>
              <span class="clim-temp-value">${u}°</span>
              <button class="clim-arrow-btn" @click=${()=>this._adjustTemp(1)}>
                <span class="icon">${c(h["chevron-right"])}</span>
              </button>
            </div>

            <button class="clim-icon-btn${j?" clim-active":""}"
              @click=${()=>this._svc("cover",j?"close_cover":"open_cover",r.WINDOWS_COVER)}>
              <span class="icon">${c(h["windows-vent"])}</span>
              <span>${j?"Close":"Vent"}</span>
            </button>
          </div>

          <!-- Always-visible: Defrost Car -->
          <button class="clim-full-btn${p?" active":""}"
            @click=${()=>this._svc("switch",p?"turn_off":"turn_on",r.DEFROST_SWITCH)}>
            <span class="icon">${c(h.defrost)}</span>
            <span>Defrost Car</span>
          </button>

          <!-- Expanded section — Camp Mode / Dog Mode + Cabin Overheat Protection -->
          <div class="clim-expanded-content">

            <!-- Camp Mode + Dog Mode in one grouped container -->
            <div class="clim-list-group">
              <button class="clim-list-item${Z?" hot":""}"
                @click=${()=>this._svc("switch",Z?"turn_off":"turn_on",r.CAMP_MODE)}>
                <span class="icon clim-list-icon">${c(h.tent)}</span>
                <span class="clim-list-label">Camp Mode</span>
              </button>
              <button class="clim-list-item${Q?" hot":""}"
                @click=${()=>this._svc("switch",Q?"turn_off":"turn_on",r.DOG_MODE)}>
                <span class="icon clim-list-icon">${c(h.dog)}</span>
                <span class="clim-list-label">Dog Mode</span>
              </button>
            </div>

            <!-- Separator line -->
            <div class="clim-separator"></div>

            <!-- Cabin Overheat Protection -->
            <div class="clim-section-title">Cabin Overheat Protection</div>
            <div class="clim-list-group clim-segment-group clim-list-group--last">
              ${["Off","No A/C","On"].map(O=>l`
                <button class="clim-segment-btn${B===O?" selected":""}"
                  @click=${()=>this._svc("select","select_option",r.CABIN_OVERHEAT,{option:O})}>
                  ${O}
                </button>`)}
            </div>

          </div><!-- /clim-expanded-content -->

        </div><!-- /clim-sheet -->
      </div>
    `}};customElements.define("tesla-menu-climate",wt);var yt=class extends T{static get styles(){return[S,ee]}render(){if(!this.config||!this.hass)return l``;let e=this._val(r.DOOR_LOCK)==="locked",s=this._val(r.FRUNK_COVER)==="open"||this._val(r.FRUNK)==="on",i=this._val(r.TRUNK)==="on",n=this._val(r.CHARGER_DOOR)==="open"||this._val(r.PLUGGED_IN)==="on",a=this._val(r.WINDOWS_COVER)==="open";return l`
      <div class="controls-menu">
        <div class="panel-header">
          <button class="panel-back" @click=${this._close}>
            <span class="icon">${c(h["chevron-left"])}</span>
          </button>
          <span class="panel-title">Controls</span>
        </div>
        <div class="ctrl-car-area">
          <img class="ctrl-car-bg"
            src="${this._bgUrl("controls-bg.png")}"
            alt="Car top view" />
          ${this._hasOverlay?l`
            <div class="car-colour-overlay"
              style="${this._overlayStyle("controls-bg.png")}"></div>`:""}
          <!-- Frunk — text only, top centre -->
          <button class="ctrl-zone ctrl-frunk"
            @click=${()=>this._svc("cover","toggle_cover",r.FRUNK_COVER)}>
            ${s?"Close":"Open"}
          </button>
          <!-- Lock — icon only, car centre -->
          <button class="ctrl-zone ctrl-lock"
            @click=${()=>this._svc("lock",e?"unlock":"lock",r.DOOR_LOCK)}>
            <span class="icon">${c(e?h.lock:h.unlock)}</span>
          </button>
          <!-- Trunk — text only, bottom centre -->
          <button class="ctrl-zone ctrl-trunk"
            @click=${()=>this._svc("button","press",r.OPEN_TRUNK)}>
            ${i?"Close":"Open"}
          </button>
          <!-- Charge port — icon only, bottom left -->
          <button class="ctrl-zone ctrl-port ${n?"port-open":""}"
            @click=${()=>this._svc("button","press",n?r.CHARGE_PORT_CLOSE:r.CHARGE_PORT_OPEN)}>
            <span class="icon">${c(h["charge-bolt"])}</span>
          </button>
        </div>
        <div class="ctrl-actions">
          <button class="ctrl-action-btn"
            @click=${()=>this._svc("button","press",r.FLASH_LIGHTS)}>
            <span class="icon">${c(h["flash-lights"])}</span>
            <span>Flash</span>
          </button>
          <button class="ctrl-action-btn"
            @click=${()=>this._svc("button","press",r.HORN)}>
            <span class="icon">${c(h.horn)}</span>
            <span>Horn</span>
          </button>
          <button class="ctrl-action-btn"
            @click=${()=>this._svc("button","press",r.REMOTE_START)}>
            <span class="icon">${c(h["remote-start"])}</span>
            <span>Start</span>
          </button>
          <button class="ctrl-action-btn"
            @click=${()=>this._svc("cover",a?"close_cover":"open_cover",r.WINDOWS_COVER)}>
            <span class="icon${a?" icon-on":""}">${c(h["windows-vent"])}</span>
            <span>${a?"Close":"Vent"}</span>
          </button>
        </div>
      </div>
    `}};customElements.define("tesla-menu-controls",yt);var ie=[{name:"Pearl White",h:0,s:0,swatch:"#f2f2f2",blend:"soft-light",bg:"#ffffff",filter:"saturate(0) brightness(1.5) contrast(0.9)"},{name:"Midnight Silver",h:0,s:0,swatch:"#71757a"},{name:"Solid Black",h:0,s:0,swatch:"#141414",blend:"soft-light",bg:"#000000",filter:"saturate(0) brightness(0.25) contrast(1.2)"},{name:"Ultra Red",h:355,s:85,swatch:"#c41e28",filter:"hue-rotate(355deg) saturate(1)"},{name:"Quicksilver",h:40,s:8,swatch:"#9e9a91",filter:`hue-rotate(40deg) saturate(${.09411764705882353})`},{name:"Deep Blue Metallic",h:220,s:75,swatch:"#223873",filter:`hue-rotate(220deg) saturate(${.8823529411764706})`}];var Et=class extends v{static get properties(){return{colour:{type:Object},showBack:{type:Boolean},_hue:{state:!0},_sat:{state:!0}}}static get styles(){return x`
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
        background: #1c1c1e;
        border-radius: 16px 16px 0 0;
        padding: 0 0 20px;
        animation: slideUp 0.2s ease-out;
      }

      @keyframes slideUp {
        from { transform: translateY(100%); }
        to   { transform: translateY(0); }
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
        padding: 20px 16px 8px;
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
    `}constructor(){super(),this.colour=null,this.showBack=!1,this._hue=0,this._sat=0}willUpdate(t){t.has("colour")&&this.colour&&(this._hue=this.colour.h,this._sat=this.colour.s)}_selectSwatch(t){let e={h:t.h,s:t.s,name:t.name};t.blend&&(e.blend=t.blend),t.bg&&(e.bg=t.bg),t.filter&&(e.filter=t.filter),this.dispatchEvent(new CustomEvent("colour-changed",{detail:e,bubbles:!0,composed:!0})),this._close()}_onHueInput(t){this._hue=Number(t.target.value),this._fireSliderChange()}_onSatInput(t){this._sat=Number(t.target.value),this._fireSliderChange()}_fireSliderChange(){let t=this._sat>0?`hue-rotate(${this._hue}deg) saturate(${this._sat/85})`:"saturate(0) brightness(0.8)";this.dispatchEvent(new CustomEvent("colour-changed",{detail:{h:this._hue,s:this._sat,name:"Custom",filter:t},bubbles:!0,composed:!0}))}_reset(){this.dispatchEvent(new CustomEvent("colour-changed",{detail:null,bubbles:!0,composed:!0})),this._close()}_back(){this.dispatchEvent(new CustomEvent("picker-back",{bubbles:!0,composed:!0}))}_close(){this.dispatchEvent(new CustomEvent("picker-close",{bubbles:!0,composed:!0}))}_onOverlayClick(t){t.target===t.currentTarget&&this._close()}render(){let t=this.colour?.name??null;return l`
      <div class="picker-overlay" @click=${this._onOverlayClick}>
        <div class="picker-panel">

          <div class="picker-header">
            ${this.showBack?l`
              <button class="picker-back" @click=${this._back}>
                <span class="icon">${c(h["chevron-left"])}</span>
              </button>`:""}
            <span class="picker-title">Colour</span>
            <button class="picker-close" @click=${this._close}>&times;</button>
          </div>

          <div class="picker-swatches">
            ${ie.map(e=>l`
              <button class="swatch-btn" @click=${()=>this._selectSwatch(e)}>
                <div class="swatch-circle${t===e.name?" selected":""}"
                  style="background:${e.swatch}"></div>
                <span class="swatch-name">${e.name}</span>
              </button>
            `)}
          </div>

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

          <button class="picker-reset" @click=${this._reset}>
            Reset to Default
          </button>

        </div>
      </div>
    `}};customElements.define("tesla-colour-picker",Et);var Ct=class extends v{static get properties(){return{model:{type:String},variant:{type:String}}}static get styles(){return x`
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
        background: #1c1c1e;
        border-radius: 16px 16px 0 0;
        padding: 0 0 20px;
        animation: slideUp 0.2s ease-out;
        max-height: 80%;
        display: flex;
        flex-direction: column;
      }

      @keyframes slideUp {
        from { transform: translateY(100%); }
        to   { transform: translateY(0); }
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

      .model-item:last-child { border-bottom: none; }
      .model-item:hover  { background: rgba(255,255,255,0.04); }
      .model-item:active { background: rgba(255,255,255,0.08); }

      .model-item.selected {
        color: #ffffff;
        font-weight: 500;
      }

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
    `}_select(t,e){this.dispatchEvent(new CustomEvent("model-changed",{detail:{model:t,variant:e},bubbles:!0,composed:!0}))}_back(){this.dispatchEvent(new CustomEvent("picker-back",{bubbles:!0,composed:!0}))}_close(){this.dispatchEvent(new CustomEvent("picker-close",{bubbles:!0,composed:!0}))}_onOverlayClick(t){t.target===t.currentTarget&&this._close()}render(){return l`
      <div class="picker-overlay" @click=${this._onOverlayClick}>
        <div class="picker-panel">
          <div class="picker-header">
            <button class="picker-back" @click=${this._back}>
              <span class="icon">${c(h["chevron-left"])}</span>
            </button>
            <span class="picker-title">Model</span>
            <button class="picker-close" @click=${this._close}>&times;</button>
          </div>
          <div class="model-list">
            ${M.map(t=>l`
              <div class="model-section">
                <div class="model-section-title">${t.name}</div>
                <div class="model-group">
                  ${t.variants.map(e=>{let s=e.id===this.variant;return l`
                      <button class="model-item${s?" selected":""}"
                        @click=${()=>this._select(t.id,e.id)}>
                        <span class="model-label">${e.label}</span>
                        ${s?l`
                          <span class="model-check">
                            <span class="icon">${c(h.check)}</span>
                          </span>`:""}
                      </button>`})}
                </div>
              </div>
            `)}
          </div>
        </div>
      </div>
    `}};customElements.define("tesla-model-picker",Ct);var ye="base.png",Ee="chargeport-open.png",Ce="frunk-open.png",Ae="tesla-card-colour-",Se="tesla-card-model-",At=class extends v{static get properties(){return{hass:{type:Object},config:{type:Object},_menu:{state:!0},_imageError:{state:!0},_settingsView:{state:!0},_carColour:{state:!0},_modelOverride:{state:!0}}}static get styles(){return[S,se]}constructor(){super(),this._menu=null,this._imageError=!1,this._settingsView=null,this._carColour=null,this._modelOverride=null,this._baseConfig=null,this._toggleCharger=()=>this._toggle("charger"),this._toggleClimate=()=>this._toggle("climate"),this._toggleControls=()=>this._toggle("controls"),this._handleCloseMenu=()=>{this._menu=null},this._handleColourChanged=t=>this._onColourChanged(t),this._handleModelChanged=t=>this._onModelChanged(t),this._handlePickerBack=()=>{this._settingsView="main"},this._handlePickerClose=()=>{this._settingsView=null}}setConfig(t){if(!t.car_name)throw new Error("car_name is required");this._baseConfig={car_model:"3",car_variant:"3.1",car_color:"neutral",image_path:"/local/Tesla",show_speed:!0,...t},this._applyConfig()}_applyConfig(){let t=this._modelOverride;this.config=t?{...this._baseConfig,car_model:t.model,car_variant:t.variant}:this._baseConfig}static getConfigElement(){return document.createElement("tesla-card-editor")}static getStubConfig(){return{car_name:"",car_model:"3",car_variant:"3.1",car_color:"neutral",image_path:"/local/Tesla"}}connectedCallback(){super.connectedCallback(),this._baseConfig&&(this._restoreModel(),this._restoreColour())}_colourLsKey(){return Ae+(this._baseConfig?.car_name??"default")}_restoreColour(){try{let t=localStorage.getItem(this._colourLsKey());t&&(this._carColour=JSON.parse(t))}catch{}}_persistColour(){try{this._carColour?localStorage.setItem(this._colourLsKey(),JSON.stringify(this._carColour)):localStorage.removeItem(this._colourLsKey())}catch{}}_onColourChanged(t){let e=t.detail;if(!e)this._carColour=null;else{let s={h:e.h,s:e.s,name:e.name};e.blend&&(s.blend=e.blend),e.bg&&(s.bg=e.bg),e.filter&&(s.filter=e.filter),this._carColour=s}this._persistColour()}_modelLsKey(){return Se+(this._baseConfig?.car_name??"default")}_restoreModel(){try{let t=localStorage.getItem(this._modelLsKey());t&&(this._modelOverride=JSON.parse(t),this._applyConfig())}catch{}}_persistModel(){try{this._modelOverride?localStorage.setItem(this._modelLsKey(),JSON.stringify(this._modelOverride)):localStorage.removeItem(this._modelLsKey())}catch{}}_onModelChanged(t){let{model:e,variant:s}=t.detail;this._modelOverride={model:e,variant:s},this._applyConfig(),this._persistModel(),this._imageError=!1}_imgUrl(t){let{image_path:e,car_model:s,car_variant:i,car_color:n}=this.config;return`${e}/${s}/${i}/${n}/${t}`}_maskUrl(t){let e=t.replace(/\.(png|jpg)$/i,"-mask.png"),{image_path:s,car_model:i,car_variant:n}=this.config;return`${s}/${i}/${n}/neutral/${e}`}_sourceUrl(t){let e=ot(this.config.car_model,this.config.car_variant);if(!e)return null;let{image_path:s,car_model:i,car_variant:n}=this.config;return`${s}/${i}/${n}/${e}/${t}`}_overlayStyle(t){let e=this._carColour;if(!e)return"";let s=this._maskUrl(t),i=`-webkit-mask-image:url(${s});mask-image:url(${s});`,n=this._sourceUrl(t);return n&&e.filter?`background-image:url(${n});filter:${e.filter};${i}`:e.s>0?`background:hsl(${e.h},${e.s}%,50%);mix-blend-mode:color;${i}`:e.blend&&e.bg?`background:${e.bg};mix-blend-mode:${e.blend};${i}`:""}_eid(t){return rt(t,this.config.car_name)}_state(t){return this.hass?.states[this._eid(t)]}_val(t){return this._state(t)?.state}_attr(t,e){return this._state(t)?.attributes?.[e]}async _svc(t,e,s,i={}){try{await this.hass.callService(t,e,{entity_id:this._eid(s),...i})}catch(n){console.error("[tesla-card] service error",t,e,n)}}_toggle(t){this._menu=this._menu===t?null:t}_openSettings(){this._settingsView="main"}_openModelPicker(){this._settingsView="model"}_openColourPicker(){this._settingsView="colour"}_closeSettings(){this._settingsView=null}_onSettingsOverlayClick(t){t.target===t.currentTarget&&this._closeSettings()}render(){if(!this.config||!this.hass)return l``;let t=this._menu,e=this._carColour,s=!!e&&(e.s>0||!!(e.blend&&e.bg)||!!e.filter),i=this._val(r.BATTERY_LEVEL),n=i!=null?Math.round(Number(i)):null,a=n!=null?Math.max(0,Math.min(100,n)):0,u=a>=50?"high":a>=20?"medium":"low",p=this._val(r.BATTERY_RANGE),g=this._attr(r.BATTERY_RANGE,"unit_of_measurement")??"km",m=p!=null?`${Math.round(Number(p))} ${g}`:null,d=this._val(r.CHARGING)==="on",f=this._val(r.ONLINE)==="on",b=this._state(r.ONLINE),k=this._val(r.FRUNK_COVER)==="open"||this._val(r.FRUNK)==="on",at=this._val(r.CHARGER_DOOR)==="open"||this._val(r.PLUGGED_IN)==="on",$=ye;k?$=Ce:at&&($=Ee);let H=this._val(r.DOOR_LOCK),R=H==="locked",U=this._val(r.PLUGGED_IN)==="on",j=this._val(r.CHARGING_STATE)??"\u2014",Z=this._val(r.CHARGE_RATE),Q=this._attr(r.CHARGE_RATE,"unit_of_measurement")??"kW",B=this._val(r.CLIMATE),O=B!=null&&B!=="off"&&B!=="unavailable",St=this._attr(r.CLIMATE,"temperature"),ne=this._attr(r.CLIMATE,"temperature_unit")??"\xB0C",re=St!=null?Number(St).toFixed(1):"\u2014",Mt=!f&&b?"Offline":this._val(r.PARKING_BRAKE)==="on"?"Parked":(()=>{if(!this.config.show_speed)return null;let w=this._attr(r.LOCATION,"speed");return w!=null&&Number(w)>0?`${Math.round(Number(w))} km/h`:null})(),oe=d?`Charging \xB7 ${Z??"\u2014"} ${Q}`:U?"Plugged in":j,ae=O?`${re}${ne}`:"Off",Tt=H?R?"Locked":"Unlocked":null,tt=this._val(r.LOCATION),Rt=tt?tt.charAt(0).toUpperCase()+tt.slice(1).replace(/_/g," "):null,lt=M.find(w=>w.id===this.config.car_model),Ot=lt?.variants.find(w=>w.id===this.config.car_variant),le=lt&&Ot?`${lt.name} \xB7 ${Ot.label}`:this.config.car_model,ce=e?.name??"Default",he=e?e.s>0?`hsl(${e.h},${e.s}%,50%)`:e.bg??"#71757a":"#71757a";return l`
      <ha-card>

        <!-- ── Header ─────────────────────────────────────── -->
        <div class="header">
          <div class="header-left">
            <div class="car-name-row">
              <span class="car-name">${this.config.name??this.config.car_name}</span>
              <span class="icon name-chevron">${c(h["chevron-down"])}</span>
            </div>
            <div class="battery-summary">
              ${n!=null?l`
                <div class="battery-bar-small">
                  <div class="battery-fill-small ${u}" style="width:${a}%"></div>
                </div>
                <span class="range-text">${m??"\u2014"}</span>`:""}
            </div>
            ${Mt?l`<span class="status-text">${Mt}</span>`:""}
          </div>
          <div class="header-right">
            <button class="icon-btn" title="Settings"
              @click=${()=>this._openSettings()}>
              <span class="icon">${c(h.settings)}</span>
            </button>
            <button class="icon-btn" title="Refresh"
              @click=${()=>this._svc("button","press",r.FORCE_UPDATE)}>
              <span class="icon">${c(h.refresh)}</span>
            </button>
          </div>
        </div>

        <!-- ── Default view: car image + colour overlay + quick icons ─── -->
        ${t?"":l`
          <div>
            <div class="car-image-area">
              ${this._imageError?l`
                <div class="car-image-placeholder">
                  <span class="icon">${c(h.car)}</span>
                  <span>Image not found</span>
                </div>`:l`
                <img class="car-image"
                  src="${this._imgUrl($)}"
                  alt="Tesla ${this.config.car_model}"
                  @error=${()=>{this._imageError=!0}}
                  @load=${()=>{this._imageError=!1}}
                />`}
              ${s?l`
                <div class="car-colour-overlay"
                  style="${this._overlayStyle($)}"></div>`:""}
            </div>
            <!-- Quick action icons: lock, controls, charge, climate -->
            <div class="quick-actions">
              ${H?l`
                <button class="quick-btn ${R?"q-locked":"q-unlocked"}"
                  @click=${()=>this._svc("lock",R?"unlock":"lock",r.DOOR_LOCK)}>
                  <span class="icon">${c(R?h.lock:h.unlock)}</span>
                </button>`:l`<span style="width:48px"></span>`}
              <button class="quick-btn" @click=${this._toggleControls}>
                <span class="icon">${c(h.car)}</span>
              </button>
              <button class="quick-btn" @click=${this._toggleCharger}>
                <span class="icon${d?" icon-on":""}">${c(h["charge-bolt"])}</span>
              </button>
              <button class="quick-btn" @click=${this._toggleClimate}>
                <span class="icon${O?" icon-on":""}">${c(h["climate-fan"])}</span>
              </button>
            </div>
          </div>
        `}

        <!-- ── Submenu panels ─────────────────────────────── -->
        ${t==="charger"?l`
          <tesla-menu-charger
            .hass=${this.hass}
            .config=${this.config}
            @close-menu=${this._handleCloseMenu}>
          </tesla-menu-charger>`:""}

        ${t==="climate"?l`
          <tesla-menu-climate
            .hass=${this.hass}
            .config=${this.config}
            .carColour=${this._carColour}
            @close-menu=${this._handleCloseMenu}>
          </tesla-menu-climate>`:""}

        ${t==="controls"?l`
          <tesla-menu-controls
            .hass=${this.hass}
            .config=${this.config}
            .carColour=${this._carColour}
            @close-menu=${this._handleCloseMenu}>
          </tesla-menu-controls>`:""}

        <!-- ── Nav rows (hidden when a submenu is open) ──── -->
        ${t?"":l`
          <div class="nav-rows">
            <button class="nav-row"
              @click=${this._toggleControls}>
              <span class="icon nav-icon${R?"":" icon-on"}">${c(h.car)}</span>
              <div class="nav-text">
                <span class="nav-label">Controls</span>
                ${Tt?l`<span class="nav-sublabel">${Tt}</span>`:""}
              </div>
              <span class="icon nav-chevron">${c(h["chevron-right"])}</span>
            </button>
            <button class="nav-row"
              @click=${this._toggleClimate}>
              <span class="icon nav-icon${O?" icon-on":""}">${c(h["climate-fan"])}</span>
              <div class="nav-text">
                <span class="nav-label">Climate</span>
                <span class="nav-sublabel">${ae}</span>
              </div>
              <span class="icon nav-chevron">${c(h["chevron-right"])}</span>
            </button>
            ${tt!=null?l`
            <button class="nav-row" disabled>
              <span class="icon nav-icon">${c(h.location)}</span>
              <div class="nav-text">
                <span class="nav-label">Location</span>
                ${Rt?l`<span class="nav-sublabel">${Rt}</span>`:""}
              </div>
              <span class="icon nav-chevron">${c(h["chevron-right"])}</span>
            </button>`:""}
            <button class="nav-row"
              @click=${this._toggleCharger}>
              <span class="icon nav-icon${d?" icon-on":""}">${c(h["charge-bolt"])}</span>
              <div class="nav-text">
                <span class="nav-label">Charging</span>
                <span class="nav-sublabel">${oe}</span>
              </div>
              <span class="icon nav-chevron">${c(h["chevron-right"])}</span>
            </button>
          </div>
        `}

        <!-- ── Settings: main menu ─────────────────────────── -->
        ${this._settingsView==="main"?l`
          <div class="settings-overlay"
            @click=${w=>this._onSettingsOverlayClick(w)}>
            <div class="settings-panel">
              <div class="settings-header">
                <span class="settings-title">Settings</span>
                <button class="settings-close"
                  @click=${()=>this._closeSettings()}>&times;</button>
              </div>
              <div class="settings-rows">
                <button class="settings-row"
                  @click=${()=>this._openModelPicker()}>
                  <span class="icon settings-row-icon">${c(h.car)}</span>
                  <div class="settings-row-text">
                    <span class="settings-row-label">Model</span>
                    <span class="settings-row-sub">${le}</span>
                  </div>
                  <span class="icon settings-row-chevron">${c(h["chevron-right"])}</span>
                </button>
                <button class="settings-row"
                  @click=${()=>this._openColourPicker()}>
                  <div class="settings-swatch" style="background:${he}"></div>
                  <div class="settings-row-text">
                    <span class="settings-row-label">Colour</span>
                    <span class="settings-row-sub">${ce}</span>
                  </div>
                  <span class="icon settings-row-chevron">${c(h["chevron-right"])}</span>
                </button>
              </div>
            </div>
          </div>
        `:""}

        <!-- ── Settings: model picker ──────────────────────── -->
        ${this._settingsView==="model"?l`
          <tesla-model-picker
            .model=${this.config.car_model}
            .variant=${this.config.car_variant}
            @model-changed=${this._handleModelChanged}
            @picker-back=${this._handlePickerBack}
            @picker-close=${this._handlePickerClose}>
          </tesla-model-picker>`:""}

        <!-- ── Settings: colour picker ─────────────────────── -->
        ${this._settingsView==="colour"?l`
          <tesla-colour-picker
            .colour=${this._carColour}
            showBack
            @colour-changed=${this._handleColourChanged}
            @picker-back=${this._handlePickerBack}
            @picker-close=${this._handlePickerClose}>
          </tesla-colour-picker>`:""}

      </ha-card>
    `}getCardSize(){return 5}};customElements.define("tesla-card",At);window.customCards=window.customCards||[];window.customCards.push({type:"tesla-card",name:"Tesla Card",description:"A Lovelace card for the alandtse/tesla Home Assistant integration",preview:!1});
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

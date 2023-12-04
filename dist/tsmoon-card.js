(function () {
    'use strict';

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise, SuppressedError, Symbol */


    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };

    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const t$1=window,e$3=t$1.ShadowRoot&&(void 0===t$1.ShadyCSS||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),n$5=new WeakMap;let o$3 = class o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$3&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$5.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$5.set(s,t));}return t}toString(){return this.cssText}};const r$2=t=>new o$3("string"==typeof t?t:t+"",void 0,s$3),i$2=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$3(n,t,s$3)},S$1=(s,n)=>{e$3?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$1.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$1=e$3?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var s$2;const e$2=window,r$1=e$2.trustedTypes,h$1=r$1?r$1.emptyScript:"",o$2=e$2.reactiveElementPolyfillSupport,n$4={toAttribute(t,i){switch(i){case Boolean:t=t?h$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$1=(t,i)=>i!==t&&(i==i||t==t),l$2={attribute:!0,type:String,converter:n$4,reflect:!1,hasChanged:a$1},d$1="finalized";let u$1 = class u extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$2){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$2}static finalize(){if(this.hasOwnProperty(d$1))return !1;this[d$1]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$1(i));}else void 0!==i&&s.push(c$1(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$2){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$4).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$4;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$1)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}};u$1[d$1]=!0,u$1.elementProperties=new Map,u$1.elementStyles=[],u$1.shadowRootOptions={mode:"open"},null==o$2||o$2({ReactiveElement:u$1}),(null!==(s$2=e$2.reactiveElementVersions)&&void 0!==s$2?s$2:e$2.reactiveElementVersions=[]).push("1.6.3");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    var t;const i$1=window,s$1=i$1.trustedTypes,e$1=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$1="$lit$",n$3=`lit$${(Math.random()+"").slice(9)}$`,l$1="?"+n$3,h=`<${l$1}>`,r=document,u=()=>r.createComment(""),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c=Array.isArray,v=t=>c(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w(1),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r.createTreeWalker(r,129,null,!1);function P(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e$1?e$1.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,e=[];let l,r=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let d,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(l=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=l?l:f,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,d=c[1],u=void 0===c[3]?p:'"'===c[3]?$:g):u===$||u===g?u=p:u===_||u===m?u=f:(u=p,l=void 0);const w=u===p&&t[i+1].startsWith("/>")?" ":"";r+=u===f?s+h:v>=0?(e.push(d),s.slice(0,v)+o$1+s.slice(v)+n$3+w):s+n$3+(-2===v?(e.push(void 0),i):w);}return [P(t,r+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};class N{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,d=0;const c=t.length-1,v=this.parts,[a,f]=V(t,i);if(this.el=N.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$1)||i.startsWith(n$3)){const s=f[d++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$1).split(n$3),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?H:"?"===i[1]?L:"@"===i[1]?z:k});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y.test(h.tagName)){const t=h.textContent.split(n$3),i=t.length-1;if(i>0){h.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],u()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],u());}}}else if(8===h.nodeType)if(h.data===l$1)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$3,t+1));)v.push({type:7,index:r}),t+=n$3.length-1;}r++;}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=S(t,r._$AS(t,i.values),r,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,u=e[0];for(;void 0!==u;){if(l===u.index){let i;2===u.type?i=new R(n,n.nextSibling,this,t):1===u.type?i=new u.ctor(n,u.name,u.strings,this,t):6===u.type&&(i=new Z(n,this,t)),this._$AV.push(i),u=e[++h];}l!==(null==u?void 0:u.index)&&(n=C.nextNode(),l++);}return C.currentNode=r,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),d(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A&&d(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=N.createElement(P(e.h,e.h[0]),this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new M(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new N(t)),i}T(t){c(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new R(this.k(u()),this.k(u()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class k{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=S(this,t,i,0),n=!d(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=S(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!d(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}const I=s$1?s$1.emptyScript:"";class L extends k{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A?this.element.setAttribute(this.name,I):this.element.removeAttribute(this.name);}}class z extends k{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=S(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t);}}const B=i$1.litHtmlPolyfillSupport;null==B||B(N,R),(null!==(t=i$1.litHtmlVersions)&&void 0!==t?t:i$1.litHtmlVersions=[]).push("2.8.0");const D=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new R(i.insertBefore(u(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var l,o;class s extends u$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n$2=globalThis.litElementPolyfillSupport;null==n$2||n$2({LitElement:s});(null!==(o=globalThis.litElementVersions)&&void 0!==o?o:globalThis.litElementVersions=[]).push("3.3.3");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const i=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}},e=(i,e,n)=>{e.constructor.createProperty(n,i);};function n$1(n){return (t,o)=>void 0!==o?e(n,t,o):i(n,t)}

    /**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var n;null!=(null===(n=window.HTMLSlotElement)||void 0===n?void 0:n.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));

    var styles = i$2 `

.truncate {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.card-content > div {
    margin-bottom: 8px;
}
.card-content > div:last-child {
    margin-bottom: 0;
}

.entity-spacing:first-child {
    margin-top: 0;
}
.entity-spacing:last-child {
    margin-bottom: 0;
}

.entity-row {
    display: flex;
    align-items: center;
}
.entity-row .name {
    flex: 1;
    margin: 0 6px;
}
.entity-row .secondary {
    color: var(--primary-color);
}
.entity-row .icon {
    flex: 0 0 40px;
    border-radius: 50%;
    text-align: center;
    line-height: 40px;
    margin-right: 10px;
}

`;

    var img$1 = "data:image/svg+xml,%3csvg width='800px' height='800px' viewBox='0 0 128 128' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' class='iconify iconify--noto' preserveAspectRatio='xMidYMid meet'%3e%3cpath d='M4 64c0 33.14 26.86 60 60 60c0 0 2.9-21.47 2.9-60S64 4 64 4C30.86 4 4 30.86 4 64z' fill='%2322404c'%3e%3c/path%3e%3cpath d='M124 64c0-33.14-26.86-60-60-60v120c33.14 0 60-26.86 60-60z' fill='%23fce5ac'%3e%3c/path%3e%3cpath d='M62.34 8.58c-.02 1.36-3.4 2.23-7.38 2.6c-3.98.37-7.3.11-7.65-1.2c-.35-1.31 2.69-3.26 7.03-3.68s8.01.92 8 2.28z' fill='%231b2e35'%3e%3c/path%3e%3cpath d='M119.37 59.47c-.01-.4.01-.8.08-1.21c1.22-7.23 1.8-14-6.32-18.14c-.89-.46-1.87-.83-2.55-1.57c-1.25-1.35-1.14-3.41-1.46-5.22c-.97-5.54-7.24-9.51-12.66-8.01c-1.78.49-3.64 1.47-5.35.8c-1.38-.54-2.16-1.97-2.94-3.23c-2.21-3.58-5.6-6.76-9.77-7.34s-8.91 2.3-9.17 6.5c-.11 1.83.2 3.99 1.6 5.18c5.88 5.01 9.52 1.32 12.25 3.91c3.17 3.01-3.41 3.82-2.32 11.47c.55 3.82 4.34 7.4 8.19 7.08c1.71-.15 4.31-.24 5.26 1.19c.75 1.12.56 2.19.56 4.03c0 4.54.5 8.11 4.92 9.14c.57.13 1.19.2 1.72-.03c1.17-.51 1.16-2.08 1.08-3.36c-.35-5.62-4.31-6.76-5.03-9.85c-.91-3.94 4.47-9.27 8.87-7.78c3.5 1.19.65 5.25 3.21 9.94c1.69 3.11 5.01 4.54 6.24 7.08s.09 4.3.69 5.91c.93 2.52 2.41 2.56 3.24 1.67c.91-.97.61-2.96.39-4.12c-.24-1.35-.69-2.67-.73-4.04z' fill='%23f1c688'%3e%3c/path%3e%3cpath d='M24.24 102.04c.11-.16.99-.39 2.01.57c1.02.95 4.03 3.79 5.23 4.88c1.2 1.09.03 2.01-.97 1.83c-4.8-.84-7.42-5.61-6.27-7.28z' fill='%231b2e35'%3e%3c/path%3e%3cpath d='M42.04 114.42c.05-.19.79-.71 2.08-.19s5.12 2.11 6.63 2.7c1.51.59.74 1.86-.25 2.06c-4.8.92-8.94-2.6-8.46-4.57z' fill='%231b2e35'%3e%3c/path%3e%3cpath d='M48.3 110.84c.6.47 1.21 1.21.93 1.91c-.26.64-1.08.81-1.77.83c-2.28.07-4.56-.51-6.55-1.6c-1.4-.77-5.07-3.14-4.55-5.13c.74-2.82 10.4 2.8 11.94 3.99z' fill='%231b2e35'%3e%3c/path%3e%3cpath d='M104.3 96.51c-1.34 1.59-4.84 5.56-6.01 6.92c-1.18 1.35-.8 2.45-.58 2.57c2.32 1.33 8.41-2.29 9.1-8.4c.15-1.27-1.18-2.68-2.51-1.09z' fill='%23f1c688'%3e%3c/path%3e%3cpath d='M111.64 85.22c-.62 1.56-2.29 5.51-2.85 6.84c-.56 1.34.01 2.08.21 2.12c2.12.43 5.87-3.9 4.84-8.77c-.2-1-1.58-1.75-2.2-.19z' fill='%23f1c688'%3e%3c/path%3e%3cpath d='M77.82 8.69c-1.01.24-1.77 1.64-.22 2.22c1.55.58 5.47 2.16 6.8 2.68s2.08-.07 2.12-.27c.45-2.14-3.83-5.78-8.7-4.63z' fill='%23f1c688'%3e%3c/path%3e%3cpath d='M56.47 15.47c-9.5-1.73-12.9 3.96-15.81 5.2c-2.32.98-3.92-.73-7.5 1.46c-4.94 3.01-3.07 5.19-3.52 7.74c-.46 2.55-3.19 3.64-5.19 3.83c-2.37.23-2.56-1.21-1.42-2.94c.63-.95 1.3-1.54 1.62-2.66c.37-1.3.17-2.7.89-3.9c1.13-1.88 3.77-2.14 5.4-3.6c1.18-1.06 1.75-2.69 3.01-3.66c1.26-.97 2.9-1.32 4.47-1.6c3.2-.57 5.9-3.09 4.45-3.17c-1.46-.08-3.89-.55-5.93.95c-2.27 1.66-5.32 2.18-7.73 3.55c-2.7 1.55-4.12 4.92-4.94 5.83c-.82.91-3.46 1-5.28 2.88c-3.8 3.89-10.14 18.02-10.14 23.31c0 4.93 2.19 9.75 7.08 11.09c.74.2 1.53.43 2.01 1.03c1.1 1.37-1.65 5.49-2.07 7.15c-1.07 4.3.1 7.61 2 9.98c4.11 5.11 8.21 4.42 12.33 1.89c1-.62 1.86-1.49 2.97-1.9c2.34-.87 2.4.63 2.63 2.38c1.08 8.06 4.43 10.14 6.78 11.05c4.89 1.89 10.9.09 14.08-4.08s3.53-10.4.66-14.79c-4.38-6.7-13.03-7.07-14.78-10.82c-1.97-4.22 3.48-4.81 5.86-8.47c2.12-3.25 2.56-7.72.54-11.08c-1-1.66-2.66-3.32-2.24-5.21c.47-2.11 6.48-5.42 10.95-9.26c3.18-2.72 10.63-10.03-1.18-12.18zM26.01 48.86c-.34.65-.85 1.3-1.58 1.41c-.69.1-1.35-.34-1.78-.89c-.68-.89-.88-2.14-.45-3.17c.51-1.24 2.25-2.23 3.6-1.65c.73.31.95 1.05.91 1.86c-.05.89-.4 1.86-.7 2.44zm15.5 2.94c-.14.79-.39 1.55-.57 2.07c-.49 1.45-1.2 2.97-2.57 3.64c-.6.3-1.27.4-1.93.51c-1.37.21-3.08.28-3.79-.91c-.26-.43-.32-.95-.37-1.45c-.23-2.16-.34-4.67 1.25-6.14c1.14-1.06 2.42-.93 3.84-.94c.8 0 2.73-.26 3.41.18c.91.59.94 1.85.73 3.04z' fill='%231b2e35'%3e%3c/path%3e%3c/svg%3e";

    var img = "data:image/svg+xml,%3csvg width='800px' height='800px' viewBox='0 0 36 36' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cpath fill='%23FFD983' d='M18 0v36c9.941 0 18-8.059 18-18S27.941 0 18 0z'%3e%3c/path%3e%3cpath fill='%2366757F' d='M0 18c0 9.941 8.059 18 18 18V0C8.059 0 0 8.059 0 18z'%3e%3c/path%3e%3ccircle fill='%23FFCC4D' cx='25.5' cy='8.5' r='3.5'%3e%3c/circle%3e%3ccircle fill='%235B6876' cx='12' cy='16' r='3'%3e%3c/circle%3e%3ccircle fill='%235B6876' cx='13.5' cy='27.5' r='3.5'%3e%3c/circle%3e%3ccircle fill='%235B6876' cx='15' cy='6' r='2'%3e%3c/circle%3e%3ccircle fill='%23FFCC4D' cx='33' cy='18' r='1'%3e%3c/circle%3e%3ccircle fill='%235B6876' cx='6' cy='9' r='1'%3e%3c/circle%3e%3ccircle fill='%23FFCC4D' cx='21' cy='31' r='1'%3e%3c/circle%3e%3ccircle fill='%235B6876' cx='4' cy='19' r='2'%3e%3c/circle%3e%3ccircle fill='%23FFCC4D' cx='26' cy='23' r='2'%3e%3c/circle%3e%3c/svg%3e";

    // Forms in moon
    const svg = {
        forms: {
            first_quarter: img$1,
            full_moon: img$1,
        },
        round: {
            first_quarter: img,
        }
    };

    // test
    //const fullMoonForm = svg.forms.full_moon;
    //console.log(fullMoonForm);
    /**
     * Main card class definition
     */
    class TSMoonCard extends s {
        constructor() {
            super(...arguments);
            this.cardTitle = "Moon Phase";
            this.state = "";
            this.entity = "";
        }
        renderIcon(svg_icon_code) {
            return x `
            <div class="icon">
                <img class="moon-img" src=${svg_icon_code} />
            </div>
        `;
        }
        toIcon(weatherState, type, forceDay, kind) {
            //const daytime = forceDay ? 'day' : this.getSun()?.state === 'below_horizon' ? 'night' : 'day'
            //const iconMap = kind === 'animated' ? svg : png
            //const icon = iconMap[type][weatherState]
            //return icon?.[daytime] || icon
            return svg.forms.full_moon;
        }
        // CSS for the card
        // https://lit.dev/docs/components/styles/
        static get styles() {
            return styles;
        }
        /**
         * Called on every hass update
         */
        set hass(hass) {
            if (!this.entity || !hass.states[this.entity]) {
                return;
            }
            this.state = hass.states[this.entity].state;
        }
        /**
         * Called every time when entity config is updated
         * @param config Card configuration (yaml converted to JSON)
         */
        setConfig(config) {
            this.entity = config.entity;
            this.cardTitle = config.title || this.cardTitle;
        }
        /**
         * Renders the card when the update is requested (when any of the properties are changed)
         */
        render() {
            const moonIcon = this.toIcon(this.state, 'fill', true, 'static');
            return x `
        <ha-card>
            <div class="card-header">
                <div class="truncate">
                    ${this.cardTitle}
                </div>
            </div>
            <div class="card-content">
                <div class="entity-row">
                    <div class="icon">
                        <ha-icon
                                style="color: yellow"
                                icon="mdi:lightbulb"
                        >
                        </ha-icon>
                    </div>
${this.renderIcon(moonIcon)}
                    <div class="name truncate">
                        Entity name
                        <div class="secondary">Secondary info</div>
                    </div>
                    <div class="state">
                        ${this.state}
                    </div>
                <div>
            </div>
        </ha-card>
        `;
        }
    }
    __decorate([
        n$1({ attribute: false })
    ], TSMoonCard.prototype, "cardTitle", void 0);
    __decorate([
        n$1({ attribute: false })
    ], TSMoonCard.prototype, "state", void 0);

    var name = "ha-tsmoon-card";
    var version = "0.3.3";

    const printVersionToConsole = () => console.info(`%c  ${name.toUpperCase()}  %c  Version ${version}  `, 'color: white; font-weight: bold; background: crimson', 'color: #000; font-weight: bold; background: #ddd');

    // 
    printVersionToConsole();
    // Registering card
    customElements.define("tsmoon-card", TSMoonCard);

})();

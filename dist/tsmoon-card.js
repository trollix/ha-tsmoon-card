(function (moon$2) {
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
    const t$2=window,e$3=t$2.ShadowRoot&&(void 0===t$2.ShadyCSS||t$2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$4=Symbol(),n$6=new WeakMap;let o$3 = class o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$4)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$3&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$6.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$6.set(s,t));}return t}toString(){return this.cssText}};const r$2=t=>new o$3("string"==typeof t?t:t+"",void 0,s$4),i$2=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$3(n,t,s$4)},S$1=(s,n)=>{e$3?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$2.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$1=e$3?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var s$3;const e$2=window,r$1=e$2.trustedTypes,h$1=r$1?r$1.emptyScript:"",o$2=e$2.reactiveElementPolyfillSupport,n$5={toAttribute(t,i){switch(i){case Boolean:t=t?h$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$1=(t,i)=>i!==t&&(i==i||t==t),l$3={attribute:!0,type:String,converter:n$5,reflect:!1,hasChanged:a$1},d$1="finalized";let u$1 = class u extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$3){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$3}static finalize(){if(this.hasOwnProperty(d$1))return !1;this[d$1]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$1(i));}else void 0!==i&&s.push(c$1(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$3){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$5).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$5;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$1)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}};u$1[d$1]=!0,u$1.elementProperties=new Map,u$1.elementStyles=[],u$1.shadowRootOptions={mode:"open"},null==o$2||o$2({ReactiveElement:u$1}),(null!==(s$3=e$2.reactiveElementVersions)&&void 0!==s$3?s$3:e$2.reactiveElementVersions=[]).push("1.6.3");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    var t$1;const i$1=window,s$2=i$1.trustedTypes,e$1=s$2?s$2.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$1="$lit$",n$4=`lit$${(Math.random()+"").slice(9)}$`,l$2="?"+n$4,h=`<${l$2}>`,r=document,u=()=>r.createComment(""),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c=Array.isArray,v=t=>c(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w(1),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r.createTreeWalker(r,129,null,!1);function P(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e$1?e$1.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,e=[];let l,r=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let d,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(l=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=l?l:f,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,d=c[1],u=void 0===c[3]?p:'"'===c[3]?$:g):u===$||u===g?u=p:u===_||u===m?u=f:(u=p,l=void 0);const w=u===p&&t[i+1].startsWith("/>")?" ":"";r+=u===f?s+h:v>=0?(e.push(d),s.slice(0,v)+o$1+s.slice(v)+n$4+w):s+n$4+(-2===v?(e.push(void 0),i):w);}return [P(t,r+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};class N{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,d=0;const c=t.length-1,v=this.parts,[a,f]=V(t,i);if(this.el=N.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$1)||i.startsWith(n$4)){const s=f[d++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$1).split(n$4),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?H:"?"===i[1]?L:"@"===i[1]?z:k});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y.test(h.tagName)){const t=h.textContent.split(n$4),i=t.length-1;if(i>0){h.textContent=s$2?s$2.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],u()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],u());}}}else if(8===h.nodeType)if(h.data===l$2)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$4,t+1));)v.push({type:7,index:r}),t+=n$4.length-1;}r++;}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=S(t,r._$AS(t,i.values),r,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,u=e[0];for(;void 0!==u;){if(l===u.index){let i;2===u.type?i=new R(n,n.nextSibling,this,t):1===u.type?i=new u.ctor(n,u.name,u.strings,this,t):6===u.type&&(i=new Z(n,this,t)),this._$AV.push(i),u=e[++h];}l!==(null==u?void 0:u.index)&&(n=C.nextNode(),l++);}return C.currentNode=r,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),d(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A&&d(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=N.createElement(P(e.h,e.h[0]),this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new M(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new N(t)),i}T(t){c(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new R(this.k(u()),this.k(u()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class k{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=S(this,t,i,0),n=!d(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=S(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!d(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}const I=s$2?s$2.emptyScript:"";class L extends k{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A?this.element.setAttribute(this.name,I):this.element.removeAttribute(this.name);}}class z extends k{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=S(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t);}}const B=i$1.litHtmlPolyfillSupport;null==B||B(N,R),(null!==(t$1=i$1.litHtmlVersions)&&void 0!==t$1?t$1:i$1.litHtmlVersions=[]).push("2.8.0");const D=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new R(i.insertBefore(u(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var l$1,o;let s$1 = class s extends u$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}};s$1.finalized=!0,s$1._$litElement$=!0,null===(l$1=globalThis.litElementHydrateSupport)||void 0===l$1||l$1.call(globalThis,{LitElement:s$1});const n$3=globalThis.litElementPolyfillSupport;null==n$3||n$3({LitElement:s$1});(null!==(o=globalThis.litElementVersions)&&void 0!==o?o:globalThis.litElementVersions=[]).push("3.3.3");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const i=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}},e=(i,e,n)=>{e.constructor.createProperty(n,i);};function n$2(n){return (t,o)=>void 0!==o?e(n,t,o):i(n,t)}

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function t(t){return n$2({...t,state:!0})}

    /**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var n$1;null!=(null===(n$1=window.HTMLSlotElement)||void 0===n$1?void 0:n$1.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));

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

.moon-img-svg {
    width: 40px;
    height: 40px;
}

`;

    var img$v = "data:image/svg+xml,%3csvg width='800px' height='800px' viewBox='0 0 128 128' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' class='iconify iconify--noto' preserveAspectRatio='xMidYMid meet'%3e%3cpath d='M4 64c0 33.14 26.86 60 60 60c0 0 2.9-21.47 2.9-60S64 4 64 4C30.86 4 4 30.86 4 64z' fill='%2322404c'%3e%3c/path%3e%3cpath d='M124 64c0-33.14-26.86-60-60-60v120c33.14 0 60-26.86 60-60z' fill='%23fce5ac'%3e%3c/path%3e%3cpath d='M62.34 8.58c-.02 1.36-3.4 2.23-7.38 2.6c-3.98.37-7.3.11-7.65-1.2c-.35-1.31 2.69-3.26 7.03-3.68s8.01.92 8 2.28z' fill='%231b2e35'%3e%3c/path%3e%3cpath d='M119.37 59.47c-.01-.4.01-.8.08-1.21c1.22-7.23 1.8-14-6.32-18.14c-.89-.46-1.87-.83-2.55-1.57c-1.25-1.35-1.14-3.41-1.46-5.22c-.97-5.54-7.24-9.51-12.66-8.01c-1.78.49-3.64 1.47-5.35.8c-1.38-.54-2.16-1.97-2.94-3.23c-2.21-3.58-5.6-6.76-9.77-7.34s-8.91 2.3-9.17 6.5c-.11 1.83.2 3.99 1.6 5.18c5.88 5.01 9.52 1.32 12.25 3.91c3.17 3.01-3.41 3.82-2.32 11.47c.55 3.82 4.34 7.4 8.19 7.08c1.71-.15 4.31-.24 5.26 1.19c.75 1.12.56 2.19.56 4.03c0 4.54.5 8.11 4.92 9.14c.57.13 1.19.2 1.72-.03c1.17-.51 1.16-2.08 1.08-3.36c-.35-5.62-4.31-6.76-5.03-9.85c-.91-3.94 4.47-9.27 8.87-7.78c3.5 1.19.65 5.25 3.21 9.94c1.69 3.11 5.01 4.54 6.24 7.08s.09 4.3.69 5.91c.93 2.52 2.41 2.56 3.24 1.67c.91-.97.61-2.96.39-4.12c-.24-1.35-.69-2.67-.73-4.04z' fill='%23f1c688'%3e%3c/path%3e%3cpath d='M24.24 102.04c.11-.16.99-.39 2.01.57c1.02.95 4.03 3.79 5.23 4.88c1.2 1.09.03 2.01-.97 1.83c-4.8-.84-7.42-5.61-6.27-7.28z' fill='%231b2e35'%3e%3c/path%3e%3cpath d='M42.04 114.42c.05-.19.79-.71 2.08-.19s5.12 2.11 6.63 2.7c1.51.59.74 1.86-.25 2.06c-4.8.92-8.94-2.6-8.46-4.57z' fill='%231b2e35'%3e%3c/path%3e%3cpath d='M48.3 110.84c.6.47 1.21 1.21.93 1.91c-.26.64-1.08.81-1.77.83c-2.28.07-4.56-.51-6.55-1.6c-1.4-.77-5.07-3.14-4.55-5.13c.74-2.82 10.4 2.8 11.94 3.99z' fill='%231b2e35'%3e%3c/path%3e%3cpath d='M104.3 96.51c-1.34 1.59-4.84 5.56-6.01 6.92c-1.18 1.35-.8 2.45-.58 2.57c2.32 1.33 8.41-2.29 9.1-8.4c.15-1.27-1.18-2.68-2.51-1.09z' fill='%23f1c688'%3e%3c/path%3e%3cpath d='M111.64 85.22c-.62 1.56-2.29 5.51-2.85 6.84c-.56 1.34.01 2.08.21 2.12c2.12.43 5.87-3.9 4.84-8.77c-.2-1-1.58-1.75-2.2-.19z' fill='%23f1c688'%3e%3c/path%3e%3cpath d='M77.82 8.69c-1.01.24-1.77 1.64-.22 2.22c1.55.58 5.47 2.16 6.8 2.68s2.08-.07 2.12-.27c.45-2.14-3.83-5.78-8.7-4.63z' fill='%23f1c688'%3e%3c/path%3e%3cpath d='M56.47 15.47c-9.5-1.73-12.9 3.96-15.81 5.2c-2.32.98-3.92-.73-7.5 1.46c-4.94 3.01-3.07 5.19-3.52 7.74c-.46 2.55-3.19 3.64-5.19 3.83c-2.37.23-2.56-1.21-1.42-2.94c.63-.95 1.3-1.54 1.62-2.66c.37-1.3.17-2.7.89-3.9c1.13-1.88 3.77-2.14 5.4-3.6c1.18-1.06 1.75-2.69 3.01-3.66c1.26-.97 2.9-1.32 4.47-1.6c3.2-.57 5.9-3.09 4.45-3.17c-1.46-.08-3.89-.55-5.93.95c-2.27 1.66-5.32 2.18-7.73 3.55c-2.7 1.55-4.12 4.92-4.94 5.83c-.82.91-3.46 1-5.28 2.88c-3.8 3.89-10.14 18.02-10.14 23.31c0 4.93 2.19 9.75 7.08 11.09c.74.2 1.53.43 2.01 1.03c1.1 1.37-1.65 5.49-2.07 7.15c-1.07 4.3.1 7.61 2 9.98c4.11 5.11 8.21 4.42 12.33 1.89c1-.62 1.86-1.49 2.97-1.9c2.34-.87 2.4.63 2.63 2.38c1.08 8.06 4.43 10.14 6.78 11.05c4.89 1.89 10.9.09 14.08-4.08s3.53-10.4.66-14.79c-4.38-6.7-13.03-7.07-14.78-10.82c-1.97-4.22 3.48-4.81 5.86-8.47c2.12-3.25 2.56-7.72.54-11.08c-1-1.66-2.66-3.32-2.24-5.21c.47-2.11 6.48-5.42 10.95-9.26c3.18-2.72 10.63-10.03-1.18-12.18zM26.01 48.86c-.34.65-.85 1.3-1.58 1.41c-.69.1-1.35-.34-1.78-.89c-.68-.89-.88-2.14-.45-3.17c.51-1.24 2.25-2.23 3.6-1.65c.73.31.95 1.05.91 1.86c-.05.89-.4 1.86-.7 2.44zm15.5 2.94c-.14.79-.39 1.55-.57 2.07c-.49 1.45-1.2 2.97-2.57 3.64c-.6.3-1.27.4-1.93.51c-1.37.21-3.08.28-3.79-.91c-.26-.43-.32-.95-.37-1.45c-.23-2.16-.34-4.67 1.25-6.14c1.14-1.06 2.42-.93 3.84-.94c.8 0 2.73-.26 3.41.18c.91.59.94 1.85.73 3.04z' fill='%231b2e35'%3e%3c/path%3e%3c/svg%3e";

    var img$u = "data:image/svg+xml,%3csvg width='800px' height='800px' viewBox='0 0 128 128' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' class='iconify iconify--noto' preserveAspectRatio='xMidYMid meet'%3e%3ccircle cx='64' cy='64' r='60' fill='%23fce5ac'%3e%3c/circle%3e%3cpath d='M62.34 8.58c-.02 1.36-3.4 2.23-7.38 2.6c-3.98.37-7.3.11-7.65-1.2c-.35-1.31 2.69-3.26 7.03-3.68s8.01.92 8 2.28z' fill='%23f1c688'%3e%3c/path%3e%3cpath d='M119.37 59.47c-.01-.4.01-.8.08-1.21c1.22-7.23 1.8-14-6.32-18.14c-.89-.46-1.87-.83-2.55-1.57c-1.25-1.35-1.14-3.41-1.46-5.22c-.97-5.54-7.24-9.51-12.66-8.01c-1.78.49-3.64 1.47-5.35.8c-1.38-.54-2.16-1.97-2.94-3.23c-2.21-3.58-5.6-6.76-9.77-7.34c-4.17-.59-8.91 2.3-9.17 6.5c-.11 1.83.2 3.99 1.6 5.18c5.88 5.01 9.52 1.32 12.25 3.91c3.17 3.01-3.41 3.82-2.32 11.47c.55 3.82 4.34 7.4 8.19 7.08c1.71-.15 4.31-.24 5.26 1.19c.75 1.12.56 2.19.56 4.03c0 4.54.5 8.11 4.92 9.14c.57.13 1.19.2 1.72-.03c1.17-.51 1.16-2.08 1.08-3.36c-.35-5.62-4.31-6.76-5.03-9.85c-.91-3.94 4.47-9.27 8.87-7.78c3.5 1.19.65 5.25 3.21 9.94c1.69 3.11 5.01 4.54 6.24 7.08c1.23 2.54.09 4.3.69 5.91c.93 2.52 2.41 2.56 3.24 1.67c.91-.97.61-2.96.39-4.12c-.24-1.35-.69-2.67-.73-4.04z' fill='%23f1c688'%3e%3c/path%3e%3cpath d='M24.24 102.04c.11-.16.99-.39 2.01.57c1.02.95 4.03 3.79 5.23 4.88c1.2 1.09.03 2.01-.97 1.83c-4.8-.84-7.42-5.61-6.27-7.28z' fill='%23f1c688'%3e%3c/path%3e%3cpath d='M42.04 114.42c.05-.19.79-.71 2.08-.19s5.12 2.11 6.63 2.7c1.51.59.74 1.86-.25 2.06c-4.8.92-8.94-2.6-8.46-4.57z' fill='%23f1c688'%3e%3c/path%3e%3cpath d='M48.3 110.84c.6.47 1.21 1.21.93 1.91c-.26.64-1.08.81-1.77.83c-2.28.07-4.56-.51-6.55-1.6c-1.4-.77-5.07-3.14-4.55-5.13c.74-2.82 10.4 2.8 11.94 3.99z' fill='%23f1c688'%3e%3c/path%3e%3cpath d='M97.71 106c-.22-.13-.6-1.22.58-2.57c1.18-1.35 4.68-5.33 6.01-6.92s2.66-.18 2.52 1.09c-.7 6.11-6.79 9.73-9.11 8.4z' fill='%23f1c688'%3e%3c/path%3e%3cpath d='M109.01 94.19c-.2-.04-.77-.78-.21-2.12s2.23-5.29 2.85-6.84c.62-1.56 2-.82 2.21.2c1.02 4.86-2.73 9.19-4.85 8.76z' fill='%23f1c688'%3e%3c/path%3e%3cpath d='M86.51 13.32c-.04.2-.79.79-2.12.27s-5.25-2.1-6.8-2.68c-1.55-.58-.79-1.98.22-2.22c4.88-1.15 9.16 2.49 8.7 4.63z' fill='%23f1c688'%3e%3c/path%3e%3cpath d='M56.47 15.47c-9.5-1.73-12.9 3.96-15.81 5.2c-2.32.98-3.92-.73-7.5 1.46c-4.94 3.01-3.07 5.19-3.52 7.74c-.46 2.55-3.19 3.64-5.19 3.83c-2.37.23-2.56-1.21-1.42-2.94c.63-.95 1.3-1.54 1.62-2.66c.37-1.3.17-2.7.89-3.9c1.13-1.88 3.77-2.14 5.4-3.6c1.18-1.06 1.75-2.69 3.01-3.66c1.26-.97 2.9-1.32 4.47-1.6c3.2-.57 5.9-3.09 4.45-3.17c-1.46-.08-3.89-.55-5.93.95c-2.27 1.66-5.32 2.18-7.73 3.55c-2.7 1.55-4.12 4.92-4.94 5.83c-.82.91-3.46 1-5.28 2.88c-3.8 3.89-10.14 18.02-10.14 23.31c0 4.93 2.19 9.75 7.08 11.09c.74.2 1.53.43 2.01 1.03c1.1 1.37-1.65 5.49-2.07 7.15c-1.07 4.3.1 7.61 2 9.98c4.11 5.11 8.21 4.42 12.33 1.89c1-.62 1.86-1.49 2.97-1.9c2.34-.87 2.4.63 2.63 2.38c1.08 8.06 4.43 10.14 6.78 11.05c4.89 1.89 10.9.09 14.08-4.08s3.53-10.4.66-14.79c-4.38-6.7-13.03-7.07-14.78-10.82c-1.97-4.22 3.48-4.81 5.86-8.47c2.12-3.25 2.56-7.72.54-11.08c-1-1.66-2.66-3.32-2.24-5.21c.47-2.11 6.48-5.42 10.95-9.26c3.18-2.72 10.63-10.03-1.18-12.18zM26.01 48.86c-.34.65-.85 1.3-1.58 1.41c-.69.1-1.35-.34-1.78-.89c-.68-.89-.88-2.14-.45-3.17c.51-1.24 2.25-2.23 3.6-1.65c.73.31.95 1.05.91 1.86c-.05.89-.4 1.86-.7 2.44zm15.5 2.94c-.14.79-.39 1.55-.57 2.07c-.49 1.45-1.2 2.97-2.57 3.64c-.6.3-1.27.4-1.93.51c-1.37.21-3.08.28-3.79-.91c-.26-.43-.32-.95-.37-1.45c-.23-2.16-.34-4.67 1.25-6.14c1.14-1.06 2.42-.93 3.84-.94c.8 0 2.73-.26 3.41.18c.91.59.94 1.85.73 3.04z' fill='%23f1c688'%3e%3c/path%3e%3c/svg%3e";

    var img$t = "data:image/svg+xml,%3csvg width='800px' height='800px' viewBox='0 0 128 128' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' class='iconify iconify--noto' preserveAspectRatio='xMidYMid meet'%3e%3cpath d='M4 64c0 33.14 26.86 60 60 60c0 0 2.94-18.45 2.96-60.41S64 4 64 4C30.86 4 4 30.86 4 64z' fill='%23fce5ac'%3e%3c/path%3e%3cpath d='M124 64c0-33.14-26.86-60-60-60v120c33.14 0 60-26.86 60-60z' fill='%2322404c'%3e%3c/path%3e%3cpath d='M62.34 8.58c-.02 1.36-3.4 2.23-7.38 2.6c-3.98.37-7.3.11-7.65-1.2c-.35-1.31 2.69-3.26 7.03-3.68s8.01.92 8 2.28z' fill='%23f1c688'%3e%3c/path%3e%3cpath d='M119.37 59.47c-.01-.4.01-.8.08-1.21c1.22-7.23 1.8-14-6.32-18.14c-.89-.46-1.87-.83-2.55-1.57c-1.25-1.35-1.14-3.41-1.46-5.22c-.97-5.54-7.24-9.51-12.66-8.01c-1.78.49-3.64 1.47-5.35.8c-1.38-.54-2.16-1.97-2.94-3.23c-2.21-3.58-5.6-6.76-9.77-7.34s-8.91 2.3-9.17 6.5c-.11 1.83.2 3.99 1.6 5.18c5.88 5.01 9.52 1.32 12.25 3.91c3.17 3.01-3.41 3.82-2.32 11.47c.55 3.82 4.34 7.4 8.19 7.08c1.71-.15 4.31-.24 5.26 1.19c.75 1.12.56 2.19.56 4.03c0 4.54.5 8.11 4.92 9.14c.57.13 1.19.2 1.72-.03c1.17-.51 1.16-2.08 1.08-3.36c-.35-5.62-4.31-6.76-5.03-9.85c-.91-3.94 4.47-9.27 8.87-7.78c3.5 1.19.65 5.25 3.21 9.94c1.69 3.11 5.01 4.54 6.24 7.08s.09 4.3.69 5.91c.93 2.52 2.41 2.56 3.24 1.67c.91-.97.61-2.96.39-4.12c-.24-1.35-.69-2.67-.73-4.04z' fill='%231b2e35'%3e%3c/path%3e%3cpath d='M24.24 102.04c.11-.16.99-.39 2.01.57c1.02.95 4.03 3.79 5.23 4.88c1.2 1.09.03 2.01-.97 1.83c-4.8-.84-7.42-5.61-6.27-7.28z' fill='%23f1c688'%3e%3c/path%3e%3cpath d='M42.04 114.42c.05-.19.79-.71 2.08-.19s5.12 2.11 6.63 2.7c1.51.59.74 1.86-.25 2.06c-4.8.92-8.94-2.6-8.46-4.57z' fill='%23f1c688'%3e%3c/path%3e%3cpath d='M48.3 110.84c.6.47 1.21 1.21.93 1.91c-.26.64-1.08.81-1.77.83c-2.28.07-4.56-.51-6.55-1.6c-1.4-.77-5.07-3.14-4.55-5.13c.74-2.82 10.4 2.8 11.94 3.99z' fill='%23f1c688'%3e%3c/path%3e%3cpath d='M104.3 96.51c-1.34 1.59-4.84 5.56-6.01 6.92c-1.18 1.35-.8 2.45-.58 2.57c2.32 1.33 8.41-2.29 9.1-8.4c.15-1.27-1.18-2.68-2.51-1.09z' fill='%231b2e35'%3e%3c/path%3e%3cpath d='M111.64 85.22c-.62 1.56-2.29 5.51-2.85 6.84c-.56 1.34.01 2.08.21 2.12c2.12.43 5.87-3.9 4.84-8.77c-.2-1-1.58-1.75-2.2-.19z' fill='%231b2e35'%3e%3c/path%3e%3cpath d='M77.82 8.69c-1.01.24-1.77 1.64-.22 2.22c1.55.58 5.47 2.16 6.8 2.68s2.08-.07 2.12-.27c.45-2.14-3.83-5.78-8.7-4.63z' fill='%231b2e35'%3e%3c/path%3e%3cpath d='M56.47 15.47c-9.5-1.73-12.9 3.96-15.81 5.2c-2.32.98-3.92-.73-7.5 1.46c-4.94 3.01-3.07 5.19-3.52 7.74c-.46 2.55-3.19 3.64-5.19 3.83c-2.37.23-2.56-1.21-1.42-2.94c.63-.95 1.3-1.54 1.62-2.66c.37-1.3.17-2.7.89-3.9c1.13-1.88 3.77-2.14 5.4-3.6c1.18-1.06 1.75-2.69 3.01-3.66c1.26-.97 2.9-1.32 4.47-1.6c3.2-.57 5.9-3.09 4.45-3.17c-1.46-.08-3.89-.55-5.93.95c-2.27 1.66-5.32 2.18-7.73 3.55c-2.7 1.55-4.12 4.92-4.94 5.83c-.82.91-3.46 1-5.28 2.88c-3.8 3.89-10.14 18.02-10.14 23.31c0 4.93 2.19 9.75 7.08 11.09c.74.2 1.53.43 2.01 1.03c1.1 1.37-1.65 5.49-2.07 7.15c-1.07 4.3.1 7.61 2 9.98c4.11 5.11 8.21 4.42 12.33 1.89c1-.62 1.86-1.49 2.97-1.9c2.34-.87 2.4.63 2.63 2.38c1.08 8.06 4.43 10.14 6.78 11.05c4.89 1.89 10.9.09 14.08-4.08s3.53-10.4.66-14.79c-4.38-6.7-13.03-7.07-14.78-10.82c-1.97-4.22 3.48-4.81 5.86-8.47c2.12-3.25 2.56-7.72.54-11.08c-1-1.66-2.66-3.32-2.24-5.21c.47-2.11 6.48-5.42 10.95-9.26c3.18-2.72 10.63-10.03-1.18-12.18zM26.01 48.86c-.34.65-.85 1.3-1.58 1.41c-.69.1-1.35-.34-1.78-.89c-.68-.89-.88-2.14-.45-3.17c.51-1.24 2.25-2.23 3.6-1.65c.73.31.95 1.05.91 1.86c-.05.89-.4 1.86-.7 2.44zm15.5 2.94c-.14.79-.39 1.55-.57 2.07c-.49 1.45-1.2 2.97-2.57 3.64c-.6.3-1.27.4-1.93.51c-1.37.21-3.08.28-3.79-.91c-.26-.43-.32-.95-.37-1.45c-.23-2.16-.34-4.67 1.25-6.14c1.14-1.06 2.42-.93 3.84-.94c.8 0 2.73-.26 3.41.18c.91.59.94 1.85.73 3.04z' fill='%23f1c688'%3e%3c/path%3e%3c/svg%3e";

    var img$s = "data:image/svg+xml,%3csvg width='800px' height='800px' viewBox='0 0 128 128' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' class='iconify iconify--noto' preserveAspectRatio='xMidYMid meet'%3e%3ccircle cx='64' cy='64' r='60' fill='%2322404c'%3e%3c/circle%3e%3cpath d='M64.01 8.91c-.07 1.36-3.5 2.08-7.48 2.28c-3.99.2-7.29-.2-7.59-1.53c-.29-1.32 2.83-3.14 7.19-3.37s7.96 1.26 7.88 2.62z' fill='%231b2e35'%3e%3c/path%3e%3cpath d='M119.37 59.47c-.01-.4.01-.8.08-1.21c1.22-7.23 1.8-14-6.32-18.14c-.89-.46-1.87-.83-2.55-1.57c-1.25-1.35-1.14-3.41-1.46-5.22c-.97-5.54-7.24-9.51-12.66-8.01c-1.78.49-3.64 1.47-5.35.8c-1.38-.54-2.16-1.97-2.94-3.23c-2.21-3.58-5.6-6.76-9.77-7.34c-4.17-.59-8.91 2.3-9.17 6.5c-.11 1.83.2 3.99 1.6 5.18c5.88 5.01 9.52 1.32 12.25 3.91c3.17 3.01-3.41 3.82-2.32 11.47c.55 3.82 4.34 7.4 8.19 7.08c1.71-.15 4.31-.24 5.26 1.19c.75 1.12.56 2.19.56 4.03c0 4.54.5 8.11 4.92 9.14c.57.13 1.19.2 1.72-.03c1.17-.51 1.16-2.08 1.08-3.36c-.35-5.62-4.31-6.76-5.03-9.85c-.91-3.94 4.47-9.27 8.87-7.78c3.5 1.19.65 5.25 3.21 9.94c1.69 3.11 5.01 4.54 6.24 7.08c1.23 2.54.09 4.3.69 5.91c.93 2.52 2.41 2.56 3.24 1.67c.91-.97.61-2.96.39-4.12c-.24-1.35-.69-2.67-.73-4.04z' fill='%231b2e35'%3e%3c/path%3e%3cpath d='M24.24 102.04c.11-.16.99-.39 2.01.57c1.02.95 4.03 3.79 5.23 4.88c1.2 1.09.03 2.01-.97 1.83c-4.8-.84-7.42-5.61-6.27-7.28z' fill='%231b2e35'%3e%3c/path%3e%3cpath d='M42.04 114.42c.05-.19.79-.71 2.08-.19s5.12 2.11 6.63 2.7c1.51.59.74 1.86-.25 2.06c-4.8.92-8.94-2.6-8.46-4.57z' fill='%231b2e35'%3e%3c/path%3e%3cpath d='M48.3 110.84c.6.47 1.21 1.21.93 1.91c-.26.64-1.08.81-1.77.83c-2.28.07-4.56-.51-6.55-1.6c-1.4-.77-5.07-3.14-4.55-5.13c.74-2.82 10.4 2.8 11.94 3.99z' fill='%231b2e35'%3e%3c/path%3e%3cpath d='M97.71 106c-.22-.13-.6-1.22.58-2.57c1.18-1.35 4.68-5.33 6.01-6.92s2.66-.18 2.52 1.09c-.7 6.11-6.79 9.73-9.11 8.4z' fill='%231b2e35'%3e%3c/path%3e%3cpath d='M109.01 94.19c-.2-.04-.77-.78-.21-2.12s2.23-5.29 2.85-6.84c.62-1.56 2-.82 2.21.2c1.02 4.86-2.73 9.19-4.85 8.76z' fill='%231b2e35'%3e%3c/path%3e%3cpath d='M86.51 13.32c-.04.2-.79.79-2.12.27s-5.25-2.1-6.8-2.68c-1.55-.58-.79-1.98.22-2.22c4.88-1.15 9.16 2.49 8.7 4.63z' fill='%231b2e35'%3e%3c/path%3e%3cpath d='M56.47 15.47c-9.5-1.73-12.9 3.96-15.81 5.2c-2.32.98-3.92-.73-7.5 1.46c-4.94 3.01-3.07 5.19-3.52 7.74c-.46 2.55-3.19 3.64-5.19 3.83c-2.37.23-2.56-1.21-1.42-2.94c.63-.95 1.3-1.54 1.62-2.66c.37-1.3.17-2.7.89-3.9c1.13-1.88 3.77-2.14 5.4-3.6c1.18-1.06 1.75-2.69 3.01-3.66c1.26-.97 2.9-1.32 4.47-1.6c3.2-.57 5.9-3.09 4.45-3.17c-1.46-.08-3.89-.55-5.93.95c-2.27 1.66-5.32 2.18-7.73 3.55c-2.7 1.55-4.12 4.92-4.94 5.83c-.82.91-3.46 1-5.28 2.88c-3.8 3.89-10.14 18.02-10.14 23.31c0 4.93 2.19 9.75 7.08 11.09c.74.2 1.53.43 2.01 1.03c1.1 1.37-1.65 5.49-2.07 7.15c-1.07 4.3.1 7.61 2 9.98c4.11 5.11 8.21 4.42 12.33 1.89c1-.62 1.86-1.49 2.97-1.9c2.34-.87 2.4.63 2.63 2.38c1.08 8.06 4.43 10.14 6.78 11.05c4.89 1.89 10.9.09 14.08-4.08s3.53-10.4.66-14.79c-4.38-6.7-13.03-7.07-14.78-10.82c-1.97-4.22 3.48-4.81 5.86-8.47c2.12-3.25 2.56-7.72.54-11.08c-1-1.66-2.66-3.32-2.24-5.21c.47-2.11 6.48-5.42 10.95-9.26c3.18-2.72 10.63-10.03-1.18-12.18zM26.01 48.86c-.34.65-.85 1.3-1.58 1.41c-.69.1-1.35-.34-1.78-.89c-.68-.89-.88-2.14-.45-3.17c.51-1.24 2.25-2.23 3.6-1.65c.73.31.95 1.05.91 1.86c-.05.89-.4 1.86-.7 2.44zm15.5 2.94c-.14.79-.39 1.55-.57 2.07c-.49 1.45-1.2 2.97-2.57 3.64c-.6.3-1.27.4-1.93.51c-1.37.21-3.08.28-3.79-.91c-.26-.43-.32-.95-.37-1.45c-.23-2.16-.34-4.67 1.25-6.14c1.14-1.06 2.42-.93 3.84-.94c.8 0 2.73-.26 3.41.18c.91.59.94 1.85.73 3.04z' fill='%231b2e35'%3e%3c/path%3e%3c/svg%3e";

    var img$r = "data:image/svg+xml,%3csvg width='800px' height='800px' viewBox='0 0 128 128' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' class='iconify iconify--noto' preserveAspectRatio='xMidYMid meet'%3e%3cpath d='M64 4S27.99 17.04 27.99 64S64 124 64 124c33.14 0 60-26.86 60-60S97.14 4 64 4z' fill='%2322404c'%3e%3c/path%3e%3cpath d='M30.53 64C30.53 17.04 64 4 64 4C30.86 4 4 30.86 4 64s26.86 60 60 60c0 0-33.47-13.04-33.47-60z' fill='%23fce5ac'%3e%3c/path%3e%3cpath d='M56.53 11.19c3.99-.2 7.41-.92 7.48-2.28c.06-1-1.9-2.08-4.68-2.48c-1.86 1.12-4.13 2.68-6.59 4.73c1.12.09 2.41.1 3.79.03z' fill='%231b2e35'%3e%3c/path%3e%3cpath d='M56.13 6.29c-4.36.23-7.48 2.05-7.19 3.37c.19.87 1.68 1.34 3.8 1.5c2.46-2.06 4.74-3.61 6.59-4.73c-.98-.14-2.06-.2-3.2-.14z' fill='%23f1c688'%3e%3c/path%3e%3cpath d='M119.37 59.47c-.01-.4.01-.8.08-1.21c1.22-7.23 1.8-14-6.32-18.14c-.89-.46-1.87-.83-2.55-1.57c-1.25-1.35-1.14-3.41-1.46-5.22c-.97-5.54-7.24-9.51-12.66-8.01c-1.78.49-3.64 1.47-5.35.8c-1.38-.54-2.16-1.97-2.94-3.23c-2.21-3.58-5.6-6.76-9.77-7.34c-4.17-.59-8.91 2.3-9.17 6.5c-.11 1.83.2 3.99 1.6 5.18c5.88 5.01 9.52 1.32 12.25 3.91c3.17 3.01-3.41 3.82-2.32 11.47c.55 3.82 4.34 7.4 8.19 7.08c1.71-.15 4.31-.24 5.26 1.19c.75 1.12.56 2.19.56 4.03c0 4.54.5 8.11 4.92 9.14c.57.13 1.19.2 1.72-.03c1.17-.51 1.16-2.08 1.08-3.36c-.35-5.62-4.31-6.76-5.03-9.85c-.91-3.94 4.47-9.27 8.87-7.78c3.5 1.19.65 5.25 3.21 9.94c1.69 3.11 5.01 4.54 6.24 7.08c1.23 2.54.09 4.3.69 5.91c.93 2.52 2.41 2.56 3.24 1.67c.91-.97.61-2.96.39-4.12c-.24-1.35-.69-2.67-.73-4.04z' fill='%231b2e35'%3e%3c/path%3e%3cpath d='M26.26 102.61c-1.02-.95-1.91-.73-2.01-.57c-1.15 1.68 1.47 6.44 6.28 7.28c1 .17 2.17-.75.97-1.83c-1.21-1.09-4.22-3.93-5.24-4.88z' fill='%23f1c688'%3e%3c/path%3e%3cpath d='M42.04 114.42c-.48 1.98 3.66 5.49 8.46 4.57c1-.19 1.76-1.47.25-2.06c-1.51-.59-5.33-2.17-6.63-2.7s-2.04 0-2.08.19z' fill='%23f1c688'%3e%3c/path%3e%3cpath d='M49.23 112.75c.28-.71-.33-1.45-.93-1.91c-.5-.39-1.87-1.25-3.51-2.13c1.33 1.66 2.68 3.17 4.02 4.52c.18-.12.34-.26.42-.48z' fill='%231b2e35'%3e%3c/path%3e%3cpath d='M36.36 106.86c-.52 1.99 3.15 4.36 4.55 5.13c1.99 1.09 4.27 1.67 6.55 1.6c.46-.01.98-.11 1.35-.36a58.963 58.963 0 0 1-4.02-4.52c-3.39-1.83-7.93-3.76-8.43-1.85z' fill='%23f1c688'%3e%3c/path%3e%3cpath d='M97.71 106c-.22-.13-.6-1.22.58-2.57c1.18-1.35 4.68-5.33 6.01-6.92s2.66-.18 2.52 1.09c-.7 6.11-6.79 9.73-9.11 8.4z' fill='%231b2e35'%3e%3c/path%3e%3cpath d='M109.01 94.19c-.2-.04-.77-.78-.21-2.12s2.23-5.29 2.85-6.84c.62-1.56 2-.82 2.21.2c1.02 4.86-2.73 9.19-4.85 8.76z' fill='%231b2e35'%3e%3c/path%3e%3cpath d='M86.51 13.32c-.04.2-.79.79-2.12.27s-5.25-2.1-6.8-2.68c-1.55-.58-.79-1.98.22-2.22c4.88-1.15 9.16 2.49 8.7 4.63z' fill='%231b2e35'%3e%3c/path%3e%3cpath d='M31.75 78.73c.45-.32.91-.61 1.42-.81c2.34-.87 2.4.63 2.63 2.38c1.08 8.06 4.43 10.14 6.78 11.05c4.89 1.89 10.9.09 14.08-4.08c3.18-4.17 3.53-10.4.66-14.79c-4.38-6.7-13.03-7.07-14.78-10.82c-1.97-4.22 3.48-4.81 5.86-8.47c2.12-3.25 2.56-7.72.54-11.08c-1-1.66-2.66-3.32-2.24-5.21c.47-2.11 6.48-5.42 10.95-9.26c3.17-2.72 10.62-10.03-1.19-12.19c-4-.73-6.91-.14-9.16.88C38.92 25.47 30.53 40.48 30.53 64c0 5.35.45 10.23 1.22 14.73zm5.62-30.15c.8 0 2.73-.26 3.41.18c.91.59.94 1.84.72 3.04c-.14.79-.39 1.55-.57 2.07c-.49 1.45-1.2 2.97-2.57 3.64c-.6.3-1.27.4-1.93.51c-1.37.21-3.08.28-3.79-.91c-.26-.43-.32-.95-.37-1.45c-.23-2.16-.34-4.67 1.25-6.14c1.16-1.06 2.43-.93 3.85-.94z' fill='%231b2e35'%3e%3c/path%3e%3cpath d='M33.16 22.12c-4.94 3.01-3.07 5.19-3.52 7.74c-.46 2.55-3.19 3.64-5.19 3.83c-2.37.23-2.56-1.21-1.42-2.94c.63-.95 1.3-1.54 1.62-2.66c.37-1.3.17-2.7.89-3.9c1.13-1.88 3.77-2.14 5.4-3.6c1.18-1.06 1.75-2.69 3.01-3.66c1.26-.97 2.9-1.32 4.47-1.6c3.2-.57 5.9-3.09 4.45-3.17c-1.46-.08-3.89-.55-5.93.95c-2.27 1.66-5.32 2.18-7.73 3.55c-2.7 1.55-4.12 4.92-4.94 5.83c-.82.91-3.46 1-5.28 2.88c-3.8 3.9-10.14 18.03-10.14 23.32c0 4.93 2.19 9.75 7.08 11.09c.74.2 1.53.43 2.01 1.03c1.1 1.37-1.65 5.49-2.07 7.15c-1.07 4.3.1 7.61 2 9.98c4.11 5.11 8.21 4.42 12.33 1.89c.54-.33 1.03-.73 1.55-1.09c-.77-4.5-1.22-9.38-1.22-14.73c0-23.52 8.4-38.53 16.78-47.66c-3.11 1.4-4.96 3.6-6.65 4.32c-2.32.98-3.92-.73-7.5 1.45zm-7.15 26.74c-.34.65-.85 1.3-1.58 1.41c-.69.1-1.35-.34-1.78-.89c-.68-.89-.88-2.14-.45-3.17c.51-1.24 2.25-2.23 3.6-1.65c.73.31.95 1.05.91 1.86c-.05.89-.4 1.86-.7 2.44z' fill='%23f1c688'%3e%3c/path%3e%3c/svg%3e";

    var img$q = "data:image/svg+xml,%3csvg width='800px' height='800px' viewBox='0 0 128 128' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' class='iconify iconify--noto' preserveAspectRatio='xMidYMid meet'%3e%3cpath d='M4 64c0 33.14 26.86 60 60 60c0 0 42.82-20.17 42.82-60S64 4 64 4C30.86 4 4 30.86 4 64z' fill='%23fce5ac'%3e%3c/path%3e%3cpath d='M62.34 8.58c-.02 1.36-3.4 2.23-7.38 2.6c-3.98.37-7.3.11-7.65-1.2c-.35-1.31 2.69-3.26 7.03-3.68s8.01.92 8 2.28z' fill='%23f1c688'%3e%3c/path%3e%3cpath d='M24.24 102.04c.11-.16.99-.39 2.01.57c1.02.95 4.03 3.79 5.23 4.88c1.2 1.09.03 2.01-.97 1.83c-4.8-.84-7.42-5.61-6.27-7.28z' fill='%23f1c688'%3e%3c/path%3e%3cpath d='M42.04 114.42c.05-.19.79-.71 2.08-.19s5.12 2.11 6.63 2.7c1.51.59.74 1.86-.25 2.06c-4.8.92-8.94-2.6-8.46-4.57z' fill='%23f1c688'%3e%3c/path%3e%3cpath d='M48.3 110.84c.6.47 1.21 1.21.93 1.91c-.26.64-1.08.81-1.77.83c-2.28.07-4.56-.51-6.55-1.6c-1.4-.77-5.07-3.14-4.55-5.13c.74-2.82 10.4 2.8 11.94 3.99z' fill='%23f1c688'%3e%3c/path%3e%3cpath d='M124 64c0-33.14-26.86-60-60-60c0 0 33.47 13.04 33.47 60S64 124 64 124c33.14 0 60-26.86 60-60z' fill='%2322404c'%3e%3c/path%3e%3cpath d='M78.4 15.54c-4.17-.59-8.91 2.3-9.17 6.5c-.11 1.83.2 3.99 1.6 5.18c5.88 5.01 9.52 1.32 12.25 3.91c3.17 3.01-3.41 3.82-2.32 11.47c.55 3.82 4.34 7.4 8.19 7.08c1.71-.15 4.31-.24 5.26 1.19c.75 1.12.56 2.19.56 4.03c0 3.61.32 6.6 2.68 8.2c-.22-23.26-8.68-38.09-17.05-47.06c-.64-.23-1.31-.4-2-.5z' fill='%23f1c688'%3e%3c/path%3e%3cpath d='M101.42 64.02c1.17-.51 1.16-2.08 1.08-3.36c-.35-5.62-4.31-6.76-5.03-9.85c-.91-3.94 4.47-9.27 8.87-7.78c3.5 1.19.65 5.25 3.21 9.94c1.69 3.11 5.01 4.54 6.24 7.08s.09 4.3.69 5.91c.93 2.52 2.41 2.56 3.24 1.67c.91-.97.61-2.96.39-4.12c-.25-1.36-.7-2.68-.75-4.05c-.01-.4.01-.8.08-1.21c1.22-7.23 1.8-14-6.32-18.14c-.89-.46-1.87-.83-2.55-1.57c-1.25-1.35-1.14-3.41-1.46-5.22c-.97-5.54-7.24-9.51-12.66-8.01c-1.78.49-3.64 1.47-5.35.8c-1.38-.54-2.16-1.97-2.94-3.23c-1.84-2.99-4.51-5.69-7.76-6.84c8.37 8.98 16.83 23.8 17.05 47.06c.61.41 1.34.73 2.25.94c.57.14 1.19.21 1.72-.02z' fill='%231b2e35'%3e%3c/path%3e%3cpath d='M104.3 96.51c-1.34 1.59-4.84 5.56-6.01 6.92c-1.18 1.35-.8 2.45-.58 2.57c2.32 1.33 8.41-2.29 9.1-8.4c.15-1.27-1.18-2.68-2.51-1.09z' fill='%231b2e35'%3e%3c/path%3e%3cpath d='M113.85 85.42c-.21-1.01-1.59-1.75-2.21-.2s-2.29 5.51-2.85 6.84c-.56 1.34.01 2.08.21 2.12c2.13.44 5.88-3.89 4.85-8.76z' fill='%231b2e35'%3e%3c/path%3e%3cpath d='M77.82 8.69c-1.01.24-1.77 1.64-.22 2.22c1.55.58 5.47 2.16 6.8 2.68s2.08-.07 2.12-.27c.45-2.14-3.83-5.78-8.7-4.63z' fill='%231b2e35'%3e%3c/path%3e%3cpath d='M56.47 15.47c-9.5-1.73-12.9 3.96-15.81 5.2c-2.32.98-3.92-.73-7.5 1.46c-4.94 3.01-3.07 5.19-3.52 7.74c-.46 2.55-3.19 3.64-5.19 3.83c-2.37.23-2.56-1.21-1.42-2.94c.63-.95 1.3-1.54 1.62-2.66c.37-1.3.17-2.7.89-3.9c1.13-1.88 3.77-2.14 5.4-3.6c1.18-1.06 1.75-2.69 3.01-3.66c1.26-.97 2.9-1.32 4.47-1.6c3.2-.57 5.9-3.09 4.45-3.17c-1.46-.08-3.89-.55-5.93.95c-2.27 1.66-5.32 2.18-7.73 3.55c-2.7 1.55-4.12 4.92-4.94 5.83c-.82.91-3.46 1-5.28 2.88c-3.8 3.89-10.14 18.02-10.14 23.31c0 4.93 2.19 9.75 7.08 11.09c.74.2 1.53.43 2.01 1.03c1.1 1.37-1.65 5.49-2.07 7.15c-1.07 4.3.1 7.61 2 9.98c4.11 5.11 8.21 4.42 12.33 1.89c1-.62 1.86-1.49 2.97-1.9c2.34-.87 2.4.63 2.63 2.38c1.08 8.06 4.43 10.14 6.78 11.05c4.89 1.89 10.9.09 14.08-4.08s3.53-10.4.66-14.79c-4.38-6.7-13.03-7.07-14.78-10.82c-1.97-4.22 3.48-4.81 5.86-8.47c2.12-3.25 2.56-7.72.54-11.08c-1-1.66-2.66-3.32-2.24-5.21c.47-2.11 6.48-5.42 10.95-9.26c3.18-2.72 10.63-10.03-1.18-12.18zM26.01 48.86c-.34.65-.85 1.3-1.58 1.41c-.69.1-1.35-.34-1.78-.89c-.68-.89-.88-2.14-.45-3.17c.51-1.24 2.25-2.23 3.6-1.65c.73.31.95 1.05.91 1.86c-.05.89-.4 1.86-.7 2.44zm15.5 2.94c-.14.79-.39 1.55-.57 2.07c-.49 1.45-1.2 2.97-2.57 3.64c-.6.3-1.27.4-1.93.51c-1.37.21-3.08.28-3.79-.91c-.26-.43-.32-.95-.37-1.45c-.23-2.16-.34-4.67 1.25-6.14c1.14-1.06 2.42-.93 3.84-.94c.8 0 2.73-.26 3.41.18c.91.59.94 1.85.73 3.04z' fill='%23f1c688'%3e%3c/path%3e%3c/svg%3e";

    var img$p = "data:image/svg+xml,%3csvg width='800px' height='800px' viewBox='0 0 128 128' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' class='iconify iconify--noto' preserveAspectRatio='xMidYMid meet'%3e%3cpath d='M4 64c0 33.14 26.86 60 60 60c0 0 42.82-10 42.82-60C106.82 18.22 64 4 64 4C30.86 4 4 30.86 4 64z' fill='%2322404c'%3e%3c/path%3e%3cpath d='M62.34 8.58c-.02 1.36-3.4 2.23-7.38 2.6c-3.98.37-7.3.11-7.65-1.2c-.35-1.31 2.69-3.26 7.03-3.68s8.01.92 8 2.28z' fill='%231b2e35'%3e%3c/path%3e%3cpath d='M24.24 102.04c.11-.16.99-.39 2.01.57c1.02.95 4.03 3.79 5.23 4.88c1.2 1.09.03 2.01-.97 1.83c-4.8-.84-7.42-5.61-6.27-7.28z' fill='%231b2e35'%3e%3c/path%3e%3cpath d='M42.04 114.42c.05-.19.79-.71 2.08-.19s5.12 2.11 6.63 2.7c1.51.59.74 1.86-.25 2.06c-4.8.92-8.94-2.6-8.46-4.57z' fill='%231b2e35'%3e%3c/path%3e%3cpath d='M48.3 110.84c.6.47 1.21 1.21.93 1.91c-.26.64-1.08.81-1.77.83c-2.28.07-4.56-.51-6.55-1.6c-1.4-.77-5.07-3.14-4.55-5.13c.74-2.82 10.4 2.8 11.94 3.99z' fill='%231b2e35'%3e%3c/path%3e%3cpath d='M124 64c0-33.14-26.86-60-60-60c0 0 33.47 13.04 33.47 60S64 124 64 124c33.14 0 60-26.86 60-60z' fill='%23fce5ac'%3e%3c/path%3e%3cpath d='M78.4 15.54c-4.17-.59-8.91 2.3-9.17 6.5c-.11 1.83.2 3.99 1.6 5.18c5.88 5.01 9.52 1.32 12.25 3.91c3.17 3.01-3.41 3.82-2.32 11.47c.55 3.82 4.34 7.4 8.19 7.08c1.71-.15 4.31-.24 5.26 1.19c.75 1.12.56 2.19.56 4.03c0 3.61.32 6.6 2.68 8.2c-.22-23.26-8.68-38.09-17.05-47.06c-.64-.23-1.31-.4-2-.5z' fill='%231b2e35'%3e%3c/path%3e%3cpath d='M101.42 64.02c1.17-.51 1.16-2.08 1.08-3.36c-.35-5.62-4.31-6.76-5.03-9.85c-.91-3.94 4.47-9.27 8.87-7.78c3.5 1.19.65 5.25 3.21 9.94c1.69 3.11 5.01 4.54 6.24 7.08s.09 4.3.69 5.91c.93 2.52 2.41 2.56 3.24 1.67c.91-.97.61-2.96.39-4.12c-.25-1.36-.7-2.68-.75-4.05c-.01-.4.01-.8.08-1.21c1.22-7.23 1.8-14-6.32-18.14c-.89-.46-1.87-.83-2.55-1.57c-1.25-1.35-1.14-3.41-1.46-5.22c-.97-5.54-7.24-9.51-12.66-8.01c-1.78.49-3.64 1.47-5.35.8c-1.38-.54-2.16-1.97-2.94-3.23c-1.84-2.99-4.51-5.69-7.76-6.84c8.37 8.98 16.83 23.8 17.05 47.06c.61.41 1.34.73 2.25.94c.57.14 1.19.21 1.72-.02z' fill='%23f1c688'%3e%3c/path%3e%3cpath d='M104.3 96.51c-1.34 1.59-4.84 5.56-6.01 6.92c-1.18 1.35-.8 2.45-.58 2.57c2.32 1.33 8.41-2.29 9.1-8.4c.15-1.27-1.18-2.68-2.51-1.09z' fill='%23f1c688'%3e%3c/path%3e%3cpath d='M113.85 85.42c-.21-1.01-1.59-1.75-2.21-.2s-2.29 5.51-2.85 6.84c-.56 1.34.01 2.08.21 2.12c2.13.44 5.88-3.89 4.85-8.76z' fill='%23f1c688'%3e%3c/path%3e%3cpath d='M77.82 8.69c-1.01.24-1.77 1.64-.22 2.22c1.55.58 5.47 2.16 6.8 2.68s2.08-.07 2.12-.27c.45-2.14-3.83-5.78-8.7-4.63z' fill='%23f1c688'%3e%3c/path%3e%3cpath d='M56.47 15.47c-9.5-1.73-12.9 3.96-15.81 5.2c-2.32.98-3.92-.73-7.5 1.46c-4.94 3.01-3.07 5.19-3.52 7.74c-.46 2.55-3.19 3.64-5.19 3.83c-2.37.23-2.56-1.21-1.42-2.94c.63-.95 1.3-1.54 1.62-2.66c.37-1.3.17-2.7.89-3.9c1.13-1.88 3.77-2.14 5.4-3.6c1.18-1.06 1.75-2.69 3.01-3.66c1.26-.97 2.9-1.32 4.47-1.6c3.2-.57 5.9-3.09 4.45-3.17c-1.46-.08-3.89-.55-5.93.95c-2.27 1.66-5.32 2.18-7.73 3.55c-2.7 1.55-4.12 4.92-4.94 5.83c-.82.91-3.46 1-5.28 2.88c-3.8 3.89-10.14 18.02-10.14 23.31c0 4.93 2.19 9.75 7.08 11.09c.74.2 1.53.43 2.01 1.03c1.1 1.37-1.65 5.49-2.07 7.15c-1.07 4.3.1 7.61 2 9.98c4.11 5.11 8.21 4.42 12.33 1.89c1-.62 1.86-1.49 2.97-1.9c2.34-.87 2.4.63 2.63 2.38c1.08 8.06 4.43 10.14 6.78 11.05c4.89 1.89 10.9.09 14.08-4.08s3.53-10.4.66-14.79c-4.38-6.7-13.03-7.07-14.78-10.82c-1.97-4.22 3.48-4.81 5.86-8.47c2.12-3.25 2.56-7.72.54-11.08c-1-1.66-2.66-3.32-2.24-5.21c.47-2.11 6.48-5.42 10.95-9.26c3.18-2.72 10.63-10.03-1.18-12.18zM26.01 48.86c-.34.65-.85 1.3-1.58 1.41c-.69.1-1.35-.34-1.78-.89c-.68-.89-.88-2.14-.45-3.17c.51-1.24 2.25-2.23 3.6-1.65c.73.31.95 1.05.91 1.86c-.05.89-.4 1.86-.7 2.44zm15.5 2.94c-.14.79-.39 1.55-.57 2.07c-.49 1.45-1.2 2.97-2.57 3.64c-.6.3-1.27.4-1.93.51c-1.37.21-3.08.28-3.79-.91c-.26-.43-.32-.95-.37-1.45c-.23-2.16-.34-4.67 1.25-6.14c1.14-1.06 2.42-.93 3.84-.94c.8 0 2.73-.26 3.41.18c.91.59.94 1.85.73 3.04z' fill='%231b2e35'%3e%3c/path%3e%3c/svg%3e";

    var img$o = "data:image/svg+xml,%3csvg width='800px' height='800px' viewBox='0 0 128 128' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cpath d='M64 4s-35.92 7.23-35.92 59.22C28.08 114.75 64 124 64 124c33.14 0 60-26.86 60-60S97.14 4 64 4z' fill='%23fce5ac'%3e%3c/path%3e%3cpath d='M30.53 64C30.53 17.04 64 4 64 4C30.86 4 4 30.86 4 64s26.86 60 60 60c0 0-33.47-13.04-33.47-60z' fill='%2322404c'%3e%3c/path%3e%3cpath d='M56.53 11.19c3.99-.2 7.41-.92 7.48-2.28c.06-1-1.9-2.08-4.68-2.48c-1.86 1.12-4.13 2.68-6.59 4.73c1.12.09 2.41.1 3.79.03z' fill='%23f1c688'%3e%3c/path%3e%3cpath d='M56.13 6.29c-4.36.23-7.48 2.05-7.19 3.37c.19.87 1.68 1.34 3.8 1.5c2.46-2.06 4.74-3.61 6.59-4.73c-.98-.14-2.06-.2-3.2-.14z' fill='%231b2e35'%3e%3c/path%3e%3cpath d='M119.37 59.47c-.01-.4.01-.8.08-1.21c1.22-7.23 1.8-14-6.32-18.14c-.89-.46-1.87-.83-2.55-1.57c-1.25-1.35-1.14-3.41-1.46-5.22c-.97-5.54-7.24-9.51-12.66-8.01c-1.78.49-3.64 1.47-5.35.8c-1.38-.54-2.16-1.97-2.94-3.23c-2.21-3.58-5.6-6.76-9.77-7.34c-4.17-.59-8.91 2.3-9.17 6.5c-.11 1.83.2 3.99 1.6 5.18c5.88 5.01 9.52 1.32 12.25 3.91c3.17 3.01-3.41 3.82-2.32 11.47c.55 3.82 4.34 7.4 8.19 7.08c1.71-.15 4.31-.24 5.26 1.19c.75 1.12.56 2.19.56 4.03c0 4.54.5 8.11 4.92 9.14c.57.13 1.19.2 1.72-.03c1.17-.51 1.16-2.08 1.08-3.36c-.35-5.62-4.31-6.76-5.03-9.85c-.91-3.94 4.47-9.27 8.87-7.78c3.5 1.19.65 5.25 3.21 9.94c1.69 3.11 5.01 4.54 6.24 7.08c1.23 2.54.09 4.3.69 5.91c.93 2.52 2.41 2.56 3.24 1.67c.91-.97.61-2.96.39-4.12c-.24-1.35-.69-2.67-.73-4.04z' fill='%23f1c688'%3e%3c/path%3e%3cpath d='M26.26 102.61c-1.02-.95-1.91-.73-2.01-.57c-1.15 1.68 1.47 6.44 6.28 7.28c1 .17 2.17-.75.97-1.83c-1.21-1.09-4.22-3.93-5.24-4.88z' fill='%231b2e35'%3e%3c/path%3e%3cpath d='M42.04 114.42c-.48 1.98 3.66 5.49 8.46 4.57c1-.19 1.76-1.47.25-2.06c-1.51-.59-5.33-2.17-6.63-2.7s-2.04 0-2.08.19z' fill='%231b2e35'%3e%3c/path%3e%3cpath d='M49.23 112.75c.28-.71-.33-1.45-.93-1.91c-.5-.39-1.87-1.25-3.51-2.13c1.33 1.66 2.68 3.17 4.02 4.52c.18-.12.34-.26.42-.48z' fill='%23f1c688'%3e%3c/path%3e%3cpath d='M36.36 106.86c-.52 1.99 3.15 4.36 4.55 5.13c1.99 1.09 4.27 1.67 6.55 1.6c.46-.01.98-.11 1.35-.36a58.963 58.963 0 0 1-4.02-4.52c-3.39-1.83-7.93-3.76-8.43-1.85z' fill='%231b2e35'%3e%3c/path%3e%3cpath d='M97.71 106c-.22-.13-.6-1.22.58-2.57c1.18-1.35 4.68-5.33 6.01-6.92s2.66-.18 2.52 1.09c-.7 6.11-6.79 9.73-9.11 8.4z' fill='%23f1c688'%3e%3c/path%3e%3cpath d='M109.01 94.19c-.2-.04-.77-.78-.21-2.12s2.23-5.29 2.85-6.84c.62-1.56 2-.82 2.21.2c1.02 4.86-2.73 9.19-4.85 8.76z' fill='%23f1c688'%3e%3c/path%3e%3cpath d='M86.51 13.32c-.04.2-.79.79-2.12.27s-5.25-2.1-6.8-2.68c-1.55-.58-.79-1.98.22-2.22c4.88-1.15 9.16 2.49 8.7 4.63z' fill='%23f1c688'%3e%3c/path%3e%3cpath d='M31.75 78.73c.45-.32.91-.61 1.42-.81c2.34-.87 2.4.63 2.63 2.38c1.08 8.06 4.43 10.14 6.78 11.05c4.89 1.89 10.9.09 14.08-4.08c3.18-4.17 3.53-10.4.66-14.79c-4.38-6.7-13.03-7.07-14.78-10.82c-1.97-4.22 3.48-4.81 5.86-8.47c2.12-3.25 2.56-7.72.54-11.08c-1-1.66-2.66-3.32-2.24-5.21c.47-2.11 6.48-5.42 10.95-9.26c3.17-2.72 10.62-10.03-1.19-12.19c-4-.73-6.91-.14-9.16.88C38.92 25.47 30.53 40.48 30.53 64c0 5.35.45 10.23 1.22 14.73zm5.62-30.15c.8 0 2.73-.26 3.41.18c.91.59.94 1.84.72 3.04c-.14.79-.39 1.55-.57 2.07c-.49 1.45-1.2 2.97-2.57 3.64c-.6.3-1.27.4-1.93.51c-1.37.21-3.08.28-3.79-.91c-.26-.43-.32-.95-.37-1.45c-.23-2.16-.34-4.67 1.25-6.14c1.16-1.06 2.43-.93 3.85-.94z' fill='%23f1c688'%3e%3c/path%3e%3cpath d='M33.16 22.12c-4.94 3.01-3.07 5.19-3.52 7.74c-.46 2.55-3.19 3.64-5.19 3.83c-2.37.23-2.56-1.21-1.42-2.94c.63-.95 1.3-1.54 1.62-2.66c.37-1.3.17-2.7.89-3.9c1.13-1.88 3.77-2.14 5.4-3.6c1.18-1.06 1.75-2.69 3.01-3.66c1.26-.97 2.9-1.32 4.47-1.6c3.2-.57 5.9-3.09 4.45-3.17c-1.46-.08-3.89-.55-5.93.95c-2.27 1.66-5.32 2.18-7.73 3.55c-2.7 1.55-4.12 4.92-4.94 5.83c-.82.91-3.46 1-5.28 2.88c-3.8 3.9-10.14 18.03-10.14 23.32c0 4.93 2.19 9.75 7.08 11.09c.74.2 1.53.43 2.01 1.03c1.1 1.37-1.65 5.49-2.07 7.15c-1.07 4.3.1 7.61 2 9.98c4.11 5.11 8.21 4.42 12.33 1.89c.54-.33 1.03-.73 1.55-1.09c-.77-4.5-1.22-9.38-1.22-14.73c0-23.52 8.4-38.53 16.78-47.66c-3.11 1.4-4.96 3.6-6.65 4.32c-2.32.98-3.92-.73-7.5 1.45zm-7.15 26.74c-.34.65-.85 1.3-1.58 1.41c-.69.1-1.35-.34-1.78-.89c-.68-.89-.88-2.14-.45-3.17c.51-1.24 2.25-2.23 3.6-1.65c.73.31.95 1.05.91 1.86c-.05.89-.4 1.86-.7 2.44z' fill='%231b2e35'%3e%3c/path%3e%3c/svg%3e";

    var img$n = "data:image/svg+xml,%3csvg width='800px' height='800px' viewBox='0 0 36 36' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cpath fill='%23FFD983' d='M18 0v36c9.941 0 18-8.059 18-18S27.941 0 18 0z'%3e%3c/path%3e%3cpath fill='%2366757F' d='M0 18c0 9.941 8.059 18 18 18V0C8.059 0 0 8.059 0 18z'%3e%3c/path%3e%3ccircle fill='%23FFCC4D' cx='25.5' cy='8.5' r='3.5'%3e%3c/circle%3e%3ccircle fill='%235B6876' cx='12' cy='16' r='3'%3e%3c/circle%3e%3ccircle fill='%235B6876' cx='13.5' cy='27.5' r='3.5'%3e%3c/circle%3e%3ccircle fill='%235B6876' cx='15' cy='6' r='2'%3e%3c/circle%3e%3ccircle fill='%23FFCC4D' cx='33' cy='18' r='1'%3e%3c/circle%3e%3ccircle fill='%235B6876' cx='6' cy='9' r='1'%3e%3c/circle%3e%3ccircle fill='%23FFCC4D' cx='21' cy='31' r='1'%3e%3c/circle%3e%3ccircle fill='%235B6876' cx='4' cy='19' r='2'%3e%3c/circle%3e%3ccircle fill='%23FFCC4D' cx='26' cy='23' r='2'%3e%3c/circle%3e%3c/svg%3e";

    var img$m = "data:image/svg+xml,%3csvg width='800px' height='800px' viewBox='0 0 36 36' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' class='iconify iconify--twemoji' preserveAspectRatio='xMidYMid meet'%3e%3ccircle fill='%23FFD983' cx='18' cy='18' r='18'%3e%3c/circle%3e%3cg fill='%23FFCC4D'%3e%3ccircle cx='10.5' cy='8.5' r='3.5'%3e%3c/circle%3e%3ccircle cx='20' cy='17' r='3'%3e%3c/circle%3e%3ccircle cx='24.5' cy='28.5' r='3.5'%3e%3c/circle%3e%3ccircle cx='22' cy='5' r='2'%3e%3c/circle%3e%3ccircle cx='3' cy='18' r='1'%3e%3c/circle%3e%3ccircle cx='30' cy='9' r='1'%3e%3c/circle%3e%3ccircle cx='15' cy='31' r='1'%3e%3c/circle%3e%3ccircle cx='32' cy='19' r='2'%3e%3c/circle%3e%3ccircle cx='10' cy='23' r='2'%3e%3c/circle%3e%3c/g%3e%3c/svg%3e";

    var img$l = "data:image/svg+xml,%3csvg width='800px' height='800px' viewBox='0 0 36 36' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' class='iconify iconify--twemoji' preserveAspectRatio='xMidYMid meet'%3e%3cpath fill='%23FFD983' d='M18 0v36C8.059 36 0 27.941 0 18S8.059 0 18 0z'%3e%3c/path%3e%3cpath fill='%2366757F' d='M36 18c0 9.941-8.059 18-18 18V0c9.941 0 18 8.059 18 18z'%3e%3c/path%3e%3ccircle fill='%23FFCC4D' cx='10.5' cy='8.5' r='3.5'%3e%3c/circle%3e%3ccircle fill='%235B6876' cx='24' cy='16' r='3'%3e%3c/circle%3e%3ccircle fill='%235B6876' cx='22.5' cy='27.5' r='3.5'%3e%3c/circle%3e%3ccircle fill='%235B6876' cx='21' cy='6' r='2'%3e%3c/circle%3e%3ccircle fill='%23FFCC4D' cx='3' cy='18' r='1'%3e%3c/circle%3e%3ccircle fill='%235B6876' cx='30' cy='9' r='1'%3e%3c/circle%3e%3ccircle fill='%23FFCC4D' cx='15' cy='31' r='1'%3e%3c/circle%3e%3ccircle fill='%235B6876' cx='32' cy='19' r='2'%3e%3c/circle%3e%3ccircle fill='%23FFCC4D' cx='10' cy='23' r='2'%3e%3c/circle%3e%3c/svg%3e";

    var img$k = "data:image/svg+xml,%3csvg width='800px' height='800px' viewBox='0 0 36 36' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' class='iconify iconify--twemoji' preserveAspectRatio='xMidYMid meet'%3e%3ccircle fill='%2366757F' cx='18' cy='18' r='18'%3e%3c/circle%3e%3cg fill='%235B6876'%3e%3ccircle cx='10.5' cy='8.5' r='3.5'%3e%3c/circle%3e%3ccircle cx='20' cy='16' r='3'%3e%3c/circle%3e%3ccircle cx='21.5' cy='27.5' r='3.5'%3e%3c/circle%3e%3ccircle cx='21' cy='6' r='2'%3e%3c/circle%3e%3ccircle cx='3' cy='18' r='1'%3e%3c/circle%3e%3ccircle cx='30' cy='9' r='1'%3e%3c/circle%3e%3ccircle cx='15' cy='31' r='1'%3e%3c/circle%3e%3ccircle cx='32' cy='19' r='2'%3e%3c/circle%3e%3ccircle cx='10' cy='23' r='2'%3e%3c/circle%3e%3c/g%3e%3c/svg%3e";

    var img$j = "data:image/svg+xml,%3csvg width='800px' height='800px' viewBox='0 0 36 36' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' class='iconify iconify--twemoji' preserveAspectRatio='xMidYMid meet'%3e%3ccircle fill='%23FFD983' cx='18' cy='18' r='18'%3e%3c/circle%3e%3cpath fill='%2366757F' d='M36 18c0 9.941-8.059 18-18 18c-.294 0-.58-.029-.87-.043C11.239 33.393 7 26.332 7 18C7 9.669 11.239 2.607 17.13.044C17.42.03 17.706 0 18 0c9.941 0 18 8.059 18 18z'%3e%3c/path%3e%3ccircle fill='%235B6876' cx='25.5' cy='8.5' r='3.5'%3e%3c/circle%3e%3ccircle fill='%235B6876' cx='16' cy='16' r='3'%3e%3c/circle%3e%3ccircle fill='%235B6876' cx='14.5' cy='27.5' r='3.5'%3e%3c/circle%3e%3ccircle fill='%235B6876' cx='15' cy='6' r='2'%3e%3c/circle%3e%3ccircle fill='%235B6876' cx='33' cy='18' r='1'%3e%3c/circle%3e%3ccircle fill='%23FFCC4D' cx='6' cy='9' r='1'%3e%3c/circle%3e%3ccircle fill='%235B6876' cx='21' cy='31' r='1'%3e%3c/circle%3e%3ccircle fill='%23FFCC4D' cx='4' cy='19' r='2'%3e%3c/circle%3e%3ccircle fill='%235B6876' cx='26' cy='23' r='2'%3e%3c/circle%3e%3c/svg%3e";

    var img$i = "data:image/svg+xml,%3csvg width='800px' height='800px' viewBox='0 0 36 36' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' class='iconify iconify--twemoji' preserveAspectRatio='xMidYMid meet'%3e%3cpath fill='%23FFD983' d='M0 18c0 9.941 8.059 18 18 18c.295 0 .58-.029.87-.043C24.761 33.393 29 26.332 29 18C29 9.669 24.761 2.607 18.87.044C18.58.03 18.295 0 18 0C8.059 0 0 8.059 0 18z'%3e%3c/path%3e%3cpath fill='%2366757F' d='M29 18C29 9.669 24.761 2.607 18.87.044C28.404.501 36 8.353 36 18c0 9.646-7.594 17.498-17.128 17.956C24.762 33.391 29 26.331 29 18z'%3e%3c/path%3e%3ccircle fill='%23FFCC4D' cx='10.5' cy='8.5' r='3.5'%3e%3c/circle%3e%3ccircle fill='%23FFCC4D' cx='20' cy='16' r='3'%3e%3c/circle%3e%3ccircle fill='%23FFCC4D' cx='21.5' cy='27.5' r='3.5'%3e%3c/circle%3e%3ccircle fill='%23FFCC4D' cx='21' cy='6' r='2'%3e%3c/circle%3e%3ccircle fill='%23FFCC4D' cx='3' cy='18' r='1'%3e%3c/circle%3e%3ccircle fill='%235B6876' cx='30' cy='9' r='1'%3e%3c/circle%3e%3ccircle fill='%23FFCC4D' cx='15' cy='31' r='1'%3e%3c/circle%3e%3ccircle fill='%235B6876' cx='32' cy='19' r='2'%3e%3c/circle%3e%3ccircle fill='%23FFCC4D' cx='10' cy='23' r='2'%3e%3c/circle%3e%3c/svg%3e";

    var img$h = "data:image/svg+xml,%3csvg width='800px' height='800px' viewBox='0 0 36 36' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' class='iconify iconify--twemoji' preserveAspectRatio='xMidYMid meet'%3e%3ccircle fill='%23FFD983' cx='18' cy='18' r='18'%3e%3c/circle%3e%3cpath fill='%2366757F' d='M0 18c0 9.941 8.059 18 18 18c.295 0 .58-.029.87-.043C24.761 33.393 29 26.332 29 18C29 9.669 24.761 2.607 18.87.044C18.58.03 18.295 0 18 0C8.059 0 0 8.059 0 18z'%3e%3c/path%3e%3ccircle fill='%235B6876' cx='10.5' cy='8.5' r='3.5'%3e%3c/circle%3e%3ccircle fill='%235B6876' cx='20' cy='16' r='3'%3e%3c/circle%3e%3ccircle fill='%235B6876' cx='21.5' cy='27.5' r='3.5'%3e%3c/circle%3e%3ccircle fill='%235B6876' cx='21' cy='6' r='2'%3e%3c/circle%3e%3ccircle fill='%235B6876' cx='3' cy='18' r='1'%3e%3c/circle%3e%3ccircle fill='%23FFCC4D' cx='30' cy='9' r='1'%3e%3c/circle%3e%3ccircle fill='%235B6876' cx='15' cy='31' r='1'%3e%3c/circle%3e%3ccircle fill='%23FFCC4D' cx='32' cy='19' r='2'%3e%3c/circle%3e%3ccircle fill='%235B6876' cx='10' cy='23' r='2'%3e%3c/circle%3e%3c/svg%3e";

    var img$g = "data:image/svg+xml,%3csvg width='800px' height='800px' viewBox='0 0 36 36' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' class='iconify iconify--twemoji' preserveAspectRatio='xMidYMid meet'%3e%3cpath fill='%23FFD983' d='M36 18c0 9.941-8.059 18-18 18c-.294 0-.58-.029-.87-.043C11.239 33.393 7 26.332 7 18C7 9.669 11.239 2.607 17.13.044C17.42.03 17.706 0 18 0c9.941 0 18 8.059 18 18z'%3e%3c/path%3e%3cpath fill='%2366757F' d='M7 18C7 9.669 11.239 2.607 17.13.044C7.596.501 0 8.353 0 18c0 9.646 7.594 17.498 17.128 17.956C11.238 33.391 7 26.331 7 18z'%3e%3c/path%3e%3ccircle fill='%23FFCC4D' cx='25.5' cy='8.5' r='3.5'%3e%3c/circle%3e%3ccircle fill='%23FFCC4D' cx='16' cy='16' r='3'%3e%3c/circle%3e%3ccircle fill='%23FFCC4D' cx='14.5' cy='27.5' r='3.5'%3e%3c/circle%3e%3ccircle fill='%23FFCC4D' cx='15' cy='6' r='2'%3e%3c/circle%3e%3ccircle fill='%23FFCC4D' cx='33' cy='18' r='1'%3e%3c/circle%3e%3ccircle fill='%235B6876' cx='6' cy='9' r='1'%3e%3c/circle%3e%3ccircle fill='%23FFCC4D' cx='21' cy='31' r='1'%3e%3c/circle%3e%3ccircle fill='%235B6876' cx='4' cy='19' r='2'%3e%3c/circle%3e%3ccircle fill='%23FFCC4D' cx='26' cy='23' r='2'%3e%3c/circle%3e%3c/svg%3e";

    var img$f = "data:image/svg+xml,%3csvg viewBox='0 0 176 176' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e %3cimage width='176' height='176' xlink:href='data:image/png%3bcharset=utf-8%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAALAAAACwCAMAAACYaRRsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8%2bIDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQyOEY4NTdDQ0VEOTExRTk5MzA5RUQ2RTBGNTI4NDMwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQyOEY4NTdEQ0VEOTExRTk5MzA5RUQ2RTBGNTI4NDMwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDI4Rjg1N0FDRUQ5MTFFOTkzMDlFRDZFMEY1Mjg0MzAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDI4Rjg1N0JDRUQ5MTFFOTkzMDlFRDZFMEY1Mjg0MzAiLz4gPC9yZGY6RGVzY3JpcHRpb24%2bIDwvcmRmOlJERj4gPC94OnhtcG1ldGE%2bIDw/eHBhY2tldCBlbmQ9InIiPz7c0/q9AAADAFBMVEUBAQEDAwMHBwcFBQWtra22tra/v78EBASoqKiwsLCdnZ2pqam5ubmzs7OsrKylpaWZmZmhoaG8vLzLy8sGBgbAwMDDw8Ompqa6urqKiop3d3d5eXmTk5PGxsZvb2/CwsKioqK9vb2jo6Oqqqqnp6eysrJzc3Oampqenp7S0tKMjIyVlZV0dHSRkZF/f3%2b3t7ecnJzFxcWUlJSHh4dtbW2BgYGbm5vNzc2WlpZ%2bfn6goKBubm6fn5%2b0tLSvr6%2bQkJB1dXW1tbWOjo5oaGixsbGAgIBycnIKCgrIyMiurq6YmJgJCQmGhoZ2dnZxcXHKyspra2vOzs6EhITX19eLi4sICAh4eHiFhYWCgoKXl5fV1dV6enpwcHBsbGxkZGSkpKRmZmZbW1vMzMy7u7t7e3vQ0NCNjY0fHx8MDAy%2bvr64uLiJiYk%2bPj59fX1qampfX1/U1NSPj498fHzHx8eDg4NdXV1YWFgNDQ0LCwva2trExMTR0dFpaWlcXFwWFhYSEhKrq6slJSVjY2NgYGBVVVWSkpJiYmLJyclhYWHBwcFnZ2dHR0f///9WVlZTU1PT09NZWVmIiIgPDw/Y2NgaGhoQEBBeXl4UFBRQUFBlZWVBQUFaWlpPT09MTExXV1cxMTFRUVE2NjZAQEBOTk7c3NxFRUU4ODg/Pz8oKCje3t4TExNCQkJISEhGRkZUVFQYGBghISEvLy/Z2dkiIiJKSkrPz89SUlJNTU1JSUk0NDQyMjIREREgICA1NTUZGRlDQ0MsLCwqKipLS0stLS05OTk6Ojr%2b/v4bGxvW1tbh4eE8PDwXFxccHBwwMDAjIyM3NzckJCTd3d3b29srKysuLi49PT0nJycpKSlEREQVFRXf398ODg7m5ubk5OT6%2bvr4%2bPj7%2b/seHh78/PwzMzMdHR0CAgImJibv7%2b/o6Ojw8PA7Ozvl5eXp6eni4uLj4%2bP9/f3t7e35%2bfn39/f19fXx8fH29vbg4OD09PTn5%2bfy8vLs7Ozq6urz8/Pu7u4AAAD///%2btCdP7AAABAHRSTlP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AU/cHJQAAM1NJREFUeNrMnWV0m0mysCVZksVoMTNZkmVZtmVmZmZmZmZmjGOMw8zMzMw8yTAz7u7sXt1PzszFb/fugJXZOrFPfvl9Tp/qgu7qKsC/L5t8E4lCVIV1bV%2b9v2W6rn117h7HYnaHJPze1hd/%2b3L5vgJYlr9yFSJPKVph%2bC%2bpY68L9N0d61q9S58T7xEnybzyxodf/4sAJ%2bDZRROG/ymBhlrDxG5gp0S8cXuYilmlp3dzu%2bP7v/jT138w8MfuWdvrDH9HAoEAQ%2b7aWw92JKfTOwpVlpYOEhqOKZF6Jfztyy//KOAPwTZ7Df9AzKPrcvdeSH98flMfvXplMENMU%2bhj1fw2rr2TqP7rr7/8A4AJ9GOGfyhmoLy6qdwTT28N7nhYNGvZN%2bCt0BcqI2jwNiyS4u9HvPrl0OsFvmq/Cmj4P8TM%2bOObe%2bbGicdF5wfTk64tFnuwta4xQfEKiRCGhaOF/rzPht55bcChWQ8M/0R8Db7TgYErTkydKUo/XbNm3tExIihE6aGlMflIGBaPpLI04d9eevlagPOTLxv%2bqQQCQHUGQN22sx%2bcOXZu8%2bC8TYk4ThxB07riEFwYUgDnaVhEP86GS5dMDpzvue2f4xoAAJCZwXfCUHt2f/vG6gvX5js8F5MrYuLkrq45EoyLOwXrr9kXSW3IHh26ZFJgP3aL4RcJwBxgVPLa2m2nWi9uPNc1UjPW19kXqw%2bKDYrzsI3HewnxSEF/pd9fG0kv3vnOZMB3ve/8MlyD%2bZJWgAy%2b257vaX%2bwaePG2zZN8wN94phksS6uSlfcXY5AgClepF67%2bsiMg396%2bSeTAL9le83wy8UcZDDkRbfuvnyj/d21p5%2bk960s7RAnidPYwd40WlWQR2G8E59QQNaEZ7Bkb/ztnXeWH5i08lfgAoGGFt%2b8PIvWy4/3PDh/sWjw3ExNR7MjI6vEMlirj4nzDoqyxiH4qSwOya7MjxW5deijZQb%2bmNZu%2bDViAZoy/r514tHZU3vuz%2b2Y2XGkubo6JcXGxk3sRtd6e1cx5YWurniws3OBX6NdBrHyna%2b/X05gUs2vwjWADBbmFhOgtee3bLm19tqmuR0jNc3ppc1dzXSdSpxVHhEU1F1IY%2bZIsS5UiEsmMSPfPfONSz8uH7D12V/Ha4g2bruJx4bp64HHZj5ZmNk8t36%2bL21s0cbWLU3vwahyrdC6KhXWrhJ3LpJDhrjzRnkcTsbQy2UCrrcx/FoBAHwNoN1ThjvRay0/ONy86siOVR2LPdVh/YUXV0nHY1Wqwqoo23gmkyuAQyBwqgwFJdvJQq98%2bf1yAKMO/GreJbMWbQDund6z7dSOO0Xb1xzYcW7kSFrpIU9%2b50xsFSNCmZMY54TvHlfCM%2bHOJB6aVQAhh8vsKofe/P3AiPu/ntdgATAGbOZ5W3bv3du%2bZdNI147b5w6kbRxs7ihO1NILkz2CFExrhHWhB1IgwMKo5IKC7CtQ58qE8MZvXv5O4Dcjpgy/WUB1gKO5Zzbd31y6Y9XcYtcOn7CVaclxlmLrgDimFcIp3tWeiXHGOkMxYBa08mAGRBCazbr0zyKi/xv4DfZvQ7UwB7zSZMPztVs2b7n5ZPvC4qHhlJE%2bT0/HYuscps5DGcGIZVorrNAYaxgKoewlw0WjjWB0Pjnjr%2b/85bcDR5b%2b9uUFgEBGTQ6s2fLB9pm1M4PVwylpO70PMQRJA7hyZgCiuypHwozgImEIZL87woXkxe/9wg8F4WjKNlz69rcC2x36rbRAAMDczMhr8X7L9vaja1etPp0yUl0d7LlS1xv2XkVUQJR197hcYV0owbrApNw2DBxCoOYT7SqJDYRsWf3Xb/424MoDv2N9jUmoAWhm9HgPdg63P3acW1OafHSRwbDU6VcVesdG0WiFWlp5d3wb1tZBIhG4gyH5KE62piDTT6jeZ/fy%2b98CrNlp%2bJ0C8gW8bzax6pPj%2b5u3r%2bpMXuhJrA4pkUvLfTzitUFKpTxHGQBzshUKMC4wsADszMmAZpKojZmZb8CH/vTrgSt/Dy/I4lXKBwzMncqrnT5/8vC5zSEjF0rWrNfGs9mqWJ0iK7hqvLDcWsKlwKyswEgjMlwNhnCIBCqxsr%2bXCnnrT78W2O7A71nbJV6g0VI8P9n6/O3W/euPLRaNXdtEb3byYQcH6YLiFBV0nc47qBDpECBE4mF4ij9MpAYTwq/0ZnLqr7CIrPyhb38dcOSh36sPRgU2Js91dTdaju%2b5//aursHHq5PSHeh9jqogWpArTRVjjIvjcPFKa6mVBOvkAkdz%2bjM1hFAympwQaie7Qnz5l18D/Ebp7%2bU1AIzAFtEWvtcv37l1pmjv5se%2bett39d7auOKIIO/Y8cJYVZZ3bLdCYYvF29vb82H%2bPA4Bqs4IhRNGZfUaTu%2bLob/9cuA32b8b91U8Acqrq2ttedRy88zJA%2bfb00LSdZbBIW6FNFpFbDczNkbloY3KsYe5wLixSg/rNghaDeXw/N1J/aOV9X8mf/bly18MHPG7eYGvDlNA0Ya6qandLXtWH32yrmsde962ZGVz9WyyETkqh6bLSpQo5FESpIBbHu%2bKo/YTiH48iDOPA83uT5BB7RKGfikwYup3KzDQ6OmAxjje3ACaenr8/rH7R1ctLuykW65sXrVjeCyFrqqqiouIjbCypgV5IKTWTLlc6qymaiDuandSRmVGduMGjazxra9/GTDqvmEZgM2jzQxm7/safN/bc33LgweDZ6ajXEvn5hYOz/RVD5cmFXtXeeCc9InFQR4SWyU%2bKkciFfA4LmgeD8qBsghld%2b/ZXYEOffhLgOsPGH7/jgMYLHxBBqBFdPTeB2ceXL9/7faJTUWuUUUXV/V0dtWkhdmEZAV5eERVWCbG0pT23U4KJtOa7%2bzez/MLZXF4mlFS9otwu7sNl776BcA2BsNyEIPqQEv/mdIa9jTfebT/8enOdh%2bbjYfTe4zJaEdPGjsmxtItkZaV6B0XJXGiIRDWUgrXAQrV8EgZ5Exib8Jn9xoz9jW%2b/OfA1oZlEcBS5gyMNuTlTt2ZW3G9Pff0k7m%2bw0/mDgzP9wz09KQki5NsxBUqVXGcPifV2gqnxCmlzq5O6v5Qu/AMdwg5o7H%2bbkJofdmlfwZMOrtMwOZGLTZGQOZmT9un93xwc/XjmqSZlXOfnF44NFza0ZlSkpzsGFxcFVcRE%2bPqj4cJJNapLi5wLyjLjwfN4KFY4eEJd%2b/JyMRLn/7fwB/XLNP6mpkZzH2B5rWGwLNvn7%2b/9%2bbq1mHPY4ODp58MDh4eni/tSEsbsGHovBmWPm6u7lSs1NbJHc7tdYb0E0mc7EpopV1G9r1n9Vdkdv87Ov5fwLTlWd9XJ1UWvkshRcvO1sUTWx7cXN11befFwSOD63YOdzZ3lvZ1pJQwtMUhIfTguFSCUIl0pgjbeKxMan8/OYPoR660y06oj5Rl3Pv4/wQmtS8TsBEVaA7KazfkGbbduH/%2bwd5bmy%2bcvFB07vDg3Lnmvua%2b6pUdswPBhfqYYpU4qcpW6AURcl3cnUlUCC80lNUog/Y3ysKzw4nho1uHPvvHwG%2btXCZeox0GBhqA2/Zb5NW1vlv3%2bMKZvWtXF93fvv7wjiOHunbVGFc4ZdbTLYKRGJeYxBbr5WiYrXM%2bBCJwzuxvtOMkRPaTZeGh4eHhveHhP7z1zj8Etl0m3iU7DDTaiGmgmfnEKd8VGx%2bdmttYdOzhpp0HDo/UHFpTXT3rmZKSTM%2bqiEn0CXELcXMbRwgwziQINZOXqamEhkeGhstYfpOTo5VEv60vP/tHwHevLRew0TgYI4naVgMwz5D3fPfJ87k3R9buuHly46709JqFVYtjJeyOnhCGOIohdhQH24Q4xmIFVhQCAYVGZbKyNZoE2b1GQujnL/w%2btyt79uE3f/4HwN7LxgsymuHa6Ykl6rzA1sDW3E%2bO7Fk1fOF80eDh9efWH%2boqbSpZOcAIKdGp6MGJSZ6OA8XxWLQXlEz2QkEhdkRN5eSnMnL2pIw02jja2PjWp38f2O%2bOYTkF5BtoAAWComvNa6ct7s%2b%2bvfdA8%2bpN107vOLdwaKQ6baDaM9HSpoIRYploGca2cWMUO7nwsklQosafpNHwEj6drDSqgx/53g/3Gj/9esPfBWYvI60xawZaGBc40Df6OHC6rvbdovbtaXNHL16bG1w/0tU11jNQOhBs6cZwY1sWV7hZhmTFRPBT4egMTSULzSNkUu1koaGyBDsyb7L%2b82eRf/rq7wHntywfrxkQADADmS3d161ondhtdqHkQvuO4r03b18rejh3bs3McKdnz0BSUkyWWxJdF6tnJDEi7FP5BEICVM2CQlEo1mgotDIhMpSXQdQQ7SZfvLPv7wB7GpZXAECgcZHr9oPMTgS%2bvSZm47tHLjw%2bWrR57e3BkV3z1T09yZY2IYmWSW76IB0jLCk23oHf30umqlk8aiYZWsnRsFjZGbxsql%2b43z3ZV9/8/8D525aV1szoOsx8W6OPgwx5D7OAD3zWX9i0uv3YQyPwjrHqzpqavuDiZE83mzBHN5UuJi2YocAqRHA4VQ1V88ganpegn6QmhmfKOLJ7k/cyNryT8P8BJy8nr5m5USEAZr7AaF/g9fa8c0dPrJ07%2bsnqM6uPrl174cnCcPqhro4sVZinY1NTiU1WREWY2NLDiYkRYKhwtZqj4WngMKjaq5Lg/Hk9i8Cy%2bzTyraH/DRx6eVktxJK3M65zIAAEeCh%2bsvvEiYdn79w8eezi2rVFpzceODSyUOOZlRXmaNNUUpJcURgRMxulCOA6YMBqfxSKQOJh/CF%2baki4O/qNe5lgL/dPn0V%2b9%2bn/As5aZg02ug7A0hGmxY1bj5PvXz57cvWdR5fbHx69ULR5rObA/Eizo6ONpU9KWEmYGz1GpU%2bOK4yzgosEAryEC%2blvQGMgoRrNqJ9aRgIjKbxIDmvox/8JfPXB8m44c3Mz4woHBl6OfnSrdc2mG%2b2r585smb5fcebs3OEDB9bMjIyVONr4eA6Ik0rEFVkMfVxTepxTvANEzWd2C%2bwaCZB8IgquIRLU/nykCwbN4tT/Rwz0M7D9Mq%2bvhZkx/gG1Xo4%2b9Sjvxgcnbt5ov/ju%2bcubUvZeKNpRNHhgpmtlmGVyio%2bNZVKTj8o7sSlrZbM1Bk9pEwkk5ZTGBJ4zgUgAc4hQrD8STEUKCf12l774H8CrlhnYuL7mBovpaPPculMXASfO77mxZS73Rvu6B5vPLV77ZHv6msWVHZ7JPmlJPjbBEXFuJaU2OTQFOgCHQFLsuazGBipKQ0KxevudRO4iKBzsz0r47J3/DkwALjOwMZh45ecmttXuX/38%2bI2brds2v71uXe5765ITx4rODR6qXlmaLA4rNepxsC7R0y2NbqUNcsFJu135tvEFBLKfXy8pnxiqwQrgGIiXQCoM3Xpp338Dpi/3llvKQY2/87ZsA5zIrX2%2bZ9OtE5uOHX43d0vR3BPPAfrgxpXV6ckDKY5pnjZhTY4hITHiKnk5Xwqz1kvxcr4VlxO5wa4hW0ZE%2bSP5FIEQwQRf%2bebFfwF/eMyw/GJ0z2aGFXtAeROBp048OrOlvWhd7pa1F4rm0uer2Qu7utbXVHv6lKZ3zo%2bFqXzobnSxt702lRkkdSqMylHCe%2b/eLZuMlPV64VORWFhbqrTys7e%2b%2b09g8HLDWixdcxjdHcA89xYA8PT4xHt7ci9/MnjswsOzMzWfrBsTI0IGmjYORzSnVw/PlFoy3CK8xU2WHt2IHFtbprY4XoiB927duqEsUsN3FUC4UqEVhfLjmwf/E9jGYCKZjm5ZERg9Nf18%2bsapU%2b3Hih6mH9q8K%2bXI4nA6nCuPtUyeZfj0%2bbj1NWUF6S3DHLXMHJq90tqjIic/HwVH/fCnTz8nqrEUAZ%2bPt0Y4sS7Z/Qfwx3tNBVxrjNdq83ynWlfcuHEjd%2b/mjhCb5p3p69Nv10Thxm1ixYVWPs3WVk1NSXQfm7S0GF2QPEAeJS/WwnsJQveDH32zwY4MF/JtpTArGFc09Pl3PwO7m4r31am270TdVMuKU5fbtzw6T0s/Tdu15fz6QyM2yVn0pJBgRvMaVZRnmic7JNhNnKiPkyt0KpoujuYlKiBDSD9cbSSDHRwQfIcALJLy3Uu/n4GzTAZs8M0zA9RNTbVcb2l5dH5/%2b5PS9ezhmR07HT2rR5pignSlXcOLxkizpCfNhp5Fd7Ok66JUuhwdfRzmAtW4UCM/beQJnfh8QarEGobsfWn3M/B2k/GamUdHA0C1ea27d%2b/Ozd1/8oOTiz2rDu3o3Bicpi/vECcNr18q/EgTe3omJ7nRLS0dffRVNA%2b9ozcSxSOhoBk/yFjwVD4eiUxlelU2fPuXn4AT6ky3wkCzaAtQXt7zllMncp%2beWLvp9OHBdesPHRkbGI%2brYh9pmllIT5%2bfLQljOybZWFYFFbqxfRK9g7yD3WzdUdBMlN%2bze1cIqQgE0gFrK6qP/PDNDa%2bA8QYT6jCoLtAiLy9vYsXlFSuun7i58PD25otHag6U0nQ7tqc3dw2n9I31dVSXsIMdLbXa2CxxSEhSTJyKnYWlkvohhPoNW1kYJ1shF49DEPe9eKv/FTDbhCpsMEzUGaID83xza2tzJ45v%2beTJ%2baOHFub7OsWujos9h1bNNJd29lR3JsdE0OkRMY7GtDTYUayqYKTo5K4QEjVDtnUUCkYg8Fa2uMqysiHeK%2bAiE67wUnUgCHR8xdSKqYkVK47v37Ju08aZ9I6VsaoQrc%2bB9OGxPs%2bU5pVpblERMd56x5KS4GK6D12nZaiqVHquV4Ha7gqRw3PBIaR8aais8dLkEvDVCdMBmwGN0U/gVO57N6Z3H2959Oi9tUU71x9Lm52NWJivSvIcqVmsma/pSk9xLPYuzgrxtGHExRUzgoNj6DTrRHGMEu2cEXnQzg6tVEgR2GdXE776y6dGYIjpeI1BW%2bvlQN%2b335u%2b%2bTQ3N3fL0b0P1p8eWdmcYhPUlaJPCxteP9I10pXe2dM54JNFT06mM4oTs3T6rLjucg%2b9k5IJhxP3ycr2sSgBFAH1h631Vy8RjcByEwJbGADTgVP3T7RcWHF27eP7t6/dPn3kUFWJZUdSXIib5/bmHbtqRsaaksJmVw6IfRzFMXoVI9GbQY9AlMfFeKHb0KKMDaN2ZWWhYPeMRuLBDXdfQo3AKSYEBloYAretOLP2xLtvr955/%2baRosW9NYdrLJPSOrURPpbNI2tq5herw%2bgViU0pTWE%2bwY6MYr1Kb%2blTLJfTaJgGNFeQL7sSHmonI/c/myRlRyYMhRqBi0ypEma1vrvfvvHgvVPnH1w4enTH4ZmR9OGwnjCaSleY7MjYPDZW6umZxi72Zs92NNGLfZJ9iuNUiVl6b5XSS8QBI5hOELsr2URiBisym/Usu2Ho3r8DvllhQuAJUOtE65bW3S2tm/YeW/fwZPtgWEfXroGYxDgGm50U1jlcHebm02TDsHT0TPF00%2bnobnpvhr4q0TtY6YzDp7oo4vnUg2XZfkS/8N78SSLkwz%2b/CYg0Ia9hRa1FXu3Dp0%2b3Hdt7dmHwwqbt62dnm1JCGG5VekbwwCy9a1ZsyQ6J8bZJYpekJSdqC7OyYny85fpxXQAyCpeK9ULyBTy7g72VobKMNlIo%2bq9v/gBAmRL4xKnWaPO1uRbtty4eObKw8WK6vmZQJ0m38VYxxG6WYaU9YXS6Ddsn2TONkZTi6KOrcEtkVLjicOM0prWr1EuEhlBgvIzRjN7RxvpQDcoq4VsiAGFKYFDrBzeiV%2bx/eva9a9WrVi2u2thzyNIm2ZjYMxhiXZWqpLPP09HHMmmgqYlRUuqTVSX2psXFaWk4D2U5TS5xIaCoWCcBVfbMLjw0YUM2kkJ%2b2Q%2boMiWwuWFqd%2bvxO3v25B4duXDx9JqxtJm2Y4OqmJgmsb7YkZ3c2Vk6a5Pc1BRWomMkJ6r0jNioWHm51pXmYW%2bvtMX4ayrRDgpryCSr8Ur41i8glf2XoIAwUwLXAozxe%2bC2U%2b%2bdPTp38v585%2bJCaaK3d5KjKsSHHkJn2DgONFfPzqbY2KTQi9k%2blmKaNouucJDLC8sDcAopEtlWAMd2x1LCyRlXyJqtDRlll/IBXaYENoteqprwndqz5ebax3s6PM/VNInh4gFpnJtNZ4i1lZiRnN7cVDKQnBXGTmpKytJF5WSFRCliXYO87R3ssRCsLdcJH18ocS8ry66sjNSQtl4iA7abEtiY6Zsb8upat5xcfXPjnfTE5xHj40X%2brozZkOKUEBqO7uPo6RkWFsaOiAlJdiymeei01uOJ%2biq5d5aHk9SFSkHyFQE4WqESajTGoxtCKxO%2bbASsNkmU9rMEmpuDDNGg6%2b%2bdfXy%2bZ%2b9IxOGNQYmbysvjFouVcT7eWm8bcUxI2mxySHEMmx2cWKxKjMBSXOVaVZC2UIlFu8BgqdbxEjlNbo2iZmaMkrNl3%2b8D7DclsDFcMwNFW6y4Ufto3bWZdy29d%2b1MtNKyI9gMsT1DZ%2blKZ1QkdXYkl1TpQ%2bhxwexgeo4DmOMeFKzMYgq4IudCBB9hhaPJmfYOeGc7O2rkvq/KAC2mUl%2bLn062zc0N17e0Plq9w7xi8%2bHTA7uysDq3JnZcBU7OiFc1s1OabSwdHS2Dg%2bmMIMtExjhG5M/1SFXQ5HgXDC7WFonAOXC5ClcP68xGP7Am4a%2bhgDxTJUdAg3mgAQiKBgJrW45v3H9nbv3G9E3ssOAKdqy3pY2H1puus3IMiq1KdDS6kKSwpIpxN3GMcJLs4ixEIsEeCC97Dw8l1krhhMSWRzEdUAQRMjzyQ7%2blkwNTqIQ50GCInrAwWmJgbd71Ox88vd20qihl3aKjTamnXucWURWks4yw9oiSpGqL5REVFTGO9FgfnQf0IxIWlekFJ1PAqAAlzoNrpZBipfKceCEE4t8Wfu97MgBgmtRo6e%2bCaicMFsdba7e9d/PRnaPrFocX01c6ppXaOIaolLqgCJjjmFf5uK0kwKm8ezxOzFCF5OAp%2bTy4CI5WozPzwRKFkz0eESCJZ5ZLJFgRpwFC3vcWwTTAwJ%2bgQSCQYUWLYcXZ/WvPtu4atOlbZNuUhLAts%2bjBFUHenLQ0gZOrBKFwEtjrYix1WUlatFBAwbpg8GQuytmjkInHcfHxTFdXiYNVahsnvKGh7B1n06gE8KfiQINFICjarLb97J7rj452HZkPLmq2afJk%2b6SN2wznaMtzMAFMZ6QygE/GqoLcEiscyyEFYIkt3DnVHYymjNMc8AouX1keYMtFOLVhRQ0ZsuwhF9NsOqABuHQpY9b6fLcF8IP2qUfv7j0wc/JcysJIU8rKsL4ueXq1AmftGsAt9xLaw43iEaCP8dZZYYVCsFEjMoUoOEbK5EslTvhuewcEF09BY%2bENZVeyh8CmMWtAcxAIYAD6Bk63GqYf1fruLHpw7siuMwu6Q6t8dNXp3aojcZ0rncslSBeu1AHmIuEGyLXjsVyFEA5uAwuRaGcIrACujbLFIoxmLdUeIUC6wwiyewcbjSu831Q6bJQ8X/NTpwDPc1vX3TmzdqZ01c0xsWdzX2epMYjwsRElKzDWGI27rYOTVquKiaMp%2bDg8FoERIFxELnAYT4ONxwc4SSW29vF8LpijRjfWN8reEZrINRvtsG8gsHV37dPcbZf3tm8%2b9e7OwcUdZ7v0wQMlIX0dhXQ3t/IerEiBoCLH5TkRFW5xNLm9rRTT5sAXoV1EcBHShQpJZSptYUgnW67ACw4BozOyQ8suWZkm%2bLEALB36GEDRT6/n%2bdYez53bvPnaQsfb7ePilSmOjJCB2XLvGG0AHpPpJBThcQHMRDeldbm9MlUgADvAiTy1izOFKRWlenTHcx2YCr5Q7UxxoBLJoQmXuk0TXpqBDGYGs911xwEg87rr2y4/qn5ye9cn7yVFlaSoxoNL6Lviy8e9mVShOwbvgmXa5mgjcAGuynJKW6ozGNNAJvu7%2bxvzz3h7XACO6WGNQIC9pA69GVBZ2ZdMEwXwZsYoom7PBABQB7B4unvviuF1e9ft33VEWxEWE1faI49gW5fLS7wC2KleDoXjknKl0tpVHmUvRMMw/kh/0igEzSuAIZhWAXgHCQLP5VPAMHU2UZMw%2brWtyVIkMwDQF2geCAC0vn3q8vX2Dw6P3fBMsklkh7DHklQ0yzg6P7EkvgMHFbraWylccTlRUTSpkILG45AQvw1kNK8fJsEhlHh8gNFnQMBgUr3Mr9Fu8nu%2baZJQwFK0BjQzOmigObBlT96pmvO7u2o8sefSskJSOoPpiYneceO6sPhYBSmfa9sdVY7FMZWu%2bFQcChYAb/A72M9CIa2s%2bKnlEly5q5M/BAKRfbwv417451%2bDTZPmm5kZLIxRjwEEeh8AtKi9EzO2H/CYzV6oHi7pCPHsKWf4KHXxFez4qnJyGcXeQcIUgfG28Xg8HlXgBeU5F6B/4Ng6wATgbut4ZTcfnArh1P/lxejdyB9fkkx0kGK2VLIGWqpyNZ/Iq3O0afnglvnGkNM76enpyX00T0t5obO1QhyMkue4u1g5SVk4CdJWIbG1BWPAUA4EwgpvgDRANSJ5gNBW4QCFosPvvrFBVl/2WeOkiY6qfgZeqirfsrvFMTf39jpAu1vpxrCQ6p4UtmeQK61Riij3cGZaCql8PFWGkbsquCLbAKl9vEsBuI2sJhH7kV54WyewkxRZ4ExN%2bOLPdxPuRg5pvjHRYaD50ts0YzoXHThxfdu6Gt9N1y4ATlYNHjgiTu9xPFxSLFc4BOgpipAClCJK4N%2bIqtTRsV6Z7jhJzjgOi/RCYRr2sTCE/FQHFzzW38sFuuHPLzbs2zo5pDbVcSvQ/OdVzt1vbjG3Ztvaa7fMz4m7To%2bMdDIY9JABPZqhauLrgkRerghnbCUmU5dDgnuRwMh4j4BUfx4VxWrMtGZSKAiME8XLBU2IvLovct%2bGfW8KTXWgDXz1esr479bqVoDFrdnFltqjpTPz2/vWr6RnRYlLgvmxEcW4CP8AJo7olUMiI8ozSUZjC%2bczy43GAYvisMKJYHuumitEgCEu7s7EMrvsyMi7QzBTXRks5QXGHxBg6kze24ZT6%2b5/MO85uHHmcNf6ppAOx/GOi1ZO9jQaXo6VciPRtnx3WFumS6pAamtdrrCysrd2IUHdCXbu/EZ3DBZFdUGjG4isgwkJfx6CmuhSBvAzsgF0YhNg9e7LuRZrBza%2bezpt166dwRXNPojqW1KYR2yig2tqEOwqFB6LD83kU7hOqfZMBQKP51L8yaQ28KhfQQKnQJTvhXEmaOxCI%2bsn/7LvcxNde/0HMNB3ut2s5cyePcdPFp1Z0zPSOdJT7eldWqViNEdEaVXaVLkDsoDggFfbOWOx8fFWuKjYcissBk7tteO4Q51ZLA2ZR%2bBTqJrQ7OytW%2bvfAZv6YtHMos7CF3R9S%2b6J/aseHhjpah5o9gzua2q2l9u44YKinKQUPMIFjYRowr0EEutuW4W1UiIU%2bGcS/XvvZlP5cDWKaEcSIl0aM6AZsrL6IQdTX93WPT9Vd/zp7lN7bt45fXJmcKEm2bLEO6WioiqE7RbkKm0yxux8LM4/P7wXCZNae9jLFQHGgKINGu6s2UD0AmsIpAQimuuF2sCpzK989uNLF1NfjgdatO43mz5z4%2bTcGfHZ1T1dA0k4umOPKiiu9LSewaQldscHiPBRLqQEjVDIDXBlMpVKJwpToiGRG5zh0NCDUM4oR0AhsexQ0MbwyH8jXjF1%2bYHRvO0P9D155OLmi/NFNZvXb/dJFotTqoKLHReYsVGxGJy9FRjpiiDKOGBYKsLeGo9T2koL7YlEItgDOXowH6LmebUheaGVXg1bw0ONRs3UBR5G17Fty/TDhRstIQeul67bfttzPiXER1XB9ikOiqXbB%2bCkTnj/bq2MlOlOkVpJFLhUB1x3DvdgbxlS4ezHEYkK1F48uDobBaPe87tyiWvyEhqjdwZtuTE4d2L66OZz6auOjZV6pnnauKWHqLy9Y8Ny0K7dWLgwJycT41KAtZU6xQcpnCTyIDxR3YsUsQhkiACldvdDe8nQLv12xA8/5Jm8SMkMZD5hmJ7b9PTdYw/Ddq5f29E1E2xTozh/khIRI63q9I%2bPEOZLlFgYhYISUChCBw9atyQqQgqlemELNGSWCIEB%2b1dmQois/hfkjEsJH5u8DMzga97i296Su2XT7f0HLp5%2bOMLYtSuoh5HmFhNszWTESsHjDuBuhLMIyc10d4a7CGD2THuPbpg7RB3aFkBmYbkYsChy32gkj1VWdmXIynSFdq/2G8i3DgCIbvGt3baz9cy1bV3rnzycWT%2bMae/U5iQmzUe4av311jhrjHAcY4XkiggE/3gJ2D4HA4tvAxc4N4gwpHwyNhXB%2bujqszJS6LMrz76BmLaUEQgK9AUE%2btblPd2/9s6KnYdvPxmr2DQvb9o5r9LpioN1w3FxFYjuHCwaIVJj2kRQKDeq2x%2bCh4TDsf5wNErUBido2qz4kW/s20AuSMjI%2bBPnQ9MVi75qh2EGCrQA5D09fvQJaN22o2Nrj52rOLyjeEf/6sNVQXqV9xr/jgoMLc4DaasUCeHofFSAEiYIdYdkQLBITi/Eyx%2bjBhudYP0%2bWX0DeetB2ZDEhOW4wFeBhJlFoMXuubzH556efK9v44O3Z88fqDlAj2n21iNsxSM2XuJgjDzI28EpTqSBYvxdnFLBMA4hkyDEgzkHC/wLOKHOaI1d5GTCPjtZfeXLrfkmLHgG/kRsDgSsWA8AbFq/ftOavRePZAUOVAxbryt1quJHxZ93i3VUdmNcy11EkAYNoY3iQClAgyEoMpTLRVFZnAKendEtH5QlfLFVFhq5r/FbB1OWlAN%2bioeNe6616FRL7tkP0nat3llUtLFLJXYsGYjVSS0RRarENHtVAdLWmHWiYBgXmAQGRUG83CFIDEpNhDY0cHp7WRpWQ/bVDeGhCdnffcQ1ZdH%2bfzqO99%2b/PJt21hy4q%2b/a8ImzUTvD3BgRlmI9vzgtRGEp9ki0cofB8lPbwMI2mNDdXYiCqCk4kR%2bBiIba%2bdmF%2b432asIjEw7KwrPfJF818bOIn3LR6PcvrEs/ddywuWbvxTkb7WYPVVQag64ojXF181FEWIUpmCyNIBPdxoXB0CR3uDuUgMGgCXb5IlaChlifTSybTJgsC084%2bNWbOJM%2bPPnJTgAtDIanT2ofbct7e6YHOBZ1LIzumTjA1unF4sVieYSWhlfERo1mOlD9wCK1swAKR5LQGLhRQ8gyMqcsm5jQwAmt35ctK9ua/S3JzqRPe35KOMxBExa%2bvtevFU2dTSk66jG2xzPpGv7AAj0iKdgtNkiqVCIQAd0EcEAq3FkgQqEbnClQUZuaAyVxIlnQcFnZ55OhrA1bN2TveyF7S2nix1NLOw5oEV1nZg60qKIYAIyNm9KOnIwZ9qzqKQmOq2bT7GMDPMAB1qlSrjGDQ8IpYChBjYEgwXAIFQ3xk9n5hR8MTxiVTe67Ohm5VfZdfb%2bJn6ct8ZqBog2%2bBtDEjPC6Ib1p8GJYevpCsmdJhOvJmZwcutg6B2aPwuMdlDiUCCbC%2bGeihVQumOqMhjg3aIjh2dnhZfXZZR9%2btu%2bLLzb87DRM9wBwqWLf3AIEyjMYHn2S176z58FD19mu5nP65DHP9T67Yipsg%2bKU2ignmJVVvISJxPD9UPF8ERhZAOVQjZZYJCtLkI1O1l/N/uKj0PqrVz/6iGTiJ5bmr9oSWZgZLFou5E4bFhtWvL/AWHlx3nIupOa03jNmVo8uSI6ASXUIoVMBxQujZsG7HUTOkvxRckE%2bT40py56crH8WGS7bGlm24fN934FN/Yj11Usvo58ztK8ObCma8o%2bZNhxjM8ZqBp9UzMZ2DHsnigsRMVKHHHt7vBM/FolvEEkk7u5qZEG%2bpkCN8qKi8us/f/bG3YNXr8oi35gs%2bwvR1M%2bELX5uBrZloMUMcCL3iNeK1pCxscIjn2jTqmPcPBaL9SEqV/%2bKFHeqSJpanErhC2BgFJca2aBgNYCJZBaq4cev6p99fvdFWcKPP/K%2bxJr%2bIbbRpJkbDNOlWwDR7wNvrdw/5pOy66jlmpMlO%2bxn56PKoyKqmV7WcpVfLA3Jx2GkVuUIEdJBfUXjT82HQtWR0Mhv3yj74rMXlYQ/f5Twlt9Wkz91t3hV2wHIvQMAPQ98eqNk%2b%2bPq9FU7%2boZ71hym3k7HRSntGYnCWNVBcjDWPwsnhGOssGgYVs0ik8hqFAFC3PDVVxsiP/qqvuyLHzJGh8CmbyawdBUabQbKXQO0qAX4rl3w3Ll38%2bGka4cLE4NP72FkInDecZ5apTUFJrHi0pBYAbYN3IaEufCoB3shagKBdfXHraGT331G3PfnF%2bQh/luvoV3D0l2%2bBaj20JpaAOB2Ye6p2ZODi/Mb3VZSXGfqaAj7YnmFD5eLo8vRrvYwFL7cHtsGw8BF7uhePw40v/fg3Q2R9R9/%2b0X9V2XEoVHOa2iI8SqSABkM7/ddrs1LFgOPrbk1M7a5NLET7HPaJ8nGLTZEjmNaKWO0XlYOLjBBvH0ABi1A9YMhvAaZX/5o5F2Z3YdfT8remCS%2b8Y3V62g5smTXokFmLYHRl/PePnsrl%2b4zdX%2bsJKxrZaGPa9BYsFzryPCJBavshYXlEj7WXYLDU/v9RflqHoo0qskvm6zfmv3GM6hdwuiVL%2b0/fh1NXcxAQKNVC7wztW1/4OObdav7PHy3D7IZg301TzxWOkZF0LQ5WnFhIcKpLwA3biWgYP1RBGewM4dA5eUXcCIjN7y4Gkm0Szi471Jm/2tqmwNcal9msAh8dLH19ppV0ec7NjqGjYyVNs3OqvQFHvKOGLyHIgCfk2WNw8DBcCosFe7uDClA8wqEGL/6yTLWhl5y/UHZl//m9LoaE73Kas2fA0AXduxaeGh4mDhcvdA829VX3JPk5Wjt5ZOms%2b%2bWO1nJKVg%2bGuaMdKGqKWqvAhKUml/2YkMG8YdKUaTdR1vfUbym1k8/XSSZmd9aBTSrjp5LOr5ztffw7eERekd6RUh8nz6guzuWyQ/A%2bCMwFJg7PpVSQABLwS4FGgIv/O4kkXPlr%2bF24VdDh3D3XlNzraVQwsy48Xa/u%2bL4Jx/YpPfkBm5vSkk5nyb2DMihWdGkWiYOBrHCgR2QTkI0t02kRgnaqBR3GbR/MiGfGmoXzrtrlzBEyXxd7cuMcTvwp%2bLL9qPttkU3t2/afbw4uFTnGHzyiJeHa6GOJpRqXa24DgpbK7Az3oWDQgsI/bD%2b7N5wGUlEJcrIMjvW0GTqa2sQ95MOR9e%2bD9p17P2qdbcnmmsmztARhbO8Y7WUwqwqRyc8bVwZ0C3tllAgcCukuqDAq5IDrmywk5EhUBaBHEr0e%2bffAl5jC76lLjSGwKloi7AjoDWuh6fCvMxXrERWWBa31ORrgyuSHbgCfEwEDBGAFSC5qVCIiMTnZXv5EUk8aoGGyIP68Ua/t37z9TU5NF9SYENgrSFwxbo1703Me86cvrgrrVBrmXvsO292lKoKJlUwc3Dx1hKB0AoPZzVQCQHOjaTGcLgLNB/q5xeqsXvH6Y3X20bSYB6dN2HwBbzftTp6cKHzInvdelHH6pTyinUpOR22tlpaQLw9rdyaj8W6wCnoSgIqg5TBQoFRvRySH4dz5aXD5Ots1Pmqc715XqCv7/Pjt3LPJK1dtW7k0MWYQ%2buF%2br07XbVsj3ireFucEg%2bXOAgzSUIvUhkPnk/mEArUJDWUczC04St%2b9mtthWoALfVIARqOv936%2bM6pplW3hleuGdn%2bOFZuTT/kZq3XRqm8lVKnVIg7HuaAQePJoaHqAg6BR8bwKnnQ/IR736f2vuZms2ZAM3OjDk8dXXHKogYM8D13eGSzXn/2iWeSh5Xep6dwXG/PtRWkwvwhSGcONYPcQA5lFRQQvKgkTQP0xTsula%2b7ne%2bSpzObOvHJtunrgCqd7/VzYxttlG7nrznNb4yoojPG5TgnhYctxbatzZ3VeIVIzSdD/dsgBZlwv174F28KKl93w%2bSlYxQLo4nYVfc%2boDp2J2A/c/sBXUdnUVNOzrw%2btsPVVenKxLjzkSKuBE11JxHQqW1oJNaLQGroLdv6uTD8tbekBpibLdWkHN9z7O3rkunn9%2b0jAA/ig1fZPpwR5FgzHb2tdEESV6Yg1R3h4O8v8CcQFAioRl1w8N4PqMaPHCJff9PvV506zSxaLOY3rdgBik47uK6uI6hGXFOIXX3agYZgjscqCaXbIZRUB5g/So0m9lIwmnAW61mG/8cbXN/4I9qqG6PhwLy6FebTJ3ZPX5i53LOmY2D9yqr5QmafXmlfaGvJJFN0OJiUkOnv3I90IhSgev387Fh2gkuagDf/iMb1S2lz9MTEtC9gz9x7NwfXbF5fuibdcU2Sm1unrRxXYeVhz/XgkWDwIIyLPUSEgFPVdhl%2bBKTf93zhHzMaAAAEAaJb8wzAp9cPz0Uv6LavGe5IK7YZ8ZCrrK1pcn0ATohb405wsbT140AwGKoLGppPhWd%2bLSD8QcMXliLiwBO5voDjAF2J7/mbwSVHDpcsWlqW2AcHJJXgJN7x3Ig0MFQpdFITcAhRJskZiml76zNh/R813gKw1FH98ikDKG93XfOaTUXrcn3YnX19faqIZERsdSEEG2DtAXcAQ2xzsERnjAuKx/Kv/Iu74A8cIGJhYTBMTRuin3c9L1q7pfFYYFrJbFxTMtNSERcfV4gTWvHdbSVwsBSNgorQzv1Q8kcf8Rv%2byBEtS1K7expgfmtNy5nH58GHinzmOqL0YrGV1gavtJLDvNyUMCkFzRNgMnmkxrKhUf%2bP/8ghOEYVXhrJYbFtovXJnrU5LbcTz3nMM4PYUckK2rg2AMuEcau097oF/mhCBsul8tMhQcMv5TDNmCFA4JKjMzcLW1X7/rl25f6Ti4dy2AMp4m4tM0iLZ2rV9kEQXjwz05haaLI/%2b94P/NYfPMjJ7FVSZ16350n089MLmxY394QF2TQFd0bE6XOcAqI8rIQOVAKMyxG1YbYOEfBb//hRWSCzpVtF4M3c9g%2bOvruafWdXSMoOdme5g2VNVCZeApGisFJ4GRFNGn2zDN/7LzCMzFC3lIVuy1u9eVdtNejd8QHvzvQU5oyDg1uSgoIVYNGZVFamM%2bvZlzwF6V9j3BsAEGg4qWoBTOVep%2b/2CUgPPucWs7BS6KoVUmxFSLlTAzGf89FfOVLOv8pAvSU1vhDmCwIcX3/gdk1YUpSDfNWNYkROkBOMAuNTe10I375UW4W%2bpgmA/3xkoQEEBFgALOrqLp452tN1Mmq%2bE4dzVFERUg//UAe58%2binz0L9wZ//pk%2bbZigkwNwcFGgAXY4%2bcwTQkZI00BkW5lRhlYqA22Lcx3EvPqLCyL/1u6YZu7lUs2/wbcmzOLIScOsgZlWaZWe8q5q904sz%2bUWCmo/68Ld/1USDTV/dcOw/M7X3puMH%2bxPXKPWlDhn2Ae4ZAgmf9N3v%2bqRpRsdaLLW93Lb99C0Lmmjdgm4gKqg%2by%2bp7gsh53%2b/%2bnGmG80YvjZ2afvf20WZ%2bVpMPRg0Gc4UZny7Lp5YH%2bJX8t/HHeWbvm/ke30xXofzdgrzIW99cvq/8PwEGAMuEonb0wGR5AAAAAElFTkSuQmCC'/%3e%3c/svg%3e";

    var img$e = "data:image/svg+xml,%3csvg viewBox='0 0 183 183' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e %3cimage width='183' height='183' xlink:href='data:image/png%3bcharset=utf-8%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAALcAAAC3CAMAAABnsD%2btAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8%2bIDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJEOUJBMkRGQ0VEQjExRTk4MEFBQzY5MjFENDMwNkREIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjJEOUJBMkUwQ0VEQjExRTk4MEFBQzY5MjFENDMwNkREIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MkQ5QkEyRERDRURCMTFFOTgwQUFDNjkyMUQ0MzA2REQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MkQ5QkEyREVDRURCMTFFOTgwQUFDNjkyMUQ0MzA2REQiLz4gPC9yZGY6RGVzY3JpcHRpb24%2bIDwvcmRmOlJERj4gPC94OnhtcG1ldGE%2bIDw/eHBhY2tldCBlbmQ9InIiPz5mmK1MAAACi1BMVEWtra2srKyqqqqwsLBiYmJmZmafn5%2bnp6dkZGS3t7eioqK0tLRvb2%2benp6zs7OamppoaGipqamdnZ2mpqZhYWGlpaWxsbG2trZpaWmjo6NgYGBsbGxra2uurq5lZWVjY2NeXl5nZ2ebm5uhoaFcXFyFhYV0dHS9vb26urqUlJRxcXG5ubmXl5egoKCWlpaBgYFqampubm6ZmZmHh4ekpKRtbW1YWFiTk5NaWlpfX19dXV1ycnJXV1eKioqRkZGMjIyQkJCLi4uOjo6cnJyAgIB1dXVbW1u8vLxwcHCvr6/CwsK/v7%2bDg4O4uLiNjY2oqKhzc3N5eXmJiYl6enqSkpKysrJ%2bfn5ZWVmCgoJ7e3t/f3%2bYmJiEhIR2dnbAwMCrq6uVlZW1tbWGhoZ8fHx4eHiIiIhUVFTFxcVWVlZVVVWPj499fX13d3fDw8PIyMjKysq7u7u%2bvr5RUVHGxsZTU1NQUFBSUlLBwcHExMTLy8tPT0/Nzc1NTU1MTEzQ0NDPz8/Hx8dOTk5GRkZJSUnOzs7V1dXS0tJLS0tISEjJyclHR0dKSkrX19dDQ0NERETMzMzY2Njc3NzT09NFRUXR0dHa2trd3d3///9BQUHW1tbU1NRCQkJAQEDf398/Pz/h4eHZ2dn%2b/v79/f09PT3b29v5%2bfnl5eXt7e08PDw%2bPj7m5ub39/f6%2bvr7%2b/vw8PD8/Pzj4%2bPv7%2b85OTns7Ozg4ODp6enk5OTy8vLi4uLe3t7n5%2bfq6ur09PT29vbz8/M7Ozvr6%2bs6Ojro6Og2Njb19fU4ODjx8fEzMzP4%2bPg1NTU3Nzfu7u40NDQwMDAxMTEvLy8yMjIqKiosLCwhISEnJycuLi4tLS0iIiL///87MgyqAAAA2XRSTlP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8A9EGGvAAAYKZJREFUeNrMvPlfY/d976/lHOkgHUlHK9rQLoGE9n3fJSQQ2tEuENpG28yARoIxA7YB22AwOAmOM%2b5MJm4mi522t7WbNrdNW9dNc9PkNm3v/W79c77H/fZ7v723e5u2X/0CP/AQT30%2b7%2bX5Eg%2bB%2bctf6OOPf/O3v/Rwe%2bXwwYP7228/Wn%2b0/uC1h09e/eDD3/7ur/xifxHmF/VE3/7h%2b994Z9%2bK3UwukZNb1FcerG/vrS4vr66sbSyRF9bWD%2b%2b98cG3futX/3/F/Xu/8a1HZCJzf/vw/uGTtdX1x4%2b2X3nlweHy8t7yIja5QcVmMFubu9TNzdWH73z/F3Py/2ruP/neO4eLmwubj57srSysLCy%2b8dWvfvCVt1579b037m%2bvYXaWF5k4LC7CMO8s7i6uLOweUhcevPO7f/zN/1ju3//Ga7u43Z3NtfUN6g57895j7Nb%2bm19977X3PvjWl97bXj/E4qxUDnV3L8PQMbGYpd0F6hYZrZxH7335937wa/9R3N/8zhMOPalj81oOzJKcvbK2t/n48D75/nsffPjeG195cpjcvL%2b7gFncX8dgcERckoojEJNEDGbh9Uebe0%2b%2b9NUv/fCPf/k/gPs/ff%2bXHmMjBKsMTxnJCFbMwubywvLGKxtLiw/fXt5YX16g7i7usKlsNpYk1/KWmMldOoOJZVgxK%2bvr%2bI233/vSa6/s/e4f/sm/M/cfPtllM6kcq46kYxNxmB3r5soidnNhYZFN3kxS199%2buIfZX8AuZigEzBKPQMfx5OwlnExLITDx5CUZTff4k%2b8/eGPnrQf33vnuvx/3r7%2bzbF3aIzOZVgqPJ5exI7r9PauMyuFsYdgZToaSvPfk1Q0ijkjH0/IUzBKGQJRT5CQmm0BhOAg6Ho65Q9z4xlvLb71HZe%2bvHz78rW/%2bu3D/2nv35bLMPobHiDB3CHKGw8qgJInF8E4mssiLWOk7mCQGv0zN6OQUHdssw%2b2uZuQUHobN0NKYGBwVj6E%2beO3DR2885iQ3tnY5S/iN997/r7/2b8/9/qvEDp3E5Oj8agJB65dZW7odnNpB2qGlArgIrSXjWQk8DAaLUtOSj9mYxfVVDE1fbDnqJDp29/F9PPnew40n9x98eH9hYXl7n8wL0hbW3/nyvzH3N9ZlSqWORuNFzPqITm3pmWXFOonMoNGxvnG%2bHaGotRSKjL2jYzAyTJqczqZo5UQ8haY1UxgMEhG7ayVyMLzl/a3Nd99//8Hy/fWF5VcXZbrkl7df/Tfk/uGqw9IuyuU6Ocnnk5NqNXPEke85AlhGJewz9Boqh8NBwpEc6ZBFq9XqSOrQqNULMIgUbT1EIZhJSUwGx6bQZEtb28uclXff319aW6Ys4vcWI8VV6urX/424f%2bU1WqVljei%2bOO5WPh22KPM%2bS97vT5sqNZuqU%2bg0o4aOWucoTKKphk8d1DHCep9f36JQiASaDo9h1OsM5hJbL7Nawtj15cP7a%2b/f0%2bG3H2OojzhyLHWP/d63/y2438fIg/VInRBQ69QtWXgUTLULoRJcK1SNkEelqlVCnVw2ZqlKysZsdZzvqTNsv8zsSytD/qDeoaaww9pxKhgIjtQUs0NLwe6j/vLm69T1ZRwJv7KBoTxcrr/3m79w7j9%2bnNZi9QE/zZfPRyg%2bSisQbMeaoWg2ZsqVpKVOLmcJN3MxOJfl8wWwJ1uodqKhNC0YCo%2brSkuRFk3kDOFSp1ttZifRnlpuLjLJeM4r9%2b4vvvaoVGS/8SizfB8fxP/2r/9iub%2bMbwT0mGBg1Ernw4x6SNuI5vMV/6g7qXU8cLdTjZliBo1mMhF6uAlTthZIRcc1ZaGn1moNnV6vl/Z4DL5UqTTJmkwa2NbNjyxqCoa4Q93Y5vwSHuZSHi5xFjbodN3bv/mL5D5U5hx1v2OkDPrDBWXDqOloKuFUum4Z53wBmJXzVDsCTTRhMhjSXROcA5uNSqU27kVTPpks3PP1LL6oMtUeRwuqaCnm6Yw1SMFi1tOtMubKUnj5w0XZ1nurGRL%2byy0KdfVbvzDuP9INEiH9yGIJhoKNxkTkVkggiTFrzFtK7balxu2WCrDJWK2NeDI9lq3X5mvKQLRtGfdQ1nQo6KsZQn5fVNWZRKOWaDQ3btcmlVjbnOatcGTsbTxbe29jmUpeLdIevMms8yiv/N4vhvut7GnWr/cpK1FDu8sV2NxuIQI67YKxLpTylQzKnrmYFQqqeTamRSLIdWoexcoIttGurSjblnYVfQEGQzWqDBVrqUotOtHkUlVVqRoiEXgM3Aadx%2bPo61hCZOUrvJLu/iGZxGS%2b/Ue/CO41ybGqPgpbciGhFIEEUqlGI0CvuqTHJtO%2btEEXqVZ5dZohvMIL1Jm6uiVYZzpw2HQsIVBqw%2bN8qZdXWqqats9iqPlb6WrHMG6Oa54cg66lkPALVtyWdQHHZrKL9Y2VCA67SqcvLu19/V/N/cu4o2OWUl1o5GwGwYG4WXQEShpVKkBgtCJqpS9Ackxisp21B288JKR4unrLUVSG8nRUVXOeVETfq/R8%2brRSmQrLreqA1pFKOVS5tG9UD5QCZgKRvoJnWvEE5uKOI5msppd4RAx5Gbu8wFn64Jf/ddx/IL894CKIKmc85idcQGKkDjQtFdRAgvVWKx9Umy35UkodYERWybRIk3858BGDEe3W3l5SHYow8%2b1mKJMxjNNFOo6C3dEFQzW02kMUPClcqsjIdKt8i2fdwtN197EZhqUUIhHpG2u7GPLSB7i3fu1fw/1HjMFU6rELxYrps7n3SmArKXNRtZlg5WlDLfMoXMx3U0SruqZSRvKkzdj1j499Whkm6SASV1d3mGaettLWatPBQDG5gt1hq9WVSp6R7lkZvXFbSUKrC0vFLS1h2FTq%2bls7%2bZal2KLhNtc2lxb2qbj1X/mXc38jfTIXa7h2jff26GQ2FKuMVUdEP/JTGPV8vuVX%2b0aonPg7SHnGb5ZkjKIqR9PXGoaKHstZ3mewI3pdT5lopyz6XhC/SAvTaEo1Q81gaknKnjpPXOWFiRzijpVI37bufP%2bxjmhmtEoqwvaygyl/sLH52g/%2bpdxfV52flsUiRAXbz29O5mWNMBvSYXVpNdMcrURTbb9aRtHWhPy5%2bySWbtpMRb%2bfjNFHHPIihZiM0DJYX10drLaVBn8woJcFHbSejESjZKyyti/UCVsXtEUeAbPKozOt%2byT662RZxEzoxUI7iwwhnbxl5fzR7//LuL%2bevZl7XSIRqPHwjw7Qmc3Kth11RiS9ZdXnR6NwOp3RdWxwtzQBvJY0SwKPK1xppxFQr%2bzoUe3Tbm3heC1lqOXQFlPFhjKvb43o5hbbnHIYAhOVj8ho0xhWKk9PoBOWZZhXF9TaEUPWMreYeP5oi/N4a/m9H/xLuL%2baPS9PZy6xmwVJrxWIRAhWaWaaPh00r2IIjtQoHIqOqk5WtaG0iIBERa2upRKCOCsRy/kPMWtsEo3GJuH17Xa%2bx8NaOuFxx69bpLcI%2blRJqU/qLWoCpVjRMmg%2bP4HS0jE5a0RZBO3RhUwlzSN0tVv3197efvDJP5/7/eZnz44HZTsSLyOCU5u%2blDbQsVqZlbJD7ExKCUDQw8mrAOQSAfyBaCCpYSOghiU0wrlaqTrptWQtPSHEU5PYlJKBsIVt1%2bQrEWVykU2RKdG9v5sMWqhadKv26q2GVh0m0eWkDJHBIJJIOq3asbJTz2wS73159dUf/HO5f7vz6bNju9MLQU5poyno0YIMdcvh02IZUZZLIgZFipivxueLYJdNipSFHrBZEXrYhgRsEmY9AMigpBykZaouwMTQtDySlY7ZXmFY5fKdDCUVHgeiqrQ/SYmaHb5AgJaupMN1XpGIS5oZZvyjR0kHVe7IZJa27r3y7td//5/H/Unt5x9dTfsHfQXIT0RPuKO2T6/Op2sRUih%2bXJYAMDBQsOJHl8MyIAbgsqZqEzRtUrZFlU0IYmNRFUcpKEnLW2s7aseStRSVUdib20s77Za1zqgXe41cmsYg7OBIRDmNkZRpLXWGv7i0sML2p/Tk11Z5AcrmIlPN46w93v7Kr/9zuL%2bpf/r8%2buR4OrcLuIq%2b/VTUthT1tLClkaFILwCjkwtzIbdieHx8MBBzkVgBtCGahMQIiCVSCMlWBZMoh13VU9RyBoNQdNB4GTodt7BJUhMiWjlbrgvKeNpNKoFGC2j1WnOKRiNh5LrlZTpVXulpiUubFMrCFlNOoWCsq3tf%2bdo/g5twd3L5bDq/chqB%2bcnV%2bZEwbBil1aGaD%2bNzupxeSUIFGiXOwXR40XeKhJqShC/idrm2WDeh8XiynSys8C0SimE6ak67ejn2Ed5qJVlxQZmMEQ6NgoFasOXYwfAcDnQ6Bv0GXZJMXiIw8fj79EiErSNsopuIaMURSBQcA5f5xj%2bde/nuZy%2bfPRuW53H%2b0dWBfTgTjquVlDJaCrNzEtfp0J3VGMHB8fHMOSj3FTYuBHIRyDCRBgw2m8rI0qhyCVj%2bBq1qlptxW4SwkuNX61o9NU3n0zFinnYBDUoEWUXpH7FJ%2bTSbSPMvkWV1WQbLdjB3mBTiKhb78HVekb2hk/t51sPv/FO53xR/%2bpOnd6d3F3zn0FseHF1xq%2bNSx9AZp81mqQT0KryACHL2j6bDvp1VtsNShakAcqsejxF0CnOdSSc78ZhChLDD4gvvrhMJVlySLkeTPJ2tluMs41SukkuM0EQ0qmhbuU7a0RnvkMIEDJForusIFBJ1gU7ceGdfzsMzq1gGG3v/D/5p3D9M/fzTu9uro%2bsDsf3owDk/mRctqXalUW2bKeG4XegceBX88tQpkZRPpi7WEBAh4KSrgRQCllFggzvRTq7YKmi6ab11QW9p6XFLgcNkR5nh4EiREM6s1MDVgKanbJjSRF46nJOaPEoMk5Kk6gkUQga3Q9/awuqsH9wn7OjYTMfSYmbvjW//k7jZf/HT55fHVzfTwYE3XnZen4tbFksjX4qhWbwUFdjt/av5ub1vl7jtXrdE7PSKbCyhSgNAwgQk5ooS1UKuiBprqmfg7bOLTUsGQ15nO6oGBs6KIbaCDr9ykhqXqoYGhdcjcJSaXK4je53D4eR9siJ2BU/BLlCt%2bHsbZBIep9MxmHgy5sv/FG7ei08/vbm5uD3zlk9OBgf2k6uCxZeq%2bjS2UKlgK4Cn84PTef9gMODz4xCCiEC7UCpEmlVQBCKsRGeSbY4njYZFWQq1lWplutV6ZfHJHoNNJhKTpEidhCVTVCZTt9YLhJr5sTIcy3mQQuvhBomj9d/DoVMnQthao3Mev7NPwS2xebtJyhJ9/fv/OPeD0x/96O7m/OpyqDi6nNrjp7fORitk6SkNzbZQMXPah0cnF/P%2b8GjqHRyUkYHC5ZaANjhXNYoQ9Mqbueo4Nwq0e8qgehxNZZsBNrnI2MJpdUE9ugMzQRrJb9CIhSmtv6pKpzom4dgzieYpbMLGPvtbj4jMXV6PvUAgrbzz9Qe7RHlmC2Mlbj5%2b8nv/GPd/7bz8/Pnl05vjPgDMz/sKwDu09SpZNOFE1MDw%2bKzsdLsV9kH/%2bOig7y17Z0OXWCJBbNzYBBFxjapCzNZRptTqYi8dLJrCYXawtcKhOPbotZjY1TWEIpQIjVavj3IlfU3YDYWL4XbAaIsZq20f9j51d5VNSLIjSTxBxtx4dR2bYZop%2bH1U5e8//OY/wh25e/ajm6uzk1mc5Tw%2bjYuFQ0m0IeRzPROazt2fOSUAyJXyy4P%2bsD9UAM7jAUtcVhg1wsQkAWuENlMhl1VqQ2mlpWCJmkLhLZ2aFKHLMMWuSHLALbNMUUtK2aNxMhUuxO1YAubiWCnVKA1anzHLWcfi8eQ1Yoaawe4uMXc3ljJsf5i0%2bWiNyH78O/8w9%2btnn3322dnR6exgOLu%2bHIhB6IgfLcBo9UoNE/5gynIBIkAxmPUl3oN%2bnK8YQFL%2bwC4ymVQFWCCQChK1qKcQ6lY6pk4VEalLlWJwxJBrHW3Y2T9B3FyNoGPwaeuOdE4hTcRiI0ZPaMhNGgGao6spLr2%2by6au4TM63i5nBbtyD0vg6Wj6%2bs7GxtrjN374D3H/geq//ehnL56Xnd7r6enZRRyC7ANxdhINBUwwfMQHvC6vwuWcnswHce/0aGaPOxNclkLBB41wE037oKkZg6PVQscwEeYrYkF7Audl9PW3/TbvAV/DBe0sQSxXCfmVCTiq4idqgiCTFC4aTLCl1ZITabr7W3rCw205O4nBLS9sbFOxqMHIwryN16j3vvLK1/4Bbvb/9uOnHz97KXH172aDeV/hcsX5fCRrE4yVBs/AOzhieSUicdyuYHmd9n4/LnGCLL5ICkoFApWAK2WJhJPCRFPLN1QluR5OmWKBWgWHxb%2btOhBrqujTCIQaY6EgkBoLFlXcllJZCCtY/6QR2dzHLW1iqUkyg7J%2buHqYJGD28Pi9%2b2tYgpbI3ll8w/rojcff//u5f2n%2bf5xdXx6feOdX57PZ1KtQSFiASwx5B6YocDF1Og/cYnSlg2JA7JYonE6FIi5x81FogTDRFEAuu1vcpolcpYYyqmeQ6jDcMCSiPt/DlhSAC7WuJ6uCjdxmAebaVE2jySjqBAgEDlZp8NXZC8kd4iL%2bkETk7X79lQiFhMdyNrbJWByTYEUjxebCG4vf%2bvW/l7vy356h4/q0f/7s8mh6fjVwSfhOl4jvdQpj0ODUOzwZIgIpwOe74gOoPCw7h32nFJGKpFyQBZiEXMgZdzfNsHFc6zRoZhnNYDIlcqXKKNJxx90ijS0Be4Q2FReUSieGjlGAODtmjhW/LVerHVoOdQmTWVqzrq4uvfmumbnKoS4uUnfJuKWtJZ6VsoIlr6595%2b/j3v/JT1ys6/MTxdn1wfnZ2flBVmofDlxxr0RsVJwexxVTLiyQQiznwO4ChkOnxO2VuBCBSAEqyhIRKDQp5goJIlUVOipDNFj0ldBbGLfVlFYoiyjEIAAYYZMUtTCBqBvN8iGxQhCk7u4u0AlFAjOzs7W5hd9dfGWRur%2bdWX47U8c/%2bHqLvoih7iUfUZc2cI/vPfj238Pd/fmxzfnj5y9vr2ans7MLNx%2bJO1lltwQQuRXu6eVQgDJyXW5X2esWs%2bxOFqs8G3hRCjvLqeByjaALjW32I5eq0xmrogZLO5vLhcYBOqkQ4JYl5YGTj3qjGHCJuGJVJQEiYmdZ6CdgsHUCKUnGWDMccpK38mB/dXd36cG7HBlp%2bZUWLsl5%2bIBz75DKwb5CJn/4d3NzfvLz28HNnz99ftL3eo%2bnLi4LcscBr7fsErOE9qMyAEqzIFIeOr39MlopQzcfNdwBC4HikIQFC4yIlMsF%2bU7ElLWV2j1fONhq9AzcPLsJSSEjNL9QwBqBEGK50cJS1bqCLLfsFouioWCYpGMvrCR3mFayHL%2b5updMvv7%2b2i6ZuhAmFDEbj%2b7pRpi3/JEnFPK7f/B3cf%2bK7Weff/r0ox%2bfPTtA%2b/EgjoBeJyRE4zxoBAENy%2b5WiECULT7zlucns3L/yM53udx8ABIDJlCUEEohMcSPgzFDpxOrhYNaRl3bKtW4lqBJaZxMRG5WIovuGq5QxAXg2MSTjSEAEHcrsulRpM7gLG9tYXRreCIds0gnvvm9JHVxd5kW9eEwMrx8RGTqcA/3qQ%2b//7W/g3vh46unNzcfPT9D87DELmGJ4zO70SQFIGNWI6yqJBIvCskVAXYnMLyYKeJuPovPEkshAABghGuSSvlxYRboWBrKdrjni6Yp6tCo0812hc2mMCdiAYjJyOKDAhMCAh5NVogIuPzZXGSHeg6Z2bq2h1va3iJzMJwvJsiDJ0tEHn2ZOvKRZAzMIi8Twq6R393df%2be//G3ub/tm88/7N3fHF9cXNyeAy6kAEAhRSFx8F4IgY9CbhSFJWcES8flSvt1VdpmkisEUdUH0R0GxEBSLWSyhxqb0eTQVbZGibKvTwVBFmJ9AmjK3CktFYrFIahQKjGIA1YKYB0QgxaCvuJ7W6jqzfOX%2b7u72IomIpyaZRBxWh8fs7uEXsFQmjbeICWtfly%2byHQ/2n3z4tb/Ffc91AN3enjy/vbm5PC/nXddTTYXLFSnEIgk/fsA38j1iqVEBuVhivkssBZ3xhMjpPPU2BYDbDgFCEO1dVtwpDAQL2dTYozSPHOmROdsp5mAT3zhpxppZI98tghMw15XwINlcU1SWCr1DxUE8XsngsPeXX93ekuOSh1gzb3fB0coQMLiWnInVagnhvOWtLb9uh7T58Ic/%2bFvcwZlzOL%2b9vXt6%2beJZXALFL06Rqm1cMhr5AxaApt9y02jLgW6XQiw5kNhEYqeAJU5IwIYH3fNckdGIlokbVCmjqH63VdkCmo20uIDQ56%2b0o%2bKyYJzrxkxiNyBojmOK7IRrqnlEEqkgPpsNFVOPQ8bBY77zlW3OCmcBs5Oh4CgEgo/CWTJsYDKbhWg%2bQT8UVLCPd/YevfO/cj9%2beuY%2b%2bdlHZ7fPrq69w3h52h8IS7GYiWWTKhT2vgTwqIxSlXvmjWv4CFcs5LtskJs/jHcEEHrhUFMgEIlFbW3RYkj5lIWsBi61U7KWkmpt1EMiCagxCYWIzQUIvvCYbIwr5CKAhKsSxKcsrscfqi/s6h8/xOxi6FY8FZvuBomEcFgXbh0%2b4TUKNlOthTeozOzVxbXDP/lfuNPPB9L5yx%2bfXzy767vLxxdTU6cgtEnEfBaIuggECRoGEBI5y0duSARGQZHYxZeiFjs0gnwJt9NOjREROrajAUc%2b1Sh5BKjT8gWd3mh5x9Kroc3BMppAUAyxjOhXIBvTxLJcMaJRmaSSoaAzogSYT5ILh/gdDmeXjVsgFBgknoNGD6/V3/THYzB3ki05AjUNdmHx3vv/M/eHkqvLi7OzF1fX5xdHJ/aLU0W3njMicUQjUJnsZQQ9axjSuOJi9OhdCNcNwuK4QFQWD0AhEFcRmEGlSWAJ%2bNBYJtOnLVFDIJpFb0kQ3ml0OsYq6IW4RjEiBVlCrhRyqTSqnAqUoMUuELLm7ko%2b6OlhGRGcXLbwRoS5gqlVSBRzmLAQXNPnqjluT6niClSEHodMXr739tf%2bJ26GhP/i45ef355cPj%2b/uO4fASwYU8%2bBiKqrjIJlF1rOQr5XyneX0QXJVdkUEpHEJbGXXUA2IZY0zTJLRYVoxqNerWdJjwLFcNWTEM2OPOF0NkQpgG6JCHIqINjlMhrRsuoKYY8JiksQk81Ynio0FWXQp3ZkcEE9BkfjLPo1USId/WZPnlELxwaVtpHQIACc38TRNrYffeNvcn/bZiv/%2bfMXf3F3%2buzH1yd2t5cPTHA6k9hTqRakZT4kUcygwRy1Qf7JqdeV9UgG5bhUzFIcsGrGuEvgQR/GOJDT6tPtdLHO0DdyKljTbJr9o96I2PL2XXHJbGqXul1o%2bwpNUaNRaBOjKmOCbW63E0woCb6gWV0sBoK0zCJRj2ljcTw9AWel5WKNRLtXhQsQawp1i4GVR7jlX/4b3Pe8Acln5zdPTy5fPJ%2bdlhVuVqVmElWySEwVE6CjXMLqKw6GQ5ZYNLQ7JSaTiC%2bR8BHh4NxZkToBdMoINBqxODbyB9C1nfaVxuGRkRWW7VGWdgxR37QvdrFc01mcy4XR5ZRTmtC%2bVHglUq7RxpK4qjn1oZ9GLfqKWbhifWMvzauTN3lm2cKKDLbVmp0JOh/AqW3IMnPYbzHuff1vcDNYoouXN8%2buz88vLuf92VTiUS1Yh%2bOSSVQYw3avEDnts/hDJxCXzPlOlgKRuLIJNAwPy5qxEbUpAIQhm8jNz1bblEC%2bN27r/Y6qhe1Ih/ELoZiqPwAASOQduk1GrstprLQ1iECssCvQojeCkrgolfBr65kMc5RrIvk3vkXJZ3Bkspy%2buFGXdnIxmyahkiKACwA6h%2bQ9/Pbr/x/3d7vlm8/%2b4tmg/9HH84OL%2balT5Ml/8idtbiyX8KhMfLQo7KdlcV8xs%2bfA4ZGXqwBjNhAS2MQuQCNkOV1ck80UM/L7XiiltzICfoa5qE9jqLhwpB7wl8QHM7vd7fTOxGKXXew2thsJUIDGVAmYVQldkPH8Jx1HPmJJU/RVW8HMeWWPRGJsLdKZuCS%2bNslFEZsKRLKojDkB68LmAuf1X/0f3Ouuuz%2b9mU695yeXZ8eDgxN7oUW/T%2bR2ExA04boP0OAjnV07RQqnRuZxHU2bRqNAYmeB3SoAJcRSAEB9SWCye8UukccYiyk6oYA6QtnYYhTNen/DAEP2%2bVzhHKBDFYHcg2yq20wI%2bRAEgiCCtmb/aKrPWImtdEvvMAasFOruwtsYLI6zvL6BZYTQ6BFLGGEYdbj4uWP93oL68Hf/B7fs7uWPp83pi5vbu8%2bf2lkDsSGctfERZc3ElygOjgeDIct9wAVm/Bqu4ZxduWrNmI07KJdq4mwJkopBId8kEB0cARCX7x3auRaKFt15W1S8OZAPa5oe/vTZhURq50JSAV/sVkW/kBRQDIJxKCaUeBXcqNJsjmjH3TGlqcrDHQPt3r3D7bc3Vh4wSIY4IpgkQJXNNQRhxWT33mGYeO//5f5B4tMXz4HJ8U8uXz6/uruwIx6NUapAF1nNA/L5kGI%2bdMePXLDbCCXyJaFJHFflPCIpcFGqilVRmMsCbYhtIhC5UM8egkKJx5D3BeVM9gpVm680LDGBjV%2bavwBhp8AlcrEQlUGTECIIC/XfbAxylyXZTqpRNIfDsCDXTcRKIndHd/%2bNt97Zxm%2bvE9twttvxCLIwfwYYpS7i2holuPPtv%2bZ%2b/PTF889dyMfPPro9uz6/OnWj7mZKuCUmgQDhSwQ2gRRdkiyByTSudhu1bkwIASdnsB5Cxk7UNURiI9cjaEo9Eyg3BVhewI74ZTS2tUWIRIKWQLRQURpD3M%2bGOe5JP16Oi5o28ZgLAWjeSEwgFxqtWUE/LJNFIxVWtJg74CIq1E3Yhx989a3vfHi4lJ8IYClghIA44LLViov314rW3/1rbv3nT//sR9PTz88/Or86OT6YnkxdoLsvABF4kkCGR6xQ4hb2sbjZcgjWdDUmRcIm6fdTmzAg5A8RDcuYANHF4BI2c%2bIBa6DgAj22Xq2nqWXaQC7IS%2beEM7fAY4cqlfOhIg4iUimQEAJiiREG3IDY62KxpHD8i786GIy5QuzU2Y3oGdpWfe/Nb/7%2bPc76CAEhCQQZQRvgLsrUi4ev7%2bp/6a%2b5xR//%2bL%2b/OH/58UdnV8%2bO%2bsPZrO8UC1EmE1IYc8uDGVczlEiGSDbqgAuwiH/d9XUF7oGg3/XCIimMgAlYALulnljpGAThBF8l1xXzDlox2tM1hMZKs2wvVEWIoFkz9NFxwhWLsyYpIjIq%2bPYLl6ATBZ2oGtc62Z7GULVpJAPVVoSipUVG%2bDe/9CRMHwlgD9do0rgRF7K05CO%2bvbzS2/p/uH/js8sffXp6dvP5R5/d3Tw9mB047WUjl4/6XV/RSbnsg4shN4bG935WAHeNNg3kKeQSKvuxKS0yQbGqjQ93hWDMUjTEnU4xAAXVvmgoTKOpmzaLutR3e4RhSyKn7CIlgrrinSsSaKsAiNRb5l9cQK6mCsjGFWU40Q3lE6htSfqKpk5v1RIZPszX15aDlokxJgSbLptoNjQcBogP9hdfefR7f8W9fXf02RXr4kc/vfvo5unl6cFsOBzE0cHgHDhNFdVEYANn076X73In0KmLsEwexIZOJkSC6mjH2EtJxU2VERBW8p6BzaBxdfFBc56mV5oJjYTATylVlR2l/aXAIGyaY2CuZoojzvmpSjMfQOXZ7FjChydicf/IKzImagUxF%2bK7D5CQWk9n%2bLWYD5bXrT2pBmRVjU7E6L1QLpMrDKr%2b8fr3/oqbwrr5s5PpR3/28vZnn85PD46uhufX9sH8ZCqZJXLSuMvNLXjPL90qU4J1xeeySqlm06byALacALGZCmiaaMc8Cds4J3IPDUlCRF6JynfNMaU6UOC2ddFxzxCTSNzHqmzZyY01SA%2b/g4W5lWIp0ARiaZhll3AlYnu5Xwb4cDUmYRmBPl9GU%2bMILTbt8FtvfsCpoM0ACo12kcZePfxuSsvRr7z1rb/i1sx/%2bvL5Tz7/6KOPX9zO7cPpif3o%2bOBoVlYMALFqIoxLxBI4x53aBYVSApZqoqWGr6nhe8UaD58Ld%2bGSsipVlbKFLOJBKotbIYshrWVY84WCQSUGSxqpp9ApacYInGvAYpWp9Ru/S07XS/l6xDgrLRbLbuhAXFbwpWWWQmQzSqT84VwxotAcSWw7svGN/UdPGAYNgnD5rImdH379bebiyi7n0YMvuD%2bZP39%2b/fzPb68//uj28vL6%2bmDAd5a96KNsn4hFKUM34XpxADdFfJY0V0LPtdqNViZg3IXYquCkZEnlc0ZbtdnNhwIEAm1kCVkshkZIPypwTaC4zOcCbmGha2TIlY16xWY6UuFWrVu9qCbQsfdZnclsVvYa0VnucontqL7FjS77yS00SmKSjApj7ZW9va9Q1XWjwm0Smo6jS0w95n6EurWy9aso91cufnr78ub2%2bOL29uz29mA%2bHM6nTrdCUe67BDAUzbdV/KOzZwOpycTVtPOhdN2QDVlgjaE2KWUDFoelbWj4onCplB45AtVuyafz29Jph4Hl5gNI3IaI43xkrHv46DBYPjBKjzQV2FBU6rsiY38%2bGx6UvUNAAbIQhVDqHQy9XggQl6%2bPUc3ptPYIFNLG3jJZvhj44j0PULNIx/qXFiz17X3qJyg3eXj08c8/vT6/vTq5ujmbzvv9y%2bOB1xm3DyB%2blqtRFZR8vmTYnw0nWjmdWPerR6W0rqF0hNqlQqAS7Bka5oxfmfJ4RFzB0NgojLQpn79hAhViEyiE3BDi4sPMb7y3VRSenQsrAVG8NO7JJnb7DDXyofiLu%2b3zhVwP12732mfeskLivT4ZxKdKHM1cpC9ymHQqjeCaN1uyTBuzopP1HLuPV76HcpsB4Gc/fX5zdnZ1efPy6cun57NTexxVEm%2bcj9avFAhRnAq7S5OdFJp%2bqtVgqBkMDnm41jAE2tF2qhYKG9qOnlk/UYDodpVa6oZERVIqjMdSwCSI2pysBCAdSPTaEIMEeXuBXkG9qAW7leG8PLvlQweKeB8quzUaG2R3x%2bPoqQ37J7cAcn3qnWv8Ps69zc3dJHWPYPAl97F62dIIZmQY9/a/i3IXnIqnL17enFzcPP/4oxfPzu7O7/pO9xA9cVS4Y1xBMeRknZ13iW0v0Ky0SuMAPCGo68q2JaD3WXy%2b6jjgCMLjUV7oMSaqUqhSGBREqnwOyaqqHZtK5EJYAGSPJ6LtXha2GJRmTDQ45YOoVgLx%2bABNq2KTSJKFJc4BuvP7M7vCOz%2bNqU7m04OOJX24srBLxPEymeSWfIcZwegyng5ddvjkSyh3lj//9MXT86PLly/RU785Prl4ejpwAeXTkwMJWtSqiUpkvwIEObHXVKiZHY1oqVpQsnlWeZjkz/va4xDNH0rU0pVYqWYQSLnO2RQEuKpC06SBWG7U%2biTlOV/oaUw0sNETrYx4ROOli28/uPAWpAfo4gcKYxtXAMznM5cz7nU6y0MWSwgofCkDIxfYW32ySk/ukuRWK3Oprppg9sFuJ2R%2b8OFfYr4LDm%2bOLu8%2bOkHLBK2V86fHRyfzmRuBBk5QohJyu0LpWFLONueaQkjXtvjzIzQDK2nsnUiYoB75Kg2t2qKs5CtjQ8%2bg4doSisHtp2dTcQwCbCwQgYRu7yA%2bBLtKwWDIHVuasWSyCgL8Yf/ALQLLs75dlEpxYZH9dCZx2eOA22V35nJTlj24lTJbHMrMKwTq4wyVxKZFrDL/DKt/ns8qyQ/f/1XMf4amEvfgxU%2bvri/Ozs6vjvrl2enFddkElstuSQIBpVK4WOMm%2bscsjYXRCMgpZjT71qJps9bv8NeDhsCoEtIHQularJtLiNyAx33z4iou6LgUCJrBpm5o6BxeeYUdMSDMV1Pj0SqdEVT0j%2b3luLcP9GcKu0AlFojs6NQB0Vjr5scPjPBAqMjfC8NRW8IwynAIOwt4GkVO2tnoEYxXYZXj0fqbf4J5i%2bWBZs9u7y6vLu8%2bPju7Hkj6p8dziVjhRF88ml7gRKkY5Xqv40JWu93LB7FLvJG8kwsVKRl/Xq%2bthfypNq3VGCcgRJVTCSAV6%2bz2CMhVVRqA1T%2b9FcMHF7c3F%2bUEAMDK4ERGt0x4vo6H1R/E%2b7OTsst7ij4xKOnb%2bVwIVQtnH11okBgO%2b1v%2baMUmjRm0eAonyaFnOHTM6gYlFwhH99foy59gtpUqMXD54vbu7untzfz85mIwO5%2bXFf3rUzHgtqv8YVXVV2q6huKys5pvNZR0q7mhrqUJRM5%2bvWdpp0f%2bkK%2bubZc6hUKno7Il%2bJfn5UFfJOiFCimDsK8A3dc3R8dTW9NkzC715DKWV0%2bL2ezzo6NBvx%2bXiuxzexlwO%2bNo4ne7JM4yS2QXHWisDaFB2Y6KYhpVES/jbC5g8DgMk8Ss6bWkw4XNx59gNpWmbOzqT1/enVyjDXl6d358cnnaPz2/O/NKyidI0efpRg3dwXx6zIK7jFaApuw1lBba9gL%2bIdXfySkDvnw72nAo26kCzAVF3PmVKYeoYmO/3oGeTWzmNEn6Xrer28lFzXSGg%2bdL9cIeqeT4SHF0ArilKsHsyAso3CLXwA4JWX3A5fW6T0oWI1KDDQ6mz1hQhpOY5QU6HZukbN7Pc4u0PcL67ncx691GlPX8T%2b%2bO727m0/nZ5fHd1dHRydXx9dWxWAMJiup0pZE2OWd2lTkNh/Wj4DigD%2bjIb9wnP3qAS0dLtUpwFK2ELI2aSuqOS7gDr6pSC6nNlhAjWm2rReJu1cS3CbOebGqP6dDK1TpHpeuKz5zg0TwOgXAXig%2b8ZQAEXXEAUgwh7oBfFudiLmO0R/JpgwKDUTzZYZIYCwv4/BLJHDIH365z8L%2bB4ZSUFaPt4k/7p88uh3bv0fwOTfRHFzcHkAvQVPLqlDmdSNckNhto8ZgSlVBaGXQUsff3313f3c1E8g5LSk2rt6KeWGGsQqRwz5AwjiIpdcaSpssshmis2Q7VVM2srZuFCZiRg8extgMNz1wBHIj5EikAe0TA9NiJIAkBBPAVkkQ2JkIDNIiYAtoRCUvICmLDYxlZtsUhkZcoxCKNEuH5GSvvYPS5XlY6%2bPzpyfOpu39pd86Ovd5p/%2bLkVCwyTvLVNk0bcMgTTqHGJTUVTLmx0qdOF2mkxYU9srxq0Y/MvqhBGfZVJ1k0c0uy41Kt0yimU5XaiIKrBwxVpT8KN9p1paHZtND0FsyCOmrwewaDuNeUVSAQzCpz48O4HeSynHy%2bfWATqhIwSySRmNrpPJbnh7kxhRtOR9ZxxK1iYHWS0u0QsrpllNswVtlOjj/9eJhvXF1Ph8fT6dH1i7vrs2n5VKDMO%2bjaoF6XhcQ2IauSMnUbKUsrHTUYfHo5LVpoOvKxUoJlGo1KIaWJX3aJRQJVJ6VL%2b1Ip7eoqLeIPO3w5cTHq09aDypGOqsXgQg59pSS0K0STVEJqgu0DI3Rg54sQSVmlEZlgoSYGmtBNoKoFa9Vwr6sRASzF0Zis9dQJmnsWTZ26UOQlX8FElLaQ0Ou9%2bXhYMF4OTgcKNIS4z84VQ7Bp7Cr9Dnqw7ghVVDbUIqRlFwuyeXIhf0nVTKUK0Wyj3mt4JBLVuFPLTxJSKSSZsbqlNhXH1gb8cr/aQSPoA2hdAKYwIyIL6hbNbF6REG42mqj9wDAoQEt6ACFeO2A0upCmSGqqCFSmMhzTTGIjSzbRgYxGicIFHHhThWmCApNV7goFm4zIyZhYoWBpzS4uz0/O765Zw6vy4AgQHygQJxjNdhwOpYPC0an1Brhstw2OAgZpLDAyM/LVRtcWLU2UnWpHFTWESpqAbQg8PbC7vaxazcy8l/GNglq1IV80YyOOtMqgpzB4dDne6mDQ5I62b2wDAZXRbtPwFay%2bwgaU0dWK2FwSBbprsp4Du7A7qdV50VQNlNi4gB1VYhYICi1Bv7PGY5LwGA4ek3OkggTk4Pbk7nZwfD2dT9GwMzs5ccencTvLEk756cxgylBolyy0ToxazPr84Uhj0tOnGtFqJZaV3vZTKk1JmDLdXD19fjPkqqoGvVreardDEX22Z84sLLNDIzkewyNgyHRfgJf2%2b/0kv1FkskFOEeSMiwZlk9AV97pgjSAhEdu%2bePerDwq6jQhbCZdsNpsRcjudwMBubFjaJagabkcwjAU8Rmketyw14bR/%2b2J2fjYvO8t9NKMdnA7jYonC46mhBxeOsRSmTrPj89EalVShljdVLdF8sBozhSvl6e0ByDIJxw3n84uXfT4/odIEWm0GLZdTRzVj%2bS6aTnQ6fHJ3Y/HR6xQSiS4zh2qWmgD1VjEfBJwKodgllQJld6IrzCagMqvMkkidkCZnCIYRd7SE8BFBjGuH%2bn2gEozqDd3YSLZC4ZAxqoYyHKjB15fPP7q9mt0du9zHKP1Rv293azwCTbrpo/kmLLEt5hFGUxVLsdGrj6oUHzenFBq6HnV73rdnwXmnmAWuf3QhEkCJnMYQVJvprQB2t5iXP1wn%2bR0GzBJxc/3eKmE3ow9QWoZgOpuulg8OQHdfofEgLgkk0QQKfABNch6h%2bNTJb9by%2bXB0yMrlQNEkGxNPATHk8tTTjXxEx/RFeCv7mFTYIiv2pNfPf/Ti7sXB%2bd3w9GomAqeXw7PzXJMrbHIJe1Ghiwt7LJ1ms5oytNWUSIXhmExUnl7N1u2Ip%2bKsCyiEpQrvHXjgHleRLpwKN/2UFnOd5nfIebIRSSvjYagPHmyu7ONa6IzMLX/SbjoGx14%2bS8JqNo0uCciyodvJ%2bGSLspNwC2CjoJFXVtGKmcQQNyLlxsuQkStQZdstoXmVSE2yHy5hlOmGLGzg970vnh49P7k4GUznXj7/fBo/Rl2uJ/K6upEEHxCoVD2PWCT0JBKVfLiq1uYDNWN%2bXAMUiDAr7Phy2dIEgVxze5d1UvZ0DMZeKFXq9tRmM6NFi9SLGM7yvVe37y9j8FhtK%2b/AVcb%2bXFSEBiluVwNCIilLIhHF%2beqFx8lJI1j1sRAGQRSPeYyqCUtqMnpZXKFpkuhUKQ6enEknye7tYEah6ijiB49Oz89unp%2bdXk29w4Gzf35yPLs8rxnAa4EglB0OBWiYNJlmkIYbq1kKpV4xSAt3Yx2zSmGcKD2IshIXTjyxQRa0iWB%2bP9fLGWLjscmQ1hNkMhpxi8Bb2th4eG9xFZukU9TtkU7t7yqL4BAEFNyayQSJNCAQR3wb%2bxtYH07nfz3Qw2rL4pjRaOq63BAIimA4Fo1lO2i7mInWncz%2b6xiSLxcphuwvTk6evji7ev50qrAfTE8vLw5Ob86qzfHU3rLyB2WhpWPrGhQSbqLqc/iiHgspEvQhXP9ECMRFManAYhIaq3DforT10eFQa2Sb3G4vVshbcUQ2hfCEw9sib95/tL62Q0iyKeZQUB7qFGCnW5DoK7LocfNVCcBpxH7t7a3kVlLNU%2bs4mSiogW0CUw2SAAgsRIwlQ7NaChJ3eTLs0v4X/wMhXwr4PScnx1cvn03ntzfT%2bPD44uTieHp8cgoKKwW3ryKJZ40eiQbmisRIt9Cz1CoqX8bfa2XznWoVABUsMBaoCdDJZpoAlU7CbbCYAMRWCUxySi2Njc3o7q3yduib9%2b5vk5kZfAaLpdXlMWlFYBQgMdcQlnLLrJhRovGR3900E8hEM01pTgYBO9cUE6pqYrFRCBshU6FhKeRSfqa5ZeXtJw8xzFojz5wMvhDBp%2bcn1ycHqMNezKd97%2bx67m66J11Q0hXYjCa7SFgbF7pZJFaLGRpqWcNg3ucZQmNhk%2b8UwxohLGEluAmk5/Bp0gYTINR0x01fOEBjE/FU7DKHzqRuL%2bAYIeYCkbhJNMtHBt7WXgGuRG1NY04sSQCghZ3E4NPaRd7uYV1LK3GhZjcrNXlAriYrdSU0tUZgXDDIzJZIWEblvY3B5fV6WoE/vz46e3Z8dHoy7c9PTmf2Qdl%2bejeLzYYw4JF6AJiriCUs7UqhyZc2xtVGy5eYtN6mlVolaVYjgmAIiMFiFVzyt8fhMaoFJlgk8aBbUodufDm2hd3l4Kyba/gdfQS7tLnA0DLxEVIm6Q8Ti35atyuAhKBIiSNRi%2bagrL68SAumeg1QKMgWQA/o6QpBQa5gUUZN42JGFiKESHjsVzFJA6Ue4tu5l3eXF7Ojo9sju3d6OvXOTuflu5nEeTFgFWagURCX5IUSyJQLF4yqRKyC7u5EKqhP5YMqxMMVNJFcriRtRvMMXjGg1EdtIAtA2qEwbekep66j4ok7VA5haQG7SSYuruDl1gU0wdAp8s0RZmlTLii4Y%2bO4JPKQs5XOaLWkpTCN5KOb7W6hsNktmGImINEppAINbrygd9QJFBmRTf4tzI7dYXagE%2bnl1cEpGtduT4b22ekp6oTns7t4eXoys7PELEjEByFWvO8u6fNdhF8w1NRhgS010kWVxU4WgiBNVZXQxEpBHoYu0zpSBo1YUzKPUmkee4mMI1npnCUOgWT94rQx9I3XMWz8Aon%2bBp1K3sK/rutGhAIPH1IzIzwcRkaSj1qtHbV8za%2bCBcKmJ6eRgCrUyoM1IOcP%2b1pLup0dM%2bcTzMKRPlJqCBTPjufXJ08/vr44nR7MT65Pj0%2bHHz1zuoYH3n5cIRHyhydOO9etqjQrOW4qBzRCCsAQSrd9qUSqoZ6AoC2Xq5rzyoDaESpicfVStYlKmY%2bmY%2bIJTPY6lU5kEDDWCD7JZiwt7GTYmcW3v/yASt3cXN6TeTrc2CTqYFuZOh4ura4TdtR6M5HeiokUBZMURlwCGwuJlqpLm0wab4vEWZHjP8E8EZMohsi423GeXZ2dX59fnR31h3fDvnPWv7mVQgfDo6nbBTUFzmHOqBLzp55AQ5rQSLlckchYSaHihcb0UsVgM8UmvXxTk8u36j0Zm0QJFkdffMqF1iLhGGvf25dpWxQ5lrSIz5DkbOoCcWfz4QcPtnff3SBgdUKlqRF00Ji4JIXCUGsdWpmDVkhoe7aSoGkU5txQrNMpoG753luHSRwnE1l4ZP0a5ndMhLxL5xcGpk%2bfnZ2d307jYvvB2bHde3Zy1hdIpoPBdOqEjIgEScPzWCouzBlUNqmL2wWMtUIo3/Z1oqlJylGAsz1CVGnI87bJ%2bt4oWHTQ0CxK4TG01GRmZRfPJMgx5OTabmZrj07LLC6s75H3NtbW18iBaqMZ8yjN%2bgA64zM0BhVL0qcDDoEgUEXbXdCcIO6cp6esFVL1J69%2biUiwUtirr%2bK%2bhvmuRl992rB2PBd//vLq7NmZNJctTy/uZucvnvdFsLQ8Ozg9H0KAWBxrJV6U6AWN4IuPMpQRocTYNaTT/nC70in4aIF2mpGUkWTFnTc22GhjmWkMmTnIJgQpnNU9LI1N0GZWt7VJPI25vsckEVe%2b9HD71VfRiw92qyqVqpoqKUNEHFNWXHq0sEiXOSIpS8cDooNmknUqTEDTkAupee8%2beIuWTOqWMvfIv4z5y55a%2bqOBpdKQfvbx8eXLKzcgBbwHx%2bhseWaPAyzJ6eUxKiwul6TpF51LS2O04LhH6LSAbQmk3Vb7lNpWLGGw%2bOl0DgdPCqp5W3SKnkIgmOUyKw1HGJEIWAwts2p2UClYszaDa%2bE21hfZC%2b//51cfrRGx9ZA6JqlZ0oZEtY5hW7VmIpH8wSHFv7rOKHnChaxrAg%2bMoLGZMjhw1L2HD1uHe7xF6%2bZbf4n5ywjD%2bdlVM2YKSi6f3ZzdzS8PQPvx8VG8fzAcOufO6eXFIO4S2eMKaMAHpVygLBy7%2bK6cepwb%2b31ovpfXm7FOoslmb99b4choJAJBhyWS5NpMhE3AsVtmYobBWFrGEZlaIpOOw9XlzCVy8sE3fuuVxd0VJo0iKwl72lFpUvXz5BimdQm7/odvcticetqAlKIalkAwFcIlSyPtZ%2b6uvrXIw2F527urX7yPzCFy/%2bxPO%2byxRxS9OD87Oz4pm05vnP0%2bX3HH6p/N3d4DN98tFYndCj5cjdtNTnvV4zwu51tKS8hqNjhoITSr2TV%2bAn5tcRWv1oZbNMwOlayjM%2bQkgllfX1xEpwRmi0wnb%2bHWkiQ8Waslr7/6pe%2b/un14qNfqRuZQNGipBtRaK4VIDNKor7%2b5KT/cznUppYysxLLlTIJxIBTwjeTL99b0GB6RiSHwfg3lfoXR%2bz//9/S7owTCv37%2b9PrpNRA7utJ0bo5dccnHZ0ZN/HJuF1er7rgYSFA0RrVBBHdBl7uqH0crtHQj2MiyoKwQggPaOo5M5lG0BKI1s7ZH51EoBIaDwl5KkkjUtdXlV5eXqMml3ccLjMzrDzf2X3tvAb%2bTLhJovUY6pKyi5mAlLO6zdUu7m7u4939nYt1g8hgpt21cQjTRjsHSNi%2bv1mU4hpyMZ9C/jXJ/Lx38%2bf/VeTeUFXjPrg4u7i7PRcDQyz8ulxV3585Y1jVUxCWeAjR0eYQGNEQ3ESghdonGNUGprQ4E8o1wBy5pQEEqE5ax5QQ1bWc1IsMzmTpSncZk09hsZoa%2b%2bZUPP3iyvChnUndXcBTmUhJP3n19eVVepOhCNSVPXYrlw/qgj7rCxN17xUrEvru5/W5LGXAQCzFlUwNHe4V2PmrG5PELOxEsU37/11HuP/ZFu1M1OaCaCFnTg8uzi0uXeDh9djQ4v/XaJe6ySDFTiLim/5u3b/9KI03XrYtSFiWFBVIlankBtQoLMCIGo4Jc1JIqkahgVLQQoyFRuYUkQOgGplucdsYZL6Nm4j45uZwkvU7f5/T0dbp79eq116y91pw/YP6cUz17n7NvM3v3bZ8fXP7k%2bh6L93vf59F6n6fujZvO6blxj6entb2za6ht%2b9LkwtbK5kCfx7TePXWlrWmGHAupfaY1jdJIB8MqQKe0uTnSaHUheJB7/lmpCMIYKVEA6COhMByG8slSlMTMKyq9xeUKrSx4Q4RCq1KijNoGsFj403itQa2YrnXWT0xMe/q6Q1e9ehcoIFYtSKS%2bxf1n/YZtwOtY3NwZ7/35f7v76ht/9%2bsbly/fvTl6d3To5s1bdbMdt3/TfGd0p6mxR6LWNJreK9e6hq8Mzsw3bJoGQgaDy%2bFbbqvpqJ8em52xOjQ%2bm9UMKdQzPpViy0gBQcBGSWC2eiwEFBBgj8IEBPJaHPaDQnz/XNJZVDgJIX7XgtexPr25teVRhxx%2bFYudFvCZ1o7%2bhd6VnXqFd2tpztdtjxr0oFK%2bmeknf/m/q7C4OeD2ukzT8vW613jzN2/8%2bt7o6P1X7w513rh9%2bXJX7%2bitjrbR5oGV9na7ass2N3zz3mhbTefiatNiaKXPrSW821eGXmluq20d6V4zrNnsfsvapmsgZLZtAhavRW9VAhCfBO0kSMsyC0YsdAJkwz4iXxUqeUaH5CtaHlpdTMRDDT29smBd0opchkvBsNrU4smEZq3jsjiaHRhzcUa1XmEyav3Se3/Bfep1XB/wRFRj80utN7oGb/3qt3evjQ633f75rXu3JkdHu14dbW4fbh6ZqJ9fWB0wTw03373X1theMzzcudPttYazqt72up%2b1DV7qbFldnzNolKDK4VxzmbZCDk7ngDCVJYigMYOC1ka1CJoBVNiTeFwAuaPHVXP2IcWdleIAMm8tJYMO43TL7PaK3rRExiUGcJWs7iywA407tvr71rsVrGNGC7lMQSr89C%2b4v7luGV/edA%2bsz0z1vPZ67ehrQ3fujjaOdEy%2bcmeoQaZ69xuH7t%2b90tgx0TezpFDJmuf2/baJ1uHmS83XrkZMJrWru%2b/Kjabauob2zjmzz6z261zdWy7X4mJIYbQYEZtbHaRBFYjaIRgV6QwTf%2b/NPSFR3D%2bL4whT2ocPP9bBBiVi0KN%2buaXKXWpiicDwGU%2bOs60Joh524N6pjWlfLBgasKMKL0Zlnv3j%2bycKk3tswLSysLXRc/dX9%2b7UbDa%2bPnn59fstv3rjxujrN1rvDjW%2bcae2sb2hbnpb57o83Nl4ebKpqWlwqnOobnF9JWQam7451NNxp6FzasthtWl340bPjDfkdcvDElkZcHebwzqdgguETAgeNcvMu7zHYvkCBIZJVERhIRHmCA5UWNdsy1dnV/sWZ0dswQKkWYsZLdrgDBZD%2bIWpxW0j7h4bIwBFBIyf/dN7M8kB79y62ziwZdtpf%2b1u87yn4W7jzp1Xrrx2c3K0ub6m%2bd7oncs1V5qGuxpaPOahO6Ojty83Nsp8vK2tdb6ldXpL7Ztob%2bm81Tll1S/MqX1RAvGNjW26DJYZrd6o2%2bo202lKZ/AhmEqepnr8/DNUGyYJimNT6GdlhEtmCDIAaBXuzdXe3pG%2bAafVgASySDiBtKoDauAsb%2bxxroxpIuPdbsJgXUP5Z/%2bE%2b%2bMVp8o2sBWJbs713H2tY2asX37Ydffu3rn9s2XbxO17ty8PD42MNN6oaazbmLjdVTt0u66mobG2vnOysb5zIqLS2frqPZ7Ohrot1dKcXqkIaXAWsxks6hCoWjOEvBY8HFSrEACzg2wABC6SBIlRkD7Ns6mPvo7H/DxNIBGr1bG%2bUd%2bw4XUue/JpJFtIhm1zjNKXASye6ZFFGJjeGFszWLcU3F82vr7F/cK27HP0da/5Pe7xyV9cGwtdb7jXdn2kZvnGrwfntvrv3hi%2bd3%2byffR2V//gRtev2hev3B7tuNZc23S5vamzs37FAZlnBpfW65taBjQOndrqsvhARqPBjd6QPSofpFfG4LWQLRZDjRAXtWoEfZSGg0GQTfNnnzxOCwxVSUfnFsfmZnfGxxa3HAOb4bAiwNNBOxWg5xyR6wsroRVXVL2%2bqTIYx0j85f993n/mZgacM%2buLPg7xLg7/cnW9u7e9SVbTfQO9tTt%2brP3Vqy2Tr925N/pa79XZjaEbdT3XRu%2b1X2vube6oaWgaWd1W4JHGrtqOS0sjGxrt5tUZ0mxVjHnDKk/ICGuVehw3qGmZTiEWhYJQqewclQ1YVJAfw9mzr0uVk/3sngS7phdWZqfGXYvdW3PTQpnFVkbcOQkxrHWrbCPm4OA2AChMdgXoQ2MP/t97jwfWzYWx7XrTmejyTtdOj283Xe64uTEx1bI6eNWlqXn9Rue3azCTr9wc6W9Zkodq82TDbFPdYHNX0%2bLYUkcPEjONNHV1yTKodWp%2bsLmPmBnTql2wxqVRRoN%2bilN4FYTCguO4VucAZVEvFGCNwh9jOTR7WDhMn3yS0gNaT/f88kp9/fz4zqWd/OEhO1jj44xul8E54L6uneslQLNaA%2bpoHVn8Z9x/r5iZmdse8Wh0Lo933DY/fm2ormVgsaW/d8Mz5nDM33j9xpX%2b2uHJofqWxuXOGzVX68fWrl7amLp0fc24c6vWZ55Y7h%2buqe8dm29taLw8oHMrQatXpuE%2bgzWkBC1WBaJUyj2cU4I6FcdpdBBkB0k/L3AszwvxR1/HtURwYMW52b29sdrdUzObEA/FjXFd0OqyzW8szA5YYWjXbzKZLUoLSX34z%2b/H/jm2NbDcvbC%2b4/U4vcvO5Y6aboV7fGHdMT0eWvP5Nj1Nte2jQ7dG3/jtZOPG5GB%2bfYHW9rZ6xmYXbQNTw/Oa3paRmjvN80ukenx6s%2buqTxnWuU1BpdVhV7lcKqsasqiUcqczghyK0YGoMkIQOAXBaVaqMOLzTx8dpQHfmGd9dWTZPTvR0rTBxgjCpWEhm7%2bnealvvMf3u70KZfFYNTJlZP7hX7xHfeSe3plfnlvwWGe88%2bv22muXnDI/3R6YG5/zhNbXN2YNKw1dN%2b7//DV5oG9PrW4u5vxX7raO9PZdH7nUsr1etzNSN9S6uWKfrjdH69cVBgYwKwBQYSZ8mwbMtkbrg6pcjD2gQKkEmx2QXWX2CygI43zisHL66aMyD7mdhpn%2bqYFIX09rwyqC6/Um91y3kDbPd48PbqJnMdQvS0BI62cr7/8L3O8i0eXRHsVW94zVuziztfpKw9XV2um%2blQVZ9oWD2/cu7WCLP79y4/Ld0Vs3rtpaZxQa9fiVm1O1g66R2tWb10Z6FmpqmuvqR/qt1sbWNSVgM1l9fkCvVoY2/YxNBQeZskr5%2bwc8qIE4WK1Q6QJwkgEAyB9jpN3jJMsiPsPOum21tnFu9fJon0bpMlLO%2bm7OCI5dr%2b/xnaI4rPOF8aAFlT589i/3G/aX3L3rRHd39%2bbshsN3abC3Z75NVv/etenpPtPA0P%2bqRwZ/e693e7Drjc6RVdOsx2JtGW1eam1rqR/sr2nZaF0anBq809XVcam1p9ui9ikwuzKscJnDfNzv9xNGDRBnFH5Bb7DABg1Jq9UIJfi1oBbkaDArFEsgS6iMMcvcSs3Gys7U2EDEZ01zm87rFmx7e8EJcfxJirDiZruWol/8q72MN0dkuWRyr3mdm7NuY/Py%2bPLyjlO1PO12a1Y3XSuvNC6O3B91cnM//7trndMaz4DSM9hZvzHS3rmysrExNTWysrRcf/nG5ZujbU4CCamNGA7CypBJgZUfZlOoRqdRA8Y1DWAI4xo1husokQUUFou%2bIOpALJPAAoJfkjReRXj5klax4uwLBZ2minVpQK/cDqmDWjBzwoFbMoUV8MO3//X%2bTizk8ahUNrfXM7%2bwPrKzuDK/MTbnnJ22QtNrVk3br3qjkbrJkclftt3/uwGjd2V6paWxs7OxadW2VNfTs9N/dfX6bFNDzWiTC8AtY7YgbwdQTGNWrilENByOsYpugyaCIEaI1VkgLYKFdVEYtlOlFBxFUYgWUa4KTGxsU%2bq%2bfdI1YxlXYX7bikqL%2bzVKNZEBY1F9Wm%2bB4Szw9/9m7%2bjljEdDqOW6dDjntlx93rH56%2bqtPi9jM7l1en/tr2%2bNjLTe/d%2bDi6sTtRMjxrH5Xhl3a1PP1e32myP1Ux2XJ%2bsmRkaaby5H/VHIYDBG/XAMs9ggIgIgNrrCWTw2pYawQDSAaO0Aj2l1lIBFaJYnA1JAKVF8QTR3D%2bywPFjUb811z6AZ0qDBwWjCrolydggAdCkKyOg15Xf%2b7X6aiPg0a1tqQ2jMtCb3UodzK0yq15ju1uWVMefN5i6ZjA/WTPvqPTHXtkfV09TWUN9aP9tfP9E/0Tly7Rc3h6e2e65dW8eChOg3GnU6wq9Vm6wAHIbVAG/eckXcasggT55o1M4lSS1KaxUqjgVJgApgQDZQFg0htRrCmAMqtDiiBgmFkeJjBkKrJRBQlxb2GRgtaGxf/Lu9us9wYt03owlGnI7FifFNj9OpJy/UA8N3bv3q9V%2b/ceONwbYbG6Sn29PdtxSZm%2bvt6Fmfb%2biqWb6%2b0DJY2y/zrv6R7o2uhkWfUg8SfkILg0b3mtrtiBgJfYwyO9YcSgAGKAYEMJDGoCiDRNRRKhMmWRZL7h1TkM4YsTN%2bBVlKWZwqBZ2FVGIiAJQYQqlj6PRpDqMLDBl/99/hfp%2bkt0CVGjE6rAvdA67IXPeaD7WttjV3vPbb/3751V/%2b%2btXrqwbttGlhaNxhXdy45KC03vmW61enahobmzsujS3U71y6WdewAgJetz9IoLDaPeYy6hS2LT2KRBwacxAAEVCCEDYT1SNAWCt/JGoorOVYbveFoEcMUYjEwTVCByk1KTYry6IyC9OPMAQmsBxTSRc4KYh/%2bOzf77teuM04abTZbdYZx8qAt29A43NanYOTnR2v3B2%2bf/neG%2b29IcWMzdW2hLidc4PXYwnvzlJL6/ZyW1dH%2b3BTa01N13DP9saYSk095hQanVLhmtOzQMSjApQKZZhW0zkFR4dxLs5A2iiosWgJeWxLYfHs0V5GaddqZcIF4rTKZKbLeTwa3hdlvFXGDoWfoEwhLVHHpOXZX9nTfZ%2be1oiUHVOajDPXd0yuLatrbnqh%2bZe3ul77mSwcbt5ourPhC3pX%2bvpnZJ3paBlRqvqWV6/OdtfXTdZNtu/stF9uXAqpN406Ix/1%2bwFjBKCCUVAH6w1Kg1ZlBPBsBAjv7VF8mVIiYaUWJGAlvyvsn%2bRhklZa9DGGVcF5zOnBUjgsFIHoPhM7OcVSqdNCochRhwHDN%2b/%2btX3uA%2bdmOkdlYoQdipi80waNybReOzz0xiuT9%2b933f55R8dvZ3Wu3sGRzpHOhnnvRmPfyvLKRFNn34BpZKLx5tJ47eTgrMU4oYmtmamgn9ZZQRwnAJqOKNfUeplzB0iEhOMJIJyFQYvdNKYMQFDionxRDkAkhUFoJokDUtSg1yAJjmSLKJXJkrtnJ2UBrZbCeJ6x65/%2b9f15yGvnsxXUbqBh1OA0GA0zptrLjcN3J%2b%2b9fuX%2b/dG7v6lVLi%2buXJo23Wybmutr2LHW7/Q0XWuextZH6oeGWwcbGzdWtpu6bWqjLISDqjWjXgvxDKZWaM1QQEJhDMNpVBJhWdjrFC4FisKM%2bN5xMrEvX04qk%2bQTNEwroxyiy2Q4jtlNJPeLu9XzTDR1xIGlj2D7H//G3v8Tl5k5kcKIEnFZ/KqZLQMMOQfbftbeOHWr69atV1599f7S1cXQ6vhc85X%2bOWN33ZwsIxpqJ2u7B2tqGy/XDNaN9syv9ixtOCGEJDReFQ3AZSGBReyAhshLAUwUOBEVGUqDcRqvhg1YskflixSKFSkR5YtxkscDSj0LmqNhAuWl4vE59eSD3d1EploIlc6y9sNnf8sfgvco0dOs0gb5fKB2bWtLWdF2Xx0abZ24dWfo2uW7l9%2b4Xdd0fax3qGG0dkBrn2qY3Wmqa2m8dufulUvtbY2NnZM1U6sbA91WLqrVuMY0uvjehQhorKCS5MsCG4jvZ1IC8a1Xv8Zk0SF6O5cqJuM4wfESRu0nYJrGAD2H0VxYp2X39y7K5aPHJeHseF%2bx/1gAU0//pq/Fm8E5RTIP2iBSAyqNyMAkzG%2b0bbQM178ydKVjaPLe0OvD1/pd41OzNR1tIyZHz05vZ%2b2lttqha3Wdg02NnVMt12quNq0YQFn8qo0GJRQvVjM%2bkwZSJErZ4892Lwokj0Y0Ppgw0YUSh4hhEYNxTqYrgYwgUhiOWfQooAvsMkSUFHbL%2bx8dl548%2biAF018W0/iLr/62/0kx5NLwWITwrfiUvjQdqbc67g93L6%2bOTjbeGG0bqu1obLnRb0DNq0NNt3qsCy3Ty/21kw0tw6NDV7smBzvbrjVttF7fsuvhDK43hLOpXIUlA7ieFinqYC9eZSIEqZHbC4JjgJgsnZWjEKEnMzK3lUQ8CiFANCkqwnkYy/IYjla/%2bF1p/9P3PmO4Y0lC99//D3xb3gmGlowBpW3OGLEGyl5xazu2/ov2ls7RifpbXT8bHb2%2b3rLd1gRiE9eaRlq27fOX5uebX7nSP3qz9dKt23W1o8PL870DIbsZFYIWschhcZHdP4oTNKoMnBTjcRosohrMHooCCvLRR7s0phIPKARHE%2bFABiNBNkxi1LeYi0ka4o8/enEmnb/3zUXqoBzG6Adv/0f%2bPm/Z%2bsZ1oHnLaDHCMft0eG5a0/Y/pnqaX7vT2DB8r/aq02qfb%2blXL7d8u/Fr3uyZ8OxMjjbU1o80NYx2jrUM2vrqx%2by0I16OUYcHD1lWkPLFJBphWT4AYYk8rycsgEBHwcBJNazPaAxgnAUACqNREgZ8PHVSZsMMRQXskFA4evHOwW7hixf51EUyjn32yX/sp5Sa2fIqIINObQejWb3WPuO2TjUomv7nL1prGxvrRutdCufYtNu73t/adqU3667r2ZSvad9q99bSotW%2bvKFwbVi4uJSLBTg%2bWcoz%2b%2bcXSR7n8vEAjeEcQCj09rAIQxdHKJ7IwAYoQCZEGKQB8ts/MoPC4wsOB3R6M4zG8Md/kviPv3z7AGeTaFp4%2bp/4QL2j08w4zSb7WshsywjmXHgdlMZCrvpX2rav3toYnNocc/psi/NLsxsD/T0pfLx3/fqlEc/yknNpIKS2e0FArw1Lp3kqngHgbDmbz3Jcvny0DwFimPA5wmHCgHIO%2berxVCAM0DwTEBIBmiAAC40oQAHjUIqFlcq0lDs9rbDJP76fhAJRAgWefvmf%2bYW9VPu8TpPF7lo3%2bSnSptBFlfqJlbWWjvHtq8urmzN2jFjtuDk40hcZH5/B0JnOeeeqVbW5Oj9y1R2gQRpFmRSbTBIRBEV3j8UAFRD2ExzHZmifQafldapAAJUyqaMMEaUK5biQYVj5gZNABiUZUUmwuYoUE1K7xZOD1N7jaomN5TAWOH77P/dn29s0m7sVgM1pV8KoQ89bjOpLtWOeiYZFydNvdRmTbNdouxpSKx1bi%2bZqZSYEeNfAoG%2bpvcdmhLVILJ99mHyYJZTUxUVS1mi7JyKOMqKQp3CRWwOiOhAsnh1/msBBUdjdjzNhGEAAjKZwCOI5QUQlFE8XmN1k6ej8JM74Y2ksWfkr3r1/xQ%2bPCUXmHGpZ3QJBovqSAdPRkNXg3V6qX/dcdc24dfbhyRYroNcjZmMo84cDLSM6l5GA2w1TepQJiKmKwITZ6ln1ohoP01y1WrxIBTj5KTOCBMXzGI1Jx9lAVu4jMBcGMYoLQ2EOBu0y16IZCojF0rlckCol46lCMu0j%2bUSRf/M7%2bfh9Qg/4fNMRrQlSG3I0s4fQgM4zZjAtT89PG6JzUz2tw7WTndvT20vr45H4AaCmJIuFhG2xtJ/fPT4vFA7yhbNPPjw4eoSq%2bFKJjUpPSixEMzyI549TGfGDx6iWIAM8poOieojNc3KZQEqFnoqXUDjHUbgOgROJ45cpKU5hEppFz776bn6PLyG1WxNRLw7a1hQRLE9a3PMqctPptc4uqAy6ic6ZxsuL68tLbb3jA4hK%2bPw4k8f1%2baSGkB/2OVXaEw6q7zz4%2bw/e%2bqhIMcU8v3cCk0mBRaOZbECKRgvyHEQyGQgCEJATMDtMElqd3R5l8iLHkwm5IQZ9xlzx/DmXPttL0xU0%2bfI7%2bj3%2b%2bc/nPpNvzbzYr46Y52ZC5ojierfGpTGv2eY9enhtwzlbt6zZbF1qWdfIR8d/9yiRtkzbT9MggRcDsXJy772vP/zyw8%2bPAiC7X6iePdnlYA7HmEySprNJHoQ02nCUUEZBCgtE0bBdSYdhTG4jBIqjMEiSBIyenScBY%2b5xQsfp0vsvvrufadW54tCYohG1z%2bdenJ4B1jZW19JGpd5mUxHIentHTS8B9tdsbGo0AKDI7JZzglLJShImHlXEcjF%2b9Pvq%2bUURxQQ%2bAOBU8lhEEwG%2bWsCEUjlsskAWBiHkoS5LC8JnMKqANF/Zjfn9lJRDtEFJIPnU8ySspUCFNhNW4F98Dx/Wp0nz8oo25jMoFT6LecZn6u0cmVueHgjpTA5Yt9Iz4Jw1h9V4ZM5A2B0W9NEet3ecS8ek6vH5w/MjJnf%2b8edne8lkYT%2bVCUQB6Ykg5k8eF2hxF7Nr7QRW4ghEpQQhBYzTfiaVkkUvQMdoJgcTsXhCOK0yfqNFC2otDG575%2bn38et9IXh3%2bkBR5TWv6UCWAOb6ehsGt2wh71Z3ty%2bW0WPrrWt4IC1fNsK1ZUufgfAHpxgh7RVLv3/8vFB66/jo7KhaTu5nT0qJgJSQr2WiWE5wAX0U59FSnAQwQqvVKlCJobIVFgsG%2bTQA6SU4dyqwQmEPMEIYR2OkP/r5l9/PH/mrrHpZLSnVGpNbFzN4l81zDVf6DAaH3tTbHTXa1WnNiDIIaIkwpY1hxvSxqMylJKF8eHZ%2bcvLw4dHDJ49KcZmbJBJ5QYyzDEElGIazaHBZwGYpRv59RYaThGopQZF%2bOIYKpSLGohhzGE9XDnE/hNCSiJJo8vyr7%2btH/V7FMO2BMcd1t2bV7NkwGFb6%2bwcMEZpwR4wa2BiT/AQBKv04y6VjMeTxnoGtVpPx8%2bO9vdLJ8cHpk%2bNCNlWq5lO75WSmlCrGE6QSpKMCYqKlaD4b4BKVyl7hkKchs4riODGRy6VSYiwhSSlBrh%2bIJgMBiTz64vv7f3%2bYUc5HYojH6ZpYtLgjEWNkYczs9aNUlMANlmC3hcwF7IcwRDoMepW%2bUECxwnnx6HmlWCh%2b8ziZ2L04OyqXi5nkyZOTlJBNBlAQ4Ck4LBVwQeaqaZGjeABAtDGtP8GigigxgpAUDw%2bLIhyDcEQvc4XEyds/xG/9PZYyGUxqy4IsyN1ul045ZzOoHBrAojKbxwwj86blTSGlAHkoDpH84UFKIiuPjp5nJaGyVy3Hd8%2bqhWTq4nNZ95YpVpTwjEgHkonU76okCuEFPpGm/Xo6poMBkonBYvIwzT9kj/eYVAJFaQLAYujD4z/%2bMH/7P2GEnTJ6Io6Q3WJU6nxqv8Go8Wll4hZUBU1eQ2Rhxu1VAv5MMRc/FMsHObYM6AVJKqTKBwdH57I8TAnxAgPQXKD8aFfISskSGiiUcBILBNi93RhgBGlaqwWESozi/On4cwZNi0wa1wEQn%2bXi1fd%2baJ7Ae6zRZ1IuDzoj%2biCttMcikSCkJfyxChXUxqIZzmHWKGhxP8Fm8hJc/GAvThMIxlOJ1NFx9ej4%2bKiUTLCCwKBZoVrgWRRE8yx2uCdgAJ6VsmxQp0dIfTAckFgozFOpRycPCyke1kIxbYAtMSfv/fD8hi%2bpmaBure7G4IDB5o3oLAY7CELRQBgFIRAVUwJASygUCyNYRkpXsjAAPn%2brUgmH47up4u5%2bQi7Z3VS5VEqVim%2bVmDCGwTCWqu5SljW9xOAIESMhOBEvMzHWH8glH56dpEosgFnsmYNDMvPphz8mL%2bPdrMJIxjqbdwxBlbvPuemx2qMkC0FBUOnDGZ1KmaOUJK7DuFSlLNC2w3e/ef4NBWZzjChl4uXC/kU1z%2bwe7Al7T0ooyDN0FAeNFl2QFPw47Ed5JnHxZC8lioXK2eOD0xPYojYQJPfocSD88qsfl0/yoKiE9NG5Pjei16yFBsadJi2th4JwEvcpAchohkg4wAZ4lC8XE0ki/tbHx28KNI7n44Xd6nEhE79IYGKpyAYYBtDRWnNEGwRiPOsnYBwGcamSymYDhSRzEj86zgEwblNSXIKpJvJv/sh8km9DM/QKLaSyjV2dg9Vj691rQdBIaEmWAzXyJ6FV%2bNP%2bWCqB00I8lY0jOfnRJlkun80Xd%2bMsjBaq52WWF5LJgMhpNRZtFIBpBCHJIBnUyjg5MZdGK1mhIPEohYFsjKqe5sP6wJc/Rf7OJ2BEt2bUTre4NNbxhXWD3edWma0gp4tEKb9JiSvhkzzMJirV8mGMCYJkmGHjgpg6qMqTp5y9kL9RmSSX4RALydJK0K/0BQEjTIAkFov5MRHlWTYlMRjFo2B2b48Nwgcvf5q8o3cEixIhoa2I0eX2RNxmIOQGlEieBpO4LqQO6v1xnhRTUumtROJQbohMmUk8KaeKSaF4Ed9L8kyclEoBGs8nJbkzowkOoVkU9QMwF2cQKA2RaDiRxmN4jCdzBVliPnrvJ8uXeq7Va2GDDZ/Z3OrpRtQulzLqs/OZMKLSawkoCAEYBkLFs3Q6ka2eJg/Kxf1U6uBg9/yD/WQqHz/YLyfl6ZjNMrw83YuHOQbVYvLPyHVCJXKyjo6LuRSiAgkAkNInf/gp87ze1IZCNsRrMnmmZ/ts3rExs9nH4UpIq9P55fOCfsSQP0pkCqls5fnp2cFB8eT5xy%2bPnz96qyCeP9092ZXEwscHYoYXWQQIYhITC%2bBkRmSzEirsFiv5eBpY02Vgv5h/8dVPm5/2rGp0K40Rl821smZymR0%2brRKyoH6E0Nr1YdGvMYaZPB6rpFLFvWLiIJErHP3%2b4amo4z89KidQlsOwMIeBYY4FQD9F5iQxkaACIpMQmFw%2bQ%2bVkusLj%2b%2bzJ7rvfNbT2u%2bfVveStXABGIj6ddW7ND2jHDAgUpnU6tRpKM36cK0sBqFTeOyofVAWGRtFsIQkDFuLTlPiNTAd5js3gEGSHcwkJF9NBig1QNJw4TLGQEcFPDjM0dvjZF989CfN75AO%2bf6LEoxBj8W3t9Gm0erPboFdqNXYFAgIsx4rHBQpLlksfPHy4d1ShYkyiIEnPj9CPP0rtk4mswGIiLxcIJdd5Ki35AxCZjmVO9gJRkgKTQjgfP33zxfeIwfxeeYx/3CNoIxJdX59e3YqChIpWGaO0Lkho/SCcr7IgxTCHVbmNnDzcS2XLx7mCFN/fvchmMhKPy2URJniBR1Exka7IOgmWMon9pJZKVdL%2b0kXm6OmX3wfK98y//CiuJQO8UT%2b/PGP1k36lAsAJixEiQXqPt6BwOJ9MilwpliyncDFRScu6hc2IFBrm%2bQCFIXYSS5YSMYTLUSybTksszMWy2TS7m9198OC/OG/085w9zrG08/qMwwho1Crk2/kHAykxyhu/nTcneyyajPEK8lB8GE9nWVjmeAVeREE4kNjNh1MCz8llhTIVgcru42hAlD%2bSw/cefF8Y3z/f9cFHaEBIpKNGnUmv80ftiEyTQLjAwH5dMi6kf3%2bGUuVsnEq9lQX2xMOMXBqBZLmalMudT2ZlvstSktz2ELFCUtmMVEk%2b/PzdB%2b//%2bb8et4z85V42uZsPAIlyMYBRer8PEPYzVFQrw%2bYevjzlYmL8orpXSeTS%2bbAgyvKMkUnXiUglZTEDy11QyzIYHmey8eOHpc8fvPv/J0/3H2/okwKf4RPlPBZGlFp9VMhwaZLK5eKpvYMUKxXLR7thNA4TYZjKiIVAmMsWC4IkS/gMm0/E9yQOT%2bQvPnjzs7ef/sDM6B%2bcF/3gD0/Oi2w0Lhc7FGClAB9nkiyWpsTi6eHe44%2bexAV5tMtdmk8kism4WDlkUDGfS0vFi91AhtnLFksHn/7Dgx%2bc6/4j8rkfPPuDIE/IXByXCSDiZ3IpuXOgidNHj4%2bqx78/Pqxkc1kZcpxBeYHNC9J%2bBstXsrvJZH6/dFQ8eOfZ0x%2bRiv7j8tCfvvveczF5Us4JFJeO55IVMVs4PPv6OBE//vqDAs9U4nkmsc9yieTB3ul5SSrslvKl489SpQ/fefr0R538o/Pnnz744pPdWPawwophqSIdPSycvnz56A9vlR9W43FZ9hRKJ5KQLH5wnNqvHh1cVEtnXz949uDpjz32R%2bP%2bS8U8%2bOOjEyEuppOHvHxZT6rV6pOHleLZ8UFC2E8VhJMnZ%2bfV3ZOzo4MPHzx7%2buCnOPInwf0X7O%2b/ePv8/OMyF0vzp4%2bPshd/eJzaPSilCqmzo08fvfXHPz198ODBs2c/1XE/Ge5/ortPHzx7%2b6u3333/7Tc/ffTywz99/c6LBw9eyF9Pn/20B/0fAQYAn3K9c%2b3DWTgAAAAASUVORK5CYII='/%3e%3c/svg%3e";

    var img$d = "data:image/svg+xml,%3csvg viewBox='0 0 171 171' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e %3cimage width='171' height='171' xlink:href='data:image/png%3bcharset=utf-8%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAKsAAACrCAMAAAAuNpwrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8%2bIDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVBMDM5NzJEQ0VEQzExRTlCMjRCRUQ5M0QzQjkwQzQ0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVBMDM5NzJFQ0VEQzExRTlCMjRCRUQ5M0QzQjkwQzQ0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NUEwMzk3MkJDRURDMTFFOUIyNEJFRDkzRDNCOTBDNDQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUEwMzk3MkNDRURDMTFFOUIyNEJFRDkzRDNCOTBDNDQiLz4gPC9yZGY6RGVzY3JpcHRpb24%2bIDwvcmRmOlJERj4gPC94OnhtcG1ldGE%2bIDw/eHBhY2tldCBlbmQ9InIiPz52bjA1AAADAFBMVEUBAQEDAwOWlpaXl5eVlZWRkZGQkJCTk5OOjo6ampoEBASbm5uNjY2SkpKZmZmJiYmfn5%2bUlJQFBQUHBweioqKPj4%2bHh4eenp6goKCLi4uYmJiBgYGcnJwGBgadnZ2GhoaIiIiMjIyhoaEJCQmFhYV9fX2jo6OKioqEhISDg4MKCgp7e3tzc3OCgoJ0dHSoqKhra2t6enp4eHilpaV3d3cMDAwICAh1dXWkpKR5eXmpqalxcXGrq6umpqY%2bPj6AgIBycnJ%2bfn5mZmZnZ2dXV1dwcHBubm5eXl5/f39PT0%2bnp6diYmKvr6%2btra2qqqp8fHxkZGRSUlJZWVkNDQ09PT0LCwtTU1Ourq5KSkq1tbVYWFhUVFRCQkIWFhZqamoaGhp2dnZoaGgPDw9OTk42NjZpaWmwsLBMTExBQUEsLCw8PDw/Pz8ODg5QUFBERERLS0sfHx8SEhJsbGxtbW0UFBRGRkZlZWVVVVWsrKyysrIYGBgxMTEZGRk3Nzc5OTkiIiJcXFxHR0dRUVFFRUVISEhjY2NfX1%2bxsbFAQEBvb2%2b6uroREREuLi4cHBwTExMqKiq0tLS2trZJSUlWVlZdXV0nJydDQ0NNTU0dHR1aWlpgYGA6Ojqzs7MgICA7Ozu3t7e4uLi9vb0lJSUXFxcQEBD%2b/v4pKSkjIyM0NDQCAgIoKCj///9hYWE4ODjBwcEzMzMyMjIrKytbW1s1NTW5ubm7u7svLy8tLS0bGxvMzMwhISEwMDAmJiYkJCTp6enIyMjNzc2%2bvr4eHh4VFRXCwsLKysrX19fGxsbHx8fAwMC8vLzFxcXExMT9/f3Q0ND8/PzY2NjLy8vV1dXS0tLW1tbOzs77%2b/vl5eXb29vZ2dnt7e3Pz8/Dw8O/v7/e3t7h4eHs7Ozu7u7R0dHT09Pg4ODU1NT39/fr6%2bvd3d3Jycna2tro6Ojx8fHf39/q6urm5ubj4%2bPz8/Pw8PDk5OT4%2bPjn5%2bfi4uLy8vL19fX6%2bvr29vbc3Nzv7%2b/09PQAAAD///9BBVB6AAABAHRSTlP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AU/cHJQAALKlJREFUeNrMnXV8m8nRgGUxM0sWsywwMzMzMzMzMzMnjp3EDjMzM17ucszMWLjS1/b19zq98kEusdrOz/5XfjyaHdrdWcjqOsnrlxNdhd7BdT4pu1paxqJth0fHN88HW6JCzry7Xn8Csg6f8WIjVAar66XALY46BhZ0rkTbasyAv0vWoY08lxf/B1jfd6EgCfQ7D1gEjIOfRXBn2/lTS9EQgGb2j7SgUHfXcc/8F1m/vmsIefPgluVFFptARg5a%2bHl119ZW2pZU2pnFAt8jezZZhF78b7C%2be2moYfGF2/FkFhSKw2hd7euNHvt76ne2b6jJsqMCWOD7Za%2b34eJ/mPXGvY8%2b/PxKfx4dQw5tdBKJSUyr8oje0uzI0cpoOyn4lQM/LCMWQ/851m/OfPXrhy%2b9eXsoNAwDO4FMIoXa9Anr/BBHt83kU4GzrXY0KkD7EVhgTzn0nf8I63Mvff3lG8dfeGN5SyhfEsYnIvu0eJ/gapuITHlhheba9vyjWDPsj6KuyUnPyyZnfe7B6//3psudu1suLdIlrmwFjkNGW/h6hysd93c1GyN3jafvNAOoVADyU7BAhfM9k7K%2b9unv3r185%2bHlMMWV606hBgkbgULABnMZnr5WddNJUz5nlwqjK2NpayvL/CdhgXTn2yZj/eaTZ9%2b7e%2bv6S7fiQyesufRQMgoGlyOtjLyAqrq6vo6E%2bvQmj5Y9wHasGQ2AYIHHkLPa503C%2buV7O744GBZ/a%2bvE8kSYk0MDm4LEi3VouY3cWRueXRqX332qMn2XrS24rMyx5sBjymHG6%2bvP%2btXH73x0%2b81LW5aHlrcqFEFcGEIpEnmSPNWMKv%2bu4I7iTSkb2wvHqDQabc1j0YDHluz4dWb9ZMe3f3x45tKbQ1vzGoOs6WQWBc9Quburw2V6eVxpfmd9XOu5zXuXNqyBYoGfJ8P659aT9U/PPlw%2bcflMSP/WrXlOXAqbBUfhSTJLG0utd2ZaclL97u7e%2bfH0UVswENiZry0ryGM4gr%2bLm/W6sX6542bI7Rs3biU2LE5M5ClgcAVcCYO7u3tmVAf3dfTldyQdK3bbNFI5DCnRAOZrX//PMgJQbO3fXh/WX%2b1IDE387P6JExMToQ4u8WwcjAVDM0SeNhbhHgvBC8nZ0wMpm0dGztrGlkgBMzvgiSRhcj1Y9/0WHXriysSJ4/GNjQ10KJFL4FKQUBTeXe7okdbnszGptLS46Mj4hfZhmi2ApQFPKBcIT836h5evoFiJ7289MdFPJrPJUBJerFaJ8AiGLMDTanD/TERfaWdZWUxh%2b2h6qq1UqoFAnhR2j8cvno712/8LY0junkhcDgqjcwkCAQOBIqgDApgoNE9mY5XW6%2bWTHFmQkrCpde/esawaQEozf2JWAPC58TSs%2b37r6jLh2r/F0J8HhRFxTkFcIo7CwMCgfJGVXmjj7OtTXhoY19dXvvlk8/kmW8DuKUhBKU58ctZnbrHz4oOcFHACHMHmcukSFgbKsmZT%2bHitSBSQ0Vundcz1mtf3dvfs3XWy5qx0rRrAPg1socOTsu5bdnIJcXCQsIViBolIZoG4ZAGbzkJiSBY6njzD36gPh2sXwgNbO4tmR201QBYN8qNZ9k/LBtiTse5INDg5hRkk/XQGiUJhsg10B0NoCB0HtWYIUXIPS7WHR66Rl2mTfP78zsjD1Oj21tjHSq9%2bVMYYT8L6e5YkKIiskIBxCk1S8rkwepDAQYGkCBFcpoen2NFGnnm0K27GL/xcVsX2yJ3bs3YdgEg11KdkBWyVP5/1W4ODEyYIIxHQkQQWmoKjhwSFuPDJfDSDqZerAlQZzlGRnW5FgeWO5emzzUfGTtnZjQ3vLAGeGlaj/LmszzrA2OR%2bIjeo30AOnTTEOyVuSQwJo9MdiFBhphU%2bwMIv4uh0cmRkWWtp0uaT%2bTVZRyq3V6TPxgJPL7aMn8f6sisbEy/hWtPpW8hBb%2bUlLrqG9E8KCASlkkmEqiwynPf3ZlYnFeVHpJTnnOs8e2Ck5VgBtqZkGLsOrMAY7Oew7mPHC8gSCZfMYiEZrlscEuNhQQYyWqi1VNlX8RhWxurgheCo/LnNnZluKUdGRlpGR7NmZmmaVOp6sAIbHB6f9dkJsJRSkCnWAjRHhDSEOU32U%2bIFYqE6Qy6yGbS0jCgF/X9HaemU25RP996cXaPj7anUpauplYCGti6whYmPy7rvVTiOT5QoWBgiHo%2bAGhxc4124rjCmWqsPD/f1y63bmN2VdDQysjRwoKcs5kLcVNP5puExQNPeDgEAyLrAFt94PNYdbwcxwvgwIpmPIwlUMEl8PNvJlc5FBKg8HZkybXVfb9T0xuz6uEifbreCgkOFnbtrNmyLbqFiN%2b00NzcH1kd8fvFYrBfJDLY1iohgwRAwFMoVxw4lc%2bkNBE%2bmyt5DLlP7bdzo0xWZXe8z3dWZklLgdni2qWW2qbJEKj1QgQX20NYJ1uNxWH9HJjix%2bRgyGYriwsUUJwHbgCM7GUQ24ZYegxb2vt5RHRvrp0u7ppPn54oLUgZGDu9MTU/NkkYDw6WxwLrJHsJPs%2b5oYOWBVSrZWsJAEJFoMuhT6VB2EFkX7mjhl%2bbduxAx0xeV7BOZH5idMDdQUFw0e2pnakuqbXQsQI04J10/2AuTP8W67xKdjIOxWS5sGAJM/nEN1q4OdBiOglapbarTMnuDe9MiFpID65MTehKmassK2ppPna7YcG1baiz45acWPmYP4/HKmrd/gvVzJ7qDA5GsCKEQcDgEQRGEAW2ADvMMV8k90oxpXnW5vb0zcaC1ToGs3XNux44cmd3QktpUQ205bW6GNQPWjxWw/3HWj/kovnWItcEVRsBJcBQMG0NBwJ0MKL29p9zed9AYPOMf1RE1HemT1FOeUFvgVrS7cHx8abTyWg11eHjNACCQ9WO1tf4x1meOG1gOQaHWXBwUQyfD4HwWBsdgsHEie62W5%2bnokdu3MSrqqM90ZGRyLajWYreiY4Xnd17d0HStJEsjpYFqBdaRFXB77kdYb%2bLCGl3DiBIBEQWTEBEEDJsuoYjhSrmWKQ%2bQO/pmRtRlBi9MJ2eXB851d5elpBQfGz/SvrRUk5pVgjUzp4JqXU9WQP/DrB%2bTryc6KRQ4KA6HIcNRXApYYFuz0ByVPsPd0cbG19sr12thOi45aiYpuzOlszZlblNz8%2byuldPp22KjaXtApWKx64kKDMf/EOszV966ImlwUMCQKAICyofjYAgCEoYRqXg2lu72lo4WaZmZdf4b6%2bN8OqICO4tru1MGWk%2bemz2/0nStskQjNceamZmtq1oBIPv1H2D9HeZuGAKDYxERSCRKwCUQKRwCCimzspJ7Cklynrul3rfay79jo4%2bPz3TgVFlPbUrMscLCioql06C5ltiB5fa/7mo9vTC%2bn/WZUHoeAg0XsEEb4GMkKBQMwUEQOO6O4WoVkyl3tAFRM/uSjnYcnY6LDMzPB/1AzLEjKzVLFypSszTb177%2b9Wc9/Pz3sv4qzBWDIxIN1gKBNZj%2bwwQwBgNNknl6ypQipizA3sPX18%2brb2PfzHRXZH1pT0JK0aZNx8aX0kebd2KHh7FgrQWhUYF1NgJA%2b32sz/42L4gt4cP5CjpZIuAKKHwCEo4UKwN0JLGSCdqshbOFc1rvwv6NgeVxUV0pxTmHd%2b8%2bdGRp9OreDbTKaM327Rqa1Hy99Qqcvf09rH%2benFSwWTA0VCLh87kCA4qChmNQcAKJw%2bGQdFYezsbctNzgjqNHo7rKS6dL54pyjuU0nyzcVVGTWrN9u62mZLuGagJWwPnfWb%2b93hiiIOMxKBdXIoXFFpBxFKQAg4AxREKVkCRz9PVI8/b28o%2bKioxKCiwvze4piHGLaS4sXKmo3F6yrSQWsNNgARp23W0ASL/3b6wXh644EKBwBIougOPJIdYKIpSAQDBIQh6Jx3MPkFk6u9vv90oL9oqK6kiK7CrtKZrrjjk2Mts%2bVlmTNRZdAkD2rIVY7J5Hf2A9Y4Lzv7J%2beyMxXuHK5hvIRD6RKzEYrOEINEdJEjFFKLRSp5Xb21vpjWnV3gtRkfU%2bpVP5gQXFMW2HTo2Pp7Zv2DAsjTWXamhmWOye74LBOrJWXP4X1vcWXQSSMAGRzsejJC6uOBwOSkCTmCIxGkmE4j0ztJYexsHBiOC6oxsDk/uSa2uzi2MOHBoZn51Nj2lJb7lqZ6fRUNcaGX9lXEdb8Pxn1h3PTZKhEgwXh%2bQT0Yq7W%2bgIPJgToJVoFIZAYais7OUqe%2bcMR2//TC//uI3e/lNztUVFB5rHV9orKopibUfbooG1Ugtk3bP%2bq%2bvkO//E%2bszzQQKWhIBxgBnIuLDPllkYjEQARaIRUByaI5TbZDjy7G1swp0X6rz8k6MiOgJrU8picg6dOr/rwt6CFbsjWbbma21i8Be7/qwA9J9Yf5HnanASwIksBYsc5rScB7VWSDAENJrBQKp4Mp6lva/e3srPxqauLymptMsnMju7fKosxW1kV%2bFAUU7L6dN7oqXm5maAKYIBKOX/yLojRGCdZ4ByYTA2wWnrhIshSMFlwxhiBprJ02qZMtBY9e7uVc56796o5NK4%2bvyErung/LacIrfNOTlHsoZLzDW2Zmsq1cQCkPWH3TP0D6xf4/KcQsgoIpnMwji99MkWep6ALYGh0QiGyjLDiqSy8fXz1Ll79S5EBR%2bNi%2bvwz%2b4O3Og1HdPslj1wfj7miF2srRQw22Nnjt1eYw4xAazF31n3XWc/zONzKTg2htV4/PN377NwfDqdC%2beQlCpVeLinu1bvobfQV2Xun/GfLs9fmM7u3Bg3nXAgZ9MmN7e24fPm2MoSCICVAtjKJjsT2CswcvFvrN8yGt5SUKBwqIDlsHjjTl6ei0CAgzKFQpFQzhN7ZljJtRZVHjb2GRZ%2bxuDa8v1R5WAFWzuw%2beShoqKEI6eXNlSW2EpBH0CT0miAScTwN9bnoIYwIoIIKlZi3RDCxvRvYaEYBJ07T83Tgop1x4sdq3JtLKr09ml1%2b5PrI6Zrp4rLitt2j5zaVJAzu3OsKVZqromlUVOv2pmI1fuvrPsa6QYyjMIHC0K%2bwEFCd8XBWBgiTMwR6nQ8Tng4WkG0yvVVq%2b2dq/ZH5Pb5B5f2lPd0dW4%2b1jZesbIrp/lCaknJmB1krGTbXizVNKx7L37H%2bi2uX4EjwjFEMLwS6UEYdpCBTYAjKTi8kCTCi4R4IlRlZWVJCvD16jNm%2bET5z2fXTnUWueXMrpxtWTp2tqk9HTgLAPMDa1ZgbhrY0O9Yv1A0ukKhSDiUyMdgFEGuGIGDgo3kMfgIJYOjxCMQYo5Y5ujsHFFl4e3lnJTkH9g11xPj1nak/fxKxa7K0zWabbs0mp3HSmjmZiZCfeQJ1ljvuE5i4AQxFwPF4DACMhtGxIEeQagkKEVopoxJgItlqgArrTHKT2bR67U/aSEufyqhoKysdWTX2ZWW9Gjb9Ku7zGN8Us3NIHamCAVrsukvrM/0O8EpLDSDxaZAcVwKhUKkgLbLIuJJOrVSreKgkWiZ1sbKU55b7WmxP8k/0n%2b6p2tqrmdza%2bvuUxXpNek1VKpdRV0qEIuVAqaSPWcesf6pwUECJcLwZAEKhoHD8XgCgcCiwwlcJU%2bo44lITHcOSa/XZvA8Iny8fPfXb5yJK09OLnM7eW7TyM5dY9dSgZ1xK2dj7bCgw4JQTQXLfcT6jUDiAtZZDBgRCoXCYTAKDA5l4WAIsDLUWfEQBK2vJU/N1DnqtN5Jfs51UX0RPgmBgQOtzZsPjLc0pe6SVvi5gQUsFswJ7bCAqWDrHrF%2bLqFbW7MoSAacC9bZXAwBJQBjApmM4IBei4nA8MItbYQIji7D3iPTwysiwju4Pj%2b7PKWsZ353%2b9X0iuGddW1AiZ0tDWJuSr3uXmN95oqrgU3mIhgcFBSP4ENxSDydhQlTxHPlGUi%2bSA1FcrQBoOeC6oONRmdvb//goz4zPvnzreXlI7Mru6VtgTuvRkupWHMz0LlCzEzFSn1xjTVeEmaNQ6PxYjhKiGJTWCgkhgUjgtUs3tJTHYBEkugoDzVBBQ2oq/bTO9cFG4OD03zm8udi3HqaRhOqu1awR1qoABaytskNAUwG6wKyPrvFiU7nM9BoNJQho7ApRAIBLyGLnRYpSjUTL2OQHRRIJhKtw8tsdJY2em9nG7%2b64OTOwMD8QwU7LVpby8xtT2/XSMGM0Gyt82IyT8ADWd872EgUCMAKFklBMhECLhxMsckSqMsEWiWDs0RMcqgTF68U6ygc97XawN7ZuWrB3ys4sjNwwK0tf%2bTCLrOl4dhhmh3EFMngP8hGkPXD405wazYUA0UiEBwGkc/HoHF8qDWLJfJ0hEvctSQchsIRksKRYqGNHw8sDgZ9cyNsjAc2tm3OGa9pax3btjJqNqahAiYlBYBDq5B9n9514kuIXBQSdFcoCgwHIyC4ZDKRwuUzeUqSHAUj85kcjDJAhkTzZEpPe/vcqrrcgJxRUeFK4enTBwaiW05vg9Bo0r9U2mYmM4KsdyH7vroCrn06Ak1CohgMCpRChIIeVsDnuwYpSRwLJBFHJ6NQBKaaREGJdXK53i%2biN7faMqZFvXvnucK9G9pXsmxTzbE0s%2b9aGKYz2DOQfe/co/OJfCgDDafgxRQUiYTmw/hODtYCA1HmqScxEFCiwkDEc5gqFFotc5dnWFTnBhuT4zrPxRzafWHbtl0lZhowfzX/jtV0lhACeeaFW4sOMBILBoXBESg4guTJBFPZUFcFroHOsxIFEDAwNMuFRYQzdXixGCGTD/pVpQ0a84NTBgraZtsr0odrpECsBkIzOSsK8vLNIRyiIZSN5xKQYOBC4ylQPlSyGG%2btMCDDbXgqAtkBp3AiooXuLDbocQMs9c4RfbkRnYE9BzafG0%2bvaBobjjWXYkH/amI/AFhCXn71OgadeIbFYsFRXFB5Ki6fL4nfmuiUZ%2bAzhWIMQuJEx8FBjRrwKtdFZrXez7LKq9c/qnxzW8yBc%2bMVG65FY6k0KdXM5KzBkN9ffMBGxB9k81k4DIYi5IFriOLan5docKE7kIQUCokEJ/NhCDymQc5kb3WxcDb69gbv79g/n1K8edfe8xU10bYQmtSWSjMzNes85JOLN8NQUARLTIDicDAUgkB0Jeclxi9PNhpwYNQSwdUisGCAIyVBenT/EF3vOVgVUZcZFVea0JMz2351qVJjq6mU0gCqmZmJWTdDfvWb512sYUQwX8Uj4UQkDhZkbR2/nPjW3a0OMDRYwbARQjEMFLSEhw4JsXAM11vsj3D2jppya2s7NXq1fRttrGZblq3GjPYoxmJpJmMdh7z%2bmxcaBHgojkLEQBFQNBwBhWIUW7ec2HI8hIVS8nQqd7W7jAGnkNDuMoKnt728ujp449G%2bowlzm88tjZ6f3dCUHl1TaSuFRD%2b6B2WGNRnrKOSTd1/ox4lQcDhMgRHDkCgkEoXB9C%2bGhobEszEUPJKEhAlFXBhBZKF2DMjN9dB6eG3MDqyP7Oo5sLclfaklvSmVBv6YUyula9uxpgsFwDDk4u8%2barQGAWFoMhRPRiEoBC6d6NRg6BdAUSgEFMNlCUQINheO9CRm2lh5Owd49/r0RB7NT0jYfap9w7aSpqZU6WiTdO3goxkVYsqkQAp55VcPwuKJSgRFiUMRDCgORQy3xrAlTnddxUi0GA4ns7kkBozBkSFUTLmXjWWfT0/%2btH9kQcKp9NHRltTKitTUDUVn1zoDEDNzky4uM8grF2%2bwwzAkBh6NA50VXojmIBxYMIZkMp4DR%2bBhDAybxUVQ4GK12kIrtPdy9k/Y1B3XU5uf39aevq2p5dq2pqXZXbF20dsf3YEwabIFeeWLS2wJlIDCEwQUNF/JVCqVZFeYUOCC0SFReDjoCQggMJ2A0XlYZVTXVVUlH3ALjGmbzy5aGdvecnpsrHJ07zasnTS95FFWCDGlXr9594YrhsDCIBEClAgFloO6AFgomWPdgFTB%2bVAMI0CrI6mgUHcMSa3z9fWbSYuamwsciCkv3rSSVbmrYtvpbemzLVm2kKZUzdq/bmZKe/3zzbthYNFKRimJUDySgEeLLfEKmMTVlaTGw8UcPG9QThIhlV5IhsrR0jHDOF8btTEwf7qss/XkSnp6y%2bi1yg3p25uW7NY25E0bZ4chv795vXGtSYgi4IgIAgGNgotgEjEcSqCgwToBjRQGcJgUAcfKUslVDnpbaZO6/P2T6n3cYgrcjpyuGV2qLLk2LN2epdljalTQv37760uTdAEMisfjcAQECikWqREwGQFG4HIpJDUHTL3g4WqYEu/OROssjM76vq6yhPr87IHDm2IOrbTvHcsqic0CNDQ7k6OCcevZTy5fD5UoxGgSAgpHoZUkEo%2bDVKPRYgKCI2RykGAZFm4hZpJECE8bBsrK6NWXUNtd5t/Rujvn3K6Vwm3XKmOzqLY0rMlRwXzg4w9eP7GVyODjEWgClMDhINEBKqSQIxPihWoRmqQLEHOEFnLLABHD0gMpUPvVxZVmJ3QXzLk1H97Z3j47UtOSqpFG08xNnxPOQ748%2bM19gxKFwcNYLKQIRUQKHXmgnTLReA5HxNNqLYU8kdrGQs1kyv0chZ4WaT71kYH5c3OtzSdHCs8dKby2NEqjmUshWFOjruWveTc/C4ISiEpimAtCBsPphDIklyTSkUhIqMhKLpRrbWQEd0u5pUpu9PV0tHf2jusq7d6U3xlz7FjrQOuFpbPpsXYQKWSPqVHX6gLJpZvHXZgUBIbuxEIjOY4yJFkgU8llag4FL%2bTCPUThniKtY5WFvUVwJhgNImY6NmZ3F5WnuMUUddeWFbafTreNhphJTd0eWKu39qGf/1PjBJyLRsPobBESIZJxoBSVjqmzFKJJKCeVFZpko5LrnY3VfgsRFtqMOn//YP/IyIHiA25lm4tyTuVsWCmRmmPNH0UBCJVqumAQAtmhePF3xycxFA5eoCCQ2GA8ECqRQk93tVoMmi3f04oFV%2bl0g97eVb7exgwrfWZSRG5Hkv9A29x87eFDJ/e2tY9nQbZrNGvbsWDYMqF2z0D23X7td/cn6SgOHi4hIiQEOAFMU0QqeYCIiScJRfbhHJ2lnzZ3JmJwsGOm2sOvN3ghyWchuMAt0me%2b7fCh3cUr4zV2GltbqdS0WdZa32X1vQ9/c8klFEYkkcguUAoShUAGyAkMubtSKOaoeFqS3sOq2jK82kKrcjZaBWh9jcaopJmFjv3eXlEJBVP5gRWpw9FSWzualGZmUtZDq5DV37/6yjtDd6AoMR7uBFoAh8KUi/gUtVrJgIp4QjyByRTL7XVGby%2bm2t7R0b5K6Fte39UTN2Osiksoz55LaapsvWAOXDu9du7NlKnLWp9wx6dffT50n8wSoHhEohiPR%2bhUDAKXEKBCEN2thFCkkKkM99X55XoxeRaOVh7GQd/65Nruo/7BC9k%2bpZ0jFXv3to4B2G2VtLVGMda0/dcdn//6%2bUsHXXFBKDmKi0AiOSIxkwmDytVCtC5AJRBwCRxLe0c/vYXa2Rhu6es3GJHdNVUwV7oQVZqbNHXydFv2it3w9lgaqFeIGdZ0NrvW197x3CcvgHkhXIISo9B8HEfJEPFEDI4KLyehKKSgEy4stN7KWGdv4ek36K5P89V7TdcHzrWWJsWlRHV1N4/vdjubfsTczgy0VxN2NP%2byX7D69W9ee%2bWNRRSMa1CIWHScDokn8aBCmUioZBFJuDwDNGDQOcJo9A3XW7kP5tpn5vp2JOQUJHfVJiQlHIpM2ZV%2bssTctkQKAFhzgGayQvbRPszqyy99%2bNVHiQKY4q0wNBQJVQoRSjlDLGTaqNFCDpxBhFtmVnn5OWZaGAcznDPcraoXsjcdqi3tmYoLHjgUc2r36TFz4OooDVStOXVtd8OU%2b1vPfvD2qw8ehvAdlhvZGIKY5ImHotBipsgjXCZDI1AGiqNFlZ9FtVeVl1fuoFyHrMvvijmVE1NUlNJR1jxblJwKlAxrNoyag1HWdHuc3%2b0bvvzFi8%2b//cpWMntyOYziAEUrdbgwvCOPFEBCioQkZCMzzTHNK9PLWO3d6%2b9tBbqv5OxNMTExzYU5%2bcU5m%2bZqYrfZajSQnDGwirUzWdflu/3Y1V%2b9%2buDLL5YTFfEn8nBO/FADg5/nYCXLcORQ3HkEGRStd07z0HtU%2b%2bXWdSz41e33y4zcnNLaHDPrNpJcVjF/JGs42hYAUk%2b1rLksU5nrd/vcq39458GHr352cMut43QoriHESUJueFNJYsp4TLmNTCazTwPTrFyj0Zib6z/j5V/nVx0Rl3Ly/CG36Vm3A83FySVjttvN7Wr2poJZock6b389P7Dvj5cffvTCpYOXQjBODi5sMpkfdALOZAhtwmVWWihT7xvAM3ovpKV55y5s7PP3cPTLnJnP3lQ0kDB7rDPl/PxZ2xoAWKmxpWIBiMlY/3ouY9%2brtz547sydO9dDUZPLoYmJDg4hBjaBGcDj8Sz1MrWnc7V9X3C1X5VX5n6fo/4Rlh7GZLekmM2bwdWVcvhC26mWDdujz0evXTmmAqY%2b77L6yze%2bfuPBW3cuJ3K3HHc6scUpZMvx42EiJpKk1YZb2ms9jXqenqnNHDT6Z/pF1B%2bVa%2buLjx0DU6ye2razxTnX2qNbd2Op2O/EJKzefz9L9v43n75/5879PH6owroxyMmavmWIhVdI8O56PwutOy%2bAA%2bOwxFUWGbl6K6/yKH1aaVlOYevhVreYCxWBLbY7sReSAXNzKhVrstb2389n7fu/T7/67cMT9%2b8YFhvy4oNOTNBDDEgeeSvK0aNO72iplZHgMInKu9p%2b0D7DWH80OCk7IaZ5c1HKzlNNLW7bbI/YSlM0WBqNarJs4B/Ova0%2b84tPv3owdP9%2b6Jb%2bxet5iZMNrgqyJclFZkTBtc5WIoSIyWKpqjKrfav399VH%2bUflF28q7p7vaNs9m9p2GDjbFH3UFljTK8SEXuBv5zR//c1rz1%2b%2bcWViOWzxVp7h%2bJbQySGCJYmgV24ReA2C0UsLU%2bhyvao9PLwj6rtKp5PLcg7HdJa1HajdcMRnSTM2uhmINWE/65/Oaa5%2b8sqXrz14eDfxzcbJW3eu3Ep0OXgPb4VqRGs5wkFfe3QiHMVSV2XYRERkBtf7JNdHls8daz7cfODAzqUDLd7RqWNZtEd7hmCiZYpg8E/nX1efvfjxa7fuD%2bW9uWXLBy%2b%2bdFwAc01k2auJePsqNUWWZgWFi6E2dRn2M8HOVf4zyaWBPtObdo7vrZhdOnKufW7nttNrJx1Mt2n0z%2beKd/zqy4ufP7yyfGnxrQcPrrBhYi1JbSn31MnUcIEEiWJShO68tOrqOgt777ioqOSEyCS3cznjG862ubUWHtocbV48Dqy5AdOg/st57dVn3/v4wxffH9pyu/Hg9buJOAoYWeXuOp6S7sCFwQQIJNpXa%2b/l7%2b3rvT9yOimwKGeguPjYzhG37oHmpridgLRFPvoXczUF67%2bcgwfd1o6LH9w8uLw8cXsoyAkHV4ZzRGDZQpEQ%2bVyemg9V%2b3nqHJ0jev0yfeICa1uPxQwkFy8VRXb37N52bBtQGevebjLWf7tfsLrv42%2b/fvG5Dw8evD2koMNRaJ5aKbfUkYhObJbQnY6SqVWOGGFvrpdxJjmwtqyntiA/puLc1Fx55MreWVugfG%2bWyVj/7d7G6h9e/uXFGy%2b%2bcHv5zp3jQQwUnknC6wLcHZlhbAxcRFQrYRkRiZJeY19v8FR5d35SWVln866c7s6U9uKBXdc2XDM3MxXr99yHWf3ljq9fefDSmYdXrny2FYMTIwiicG24r9yFKGaoODY8pM5RbePsu1DnP11UO1VUVty60tx2YMCt9XD9SfPtEKmdqVi/557R6o5nP/niuZcu3fhs68F78QoEiwmmWXJfSzqDxFCrPDJITEujPgM015nMhdLagYKBttmilO7i5q5jQHYgNisLMBHr997fWv3z62//%2bvJH9157K/HWBJnogCfhRTyt3l2JxKDVFr5CuCrTz9Kjtz7J3iZqamouprjwXELZ4U1uMUD9DE1TGWsi1u%2b9F7e67zdfHHz19vu/faPxejyMTcfjKbJwnTxcjMbBdVa%2bciTC0UrrNdPhExFR2l3cFrN5ZHZz27nWC4cTUqJrorOiTcP6A/cNV/e98%2bLN95975fkrW7e6oMhIBJwplHFEPHeCK1en9%2bXhSeGOVca%2b0vy4zsCYAzk5h0ZyDh0aH4226AHsoi%2bcBoBoKWBnvs7J9g/c41xLDT86%2bOJrr36UeL0R4YBDoDlonYrDx8ugTosBmRlqkdzKyr83sqvbrTambHeB25GThw%2b3ntpZVUijAXtT2mkQCHW9M%2b0fvB%2b7uuPm2ycunfnq1ZfuXdnaz2YISRiSCNpAxyOt2Z5WgxZykb2FX3BkfeBAT/nAgZSCcyOHR3JOTvnEUtO3U%2bPcNNR1v8r7w/eOQdgzH37w2e0/vnHw/q2JRTJJSIaLSFA6DiWwZDIsc3kkx6rB4PnphLLA/E05bs3t5woKC4uaE2aBLE1WeSGNar7ebZcfuc%2b9uuOXDz4/88H7z730YChREuKKhhEIXLhrA53sjtc52%2biZcA9nj47Irrik5IHagpSTbW3nc2oLmkeuamy3n6xsAj%2bctq5G8KP35Fdffu3Tyzcffvibm2fekoQaEOQgV5w128WJZJUhd/QMIOEIaQG5HcaZXvuNc/6RKTObznd2Z5YVXt0OqQS2z0cDtHXV64/PHwDzrefeSDxz6Y%2bXP701kdhId6WT4Yv0hn6ZI8%2bAg4vRSDjPwmj0yPCdL53vTe7uTZjKHigv2FgRDUiB9sDKdb4J8RNzHVZ3vHLz1uT7Wy//9qU7iRMhoSwcLFQg4PP0KlYQF61j4qwDRLpBb5vA2m6fjp6NUYEjcW7nC0ZPp1OPHW4BaOvK%2bpPzMlb3fXbz3gtDNy4tLweFbDE4NdCDrMlIdx7PUygTypQilgQjDDDaWHpN7fct29h1JHBmYPeumqbN50a2A5C1SYrrhvvTc0hA2I9efWHodsPQwa3WYZNbGtmY4xNMJjPDnaPS8lRiuAiDUulkGUJvZ6uIzLa4qk637MOp0kDxWhBYz4s7jzPfZXX1y9d%2befP%2bwTfuT1jjGg4uuvDj%2b6FEVYDYWlkdzsRBVRIJXEayYHL2e2csjLjnB3bnbGouTPaBUGMBoGn92i6PNTdn9ZmXX314d%2bvtlx7G8zE4AbvBwSE%2bLIPJZQmtZO4cLl4gJIudjXJLN4uAhMLevqSeualOn1QaYBerKWmOXa%2bZKY85j2j1mfeevzyReLy/PxQKD4snh/Lx8a4uCLwAReIiEagMK5iApEYH5DiT1Zs3VEVkl5fuau2oAYASatPV9bq48bhzntYKxfs3hiYaTgy5BLnmsUPjMUHWdDYUTiTJ8HxHb72KwWHoeFXeVST/qKLmQP%2bpk2OdHlIaEGsHmK9Pf%2bDx52eBmv38lcbFM1snL00oQq3pjS7WYQ5shYJNUCHpHBVfqUVCjzLkaVXC%2bsHCrqsJ4xWBPiPbwCQLS1ufsvvnzCVbSwzeX14%2bsWXo4GR8SFhjo6FBwbC2JnChOAyRQRTy0KwFtiCSJ/OySPO9Ol%2bYZd9ZGQvEAut01eznzXsDYZ93Cdp64/i9g1sXQ/LCXAxcIpGHR3PgQfAALZ7kgSLYRArcZUbe3LxN13zBbrt2jR1gBwB21Ke31587Rw80g8v9If1vLA41TkzmLd7Po4S5wtkwHgeBRDDxlknhx3X%2bSt%2bQ2lP1SQr/8qVtRVg7jTTLbj32jH7%2bfEJwgQ25Ohy83u/SYAiZXM7jK/qtyXQGGqy%2bFE5IG7mLS7JHvJf9UpRa77WCjS3yS8ICtmvx4Gn1%2biRzH1dX/3D8zcahoSEnYthkg4s1P4zNVIRIBDiWRImwdrQkcWF93nL/jqRWqwslJTMFSYXmWWZmT30/9snmaYI2u3z8ivXEIj1oMdFFEdrfgICGweDirRgfJo4TnMdMPhqqyhzccBXTBwzPVOw5EN3R8vQe4AnnlIKpwQtgLZPYH2roD1Hk5R1vpLDIbAWOlMahYOi67DSyS02zS%2bD5NH%2bNNLVjvJJWAZhLzZ/KaT35/FdwgX1z9%2bHiZCPZOl5BV%2bTFE1A4FEaJgmHEGFyAjbOLSlMje/mq3f55AKj2LAGosU8ZYJ9mri64wP4EOtlGhUsDn%2b4QJlEYXIhEMZqJJAnwcMqCu9AqxQl/4FqB1aH0mGaqLUBdG%2b3wFDnAU80rBjX75%2bsNx60ZdMWkwCEsvsGFQicQrF1gSmu8t58XBhM1tyktZ3ol3a1iD0CDAH8bPvAEXY2nngO9tsLuLd5PxCkkMDKd5RBE4bryG7T59jYe4Za%2baZbypZw879xW2%2b5xackeDe3vWv3ZrOswX/tRf35LY%2biEK1sAYzkJBAJXBLGjTGIjHuIZ4xxZBfpw5%2bam9JyZJiA2FmtHfdL5Luszt3x19dsd90K2OnAFCHYoGocTeE5C96fhwpWLDLWnv/PkEaByb/GB/X62G66CudaT2eu6zYNfc16/DnIIoRMxrmRrhgwOxVhHIImhJ8LF%2bnqEbPc2zam4zlhfZuowBMA%2bURWzjnP21/oGH7%2bx6BokmVh2MYgxZA7BSUQXQp294hD2Poiypr3RhT3MzO8GJfxsxa7z%2bwVrEffjgyEKTL8LDurA4dNRCHGEwssfIc9IUxqD3WuK/TfUaMzBAubnn4Nd93ch1lS77%2bs7IWxUiMSBrxCKFDgRwhHGS0vz7eqyKC5M3mnXfgEw05hhf6a7Msl7G2s7Cs/%2b4t69N1HkkEa5KIjIYMnFvd2D0Kk474VyzVhqS3s79a8H3x53X9ZU75isyeu//ODN68sheXSCEwePhDo2DYTJKMmbvPtH9gynRtdIwaVFfXxWU74PsyavvPf6a8uhdAe6hdyVKOyYr/UVa40H3D7LNaNqogEzO%2bxj73Wb%2bt2dR7Rvf3DiJVe6gANX3CPb9JZ1WMGbW0802IEhFrAFYmmPx/qfeM9oTb54/p2LjRNkOJcuLtsf1GHl2V2d6XGKunaQLEsKPMYOx3/snahH8sJbL5y5jkdyxV1%2bWwWdabyC0iKI1HxUOqaB/OTW/H/0/a2/DIh74Y3nLm0VYHQkz6OZWl3q9vyWnrLsR1tyP7Zr8F941%2bwvXuHyW3fvitHufFWKV1yJhTgG2LYBC2B/kPW/9l7cd/JiowSpnsA0x4mSxsFKtr5J891Rkv%2bxd/j%2bKq/dup7bw%2b0s8KkYm695xPpPvuB/5n3Dv8m7D0JYB90jB8aXamyxEDOpCd6N/H8BBgC7Rw8L32UgnwAAAABJRU5ErkJggg=='/%3e%3c/svg%3e";

    var img$c = "data:image/svg+xml,%3csvg viewBox='0 0 171 171' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e %3cimage width='171' height='171' xlink:href='data:image/png%3bcharset=utf-8%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAKsAAACrCAMAAAAuNpwrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8%2bIDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE2QkNCMTExQ0VEQzExRTlBQTQ3ODlBMjJDQTZEM0ExIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE2QkNCMTEyQ0VEQzExRTlBQTQ3ODlBMjJDQTZEM0ExIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTZCQ0IxMEZDRURDMTFFOUFBNDc4OUEyMkNBNkQzQTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTZCQ0IxMTBDRURDMTFFOUFBNDc4OUEyMkNBNkQzQTEiLz4gPC9yZGY6RGVzY3JpcHRpb24%2bIDwvcmRmOlJERj4gPC94OnhtcG1ldGE%2bIDw/eHBhY2tldCBlbmQ9InIiPz5ByLodAAAA6lBMVEUCAgIRERGPj48MDAxxcXHMzMzp6elzc3M7OzsPDw8%2bPj5KSkpOTk5NTU0oKChiYmITExMkJCTNzc00NDRycnKXl5eWlpalpaUsLCykpKSurq61tbWBgYFnZ2fV1dVLS0tXV1ft7e3Hx8fs7Ozj4%2bOtra0DAwPY2NguLi7e3t4FBQUdHR0qKioJCQl1dXUfHx90dHR7e3uKioohISEvLy8aGhrFxcU6Ojq2traoqKiYmJirq6t6eno/Pz%2bSkpKTk5N%2bfn5lZWVaWlrW1tbKysrh4eG6uroyMjKvr68cHBwzMzMKCgoAAAD///8DUbdNAAAATnRSTlP//////////////////////////////////////////////////////////////////////////////////////////////////////wCsTfvOAAADt0lEQVR42tTdB1YiQRSF4aKhAUEk55xFJOeckz73v51hEB0dQVKHuv8C9DscD3aoesXeJCoprkd9q8X4vNEUMpQpaDbPRou1P1qLSal%2bBZPgZ8x6oenLHR3r7mUa6s04sIrdifOJTvfknHRFFa36tKHF6PxYy5DWq2HVd8IPdHkP4Y5eYevS8EjX9mhYKmddeKKMbolFPQtFrI5xnW6vPnbIbm3qSiRNJV1TVmtC1yDpaugSslkjlRpJW60SkcUaF1YkfSshLr01cE/ydB%2bQ2Jota0iuNOWslFavieTM5JXMmitqSd60xZw01raZ5M/clsI6tJMS2Yc3W1MuRsrEXKnbrPMYKVdsfos1OCAlGwSvt/p9pGw%2b/7VWd56ULu%2b%2bzirYSPlswjXWqpbUSFu93Fp9JXV6rV5qFbSkVlrhMqvbRuplc19i9edJzfL%2b861BH6mbL3iudT4gtRvMz7OmYqR%2bsdRZVhfxkOsc65BxYWXD09a2nfjI3j5lzZmJl8y5E9Yi8VPxd6tXy5FV6/3NmjURT5myv1jLxFfl49aAhjOrJnDMGr8n3rqPH7EKxF/CYWtkxaF1FTlorRCPVQ5ZEzUurbXEAauO%2bEz309pscGptNH9Yef1Yv3ywH1ZHiVtryfGfdUz8Nv5uXdQ5ttYX36we4jnPN2uUa2v0q3XJuLay5RergfjO8M%2bqf%2bTc%2bqj/tHaI9zqf1jD31vCHVf/AvfVBv7emif/Se6sBwGrYW1sA1ta7VWQAViburF1CqLuzTiCsk53VCWF1/rXOniCsT7OttUcY9bbWEIg1tLVOQazTrfUFxPryxpJ3INa7JBMJJZGtYaxrNoKxjlgfxtpnVhirlVlgrBZmhLEa2TOM9ZltYKwbpoGxalgBxlpgGRhrhhFOUJ8r0t8r0vcA0vcr0v8tpOsBpOsspOtXpPsCpPstpPtYpOcDSM9dkJ5nQT0nRHr%2bivRcG%2bl9AdJ7GKj3W0jvDZHexyK954ZaP4C0LgNpvQvSOiKo9VlI696Q1hNCrdNEWv8Kta4Yab020jp4qP0FSPs2oPbDIO0zgtq/hbQvDmq/IdI%2bTqj9sUj7jqH2c0Ptk0eaPwA11wFqXgbSHBKo%2bS5Qc3Og5hEhzXmCmp8FNZcMat4b1Bw9qPmEUHMfoeZpQs0phZr/CjVXF2peMdQcaKj52lhzy6HmwUPN2cc6vwDqXAis8zagzjHBOh8G69wdrPOMsM6Jwjp/axfOuWbvXJTz4vahnMP3Ecr5hp8pcG7kHwEGADfUkkwRR/rKAAAAAElFTkSuQmCC'/%3e%3c/svg%3e";

    var img$b = "data:image/svg+xml,%3csvg viewBox='0 0 167 167' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e %3cimage width='167' height='167' xlink:href='data:image/png%3bcharset=utf-8%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAKcAAACnCAMAAABDyLzeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8%2bIDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkNGNjRGQTc5Q0VERDExRTlCMThDOEEyQjE5RUU0Q0M1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkNGNjRGQTdBQ0VERDExRTlCMThDOEEyQjE5RUU0Q0M1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0Y2NEZBNzdDRUREMTFFOUIxOEM4QTJCMTlFRTRDQzUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0Y2NEZBNzhDRUREMTFFOUIxOEM4QTJCMTlFRTRDQzUiLz4gPC9yZGY6RGVzY3JpcHRpb24%2bIDwvcmRmOlJERj4gPC94OnhtcG1ldGE%2bIDw/eHBhY2tldCBlbmQ9InIiPz6QGRnFAAADAFBMVEUBAQEDAwMHBwcEBAQGBgYCAgKOjo4FBQWNjY2RkZGEhISDg4OFhYUJCQmIiIiMjIx8fHx5eXmPj4%2bSkpKYmJiJiYl7e3uHh4eTk5OBgYGWlpabm5sICAh0dHSCgoINDQ13d3eGhoYKCgp9fX2hoaGZmZmXl5eoqKgLCwtoaGh/f3%2bampoSEhJ2dnZvb2%2bgoKCAgICKiopPT091dXWQkJD%2b/v4ODg54eHidnZ1ERESfn5%2bLi4tTU1OVlZWenp5MTExDQ0N6enpxcXEMDAweHh5%2bfn6UlJQWFhZqampXV1dKSkoPDw9QUFBHR0c6Ojo8PDw4ODgYGBhpaWlycnJaWlpbW1tAQECpqakdHR0/Pz%2bkpKSqqqqlpaVJSUmjo6MjIyNWVlanp6c2NjacnJxubm5zc3NsbGxhYWFra2sUFBRZWVkqKiqmpqYgICBtbW20tLQQEBAhISEbGxtLS0tmZmYRERFGRkZBQUE5OTlFRUVSUlJUVFQ7OzsmJib8/PwaGhqtra1fX18VFRVlZWVISEirq6slJSVjY2Ovr68rKytwcHBOTk79/f0zMzM%2bPj49PT2urq6zs7NdXV0XFxexsbFCQkIoKChYWFgTExMxMTGysrLg4OAkJCRkZGRRUVH///8cHBxVVVX4%2bPjx8fEnJye%2bvr4fHx9iYmJcXFy2tra7u7uioqIpKSleXl4ZGRkyMjIvLy%2b5ubktLS2srKzZ2dk0NDTPz89nZ2fk5ORNTU0wMDAuLi41NTXOzs7Dw8NgYGDm5ubS0tLCwsLJycn5%2bfnp6em1tbXU1NS6urr7%2b/u4uLg3NzfMzMwiIiK9vb3e3t7IyMj09PS8vLzAwMAsLCz39/e/v7/t7e3Hx8fd3d3R0dHh4eHExMTb29vT09Pa2trLy8vw8PDBwcHn5%2bfX19fz8/PW1tb6%2bvrq6ury8vKwsLDi4uLFxcXj4%2bPQ0NDGxsbc3Nz29vbo6OjV1dXs7Ozu7u7Y2Njv7%2b%2b3t7fNzc3l5eXf39/Kysrr6%2bsAAAD///880PBPAAABAHRSTlP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AU/cHJQAAG3dJREFUeNrMnXV4W8fSxo%2bYmVmyJcvMzMzMzMzMjpkxxtghO8zMzMxQSpmZ8YL0HTm990vbpHUaW7pv8rf1e2Z3Z2d2Z%2bcAykXRJ2/eiiFZVE7V7NglQikgBMPY3hDzdjJ3%2bWvrF%2bcHgBf%2bC2c%2bnzEh7UwV14%2btaiPAUDBA8Ru1BeeYlazUMOeZtzNs46lmxUarj/mIRAFQBQBS/g5UpYA49/gDGuJcdujU3vuJfZysw%2b12kdXWEJGIAFNAYAoFSvFUVfljX1qmds6v3/%2bFa0utZJJ956JcfYpSSlcYIghQFAwCAQDFMxWivVGdnN8%2beuP8vU4pCZeDFQc3T7oiEFA%2bAFpzAUIEoS%2brifMfF//Zk7bVod3Ixvj0XF2cZxMB8ABQKDigWJg8w0uWnvPhxZ9OJmx3vtSS1c3JbPcLigsWIWAePhA4HAJRLFSIQJP1S8r58JOLZ79KM7Ah8ThYYm6Ob8ieJhHgEwYSasEUUMVzyI7%2b8pJxfvTw7v6MzpgYCQlJEfQ5Oh4d6loVAIis4Qo4%2bMswQPFcsuN9sDSc71w972B7KcN5hIPkjB6mmB/bV1CwAl4qQigAOAqmeH71xywB57qrX7x0X7p9Pw8pNIpYne9YHbqnqDwFCvhYQ57q2hci%2bOpTi8y57qO3zt2ztZ/h6bC7u2kRW4rXlBVNzublAYAHVOXbwUEH/g5sCvbMYnKu/enWv0p6TDj2GRj9Cj/jdvPUwPTjKR5aUAiggKAUL6KKnkXjXHf30LbPY7j2Dmn2MpZ79prNOYEToTvK87QIUIgCQLwYp8JH%2b8jicK79Nlnesn%2br1JKerG9RXMn0zd%2bZardvU1gAFA4Dd0kAULygzPcuBufame0zl/aOmDizLPUtIrK7I6P8Xe0aN8T6WAPAYlCC6sK8MOfATybbE18aj5cxkN5IfESxb2uDa0dd3b4xa74H%2bAuLggnK%2bPaLca49az%2b%2bP7Fl%2b3Z7Bxw5gmXhHp6j5%2bjS0eQTlmetNf8LiwQaeO5FOK1eSeiRpo2w0SwKjiVYTXETr55b7euaHiYK8NBFzRsTWCSTpif8fc4L70q3mTjJ0UIK09QMg/WyKBZkNyTZ1YaVl0K1ADgEMc8JWRyLFun8Xc6HhSNXpC37LXE2bm4UbZzQsZKT61cRNzXcnKcL14XxFYsra9bf4lz7TWJyGi8j3hvDMtVmYsn6uEycpUtI7XHXokkfGASxWEvoiXBPe93zc1pd9B4pdL6Ugbc3QzMciGiijRvPbWpfXH2INd8zAADzykXnVCiM7j4vp9UnyES5c4JMJxGDpEuwTC%2bsjmyNeUdtiMvcIASAAboBfPjicyoEd5%2bP0%2boipiSeRzUwMZGZce2dnIw4SMsgwwqXkOimsf5JKGhKqGJJZLTuuTgvJhbGUG2l8QZOeH0pncq10MNXi%2bYCD4Ye8yzd4AmFqP4tDaj283A%2bHBnPSMywzaBLmG44W6INlZZlPBmd2lhwfYPnrjwRFMyFICjUknAiWAvntPq00MBZapDMNdN208eZkbSFeG3/lPbG0NrB42W6WijE/NSELY1BrXUWyjnQE%2b/MXY6UsTkknCkGjSZjjXzFgxX%2b10P3pDSNacEBYNEikKc6/ISFcVqdTyy07yTRbBlISwGRfliPxXTDGm1KCgre0XRzttQDusScivRzC%2bG0OpAcnzZCososLVl4C6SBcSY1JwLXV1A7caLIs3yFh2jJORWBtxfAeYQW0%2bnMNklAsyyF2iwiEengq2ea3zC3YXfBzdmqUl0CfMk5FcZ/zfkNu0cqi0%2bOx7AxNIkAT5IwxDiBY9JEXVxBV0pzQBUBBlEsvTB/xfnNthh5mpRnj0GSqGghEc0RGAvcM6PqgiaCjzXFhhmWwgB1cHbt/XNOqzc7E7j745MxOJYDiSq2NHMTV/Zln56aqA4K2bcqzKdKtKTj/UTOdORPOc%2b0yGPiY3RkMjSJzdC3YWsbCU%2bPZp9e418zNN21aVebBwEBUQvn7/el33I%2blN6XJrR4cw2c0FQkniLkZLnpV6ZGmh%2b1iwvekbIprHQ%2bY1eLfHqezTmw7dCl/ckyA28MiYhE4oimNu7u4aPt9S5JE0PpBas8xwIIKDDwVA9oxZlncr43c6NlZJzHwziA7oikLxFqRxTrbRl1qaieaDy2I2W2TQRFQOazDXUI%2byzOZeO/JEh1eGwuEklFo4leTDIzMzsz0v%2boebVraEHTpuYVqtwNAlETZ8qpZ3C%2b2hKfQdexNeFasp3QDCKO3JcZ3n66wby%2bIcn1RFPZrrZSLZARoS5Oxeqnc159SS6VGujY2vNoNAwRz2B49QmyDo/6RTWsCYob7JptMxTxEYt3tLCAY8eYp3GufeOUXJ7mTGNn8KhoJBEvwVKytJnZ3fmp/UE1oceadq0I0IVCAEB9nIr%2bD57CaXVr2/L9aTQwHaIziFQ0S%2bhmky2w8N3sWBE01Lh732TYCpEWXL2cCt4fOa3eeDshIZnuTTeg67gJDehIvHZWZV931Kh/TYdd8PHJVeWGunwwGQYQCPVx2r38B851726zT0yWecsyZEgvCZfGMLWx8I3YPLUztWFNXXoBuIyqtFQRHUSdnAr67zmtDp2/ZC8vlHlzvZE6Thg0nmNKEYdnd7fqbWloqDnelbJpzJAAcirU5ucfG3T97zjX3oq3316YbOCkYylx4NHRWFPtLLHe4dNbWvuj/Wt3rCorH2sjqPJhhFo5FSa/43x0x9bAOUOHK7PlotlyKZto6mVcrJe7enRnvnn0iYIuTx/DFXw4oFCfm/81tP8tp9X749LC7XS2k0zGdXIu1KHiTSVGuXp6p%2bf67a6HpO8DV5G1BxTMMAGIWs2pQJT8hvOdc/bykUI6ja5D9U6mY3AOeFMzse/hytNzLjW7G0/0FoUZevDhKk71DrtCEf4k58Cp5MIEuS0GI/Mm8ba%2bsh9JY3mR3MJzw3cerQ6Krt3dVO7TFsCHQzTA6Xn5Cc6P5OPnWng0b1tbGjexZdt2GZWsjbNpP9061Z9UHbenYFWsT6mu1tLnb08T%2bgnOA51b70tl3t5sJ559ciLagY3RFkTotef75a8JGkq/Pv2gzEcE5WuGM%2bj/Oa1m0u6N0%2blcHUuMs4nMwImNcdC3yNTTy/eLDHRtvB5ce73I0BqK0gwnYuN/OX8ySduoY6DjJKPr0NmWNBaawZJQcivdT%2bdPmQe5xqU31s6WtnlANMP5OFNSca492dnSmYE0wLANDCzRVCoHSSURbcL1%2bjbnN5gfTYoOGewF3acWVKEZhSz7ldPq3vIrGTrOaBqa5kS1xDiYmZkyyVmVq0/v3DmXZGcXVzvY1JxXqqvQlF76lfPhzLYetoGtmQ4GTDioDlgih0JmsMS%2bOyMjHe1CQoZDe8tnfaBQTdlzPlFScd7eGmNPNyB5O9vSSEiivr4p00YbZxpR6T6V5B80EXJ9wx5PH2stkcbs6f%2bYc%2b2n%2bxNMCp1JtmiaJZqEx5lRyEYUpsA93Hc00i7OxXX45mzZrgARAaUpzqoD85xXl8vlicnOVAyaRiUyJDg8lmPjZmPkJohyTI2qDp1w3bfLc5ehNQDRmEHj5zm/2VYojzHJwEhIGAechIHT93KjmDKZOJvRJLt6x7rGE3tCN3jAtaAas6fCfZ7zvSuFMfvt6ZY4IhJPxqIlZBy4aYoFzOJcv4roE0MTx%2bIc90EhUL7GMBVxKs61N8Y75QkmbCQDa8ahYMGFRDYSkwVGeGZ3VH/U0eno1C0eG8Lgm0QIjXEGrJznbOlJTDQBHTyO5UXBObA4TDeykCLm2Jiv8W/1jd5tHu3TG8afDdCcPRUlIOfAjzPjUqk9uNRZoClxEiHO3YaM8xLbRKyu83cMSn9QO%2bTZFlDapqVBTjOQ88LJveO2zrYYJMuBwfHCgf8ppmSmhW94pVHqVENoiEv1UFGeyFqkADTHmQNyLvtuRsozMaCRWCRTihce5ybgYMXauKzs7M2j1dE1Qf010xum8wA%2bDKo5zmAlsPbChyPOXJ4BEo9nCYVEM5xRsZFXBIXIdBdYbO6YCA6trjnR1TuGggAEzXG2rQfW3v3wionzdh0a24yIxUrw2mIjATmCQsUbiSmOSUMHQ4ddHqzaUWSN0uCwKxSvAWu/P7tRLjVR3cIQsUIOWUzxEpDJHJaXhaA4svrgRM2e%2bmPHmqwBuAdcg5zLgbXvfRlvQpd%2bKmWbsCR4ISVLwETjJEhLDD7LptslKalmOBRM4/K0ALgGx13BBQb%2bcXY83nn5/QyWAQZN5Ij7sphMN4ylG5lDsYisqBhqrC0rSNllqIVAaXAdKcjAsm/f%2bNmeLpdTsUiuJQNLFjNxOC8akizEUbz8Utc0Dg%2bv6or1MfR4XDSrKbUDy77/7Nw4z4mLJmIYDDQVjOvwOgxLEpGGt4jY7D8RfOxBV1mzT6kHf6nu2xckc2DZx5/dGPFG0thsLkOCxeNx%2bmSGDQmNR%2bLIOTvBLG735O5dYW3WWlCIJtd7CDDw/co3x51oNLQDFWMGxnT6%2bl5eNjgzodDLOCq1PtClo66mrHmFiIBQaBK0F7i6/t93RrhISyoSjTYjEvH6NhFMoT6OyeTozdU7usSFDNVOxhrqgu4TpUHOWJDzhyufGhDNnGgsIoOENONE6FEYXlnZNsLNDXNHh4LjGo9v2JRHgMA06ugNAauP39u23MSBiCHp09AMPIcpMDbG6rfn2IhT8%2bsD%2b6P3FOy7GbtCF8qHapKTACy7eGRvJw8D5sMSJyRen0kRZ%2bnpY8MrtTMD/V3MO4ZrjzeXhVUFeKinPuBZggB3//2PmUQ625tGRSMd8EJTskWfLxkX4U72dayfSz06PN01WxZmWGqtBdPoBg988vHtkk57b4w3UuJAxOM42hZ9uWKKu7t795xffXWd676yHUWzbSIPXU1uR6A9rb59c3mnvYzrTXUwk4DxEl5I9i0uDtcLr8xZY%2b4aUlN3cEN5WBUBAYNCNTo/Bz5%2b61qMtwHdgcTAgm7ey03gnp2Zu/p0Tk6ro3mda1BjwQZVbRUcjkJodL1f%2bPifny/nynRYZjhTrARHFhhnVubmdo9u2RLl5%2b/aMbGhaN9kmC4KAoHANOo/755Z%2bePryU6WJAcOnoUXgn5J0Bpu7JuzJd9vrj90d2jTqoNFu6xhgGb9Zy%2bw7sfbX3weY2lGZZBoVKG2UF8srjQWFG%2bOTHUMzAk6GLTbc2zWRwRHQTUZLoH7%2b7J/nV25Nw3DIOGdbLlCMNXsMxa7WYRvATED5ypcg/b0pqi2d9DLa3J%2bmgMDp7a%2bsbFFBm5FNAM63s3ULTvTjRLRDsYg/fVJLmuCbhb0lueJCBCFRuO6duCjd3lv/XIlmWbGItJ0iPpYprHA3b24fTSy4Sjol2o6Uromy8a0AECzcR0ZWHuI%2bvL7W%2bUGJCSR421mipRYuBn7rs6JjIr0cwnsD63d0JSyIkAXzldoNO8A86P30r59dXkaj4EWEg0sORLTLEFftl7lzvzUVL81LqGD042gmxdBQU7N5ptXvzl05L1rCclISywWgzTV1xZbRGTn5h6OdHSMrKgePjjoWla2QsQnoDQ67q8BA1e/v31kY2eaN5qljWVhvShii%2bJcY%2bPM/DWpfvV2wTW16ZOb8vKsNZkUz5%2bHKK3eW/noX1tnki1pHC88w1TQ12d0ePNhyuFU88Bq/5C4Bpcdg226AAKG0mA8H6wEOQ98duDkxq3xaDbWFEvEMi2yfHON9dyjUiOPxs0lNUZGTvcGeEChmsw6Hp/XPVr52p1zJTp4BhrJwEqIQkpxn3FOZlTqlL%2bjo51dR2PIBi0tqGa3I9X557K776y8/P45WxrVOdnbFIvEG4kj9PKNc/wCo81rgjvsTtTN8gN0EUv2UmIhUp0nf3T1wLcrb9zrNGDbFvLITJwRpdjYIkIvZ0u9/3BdRV3csMuuAEM4VJPb0fz5vHLg0Gc/3vj8Z6mDbVoh0oFqStYzYmlnRab62VW4DAen77keW7UCjlLANTdD5%2b87lFavfnbgrdsnl%2bs4yzvpNK4ZVlxsyqH4OZoHNyQNNl5fVRBrmKcFBvSas%2bfj%2byOrH9747vYXZ0vktjFyJwYaw86gWDAw7q1T5jWucYPpB1NiDVdo8SEaDJce38etXfbGjx9%2bd7Jk60yCpcTbWYckxIqFkmLHzVH9Q6Hp08d7b%2baVqrM%2b9Q/69X5TabXy65N33r6ydWSGjpbxnNhEtNiUge52bDCvixvct2fyZlspHwHX3L75632x8sLKszfufH4rpuWajGrCozmBFmXhMUb1Wxwr6qZ3HL/p2bYiQEtXc/PzP/fvA%2b99ufLVt88ntGzTcbDnop3YDBaeYtM3SvatGDp%2bc1VK2VhelYeIr7H86D/1DFYXvnvri8v3X%2bnZa6LjjKFK8U5soyyLzAZfY7v04OOTKZvCYg1hWnyVQdVdtjafGy37b13QR5e/fv/%2brZlxZ54tl25rZsDOtmHp1Wzurq5JzT9xc3ZT0Zi1x/x2pP5qmyfqbZQXrC5evnxn28/jnQm23O3JXJ7MmGKZWdeu5zdxNH86tiisrNywioDQDOcT9UvKZf%2b%2bfeC7U%2bf2js8k8gqTO5109Dlch/CO0%2b5JB0N3H9sRtiuvSgRHKABNmPOJejDl2gsrzxw6dGdbonwkIU16RUZiUpiU1qSGzdGDJzrs0kNj82I9%2bJA/77GzVHqyvu7uwJEj/3hl47bt0v2FiZ0xJkgL41a/ijVJHXaBQUmhD3avMhzThQMomAZW0W/qFZXLvn/0yfv3X/9UXpgRX0Kjc5lGh7eMBvZHJ9W71vh1bdrTbKjLF8E1kSOF/7ZOdeDi%2bvWXz977VJ6RuNyJiKRYZEdFRe50DXSMDu1r8hwsy0PAw6Bw9fv639XTKq1ePrPuxuvnN166VzhCx3EEuZmt%2bZFTLuZHq12jOzz3NJdqoaxVJ4vqDkd%2bV5%2bs/ODCOx89%2buqrt0tiWhLkJJyXkVHx5hyXCv/da1r3hUwebzYkQFFwmPoX/O/rvddZrf/kg/dfe/1S/P7CcRkeSzYS6HUHTrmEJHUHP%2bgq8PGA81FQFETdnH%2bonwfTzk8eHvn6VPzymUKTFhrDgeKm7xgVWV0dbBfnOvxg1hAB5cNgKtekVk76H99NLFv5zj9fu3R%2bpOcON55MoUmYRjmV5o5J0enRE0MpRbGEgFJV8TwEAlPjYnrK%2bw7l1R8e/fPayVu3br0ZI2WzhRRWlnHlGr8k17jofR3BsWGGfIICorIoTI150lPey4AGfePjt1/Z%2bvqNjXdsufbiYolxeGZ4g3l9/kTddF1HrKrpDhyuOvxW34p/6vsj5Zllh966/G7MqeVfymkyloVQsmVnjp9LQ37jxGDv0WmCCAqH8tV62vD091zgUrpx5%2bw52qmt9zfyDJxJaFJuVH5upEu9n1/j4FDKinIYRAHOTQChNtZnvI9THrn68dnzI9u2OW%2b8IsVg2KbE7O6I1votm1dHJ9WObSgAVKkHFK42z/TM94bKHwZee%2bWt89fke/fekrKdxWiLzUYuo%2b1b9PL9Czw9qwzL%2bXBwkqqtXvWZ7zeVP3yz/uS7d0bOv37t9WvJdAu675R%2bQ2V4ZGp/waZNnseCY%2bffSQFq8kt/8h5W%2berAoQ8/vzSTtrzk3VtsHl1gxMj1y7aY9u/Y0bsq1pwAhWlBYbrqGfc/e1%2bsVP5k9fqBHoNrIzHynhJ9NMY0vDjXuDswqCa0d5d1FcGaQBDBAfUU0v/pe23lxYEP7394JeHTnoy0FrQly9jGVC8qXC/9REjXhi7ErAKiQJXC1XK%2b%2bBfv35U3Hl5564uty68lcmU9JIYQi2G66xlFDh/c0TtUi%2bJrKZp3qKX%2b4q/6CSiVX1rt3fv%2bvZYW%2bs%2bJaBumUOBuPHrYfcr14IPGcDg8T6uqWS2jjvnrfhevXrh26KTUPq1EKqXaGAsEelF6O/NbO3afOJhURuArCOq4315AvwvlZxe%2bOH9I7rw10YTBk3Tn4piryY5%2bgi0Tq/LmqqGKMThk6efngvqHKN8cePTVyQRbe14G3QkpNGVm2viOZke4BhRsahQpdPlLf5O0sH4sSuWhC0de%2bcrEJC2NZytDI/Wj9DCtwTl2g9Gt/GY4tLx8qcd9of1tlMrzVl%2b/fc9%2bu4mMzvWmE3MtSC56etNDg6EpYRsIzYQlfpiw8H5BSuXb6355N4ZkmxzP83bCMLLDyXi/2NzBY%2bnWeWNQwtL6pefpv6RUfjhw8tJ2pBPPicVCoiOwMofusNrAgxUA31qXj1DnPvQXnOtevfrajC3PWQdDxZGJeHfOVKCrm2HBcHlVOUR3/hE8sDRx03P2B1PevfzyV9cKW2LobKwAzTTWr2nFkptXFDcXPdBtQxDA4A6xJHHo8/ZbA0HPfLBRvl3OI5kJOUxsZt%2bQnwXy4HRBU%2b1YM0wVLMOXAvP5%2b9epht7qy5IEE3seFcnBt4p37sy0v17qUlflkwdVndcuwb3X3%2boHCOqVdV8mXkre7sxgoznFh/uyokLjah/kzRqK%2bDDghdu9PsUh/b3%2biqBOvXxgf6cJ2wlLdHPnZNWPth%2bfOrGjSatt1gOALfrZ3d/vVwk6/HfeSZQUYrhZWeIsG9/ujnZH/5tFmzx7rQH%2bYocjL9L/U6k8%2barVVoM0NlZMsjH3j8pvjQ6uDS5L2aGLgAKLO%2b4v1k9VqVz5s1UJ1x5pJtHPTo/O1LYrmrpu7TmZogWoLArO0ufv6/30QO4F%2b9OC6vn6TXkyBoMUePenE12qQ8unPZsny3VhqqtZVTXGImAuQr9fUO%2b%2bfvEskoxE5mLyq3fa1K2ILtA19Kwi/Pe9xwtPgMXpn6xUHpG/%2bZmUZMlczRE2ZPt6lm2O9Si1thbNc/JfeDktWj9qUFd6Hp3LsHcQehH7g7ZkFkx6hFWN8bUIWigFCnjBgV/E/t6qs7y0sxevUe3R4RaZx0btKstg057gApovFnqheGSR%2b6WrNieDjb906sjT3Ab9vTJry/ek7LLWhSjgL%2bTuF7//vEr7eS%2btH3eplDHYesMV9T4Kz/RSBQQKwP52wrQk/fxVdzdpjMQErgGpUjt3ePcqUdjuKA%2bEhwKM70GbwqHP%2b65iyb6PAOrlDHFGZ49/HMc3pCZoFTzdQwEFdFV%2bSVXk8j/zvQmV1ksPUwxo99qbhjsmN5V2iQCUqp///Fr6H/p%2bx7xKIhojdNa07inyL%2br1CfjPHTIA%2b5/6Hsq8vsO4a3Npka6uobEBIgAggDYFjbmgfi1q/L7MvDZKsqOiHY%2buvg4DV5Hu/JvzBXCq%2bXs9j6/sX5K0BtulWwfADbtiCaj5ZOTPODXz/aPHOhAf4VKmq9tcpYBqwf6kb60mvyf13wi1xCwnOAwFh0J1H7cY%2be26/5/4Ptf/u6uzJXR937no3lhDAnwpvnf2fwIMAOvEXynFg9klAAAAAElFTkSuQmCC'/%3e%3c/svg%3e";

    var img$a = "data:image/svg+xml,%3csvg viewBox='0 0 168 168' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e %3cimage width='168' height='168' xlink:href='data:image/png%3bcharset=utf-8%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAKgAAACoCAMAAABDlVWGAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8%2bIDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM1RkJDMzQyQ0VERTExRTlCNTFFOTdBNEIyQTE4QUYyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjM1RkJDMzQzQ0VERTExRTlCNTFFOTdBNEIyQTE4QUYyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzVGQkMzNDBDRURFMTFFOUI1MUU5N0E0QjJBMThBRjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzVGQkMzNDFDRURFMTFFOUI1MUU5N0E0QjJBMThBRjIiLz4gPC9yZGY6RGVzY3JpcHRpb24%2bIDwvcmRmOlJERj4gPC94OnhtcG1ldGE%2bIDw/eHBhY2tldCBlbmQ9InIiPz6Q5zd0AAADAFBMVEUBAQGVlZWQkJCUlJSWlpaOjo6MjIyTk5OSkpKenp6YmJiZmZmampqPj4%2bXl5ecnJydnZ2RkZGbm5uKioqhoaGfn5%2bHh4eioqKFhYWgoKCLi4uNjY2JiYmlpaWIiIiGhoaEhISDg4OpqamoqKitra2np6eurq6kpKSmpqYDAwOvr6%2bBgYGwsLCzs7OsrKy8vLyAgIC1tbW0tLSCgoKrq6t/f3%2b6urqjo6Oqqqq7u7uysrIHBwe2trbAwMB7e3u9vb3BwcF9fX2/v7%2bxsbEEBAS4uLh%2bfn7Gxsa5ubkGBgZ4eHjCwsLFxcV5eXm%2bvr63t7fHx8d6enp1dXUJCQl8fHzDw8N0dHR2dnYKCgoFBQUMDAxycnJwcHAICAgLCwtzc3PIyMgWFhZJSUltbW1ubm4rKysNDQ1vb2/Ly8vKysouLi53d3caGhrExMROTk4zMzMYGBgyMjJxcXFNTU03NzdRUVFpaWlbW1tLS0vOzs5lZWUpKSlXV1csLCxjY2PNzc0wMDASEhJSUlJMTEw5OTlra2vMzMxsbGw2NjYlJSUiIiJnZ2cXFxdkZGRWVlY0NDQoKCggICAeHh4ODg5TU1MvLy8bGxsPDw8hISExMTHPz88/Pz/JycknJyccHBxYWFhGRkYtLS1QUFAfHx8QEBBoaGgdHR1KSkoqKipVVVUjIyNfX19qamo1NTVAQEBiYmIUFBRFRUUVFRU4ODg%2bPj5PT09dXV1mZmbS0tJaWlpCQkJHR0dZWVkCAgLT09PQ0NAkJCRhYWHR0dH///9eXl49PT1EREQ6OjoTExNgYGBDQ0MZGRk8PDw7OztcXFxBQUEmJib%2b/v4RERHd3d3X19dISEjW1tbe3t7a2trb29tUVFTV1dXf39/Y2NjU1NT8/Pzh4eH9/f3Z2dnn5%2bf4%2bPjl5eX09PTk5OTy8vL39/f7%2b/vx8fHc3Nzi4uLu7u76%2bvro6Oj19fXv7%2b/j4%2bP5%2bfnp6en29vbs7Ozg4ODq6urr6%2bvt7e3z8/Pw8PAAAAD///95sdoAAAABAHRSTlP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AU/cHJQAAR4JJREFUeNrEnGV4nMmV7/UyYzMzuEnd6m51i8liZlmybEu2DJKZmZmZmZnZHsOM2YMexkySCTMnu/fK91WS3Q2MIdns3veLH/mD9HuqTp3z/1edqoSn/5rvq69%2b9JsPX60vylegYbPp4rG95%2b6UtDSghozf/4v%2bQMJ/%2bzd846t33vn%2bz6eU5nly3ZDCxXJapVLutRyY/bp5xiuvNKV1zutPVH33/zPoD3/42z%2b8%2b8HC7IxEf1a9NZ5uVXAuB6Fbppl5Gx//eFFn08Y1aQmDa/t0L1mpTPnR/y/QX3zz%2b58VLlw4bGh9xoBZ6SkhZ3piUmoo0R6xKqECL1p9avLq4fvev5%2bQUNzdnSB9h2fy3/rfB/3FN3/45ccLs8sGFA7Yur3Ik5ieneosSkwKjQjhiNxRHkbGlnunLht/eMfbawan9U748zd6OvnR/yboN372zrc/u1FfVViY4kstHOq3pqRnleba8yvS81JcMrnHpV1wqq954MSG18cdXj77dO3g/wBN6O5eOzP%2bo/8l0K9%2b%2bJv3Pv5s4Y0PEpOSs9Pt/pRQUn1GhT/Fl%2bGprEihFAqLIA/XTDRZbk9Yf%2b39%2bdM2n13b779Ape915Y3/BdDfvvObYa9%2bPOVGVXZubllWenJRUnpiRVF9oj3Pb09KkrsNKk4WDOvDBdUHLh1ZdPXq8aNnpx3e3N2nuzutu7u1%2b0/f5r4Z/8Og7/zw5/UVX3z66pTCARmlhcmhiqJUXyglJT/VY7MaNM7EXD9h4HSYt6ZLb160aOyxuXuvdywZfXZNa/eT5u7WXt3/%2bc2Zmv8/CPrrb/xhwNZ3X91eNawwtzQ3K9Efyvd7nPZIwO5W2eIqiouEHBAEoOq6cous5NKCRZOWXfxk1PwdG0%2bP7jd4f21391%2bQdq%2bbmvg/BPrLd3763gfv1WcPLczISszKz/e5U1P8/pDfxvMGK%2b%2by2eQA7VIAOIYoEVRAvf3L75x6%2bMmb9xc/euvg%2bLMJtesSuv8zTP/4tfUd%2bj8A%2bt3X3vlge8blG2XbpyTnJfn8Tp9VEUhP8qfa5TCsiHM8JzdwCjkPwjqTyDLRqLkxemnFhXkXd496a/rr94efXlec1qt3r15/Sdq92vSdfzXor9/5YkTh1k9vVIzICGWVJtrdVofDplEFXCILCSDIEwoYgyEIE4wgopapw337drWMHfjmpNtXJsy7N3n8tM0b9tWmFbf%2bLWn3bse/FPT773xWePnzjBGlubkZ/oDdHrI7HBpNjIQAjEFAATXLRFqWU2CJalEUp8HM6vL%2bNdUlfZcdm9j34oSVh07OmHZ46dHRta19eveQ/iVod9OgG/860K9%2b8V7hp%2b%2bNGFBflJudUp/hiVudqQaRhSlQzZC0KP1TgOkbDgwJZiqNShhQmkpyBg5pvDTw9tg7p2ZOvnv36rZpnRv3tb3Sr7W3RPrXoN3d8zX/ItCffmPWgOxXP8jOyk6XkmYoz%2bf3xH12kVdRMEsJOpNWQBljOLMxp8SSGW4YmGMJqjNLBp26NHHmkCsjz7Tfm79q1Rt71mzcuXzO4N7FCQlpryT0fuWvSGv7v/uvAP3BO3n%2bEUOzi7KyKv15Ng1NuAMejz2uiLkpiCEpSKkDlTq9sq5/daPaaMypU2fWhL2mmgMHBl5atKt999wLj%2bZvmLF54%2bi2s2fXJaT1Ki5O6FX8t4Panv7fB33nCzFSNqsqMZSdpLLFKAAgWYBSOe0ON8XQBKA1mgRejKlsCkwIq5WotI5KGgq80YaByxYsm3jswsjp486P37Jnz%2bbhy88%2b2FTb2traK6H470C7b2H/TdAffCODyLvxaUYoyRPXiDGCJzQ8rfFV%2bGwxm0Z0ywkLShiccTlhUKkUgqBTGqMlmQWZ5QP711xa8fDU7V0T9j6af3f%2bqhMzliwd/qS5qalWmvxefxemUimo%2bfZ/B/QHP7QpKsty/R5fXE46ikJ5rogn4qsozbJbHXEN4UlNJRz2uN%2buIGEGZjmHSl3TP8cbzCwZmJmzbMXFKxevj5x37dq4k1v2bJmxZvmcdc3Nra8k9EpI%2bHvQ7u5JW/950B%2b%2bZjUkKSpTeJVBQagSh4VS41mFFcmJeYTV6QyIgD2xoqwsoJBTrJxDANLg8TEHakB1SXm0K1iyYOzM2wcurryycsKFq4s7x%2by5tXP52cf7%2b/V6pWdMvwa0e3fiPwv66/9rcGTbklRyFgchhb0oPe5IrKoq8qeHAoGAIeCU82SgdKifNg8cIigQQOF2%2bzXlFlpX0qVUm4f0zTk1MZyz4NKkC5PvvXX/jfEnZi99vLFtTlNxa3HCK18H2r3K/s%2bB/uBXvNPjMKQazJASEl1%2bf1J2cn1intWelBpI8hAGn0pQC7THCbRMuo3acEylEkNOFoegcIMRkg2qyTmyArQVrFg5d%2b61k%2bNGvnViy%2bqNyzcO35RWW9sr4WtBu3eo/hnQb36PkLKQIxARZTJK4Fz%2bsux8STC5XVZ3LJDvc3GwvrqvGmTlJIPKSTOJoaLdY4NghkGqC7yZXeVd/Q%2bUm7puX5w%2b%2bZNJh66NPNGxavPONUdPNxdLmbQHK%2bHvY3Ut94%2bD/mArG4jHrQaPCsdAAIr7QmWl6VlZ%2bXn2uNxQadewAGjyWhRIgZeLg5E464qJgqjhGRWgBYPBvg1d1ZnehoGnjl06fufN20cOnRk5fs%2bOpTNurd28trXp8OBngHYPp/5R0O%2b%2bq/EQCrtK5aQhu9WQV5%2bYXjUgMWN7ltMZ8ticEIIpCCTs5RUACOJ1wbCF9SRxHAUgNg0Dm8r7V%2bdEh%2bQsWjR14MBj148vODZ98rgxY/Zt3rLn8dGO2tbOfglfv/IlUu4fA31tgEDzBoVVFbDz7tyKou0DshIH1PsjDml1e/JtNKqUCRAazvHKXUxmtLymOsfMxgiPRsWKgA7TeRsyJT1afXvZgUGZXZduz7s3d%2bT6N9r37Fg9Y/njHU/69et%2bJmj3WtU/AvrbTxViXO62xuOVDkNlbkZudlLK9twIq5SBMplogM1htTkYtVi8ao4OymJ6HSPLaewyG0wAjHO8IBirwxSd01dXMOhiptxyafcbhw7NPT9y/InFs9c8Pv1kf3fvXs8E7d5hf3nQn3wYIeVyB%2bviCRttza3Myki2ZyyMMzIzpCBRhAm2NJh1RrVMq2QkmYzzZrPaHG1ssbjNXTLYaQdAvd6ip4LlQcDQddxS3Xhx8qH29sXjx5w4M2rG281N%2b5vT/laW/lWWSnxZ0A9fI6wExgEuDQcyuDM5Kasi2Z%2bdQVlQnKUYpdFcXlMe1st0OGiMmoKWgpzygmjQbA5r/Z6gklLxMITLvDkFWupItAK4dOnKgTcPzWt///7i3SfGb9iz5fH%2bOYO7e/Xq9UzQ7t1bXw70d%2b%2bk0yrYB/vcLAKa4aQkf3J6ni85VQhrcTmPa5UF1eaCkpIwiKkbM41aNYpXG6NRtTLaSObhRilGaUCH0CSj18INpLdvzpHrU4/tmvD%2btnsth8ac6%2bhYerat3/7ezwPtnvTtlwL95qswxbGcQcPSMa/Sbc0L2P3WohCsY1AYE2ltdWNmtCRcYkYQIGzBBEan05abw8Eab7DcnY8YWQ6LyYJBj4xEvLLGRX0tA69PnXRKWk%2bvj39zwpajS1bvPDunX%2b3g2lckB9X6DNKalwH96fcxlVykeRUBQwCrSfGFKj3xpGF2BtWbLEq90hK2RMtzTDlqmYlRC4LaW1AdrFMr9RaZuUTgdDIGMxJWzKSUIdJoWkq6MoccmfzJ7mvX3hq3rWNG57QlM46Obmvqt66pd%2b9XnhmnvbAXg372lUEgVBhJU5wIILB9hC/Vb/Nl1ztA1KiuyymIeo0yS0lQGdbKvEqLzJLpLWjM9Eozr2dQixLFSZVGBioAUg3XlTfoTcGa/i0PJ6y/eu3M629tmzZj/KrOfaOXP%2bnX1Fzb%2b3kL6lb6i0C/80OVWfLmJEEKlILVCalZqaluTVGIJjGl0ZKTGVaa1GpLgdEYNKuDSqU6XKBU1kUt0loyaUFQgmXjAcwSFTgRm7lgSKbF0lVdM3DFvfbdIyecu3uic9X48UsOju7Xr2lwv7RXpMl/Zpi2v/sC0A/LRJLCBKuVZkgRYgz50lry2K1AUAaaLeGCHLMxHA1azKCyvDyo1ulwxBIO1pnVWlSr1QGAHjR7GRYJmh1aK9RoiZaYLTk5Y/t3rb/Sfm3biXOjRm1Y1dExbfiTwf2kpd/72blU%2bvo/H3TYd%2bOCHJbLAw4A5ERWEbKrbJERWaAZlZhkWm9BNKe6zmu2mMOSOUIQE8KE6zKjMr1WB0EsQTKgrMBrVHoVeTUcCUrKNBo1e0uqM/vP2zZ%2b1d4zd7ecOLF049rhp5tbBz/Y39rrleeA1mqeB/rZLxwaRMVaNXJKi8U4Os%2bnIQg%2b16fXwxAG4aApHMwsj5pMwWqvOarGGbNaFvaGzYhMKYMBigBBRm/R6hC1imiQycoHPvzkwJCSHGnuZ7ZPfn3bkfare1YtfnvtztEPmlprm/sVp6U9B7R7/o3ngP6yTGDdnJ1lFZiedLBYqseWp4HiggAqGVAHytRGpSVoUaqjBUpTYwmK6RDGZFJbZEadVsq5QlCJdmUyuKiDMAFEhxy4eOjCkQvTjy0bNP3UoisS6uG3R51bfaJjzvC2TU2S1vt7N/pX36Bng/5%2bFgnaQKcP4zGM4FmItHqseSGblLulZMMgMrNXqj8FdQVqmdloihaoEVArQ4NRLcoEzQil13Yx0ZYCmY5hIDYcbZh4aeWhcZN3v79%2b165JMydNGrfl8JbZY86f7zg6vG3dg52Da1vTumt7KtSzIrXJ8SzQf/%2bSkLtph4KmKJChRJEXVSxldRKMrKdeQpCgk8n0Jm9OjletlxmVZikbmbzmxoZwWKZVI4JWiZHhBrUpXK2wG5SDps%2bbMOHQyLkT9u69sHLFnUO7H4063DFtx/y9i/ftGz2nef/wOd29eirpc%2bTJ7u88A/SzSiDRQ6fTCAQgOCGKBEXL8JgLNOt1Ag7AAAYiOtRoiRZ4LSazEtWbTYiUqhqGlCtZfVSmgxCNFaqOlle3GGEP3DLpyJ2Jp%2bbOvbB3/cj2cdfmn5x8ctTs2VvGv3/l6tk1y9tGD9/fp6lP93NBu01fD/qry3hGMq1SkDQIgqKDgwCIhEgFrQzrIJKEIVCnN%2bqNJrPFYjapzSajOqzWh2Xm8kEtOk0wR4aQkC7g1qpLMjPHalntgkm7jk18eOzYkXnj5rVPvnvu0byTszsOLz73xvpJG9oOrt23ZHSftH59ng%2b6eujXgv6BjwwDlIQScsE4zNtoEABojhYhpR5jORrGEa1RaZTyvVn6ZDpZOLOuIMfrNZf3bamWVYdBGagLUwplZkuOOkdALZdWTtg7fe70O9Pnjdt7aPfVk1dPntuyZ0fHmXlvTI9uunX69PiO3n0Gpz0ftLvv14F%2b9iHkFkFp7DQ8ydG0hoRFWkHCMCaVRUikAFCHojqZXinNdjRHiRqj5QXBoKnEmFOSObGl0aKL6rUApq0r71KHIalgLbi4cty4vWcmrL8wd%2b/u83evtW87MWrDjtXvj1t/oGXn0rOj90mhuqn4BaBtiV8D%2bstkB67kRdjhoGC5SGkUPE9pOJqCdBAFiCyoVZqURmnm1ZJIzvSapRAwG7XGTOmHzL7lQZMlqoNJUg9CiDKTzJl4YMXFI%2b8/ujBh18q9h%2b7dm/f6oZEnF29ZvXbJljF3Vqxe9fbaW7XrFi/d9KIR7Z7696Dv/a4oYFWwCAbwDpqgRatNAWOauEMOyASRFGGdOliQUxD2SgtJgjKbjQiqNqEFwfLM/oOCCCx49bDcS5E8LpV%2bfcOiA8dPXZ%2b8%2b80V09vb28/PP/n%2buPZt206uenvp0T2vnxy%2b%2b9HojXNOb97U3PQi0HX5fwf6uykpqSILMwIrRkiNzUWxcpgnNApOilQWREEMA1EpC5kERmmxMLgk6csRvTmak6MMFmBA0MxyHI1gLIZ5a7yLagYNGTJx0vpdp46MHDnv2vvtbz1qv3r%2bxFvjb%2b07uHHN%2bWsdq6dtXLOj34P9zd21ad3dxcW9Xzyk/wH67k9T7IQCwJQIpnIrSbstyYrRHC7AAEsrFKxUm0BMQJVqGYwpg1EUj%2bZ4y/WW6vLyrqDXjFoYGAYAEGdlKFhSXTBxwZ0VCxYcWz9h5d5xFyZcmHzt5KN7V8%2bMXzxj6ZJ9S0d3nBt1dM%2bozTMeNI/e39rdqymt%2bzlDOifjb0A/LyyKwQYAATVunsEoTyDkZAhRa4RwXqUx0CAG4AiqA71qSFCGwwKs9pozTdKAdo2tMyGgBGqUQRBHIBBabaprHHt76vFFUy9eeXPuhXF7506%2b1v7%2b1Xvj7na%2bvWTpwc1tSze3j1w65vzGjYP79Zb8aPfzv75/DfqrD%2bNVCliEBc5mY2VxjSdAEYScYxCRdDt4Oa5GKBEAGdCkRrRqixqDlGaTV4mimSU5IKEBjEomHJUxPQnDokdLwtUzZx4Y23/B7Unr986bcGTetQkjr94beXL2tBm3Hj8e3tZ098ytDZ1r54xf053w5EkP6XOGdPONvwL98Mu4R9BhFExSjCj35wUcEOS0KSDSxVsdJC8VT50AkzAG61C11%2btFEW9QCwEw6JVhlMrBYXpGV5AZ9GoVOm2c9FoyZ755ZcWi48dWjrywd%2bWVkdcuXLj61qPzq0Zt6Tz4%2bGBb24bHbx3q9/YrF/b2S2jd1Ny7u8/zxInyL0F/8fMyK4xpOZwBYJKLlV6OGBy838PjtIKWK6T0hOiNKESRAKSVWaJeC4N4LVRqRM6gnFzAeVFEtbjRou6/LFyDpQLakuNTr09Yeefhm7sm7J3wySfjJk%2bYJ%2bX7xSfObdmy5ODBJXfPrd1zfs/jjtWj5kiTX1z8/Ll//Ud/Afr5L1LiHAfzei3H2whX2Van2yopJxajWRwSUIy2mHSASIOSEEGVXq%2bS1JpNXKWDQMxQjBcpkMIQCJcC4c7MgQhUoK67M2n69ElvXl955MjcCSMnT967ft613edGjRm/ZcOefTuXnt%2b2uvng3LVz25rnrDld3HPw/Nwv/hegP/5NbgxAREaHEQDsqAhEUm1w3EngJC0VTpNJR8LasBEWcVOBGUK8ORZWGlZQjoJar4l2OACZS6EggIIC5ZCZJshbotcMmT591/S5Iydcn7t3/dxD8yaMuzDywt1VG8aP2bDn6NK2De3D1x5tG3V2edrgpZskj9fd67msM/8L9Cc/uOxA6QhESykTF%2bNbv7S7/FZeYcMBShvldEoSQsOIUaYDdTLIhGUe12syo9ocpVcny6yjXFI1o0VOj8PqFqUuHTRD6rpF6yfdWTly3uRDIyesnPv%2buJUrJ9%2b7t23L4dljOo/u2zx6zclbHWuPNp9eOri2eXCv7uKEXs8V0Gs/%2bk/QYd%2bN0Q63hgRIjmL99V/%2brEKlill9Cg7XQEYcxBlBgaJBSbeLDIRTBXWCELaYglqvWpnZJWUlmndpSB2pMFpAmaghSH3jzHG7jl2YO719wvQJ4649urBrwplt518fs2HLhi1Hp61Z27H01NRNs/vNOd2c1itNsiQvmPpu8j9Bf3%2bDcRapEEYL04QtvfC9m0VuhUjxDBIEEUmJAiYiCdbn4LAWR/U4YUJJrdobtOhMZpms7/EaJh6xCTKAgsG8Ip2JJUDzkOvz1l%2bfPPKTQ9Ov75Wi8/qlK%2b3bzo3ZM3vV7C0dnUt2Hj46b%2b7GzrebBzcP7u7eNLjPi1Lp9P8A/d7PrMAUJyRTajFYk2pP8ou2vAgHCVhYyRhBHGZMziq5OofUyF2MSa9iTAyqtQSVMq0p3NUoJSWljCkAHQTn9qfzIILh%2boaHVx8dWrlr77y9Ry7MHXnozvE35%2b1%2bfUzn7FFbVs3YsXTtvuFvb17c8fjs2aam4oTW1j7Pt07d3cu/9WfQd3/DwlUcBkuCBOMckbicNwQIkhApRBGDGJzF2HiKS2BIQMMqUQsBWEAONJm0alRWMjDTW9AwsG9NueiCrYmEgaBgndHSMOjI%2bfGHrqz8RMpPE%2ba9v/Li3jO7H52fv2rMmDEz1qzZt3HptMlHz82uHX26qbW1uzvtOaX%2bTx//Z9BfZrGaCMwCIElDLEdEbHwkoiA4Eog4WJrnCI3dJSdcCkCtLzGqUBIyC4Q%2brNfrQaFHmjR01dSMLcFJ2JWssCkAQt/Q0Dfz%2bMiTu08tu/DJpLnSgpIC4My9t06eH7/47v1pa5bOPrzx0Z61szcMPv2kqXdtd0JrwgtGtPvUn0B/%2b305FSAhDNECPElRgC2OG%2bwBO48DzphMkqYad5JLwxkAlhL0eKqUsMxqVApPNabTqU2ANljed%2bxYL6/i5SoaDgg4WlDd0jho6pGrR45/Mnmu5Jd27frkyLh79984P378o1UdR5dO61y8Y9W20R3rmpub%2bqT17v2i8ezunvajP4J%2b75cK2sbodBiKiRRBaVwEz4lymxzBGVJkISUrD8gdFKEWnYJerRFkWkSGSb5dTXkzg4hQ3lLSWLMIqpCbCABAHMoalDIvmL73wLJ5I5fNvLd78rj1V0aeGbf%2b3vjXr44fc/fw0dXL9y25P3ra5INzVje1Njf1lM8Xk6b8EfQPv%2bLdGj0CYJDkOVgR5xQ6XnBnaeQCwIAKSbRLhsnA4jDF85C6HBZ1KMczKCPTeREaUA4cm5NTp7HSAMfzJouWsEwsqV5xvbH/zAXLJkw/dWbkoWsrx51Z//7Vk2dmn9iy%2bnDniRlr16x9snz%2buYNHm9NqJYmfJqWnPyX8Z0to5R9BvzvUQDBmFNUCMAuzLCv5TRAh7CqR9JEFRgQ2yAWZgIuSWAUgyEKKGKagtQKmRU0sxzYuM6sbFSIB4pSkEsN1JvPYIYMWRFsmqb3HJg7qe%2brCtW3r31q/%2b97kc/c7x799ePaq17e8vbZt4/DHo5ccTUhLSyvu07OU/gz4TNAjPaC/fi0QZ/VaUG/qSYUYTEqsLKGJ2ORyAnaRWlCjogCAVUXcKhGB1bCkWSlJerI6rUxae/0bWIfcR8CiQwUSgKnarADD4f4Nk9pPDRzYMPXS9XHX996Z8Mbia%2b2LT57bsGPnzsMzdixZu3zn6NObNi9tqq1Na%2b3pMPxPoGeB3vquBPrv/4dTwZDIMTKMhBmcZ/kYHEuVR/IDLqWMUsg5iiIpgtNY7QFeKShpSKalpP9mIQEnEF0Qlecl0gxuyIuhoNrU2IWGaywFfY893Lty4MOR6w9czLTQwMj3V7558cqZUefuTVu6etrSpQf3nx7%2b4PTp/dKAtqZJMfriIK2SQH/5pQMgJZEMIQgGQ4BcFAmcd/KaLI8N0AeVkoEmHDa3zem0RgwAhbt4UnTYKGnZwaSchnmVTaGBtCCpoNThmurGqQuG3J7amDmwZeCyIf2XHVsxMpPLZ%2bvuTD9esHLL/Pk5hzbuuLV8yZrlB9v2Pxi8v6m29x8jNO1Ftambk0C/%2bjQdpDkORBCjDtLpKAKCKEhFyK32IgKDlV6USC0c6ktNz7M5fW6X6Fa4Ih4bzdkikpui5BqKAXCeYKVfIdnR/jUHBpYsOHZp4kQLhekKpt5ZeXWFEqpRNu6at%2bzq5lGjHm3YuWb4ztVrD6453e/B4HXrmnr31M8%2baS%2bqTd39JdDXhiYBNEkajahZL%2bljlsAxEaBjcdFXD2E4bY3L49kLA3GbSuVJcttUAbnB6iBiqtQAROAyUB8douMAmhZounzIopq%2bg8YOXLRo6qnjbKWPXvT%2bo0m7dt25OHFRy4rX3zq3unPU2eGHl2yecXjnnLa2wc39%2btUW/6kHtnfai3L%2b5B7QXAcnipyUws0mI8PIOYBFYFZldaUnsnqTK9GhBD2JVqtN5UpKdkYi6Q6XSkMbFB4H64OjUWW0S2/F9Tql0lhXPqikq7x65tSxE/tOzIzJBf3U3btyyleMW3Zl0sz2zsOHp03rmH346Jq1m5e2nR2%2bcVNzc3FtbZ%2bEHnuXlvAC0iVPE376TpHdzRE4oge1OKSTkXEXjOOswZkU1xBaGedCIYXVl0qkOg3upOT0QGVKxGEl%2bIAVwFScWi8TlEYw2L%2bmoECtrqur7uofHXLn4rHyS0cmtvQ1VR85oOw/1WjZ%2b/q1e517Oqdt2HH48K23l6y5teTx6U3r1q3rV9vnaxq2vu575bOE73wz2U4IBCZoGSnnoyjIG0gEUsUUImf18BCLwXZ/dnKlJxSLOfwVuZV5nogh5o57rLwYk8MgyAS7Msc%2bnDikxqisGTvk%2bMRFQxacmjTp2IqGlpaGiSvGjjXqb7fvPrnt7okto1ZtWPL2jh2dnUfX7Gx7sGnd4OamtD59Xg60OyPhe1/V%2b0WQRASUESRHjAF8jIIVBoNb5H15KkmAAs5Qitufm2v1BKyerER7PMmuccUNKjlBAVJpkEUby8fu2nvlQGb5gkWDli2a2nfBlTdXTr/UOOThlV0PF6xsYMfeu/vWo3OrOsacHLNjyY6O%2b28c3jf6wZz9mwb3q5Xy/UuCxhL%2b7RdTKkmM1AogowVwCOMUGCMaKFdRnjXPacWkgOB8IZe/bEQoP8/lSM5Idfj9bpeK0LjluGTnQaPSEi5feWhmprGu75BlK2bumvlw5CfrD60f0nfl9UFjF6yopvGBcx/NH3V/1IbFezpuLZk2/41pa5c/ePDgyboe0B7SlwE1Jvzi%2b%2b%2bFcEFEJJ2hlslAKdmo1RiBi0WJHqenUjChaiySmJyYm%2b/35YWSM6aUReS2gJQCDBEDySAChGrD1S3TryzINOfkhBv73ll/e%2bKkcWfeap85cPr0GsmcFBzonzP10OtjRo3p6OiYcXTp5o6OfcPbzp49/WBTc1OtlPJfDnRIwlf/9nk6i2EghMFaVAAg1CRDcZ7X%2bCtCgbhTQFHW7U4uSg9FfJGiAQtHfP7jFI53GGIxl1vF0ZxU8L0lg44vaxwyqDqqJ0Gm8cClRVPHbTtz5NiBmUcW0UrZxMnXG45PaB%2bzpOPwtA3Swj%2b6ZOnGncNHt51%2bsH9dv6aeYv9Sc3894ddfflqkEVCRxzkYglhYa0IAMeb0FdWn5HkMJKexJRns9khSJNWTvXXA0Pc%2bLrTKXRqDKubWwACntEjjWDKoHNRrYYxVIDias%2bLhgTtz189csahlkMlW3VjSsKDvgZHnt3SO6li94fCoxZ2r1%2bzct3N4mxSk0ty3pqW9HOiZhG/%2beFa%2bQg37nBhHgTJch%2bpNuMaQX1FRmpif7cc4A8vTotta4cuzlw7N/fGrVVmhgM0dcFg9BgyBhHCmF9Y1eHE6FoPpGBLGlQcuRdUNUxdMXDQwKGImRplZPXD9vW2jtsze0bGq88TdE9P2bTw4fPhZKT0Nbkp7adBRCd/44kauxghVpJK0hsdwRKnTwSrE6qnfWlhRke%2biBNqdqrK7PP68JEN6fvqwVIUUogo3xFoVCoO%2bZUH/EkyKU6rnZI%2bSW03K8rFhxlwS7VuzYGajTNcQhIVg34nTz71%2bYsOo8av2bDgxatrB0Y9HH1w%2bZ/SD5nWtxa%2bk1fbu7t3nhaC3El774sMpNAi4eYDEIEAB6UjClWdLTKkvzM0qshtIEBQYHCdJzpEUM/Axq0uUOxQ0WqDlRI0GV1d3lTf0VxoFipeUicYnKnAE03lL1BZUXd5QJ5gQ2NI1dtCbj%2b7PP/fGmZOr7i9ePW3avp1twzcOl1KpNPW90mp7db/yYvm0POG1j759Iy5CuBYDJPXEQSAh5XO5PVQ6YNisqspUFQ3hiNWhUOVlZBhico3oMLisqphggnhCwSjVdQ01UwfKgJgvVQPi8gDCCiRgCVaXNJgxRm2hBIEpqMtsmfT%2b%2bPn3z184dGL%2b7J1LOvc9liroxjkPTvdrlqq9BPqMXr2//AYn/OzzD6dUqhCdDANgAgJxECABgBKduaWlpflug8sW8DgTk1WBlAq7wuGR8y4FLeI6GJBKFpQ5cdnMiQ1joxY8EPIRGMnRehbSiEaZt6ERpVGtjDRbzJk5XQMnzb07//y2e2/Nnj1j7dE9a0YPP9jWNuf06eb9TcVprQndLxGkfRJ%2bsPW9rU65TItCMBcDERLSa3Ex4MpLT09MtFOSUHXY851JNqvTxkneNOaiWA4LTjSBRhMOmy9d33VnYH%2bLFyUVPA7CgNYMkfEAQcj0uEgjHAwEjbK66oa%2bB44dOn/m5PjFs2fMWH20Y/XOzQdPt21s29S8rvmPR8wvAZqQ8MP3fvOFXS5T6qUI5UBBzutRHIrbrA5P1TAfTCtEWpHqTvKlJiYHKu0iocG5gEF7oFydE8QJoObisVM11VEUAXiCBEga9iKU0%2bfQKKGemM/jKKVWXxft6jtx5bx7r584d392R0fn0bdnHFy7cfSao6OlGG0u7vOyoO98%2bf1Pk%2bQIKik8hIUgDa3FQLUYlwOKigyNiZQ7XHK32xYJVJSlJttIEYJ4Oc%2bUB8NBixZgopMu9Q1KPt/M8gqRFVVWipV7IgpYCbolh%2bXGNdpgZnXBgomNd0ZOmN9x/o09HZ1b3l66ZOfwnft2DB%2b9b44E2lsSza8kvMTUv/Otn1x28jiM6mUIzbIUooZxMxFSoZjTzyG8IaIAUAXrpg15rkpfIEK5XahabWJRABMwBjk%2bpO8CdebATKPRKNMBKrsKo108BMECLfcb4qxLNEeVBW%2bOtSt3ndrd%2bcaGwxsWz99wa83ajWuWvD14%2baqDkiTt1Sfhb9vdv34xvfPFxx95aC0oQ7UoSTECq9fBJp07xmoK02UCEXMQHKClaI3dRUjmxC6NtA1Wq3mIgTGTEteXDMnMqRlyQKrqdYCAmGU8zcOcBwURp9/pUigUIGrObKlGj184fuD8ljGLZ4%2b/37Fk6ZK1a5ZLiXTk3c7WhNrerb2KX3mJ9PSDj371akTQIjJp6jkVhkhqXTCD8bjCETJAFGd1ESKD8G57ZYTTBCqLeFguh/UmNYTSosUI6kxqwNjQuKwARy1atbdEyao0ChiyaXCXgsu1ApBCU10THNu/4dLUSXNPdM7u3PP6KKmISsZpzYPl7dPGnK3dn5bQ9GJOKeF/9e1/G%2bCDGVDHyNQCJ6AQQEJhrceqcBgoBaEhGDFg0PCEI89OqEKV%2bQ6P3SAXtC1BM%2bwCCwqkMNDBaHkJgtTVBfWoWY2SbgfFpUdgl4ZNcsM8B6lrMqP9M6denzB5xon5Y3bMnz378MYlq5fvXze%2bbueYMWs2paXVvlQJ/e23/y03SUWKNKbVQtKMsqQIG/V2AhIJXiVZFMm3%2bwIqQCTcsXiyk/Bsz4/EQZlJbTFiPWdLBTk5MOdFaeWgkhKllN4Z0BBR2VxuLmKVUzyO6SSZK3i9mZPmzb147/6j%2bx0nOmbsGH5Lck47tx3f0W/UodHDm168ndcjSn734bcz/AQOkzojwvIkJrkRXGckpGCgVRwnMoQDhlUBtwKiVRG/BpGXptscOgvAoogxDFqUMhCGBQbk9Y2ScQobCQVvsCooSctYCTnBaWUIrpOptOV1K1b0rx5yrf3a%2bfudW1YfXHtw56jN20609Tlza/DKJwk91/FeKPO%2b/b3f3UxR4Qij9hpRSZciMiMiK8B7OgZ5iFMZMViPiLakOADy8YCLRuIhq4HU6mUoaERZswmwemwEzFLKxsyWRqWO1sRSXQgNwwY5DtlIgWb0uAXTL4C8dd6uHMmNXjwzavGMtzfvfPzGqvbO/fsOto2e0VrbXfwSwvnn3//OBwPy3biAoKiWFnQggIHGahyCGFAQ4IA2iMIUDLutBEhqNHGVjEqVzB0Foj17VSTKUG5bIEJIY2jpqlbyrMCKfjce4zgVL%2bh4AOdQFGbE/svi%2bKDq6vKxA%2bvGjhx/f8PhJQeXTx53sTNhW1vzpt6tTS9lRf7wg5sDpkyxSkUPAHUGTsB5StCFRb5nYxdHAryMcmFaFHPHWRhAXIBMsFlVKgXvsyoEHWTiaYBgSTuh8VllapRgAIAlnFZAlIIUAXEqCAAMEnYwM%2bXRRZRpAdrgbTiy7eqYtzevPntu8eQly6dtnNOa0NQv4WXM3Y9eyw59r1TR6OXNemeIkJk4KEcJUxqtRZpeJU%2bT%2bbzFaWNIB4viOA4bBbnG4LFSGkrhR4wKjoIx3EW4eNoQ0bAsgGEqKh7Q2VPtAGrScUoe98JgDgkNqoEcoKwrWDdz5cVVi/fs2bPmjV2L1844uq6td1NT05/2RxOetwuRkfB/XstQzSpMxpR6ExJTEQJKysxhRi5qjVoUBGGWSBeNziSCMIhavY7R6WGVwRaDIBKj4grO5bFHHPGibA/FKXhKroJhUUOp3D2HVpBAQiBt0DMuZUsNoDcpRK9obhi0fv31xYtnzD9z7u774w%2buXvr4SXFt85/X0vNAX/ks4ek3S4URX2QFRLM01XiAUiM61gJxDIJoZQzMQpwNVytcHADRiJqhIa2gcsjlbhsLyWOSDShLSbIF8qd45C45S0bspBijSU5S1goCIl0sogDMKJ%2bjVZeANiyIk8GcvesPndg2e9W5%2bR0n2scvnrZz%2bcHlm4q70/okvGBPZ8nThKc/G2Ep%2b3m6x2URJIHnx0y0JEspTmlUqrXS%2bmGlUslQiMBYYECqrG6Sddt4V1Y%2bTakETejVYRmV1pgtXeX3RFwaq1ViBFh5zEaprFKwwiyIZpoEhstRkxEnljOoYOz0kVc3nJs/fvzbS8ecv7VndsfZhCdPupv7dL8I9I%2bbZFstWT/NsimCiAyBHSgbgMAYpjaJlF6PAjHeJBAqG8MRSprXm2NOh8HuccesbggS6iBbfm5udkrcRmhS7E5/RK5RuA0YbLNq2EgqzJAshbpyogwgeHGNwxaLzhy04vjDQ6MWX716bkbHmDF79mw7e3h0a9s6yTL1egFoz7bjN35nzf12rsMmIEojqKElw6zldFHGYYBkCKmIGRFN3AkE7KDIC%2baYneADSXYXz6EymVcnqpIkeR2w8vYklSPkJDi5IcayDitBe3w8riAEwAYixmqtSxDjIqoLr5/55vFdj9rvnVw9e0znG%2bPOrdq5eXHayU3d/Wqf10b8Hxu533/t1Vc/LnWGVILOrOTkiAmFEESEQZgWcIqSI3qVP1URckIAA8lUBgG22uNxd88uCWIk3XbJqLhiVl%2beyuUMuOW8xq2haLlb7ky1RyJSvcNIh2yIHrayaDJ%2bYMiR24OuHDr01slzY7a8sWf8tS2b2yWzvLu4dnnzc/vy/7w1/sPX3vvwgxvpkucRjWYQxAiBkyEMhKvkSiUAi4I%2bMrQ%2bqSIC6XJAPS2FqF1lsLviHkIvs4hxhyEQd6tCBsnrS07fSopWB62jfIZIfmKZj%2bJQANIQ1RajS9ciDywYs6xm4qR793ZdfX3L/Nf3TBvfvvjs4Mcbm%2bd07xv9/L78Px02PP3hZWlI65PcoFw0eUmRAlDWgErjCpkZTKbJ5ww3q4bmE9qwUgfKYYXGHiOSPAabwdIVNmpA2mmwumJOQCOXEy4rZHBoVATp8MlTs12SN5GWotoIohaBayzw6Q8dsyyYun7Ismur5r%2bxavbSGWNWj34wv/OV5rSdO7r/uJ%2bb0Od5xzdPf/DzGwtvFiaGAJjSaXEtqaLxMIbpRIUahHDaQMTynHYfbC6JIjodAgqULeAr8yuMXUOqJVUPuWIGIuDTSGmU18hVBsJgU4hS%2btdoOJJjdEbQFARpMyB69RimPt9XPRLpam%2b5NmbDqhm3dp7deHb/g8Hr%2bvVevapnMSX0etGB2A8%2buLl9a1kuqQcIK68USAw247AkgZWMTMYIcps7KSMAQzojDiGoTKlW%2bAIjigh1eU1U8sUyUYpFn0eioiTpZfUBrCQMNIIBl5EUL9NhGsEb5DkLqWO0JH58WV2X9updY3jJjrln9rWN3i9B9judVjxnWrE0ns85xfnTEePPvvHeuzc/n5WhUMo8STFpHRlxkwxCMBqV3C6EsyJrH%2bbSg5g0iQIIo15G5XYEDIQ6x1Ktjmp5q1PuCfE93T0wJg8IRpNOSvgaAZSqK8rSBkBm8tUDpCjXy5ZZvKBiw32iXTVm1aS3Rk0bPmd/v9ongxNaE5b3HDo8O0r/fGj79LVv/eTTjz4Y4YMtSYkuRqNABLWWD2hwlAqiKh7FYSJFHjTLgkoBQSjMLANYzhWxo0FzQ38l5yYNcWdKQIGxlCSZWEkdQjqFj4d4imQYGsf1KOTxuUCLzdt3WV/RDB2%2bxR5H3pi/d9SY2fsePFnXWlyckNZvTu8%2bzzu0//Mx%2bNNvfPnR5csf3Si0m5wLU0VewasUoCLXD3pxtZbjTLictEJmDDBJ%2bUnPCNKa0roDqT6RgfE6s8EHGPIiflvEYSN4K0EKiJxXs34epwRWACEMkgQOjGl15WhJiwwtWYDPXHsMvvLG%2bXljNt86uG7T4KbevROKNzX36pPW59lHjP/RWPDVv1%2beVfXj791MoSPZiR5e4fTkKbi8ekcQFCRhotbDIK03k6RJKVPLEJ0W1Uul1J9ig2kRsfABQ6pDZdXYQ6luhYJTsRAFA5qInEEYkhYEUaXXaBBcCyAlLWGd5k2t2NIY3vbGoXnzd6xes27Tpn6DBxcn1Bb36rnO/uJWjae/vrw14/PfvZrhdObl21EgyRlJFYmtQxEqhqsRRslwcdGEIuGwSQsBKGMO0iRuH%2bEyFnQpUYFLzQdEe8RmU1kdknKhXZDW4JQbQJPkXXCAJ6IgZymn2K7Mkv6ZTKOJMNrmzv5k3vw903rusa/b3yqN6OC03j2LqVfvhBc0vzz95kc3C6s%2b3ZpVkZvI8Va33aciXL78dKdMKxNwJcLQCsyNFIB6kUAANAo5Y5BFzDdgxpZqWZ2W1EXNER4IUDY7SdAGA%2b4JgEZQZHEXGYX4mrEKTnIzlnDLQG2dw7XM7F50cvLUT2bv6Hj84Mno/U29i3unNf3pFYtnCpP/aif6xh8WLtxeVLY9t74iLo8kJ/tDeUWpKSOceXIUBEAkqpR41XAinx/HKRWkkTtkFi6Ga4MtdQiMBYMN5S4FbCNtdphSUAAY0KCwikAghxtm9DlektIwNeWZ%2bsyozAToyfnvK96/c%2bHqln2Pl895sqlfWnFrcdO65ueB/kWD1tN3BmRvL1xYX1pZ6odtKU5/fiTP5y9MznPlpVImU2NQSZGcs9Q2NGREHHxMwxu1Lg2MlFdDQKodIZTBmN0QIaXChLE0DbhpRiHiYEwDixgFARTKKKPqIRYqZ5EWyjTN7Rr75riT4zcsfbxx%2bJP9rX161yb02T/4eaB/0fL29LV3U25%2bsDAlI2WhH7Ha6ZDdX5SclJyL6Yo%2bDUSN3rBJBhgCtsStVq%2bXwkmX3ohBKIjnZDJK3s1VQkrC47QTDr8tLucFxKWCABrm3TTnEAkFLUT1yrD6VBTIbKx5s0GDhu9MPnVqw7Txj8%2bOnjM4rbi4tVevprTngf5lE%2bE3v6r/%2bIutw5Jyp3j4kFOe7wulpFempnNmMkPeCDkNRi8Uj9P5N1NREyWpQL2WMekZXOv1ltfp9aISU8kjVo0qYFDZ5CCs4kBIWlwUX5EiGRZ0UH9Waa5Ti3WDsHEntVoGKzhz/cjdzaPWPHgyZ1NTbWvvtNbu4ueA/lVb5tPXLl/%2b8Xs3E7Pq477EIr8/MeBMTixKzMaUBquWqwjpc/SxkFOVkQqhGkaLGwBEEEmIhtSN/ctLvGqVgbbbDC5JOIlxa5IvxpI8ZyBhj0On1OuiIL1IDXLcoIa6uwfQFRr97SF3Z0/evHnDvv2bBte29unuk9b9vBH9q0bXpz/75bAPP5g1ZURFUnJWUShUlpsxJTtr6MK4Uiz0YCCAqHP0/rKAlcIZHtFCAZzBEAQEAEt5ydhGLRHgNKmuiL8iladsjsTckOSfjDinVSI6AEVASLaIkZuid7z977cMzKGvD4xOmLF7/oY9R0dv6tVHAu0p888G/ZvWYSlKP/7w44UZ26uySivtZUPLLmcHIoVlFbqwjQ%2bXyDzZbiielC6X4xhgNIlAgRFTy4x1WkZvGhKNlCbLbX5K4ckuUnAsmBoyEI4UJohrlRysA2TKoAwtAGJ1FxqM4y5a1MdXXJy06ETnhHmjNy45WNunubm5tvt56elvmrGfvvZvX370%2bc0bielFWQOSq779UbZCQ2IxSuvV4mG%2bwqPIS7E602E1iBnVOAVgMqVOP/N4FICCJbJQuj8pFg%2b47c5UDWlgRAdCJsUwsKed0ATWtVBRo0q2jAGDR26D1TMvTb99%2b3r/vRuudjaP3vR2W59pj4vTEp6z4/x37e1Pv/njd7/1wavZyckphenJQz8c5gClLG3JKbcYqfrkQKqLj%2bQXsZKmE424ioNwpbqgDkBgubIasaYn%2beJ2WyxkV7ECpwlYWdGDmQREj4EyBVAHGZWwsa8SkY2bCtTsrkZfv3L72Irba9d1tqVJUm/D6eLnHtr%2b3YWBp6995ztf/uSj%2bpTKpIzK5IyyXA8AI/0LtN6gkg6lZm3n9Um%2bgNwVyaqgEZJBcbXXi8p1RjZnrJb0%2bOyp%2bQ5DulxaX6yCEzCNT/BKikCBqwm3VgCMWgseLAHbjwjk5KmNF0%2buP9bySce64YdH3W8avq814Xnd7V9zBePpNz76/k9%2bMqswNyklpbQs3SmXqmABKOrMMp02parUrbCrAp44lTrMhgh6HLNUW8wmfdA0toWhVTZ7arYn7oEJlmBFCqMIDkC0RtgFmSw9XUpqZRdR8jA88tEQi/r8GXJMQ8PI%2b2%2bNats3fXjCg34JCWkJvf6RSy1Pv/nZ//3J7z/%2b4HJpRlZhWaIN0wqoBcF0JrXOW5iicdlAhUPlpESPiuQhkZQkSjQH1Zm7TKqAqHHaU1I8AUWMdRtEwuGmUZBDUU4E8CjpotRGsoAZdMx8%2b9Gby6DMXddb0JHvXztyf8mcpcufzOlVW9z0bAvytdeEnr723nd//vF7796YVTisfnuIxhEjikhmJIzkePJUCpZ2GrGIXKAJnpYZIYMblHnVWLRRZ/CxRMBmr7DbnTE4YKcptxzTaUUjGCNZGOGsmjqjRiksGMKMffPh3syUZZO49eN3b9uw%2bfDRaXPmrEto6lX810%2bAvfDi1dPXvvzud398%2baMPbgwblntja4gQcK7npqda2ci4Up28LxQGrAGKIig0WC6LWQGmrk6d0xKGYYEWY4FUt%2bSbFQq3Tcr%2bRhADEE2E73nfBGAbo6gZXpTpXWZets1onCpM6ry4%2b/6W2SdPL9%2b4P613z7XgZ43oM66ySZbk%2b//%2b3qevTinN8I/4%2bAu/XMFRSowxBgv0klW3U7SAxDJcMC3pKZNRFvSa%2bger9SU5aAGKGTUhlSLGGOyiITHPQBkJGjbk22kAggEdbzKZteDUYM0EWZ3lk2OegS2P5q3c8Na4LdPaTkp59JV%2bz3Z1z7gcKA3p9z789re%2bqPr4i9zklEQr7dSQJh6JUsaoTAk43TSJMCq/Q7TqdaylvKAu01uQaTFGo0qE1kRCBo0DcnhSrXk%2bVRwHICLkgj2iVUPTIByWyXIWTTU9XKFP0ne%2bv2zIyqt9Z%2bxonz9m3%2bjuB/26i9OetTP%2bzOuWT98p%2b/g3WwuHFc76MCtpWAinUlkEZiw8yWggxlEpuSit3mAlVJTRJFObuzKNUa/MPLbBq4cVVr9TY6UIvz8pxU5xesbucqcb5Hl%2bBFNEF0B030zUEr1dY6zBr6x9OGnkyOuj5p5fcnpnW6/aPj3K/utj9NkXWJ8%2b/fmH2z/LnnL5Wx/eyMjPcKk1LEmxGGLhUuMKWD6rlNGhLrucl7OWurCxK9PUWO3NHFugU4KEO%2bCzBjTudL%2bzssjvwbAkHVqVoUlHTHK00YyGazKlmj%2bILbm9bMXxS4vHHGu/%2b8bcOf1OF48e3NM3nPb1oM%2b5Evz0tQ8%2b%2bP23Pt36wc3vXE6qSmFxK1ENEgAGqOwZbjEpgImCjo1FQF4XzdEH9UJOgVmtJkU9Ig9YnUUea0p6qsfNpy70YG4IsfqIiAmLjS3wlwzsb8wBXWhs8icLFuX0f9TUvvL0puPvNz0pPrM6rbY2Ie0fv2QtpajLPx6aUvj5ux/c3F5a6qyIe8MKleQmXcn%2bJKfbo2AsOv8sEiYoixbkDACoknMGFUh7Unz%2bDH9SbshXli5YP8gWoEorSAMET%2blqzER59cQgyirUgybsqqFn3p7wxpUlrWe6Zpzd2bS47Y8PKfT%2bh6%2btS2E65ears7ZPefXjy2VTFg7zOD2o3IBQRF7IX%2brhHBjnUPlm5dNyWBLLMQLGHRGpLDnyKrYnViSnVjqLkjKy7JUhp93tI0gChyUbgoSV4RpQ73UxwQV7cyZMv7ht4P1BOwc/KhjcPWNzW1OaVOq/dovkBQ8BPH3tVzd%2b8u7lrJufbb/8buFQl80fk0fSbfHSjO1lbKbgykv0yX25eQTAEvYIDRoFt9XuDyVWDMjITrf5bBn59kheiAEqCjUoRwEQbuaBHJml0cFqYw2DUO/ubQ8z27WjNo8as7stIWHxqoTutLQeNfpPPK3w9BufD5v1xdCtn3/0049fnVKZl%2bzXyIfl21LsWwfog/b3qvyegD/xI19%2bkSM116eQGSNJzkAgKa8iMaWIiOUV%2btJD9hAFxCo8KhqhQBGFZNVeC1/C5KvPDyonT1SXX%2b9/YPXsjjPbNjb1fntGwh/XUZ%2b/J33xYxUS6ac3P75RUTXsxs%2b//OByWXp9st2tSMnKstsoC%2bPyGAJOV%2bqn37mZ5IuokkMOZygpMbmsvrAiNyWUP2BhpTwmDyXn20I%2b1magdRpQCI6l6sygJlax64wxPnens//Jvit23L17cHFnc0La/oRnCOaXef7j6dNfv7cww1mWVfX7WR/nJiflZvgidltiqYeCQZ2UyN0a0pWesr2%2bsqjIWRpyFmWUpqQkltYnZg8dVlVVn%2bw05Cc6DQG7hgY0cisjiGansQ6gQJRddMDU2b5i16JFb57euG3Zzhm9avc/qX0G6Es9qPL0nZ%2b8%2blFh0adV8SlFpYlWX9mIjCx/ZWKKIaJR29JVUnUKZWXMeu/mgBHOlORQqCi/oqKsakDhjc8%2bn7J9RK7PllzqifByn5XmKVYnAFQeyqtq1GrYuGLXpZKJY9arx7TuuBpsO5rQtL/fMyzISz5RI%2bWoWe9eLtuaXxWo2m41%2bAcMTckKpZSmuNXq9EIDKthyqwYMmPLuzcRsZ89SrywsHVBVP%2bXdD7Z%2bUZXndvpTKvxVIVVERREKhrEIUt7AzA1a08RFUpBGLo0adaR9%2beHJB8%2buSSse/AzQl330RyIdlvjLhfW/yhow9NUih8aa5A/500NlAdhjM9iS/JGk3Mp0z4ChpQtTZqVXVg2bkpubW5E9q6x%2bSq5N5c/PkwOJGQGVhlX5SIjkacBSkDNoUEnf4O2H5mNjprasGTdvx%2bMHnb0PJhQ3fy3oyz%2bjJM3%2b1lm/rq8qvDllVpbTzlPpycmp8byswqoigy1xRCg9t9Lnyqufkr19a0VK6cJXC0eUFSZlVw2bVVEk2ac8F6JyKuSphkhIxVrzSpZpjeaoXj32WM6Bxlt3%2b86cfWXGk0mjzw5vS%2bjT1OdrQP%2bRh6mkMS1796OiERm5GflJpREqlFtaUeTwJYaGVjid6enJubmJlcnJw%2bqz6xdW5BfOmrLw1aFF2xcOlYa2Is%2bWnOVzOEneJQ%2bl2mkSjmZq6xi6pS9%2bZdDEN0cdGTT9xMXzy8/vaTrdlPDng9q/Bv3Hnvp6%2bvRnGZ/dLMqSTFtWbpLBEM/PGLA9I7vUP2LYgKzKoqzsEdu3piZ/K7ViSlX2zWHbC29kl35QnzI0xZPod/vyArTL48DxAOzi1HojCJio4Nyw5Xj/6cfrrlwYeO7cw6Xrrh1t2yTpu78H/UcfT5PGtPDDhdsLEzNKq4aVVabk52cMGyp5absrryI9e0p9cjw5Ny%2b5alZe2acDFmZkZ9dPuVzvK6zPSLHX%2b932In9RCk3QGiMSpsgWfaMSM9aMtZQMLOlqmXRlxurOffseTD64rtfXXFn%2bx5%2bje/r0q8ufDaismiWZ55tluYnJyVlZKcmJRVaP3%2bAcUZqcVJSRF/rio8TChaWzqkqzbg6oqkivyBoxQhUo257sczlDnhCuAxBAj0E5CFpSw8jGPixo%2bOThtbc2rFp%2ba/Xmc4Nf%2bZoa/8888Pf06W8vf5riKKsqfHXh1sLS%2btKM7LKy0u35kvSPxR2%2b/KrLI1KG/j/irv%2b3ifMO5yuJwXG%2bYNeEYJLY8SUxdz7u4rzJXe5yL2cud/FdfLekTiDOl1NDia3hTWrWDLOA2wTclC2s26JCk6C0FUNrS5eNFhK6toEIVqUdBYlujK5UUxFi2qpKWzVpmrZ0l5SNbb/i0PcfeB%2bd3s/neV7d532eCNSjrMLhOOSCNK6JokgTMus3O2xFKFeZmZO3NtsSwvq2hr%2b2uX1msXfoyMAjz0z%2b6sT3XzVKKa1651spsUz84os/Rq/5s13zGhPj8ZAeTSxEoMzBKZ1jGMhHFY5ndSWq4LiqcvW45qPiCRCEIXclkeF2FNcjpDdzrMldXgFbv74l0Ni1peTApVdeH35i5NE9%2b1/oTEvrbkiVCaXRpT5J1mehmixhFQwnRxOKFGRJIalR4oTCoRgHk1GRAlCUNT8%2b5WcgJBlCKK5STHZEqjPREjKyz2QRrY9tqG0vC7RvuPj8wOjlycvnD/7wdFtaW1vqbD0NpLcnRO98JMYhKKayCgR6HHggh6jBGI1yUBEVkYNiYv6jmEfAVVQVKYQREL8TwZmCYtJd13soz1EcGLT0zWxrvDhzZOiNNw4%2b/s3RK%2bd7GtLaGlJolGog/fTzhCrJGsBQhoeQFT%2beoiAEHBkiMUWJKVAPaVBJ3o7bnTHBL8SDqErRVrcAXVaHL7cspzyn/7WxgszB8f6artnxF38xPP6NV0fPP7c7La25ufq/XSru03p2%2bWHztQmlguRJVOKNoiFjIoMClkXlGB6NSAYd8SGc599ecPs0Bgi44HQ6WFDltRY5bDnGpb6w7P0P8201uwLhmfGzQ78cOXPm2OGrJy%2bdaG54y6j6e0Dv28zXWP%2b8cUuMiBTtB7jKMJxBpDDEVThVXtGhJipQmxcJj4cz2ApwDM3TLtnDEKV5HiHTYd/QV762cdtj/fsWT507cvHne/e%2b8/rhZ49/p7Pz/2gzFfbIhpL%2bIDEX4XnM4SH8qkoG9RCHAArnKVLFcV0zTgQOQskYTpBBnKQxhw9H65sKBXZzbkFf15piy5WWksEPTx1688WRV/reOfns7j0nGnb8D9AUGU4b69bHGksBkjGw0AiIhVhaFnHcECYqGYlIQFH4mKJimCqKRuWrhNclVNlQoSSrcmtGXlOrtbW2a3pm1/TAgZljOxxP9HQurQzlpKXcwnuZ%2bT8w6EciAUoLDM5RMsRxhkGdpCFTIhRr9KsYT2OUnIgkE3Q9bYV1Lkpo6kLkqsLCDeX9ZzPKp4%2bc%2b%2b50/57tZ2tP9xztrm6%2bBzSlpujLRoo34kDWEA/AWYrgggSCkYSqQjYR5aAuQk0mMQzj%2bDmYlW018SYr4%2bkIuOo2bmvKTx8ZMu8a612cvbD10cnh7U8e3l29894XTbHN/HKj%2buxTCdAOBKVYHOJMBUkA3qj6CQ1IuJyc0nHV4xTkoODKr/IiPGMvNpvSSxvTSwNdGWNbBwcHz7154dTl9xqeqdvRc28ObxWM%2b5cvfdcVgHpcfqPFByXCEKQSFRKjBkMBVovoQZkXYIwmBZdbYiS7xV2Unm7OyS5sz364drar98xs%2bMp7PW0/Sb/YsNTd/SXQ1YlCWHEivrMQ8iAkMGQ0BzjJD3UWkk6C5SSO8AEo0C4fac%2btWufylDRabebcmtKN7TWbOjY90hee7Atcbv7eyf3Hl9KOLq24eB9dtXCJFUV151oU0qqfAFQQYJIeY1WMZ0mK4wEN0HX2eoRALF7amW/KrGt9qch2qLyxI6/j7IF3Lzz%2b6/2jV3/2n/HL1Y3rWPFNvv63xMSEHOOArHohawjTCl9Ij4RohFIol%2bBHbQWVZsZjLvW11D2UsWbWtuml9qeGF6/8dPTqnh903p3BW/0AlBVFfet3kYmFuMaRBIfrU6S10o9HJ0K0C3%2bb9VQgpnVWL2LduJEuLbeXWNa0bO4IDw3sff7p4y93d%2b5YeQb6YCJlVv70/OPWb5NGy9dDHjAfMnQICOo6QOSbinWdw1pgdbe0uGKZW8LmKkvHQCAQ%2bPHAmfFvTf5o99LS9upjYw8spOdLXv3LjfkpQaFYeW6BYkg/l1i%2bCkBnVqXNbrfmNpqo9LL8Ta226XMHBnu3hF/uGb60PG/zgGOP7tLVXz9PxETAxzknGozeTIoiJXP1lU4vClCrpc/dWO7v3xXe11Lz/rTpdM8LO58bs30FQVJ3z8Cffn9TkXSFnZvTOSirmAJ8KoZj4UJQ5l3f6suaqamZefrJktqD317Pf2XRXP8G%2b4c71%2bciMimIU6yDVWKsi7GNZblEc0FZdlnh4vrwvlx//M/3vc39A73bYD%2b7/dFvbi7EwVqfwrDpRZjL7vHzn7DK31O0wb8EGAAcgxZgpRR4%2bAAAAABJRU5ErkJggg=='/%3e%3c/svg%3e";

    var img$9 = "data:image/svg+xml,%3csvg viewBox='0 0 168 168' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e %3cimage width='168' height='168' xlink:href='data:image/png%3bcharset=utf-8%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAKgAAACoCAMAAABDlVWGAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8%2bIDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkwRkI1NDg2Q0VERTExRTk5NkRFRTk1N0JDMEMyREI0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkwRkI1NDg3Q0VERTExRTk5NkRFRTk1N0JDMEMyREI0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTBGQjU0ODRDRURFMTFFOTk2REVFOTU3QkMwQzJEQjQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTBGQjU0ODVDRURFMTFFOTk2REVFOTU3QkMwQzJEQjQiLz4gPC9yZGY6RGVzY3JpcHRpb24%2bIDwvcmRmOlJERj4gPC94OnhtcG1ldGE%2bIDw/eHBhY2tldCBlbmQ9InIiPz6RZmlaAAADAFBMVEUBAQEDAwMEBAQCAgIGBgYHBwcJCQkKCgoFBQUICAgSEhIeHh6ZmZmHh4ckJCSkpKR0dHSYmJgODg61tbWRkZGgoKCioqKenp6np6dOTk4oKCiysrIPDw%2bPj49ubm68vLxXV1eTk5MQEBCFhYWhoaFzc3Obm5ucnJyxsbGWlpajo6N3d3d8fHxlZWWDg4M2NjadnZ0UFBQMDAySkpIVFRWAgICGhoZ1dXUlJSUNDQ2tra0iIiKQkJCqqqoLCwuzs7M1NTUxMTEZGRkYGBgTExOoqKipqamampqIiIh%2bfn7GxsYRERGfn5/////%2b/v4nJyccHByOjo62traVlZWMjIx/f396enpxcXFYWFhhYWGlpaUXFxfAwMC7u7vKysqJiYmKiop7e3twcHCsrKxiYmIWFhYfHx9ycnK4uLhvb28bGxtERERGRkY0NDQ/Pz8pKSkqKirBwcGurq6EhISCgoJ2dnbExMRbW1uLi4tAQEBCQkI8PDzHx8csLCwrKysjIyMtLS0aGhrDw8OmpqawsLA5OTnJycmUlJQdHR1kZGRFRUXT09MwMDAgICDCwsKrq6v9/f2NjY25ublqampeXl46Ojo7OztUVFQzMzOXl5eBgYG/v78uLi6vr69JSUl9fX0mJiZPT09gYGBra2t4eHhfX1%2b9vb26urq%2bvr63t7fMzMwhISFmZmZHR0c4ODg%2bPj5nZ2e0tLRBQUFdXV1ISEhNTU1VVVU3Nzc9PT1oaGhjY2NpaWnLy8vOzs5TU1NLS0tKSkp5eXlsbGxcXFxDQ0NZWVkyMjLV1dVRUVHIyMja2tptbW1WVlZaWlpMTEzx8fHQ0NDl5eXR0dFSUlLk5OQvLy/09PTPz8/W1tbFxcVQUFD39/f4%2bPjn5%2bf8/PzS0tLZ2dnU1NTg4ODNzc3f39/d3d3i4uLz8/Pw8PD19fXY2Nj6%2bvre3t77%2b/vs7Ozu7u7v7%2b/y8vL5%2bfnX19fj4%2bPp6enb29vo6Ojt7e3m5ubr6%2bv29vbc3Nzh4eEAAAD////HDWmJAAABAHRSTlP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AU/cHJQAAGHRJREFUeNrMnXN4ZNnWxs8pM8WgUrFt27Zt27Zt2%2boYbdvT1vRMj81rnvmq0jPz3XtHPd2dnFpJpf7L%2bT0b66y991rvBr57PfZBiJJD4oWmAb5gQxwA4AyD%2bQZS8v0dKG3vvaYHAK/8Hx6UyMueMkBCPzEAAFFIFN5Swjdo6VOYQd8IJR/kg37BAABAINAADqUlpVkYX5/5MVyg72jEpEO/YhxQJOeDQqEQCLqW8GlV5vyf9h/0Kk0iGPotAzgfFBoNAkg8ztk4iS/fuyvv3n6CvmF6lAi9kHF6f/cLBAC8Dp%2b7ZbJqBPvWp/sE2kwuhl7QEEhOq6KQSACJxkEAXSc2tnYzv775g7f2ATQk6gD0wsZpTxSEhLhDlTOxADyBsHb4fP%2b4ovmze3sMmqBKgF7SON4KRGKtM1osU5b9pc3f/GgPQcVV6RD08qAAiADNrFsNWtIkZAsEHn/10R6BHo%2bKhaBXAgVwENJM06p1onircYgk2vbp7T0Ava0nDEGvCgpBOLSZs1VchfrkMZVcR5ewLz9%2b3aBCKa8OyTWOn8IQgol8yf1T1OlxjYIP//FaQZvFsNBrAQURHHelJcWXIdwU2B1/JHxQjfHHr14fKH/tq/U6tx13QRE4FA6JwIp4HOCzTLusr6pKk8ymVH3ymkA/lMVArwoKPgfleFMcBOGlrIOJE03b524Ekh2Z2rSqz5%2b%2bDlCvMei1GSdM2XX%2bGMMkvtra1JP%2bYvo0%2byANpbfefHVQST7otYJyOQGQLlV5cY24kmhzkv%2bYw2I45eEfXhH0LX0Qeq2gzw2FlSqPHdg8xLq/Qj6Wlh3CLy/z4MtXAX2YD0F7AYpGOxM0jd0rkp/MxjhsKT8W9Gyv/6vry4OKp0B7AwpAWugDB2z40lZOBSQOOUR4KzFI1Y/cXhbUKBXaK1AATaj0KC13b0rLnz1LTXSRdGgX0gh1fTlQAXdor0DxSFCEIJJkXNEydlgi0d/Ph2wn571RM%2bz6MqDyRGjPQBEAiJQiEIIbMiyTWQH5sr5kX6N2UaHFhKe/H5RUCe2dcQYpEmem6dGQkV6x0i9xNlyyPzLaTimLzej4vaDye8nJfeeDSDTdxjqjtMyiMDkw15Fsby/pQpEJEX/794EKEPeUk/MmBSEQrxUrnF56sTdtJ0ZNsmDoSIHpKKPm0du/B9TIHdpj47z6kSiMiDVxorTlfFqAdna8Z%2bKQvLlMJmO448VBxVOh/TAQhTXkc3cXPr8ioSZ2VC2bHC7vpVC38djtRUEfpuxDe34/qeL4DMpLV1MaA1Ui/ckF4VmC5mHsP7m%2bGOhb%2bXvelpwYavcbjyLwjZQZDNy8cS6H2ihZLSjHL%2bh1gvH3jhcC1d/7Tt%2bNo0EETsQZ8igtEz7M2pbw9/dTrK938KG0iy8sur0IqCQI7Zuh8Jogsck4eaRIpcdfv75AT0BXwU5hNDrhy98G9eLbP04IgdZEaxVa1o7wTccs64kxh5gzNEboRljYTwOU/wX9cGwfOSEUhELxpaYnp2zenNoREw2X8xRwkVEwqrt64p7bb4DK7icnxBllYJymdS9rpqisp0fXxERSY1DUZWMxtK7rm18H5cfsKygCwuMAkXT38zH9N7ckqDLdBRQjyaCNaJnovKW3fw20uXZfOSEcp%2bvRhPKyi9s7l5uOyZ6Rl2aa89uSGFdCFBLec/sVUDFonw1A4mzQSANLVtOFnkDHbsd6UUF7U5LMla7hhdCOXwYVwu4zJ5oDirPBEErXJBIlOlUuiA3VywwyTBWNGDJV85c6fgn0dgq074bCQWibUs3aMdG4SPsi1XBHgWqKbXsQI4j9xfG/u/4CqN6%2bYwIcB4XAoTIqLKb6ek9RVaa6HUQjhEj8CnZe9U7Hl978edDjwvvfoAiOJ0UDxIyW4gmVmyfFAqS11XIkFb0Fq02NFBaqLrn%2bLGgUBAMoAkJgsIZJFw1YrCeztdJqDmpnshULSEommd5ZV5rf%2bDlQ8VgIFgMxWECzpfjg%2bbHAu7lTvjn6BXKeNNHOPHbXYlWJ28%2bAqsLRoLvhMwRIJQ2M9G9uXusXG4r0E2U6sGmJRiW20V233vgpaAIdjtbkxqYIlIizdUVt0ZO0wsRI3RyVCL/1LLtp/g1t2%2bjH73b8BBSOBoUAFIgEcDrEJAO%2bAxY7O%2boBsir1ZBOVm%2bH88iRvRRnFGqd7/wsaQoBlgAJoTu9jnK3jrOJWy1aaDo7nRhV0OoZTmEw5GVvbavvomo7/AY2CZyYBCCRnQaIlEkvMsJhY3dzuWZ5S0RBQHCQViJqQhIyiFbo%2b%2bW/Q5gOwcCIA7m45CNKdPYyNJyzOp5xen41SpBSE28nx0xQFXQQ0TB%2b7/hcoGSbXxA1LOLRmhtaxsRZ9xbUD1wOmpZWMBLuibZmi3vYCJDm7N/8T9I1iCC7j7pUjsVhNKefizT7LjLF8P33pDXMFBSUHH0%2bSgKCc/Xuu/wFqCh8nyN0ywWKdbQiWfb29Fsk9DmKzDnYCIUY0e1EaScPFROk/QY/CxQlwQUEUGktISjIoLavttUjJnREjkwSPRysJSMrTZATlFR/8P%2bhVIkycOAT3OAdEaBmKWFt5GPCpb6b2HtUd11Wzfz8oSKNTW5qfKaeU4PojKA22BuUePIEIBF3ThhBr1VpqeTij94msr8%2b4WpgS01vewVuRVu9CefojqATcoBgRgo21VZJxWWqFetOxRF3P7Jrqeg2arrYcTU6g/W8/gL4TDDcoWkuEYG1llTQxUquufm5ZjyQalGBrV%2b9rXy3Pr9H%2bzPV7UA0IblAzMzNDTeskD/eKtUP3x3YaI5j2pjIa2kySoKI3k9L1A2gM7KCGZlgtghUxziBdfW2Tdf78srSknKmgfZCkiaKit2nI0%2begb6TDDorFY0VsKluJxhMtm6zLOzssfU/vBYXqaEUfkqC8acgHrrugoRDsoCgEVsrGqpXIl95SvJK8vZUv5pg9miUU7WLiqSEpLx7WsQtKhh8UCWDoUsGtcRPCF9NYp1liVP2ccLusajtzfk%2bKosAd7ik5B/QgxAOGF7EJjivnK13tK9wOiPTxF9OTZMyz7cU1JDO9nC59wwV9wAc/JhLASjlrVjZMtFgMpK4cparM%2bEc5Co2yo7soWce9Qpduu3JAS3igPREAVkSKYJVkMGKp3nuzseeI3wx1Rru6Pdq0S2G0LvP4O24cUHle6HkITZfSTCLyVagXJrMC7i6fGeoc0lUyFbAdVqC8n3DixOccUFkeAXXWbGjNUE87XHTz8g0xv3DvcJVBO1OvrKq2UP6q0I85oKd4AhQjwh2jlrXF6kX9d69P%2b3V2amfneCuEZmUutLG7bP/KATXghTGKfD6ZLFMtDiWfPHi3O1JNb1AtMlLO3Euh/cTDYYE73wEfICEemfU6HnGlI6mFhwslZpV9/dW0laX9dWuy2IsLdSdszV2BELghuXmlAIi1IRDKDYh8tauHTp08Oq2iMhSlkiOrEsEWFzfqeqYQ9jagBD8owAFFaTlLifSt7GRYqDednL3mmCsdGc9xUZGkxUWGuNNcnRvgwAOgAAqDMbPRMUzfkRBOO5xyN1BMNtDXIT6eqhzla2u7MZxX5/QlkMgLoACExtDj7pdvn05mpYyNrasGSsjqUfUdc2SpoopCw0t5xx8AF%2bCGfL6zo2VIcN%2b%2brL567uR6Dyvq3DnV%2bDNUFVHRSH0VbZn5Onbz10ATL4BiEGiMtZX7FLF0uymHqkqdPSrrrzzj62niOz7jbWfeZffsNjAAJ%2bgPeaVoBA5fRihrKk8bUPc/FtV97ki82Lifn660n56vSU1NjVHdFwCssdOPeaUYLUwL9nJ5hoTFpupW/BbrSNRZXX//SD%2bqJ1mtJsvcvOo2EAzxgCFQaBF6XJ/6RdbNxqJjs6qz07my4%2bNRjsrkbFE5xepM8/l7gCGPvOq10O4twv2HrvfcVZ3NjemJj1f2pfqqefp482sItWVmfgTgeIETwAQjpCYaMg5vTgZIHM0fX48RUx73nVFx1BMlVVMooU6ZV39IO4fXUGhDrWAb4cLVlbG7W0cluqnKx5SlIx0dI31F7W1NhebCMh/xBigWpWWjY1zWmnz0%2boWeqfyeSL9l//EZ6Zxs6XoX22ijvIdOf%2bGNrkejpDBES53govXA6Zj8xkAx1W5ZfUfpM7pkWlCQTPViXdW/eGQyofBmxODYPlZaTLxsQKJYzJQYVXYoW9aXLOlCklRi5A3/hTfcE4DX8jCMLasYm8yXTTypr9Ydf61bLFLPz8fEhxnhwz4R9vg9eB0%2bJ8DD4VEYNIjBWLXqOKcGXCuMv5boeFDirGz3jNqZcTWXQSG5ubyq4bp/w/sKBZAADo1E4gkYhI3VgZGBzVOX81Wp2cnHpFX0j4hRpXUFB4OE7pwoyat7C%2bagBIkEEACE18EkxekQRyyLJ5/kK0%2btbzEjlPWpZ86o6QnICy3evuO0dOUTmMM87hY%2bAkIRzCpGiMEeZYduFsZQa6fDO32WVWcicvRMgpSi2%2b45tV0qeQpv4AxAuN2kfA8t6/IMYwPhixbbW4EjMvxT5NwzjpxpNEgJ2nD6TLzqakkHvEsRTmSPRwIYHWM6IWmiorSst%2b8yS7XPgV%2b1J9tBjRxBHhSU8XI6MRz2KMwN3sUdp0XxCGysjo6zVUODu8FI307TdszNLW1yQJSfioq0pxw/P6NqKSzs4S03eJfLAA6EEMHlIhgCgUhsODBicTpZYjImO8JXe1pU1EdPRqCafyNz6ZlTySU3eDcgAAhAo%2b4Lo9EEZx2rdIOW3rX8nutHXKbFJF3s5RQlg%2bQUFYRGb7U5vdvsBu%2bWDpKzCMFYbmJ1NAk6Hu7CtWkr1wOjiqRpqlvh/PU0WrSJpEI040qC0zsfwbxJhkCgICBNGDDUIlgZGwuvnr%2b8o6q2PZQVkTMryRQwshMdNDJSSPBqvvotzNuOAIBGYoqSECLWsR7lxumpRaym7iONVMcI%2b3Peknbz/Nrydowa0%2bF3Ln0J80YuwFkoG1oJ0zFE50pj4ZaB4rWVeJYedZ3qRxLyobCVTPiznBh2S7dudcC8NQ4AOBQAGUwAlSJJHgbqa6sWk2cnBXO6rzmYkiKC5O1pQeaZWaPNYZfcYD5sANAQGsBqpnkQrcsbDlgk96pPBl7oVM4/KxNO9haq13ap7hpVCn3f6c%2buMB/fgBCKswwBMkYImsIZ7iMXe9VZ16aVxaaYFKa2Ik3QSE4gxJZyJTP0KdwHYhz3hAZAfMYaocVd2LLCYi35/LpjvH%2b4NCceIXcO1igJDLOjM4//xQ3uI8Zdl48CRAxSC3UM%2bootJk8dzs2NzMnxUc72Ca%2bXnHMyX6w2n7vybgfsh7ZICE/XApAG/QbWh9QPGuxIBBzx1z7ZSNIdktPu1MgsyfMSSghxuucK9zE4AgGZ2WhKoVov8MW5TwTevzE9fVRXcNOPmZ1N0fYxypy/1Caed%2bnKH2BPLOCQ4jCxcXgzy2Ki9U7Aaq7/Sapfp7JArjRp0MRWIWzulnhCXnOVG%2bypGpwBisBJEUUAM4uBiqMnk5W7AxyXfeR8lSkMplyVwvGSYS9GXt5VV9iTX3AQAm%2bG1bHWkior7Fu7fizmAnXmDJPZLbnAEGyfG61qXphbClv6HP50Io6DwhlipaySWjLck4sCGi%2bvNZ7lp0Z4CtXwB2W1Cy00z7MflTwvF4QtQQsAQc5UKkcDWpX4OGHDwrHiybP6OxIX1Gj6J2kbGjVZQbZqTgxGVdj7f3aDNeVtF5R%2b0RigI8wsiKUtFy1yA9Oko6YcNOTXCxYLvDa6FhmXnGqcTlz5J7xJhNwDOwSAwWNBvE668MWy3qKDp1eHxtfjdUdlFZXY4uahAmFhIfNt7151gzctkwsKAhDiPhHEW6eqJ6sHWE6q6QZK9JvYSQp1eiksMBSWFsSPh5341g3ORNfnAgsghEPHbYJWh2wOX7A8N9lI7Tm0fIwtak8RzKLNzd9ZOjEf8qiqA87U4R%2br7CEIZdW6LgxaFG0TT8uprrDkmZ7t2fJKXu2MhKWS5gWnSz%2bUNcGTjP0DKBbC0lF9uXiRQvVAqUO29imNamclHtsbaSjUeYXW5S3cufd%2bB6zp7T8qLOAhwIovHUw/m9rXOxkoGJOr1yjhOz%2b/8Khd41JeHfvdP%2bW5wlwwwJ1IIA6C0MTWSkAq7brOaTnlhvZ1lXgBJkvciXJrMC/kM7vHH2Z9C3cJBvg8ZRjCexh6EERStpyv%2b%2bvejSQrz4b7%2bNQtPTP3Krm1IP7BQydXuItanoOiUFr3WzWDRw6ntPZNB5I7/fyWxxkubWyNj/IWq2SuftT2JuxlQpyehxBoHCS8jTfTKb9eOHnIP1/edln/iGLC3Ltk7Y%2bHFczZ78191gF34RXArbtBoNGIJ8ZAZXlpYXFK4nrAjK/2NaZ3dVaCTMm/359ru1WS0AF7KdvuORwCjcWXl9GNjVdz1dM716dm/RNkr%2bV2CVHC/nXnRNidZ15fdcBeHPg9qJkh7kBpnPHsWcvrR2ZnzkjLSU4xs8zNzT8zHb31cOmKG%2bzlls/zCRB4DHC/7MCAZeqTpsb%2bnC1ZF/34RUEv8bbQNjuXuhOhn3bAXsAKQhjEbgkj9nxDZYtBUUp/QMz6ER%2b9/m6BUfF5xlw7uyuPcdUV/pJgLiXnR4vjRNewFRV35Q4X9h/RtY24IRRSkyU0atceOt9W9zYPFFkD3F8QIrRik1bwtSd9j7W25Pp6n9EdXWw3smOECijVlWR%2b%2biZPlK2juftOUmjNuAGi8EpnabE569TctUhx23AjhfkldkLbQrMrbwgBYLgyWhgzS8s49KpEzEWmuMdpcUf%2bIO2CURn%2bhK6STPEOnpBWALmCn3QzsFKYTnDP3ioak6eyhKSlaRRPkp0gxbQmZNjtKU%2bIVSA57gkwxGI8rDULA5/0MC0m2GpqgwX6nvwyQTXsOa%2bue5/zivwHmuOcsATrypSxJ6tRys7xBeTOuRsmNSQBWyWXubxnT3lDUAXgSgBgUR5xOvjTEX0eysorU4OiJkf0RxVJFLYL27zOlTckarjqrlgQC0g1TFjpzpYF1Gu7N2qM2zP1ZYSq5QQp4uZuf%2bAJ0Z9dqS8E6GxjFVdaHHD%2blJJuUlH1UD1TVpRfSdSlvUTomw6ekFHirpWQEICKnTCoPBCYeNRk%2beL1aD2/CJXpbBq7wLyk5oorTwhT7S7okSiMljWxITaYpedwdiBKRjdiSyxCMVpGkDTK8Uw8IfX1fOMBj0E7CzccKC2vYC3fkA44KOCv5inqR1IiMRhhv0vqa8/E055zgjZmgE3tRGpR2uELqgGhhwpNfHyoikGibC%2bjjd8pnrZHcnTfc4LGzqCNunHv4fPKZy8fE%2bw%2bR7If1N24QhkVzHTjDYE/zpIOza3%2b18K4t8QJHzoocVesRz%2b3s1PUk7aRsMEW%2bBXRxP2VTARRZhAeBdKtRAjGa/HI5Rvp2YHTBQUUz3pTjgc1ufM574hQgii0SGx6GoBSb7PBO0ZKbyW65PqGe1NIdtGUzx7wjqwnyHH1a6chBEakaOrAdPo1lRsBQ55DKspCChqUv33LO0KpKO4f7EgrYNWa2qg7qROj312USDMhyZia0j55g4ekZ7lhEwoy1DFeO1TRePCQ3zl56jEmWVDGVGDx6T95ScwXAaEwIMG6fNsDWC7eOUc7OavtmVNt6xIu/puyw/srj8xdJWuKaI1I0DOWlftv5JjoOVDtg4Siv/ltzen9EZzm5jdxlh8gHofEJgXr3IxdUzso1eOt5%2bmjbUL2dnrza96R8ObSIhAoJKGyIaNJvVeie%2bywnrcgzXZekPLx1y/CsD%2bi6FwpdADtbIjHEvsrLCtXt2/05ESRI2YiBk0//OTPPCQzzx2dECKYjiKkXrao8GhUnnQwIWuT/Qqq/vqilzfsj3A/d9cWAukoKffTlmX3exPlpPWmIu3ljf7x0dffvW7QV7oKAQlw90VE6A3Fp1IH%2bE7n64pq5JwJedz85xd/%2bv5cLgEAGAw2tvyAcV%2bM%2bmQyZTwxnJ9W9dYXvHddB4AytEHQLTKk%2bI60VnjKSK%2bSvnr3XZ64AAWJeL422r2oh5vWhjNL16EfDNRmYfqV9HSHH/2RN66Uea41xoXF4xFoAIlAJSmX6Zjpkw72DbmMK/zx9u9/6h5d0sPNCYbQZlwBPwgrYlxufa5Js%2bUUKy3mHSPFhQf7dpvQdy9w7dHuywjEYeiaGKwNX7IwVuXGKomtwfjiJR%2b4NxdJAQAOjdvVmAToAD51xbi0gXUns2r4i5d/2t5czcXdBUMDAMJCDAti3eMjC9Ud596H7Wqu7%2b0XLjvjhEqx6b1FWM2xa44uxx%2b88mNeHfS5/ff1cRh6w/20yUYVk6DXdn3c/wkwAKaGVrsds44EAAAAAElFTkSuQmCC'/%3e%3c/svg%3e";

    var img$8 = "data:image/svg+xml,%3csvg viewBox='0 0 179 179' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e %3cimage width='179' height='179' xlink:href='data:image/png%3bcharset=utf-8%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAALMAAACzCAMAAAD1yt3BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8%2bIDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI4MDUyRDQ2Q0VERjExRTlBRDM2OTA3MkFGQzlBMkY0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjI4MDUyRDQ3Q0VERjExRTlBRDM2OTA3MkFGQzlBMkY0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjgwNTJENDRDRURGMTFFOUFEMzY5MDcyQUZDOUEyRjQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjgwNTJENDVDRURGMTFFOUFEMzY5MDcyQUZDOUEyRjQiLz4gPC9yZGY6RGVzY3JpcHRpb24%2bIDwvcmRmOlJERj4gPC94OnhtcG1ldGE%2bIDw/eHBhY2tldCBlbmQ9InIiPz51OlaOAAADAFBMVEUBAQGZmZmYmJiXl5efn5%2bnp6eoqKienp6WlpahoaGtra0EBASampqlpaWpqakDAwOvr6%2bwsLCioqKSkpK1tbWurq6RkZGgoKCbm5ujo6OMjIyNjY1/f3%2b2tracnJydnZ2xsbGIiIiVlZWsrKympqa0tLSqqqqEhISzs7OPj4%2bHh4eQkJCTk5OCgoKUlJSOjo5zc3ODg4OKiop6enq6urpycnJ0dHR1dXWJiYmGhoZ5eXmkpKS3t7e5ubmBgYGLi4t8fHx9fX12dna8vLwHBweFhYVvb29%2bfn6AgIAFBQW9vb13d3dISEirq6t4eHhwcHC7u7txcXFubm4ICAh7e3ttbW0%2bPj4JCQkGBga4uLhsbGyysrK/v7/BwcFqamrCwsJJSUlra2tRUVE3NzdpaWk/Pz9lZWVnZ2dmZmYKCgpERERZWVktLS3AwMAaGhpoaGhMTExNTU3Dw8NVVVULCwu%2bvr4dHR1aWlopKSleXl5TU1PExMRkZGRPT09gYGBXV1cYGBgmJiZHR0dGRkZiYmJbW1tWVlYMDAxKSkphYWFfX18WFhZLS0sgICBjY2NdXV0yMjIPDw9DQ0MqKioRERFOTk5cXFxFRUUODg5AQEDHx8dSUlLGxsZUVFQ2NjYUFBQiIiI7OzvIyMhYWFgNDQ0SEhI1NTVCQkJQUFAkJCQTExNBQUE9PT06OjowMDA4ODjFxcUQEBA5OTnMzMwuLi4CAgIfHx/Ly8sVFRUbGxsXFxcnJycoKCjQ0NAlJSUsLCwvLy/Kyso8PDwxMTE0NDQjIyMzMzMhISEZGRnOzs7%2b/v7///8rKyvJyckcHBweHh7R0dHS0tLNzc3W1tbT09P9/f3Y2NjPz8/e3t7d3d37%2b/va2trV1dXU1NTX19fw8PD4%2bPjz8/Pj4%2bP8/Pzl5eX09PTm5ubt7e3v7%2b/5%2bfni4uL6%2bvrc3Nzk5OT39/fx8fHb29vp6enZ2dny8vL29vbh4eHf39/q6urn5%2bfo6Ojr6%2bv19fXs7Ozu7u4AAAD////YD5ulAAABAHRSTlP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AU/cHJQAASxBJREFUeNrMvHVcnGmW/k25UFUpd3d3h1KoguDu7u7uHiAECIQkhLi7d9w96aTT7j3uvrM768vvfdI7Pbs7MzvbZHt33xs%2bfPgLvhzOfc51Pc%2b575D/9w2u7%2b3AsWKnZ2oKtia3rrBSoAwiP%2baLF5/87m///tff5K8J%2bWZ%2bzLfP8mxNXaGrW45tvFS6917BWNyBBKgSRGPEoxlmPPIzgPtvP/7Br/5/w/wDPnvp0mro6mrk6uripZAOm35ysHU5PQdn4prj6SaaC88g4MT4iLvf%2btHffe97v/6/Z97J7Lm6%2bmoBzFmrkVmhh/smemIPj7AUTIOWxEXwfJKzaBiIzpDiiDQsHFf4k0//6kf/l8ztUeVvfAmctfrGutWQN0KqLz3pSz6dsavHao3y%2beysMCsyXq2CQIQ0uJgBpxDwcDEOH/Gtv/n%2bP/zfMF9QLqx%2btda9AcS4el3b9a7d0yNdGZ2NVcmNs7F6utILjVcJMUIwlEYH8VAoIhYeHx%2bPJ8f87oPv/vh/m/nb2K3HV/9thazLWt2wJXLjW5uaay7VjA3G9etzgv6t0YJkFU9FhZJIOhZJKAQjoFAinCAXEXGcpB3/8uZPfvq/yPyh8eS/4YaEAMkcGhl56NqhY3saJo5c2ZW8b3RlZTZnoNHq9npUdjtLy/IIMWotTI7kIqBhIoqIgc7Fy1/83Zv/9Ov/JebLpq5/H%2bJXzJmrq8cb2o7vvb6x7sSdewunSmq3DU63%2bmVsU5TJz/bodAotRKvl0jBIJIYLwvCkYpyEQ0BTLv/6zZ/8LzDftV5aXf1j5vWRq%2beupW68%2bnhvQ92%2bU/cm45qbdw2Ol%2bWMTwdzip1sg8KjNCpUWhqXi0DREGFoNFoEh%2bPDY/K%2b9aM3n/3j/zDz%2b6bHq3%2b0AOiQ0NTI6u1b3np5a/eN24dPnlgY7KxtPtDdtDTT3zjbZ7XKdB6Z0iMzqIVgsFbIhSLCJDHZuZz6nU9v3rz8mzf/6Sf/g8w/sl9cXf1T5nXrUkNTj1%2b51nDn%2baXhE6WPTu2bLJlZKjkw0HzgQF9jenKiNzlKJmDaHTotSaEChYXxpHAchYKT8vf3fvHb%2bohffOeDb/9PMTNq/pT3y6IRmrqubctQ1%2bJbty%2beGj1/b/nEUtzIWNVYcvfs7NYCf7LekqKxR0cLBIbo6ABLRUUi1GoIVAyHiUV8146bF%2b6%2b896zv/ofYd5REfonMV73JXNoaMievXtudbx8dGr53rYjZx4UxVVaKgsSogN6fXGOzR/r1adFJTjtJCbbYGQ5og1MFkmtItEZRASWX3/h/c8/fJr742e/%2b8aZf6h4/qdp8RXz%2buqObR17Nz06VXqq9OjU1FSZbWuZPtGWWMAOQGTuQHJUtDWWHR1gGmWOgMOjU0ap7A6HQ8kSYnAifPuOF08L34258OmPfvXNMvdu/eOsAD6ygHa9LiRyQ3Xotc23XtZd3Hd48VTNgQETy9jXX2v1F5QlplVZlUikU1%2bs97oNmiiv0sH2MKkOTUAWsCtlSp1KwUWhYwrf3ZH/UUv%2bd/76e98kM7LuT0P8ZSYDciMyNXVd5rFLe%2b/v63p0pmQpbrSn2HI%2bPXZy35k4Izu2IDpM7GlsdDoM0RpDVIDpkKV5AwIBU0FVKVh2u50JhhIpZtfdyxfe3vnOsx98Y8yfpYf8EXDWq0Cvrg%2bNXL/atmF9ZOSGuk1nDo8cPlw6Wfr88OGiwZHk4vI7D2ZMjeroKIyWyQyoqNE2NgnBlBnYDo9KKGBRVSy7QKly2NV0KDaX0t5b2GKWm3/613/1zTCHF/2ZTA4NDQXkZ%2bgbkdeGqtu27364eWRXxv2Li/OLxxbvNG2bmSmprCiWWQ94vXqB3YDQIpE6DVuHEno1DiIOAVYLkSSmkkkSGjweCJxIIPPl5rwINDj3x5/%2b7JtgBt34c8hATqxbXbe5uq2hoXp95KblusMZHQ2P759aKr9Rrm%2beHDnauHXOm%2bzxJzh9RqOQpRBCdG62Q%2bcQeLA4okIIFrKYChULpAaz1HB4Lp%2bcx5HWP82uLzz77Cf/bebvsttW/%2bzKXL8aeWrv5nVZqaEh1alP4ur2bNp06/b5U6Xn7y9MFwxMTS/VTI6njNkUCiZToCMJSTpBtNenM2ioPLGDhFTZVTyhho6jIakYAh%2beFCGXSDjtb19uyf77N3/632P%2buOzPEwMCY7Xt9oMNwLeR1aHVkUN1D7d07N17/eLpO/OnTjZXtjbNTBwdmZuuCmqYRqPSo0CChUyNj82SGZQQjICLgYARRISQDlNTFVQ0Lp6SZJYSzBw45Yt82N/%2b%2bCf/Heang38eORX4yDy4EBqymhqyGhkCZPTG48cfXrpx8fTu86fiyotGWlc69VXNtQcGxsYK0gJuZYAFUQeiNCoFWCigyhREJJKGIIHQcCJLBULl4inSXAk6PE/iEsnN5p0f//zvXp%2b5MO7PI79yq%2bsyz90GCvT6rNTq7YfObdly6EnHy2M3Huw7uXDkxGj5zFJtd%2btgbXdj5dRYoltmkGFASBaE6tNAQDKZgEXCEGkQCBch9CioCmK4HEzJleLDk%2brDwyUUkbzl7Z//8%2bsymzP%2bE2SgOAObcOPBdb9n3rJnz/GNDQ1vHbt1%2blT5iYyT5U1LR2b6J2trxysKGqtSollsAx2koPI8SK0aitAS8yFEHJbB4OqEGCyPBZKKudm5WAk5nkx%2b5x0RmHA27%2bab3349Zs6Z1f98ha5PHQ5dv7pu/frIzIObtxw6PvRWQ8fzxTvny0%2beLC8vqW3qmaqdqG3tHJudqkj0KTQ6MMRDQmpZLDAELMlDapEoKRZEZfEoWCGKwgDRpXicnIPlt7zzLgclLUza/%2bxvXoeZs/s/J856lR8vz20PAZizUtu2bz%2b0Z%2bjq1U2350%2bXZuzLiCtaKTna3NnZPzc1UFXVmJJuoUECAQQRgyE5gL6HhEpRQh0IyyUhZSykUMiQ8pBIOo2Bl8PDiWc/iSCbQeGXXc8%2bWDuz%2bS9FeV1o6LrV1IMbQkKzsl4xb3ny1pOrl/Z2zdc9undvebK//0jT0shSa%2b1sVUpZusmarNG5TUakmg6WQZAYDJhOg0KQUBSdx1MzBSqiCAaT0kkoGCNexE86my8iinjZL1w//3StzIUZq39phYamAqIudN36rMjIzA2bAYvScGm46/nijdP3ypdHZ%2bJGmjpLmrsHB7vTKxoTrFZTmgwkZJHiQRoES0GnI7VArWMgkHQeCERnoPEiCg6GxcKwNKicjzfz4eFkaPxlyj9/f23MT%2bP%2bMnIIsA0jgVYIaI1Xe3DztScNm24s1i0u3tm3sHxkZqZ/29GVprmt3dPB4sRoUxTbb3pVoKkkO4aEBtlpGBoGwxAGBFS1wiPEUtBQKBwvwol5XByfbJbkmjntcDJO9N3vrIX548G/iAwAr1//JXtWZGomkBpb9lwZevl47607d%2b6cXzhx5OjE0rbmpaPdW1P6gslpAq/ba4jW6YDq4RYgEGawhknHoSAMFFPGZip0IDiKSgOj4AgaDCGnYNEthXipZGc7h8zgPPvh12f%2bbtnqf71e%2bcDQrNRXzIcOXQOy%2bfGxi6dPny5dPlLTv2umqXlidraiqiLRJLO73foom5utMURHBSgYLhfKRaJoQiEKJbSzSCSqggQGQYkYIRYfJiHDKPn5LikMd7k%2baQef8%2blPvzYze/VrM0dmVm84d/zc8Y1XH16/XQpAH65pXupfijta0jM%2bPl6QY/GbfCanMtoSG1Ab7CAdUcuDEiH0MDiDx0UgqAIHi6RSUFEMLA0JoWFRLgkhV5Lnise23OW055MvfPB1mUFtX4t53Tognb8M88ZrQxuvHrtx%2b8H90tIzNc1NM4NLJUtLnQMVfQUWa3LQkuCz6N06iJKJUOt0FGqaJorJZTCIUJ5WwDYohGoFSiyFY5QyFdIlR%2bPJZ7NhZk54O9l8of7m978ec/iNNYX54JYrQ291vHXp1q0bp0%2bfysg4sW2kaWlyJq55sHa2bKA42ZJYZrVV5URHsR0GLR2DwDP9aVNBr4yE4JEgWoFXg0SABCAoBukxCHhytCsJLRfhyGjXhTxzb17%2bt3/%2bdZg/K1r9mmF%2b9ZQus3rz8WtPrr116eH14a4HdYdPZSyX1xxd6umviWvqrzCNzxbHOgt8Wq8pyharZLEJeCU7ubGgLKe42C9QsXR0qJpFVes0GJBDqVY5FPjw/CS4FEYgkF0R5pinMeEt3/%2bbr8Gcvvo1wwxYldTU1OrNe4aeXLm66daN4cXDu0tL92Xcyyga7T9aUzM56A8eqMixONNoKltsYnTA6hSC5KiczhxnbHIw0eoMqJhgGBykjGJTSUIwhKU0qqTZERxYGBzOyeO05OEv7wi/XPjsv2ZGhnz9MK/PTE1tA5iHrl7atHf41o3798ozTp06s6%2bmqKm1uaZmpGSwtjKYk6IJS9Qznb6EoMOtQmsLglEBk81m8nqjBVqVimT3pmm8OigCDFI7dB6k1MXhvFvokuPM%2b10tn2TnFdZ/579i7q1b/drZ/BXztaGXlzouDV/vmt%2b9UHNq95nlmZJtS0fj%2bksmS7r7UoorY9lup68sJ9Gk1BgR0dNALdH4bPrYKJ/ToYnWyAxRaWwBgoFk6YwgLk1LjEgqTMrLw%2bOTIvZ/tqPwrOQnv/rLzD/c%2bjWR33hjXej69eurNxw8uPlKw5O3OoZvDF883bXvXkbNaPOuoxkn4uKW%2bnvixvuKc9Jj9XZZstWd4k7QUnWaYF%2bZxWKNcjudbLbNlqAkGaMFDgEoHg4FCQU8qVqH40QQcluS4iVJSRf%2bnm92oZ99%2bheZFatrYo5s27753JWGjrf27l2s65ovPbXvVMaRuObmycmlpZVd/RMFjZbidJNX6TYEmAKb1YY0sp36nMbKgSq9KTbW67PYvHYj2xuw23lyCRbMAqPiYUQ4ISIvPImc6%2bLk9n684ylfsvODv8S84/lamLOyqjdsPgco547rdx7eur73Ufnhiw/ulcfFHWleOdp0oLPTrw/mJCd4o93R6Rh3AjtFaDelpFjSx8anCiw2vyWYrNf7BAZngjdHRyHA44l2KJ5MlpOTwvM47RESMjm7/t3f3O19j/O7H/4F5orVr8n8xhtvhALMGzZ82VAaOm7vHa67Xhq3e35fxnLRTE3R6ImFkpLB6OKt48Vuo9uktGmio302r9efbPNaG/sSY2Ot/sSCnARLmtIQ5Y0tDuDMEgIBB8GJKAS5GR9OyO91hWfntex8O%2bltyUfZz/5zZkbo12UGKt36rKzI7YB5bRh68rJj8eGNuq7S0SMnMk5lxDWNxm0rOlo7MRFMCfYl6nN8PoMnwRNIMeQEE1Ns7NicHH2sJdHvt/hj9VF2mdudlmZziMmSXLxUjI3IEwHNm5Od9%2b5%2bCSfmbP5OQoz8wm/e/M%2bYf1SzuibmSCDOWxpevvXy1sOuvXuP7b29LyPj/HJRSevIYFNzbaIvfaCvyp9ekaPXRZMcwhyb25BS3FfmjE0PWi3p6dbYBGdiQsAjY7tlNovVRxVRQFi%2bnELJ5eAjdrqyf/sRLrewJb%2blJT%2bc3PsfrNa/Z7avfm3mN/6Vue3cxoarHZc2bbq099j1xYv7Ss%2bcHJ%2bda2wt6hmYrkgOpiQGU4rTk4Pp0dEkN5vNTNA4KytNUQnRsckpQE9x2tK9DoGMHSXT2/z6NAicJsK7zByyxBx%2bYafr6Q5RzNuc/P0vIiT8iKdv/nnm9y%2bumbl6T8O1K08arl0c7rre9eh83O4HGY19u4rn%2bscbq6rKqoJRAF0wJWcWMFiGWKLKrTMUzFpNPqY/JTHWCTiBRJ9b43CbfMVBS3pQScNyxS4yP1zi4vS%2biMnvjdjZLs%2b%2bcDmG43IVPvvrP8tsWv36zKuR1ZEh69syt28c2nPt6tCmutM3Ng3vLiq9v3vX4NGp8dGZrUF9QVliFNuUYEtOTu4fn0uuhHps/ihTTmWy35YSTE%2bMEsicfqUzjWlISEu0WHMqfXQcUerC43MlSRxzfVJ7785v5cnz33%2bR154d8/Tmp3%2bO%2be7jr8%2bc%2bsarcgeY1w1X3hp6snf45fy9O5tunYnbfab85PLIaP%2bRI616f8VYot5giE5ISUnZOrXSozdFmbzOsorGHH2O1ZqYmAAUEr3DmyZI0yewfYkVBf4oGYGws5ATkx9BFkXESNrf/l2hvP7diOzelh1Pz377u3%2bG2bq6ppW6%2bdD2yOrq40CQu64/r7vfNbx7W8b9fQulR5rKm1tHR%2bYKKqosVk2U12RJB7bieLraHavjOcZrq9KtUxarPhmoGjabks1WJlgSTNHJBcCOtIlF5piWCy3tnPiIJIr5ne8lEfJ2Evgv3t%2bRf/ntZ3/KfPnSmpBDqo8/OV59sO3Ky46H1zu6rj94dPvR6PLh82fKm5eaSnriFibHC5KtzoRgos0XlTJtCJIUMJ/RGDW1dWy28kBFsV5v0fudXgFbY/T5TWxHbI41gU1F8dAx9e/sJ%2bfywylwScz%2bcPPOXgou5t1PLuy/%2bePv/gmzaU1BjgwNbdtyrm3PhkMPr1/vOna7485yxqOTu8vPH16oWVhpXhitOVHUbTFF%2b70%2bp8adbPPR/QaKWG9r7B6rrJidmquy%2bPWJepNB5mQb2QnOgMOQkGhVIsJgufX1N%2bvDs80xeHxEtoTc8vYLPhGX9KIwb8d7n/4x84dda2GOBFb19nNbNp471LF37/D1hw/Pn39weOTkvTMn4spHVyb3nSgq6elpPTDVWqZ32jVpVC1NJlPLtFFjg2PpZVNVA41AV8kJ%2bgXuZKfGqbd4TTKDXu%2bg0kDk/bjCHRxzeAyZXM/BuSTkpPw8PiyXT3638Ns//SNm45oyI2t9aGb19j1PrjU0NDy59mRTxvDp0sM3Tuw6fDIuLq6kpKm/aLJn10zc5NF%2bf4BKsjixPLUgjemxBKvmxsY6t85VFVusKWUpTpbBEutNTElOsEX5ysrcKhIGy8dGSLIBJ4uXE4gMKYwcIwmvz26JaN9Z%2bPF3/iPzt0%2bubQeuvlG9oe3glnMbr27atLHhYveD%2b49Kr58fPV9zIqOpZLKptb9/V8lk8%2bDgoC0l2TJnBBHAAo3Tbkm2dk8Mdqf0lRWkJBY3JrO1RmeaMyddb0sIuCsHbEpMGAaFiwhD1xeaOfkUkDwcK0/CkXfKAWF6uf2LX/38PzBj14i8uuFg2%2bbN2zdv7Ng7vPfh8P29pXWPDp86sRy3HNcDiI3RowOdozM92%2bZ6ioIyq4OXQNO5ZWk%2bb1/jrukDRRWJjSkpweSCxICRHeVNLEhP9AIOV29TqJUELIqP49JyOZKIJAg1hkxDZ6PNF8xwdXzLt1p%2b9uZ/YN66NuJ1IalZqVuOnxsaurZp095bt64dW77/6PxoXMb5mtb%2bmpGi2gPjzQsl03PNRd1KKovkcCPVUQkOh99vsxj1cXO%2bAktiMLEsqJSxnQmmWKDweaPcPmdaSoDHg8vhXDCGLsnHgcTZ/HiChF9/NlcLoUnfTtr/nX/PfOH42pgBTReSuvng9o6OjhuP9z6vu7h7YV/5%2bZGVbacWmoF%2bMpV%2bYGTbTM/WgZ7mqIBF4/Y6bDqPni2QldXO%2bWxHO00VY7M5yYl%2bQ5o3LcEEtEpbtNdpslSsIOFwYhhOTDVoY95PwlLM4RwJWULA0plaLaYQTvnRB/%2bOWbnGzFhfnZq6eXvmxsevZPPerrquM6V155dLjpZP9vf0zwxOD7TWLA1sLRlxN1otsQqBQ1NmYgMJrK/YOt1YVpWosYwNACntZMf6ohOS9Ql%2bI9ObEgS2Iw%2bGh8NoCCpTlf2%2bK4yQlC3it0SghFymSkjCEjlfvPnvmBe%2btgb9/VoN2bDn4OaLgMjoev5w77FNyycuPiqfOdncvat/KW5iqrspbkIfW1Hptqe7VSYZUxmcMlETa51lbIW3MdmUxkwf7wsmJ1tsbrbVYvX7AgKNP1hsY3loIjAdAgbpMJL9hXx%2bRB7M9XkMRI3gxuN1BloM5dN/Y25fXSPzauqG0JDtdXPXr3bduV33/NHz5ZrlI3G7lmqP1iyNj49PzK0MTIz5C2QGE9sDNRbbo9JyvEKHM6BnprfGahpzjAhm5UC6LdYCSLs0kzU6CDiuqqoEOgmCwhADSpyDJiLvLHTlkesj8vMhbgwUggHrtIT8n336B%2baotTJvyIrcuHhrOG544/2a2/cOLy8slJ8YLZkbn5zcurV1sLNSH4wdKwAUvrWvUuPx2hIBJWcFGp0pOra7ZyAllm31ypS%2b9LGp4mS91ZaYbikr8GmcNpvGoJbycDqDmmqnaknouy0x4XlnJWE8rRoCIXmYGPyFf2MuXytzaub6jfe6tj%2bu2zO/a3H09HwtUOPi%2bmu7%2b1uTu4929lQMdFcVTE9UKpWzle5YJ3u80TI73lhQmZzm1VstjYnsgvF0j5rHMwA1mV3ZXTUw0KfR2R22Yr2SSEWRBEa6W6Zkcy%2b//d6Fp%2b/mk2FIqlBNEvg0oHd//hXzzjfWVOciM6sB7OqrHYcaLm55OFK6q7Suf9vKTFP/5EpP58CS3lve1FM02TqzlJNgSElXpqXolwb6psYKKqenZ1MSjB4vW8bW%2b/Wsjz6MN/iUzIDXklI1lmMwGg2VxVGCAEilQ6r8fgEGK8rb8bN3X9wkYwJGHVVIMkSzwn/wnd8zM9em6NZHRq5Gtm0413FsuKvj5aOjM8vlE02trUuDuyZqp8ZqKtK2NR84enSwpza9oCq9Iugvq5iem5qqyGmc6pso8IIoKIVbY0iYziEmkaVqg1HKsyUgWOk5bAPb1pjolWFUAoEmSi%2bThyMoSR%2b/f/PzfGyAhSQp1CyHB/1l5XjF3PO1eUNfDfMA/jUy5NyeQ5tuHHt%2bva5r8kRNT1FJ7WRzbWvnbFXfSNH0XOPcrtrK2pnxyqLZqSl9%2blROVVVlTnJ6sT69ysowyxHs5taKdKvXweMKHVE8T3ciAeWvtFiS9TnFFpOK5AEkqknDyCMQYfv/8aefFbZjSCCFUc3SKOkxv2f%2bwdW1MQPQmavbDx1/%2bfBi3XPATS3HrTSv7CqqLZnpBGrydGNFZevUbOdKz3T3kYym1l19waoyW7CgoKp7uip9bsCngNAFOeOJKoW1IplFhaRZciYSY/WNlY1llkSr3hIEoL0%2btj9FABPDxeKdP/xFXh5UrRYISDKTXdH%2b6a%2b%2bZOavIS9%2bP5u2uqE683jD9ZGFut2lw3HbRgenVrY2lvTXTkyt9KUMAsJtbG6wZOVA86nShdGenMrayrGxvtmBsYpZfUGl3y0QRAPS2RAwgjAGUsJcxRiwPRuTg1Z3gjPBmlPs9vgSZGyLg0d08RmMjz7J4xOVRpldpTQIdTu/%2b8MvmdlrbIIhgOXOzAKc68UHd%2bbjdp86PNGZmFbU311SMtgzNzc1O1iyq7N7vLN1pbNz94MjM1uTqwDlMdDXV9U317x1vMIZleZPMcmiPTQsTtfnt3aOjQ0WJwaTc8osyc7YWFtj0B/rZKW32vkouAiPvvxhHh6qQmoVLHtAwMT%2b4tmXzEtr8dtfVo51WQfX7VnsaHh4cf5WRl030nKqM3i06cDYYGftQHfnwNzEXPfEgdrW1qOlJycnKpLLujsnJiZqZ/taO/tXEtkJwYGCoCmKCtfaUqaTk%2bcGKmYrEhMtlnSLLY3tiypoLEuMdbCn0qEcspSAy3/v7TyMx84iqUgkFo383t%2b8Yv72GozgunX/ip7ZFpm6saNh%2bNbh3eXlCFlO37B%2bdiWu9ej0dGftVEFBxdj0ykpta9PJjJqZo7UVgIRunCsp6R7o39XUNJVTMdut8QW8UViYey7FOnZgOl1TUDBboNfbUjQeh7u4uDFo9cc2FnjgZnMMg/yzf3iPDFLahSSPkm2OKXzzOwDz2TVp0N/n8%2bqhzW0Ne68P7zuSEccwRC%2b/lVy2q2k2rrN7anpufLpy19LIK6NS3gnkQ5/eZ3BaY3OOHh3blXFipravMV0PbCgDMgyO8JZNHxhICeqnBsoSNay0RLbJCqgQvSWxzKKvSFGSuJx4zt3979zlkpAqj8qukcTU//rHADP9NZizMq%2bdq36y99axw7czDnd6KncXja0MznWP1473VQzUlrSOrzQtdY5NxLVWpgCpq/H5TGxlyvhs7YGS5gMpPmtFrFAGYiipCru1r6ogJX22YqovUUa1uzXWyqoci9Wqz0nWNzYGc4IUDpnP%2bfBdEVbJpBoVGtSFs7/8NsCsfw3myMyDmQevDV3aWzf/4OKdpvKJ7vM1E0WjtTVFu8YqpreOz9TEFR0omJ2q8qf5o40yrz3aqXQOpCRWVFZVARKUrZSqaaRZNlfJTijunqos6xsrK/ALBEpTekVj0GKNTS6ONVmilVXTBrAUH/Pezjw5yWC3Kx2M3xbe/ABgbnoN5tTV1O1b9ly7VHc44/TpU4sZk0XlRZNFrdsWRorGp%2bZmO5tPFI3MTExUlZlMKcFYUwLJqHf6i91GPZCoVmuUBy22q7kOGdOhL%2bs5ULx1fKrCVjkFbMH0nOSEBIsl1hK0mHwGWdBaEAUW7dxpbi8UKX0OJjPp/YjCZwDz9ddgPrh65diWPdePHd5Xer4uY/fphSMLI7UlRXEzI5Otnd1b%2b1tPbKvZFlc0W%2bWVeWMTfAGWms3WuFkCr8nktAb1JgxEDYES6Tq2rXi8orhztiDHb63qywmWpft9JsurF7fFUSBboxENhtIZL764m%2b/aAZbxkNiWlsL9//T/Qr4X%2bjp7sG3L8StXhh4fu9117OS%2bE6dOjRYd2XZmcbm1aLCnpzvuwZHT86dqJpdm9UaI2s6WCQHVHzAy7WlWt8ejDLh9CjAIDEFhWSr3WIWloDK9wOmmWnYlp%2bUkvkrm5GBloo3ttAWiskVhRGzeTVd9TJIEi3OZJa53L/zkOyG9q6/BnHlw%2b5ahjk0PTx6brzs8X3Pi1KN9kyfmF4dPZEzOlIz1n77TVXdmpL9nq97N0hn0sayALzrAVCjdPuAfz9apdQoaDcUFg2UqdvdYVYU/0RQba0yr9KcHbbZgujXWBtgtGdvGArfjqFSIdH9hS545KTu78CzfdTf8B78Kgb8Oc1Z15sGhhk11J08vNs3fuXNyeeT86IHyR4uHT54cWdpae/vW8wcnmge7pytSfAJNMCjzWLxMIUSBdCckKEEIsBqEQtBQEKpR4NanVFk9TqtF4yvOSa8qMEXpc2w%2bn9Wa7rTqMTgeHYE0qnGcvMvmcDM5L689KQLzrZ%2bGsNb0JOYV8xvr1r%2bRlXpw87mh589vPd9149TyxfK40vNHdpeeWp4pXx4c3HbmRml53K65vsa52ViHwFDlDhQ7kUQonag1GCE0I1LE5QrBYoSartR40/tilT6f05OWXJxorbTKNDarP2hxWlL0Nh4migSmszR0cjZh/w4KnoOnFdZzX7wZYnsN5tDq0JDNezY/Od0xf%2bpK3JGV3cv7RjPuA5wzNZM9A1vjjt7ZFlezq7NnDii2wShmlJbIdgsRUMBugMOIRCQUxsBwoSAIUkFlpSXHpiUAptzS6Hc7q4AG6E8w2YJOmSMtIQok0DBJXKhQi3Hlnm3hcyLMQr6LWP8spHtNzKv/ypyZmXXwyp5Lzzfdu725uyhj277SlclH%2b0ZWekY6B4taB5dqyk/E1U4s9NfmpHSmaNwKhkOj4tJVJBmTyIDhCSAQGEtUKEBqks6k9/pzbLb04ukCr23O5nNaEgIafZQDwoxyq6I0Oh6OwlAo%2bOT8PFdM%2bw6%2bCErCfz9kck2S7ivm1OrN1wAxWje06cgCEN3b%2bzKWTzy6Uw7U5dqR8v7R1oymnp7BydGRsuTO4uTk2CiNwChEMoUKOxIExidBaSgeEglWe4xRNkt6TqIz0ZYWLLY6ExOczlhvQJbgSWOy3AKPlwWCSykwLReDi8nPz4u5%2b3k4SSD%2beciZNTOvA3pK5uaDh7Zce7jp8enDzYASWonLaIorLb0/Mlo%2bmzJZ1N9ZPl280jPY2pyTPJtYnJJcxdaymFqmEqKlo6DScLOITxSChEqDRO0wJFcEE15NRlgT2FH6RAtb5re46Safhk3SRXsgWFGMRGEM6LL3R8TURxQmITD874TcWDszoJ/bDrVt2fzk8eMb9zMenH%2bUYeqbLDpasy/j/kLRrtblk80T3QeaK4IlcbPpA3MFZdbY4mQdSI2kemAIIzemJT5eRBDRkAom690wjz2tbyrHklMclaC3xVqd%2bjSdzOqFOBxuq1HFFCLAQlgYi%2blLwPXmtu/EA9kR3/7XIVdfizm1beOmDU82XepYfFD6YP7EWE/RkYyMffdGyo8sFC2N1MRNtnZXBHOmLEGgLc76nYmJGhIGpKZL8WAQnEATcWBQGg0BUjHUBg07ubIg1h/LikrWO8s8EJnPIdDIlHZD0OeBUMUYKojq8LBtahG/t5cgiYDDz34/5NzrMK%2bmZr68s7mj4a3HN%2bp2n68rPTG5a2l0pGikaLRoYWa69mhtbV9yMD1YluDvHOuctvnTDQ4fiUtF8OLDaFwCgR8jhaLENAiVxIOqmR52Yoo1QeFL9EeZAopoP5KeArR4ty1NhiRRoEKwXeOQRWtI4XcjsiPyCeizvwpJfS3myKwrD7c87Ng4vDj8oLSutLypaaan%2bcjCifOTNZMH5pa6UxIDhmCCv3h2dmpwcDbdByK5dUI1SsgDo0DocDSMBuHhxHQ6BMUyKtnF1hSr1Z7ms5lsiVEmH4zDpUUVJyQYlKQwvFaHlBkUflOiF0aAk%2bN38MPP/nPIutdhPlh9cDX13MOXDY83vbVY9/B2RtHCkZKluInOuKa4ppLWkgOJQTbTnxwVmzJwYGtfYoLAwCQSPQIuUqhFcVEiHBSDhKDQFDEpzB5r8PVV%2bixlXqvbZ9L73QlpPE49XxMbZZOpQQiaUSYEyouTHetkKqiw3EKaufeTkNXXYQ5dPbTh3JWGq0NvXb3a9fzY/dMZ9xZqS0YPVJb0AC6wtmI2uazAFKww6ZmGqfGg1%2b3wGRFcnZrIRSKhNBCWAfREDFEqJZKISEEYXBFlSAv6UxJsTrvbb9EmxZjRwB%2bnkOngEJbGTUXa7SymzOtNEyAiwjH1%2be%2b/XpxT244f2nOooWEPIJQWF4d3nxzdNnmg%2bchS87aJivGl2sacsorudG%2bC10%2bCAGma5ouy64weCIIbxkCBEEgGT0ykiaVYHg8KxRFxhHi7keSINiUUOJWmoJP8V2/Hc3AUOU6phuvYAaWOyVZA1QFfWrSKJsVo63t/%2bXr5HLrh4PFrm688ubZxqOHh8N47peU1RSUr/SUrI62NnYB78lqsxbEQKjvWa3AoAWWv8ahVLLWQicNBqUgVF4nCQOEwrJgB41HEEBAOCRVDqZ5AotcW6wC5Pm/BETgMbJJYHsOOtRuZzGghWOAzeQPgMIYQac7/8evVjcjQrA0bNmy82jDUcf18xv2L%2b0Zn4ppqt64c2TVdVRnQ%2bphKdtDLRcoS0gLKaE20xW6gglQkkI6Qy6BDQUQGEYRCQRhyWDwKhsZT%2bFKYGI8JGNLcplgkAY/GopLMudIwfCEq4NE6PApTtNEQxY72YHBoGEIS8Q%2bvV59XG9pC9hyqvnbp2p4nF0/sO3NkYteJuL7i7riiI7VlXjvJ4UjLsRl1TItVwzI4DWCmXaWm0rFQCBaiFYIwYAYRRYdA4XAKWkze34uW4qVJNIPb506zkORyHAorzQ1Ho%2bTxCqdRIVPzHA5BQKb06CBhUjg2F4jza/XB6o0Hj3dsPH7tZUNDx%2bkj%2bw7v65zYd%2bJAT3l/yamiuWInRBZwJ1idPradaTQaNW6dCiKkQlCMMDuMh4TAGRA6jAdoUTAezkGbgVbhakkqFAupbK/TxHNxYDSciEGJJ0qQsmi10AhGRsvsAodAwWQKKeJc8o7vvo7eeDWkVn214RyQztc2Pbz94OLpEyUlzZM9zQ9OtW4rah4LOmRRAKlM7xdAtUaQLkqnJOmMSC4YpAAjkCQUFgmGwpAMLgaNk5sBiZnLKczNxtGpaRqNB4YmwuL5IrgIhgJS3W1UGXUkpUCgYWlZJDpJTN5RWP/D19B1r%2brGxs1XLh0/d%2b7KUMPLi7c3nV4amdkVF7drsmaiaHJ0KjnB5DVY9AKDIRFFd6tIGiNTq1apIRAIFALGgEE8MIZLBOwgXExIyo/ZsVNOlkB0JLUxIEQgsWgpOp4SBgQaByOHxbo9SrvdrfQwmToIEQWOjyksTPrp2vTzV8xXNh6/tPfQwXNDVxuOnTk9nBG3LaPpaEljd8lCaVxTpT493RYdzIl2KKKMVKAeOHRMqk4H5mIwGBBWRAPT4DQMDQUl8sX4HTfr6%2bvxeLpKoHOYBDweEsZH46QuDIxBkEKTXFQFSUciMZEBu0MpDKNpoTeTyO9%2bsDaf8hXznqzNe69VH9w%2bdOXJ8J3Frt0nmo%2bsdE%2bUrUzufjTZ1F3WWFCc4Iw1pdlVTLvHaAhQWVSdAkMHc5kIeS4UhOBJGWI0VAsTx7z3m3BRdjwICmIKlB6qTq1CUQhoGEWExcFgULEITWcqFWqmUGBUg%2bhELAiR7zJ/9P21%2bcE/5EbW8aENbee2D21s2Pt407Fj5XEZrb6B5pHy3We2AR18omw2mAaY7GiWJmDUsJVMkEqLUau0Whin1yyVipF0KAJOhOI5Efm9uZLLSeAwrk7DpHGpLCQMB4ehcPv5BC4DqjNKhTK2nSVjKZVUBAIDAqM5kvYLn67Nd/%2bhPrddPZ66%2bfiWa291bHq8d/hY3fJKXHF6f/nJ%2bdLluJKj/XOVVlOaN9ph8yYEqNYUkFpFV2lQIp%2bckyQXi8U8Ip6B4MLh4iS5K9wVgdWBMMCfJNQiPVwKnMjAZhfW19OwCCFTq/MomboAS8BkQhggKpfcK%2bK//9O1Pd/4A3Pkxs3rNmw%2bd%2bhqQ8fjvV3XT88fKJmZ2XU041HGwoltM60TBU6nKdohS7GZNAGblamOZoGZEKyCgKaIGAwYg4aHgSAUOLAL0fIkAojOxQi5XKqCKcQQxRQKnMO5/A4sXhrPVXpYApYiIJAx7Swklcrgt0vIN3%2b4tudIf2DOPF6duvngno0db216vOnGcN3ujNKZme6xpoyajH1xM6PTBckJMqbAZjKl%2bbyAT5IZMXRBAEkT0egYHg0k4MJxCDVOjBbHi3GFZpSIgRAIeVq6DsSFUeQwTHzhtz6WcvIkGCpVJVAgBUoWmAsmIWFJDEp7zM1fre153R/yOTMzte3KxoNDVxoeHnv8sGv41L07Ta190z3LI9sy4lYO%2bCsLrEydJiHWwmbnxAaiNUiwIC1NJ8UKqWA6jy5EYbkMRC6DQMfi%2bL07s/GMMAxOisSAtXCsODyeSyHv2B/RHkbjARtQ4xHIohxCHpEmuvkZB99u/tEan4v%2bQSOlRoZW79lzcGjPlavHHm7qur54L6N5q39ua1PJxEz5SIVptipa6fRpotnsQKxTpwFhBNEOjQYJEWKgIDAK%2bL9DodgXZDwXxclztcfARSIJQYQDQUhQOorDR7dEuAiFH8LVNDoUHG0MsGVKIQRDjPnkw/yWetfP1/j8%2bQ9%2bMLM6NXP7lnMb92wcenzsUtedusOlNUcTiztHig4Mxo1MpyX7o01%2bp1fH0tgDUUwNiOkWqGQGEBQCQoCASNNoRCL%2b47O5BHHMTTPfHC7lXJaIODQhIFdpojDc3cJc0c4v4sV5cglKwxJE6VQgEA%2b3/3fvmXuzzc/W%2bJz/K%2baQkOq2rNRze7Y03Nq09/qm4WPLC7vL740Hxo/sLs1oGp9K8UfHpji90SSq203SsGUQt0HN0lDhRC0VAgYjFSQhnMB5O5sSQSGfdYnxO11nn/aK6BBVvlRNxWgh8ZIwrJwTc5dMFCHcCrUMwuUx0Jz9H34R3ht%2b94M1vk/5Qz6Hbticee7q0KHb84%2bHb%2b%2b9lbHt6MLp8rK%2b1pW4jIy4/pHWsuSVFR/YqxEEndzoKB1NYQTqFQiq8FBBYBAUhQLjwrM5vDAgIdBoLC7GLHfdlDPp%2bF%2b4kB6lgUkTwsxJhPd/gQCLwzxaqF1Ng%2bIk9W9/fqH3i4jfPlvje6uvmNetZm44%2bHLx5ZnJxY33Fx7UnWxqOnNnZKD55Og%2boED3jPdPjM4VOZSNbKO9yk61%2bVhciJFERyo8HgiUzoOh0Qg62izC4HBEMR5PIceIYi4nocRkNCEeTwEFAiqoK0Yi%2bugzvhqJ0qqILBWPh5XG/ObzvJYvyJ88e533g6/iHJma2rZnaOPhuOuHGobvP7h/ZvfhfUutGSOjpRlHB8vYswfGt/UnO9LSvEEThu1hpWmRKjpXpYCQQCgEj4YKQyi44aIwPI4YH05OunwTLYpwSckxZhwxLExtpGqRNG5u791slNotBNsRahAXgkLxn%2b7nxPS6/nmt72H/kM/rIw/u2dNQV3eq69KTjvu3T5wvzXhUOnpiNOPwwlJJo692SnCgu8Aa70lLkyF9RiPT7mBBgM4MEmJoICQIgwzTaeVSLNCl%2bWhRy2efZcP5Zr4kHC9G0ECOgBas0hnJl/Pj0flIHIGKgEBpSAQ0LDtcsiPv5rO1vu/%2b/eM6wHenZh5qGLp/%2bs6NjoZjp4fnS%2bdP3y%2bt2VZz/tRyec2u7glbytYyUjdPkcxSetgaLSta4DAqHEQdmIiEwKBIEIwIRpsZdBQOnctv/%2b0n9RTOzhiJFIwDKRzRAgiIpMa2J%2bF52b1hSb1QuFiM4cLghFz0DnNh/ZtrnSsATHpIVmRk1vrVzOpDgDoqPd0x9LDu4rG9hzPulZ4aHW1ealouzdh2YqByZiLHsTXWbmHy6BoW4AkVKq1aqcYgEEgwA4XhYuUMMAOLgMLQZEnEuztckry7ETAoD0xSMWVGkgICC%2b/Ni4ftxIuzI8hyGg5CEsPQ4fJ32gvrv7/W%2bY0vj1mtz1oPNJW2LXuHO27darh6cX64q255tPxU%2beRI0a6J0VPlR84vNFU1mspsGoU7Gin0YoxRCjBSq9UiwBganoBFoQgYIhaCodFQcBGZHN5OkJ9973IujoG060gqHQSKwfIjIvIjklx0WC7M1Y6TUhVYAkFivtCe93evMSez7svsAIpd5vZDVy91PLzUcWy44/TJUxfvnKpZeHBvpKR/W3nGyaYJtsxvSwsg7Bo/W6NDqsUMBFIBIooRjB2XpSgGGaICkpQrFongeD7ZDK9/8fF7EhGOxKKSWDoMg6hmxPCT7j5NwlAiGNmXI1AKMKyeLGrntOe9%2bVrzSKuRWatZmVmbrw3dOr3xasOmjlvXn8%2bfvv3g5Ml7j%2bp2j%2b4q2XakaMBvZwadQQUxipdipceSYBQilkFSGMVIHQyPUVMRNCKSCkagOXgsPJ4TQUl6%2bvFHBBxWBQaR7HYFiURH7%2be0F3LwMPNlTv7lcBUJhc7D4%2brx2e98sOa5r0hABKZub1s9eDBz%2b5WNV4f2bNxT92hx74OLD0oz9s3vPj988WRT/7YjTemaaK8iLVatJlFl0UZdtJYIJSJ0OhWAAwFDECjAcYC0gL3KJjDCcJK83PDv/dWObAkMQQeRVEKqXeDG32yPV7CyX7SQUTA4kYfBSihQdIs5/tdrn6/LygpZzdy8IfTQlsy2oY4ne15eayraUze/WPqgDijS87dH4pomBotqSnKMUdGqNK%2bHqvAEogBRClYbBFAxV5emhEBISKgUoyNKwWCUmBAfBo%2bXm0WUm3clZDEJRBfqkCiwXaDuff8m2ijMzuYTsWIeiY6guIhawtkY%2bbO1zzGuro8MCa1uyzx0JTKrY%2b/QpqEr6pTMxcXD84/qLs4/2n2xJK6m%2bWj5vaNVBp9XHxtQGlmAsvNqqEgw0wGCIXQqgRqwJEgiSUAX02A4IgwOo%2bBzJQz50xa0RM7VQqkOKpQaHW101V%2bmqQiSeDGCIhVDsTyXmagV7SRfeHPt86JfzlEBuy90Q2bq9oaNm15uKGoaztg3fHv37vnnXQ/Onz9Sc6J8X3n/SnGU2xctswuNwJeAwSgw6l5dChHQCZBcCBgTBkFCGHCpFMxAhxGT8ilYtLk9nOwS0dEQgYDJkvm14QS8SJyUFE%2bk81B0nkQlioEy%2bGb837/mXO66yLbtkauRr47PDz3eeHyxdH6%2bq%2bv%2bozNnDpfOn5mc3Fd6pGR6qsLrD/CUKWC2yeuU6QxghZGqFgRUSgEPxeViEBgaGCGVwrjxOBouhiPGcdDxkuxwcjaFjNJEsYxpEL4cFo%2bG8clhLCaYHkZG8SkSfhKe/MFrzD%2b/ug7i1SDjhtXUzRsytw9dubXl9qONt%2b8sPj9ds7Qto3T3kdGMe6Pd/pS%2baKtGnDYGVgqUThlGGAgASWEPaEmA2gFBeSAMnsiFEVEwCC2MIoHDIuRycnhSTES2Eoylk8AYKh0Sj%2beEBSgteC3gqsiff3SBkBsTQ9n55mvMma9/xRwSuv5g6obNbW3bG47duNK1%2b/r89cVbXdt6RpYzHp1frlkYrbWMH0hI8LP0Gi5LoFNTkVCLgalCKuxUHhLgFUO1NI4UQeOicAoeCmjf6Fx4rpzAac/lypi4XCjMReFBCOiIGDBBQoBAtMj8T95/Gw%2bL6E368evM8//rGOO6dZmpByOBTrhxfvfwpcUbx%2b7cuHXr8MnSM2fu7zuScTKuZ2KiPxhr6QvyjNEmFteogQi0WqbdziQJSQgoShQGhpEpKDAIS1SHhdFp8VKgg1BcO3oJCBoE35Id8e5laRiBgQvnUglJmAAr9xdPOTFSsjkm5tlrnpsAohy6Lmt1c2hm25Ut1%2b7M7%2b1a7DjWdXGxa7Hu8Pyd0ozz50d6SoomugdY03qCU28TaB0aEhQE0TIdCq5BKI/XImERNH44XKFiILREGAolJRB4d/%2b2Hg6oah4hm0KoD4dwufwYMgUOlzO0RIpkx84d4fH8XNwv33yd8ylAmNdlZYWurn/j4PZzW7ZsOXf14cuOusM3Fk/fXuy6vbu09NG9hYzlV5OjxXp3mYLlS9CnkVAIIcihoyHtahQNTEOAUDgJgkIGmGlqHo0RFu/Ki8h%2b%2bl4vPx5OpHD4IlevBKEjmlvkYhF/pwtPQZvf%2bSwGnR1xwfzstc4BhYaEhEZGAjkduX7jlY3rj1/ds7eu41jpw%2bHhW3V1iw/uHdm3raTmzMKuksaEgD8K4XU6oiweggRLNTmgaruam8vj0YDQQuE4IsBOcyNEEoo0u/dsb68ZHoYmoOvlIkK4SwTChrvIcnJEXj7ZlSTnnH0aE5Nkbvn8zdc%2bb/Vq/nnD6mpbw57I40OHHj/qaJjvetiwuFj34NSZw/fPnDx/cnJlZTDFb1VitUGNDOBCa50Wo4KFgkvRIGkMGiuFwqAIHobOA3NpcAqnfeflCDyOgsbCJS4CWi5Bw8WF2RK8qPBpdna8pJ4sz98Zni3KRz97/XNtr%2bafD66P3HLx3MEnWzafK83Y9PzMYlfX4u3Se2dOz5eXn5ncWjJY5s9JZOrADpKOiWVAAVUMZqrgDBEF7UpCMaREGo8BwzCFsFwRFn/5vR3kegKaLIdR8jl8PAfNhZt3RJD52S3tnBdJ5vqYpIiIbLLcfPmD1zs/%2bNX8c%2brqoT3z2zccvzS04f6u%2b8fOzNc9fnB4X1zRkZmB8ZmxxJLBZLdFRjUowSg4RMkSMbgkIgQDRyLIufAwJDaMy0KgQAg0hchgwMk73i6UxpDlLg7fvF%2bEdkVQaOIIoHi4AF0XcTObnBSx4936C7lP8z99zXOaX80/V69mrWau7jm0ONxRV1Qz//zMfFfcTM1gz9Gi8crarVVbc6KZXpWMTmIR0TyZhxCO9GnBYAYGLcXxaGAiF0GCQjEwlxyFk0ok8XxJmCQ8nGPOL8zjU8LRMDQlJpu/vyW7PebFBQ5e7rrw3l1X3tuff/Ca52G/mn/O3JCZFVJ96eWWY10v54%2beuH3v/Pxkye7RopETzbPFOQlKN0urQJpQPC2TCvIIs9vpdgSUjlCLYVgMEY7GUFUgIKHD8Jxel5SBy5XjKHIyJ2ZnHkHOx0tFfI6LzHlayMkvfPtpC%2bBXLjzdKXm7/q/%2bW%2beOgQq9ccvq%2btSGLYeWG7qGd1f2lGccaC6vneo8vFDT3GdLT9cEHEYwTyCL1kFJdDEdIGTAoTAcGEXHwjBIJBgShiLSUJKzhRQzXwrUuHACmmCuj%2bCL0HJceLg0nMzJfxFTuLP9o897L7x34ek7%2bRd%2b0fvsdc93/2H%2becNqZuaW4w33D9UNXx1MKN42PhC3MFg1PVpUUhAda9Pp3AESGOlL8GmFNB6dTnRxaAoulovgQugsKgsD5mshcHg8IQyNg/Fj%2bDSoHDB7LrwUKBoiPh8dbubn9e58d2feO9/aefdb77/zzot3Cr/72ufov5p/zlp9YzWkOnPz5k0NDZfqpg1F5QP6lZ6tZZ3J6dOJdpZRa8eAwWCqzsASijAkEFxCtAvARCwdaceAGCoEQkzF7XfhKFI4mJFNxhPi5a6IcApciiegwynyej4BJ2n54u3CHb/98MO8vE/ebv/88xdv/rfvK8gMqQ7d3lDddrytY9PpJ4ed/qVmTcXWxuKtsoQxH4MnjDZyuQo1TKwiQrksLg9FYaiYUCkRxLRDeFAkly5kMSL4WDQHAuZIUUkcHB9P4OPjCeEwiitJEh4hwRFiPv/w6Rcf7t9/9t27%2b/ffzP35N3AvxPrq1Q2bj587fvzQrcUzgQaIsbZyZdf0RGN6RaMAovREOexgSQSeS5SjNCohSSvCo%2bE0JJ0QBqJSGWAkA0rJBbKCHxaGMwOVGQfDS%2bFwGAyfHdGCj8jD55tjOOE7nn7%2by8/Oxnzrs9zeD/M//wbu31i3Gtm2urqtP/LGW8/rjo9tKwjuSk%2bZ6zkPUs51BqgGmYDHkJIjskUR8VQmXqtE8FBYMU0LIqAwIBofCsLKd7bI%2bWhsGCWbQ%2bAQYBQAHo%2bXxhPe/xZakoRuqc9vz3vvZ5/89t0vPnw75sX3ftH75jdwz0noG6vVqyEXmxt2z2/uKh%2bOqx2bS1ZW9i9TVRVbA68OdAmlMCEMziPQmVy%2blupiEIGNiICAiDx0LgyMlfLJaCwOi4JF7OBQ%2bLAwGBqHQ1Pi8ZK7F1x4Pj9cwum9%2b4MfvnfhN7/7XYvkZ/9Q%2bOtv5D6Z1bbq7RtWD508efhW1/RUaUZtZ2eZJco/bjFEkZR2FNdgh9KzcU4mCq4kqXDZCBoGzKNDQFgoHqvSmgvfYXggKFRYPMWMj0dL8WGEeFw8Op6Si6YkkdEEOEN%2b85N/%2bbv9L37wy5gdN3/Z/s6b38S9PSGRWVeHq8%2bFbD%2b/LWPLNsu9orjxsU1sZ1RsbNDtMUE9TpAWgqIZkHY0Vq1EQcPAGBAYoJZCsXgaGEOQo8LkFC6g68HEMDQ%2b14yLh2HjKfHxFDI/osVMNie53vnZ9z7a//E/vveO%2bQdn/xj5Ne9Hinxj3ZXhzYe2nK67df/BpvODJXFVic3BgqOxUdEmoYdJDchVcoYxDIogiUFiEoqEE6FAUCycAmhPOBxCUtNJdBpEDGy%2bsDCpNB6P5cNRRBiQynICRUKWxBTuuHD3Re%2b3/um7Nz/6WXjLz7%2bZe6hCqlMjMyP3zF9sBZr38r0jo/0TzWrWTKXDahOQZCi2h6uGQTHaMHo0AqUVhKlpOB4Tgs5FQ2hiFBYJYVB4UBSYB4OGS4lh2Ff7D8bAEchJ%2bXxXOKfl8tmWX3yx490PP/7kcv4n%2b2N%2b/U3d95UFaP/VzIdv7Bu5OLS7c/hAf8n0SHKOstIZ5YB6IR69EoykQ7VYqjosVxEWj9FhqEY6ngBH4WhUKgaFlcChPC4XGoaFUiFQBlqKBYIMyCQOPibctTNCst/10Xs33/8iX5RHKHzv2Td0r1pI24bM0NR1HZnrHt%2bbf1x0sn9XOubRvCdxwhlww1gyRxmELqIbsGoYTMdTUVBhCCgUiDAEoSJRQQx8RDgBRkOFEcNgNAQSAah%2bQIiSJXwCgc%2bXS/gUQlLhzRfvvHfhRb25Pv9Pkvm1768LycrMTF2Xenr50IZri8N1TeVl/sQD95yswaCwwI11WAVaSjxYo2ahCGKfGsHHI8BiKQ5jB4HowCdOThQREcRXXSSXABPJ5WQ0mSwnAK2QQBahKTB84eVPbl7u5YSTL7S4Pv3G7glcB9jYju3nbmzqeH789oOT287HTRVX5gTdPXrqeKzA7xAa8CCqUGeQEcJ1XCyBz6XSAW1H1QJf6HQxg0YWieGieDg8KQmfSw53UWAiPJ4gB4yVS452nb1783L4/ohwct7dvH/55u5jfOViuzYeqjv2pOHOW6ePVZzPKE0Zb6y0saZ7rGA/lWpTYFE0OscB0dmMUDxSCINABCo4DQoBxJ1UgpXDw8JEkuyIfJdLCkfncqR4CRmIMwUu358nv/ve/vqIlt/sbI/Zf/cf3vzm7r0EhF3kpWOR665cabvetWFZsG9hqGp8QFvpLg3mbtWgDFanHE0SwrhcqhAkQMUDGh9NhKBgeK0Yx5XH0MFw2P/H25kGN3GecVzaU1rtSrsrrQ7r1q5WK8sWlhH4kIRMZOMrMjK2K8mS7TjlMoxbYjCXjUMCiQcczhJMCMdgmwQICabEicuRQDIthCRMmoaSSdo0DZ1Op9O0TdPp9NO2K0o7028JlrOz%2b/l5ZufZ53n/7%2b7%2bf2oMU7MZjFSiJpYiEtkgRVojQkdftu/KYR1J9n1EdvRf%2bfnNPPqL5rbBhre2qE72iLcu/mBP7ZOb3zrZXRkffHX0M5v8dBs3r7YIMpYs4sACIlig4Iwor4Mq9EwHxxj1JtZkgAhGYJUQgRJ2FBYirDUWdAjZvuxkInH4iIBgujtMIpb%2b7N18%2brimpupT1Weme5LigfU3tj12eumpV/cuHF%2b4%2b%2bGSwwi8am0wsLhAMDUtsUEoDrlCkuqLOOROP4ealKAuCxkQA5vo0HEGgmMQmLSGOTKSkLRJR9DaK11S54hzFxzkp%2b/m1S9XFFvqxeGT0gQf/sn5N49u3LZm45bda72dS0Y9tjJFhbZwfsCg9eKMU%2bFS4IQNQlCOBBSU2qwHYkGFC0BIXYaXFhyEJLwZB4U1BIOCo78rEwxmHepwb5hTT8Y7bufXl1hUSTknhzXnJ9btm77%2bxqrxF1d9v22oQL/6bOXO4nnesm5zgdcPARW%2bqIt3KUA7gBcZigoNSrMC8jq1LhuhjqsJk9TwpHnulhpdoqsrLDSMTV4ReIwSwr1Bh7X3Zt79n2UyTbKnpWVK9dqlQ9XTbedWbWl8uHHeUNtD3cjTS52NXKjVw0naxK6nQZvLhHMQ4NPafLidiFagKByilTTBESaKYliWcUeIxOG%2bjmwi3BHE0mE15XYfvvN5vn22cya/9Rqx/lDy/I1DyV37v7fsxKVbKwNL61YPsjWNza2ShPKWQgqXEc6JP5fR41frF5q9AZBGOLtceu5oGmEowRpLWElEutWRvn53OphOSM3DrXZkE30Nf867n7lYf%2b9UHdpav2u6fkHlrauPTExYdhYWjhd3b3eand7y4mK/yazWIrBxrl1wlZvlCqPaaLbofSBuC7lAgwmiqbDOYU1Is0Nnff/O%2b7192XDaiiARHdYwduV2/n3j76WtEVPisHh%2bWPS1Hf/xW%2bMjy57ZVldRsLkZn%2bMrWlhUVIeDin65GS2wpQ3lqF6B8ageMNh8BVpcKm/QRCiRMEtaE70DY6%2b/c2esIa3TRUilO0ZFxj7%2bZBb8%2bTUp1b29jtTEGXF66nLosY1X1x44sXPXnOKVG2pwtLQkCjkCFrxJUFb5%2biij2Yh5i0gE9doQIaT1Q5QSQUxwxh0XSIa09o5d6IoIDCKNmZzpbMe1j%2b7OCgch9xtAfb1sneyAZt%2bEOLToxJrrt8pWL29tK6laVIt6Hyqv8K3otEebrbizv6AE5zhQqcaNsN5OEGqGw1kaInieo6XlBUtJjSNMGEJcnEczr092JH53e3Z4E/cNRKpF2XDuneyb15cMvfLwzoo9Twf8az2LLXRZc6XT7%2bcfLW6oscudRQY06gLmKGEaV0QRNUob7RxF%2bIpgWs1jwaCkWlmWo/rTur99%2bGH6y1njetzfceypPj4yMX1j39nle18e3b95UaBzRYn8IYvPA5SWGm2YYknMqDBRFtwIKPx6rzlkUHgJGArhaquDVpINBMkIWStP9Vl14f73x94Za7D%2bfbb4Kf%2bTsrIpcd2ZM9d7Vq7pWXP00vPj87fPq2iX1y4oLvfUgEgbWAhyeKM/7tXKcbnc5YVgOyG44yyF8AyTjpFCMBgWWBhm2MjkWBZTN7xzdzY5Nfdff2tU02eSyVfX33jk7MSKmuc3la04tWW5ff6CUnltCTc0KK8FkMV1sFYOGHE7JyczAK3GQihLEwTtiMVNmWDYwfBIiOkfiDFc%2bpvhuR6UB3R/tIiy1672aJIH1w9ffeEx79COHZV7tgWqLfo6i7%2bwzQdYKubAvsJoFYDLQT2gdIEk5qblOI3TmBJkunQcKQiOEI1hOjeFxT/4eja5S/%2btFVmLeOhyi%2bzk6SdGUk%2bZtux/fLB2qHPuE3tDvgpP3Rztws5itFhuN0LeyiigABVKlKA5OoRgphBDMboIT4Nw1k3Ew1Z1Iuv4x%2b1/5Tfn/%2bdbye4nrUmqpB69UbbuwHtbt9s2HHumfVN7d2GTbHccrS2GbZbmH0KFiBnl9CXlBlQOsAY0t1uO2kiYiaX5EEyg5GQDz/G6Lt21bw5AezCOmOx%2b0qlceYwc3VqturF/ZEd459ruwaGD0aPnPVpP6aKqqMvbBmCNLqOfN5o4uREC4tKqlOBCtANWEoh0s8kuFnJT8GRm4NsQFGfIa5OJqerhXW8cl009emlimcFjGW2c/%2bym9yrBqHZ%2bU91in7npqQCPmbU4jhBK0h4yoTaazWRgDLEbSDfmziR0XPjata9ufndcPE1Kmir1Ys8%2b1YHHzVOyveWBZ9t9Q9HOqppyT1mgeU%2bIdW4v1ZtqQLkL5rSAC0JtckAu6RPBysIMw5kcut7Xj3zx7nfJH1SJSZU0DEVVz9TPPlgzIW5doX/qect8s7%2b8bG5h5crSaJ3ZviAaUbYajXbjHFAJ4TY6ZMMNMMxTFMtLncMa%2b9Pdb5vCzDiPSZUqpVGlcjCx%2bjcDm/etL2hq/tFab6ACbB0sVZYYXZULGuF5Wn8VgfoAECfUgAIR2JycktRILNtwpOGXD8DUnBlPM5W8h7qSiuSiJrnr2LKn92wYBYrGX3S90N2619PhrPQrPGxrlNJDPi8KghgDFMEZHosxsa5YbLJ34J%2bfPEj4mXNLc0QxWXXqjcvnbx07tnrlS8UdgyMn2iH52yCrX7K51W/0mdQo7vWjLoCUs4JaHQ5Ssd7Jgd5f/%2bbmgwWfGR9WJdanZNLiX1x3/NzGpKRql%2b48u%2boZy8LF3S8sdzrZGo9Tjhu0IU7Lx1izB08TuY%2bcHbrs2MAHX9194Mgz5PC%2bpLk3E1tUyYv7RFX1pYMHz%2b0fKbpSyK9PxktfXlBn7NRfsOgVkIniUTjDkBhGUkL/Z19/PZOw%2beEdy3JVnZwQn3OcPb7j1GuDQ5ts3Z0lTbbthopNLgrg7QDCI25rOqOzugf%2b%2bPkMY%2baHK330dM7m6WLP6Z9ebzk9OvfOorcfR0e3kNu9LLF67l91CsFvdycwUP3pF7%2b9PfOA%2beJ3HzGWrD71XH3qlQ1iy8ltFyK3NigtSn97obujthXlMlxi8ldf/uF2foLlKef/HF9OItqq3ePnLre3rpnLFdixgOkXn6avfPz7v3yezzD/FmAAiWOR3XzmvE8AAAAASUVORK5CYII='/%3e%3c/svg%3e";

    var img$7 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='utf-8'%3f%3e%3c!-- Uploaded to: SVG Repo%2c www.svgrepo.com%2c Generator: SVG Repo Mixer Tools --%3e%3csvg width='800px' height='800px' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' class='iconify iconify--fxemoji' preserveAspectRatio='xMidYMid meet'%3e%3cpath fill='%235A7B90' d='M505.998 256c0 138.068-111.925 249.999-250 249.999c-138.068 0-249.99-111.93-249.99-249.999c0-138.067 111.922-249.998 249.99-249.998c138.075 0 250 111.931 250 249.998'%3e%3c/path%3e%3cpath fill='%23496170' d='M203.648 11.517c8.187 8.716 12.964 19.135 12.964 30.339c0 30.584-35.488 55.381-79.257 55.381c-23.05 0-43.793-6.883-58.274-17.861c33.494-33.546 76.473-57.61 124.567-67.859zM34.042 253.015a79.02 79.02 0 0 0-28.015 5.112c.471 56.361 19.587 108.267 51.489 149.862c32.31-10.006 55.783-40.123 55.783-75.719c0-43.768-35.488-79.255-79.257-79.255zM208.556 501.48a251.296 251.296 0 0 0 47.452 4.517c37.876 0 73.776-8.44 105.947-23.516c-13.773-26.355-41.35-44.354-73.148-44.354c-38.972 0-71.612 27.027-80.251 63.353zm34.372-273.253c-39.338 0-71.238 25.959-71.238 57.991s31.9 57.991 71.238 57.991c39.344 0 71.238-25.959 71.238-57.991s-31.895-57.991-71.238-57.991z'%3e%3c/path%3e%3cpath fill='%23FDE364' d='M256.002 505.997C394.07 505.997 506 394.067 506 255.999S394.07 6.001 256.002 6.001c-17.68 0-17.68 499.996 0 499.996'%3e%3c/path%3e%3cpath fill='%23FFC63A' d='M364.434 339.333c0-20.753 19.389-37.578 43.302-37.578s43.297 16.826 43.297 37.578c0 20.753-19.384 37.579-43.297 37.579c-23.913 0-43.302-16.826-43.302-37.579M264.896 85.25c0 25.719 24.509 46.565 54.737 46.565c30.236 0 54.737-20.846 54.737-46.565c0-25.718-24.501-46.565-54.737-46.565c-30.228.001-54.737 20.847-54.737 46.565m23.91 352.877a82.106 82.106 0 0 0-41.583 11.254c2.153 34.676 5.081 56.616 8.785 56.616c37.876 0 73.776-8.44 105.947-23.516c-13.774-26.355-41.351-44.354-73.149-44.354zM504.06 224.773c-7.03-56.414-32.854-106.99-71.012-145.266c-24.032 13.52-40.644 42.464-40.644 75.994c0 46.464 31.892 84.136 71.238 84.136c15.012 0 28.932-5.498 40.418-14.864zm-261.132 3.454l-.112.002c-.206 39.033.024 78.975.69 115.968c39.076-.254 70.66-26.105 70.66-57.979c0-32.032-31.895-57.991-71.238-57.991z'%3e%3c/path%3e%3c/svg%3e";

    var img$6 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='utf-8'%3f%3e%3c!-- Uploaded to: SVG Repo%2c www.svgrepo.com%2c Generator: SVG Repo Mixer Tools --%3e%3csvg width='800px' height='800px' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' class='iconify iconify--fxemoji' preserveAspectRatio='xMidYMid meet'%3e%3cpath fill='%23FDE364' d='M6.002 256c0-138.068 111.931-249.999 249.999-249.999S506 117.932 506 256c0 138.068-111.931 249.999-249.999 249.999S6.002 394.068 6.002 256'%3e%3c/path%3e%3cpath fill='%23FFC63A' d='M184.949 385.542c0-23.302 18.894-42.196 42.196-42.196c23.31 0 42.204 18.894 42.204 42.196s-18.894 42.196-42.204 42.196c-23.302 0-42.196-18.894-42.196-42.196m12.885-159.76c0 32.032 31.893 57.991 71.238 57.991s71.238-25.959 71.238-57.991s-31.893-57.991-71.238-57.991s-71.238 25.959-71.238 57.991m235.088 206.843c-14.483-10.978-35.228-17.861-58.278-17.861c-43.768 0-79.256 24.797-79.256 55.381c0 11.205 4.778 21.625 12.966 30.342c48.095-10.249 91.075-34.314 124.568-67.862zm73.05-178.75c-.469-56.359-19.585-108.266-51.487-149.864c-32.308 10.007-55.781 40.123-55.781 75.718c0 43.769 35.487 79.256 79.256 79.256c9.864 0 19.3-1.817 28.012-5.11zM303.445 10.519A251.23 251.23 0 0 0 256 6.003c-37.879 0-73.781 8.44-105.953 23.516c13.773 26.355 41.35 44.353 73.147 44.353c38.97 0 71.612-27.026 80.251-63.353zM113.3 133.471c-23.302 0-42.196 15.385-42.196 34.356c0 18.972 18.894 34.357 42.196 34.357c23.31 0 42.204-15.385 42.204-34.357c0-18.971-18.894-34.356-42.204-34.356zM48.359 276.513a82.101 82.101 0 0 0-40.433 10.594c7.146 57.561 33.862 109.04 73.276 147.597c29.221-12.696 49.666-41.799 49.666-75.69c0-45.565-36.944-82.501-82.509-82.501z'%3e%3c/path%3e%3c/svg%3e";

    var img$5 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='utf-8'%3f%3e%3c!-- Uploaded to: SVG Repo%2c www.svgrepo.com%2c Generator: SVG Repo Mixer Tools --%3e%3csvg width='800px' height='800px' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' class='iconify iconify--fxemoji' preserveAspectRatio='xMidYMid meet'%3e%3cpath fill='%235A7B90' d='M6.002 255.999C6.002 117.931 117.933 6 256.001 6S506 117.931 506 255.999c0 138.068-111.931 249.999-249.999 249.999S6.002 394.067 6.002 255.999'%3e%3c/path%3e%3cpath fill='%23FDE364' d='M255.999 6.002C117.931 6.002 6 117.933 6 256.001S117.931 506 255.999 506c17.678 0 17.678-499.998 0-499.998'%3e%3c/path%3e%3cpath fill='%23FFC63A' d='M147.568 172.666c0 20.753-19.39 37.579-43.304 37.579s-43.296-16.826-43.296-37.579s19.382-37.579 43.296-37.579s43.304 16.826 43.304 37.579m99.537 254.083c0-25.719-24.51-46.565-54.738-46.565c-30.235 0-54.737 20.846-54.737 46.565c0 25.719 24.502 46.565 54.737 46.565c30.228.001 54.738-20.846 54.738-46.565M256 6.003c-37.879 0-73.781 8.44-105.953 23.516c13.773 26.355 41.349 44.353 73.147 44.353a82.1 82.1 0 0 0 41.582-11.254c-2.15-34.675-5.075-56.615-8.776-56.615zM48.36 272.363c-15.014 0-28.934 5.497-40.42 14.863c7.03 56.416 32.853 106.993 71.011 145.269c24.033-13.52 40.646-42.464 40.646-75.996c0-46.472-31.892-84.136-71.237-84.136zm149.475-46.581c0 32.032 31.892 57.991 71.238 57.991l.106-.002c.206-39.034-.024-78.976-.689-115.968c-39.076.256-70.655 26.106-70.655 57.979z'%3e%3c/path%3e%3cpath fill='%23496170' d='M308.355 500.486c-8.188-8.716-12.966-19.137-12.966-30.342c0-30.584 35.487-55.38 79.255-55.38c23.05 0 43.795 6.883 58.278 17.861c-33.493 33.548-76.472 57.612-124.567 67.861zm197.617-246.612c-.469-56.359-19.585-108.266-51.487-149.864c-32.308 10.007-55.781 40.123-55.781 75.718c0 43.769 35.487 79.256 79.255 79.256a79.005 79.005 0 0 0 28.013-5.11zM256 6.003c3.701 0 6.626 21.938 8.776 56.613c19.155-11.21 33.393-29.912 38.669-52.097A251.222 251.222 0 0 0 256 6.003zm12.49 161.8c.665 36.993.895 76.935.689 115.968l-.106.002c39.345 0 71.238-25.959 71.238-57.991s-31.893-57.991-71.238-57.991'%3e%3c/path%3e%3c/svg%3e";

    var img$4 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='utf-8'%3f%3e%3c!-- Uploaded to: SVG Repo%2c www.svgrepo.com%2c Generator: SVG Repo Mixer Tools --%3e%3csvg width='800px' height='800px' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' class='iconify iconify--fxemoji' preserveAspectRatio='xMidYMid meet'%3e%3cpath fill='%235A7B90' d='M505.999 256c0 138.069-111.932 250-250 250S6 394.068 6 256C6 117.932 117.931 6.001 255.999 6.001s250 111.931 250 249.999'%3e%3c/path%3e%3cpath fill='%23496170' d='M440.896 344.172c0 18.972-18.895 34.357-42.196 34.357c-23.31 0-42.204-15.385-42.204-34.357c0-18.971 18.894-34.356 42.204-34.356c23.301 0 42.196 15.385 42.196 34.356M79.079 79.375c14.483 10.978 35.227 17.861 58.277 17.861c43.769 0 79.256-24.797 79.256-55.381c0-11.204-4.778-21.624-12.965-30.34c-48.096 10.248-91.075 34.312-124.568 67.86zM34.04 253.014c-9.864 0-19.3 1.817-28.011 5.11c.47 56.362 19.586 108.269 51.486 149.865c32.313-10.006 55.782-40.123 55.782-75.72c-.001-43.767-35.481-79.255-79.257-79.255zm442.051 13.174c0 17.228 10.333 32.037 25.138 38.592a251.187 251.187 0 0 0 4.772-48.781c0-10.018-.607-19.893-1.753-29.603c-16.402 5.787-28.157 21.414-28.157 39.792zm-220.092-67.374c-39.345 0-71.238 25.959-71.238 57.991s31.893 57.991 71.238 57.991s71.238-25.959 71.238-57.991s-31.893-57.991-71.238-57.991zm42.215-155.689c0 23.302 18.886 42.196 42.196 42.196c23.301 0 42.196-18.894 42.196-42.196c0-.934-.041-1.859-.101-2.778a248.386 248.386 0 0 0-70.831-28.11c-8.277 7.704-13.46 18.689-13.46 30.888zm-89.658 458.357a251.23 251.23 0 0 0 47.445 4.516c37.88 0 73.782-8.44 105.954-23.516c-13.773-26.355-41.35-44.354-73.148-44.354c-38.972-.001-71.613 27.026-80.251 63.354z'%3e%3c/path%3e%3c/svg%3e";

    var img$3 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='utf-8'%3f%3e%3c!-- Uploaded to: SVG Repo%2c www.svgrepo.com%2c Generator: SVG Repo Mixer Tools --%3e%3csvg width='800px' height='800px' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' class='iconify iconify--fxemoji' preserveAspectRatio='xMidYMid meet'%3e%3cpath fill='%235A7B90' d='M6.002 256c0-138.069 111.931-250 249.999-250S506 117.931 506 256c0 138.068-111.931 249.999-249.999 249.999S6.002 394.068 6.002 256'%3e%3c/path%3e%3cpath fill='%23496170' d='M308.354 500.486c-8.188-8.716-12.966-19.137-12.966-30.341c0-30.584 35.487-55.381 79.255-55.381c23.049 0 43.794 6.882 58.277 17.86c-33.493 33.548-76.472 57.613-124.566 67.862zm197.618-246.611c-.469-56.359-19.586-108.266-51.489-149.863c-32.307 10.008-55.778 40.123-55.778 75.718c0 43.769 35.487 79.256 79.255 79.256a79.074 79.074 0 0 0 28.012-5.111zM303.445 10.52A251.237 251.237 0 0 0 256 6.003c-37.878 0-73.78 8.44-105.952 23.518c13.773 26.354 41.349 44.352 73.146 44.352c38.97-.001 71.611-27.027 80.251-63.353zm-34.373 157.271c-39.345 0-71.238 25.959-71.238 57.991s31.892 57.991 71.238 57.991c39.345 0 71.238-25.959 71.238-57.991s-31.893-57.991-71.238-57.991zM113.3 133.471c-23.302 0-42.196 15.385-42.196 34.356c0 18.972 18.894 34.357 42.196 34.357c23.31 0 42.204-15.385 42.204-34.357c0-18.971-18.894-34.356-42.204-34.356zm113.844 209.875c-23.302 0-42.196 18.894-42.196 42.196s18.894 42.196 42.196 42.196c23.31 0 42.204-18.894 42.204-42.196s-18.894-42.196-42.204-42.196z'%3e%3c/path%3e%3cpath fill='%23FDE364' d='M109.084 256c0-120.398 85.127-220.856 198.453-244.623c-16.64-3.486-33.861-5.376-51.538-5.376C117.931 6.001 6 117.932 6 256c0 138.069 111.931 250 249.999 250c17.678 0 34.899-1.89 51.538-5.376C194.212 476.857 109.084 376.391 109.084 256'%3e%3c/path%3e%3c/svg%3e";

    var img$2 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='utf-8'%3f%3e%3c!-- Uploaded to: SVG Repo%2c www.svgrepo.com%2c Generator: SVG Repo Mixer Tools --%3e%3csvg width='800px' height='800px' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' class='iconify iconify--fxemoji' preserveAspectRatio='xMidYMid meet'%3e%3cpath fill='%23FDE364' d='M505.998 256c0 138.069-111.931 250-249.999 250S6 394.069 6 256C6 117.932 117.931 6.001 255.999 6.001S505.998 117.932 505.998 256'%3e%3c/path%3e%3cpath fill='%23FFC63A' d='M203.645 11.513c8.189 8.717 12.967 19.137 12.967 30.342c0 30.584-35.487 55.381-79.256 55.381c-23.049 0-43.793-6.882-58.276-17.86c33.494-33.548 76.472-57.613 124.565-67.863zM34.04 253.015c-9.864 0-19.3 1.817-28.012 5.11c.471 56.362 19.588 108.268 51.49 149.864c32.311-10.007 55.778-40.123 55.778-75.719c0-43.768-35.479-79.255-79.256-79.255zm174.515 248.464A251.237 251.237 0 0 0 256 505.995c37.878 0 73.78-8.44 105.952-23.516c-13.773-26.354-41.349-44.351-73.146-44.351c-38.97-.001-71.611 27.025-80.251 63.351zm34.372-273.253c-39.345 0-71.238 25.959-71.238 57.991s31.893 57.991 71.238 57.991s71.238-25.959 71.238-57.991c.001-32.032-31.892-57.991-71.238-57.991zM398.7 309.815c-23.31 0-42.204 15.385-42.204 34.356c0 18.972 18.894 34.357 42.204 34.357c23.302 0 42.196-15.385 42.196-34.357c0-18.971-18.894-34.356-42.196-34.356zM284.855 84.262c-23.31 0-42.204 18.894-42.204 42.196s18.894 42.196 42.204 42.196c23.302 0 42.196-18.894 42.196-42.196s-18.894-42.196-42.196-42.196z'%3e%3c/path%3e%3cpath fill='%23496170' d='M402.916 255.999c0 120.398-85.128 220.856-198.453 244.623c16.64 3.486 33.861 5.376 51.538 5.376C394.069 505.999 506 394.068 506 255.999C506 117.931 394.069 6 256.001 6c-17.678 0-34.898 1.89-51.538 5.376c113.325 23.767 198.453 124.233 198.453 244.623'%3e%3c/path%3e%3c/svg%3e";

    var img$1 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='utf-8'%3f%3e%3c!-- Uploaded to: SVG Repo%2c www.svgrepo.com%2c Generator: SVG Repo Mixer Tools --%3e%3csvg width='800px' height='800px' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' class='iconify iconify--fxemoji' preserveAspectRatio='xMidYMid meet'%3e%3cpath fill='%235A7B90' d='M505.998 256c0 138.07-111.926 250.002-250.004 250.002C117.925 506.003 6 394.07 6 256S117.925 5.998 255.994 5.998C394.072 5.998 505.998 117.93 505.998 256'%3e%3c/path%3e%3cpath fill='%23496170' d='M440.896 344.174c0 18.972-18.896 34.357-42.197 34.357c-23.31 0-42.204-15.385-42.204-34.357c0-18.971 18.894-34.357 42.204-34.357c23.301 0 42.197 15.385 42.197 34.357M327.05 126.456c0-23.302-18.896-42.196-42.197-42.196c-23.31 0-42.204 18.894-42.204 42.196c0 23.303 18.894 42.197 42.204 42.197c23.301-.001 42.197-18.894 42.197-42.197M79.078 79.374c14.481 10.977 35.223 17.86 58.272 17.86c43.77 0 79.258-24.797 79.258-55.382c0-11.204-4.778-21.624-12.965-30.34c-48.094 10.249-91.073 34.314-124.565 67.862zM34.035 253.015a79.04 79.04 0 0 0-28.006 5.108c.47 56.363 19.585 108.27 51.484 149.867c32.308-10.008 55.78-40.124 55.78-75.719c0-43.768-35.488-79.256-79.258-79.256zm174.516 248.47a251.222 251.222 0 0 0 47.445 4.516c37.879 0 73.782-8.44 105.955-23.518c-13.773-26.355-41.351-44.353-73.149-44.353c-38.971 0-71.612 27.027-80.251 63.355zm34.373-273.259c-39.339 0-71.239 25.959-71.239 57.992s31.9 57.992 71.239 57.992c39.344 0 71.239-25.959 71.239-57.992c0-32.032-31.895-57.992-71.239-57.992z'%3e%3c/path%3e%3cpath fill='%23FDE364' d='M403.915 255.999c0 120.4-85.129 221.489-198.464 245.256c16.647 3.486 33.781 5.703 51.459 5.703C394.98 506.958 507 394.07 507 255.999C507 117.93 395.068 5.997 256.998 5.997c-17.678 0-34.9 1.037-51.547 4.523c113.336 23.768 198.464 125.088 198.464 245.479'%3e%3c/path%3e%3c/svg%3e";

    var img = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='utf-8'%3f%3e%3c!-- Uploaded to: SVG Repo%2c www.svgrepo.com%2c Generator: SVG Repo Mixer Tools --%3e%3csvg width='800px' height='800px' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' aria-hidden='true' role='img' class='iconify iconify--fxemoji' preserveAspectRatio='xMidYMid meet'%3e%3cpath fill='%23FDE364' d='M6.002 256c0-138.068 111.931-249.999 249.999-249.999S506 117.931 506 256c0 138.068-111.931 249.999-249.999 249.999S6.002 394.068 6.002 256'%3e%3c/path%3e%3cpath fill='%23FFC63A' d='M184.949 385.542c0-23.302 18.894-42.196 42.196-42.196c23.31 0 42.204 18.894 42.204 42.196s-18.894 42.196-42.204 42.196c-23.302 0-42.196-18.894-42.196-42.196m12.885-159.76c0 32.032 31.893 57.991 71.238 57.991s71.238-25.959 71.238-57.991s-31.893-57.991-71.238-57.991s-71.238 25.959-71.238 57.991m235.088 206.843c-14.483-10.978-35.228-17.861-58.278-17.861c-43.768 0-79.256 24.797-79.256 55.381c0 11.205 4.778 21.625 12.966 30.342c48.095-10.249 91.075-34.314 124.568-67.862zm73.05-178.75c-.469-56.359-19.585-108.266-51.487-149.864c-32.308 10.007-55.781 40.123-55.781 75.718c0 43.769 35.487 79.256 79.256 79.256c9.864 0 19.3-1.817 28.012-5.11zM303.445 10.519A251.23 251.23 0 0 0 256 6.003c-37.879 0-73.781 8.44-105.953 23.516c13.773 26.355 41.35 44.353 73.147 44.353c38.97 0 71.612-27.026 80.251-63.353zM113.3 133.471c-23.302 0-42.196 15.385-42.196 34.356c0 18.972 18.894 34.357 42.196 34.357c23.31 0 42.204-15.385 42.204-34.357c0-18.971-18.894-34.356-42.204-34.356z'%3e%3c/path%3e%3cpath fill='%23496170' d='M109.084 256c0-120.398 85.128-220.856 198.453-244.623c-16.64-3.486-33.861-5.376-51.538-5.376C117.931 6.001 6 117.932 6 256c0 138.069 111.931 250 249.999 250c17.678 0 34.899-1.89 51.538-5.376C194.212 476.857 109.084 376.391 109.084 256'%3e%3c/path%3e%3c/svg%3e";

    // Forms in moon
    const svg = {
        forms: {
            first_quarter: img$v,
            full_moon: img$u,
            last_quarter: img$t,
            new_moon: img$s,
            waning_crescent: img$r,
            waning_gibbous: img$q,
            waxing_crescent: img$p,
            waxing_gibbous: img$o
        },
        round: {
            first_quarter: img$n,
            full_moon: img$m,
            last_quarter: img$l,
            new_moon: img$k,
            waning_crescent: img$j,
            waning_gibbous: img$i,
            waxing_crescent: img$h,
            waxing_gibbous: img$g
        },
        photo: {
            first_quarter: img$f,
            full_moon: img$e,
            last_quarter: img$d,
            new_moon: img$c,
            waning_crescent: img$b,
            waning_gibbous: img$a,
            waxing_crescent: img$9,
            waxing_gibbous: img$8
        },
        clear: {
            first_quarter: img$7,
            full_moon: img$6,
            last_quarter: img$5,
            new_moon: img$4,
            waning_crescent: img$3,
            waning_gibbous: img$2,
            waxing_crescent: img$1,
            waxing_gibbous: img
        }
    };

    var de = {
    	
    };

    var de$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        default: de
    });

    var common$1 = {
    	version: "Version",
    	title: "Minimal Sun Moon",
    	title_card: "Minimal Sun Moon Card",
    	description: "A minimal card to render the state of the sun and moon.",
    	invalid_configuration: "Invalid configuration"
    };
    var editor$1 = {
    	moon_entity: "Moon entity (Optional)"
    };
    var errors$1 = {
    	missing_moon_entity: "moon_entity is missing in configuration",
    	invalid_icon_type: "The following colors in your configuration are invalid:"
    };
    var card$1 = {
    	moon_info: "The moon is in the {phase} phase tonight."
    };
    var moon$1 = {
    	new_moon: "New Moon",
    	waxing_crescent: "Waxing Crescent",
    	first_quarter: "First Quarter",
    	waxing_gibbous: "Waxing Gibbous",
    	full_moon: "Full Moon",
    	waning_gibbous: "Waning Gibbous",
    	last_quarter: "Last Quarter",
    	waning_crescent: "Waning Crescent"
    };
    var en = {
    	common: common$1,
    	editor: editor$1,
    	errors: errors$1,
    	card: card$1,
    	moon: moon$1
    };

    var en$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        card: card$1,
        common: common$1,
        default: en,
        editor: editor$1,
        errors: errors$1,
        moon: moon$1
    });

    var es = {
    	
    };

    var es$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        default: es
    });

    var common = {
    	version: "Version",
    	title: "Phases de la lune",
    	title_card: "Simple carte des phases de la lune",
    	description: "Une simple carte pour afficher la phase de la lune",
    	invalid_configuration: "Invalid configuration"
    };
    var editor = {
    	moon_entity: "Entité de la lune"
    };
    var errors = {
    	missing_moon_entity: "Sensor de la lune manquant",
    	invalid_icon_type: "Type d'icone incorect"
    };
    var card = {
    	moon_info: "La lune est en phase de : {phase}."
    };
    var moon = {
    	new_moon: "Nouvelle lune",
    	waxing_crescent: "Lune montante",
    	first_quarter: "Premier quartier",
    	waxing_gibbous: "Lune gibeuse montante",
    	full_moon: "Pleine lune",
    	waning_gibbous: "Lune gibeuse descendante",
    	last_quarter: "Dernier quartier",
    	waning_crescent: "Lune descendante"
    };
    var fr = {
    	common: common,
    	editor: editor,
    	errors: errors,
    	card: card,
    	moon: moon
    };

    var fr$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        card: card,
        common: common,
        default: fr,
        editor: editor,
        errors: errors,
        moon: moon
    });

    var it = {
    	
    };

    var it$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        default: it
    });

    var nb = {
    	
    };

    var nb$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        default: nb
    });

    var nl = {
    	
    };

    var nl$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        default: nl
    });

    var pl = {
    	
    };

    var pl$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        default: pl
    });

    var pt = {
    	
    };

    var pt$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        default: pt
    });

    var ptBR = {
    	
    };

    var pt_BR = /*#__PURE__*/Object.freeze({
        __proto__: null,
        default: ptBR
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const languages = {
        de: de$1,
        en: en$1,
        es: es$1,
        fr: fr$1,
        it: it$1,
        nb: nb$1,
        nl: nl$1,
        pl: pl$1,
        pt: pt$1,
        pt_BR,
    };
    function localize(key, locale) {
        let translated;
        const lang = locale
            .replace(/['"]+/g, '')
            .replace('-', '_')
            .replace('_', '')
            .toLowerCase();
        try {
            translated = key.split('.').reduce((o, i) => o[i], languages[lang]);
        }
        catch (e) {
            translated = key.split('.').reduce((o, i) => o[i], languages.en);
        }
        if (translated === undefined)
            translated = key.split('.').reduce((o, i) => o[i], languages.en);
        return translated;
    }

    // Définition de la classe
    class Personne {
        // Constructeur de la classe
        constructor(nom, age) {
            this.nom = nom;
            this.age = age;
        }
        // Méthode de la classe
        afficherInformations() {
            console.log(`Nom: ${this.nom}, Age: ${this.age}`);
        }
    }

    // these aren't really private, but nor are they really useful to document

    /**
     * @private
     */
    class LuxonError extends Error {}

    /**
     * @private
     */
    class InvalidDateTimeError extends LuxonError {
      constructor(reason) {
        super(`Invalid DateTime: ${reason.toMessage()}`);
      }
    }

    /**
     * @private
     */
    class InvalidIntervalError extends LuxonError {
      constructor(reason) {
        super(`Invalid Interval: ${reason.toMessage()}`);
      }
    }

    /**
     * @private
     */
    class InvalidDurationError extends LuxonError {
      constructor(reason) {
        super(`Invalid Duration: ${reason.toMessage()}`);
      }
    }

    /**
     * @private
     */
    class ConflictingSpecificationError extends LuxonError {}

    /**
     * @private
     */
    class InvalidUnitError extends LuxonError {
      constructor(unit) {
        super(`Invalid unit ${unit}`);
      }
    }

    /**
     * @private
     */
    class InvalidArgumentError extends LuxonError {}

    /**
     * @private
     */
    class ZoneIsAbstractError extends LuxonError {
      constructor() {
        super("Zone is an abstract class");
      }
    }

    /**
     * @private
     */

    const n = "numeric",
      s = "short",
      l = "long";

    const DATE_SHORT = {
      year: n,
      month: n,
      day: n,
    };

    const DATE_MED = {
      year: n,
      month: s,
      day: n,
    };

    const DATE_MED_WITH_WEEKDAY = {
      year: n,
      month: s,
      day: n,
      weekday: s,
    };

    const DATE_FULL = {
      year: n,
      month: l,
      day: n,
    };

    const DATE_HUGE = {
      year: n,
      month: l,
      day: n,
      weekday: l,
    };

    const TIME_SIMPLE = {
      hour: n,
      minute: n,
    };

    const TIME_WITH_SECONDS = {
      hour: n,
      minute: n,
      second: n,
    };

    const TIME_WITH_SHORT_OFFSET = {
      hour: n,
      minute: n,
      second: n,
      timeZoneName: s,
    };

    const TIME_WITH_LONG_OFFSET = {
      hour: n,
      minute: n,
      second: n,
      timeZoneName: l,
    };

    const TIME_24_SIMPLE = {
      hour: n,
      minute: n,
      hourCycle: "h23",
    };

    const TIME_24_WITH_SECONDS = {
      hour: n,
      minute: n,
      second: n,
      hourCycle: "h23",
    };

    const TIME_24_WITH_SHORT_OFFSET = {
      hour: n,
      minute: n,
      second: n,
      hourCycle: "h23",
      timeZoneName: s,
    };

    const TIME_24_WITH_LONG_OFFSET = {
      hour: n,
      minute: n,
      second: n,
      hourCycle: "h23",
      timeZoneName: l,
    };

    const DATETIME_SHORT = {
      year: n,
      month: n,
      day: n,
      hour: n,
      minute: n,
    };

    const DATETIME_SHORT_WITH_SECONDS = {
      year: n,
      month: n,
      day: n,
      hour: n,
      minute: n,
      second: n,
    };

    const DATETIME_MED = {
      year: n,
      month: s,
      day: n,
      hour: n,
      minute: n,
    };

    const DATETIME_MED_WITH_SECONDS = {
      year: n,
      month: s,
      day: n,
      hour: n,
      minute: n,
      second: n,
    };

    const DATETIME_MED_WITH_WEEKDAY = {
      year: n,
      month: s,
      day: n,
      weekday: s,
      hour: n,
      minute: n,
    };

    const DATETIME_FULL = {
      year: n,
      month: l,
      day: n,
      hour: n,
      minute: n,
      timeZoneName: s,
    };

    const DATETIME_FULL_WITH_SECONDS = {
      year: n,
      month: l,
      day: n,
      hour: n,
      minute: n,
      second: n,
      timeZoneName: s,
    };

    const DATETIME_HUGE = {
      year: n,
      month: l,
      day: n,
      weekday: l,
      hour: n,
      minute: n,
      timeZoneName: l,
    };

    const DATETIME_HUGE_WITH_SECONDS = {
      year: n,
      month: l,
      day: n,
      weekday: l,
      hour: n,
      minute: n,
      second: n,
      timeZoneName: l,
    };

    /**
     * @interface
     */
    class Zone {
      /**
       * The type of zone
       * @abstract
       * @type {string}
       */
      get type() {
        throw new ZoneIsAbstractError();
      }

      /**
       * The name of this zone.
       * @abstract
       * @type {string}
       */
      get name() {
        throw new ZoneIsAbstractError();
      }

      get ianaName() {
        return this.name;
      }

      /**
       * Returns whether the offset is known to be fixed for the whole year.
       * @abstract
       * @type {boolean}
       */
      get isUniversal() {
        throw new ZoneIsAbstractError();
      }

      /**
       * Returns the offset's common name (such as EST) at the specified timestamp
       * @abstract
       * @param {number} ts - Epoch milliseconds for which to get the name
       * @param {Object} opts - Options to affect the format
       * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
       * @param {string} opts.locale - What locale to return the offset name in.
       * @return {string}
       */
      offsetName(ts, opts) {
        throw new ZoneIsAbstractError();
      }

      /**
       * Returns the offset's value as a string
       * @abstract
       * @param {number} ts - Epoch milliseconds for which to get the offset
       * @param {string} format - What style of offset to return.
       *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
       * @return {string}
       */
      formatOffset(ts, format) {
        throw new ZoneIsAbstractError();
      }

      /**
       * Return the offset in minutes for this zone at the specified timestamp.
       * @abstract
       * @param {number} ts - Epoch milliseconds for which to compute the offset
       * @return {number}
       */
      offset(ts) {
        throw new ZoneIsAbstractError();
      }

      /**
       * Return whether this Zone is equal to another zone
       * @abstract
       * @param {Zone} otherZone - the zone to compare
       * @return {boolean}
       */
      equals(otherZone) {
        throw new ZoneIsAbstractError();
      }

      /**
       * Return whether this Zone is valid.
       * @abstract
       * @type {boolean}
       */
      get isValid() {
        throw new ZoneIsAbstractError();
      }
    }

    let singleton$1 = null;

    /**
     * Represents the local zone for this JavaScript environment.
     * @implements {Zone}
     */
    class SystemZone extends Zone {
      /**
       * Get a singleton instance of the local zone
       * @return {SystemZone}
       */
      static get instance() {
        if (singleton$1 === null) {
          singleton$1 = new SystemZone();
        }
        return singleton$1;
      }

      /** @override **/
      get type() {
        return "system";
      }

      /** @override **/
      get name() {
        return new Intl.DateTimeFormat().resolvedOptions().timeZone;
      }

      /** @override **/
      get isUniversal() {
        return false;
      }

      /** @override **/
      offsetName(ts, { format, locale }) {
        return parseZoneInfo(ts, format, locale);
      }

      /** @override **/
      formatOffset(ts, format) {
        return formatOffset(this.offset(ts), format);
      }

      /** @override **/
      offset(ts) {
        return -new Date(ts).getTimezoneOffset();
      }

      /** @override **/
      equals(otherZone) {
        return otherZone.type === "system";
      }

      /** @override **/
      get isValid() {
        return true;
      }
    }

    let dtfCache = {};
    function makeDTF(zone) {
      if (!dtfCache[zone]) {
        dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
          hour12: false,
          timeZone: zone,
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          era: "short",
        });
      }
      return dtfCache[zone];
    }

    const typeToPos = {
      year: 0,
      month: 1,
      day: 2,
      era: 3,
      hour: 4,
      minute: 5,
      second: 6,
    };

    function hackyOffset(dtf, date) {
      const formatted = dtf.format(date).replace(/\u200E/g, ""),
        parsed = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(formatted),
        [, fMonth, fDay, fYear, fadOrBc, fHour, fMinute, fSecond] = parsed;
      return [fYear, fMonth, fDay, fadOrBc, fHour, fMinute, fSecond];
    }

    function partsOffset(dtf, date) {
      const formatted = dtf.formatToParts(date);
      const filled = [];
      for (let i = 0; i < formatted.length; i++) {
        const { type, value } = formatted[i];
        const pos = typeToPos[type];

        if (type === "era") {
          filled[pos] = value;
        } else if (!isUndefined(pos)) {
          filled[pos] = parseInt(value, 10);
        }
      }
      return filled;
    }

    let ianaZoneCache = {};
    /**
     * A zone identified by an IANA identifier, like America/New_York
     * @implements {Zone}
     */
    class IANAZone extends Zone {
      /**
       * @param {string} name - Zone name
       * @return {IANAZone}
       */
      static create(name) {
        if (!ianaZoneCache[name]) {
          ianaZoneCache[name] = new IANAZone(name);
        }
        return ianaZoneCache[name];
      }

      /**
       * Reset local caches. Should only be necessary in testing scenarios.
       * @return {void}
       */
      static resetCache() {
        ianaZoneCache = {};
        dtfCache = {};
      }

      /**
       * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
       * @param {string} s - The string to check validity on
       * @example IANAZone.isValidSpecifier("America/New_York") //=> true
       * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
       * @deprecated This method returns false for some valid IANA names. Use isValidZone instead.
       * @return {boolean}
       */
      static isValidSpecifier(s) {
        return this.isValidZone(s);
      }

      /**
       * Returns whether the provided string identifies a real zone
       * @param {string} zone - The string to check
       * @example IANAZone.isValidZone("America/New_York") //=> true
       * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
       * @example IANAZone.isValidZone("Sport~~blorp") //=> false
       * @return {boolean}
       */
      static isValidZone(zone) {
        if (!zone) {
          return false;
        }
        try {
          new Intl.DateTimeFormat("en-US", { timeZone: zone }).format();
          return true;
        } catch (e) {
          return false;
        }
      }

      constructor(name) {
        super();
        /** @private **/
        this.zoneName = name;
        /** @private **/
        this.valid = IANAZone.isValidZone(name);
      }

      /** @override **/
      get type() {
        return "iana";
      }

      /** @override **/
      get name() {
        return this.zoneName;
      }

      /** @override **/
      get isUniversal() {
        return false;
      }

      /** @override **/
      offsetName(ts, { format, locale }) {
        return parseZoneInfo(ts, format, locale, this.name);
      }

      /** @override **/
      formatOffset(ts, format) {
        return formatOffset(this.offset(ts), format);
      }

      /** @override **/
      offset(ts) {
        const date = new Date(ts);

        if (isNaN(date)) return NaN;

        const dtf = makeDTF(this.name);
        let [year, month, day, adOrBc, hour, minute, second] = dtf.formatToParts
          ? partsOffset(dtf, date)
          : hackyOffset(dtf, date);

        if (adOrBc === "BC") {
          year = -Math.abs(year) + 1;
        }

        // because we're using hour12 and https://bugs.chromium.org/p/chromium/issues/detail?id=1025564&can=2&q=%2224%3A00%22%20datetimeformat
        const adjustedHour = hour === 24 ? 0 : hour;

        const asUTC = objToLocalTS({
          year,
          month,
          day,
          hour: adjustedHour,
          minute,
          second,
          millisecond: 0,
        });

        let asTS = +date;
        const over = asTS % 1000;
        asTS -= over >= 0 ? over : 1000 + over;
        return (asUTC - asTS) / (60 * 1000);
      }

      /** @override **/
      equals(otherZone) {
        return otherZone.type === "iana" && otherZone.name === this.name;
      }

      /** @override **/
      get isValid() {
        return this.valid;
      }
    }

    // todo - remap caching

    let intlLFCache = {};
    function getCachedLF(locString, opts = {}) {
      const key = JSON.stringify([locString, opts]);
      let dtf = intlLFCache[key];
      if (!dtf) {
        dtf = new Intl.ListFormat(locString, opts);
        intlLFCache[key] = dtf;
      }
      return dtf;
    }

    let intlDTCache = {};
    function getCachedDTF(locString, opts = {}) {
      const key = JSON.stringify([locString, opts]);
      let dtf = intlDTCache[key];
      if (!dtf) {
        dtf = new Intl.DateTimeFormat(locString, opts);
        intlDTCache[key] = dtf;
      }
      return dtf;
    }

    let intlNumCache = {};
    function getCachedINF(locString, opts = {}) {
      const key = JSON.stringify([locString, opts]);
      let inf = intlNumCache[key];
      if (!inf) {
        inf = new Intl.NumberFormat(locString, opts);
        intlNumCache[key] = inf;
      }
      return inf;
    }

    let intlRelCache = {};
    function getCachedRTF(locString, opts = {}) {
      const { base, ...cacheKeyOpts } = opts; // exclude `base` from the options
      const key = JSON.stringify([locString, cacheKeyOpts]);
      let inf = intlRelCache[key];
      if (!inf) {
        inf = new Intl.RelativeTimeFormat(locString, opts);
        intlRelCache[key] = inf;
      }
      return inf;
    }

    let sysLocaleCache = null;
    function systemLocale() {
      if (sysLocaleCache) {
        return sysLocaleCache;
      } else {
        sysLocaleCache = new Intl.DateTimeFormat().resolvedOptions().locale;
        return sysLocaleCache;
      }
    }

    let weekInfoCache = {};
    function getCachedWeekInfo(locString) {
      let data = weekInfoCache[locString];
      if (!data) {
        const locale = new Intl.Locale(locString);
        // browsers currently implement this as a property, but spec says it should be a getter function
        data = "getWeekInfo" in locale ? locale.getWeekInfo() : locale.weekInfo;
        weekInfoCache[locString] = data;
      }
      return data;
    }

    function parseLocaleString(localeStr) {
      // I really want to avoid writing a BCP 47 parser
      // see, e.g. https://github.com/wooorm/bcp-47
      // Instead, we'll do this:

      // a) if the string has no -u extensions, just leave it alone
      // b) if it does, use Intl to resolve everything
      // c) if Intl fails, try again without the -u

      // private subtags and unicode subtags have ordering requirements,
      // and we're not properly parsing this, so just strip out the
      // private ones if they exist.
      const xIndex = localeStr.indexOf("-x-");
      if (xIndex !== -1) {
        localeStr = localeStr.substring(0, xIndex);
      }

      const uIndex = localeStr.indexOf("-u-");
      if (uIndex === -1) {
        return [localeStr];
      } else {
        let options;
        let selectedStr;
        try {
          options = getCachedDTF(localeStr).resolvedOptions();
          selectedStr = localeStr;
        } catch (e) {
          const smaller = localeStr.substring(0, uIndex);
          options = getCachedDTF(smaller).resolvedOptions();
          selectedStr = smaller;
        }

        const { numberingSystem, calendar } = options;
        return [selectedStr, numberingSystem, calendar];
      }
    }

    function intlConfigString(localeStr, numberingSystem, outputCalendar) {
      if (outputCalendar || numberingSystem) {
        if (!localeStr.includes("-u-")) {
          localeStr += "-u";
        }

        if (outputCalendar) {
          localeStr += `-ca-${outputCalendar}`;
        }

        if (numberingSystem) {
          localeStr += `-nu-${numberingSystem}`;
        }
        return localeStr;
      } else {
        return localeStr;
      }
    }

    function mapMonths(f) {
      const ms = [];
      for (let i = 1; i <= 12; i++) {
        const dt = DateTime.utc(2009, i, 1);
        ms.push(f(dt));
      }
      return ms;
    }

    function mapWeekdays(f) {
      const ms = [];
      for (let i = 1; i <= 7; i++) {
        const dt = DateTime.utc(2016, 11, 13 + i);
        ms.push(f(dt));
      }
      return ms;
    }

    function listStuff(loc, length, englishFn, intlFn) {
      const mode = loc.listingMode();

      if (mode === "error") {
        return null;
      } else if (mode === "en") {
        return englishFn(length);
      } else {
        return intlFn(length);
      }
    }

    function supportsFastNumbers(loc) {
      if (loc.numberingSystem && loc.numberingSystem !== "latn") {
        return false;
      } else {
        return (
          loc.numberingSystem === "latn" ||
          !loc.locale ||
          loc.locale.startsWith("en") ||
          new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn"
        );
      }
    }

    /**
     * @private
     */

    class PolyNumberFormatter {
      constructor(intl, forceSimple, opts) {
        this.padTo = opts.padTo || 0;
        this.floor = opts.floor || false;

        const { padTo, floor, ...otherOpts } = opts;

        if (!forceSimple || Object.keys(otherOpts).length > 0) {
          const intlOpts = { useGrouping: false, ...opts };
          if (opts.padTo > 0) intlOpts.minimumIntegerDigits = opts.padTo;
          this.inf = getCachedINF(intl, intlOpts);
        }
      }

      format(i) {
        if (this.inf) {
          const fixed = this.floor ? Math.floor(i) : i;
          return this.inf.format(fixed);
        } else {
          // to match the browser's numberformatter defaults
          const fixed = this.floor ? Math.floor(i) : roundTo(i, 3);
          return padStart(fixed, this.padTo);
        }
      }
    }

    /**
     * @private
     */

    class PolyDateFormatter {
      constructor(dt, intl, opts) {
        this.opts = opts;
        this.originalZone = undefined;

        let z = undefined;
        if (this.opts.timeZone) {
          // Don't apply any workarounds if a timeZone is explicitly provided in opts
          this.dt = dt;
        } else if (dt.zone.type === "fixed") {
          // UTC-8 or Etc/UTC-8 are not part of tzdata, only Etc/GMT+8 and the like.
          // That is why fixed-offset TZ is set to that unless it is:
          // 1. Representing offset 0 when UTC is used to maintain previous behavior and does not become GMT.
          // 2. Unsupported by the browser:
          //    - some do not support Etc/
          //    - < Etc/GMT-14, > Etc/GMT+12, and 30-minute or 45-minute offsets are not part of tzdata
          const gmtOffset = -1 * (dt.offset / 60);
          const offsetZ = gmtOffset >= 0 ? `Etc/GMT+${gmtOffset}` : `Etc/GMT${gmtOffset}`;
          if (dt.offset !== 0 && IANAZone.create(offsetZ).valid) {
            z = offsetZ;
            this.dt = dt;
          } else {
            // Not all fixed-offset zones like Etc/+4:30 are present in tzdata so
            // we manually apply the offset and substitute the zone as needed.
            z = "UTC";
            this.dt = dt.offset === 0 ? dt : dt.setZone("UTC").plus({ minutes: dt.offset });
            this.originalZone = dt.zone;
          }
        } else if (dt.zone.type === "system") {
          this.dt = dt;
        } else if (dt.zone.type === "iana") {
          this.dt = dt;
          z = dt.zone.name;
        } else {
          // Custom zones can have any offset / offsetName so we just manually
          // apply the offset and substitute the zone as needed.
          z = "UTC";
          this.dt = dt.setZone("UTC").plus({ minutes: dt.offset });
          this.originalZone = dt.zone;
        }

        const intlOpts = { ...this.opts };
        intlOpts.timeZone = intlOpts.timeZone || z;
        this.dtf = getCachedDTF(intl, intlOpts);
      }

      format() {
        if (this.originalZone) {
          // If we have to substitute in the actual zone name, we have to use
          // formatToParts so that the timezone can be replaced.
          return this.formatToParts()
            .map(({ value }) => value)
            .join("");
        }
        return this.dtf.format(this.dt.toJSDate());
      }

      formatToParts() {
        const parts = this.dtf.formatToParts(this.dt.toJSDate());
        if (this.originalZone) {
          return parts.map((part) => {
            if (part.type === "timeZoneName") {
              const offsetName = this.originalZone.offsetName(this.dt.ts, {
                locale: this.dt.locale,
                format: this.opts.timeZoneName,
              });
              return {
                ...part,
                value: offsetName,
              };
            } else {
              return part;
            }
          });
        }
        return parts;
      }

      resolvedOptions() {
        return this.dtf.resolvedOptions();
      }
    }

    /**
     * @private
     */
    class PolyRelFormatter {
      constructor(intl, isEnglish, opts) {
        this.opts = { style: "long", ...opts };
        if (!isEnglish && hasRelative()) {
          this.rtf = getCachedRTF(intl, opts);
        }
      }

      format(count, unit) {
        if (this.rtf) {
          return this.rtf.format(count, unit);
        } else {
          return formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
        }
      }

      formatToParts(count, unit) {
        if (this.rtf) {
          return this.rtf.formatToParts(count, unit);
        } else {
          return [];
        }
      }
    }

    const fallbackWeekSettings = {
      firstDay: 1,
      minimalDays: 4,
      weekend: [6, 7],
    };

    /**
     * @private
     */

    class Locale {
      static fromOpts(opts) {
        return Locale.create(
          opts.locale,
          opts.numberingSystem,
          opts.outputCalendar,
          opts.weekSettings,
          opts.defaultToEN
        );
      }

      static create(locale, numberingSystem, outputCalendar, weekSettings, defaultToEN = false) {
        const specifiedLocale = locale || Settings.defaultLocale;
        // the system locale is useful for human readable strings but annoying for parsing/formatting known formats
        const localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale());
        const numberingSystemR = numberingSystem || Settings.defaultNumberingSystem;
        const outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
        const weekSettingsR = validateWeekSettings(weekSettings) || Settings.defaultWeekSettings;
        return new Locale(localeR, numberingSystemR, outputCalendarR, weekSettingsR, specifiedLocale);
      }

      static resetCache() {
        sysLocaleCache = null;
        intlDTCache = {};
        intlNumCache = {};
        intlRelCache = {};
      }

      static fromObject({ locale, numberingSystem, outputCalendar, weekSettings } = {}) {
        return Locale.create(locale, numberingSystem, outputCalendar, weekSettings);
      }

      constructor(locale, numbering, outputCalendar, weekSettings, specifiedLocale) {
        const [parsedLocale, parsedNumberingSystem, parsedOutputCalendar] = parseLocaleString(locale);

        this.locale = parsedLocale;
        this.numberingSystem = numbering || parsedNumberingSystem || null;
        this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
        this.weekSettings = weekSettings;
        this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);

        this.weekdaysCache = { format: {}, standalone: {} };
        this.monthsCache = { format: {}, standalone: {} };
        this.meridiemCache = null;
        this.eraCache = {};

        this.specifiedLocale = specifiedLocale;
        this.fastNumbersCached = null;
      }

      get fastNumbers() {
        if (this.fastNumbersCached == null) {
          this.fastNumbersCached = supportsFastNumbers(this);
        }

        return this.fastNumbersCached;
      }

      listingMode() {
        const isActuallyEn = this.isEnglish();
        const hasNoWeirdness =
          (this.numberingSystem === null || this.numberingSystem === "latn") &&
          (this.outputCalendar === null || this.outputCalendar === "gregory");
        return isActuallyEn && hasNoWeirdness ? "en" : "intl";
      }

      clone(alts) {
        if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
          return this;
        } else {
          return Locale.create(
            alts.locale || this.specifiedLocale,
            alts.numberingSystem || this.numberingSystem,
            alts.outputCalendar || this.outputCalendar,
            validateWeekSettings(alts.weekSettings) || this.weekSettings,
            alts.defaultToEN || false
          );
        }
      }

      redefaultToEN(alts = {}) {
        return this.clone({ ...alts, defaultToEN: true });
      }

      redefaultToSystem(alts = {}) {
        return this.clone({ ...alts, defaultToEN: false });
      }

      months(length, format = false) {
        return listStuff(this, length, months, () => {
          const intl = format ? { month: length, day: "numeric" } : { month: length },
            formatStr = format ? "format" : "standalone";
          if (!this.monthsCache[formatStr][length]) {
            this.monthsCache[formatStr][length] = mapMonths((dt) => this.extract(dt, intl, "month"));
          }
          return this.monthsCache[formatStr][length];
        });
      }

      weekdays(length, format = false) {
        return listStuff(this, length, weekdays, () => {
          const intl = format
              ? { weekday: length, year: "numeric", month: "long", day: "numeric" }
              : { weekday: length },
            formatStr = format ? "format" : "standalone";
          if (!this.weekdaysCache[formatStr][length]) {
            this.weekdaysCache[formatStr][length] = mapWeekdays((dt) =>
              this.extract(dt, intl, "weekday")
            );
          }
          return this.weekdaysCache[formatStr][length];
        });
      }

      meridiems() {
        return listStuff(
          this,
          undefined,
          () => meridiems,
          () => {
            // In theory there could be aribitrary day periods. We're gonna assume there are exactly two
            // for AM and PM. This is probably wrong, but it's makes parsing way easier.
            if (!this.meridiemCache) {
              const intl = { hour: "numeric", hourCycle: "h12" };
              this.meridiemCache = [DateTime.utc(2016, 11, 13, 9), DateTime.utc(2016, 11, 13, 19)].map(
                (dt) => this.extract(dt, intl, "dayperiod")
              );
            }

            return this.meridiemCache;
          }
        );
      }

      eras(length) {
        return listStuff(this, length, eras, () => {
          const intl = { era: length };

          // This is problematic. Different calendars are going to define eras totally differently. What I need is the minimum set of dates
          // to definitely enumerate them.
          if (!this.eraCache[length]) {
            this.eraCache[length] = [DateTime.utc(-40, 1, 1), DateTime.utc(2017, 1, 1)].map((dt) =>
              this.extract(dt, intl, "era")
            );
          }

          return this.eraCache[length];
        });
      }

      extract(dt, intlOpts, field) {
        const df = this.dtFormatter(dt, intlOpts),
          results = df.formatToParts(),
          matching = results.find((m) => m.type.toLowerCase() === field);
        return matching ? matching.value : null;
      }

      numberFormatter(opts = {}) {
        // this forcesimple option is never used (the only caller short-circuits on it, but it seems safer to leave)
        // (in contrast, the rest of the condition is used heavily)
        return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
      }

      dtFormatter(dt, intlOpts = {}) {
        return new PolyDateFormatter(dt, this.intl, intlOpts);
      }

      relFormatter(opts = {}) {
        return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
      }

      listFormatter(opts = {}) {
        return getCachedLF(this.intl, opts);
      }

      isEnglish() {
        return (
          this.locale === "en" ||
          this.locale.toLowerCase() === "en-us" ||
          new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")
        );
      }

      getWeekSettings() {
        if (this.weekSettings) {
          return this.weekSettings;
        } else if (!hasLocaleWeekInfo()) {
          return fallbackWeekSettings;
        } else {
          return getCachedWeekInfo(this.locale);
        }
      }

      getStartOfWeek() {
        return this.getWeekSettings().firstDay;
      }

      getMinDaysInFirstWeek() {
        return this.getWeekSettings().minimalDays;
      }

      getWeekendDays() {
        return this.getWeekSettings().weekend;
      }

      equals(other) {
        return (
          this.locale === other.locale &&
          this.numberingSystem === other.numberingSystem &&
          this.outputCalendar === other.outputCalendar
        );
      }
    }

    let singleton = null;

    /**
     * A zone with a fixed offset (meaning no DST)
     * @implements {Zone}
     */
    class FixedOffsetZone extends Zone {
      /**
       * Get a singleton instance of UTC
       * @return {FixedOffsetZone}
       */
      static get utcInstance() {
        if (singleton === null) {
          singleton = new FixedOffsetZone(0);
        }
        return singleton;
      }

      /**
       * Get an instance with a specified offset
       * @param {number} offset - The offset in minutes
       * @return {FixedOffsetZone}
       */
      static instance(offset) {
        return offset === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(offset);
      }

      /**
       * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
       * @param {string} s - The offset string to parse
       * @example FixedOffsetZone.parseSpecifier("UTC+6")
       * @example FixedOffsetZone.parseSpecifier("UTC+06")
       * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
       * @return {FixedOffsetZone}
       */
      static parseSpecifier(s) {
        if (s) {
          const r = s.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
          if (r) {
            return new FixedOffsetZone(signedOffset(r[1], r[2]));
          }
        }
        return null;
      }

      constructor(offset) {
        super();
        /** @private **/
        this.fixed = offset;
      }

      /** @override **/
      get type() {
        return "fixed";
      }

      /** @override **/
      get name() {
        return this.fixed === 0 ? "UTC" : `UTC${formatOffset(this.fixed, "narrow")}`;
      }

      get ianaName() {
        if (this.fixed === 0) {
          return "Etc/UTC";
        } else {
          return `Etc/GMT${formatOffset(-this.fixed, "narrow")}`;
        }
      }

      /** @override **/
      offsetName() {
        return this.name;
      }

      /** @override **/
      formatOffset(ts, format) {
        return formatOffset(this.fixed, format);
      }

      /** @override **/
      get isUniversal() {
        return true;
      }

      /** @override **/
      offset() {
        return this.fixed;
      }

      /** @override **/
      equals(otherZone) {
        return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
      }

      /** @override **/
      get isValid() {
        return true;
      }
    }

    /**
     * A zone that failed to parse. You should never need to instantiate this.
     * @implements {Zone}
     */
    class InvalidZone extends Zone {
      constructor(zoneName) {
        super();
        /**  @private */
        this.zoneName = zoneName;
      }

      /** @override **/
      get type() {
        return "invalid";
      }

      /** @override **/
      get name() {
        return this.zoneName;
      }

      /** @override **/
      get isUniversal() {
        return false;
      }

      /** @override **/
      offsetName() {
        return null;
      }

      /** @override **/
      formatOffset() {
        return "";
      }

      /** @override **/
      offset() {
        return NaN;
      }

      /** @override **/
      equals() {
        return false;
      }

      /** @override **/
      get isValid() {
        return false;
      }
    }

    /**
     * @private
     */


    function normalizeZone(input, defaultZone) {
      if (isUndefined(input) || input === null) {
        return defaultZone;
      } else if (input instanceof Zone) {
        return input;
      } else if (isString(input)) {
        const lowered = input.toLowerCase();
        if (lowered === "default") return defaultZone;
        else if (lowered === "local" || lowered === "system") return SystemZone.instance;
        else if (lowered === "utc" || lowered === "gmt") return FixedOffsetZone.utcInstance;
        else return FixedOffsetZone.parseSpecifier(lowered) || IANAZone.create(input);
      } else if (isNumber(input)) {
        return FixedOffsetZone.instance(input);
      } else if (typeof input === "object" && "offset" in input && typeof input.offset === "function") {
        // This is dumb, but the instanceof check above doesn't seem to really work
        // so we're duck checking it
        return input;
      } else {
        return new InvalidZone(input);
      }
    }

    let now = () => Date.now(),
      defaultZone = "system",
      defaultLocale = null,
      defaultNumberingSystem = null,
      defaultOutputCalendar = null,
      twoDigitCutoffYear = 60,
      throwOnInvalid,
      defaultWeekSettings = null;

    /**
     * Settings contains static getters and setters that control Luxon's overall behavior. Luxon is a simple library with few options, but the ones it does have live here.
     */
    class Settings {
      /**
       * Get the callback for returning the current timestamp.
       * @type {function}
       */
      static get now() {
        return now;
      }

      /**
       * Set the callback for returning the current timestamp.
       * The function should return a number, which will be interpreted as an Epoch millisecond count
       * @type {function}
       * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
       * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
       */
      static set now(n) {
        now = n;
      }

      /**
       * Set the default time zone to create DateTimes in. Does not affect existing instances.
       * Use the value "system" to reset this value to the system's time zone.
       * @type {string}
       */
      static set defaultZone(zone) {
        defaultZone = zone;
      }

      /**
       * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
       * The default value is the system's time zone (the one set on the machine that runs this code).
       * @type {Zone}
       */
      static get defaultZone() {
        return normalizeZone(defaultZone, SystemZone.instance);
      }

      /**
       * Get the default locale to create DateTimes with. Does not affect existing instances.
       * @type {string}
       */
      static get defaultLocale() {
        return defaultLocale;
      }

      /**
       * Set the default locale to create DateTimes with. Does not affect existing instances.
       * @type {string}
       */
      static set defaultLocale(locale) {
        defaultLocale = locale;
      }

      /**
       * Get the default numbering system to create DateTimes with. Does not affect existing instances.
       * @type {string}
       */
      static get defaultNumberingSystem() {
        return defaultNumberingSystem;
      }

      /**
       * Set the default numbering system to create DateTimes with. Does not affect existing instances.
       * @type {string}
       */
      static set defaultNumberingSystem(numberingSystem) {
        defaultNumberingSystem = numberingSystem;
      }

      /**
       * Get the default output calendar to create DateTimes with. Does not affect existing instances.
       * @type {string}
       */
      static get defaultOutputCalendar() {
        return defaultOutputCalendar;
      }

      /**
       * Set the default output calendar to create DateTimes with. Does not affect existing instances.
       * @type {string}
       */
      static set defaultOutputCalendar(outputCalendar) {
        defaultOutputCalendar = outputCalendar;
      }

      /**
       * @typedef {Object} WeekSettings
       * @property {number} firstDay
       * @property {number} minimalDays
       * @property {number[]} weekend
       */

      /**
       * @return {WeekSettings|null}
       */
      static get defaultWeekSettings() {
        return defaultWeekSettings;
      }

      /**
       * Allows overriding the default locale week settings, i.e. the start of the week, the weekend and
       * how many days are required in the first week of a year.
       * Does not affect existing instances.
       *
       * @param {WeekSettings|null} weekSettings
       */
      static set defaultWeekSettings(weekSettings) {
        defaultWeekSettings = validateWeekSettings(weekSettings);
      }

      /**
       * Get the cutoff year after which a string encoding a year as two digits is interpreted to occur in the current century.
       * @type {number}
       */
      static get twoDigitCutoffYear() {
        return twoDigitCutoffYear;
      }

      /**
       * Set the cutoff year after which a string encoding a year as two digits is interpreted to occur in the current century.
       * @type {number}
       * @example Settings.twoDigitCutoffYear = 0 // cut-off year is 0, so all 'yy' are interpreted as current century
       * @example Settings.twoDigitCutoffYear = 50 // '49' -> 1949; '50' -> 2050
       * @example Settings.twoDigitCutoffYear = 1950 // interpreted as 50
       * @example Settings.twoDigitCutoffYear = 2050 // ALSO interpreted as 50
       */
      static set twoDigitCutoffYear(cutoffYear) {
        twoDigitCutoffYear = cutoffYear % 100;
      }

      /**
       * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
       * @type {boolean}
       */
      static get throwOnInvalid() {
        return throwOnInvalid;
      }

      /**
       * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
       * @type {boolean}
       */
      static set throwOnInvalid(t) {
        throwOnInvalid = t;
      }

      /**
       * Reset Luxon's global caches. Should only be necessary in testing scenarios.
       * @return {void}
       */
      static resetCaches() {
        Locale.resetCache();
        IANAZone.resetCache();
      }
    }

    class Invalid {
      constructor(reason, explanation) {
        this.reason = reason;
        this.explanation = explanation;
      }

      toMessage() {
        if (this.explanation) {
          return `${this.reason}: ${this.explanation}`;
        } else {
          return this.reason;
        }
      }
    }

    const nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
      leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];

    function unitOutOfRange(unit, value) {
      return new Invalid(
        "unit out of range",
        `you specified ${value} (of type ${typeof value}) as a ${unit}, which is invalid`
      );
    }

    function dayOfWeek(year, month, day) {
      const d = new Date(Date.UTC(year, month - 1, day));

      if (year < 100 && year >= 0) {
        d.setUTCFullYear(d.getUTCFullYear() - 1900);
      }

      const js = d.getUTCDay();

      return js === 0 ? 7 : js;
    }

    function computeOrdinal(year, month, day) {
      return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
    }

    function uncomputeOrdinal(year, ordinal) {
      const table = isLeapYear(year) ? leapLadder : nonLeapLadder,
        month0 = table.findIndex((i) => i < ordinal),
        day = ordinal - table[month0];
      return { month: month0 + 1, day };
    }

    function isoWeekdayToLocal(isoWeekday, startOfWeek) {
      return ((isoWeekday - startOfWeek + 7) % 7) + 1;
    }

    /**
     * @private
     */

    function gregorianToWeek(gregObj, minDaysInFirstWeek = 4, startOfWeek = 1) {
      const { year, month, day } = gregObj,
        ordinal = computeOrdinal(year, month, day),
        weekday = isoWeekdayToLocal(dayOfWeek(year, month, day), startOfWeek);

      let weekNumber = Math.floor((ordinal - weekday + 14 - minDaysInFirstWeek) / 7),
        weekYear;

      if (weekNumber < 1) {
        weekYear = year - 1;
        weekNumber = weeksInWeekYear(weekYear, minDaysInFirstWeek, startOfWeek);
      } else if (weekNumber > weeksInWeekYear(year, minDaysInFirstWeek, startOfWeek)) {
        weekYear = year + 1;
        weekNumber = 1;
      } else {
        weekYear = year;
      }

      return { weekYear, weekNumber, weekday, ...timeObject(gregObj) };
    }

    function weekToGregorian(weekData, minDaysInFirstWeek = 4, startOfWeek = 1) {
      const { weekYear, weekNumber, weekday } = weekData,
        weekdayOfJan4 = isoWeekdayToLocal(dayOfWeek(weekYear, 1, minDaysInFirstWeek), startOfWeek),
        yearInDays = daysInYear(weekYear);

      let ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 7 + minDaysInFirstWeek,
        year;

      if (ordinal < 1) {
        year = weekYear - 1;
        ordinal += daysInYear(year);
      } else if (ordinal > yearInDays) {
        year = weekYear + 1;
        ordinal -= daysInYear(weekYear);
      } else {
        year = weekYear;
      }

      const { month, day } = uncomputeOrdinal(year, ordinal);
      return { year, month, day, ...timeObject(weekData) };
    }

    function gregorianToOrdinal(gregData) {
      const { year, month, day } = gregData;
      const ordinal = computeOrdinal(year, month, day);
      return { year, ordinal, ...timeObject(gregData) };
    }

    function ordinalToGregorian(ordinalData) {
      const { year, ordinal } = ordinalData;
      const { month, day } = uncomputeOrdinal(year, ordinal);
      return { year, month, day, ...timeObject(ordinalData) };
    }

    /**
     * Check if local week units like localWeekday are used in obj.
     * If so, validates that they are not mixed with ISO week units and then copies them to the normal week unit properties.
     * Modifies obj in-place!
     * @param obj the object values
     */
    function usesLocalWeekValues(obj, loc) {
      const hasLocaleWeekData =
        !isUndefined(obj.localWeekday) ||
        !isUndefined(obj.localWeekNumber) ||
        !isUndefined(obj.localWeekYear);
      if (hasLocaleWeekData) {
        const hasIsoWeekData =
          !isUndefined(obj.weekday) || !isUndefined(obj.weekNumber) || !isUndefined(obj.weekYear);

        if (hasIsoWeekData) {
          throw new ConflictingSpecificationError(
            "Cannot mix locale-based week fields with ISO-based week fields"
          );
        }
        if (!isUndefined(obj.localWeekday)) obj.weekday = obj.localWeekday;
        if (!isUndefined(obj.localWeekNumber)) obj.weekNumber = obj.localWeekNumber;
        if (!isUndefined(obj.localWeekYear)) obj.weekYear = obj.localWeekYear;
        delete obj.localWeekday;
        delete obj.localWeekNumber;
        delete obj.localWeekYear;
        return {
          minDaysInFirstWeek: loc.getMinDaysInFirstWeek(),
          startOfWeek: loc.getStartOfWeek(),
        };
      } else {
        return { minDaysInFirstWeek: 4, startOfWeek: 1 };
      }
    }

    function hasInvalidWeekData(obj, minDaysInFirstWeek = 4, startOfWeek = 1) {
      const validYear = isInteger(obj.weekYear),
        validWeek = integerBetween(
          obj.weekNumber,
          1,
          weeksInWeekYear(obj.weekYear, minDaysInFirstWeek, startOfWeek)
        ),
        validWeekday = integerBetween(obj.weekday, 1, 7);

      if (!validYear) {
        return unitOutOfRange("weekYear", obj.weekYear);
      } else if (!validWeek) {
        return unitOutOfRange("week", obj.weekNumber);
      } else if (!validWeekday) {
        return unitOutOfRange("weekday", obj.weekday);
      } else return false;
    }

    function hasInvalidOrdinalData(obj) {
      const validYear = isInteger(obj.year),
        validOrdinal = integerBetween(obj.ordinal, 1, daysInYear(obj.year));

      if (!validYear) {
        return unitOutOfRange("year", obj.year);
      } else if (!validOrdinal) {
        return unitOutOfRange("ordinal", obj.ordinal);
      } else return false;
    }

    function hasInvalidGregorianData(obj) {
      const validYear = isInteger(obj.year),
        validMonth = integerBetween(obj.month, 1, 12),
        validDay = integerBetween(obj.day, 1, daysInMonth(obj.year, obj.month));

      if (!validYear) {
        return unitOutOfRange("year", obj.year);
      } else if (!validMonth) {
        return unitOutOfRange("month", obj.month);
      } else if (!validDay) {
        return unitOutOfRange("day", obj.day);
      } else return false;
    }

    function hasInvalidTimeData(obj) {
      const { hour, minute, second, millisecond } = obj;
      const validHour =
          integerBetween(hour, 0, 23) ||
          (hour === 24 && minute === 0 && second === 0 && millisecond === 0),
        validMinute = integerBetween(minute, 0, 59),
        validSecond = integerBetween(second, 0, 59),
        validMillisecond = integerBetween(millisecond, 0, 999);

      if (!validHour) {
        return unitOutOfRange("hour", hour);
      } else if (!validMinute) {
        return unitOutOfRange("minute", minute);
      } else if (!validSecond) {
        return unitOutOfRange("second", second);
      } else if (!validMillisecond) {
        return unitOutOfRange("millisecond", millisecond);
      } else return false;
    }

    /*
      This is just a junk drawer, containing anything used across multiple classes.
      Because Luxon is small(ish), this should stay small and we won't worry about splitting
      it up into, say, parsingUtil.js and basicUtil.js and so on. But they are divided up by feature area.
    */


    /**
     * @private
     */

    // TYPES

    function isUndefined(o) {
      return typeof o === "undefined";
    }

    function isNumber(o) {
      return typeof o === "number";
    }

    function isInteger(o) {
      return typeof o === "number" && o % 1 === 0;
    }

    function isString(o) {
      return typeof o === "string";
    }

    function isDate(o) {
      return Object.prototype.toString.call(o) === "[object Date]";
    }

    // CAPABILITIES

    function hasRelative() {
      try {
        return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
      } catch (e) {
        return false;
      }
    }

    function hasLocaleWeekInfo() {
      try {
        return (
          typeof Intl !== "undefined" &&
          !!Intl.Locale &&
          ("weekInfo" in Intl.Locale.prototype || "getWeekInfo" in Intl.Locale.prototype)
        );
      } catch (e) {
        return false;
      }
    }

    // OBJECTS AND ARRAYS

    function maybeArray(thing) {
      return Array.isArray(thing) ? thing : [thing];
    }

    function bestBy(arr, by, compare) {
      if (arr.length === 0) {
        return undefined;
      }
      return arr.reduce((best, next) => {
        const pair = [by(next), next];
        if (!best) {
          return pair;
        } else if (compare(best[0], pair[0]) === best[0]) {
          return best;
        } else {
          return pair;
        }
      }, null)[1];
    }

    function pick(obj, keys) {
      return keys.reduce((a, k) => {
        a[k] = obj[k];
        return a;
      }, {});
    }

    function hasOwnProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }

    function validateWeekSettings(settings) {
      if (settings == null) {
        return null;
      } else if (typeof settings !== "object") {
        throw new InvalidArgumentError("Week settings must be an object");
      } else {
        if (
          !integerBetween(settings.firstDay, 1, 7) ||
          !integerBetween(settings.minimalDays, 1, 7) ||
          !Array.isArray(settings.weekend) ||
          settings.weekend.some((v) => !integerBetween(v, 1, 7))
        ) {
          throw new InvalidArgumentError("Invalid week settings");
        }
        return {
          firstDay: settings.firstDay,
          minimalDays: settings.minimalDays,
          weekend: Array.from(settings.weekend),
        };
      }
    }

    // NUMBERS AND STRINGS

    function integerBetween(thing, bottom, top) {
      return isInteger(thing) && thing >= bottom && thing <= top;
    }

    // x % n but takes the sign of n instead of x
    function floorMod(x, n) {
      return x - n * Math.floor(x / n);
    }

    function padStart(input, n = 2) {
      const isNeg = input < 0;
      let padded;
      if (isNeg) {
        padded = "-" + ("" + -input).padStart(n, "0");
      } else {
        padded = ("" + input).padStart(n, "0");
      }
      return padded;
    }

    function parseInteger(string) {
      if (isUndefined(string) || string === null || string === "") {
        return undefined;
      } else {
        return parseInt(string, 10);
      }
    }

    function parseFloating(string) {
      if (isUndefined(string) || string === null || string === "") {
        return undefined;
      } else {
        return parseFloat(string);
      }
    }

    function parseMillis(fraction) {
      // Return undefined (instead of 0) in these cases, where fraction is not set
      if (isUndefined(fraction) || fraction === null || fraction === "") {
        return undefined;
      } else {
        const f = parseFloat("0." + fraction) * 1000;
        return Math.floor(f);
      }
    }

    function roundTo(number, digits, towardZero = false) {
      const factor = 10 ** digits,
        rounder = towardZero ? Math.trunc : Math.round;
      return rounder(number * factor) / factor;
    }

    // DATE BASICS

    function isLeapYear(year) {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    }

    function daysInYear(year) {
      return isLeapYear(year) ? 366 : 365;
    }

    function daysInMonth(year, month) {
      const modMonth = floorMod(month - 1, 12) + 1,
        modYear = year + (month - modMonth) / 12;

      if (modMonth === 2) {
        return isLeapYear(modYear) ? 29 : 28;
      } else {
        return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
      }
    }

    // convert a calendar object to a local timestamp (epoch, but with the offset baked in)
    function objToLocalTS(obj) {
      let d = Date.UTC(
        obj.year,
        obj.month - 1,
        obj.day,
        obj.hour,
        obj.minute,
        obj.second,
        obj.millisecond
      );

      // for legacy reasons, years between 0 and 99 are interpreted as 19XX; revert that
      if (obj.year < 100 && obj.year >= 0) {
        d = new Date(d);
        // set the month and day again, this is necessary because year 2000 is a leap year, but year 100 is not
        // so if obj.year is in 99, but obj.day makes it roll over into year 100,
        // the calculations done by Date.UTC are using year 2000 - which is incorrect
        d.setUTCFullYear(obj.year, obj.month - 1, obj.day);
      }
      return +d;
    }

    // adapted from moment.js: https://github.com/moment/moment/blob/000ac1800e620f770f4eb31b5ae908f6167b0ab2/src/lib/units/week-calendar-utils.js
    function firstWeekOffset(year, minDaysInFirstWeek, startOfWeek) {
      const fwdlw = isoWeekdayToLocal(dayOfWeek(year, 1, minDaysInFirstWeek), startOfWeek);
      return -fwdlw + minDaysInFirstWeek - 1;
    }

    function weeksInWeekYear(weekYear, minDaysInFirstWeek = 4, startOfWeek = 1) {
      const weekOffset = firstWeekOffset(weekYear, minDaysInFirstWeek, startOfWeek);
      const weekOffsetNext = firstWeekOffset(weekYear + 1, minDaysInFirstWeek, startOfWeek);
      return (daysInYear(weekYear) - weekOffset + weekOffsetNext) / 7;
    }

    function untruncateYear(year) {
      if (year > 99) {
        return year;
      } else return year > Settings.twoDigitCutoffYear ? 1900 + year : 2000 + year;
    }

    // PARSING

    function parseZoneInfo(ts, offsetFormat, locale, timeZone = null) {
      const date = new Date(ts),
        intlOpts = {
          hourCycle: "h23",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        };

      if (timeZone) {
        intlOpts.timeZone = timeZone;
      }

      const modified = { timeZoneName: offsetFormat, ...intlOpts };

      const parsed = new Intl.DateTimeFormat(locale, modified)
        .formatToParts(date)
        .find((m) => m.type.toLowerCase() === "timezonename");
      return parsed ? parsed.value : null;
    }

    // signedOffset('-5', '30') -> -330
    function signedOffset(offHourStr, offMinuteStr) {
      let offHour = parseInt(offHourStr, 10);

      // don't || this because we want to preserve -0
      if (Number.isNaN(offHour)) {
        offHour = 0;
      }

      const offMin = parseInt(offMinuteStr, 10) || 0,
        offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
      return offHour * 60 + offMinSigned;
    }

    // COERCION

    function asNumber(value) {
      const numericValue = Number(value);
      if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue))
        throw new InvalidArgumentError(`Invalid unit value ${value}`);
      return numericValue;
    }

    function normalizeObject(obj, normalizer) {
      const normalized = {};
      for (const u in obj) {
        if (hasOwnProperty(obj, u)) {
          const v = obj[u];
          if (v === undefined || v === null) continue;
          normalized[normalizer(u)] = asNumber(v);
        }
      }
      return normalized;
    }

    function formatOffset(offset, format) {
      const hours = Math.trunc(Math.abs(offset / 60)),
        minutes = Math.trunc(Math.abs(offset % 60)),
        sign = offset >= 0 ? "+" : "-";

      switch (format) {
        case "short":
          return `${sign}${padStart(hours, 2)}:${padStart(minutes, 2)}`;
        case "narrow":
          return `${sign}${hours}${minutes > 0 ? `:${minutes}` : ""}`;
        case "techie":
          return `${sign}${padStart(hours, 2)}${padStart(minutes, 2)}`;
        default:
          throw new RangeError(`Value format ${format} is out of range for property format`);
      }
    }

    function timeObject(obj) {
      return pick(obj, ["hour", "minute", "second", "millisecond"]);
    }

    /**
     * @private
     */

    const monthsLong = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const monthsShort = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const monthsNarrow = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

    function months(length) {
      switch (length) {
        case "narrow":
          return [...monthsNarrow];
        case "short":
          return [...monthsShort];
        case "long":
          return [...monthsLong];
        case "numeric":
          return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
        case "2-digit":
          return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        default:
          return null;
      }
    }

    const weekdaysLong = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    const weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    const weekdaysNarrow = ["M", "T", "W", "T", "F", "S", "S"];

    function weekdays(length) {
      switch (length) {
        case "narrow":
          return [...weekdaysNarrow];
        case "short":
          return [...weekdaysShort];
        case "long":
          return [...weekdaysLong];
        case "numeric":
          return ["1", "2", "3", "4", "5", "6", "7"];
        default:
          return null;
      }
    }

    const meridiems = ["AM", "PM"];

    const erasLong = ["Before Christ", "Anno Domini"];

    const erasShort = ["BC", "AD"];

    const erasNarrow = ["B", "A"];

    function eras(length) {
      switch (length) {
        case "narrow":
          return [...erasNarrow];
        case "short":
          return [...erasShort];
        case "long":
          return [...erasLong];
        default:
          return null;
      }
    }

    function meridiemForDateTime(dt) {
      return meridiems[dt.hour < 12 ? 0 : 1];
    }

    function weekdayForDateTime(dt, length) {
      return weekdays(length)[dt.weekday - 1];
    }

    function monthForDateTime(dt, length) {
      return months(length)[dt.month - 1];
    }

    function eraForDateTime(dt, length) {
      return eras(length)[dt.year < 0 ? 0 : 1];
    }

    function formatRelativeTime(unit, count, numeric = "always", narrow = false) {
      const units = {
        years: ["year", "yr."],
        quarters: ["quarter", "qtr."],
        months: ["month", "mo."],
        weeks: ["week", "wk."],
        days: ["day", "day", "days"],
        hours: ["hour", "hr."],
        minutes: ["minute", "min."],
        seconds: ["second", "sec."],
      };

      const lastable = ["hours", "minutes", "seconds"].indexOf(unit) === -1;

      if (numeric === "auto" && lastable) {
        const isDay = unit === "days";
        switch (count) {
          case 1:
            return isDay ? "tomorrow" : `next ${units[unit][0]}`;
          case -1:
            return isDay ? "yesterday" : `last ${units[unit][0]}`;
          case 0:
            return isDay ? "today" : `this ${units[unit][0]}`;
        }
      }

      const isInPast = Object.is(count, -0) || count < 0,
        fmtValue = Math.abs(count),
        singular = fmtValue === 1,
        lilUnits = units[unit],
        fmtUnit = narrow
          ? singular
            ? lilUnits[1]
            : lilUnits[2] || lilUnits[1]
          : singular
          ? units[unit][0]
          : unit;
      return isInPast ? `${fmtValue} ${fmtUnit} ago` : `in ${fmtValue} ${fmtUnit}`;
    }

    function stringifyTokens(splits, tokenToString) {
      let s = "";
      for (const token of splits) {
        if (token.literal) {
          s += token.val;
        } else {
          s += tokenToString(token.val);
        }
      }
      return s;
    }

    const macroTokenToFormatOpts = {
      D: DATE_SHORT,
      DD: DATE_MED,
      DDD: DATE_FULL,
      DDDD: DATE_HUGE,
      t: TIME_SIMPLE,
      tt: TIME_WITH_SECONDS,
      ttt: TIME_WITH_SHORT_OFFSET,
      tttt: TIME_WITH_LONG_OFFSET,
      T: TIME_24_SIMPLE,
      TT: TIME_24_WITH_SECONDS,
      TTT: TIME_24_WITH_SHORT_OFFSET,
      TTTT: TIME_24_WITH_LONG_OFFSET,
      f: DATETIME_SHORT,
      ff: DATETIME_MED,
      fff: DATETIME_FULL,
      ffff: DATETIME_HUGE,
      F: DATETIME_SHORT_WITH_SECONDS,
      FF: DATETIME_MED_WITH_SECONDS,
      FFF: DATETIME_FULL_WITH_SECONDS,
      FFFF: DATETIME_HUGE_WITH_SECONDS,
    };

    /**
     * @private
     */

    class Formatter {
      static create(locale, opts = {}) {
        return new Formatter(locale, opts);
      }

      static parseFormat(fmt) {
        // white-space is always considered a literal in user-provided formats
        // the " " token has a special meaning (see unitForToken)

        let current = null,
          currentFull = "",
          bracketed = false;
        const splits = [];
        for (let i = 0; i < fmt.length; i++) {
          const c = fmt.charAt(i);
          if (c === "'") {
            if (currentFull.length > 0) {
              splits.push({ literal: bracketed || /^\s+$/.test(currentFull), val: currentFull });
            }
            current = null;
            currentFull = "";
            bracketed = !bracketed;
          } else if (bracketed) {
            currentFull += c;
          } else if (c === current) {
            currentFull += c;
          } else {
            if (currentFull.length > 0) {
              splits.push({ literal: /^\s+$/.test(currentFull), val: currentFull });
            }
            currentFull = c;
            current = c;
          }
        }

        if (currentFull.length > 0) {
          splits.push({ literal: bracketed || /^\s+$/.test(currentFull), val: currentFull });
        }

        return splits;
      }

      static macroTokenToFormatOpts(token) {
        return macroTokenToFormatOpts[token];
      }

      constructor(locale, formatOpts) {
        this.opts = formatOpts;
        this.loc = locale;
        this.systemLoc = null;
      }

      formatWithSystemDefault(dt, opts) {
        if (this.systemLoc === null) {
          this.systemLoc = this.loc.redefaultToSystem();
        }
        const df = this.systemLoc.dtFormatter(dt, { ...this.opts, ...opts });
        return df.format();
      }

      dtFormatter(dt, opts = {}) {
        return this.loc.dtFormatter(dt, { ...this.opts, ...opts });
      }

      formatDateTime(dt, opts) {
        return this.dtFormatter(dt, opts).format();
      }

      formatDateTimeParts(dt, opts) {
        return this.dtFormatter(dt, opts).formatToParts();
      }

      formatInterval(interval, opts) {
        const df = this.dtFormatter(interval.start, opts);
        return df.dtf.formatRange(interval.start.toJSDate(), interval.end.toJSDate());
      }

      resolvedOptions(dt, opts) {
        return this.dtFormatter(dt, opts).resolvedOptions();
      }

      num(n, p = 0) {
        // we get some perf out of doing this here, annoyingly
        if (this.opts.forceSimple) {
          return padStart(n, p);
        }

        const opts = { ...this.opts };

        if (p > 0) {
          opts.padTo = p;
        }

        return this.loc.numberFormatter(opts).format(n);
      }

      formatDateTimeFromString(dt, fmt) {
        const knownEnglish = this.loc.listingMode() === "en",
          useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory",
          string = (opts, extract) => this.loc.extract(dt, opts, extract),
          formatOffset = (opts) => {
            if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
              return "Z";
            }

            return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
          },
          meridiem = () =>
            knownEnglish
              ? meridiemForDateTime(dt)
              : string({ hour: "numeric", hourCycle: "h12" }, "dayperiod"),
          month = (length, standalone) =>
            knownEnglish
              ? monthForDateTime(dt, length)
              : string(standalone ? { month: length } : { month: length, day: "numeric" }, "month"),
          weekday = (length, standalone) =>
            knownEnglish
              ? weekdayForDateTime(dt, length)
              : string(
                  standalone ? { weekday: length } : { weekday: length, month: "long", day: "numeric" },
                  "weekday"
                ),
          maybeMacro = (token) => {
            const formatOpts = Formatter.macroTokenToFormatOpts(token);
            if (formatOpts) {
              return this.formatWithSystemDefault(dt, formatOpts);
            } else {
              return token;
            }
          },
          era = (length) =>
            knownEnglish ? eraForDateTime(dt, length) : string({ era: length }, "era"),
          tokenToString = (token) => {
            // Where possible: https://cldr.unicode.org/translation/date-time/date-time-symbols
            switch (token) {
              // ms
              case "S":
                return this.num(dt.millisecond);
              case "u":
              // falls through
              case "SSS":
                return this.num(dt.millisecond, 3);
              // seconds
              case "s":
                return this.num(dt.second);
              case "ss":
                return this.num(dt.second, 2);
              // fractional seconds
              case "uu":
                return this.num(Math.floor(dt.millisecond / 10), 2);
              case "uuu":
                return this.num(Math.floor(dt.millisecond / 100));
              // minutes
              case "m":
                return this.num(dt.minute);
              case "mm":
                return this.num(dt.minute, 2);
              // hours
              case "h":
                return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);
              case "hh":
                return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);
              case "H":
                return this.num(dt.hour);
              case "HH":
                return this.num(dt.hour, 2);
              // offset
              case "Z":
                // like +6
                return formatOffset({ format: "narrow", allowZ: this.opts.allowZ });
              case "ZZ":
                // like +06:00
                return formatOffset({ format: "short", allowZ: this.opts.allowZ });
              case "ZZZ":
                // like +0600
                return formatOffset({ format: "techie", allowZ: this.opts.allowZ });
              case "ZZZZ":
                // like EST
                return dt.zone.offsetName(dt.ts, { format: "short", locale: this.loc.locale });
              case "ZZZZZ":
                // like Eastern Standard Time
                return dt.zone.offsetName(dt.ts, { format: "long", locale: this.loc.locale });
              // zone
              case "z":
                // like America/New_York
                return dt.zoneName;
              // meridiems
              case "a":
                return meridiem();
              // dates
              case "d":
                return useDateTimeFormatter ? string({ day: "numeric" }, "day") : this.num(dt.day);
              case "dd":
                return useDateTimeFormatter ? string({ day: "2-digit" }, "day") : this.num(dt.day, 2);
              // weekdays - standalone
              case "c":
                // like 1
                return this.num(dt.weekday);
              case "ccc":
                // like 'Tues'
                return weekday("short", true);
              case "cccc":
                // like 'Tuesday'
                return weekday("long", true);
              case "ccccc":
                // like 'T'
                return weekday("narrow", true);
              // weekdays - format
              case "E":
                // like 1
                return this.num(dt.weekday);
              case "EEE":
                // like 'Tues'
                return weekday("short", false);
              case "EEEE":
                // like 'Tuesday'
                return weekday("long", false);
              case "EEEEE":
                // like 'T'
                return weekday("narrow", false);
              // months - standalone
              case "L":
                // like 1
                return useDateTimeFormatter
                  ? string({ month: "numeric", day: "numeric" }, "month")
                  : this.num(dt.month);
              case "LL":
                // like 01, doesn't seem to work
                return useDateTimeFormatter
                  ? string({ month: "2-digit", day: "numeric" }, "month")
                  : this.num(dt.month, 2);
              case "LLL":
                // like Jan
                return month("short", true);
              case "LLLL":
                // like January
                return month("long", true);
              case "LLLLL":
                // like J
                return month("narrow", true);
              // months - format
              case "M":
                // like 1
                return useDateTimeFormatter
                  ? string({ month: "numeric" }, "month")
                  : this.num(dt.month);
              case "MM":
                // like 01
                return useDateTimeFormatter
                  ? string({ month: "2-digit" }, "month")
                  : this.num(dt.month, 2);
              case "MMM":
                // like Jan
                return month("short", false);
              case "MMMM":
                // like January
                return month("long", false);
              case "MMMMM":
                // like J
                return month("narrow", false);
              // years
              case "y":
                // like 2014
                return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt.year);
              case "yy":
                // like 14
                return useDateTimeFormatter
                  ? string({ year: "2-digit" }, "year")
                  : this.num(dt.year.toString().slice(-2), 2);
              case "yyyy":
                // like 0012
                return useDateTimeFormatter
                  ? string({ year: "numeric" }, "year")
                  : this.num(dt.year, 4);
              case "yyyyyy":
                // like 000012
                return useDateTimeFormatter
                  ? string({ year: "numeric" }, "year")
                  : this.num(dt.year, 6);
              // eras
              case "G":
                // like AD
                return era("short");
              case "GG":
                // like Anno Domini
                return era("long");
              case "GGGGG":
                return era("narrow");
              case "kk":
                return this.num(dt.weekYear.toString().slice(-2), 2);
              case "kkkk":
                return this.num(dt.weekYear, 4);
              case "W":
                return this.num(dt.weekNumber);
              case "WW":
                return this.num(dt.weekNumber, 2);
              case "n":
                return this.num(dt.localWeekNumber);
              case "nn":
                return this.num(dt.localWeekNumber, 2);
              case "ii":
                return this.num(dt.localWeekYear.toString().slice(-2), 2);
              case "iiii":
                return this.num(dt.localWeekYear, 4);
              case "o":
                return this.num(dt.ordinal);
              case "ooo":
                return this.num(dt.ordinal, 3);
              case "q":
                // like 1
                return this.num(dt.quarter);
              case "qq":
                // like 01
                return this.num(dt.quarter, 2);
              case "X":
                return this.num(Math.floor(dt.ts / 1000));
              case "x":
                return this.num(dt.ts);
              default:
                return maybeMacro(token);
            }
          };

        return stringifyTokens(Formatter.parseFormat(fmt), tokenToString);
      }

      formatDurationFromString(dur, fmt) {
        const tokenToField = (token) => {
            switch (token[0]) {
              case "S":
                return "millisecond";
              case "s":
                return "second";
              case "m":
                return "minute";
              case "h":
                return "hour";
              case "d":
                return "day";
              case "w":
                return "week";
              case "M":
                return "month";
              case "y":
                return "year";
              default:
                return null;
            }
          },
          tokenToString = (lildur) => (token) => {
            const mapped = tokenToField(token);
            if (mapped) {
              return this.num(lildur.get(mapped), token.length);
            } else {
              return token;
            }
          },
          tokens = Formatter.parseFormat(fmt),
          realTokens = tokens.reduce(
            (found, { literal, val }) => (literal ? found : found.concat(val)),
            []
          ),
          collapsed = dur.shiftTo(...realTokens.map(tokenToField).filter((t) => t));
        return stringifyTokens(tokens, tokenToString(collapsed));
      }
    }

    /*
     * This file handles parsing for well-specified formats. Here's how it works:
     * Two things go into parsing: a regex to match with and an extractor to take apart the groups in the match.
     * An extractor is just a function that takes a regex match array and returns a { year: ..., month: ... } object
     * parse() does the work of executing the regex and applying the extractor. It takes multiple regex/extractor pairs to try in sequence.
     * Extractors can take a "cursor" representing the offset in the match to look at. This makes it easy to combine extractors.
     * combineExtractors() does the work of combining them, keeping track of the cursor through multiple extractions.
     * Some extractions are super dumb and simpleParse and fromStrings help DRY them.
     */

    const ianaRegex = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;

    function combineRegexes(...regexes) {
      const full = regexes.reduce((f, r) => f + r.source, "");
      return RegExp(`^${full}$`);
    }

    function combineExtractors(...extractors) {
      return (m) =>
        extractors
          .reduce(
            ([mergedVals, mergedZone, cursor], ex) => {
              const [val, zone, next] = ex(m, cursor);
              return [{ ...mergedVals, ...val }, zone || mergedZone, next];
            },
            [{}, null, 1]
          )
          .slice(0, 2);
    }

    function parse(s, ...patterns) {
      if (s == null) {
        return [null, null];
      }

      for (const [regex, extractor] of patterns) {
        const m = regex.exec(s);
        if (m) {
          return extractor(m);
        }
      }
      return [null, null];
    }

    function simpleParse(...keys) {
      return (match, cursor) => {
        const ret = {};
        let i;

        for (i = 0; i < keys.length; i++) {
          ret[keys[i]] = parseInteger(match[cursor + i]);
        }
        return [ret, null, cursor + i];
      };
    }

    // ISO and SQL parsing
    const offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/;
    const isoExtendedZone = `(?:${offsetRegex.source}?(?:\\[(${ianaRegex.source})\\])?)?`;
    const isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/;
    const isoTimeRegex = RegExp(`${isoTimeBaseRegex.source}${isoExtendedZone}`);
    const isoTimeExtensionRegex = RegExp(`(?:T${isoTimeRegex.source})?`);
    const isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/;
    const isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/;
    const isoOrdinalRegex = /(\d{4})-?(\d{3})/;
    const extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay");
    const extractISOOrdinalData = simpleParse("year", "ordinal");
    const sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/; // dumbed-down version of the ISO one
    const sqlTimeRegex = RegExp(
      `${isoTimeBaseRegex.source} ?(?:${offsetRegex.source}|(${ianaRegex.source}))?`
    );
    const sqlTimeExtensionRegex = RegExp(`(?: ${sqlTimeRegex.source})?`);

    function int(match, pos, fallback) {
      const m = match[pos];
      return isUndefined(m) ? fallback : parseInteger(m);
    }

    function extractISOYmd(match, cursor) {
      const item = {
        year: int(match, cursor),
        month: int(match, cursor + 1, 1),
        day: int(match, cursor + 2, 1),
      };

      return [item, null, cursor + 3];
    }

    function extractISOTime(match, cursor) {
      const item = {
        hours: int(match, cursor, 0),
        minutes: int(match, cursor + 1, 0),
        seconds: int(match, cursor + 2, 0),
        milliseconds: parseMillis(match[cursor + 3]),
      };

      return [item, null, cursor + 4];
    }

    function extractISOOffset(match, cursor) {
      const local = !match[cursor] && !match[cursor + 1],
        fullOffset = signedOffset(match[cursor + 1], match[cursor + 2]),
        zone = local ? null : FixedOffsetZone.instance(fullOffset);
      return [{}, zone, cursor + 3];
    }

    function extractIANAZone(match, cursor) {
      const zone = match[cursor] ? IANAZone.create(match[cursor]) : null;
      return [{}, zone, cursor + 1];
    }

    // ISO time parsing

    const isoTimeOnly = RegExp(`^T?${isoTimeBaseRegex.source}$`);

    // ISO duration parsing

    const isoDuration =
      /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;

    function extractISODuration(match) {
      const [s, yearStr, monthStr, weekStr, dayStr, hourStr, minuteStr, secondStr, millisecondsStr] =
        match;

      const hasNegativePrefix = s[0] === "-";
      const negativeSeconds = secondStr && secondStr[0] === "-";

      const maybeNegate = (num, force = false) =>
        num !== undefined && (force || (num && hasNegativePrefix)) ? -num : num;

      return [
        {
          years: maybeNegate(parseFloating(yearStr)),
          months: maybeNegate(parseFloating(monthStr)),
          weeks: maybeNegate(parseFloating(weekStr)),
          days: maybeNegate(parseFloating(dayStr)),
          hours: maybeNegate(parseFloating(hourStr)),
          minutes: maybeNegate(parseFloating(minuteStr)),
          seconds: maybeNegate(parseFloating(secondStr), secondStr === "-0"),
          milliseconds: maybeNegate(parseMillis(millisecondsStr), negativeSeconds),
        },
      ];
    }

    // These are a little braindead. EDT *should* tell us that we're in, say, America/New_York
    // and not just that we're in -240 *right now*. But since I don't think these are used that often
    // I'm just going to ignore that
    const obsOffsets = {
      GMT: 0,
      EDT: -4 * 60,
      EST: -5 * 60,
      CDT: -5 * 60,
      CST: -6 * 60,
      MDT: -6 * 60,
      MST: -7 * 60,
      PDT: -7 * 60,
      PST: -8 * 60,
    };

    function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
      const result = {
        year: yearStr.length === 2 ? untruncateYear(parseInteger(yearStr)) : parseInteger(yearStr),
        month: monthsShort.indexOf(monthStr) + 1,
        day: parseInteger(dayStr),
        hour: parseInteger(hourStr),
        minute: parseInteger(minuteStr),
      };

      if (secondStr) result.second = parseInteger(secondStr);
      if (weekdayStr) {
        result.weekday =
          weekdayStr.length > 3
            ? weekdaysLong.indexOf(weekdayStr) + 1
            : weekdaysShort.indexOf(weekdayStr) + 1;
      }

      return result;
    }

    // RFC 2822/5322
    const rfc2822 =
      /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;

    function extractRFC2822(match) {
      const [
          ,
          weekdayStr,
          dayStr,
          monthStr,
          yearStr,
          hourStr,
          minuteStr,
          secondStr,
          obsOffset,
          milOffset,
          offHourStr,
          offMinuteStr,
        ] = match,
        result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);

      let offset;
      if (obsOffset) {
        offset = obsOffsets[obsOffset];
      } else if (milOffset) {
        offset = 0;
      } else {
        offset = signedOffset(offHourStr, offMinuteStr);
      }

      return [result, new FixedOffsetZone(offset)];
    }

    function preprocessRFC2822(s) {
      // Remove comments and folding whitespace and replace multiple-spaces with a single space
      return s
        .replace(/\([^()]*\)|[\n\t]/g, " ")
        .replace(/(\s\s+)/g, " ")
        .trim();
    }

    // http date

    const rfc1123 =
        /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
      rfc850 =
        /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
      ascii =
        /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;

    function extractRFC1123Or850(match) {
      const [, weekdayStr, dayStr, monthStr, yearStr, hourStr, minuteStr, secondStr] = match,
        result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
      return [result, FixedOffsetZone.utcInstance];
    }

    function extractASCII(match) {
      const [, weekdayStr, monthStr, dayStr, hourStr, minuteStr, secondStr, yearStr] = match,
        result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
      return [result, FixedOffsetZone.utcInstance];
    }

    const isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
    const isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
    const isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
    const isoTimeCombinedRegex = combineRegexes(isoTimeRegex);

    const extractISOYmdTimeAndOffset = combineExtractors(
      extractISOYmd,
      extractISOTime,
      extractISOOffset,
      extractIANAZone
    );
    const extractISOWeekTimeAndOffset = combineExtractors(
      extractISOWeekData,
      extractISOTime,
      extractISOOffset,
      extractIANAZone
    );
    const extractISOOrdinalDateAndTime = combineExtractors(
      extractISOOrdinalData,
      extractISOTime,
      extractISOOffset,
      extractIANAZone
    );
    const extractISOTimeAndOffset = combineExtractors(
      extractISOTime,
      extractISOOffset,
      extractIANAZone
    );

    /*
     * @private
     */

    function parseISODate(s) {
      return parse(
        s,
        [isoYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset],
        [isoWeekWithTimeExtensionRegex, extractISOWeekTimeAndOffset],
        [isoOrdinalWithTimeExtensionRegex, extractISOOrdinalDateAndTime],
        [isoTimeCombinedRegex, extractISOTimeAndOffset]
      );
    }

    function parseRFC2822Date(s) {
      return parse(preprocessRFC2822(s), [rfc2822, extractRFC2822]);
    }

    function parseHTTPDate(s) {
      return parse(
        s,
        [rfc1123, extractRFC1123Or850],
        [rfc850, extractRFC1123Or850],
        [ascii, extractASCII]
      );
    }

    function parseISODuration(s) {
      return parse(s, [isoDuration, extractISODuration]);
    }

    const extractISOTimeOnly = combineExtractors(extractISOTime);

    function parseISOTimeOnly(s) {
      return parse(s, [isoTimeOnly, extractISOTimeOnly]);
    }

    const sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
    const sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);

    const extractISOTimeOffsetAndIANAZone = combineExtractors(
      extractISOTime,
      extractISOOffset,
      extractIANAZone
    );

    function parseSQL(s) {
      return parse(
        s,
        [sqlYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset],
        [sqlTimeCombinedRegex, extractISOTimeOffsetAndIANAZone]
      );
    }

    const INVALID$2 = "Invalid Duration";

    // unit conversion constants
    const lowOrderMatrix = {
        weeks: {
          days: 7,
          hours: 7 * 24,
          minutes: 7 * 24 * 60,
          seconds: 7 * 24 * 60 * 60,
          milliseconds: 7 * 24 * 60 * 60 * 1000,
        },
        days: {
          hours: 24,
          minutes: 24 * 60,
          seconds: 24 * 60 * 60,
          milliseconds: 24 * 60 * 60 * 1000,
        },
        hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1000 },
        minutes: { seconds: 60, milliseconds: 60 * 1000 },
        seconds: { milliseconds: 1000 },
      },
      casualMatrix = {
        years: {
          quarters: 4,
          months: 12,
          weeks: 52,
          days: 365,
          hours: 365 * 24,
          minutes: 365 * 24 * 60,
          seconds: 365 * 24 * 60 * 60,
          milliseconds: 365 * 24 * 60 * 60 * 1000,
        },
        quarters: {
          months: 3,
          weeks: 13,
          days: 91,
          hours: 91 * 24,
          minutes: 91 * 24 * 60,
          seconds: 91 * 24 * 60 * 60,
          milliseconds: 91 * 24 * 60 * 60 * 1000,
        },
        months: {
          weeks: 4,
          days: 30,
          hours: 30 * 24,
          minutes: 30 * 24 * 60,
          seconds: 30 * 24 * 60 * 60,
          milliseconds: 30 * 24 * 60 * 60 * 1000,
        },

        ...lowOrderMatrix,
      },
      daysInYearAccurate = 146097.0 / 400,
      daysInMonthAccurate = 146097.0 / 4800,
      accurateMatrix = {
        years: {
          quarters: 4,
          months: 12,
          weeks: daysInYearAccurate / 7,
          days: daysInYearAccurate,
          hours: daysInYearAccurate * 24,
          minutes: daysInYearAccurate * 24 * 60,
          seconds: daysInYearAccurate * 24 * 60 * 60,
          milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000,
        },
        quarters: {
          months: 3,
          weeks: daysInYearAccurate / 28,
          days: daysInYearAccurate / 4,
          hours: (daysInYearAccurate * 24) / 4,
          minutes: (daysInYearAccurate * 24 * 60) / 4,
          seconds: (daysInYearAccurate * 24 * 60 * 60) / 4,
          milliseconds: (daysInYearAccurate * 24 * 60 * 60 * 1000) / 4,
        },
        months: {
          weeks: daysInMonthAccurate / 7,
          days: daysInMonthAccurate,
          hours: daysInMonthAccurate * 24,
          minutes: daysInMonthAccurate * 24 * 60,
          seconds: daysInMonthAccurate * 24 * 60 * 60,
          milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1000,
        },
        ...lowOrderMatrix,
      };

    // units ordered by size
    const orderedUnits$1 = [
      "years",
      "quarters",
      "months",
      "weeks",
      "days",
      "hours",
      "minutes",
      "seconds",
      "milliseconds",
    ];

    const reverseUnits = orderedUnits$1.slice(0).reverse();

    // clone really means "create another instance just like this one, but with these changes"
    function clone$1(dur, alts, clear = false) {
      // deep merge for vals
      const conf = {
        values: clear ? alts.values : { ...dur.values, ...(alts.values || {}) },
        loc: dur.loc.clone(alts.loc),
        conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy,
        matrix: alts.matrix || dur.matrix,
      };
      return new Duration(conf);
    }

    function durationToMillis(matrix, vals) {
      let sum = vals.milliseconds ?? 0;
      for (const unit of reverseUnits.slice(1)) {
        if (vals[unit]) {
          sum += vals[unit] * matrix[unit]["milliseconds"];
        }
      }
      return sum;
    }

    // NB: mutates parameters
    function normalizeValues(matrix, vals) {
      // the logic below assumes the overall value of the duration is positive
      // if this is not the case, factor is used to make it so
      const factor = durationToMillis(matrix, vals) < 0 ? -1 : 1;

      orderedUnits$1.reduceRight((previous, current) => {
        if (!isUndefined(vals[current])) {
          if (previous) {
            const previousVal = vals[previous] * factor;
            const conv = matrix[current][previous];

            // if (previousVal < 0):
            // lower order unit is negative (e.g. { years: 2, days: -2 })
            // normalize this by reducing the higher order unit by the appropriate amount
            // and increasing the lower order unit
            // this can never make the higher order unit negative, because this function only operates
            // on positive durations, so the amount of time represented by the lower order unit cannot
            // be larger than the higher order unit
            // else:
            // lower order unit is positive (e.g. { years: 2, days: 450 } or { years: -2, days: 450 })
            // in this case we attempt to convert as much as possible from the lower order unit into
            // the higher order one
            //
            // Math.floor takes care of both of these cases, rounding away from 0
            // if previousVal < 0 it makes the absolute value larger
            // if previousVal >= it makes the absolute value smaller
            const rollUp = Math.floor(previousVal / conv);
            vals[current] += rollUp * factor;
            vals[previous] -= rollUp * conv * factor;
          }
          return current;
        } else {
          return previous;
        }
      }, null);

      // try to convert any decimals into smaller units if possible
      // for example for { years: 2.5, days: 0, seconds: 0 } we want to get { years: 2, days: 182, hours: 12 }
      orderedUnits$1.reduce((previous, current) => {
        if (!isUndefined(vals[current])) {
          if (previous) {
            const fraction = vals[previous] % 1;
            vals[previous] -= fraction;
            vals[current] += fraction * matrix[previous][current];
          }
          return current;
        } else {
          return previous;
        }
      }, null);
    }

    // Remove all properties with a value of 0 from an object
    function removeZeroes(vals) {
      const newVals = {};
      for (const [key, value] of Object.entries(vals)) {
        if (value !== 0) {
          newVals[key] = value;
        }
      }
      return newVals;
    }

    /**
     * A Duration object represents a period of time, like "2 months" or "1 day, 1 hour". Conceptually, it's just a map of units to their quantities, accompanied by some additional configuration and methods for creating, parsing, interrogating, transforming, and formatting them. They can be used on their own or in conjunction with other Luxon types; for example, you can use {@link DateTime#plus} to add a Duration object to a DateTime, producing another DateTime.
     *
     * Here is a brief overview of commonly used methods and getters in Duration:
     *
     * * **Creation** To create a Duration, use {@link Duration.fromMillis}, {@link Duration.fromObject}, or {@link Duration.fromISO}.
     * * **Unit values** See the {@link Duration#years}, {@link Duration#months}, {@link Duration#weeks}, {@link Duration#days}, {@link Duration#hours}, {@link Duration#minutes}, {@link Duration#seconds}, {@link Duration#milliseconds} accessors.
     * * **Configuration** See  {@link Duration#locale} and {@link Duration#numberingSystem} accessors.
     * * **Transformation** To create new Durations out of old ones use {@link Duration#plus}, {@link Duration#minus}, {@link Duration#normalize}, {@link Duration#set}, {@link Duration#reconfigure}, {@link Duration#shiftTo}, and {@link Duration#negate}.
     * * **Output** To convert the Duration into other representations, see {@link Duration#as}, {@link Duration#toISO}, {@link Duration#toFormat}, and {@link Duration#toJSON}
     *
     * There's are more methods documented below. In addition, for more information on subtler topics like internationalization and validity, see the external documentation.
     */
    class Duration {
      /**
       * @private
       */
      constructor(config) {
        const accurate = config.conversionAccuracy === "longterm" || false;
        let matrix = accurate ? accurateMatrix : casualMatrix;

        if (config.matrix) {
          matrix = config.matrix;
        }

        /**
         * @access private
         */
        this.values = config.values;
        /**
         * @access private
         */
        this.loc = config.loc || Locale.create();
        /**
         * @access private
         */
        this.conversionAccuracy = accurate ? "longterm" : "casual";
        /**
         * @access private
         */
        this.invalid = config.invalid || null;
        /**
         * @access private
         */
        this.matrix = matrix;
        /**
         * @access private
         */
        this.isLuxonDuration = true;
      }

      /**
       * Create Duration from a number of milliseconds.
       * @param {number} count of milliseconds
       * @param {Object} opts - options for parsing
       * @param {string} [opts.locale='en-US'] - the locale to use
       * @param {string} opts.numberingSystem - the numbering system to use
       * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
       * @return {Duration}
       */
      static fromMillis(count, opts) {
        return Duration.fromObject({ milliseconds: count }, opts);
      }

      /**
       * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
       * If this object is empty then a zero milliseconds duration is returned.
       * @param {Object} obj - the object to create the DateTime from
       * @param {number} obj.years
       * @param {number} obj.quarters
       * @param {number} obj.months
       * @param {number} obj.weeks
       * @param {number} obj.days
       * @param {number} obj.hours
       * @param {number} obj.minutes
       * @param {number} obj.seconds
       * @param {number} obj.milliseconds
       * @param {Object} [opts=[]] - options for creating this Duration
       * @param {string} [opts.locale='en-US'] - the locale to use
       * @param {string} opts.numberingSystem - the numbering system to use
       * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
       * @param {string} [opts.matrix=Object] - the custom conversion system to use
       * @return {Duration}
       */
      static fromObject(obj, opts = {}) {
        if (obj == null || typeof obj !== "object") {
          throw new InvalidArgumentError(
            `Duration.fromObject: argument expected to be an object, got ${
          obj === null ? "null" : typeof obj
        }`
          );
        }

        return new Duration({
          values: normalizeObject(obj, Duration.normalizeUnit),
          loc: Locale.fromObject(opts),
          conversionAccuracy: opts.conversionAccuracy,
          matrix: opts.matrix,
        });
      }

      /**
       * Create a Duration from DurationLike.
       *
       * @param {Object | number | Duration} durationLike
       * One of:
       * - object with keys like 'years' and 'hours'.
       * - number representing milliseconds
       * - Duration instance
       * @return {Duration}
       */
      static fromDurationLike(durationLike) {
        if (isNumber(durationLike)) {
          return Duration.fromMillis(durationLike);
        } else if (Duration.isDuration(durationLike)) {
          return durationLike;
        } else if (typeof durationLike === "object") {
          return Duration.fromObject(durationLike);
        } else {
          throw new InvalidArgumentError(
            `Unknown duration argument ${durationLike} of type ${typeof durationLike}`
          );
        }
      }

      /**
       * Create a Duration from an ISO 8601 duration string.
       * @param {string} text - text to parse
       * @param {Object} opts - options for parsing
       * @param {string} [opts.locale='en-US'] - the locale to use
       * @param {string} opts.numberingSystem - the numbering system to use
       * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
       * @param {string} [opts.matrix=Object] - the preset conversion system to use
       * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
       * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
       * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
       * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
       * @return {Duration}
       */
      static fromISO(text, opts) {
        const [parsed] = parseISODuration(text);
        if (parsed) {
          return Duration.fromObject(parsed, opts);
        } else {
          return Duration.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
        }
      }

      /**
       * Create a Duration from an ISO 8601 time string.
       * @param {string} text - text to parse
       * @param {Object} opts - options for parsing
       * @param {string} [opts.locale='en-US'] - the locale to use
       * @param {string} opts.numberingSystem - the numbering system to use
       * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
       * @param {string} [opts.matrix=Object] - the conversion system to use
       * @see https://en.wikipedia.org/wiki/ISO_8601#Times
       * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
       * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
       * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
       * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
       * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
       * @return {Duration}
       */
      static fromISOTime(text, opts) {
        const [parsed] = parseISOTimeOnly(text);
        if (parsed) {
          return Duration.fromObject(parsed, opts);
        } else {
          return Duration.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
        }
      }

      /**
       * Create an invalid Duration.
       * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
       * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
       * @return {Duration}
       */
      static invalid(reason, explanation = null) {
        if (!reason) {
          throw new InvalidArgumentError("need to specify a reason the Duration is invalid");
        }

        const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

        if (Settings.throwOnInvalid) {
          throw new InvalidDurationError(invalid);
        } else {
          return new Duration({ invalid });
        }
      }

      /**
       * @private
       */
      static normalizeUnit(unit) {
        const normalized = {
          year: "years",
          years: "years",
          quarter: "quarters",
          quarters: "quarters",
          month: "months",
          months: "months",
          week: "weeks",
          weeks: "weeks",
          day: "days",
          days: "days",
          hour: "hours",
          hours: "hours",
          minute: "minutes",
          minutes: "minutes",
          second: "seconds",
          seconds: "seconds",
          millisecond: "milliseconds",
          milliseconds: "milliseconds",
        }[unit ? unit.toLowerCase() : unit];

        if (!normalized) throw new InvalidUnitError(unit);

        return normalized;
      }

      /**
       * Check if an object is a Duration. Works across context boundaries
       * @param {object} o
       * @return {boolean}
       */
      static isDuration(o) {
        return (o && o.isLuxonDuration) || false;
      }

      /**
       * Get  the locale of a Duration, such 'en-GB'
       * @type {string}
       */
      get locale() {
        return this.isValid ? this.loc.locale : null;
      }

      /**
       * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
       *
       * @type {string}
       */
      get numberingSystem() {
        return this.isValid ? this.loc.numberingSystem : null;
      }

      /**
       * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
       * * `S` for milliseconds
       * * `s` for seconds
       * * `m` for minutes
       * * `h` for hours
       * * `d` for days
       * * `w` for weeks
       * * `M` for months
       * * `y` for years
       * Notes:
       * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
       * * Tokens can be escaped by wrapping with single quotes.
       * * The duration will be converted to the set of units in the format string using {@link Duration#shiftTo} and the Durations's conversion accuracy setting.
       * @param {string} fmt - the format string
       * @param {Object} opts - options
       * @param {boolean} [opts.floor=true] - floor numerical values
       * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
       * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
       * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
       * @return {string}
       */
      toFormat(fmt, opts = {}) {
        // reverse-compat since 1.2; we always round down now, never up, and we do it by default
        const fmtOpts = {
          ...opts,
          floor: opts.round !== false && opts.floor !== false,
        };
        return this.isValid
          ? Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt)
          : INVALID$2;
      }

      /**
       * Returns a string representation of a Duration with all units included.
       * To modify its behavior, use `listStyle` and any Intl.NumberFormat option, though `unitDisplay` is especially relevant.
       * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options
       * @param {Object} opts - Formatting options. Accepts the same keys as the options parameter of the native `Intl.NumberFormat` constructor, as well as `listStyle`.
       * @param {string} [opts.listStyle='narrow'] - How to format the merged list. Corresponds to the `style` property of the options parameter of the native `Intl.ListFormat` constructor.
       * @example
       * ```js
       * var dur = Duration.fromObject({ days: 1, hours: 5, minutes: 6 })
       * dur.toHuman() //=> '1 day, 5 hours, 6 minutes'
       * dur.toHuman({ listStyle: "long" }) //=> '1 day, 5 hours, and 6 minutes'
       * dur.toHuman({ unitDisplay: "short" }) //=> '1 day, 5 hr, 6 min'
       * ```
       */
      toHuman(opts = {}) {
        if (!this.isValid) return INVALID$2;

        const l = orderedUnits$1
          .map((unit) => {
            const val = this.values[unit];
            if (isUndefined(val)) {
              return null;
            }
            return this.loc
              .numberFormatter({ style: "unit", unitDisplay: "long", ...opts, unit: unit.slice(0, -1) })
              .format(val);
          })
          .filter((n) => n);

        return this.loc
          .listFormatter({ type: "conjunction", style: opts.listStyle || "narrow", ...opts })
          .format(l);
      }

      /**
       * Returns a JavaScript object with this Duration's values.
       * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
       * @return {Object}
       */
      toObject() {
        if (!this.isValid) return {};
        return { ...this.values };
      }

      /**
       * Returns an ISO 8601-compliant string representation of this Duration.
       * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
       * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
       * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
       * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
       * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
       * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
       * @return {string}
       */
      toISO() {
        // we could use the formatter, but this is an easier way to get the minimum string
        if (!this.isValid) return null;

        let s = "P";
        if (this.years !== 0) s += this.years + "Y";
        if (this.months !== 0 || this.quarters !== 0) s += this.months + this.quarters * 3 + "M";
        if (this.weeks !== 0) s += this.weeks + "W";
        if (this.days !== 0) s += this.days + "D";
        if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0)
          s += "T";
        if (this.hours !== 0) s += this.hours + "H";
        if (this.minutes !== 0) s += this.minutes + "M";
        if (this.seconds !== 0 || this.milliseconds !== 0)
          // this will handle "floating point madness" by removing extra decimal places
          // https://stackoverflow.com/questions/588004/is-floating-point-math-broken
          s += roundTo(this.seconds + this.milliseconds / 1000, 3) + "S";
        if (s === "P") s += "T0S";
        return s;
      }

      /**
       * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
       * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
       * @see https://en.wikipedia.org/wiki/ISO_8601#Times
       * @param {Object} opts - options
       * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
       * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
       * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
       * @param {string} [opts.format='extended'] - choose between the basic and extended format
       * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
       * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
       * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
       * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
       * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
       * @return {string}
       */
      toISOTime(opts = {}) {
        if (!this.isValid) return null;

        const millis = this.toMillis();
        if (millis < 0 || millis >= 86400000) return null;

        opts = {
          suppressMilliseconds: false,
          suppressSeconds: false,
          includePrefix: false,
          format: "extended",
          ...opts,
          includeOffset: false,
        };

        const dateTime = DateTime.fromMillis(millis, { zone: "UTC" });
        return dateTime.toISOTime(opts);
      }

      /**
       * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
       * @return {string}
       */
      toJSON() {
        return this.toISO();
      }

      /**
       * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
       * @return {string}
       */
      toString() {
        return this.toISO();
      }

      /**
       * Returns a string representation of this Duration appropriate for the REPL.
       * @return {string}
       */
      [Symbol.for("nodejs.util.inspect.custom")]() {
        if (this.isValid) {
          return `Duration { values: ${JSON.stringify(this.values)} }`;
        } else {
          return `Duration { Invalid, reason: ${this.invalidReason} }`;
        }
      }

      /**
       * Returns an milliseconds value of this Duration.
       * @return {number}
       */
      toMillis() {
        if (!this.isValid) return NaN;

        return durationToMillis(this.matrix, this.values);
      }

      /**
       * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
       * @return {number}
       */
      valueOf() {
        return this.toMillis();
      }

      /**
       * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
       * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
       * @return {Duration}
       */
      plus(duration) {
        if (!this.isValid) return this;

        const dur = Duration.fromDurationLike(duration),
          result = {};

        for (const k of orderedUnits$1) {
          if (hasOwnProperty(dur.values, k) || hasOwnProperty(this.values, k)) {
            result[k] = dur.get(k) + this.get(k);
          }
        }

        return clone$1(this, { values: result }, true);
      }

      /**
       * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
       * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
       * @return {Duration}
       */
      minus(duration) {
        if (!this.isValid) return this;

        const dur = Duration.fromDurationLike(duration);
        return this.plus(dur.negate());
      }

      /**
       * Scale this Duration by the specified amount. Return a newly-constructed Duration.
       * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
       * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
       * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hours" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
       * @return {Duration}
       */
      mapUnits(fn) {
        if (!this.isValid) return this;
        const result = {};
        for (const k of Object.keys(this.values)) {
          result[k] = asNumber(fn(this.values[k], k));
        }
        return clone$1(this, { values: result }, true);
      }

      /**
       * Get the value of unit.
       * @param {string} unit - a unit such as 'minute' or 'day'
       * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
       * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
       * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
       * @return {number}
       */
      get(unit) {
        return this[Duration.normalizeUnit(unit)];
      }

      /**
       * "Set" the values of specified units. Return a newly-constructed Duration.
       * @param {Object} values - a mapping of units to numbers
       * @example dur.set({ years: 2017 })
       * @example dur.set({ hours: 8, minutes: 30 })
       * @return {Duration}
       */
      set(values) {
        if (!this.isValid) return this;

        const mixed = { ...this.values, ...normalizeObject(values, Duration.normalizeUnit) };
        return clone$1(this, { values: mixed });
      }

      /**
       * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
       * @example dur.reconfigure({ locale: 'en-GB' })
       * @return {Duration}
       */
      reconfigure({ locale, numberingSystem, conversionAccuracy, matrix } = {}) {
        const loc = this.loc.clone({ locale, numberingSystem });
        const opts = { loc, matrix, conversionAccuracy };
        return clone$1(this, opts);
      }

      /**
       * Return the length of the duration in the specified unit.
       * @param {string} unit - a unit such as 'minutes' or 'days'
       * @example Duration.fromObject({years: 1}).as('days') //=> 365
       * @example Duration.fromObject({years: 1}).as('months') //=> 12
       * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
       * @return {number}
       */
      as(unit) {
        return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
      }

      /**
       * Reduce this Duration to its canonical representation in its current units.
       * Assuming the overall value of the Duration is positive, this means:
       * - excessive values for lower-order units are converted to higher-order units (if possible, see first and second example)
       * - negative lower-order units are converted to higher order units (there must be such a higher order unit, otherwise
       *   the overall value would be negative, see third example)
       * - fractional values for higher-order units are converted to lower-order units (if possible, see fourth example)
       *
       * If the overall value is negative, the result of this method is equivalent to `this.negate().normalize().negate()`.
       * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
       * @example Duration.fromObject({ days: 5000 }).normalize().toObject() //=> { days: 5000 }
       * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
       * @example Duration.fromObject({ years: 2.5, days: 0, hours: 0 }).normalize().toObject() //=> { years: 2, days: 182, hours: 12 }
       * @return {Duration}
       */
      normalize() {
        if (!this.isValid) return this;
        const vals = this.toObject();
        normalizeValues(this.matrix, vals);
        return clone$1(this, { values: vals }, true);
      }

      /**
       * Rescale units to its largest representation
       * @example Duration.fromObject({ milliseconds: 90000 }).rescale().toObject() //=> { minutes: 1, seconds: 30 }
       * @return {Duration}
       */
      rescale() {
        if (!this.isValid) return this;
        const vals = removeZeroes(this.normalize().shiftToAll().toObject());
        return clone$1(this, { values: vals }, true);
      }

      /**
       * Convert this Duration into its representation in a different set of units.
       * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
       * @return {Duration}
       */
      shiftTo(...units) {
        if (!this.isValid) return this;

        if (units.length === 0) {
          return this;
        }

        units = units.map((u) => Duration.normalizeUnit(u));

        const built = {},
          accumulated = {},
          vals = this.toObject();
        let lastUnit;

        for (const k of orderedUnits$1) {
          if (units.indexOf(k) >= 0) {
            lastUnit = k;

            let own = 0;

            // anything we haven't boiled down yet should get boiled to this unit
            for (const ak in accumulated) {
              own += this.matrix[ak][k] * accumulated[ak];
              accumulated[ak] = 0;
            }

            // plus anything that's already in this unit
            if (isNumber(vals[k])) {
              own += vals[k];
            }

            // only keep the integer part for now in the hopes of putting any decimal part
            // into a smaller unit later
            const i = Math.trunc(own);
            built[k] = i;
            accumulated[k] = (own * 1000 - i * 1000) / 1000;

            // otherwise, keep it in the wings to boil it later
          } else if (isNumber(vals[k])) {
            accumulated[k] = vals[k];
          }
        }

        // anything leftover becomes the decimal for the last unit
        // lastUnit must be defined since units is not empty
        for (const key in accumulated) {
          if (accumulated[key] !== 0) {
            built[lastUnit] +=
              key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
          }
        }

        normalizeValues(this.matrix, built);
        return clone$1(this, { values: built }, true);
      }

      /**
       * Shift this Duration to all available units.
       * Same as shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds")
       * @return {Duration}
       */
      shiftToAll() {
        if (!this.isValid) return this;
        return this.shiftTo(
          "years",
          "months",
          "weeks",
          "days",
          "hours",
          "minutes",
          "seconds",
          "milliseconds"
        );
      }

      /**
       * Return the negative of this Duration.
       * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
       * @return {Duration}
       */
      negate() {
        if (!this.isValid) return this;
        const negated = {};
        for (const k of Object.keys(this.values)) {
          negated[k] = this.values[k] === 0 ? 0 : -this.values[k];
        }
        return clone$1(this, { values: negated }, true);
      }

      /**
       * Get the years.
       * @type {number}
       */
      get years() {
        return this.isValid ? this.values.years || 0 : NaN;
      }

      /**
       * Get the quarters.
       * @type {number}
       */
      get quarters() {
        return this.isValid ? this.values.quarters || 0 : NaN;
      }

      /**
       * Get the months.
       * @type {number}
       */
      get months() {
        return this.isValid ? this.values.months || 0 : NaN;
      }

      /**
       * Get the weeks
       * @type {number}
       */
      get weeks() {
        return this.isValid ? this.values.weeks || 0 : NaN;
      }

      /**
       * Get the days.
       * @type {number}
       */
      get days() {
        return this.isValid ? this.values.days || 0 : NaN;
      }

      /**
       * Get the hours.
       * @type {number}
       */
      get hours() {
        return this.isValid ? this.values.hours || 0 : NaN;
      }

      /**
       * Get the minutes.
       * @type {number}
       */
      get minutes() {
        return this.isValid ? this.values.minutes || 0 : NaN;
      }

      /**
       * Get the seconds.
       * @return {number}
       */
      get seconds() {
        return this.isValid ? this.values.seconds || 0 : NaN;
      }

      /**
       * Get the milliseconds.
       * @return {number}
       */
      get milliseconds() {
        return this.isValid ? this.values.milliseconds || 0 : NaN;
      }

      /**
       * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
       * on invalid DateTimes or Intervals.
       * @return {boolean}
       */
      get isValid() {
        return this.invalid === null;
      }

      /**
       * Returns an error code if this Duration became invalid, or null if the Duration is valid
       * @return {string}
       */
      get invalidReason() {
        return this.invalid ? this.invalid.reason : null;
      }

      /**
       * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
       * @type {string}
       */
      get invalidExplanation() {
        return this.invalid ? this.invalid.explanation : null;
      }

      /**
       * Equality check
       * Two Durations are equal iff they have the same units and the same values for each unit.
       * @param {Duration} other
       * @return {boolean}
       */
      equals(other) {
        if (!this.isValid || !other.isValid) {
          return false;
        }

        if (!this.loc.equals(other.loc)) {
          return false;
        }

        function eq(v1, v2) {
          // Consider 0 and undefined as equal
          if (v1 === undefined || v1 === 0) return v2 === undefined || v2 === 0;
          return v1 === v2;
        }

        for (const u of orderedUnits$1) {
          if (!eq(this.values[u], other.values[u])) {
            return false;
          }
        }
        return true;
      }
    }

    const INVALID$1 = "Invalid Interval";

    // checks if the start is equal to or before the end
    function validateStartEnd(start, end) {
      if (!start || !start.isValid) {
        return Interval.invalid("missing or invalid start");
      } else if (!end || !end.isValid) {
        return Interval.invalid("missing or invalid end");
      } else if (end < start) {
        return Interval.invalid(
          "end before start",
          `The end of an interval must be after its start, but you had start=${start.toISO()} and end=${end.toISO()}`
        );
      } else {
        return null;
      }
    }

    /**
     * An Interval object represents a half-open interval of time, where each endpoint is a {@link DateTime}. Conceptually, it's a container for those two endpoints, accompanied by methods for creating, parsing, interrogating, comparing, transforming, and formatting them.
     *
     * Here is a brief overview of the most commonly used methods and getters in Interval:
     *
     * * **Creation** To create an Interval, use {@link Interval.fromDateTimes}, {@link Interval.after}, {@link Interval.before}, or {@link Interval.fromISO}.
     * * **Accessors** Use {@link Interval#start} and {@link Interval#end} to get the start and end.
     * * **Interrogation** To analyze the Interval, use {@link Interval#count}, {@link Interval#length}, {@link Interval#hasSame}, {@link Interval#contains}, {@link Interval#isAfter}, or {@link Interval#isBefore}.
     * * **Transformation** To create other Intervals out of this one, use {@link Interval#set}, {@link Interval#splitAt}, {@link Interval#splitBy}, {@link Interval#divideEqually}, {@link Interval.merge}, {@link Interval.xor}, {@link Interval#union}, {@link Interval#intersection}, or {@link Interval#difference}.
     * * **Comparison** To compare this Interval to another one, use {@link Interval#equals}, {@link Interval#overlaps}, {@link Interval#abutsStart}, {@link Interval#abutsEnd}, {@link Interval#engulfs}
     * * **Output** To convert the Interval into other representations, see {@link Interval#toString}, {@link Interval#toLocaleString}, {@link Interval#toISO}, {@link Interval#toISODate}, {@link Interval#toISOTime}, {@link Interval#toFormat}, and {@link Interval#toDuration}.
     */
    class Interval {
      /**
       * @private
       */
      constructor(config) {
        /**
         * @access private
         */
        this.s = config.start;
        /**
         * @access private
         */
        this.e = config.end;
        /**
         * @access private
         */
        this.invalid = config.invalid || null;
        /**
         * @access private
         */
        this.isLuxonInterval = true;
      }

      /**
       * Create an invalid Interval.
       * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
       * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
       * @return {Interval}
       */
      static invalid(reason, explanation = null) {
        if (!reason) {
          throw new InvalidArgumentError("need to specify a reason the Interval is invalid");
        }

        const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

        if (Settings.throwOnInvalid) {
          throw new InvalidIntervalError(invalid);
        } else {
          return new Interval({ invalid });
        }
      }

      /**
       * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
       * @param {DateTime|Date|Object} start
       * @param {DateTime|Date|Object} end
       * @return {Interval}
       */
      static fromDateTimes(start, end) {
        const builtStart = friendlyDateTime(start),
          builtEnd = friendlyDateTime(end);

        const validateError = validateStartEnd(builtStart, builtEnd);

        if (validateError == null) {
          return new Interval({
            start: builtStart,
            end: builtEnd,
          });
        } else {
          return validateError;
        }
      }

      /**
       * Create an Interval from a start DateTime and a Duration to extend to.
       * @param {DateTime|Date|Object} start
       * @param {Duration|Object|number} duration - the length of the Interval.
       * @return {Interval}
       */
      static after(start, duration) {
        const dur = Duration.fromDurationLike(duration),
          dt = friendlyDateTime(start);
        return Interval.fromDateTimes(dt, dt.plus(dur));
      }

      /**
       * Create an Interval from an end DateTime and a Duration to extend backwards to.
       * @param {DateTime|Date|Object} end
       * @param {Duration|Object|number} duration - the length of the Interval.
       * @return {Interval}
       */
      static before(end, duration) {
        const dur = Duration.fromDurationLike(duration),
          dt = friendlyDateTime(end);
        return Interval.fromDateTimes(dt.minus(dur), dt);
      }

      /**
       * Create an Interval from an ISO 8601 string.
       * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
       * @param {string} text - the ISO string to parse
       * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
       * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
       * @return {Interval}
       */
      static fromISO(text, opts) {
        const [s, e] = (text || "").split("/", 2);
        if (s && e) {
          let start, startIsValid;
          try {
            start = DateTime.fromISO(s, opts);
            startIsValid = start.isValid;
          } catch (e) {
            startIsValid = false;
          }

          let end, endIsValid;
          try {
            end = DateTime.fromISO(e, opts);
            endIsValid = end.isValid;
          } catch (e) {
            endIsValid = false;
          }

          if (startIsValid && endIsValid) {
            return Interval.fromDateTimes(start, end);
          }

          if (startIsValid) {
            const dur = Duration.fromISO(e, opts);
            if (dur.isValid) {
              return Interval.after(start, dur);
            }
          } else if (endIsValid) {
            const dur = Duration.fromISO(s, opts);
            if (dur.isValid) {
              return Interval.before(end, dur);
            }
          }
        }
        return Interval.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
      }

      /**
       * Check if an object is an Interval. Works across context boundaries
       * @param {object} o
       * @return {boolean}
       */
      static isInterval(o) {
        return (o && o.isLuxonInterval) || false;
      }

      /**
       * Returns the start of the Interval
       * @type {DateTime}
       */
      get start() {
        return this.isValid ? this.s : null;
      }

      /**
       * Returns the end of the Interval
       * @type {DateTime}
       */
      get end() {
        return this.isValid ? this.e : null;
      }

      /**
       * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
       * @type {boolean}
       */
      get isValid() {
        return this.invalidReason === null;
      }

      /**
       * Returns an error code if this Interval is invalid, or null if the Interval is valid
       * @type {string}
       */
      get invalidReason() {
        return this.invalid ? this.invalid.reason : null;
      }

      /**
       * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
       * @type {string}
       */
      get invalidExplanation() {
        return this.invalid ? this.invalid.explanation : null;
      }

      /**
       * Returns the length of the Interval in the specified unit.
       * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
       * @return {number}
       */
      length(unit = "milliseconds") {
        return this.isValid ? this.toDuration(...[unit]).get(unit) : NaN;
      }

      /**
       * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
       * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
       * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
       * @param {string} [unit='milliseconds'] - the unit of time to count.
       * @param {Object} opts - options
       * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week; this operation will always use the locale of the start DateTime
       * @return {number}
       */
      count(unit = "milliseconds", opts) {
        if (!this.isValid) return NaN;
        const start = this.start.startOf(unit, opts);
        let end;
        if (opts?.useLocaleWeeks) {
          end = this.end.reconfigure({ locale: start.locale });
        } else {
          end = this.end;
        }
        end = end.startOf(unit, opts);
        return Math.floor(end.diff(start, unit).get(unit)) + (end.valueOf() !== this.end.valueOf());
      }

      /**
       * Returns whether this Interval's start and end are both in the same unit of time
       * @param {string} unit - the unit of time to check sameness on
       * @return {boolean}
       */
      hasSame(unit) {
        return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, unit) : false;
      }

      /**
       * Return whether this Interval has the same start and end DateTimes.
       * @return {boolean}
       */
      isEmpty() {
        return this.s.valueOf() === this.e.valueOf();
      }

      /**
       * Return whether this Interval's start is after the specified DateTime.
       * @param {DateTime} dateTime
       * @return {boolean}
       */
      isAfter(dateTime) {
        if (!this.isValid) return false;
        return this.s > dateTime;
      }

      /**
       * Return whether this Interval's end is before the specified DateTime.
       * @param {DateTime} dateTime
       * @return {boolean}
       */
      isBefore(dateTime) {
        if (!this.isValid) return false;
        return this.e <= dateTime;
      }

      /**
       * Return whether this Interval contains the specified DateTime.
       * @param {DateTime} dateTime
       * @return {boolean}
       */
      contains(dateTime) {
        if (!this.isValid) return false;
        return this.s <= dateTime && this.e > dateTime;
      }

      /**
       * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
       * @param {Object} values - the values to set
       * @param {DateTime} values.start - the starting DateTime
       * @param {DateTime} values.end - the ending DateTime
       * @return {Interval}
       */
      set({ start, end } = {}) {
        if (!this.isValid) return this;
        return Interval.fromDateTimes(start || this.s, end || this.e);
      }

      /**
       * Split this Interval at each of the specified DateTimes
       * @param {...DateTime} dateTimes - the unit of time to count.
       * @return {Array}
       */
      splitAt(...dateTimes) {
        if (!this.isValid) return [];
        const sorted = dateTimes
            .map(friendlyDateTime)
            .filter((d) => this.contains(d))
            .sort((a, b) => a.toMillis() - b.toMillis()),
          results = [];
        let { s } = this,
          i = 0;

        while (s < this.e) {
          const added = sorted[i] || this.e,
            next = +added > +this.e ? this.e : added;
          results.push(Interval.fromDateTimes(s, next));
          s = next;
          i += 1;
        }

        return results;
      }

      /**
       * Split this Interval into smaller Intervals, each of the specified length.
       * Left over time is grouped into a smaller interval
       * @param {Duration|Object|number} duration - The length of each resulting interval.
       * @return {Array}
       */
      splitBy(duration) {
        const dur = Duration.fromDurationLike(duration);

        if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
          return [];
        }

        let { s } = this,
          idx = 1,
          next;

        const results = [];
        while (s < this.e) {
          const added = this.start.plus(dur.mapUnits((x) => x * idx));
          next = +added > +this.e ? this.e : added;
          results.push(Interval.fromDateTimes(s, next));
          s = next;
          idx += 1;
        }

        return results;
      }

      /**
       * Split this Interval into the specified number of smaller intervals.
       * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
       * @return {Array}
       */
      divideEqually(numberOfParts) {
        if (!this.isValid) return [];
        return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
      }

      /**
       * Return whether this Interval overlaps with the specified Interval
       * @param {Interval} other
       * @return {boolean}
       */
      overlaps(other) {
        return this.e > other.s && this.s < other.e;
      }

      /**
       * Return whether this Interval's end is adjacent to the specified Interval's start.
       * @param {Interval} other
       * @return {boolean}
       */
      abutsStart(other) {
        if (!this.isValid) return false;
        return +this.e === +other.s;
      }

      /**
       * Return whether this Interval's start is adjacent to the specified Interval's end.
       * @param {Interval} other
       * @return {boolean}
       */
      abutsEnd(other) {
        if (!this.isValid) return false;
        return +other.e === +this.s;
      }

      /**
       * Return whether this Interval engulfs the start and end of the specified Interval.
       * @param {Interval} other
       * @return {boolean}
       */
      engulfs(other) {
        if (!this.isValid) return false;
        return this.s <= other.s && this.e >= other.e;
      }

      /**
       * Return whether this Interval has the same start and end as the specified Interval.
       * @param {Interval} other
       * @return {boolean}
       */
      equals(other) {
        if (!this.isValid || !other.isValid) {
          return false;
        }

        return this.s.equals(other.s) && this.e.equals(other.e);
      }

      /**
       * Return an Interval representing the intersection of this Interval and the specified Interval.
       * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
       * Returns null if the intersection is empty, meaning, the intervals don't intersect.
       * @param {Interval} other
       * @return {Interval}
       */
      intersection(other) {
        if (!this.isValid) return this;
        const s = this.s > other.s ? this.s : other.s,
          e = this.e < other.e ? this.e : other.e;

        if (s >= e) {
          return null;
        } else {
          return Interval.fromDateTimes(s, e);
        }
      }

      /**
       * Return an Interval representing the union of this Interval and the specified Interval.
       * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
       * @param {Interval} other
       * @return {Interval}
       */
      union(other) {
        if (!this.isValid) return this;
        const s = this.s < other.s ? this.s : other.s,
          e = this.e > other.e ? this.e : other.e;
        return Interval.fromDateTimes(s, e);
      }

      /**
       * Merge an array of Intervals into a equivalent minimal set of Intervals.
       * Combines overlapping and adjacent Intervals.
       * @param {Array} intervals
       * @return {Array}
       */
      static merge(intervals) {
        const [found, final] = intervals
          .sort((a, b) => a.s - b.s)
          .reduce(
            ([sofar, current], item) => {
              if (!current) {
                return [sofar, item];
              } else if (current.overlaps(item) || current.abutsStart(item)) {
                return [sofar, current.union(item)];
              } else {
                return [sofar.concat([current]), item];
              }
            },
            [[], null]
          );
        if (final) {
          found.push(final);
        }
        return found;
      }

      /**
       * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
       * @param {Array} intervals
       * @return {Array}
       */
      static xor(intervals) {
        let start = null,
          currentCount = 0;
        const results = [],
          ends = intervals.map((i) => [
            { time: i.s, type: "s" },
            { time: i.e, type: "e" },
          ]),
          flattened = Array.prototype.concat(...ends),
          arr = flattened.sort((a, b) => a.time - b.time);

        for (const i of arr) {
          currentCount += i.type === "s" ? 1 : -1;

          if (currentCount === 1) {
            start = i.time;
          } else {
            if (start && +start !== +i.time) {
              results.push(Interval.fromDateTimes(start, i.time));
            }

            start = null;
          }
        }

        return Interval.merge(results);
      }

      /**
       * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
       * @param {...Interval} intervals
       * @return {Array}
       */
      difference(...intervals) {
        return Interval.xor([this].concat(intervals))
          .map((i) => this.intersection(i))
          .filter((i) => i && !i.isEmpty());
      }

      /**
       * Returns a string representation of this Interval appropriate for debugging.
       * @return {string}
       */
      toString() {
        if (!this.isValid) return INVALID$1;
        return `[${this.s.toISO()} – ${this.e.toISO()})`;
      }

      /**
       * Returns a string representation of this Interval appropriate for the REPL.
       * @return {string}
       */
      [Symbol.for("nodejs.util.inspect.custom")]() {
        if (this.isValid) {
          return `Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`;
        } else {
          return `Interval { Invalid, reason: ${this.invalidReason} }`;
        }
      }

      /**
       * Returns a localized string representing this Interval. Accepts the same options as the
       * Intl.DateTimeFormat constructor and any presets defined by Luxon, such as
       * {@link DateTime.DATE_FULL} or {@link DateTime.TIME_SIMPLE}. The exact behavior of this method
       * is browser-specific, but in general it will return an appropriate representation of the
       * Interval in the assigned locale. Defaults to the system's locale if no locale has been
       * specified.
       * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
       * @param {Object} [formatOpts=DateTime.DATE_SHORT] - Either a DateTime preset or
       * Intl.DateTimeFormat constructor options.
       * @param {Object} opts - Options to override the configuration of the start DateTime.
       * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(); //=> 11/7/2022 – 11/8/2022
       * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL); //=> November 7 – 8, 2022
       * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL, { locale: 'fr-FR' }); //=> 7–8 novembre 2022
       * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString(DateTime.TIME_SIMPLE); //=> 6:00 – 8:00 PM
       * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> Mon, Nov 07, 6:00 – 8:00 p
       * @return {string}
       */
      toLocaleString(formatOpts = DATE_SHORT, opts = {}) {
        return this.isValid
          ? Formatter.create(this.s.loc.clone(opts), formatOpts).formatInterval(this)
          : INVALID$1;
      }

      /**
       * Returns an ISO 8601-compliant string representation of this Interval.
       * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
       * @param {Object} opts - The same options as {@link DateTime#toISO}
       * @return {string}
       */
      toISO(opts) {
        if (!this.isValid) return INVALID$1;
        return `${this.s.toISO(opts)}/${this.e.toISO(opts)}`;
      }

      /**
       * Returns an ISO 8601-compliant string representation of date of this Interval.
       * The time components are ignored.
       * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
       * @return {string}
       */
      toISODate() {
        if (!this.isValid) return INVALID$1;
        return `${this.s.toISODate()}/${this.e.toISODate()}`;
      }

      /**
       * Returns an ISO 8601-compliant string representation of time of this Interval.
       * The date components are ignored.
       * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
       * @param {Object} opts - The same options as {@link DateTime#toISO}
       * @return {string}
       */
      toISOTime(opts) {
        if (!this.isValid) return INVALID$1;
        return `${this.s.toISOTime(opts)}/${this.e.toISOTime(opts)}`;
      }

      /**
       * Returns a string representation of this Interval formatted according to the specified format
       * string. **You may not want this.** See {@link Interval#toLocaleString} for a more flexible
       * formatting tool.
       * @param {string} dateFormat - The format string. This string formats the start and end time.
       * See {@link DateTime#toFormat} for details.
       * @param {Object} opts - Options.
       * @param {string} [opts.separator =  ' – '] - A separator to place between the start and end
       * representations.
       * @return {string}
       */
      toFormat(dateFormat, { separator = " – " } = {}) {
        if (!this.isValid) return INVALID$1;
        return `${this.s.toFormat(dateFormat)}${separator}${this.e.toFormat(dateFormat)}`;
      }

      /**
       * Return a Duration representing the time spanned by this interval.
       * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
       * @param {Object} opts - options that affect the creation of the Duration
       * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
       * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
       * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
       * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
       * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
       * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
       * @return {Duration}
       */
      toDuration(unit, opts) {
        if (!this.isValid) {
          return Duration.invalid(this.invalidReason);
        }
        return this.e.diff(this.s, unit, opts);
      }

      /**
       * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
       * @param {function} mapFn
       * @return {Interval}
       * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
       * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
       */
      mapEndpoints(mapFn) {
        return Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
      }
    }

    /**
     * The Info class contains static methods for retrieving general time and date related data. For example, it has methods for finding out if a time zone has a DST, for listing the months in any supported locale, and for discovering which of Luxon features are available in the current environment.
     */
    class Info {
      /**
       * Return whether the specified zone contains a DST.
       * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
       * @return {boolean}
       */
      static hasDST(zone = Settings.defaultZone) {
        const proto = DateTime.now().setZone(zone).set({ month: 12 });

        return !zone.isUniversal && proto.offset !== proto.set({ month: 6 }).offset;
      }

      /**
       * Return whether the specified zone is a valid IANA specifier.
       * @param {string} zone - Zone to check
       * @return {boolean}
       */
      static isValidIANAZone(zone) {
        return IANAZone.isValidZone(zone);
      }

      /**
       * Converts the input into a {@link Zone} instance.
       *
       * * If `input` is already a Zone instance, it is returned unchanged.
       * * If `input` is a string containing a valid time zone name, a Zone instance
       *   with that name is returned.
       * * If `input` is a string that doesn't refer to a known time zone, a Zone
       *   instance with {@link Zone#isValid} == false is returned.
       * * If `input is a number, a Zone instance with the specified fixed offset
       *   in minutes is returned.
       * * If `input` is `null` or `undefined`, the default zone is returned.
       * @param {string|Zone|number} [input] - the value to be converted
       * @return {Zone}
       */
      static normalizeZone(input) {
        return normalizeZone(input, Settings.defaultZone);
      }

      /**
       * Get the weekday on which the week starts according to the given locale.
       * @param {Object} opts - options
       * @param {string} [opts.locale] - the locale code
       * @param {string} [opts.locObj=null] - an existing locale object to use
       * @returns {number} the start of the week, 1 for Monday through 7 for Sunday
       */
      static getStartOfWeek({ locale = null, locObj = null } = {}) {
        return (locObj || Locale.create(locale)).getStartOfWeek();
      }

      /**
       * Get the minimum number of days necessary in a week before it is considered part of the next year according
       * to the given locale.
       * @param {Object} opts - options
       * @param {string} [opts.locale] - the locale code
       * @param {string} [opts.locObj=null] - an existing locale object to use
       * @returns {number}
       */
      static getMinimumDaysInFirstWeek({ locale = null, locObj = null } = {}) {
        return (locObj || Locale.create(locale)).getMinDaysInFirstWeek();
      }

      /**
       * Get the weekdays, which are considered the weekend according to the given locale
       * @param {Object} opts - options
       * @param {string} [opts.locale] - the locale code
       * @param {string} [opts.locObj=null] - an existing locale object to use
       * @returns {number[]} an array of weekdays, 1 for Monday through 7 for Sunday
       */
      static getWeekendWeekdays({ locale = null, locObj = null } = {}) {
        // copy the array, because we cache it internally
        return (locObj || Locale.create(locale)).getWeekendDays().slice();
      }

      /**
       * Return an array of standalone month names.
       * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
       * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
       * @param {Object} opts - options
       * @param {string} [opts.locale] - the locale code
       * @param {string} [opts.numberingSystem=null] - the numbering system
       * @param {string} [opts.locObj=null] - an existing locale object to use
       * @param {string} [opts.outputCalendar='gregory'] - the calendar
       * @example Info.months()[0] //=> 'January'
       * @example Info.months('short')[0] //=> 'Jan'
       * @example Info.months('numeric')[0] //=> '1'
       * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
       * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
       * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
       * @return {Array}
       */
      static months(
        length = "long",
        { locale = null, numberingSystem = null, locObj = null, outputCalendar = "gregory" } = {}
      ) {
        return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length);
      }

      /**
       * Return an array of format month names.
       * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
       * changes the string.
       * See {@link Info#months}
       * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
       * @param {Object} opts - options
       * @param {string} [opts.locale] - the locale code
       * @param {string} [opts.numberingSystem=null] - the numbering system
       * @param {string} [opts.locObj=null] - an existing locale object to use
       * @param {string} [opts.outputCalendar='gregory'] - the calendar
       * @return {Array}
       */
      static monthsFormat(
        length = "long",
        { locale = null, numberingSystem = null, locObj = null, outputCalendar = "gregory" } = {}
      ) {
        return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length, true);
      }

      /**
       * Return an array of standalone week names.
       * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
       * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
       * @param {Object} opts - options
       * @param {string} [opts.locale] - the locale code
       * @param {string} [opts.numberingSystem=null] - the numbering system
       * @param {string} [opts.locObj=null] - an existing locale object to use
       * @example Info.weekdays()[0] //=> 'Monday'
       * @example Info.weekdays('short')[0] //=> 'Mon'
       * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
       * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
       * @return {Array}
       */
      static weekdays(length = "long", { locale = null, numberingSystem = null, locObj = null } = {}) {
        return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length);
      }

      /**
       * Return an array of format week names.
       * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
       * changes the string.
       * See {@link Info#weekdays}
       * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
       * @param {Object} opts - options
       * @param {string} [opts.locale=null] - the locale code
       * @param {string} [opts.numberingSystem=null] - the numbering system
       * @param {string} [opts.locObj=null] - an existing locale object to use
       * @return {Array}
       */
      static weekdaysFormat(
        length = "long",
        { locale = null, numberingSystem = null, locObj = null } = {}
      ) {
        return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length, true);
      }

      /**
       * Return an array of meridiems.
       * @param {Object} opts - options
       * @param {string} [opts.locale] - the locale code
       * @example Info.meridiems() //=> [ 'AM', 'PM' ]
       * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
       * @return {Array}
       */
      static meridiems({ locale = null } = {}) {
        return Locale.create(locale).meridiems();
      }

      /**
       * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
       * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
       * @param {Object} opts - options
       * @param {string} [opts.locale] - the locale code
       * @example Info.eras() //=> [ 'BC', 'AD' ]
       * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
       * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
       * @return {Array}
       */
      static eras(length = "short", { locale = null } = {}) {
        return Locale.create(locale, null, "gregory").eras(length);
      }

      /**
       * Return the set of available features in this environment.
       * Some features of Luxon are not available in all environments. For example, on older browsers, relative time formatting support is not available. Use this function to figure out if that's the case.
       * Keys:
       * * `relative`: whether this environment supports relative time formatting
       * * `localeWeek`: whether this environment supports different weekdays for the start of the week based on the locale
       * @example Info.features() //=> { relative: false, localeWeek: true }
       * @return {Object}
       */
      static features() {
        return { relative: hasRelative(), localeWeek: hasLocaleWeekInfo() };
      }
    }

    function dayDiff(earlier, later) {
      const utcDayStart = (dt) => dt.toUTC(0, { keepLocalTime: true }).startOf("day").valueOf(),
        ms = utcDayStart(later) - utcDayStart(earlier);
      return Math.floor(Duration.fromMillis(ms).as("days"));
    }

    function highOrderDiffs(cursor, later, units) {
      const differs = [
        ["years", (a, b) => b.year - a.year],
        ["quarters", (a, b) => b.quarter - a.quarter + (b.year - a.year) * 4],
        ["months", (a, b) => b.month - a.month + (b.year - a.year) * 12],
        [
          "weeks",
          (a, b) => {
            const days = dayDiff(a, b);
            return (days - (days % 7)) / 7;
          },
        ],
        ["days", dayDiff],
      ];

      const results = {};
      const earlier = cursor;
      let lowestOrder, highWater;

      /* This loop tries to diff using larger units first.
         If we overshoot, we backtrack and try the next smaller unit.
         "cursor" starts out at the earlier timestamp and moves closer and closer to "later"
         as we use smaller and smaller units.
         highWater keeps track of where we would be if we added one more of the smallest unit,
         this is used later to potentially convert any difference smaller than the smallest higher order unit
         into a fraction of that smallest higher order unit
      */
      for (const [unit, differ] of differs) {
        if (units.indexOf(unit) >= 0) {
          lowestOrder = unit;

          results[unit] = differ(cursor, later);
          highWater = earlier.plus(results);

          if (highWater > later) {
            // we overshot the end point, backtrack cursor by 1
            results[unit]--;
            cursor = earlier.plus(results);

            // if we are still overshooting now, we need to backtrack again
            // this happens in certain situations when diffing times in different zones,
            // because this calculation ignores time zones
            if (cursor > later) {
              // keep the "overshot by 1" around as highWater
              highWater = cursor;
              // backtrack cursor by 1
              results[unit]--;
              cursor = earlier.plus(results);
            }
          } else {
            cursor = highWater;
          }
        }
      }

      return [cursor, results, highWater, lowestOrder];
    }

    function diff (earlier, later, units, opts) {
      let [cursor, results, highWater, lowestOrder] = highOrderDiffs(earlier, later, units);

      const remainingMillis = later - cursor;

      const lowerOrderUnits = units.filter(
        (u) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(u) >= 0
      );

      if (lowerOrderUnits.length === 0) {
        if (highWater < later) {
          highWater = cursor.plus({ [lowestOrder]: 1 });
        }

        if (highWater !== cursor) {
          results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
        }
      }

      const duration = Duration.fromObject(results, opts);

      if (lowerOrderUnits.length > 0) {
        return Duration.fromMillis(remainingMillis, opts)
          .shiftTo(...lowerOrderUnits)
          .plus(duration);
      } else {
        return duration;
      }
    }

    const numberingSystems = {
      arab: "[\u0660-\u0669]",
      arabext: "[\u06F0-\u06F9]",
      bali: "[\u1B50-\u1B59]",
      beng: "[\u09E6-\u09EF]",
      deva: "[\u0966-\u096F]",
      fullwide: "[\uFF10-\uFF19]",
      gujr: "[\u0AE6-\u0AEF]",
      hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
      khmr: "[\u17E0-\u17E9]",
      knda: "[\u0CE6-\u0CEF]",
      laoo: "[\u0ED0-\u0ED9]",
      limb: "[\u1946-\u194F]",
      mlym: "[\u0D66-\u0D6F]",
      mong: "[\u1810-\u1819]",
      mymr: "[\u1040-\u1049]",
      orya: "[\u0B66-\u0B6F]",
      tamldec: "[\u0BE6-\u0BEF]",
      telu: "[\u0C66-\u0C6F]",
      thai: "[\u0E50-\u0E59]",
      tibt: "[\u0F20-\u0F29]",
      latn: "\\d",
    };

    const numberingSystemsUTF16 = {
      arab: [1632, 1641],
      arabext: [1776, 1785],
      bali: [6992, 7001],
      beng: [2534, 2543],
      deva: [2406, 2415],
      fullwide: [65296, 65303],
      gujr: [2790, 2799],
      khmr: [6112, 6121],
      knda: [3302, 3311],
      laoo: [3792, 3801],
      limb: [6470, 6479],
      mlym: [3430, 3439],
      mong: [6160, 6169],
      mymr: [4160, 4169],
      orya: [2918, 2927],
      tamldec: [3046, 3055],
      telu: [3174, 3183],
      thai: [3664, 3673],
      tibt: [3872, 3881],
    };

    const hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");

    function parseDigits(str) {
      let value = parseInt(str, 10);
      if (isNaN(value)) {
        value = "";
        for (let i = 0; i < str.length; i++) {
          const code = str.charCodeAt(i);

          if (str[i].search(numberingSystems.hanidec) !== -1) {
            value += hanidecChars.indexOf(str[i]);
          } else {
            for (const key in numberingSystemsUTF16) {
              const [min, max] = numberingSystemsUTF16[key];
              if (code >= min && code <= max) {
                value += code - min;
              }
            }
          }
        }
        return parseInt(value, 10);
      } else {
        return value;
      }
    }

    function digitRegex({ numberingSystem }, append = "") {
      return new RegExp(`${numberingSystems[numberingSystem || "latn"]}${append}`);
    }

    const MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";

    function intUnit(regex, post = (i) => i) {
      return { regex, deser: ([s]) => post(parseDigits(s)) };
    }

    const NBSP = String.fromCharCode(160);
    const spaceOrNBSP = `[ ${NBSP}]`;
    const spaceOrNBSPRegExp = new RegExp(spaceOrNBSP, "g");

    function fixListRegex(s) {
      // make dots optional and also make them literal
      // make space and non breakable space characters interchangeable
      return s.replace(/\./g, "\\.?").replace(spaceOrNBSPRegExp, spaceOrNBSP);
    }

    function stripInsensitivities(s) {
      return s
        .replace(/\./g, "") // ignore dots that were made optional
        .replace(spaceOrNBSPRegExp, " ") // interchange space and nbsp
        .toLowerCase();
    }

    function oneOf(strings, startIndex) {
      if (strings === null) {
        return null;
      } else {
        return {
          regex: RegExp(strings.map(fixListRegex).join("|")),
          deser: ([s]) =>
            strings.findIndex((i) => stripInsensitivities(s) === stripInsensitivities(i)) + startIndex,
        };
      }
    }

    function offset(regex, groups) {
      return { regex, deser: ([, h, m]) => signedOffset(h, m), groups };
    }

    function simple(regex) {
      return { regex, deser: ([s]) => s };
    }

    function escapeToken(value) {
      return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
    }

    /**
     * @param token
     * @param {Locale} loc
     */
    function unitForToken(token, loc) {
      const one = digitRegex(loc),
        two = digitRegex(loc, "{2}"),
        three = digitRegex(loc, "{3}"),
        four = digitRegex(loc, "{4}"),
        six = digitRegex(loc, "{6}"),
        oneOrTwo = digitRegex(loc, "{1,2}"),
        oneToThree = digitRegex(loc, "{1,3}"),
        oneToSix = digitRegex(loc, "{1,6}"),
        oneToNine = digitRegex(loc, "{1,9}"),
        twoToFour = digitRegex(loc, "{2,4}"),
        fourToSix = digitRegex(loc, "{4,6}"),
        literal = (t) => ({ regex: RegExp(escapeToken(t.val)), deser: ([s]) => s, literal: true }),
        unitate = (t) => {
          if (token.literal) {
            return literal(t);
          }
          switch (t.val) {
            // era
            case "G":
              return oneOf(loc.eras("short"), 0);
            case "GG":
              return oneOf(loc.eras("long"), 0);
            // years
            case "y":
              return intUnit(oneToSix);
            case "yy":
              return intUnit(twoToFour, untruncateYear);
            case "yyyy":
              return intUnit(four);
            case "yyyyy":
              return intUnit(fourToSix);
            case "yyyyyy":
              return intUnit(six);
            // months
            case "M":
              return intUnit(oneOrTwo);
            case "MM":
              return intUnit(two);
            case "MMM":
              return oneOf(loc.months("short", true), 1);
            case "MMMM":
              return oneOf(loc.months("long", true), 1);
            case "L":
              return intUnit(oneOrTwo);
            case "LL":
              return intUnit(two);
            case "LLL":
              return oneOf(loc.months("short", false), 1);
            case "LLLL":
              return oneOf(loc.months("long", false), 1);
            // dates
            case "d":
              return intUnit(oneOrTwo);
            case "dd":
              return intUnit(two);
            // ordinals
            case "o":
              return intUnit(oneToThree);
            case "ooo":
              return intUnit(three);
            // time
            case "HH":
              return intUnit(two);
            case "H":
              return intUnit(oneOrTwo);
            case "hh":
              return intUnit(two);
            case "h":
              return intUnit(oneOrTwo);
            case "mm":
              return intUnit(two);
            case "m":
              return intUnit(oneOrTwo);
            case "q":
              return intUnit(oneOrTwo);
            case "qq":
              return intUnit(two);
            case "s":
              return intUnit(oneOrTwo);
            case "ss":
              return intUnit(two);
            case "S":
              return intUnit(oneToThree);
            case "SSS":
              return intUnit(three);
            case "u":
              return simple(oneToNine);
            case "uu":
              return simple(oneOrTwo);
            case "uuu":
              return intUnit(one);
            // meridiem
            case "a":
              return oneOf(loc.meridiems(), 0);
            // weekYear (k)
            case "kkkk":
              return intUnit(four);
            case "kk":
              return intUnit(twoToFour, untruncateYear);
            // weekNumber (W)
            case "W":
              return intUnit(oneOrTwo);
            case "WW":
              return intUnit(two);
            // weekdays
            case "E":
            case "c":
              return intUnit(one);
            case "EEE":
              return oneOf(loc.weekdays("short", false), 1);
            case "EEEE":
              return oneOf(loc.weekdays("long", false), 1);
            case "ccc":
              return oneOf(loc.weekdays("short", true), 1);
            case "cccc":
              return oneOf(loc.weekdays("long", true), 1);
            // offset/zone
            case "Z":
            case "ZZ":
              return offset(new RegExp(`([+-]${oneOrTwo.source})(?::(${two.source}))?`), 2);
            case "ZZZ":
              return offset(new RegExp(`([+-]${oneOrTwo.source})(${two.source})?`), 2);
            // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
            // because we don't have any way to figure out what they are
            case "z":
              return simple(/[a-z_+-/]{1,256}?/i);
            // this special-case "token" represents a place where a macro-token expanded into a white-space literal
            // in this case we accept any non-newline white-space
            case " ":
              return simple(/[^\S\n\r]/);
            default:
              return literal(t);
          }
        };

      const unit = unitate(token) || {
        invalidReason: MISSING_FTP,
      };

      unit.token = token;

      return unit;
    }

    const partTypeStyleToTokenVal = {
      year: {
        "2-digit": "yy",
        numeric: "yyyyy",
      },
      month: {
        numeric: "M",
        "2-digit": "MM",
        short: "MMM",
        long: "MMMM",
      },
      day: {
        numeric: "d",
        "2-digit": "dd",
      },
      weekday: {
        short: "EEE",
        long: "EEEE",
      },
      dayperiod: "a",
      dayPeriod: "a",
      hour12: {
        numeric: "h",
        "2-digit": "hh",
      },
      hour24: {
        numeric: "H",
        "2-digit": "HH",
      },
      minute: {
        numeric: "m",
        "2-digit": "mm",
      },
      second: {
        numeric: "s",
        "2-digit": "ss",
      },
      timeZoneName: {
        long: "ZZZZZ",
        short: "ZZZ",
      },
    };

    function tokenForPart(part, formatOpts, resolvedOpts) {
      const { type, value } = part;

      if (type === "literal") {
        const isSpace = /^\s+$/.test(value);
        return {
          literal: !isSpace,
          val: isSpace ? " " : value,
        };
      }

      const style = formatOpts[type];

      // The user might have explicitly specified hour12 or hourCycle
      // if so, respect their decision
      // if not, refer back to the resolvedOpts, which are based on the locale
      let actualType = type;
      if (type === "hour") {
        if (formatOpts.hour12 != null) {
          actualType = formatOpts.hour12 ? "hour12" : "hour24";
        } else if (formatOpts.hourCycle != null) {
          if (formatOpts.hourCycle === "h11" || formatOpts.hourCycle === "h12") {
            actualType = "hour12";
          } else {
            actualType = "hour24";
          }
        } else {
          // tokens only differentiate between 24 hours or not,
          // so we do not need to check hourCycle here, which is less supported anyways
          actualType = resolvedOpts.hour12 ? "hour12" : "hour24";
        }
      }
      let val = partTypeStyleToTokenVal[actualType];
      if (typeof val === "object") {
        val = val[style];
      }

      if (val) {
        return {
          literal: false,
          val,
        };
      }

      return undefined;
    }

    function buildRegex(units) {
      const re = units.map((u) => u.regex).reduce((f, r) => `${f}(${r.source})`, "");
      return [`^${re}$`, units];
    }

    function match(input, regex, handlers) {
      const matches = input.match(regex);

      if (matches) {
        const all = {};
        let matchIndex = 1;
        for (const i in handlers) {
          if (hasOwnProperty(handlers, i)) {
            const h = handlers[i],
              groups = h.groups ? h.groups + 1 : 1;
            if (!h.literal && h.token) {
              all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
            }
            matchIndex += groups;
          }
        }
        return [matches, all];
      } else {
        return [matches, {}];
      }
    }

    function dateTimeFromMatches(matches) {
      const toField = (token) => {
        switch (token) {
          case "S":
            return "millisecond";
          case "s":
            return "second";
          case "m":
            return "minute";
          case "h":
          case "H":
            return "hour";
          case "d":
            return "day";
          case "o":
            return "ordinal";
          case "L":
          case "M":
            return "month";
          case "y":
            return "year";
          case "E":
          case "c":
            return "weekday";
          case "W":
            return "weekNumber";
          case "k":
            return "weekYear";
          case "q":
            return "quarter";
          default:
            return null;
        }
      };

      let zone = null;
      let specificOffset;
      if (!isUndefined(matches.z)) {
        zone = IANAZone.create(matches.z);
      }

      if (!isUndefined(matches.Z)) {
        if (!zone) {
          zone = new FixedOffsetZone(matches.Z);
        }
        specificOffset = matches.Z;
      }

      if (!isUndefined(matches.q)) {
        matches.M = (matches.q - 1) * 3 + 1;
      }

      if (!isUndefined(matches.h)) {
        if (matches.h < 12 && matches.a === 1) {
          matches.h += 12;
        } else if (matches.h === 12 && matches.a === 0) {
          matches.h = 0;
        }
      }

      if (matches.G === 0 && matches.y) {
        matches.y = -matches.y;
      }

      if (!isUndefined(matches.u)) {
        matches.S = parseMillis(matches.u);
      }

      const vals = Object.keys(matches).reduce((r, k) => {
        const f = toField(k);
        if (f) {
          r[f] = matches[k];
        }

        return r;
      }, {});

      return [vals, zone, specificOffset];
    }

    let dummyDateTimeCache = null;

    function getDummyDateTime() {
      if (!dummyDateTimeCache) {
        dummyDateTimeCache = DateTime.fromMillis(1555555555555);
      }

      return dummyDateTimeCache;
    }

    function maybeExpandMacroToken(token, locale) {
      if (token.literal) {
        return token;
      }

      const formatOpts = Formatter.macroTokenToFormatOpts(token.val);
      const tokens = formatOptsToTokens(formatOpts, locale);

      if (tokens == null || tokens.includes(undefined)) {
        return token;
      }

      return tokens;
    }

    function expandMacroTokens(tokens, locale) {
      return Array.prototype.concat(...tokens.map((t) => maybeExpandMacroToken(t, locale)));
    }

    /**
     * @private
     */

    function explainFromTokens(locale, input, format) {
      const tokens = expandMacroTokens(Formatter.parseFormat(format), locale),
        units = tokens.map((t) => unitForToken(t, locale)),
        disqualifyingUnit = units.find((t) => t.invalidReason);

      if (disqualifyingUnit) {
        return { input, tokens, invalidReason: disqualifyingUnit.invalidReason };
      } else {
        const [regexString, handlers] = buildRegex(units),
          regex = RegExp(regexString, "i"),
          [rawMatches, matches] = match(input, regex, handlers),
          [result, zone, specificOffset] = matches
            ? dateTimeFromMatches(matches)
            : [null, null, undefined];
        if (hasOwnProperty(matches, "a") && hasOwnProperty(matches, "H")) {
          throw new ConflictingSpecificationError(
            "Can't include meridiem when specifying 24-hour format"
          );
        }
        return { input, tokens, regex, rawMatches, matches, result, zone, specificOffset };
      }
    }

    function parseFromTokens(locale, input, format) {
      const { result, zone, specificOffset, invalidReason } = explainFromTokens(locale, input, format);
      return [result, zone, specificOffset, invalidReason];
    }

    function formatOptsToTokens(formatOpts, locale) {
      if (!formatOpts) {
        return null;
      }

      const formatter = Formatter.create(locale, formatOpts);
      const df = formatter.dtFormatter(getDummyDateTime());
      const parts = df.formatToParts();
      const resolvedOpts = df.resolvedOptions();
      return parts.map((p) => tokenForPart(p, formatOpts, resolvedOpts));
    }

    const INVALID = "Invalid DateTime";
    const MAX_DATE = 8.64e15;

    function unsupportedZone(zone) {
      return new Invalid("unsupported zone", `the zone "${zone.name}" is not supported`);
    }

    // we cache week data on the DT object and this intermediates the cache
    /**
     * @param {DateTime} dt
     */
    function possiblyCachedWeekData(dt) {
      if (dt.weekData === null) {
        dt.weekData = gregorianToWeek(dt.c);
      }
      return dt.weekData;
    }

    /**
     * @param {DateTime} dt
     */
    function possiblyCachedLocalWeekData(dt) {
      if (dt.localWeekData === null) {
        dt.localWeekData = gregorianToWeek(
          dt.c,
          dt.loc.getMinDaysInFirstWeek(),
          dt.loc.getStartOfWeek()
        );
      }
      return dt.localWeekData;
    }

    // clone really means, "make a new object with these modifications". all "setters" really use this
    // to create a new object while only changing some of the properties
    function clone(inst, alts) {
      const current = {
        ts: inst.ts,
        zone: inst.zone,
        c: inst.c,
        o: inst.o,
        loc: inst.loc,
        invalid: inst.invalid,
      };
      return new DateTime({ ...current, ...alts, old: current });
    }

    // find the right offset a given local time. The o input is our guess, which determines which
    // offset we'll pick in ambiguous cases (e.g. there are two 3 AMs b/c Fallback DST)
    function fixOffset(localTS, o, tz) {
      // Our UTC time is just a guess because our offset is just a guess
      let utcGuess = localTS - o * 60 * 1000;

      // Test whether the zone matches the offset for this ts
      const o2 = tz.offset(utcGuess);

      // If so, offset didn't change and we're done
      if (o === o2) {
        return [utcGuess, o];
      }

      // If not, change the ts by the difference in the offset
      utcGuess -= (o2 - o) * 60 * 1000;

      // If that gives us the local time we want, we're done
      const o3 = tz.offset(utcGuess);
      if (o2 === o3) {
        return [utcGuess, o2];
      }

      // If it's different, we're in a hole time. The offset has changed, but the we don't adjust the time
      return [localTS - Math.min(o2, o3) * 60 * 1000, Math.max(o2, o3)];
    }

    // convert an epoch timestamp into a calendar object with the given offset
    function tsToObj(ts, offset) {
      ts += offset * 60 * 1000;

      const d = new Date(ts);

      return {
        year: d.getUTCFullYear(),
        month: d.getUTCMonth() + 1,
        day: d.getUTCDate(),
        hour: d.getUTCHours(),
        minute: d.getUTCMinutes(),
        second: d.getUTCSeconds(),
        millisecond: d.getUTCMilliseconds(),
      };
    }

    // convert a calendar object to a epoch timestamp
    function objToTS(obj, offset, zone) {
      return fixOffset(objToLocalTS(obj), offset, zone);
    }

    // create a new DT instance by adding a duration, adjusting for DSTs
    function adjustTime(inst, dur) {
      const oPre = inst.o,
        year = inst.c.year + Math.trunc(dur.years),
        month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3,
        c = {
          ...inst.c,
          year,
          month,
          day:
            Math.min(inst.c.day, daysInMonth(year, month)) +
            Math.trunc(dur.days) +
            Math.trunc(dur.weeks) * 7,
        },
        millisToAdd = Duration.fromObject({
          years: dur.years - Math.trunc(dur.years),
          quarters: dur.quarters - Math.trunc(dur.quarters),
          months: dur.months - Math.trunc(dur.months),
          weeks: dur.weeks - Math.trunc(dur.weeks),
          days: dur.days - Math.trunc(dur.days),
          hours: dur.hours,
          minutes: dur.minutes,
          seconds: dur.seconds,
          milliseconds: dur.milliseconds,
        }).as("milliseconds"),
        localTS = objToLocalTS(c);

      let [ts, o] = fixOffset(localTS, oPre, inst.zone);

      if (millisToAdd !== 0) {
        ts += millisToAdd;
        // that could have changed the offset by going over a DST, but we want to keep the ts the same
        o = inst.zone.offset(ts);
      }

      return { ts, o };
    }

    // helper useful in turning the results of parsing into real dates
    // by handling the zone options
    function parseDataToDateTime(parsed, parsedZone, opts, format, text, specificOffset) {
      const { setZone, zone } = opts;
      if ((parsed && Object.keys(parsed).length !== 0) || parsedZone) {
        const interpretationZone = parsedZone || zone,
          inst = DateTime.fromObject(parsed, {
            ...opts,
            zone: interpretationZone,
            specificOffset,
          });
        return setZone ? inst : inst.setZone(zone);
      } else {
        return DateTime.invalid(
          new Invalid("unparsable", `the input "${text}" can't be parsed as ${format}`)
        );
      }
    }

    // if you want to output a technical format (e.g. RFC 2822), this helper
    // helps handle the details
    function toTechFormat(dt, format, allowZ = true) {
      return dt.isValid
        ? Formatter.create(Locale.create("en-US"), {
            allowZ,
            forceSimple: true,
          }).formatDateTimeFromString(dt, format)
        : null;
    }

    function toISODate(o, extended) {
      const longFormat = o.c.year > 9999 || o.c.year < 0;
      let c = "";
      if (longFormat && o.c.year >= 0) c += "+";
      c += padStart(o.c.year, longFormat ? 6 : 4);

      if (extended) {
        c += "-";
        c += padStart(o.c.month);
        c += "-";
        c += padStart(o.c.day);
      } else {
        c += padStart(o.c.month);
        c += padStart(o.c.day);
      }
      return c;
    }

    function toISOTime(
      o,
      extended,
      suppressSeconds,
      suppressMilliseconds,
      includeOffset,
      extendedZone
    ) {
      let c = padStart(o.c.hour);
      if (extended) {
        c += ":";
        c += padStart(o.c.minute);
        if (o.c.millisecond !== 0 || o.c.second !== 0 || !suppressSeconds) {
          c += ":";
        }
      } else {
        c += padStart(o.c.minute);
      }

      if (o.c.millisecond !== 0 || o.c.second !== 0 || !suppressSeconds) {
        c += padStart(o.c.second);

        if (o.c.millisecond !== 0 || !suppressMilliseconds) {
          c += ".";
          c += padStart(o.c.millisecond, 3);
        }
      }

      if (includeOffset) {
        if (o.isOffsetFixed && o.offset === 0 && !extendedZone) {
          c += "Z";
        } else if (o.o < 0) {
          c += "-";
          c += padStart(Math.trunc(-o.o / 60));
          c += ":";
          c += padStart(Math.trunc(-o.o % 60));
        } else {
          c += "+";
          c += padStart(Math.trunc(o.o / 60));
          c += ":";
          c += padStart(Math.trunc(o.o % 60));
        }
      }

      if (extendedZone) {
        c += "[" + o.zone.ianaName + "]";
      }
      return c;
    }

    // defaults for unspecified units in the supported calendars
    const defaultUnitValues = {
        month: 1,
        day: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
      },
      defaultWeekUnitValues = {
        weekNumber: 1,
        weekday: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
      },
      defaultOrdinalUnitValues = {
        ordinal: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
      };

    // Units in the supported calendars, sorted by bigness
    const orderedUnits = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
      orderedWeekUnits = [
        "weekYear",
        "weekNumber",
        "weekday",
        "hour",
        "minute",
        "second",
        "millisecond",
      ],
      orderedOrdinalUnits = ["year", "ordinal", "hour", "minute", "second", "millisecond"];

    // standardize case and plurality in units
    function normalizeUnit(unit) {
      const normalized = {
        year: "year",
        years: "year",
        month: "month",
        months: "month",
        day: "day",
        days: "day",
        hour: "hour",
        hours: "hour",
        minute: "minute",
        minutes: "minute",
        quarter: "quarter",
        quarters: "quarter",
        second: "second",
        seconds: "second",
        millisecond: "millisecond",
        milliseconds: "millisecond",
        weekday: "weekday",
        weekdays: "weekday",
        weeknumber: "weekNumber",
        weeksnumber: "weekNumber",
        weeknumbers: "weekNumber",
        weekyear: "weekYear",
        weekyears: "weekYear",
        ordinal: "ordinal",
      }[unit.toLowerCase()];

      if (!normalized) throw new InvalidUnitError(unit);

      return normalized;
    }

    function normalizeUnitWithLocalWeeks(unit) {
      switch (unit.toLowerCase()) {
        case "localweekday":
        case "localweekdays":
          return "localWeekday";
        case "localweeknumber":
        case "localweeknumbers":
          return "localWeekNumber";
        case "localweekyear":
        case "localweekyears":
          return "localWeekYear";
        default:
          return normalizeUnit(unit);
      }
    }

    // this is a dumbed down version of fromObject() that runs about 60% faster
    // but doesn't do any validation, makes a bunch of assumptions about what units
    // are present, and so on.
    function quickDT(obj, opts) {
      const zone = normalizeZone(opts.zone, Settings.defaultZone),
        loc = Locale.fromObject(opts),
        tsNow = Settings.now();

      let ts, o;

      // assume we have the higher-order units
      if (!isUndefined(obj.year)) {
        for (const u of orderedUnits) {
          if (isUndefined(obj[u])) {
            obj[u] = defaultUnitValues[u];
          }
        }

        const invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);
        if (invalid) {
          return DateTime.invalid(invalid);
        }

        const offsetProvis = zone.offset(tsNow);
        [ts, o] = objToTS(obj, offsetProvis, zone);
      } else {
        ts = tsNow;
      }

      return new DateTime({ ts, zone, loc, o });
    }

    function diffRelative(start, end, opts) {
      const round = isUndefined(opts.round) ? true : opts.round,
        format = (c, unit) => {
          c = roundTo(c, round || opts.calendary ? 0 : 2, true);
          const formatter = end.loc.clone(opts).relFormatter(opts);
          return formatter.format(c, unit);
        },
        differ = (unit) => {
          if (opts.calendary) {
            if (!end.hasSame(start, unit)) {
              return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
            } else return 0;
          } else {
            return end.diff(start, unit).get(unit);
          }
        };

      if (opts.unit) {
        return format(differ(opts.unit), opts.unit);
      }

      for (const unit of opts.units) {
        const count = differ(unit);
        if (Math.abs(count) >= 1) {
          return format(count, unit);
        }
      }
      return format(start > end ? -0 : 0, opts.units[opts.units.length - 1]);
    }

    function lastOpts(argList) {
      let opts = {},
        args;
      if (argList.length > 0 && typeof argList[argList.length - 1] === "object") {
        opts = argList[argList.length - 1];
        args = Array.from(argList).slice(0, argList.length - 1);
      } else {
        args = Array.from(argList);
      }
      return [opts, args];
    }

    /**
     * A DateTime is an immutable data structure representing a specific date and time and accompanying methods. It contains class and instance methods for creating, parsing, interrogating, transforming, and formatting them.
     *
     * A DateTime comprises of:
     * * A timestamp. Each DateTime instance refers to a specific millisecond of the Unix epoch.
     * * A time zone. Each instance is considered in the context of a specific zone (by default the local system's zone).
     * * Configuration properties that effect how output strings are formatted, such as `locale`, `numberingSystem`, and `outputCalendar`.
     *
     * Here is a brief overview of the most commonly used functionality it provides:
     *
     * * **Creation**: To create a DateTime from its components, use one of its factory class methods: {@link DateTime.local}, {@link DateTime.utc}, and (most flexibly) {@link DateTime.fromObject}. To create one from a standard string format, use {@link DateTime.fromISO}, {@link DateTime.fromHTTP}, and {@link DateTime.fromRFC2822}. To create one from a custom string format, use {@link DateTime.fromFormat}. To create one from a native JS date, use {@link DateTime.fromJSDate}.
     * * **Gregorian calendar and time**: To examine the Gregorian properties of a DateTime individually (i.e as opposed to collectively through {@link DateTime#toObject}), use the {@link DateTime#year}, {@link DateTime#month},
     * {@link DateTime#day}, {@link DateTime#hour}, {@link DateTime#minute}, {@link DateTime#second}, {@link DateTime#millisecond} accessors.
     * * **Week calendar**: For ISO week calendar attributes, see the {@link DateTime#weekYear}, {@link DateTime#weekNumber}, and {@link DateTime#weekday} accessors.
     * * **Configuration** See the {@link DateTime#locale} and {@link DateTime#numberingSystem} accessors.
     * * **Transformation**: To transform the DateTime into other DateTimes, use {@link DateTime#set}, {@link DateTime#reconfigure}, {@link DateTime#setZone}, {@link DateTime#setLocale}, {@link DateTime.plus}, {@link DateTime#minus}, {@link DateTime#endOf}, {@link DateTime#startOf}, {@link DateTime#toUTC}, and {@link DateTime#toLocal}.
     * * **Output**: To convert the DateTime to other representations, use the {@link DateTime#toRelative}, {@link DateTime#toRelativeCalendar}, {@link DateTime#toJSON}, {@link DateTime#toISO}, {@link DateTime#toHTTP}, {@link DateTime#toObject}, {@link DateTime#toRFC2822}, {@link DateTime#toString}, {@link DateTime#toLocaleString}, {@link DateTime#toFormat}, {@link DateTime#toMillis} and {@link DateTime#toJSDate}.
     *
     * There's plenty others documented below. In addition, for more information on subtler topics like internationalization, time zones, alternative calendars, validity, and so on, see the external documentation.
     */
    class DateTime {
      /**
       * @access private
       */
      constructor(config) {
        const zone = config.zone || Settings.defaultZone;

        let invalid =
          config.invalid ||
          (Number.isNaN(config.ts) ? new Invalid("invalid input") : null) ||
          (!zone.isValid ? unsupportedZone(zone) : null);
        /**
         * @access private
         */
        this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;

        let c = null,
          o = null;
        if (!invalid) {
          const unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);

          if (unchanged) {
            [c, o] = [config.old.c, config.old.o];
          } else {
            const ot = zone.offset(this.ts);
            c = tsToObj(this.ts, ot);
            invalid = Number.isNaN(c.year) ? new Invalid("invalid input") : null;
            c = invalid ? null : c;
            o = invalid ? null : ot;
          }
        }

        /**
         * @access private
         */
        this._zone = zone;
        /**
         * @access private
         */
        this.loc = config.loc || Locale.create();
        /**
         * @access private
         */
        this.invalid = invalid;
        /**
         * @access private
         */
        this.weekData = null;
        /**
         * @access private
         */
        this.localWeekData = null;
        /**
         * @access private
         */
        this.c = c;
        /**
         * @access private
         */
        this.o = o;
        /**
         * @access private
         */
        this.isLuxonDateTime = true;
      }

      // CONSTRUCT

      /**
       * Create a DateTime for the current instant, in the system's time zone.
       *
       * Use Settings to override these default values if needed.
       * @example DateTime.now().toISO() //~> now in the ISO format
       * @return {DateTime}
       */
      static now() {
        return new DateTime({});
      }

      /**
       * Create a local DateTime
       * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
       * @param {number} [month=1] - The month, 1-indexed
       * @param {number} [day=1] - The day of the month, 1-indexed
       * @param {number} [hour=0] - The hour of the day, in 24-hour time
       * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
       * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
       * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
       * @example DateTime.local()                                  //~> now
       * @example DateTime.local({ zone: "America/New_York" })      //~> now, in US east coast time
       * @example DateTime.local(2017)                              //~> 2017-01-01T00:00:00
       * @example DateTime.local(2017, 3)                           //~> 2017-03-01T00:00:00
       * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
       * @example DateTime.local(2017, 3, 12, 5)                    //~> 2017-03-12T05:00:00
       * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" })   //~> 2017-03-12T05:00:00, in UTC
       * @example DateTime.local(2017, 3, 12, 5, 45)                //~> 2017-03-12T05:45:00
       * @example DateTime.local(2017, 3, 12, 5, 45, 10)            //~> 2017-03-12T05:45:10
       * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)       //~> 2017-03-12T05:45:10.765
       * @return {DateTime}
       */
      static local() {
        const [opts, args] = lastOpts(arguments),
          [year, month, day, hour, minute, second, millisecond] = args;
        return quickDT({ year, month, day, hour, minute, second, millisecond }, opts);
      }

      /**
       * Create a DateTime in UTC
       * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
       * @param {number} [month=1] - The month, 1-indexed
       * @param {number} [day=1] - The day of the month
       * @param {number} [hour=0] - The hour of the day, in 24-hour time
       * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
       * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
       * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
       * @param {Object} options - configuration options for the DateTime
       * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
       * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
       * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
       * @example DateTime.utc()                                              //~> now
       * @example DateTime.utc(2017)                                          //~> 2017-01-01T00:00:00Z
       * @example DateTime.utc(2017, 3)                                       //~> 2017-03-01T00:00:00Z
       * @example DateTime.utc(2017, 3, 12)                                   //~> 2017-03-12T00:00:00Z
       * @example DateTime.utc(2017, 3, 12, 5)                                //~> 2017-03-12T05:00:00Z
       * @example DateTime.utc(2017, 3, 12, 5, 45)                            //~> 2017-03-12T05:45:00Z
       * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" })          //~> 2017-03-12T05:45:00Z with a French locale
       * @example DateTime.utc(2017, 3, 12, 5, 45, 10)                        //~> 2017-03-12T05:45:10Z
       * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr" }) //~> 2017-03-12T05:45:10.765Z with a French locale
       * @return {DateTime}
       */
      static utc() {
        const [opts, args] = lastOpts(arguments),
          [year, month, day, hour, minute, second, millisecond] = args;

        opts.zone = FixedOffsetZone.utcInstance;
        return quickDT({ year, month, day, hour, minute, second, millisecond }, opts);
      }

      /**
       * Create a DateTime from a JavaScript Date object. Uses the default zone.
       * @param {Date} date - a JavaScript Date object
       * @param {Object} options - configuration options for the DateTime
       * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
       * @return {DateTime}
       */
      static fromJSDate(date, options = {}) {
        const ts = isDate(date) ? date.valueOf() : NaN;
        if (Number.isNaN(ts)) {
          return DateTime.invalid("invalid input");
        }

        const zoneToUse = normalizeZone(options.zone, Settings.defaultZone);
        if (!zoneToUse.isValid) {
          return DateTime.invalid(unsupportedZone(zoneToUse));
        }

        return new DateTime({
          ts: ts,
          zone: zoneToUse,
          loc: Locale.fromObject(options),
        });
      }

      /**
       * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
       * @param {number} milliseconds - a number of milliseconds since 1970 UTC
       * @param {Object} options - configuration options for the DateTime
       * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
       * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
       * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
       * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
       * @return {DateTime}
       */
      static fromMillis(milliseconds, options = {}) {
        if (!isNumber(milliseconds)) {
          throw new InvalidArgumentError(
            `fromMillis requires a numerical input, but received a ${typeof milliseconds} with value ${milliseconds}`
          );
        } else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) {
          // this isn't perfect because because we can still end up out of range because of additional shifting, but it's a start
          return DateTime.invalid("Timestamp out of range");
        } else {
          return new DateTime({
            ts: milliseconds,
            zone: normalizeZone(options.zone, Settings.defaultZone),
            loc: Locale.fromObject(options),
          });
        }
      }

      /**
       * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
       * @param {number} seconds - a number of seconds since 1970 UTC
       * @param {Object} options - configuration options for the DateTime
       * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
       * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
       * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
       * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
       * @return {DateTime}
       */
      static fromSeconds(seconds, options = {}) {
        if (!isNumber(seconds)) {
          throw new InvalidArgumentError("fromSeconds requires a numerical input");
        } else {
          return new DateTime({
            ts: seconds * 1000,
            zone: normalizeZone(options.zone, Settings.defaultZone),
            loc: Locale.fromObject(options),
          });
        }
      }

      /**
       * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
       * @param {Object} obj - the object to create the DateTime from
       * @param {number} obj.year - a year, such as 1987
       * @param {number} obj.month - a month, 1-12
       * @param {number} obj.day - a day of the month, 1-31, depending on the month
       * @param {number} obj.ordinal - day of the year, 1-365 or 366
       * @param {number} obj.weekYear - an ISO week year
       * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
       * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
       * @param {number} obj.localWeekYear - a week year, according to the locale
       * @param {number} obj.localWeekNumber - a week number, between 1 and 52 or 53, depending on the year, according to the locale
       * @param {number} obj.localWeekday - a weekday, 1-7, where 1 is the first and 7 is the last day of the week, according to the locale
       * @param {number} obj.hour - hour of the day, 0-23
       * @param {number} obj.minute - minute of the hour, 0-59
       * @param {number} obj.second - second of the minute, 0-59
       * @param {number} obj.millisecond - millisecond of the second, 0-999
       * @param {Object} opts - options for creating this DateTime
       * @param {string|Zone} [opts.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
       * @param {string} [opts.locale='system\'s locale'] - a locale to set on the resulting DateTime instance
       * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
       * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
       * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
       * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
       * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
       * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
       * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
       * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
       * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
       * @example DateTime.fromObject({ localWeekYear: 2022, localWeekNumber: 1, localWeekday: 1 }, { locale: "en-US" }).toISODate() //=> '2021-12-26'
       * @return {DateTime}
       */
      static fromObject(obj, opts = {}) {
        obj = obj || {};
        const zoneToUse = normalizeZone(opts.zone, Settings.defaultZone);
        if (!zoneToUse.isValid) {
          return DateTime.invalid(unsupportedZone(zoneToUse));
        }

        const loc = Locale.fromObject(opts);
        const normalized = normalizeObject(obj, normalizeUnitWithLocalWeeks);
        const { minDaysInFirstWeek, startOfWeek } = usesLocalWeekValues(normalized, loc);

        const tsNow = Settings.now(),
          offsetProvis = !isUndefined(opts.specificOffset)
            ? opts.specificOffset
            : zoneToUse.offset(tsNow),
          containsOrdinal = !isUndefined(normalized.ordinal),
          containsGregorYear = !isUndefined(normalized.year),
          containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day),
          containsGregor = containsGregorYear || containsGregorMD,
          definiteWeekDef = normalized.weekYear || normalized.weekNumber;

        // cases:
        // just a weekday -> this week's instance of that weekday, no worries
        // (gregorian data or ordinal) + (weekYear or weekNumber) -> error
        // (gregorian month or day) + ordinal -> error
        // otherwise just use weeks or ordinals or gregorian, depending on what's specified

        if ((containsGregor || containsOrdinal) && definiteWeekDef) {
          throw new ConflictingSpecificationError(
            "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
          );
        }

        if (containsGregorMD && containsOrdinal) {
          throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
        }

        const useWeekData = definiteWeekDef || (normalized.weekday && !containsGregor);

        // configure ourselves to deal with gregorian dates or week stuff
        let units,
          defaultValues,
          objNow = tsToObj(tsNow, offsetProvis);
        if (useWeekData) {
          units = orderedWeekUnits;
          defaultValues = defaultWeekUnitValues;
          objNow = gregorianToWeek(objNow, minDaysInFirstWeek, startOfWeek);
        } else if (containsOrdinal) {
          units = orderedOrdinalUnits;
          defaultValues = defaultOrdinalUnitValues;
          objNow = gregorianToOrdinal(objNow);
        } else {
          units = orderedUnits;
          defaultValues = defaultUnitValues;
        }

        // set default values for missing stuff
        let foundFirst = false;
        for (const u of units) {
          const v = normalized[u];
          if (!isUndefined(v)) {
            foundFirst = true;
          } else if (foundFirst) {
            normalized[u] = defaultValues[u];
          } else {
            normalized[u] = objNow[u];
          }
        }

        // make sure the values we have are in range
        const higherOrderInvalid = useWeekData
            ? hasInvalidWeekData(normalized, minDaysInFirstWeek, startOfWeek)
            : containsOrdinal
            ? hasInvalidOrdinalData(normalized)
            : hasInvalidGregorianData(normalized),
          invalid = higherOrderInvalid || hasInvalidTimeData(normalized);

        if (invalid) {
          return DateTime.invalid(invalid);
        }

        // compute the actual time
        const gregorian = useWeekData
            ? weekToGregorian(normalized, minDaysInFirstWeek, startOfWeek)
            : containsOrdinal
            ? ordinalToGregorian(normalized)
            : normalized,
          [tsFinal, offsetFinal] = objToTS(gregorian, offsetProvis, zoneToUse),
          inst = new DateTime({
            ts: tsFinal,
            zone: zoneToUse,
            o: offsetFinal,
            loc,
          });

        // gregorian data + weekday serves only to validate
        if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
          return DateTime.invalid(
            "mismatched weekday",
            `you can't specify both a weekday of ${normalized.weekday} and a date of ${inst.toISO()}`
          );
        }

        return inst;
      }

      /**
       * Create a DateTime from an ISO 8601 string
       * @param {string} text - the ISO string
       * @param {Object} opts - options to affect the creation
       * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
       * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
       * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
       * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
       * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
       * @example DateTime.fromISO('2016-05-25T09:08:34.123')
       * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
       * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
       * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
       * @example DateTime.fromISO('2016-W05-4')
       * @return {DateTime}
       */
      static fromISO(text, opts = {}) {
        const [vals, parsedZone] = parseISODate(text);
        return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
      }

      /**
       * Create a DateTime from an RFC 2822 string
       * @param {string} text - the RFC 2822 string
       * @param {Object} opts - options to affect the creation
       * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
       * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
       * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
       * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
       * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
       * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
       * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
       * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
       * @return {DateTime}
       */
      static fromRFC2822(text, opts = {}) {
        const [vals, parsedZone] = parseRFC2822Date(text);
        return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
      }

      /**
       * Create a DateTime from an HTTP header date
       * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
       * @param {string} text - the HTTP header date
       * @param {Object} opts - options to affect the creation
       * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
       * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
       * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
       * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
       * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
       * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
       * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
       * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
       * @return {DateTime}
       */
      static fromHTTP(text, opts = {}) {
        const [vals, parsedZone] = parseHTTPDate(text);
        return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
      }

      /**
       * Create a DateTime from an input string and format string.
       * Defaults to en-US if no locale has been specified, regardless of the system's locale. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/parsing?id=table-of-tokens).
       * @param {string} text - the string to parse
       * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
       * @param {Object} opts - options to affect the creation
       * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
       * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
       * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
       * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
       * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
       * @return {DateTime}
       */
      static fromFormat(text, fmt, opts = {}) {
        if (isUndefined(text) || isUndefined(fmt)) {
          throw new InvalidArgumentError("fromFormat requires an input string and a format");
        }

        const { locale = null, numberingSystem = null } = opts,
          localeToUse = Locale.fromOpts({
            locale,
            numberingSystem,
            defaultToEN: true,
          }),
          [vals, parsedZone, specificOffset, invalid] = parseFromTokens(localeToUse, text, fmt);
        if (invalid) {
          return DateTime.invalid(invalid);
        } else {
          return parseDataToDateTime(vals, parsedZone, opts, `format ${fmt}`, text, specificOffset);
        }
      }

      /**
       * @deprecated use fromFormat instead
       */
      static fromString(text, fmt, opts = {}) {
        return DateTime.fromFormat(text, fmt, opts);
      }

      /**
       * Create a DateTime from a SQL date, time, or datetime
       * Defaults to en-US if no locale has been specified, regardless of the system's locale
       * @param {string} text - the string to parse
       * @param {Object} opts - options to affect the creation
       * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
       * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
       * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
       * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
       * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
       * @example DateTime.fromSQL('2017-05-15')
       * @example DateTime.fromSQL('2017-05-15 09:12:34')
       * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
       * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
       * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
       * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
       * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
       * @example DateTime.fromSQL('09:12:34.342')
       * @return {DateTime}
       */
      static fromSQL(text, opts = {}) {
        const [vals, parsedZone] = parseSQL(text);
        return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
      }

      /**
       * Create an invalid DateTime.
       * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent.
       * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
       * @return {DateTime}
       */
      static invalid(reason, explanation = null) {
        if (!reason) {
          throw new InvalidArgumentError("need to specify a reason the DateTime is invalid");
        }

        const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

        if (Settings.throwOnInvalid) {
          throw new InvalidDateTimeError(invalid);
        } else {
          return new DateTime({ invalid });
        }
      }

      /**
       * Check if an object is an instance of DateTime. Works across context boundaries
       * @param {object} o
       * @return {boolean}
       */
      static isDateTime(o) {
        return (o && o.isLuxonDateTime) || false;
      }

      /**
       * Produce the format string for a set of options
       * @param formatOpts
       * @param localeOpts
       * @returns {string}
       */
      static parseFormatForOpts(formatOpts, localeOpts = {}) {
        const tokenList = formatOptsToTokens(formatOpts, Locale.fromObject(localeOpts));
        return !tokenList ? null : tokenList.map((t) => (t ? t.val : null)).join("");
      }

      /**
       * Produce the the fully expanded format token for the locale
       * Does NOT quote characters, so quoted tokens will not round trip correctly
       * @param fmt
       * @param localeOpts
       * @returns {string}
       */
      static expandFormat(fmt, localeOpts = {}) {
        const expanded = expandMacroTokens(Formatter.parseFormat(fmt), Locale.fromObject(localeOpts));
        return expanded.map((t) => t.val).join("");
      }

      // INFO

      /**
       * Get the value of unit.
       * @param {string} unit - a unit such as 'minute' or 'day'
       * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
       * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
       * @return {number}
       */
      get(unit) {
        return this[unit];
      }

      /**
       * Returns whether the DateTime is valid. Invalid DateTimes occur when:
       * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
       * * The DateTime was created by an operation on another invalid date
       * @type {boolean}
       */
      get isValid() {
        return this.invalid === null;
      }

      /**
       * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
       * @type {string}
       */
      get invalidReason() {
        return this.invalid ? this.invalid.reason : null;
      }

      /**
       * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
       * @type {string}
       */
      get invalidExplanation() {
        return this.invalid ? this.invalid.explanation : null;
      }

      /**
       * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
       *
       * @type {string}
       */
      get locale() {
        return this.isValid ? this.loc.locale : null;
      }

      /**
       * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
       *
       * @type {string}
       */
      get numberingSystem() {
        return this.isValid ? this.loc.numberingSystem : null;
      }

      /**
       * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
       *
       * @type {string}
       */
      get outputCalendar() {
        return this.isValid ? this.loc.outputCalendar : null;
      }

      /**
       * Get the time zone associated with this DateTime.
       * @type {Zone}
       */
      get zone() {
        return this._zone;
      }

      /**
       * Get the name of the time zone.
       * @type {string}
       */
      get zoneName() {
        return this.isValid ? this.zone.name : null;
      }

      /**
       * Get the year
       * @example DateTime.local(2017, 5, 25).year //=> 2017
       * @type {number}
       */
      get year() {
        return this.isValid ? this.c.year : NaN;
      }

      /**
       * Get the quarter
       * @example DateTime.local(2017, 5, 25).quarter //=> 2
       * @type {number}
       */
      get quarter() {
        return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
      }

      /**
       * Get the month (1-12).
       * @example DateTime.local(2017, 5, 25).month //=> 5
       * @type {number}
       */
      get month() {
        return this.isValid ? this.c.month : NaN;
      }

      /**
       * Get the day of the month (1-30ish).
       * @example DateTime.local(2017, 5, 25).day //=> 25
       * @type {number}
       */
      get day() {
        return this.isValid ? this.c.day : NaN;
      }

      /**
       * Get the hour of the day (0-23).
       * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
       * @type {number}
       */
      get hour() {
        return this.isValid ? this.c.hour : NaN;
      }

      /**
       * Get the minute of the hour (0-59).
       * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
       * @type {number}
       */
      get minute() {
        return this.isValid ? this.c.minute : NaN;
      }

      /**
       * Get the second of the minute (0-59).
       * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
       * @type {number}
       */
      get second() {
        return this.isValid ? this.c.second : NaN;
      }

      /**
       * Get the millisecond of the second (0-999).
       * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
       * @type {number}
       */
      get millisecond() {
        return this.isValid ? this.c.millisecond : NaN;
      }

      /**
       * Get the week year
       * @see https://en.wikipedia.org/wiki/ISO_week_date
       * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
       * @type {number}
       */
      get weekYear() {
        return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
      }

      /**
       * Get the week number of the week year (1-52ish).
       * @see https://en.wikipedia.org/wiki/ISO_week_date
       * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
       * @type {number}
       */
      get weekNumber() {
        return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
      }

      /**
       * Get the day of the week.
       * 1 is Monday and 7 is Sunday
       * @see https://en.wikipedia.org/wiki/ISO_week_date
       * @example DateTime.local(2014, 11, 31).weekday //=> 4
       * @type {number}
       */
      get weekday() {
        return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
      }

      /**
       * Returns true if this date is on a weekend according to the locale, false otherwise
       * @returns {boolean}
       */
      get isWeekend() {
        return this.isValid && this.loc.getWeekendDays().includes(this.weekday);
      }

      /**
       * Get the day of the week according to the locale.
       * 1 is the first day of the week and 7 is the last day of the week.
       * If the locale assigns Sunday as the first day of the week, then a date which is a Sunday will return 1,
       * @returns {number}
       */
      get localWeekday() {
        return this.isValid ? possiblyCachedLocalWeekData(this).weekday : NaN;
      }

      /**
       * Get the week number of the week year according to the locale. Different locales assign week numbers differently,
       * because the week can start on different days of the week (see localWeekday) and because a different number of days
       * is required for a week to count as the first week of a year.
       * @returns {number}
       */
      get localWeekNumber() {
        return this.isValid ? possiblyCachedLocalWeekData(this).weekNumber : NaN;
      }

      /**
       * Get the week year according to the locale. Different locales assign week numbers (and therefor week years)
       * differently, see localWeekNumber.
       * @returns {number}
       */
      get localWeekYear() {
        return this.isValid ? possiblyCachedLocalWeekData(this).weekYear : NaN;
      }

      /**
       * Get the ordinal (meaning the day of the year)
       * @example DateTime.local(2017, 5, 25).ordinal //=> 145
       * @type {number|DateTime}
       */
      get ordinal() {
        return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
      }

      /**
       * Get the human readable short month name, such as 'Oct'.
       * Defaults to the system's locale if no locale has been specified
       * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
       * @type {string}
       */
      get monthShort() {
        return this.isValid ? Info.months("short", { locObj: this.loc })[this.month - 1] : null;
      }

      /**
       * Get the human readable long month name, such as 'October'.
       * Defaults to the system's locale if no locale has been specified
       * @example DateTime.local(2017, 10, 30).monthLong //=> October
       * @type {string}
       */
      get monthLong() {
        return this.isValid ? Info.months("long", { locObj: this.loc })[this.month - 1] : null;
      }

      /**
       * Get the human readable short weekday, such as 'Mon'.
       * Defaults to the system's locale if no locale has been specified
       * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
       * @type {string}
       */
      get weekdayShort() {
        return this.isValid ? Info.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
      }

      /**
       * Get the human readable long weekday, such as 'Monday'.
       * Defaults to the system's locale if no locale has been specified
       * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
       * @type {string}
       */
      get weekdayLong() {
        return this.isValid ? Info.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
      }

      /**
       * Get the UTC offset of this DateTime in minutes
       * @example DateTime.now().offset //=> -240
       * @example DateTime.utc().offset //=> 0
       * @type {number}
       */
      get offset() {
        return this.isValid ? +this.o : NaN;
      }

      /**
       * Get the short human name for the zone's current offset, for example "EST" or "EDT".
       * Defaults to the system's locale if no locale has been specified
       * @type {string}
       */
      get offsetNameShort() {
        if (this.isValid) {
          return this.zone.offsetName(this.ts, {
            format: "short",
            locale: this.locale,
          });
        } else {
          return null;
        }
      }

      /**
       * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
       * Defaults to the system's locale if no locale has been specified
       * @type {string}
       */
      get offsetNameLong() {
        if (this.isValid) {
          return this.zone.offsetName(this.ts, {
            format: "long",
            locale: this.locale,
          });
        } else {
          return null;
        }
      }

      /**
       * Get whether this zone's offset ever changes, as in a DST.
       * @type {boolean}
       */
      get isOffsetFixed() {
        return this.isValid ? this.zone.isUniversal : null;
      }

      /**
       * Get whether the DateTime is in a DST.
       * @type {boolean}
       */
      get isInDST() {
        if (this.isOffsetFixed) {
          return false;
        } else {
          return (
            this.offset > this.set({ month: 1, day: 1 }).offset ||
            this.offset > this.set({ month: 5 }).offset
          );
        }
      }

      /**
       * Get those DateTimes which have the same local time as this DateTime, but a different offset from UTC
       * in this DateTime's zone. During DST changes local time can be ambiguous, for example
       * `2023-10-29T02:30:00` in `Europe/Berlin` can have offset `+01:00` or `+02:00`.
       * This method will return both possible DateTimes if this DateTime's local time is ambiguous.
       * @returns {DateTime[]}
       */
      getPossibleOffsets() {
        if (!this.isValid || this.isOffsetFixed) {
          return [this];
        }
        const dayMs = 86400000;
        const minuteMs = 60000;
        const localTS = objToLocalTS(this.c);
        const oEarlier = this.zone.offset(localTS - dayMs);
        const oLater = this.zone.offset(localTS + dayMs);

        const o1 = this.zone.offset(localTS - oEarlier * minuteMs);
        const o2 = this.zone.offset(localTS - oLater * minuteMs);
        if (o1 === o2) {
          return [this];
        }
        const ts1 = localTS - o1 * minuteMs;
        const ts2 = localTS - o2 * minuteMs;
        const c1 = tsToObj(ts1, o1);
        const c2 = tsToObj(ts2, o2);
        if (
          c1.hour === c2.hour &&
          c1.minute === c2.minute &&
          c1.second === c2.second &&
          c1.millisecond === c2.millisecond
        ) {
          return [clone(this, { ts: ts1 }), clone(this, { ts: ts2 })];
        }
        return [this];
      }

      /**
       * Returns true if this DateTime is in a leap year, false otherwise
       * @example DateTime.local(2016).isInLeapYear //=> true
       * @example DateTime.local(2013).isInLeapYear //=> false
       * @type {boolean}
       */
      get isInLeapYear() {
        return isLeapYear(this.year);
      }

      /**
       * Returns the number of days in this DateTime's month
       * @example DateTime.local(2016, 2).daysInMonth //=> 29
       * @example DateTime.local(2016, 3).daysInMonth //=> 31
       * @type {number}
       */
      get daysInMonth() {
        return daysInMonth(this.year, this.month);
      }

      /**
       * Returns the number of days in this DateTime's year
       * @example DateTime.local(2016).daysInYear //=> 366
       * @example DateTime.local(2013).daysInYear //=> 365
       * @type {number}
       */
      get daysInYear() {
        return this.isValid ? daysInYear(this.year) : NaN;
      }

      /**
       * Returns the number of weeks in this DateTime's year
       * @see https://en.wikipedia.org/wiki/ISO_week_date
       * @example DateTime.local(2004).weeksInWeekYear //=> 53
       * @example DateTime.local(2013).weeksInWeekYear //=> 52
       * @type {number}
       */
      get weeksInWeekYear() {
        return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
      }

      /**
       * Returns the number of weeks in this DateTime's local week year
       * @example DateTime.local(2020, 6, {locale: 'en-US'}).weeksInLocalWeekYear //=> 52
       * @example DateTime.local(2020, 6, {locale: 'de-DE'}).weeksInLocalWeekYear //=> 53
       * @type {number}
       */
      get weeksInLocalWeekYear() {
        return this.isValid
          ? weeksInWeekYear(
              this.localWeekYear,
              this.loc.getMinDaysInFirstWeek(),
              this.loc.getStartOfWeek()
            )
          : NaN;
      }

      /**
       * Returns the resolved Intl options for this DateTime.
       * This is useful in understanding the behavior of formatting methods
       * @param {Object} opts - the same options as toLocaleString
       * @return {Object}
       */
      resolvedLocaleOptions(opts = {}) {
        const { locale, numberingSystem, calendar } = Formatter.create(
          this.loc.clone(opts),
          opts
        ).resolvedOptions(this);
        return { locale, numberingSystem, outputCalendar: calendar };
      }

      // TRANSFORM

      /**
       * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
       *
       * Equivalent to {@link DateTime#setZone}('utc')
       * @param {number} [offset=0] - optionally, an offset from UTC in minutes
       * @param {Object} [opts={}] - options to pass to `setZone()`
       * @return {DateTime}
       */
      toUTC(offset = 0, opts = {}) {
        return this.setZone(FixedOffsetZone.instance(offset), opts);
      }

      /**
       * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
       *
       * Equivalent to `setZone('local')`
       * @return {DateTime}
       */
      toLocal() {
        return this.setZone(Settings.defaultZone);
      }

      /**
       * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
       *
       * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime#plus}. You may wish to use {@link DateTime#toLocal} and {@link DateTime#toUTC} which provide simple convenience wrappers for commonly used zones.
       * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link DateTime#Zone} class.
       * @param {Object} opts - options
       * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
       * @return {DateTime}
       */
      setZone(zone, { keepLocalTime = false, keepCalendarTime = false } = {}) {
        zone = normalizeZone(zone, Settings.defaultZone);
        if (zone.equals(this.zone)) {
          return this;
        } else if (!zone.isValid) {
          return DateTime.invalid(unsupportedZone(zone));
        } else {
          let newTS = this.ts;
          if (keepLocalTime || keepCalendarTime) {
            const offsetGuess = zone.offset(this.ts);
            const asObj = this.toObject();
            [newTS] = objToTS(asObj, offsetGuess, zone);
          }
          return clone(this, { ts: newTS, zone });
        }
      }

      /**
       * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
       * @param {Object} properties - the properties to set
       * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
       * @return {DateTime}
       */
      reconfigure({ locale, numberingSystem, outputCalendar } = {}) {
        const loc = this.loc.clone({ locale, numberingSystem, outputCalendar });
        return clone(this, { loc });
      }

      /**
       * "Set" the locale. Returns a newly-constructed DateTime.
       * Just a convenient alias for reconfigure({ locale })
       * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
       * @return {DateTime}
       */
      setLocale(locale) {
        return this.reconfigure({ locale });
      }

      /**
       * "Set" the values of specified units. Returns a newly-constructed DateTime.
       * You can only set units with this method; for "setting" metadata, see {@link DateTime#reconfigure} and {@link DateTime#setZone}.
       *
       * This method also supports setting locale-based week units, i.e. `localWeekday`, `localWeekNumber` and `localWeekYear`.
       * They cannot be mixed with ISO-week units like `weekday`.
       * @param {Object} values - a mapping of units to numbers
       * @example dt.set({ year: 2017 })
       * @example dt.set({ hour: 8, minute: 30 })
       * @example dt.set({ weekday: 5 })
       * @example dt.set({ year: 2005, ordinal: 234 })
       * @return {DateTime}
       */
      set(values) {
        if (!this.isValid) return this;

        const normalized = normalizeObject(values, normalizeUnitWithLocalWeeks);
        const { minDaysInFirstWeek, startOfWeek } = usesLocalWeekValues(normalized, this.loc);

        const settingWeekStuff =
            !isUndefined(normalized.weekYear) ||
            !isUndefined(normalized.weekNumber) ||
            !isUndefined(normalized.weekday),
          containsOrdinal = !isUndefined(normalized.ordinal),
          containsGregorYear = !isUndefined(normalized.year),
          containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day),
          containsGregor = containsGregorYear || containsGregorMD,
          definiteWeekDef = normalized.weekYear || normalized.weekNumber;

        if ((containsGregor || containsOrdinal) && definiteWeekDef) {
          throw new ConflictingSpecificationError(
            "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
          );
        }

        if (containsGregorMD && containsOrdinal) {
          throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
        }

        let mixed;
        if (settingWeekStuff) {
          mixed = weekToGregorian(
            { ...gregorianToWeek(this.c, minDaysInFirstWeek, startOfWeek), ...normalized },
            minDaysInFirstWeek,
            startOfWeek
          );
        } else if (!isUndefined(normalized.ordinal)) {
          mixed = ordinalToGregorian({ ...gregorianToOrdinal(this.c), ...normalized });
        } else {
          mixed = { ...this.toObject(), ...normalized };

          // if we didn't set the day but we ended up on an overflow date,
          // use the last day of the right month
          if (isUndefined(normalized.day)) {
            mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
          }
        }

        const [ts, o] = objToTS(mixed, this.o, this.zone);
        return clone(this, { ts, o });
      }

      /**
       * Add a period of time to this DateTime and return the resulting DateTime
       *
       * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
       * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
       * @example DateTime.now().plus(123) //~> in 123 milliseconds
       * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
       * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
       * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
       * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
       * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
       * @return {DateTime}
       */
      plus(duration) {
        if (!this.isValid) return this;
        const dur = Duration.fromDurationLike(duration);
        return clone(this, adjustTime(this, dur));
      }

      /**
       * Subtract a period of time to this DateTime and return the resulting DateTime
       * See {@link DateTime#plus}
       * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
       @return {DateTime}
       */
      minus(duration) {
        if (!this.isValid) return this;
        const dur = Duration.fromDurationLike(duration).negate();
        return clone(this, adjustTime(this, dur));
      }

      /**
       * "Set" this DateTime to the beginning of a unit of time.
       * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
       * @param {Object} opts - options
       * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week
       * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
       * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
       * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
       * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
       * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
       * @return {DateTime}
       */
      startOf(unit, { useLocaleWeeks = false } = {}) {
        if (!this.isValid) return this;

        const o = {},
          normalizedUnit = Duration.normalizeUnit(unit);
        switch (normalizedUnit) {
          case "years":
            o.month = 1;
          // falls through
          case "quarters":
          case "months":
            o.day = 1;
          // falls through
          case "weeks":
          case "days":
            o.hour = 0;
          // falls through
          case "hours":
            o.minute = 0;
          // falls through
          case "minutes":
            o.second = 0;
          // falls through
          case "seconds":
            o.millisecond = 0;
            break;
          // no default, invalid units throw in normalizeUnit()
        }

        if (normalizedUnit === "weeks") {
          if (useLocaleWeeks) {
            const startOfWeek = this.loc.getStartOfWeek();
            const { weekday } = this;
            if (weekday < startOfWeek) {
              o.weekNumber = this.weekNumber - 1;
            }
            o.weekday = startOfWeek;
          } else {
            o.weekday = 1;
          }
        }

        if (normalizedUnit === "quarters") {
          const q = Math.ceil(this.month / 3);
          o.month = (q - 1) * 3 + 1;
        }

        return this.set(o);
      }

      /**
       * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
       * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
       * @param {Object} opts - options
       * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week
       * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
       * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
       * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
       * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
       * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
       * @return {DateTime}
       */
      endOf(unit, opts) {
        return this.isValid
          ? this.plus({ [unit]: 1 })
              .startOf(unit, opts)
              .minus(1)
          : this;
      }

      // OUTPUT

      /**
       * Returns a string representation of this DateTime formatted according to the specified format string.
       * **You may not want this.** See {@link DateTime#toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
       * Defaults to en-US if no locale has been specified, regardless of the system's locale.
       * @param {string} fmt - the format string
       * @param {Object} opts - opts to override the configuration options on this DateTime
       * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
       * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
       * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
       * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
       * @return {string}
       */
      toFormat(fmt, opts = {}) {
        return this.isValid
          ? Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt)
          : INVALID;
      }

      /**
       * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
       * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
       * of the DateTime in the assigned locale.
       * Defaults to the system's locale if no locale has been specified
       * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
       * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
       * @param {Object} opts - opts to override the configuration options on this DateTime
       * @example DateTime.now().toLocaleString(); //=> 4/20/2017
       * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
       * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
       * @example DateTime.now().toLocaleString(DateTime.DATE_FULL, { locale: 'fr' }); //=> '28 août 2022'
       * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
       * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
       * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
       * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
       * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
       * @return {string}
       */
      toLocaleString(formatOpts = DATE_SHORT, opts = {}) {
        return this.isValid
          ? Formatter.create(this.loc.clone(opts), formatOpts).formatDateTime(this)
          : INVALID;
      }

      /**
       * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
       * Defaults to the system's locale if no locale has been specified
       * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
       * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
       * @example DateTime.now().toLocaleParts(); //=> [
       *                                   //=>   { type: 'day', value: '25' },
       *                                   //=>   { type: 'literal', value: '/' },
       *                                   //=>   { type: 'month', value: '05' },
       *                                   //=>   { type: 'literal', value: '/' },
       *                                   //=>   { type: 'year', value: '1982' }
       *                                   //=> ]
       */
      toLocaleParts(opts = {}) {
        return this.isValid
          ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this)
          : [];
      }

      /**
       * Returns an ISO 8601-compliant string representation of this DateTime
       * @param {Object} opts - options
       * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
       * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
       * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
       * @param {boolean} [opts.extendedZone=false] - add the time zone format extension
       * @param {string} [opts.format='extended'] - choose between the basic and extended format
       * @example DateTime.utc(1983, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
       * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
       * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
       * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
       * @return {string}
       */
      toISO({
        format = "extended",
        suppressSeconds = false,
        suppressMilliseconds = false,
        includeOffset = true,
        extendedZone = false,
      } = {}) {
        if (!this.isValid) {
          return null;
        }

        const ext = format === "extended";

        let c = toISODate(this, ext);
        c += "T";
        c += toISOTime(this, ext, suppressSeconds, suppressMilliseconds, includeOffset, extendedZone);
        return c;
      }

      /**
       * Returns an ISO 8601-compliant string representation of this DateTime's date component
       * @param {Object} opts - options
       * @param {string} [opts.format='extended'] - choose between the basic and extended format
       * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
       * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
       * @return {string}
       */
      toISODate({ format = "extended" } = {}) {
        if (!this.isValid) {
          return null;
        }

        return toISODate(this, format === "extended");
      }

      /**
       * Returns an ISO 8601-compliant string representation of this DateTime's week date
       * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
       * @return {string}
       */
      toISOWeekDate() {
        return toTechFormat(this, "kkkk-'W'WW-c");
      }

      /**
       * Returns an ISO 8601-compliant string representation of this DateTime's time component
       * @param {Object} opts - options
       * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
       * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
       * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
       * @param {boolean} [opts.extendedZone=true] - add the time zone format extension
       * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
       * @param {string} [opts.format='extended'] - choose between the basic and extended format
       * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
       * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
       * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
       * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
       * @return {string}
       */
      toISOTime({
        suppressMilliseconds = false,
        suppressSeconds = false,
        includeOffset = true,
        includePrefix = false,
        extendedZone = false,
        format = "extended",
      } = {}) {
        if (!this.isValid) {
          return null;
        }

        let c = includePrefix ? "T" : "";
        return (
          c +
          toISOTime(
            this,
            format === "extended",
            suppressSeconds,
            suppressMilliseconds,
            includeOffset,
            extendedZone
          )
        );
      }

      /**
       * Returns an RFC 2822-compatible string representation of this DateTime
       * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
       * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
       * @return {string}
       */
      toRFC2822() {
        return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
      }

      /**
       * Returns a string representation of this DateTime appropriate for use in HTTP headers. The output is always expressed in GMT.
       * Specifically, the string conforms to RFC 1123.
       * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
       * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
       * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
       * @return {string}
       */
      toHTTP() {
        return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
      }

      /**
       * Returns a string representation of this DateTime appropriate for use in SQL Date
       * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
       * @return {string}
       */
      toSQLDate() {
        if (!this.isValid) {
          return null;
        }
        return toISODate(this, true);
      }

      /**
       * Returns a string representation of this DateTime appropriate for use in SQL Time
       * @param {Object} opts - options
       * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
       * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
       * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
       * @example DateTime.utc().toSQL() //=> '05:15:16.345'
       * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
       * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
       * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
       * @return {string}
       */
      toSQLTime({ includeOffset = true, includeZone = false, includeOffsetSpace = true } = {}) {
        let fmt = "HH:mm:ss.SSS";

        if (includeZone || includeOffset) {
          if (includeOffsetSpace) {
            fmt += " ";
          }
          if (includeZone) {
            fmt += "z";
          } else if (includeOffset) {
            fmt += "ZZ";
          }
        }

        return toTechFormat(this, fmt, true);
      }

      /**
       * Returns a string representation of this DateTime appropriate for use in SQL DateTime
       * @param {Object} opts - options
       * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
       * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
       * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
       * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
       * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
       * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
       * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
       * @return {string}
       */
      toSQL(opts = {}) {
        if (!this.isValid) {
          return null;
        }

        return `${this.toSQLDate()} ${this.toSQLTime(opts)}`;
      }

      /**
       * Returns a string representation of this DateTime appropriate for debugging
       * @return {string}
       */
      toString() {
        return this.isValid ? this.toISO() : INVALID;
      }

      /**
       * Returns a string representation of this DateTime appropriate for the REPL.
       * @return {string}
       */
      [Symbol.for("nodejs.util.inspect.custom")]() {
        if (this.isValid) {
          return `DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`;
        } else {
          return `DateTime { Invalid, reason: ${this.invalidReason} }`;
        }
      }

      /**
       * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime#toMillis}
       * @return {number}
       */
      valueOf() {
        return this.toMillis();
      }

      /**
       * Returns the epoch milliseconds of this DateTime.
       * @return {number}
       */
      toMillis() {
        return this.isValid ? this.ts : NaN;
      }

      /**
       * Returns the epoch seconds of this DateTime.
       * @return {number}
       */
      toSeconds() {
        return this.isValid ? this.ts / 1000 : NaN;
      }

      /**
       * Returns the epoch seconds (as a whole number) of this DateTime.
       * @return {number}
       */
      toUnixInteger() {
        return this.isValid ? Math.floor(this.ts / 1000) : NaN;
      }

      /**
       * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
       * @return {string}
       */
      toJSON() {
        return this.toISO();
      }

      /**
       * Returns a BSON serializable equivalent to this DateTime.
       * @return {Date}
       */
      toBSON() {
        return this.toJSDate();
      }

      /**
       * Returns a JavaScript object with this DateTime's year, month, day, and so on.
       * @param opts - options for generating the object
       * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
       * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
       * @return {Object}
       */
      toObject(opts = {}) {
        if (!this.isValid) return {};

        const base = { ...this.c };

        if (opts.includeConfig) {
          base.outputCalendar = this.outputCalendar;
          base.numberingSystem = this.loc.numberingSystem;
          base.locale = this.loc.locale;
        }
        return base;
      }

      /**
       * Returns a JavaScript Date equivalent to this DateTime.
       * @return {Date}
       */
      toJSDate() {
        return new Date(this.isValid ? this.ts : NaN);
      }

      // COMPARE

      /**
       * Return the difference between two DateTimes as a Duration.
       * @param {DateTime} otherDateTime - the DateTime to compare this one to
       * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
       * @param {Object} opts - options that affect the creation of the Duration
       * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
       * @example
       * var i1 = DateTime.fromISO('1982-05-25T09:45'),
       *     i2 = DateTime.fromISO('1983-10-14T10:30');
       * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
       * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
       * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
       * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
       * @return {Duration}
       */
      diff(otherDateTime, unit = "milliseconds", opts = {}) {
        if (!this.isValid || !otherDateTime.isValid) {
          return Duration.invalid("created by diffing an invalid DateTime");
        }

        const durOpts = { locale: this.locale, numberingSystem: this.numberingSystem, ...opts };

        const units = maybeArray(unit).map(Duration.normalizeUnit),
          otherIsLater = otherDateTime.valueOf() > this.valueOf(),
          earlier = otherIsLater ? this : otherDateTime,
          later = otherIsLater ? otherDateTime : this,
          diffed = diff(earlier, later, units, durOpts);

        return otherIsLater ? diffed.negate() : diffed;
      }

      /**
       * Return the difference between this DateTime and right now.
       * See {@link DateTime#diff}
       * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
       * @param {Object} opts - options that affect the creation of the Duration
       * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
       * @return {Duration}
       */
      diffNow(unit = "milliseconds", opts = {}) {
        return this.diff(DateTime.now(), unit, opts);
      }

      /**
       * Return an Interval spanning between this DateTime and another DateTime
       * @param {DateTime} otherDateTime - the other end point of the Interval
       * @return {Interval}
       */
      until(otherDateTime) {
        return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
      }

      /**
       * Return whether this DateTime is in the same unit of time as another DateTime.
       * Higher-order units must also be identical for this function to return `true`.
       * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime#setZone} to convert one of the dates if needed.
       * @param {DateTime} otherDateTime - the other DateTime
       * @param {string} unit - the unit of time to check sameness on
       * @param {Object} opts - options
       * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week; only the locale of this DateTime is used
       * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
       * @return {boolean}
       */
      hasSame(otherDateTime, unit, opts) {
        if (!this.isValid) return false;

        const inputMs = otherDateTime.valueOf();
        const adjustedToZone = this.setZone(otherDateTime.zone, { keepLocalTime: true });
        return (
          adjustedToZone.startOf(unit, opts) <= inputMs && inputMs <= adjustedToZone.endOf(unit, opts)
        );
      }

      /**
       * Equality check
       * Two DateTimes are equal if and only if they represent the same millisecond, have the same zone and location, and are both valid.
       * To compare just the millisecond values, use `+dt1 === +dt2`.
       * @param {DateTime} other - the other DateTime
       * @return {boolean}
       */
      equals(other) {
        return (
          this.isValid &&
          other.isValid &&
          this.valueOf() === other.valueOf() &&
          this.zone.equals(other.zone) &&
          this.loc.equals(other.loc)
        );
      }

      /**
       * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
       * platform supports Intl.RelativeTimeFormat. Rounds down by default.
       * @param {Object} options - options that affect the output
       * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
       * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
       * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
       * @param {boolean} [options.round=true] - whether to round the numbers in the output.
       * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
       * @param {string} options.locale - override the locale of this DateTime
       * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
       * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
       * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
       * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
       * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
       * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
       * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
       */
      toRelative(options = {}) {
        if (!this.isValid) return null;
        const base = options.base || DateTime.fromObject({}, { zone: this.zone }),
          padding = options.padding ? (this < base ? -options.padding : options.padding) : 0;
        let units = ["years", "months", "days", "hours", "minutes", "seconds"];
        let unit = options.unit;
        if (Array.isArray(options.unit)) {
          units = options.unit;
          unit = undefined;
        }
        return diffRelative(base, this.plus(padding), {
          ...options,
          numeric: "always",
          units,
          unit,
        });
      }

      /**
       * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
       * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
       * @param {Object} options - options that affect the output
       * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
       * @param {string} options.locale - override the locale of this DateTime
       * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
       * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
       * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
       * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
       * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
       * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
       */
      toRelativeCalendar(options = {}) {
        if (!this.isValid) return null;

        return diffRelative(options.base || DateTime.fromObject({}, { zone: this.zone }), this, {
          ...options,
          numeric: "auto",
          units: ["years", "months", "days"],
          calendary: true,
        });
      }

      /**
       * Return the min of several date times
       * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
       * @return {DateTime} the min DateTime, or undefined if called with no argument
       */
      static min(...dateTimes) {
        if (!dateTimes.every(DateTime.isDateTime)) {
          throw new InvalidArgumentError("min requires all arguments be DateTimes");
        }
        return bestBy(dateTimes, (i) => i.valueOf(), Math.min);
      }

      /**
       * Return the max of several date times
       * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
       * @return {DateTime} the max DateTime, or undefined if called with no argument
       */
      static max(...dateTimes) {
        if (!dateTimes.every(DateTime.isDateTime)) {
          throw new InvalidArgumentError("max requires all arguments be DateTimes");
        }
        return bestBy(dateTimes, (i) => i.valueOf(), Math.max);
      }

      // MISC

      /**
       * Explain how a string would be parsed by fromFormat()
       * @param {string} text - the string to parse
       * @param {string} fmt - the format the string is expected to be in (see description)
       * @param {Object} options - options taken by fromFormat()
       * @return {Object}
       */
      static fromFormatExplain(text, fmt, options = {}) {
        const { locale = null, numberingSystem = null } = options,
          localeToUse = Locale.fromOpts({
            locale,
            numberingSystem,
            defaultToEN: true,
          });
        return explainFromTokens(localeToUse, text, fmt);
      }

      /**
       * @deprecated use fromFormatExplain instead
       */
      static fromStringExplain(text, fmt, options = {}) {
        return DateTime.fromFormatExplain(text, fmt, options);
      }

      // FORMAT PRESETS

      /**
       * {@link DateTime#toLocaleString} format like 10/14/1983
       * @type {Object}
       */
      static get DATE_SHORT() {
        return DATE_SHORT;
      }

      /**
       * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
       * @type {Object}
       */
      static get DATE_MED() {
        return DATE_MED;
      }

      /**
       * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
       * @type {Object}
       */
      static get DATE_MED_WITH_WEEKDAY() {
        return DATE_MED_WITH_WEEKDAY;
      }

      /**
       * {@link DateTime#toLocaleString} format like 'October 14, 1983'
       * @type {Object}
       */
      static get DATE_FULL() {
        return DATE_FULL;
      }

      /**
       * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
       * @type {Object}
       */
      static get DATE_HUGE() {
        return DATE_HUGE;
      }

      /**
       * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
       * @type {Object}
       */
      static get TIME_SIMPLE() {
        return TIME_SIMPLE;
      }

      /**
       * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
       * @type {Object}
       */
      static get TIME_WITH_SECONDS() {
        return TIME_WITH_SECONDS;
      }

      /**
       * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
       * @type {Object}
       */
      static get TIME_WITH_SHORT_OFFSET() {
        return TIME_WITH_SHORT_OFFSET;
      }

      /**
       * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
       * @type {Object}
       */
      static get TIME_WITH_LONG_OFFSET() {
        return TIME_WITH_LONG_OFFSET;
      }

      /**
       * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
       * @type {Object}
       */
      static get TIME_24_SIMPLE() {
        return TIME_24_SIMPLE;
      }

      /**
       * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
       * @type {Object}
       */
      static get TIME_24_WITH_SECONDS() {
        return TIME_24_WITH_SECONDS;
      }

      /**
       * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
       * @type {Object}
       */
      static get TIME_24_WITH_SHORT_OFFSET() {
        return TIME_24_WITH_SHORT_OFFSET;
      }

      /**
       * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
       * @type {Object}
       */
      static get TIME_24_WITH_LONG_OFFSET() {
        return TIME_24_WITH_LONG_OFFSET;
      }

      /**
       * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
       * @type {Object}
       */
      static get DATETIME_SHORT() {
        return DATETIME_SHORT;
      }

      /**
       * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
       * @type {Object}
       */
      static get DATETIME_SHORT_WITH_SECONDS() {
        return DATETIME_SHORT_WITH_SECONDS;
      }

      /**
       * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
       * @type {Object}
       */
      static get DATETIME_MED() {
        return DATETIME_MED;
      }

      /**
       * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
       * @type {Object}
       */
      static get DATETIME_MED_WITH_SECONDS() {
        return DATETIME_MED_WITH_SECONDS;
      }

      /**
       * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
       * @type {Object}
       */
      static get DATETIME_MED_WITH_WEEKDAY() {
        return DATETIME_MED_WITH_WEEKDAY;
      }

      /**
       * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
       * @type {Object}
       */
      static get DATETIME_FULL() {
        return DATETIME_FULL;
      }

      /**
       * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
       * @type {Object}
       */
      static get DATETIME_FULL_WITH_SECONDS() {
        return DATETIME_FULL_WITH_SECONDS;
      }

      /**
       * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
       * @type {Object}
       */
      static get DATETIME_HUGE() {
        return DATETIME_HUGE;
      }

      /**
       * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
       * @type {Object}
       */
      static get DATETIME_HUGE_WITH_SECONDS() {
        return DATETIME_HUGE_WITH_SECONDS;
      }
    }

    /**
     * @private
     */
    function friendlyDateTime(dateTimeish) {
      if (DateTime.isDateTime(dateTimeish)) {
        return dateTimeish;
      } else if (dateTimeish && dateTimeish.valueOf && isNumber(dateTimeish.valueOf())) {
        return DateTime.fromJSDate(dateTimeish);
      } else if (dateTimeish && typeof dateTimeish === "object") {
        return DateTime.fromObject(dateTimeish);
      } else {
        throw new InvalidArgumentError(
          `Unknown datetime argument: ${dateTimeish}, of type ${typeof dateTimeish}`
        );
      }
    }

    /**
     * Main card class definition
     */
    class TSMoonCard extends s$1 {
        constructor() {
            super(...arguments);
            this.cardTitle = "Moon Phase";
            this.state = "";
            this.icon_type = "forms";
            this.language = "en";
            this.entity = "";
        }
        renderIcon(svg_icon_code) {
            return x `
            <div class="icon">
                <img class="moon-img-svg" src=${svg_icon_code} />
            </div>
        `;
        }
        localize(key) {
            return localize(key, this.getLocale());
        }
        getLocale() {
            var _a, _b;
            return (_b = (_a = this.language) !== null && _a !== void 0 ? _a : this.hass.locale.language) !== null && _b !== void 0 ? _b : 'en';
        }
        toIcon(moonState, type) {
            if ((type === 'forms') || (type === 'round') || (type === 'photo') || (type === 'clear')) {
                return svg[type][moonState];
            }
            else {
                // Gérer le cas où la propriété n'est pas définie
                throw new Error('Propriété non définie');
            }
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
            var _a, _b, _c;
            this.entity = config.entity;
            this.cardTitle = (_a = config.title) !== null && _a !== void 0 ? _a : this.cardTitle;
            this.icon_type = (_b = config.icon_type) !== null && _b !== void 0 ? _b : 'forms';
            this.language = (_c = config.language) !== null && _c !== void 0 ? _c : 'fr';
        }
        /**
         * Renders the card when the update is requested (when any of the properties are changed)
         */
        render() {
            const moonIcon = this.toIcon(this.state, this.icon_type);
            const l_state = this.localize(`moon.${this.state}`);
            this.getMoonRise();
            return x `
        
        <ha-card>
            <div class="card-header">
                <div class="truncate">
                    ${this.cardTitle}
                </div>
            </div>
            <div class="card-content">
                <div class="entity-row">
                    ${this.renderIcon(moonIcon)}
                    <div class="name truncate">
                        Entity name
                        <div class="secondary">
                            Secondary info - ${this.icon_type}
                        </div>
                    </div>
                    <div class="state">
                    ${l_state}
                    </div>
                <div>
            </div>
        </ha-card>
        `;
        }
        getMoonRise() {
            console.log(moon$2.phase(DateTime.fromObject({ year: 2018, month: 1, day: 1 })));
            // Utilisation de la classe
            const personne1 = new Personne("John Doe", 25);
            personne1.afficherInformations();
            //const {sunrise, sunset} = SunCalc.getTimes(new Date(), 51.5, -0.1);
            // Obtenez les temps du lever et du coucher du soleil
            //const times = SunCalc.getTimes(new Date(), 51.5, -0.1);
            // Accédez aux propriétés spécifiques pour obtenir les heures
            //const sunrise = times.sunrise;
            //const sunset = times.sunset;
            //console.log('Heure du lever du soleil :', sunrise);
            //console.log('Heure du coucher du soleil :', sunset);
        }
    }
    __decorate([
        n$2({ attribute: false })
    ], TSMoonCard.prototype, "cardTitle", void 0);
    __decorate([
        n$2({ attribute: false })
    ], TSMoonCard.prototype, "state", void 0);
    __decorate([
        n$2({ attribute: false })
    ], TSMoonCard.prototype, "icon_type", void 0);
    __decorate([
        n$2({ attribute: false })
    ], TSMoonCard.prototype, "language", void 0);
    __decorate([
        t()
    ], TSMoonCard.prototype, "config", void 0);

    var name = "ha-tsmoon-card";
    var version = "0.5.20";

    const printVersionToConsole = () => console.info(`%c  ${name.toUpperCase()}  %c  Version ${version}  `, 'color: white; font-weight: bold; background: crimson', 'color: #000; font-weight: bold; background: #ddd');

    // 
    printVersionToConsole();
    // Registering card
    customElements.define("tsmoon-card", TSMoonCard);

})(moon$2);

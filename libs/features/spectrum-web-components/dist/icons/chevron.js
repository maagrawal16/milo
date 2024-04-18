/* eslint-disable */
/* Generated by Milo */

var z=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var C=Object.getOwnPropertyNames;var U=Object.prototype.hasOwnProperty;var x=(s,t)=>{for(var n in t)z(s,n,{get:t[n],enumerable:!0})},d=(s,t,n,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of C(t))!U.call(s,r)&&r!==n&&z(s,r,{get:()=>t[r],enumerable:!(e=g(t,r))||e.enumerable});return s},p=(s,t,n)=>(d(s,t,"default"),n&&d(n,t,"default"));var c={};x(c,{ElementSizes:()=>M,SizedMixin:()=>y,SpectrumElement:()=>h,SpectrumMixin:()=>I});import{LitElement as b}from"/libs/deps/lit-all.min.js";var l="0.42.2";var v=new Set,E=()=>{let s=document.documentElement.dir==="rtl"?document.documentElement.dir:"ltr";v.forEach(t=>{t.setAttribute("dir",s)})},w=new MutationObserver(E);w.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});var D=s=>typeof s.startManagingContentDirection<"u"||s.tagName==="SP-THEME";function I(s){class t extends s{get isLTR(){return this.dir==="ltr"}hasVisibleFocusInTree(){let e=((r=document)=>{var i;let o=r.activeElement;for(;o!=null&&o.shadowRoot&&o.shadowRoot.activeElement;)o=o.shadowRoot.activeElement;let u=o?[o]:[];for(;o;){let m=o.assignedSlot||o.parentElement||((i=o.getRootNode())==null?void 0:i.host);m&&u.push(m),o=m}return u})(this.getRootNode())[0];if(!e)return!1;try{return e.matches(":focus-visible")||e.matches(".focus-visible")}catch{return e.matches(".focus-visible")}}connectedCallback(){if(!this.hasAttribute("dir")){let e=this.assignedSlot||this.parentNode;for(;e!==document.documentElement&&!D(e);)e=e.assignedSlot||e.parentNode||e.host;if(this.dir=e.dir==="rtl"?e.dir:this.dir||"ltr",e===document.documentElement)v.add(this);else{let{localName:r}=e;r.search("-")>-1&&!customElements.get(r)?customElements.whenDefined(r).then(()=>{e.startManagingContentDirection(this)}):e.startManagingContentDirection(this)}this._dirParent=e}super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this._dirParent&&(this._dirParent===document.documentElement?v.delete(this):this._dirParent.stopManagingContentDirection(this),this.removeAttribute("dir"))}}return t}var h=class extends I(b){};h.VERSION=l;import{property as _}from"/libs/deps/lit-all.min.js";var R=Object.defineProperty,S=Object.getOwnPropertyDescriptor,L=(s,t,n,e)=>{for(var r=e>1?void 0:e?S(t,n):t,i=s.length-1,o;i>=0;i--)(o=s[i])&&(r=(e?o(t,n,r):o(r))||r);return e&&r&&R(t,n,r),r},M={xxs:"xxs",xs:"xs",s:"s",m:"m",l:"l",xl:"xl",xxl:"xxl"};function y(s,{validSizes:t=["s","m","l","xl"],noDefaultSize:n,defaultSize:e="m"}={}){class r extends s{constructor(){super(...arguments),this._size=e}get size(){return this._size||e}set size(o){let u=n?null:e,m=o&&o.toLocaleLowerCase(),a=t.includes(m)?m:u;if(a&&this.setAttribute("size",a),this._size===a)return;let f=this._size;this._size=a,this.requestUpdate("size",f)}update(o){!this.hasAttribute("size")&&!n&&this.setAttribute("size",this.size),super.update(o)}}return L([_({type:String})],r.prototype,"size",1),r}p(c,H);import*as H from"/libs/deps/lit-all.min.js";var N=c.css`
    .spectrum-UIIcon-ChevronRight50{--spectrum-icon-size:var(--spectrum-chevron-icon-size-50)}.spectrum-UIIcon-ChevronRight75{--spectrum-icon-size:var(--spectrum-chevron-icon-size-75)}.spectrum-UIIcon-ChevronRight100{--spectrum-icon-size:var(--spectrum-chevron-icon-size-100)}.spectrum-UIIcon-ChevronRight200{--spectrum-icon-size:var(--spectrum-chevron-icon-size-200)}.spectrum-UIIcon-ChevronRight300{--spectrum-icon-size:var(--spectrum-chevron-icon-size-300)}.spectrum-UIIcon-ChevronRight400{--spectrum-icon-size:var(--spectrum-chevron-icon-size-400)}.spectrum-UIIcon-ChevronRight500{--spectrum-icon-size:var(--spectrum-chevron-icon-size-500)}.spectrum-UIIcon-ChevronDown50{--spectrum-icon-size:var(--spectrum-chevron-icon-size-50);transform:rotate(90deg)}.spectrum-UIIcon-ChevronDown75{--spectrum-icon-size:var(--spectrum-chevron-icon-size-75);transform:rotate(90deg)}.spectrum-UIIcon-ChevronDown100{--spectrum-icon-size:var(--spectrum-chevron-icon-size-100);transform:rotate(90deg)}.spectrum-UIIcon-ChevronDown200{--spectrum-icon-size:var(--spectrum-chevron-icon-size-200);transform:rotate(90deg)}.spectrum-UIIcon-ChevronDown300{--spectrum-icon-size:var(--spectrum-chevron-icon-size-300);transform:rotate(90deg)}.spectrum-UIIcon-ChevronDown400{--spectrum-icon-size:var(--spectrum-chevron-icon-size-400);transform:rotate(90deg)}.spectrum-UIIcon-ChevronDown500{--spectrum-icon-size:var(--spectrum-chevron-icon-size-500);transform:rotate(90deg)}.spectrum-UIIcon-ChevronLeft50{--spectrum-icon-size:var(--spectrum-chevron-icon-size-50);transform:rotate(180deg)}.spectrum-UIIcon-ChevronLeft75{--spectrum-icon-size:var(--spectrum-chevron-icon-size-75);transform:rotate(180deg)}.spectrum-UIIcon-ChevronLeft100{--spectrum-icon-size:var(--spectrum-chevron-icon-size-100);transform:rotate(180deg)}.spectrum-UIIcon-ChevronLeft200{--spectrum-icon-size:var(--spectrum-chevron-icon-size-200);transform:rotate(180deg)}.spectrum-UIIcon-ChevronLeft300{--spectrum-icon-size:var(--spectrum-chevron-icon-size-300);transform:rotate(180deg)}.spectrum-UIIcon-ChevronLeft400{--spectrum-icon-size:var(--spectrum-chevron-icon-size-400);transform:rotate(180deg)}.spectrum-UIIcon-ChevronLeft500{--spectrum-icon-size:var(--spectrum-chevron-icon-size-500);transform:rotate(180deg)}.spectrum-UIIcon-ChevronUp50{--spectrum-icon-size:var(--spectrum-chevron-icon-size-50);transform:rotate(270deg)}.spectrum-UIIcon-ChevronUp75{--spectrum-icon-size:var(--spectrum-chevron-icon-size-75);transform:rotate(270deg)}.spectrum-UIIcon-ChevronUp100{--spectrum-icon-size:var(--spectrum-chevron-icon-size-100);transform:rotate(270deg)}.spectrum-UIIcon-ChevronUp200{--spectrum-icon-size:var(--spectrum-chevron-icon-size-200);transform:rotate(270deg)}.spectrum-UIIcon-ChevronUp300{--spectrum-icon-size:var(--spectrum-chevron-icon-size-300);transform:rotate(270deg)}.spectrum-UIIcon-ChevronUp400{--spectrum-icon-size:var(--spectrum-chevron-icon-size-400);transform:rotate(270deg)}.spectrum-UIIcon-ChevronUp500{--spectrum-icon-size:var(--spectrum-chevron-icon-size-500);transform:rotate(270deg)}
`,G=N;export{G as default};

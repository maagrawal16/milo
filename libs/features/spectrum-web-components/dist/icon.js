/* eslint-disable */
/* Generated by Milo */

import{html as x,SpectrumElement as g}from"/libs/features/spectrum-web-components/dist/base.js";import{property as d}from"/libs/features/spectrum-web-components/dist/base.js";import{css as z}from"/libs/features/spectrum-web-components/dist/base.js";var w=z`
    :host{--spectrum-icon-inline-size:var(--mod-icon-inline-size,var(--mod-icon-size,var(--spectrum-icon-size)));--spectrum-icon-block-size:var(--mod-icon-block-size,var(--mod-icon-size,var(--spectrum-icon-size)));inline-size:var(--spectrum-icon-inline-size);block-size:var(--spectrum-icon-block-size);color:var(--mod-icon-color,inherit);fill:currentColor;display:inline-block}:host(:not(:root)){overflow:hidden}:host{pointer-events:none}@media (forced-colors:active){:host{forced-color-adjust:auto}}:host{--spectrum-icon-size:var(--spectrum-workflow-icon-size-100)}:host([size=xxs]){--spectrum-icon-size:var(--spectrum-workflow-icon-size-xxs)}:host([size=xs]){--spectrum-icon-size:var(--spectrum-workflow-icon-size-50)}:host([size=s]){--spectrum-icon-size:var(--spectrum-workflow-icon-size-75)}:host([size=l]){--spectrum-icon-size:var(--spectrum-workflow-icon-size-200)}:host([size=xl]){--spectrum-icon-size:var(--spectrum-workflow-icon-size-300)}:host([size=xxl]){--spectrum-icon-size:var(--spectrum-workflow-icon-size-xxl)}:host{--spectrum-icon-size:inherit;--spectrum-icon-inline-size:var(--mod-icon-inline-size,var(--mod-icon-size,var(--_spectrum-icon-size)));--spectrum-icon-block-size:var(--mod-icon-block-size,var(--mod-icon-size,var(--_spectrum-icon-size)));--_spectrum-icon-size:var(--spectrum-icon-size,var(--spectrum-workflow-icon-size-100))}#container{height:100%}img,svg,::slotted(*){vertical-align:top;color:inherit;width:100%;height:100%}@media (forced-colors:active){img,svg,::slotted(*){forced-color-adjust:auto}}:host([size=xxs]){--_spectrum-icon-size:var(--spectrum-icon-size,var(--spectrum-workflow-icon-size-xxs))}:host([size=xs]){--_spectrum-icon-size:var(--spectrum-icon-size,var(--spectrum-workflow-icon-size-50))}:host([size=s]){--_spectrum-icon-size:var(--spectrum-icon-size,var(--spectrum-workflow-icon-size-75))}:host([size=l]){--_spectrum-icon-size:var(--spectrum-icon-size,var(--spectrum-workflow-icon-size-200))}:host([size=xl]){--_spectrum-icon-size:var(--spectrum-icon-size,var(--spectrum-workflow-icon-size-300))}:host([size=xxl]){--_spectrum-icon-size:var(--spectrum-icon-size,var(--spectrum-workflow-icon-size-xxl))}
`,u=w;var f=Object.defineProperty,b=Object.getOwnPropertyDescriptor,l=(i,e,t,o)=>{for(var s=o>1?void 0:o?b(e,t):e,r=i.length-1,n;r>=0;r--)(n=i[r])&&(s=(o?n(e,t,s):n(s))||s);return o&&s&&f(e,t,s),s},c=class extends g{constructor(){super(...arguments),this.label=""}static get styles(){return[u]}update(e){e.has("label")&&(this.label?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true")),super.update(e)}render(){return x`
            <slot></slot>
        `}};l([d()],c.prototype,"label",2),l([d({reflect:!0})],c.prototype,"size",2);import{html as h}from"/libs/features/spectrum-web-components/dist/base.js";import{property as v,query as y}from"/libs/features/spectrum-web-components/dist/base.js";import{ifDefined as C}from"/libs/features/spectrum-web-components/dist/base.js";var p=class i{constructor(){this.iconsetMap=new Map}static getInstance(){return i.instance||(i.instance=new i),i.instance}addIconset(e,t){this.iconsetMap.set(e,t);let o=new CustomEvent("sp-iconset-added",{bubbles:!0,composed:!0,detail:{name:e,iconset:t}});setTimeout(()=>window.dispatchEvent(o),0)}removeIconset(e){this.iconsetMap.delete(e);let t=new CustomEvent("sp-iconset-removed",{bubbles:!0,composed:!0,detail:{name:e}});setTimeout(()=>window.dispatchEvent(t),0)}getIconset(e){return this.iconsetMap.get(e)}};var k=Object.defineProperty,I=Object.getOwnPropertyDescriptor,m=(i,e,t,o)=>{for(var s=o>1?void 0:o?I(e,t):e,r=i.length-1,n;r>=0;r--)(n=i[r])&&(s=(o?n(e,t,s):n(s))||s);return o&&s&&k(e,t,s),s},a=class extends c{constructor(){super(...arguments),this.iconsetListener=e=>{if(!this.name)return;let t=this.parseIcon(this.name);e.detail.name===t.iconset&&(this.updateIconPromise=this.updateIcon())}}connectedCallback(){super.connectedCallback(),window.addEventListener("sp-iconset-added",this.iconsetListener)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("sp-iconset-added",this.iconsetListener)}firstUpdated(){this.updateIconPromise=this.updateIcon()}attributeChangedCallback(e,t,o){super.attributeChangedCallback(e,t,o),this.updateIconPromise=this.updateIcon()}announceIconImageSrcError(){this.dispatchEvent(new Event("error",{cancelable:!1,bubbles:!1,composed:!1}))}render(){return this.name?h`
                <div id="container"></div>
            `:this.src?h`
                <img
                    src="${this.src}"
                    alt=${C(this.label)}
                    @error=${this.announceIconImageSrcError}
                />
            `:super.render()}async updateIcon(){if(this.updateIconPromise&&await this.updateIconPromise,!this.name)return Promise.resolve();let e=this.parseIcon(this.name),t=p.getInstance().getIconset(e.iconset);return!t||!this.iconContainer?Promise.resolve():(this.iconContainer.innerHTML="",t.applyIconToElement(this.iconContainer,e.icon,this.size||"",this.label?this.label:""))}parseIcon(e){let t=e.split(":"),o="default",s=e;return t.length>1&&(o=t[0],s=t[1]),{iconset:o,icon:s}}async getUpdateComplete(){let e=await super.getUpdateComplete();return await this.updateIconPromise,e}};m([v()],a.prototype,"src",2),m([v()],a.prototype,"name",2),m([y("#container")],a.prototype,"iconContainer",2);export*from"/libs/features/spectrum-web-components/dist/icons/checkmark.js";var q={};export{a as Icon,c as IconBase,q as default};

/* eslint-disable */
/* Generated by Milo */

import{html as y,SpectrumElement as v}from"/libs/features/spectrum-web-components/dist/base.js";import{property as b}from"/libs/features/spectrum-web-components/dist/base.js";import{css as s}from"/libs/features/spectrum-web-components/dist/base.js";var c=s`
    :host{pointer-events:none;visibility:hidden;opacity:0;transition:transform var(--mod-overlay-animation-duration,var(--spectrum-animation-duration-100,.13s))ease-in-out,opacity var(--mod-overlay-animation-duration,var(--spectrum-animation-duration-100,.13s))ease-in-out,visibility 0s linear var(--mod-overlay-animation-duration,var(--spectrum-animation-duration-100,.13s))}:host([open]){pointer-events:auto;visibility:visible;opacity:1;transition-delay:var(--mod-overlay-animation-duration-opened,var(--spectrum-animation-duration-0,0s))}:host{--spectrum-underlay-background-entry-animation-delay:var(--spectrum-animation-duration-0);--spectrum-underlay-background-exit-animation-ease:var(--spectrum-animation-ease-in);--spectrum-underlay-background-entry-animation-ease:var(--spectrum-animation-ease-out);--spectrum-underlay-background-exit-animation-duration:var(--spectrum-animation-duration-300);--spectrum-underlay-background-entry-animation-duration:var(--spectrum-animation-duration-600);--spectrum-underlay-background-exit-animation-delay:var(--spectrum-animation-duration-200);--spectrum-underlay-background-color:rgba(var(--spectrum-black-rgb),var(--spectrum-overlay-opacity));background-color:var(--mod-underlay-background-color,var(--spectrum-underlay-background-color));z-index:1;transition:opacity var(--mod-underlay-background-exit-animation-duration,var(--spectrum-underlay-background-exit-animation-duration))var(--mod-underlay-background-exit-animation-ease,var(--spectrum-underlay-background-exit-animation-ease))var(--mod-underlay-background-exit-animation-delay,var(--spectrum-underlay-background-exit-animation-delay)),visibility 0s linear calc(var(--mod-underlay-background-exit-animation-delay,var(--spectrum-underlay-background-exit-animation-delay)) + var(--mod-underlay-background-exit-animation-duration,var(--spectrum-underlay-background-exit-animation-duration)));position:fixed;inset-block:0;inset-inline:0;overflow:hidden}:host([open]){transition:opacity var(--mod-underlay-background-entry-animation-duration,var(--spectrum-underlay-background-entry-animation-duration))var(--mod-underlay-background-entry-animation-ease,var(--spectrum-underlay-background-entry-animation-ease))var(--mod-underlay-background-entry-animation-delay,var(--spectrum-underlay-background-entry-animation-delay))}
`,u=c;var m=Object.defineProperty,l=Object.getOwnPropertyDescriptor,p=(i,r,e,t)=>{for(var a=t>1?void 0:t?l(r,e):r,o=i.length-1,d;o>=0;o--)(d=i[o])&&(a=(t?d(r,e,a):d(a))||a);return t&&a&&m(r,e,a),a},n=class extends v{constructor(){super(...arguments),this.canClick=!1,this.open=!1}static get styles(){return[u]}click(){this.dispatchEvent(new Event("close"))}handlePointerdown(){this.canClick=!0}handlePointerup(){this.canClick&&this.click(),this.canClick=!1}render(){return y``}firstUpdated(){this.addEventListener("pointerdown",this.handlePointerdown),this.addEventListener("pointerup",this.handlePointerup)}};p([b({type:Boolean,reflect:!0})],n.prototype,"open",2);import{defineElement as k}from"/libs/features/spectrum-web-components/dist/base.js";k("sp-underlay",n);

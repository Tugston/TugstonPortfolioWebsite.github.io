import{r as t,R as c,j as e,s as j}from"./index-Cb4LniLK.js";import{M as h}from"./ColorFade-DUGnRulO.js";function D({animComplete:n,height:s}){return console.log(s),t.useEffect(()=>{j("--drop-down-menu-animation-height",`${s}rem`)},[s]),e.jsx("div",{className:"drop-down-menu-wrapper",children:e.jsx("div",{className:"draw-menu",onAnimationEnd:r=>{r.animationName==="expand-width"&&n(!0)}})})}function R({buttonContexts:n=[],animated:s=!1,typedText:r=!0,animationHeight:m=3}){const[d,l]=t.useState(!s),[E,p]=t.useState(!1),u=100,f=t.useMemo(()=>n.map(()=>c.createRef()),[n.length]),w=n.map((o,a)=>{const i=o.props.children,x=r?h(i,u,p):i;return e.jsx("li",{className:"drop-down-btn-container",children:c.cloneElement(o,{ref:f[a]},x)},a)});return d?e.jsx("div",{className:"drop-down-menu-wrapper",children:e.jsx("ul",{className:"drop-down-list",children:w})}):e.jsx(D,{animComplete:l,height:m})}export{R as default};

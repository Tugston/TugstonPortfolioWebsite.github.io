import{r,R as u,j as e}from"./index-FOJhS0-C.js";import{M as N}from"./ColorFade-DWAaPPEj.js";import{s as g}from"./FetchDeviceComponents-D8FxhGuz.js";function p({animComplete:n,height:s,closeAnim:i}){let t="draw-menu";t+=i?" drop-menu-close-animation":" drop-menu-open-animation",r.useEffect(()=>{g("--drop-down-menu-animation-height",`${s}rem`)},[s]);const o=a=>{(a.animationName==="expand-width"||a.animationName==="decrease-height")&&n(!0)};return e.jsx("div",{className:"drop-down-menu-wrapper",children:e.jsx("div",{id:"overlay-menu",className:t,onAnimationEnd:o})})}function y({buttonContexts:n=[],animated:s=!1,typedText:i=!0,animationHeight:t=3,isClosing:o=!1,onClosingComplete:a=()=>{}}){const[m,f]=r.useState(!s),[h,w]=r.useState(o&&!s),[v,x]=r.useState(!1),j=100,A=r.useMemo(()=>n.map(()=>u.createRef()),[n.length]),D=n.map((c,l)=>{const d=c.props.children,E=i?N(d,j,x):d;return e.jsx("li",{className:"drop-down-btn-container",children:u.cloneElement(c,{ref:A[l]},E)},l)});return m?m&&!h&&o?e.jsx(p,{animComplete:()=>{w(!0),a()},height:t,closeAnim:!0}):e.jsx("div",{id:"overlay-menu",className:"drop-down-menu-wrapper",children:e.jsx("ul",{className:"drop-down-list",children:D})}):e.jsx(p,{animComplete:f,height:t})}export{y as default};

import{r as s,u as S,j as e,R as N}from"./index-DeCf_clz.js";import{M as w,P as k}from"./ColorFade-CNN8mtGd.js";import{s as A,a as D}from"./FetchDeviceComponents-E2vQ30D7.js";const v=s.forwardRef((n,a)=>{const i=n.children,o="/"+n.navText,r=S();let t={};n.uniqueButton===!0?t={"--mobile-nav-button-background":"var(--hex-bg-scnd)"}:t={"--mobile-nav-button-background":"var(--hex-bg)"};const l=()=>{r(o)};return e.jsx("div",{className:"button-container",children:e.jsx("button",{className:"mobile-nav-button",ref:a,style:t,onClick:l,children:e.jsx("span",{className:"button-text",children:i})})})});function C({animComplete:n,height:a,closeAnim:i}){let o="draw-menu";o+=i?" drop-menu-close-animation":" drop-menu-open-animation",s.useEffect(()=>{A("--drop-down-menu-animation-height",`${a}rem`)},[a]);const r=t=>{(t.animationName==="expand-width"||t.animationName==="decrease-height")&&n(!0)};return e.jsx("div",{className:"drop-down-menu-wrapper",children:e.jsx("div",{id:"overlay-menu",className:o,onAnimationEnd:r})})}function E({buttonContexts:n=[],animated:a=!1,typedText:i=!0,animationHeight:o=3,isClosing:r=!1,onClosingComplete:t=()=>{}}){const[l,u]=s.useState(!a),[d,h]=s.useState(r&&!a),[j,x]=s.useState(!1),c=100,f=s.useMemo(()=>n.map(()=>N.createRef()),[n.length]),b=n.map((m,p)=>{const g=m.props.children,T=i?w(g,c,x):g;return e.jsx("li",{className:"drop-down-btn-container",children:N.cloneElement(m,{ref:f[p]},T)},p)});return l?l&&!d&&r?e.jsx(C,{animComplete:()=>{h(!0),t()},height:o,closeAnim:!0}):e.jsx("div",{id:"overlay-menu",className:"drop-down-menu-wrapper",children:e.jsx("ul",{className:"drop-down-list",children:b})}):e.jsx(C,{animComplete:u,height:o})}//!!!IMPORTANT!!!///
function I({buttonFormats:n=[]}){const[a,i]=s.useState(!1),[o,r]=s.useState(0),[t,l]=s.useState(!1),[u,d]=s.useState(!1),h=S(),j=30;let x=D(424),c=[];t?c=[e.jsx(v,{uniqueButton:n[0],navText:"AboutMe",children:"About Me"}),e.jsx(v,{uniqueButton:n[1],navText:"Education",children:"Education"}),e.jsx(v,{uniqueButton:n[2],navText:"Projects",children:"Projects"})]:c=[];const f=k(x?"<VP>":"<Vincent Pierce>",j,i),b=g=>{t?d(!0):l(!0)},m=()=>{h("/")},p=()=>{l(!1),d(!1)};return e.jsxs("div",{className:"navbar mobile-navbar vibrant-fade-base border-fade",alt:"This page's navigation bar",children:[e.jsx("div",{className:"logo-text-container",children:e.jsx("button",{className:"home-button-mobile",onClick:m,children:e.jsx("span",{className:"logo-text",alt:"Website's text based logo, returns to homepage",children:f})})}),e.jsxs("div",{className:"menu-container",children:[e.jsx("button",{className:`hamburger-menu ${t?"opened":""}`,alt:"Hamburger drop down menu, for page navigation.",onClick:b,children:e.jsx("span",{className:`hamburger-text-icon ${t?"opened":""}`,children:"☰"})}),(t||u)&&e.jsx(s.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(E,{buttonContexts:c,animated:!0,typedText:!1,animationHeight:9,isClosing:u,onClosingComplete:p})})]})]})}export{I as default};

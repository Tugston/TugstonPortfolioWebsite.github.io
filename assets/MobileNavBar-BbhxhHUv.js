const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MobileNavMenu-CGRwDC3Q.js","assets/index-BRgf1a7v.js","assets/MobileNavMenu-D-1AmiBb.css"])))=>i.map(i=>d[i]);
import{r as n,j as e,R as r,_ as c}from"./index-BRgf1a7v.js";import{P as l}from"./NavBar-2WsbSefb.js";const d=r.lazy(()=>c(()=>import("./MobileNavMenu-CGRwDC3Q.js"),__vite__mapDeps([0,1,2])));function b(){const[m,s]=n.useState(!1),[u,p]=n.useState(0),[t,a]=n.useState(!1),o=l("<Vincent Pierce>",30,s),i=g=>{a(!t)};return e.jsxs("div",{className:"navbar mobile-navbar",alt:"This page's navigation bar",children:[e.jsx("div",{className:"logo-text-container",children:e.jsx("span",{className:"logo-text",alt:"Website's text based logo, returns to homepage",children:o})}),e.jsxs("div",{className:"menu-container",children:[e.jsx("button",{className:`hamburger-menu ${t?"opened":""}`,alt:"Hamburger drop down menu, for page navigation.",onClick:i,children:e.jsx("span",{className:`hamburger-text-icon ${t?"opened":""}`,children:"☰"})}),t&&e.jsx(n.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(d,{className:"menu-window"})})]})]})}export{b as default};

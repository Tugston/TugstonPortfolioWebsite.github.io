import{r as n,s as x,j as t}from"./index-CHHzZ4jX.js";import{M as S}from"./NavBar-BT1gtxji.js";const j=(e,s,r,a)=>{const[c,l]=n.useState(!1),g=n.useRef(!1),o=n.useRef(0),u=y(r,a);return console.log(u),n.useEffect(()=>{if(!r&&!c){x("--glow-range-spread","0px"),x("--glow-range-bloom","0px");return}if(!u||g.current||c)return;g.current=!0;const i=setInterval(()=>{o.current<s?(o.current+=.5,x("--glow-range-spread",`${o.current/2}px`),x("--glow-range-bloom",`${o.current}px`)):(clearInterval(i),l(!0))},e);return()=>clearInterval(i)},[u,s,e,a]),c},y=(e,s)=>{const[r,a]=n.useState(!1),c=n.useRef(!1);return n.useEffect(()=>{let l;if(!(c.current||!e))return l=setTimeout(()=>{a(!0),c.current=!0},s),()=>clearTimeout(l)},[e,s]),r},b=(e,s,r,a,c,l)=>{const[g,o]=n.useState(""),u=n.useRef(null);return n.useEffect(()=>{const i=w=>getComputedStyle(document.documentElement).getPropertyValue(w).trim(),m=i(e),f=i(s);o(m);let d=0,h=a;const p=()=>{d<=r?(d%2===0?o("white"):o(m),d++,h=Math.max(0,h),u.current=setTimeout(p,h),h-=c):(o(f),l(!0))};return p(),()=>{clearTimeout(u.current),o(m)}},[e,s,r,a,c,l]),g};function v({text:e,uniqueButton:s,activated:r}){const o=n.useRef(),[u,i]=n.useState(!1),m=b("--hex-bg","--hex-highlight",11,400,50,i),f=b("--hex-bg","--hex-highlight-scnd",10,400,40,i);let d={};return j(30,20,u,1e3),s===!0?d={borderColor:`${f}`,boxShadow:"var(--glow-secondary)"}:d={borderColor:`${m}`,boxShadow:"var(--glow-primary)"},r?t.jsx("div",{className:"nav-button-container",children:t.jsx("button",{ref:o,className:"nav-button",style:d,children:t.jsx("span",{className:"nav-button-text",children:e})})}):t.jsx("div",{className:"nav-button-container",children:t.jsx("button",{className:"nav-button",children:t.jsx("span",{className:"nav-button-text",children:e})})})}function C(){const[e,s]=n.useState(!1),a=S("<Vincent Pierce>",140,s);return t.jsxs("div",{className:"navbar desktop-navbar",alt:"This page's navigation bar",children:[t.jsx("button",{className:"home-button",alt:"Home page navigation button",children:t.jsx("div",{className:"svg-div",children:t.jsxs("svg",{height:"60",width:"320",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("text",{className:"logo-name",x:"50%",y:"50%",textAnchor:"middle",alignmentBaseline:"middle",children:a}),t.jsx("rect",{className:"logo-rect",height:"60",width:"320"})]})})}),t.jsxs("div",{className:"links-section",children:[t.jsx(v,{text:"About Me",uniqueButton:!0,activated:e,alt:"About me page navigation button."}),t.jsx(v,{text:"Education",uniqueButton:!1,activated:e,alt:"Education page navigation button."}),t.jsx(v,{text:"Projects",uniqueButton:!1,activated:e,alt:"Projects page navigation button"})]})]})}export{C as default};

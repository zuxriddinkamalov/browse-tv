(()=>{"use strict";var e={1092:(e,r,t)=>{t(8964),t(702);var o=t(1957),n=t(1947),a=t(499),i=t(9835);function l(e,r,t,o,n,a){const l=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(l)}const s=(0,i.aZ)({name:"App"});var u=t(1639);const c=(0,u.Z)(s,[["render",l]]),p=c;var d=t(3340),f=t(8910);const h=[{path:"/",component:()=>Promise.all([t.e(736),t.e(867)]).then(t.bind(t,9867))},{path:"/:catchAll(.*)*",redirect:"/"}],v=h,b=(0,d.BC)((function(){const e=f.PO,r=(0,f.p7)({scrollBehavior:()=>({left:0,top:0}),routes:v,history:e("/browse-tv/")});return r}));async function g(e,r){const t=e(p);t.use(n.Z,r);const o=(0,a.Xl)("function"===typeof b?await b({}):b);return{app:t,router:o}}var m=t(6950),y=t(2645);const w={config:{},plugins:{Loading:m.Z,Dialog:y.Z}},O="/browse-tv/",P=/\/\//,k=e=>(O+e).replace(P,"/");async function C({app:e,router:r},t){let o=!1;const n=e=>{try{return k(r.resolve(e).href)}catch(t){}return Object(e)===e?null:e},a=e=>{if(o=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const r=n(e);null!==r&&(window.location.href=r)},i=window.location.href.replace(window.location.origin,"");for(let s=0;!1===o&&s<t.length;s++)try{await t[s]({app:e,router:r,ssrContext:null,redirect:a,urlPath:i,publicPath:O})}catch(l){return l&&l.url?void a(l.url):void console.error("[Quasar] boot error:",l)}!0!==o&&(e.use(r),e.mount("#q-app"))}g(o.ri,w).then((e=>Promise.all([Promise.resolve().then(t.bind(t,4136))]).then((r=>{const t=r.map((e=>e.default)).filter((e=>"function"===typeof e));C(e,t)}))))},9303:(e,r,t)=>{t.d(r,{Z:()=>o});const o={appDescription:"Browse movies and tv-shows.",repository:"https://github.com/YannickSpoerl/browse-tv",api:{baseUrl:"http://192.168.0.177:4321/api"},defaults:{itemsVisible:16,itemsLoadMore:16,searchfieldPlaceholder:"Search for titles, actors, ...",genreSelectPlaceholder:"Select genre"}}},4136:(e,r,t)=>{t.r(r),t.d(r,{api:()=>l,default:()=>s});var o=t(3340),n=t(9981),a=t.n(n),i=t(9303);const l=a().create({baseURL:i.Z.api.baseUrl}),s=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=l}))}},r={};function t(o){var n=r[o];if(void 0!==n)return n.exports;var a=r[o]={exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,(()=>{var e=[];t.O=(r,o,n,a)=>{if(!o){var i=1/0;for(c=0;c<e.length;c++){for(var[o,n,a]=e[c],l=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(t.O).every((e=>t.O[e](o[s])))?o.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(c--,1);var u=n();void 0!==u&&(r=u)}}return r}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,n,a]}})(),(()=>{t.n=e=>{var r=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(r,{a:r}),r}})(),(()=>{t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((r,o)=>(t.f[o](e,r),r)),[]))})(),(()=>{t.u=e=>"js/"+e+".7f27b3f0.js"})(),(()=>{t.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{143:"390e07a3",736:"7ef075e5",867:"6229954f"}[e]+".css"})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r)})(),(()=>{var e={},r="browse-tv:";t.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var l,s;if(void 0!==a)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var p=u[c];if(p.getAttribute("src")==o||p.getAttribute("data-webpack")==r+a){l=p;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,t.nc&&l.setAttribute("nonce",t.nc),l.setAttribute("data-webpack",r+a),l.src=o),e[o]=[n];var d=(r,t)=>{l.onerror=l.onload=null,clearTimeout(f);var n=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(t))),r)return r(t)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=d.bind(null,l.onerror),l.onload=d.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.p="/browse-tv/"})(),(()=>{var e=(e,r,t,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var a=a=>{if(n.onerror=n.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,n.parentNode.removeChild(n),o(s)}};return n.onerror=n.onload=a,n.href=r,document.head.appendChild(n),n},r=(e,r)=>{for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var n=t[o],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===r))return n}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){n=i[o],a=n.getAttribute("data-href");if(a===e||a===r)return n}},o=o=>new Promise(((n,a)=>{var i=t.miniCssF(o),l=t.p+i;if(r(i,l))return n();e(o,l,n,a)})),n={143:0};t.f.miniCss=(e,r)=>{var t={867:1};n[e]?r.push(n[e]):0!==n[e]&&t[e]&&r.push(n[e]=o(e).then((()=>{n[e]=0}),(r=>{throw delete n[e],r})))}})(),(()=>{var e={143:0};t.f.j=(r,o)=>{var n=t.o(e,r)?e[r]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((t,o)=>n=e[r]=[t,o]));o.push(n[2]=a);var i=t.p+t.u(r),l=new Error,s=o=>{if(t.o(e,r)&&(n=e[r],0!==n&&(e[r]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;l.message="Loading chunk "+r+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}};t.l(i,s,"chunk-"+r,r)}},t.O.j=r=>0===e[r];var r=(r,o)=>{var n,a,[i,l,s]=o,u=0;if(i.some((r=>0!==e[r]))){for(n in l)t.o(l,n)&&(t.m[n]=l[n]);if(s)var c=s(t)}for(r&&r(o);u<i.length;u++)a=i[u],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(c)},o=globalThis["webpackChunkbrowse_tv"]=globalThis["webpackChunkbrowse_tv"]||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))})();var o=t.O(void 0,[736],(()=>t(1092)));o=t.O(o)})();
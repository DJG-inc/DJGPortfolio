const w="modulepreload",y=function(m){return"/"+m},g={},E=function(l,i,c){let d=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),n=s?.nonce||s?.getAttribute("nonce");d=Promise.all(i.map(t=>{if(t=y(t),t in g)return;g[t]=!0;const r=t.endsWith(".css"),f=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${f}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":w,r||(o.as="script",o.crossOrigin=""),o.href=t,n&&o.setAttribute("nonce",n),document.head.appendChild(o),r)return new Promise((u,e)=>{o.addEventListener("load",u),o.addEventListener("error",()=>e(new Error(`Unable to preload CSS for ${t}`)))})}))}return d.then(()=>l()).catch(s=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=s,window.dispatchEvent(n),!n.defaultPrevented)throw s})};class S extends HTMLElement{constructor(){super();const l=this.querySelector("button[data-open-modal]"),i=this.querySelector("button[data-close-modal]"),c=this.querySelector("dialog"),d=this.querySelector(".dialog-frame"),s=e=>{("href"in(e.target||{})||document.body.contains(e.target)&&!d.contains(e.target))&&t()},n=e=>{c.showModal(),document.body.toggleAttribute("data-search-modal-open",!0),this.querySelector("input")?.focus(),e?.stopPropagation(),window.addEventListener("click",s)},t=()=>c.close();l.addEventListener("click",n),l.disabled=!1,i.addEventListener("click",t),c.addEventListener("close",()=>{document.body.toggleAttribute("data-search-modal-open",!1),window.removeEventListener("click",s)}),window.addEventListener("keydown",e=>{(e.metaKey===!0||e.ctrlKey===!0)&&e.key==="k"&&(c.open?t():n(),e.preventDefault())});let r={};try{r=JSON.parse(this.dataset.translations||"{}")}catch{}const u=this.dataset.stripTrailingSlash!==void 0?e=>e.replace(/(.)\/(#.*)?$/,"$1$2"):e=>e;window.addEventListener("DOMContentLoaded",()=>{(window.requestIdleCallback||(h=>setTimeout(h,1)))(async()=>{const{PagefindUI:h}=await E(async()=>{const{PagefindUI:a}=await import("./ui-core.DcjbybBA.js");return{PagefindUI:a}},[]);new h({element:"#starlight__search",baseUrl:"/",bundlePath:"/".replace(/\/$/,"")+"/pagefind/",showImages:!1,translations:r,showSubResults:!0,processResult:a=>{a.url=u(a.url),a.sub_results=a.sub_results.map(p=>(p.url=u(p.url),p))}})})})}}customElements.define("site-search",S);export{E as _};

import{a1 as r,d as u,K as s,a2 as c,u as d,i as l,w as f,a3 as m,a4 as h,a5 as A,a6 as _,a7 as v,a8 as P,a9 as g,aa as w,ab as y,ac as C,ad as E,ae as R,af as D}from"./chunks/framework.fe6f7e1d.js";import{t as b}from"./chunks/theme.a253ec09.js";const T={...b,enhanceApp:async({app:e,router:a,siteData:t,isServer:n})=>{r(()=>import("./chunks/index.82b3a03c.js"),["assets/chunks/index.82b3a03c.js","assets/chunks/framework.fe6f7e1d.js","assets/chunks/theme.a253ec09.js"]).then(p=>{e.use(p)})}};function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const o=i(T),O=u({name:"VitePressApp",setup(){const{site:e}=d();return l(()=>{f(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),m(),h(),A(),o.setup&&o.setup(),()=>_(o.Layout)}});async function S(){const e=L(),a=x();a.provide(v,e);const t=P(e.route);return a.provide(g,t),a.component("Content",w),a.component("ClientOnly",y),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:a,router:e,siteData:C}),{app:a,router:e,data:t}}function x(){return E(O)}function L(){let e=s,a;return R(t=>{let n=D(t);return e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),s&&(e=!1),r(()=>import(n),[])},o.NotFound)}s&&S().then(({app:e,router:a,data:t})=>{a.go().then(()=>{c(a.route,t.site),e.mount("#app")})});export{S as createApp};

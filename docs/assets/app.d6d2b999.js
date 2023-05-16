import{a1 as __vitePreload,d as defineComponent,K as inBrowser,a2 as useUpdateHead,u as useData,i as onMounted,w as watchEffect,a3 as usePrefetch,a4 as useCopyCode,a5 as useCodeGroups,a6 as h,a7 as RouterSymbol,a8 as initData,a9 as dataSymbol,aa as Content,ab as ClientOnly,ac as siteDataRef,ad as createSSRApp,ae as createRouter,af as pathToFile}from"./chunks/framework.aae1d792.js";import{t as theme$1}from"./chunks/theme.25e48b0a.js";const index="",common="";let theme="";const getTheme=e=>{var t;return(t=e==null?void 0:e.split("/"))==null?void 0:t.at(2)},themeAssets={xiaoshan:["http://newdev.rdapp.com:8097/projectdata/web-component-store/style/css/theme.css"],tebian:["http://newdev.rdapp.com:8097/projectdata/web-component-store/style/css/theme-tb.css"]},addCssByLink="(url) => { const link = document.querySelector('#componentStoreTheme');if (link) {link.setAttribute('href', url)} else {const oLink = document.createElement('link');oLink.setAttribute('rel', 'stylesheet');oLink.setAttribute('id', 'componentStoreTheme');oLink.setAttribute('type', 'text/css');oLink.setAttribute('href', url);const heads = document.getElementsByTagName('head');if (heads.length) heads[0].appendChild(oLink);else document.documentElement.appendChild(oLink);}}",RawTheme={...theme$1,enhanceApp:async({app,router,siteData,isServer})=>{setInterval(()=>{const currentTheme=getTheme(router.route.path);currentTheme===theme||!Reflect.has(themeAssets,currentTheme)||(theme=currentTheme,eval(addCssByLink)(themeAssets[currentTheme]))},1e3),__vitePreload(()=>import("./chunks/index.e0d6d234.js"),["assets/chunks/index.e0d6d234.js","assets/chunks/framework.aae1d792.js","assets/chunks/theme.25e48b0a.js"]).then(e=>{app.use(e)})}};function resolveThemeExtends(e){if(e.extends){const t=resolveThemeExtends(e.extends);return{...t,...e,async enhanceApp(n){t.enhanceApp&&await t.enhanceApp(n),e.enhanceApp&&await e.enhanceApp(n)}}}return e}const Theme=resolveThemeExtends(RawTheme),VitePressApp=defineComponent({name:"VitePressApp",setup(){const{site:e}=useData();return onMounted(()=>{watchEffect(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),usePrefetch(),useCopyCode(),useCodeGroups(),Theme.setup&&Theme.setup(),()=>h(Theme.Layout)}});async function createApp(){const e=newRouter(),t=newApp();t.provide(RouterSymbol,e);const n=initData(e.route);return t.provide(dataSymbol,n),t.component("Content",Content),t.component("ClientOnly",ClientOnly),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),Theme.enhanceApp&&await Theme.enhanceApp({app:t,router:e,siteData:siteDataRef}),{app:t,router:e,data:n}}function newApp(){return createSSRApp(VitePressApp)}function newRouter(){let e=inBrowser,t;return createRouter(n=>{let a=pathToFile(n);return e&&(t=a),(e||t===a)&&(a=a.replace(/\.js$/,".lean.js")),inBrowser&&(e=!1),__vitePreload(()=>import(a),[])},Theme.NotFound)}inBrowser&&createApp().then(({app:e,router:t,data:n})=>{t.go().then(()=>{useUpdateHead(t.route,n.site),e.mount("#app")})});export{createApp};

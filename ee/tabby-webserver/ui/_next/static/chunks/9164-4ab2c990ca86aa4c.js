"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9164],{68172:function(e,t,n){n.d(t,{q:function(){return a}});var r=n(36164),s=n(38785);function a(e){let{children:t,fallback:n=null}=e;return(0,s.U)()?(0,r.jsx)(r.Fragment,{children:t}):(0,r.jsx)(r.Fragment,{children:n})}},30601:function(e,t,n){n.d(t,{Hb:function(){return f},wt:function(){return d},xc:function(){return x},yo:function(){return m}});var r=n(36164),s=n(3546),a=n(74630),l=n(36327),i=n(80605),o=n(1544),c=n(81565);let d="3.5rem",u=s.createContext({}),m=e=>{let{children:t}=e,n=(0,i.UA)(),[l,o]=s.useState(!1);return s.useEffect(()=>{let e=window.self!==window.top;e||(0,a.Z)(n)||o(n)},[n]),(0,r.jsx)(u.Provider,{value:{isShowDemoBanner:l,setIsShowDemoBanner:o},children:t})};function f(){let{isShowDemoBanner:e,setIsShowDemoBanner:t}=s.useContext(u);return[e,t]}function x(){let[e,t]=f(),{data:n}=(0,l.Z)("https://api.github.com/repos/TabbyML/tabby",e=>fetch(e).then(e=>e.json()));return(0,r.jsxs)("div",{className:(0,o.cn)("flex items-center justify-between bg-primary px-4 text-primary-foreground transition-[opacity,height] md:px-5",{"opacity-100 pointer-events-auto":e,"opacity-0 pointer-events-none":!e}),style:e?{height:d}:{height:0},children:[(0,r.jsxs)("a",{href:"https://links.tabbyml.com/schedule-a-demo",target:"_blank",className:"flex items-center gap-x-2 text-xs font-semibold underline md:text-sm",children:[(0,r.jsx)("span",{children:"\uD83D\uDCC6"}),(0,r.jsx)("span",{children:"Book a 30-minute product demo."})]}),e&&(0,r.jsx)("img",{referrerPolicy:"no-referrer-when-downgrade",src:"https://static.scarf.sh/a.png?x-pxid=b1d0308a-b3c5-425a-972a-378d883a2bca"}),(0,r.jsxs)("div",{className:"flex items-center gap-x-4 md:gap-x-8",children:[(0,r.jsxs)("a",{href:"https://github.com/TabbyML/tabby",target:"_blank",className:"flex items-center transition-all hover:opacity-70",children:[(0,r.jsx)(c.IconGithub,{}),(0,r.jsxs)("div",{className:"ml-2 hidden md:block",children:[(0,r.jsx)("p",{className:"text-xs font-semibold",children:"TabbyML/tabby"}),(0,r.jsxs)("div",{className:(0,o.cn)("flex items-center text-xs transition-all",{"h-4 opacity-70":n,"h-0 opacity-0":!n}),children:[(0,r.jsx)(c.IconStar,{className:"mr-1 h-2.5 w-2.5"}),(0,r.jsx)("span",{children:null==n?void 0:n.stargazers_count}),(0,r.jsx)(c.IconGitFork,{className:"ml-2 mr-1 h-2.5 w-2.5"}),(0,r.jsx)("span",{children:null==n?void 0:n.forks_count})]})]})]}),(0,r.jsx)(c.IconClose,{className:"cursor-pointer transition-all hover:opacity-70",onClick:()=>t(!1)})]})]})}},63743:function(e,t,n){n.d(t,{T:function(){return o}});var r=n(36164),s=n(3546),a=n(9010),l=n(31458),i=n(81565);function o(e){let{className:t}=e,{setTheme:n,theme:o}=(0,a.X)(),[c,d]=s.useTransition();return(0,r.jsxs)(l.z,{variant:"ghost",size:"icon",onClick:()=>{d(()=>{n("light"===o?"dark":"light")})},className:t,children:["dark"===o?(0,r.jsx)(i.IconMoon,{className:"transition-all"}):(0,r.jsx)(i.IconSun,{className:"transition-all"}),(0,r.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}},79972:function(e,t,n){n.d(t,{Ol:function(){return i},Zb:function(){return l},aY:function(){return d},eW:function(){return u},ll:function(){return o}});var r=n(36164),s=n(3546),a=n(1544);let l=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("div",{ref:t,className:(0,a.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",n),...s})});l.displayName="Card";let i=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("div",{ref:t,className:(0,a.cn)("flex flex-col space-y-1.5 p-6",n),...s})});i.displayName="CardHeader";let o=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("h3",{ref:t,className:(0,a.cn)("text-2xl font-semibold leading-none tracking-tight",n),...s})});o.displayName="CardTitle";let c=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("p",{ref:t,className:(0,a.cn)("text-sm text-muted-foreground",n),...s})});c.displayName="CardDescription";let d=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("div",{ref:t,className:(0,a.cn)("p-6 pt-0",n),...s})});d.displayName="CardContent";let u=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("div",{ref:t,className:(0,a.cn)("flex items-center p-6 pt-0",n),...s})});u.displayName="CardFooter"},62202:function(e,t,n){n.d(t,{$F:function(){return o},AW:function(){return u},Ju:function(){return x},VD:function(){return p},Xi:function(){return m},_x:function(){return c},h_:function(){return i},qB:function(){return f}});var r=n(36164),s=n(3546),a=n(19148),l=n(1544);let i=a.fC,o=a.xz;a.ZA,a.Uv,a.Tr;let c=a.Ee;a.wU;let d=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(a.tu,{ref:t,className:(0,l.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",n),...s})});d.displayName=a.tu.displayName;let u=s.forwardRef((e,t)=>{let{className:n,sideOffset:s=4,...i}=e;return(0,r.jsx)(a.Uv,{children:(0,r.jsx)(a.VY,{ref:t,sideOffset:s,className:(0,l.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...i})})});u.displayName=a.VY.displayName;let m=s.forwardRef((e,t)=>{let{className:n,inset:s,...i}=e;return(0,r.jsx)(a.ck,{ref:t,className:(0,l.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",s&&"pl-8",n),...i})});m.displayName=a.ck.displayName;let f=s.forwardRef((e,t)=>{let{className:n,inset:s,...i}=e;return(0,r.jsx)(a.Rk,{ref:t,className:(0,l.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",s&&"pl-8",n),...i})});f.displayName=a.Rk.displayName;let x=s.forwardRef((e,t)=>{let{className:n,inset:s,...i}=e;return(0,r.jsx)(a.__,{ref:t,className:(0,l.cn)("px-2 py-1.5 text-sm font-semibold",s&&"pl-8",n),...i})});x.displayName=a.__.displayName;let p=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(a.Z0,{ref:t,className:(0,l.cn)("-mx-1 my-1 h-px bg-muted",n),...s})});p.displayName=a.Z0.displayName},5266:function(e,t,n){n.d(t,{_:function(){return c}});var r=n(36164),s=n(3546),a=n(90893),l=n(14375),i=n(1544);let o=(0,l.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(a.f,{ref:t,className:(0,i.cn)(o(),n),...s})});c.displayName=a.f.displayName},52569:function(e,t,n){n.d(t,{SQ:function(){return v},Yt:function(){return b},nY:function(){return N}});var r=n(36164),s=n(3546),a=n(87782),l=n(21454),i=n(36327),o=n(98454),c=n(3765),d=n(1544),u=n(66612);let m=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(u.fC,{ref:t,className:(0,d.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",n),...s})});m.displayName=u.fC.displayName;let f=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(u.Ee,{ref:t,className:(0,d.cn)("aspect-square h-full w-full",n),...s})});f.displayName=u.Ee.displayName;let x=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(u.NY,{ref:t,className:(0,d.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",n),...s})});x.displayName=u.NY.displayName;var p=n(3448),h=n(30410).lW;let g="not_found",j=new Set,N=e=>{j.delete(e),(0,l.JG)("/avatar/".concat(e))};function b(e){var t;let{user:n,className:l,fallback:o}=e,u=null==n?void 0:n.id,N=u?"/avatar/".concat(u):null,{data:b,isLoading:v,error:w}=(0,i.Z)(N,e=>{if(!(!u||j.has(u)))return(0,c.Z)(e,{responseFormatter:async e=>{let t=await e.blob(),n=h.from(await t.arrayBuffer());return"data:image/png;base64,".concat(n.toString("base64"))},errorHandler:e=>{if(404===e.status)throw Error(g)}})}),y=s.useMemo(()=>{if(null==n?void 0:n.email)return(0,a.B)(n.email)},[null==n?void 0:n.email]);return v?(0,r.jsx)(p.O,{className:(0,d.cn)("h-16 w-16 rounded-full",l)}):((null==w?void 0:w.message)===g&&u&&j.add(u),b||y||!o)?!b&&y?(0,r.jsx)(a.Z,{className:(0,d.cn)("h-16 w-16",l),...y}):(0,r.jsxs)(m,{className:(0,d.cn)("h-16 w-16",l),children:[(0,r.jsx)(f,{src:b,alt:null==n?void 0:n.email,className:"object-cover"}),(0,r.jsx)(x,{children:null==n?void 0:null===(t=n.email)||void 0===t?void 0:t.substring(0,2)})]}):o}function v(e){let[{data:t}]=(0,o.P)();return(0,r.jsx)(b,{user:null==t?void 0:t.me,...e})}},7449:function(e,t,n){n.d(t,{Z:function(){return k}});var r=n(36164),s=n(3546),a=n(70652),l=n.n(a),i=n(11978),o=n(71480),c=n(43240),d=n(98454),u=n(70526),m=n(91302),f=n(11634),x=n(1544),p=n(31458),h=n(79972),g=n(62202),j=n(81565),N=n(82394),b=n(5266),v=n(29),w=n(48537),y=n(52569);let A=(0,c.BX)("\n  mutation ResetUserAuthToken {\n    resetUserAuthToken\n  }\n");function k(e){let{children:t,showHome:n=!0,showSetting:a=!1,beforeRouteChange:l}=e,o=(0,i.useRouter)(),c=(0,m.QJ)(),[{data:u},f]=(0,d.P)(),x=null==u?void 0:u.me,[p,h]=s.useState(!1),N=async e=>{e.preventDefault(),h(!0),await c(),h(!1)},b=(e,t)=>{null==l||l(e),t?o.replace(e):o.push(e)};if(x)return(0,r.jsxs)(g.h_,{children:[(0,r.jsx)(g.$F,{children:t}),(0,r.jsxs)(g.AW,{side:"bottom",align:"end",className:"relative overflow-y-auto p-0",style:{maxHeight:"calc(100vh - 6rem)"},children:[(0,r.jsxs)("div",{className:"p-4 pt-0",children:[(0,r.jsxs)("div",{className:"sticky top-0 z-10 flex items-center gap-2 bg-popover pb-2 pt-4",children:[(0,r.jsx)(y.Yt,{user:x,className:"h-12 w-12 shrink-0 border-[2px] border-white"}),(0,r.jsxs)("div",{className:"space-y-1",children:[x.name&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.Ju,{className:"p-0",children:x.name}),(0,r.jsx)(g.Ju,{className:"p-0 text-sm font-normal text-muted-foreground",children:x.email})]}),!x.name&&(0,r.jsx)(g.Ju,{children:x.email})]})]}),(0,r.jsx)(C,{className:"mt-2",user:x,reexecuteQuery:f})]}),(0,r.jsx)(g.VD,{className:"mb-1 mt-0"}),(0,r.jsxs)("div",{className:"px-1.5",children:[n&&(0,r.jsxs)(g.Xi,{onClick:()=>b("/"),className:"cursor-pointer py-2 pl-3",children:[(0,r.jsx)(j.IconHome,{}),(0,r.jsx)("span",{className:"ml-2",children:"Home"})]}),a&&(0,r.jsxs)(g.Xi,{onClick:()=>b("/profile"),className:"cursor-pointer py-2 pl-3",children:[(0,r.jsx)(j.IconGear,{}),(0,r.jsx)("span",{className:"ml-2",children:"Settings"})]}),(0,r.jsxs)(g.Xi,{onClick:()=>window.open("/files"),className:"cursor-pointer py-2 pl-3",children:[(0,r.jsx)(j.IconCode,{}),(0,r.jsx)("span",{className:"ml-2",children:"Code Browser"})]}),(0,r.jsxs)(g.Xi,{onClick:()=>window.open("/api"),className:"cursor-pointer py-2 pl-3",children:[(0,r.jsx)(j.IconBackpack,{}),(0,r.jsx)("span",{className:"ml-2",children:"API Docs"})]})]}),(0,r.jsx)(g.VD,{}),(0,r.jsxs)(g.Xi,{disabled:p,onClick:N,className:"mx-1.5 mb-1.5 cursor-pointer py-2 pl-3",children:[(0,r.jsx)(j.IconLogout,{}),(0,r.jsx)("span",{className:"ml-2",children:"Sign out"}),p&&(0,r.jsx)(j.IconSpinner,{className:"ml-1"})]})]})]})}function C(e){let{className:t,user:n,reexecuteQuery:s}=e,a=(0,u.j)(),l=(0,f.Db)(A,{onCompleted:()=>s()});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:(0,x.cn)("w-[268px] rounded-xl bg-[#FBF5ED] p-4 dark:bg-[#3D382F]",t),children:[(0,r.jsxs)(h.aY,{className:"p-0",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsx)(b._,{className:"text-xs text-muted-foreground",children:"Endpoint URL"}),(0,r.jsxs)("span",{className:"group relative",children:[(0,r.jsx)(N.I,{value:a,onChange:o.Z,className:"border-none bg-[#FEFCF8] group-focus-within:pr-12 group-hover:pr-12 dark:bg-[#4F483B]"}),(0,r.jsx)(w.q,{value:a,className:(0,x.cn)("absolute right-1 top-0.5 hidden group-focus-within:flex group-hover:flex")})]})]}),(0,r.jsxs)("div",{className:"mt-4 flex flex-col gap-2",children:[(0,r.jsx)(b._,{className:"text-xs text-muted-foreground",children:"Token"}),(0,r.jsxs)("span",{className:"group relative",children:[(0,r.jsx)(N.I,{value:n.authToken,onChange:o.Z,className:"border-none bg-[#FEFCF8] group-focus-within:pr-20 group-hover:pr-20 dark:bg-[#4F483B]"}),(0,r.jsxs)("div",{className:"absolute right-1 top-0.5 hidden items-center gap-1 group-focus-within:flex group-hover:flex",children:[(0,r.jsx)(w.q,{value:n.authToken}),(0,r.jsx)(p.z,{title:"Rotate",size:"icon",variant:"hover-destructive",onClick:()=>l(),children:(0,r.jsx)(j.IconRotate,{})})]})]})]})]}),(0,r.jsx)(h.eW,{className:"mt-3 p-0 text-xs text-muted-foreground",children:(0,r.jsxs)("span",{children:["Use information above for IDE extensions / plugins configuration, see"," ",(0,r.jsx)("a",{className:"text-link underline",target:"_blank",href:"https://tabby.tabbyml.com/docs/extensions/configurations#server",children:"documentation website"})," ","for details"]})})]}),(0,r.jsxs)("div",{className:"mb-6 mt-3 flex gap-x-4 lg:mb-0",children:[(0,r.jsx)(R,{href:"https://marketplace.visualstudio.com/items?itemName=TabbyML.vscode-tabby",name:"Visual Studio Code",icon:(0,r.jsx)(j.IconVSCode,{className:"h-6 w-6"})}),(0,r.jsx)(R,{href:"https://plugins.jetbrains.com/plugin/22379-tabby",name:"JetBrains",icon:(0,r.jsx)(j.IconJetBrains,{className:"h-6 w-6"})})]})]})}function R(e){let{href:t,name:n,icon:s}=e;return(0,r.jsxs)(v.u,{children:[(0,r.jsx)(v.aJ,{children:(0,r.jsx)(l(),{href:t,className:"flex h-8 w-8 items-center justify-center rounded-lg text-[#030302]",target:"_blank",children:s})}),(0,r.jsx)(v._v,{children:(0,r.jsx)("p",{children:n})})]})}},9010:function(e,t,n){n.d(t,{X:function(){return s}});var r=n(28242);function s(){let{theme:e,systemTheme:t,setTheme:n}=(0,r.F)();return{theme:e&&"system"!==e?e:t||"light",setTheme:n,systemTheme:t}}},38785:function(e,t,n){n.d(t,{U:function(){return a}});var r=n(3546);let s=!0;function a(){let[e,t]=r.useState(()=>!s);return r.useEffect(function(){s=!1,t(!0)},[]),e}},70526:function(e,t,n){n.d(t,{e:function(){return o},j:function(){return c}});var r=n(3546),s=n(40055),a=n(43240),l=n(1544);let i=(0,a.BX)("\n  query NetworkSetting {\n    networkSetting {\n      externalUrl\n    }\n  }\n"),o=e=>(0,s.aM)({query:i,...e}),c=()=>{let[{data:e}]=o(),t=null==e?void 0:e.networkSetting,n=r.useMemo(()=>(null==t?void 0:t.externalUrl)||((0,l.S_)()?new URL(window.location.href).origin:""),[t]);return n}},83332:function(e,t){t.Z={src:"/_next/static/media/logo-dark.362a169d.png",height:149,width:395,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAQAAAAEwYbDAAAAOklEQVR42gXAIQqAMBQA0A+K3eIVHNhEk21Wk5iN4g6w6z9GyBaDZDLr9OH0qD6/4nWHUZLtNqvL0QDmsR1AxwcSfQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3}},76531:function(e,t){t.Z={src:"/_next/static/media/logo.526f7cf9.png",height:184,width:607,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAASklEQVR4nGPsKQh1f/HshV/PqtNtagrC8p++//rDAgQM//9/ZWJifMZYnRqg9+bVq6iZ51+1SP/5ovH//z8eRgbGbwyMjPxA9n0AMi8g2L1xUkUAAAAASUVORK5CYII=",blurWidth:8,blurHeight:2}}}]);
(()=>{var e={};e.id=405,e.ids=[405],e.modules={1496:(e,t,r)=>{"use strict";r.a(e,async(e,i)=>{try{r.r(t),r.d(t,{config:()=>f,default:()=>u,getServerSideProps:()=>m,getStaticPaths:()=>g,getStaticProps:()=>p,reportWebVitals:()=>h,routeModule:()=>j,unstable_getServerProps:()=>v,unstable_getServerSideProps:()=>w,unstable_getStaticParams:()=>b,unstable_getStaticPaths:()=>y,unstable_getStaticProps:()=>x});var s=r(7093),n=r(5244),a=r(1323),o=r(7645),l=r(6814),c=r(6209),d=e([o,l,c]);[o,l,c]=d.then?(await d)():d;let u=(0,a.l)(c,"default"),p=(0,a.l)(c,"getStaticProps"),g=(0,a.l)(c,"getStaticPaths"),m=(0,a.l)(c,"getServerSideProps"),f=(0,a.l)(c,"config"),h=(0,a.l)(c,"reportWebVitals"),x=(0,a.l)(c,"unstable_getStaticProps"),y=(0,a.l)(c,"unstable_getStaticPaths"),b=(0,a.l)(c,"unstable_getStaticParams"),v=(0,a.l)(c,"unstable_getServerProps"),w=(0,a.l)(c,"unstable_getServerSideProps"),j=new s.PagesRouteModule({definition:{kind:n.x.PAGES,page:"/index",pathname:"/",bundlePath:"",filename:""},components:{App:l.default,Document:o.default},userland:c});i()}catch(e){i(e)}})},8057:(e,t,r)=>{"use strict";r.a(e,async(e,i)=>{try{r.d(t,{T:()=>g});var s=r(997),n=r(968),a=r.n(n),o=r(8748),l=r(3195),c=r(4953),d=r(2563),u=r(4492),p=e([o,u]);[o,u]=p.then?(await p)():p;let g=({date:e,title:t,description:r,thumbnail:i,children:n})=>{let p=(0,o.onlyText)(t),g=r?(0,o.onlyText)(r):c.Z.siteDescription,m=i||c.Z.siteThumbnail,f=`${p} - ${c.Z.siteName}`;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a(),{children:[s.jsx("title",{children:f}),s.jsx("meta",{name:"og:url",content:c.Z.siteUrl}),s.jsx("meta",{property:"og:title",content:p}),s.jsx("meta",{name:"description",content:g}),s.jsx("meta",{name:"og:description",content:g}),s.jsx("meta",{property:"og:image",content:`${c.Z.siteUrl}${m}`})]}),(0,s.jsxs)("header",{className:(0,u.cx)("mb-8 pb-8 border-b","border-gray-200","dark:border-gray-700"),children:[e?s.jsx("time",{className:(0,u.cx)("block mb-2","text-gray-500","dark:text-gray-400"),children:(0,l.p)(e)}):null,s.jsx("h1",{className:"font-bold text-3xl",children:t}),r?s.jsx("div",{className:"mt-4",children:s.jsx(d.M,{children:"string"==typeof r?s.jsx("p",{children:r}):r})}):null]}),n]})};i()}catch(e){i(e)}})},2563:(e,t,r)=>{"use strict";r.d(t,{M:()=>s});var i=r(997);let s=({children:e})=>i.jsx("div",{className:"max-w-none prose prose-a:text-pink-600 dark:prose-invert",children:e})},3195:(e,t,r)=>{"use strict";r.d(t,{p:()=>n});var i=r(1971),s=r(7922);let n=e=>(0,i.Z)((0,s.Z)(e),"MMMM dd, yyyy")},6894:(e,t,r)=>{"use strict";r.d(t,{Gw:()=>l,zQ:()=>a,Jq:()=>n,J4:()=>o,_4:()=>c});let i=require("@tryghost/content-api"),s=new(r.n(i)())({url:process.env.GHOST_API_URL,key:process.env.GHOST_API_KEY,version:"v3.0"});async function n(){return await s.posts.browse({limit:"all",include:"tags"})}async function a(e){try{return await s.posts.read({slug:e})}catch(t){return console.error(`Error fetching post with slug ${e}:`,t),null}}async function o(e){return await s.posts.browse({limit:"all",include:"tags",filter:`tag:${e}`})}async function l(e){let t=await s.posts.browse({limit:"all",include:"tags"}),r=/<script\s+type=["']application\/json["']>(.*?)<\/script>/s,i=t.map(e=>{let t=e.codeinjection_head?.match(r);if(t)try{let r=JSON.parse(t[1].trim());if(r.guide_name)return e.guide_name=r.guide_name,e.priority=r.priority,e}catch(e){console.error("Error parsing JSON:",e)}return null}).filter(e=>null!==e).filter(t=>t.guide_name===e).sort((e,t)=>(e.priority||0)-(t.priority||0));return{guide_name:e,posts:i}}async function c(){let e=await s.posts.browse({limit:"all",include:"tags"}),t=/<script\s+type=["']application\/json["']>(.*?)<\/script>/s;return Object.entries(e.map(e=>{let r=e.codeinjection_head?.match(t);if(r)try{let t=JSON.parse(r[1].trim());if(t.guide_name)return e.guide_name=t.guide_name,e.priority=t.priority,e}catch(e){console.error("Error parsing JSON:",e)}return null}).filter(e=>null!==e).reduce((e,t)=>{let r=t.guide_name;return e[r]||(e[r]=[]),e[r].push(t),e},{})).map(([e,t])=>({guide_name:e,posts:t.sort((e,t)=>(e.priority||0)-(t.priority||0))}))}},6541:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let i=r(167),s=r(8760),n=r(997),a=s._(r(6689)),o=i._(r(6405)),l=i._(r(7828)),c=r(7367),d=r(7903),u=r(6218);r(1997);let p=r(5469),g=i._(r(6663)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function f(e,t,r,i,s,n,a){let o=null==e?void 0:e.src;e&&e["data-loaded-src"]!==o&&(e["data-loaded-src"]=o,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&s(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,s=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>s,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{s=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}}))}function h(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let x=(0,a.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:s,height:o,width:l,decoding:c,className:d,style:u,fetchPriority:p,placeholder:g,loading:m,unoptimized:x,fill:y,onLoadRef:b,onLoadingCompleteRef:v,setBlurComplete:w,setShowAltText:j,sizesInput:S,onLoad:_,onError:P,...z}=e;return(0,n.jsx)("img",{...z,...h(p),loading:m,width:l,height:o,decoding:c,"data-nimg":y?"fill":"1",className:d,style:u,sizes:s,srcSet:i,src:r,ref:(0,a.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(P&&(e.src=e.src),e.complete&&f(e,g,b,v,w,x,S))},[r,g,b,v,w,P,x,S,t]),onLoad:e=>{f(e.currentTarget,g,b,v,w,x,S)},onError:e=>{j(!0),"empty"!==g&&w(!0),P&&P(e)}})});function y(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...h(r.fetchPriority)};return t&&o.default.preload?(o.default.preload(r.src,i),null):(0,n.jsx)(l.default,{children:(0,n.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...i},"__nimg-"+r.src+r.srcSet+r.sizes)})}let b=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(p.RouterContext),i=(0,a.useContext)(u.ImageConfigContext),s=(0,a.useMemo)(()=>{let e=m||i||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[i]),{onLoad:o,onLoadingComplete:l}=e,f=(0,a.useRef)(o);(0,a.useEffect)(()=>{f.current=o},[o]);let h=(0,a.useRef)(l);(0,a.useEffect)(()=>{h.current=l},[l]);let[b,v]=(0,a.useState)(!1),[w,j]=(0,a.useState)(!1),{props:S,meta:_}=(0,c.getImgProps)(e,{defaultLoader:g.default,imgConf:s,blurComplete:b,showAltText:w});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x,{...S,unoptimized:_.unoptimized,placeholder:_.placeholder,fill:_.fill,onLoadRef:f,onLoadingCompleteRef:h,setBlurComplete:v,setShowAltText:j,sizesInput:e.sizes,ref:t}),_.priority?(0,n.jsx)(y,{isAppRouter:!r,imgAttributes:S}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7367:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return o}}),r(1997);let i=r(9919),s=r(7903);function n(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function o(e,t){var r;let o,l,c,{src:d,sizes:u,unoptimized:p=!1,priority:g=!1,loading:m,className:f,quality:h,width:x,height:y,fill:b=!1,style:v,overrideSrc:w,onLoad:j,onLoadingComplete:S,placeholder:_="empty",blurDataURL:P,fetchPriority:z,layout:C,objectFit:k,objectPosition:N,lazyBoundary:O,lazyRoot:E,...M}=e,{imgConf:I,showAltText:R,blurComplete:D,defaultLoader:A}=t,q=I||s.imageConfigDefault;if("allSizes"in q)o=q;else{let e=[...q.deviceSizes,...q.imageSizes].sort((e,t)=>e-t),t=q.deviceSizes.sort((e,t)=>e-t);o={...q,allSizes:e,deviceSizes:t}}if(void 0===A)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let T=M.loader||A;delete M.loader,delete M.srcSet;let G="__next_img_default"in T;if(G){if("custom"===o.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=T;T=t=>{let{config:r,...i}=t;return e(i)}}if(C){"fill"===C&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(v={...v,...e});let t={responsive:"100vw",fill:"100vw"}[C];t&&!u&&(u=t)}let L="",F=a(x),J=a(y);if("object"==typeof(r=d)&&(n(r)||void 0!==r.src)){let e=n(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,c=e.blurHeight,P=P||e.blurDataURL,L=e.src,!b){if(F||J){if(F&&!J){let t=F/e.width;J=Math.round(e.height*t)}else if(!F&&J){let t=J/e.height;F=Math.round(e.width*t)}}else F=e.width,J=e.height}}let Z=!g&&("lazy"===m||void 0===m);(!(d="string"==typeof d?d:L)||d.startsWith("data:")||d.startsWith("blob:"))&&(p=!0,Z=!1),o.unoptimized&&(p=!0),G&&d.endsWith(".svg")&&!o.dangerouslyAllowSVG&&(p=!0),g&&(z="high");let $=a(h),B=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:k,objectPosition:N}:{},R?{}:{color:"transparent"},v),V=D||"empty"===_?null:"blur"===_?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:F,heightInt:J,blurWidth:l,blurHeight:c,blurDataURL:P||"",objectFit:B.objectFit})+'")':'url("'+_+'")',W=V?{backgroundSize:B.objectFit||"cover",backgroundPosition:B.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},U=function(e){let{config:t,src:r,unoptimized:i,width:s,quality:n,sizes:a,loader:o}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,r){let{deviceSizes:i,allSizes:s}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:s.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:s,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>s.find(t=>t>=e)||s[s.length-1]))],kind:"x"}}(t,s,a),d=l.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:l.map((e,i)=>o({config:t,src:r,quality:n,width:e})+" "+("w"===c?e:i+1)+c).join(", "),src:o({config:t,src:r,quality:n,width:l[d]})}}({config:o,src:d,unoptimized:p,width:F,quality:$,sizes:u,loader:T});return{props:{...M,loading:Z?"lazy":m,fetchPriority:z,width:F,height:J,decoding:"async",className:f,style:{...B,...W},sizes:U.sizes,srcSet:U.srcSet,src:w||U.src},meta:{unoptimized:p,priority:g,placeholder:_,fill:b}}}},9919:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:s,blurDataURL:n,objectFit:a}=e,o=i?40*i:t,l=s?40*s:r,c=o&&l?"viewBox='0 0 "+o+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+n+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},7903:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return i}});let r=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},5666:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},getImageProps:function(){return o}});let i=r(167),s=r(7367),n=r(6541),a=i._(r(6663));function o(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let l=n.Image},6663:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:i,quality:s}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(s||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},6209:(e,t,r)=>{"use strict";r.a(e,async(e,i)=>{try{r.r(t),r.d(t,{default:()=>g,getStaticProps:()=>p});var s=r(997),n=r(1664),a=r.n(n),o=r(8057),l=r(6894),c=r(5675),d=r.n(c),u=e([o]);async function p(){return{props:{guides:await (0,l._4)()},revalidate:10}}o=(u.then?(await u)():u)[0];let g=({guides:e})=>s.jsx(s.Fragment,{children:s.jsx(o.T,{title:"Hi, I'm Apoorva Verma",description:(0,s.jsxs)(s.Fragment,{children:["I've been diving into the world of DevOps, learning the ins and outs of making development and operations work better together. ",s.jsx("br",{}),s.jsx("b",{children:"Along the way, I've picked up some cool tips, tricks, and a few lessons learned the hard way—So why not share them? \uD83D\uDE09 "})]}),children:e.map((e,t)=>{let[r,...i]=e.posts,n=r.codeinjection_head.match(/<script type="application\/json">([\s\S]*?)<\/script>/),o=JSON.parse(n[1].trim());return s.jsx("div",{className:"mt-5 block bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",children:(0,s.jsxs)("div",{className:"grid grid-cols-3 gap-3",children:[s.jsx("a",{href:`/guides/${o.guide_name}`,className:"flex-shrink-0",children:s.jsx(d(),{className:"rounded-lg",src:r.feature_image,alt:"Description of the image",width:500,height:300})}),(0,s.jsxs)("div",{className:"p-3",children:[s.jsx("h2",{className:" text-lg font-semibold text-gray-900 dark:text-white",children:"What you'll learn"}),s.jsx("p",{className:"font-normal text-gray-700 dark:text-gray-400",children:o.guide_description})]}),(0,s.jsxs)("div",{className:"p-3",children:[(0,s.jsxs)("h2",{className:" text-lg font-semibold text-gray-900 dark:text-white",children:[" ",i.length," Resources"]}),s.jsx("ul",{className:"max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400",children:i.slice(0,6).map((e,t)=>(0,s.jsxs)("li",{className:"flex items-center",children:[s.jsx("svg",{className:"w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:s.jsx("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"})}),s.jsx("h2",{className:"text-sm",children:s.jsx(a(),{href:`/posts/${e.slug}`,children:e.title})})]},t))})]})]})},t)})})});i()}catch(e){i(e)}})},6218:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.ImageConfigContext},5675:(e,t,r)=>{e.exports=r(5666)},8103:e=>{"use strict";e.exports=require("clsx")},1162:e=>{"use strict";e.exports=require("next-themes")},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{"use strict";e.exports=require("next/head")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},9101:e=>{"use strict";e.exports=require("react-feather")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},5272:e=>{"use strict";e.exports=import("@sindresorhus/slugify")},8748:e=>{"use strict";e.exports=import("react-children-utilities")},7147:e=>{"use strict";e.exports=require("fs")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},9796:e=>{"use strict";e.exports=require("zlib")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[567,424,859,843,964],()=>r(1496));module.exports=i})();
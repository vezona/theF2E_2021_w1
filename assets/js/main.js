import{o as d,c as p,a,r as m,b,d as _,w as g,F as f,e as y,n as w,f as $,t as u,p as S,g as I,j as P,h as k,u as R,i as B,k as T,v as H,l as V,m as X,q as Y,s as q}from"./vendor_1637060892392.js";const F=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&e(l)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}};F();var x=(n,o)=>{for(const[i,e]of o)n[i]=e;return n};const Q={},G={class:"bg-primary mt-4 p-3",text:"center sm white"},W=a("div",null,"\u7B2C\u4E09\u5C46the f2e \u7CBE\u795E\u6642\u5149\u5C4B ",-1),J=a("div",{class:"text-14px leading-relaxed"},[a("p",null,"\u8A2D\u8A08\uFF1A\u65E9\u9910"),a("p",null,"\u524D\u7AEF\uFF1A\u91D1\u91D1")],-1),K=[W,J];function Z(n,o,i,e,s,r){return d(),p("div",G,K)}var ee=x(Q,[["render",Z]]);const j=[{item:"\u63A2\u7D22\u666F\u9EDE",url:"/spots",value:"spots"},{item:"\u7BC0\u6176\u6D3B\u52D5",url:"/activities",value:"activities"},{item:"\u7F8E\u98DF",url:"/food",value:"food"},{item:"\u4F4F\u5BBF",url:"/living",value:"living"},{item:"\u4EA4\u901A",url:"/transportation",value:"transportation"},{item:"\u9435\u99AC\u884C",url:"/bike",value:"bike"}];var te="/theF2E_2021_w1/assets/svg/Logo-mobile.svg",oe="/theF2E_2021_w1/assets/svg/Logo-desktop.svg";const ae={setup(){const n=m(!1);return{navItems:j,isOpen:n,openMenu:()=>{n.value=!n.value}}}},L=n=>(S("data-v-2317b898"),n=n(),I(),n),se={class:"flex justify-between",p:"y-4 x-45px",border:"md:b-1 solid primary"},re=L(()=>a("img",{alt:"mob logo",src:te},null,-1)),ne=L(()=>a("img",{alt:"web logo",src:oe},null,-1)),ie={class:"flex items-center <md:hidden"},ce=L(()=>a("div",{class:"menu_icon_hamburger"},null,-1)),le=[ce];function de(n,o,i,e,s,r){const l=b("router-link");return d(),p("div",se,[_(l,{to:"/theF2E_2021_w1",class:"md:hidden self-center ml-auto z-10"},{default:g(()=>[re]),_:1}),_(l,{to:"/theF2E_2021_w1",class:"<md:hidden"},{default:g(()=>[ne]),_:1}),a("ul",ie,[(d(!0),p(f,null,y(e.navItems,t=>(d(),p("li",{key:t.item,class:"nav-item px-3 hover:text-primary",border:"not-last-of-type:r-2 gray-300"},[_(l,{to:t.url},{default:g(()=>[$(u(t.item),1)]),_:2},1032,["to"])]))),128))]),a("div",{class:w(["menu_icon md:hidden ml-auto flex",{hamburger_open:e.isOpen}]),onClick:o[0]||(o[0]=(...t)=>e.openMenu&&e.openMenu(...t))},le,2),a("div",{class:w(["mobSideContainer",[{open:e.isOpen},{close:!e.isOpen}]])},[(d(!0),p(f,null,y(e.navItems,t=>(d(),p("div",{class:"item w-1/2 mx-auto",key:t.item,text:"white xl center secondary",m:"y-5"},[_(l,{to:t.url},{default:g(()=>[$(u(t.item),1)]),_:2},1032,["to"])]))),128))],2)])}var pe=x(ae,[["render",de],["__scopeId","data-v-2317b898"]]);const _e={name:"App"};function ue(n,o,i,e,s,r){const l=pe,t=b("router-view"),c=ee;return d(),p(f,null,[_(l),_(t),_(c)],64)}var me=x(_e,[["render",ue]]);const he="modulepreload",D={},ve="/theF2E_2021_w1/",M=function(o,i){return!i||i.length===0?o():Promise.all(i.map(e=>{if(e=`${ve}${e}`,e in D)return;D[e]=!0;const s=e.endsWith(".css"),r=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const l=document.createElement("link");if(l.rel=s?"stylesheet":he,s||(l.as="script",l.crossOrigin=""),l.href=e,document.head.appendChild(l),s)return new Promise((t,c)=>{l.addEventListener("load",t),l.addEventListener("error",c)})})).then(()=>o())},fe={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},xe=a("path",{d:"M16 18a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5zm0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3z",fill:"currentColor"},null,-1),ge=a("path",{d:"M16 30l-8.436-9.949a35.076 35.076 0 0 1-.348-.451A10.889 10.889 0 0 1 5 13a11 11 0 0 1 22 0a10.884 10.884 0 0 1-2.215 6.597l-.001.003s-.3.394-.345.447zM8.812 18.395c.002 0 .234.308.287.374L16 26.908l6.91-8.15c.044-.055.278-.365.279-.366A8.901 8.901 0 0 0 25 13a9 9 0 1 0-18 0a8.905 8.905 0 0 0 1.813 5.395z",fill:"currentColor"},null,-1),ye=[xe,ge];function we(n,o){return d(),p("svg",fe,ye)}var z={name:"carbon-location",render:we};function A(){let n="05308bdea7aa47d58b246bd2412c3bdd",o="keE6SBYMXwKKTj8HWMexbSiRAZg",i=new Date().toGMTString(),e=new P("SHA-1","TEXT");e.setHMACKey(o,"TEXT"),e.update("x-date: "+i);let s=e.getHMAC("B64");return{Authorization:'hmac username="'+n+'", algorithm="hmac-sha1", headers="x-date", signature="'+s+'"',"X-Date":i}}const be={props:{},setup(n){const o=m([]);(async c=>{const N=await(await fetch(`https://ptx.transportdata.tw/MOTC/v2/${c}`,{headers:A()})).json();o.value=N,console.log("\u71B1\u9580\u65C5\u5BBF",o.value)})("Tourism/Hotel?$top=10&$filter=contains(Description,'\u71B1\u9580') and Picture/PictureUrl1 ne null&$format=JSON");const e=m(0);let s=0,r=[];return{data:o,currentOffset:e,swipe:c=>{s=c.touches[0].pageX,r.splice(0,r.length-1),r.push(s),r[0]>s&&e.value>-2e3?e.value-=5:(e.value+=5,e.value>=0&&(e.value=0))},webSwipe:c=>{console.log(c.movementX),c.movementX<0?e.value+=5:c.movementX===0&&c.movementY===0&&(e.value-=5)}}}},Ne={class:"overflow-hidden"},$e=["src"],ze={class:"cardInfo p-3"},Ae={class:"my-2 text-dark-400"},Ce={class:"flex items-center md:w-3/5 text-gray-400 text-14px"};function ke(n,o,i,e,s,r){const l=z,t=b("router-link");return d(),p("div",Ne,[a("div",{class:"flex",p:"x-45px",onTouchmove:o[0]||(o[0]=(...c)=>e.swipe&&e.swipe(...c)),onMousemove:o[1]||(o[1]=(...c)=>e.webSwipe&&e.webSwipe(...c)),style:k({transform:"translateX("+e.currentOffset+"px)"})},[(d(!0),p(f,null,y(e.data,c=>(d(),p("div",{class:"cardWrap px-2 flex-grow-0 flex-shrink-0 w-1/3 <sm:w-full",key:c.ID},[_(t,{to:"/",class:"card flex text-sm border-2 rounded-lg overflow-hidden <sm:block hover:border-2 hover:border-dark_green"},{default:g(()=>[a("img",{src:c.Picture.PictureUrl1,alt:"food picture",class:"h-200px w-2/3 <sm:w-full"},null,8,$e),a("div",ze,[a("h1",Ae,u(c.Name),1),a("p",Ce,[_(l,{class:"mr-1"}),a("span",null,u(c.City),1)])])]),_:2},1024)]))),128))],36)])}var Le=x(be,[["render",ke]]);const Me={props:{},setup(n){const o=m([]);return(async e=>{const r=await(await fetch(`https://ptx.transportdata.tw/MOTC/v2/${e}`,{headers:A()})).json();o.value=r,console.log("\u71B1\u9580\u7F8E\u98DF",o.value)})("Tourism/Restaurant?$top=4&$filter=contains(Description,'\u71B1\u9580') and Picture/PictureUrl1 ne null&$format=JSON"),{data:o}}},Se={class:"flex <md:block",p:"x-45px"},Ie=["src"],Te={class:"my-2 text-dark-400"},je={class:"flex items-center md:w-3/5 text-gray-400 text-14px"};function De(n,o,i,e,s,r){const l=z,t=b("router-link");return d(),p("div",Se,[(d(!0),p(f,null,y(e.data,c=>(d(),p("div",{class:"listWrap w-full px-2 <md:mb-5",key:c.ID},[_(t,{to:"/",class:"block card text-sm hover:filter hover:brightness-125"},{default:g(()=>[a("img",{src:c.Picture.PictureUrl1,alt:"food picture",class:"rounded-lg h-200px"},null,8,Ie),a("h1",Te,u(c.Name),1),a("p",je,[_(l,{class:"mr-1"}),a("span",null,u(c.City),1)])]),_:2},1024)]))),128))])}var Ee=x(Me,[["render",De]]);const Oe={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Ue=a("path",{d:"M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z",fill:"currentColor"},null,-1),Pe=[Ue];function Re(n,o){return d(),p("svg",Oe,Pe)}var E={name:"ic-baseline-keyboard-arrow-right",render:Re};const Be={props:{},setup(n){const o=new Date;o.getFullYear(),o.getMonth()+1,o.getDate();const i=m([]);return(async()=>{const r=await(await fetch("https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=4&$filter=contains(Description,'\u5FC5\u8A2A') and Picture/PictureUrl1 ne null&$format=JSON",{headers:A()})).json();i.value=r,console.log("\u5FC5\u8A2A\u666F\u9EDE",i.value)})(),{data:i}}},He={class:"flex flex-wrap",p:"x-45px"},Ve=["src"],Xe={class:"info p-2 bg-warm-gray-100 w-full relative"},Ye={class:"text-sm text-dark-400 font-bold"},qe={class:"text-xs mt-2 overflow-hidden text-eclip"},Fe={class:"text-12px font-thin w-full pr-4 mt-3 flex items-center justify-between"},Qe={class:"flex items-center md:w-3/5"},Ge={class:"flex items-center text-primary"},We=$("\u8A73\u7D30\u4ECB\u7D39 ");function Je(n,o,i,e,s,r){const l=z,t=E,c=b("router-link");return d(),p("div",He,[(d(!0),p(f,null,y(e.data,h=>(d(),p("div",{class:"w-1/2 p-2 <md:w-full",key:h.ID},[_(c,{to:"/",class:"block flex rounded-md overflow-hidden cursor-pointer sm:h-30 <sm:block hover:border-2 hover:border-dark_green"},{default:g(()=>[a("img",{class:"w-1/3 <sm:w-full",src:h.Picture.PictureUrl1,alt:""},null,8,Ve),a("div",Xe,[a("p",Ye,u(h.Name),1),a("p",qe,u(h.Description),1),a("div",Fe,[a("p",Qe,[_(l,{class:"mr-1"}),a("span",null,u(h.Address),1)]),a("p",Ge,[We,_(t)])])])]),_:2},1024)]))),128))])}var Ke=x(Be,[["render",Je],["__scopeId","data-v-bd9718a8"]]);const Ze={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},et=a("path",{d:"M6.23 20.23L8 22l10-10L8 2L6.23 3.77L14.46 12z",fill:"currentColor"},null,-1),tt=[et];function ot(n,o){return d(),p("svg",Ze,tt)}var at={name:"ic-baseline-arrow-forward-ios",render:ot};const st={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},rt=a("path",{d:"M17.77 3.77L16 2L6 12l10 10l1.77-1.77L9.54 12z",fill:"currentColor"},null,-1),nt=[rt];function it(n,o){return d(),p("svg",st,nt)}var ct={name:"ic-baseline-arrow-back-ios-new",render:it};const lt={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},dt=a("path",{d:"M9 10v2H7v-2h2m4 0v2h-2v-2h2m4 0v2h-2v-2h2m2-7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h1V1h2v2h8V1h2v2h1m0 16V8H5v11h14M9 14v2H7v-2h2m4 0v2h-2v-2h2m4 0v2h-2v-2h2z",fill:"currentColor"},null,-1),pt=[dt];function _t(n,o){return d(),p("svg",lt,pt)}var ut={name:"mdi-calendar-month",render:_t};const mt={props:{},setup(n){const o=new Date,i=o.getFullYear(),e=o.getMonth()+1;o.getDate();const s=m([]),r=m();(async N=>{const C=await(await fetch(`https://ptx.transportdata.tw/MOTC/v2/${N}`,{headers:A()})).json();s.value=C,r.value=s.value[0].Name,console.log(s.value)})(`Tourism/Activity?$top=4&$filter=year(StartTime) eq ${i} 
        and month(StartTime) eq ${e} and Picture/PictureUrl1 ne null
        &$format=JSON`);let t=m(0);return{activityList:s,currentActivity:r,prev:()=>{t.value--,r.value=s.value[t.value].Name},next:()=>{t.value++,r.value=s.value[t.value].Name},index:t}}},ht={class:"relative bg-warm-gray-100 md:h-350px <md:h-300px"},vt={class:"info p-2 bg-warm-gray-100 w-full relative <sm:w-1/2"},ft={class:"text-md text-dark-400 font-bold mb-2"},xt={class:"date flex items-center"},gt={class:"text-xs ml-2"},yt=$(" - "),wt={class:"text-xs"},bt={class:"text-12px flex items-center"},Nt=a("div",{class:"absolute bottom-2 font-thin w-1/2 mr-4"},[a("p",{class:"bg-dark_green w-full rounded-sm p-1",text:"xs white center"},"\u4E86\u89E3\u66F4\u591A ")],-1),$t=["src"],zt={class:"absolute relative top-150px w-full px-45px text-40px text-gray-300"};function At(n,o,i,e,s,r){const l=ut,t=z,c=b("router-link"),h=ct,N=at;return d(),p("div",ht,[(d(!0),p(f,null,y(e.activityList,v=>(d(),p("div",{class:"absolute w-full px-100px <sm:px-10px",key:v.ID},[_(c,{to:"/",class:w(["rounded-md py-5 md:h-350px <md:h-300px",{flex:v.Name===e.currentActivity,hidden:v.Name!==e.currentActivity}])},{default:g(()=>[a("div",vt,[a("p",ft,u(v.Name),1),a("div",xt,[_(l,{class:"text-xs"}),a("span",gt,u(v.StartTime.split("T")[0].split("-").join("/")),1),yt,a("span",wt,u(v.EndTime.split("T")[0].split("-").join("/")),1)]),a("div",bt,[_(t,{class:"mr-2"}),$(" "+u(v.Location),1)]),Nt]),a("img",{class:"w-1/2 rounded-md",src:v.Picture.PictureUrl1,alt:""},null,8,$t)]),_:2},1032,["class"])]))),128)),a("div",zt,[_(h,{class:w(["absolute left-2 cursor-pointer hover:text-dark_green",{hidden:e.index===0}]),onClick:e.prev},null,8,["onClick","class"]),_(N,{class:w(["absolute right-2 cursor-pointer hover:text-dark_green",{hidden:e.index===e.activityList.length-1}]),onClick:e.next},null,8,["onClick","class"])])])}var Ct=x(mt,[["render",At]]),kt="/theF2E_2021_w1/assets/jpg/taipei.jpg",Lt="/theF2E_2021_w1/assets/jpg/tainan.jpg",Mt="/theF2E_2021_w1/assets/jpg/hualien.jpg",St="/theF2E_2021_w1/assets/jpg/iLand.jpg",It="/theF2E_2021_w1/assets/jpg/taidong.jpg";const Tt={props:{},setup(n){const o=[{name:"\u53F0\u5357",value:"\u81FA\u5357\u5E02",image:Lt,url:"/cities?name=\u81FA\u5357\u5E02",describe:"\u81FA\u5357\u5E02\u662F\u81FA\u7063\u7684\u767C\u7965\u5730\uFF0C\u662F\u5168\u81FA\u6B77\u53F2\u6700\u60A0\u4E45\u7684\u90FD\u5E02\u3002\u9664\u4E86\u6B77\u53F2\u6587\u5316\u7279\u8272\u4E4B\u5916\uFF0C\u81FA\u5357\u66F4\u64C1\u6709\u5982\u8A69\u756B\u822C\u7684\u81EA\u7136\u751F\u614B\u7F8E\u666F\uFF0C\u53CA\u805E\u540D\u9050\u9087\u7684\u8FB2\u6F01\u7522\u54C1\u7279\u8272\u7F8E\u98DF"},{name:"\u82B1\u84EE",value:"\u82B1\u84EE\u7E23",image:Mt,url:"/cities?name=\u82B1\u84EE\u7E23",describe:"\u82B1\u84EE\u53E4\u7A31\u5947\u840A\uFF0C\u53C8\u56E0\u82B1\u84EE\u6EAA\u6771\u6CE8\u65BC\u6D77\uFF0C\u5176\u6C34\u8207\u6D77\u6FE4\u6FC0\u6D41\u8FC2\u8FF4\u6F8E\u6E43\uFF0C\u800C\u7A31\u70BA\u6D04\u703E\uFF0C\u5F8C\u4EBA\u8AE7\u5176\u97F3\u7A31\u70BA\u82B1\u84EE"},{name:"\u5B9C\u862D",value:"\u5B9C\u862D\u7E23",image:St,url:"/cities?name=\u5B9C\u862D\u7E23",describe:"\u4F4D\u8655\u81FA\u7063\u6771\u5317\u89D2\u7684\u5B9C\u862D\u7E23\uFF0C\u56FF\u65BC\u4E09\u9762\u80CC\u5C71\u3001\u4E00\u9762\u5411\u6D77\u7279\u6B8A\u5730\u5F62\uFF0C\u5B55\u80B2\u7368\u7279\u6587\u5316\u8207\u4EBA\u60C5\u5473\uFF0C\u5448\u73FE\u4EE5\u4E09\u751F\u5171\u69CB\u7684\u4E16\u5916\u6843\u6E90"},{name:"\u53F0\u6771",value:"\u81FA\u6771\u7E23",image:It,url:"/cities?name=\u81FA\u6771\u7E23",describe:"\u81FA\u6771\u64C1\u6709\u8C50\u5BCC\u7684\u751F\u614B\u8CC7\u6E90\uFF0C\u7121\u8AD6\u662F\u6D77\u5CB8\u3001\u9AD8\u5C71\u3001\u68EE\u6797\u3001\u6EAA\u8C37\uFF0C\u90FD\u4FDD\u6301\u8457\u81EA\u7136\u5B8C\u6574\u7684\u98A8\u8C8C\uFF0C\u4E26\u5B55\u80B2\u4E86\u591A\u6A23\u7684\u52D5\u690D\u7269\u7A2E\u985E\uFF0C\u8655\u8655\u90FD\u662F\u5929\u7136\u7F8E\u666F"},{name:"\u53F0\u5317",value:"\u53F0\u5317\u5E02",image:kt,url:"/cities?name=\u53F0\u5317\u5E02",describe:"\u5728\u81FA\u5317\uFF0C\u60A8\u6BCF\u500B\u6240\u5230\u4E4B\u8655\uFF0C\u591A\u6A23\u7684\u6587\u5316\u7279\u8CEA\u90FD\u5145\u6C9B\u9F13\u52D5\u8457\u3002\u96D5\u9F8D\u756B\u68DF\u7684\u5EDF\u5B87\u8207\u73FE\u4EE3\u7684\u8857\u9053\u5B8C\u7F8E\u543B\u5408\uFF0C\u9084\u6709\u8A31\u591A\u4E16\u754C\u7D1A\u9910\u5EF3\u96A8\u6642\u63D0\u4F9B\u60A8\u6700\u6B63\u7D71\u7684\u5404\u5F0F\u4E2D\u83EF\u6599\u7406\u3002\u5225\u5FD8\u4E86\uFF0C\u7F8E\u5473\u7684\u591C\u5E02\u5C0F\u5403\u4E0D\u50C5\u50C5\u5E36\u7D66\u60A8\u53E3\u8179\u7684\u6EFF\u8DB3\uFF0C\u66F4\u662F\u5F15\u9818\u60A8\u9AD4\u9A57\u81FA\u7063\u751F\u6D3B\u7684\u7406\u60F3\u53BB\u8655\u3002"}],i=m(),e=m(0);let s=0,r=[];return{popularCity:o,currentCity:i,currentOffset:e,swipe:t=>{s=t.touches[0].pageX,r.splice(0,r.length-1),r.push(s),r[0]>s&&e.value>-450?(console.log("\u5F80\u53F3"),e.value-=5):(e.value+=5,e.value>=0&&(e.value=0))}}}},jt={class:"<sm:overflow-hidden"};function Dt(n,o,i,e,s,r){const l=b("router-link");return d(),p("div",jt,[a("div",{class:"flex",p:"x-45px",onTouchmove:o[1]||(o[1]=(...t)=>e.swipe&&e.swipe(...t)),style:k({transform:"translateX("+e.currentOffset+"px)"})},[(d(!0),p(f,null,y(e.popularCity,t=>(d(),p("div",{class:"cityCard p-1 hover:cursor-pointer <sm:flex-grow-0 <sm:flex-shrink-0 <sm:w-1/2",key:t.value},[_(l,{to:t.url,class:"block bg-cover h-200px relative rounded-sm",style:k({"background-image":`url(${t.image})`}),onMouseover:c=>e.currentCity=t.name,onMouseleave:o[0]||(o[0]=c=>e.currentCity="")},{default:g(()=>[a("div",{class:w(["absolute w-full text-white font-bold p-2 bottom-0 overflow-hidden transition duration-400",{"h-1/2":t.name===e.currentCity,"h-40px":t.name!==e.currentCity,"bg-gray-100":t.name===e.currentCity}]),bg:"opacity-30"},[a("h1",null,u(t.name),1),a("p",{class:w(["text-xs font-thin h-60px line-clamp-3 overflow-hidden",{block:t.name===e.currentCity,hidden:t.name!==e.currentCity}])},u(t.describe),3)],2)]),_:2},1032,["to","style","onMouseover"])]))),128))],36)])}var Et=x(Tt,[["render",Dt],["__scopeId","data-v-68dfc168"]]);const Ot={props:{title:{type:String,required:!0},type:{type:String,required:!0},url:{type:String,required:!0}},setup(n){return{}}},Ut={class:"flex justify-between",p:"x-45px t-35px b-20px"},Pt={class:"text-2xl tracking-wide"};function Rt(n,o,i,e,s,r){const l=E,t=b("router-link");return d(),p("div",Ut,[a("h1",Pt,u(i.title),1),_(t,{to:i.url,class:"text-orange flex items-center text-xs"},{default:g(()=>[$(" \u67E5\u770B\u66F4\u591A"+u(i.type)+" ",1),_(l)]),_:1},8,["to"])])}var Bt=x(Ot,[["render",Rt]]);const Ht={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Vt=a("path",{d:"M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z",fill:"currentColor"},null,-1),Xt=[Vt];function Yt(n,o){return d(),p("svg",Ht,Xt)}var qt={name:"ic-round-arrow-drop-down",render:Yt};const O=[{cityNumber:"0",cityCode:"0000",cityName:"\u53F0\u5317\u5E02",areaList:[{areaName:"\u5317\u6295\u5340",zipcode:"112",sid:"9"},{areaName:"\u58EB\u6797\u5340",zipcode:"111",sid:"8"},{areaName:"\u5927\u540C\u5340",zipcode:"103",sid:"2"},{areaName:"\u4E2D\u5C71\u5340",zipcode:"104",sid:"3"},{areaName:"\u677E\u5C71\u5340",zipcode:"105",sid:"4"},{areaName:"\u5167\u6E56\u5340",zipcode:"114",sid:"10"},{areaName:"\u5357\u6E2F\u5340",zipcode:"115",sid:"11"},{areaName:"\u842C\u83EF\u5340",zipcode:"108",sid:"6"},{areaName:"\u4E2D\u6B63\u5340",zipcode:"100",sid:"1"},{areaName:"\u5927\u5B89\u5340",zipcode:"106",sid:"5"},{areaName:"\u4FE1\u7FA9\u5340",zipcode:"110",sid:"7"},{areaName:"\u6587\u5C71\u5340",zipcode:"116",sid:"12"}]},{cityNumber:"1",cityCode:"0001",cityName:"\u65B0\u5317\u5E02",areaList:[{areaName:"\u4E2D\u548C\u5340",zipcode:"235",sid:"27"},{areaName:"\u6C38\u548C\u5340",zipcode:"234",sid:"26"},{areaName:"\u677F\u6A4B\u5340",zipcode:"220",sid:"15"},{areaName:"\u65B0\u5E97\u5340",zipcode:"231",sid:"23"},{areaName:"\u65B0\u838A\u5340",zipcode:"242",sid:"33"},{areaName:"\u571F\u57CE\u5340",zipcode:"236",sid:"28"},{areaName:"\u4E09\u91CD\u5340",zipcode:"241",sid:"32"},{areaName:"\u8606\u6D32\u5340",zipcode:"247",sid:"36"},{areaName:"\u4E94\u80A1\u5340",zipcode:"248",sid:"37"},{areaName:"\u6CF0\u5C71\u5340",zipcode:"243",sid:"34"},{areaName:"\u6797\u53E3\u5340",zipcode:"244",sid:"35"},{areaName:"\u9DAF\u6B4C\u5340",zipcode:"239",sid:"31"},{areaName:"\u4E09\u5CFD\u5340",zipcode:"237",sid:"29"},{areaName:"\u6A39\u6797\u5340",zipcode:"238",sid:"30"},{areaName:"\u516B\u91CC\u5340",zipcode:"249",sid:"38"},{areaName:"\u6DE1\u6C34\u5340",zipcode:"251",sid:"39"},{areaName:"\u6C50\u6B62\u5340",zipcode:"221",sid:"16"}]},{cityNumber:"2",cityCode:"0002",cityName:"\u57FA\u9686\u5E02",areaList:[]},{cityNumber:"3",cityCode:"0004",cityName:"\u5B9C\u862D\u7E23",areaList:[]},{cityNumber:"4",cityCode:"0006",cityName:"\u65B0\u7AF9\u5E02",areaList:[{areaName:"\u6771\u3000\u5340",zipcode:"300",sid:"67"},{areaName:"\u5317\u3000\u5340",zipcode:"300",sid:"68"}]},{cityNumber:"5",cityCode:"0007",cityName:"\u65B0\u7AF9\u7E23",areaList:[{areaName:"\u7AF9\u5317\u5E02",zipcode:"302",sid:"70"}]},{cityNumber:"6",cityCode:"0008",cityName:"\u6843\u5712\u5E02",areaList:[{areaName:"\u6843\u5712\u5340",zipcode:"330",sid:"89"},{areaName:"\u4E2D\u58E2\u5340",zipcode:"320",sid:"83"},{areaName:"\u5E73\u93AE\u5340",zipcode:"324",sid:"84"},{areaName:"\u516B\u5FB7\u5340",zipcode:"334",sid:"91"},{areaName:"\u5927\u6EAA\u5340",zipcode:"335",sid:"92"},{areaName:"\u8606\u7AF9\u5340",zipcode:"338",sid:"95"},{areaName:"\u9F9C\u5C71\u5340",zipcode:"333",sid:"90"},{areaName:"\u9F8D\u6F6D\u5340",zipcode:"325",sid:"85"},{areaName:"\u5927\u5712\u5340",zipcode:"337",sid:"94"},{areaName:"\u89C0\u97F3\u5340",zipcode:"328",sid:"88"}]},{cityNumber:"8",cityCode:"0010",cityName:"\u53F0\u4E2D\u5E02",areaList:[{areaName:"\u897F\u5C6F\u5340",zipcode:"407",sid:"120"},{areaName:"\u5357\u5C6F\u5340",zipcode:"408",sid:"121"},{areaName:"\u5317\u5C6F\u5340",zipcode:"406",sid:"119"},{areaName:"\u5317\u3000\u5340",zipcode:"404",sid:"118"},{areaName:"\u897F\u3000\u5340",zipcode:"403",sid:"117"},{areaName:"\u6771\u3000\u5340",zipcode:"401",sid:"115"},{areaName:"\u5357\u3000\u5340",zipcode:"402",sid:"116"},{areaName:"\u6C99\u9E7F\u5340",zipcode:"433",sid:"136"},{areaName:"\u9F8D\u4E95\u5340",zipcode:"434",sid:"137"},{areaName:"\u70CF\u65E5\u5340",zipcode:"414",sid:"125"},{areaName:"\u9727\u5CF0\u5340",zipcode:"413",sid:"124"},{areaName:"\u5927\u91CC\u5340",zipcode:"412",sid:"123"},{areaName:"\u592A\u5E73\u5340",zipcode:"411",sid:"122"},{areaName:"\u8C50\u539F\u5340",zipcode:"420",sid:"126"}]},{cityNumber:"9",cityCode:"0012",cityName:"\u5F70\u5316\u7E23",areaList:[]},{cityNumber:"10",cityCode:"0013",cityName:"\u5357\u6295\u7E23",areaList:[]},{cityNumber:"13",cityCode:"0016",cityName:"\u96F2\u6797\u7E23",areaList:[]},{cityNumber:"14",cityCode:"0017",cityName:"\u53F0\u5357\u5E02",areaList:[{areaName:"\u6771\u3000\u5340",zipcode:"701",sid:"225"},{areaName:"\u6C38\u5EB7\u5340",zipcode:"710",sid:"231"}]},{cityNumber:"15",cityCode:"0019",cityName:"\u9AD8\u96C4\u5E02",areaList:[{areaName:"\u6960\u6893\u5340",zipcode:"811",sid:"270"},{areaName:"\u5DE6\u71DF\u5340",zipcode:"813",sid:"272"},{areaName:"\u9F13\u5C71\u5340",zipcode:"804",sid:"266"},{areaName:"\u4E09\u6C11\u5340",zipcode:"807",sid:"269"},{areaName:"\u524D\u91D1\u5340",zipcode:"801",sid:"263"},{areaName:"\u65B0\u8208\u5340",zipcode:"800",sid:"262"},{areaName:"\u82D3\u96C5\u5340",zipcode:"802",sid:"264"},{areaName:"\u524D\u93AE\u5340",zipcode:"806",sid:"268"},{areaName:"\u5C0F\u6E2F\u5340",zipcode:"812",sid:"271"},{areaName:"\u9CF3\u5C71\u5340",zipcode:"830",sid:"287"},{areaName:"\u4EC1\u6B66\u5340",zipcode:"814",sid:"275"},{areaName:"\u9CE5\u677E\u5340",zipcode:"833",sid:"290"},{areaName:"\u5927\u793E\u5340",zipcode:"815",sid:"276"},{areaName:"\u5CA1\u5C71\u5340",zipcode:"820",sid:"277"}]},{cityNumber:"18",cityCode:"0024",cityName:"\u5C4F\u6771\u7E23",areaList:[{areaName:"\u5C4F\u6771\u5E02",zipcode:"900",sid:"314"}]},{cityNumber:"20",cityCode:"0026",cityName:"\u82B1\u84EE\u7E23",areaList:[]}];var Ft="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGYSURBVHgB7VRNTsJQEJ4pkIArjtC3IZi4gBMIK6sbwwngBsIJ1BvgDcoJdGUgLvAGdCewKdyAlTEqHadACn19fW0NS2bz0s433zc/bx7AyRIMdU530ihDqdRBg24ZWgOgMp8rPh1aw0CcD234r4A7v6khec+MMOMwQLCgn3VLXLw5mQQ25EDjbcZJRiv69ppxIhEB98My0YCxNvOIBlfy+VUX9feV7DIU8IZMTh49UQGEWRki914QwQDCaZpwVuwquCAv/8Ac3vkp7WPBNqujIJgHu+Cj484sQIR2gEO4VAkoKqDa4ZeHUraBA2xdnEZAJvLUg84ZUr+xnEqA+7sMARDVpSO1pUgnlQA38yUUBthdzqz7w3/u9LpLRKGhImCGa5rHCZcilbzd4P1GS/nz7dpdAH0FPoh+qQcR25A2lOQe9VTkSoGdiM2zeIQU5u+IqI76cX7tY7eYW/xc+FnHQ3j5hMavv6ZUKLZ8kjhy7nsTEgyTAHFDJzDqovLqJMUnLppq6P580pBnMn57Hngm5E6v+nCyY9ofOwGjhpGXf8YAAAAASUVORK5CYII=";const Qt={props:{},setup(n){const o=R();B();const i=m(!1),e=()=>{i.value=!i.value};O.unshift({cityNumber:"",cityName:"\u4E0D\u5206\u7E23\u5E02"});const s=m("spots"),r=m("\u4E0D\u5206\u7E23\u5E02");return{navItems:j,isShow:i,showAreaList:e,cityCodeList:O,currentCity:r,chooseCity:c=>{i.value=!1,r.value=c.cityName,console.log(c.cityName)},currentItem:s,goToUrl:()=>{o.push(`/search/${s.value}`)}}}},U=n=>(S("data-v-8e8ced5a"),n=n(),I(),n),Gt={class:"keyWrap py-50px md:px-140px <md:px-50px m-auto"},Wt=U(()=>a("div",{class:"keyWords leading-10 text-light-100 mb-5"},[a("p",{class:"text-4xl leading-15 <sm:text-3xl"},[$("\u63A2\u7D22 "),a("span",{class:"lineMove font-medium"},"\u53F0\u7063\u4E4B\u7F8E")]),a("p",{class:"text-4xl <sm:text-3xl <sm:mt-3"},"\u8B93\u6211\u5011\u66F4\u89AA\u8FD1\u9019\u7247\u571F\u5730"),a("p",{class:"text-sm <sm:leading-none <sm:mt-4"},[a("img",{class:"inline-block",src:Ft,alt:"location icon"}),a("span",null,"\u53F0\u7063\u65C5\u904A\u666F\u9EDE\u5C0E\u89BD Taiwan Travel Guide")])],-1)),Jt={class:"mt-10 relative"},Kt={class:"searchWrap w-full p-5 rounded-sm flex flex-wrap justify-between items-center",bg:"light-50 opacity-30"},Zt=["value"],eo=U(()=>a("input",{type:"text",class:"rounded-sm flex-auto mr-3 box-border h-40px <lg:w-full <lg:mb-2","focus-visible":"outline-none border-2 border-dark_green",p:"y-1 x-2",placeholder:"\u8ACB\u8F38\u5165\u95DC\u9375\u5B57"},null,-1)),to={class:"areaList flex flex-wrap rounded-sm absolute top-80px z-1 w-3/5 <lg:top-90px <lg:w-11/12",bg:"white",border:"1 primary",m:"x-5",p:"t-2"},oo=["onClick"];function ao(n,o,i,e,s,r){const l=qt;return d(),p("div",Gt,[Wt,a("div",Jt,[a("div",Kt,[a("div",{name:"",id:"",class:"border-2 rounded-sm bg-white cursor-pointer flex justify-between item-center <lg:flex-grow",p:"y-1 x-2",m:"r-3",onClick:o[0]||(o[0]=(...t)=>e.showAreaList&&e.showAreaList(...t))},[a("span",null,u(e.currentCity),1),_(l,{class:w(["text-xl",{rotate:e.isShow}])},null,8,["class"])]),T(a("select",{name:"",id:"",class:"border-2 rounded-sm flex-auto mr-3 h-41px focus-visible:outline-none <lg:my-2",p:"x-2","onUpdate:modelValue":o[1]||(o[1]=t=>e.currentItem=t),onClick:o[2]||(o[2]=t=>e.isShow=!1)},[(d(!0),p(f,null,y(e.navItems,t=>(d(),p("option",{key:t.item,value:t.value},u(t.item),9,Zt))),128))],512),[[H,e.currentItem]]),eo,a("button",{type:"button",class:"bg-dark_green text-white px-10 rounded-md h-36px <lg:flex-auto <lg:mr-3",onClick:o[3]||(o[3]=(...t)=>e.goToUrl&&e.goToUrl(...t))}," \u67E5\u8A62 ")]),T(a("div",to,[(d(!0),p(f,null,y(e.cityCodeList,t=>(d(),p("p",{class:w(["border-2 m-2 px-2 py-1 rounded-lg cursor-pointer",{"border-primary":t.cityName===e.currentCity}]),key:t.cityNumber,onClick:c=>e.chooseCity(t)},u(t.cityName),11,oo))),128))],512),[[V,e.isShow]])])])}var so=x(Qt,[["render",ao],["__scopeId","data-v-8e8ced5a"]]);const ro={props:{},setup(n){return{}}};function no(n,o,i,e,s,r){const l=so,t=Bt,c=Et,h=Ct,N=Ke,v=Ee,C=Le;return d(),p(f,null,[_(l),_(t,{title:"\u71B1\u9580\u57CE\u5E02",type:"\u57CE\u5E02",url:"/search/"}),_(c),_(t,{title:"\u8FD1\u671F\u6D3B\u52D5",type:"\u6D3B\u52D5",url:"/search/"}),_(h),_(t,{title:"\u5FC5\u8A2A\u666F\u9EDE",type:"\u666F\u9EDE",url:"/search/"}),_(N),_(t,{title:"\u63A2\u8A62\u7F8E\u98DF",type:"\u7F8E\u98DF",url:"/search/"}),_(v),_(t,{title:"\u5BE6\u5728\u597D\u5BBF",type:"\u65C5\u5BBF",url:"/search/"}),_(C)],64)}var io=x(ro,[["render",no]]);const co=[{path:"/theF2E_2021_w1",name:"Home",component:io},{path:"/search",name:"search",component:()=>M(()=>import("./search_1637060892392.js"),["assets/js/search_1637060892392.js","assets/js/vendor_1637060892392.js"]),children:[{path:"spots",name:"Spots",component:()=>M(()=>import("./Spots_1637060892392.js"),["assets/js/Spots_1637060892392.js","assets/js/vendor_1637060892392.js"])}]},{path:"/cities",name:"cities",component:()=>M(()=>import("./Cities_1637060892392.js"),["assets/js/Cities_1637060892392.js","assets/js/vendor_1637060892392.js"])}],lo=X({history:Y(),routes:co});q(me).use(lo).mount("#app");export{x as _};

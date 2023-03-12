import{d as k,r as g,c as B,o as y,a as D,w as P,u,F as M,f as I,e as v,t as V,y as L,_ as N,s as H,b as p,j as l,i as C,v as m,k as h}from"./app.3985b09d.js";const $={class:"outer"},j=["infinite-scroll-disabled"],K={class:"list-item"},R={key:0,class:"tip"},J={key:1,class:"tip"},z=k({__name:"index",setup(_){let A=g(2),i=g(!1);const c=B(()=>A.value>=20);let d={delay:500,immediate:!0,disabled:!1,distance:0};function f(s,o){return Object.keys(d).reduce((n,a)=>{const e=s.getAttribute(`infinite-scroll-${a}`)||"";let t=o[e]??e??d[a];return t=t==="false"?!1:t,n[a]=t??d[`${a}`],n},{})}function q(s){let o=/(scroll)|(auto)/g;for(;s!=document.documentElement;){let n=getComputedStyle(s).overflow;if(o.test(n))return s;if(s.parentElement)s=s.parentElement;else{s=document.documentElement;return}}}function S(s,o=200){let n=null,a=!0;return()=>{if(!a)return;a=!1;const e=arguments;n=setTimeout(()=>{a=!0,clearTimeout(n),s.apply(window,e)},o)}}const F="infinite-scroll";function x(s,o){const{instance:n,observer:a,container:e}=s[F],{disabled:t,distance:r}=f(s,n);t||(e.scrollTop+e.clientHeight+Number(r)>=e.scrollHeight?o():a&&(a.disconnect(),delete s[F].observer))}const O={async mounted(s,o){const{instance:n,value:a}=o;await L();let{delay:e,immediate:t}=f(s,n),r=q(s);if(!r)return;let b=x.bind(null,s,a);if(n){if(s[F]={container:r,onScroll:b,instance:n,delay:e,cb:a},t){let E=new MutationObserver(b);s[F].observer=E,E.observe(r,{childList:!0,subtree:!0}),b()}r==null||r.addEventListener("scroll",S(b.bind(null,s,n),e))}},unmounted(s){var a;const{onScroll:o,container:n}=s[F];n&&(n.removeEventListener("scroll",o),(a=s[F].observer)==null||a.disconnect(),delete s[F].observer)}},T=B(()=>i.value||c.value),w=()=>{i.value=!0,setTimeout(()=>{A.value+=2,i.value=!1},1e3)};return(s,o)=>(y(),D("div",$,[P((y(),D("ul",{class:"list","infinite-scroll-delay":300,"infinite-scroll-distance":20,"infinite-scroll-immediate":!0,"infinite-scroll-disabled":u(T)},[(y(!0),D(M,null,I(u(A),n=>(y(),D("li",K,V(n),1))),256))],8,j)),[[O,w]]),u(i)?(y(),D("p",R,"加载中...")):v("",!0),u(c)?(y(),D("p",J,"没有更多了")):v("",!0)]))}});const G=N(z,[["__scopeId","data-v-50c55817"]]),Q=h("",3),U=p("li",null,"找到父级元素 container 有 overflow 为 auto 或者 scroll",-1),W=p("code",null,"new MutationObserver",-1),X=p("code",null,"MutationObserver",-1),Y=p("code",null,"load",-1),Z=p("li",null,[l("后续的话通过触发"),p("code",null,"container"),l(" 的滚动事件,不断执行"),p("code",null,"load"),l(" 方法即可")],-1),ss=p("hr",null,null,-1),ns=p("h1",{id:"基础用法",tabindex:"-1"},[l("基础用法 "),p("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#")],-1),as=p("blockquote",null,null,-1),ls=h("",5),es=JSON.parse('{"title":"无限滚动","description":"","frontmatter":{},"headers":[{"level":2,"title":"虚拟滚动的主要原理","slug":"虚拟滚动的主要原理","link":"#虚拟滚动的主要原理","children":[]}],"relativePath":"examples/infiniteScroll/index.md"}'),ps={name:"examples/infiniteScroll/index.md"},ts=Object.assign(ps,{setup(_){return(A,i)=>{const c=H("red");return y(),D("div",null,[Q,p("ol",null,[U,p("li",null,[l("如果有 immediate，使用"),W,l(" 监听"),C(c,null,{default:m(()=>[l("绑定的元素（el）")]),_:1})]),p("li",null,[X,l("监听是否触底，如果没有触底行为则执行"),C(c,{type:"success"},{default:m(()=>[l("v-infinite-scroll 绑定的函数(load)")]),_:1}),l("执行"),Y,l("函数则会填充列表，只要监听到触底行为，就"),C(c,null,{default:m(()=>[l("MutationObserver")]),_:1}),l(" 立即停止监听，"),C(c,null,{default:m(()=>[l("初始化填充完毕")]),_:1})]),Z]),ss,ns,as,C(G),ls])}}});export{es as __pageData,ts as default};

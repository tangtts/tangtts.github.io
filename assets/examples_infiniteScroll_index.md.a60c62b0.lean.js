import{d as k,r as g,c as B,o as D,a as C,w as P,u,F as M,f as I,e as v,t as V,z as L,_ as N,b as l,i,s as m,k as _,j as p,v as H}from"./app.58fe2863.js";const $={class:"outer"},j=["infinite-scroll-disabled"],K={class:"list-item"},R={key:0,class:"tip"},J={key:1,class:"tip"},z=k({setup(h){let b=g(2),A=g(!1);const c=B(()=>b.value>=20);let d={delay:500,immediate:!0,disabled:!1,distance:0};function f(s,o){return Object.keys(d).reduce((n,a)=>{var t,y;const e=s.getAttribute(`infinite-scroll-${a}`)||"";let r=(y=(t=o[e])!=null?t:e)!=null?y:d[a];return r=r==="false"?!1:r,n[a]=r!=null?r:d[`${a}`],n},{})}function q(s){let o=/(scroll)|(auto)/g;for(;s!=document.documentElement;){let n=getComputedStyle(s).overflow;if(o.test(n))return s;if(s.parentElement)s=s.parentElement;else{s=document.documentElement;return}}}function S(s,o=200){let n=null,a=!0;return()=>{if(!a)return;a=!1;const e=arguments;n=setTimeout(()=>{a=!0,clearTimeout(n),s.apply(window,e)},o)}}const F="infinite-scroll";function x(s,o){const{instance:n,observer:a,container:e}=s[F],{disabled:r,distance:t}=f(s,n);r||(e.scrollTop+e.clientHeight+Number(t)>=e.scrollHeight?o():a&&(a.disconnect(),delete s[F].observer))}const O={async mounted(s,o){const{instance:n,value:a}=o;await L();let{delay:e,immediate:r}=f(s,n),t=q(s);if(!t)return;let y=x.bind(null,s,a);if(!!n){if(s[F]={container:t,onScroll:y,instance:n,delay:e,cb:a},r){let E=new MutationObserver(y);s[F].observer=E,E.observe(t,{childList:!0,subtree:!0}),y()}t==null||t.addEventListener("scroll",S(y.bind(null,s,n),e))}},unmounted(s){var a;const{onScroll:o,container:n}=s[F];n&&(n.removeEventListener("scroll",o),(a=s[F].observer)==null||a.disconnect(),delete s[F].observer)}},T=B(()=>A.value||c.value),w=()=>{A.value=!0,setTimeout(()=>{b.value+=2,A.value=!1},1e3)};return(s,o)=>(D(),C("div",$,[P((D(),C("ul",{class:"list","infinite-scroll-delay":300,"infinite-scroll-distance":20,"infinite-scroll-immediate":!0,"infinite-scroll-disabled":u(T)},[(D(!0),C(M,null,I(u(b),n=>(D(),C("li",K,V(n),1))),256))],8,j)),[[O,w]]),u(A)?(D(),C("p",R,"\u52A0\u8F7D\u4E2D...")):v("",!0),u(c)?(D(),C("p",J,"\u6CA1\u6709\u66F4\u591A\u4E86")):v("",!0)]))}});const G=N(z,[["__scopeId","data-v-50c55817"]]),Q=_("",3),U=l("li",null,"\u627E\u5230\u7236\u7EA7\u5143\u7D20 container \u6709 overflow \u4E3A auto \u6216\u8005 scroll",-1),W=p("\u5982\u679C\u6709 immediate\uFF0C\u4F7F\u7528"),X=l("code",null,"new MutationObserver",-1),Y=p(" \u76D1\u542C"),Z=p("\u7ED1\u5B9A\u7684\u5143\u7D20\uFF08el\uFF09"),ss=l("code",null,"MutationObserver",-1),ns=p("\u76D1\u542C\u662F\u5426\u89E6\u5E95\uFF0C\u5982\u679C\u6CA1\u6709\u89E6\u5E95\u884C\u4E3A\u5219\u6267\u884C"),as=p("v-infinite-scroll \u7ED1\u5B9A\u7684\u51FD\u6570(load)"),ls=p("\u6267\u884C"),ps=l("code",null,"load",-1),os=p("\u51FD\u6570\u5219\u4F1A\u586B\u5145\u5217\u8868\uFF0C\u53EA\u8981\u76D1\u542C\u5230\u89E6\u5E95\u884C\u4E3A\uFF0C\u5C31"),es=p("MutationObserver"),ts=p(" \u7ACB\u5373\u505C\u6B62\u76D1\u542C\uFF0C"),rs=p("\u521D\u59CB\u5316\u586B\u5145\u5B8C\u6BD5"),cs=l("li",null,[p("\u540E\u7EED\u7684\u8BDD\u901A\u8FC7\u89E6\u53D1"),l("code",null,"container"),p(" \u7684\u6EDA\u52A8\u4E8B\u4EF6,\u4E0D\u65AD\u6267\u884C"),l("code",null,"load"),p(" \u65B9\u6CD5\u5373\u53EF")],-1),Fs=l("hr",null,null,-1),ys=l("h1",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[p("\u57FA\u7840\u7528\u6CD5 "),l("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#")],-1),Ds=l("blockquote",null,null,-1),Cs=_("",5),bs=JSON.parse('{"title":"\u65E0\u9650\u6EDA\u52A8","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u865A\u62DF\u6EDA\u52A8\u7684\u4E3B\u8981\u539F\u7406","slug":"\u865A\u62DF\u6EDA\u52A8\u7684\u4E3B\u8981\u539F\u7406","link":"#\u865A\u62DF\u6EDA\u52A8\u7684\u4E3B\u8981\u539F\u7406","children":[]}],"relativePath":"examples/infiniteScroll/index.md"}'),As={name:"examples/infiniteScroll/index.md"},us=Object.assign(As,{setup(h){return(b,A)=>{const c=H("red");return D(),C("div",null,[Q,l("ol",null,[U,l("li",null,[W,X,Y,i(c,null,{default:m(()=>[Z]),_:1})]),l("li",null,[ss,ns,i(c,null,{default:m(()=>[as]),_:1}),ls,ps,os,i(c,null,{default:m(()=>[es]),_:1}),ts,i(c,null,{default:m(()=>[rs]),_:1})]),cs]),Fs,ys,Ds,i(G),Cs])}}});export{bs as __pageData,us as default};

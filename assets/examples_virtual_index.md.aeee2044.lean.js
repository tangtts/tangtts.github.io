import{d as h,o as i,c as u,t as T,h as r,g as E,r as V,E as N,G as S,H as w,a as t,F as M,k as L,u as k,n as H,z as R,b as g,j as P,e as b,f as $}from"./app.aef898f2.js";const U={style:{padding:"0 10px","background-color":"#ecf5ff",border:"1px solid #fff",color:"#409eff",height:"50px","text-align":"center","line-height":"50px"}},j=h({__name:"userItem",props:{item:{type:Object,default:()=>[]}},setup(d){return(s,l)=>(i(),u("div",U,T(d.item.value),1))}}),O=["index","vid"],G=h({__name:"VirtualList",props:{items:{type:Array,default:()=>[]},size:{type:Number,default:40},remain:{type:Number,default:0},variable:{type:Boolean,default:!1}},setup(d){const s=d,l=r(0),y=r(s.remain),c=r(0),f=E(()=>{let a=l.value-D.value,p=y.value+B.value;return s.items.slice(a,p)}),D=E(()=>Math.min(l.value,s.remain)),B=E(()=>Math.min(y.value,s.items.length-y.value)),_=r(null),m=r(null);let n=V([]);N(()=>{S(()=>{let a=_.value;a&&(a==null||a.forEach(p=>{var x;let{height:e}=p.getBoundingClientRect(),o=+((x=p.getAttribute("vid"))!=null?x:0)-0,C=n[o].height-e;if(C){n[o].height=e,n[o].bottom=n[o].bottom-C;for(let A=o+1;A<n.length;A++)n[A].top=n[A-1].bottom,n[A].bottom=n[A].bottom-C}})),m.value.style.height=n[n.length-1].bottom+"px"})});const q=a=>{let p=0,e=n.length-1,o=null;for(;p<e;){let F=parseInt(String((p+e)/2)),C=n[F].bottom;if(C==a)return F;C<a?p=F+1:((o==null||o>F)&&(o=F),e=F-1)}return o},v=r(null),z=()=>{let a=v.value.scrollTop;s.variable?(l.value=q(a)||0,y.value=l.value+s.remain,c.value=n[l.value-D.value]?n[l.value-D.value].top:0):(l.value=Math.floor(a/s.size),y.value=l.value+s.remain,c.value=l.value*s.size-D.value*s.size)},I=()=>{n=s.items.map((a,p)=>({height:s.size,top:p*s.size,bottom:(p+1)*s.size}))};return w(()=>{v.value.style.height=s.remain*s.size+"px",m.value.style.height=s.items.length*s.size+"px",I()}),(a,p)=>(i(),u("div",{class:"viewport",ref_key:"viewport",ref:v,onScroll:z},[t("div",{class:"scroll-bar",ref_key:"scrollBar",ref:m},null,512),t("div",{class:"scroll-list",style:H({top:c.value+"px"})},[(i(!0),u(M,null,L(k(f),(e,o)=>(i(),u("div",{index:e.id,vid:e.id,ref_for:!0,ref_key:"itemsRefNode",ref:_},[R(a.$slots,"default",{item:e})],8,O))),256))],4)],544))}});const J=h({__name:"index",setup(d){const s=[];for(let c=0;c<100;c++)s.push({id:c,value:Math.random()*c});const l=r(8),y=r(40);return(c,f)=>(i(),u("div",null,[g(G,{items:s,remain:l.value,size:y.value,variable:!0},{default:P(({item:D})=>[g(j,{item:D},null,8,["item"])]),_:1},8,["remain","size"])]))}});const K=t("h1",{id:"\u865A\u62DF\u5217\u8868",tabindex:"-1"},[b("\u865A\u62DF\u5217\u8868 "),t("a",{class:"header-anchor",href:"#\u865A\u62DF\u5217\u8868","aria-hidden":"true"},"#")],-1),Q=t("p",null,"\u6EDA\u52A8\u81F3\u5E95\u90E8\u65F6\uFF0C\u52A0\u8F7D\u66F4\u591A\u6570\u636E\u3002",-1),W=t("blockquote",null,[t("p",null,"\u865A\u62DF\u6EDA\u52A8\u7684\u4E3B\u8981\u539F\u7406 \u5BF9\u4F20\u5165\u7684\u6570\u636E \u8FDB\u884C\u5207\u5272")],-1),X=t("h1",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[b("\u57FA\u7840\u7528\u6CD5 "),t("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#")],-1),Y=t("blockquote",null,null,-1),Z=$("",5),as=JSON.parse('{"title":"\u865A\u62DF\u5217\u8868","description":"","frontmatter":{},"headers":[],"relativePath":"examples/virtual/index.md"}'),ss={name:"examples/virtual/index.md"},ls=Object.assign(ss,{setup(d){return(s,l)=>(i(),u("div",null,[K,Q,W,X,Y,g(J),Z]))}});export{as as __pageData,ls as default};

import{d as D,r as i,w as C,o as c,c as r,a as s,t as p,_ as A,b as d,e as o,f as u}from"./app.aef898f2.js";const _={class:"outer"},h=D({__name:"index",setup(F){const n=i({isOutSide:!1,x:0,y:0}),e=function(a,t){window.addEventListener("click",l=>{l.composedPath().includes(a)?(console.log("\u70B9\u51FB\u7684\u91CC\u9762"),n.isOutSide=!0,t.value(l)):(n.isOutSide=!1,console.log("\u70B9\u51FB\u7684\u5916\u9762")),n.x=l.x,n.y=l.y})},y=a=>{console.log("\u6267\u884C\u56DE\u8C03\u51FD\u6570",a)};return(a,t)=>C((c(),r("div",_,[s("p",null," isOutSide:"+p(n.isOutSide),1),s("p",null," x:"+p(n.x),1),s("p",null," y:"+p(n.y),1)])),[[e,y]])}});const v=A(h,[["__scopeId","data-v-e61474a5"]]),x=s("h1",{id:"clickoutside",tabindex:"-1"},[o("clickOutside "),s("a",{class:"header-anchor",href:"#clickoutside","aria-hidden":"true"},"#")],-1),f=s("blockquote",null,[s("p",null,[o("\u70B9\u51FB\u5143\u7D20\u5185\u90E8/\u5916\u90E8\u6267\u884C\u4E0D\u540C\u7684\u64CD\u4F5C \u4E3B\u8981\u662F\u5229\u7528\u4E86 "),s("code",null,"e.composedPath().includes(el)"),o(" \u5224\u65AD\u662F\u5426\u5728\u91CC\u9762")])],-1),m=s("h1",{id:"docs",tabindex:"-1"},[o("Docs "),s("a",{class:"header-anchor",href:"#docs","aria-hidden":"true"},"#")],-1),g=u("",2),B=JSON.parse('{"title":"clickOutside","description":"","frontmatter":{},"headers":[],"relativePath":"directive/clickOutside/index.md"}'),E={name:"directive/clickOutside/index.md"},S=Object.assign(E,{setup(F){return(n,e)=>(c(),r("div",null,[x,f,m,s("div",null,[d(v)]),g]))}});export{B as __pageData,S as default};

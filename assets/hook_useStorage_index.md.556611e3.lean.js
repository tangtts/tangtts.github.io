import{N as U,O as M,r as S,c as x,d as k,x as j,m as N,l as H,o as g,a as f,w as Q,P as G,u as d,b as F,Q as W,C as O,_ as w,q as T,i as m,F as P,f as z,g as X,t as E,n as Y,A as Z,z as ss,s as h,j as V,k as J,v as ns}from"./app.58fe2863.js";import{a as as}from"./chunks/index.97d44ead.js";import{b as I}from"./chunks/index.f509a1e6.js";function ls(n={type:"localStorage",prefix:"",expire:1}){n=U(n)?M(n):n,n={...{type:"localStorage",prefix:"",expire:1},...n};const e=S([]);function a(r,p,c=0){if((p===""||p===null||p===void 0)&&(p=null),c&&(isNaN(c)||c<1))throw new Error("Expire must be a number");(c!=null?c:c=n.expire)*1e3;let o={value:p,time:Date.now(),expire:c};window[n.type].setItem(r,JSON.stringify(o));let l=e.value.findIndex(s=>s.key==r);l==-1?e.value.push({key:r,val:o}):e.value[l]={key:r,val:o}}function A(r){if(!window[n.type].getItem(r)||JSON.stringify(window[n.type].getItem(r))==="null")return null;const p=JSON.parse(window[n.type].getItem(r));let c=Date.now();return p.expire&&p.time+n.expire*1e3<c?(u(r),null):(a(r,p.value,p.expire),p.value)}const C=x(()=>{let r=window[n.type].length;e.value=[];for(let p=0;p<r;p++){let c=window[n.type].key(p);if(c){let o=window[n.type].getItem(c);try{e.value.push({key:c,val:JSON.parse(o)})}catch{}}}return e.value});function t(r){var c;return((c=n.prefix)!=null?c:"")+r}function u(r){window[n.type].removeItem(t(r)),e.value=e.value.filter(p=>p.key!==r)}function v(){window[n.type].clear(),e.value=[]}function b(r){return!!window[n.type].getItem(r)}function D(){return e.value.length||window[n.type].length}return{setStorage:a,getStorage:A,getAllStorage:C,autoAddPrefix:t,removeStorage:u,clearStorage:v,hasStorage:b,getStorageLength:D}}const ps={type:{type:String,default:"text"},modelValue:{type:[String,Number,Boolean],default:""},size:{type:String,default:"default"}},os={"update:modelValue":n=>!0,change:n=>!0},es=["type"],rs=k({props:ps,emits:os,setup(n,{emit:i}){const e=n;j(t=>({"83c25f62":d(a).height}));const a=N({height:0});H(()=>{e.size=="default"?a.height="50px":e.size=="large"?a.height="60px":a.height="30px"});const C=x({get(){return e.modelValue},set(t){i("update:modelValue",t)}});return(t,u)=>(g(),f("div",null,[Q(F("input",W({type:t.type},t.$attrs,{"onUpdate:modelValue":u[0]||(u[0]=v=>O(C)?C.value=v:null),class:"input"}),null,16,es),[[G,d(C)]])]))}});const q=w(rs,[["__scopeId","data-v-a4282097"]]),ts={options:{type:Array,default:()=>[]},modelValue:{type:[String,Number,Boolean],required:!0}},cs={"update:modelValue":n=>!0,change:n=>!0},Fs={class:"outer"},ys=["onClick"],Ds=k({props:ts,emits:cs,setup(n,{emit:i}){const e=n,a=S(!1),A=S(null),C=D=>e.modelValue==D;T(a,D=>{as(A.value),D?A.value.style.maxHeight="999px":A.value.style.maxHeight="0"});const t=D=>{a.value=!1,i("update:modelValue",D)},u=()=>{a.value=!0},v=()=>{a.value=!1},b=x({get(){return e.modelValue},set(D){i("update:modelValue",D)}});return(D,r)=>(g(),f("div",Fs,[m(q,{modelValue:d(b),"onUpdate:modelValue":r[0]||(r[0]=p=>O(b)?b.value=p:null),onFocus:u,onBlur:v},null,8,["modelValue"]),F("ul",{ref_key:"ulRef",ref:A,class:"content"},[(g(!0),f(P,null,z(D.options,(p,c)=>(g(),f("li",{onClick:o=>t(p.value),class:X(["option",{isActive:C(p.value)}]),key:c},E(p.value),11,ys))),128))],512)]))}});const is=w(Ds,[["__scopeId","data-v-9f1c481c"]]),As={modelValue:{type:Array,required:!0},size:{type:String,default:"default"},minusOne:{type:Function,default:()=>()=>{}}},Cs={"update:modelValue":n=>n},us=["liItem"],bs={key:1},ms={class:"emoij"},ds={class:"action"},gs=["onClick"],fs=["onClick"],vs=["onClick"],_s=["onClick"],Ss=k({props:As,emits:Cs,setup(n,{emit:i}){const e=n,a=S(e.modelValue);let A=0;T(()=>e.modelValue,o=>{o&&(a.value=o.map(l=>(l.id||(l.id=A++),l)))},{immediate:!0});const C=o=>{p(()=>{const l=a.value.findIndex(s=>s==o);a.value.splice(l+1,0,o)}),i("update:modelValue",a.value)},t=o=>{p(()=>{const l=a.value.findIndex(s=>s==o);!l||a.value.splice(l-1,2,a.value[l],a.value[l-1])}),i("update:modelValue",a.value)},u=o=>{p(()=>{const l=a.value.findIndex(s=>s==o);a.value.splice(l,1),a.value.unshift(o)}),i("update:modelValue",a.value)},v=o=>{p(()=>{a.value.splice(a.value.findIndex(l=>l==o),1),setTimeout(()=>{e.minusOne(o)},500)})},b=S([]),D=o=>{o&&b.value.push(o)},r=x(()=>e.size=="small"?{padding:"4px"}:e.size=="default"?{padding:"8px"}:{padding:"10px"});async function p(o){const l=Array.from(b.value),s=c(l);o(),await ss();const y=c(l);Object.keys(s).forEach(_=>{const B=y[_],R=s[_],$={left:R.left-B.left,top:R.top-B.top},L=[{transform:`translate(${$.left}px, ${$.top}px)`},{transform:"translate(0, 0)"}],K={duration:300,easing:"cubic-bezier(0,0,0.32,1)"};B.node.animate(L,K)})}function c(o){return o.reduce((l,s)=>{const y=s.getBoundingClientRect(),{left:_,top:B}=y;return s.attributes.liItem.value&&(l[s.attributes.liItem.value]={left:_,top:B,node:s}),l},[])}return(o,l)=>(g(),f("div",null,[F("ul",null,[(g(!0),f(P,null,z(a.value,(s,y)=>(g(),f("li",{style:Y(d(r)),key:s.id,liItem:"item"+s.id,class:"list-item",ref_for:!0,ref:D},[F("div",null,[o.$slots.default?Z(o.$slots,"default",{key:0,item:s},void 0,!0):(g(),f("div",bs,[F("span",ms,E(s.emoji),1),F("span",null,E(s.name),1)]))]),F("div",ds,[F("div",{class:"icon",onClick:_=>C(s)},"+",8,gs),F("div",{class:"icon",onClick:_=>v(s)},"-",8,fs),F("div",{class:"icon",onClick:_=>t(s)},"\u2191",8,vs),F("div",{class:"icon",onClick:_=>u(s)},"\u21EA",8,_s)])],12,us))),128))])]))}});const Es=w(Ss,[["__scopeId","data-v-151fdbbc"]]),Bs={class:"action"},hs=V("Setting Storage"),xs=V("clear Select Storage"),ks=V("clear All Storage"),ws={style:{"margin-bottom":"2px","font-size":"medium"}},Vs={style:{"font-size":"medium"}},Is=V("\u8FC7\u671F\u65F6\u95F4:"),qs=k({setup(n){const i=S([{label:"1\u79D2",value:"1"},{label:"1\u5206\u949F",value:"60"},{label:"1\u5C0F\u65F6",value:"3600"}]),{getAllStorage:e,removeStorage:a,clearStorage:A,setStorage:C}=ls(),t=N({key:"",value:"",expire:""});let u=[];const v=()=>{u.forEach(l=>{a(l.key)})},b=()=>{A()},D=l=>{a(l.key)};function r(l){return l.map(s=>({key:s.key,value:s.val.value,time:s.val.time,expire:s.val.expire}))}const p=S(x(()=>r(e.value))),c=l=>{for(const s in l)if(!l[s])return alert(`${s} \u7F3A\u5C11`),!1;return!0},o=async()=>{c(t)?C(t.key,t.value,Number(t.expire)):console.log("error submit!")};return(l,s)=>(g(),f("div",null,[m(q,{modelValue:d(t).key,"onUpdate:modelValue":s[0]||(s[0]=y=>d(t).key=y),placeholder:"Storage Key"},null,8,["modelValue"]),m(q,{style:{"margin-top":"5px"},modelValue:d(t).value,"onUpdate:modelValue":s[1]||(s[1]=y=>d(t).value=y),placeholder:"Storage value"},null,8,["modelValue"]),m(is,{style:{"margin-top":"5px"},modelValue:d(t).expire,"onUpdate:modelValue":s[2]||(s[2]=y=>d(t).expire=y),options:i.value},null,8,["modelValue","options"]),F("div",Bs,[m(I,{type:"warning",onClick:s[3]||(s[3]=y=>o())},{default:h(()=>[hs]),_:1}),m(I,{type:"danger",onClick:v},{default:h(()=>[xs]),_:1}),m(I,{onClick:b},{default:h(()=>[ks]),_:1})]),m(Es,{modelValue:p.value,"onUpdate:modelValue":s[4]||(s[4]=y=>p.value=y),minusOne:D},{default:h(({item:y})=>[F("div",ws,[F("span",null,"key: "+E(y.key),1),F("span",null," value:"+E(y.value),1)]),F("div",Vs,[Is,F("span",null,E(y.expire),1)])]),_:1},8,["modelValue"])]))}});const Rs=w(qs,[["__scopeId","data-v-ec0711fe"]]),$s=J("",3),Ns=J("",4),Js=JSON.parse('{"title":"useLocaleStorage","description":"","frontmatter":{},"headers":[],"relativePath":"hook/useStorage/index.md"}'),Os={name:"hook/useStorage/index.md"},Ls=Object.assign(Os,{setup(n){return(i,e)=>{const a=ns("ClientOnly");return g(),f("div",null,[$s,m(a,null,{default:h(()=>[F("div",null,[m(Rs)])]),_:1}),Ns])}}});export{Js as __pageData,Ls as default};

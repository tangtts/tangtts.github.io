import{b as u}from"./chunks/index.15a25e41.js";import{d as L,r as F,m as H,o as d,a as g,b as e,i as D,v as b,j as m,e as _,p as X,h as Y,_ as U,k as B}from"./app.3985b09d.js";const V=y=>(X("data-v-b5f9984b"),y=y(),Y(),y),W={class:"chooseArea"},N=["src"],O={key:0,style:{"margin-top":"20px"}},j=V(()=>e("div",{class:"center"},null,-1)),z={key:1,style:{"margin-top":"30px"}},P=["src"],$=L({__name:"index",setup(y){const C=F(""),a=H({startX:0,startY:0,startDrag:!1,lastLeft:0,lastTop:0}),c=F(1),f=F(null),A=F(null),x=F(null),i=F(""),w=s=>{const l=Array.from(s.target.files);let n=new FileReader;l.length&&n.readAsDataURL(l[0]),n.onload=function(p){var r;C.value=String((r=p.target)==null?void 0:r.result),A.value&&(A.value.onload=()=>v())}};function h(s){return Boolean(s)}function R(s){return Boolean(s)}const v=(s=a.lastLeft,l=a.lastTop)=>{const n=f.value,p=A.value;if(h(n)){const r=n.getContext("2d");if(r.clearRect(0,0,n.width,n.height),R(p)){let o=p.width,t=p.height;if(o>t){const E=n.width/o;o=n.width*c.value,t=E*t*c.value}else{const E=n.height/t;t=n.height*c.value,o=E*o*c.value}r.drawImage(p,(n.width-o)/2+s,(n.height-t)/2+l,o,t)}}},q=s=>{s=="shrink"?c.value-=.1:s=="zoom"&&(c.value+=.1),v()},k=()=>{const s=f.value;if(h(s)){const n=s.getContext("2d").getImageData(100,100,100,100);let p=document.createElement("canvas");p.width=100,p.height=100,p.getContext("2d").putImageData(n,0,0);let o=p.toDataURL();i.value=o}},T=()=>{const s=Buffer.from(i.value.split(",")[1],"base64"),l=new ArrayBuffer(s.length),n=new Blob([l],{type:"image/png"});console.log(n)},S=s=>{a.startX=s.clientX,a.startY=s.clientY,a.startDrag=!0},I=s=>{a.startDrag&&v(s.clientX-a.startX+a.lastLeft,s.clientY-a.startY+a.lastTop)},M=s=>{a.lastLeft=s.clientX-a.startX+a.lastLeft,a.lastTop=s.clientY-a.startY+a.lastTop,a.startDrag=!1};return(s,l)=>(d(),g("div",null,[e("div",W,[e("input",{type:"file",onChange:w},null,32),e("div",null,[e("img",{src:C.value,ref_key:"imageRef",ref:A,alt:""},null,8,N)])]),C.value?(d(),g("div",O,[e("div",{style:{position:"relative","margin-bottom":"10px"},onMousemove:I,onMousedown:S,onMouseup:M},[e("canvas",{width:"300",height:"300",style:{border:"2px dashed blue"},ref_key:"canvasRef",ref:f},null,512),j],32),e("div",null,[D(u,{style:{"margin-right":"10px"},type:"success",onClick:l[0]||(l[0]=n=>q("zoom"))},{default:b(()=>[m("放大")]),_:1}),D(u,{style:{"margin-right":"10px"},type:"warning",onClick:l[1]||(l[1]=n=>q("shrink"))},{default:b(()=>[m("缩小")]),_:1}),D(u,{onClick:k},{default:b(()=>[m("确定")]),_:1})])])):_("",!0),i.value?(d(),g("div",z,[e("img",{src:i.value,ref_key:"avatarRef",ref:x,class:"avatar",alt:""},null,8,P),D(u,{onClick:T},{default:b(()=>[m("上传")]),_:1})])):_("",!0)]))}});const Z=U($,[["__scopeId","data-v-b5f9984b"]]),J=B("",5),G=B("",1),ns=JSON.parse('{"title":"剪裁图片","description":"","frontmatter":{},"headers":[],"relativePath":"examples/jianCai/index.md"}'),K={name:"examples/jianCai/index.md"},as=Object.assign(K,{setup(y){return(C,a)=>(d(),g("div",null,[J,D(Z),G]))}});export{ns as __pageData,as as default};

import{d as _,u as d,n as k,a as f,w as x,r as h,o as a,c as r,e,t as n,f as t,F as v,p as b,k as g,b as y,q as C,j as N,g as j}from"./app-33f66ea4.js";const w=e("div",{"text-4xl":""},[e("div",{"i-carbon-pedestrian":"","inline-block":""})],-1),V={"text-sm":"","opacity-75":""},B={key:0,"text-sm":"","mt-4":""},L={"opacity-75":""},R=_({__name:"[name]",props:{name:{type:String,required:!0}},setup(l){const c=l,m=d(),i=k(),{t:s}=f();return x(()=>{i.setNewName(c.name)}),(S,u)=>{const p=h("RouterLink");return a(),r("div",null,[w,e("p",null,n(t(s)("intro.hi",{name:c.name})),1),e("p",V,[e("em",null,n(t(s)("intro.dynamic-route")),1)]),t(i).otherNames.length?(a(),r("p",B,[e("span",L,n(t(s)("intro.aka"))+":",1),e("ul",null,[(a(!0),r(v,null,b(t(i).otherNames,o=>(a(),r("li",{key:o},[y(p,{to:`/hi/${o}`,replace:""},{default:C(()=>[N(n(o),1)]),_:2},1032,["to"])]))),128))])])):g("v-if",!0),e("div",null,[e("button",{btn:"",m:"3 t6","text-sm":"",onClick:u[0]||(u[0]=o=>t(m).back())},n(t(s)("button.back")),1)])])}}}),E=j(R,[["__file","C:/_nextjsprojects/_angelika_proj/vitesse-main/src/pages/hi/[name].vue"]]);export{E as default};
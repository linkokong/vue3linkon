import{_ as h}from"./ExpansionPanel.vue_vue_type_style_index_0_lang-BriNEfi_.js";import{d as p,k as x,v as R,x as g,o as w,a as y,w as C,y as f,U as u,A as k}from"./index-BnkPjeMf.js";const M={class:"main"},P=p({__name:"CodeRain",setup(T){const o=x(null);function l(e,n,s,a,r,i){e.fillStyle="rgba(240,240,240,0.2)",e.fillRect(0,0,r,i);for(let t=0;t<s;t++){e.fillStyle=u.getRandomColor();const v=u.getRandomChar();e.font=`${a}px "Roboto Mono"`;const m=t*s,d=(n[t]+1)*a;e.fillText(v,m,d),d>i&&Math.random()>.9?n[t]=0:n[t]++}}function c(){!o.value||!o.value.clientWidth?setTimeout(()=>{c()},100):_()}function _(){const e=o.value.clientWidth*devicePixelRatio,n=o.value.clientHeight*devicePixelRatio;o.value.width=e,o.value.height=n;const s=o.value.getContext("2d"),a=20*devicePixelRatio,i=Math.floor(e/a),t=new Array(i).fill(0);l(s,t,i,a,e,n),setInterval(()=>{l(s,t,i,a,e,n)},50)}return R(()=>{g(()=>{setTimeout(()=>{c()},100)})}),(e,n)=>(w(),y(h,{title:"canvas代码雨",onPanelOpen:c},{"text-content":C(()=>[f("div",M,[f("canvas",{ref_key:"cvs",ref:o},null,512)])]),_:1}))}}),A=k(P,[["__scopeId","data-v-cf92703b"]]);export{A as default};

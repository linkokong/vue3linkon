import{_ as h}from"./ExpansionPanel.vue_vue_type_style_index_0_lang-CSTMBoBC.js";import{e as p,r as x,q as R,s as g,o as w,f as C,w as y,t as d,U as u,_ as k}from"./index-DqowDhzq.js";const M={class:"main"},P=p({__name:"CodeRain",setup(T){const o=x(null);function l(e,n,i,a,r,s){e.fillStyle="rgba(240,240,240,0.2)",e.fillRect(0,0,r,s);for(let t=0;t<i;t++){e.fillStyle=u.getRandomColor();const v=u.getRandomChar();e.font=`${a}px "Roboto Mono"`;const m=t*i,f=(n[t]+1)*a;e.fillText(v,m,f),f>s&&Math.random()>.9?n[t]=0:n[t]++}}function c(){!o.value||!o.value.clientWidth?setTimeout(()=>{c()},100):_()}function _(){const e=o.value.clientWidth*devicePixelRatio,n=o.value.clientHeight*devicePixelRatio;o.value.width=e,o.value.height=n;const i=o.value.getContext("2d"),a=20*devicePixelRatio,s=Math.floor(e/a),t=new Array(s).fill(0);l(i,t,s,a,e,n),setInterval(()=>{l(i,t,s,a,e,n)},50)}return R(()=>{g(()=>{setTimeout(()=>{c()},100)})}),(e,n)=>(w(),C(h,{title:"canvas代码雨",onPanelOpen:c},{"text-content":y(()=>[d("div",M,[d("canvas",{ref_key:"cvs",ref:o},null,512)])]),_:1}))}}),I=k(P,[["__scopeId","data-v-cf92703b"]]);export{I as default};

import{_ as h}from"./ExpansionPanel.vue_vue_type_style_index_0_lang-C2Vs6t4E.js";import{d as u,k as m,v as p,x as c,o as P,a as w,w as C,y as d,A as M}from"./index-BTDASzWO.js";const T={class:"container"},R=u({__name:"CanvasRandomTree",setup(g){const i=m(null);function s(e,t,n,a,o,f="#333"){if(a<10&&Math.random()<.3)return;if(a<2){e.beginPath(),e.arc(...t,10,0,2*Math.PI),e.fillStyle="#f40",e.fill();return}const l=[t[0]+n*Math.cos(o*Math.PI/180),t[1]+n*Math.sin(o*Math.PI/180)];e.beginPath(),e.moveTo(...t),e.lineTo(...l),e.lineWidth=a,e.fillStyle=f,e.lineCap="round",e.stroke(),s(e,l,n*.8,a*.8,o-20,f="#333"),s(e,l,n*.8,a*.8,o+20,f="#333")}function _(e){const t=e.getContext("2d");t.clearRect(0,0,e.width,e.height),e.width=e.offsetWidth*devicePixelRatio,e.height=e.offsetHeight*devicePixelRatio,t.translate(e.width/2,e.height),t.scale(1,-1),s(t,[0,0],120,35,90)}function r(){if(i.value)_(i.value);else{setTimeout(r,100);return}}return p(()=>{c(r)}),(e,t)=>(P(),w(h,{title:"利用Canvas画一个随机形状的树",onPanelOpen:r},{"text-content":C(()=>[d("div",T,[d("canvas",{ref_key:"canvas",ref:i},null,512)])]),_:1}))}}),B=M(R,[["__scopeId","data-v-09598c0b"]]);export{B as default};
import{_ as a}from"./ExpansionPanel.vue_vue_type_style_index_0_lang-DGxgljQY.js";import{d as l,k as m,v as p,o as v,a as g,w as f,y as e,A as q}from"./index-DEE77wOJ.js";const x=l({__name:"HoverBorder",setup(_){const n=m(null);let o=[];function u(t,i){const s=i.getBoundingClientRect(),d=(t.clientX-s.left-s.width/2)*(1/window.devicePixelRatio),c=(t.clientY-s.top-s.height/2)*(1/window.devicePixelRatio);i.style.setProperty("--x",`${d}px`),i.style.setProperty("--y",`${c}px`)}p(()=>{r()});function r(){if(!n.value){setTimeout(r,100);return}o=n.value.querySelectorAll(".card"),o.forEach(t=>{t.addEventListener("mousemove",i=>u(i,t))})}return(t,i)=>(v(),g(a,{title:"边框鼠标悬浮特效",onPanelOpen:r},{"text-content":f(()=>[e("div",{class:"main",ref_key:"container",ref:n},i[0]||(i[0]=[e("div",{class:"card"},[e("div",{class:"inner"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque eos nostrum qui rerum? Ad corporis dignissimos doloribus eligendi eveniet excepturi hic incidunt praesentium quidem ratione, repellendus tenetur ut vitae?")],-1),e("div",{class:"card"},[e("div",{class:"inner"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque eos nostrum qui rerum? Ad corporis dignissimos doloribus eligendi eveniet excepturi hic incidunt praesentium quidem ratione, repellendus tenetur ut vitae?")],-1),e("div",{class:"card"},[e("div",{class:"inner"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque eos nostrum qui rerum? Ad corporis dignissimos doloribus eligendi eveniet excepturi hic incidunt praesentium quidem ratione, repellendus tenetur ut vitae?")],-1),e("div",{class:"card"},[e("div",{class:"inner"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque eos nostrum qui rerum? Ad corporis dignissimos doloribus eligendi eveniet excepturi hic incidunt praesentium quidem ratione, repellendus tenetur ut vitae?")],-1),e("div",{class:"card"},[e("div",{class:"inner"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque eos nostrum qui rerum? Ad corporis dignissimos doloribus eligendi eveniet excepturi hic incidunt praesentium quidem ratione, repellendus tenetur ut vitae?")],-1)]),512)]),_:1}))}}),y=q(x,[["__scopeId","data-v-af98970e"]]);export{y as default};
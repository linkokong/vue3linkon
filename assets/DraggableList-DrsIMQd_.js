import{_}from"./ExpansionPanel.vue_vue_type_style_index_0_lang-CSTMBoBC.js";import{e as p,r as l,o as u,f as x,w as D,t as b,v as i,x as B,B as k,u as c,y,F as C,_ as I}from"./index-DqowDhzq.js";const w=p({__name:"DraggableList",setup(L){const f=l([0,1,2,3,4]),a=l(null),o=l(null);let n=l(null);function d(t){const e=t.target;setTimeout(()=>{o.value=Number(e.textContent)},0),t.dataTransfer&&(t.dataTransfer.effectAllowed="move"),n.value=e}function g(t){t.preventDefault();const e=t.target;if(a.value===null||n.value===null||e===a.value||e===n.value)return;const r=Array.from(a.value.children),s=r.indexOf(n.value),m=r.indexOf(e);s<m?a.value.insertBefore(n.value,e.nextElementSibling):a.value.insertBefore(n.value,e)}function v(){o.value=null}return(t,e)=>(u(),x(_,{title:"可拖拽list"},{"text-content":D(()=>[b("div",{class:"list",ref_key:"list",ref:a,onDragstart:d,onDragenter:g,onDragover:e[0]||(e[0]=r=>{r.preventDefault()}),onDragend:v},[(u(!0),i(C,null,B(c(f),(r,s)=>(u(),i("div",{key:s,draggable:!0,class:k(["list-item",{moving:c(o)==s}])},y(r),3))),128))],544)]),_:1}))}}),h=I(w,[["__scopeId","data-v-b254c2b7"]]);export{h as default};
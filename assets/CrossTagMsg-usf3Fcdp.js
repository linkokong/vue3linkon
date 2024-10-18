import{d as c,U as f,k as m,o as p,a as _,w as e,l as t,V as w,a6 as s,a9 as l,u as o,b1 as g,s as i,aR as k,b2 as C,q as v,av as x}from"./index-BnkPjeMf.js";import{M as V}from"./MarkdownPreview-DPZxMATa.js";import{_ as B}from"./ExpansionPanel.vue_vue_type_style_index_0_lang-BriNEfi_.js";import{C as M}from"./CodeHighLight-Ch5Pvwbt.js";import{B as b}from"./Broadcast-DkxlkkYB.js";import"./monokai-sublime-CD9-rurh.js";import"./_commonjsHelpers-CqkleIqs.js";const h=`### 常见解决方案
- BroadCast Channel （demo使用的方案）
- Service Worker
- LocalStorage window.onstorage
- Shared Worker 定时器轮询  setInterval
- IndexedDB 定时器轮询 setInterval
- cookie 定时器轮询 setInterval
- window.open window.postMessage
- Websocket
`,q=c({__name:"CrossTagMsg",setup(S){const d=f.formatMarkDown(h);function u(){window.open("/blank_tag","_blank")}const a=m("");return b.demo1.listenMsg(r=>{a.value=JSON.stringify(r)}),(r,n)=>(p(),_(B,{title:"跨标签页通讯"},{"text-content":e(()=>[t(x,null,{default:e(()=>[t(w,null,{default:e(()=>[s(t(g,null,{default:e(()=>n[0]||(n[0]=[i(" 接收到的消息: ")])),_:1},512),[[l,o(a)]]),s(t(k,null,{default:e(()=>[t(M,{content:o(a)},null,8,["content"])]),_:1},512),[[l,o(a)]]),t(C,null,{default:e(()=>[t(v,{onClick:u,variant:"outlined",color:"light-blue"},{default:e(()=>n[1]||(n[1]=[i(" 打开一个新的Tag页 ")])),_:1})]),_:1})]),_:1})]),_:1}),t(V,{text:o(d),title:"跨标签页通讯",lang:"markdown"},null,8,["text"])]),_:1}))}});export{q as default};

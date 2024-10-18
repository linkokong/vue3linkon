import{M as e}from"./MarkdownPreview-DtP-at91.js";import{_ as n}from"./ExpansionPanel.vue_vue_type_style_index_0_lang-DryMMxSS.js";import{d as a,U as o,o as r,a as s,w as l,l as i,u as d}from"./index-DygiovCP.js";import"./monokai-sublime-CD9-rurh.js";import"./_commonjsHelpers-CqkleIqs.js";const p=`\`\`\`html
<tempalte>
  <input type='text' v-model='add_list1' placeholder='双向绑定可能会导致页面渲染阻塞'>
  
  <input type='text' @keypress.enter='addTodo' placeholder='在敲击回车后才去处理'>
  <input type='text' v-model.lazy='add_list1' placeholder='等于监听change事件'>
  <div v-for='list in lists'>{{list}}</div>
</tempalte>
\`\`\`
\`\`\`javascript


<script setup>
function addTodo(e){
  this.add_list1=e.target.value
          //其他逻辑xxxx
}
<\/script>

\`\`\`
- 使用\`v-model\`双向绑定的试图。在数据发生变化的时候，会触发文本框的input时间。同时重新渲染视图，导致渲染主线程可能会发生阻塞
- 使用\`@keypress.enter\`注册一个回车事件，在该事件内赋值并处理一些其他事情。但是使用\`e.target.value\`相当于操作真实dom
- 使用\`v-model.lazy\`延迟绑定，相当于监听了change事件。但是会导致在某个时间段内，输入框的内容和绑定的值不一致。

- 需要按照实际情况，考虑使用那种方式更适合当前的需求场景
`,w=a({__name:"TwowayBind",setup(c){const t=o.formatMarkDown(p);return(m,_)=>(r(),s(n,{title:"双向绑定的效率问题"},{"text-content":l(()=>[i(e,{text:d(t),lang:"markdown"},null,8,["text"])]),_:1}))}});export{w as default};

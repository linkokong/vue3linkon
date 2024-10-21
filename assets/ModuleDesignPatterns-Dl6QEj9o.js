import{M as t}from"./MarkdownPreview-pR_3Cx8W.js";import{_ as e}from"./ExpansionPanel.vue_vue_type_style_index_0_lang-CSTMBoBC.js";import{e as o,U as a,o as r,f as s,w as c,i,u as m}from"./index-DqowDhzq.js";import"./monokai-sublime-CD9-rurh.js";import"./_commonjsHelpers-CqkleIqs.js";const _=`### 组件设计时，要遵从展示组件和容器组件分离的原则

### 展示组件（内容展示）
- 只关心要展示的内容，按照传递的配置和数据进行展示，不进行数据的逻辑处理 
- 比如只关心按钮的文字内容或css样式，但是点击按钮之后要怎么做，不关心。
### 容器组件（数据逻辑）
- 在容器组件中使用展示组件。
- 给展示组件传递显示配置，传递交互逻辑

### 例：设计一个订单的表单输入的通用组件。需要能够有新增和变更订单的功能
#### 展示组件：
   - 包括订单名，订单金额，订单数量的输入框，订单ID的输入框。
   - 包括1个提交按钮。
#### 创建一个容器组件。
   - 为展示组件，提供订单名的输入，订单数量的输入等等，以及提交按钮提交之后的api调用。提交按钮显示文字是（创建还是修改）
`,M=o({__name:"ModuleDesignPatterns",setup(p){const n=a.formatMarkDown(_);return(f,l)=>(r(),s(e,{title:"模块组件的设计模式"},{"text-content":c(()=>[i(t,{text:m(n),lang:"markdown"},null,8,["text"])]),_:1}))}});export{M as default};

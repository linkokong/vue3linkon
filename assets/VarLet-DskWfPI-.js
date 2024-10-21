import{_ as n}from"./ExpansionPanel.vue_vue_type_style_index_0_lang-zB7LKfCA.js";import{M as e}from"./MarkdownPreview-JLjz2OJy.js";import{d as t,o as a,a as o,w as r,l,u as s}from"./index-D6aLrLJk.js";import"./monokai-sublime-CD9-rurh.js";import"./_commonjsHelpers-CqkleIqs.js";const c=`### 全局污染
\`\`\`javascript
var a=1
console.log(window.a)  //1 
let b=1
console.log(window.b) //undefined
\`\`\`
\`\`\`html
都可跨标签使用
<script>
    var a=1
    let b=2
<\/script>
<script >
    console.log(a) //1
    console.log(b) //2
<\/script>
\`\`\`

### 块级作用域（详见ES6说明）
### TDZ暂时性死区
\`\`\`javascript
console.log(a)  //返回 undefined
var a=1
console.log(b)  //报错 ，引用未找到
let b=2  //在块级作用域顶端会形成一个暂时性死区
\`\`\`
### 重复声明
\`\`\`javascript
var a=1
var a=2
console.log(a)  //2

let b=1
let b=2 //报错 重复声明

var c=3
let c=4 //报错 重复声明

let d=3
var d=4 //报错 重复声明
\`\`\`

`,u=t({__name:"VarLet",setup(i){return(p,d)=>(a(),o(n,{title:"var和let的区别"},{"text-content":r(()=>[l(e,{text:s(c),lang:"markdown"},null,8,["text"])]),_:1}))}});export{u as default};

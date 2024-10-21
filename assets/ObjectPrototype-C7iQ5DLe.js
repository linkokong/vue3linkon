import{_ as a}from"./ExpansionPanel.vue_vue_type_style_index_0_lang-zB7LKfCA.js";import{M as c}from"./MarkdownPreview-JLjz2OJy.js";import{C as s}from"./CodeAlert-CIu82PVg.js";import{C as l}from"./CodeHighLight-Cmu8EE8r.js";import{Q as p}from"./QuestionTabs-BM-ov4Ot.js";import{d as i,o as u,a as m,w as e,l as t,s as o,y as r,u as b}from"./index-D6aLrLJk.js";import"./monokai-sublime-CD9-rurh.js";import"./_commonjsHelpers-CqkleIqs.js";import"./VContainer-D2r3ldru.js";const f=`### Object.prototype 本身内部是有很多属性的
\`\`\`javascript
console.log(Object.prototype)
\`\`\`
### 每一个属性都对应一个 属性描述符（property descriptor）
- 属性描述符本身也是一个对象
- 如何查看某个对象属性的 属性描述符
\`\`\`javascript
let aa= Object.getOwnPropertyDescriptor(Object.prototype,'toString')
console.log(aa)
// {
//    "value":[Function (anonymous)],
//    "writable": true,  // 可否被重新赋值
//    "enumerable": false, // 可否被遍历的
//    "configurable": true // 表示 属性描述符 本身 是否可被修改
// }
\`\`\`

### 如何为新属性添加一个属性描述符

\`\`\`javascript
Object.defineProperty(Object.prototype,'c',{
   "value":function(){console.log('c')},
   "writable": true,
   "enumerable": false, // 不可 被遍历的
   "configurable": true 
})
\`\`\`

`,j=`var obj ={
  a:1,
  b:2
}
Object.prototype.c=function(){console.log('c')}
console.log(Object.prototype)
for(var key in obj){
    console.log(key)  //为什么只能输出 a,b,c 3个属性
}
`,B=i({__name:"ObjectPrototype",setup(d){return(g,n)=>(u(),m(a,{title:"对象属性描述符"},{"text-content":e(()=>[t(s,null,{title:e(()=>n[0]||(n[0]=[o(" Q：下面这个 "),r("code",null,"obj",-1),o(" 对象，为什么 "),r("code",null,"c",-1),o("属性可以被遍历出来，而继承的 Object其他属性无法被遍历 ")])),_:1}),t(p,null,{question:e(()=>[t(l,{content:j,lang:"javascript"})]),answer:e(()=>[t(c,{text:b(f),lang:"markdown"},null,8,["text"])]),_:1})]),_:1}))}});export{B as default};

import{_ as n}from"./ExpansionPanel.vue_vue_type_style_index_0_lang-zB7LKfCA.js";import{M as e}from"./MarkdownPreview-JLjz2OJy.js";import{d as t,o,a as r,w as a,l as m,u as s}from"./index-D6aLrLJk.js";import"./monokai-sublime-CD9-rurh.js";import"./_commonjsHelpers-CqkleIqs.js";const i=`#### 数据类型（只有八种） ES6之后
- 原始类型 7种
\`\`\`html
类型             |typeof的值
Number          |number
String          |string
Boolean         |boolean
Symbol(ES6)     |symbol
BigInt(ES6)     |bigint
Undefined       |undefined  
Null            |object  
\`\`\`
- 对象类型
\`\`\`html
Object          | object 或 function(带有一个[call]方法)
\`\`\`
#### 原型的作用
\`\`\`html
为了实现面向对象。
因为JS语言要实现面向对象，而原型是面向对象的实现手段之一。
一个能支持面向对象的语言，必须做到一点：能判定一个实例的类型。
在JS中国通原型就可以知道某个对象是属于什么类型。
原型的存在避免了类型的丢失
\`\`\`
##### 实现面向对象的方式（要保证对象的类型可追溯）
- 类型元数据 或 原型

### GET和POST的区别

- 协议层面： 语义区别而已
- 应用层面：GET的请求体为空（不代表不可带请求体）
- 浏览器层面：GET有请求记录 POST没有请求记录 等等

### Promise解决了什么问题
- 统一JS中的异步实现方案。
- 统一实现方案可有效的降低心智负担，更可以让不同的异步场景互相联动。
- Promise并不能消除回调，只不过是通过链式调用的方式，让回调更可控一些。

### 什么是VUE的响应式
- 初衷是为了实现数据和函数的联动，当数据变化后，可以让用到该数据的联动函数自动重新运行。
- 数据和组件的render函数关联在一起，从而实现了自动运行render。感觉就像组件重新渲染了。
- 除了render函数，computed watch等都是vue的响应式的使用场景
`,b=t({__name:"JsBase",setup(c){return(l,d)=>(o(),r(n,{title:"JS基础面试题"},{"text-content":a(()=>[m(e,{text:s(i),lang:"markdown"},null,8,["text"])]),_:1}))}});export{b as default};

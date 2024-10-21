import{C as e}from"./CodeHighLight-69e9ifWU.js";import{_ as n}from"./ExpansionPanel.vue_vue_type_style_index_0_lang-CSTMBoBC.js";import{e as d,o as t,f as i,w as o,i as u}from"./index-DqowDhzq.js";import"./monokai-sublime-CD9-rurh.js";import"./_commonjsHelpers-CqkleIqs.js";const r=`/**
* 定义一个变量名为 null
*/
var null        // 报错 关键字不可作为变量名

/**
* 定义一个变量名为 true
*/
var true      // 报错 关键字不可作为变量名

/**
* 定义一个变量名字为 undefined
*/
let undefined  // 不报错 值就是 undefined

/**
* undefined 为window的全局属性
*/
window.undefined
'undefined' in window  // 输出 true

/**
* 定义 全局作用域变量 名字叫做 undefined的变量 值永远为undefined
*/
var undefined = 10
console.log(undefined)   // 输出还是 undefined 。不会显示10


/**
* 定义 函数 作用域变量 名字叫做 undefined的变量 值为10
*/
function m(){
  var undefined = 10
  console.log(undefined)
}
m() // 输出为10

/**
* 安全的定义一个 undefined
*/
let a = void 0
`,w=d({__name:"NumericFormat",setup(a){return(f,c)=>(t(),i(n,{title:"变量命名"},{"text-content":o(()=>[u(e,{content:r,lang:"javascript"})]),_:1}))}});export{w as default};
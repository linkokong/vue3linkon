import{C as t}from"./CodeHighLight-BKoxJXzn.js";import{_ as e}from"./ExpansionPanel.vue_vue_type_style_index_0_lang-C2Vs6t4E.js";import{d as o,o as a,a as r,w as n,l as i}from"./index-BTDASzWO.js";import"./monokai-sublime-CD9-rurh.js";import"./_commonjsHelpers-CqkleIqs.js";const c=`/**
* 开头有0的数字，会默认被转化成8进制数字
*/
let a=01        // 1
let b=09        // 9
let c=010       // 8  被转换成了8进制

/**
* 定义一个数字为2进制，要使用 0b 开头
*/
let d=0b10      // 2

/**
* 定义一个数字为8进制，要使用 0o 开头
*/
let d=0o10      // 8

/**
* 定义一个数字为16进制，要使用 0x 开头
*/
let d=0xabcdef  // 11259375

/**
* 数字直接调用 toString()方法
*/
11.toString()   //报错。js认为toString()是数字11后面的小数部分
11..toString()  // '11'
`,u=o({__name:"NumericLiterals",setup(s){return(l,m)=>(a(),r(e,{title:"数字字面量"},{"text-content":n(()=>[i(t,{content:c,lang:"javascript"})]),_:1}))}});export{u as default};

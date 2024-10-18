import{C as o}from"./CodeHighLight-BnWlyMHw.js";import{_ as r}from"./ExpansionPanel.vue_vue_type_style_index_0_lang-DryMMxSS.js";import{C as c}from"./CodeAlert-BYQCT3Yz.js";import{d as i,o as s,a as d,w as n,l as t,s as a,y as u,u as l}from"./index-DygiovCP.js";import"./monokai-sublime-CD9-rurh.js";import"./_commonjsHelpers-CqkleIqs.js";const f=`let a = ([][[]] + [])[+!![]] +([] + {})[+!![] + +!![]]
//计算过程
a=([][''] + [])[+!![]] +([] + {})[+!![] + +!![]]  //[]原始值是 ''
a=(undefined + [])[+!![]] +([] + {})[+!![] + +!![]]  // [][''] 空数组中，不存在 ''的key
a=(undefined + '')[+!![]] +([] + {})[+!![] + +!![]]  // []原始值是 ''
a='undefined'[+!![]] +([] + {})[+!![] + +!![]]  // 转化为字符串了
a='undefined'[+true] +([] + {})[+!![] + +!![]]  //!![] 值为true  , !! 为布尔判定
a='undefined'[1] +([] + {})[+!![] + +!![]]  //+true 值为1
a='n' +([] + {})[+!![] + +!![]]  //+true 值为1
a='n' +('' + {})[+!![] + +!![]]  //[]原始值是 ''
a='n' +('' + '[object,Object]')[+!![] + +!![]]  //{} 原始值是 '[object,Object]' 会调用 {}.toString()方法
a='n' +('[object,Object]')[+!![] + +!![]]
a='n' +('[object,Object]')[1 + 1]  // +!![]值是 1
a='n' +('[object,Object]')[2]  // +!![]值是 1
a='n' +'b'  // 取index=2的字符串
a= 'nb' //最终输出
`,O=i({__name:"NBString",setup(m){return(p,e)=>(s(),d(r,{title:"运算结果分析"},{"text-content":n(()=>[t(c,null,{title:n(()=>e[0]||(e[0]=[a(" Q：写出 "),u("code",null," console.log(([][[]] + [])[+!![]] +([] + {})[+!![] + +!![]]) ",-1),a("的输出值，和计算过程。 ")])),_:1}),t(o,{content:l(f),lang:"javascript"},null,8,["content"])]),_:1}))}});export{O as default};

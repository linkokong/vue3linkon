import{C as e}from"./CodeHighLight-69e9ifWU.js";import{_ as t}from"./ExpansionPanel.vue_vue_type_style_index_0_lang-CSTMBoBC.js";import{C as n}from"./CodeAlert-Sgmpw6mN.js";import{Q as s}from"./QuestionTabs-TRrX1txu.js";import{e as l,o as c,f as i,w as r,i as o,l as f}from"./index-DqowDhzq.js";import"./monokai-sublime-CD9-rurh.js";import"./_commonjsHelpers-CqkleIqs.js";import"./VContainer-CsV1yrE_.js";const m=`var foo = { bar: 1 };
var arr1 =[1,2,foo];
var arr2= arr1.slice(1);
arr2[0]++;
arr2[1].bar++;
foo.bar++;
arr1[2].bar++;

//问：
console.log(arr1[1]===arr2[0])
console.log(arr1[2]===arr2[1])
console.log(foo.bar)
`,p=`
console.log(arr1[1]===arr2[0])    // false
console.log(arr1[2]===arr2[1])    // true
console.log(foo.bar)              // 4
`,Q=l({__name:"ValueReferenceType",setup(_){return(g,a)=>(c(),i(t,{title:"值类型和引用类型"},{"text-content":r(()=>[o(n,null,{title:r(()=>a[0]||(a[0]=[f(" Q：写出下列console.log 输出的内容 ")])),_:1}),o(s,null,{question:r(()=>[o(e,{content:m,lang:"javascript"})]),answer:r(()=>[o(e,{content:p,lang:"javascript"})]),_:1})]),_:1}))}});export{Q as default};

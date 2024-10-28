import{C as e}from"./CodeHighLight-D6HqHaaZ.js";import{_ as t}from"./ExpansionPanel.vue_vue_type_style_index_0_lang-D9psg00O.js";import{C as s}from"./CodeAlert-B3RkFIQA.js";import{Q as n}from"./QuestionTabs-CrKNQHH2.js";import{d as l,o as c,a as i,w as r,l as o,s as m}from"./index-DCBbo-ZP.js";import"./monokai-sublime-CD9-rurh.js";import"./_commonjsHelpers-CqkleIqs.js";import"./VContainer-e6QOzsG0.js";const p=`var foo = { bar: 1 };
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
`,f=`
console.log(arr1[1]===arr2[0])    // false
console.log(arr1[2]===arr2[1])    // true
console.log(foo.bar)              // 4
`,Q=l({__name:"ValueReferenceType",setup(_){return(g,a)=>(c(),i(t,{title:"值类型和引用类型"},{"text-content":r(()=>[o(s,null,{title:r(()=>a[0]||(a[0]=[m(" Q：写出下列console.log 输出的内容 ")])),_:1}),o(n,null,{question:r(()=>[o(e,{content:p,lang:"javascript"})]),answer:r(()=>[o(e,{content:f,lang:"javascript"})]),_:1})]),_:1}))}});export{Q as default};

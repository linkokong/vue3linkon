import{C as t}from"./CodeHighLight-69e9ifWU.js";import{_ as r}from"./ExpansionPanel.vue_vue_type_style_index_0_lang-CSTMBoBC.js";import{C as s}from"./CodeAlert-Sgmpw6mN.js";import{Q as i}from"./QuestionTabs-TRrX1txu.js";import{M as l}from"./MarkdownPreview-pR_3Cx8W.js";import{e as c,o as m,f as x,w as a,i as o,l as n,t as p}from"./index-DqowDhzq.js";import"./monokai-sublime-CD9-rurh.js";import"./_commonjsHelpers-CqkleIqs.js";import"./VContainer-CsV1yrE_.js";const d=`var a={n:1};
var b=a;
a.x=a={n:2};

console.log(a.x);
console.log(b.x);
`,f=`console.log(a.x); // undefined
console.log(b.x); // {n:2}
`,_=`
#### 过程解析：
var a={n:1}; //在内存中生成一个 {n:1}的堆，称为A堆
var b=a; // 定义一个变量b，b的指针指到 A堆上

// 拆解 a.x=a={n:2};
// 1.首先创建一个堆{n:2} 称之为B堆
// 2.运算 a={n:2}，此时变量a的指针指到了B堆上。同时运算结果会返回 {n:2}称为C堆， 此时的a内 是没有x这个key的
// 3.第2步中的运算结果C堆 赋值给 a.x属性。 等于在B堆内，添加了一个x属性。同时将x属性指到C堆上
// 因为变量b的指针指向了a
`,N=c({__name:"ChainAssignmentOperation",setup(g){return(u,e)=>(m(),x(r,{title:"连续赋值运算结果"},{"text-content":a(()=>[o(s,null,{title:a(()=>e[0]||(e[0]=[n(" Q:写出 "),p("code",null,"console.log() ",-1),n("的输出 (阿里的面试题) ")])),_:1}),o(i,null,{question:a(()=>[o(t,{content:d,lang:"javascript"})]),answer:a(()=>[o(t,{content:f,lang:"javascript"}),o(l,{text:_,lang:"markdown"})]),_:1})]),_:1}))}});export{N as default};

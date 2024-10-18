import{C as t}from"./CodeHighLight-BnWlyMHw.js";import{_ as n}from"./ExpansionPanel.vue_vue_type_style_index_0_lang-DryMMxSS.js";import{C as r}from"./CodeAlert-BYQCT3Yz.js";import{Q as c}from"./QuestionTabs-CIkanwnN.js";import{M as l}from"./MarkdownPreview-DtP-at91.js";import{d as i,o as m,a as p,w as e,l as a,s,y as _}from"./index-DygiovCP.js";import"./monokai-sublime-CD9-rurh.js";import"./_commonjsHelpers-CqkleIqs.js";import"./VContainer-ILrSQBox.js";const d=`
//case 1
var a=1;
a=a++;
console.log(a)

//case 2
var a=1;
a=++a
console.log(a)

//case 3
var a=1;
var b= a++ + ++a;
console.log(a,b)

//case 4
var a=1;
var b= a++ + ++a*a++;
console.log(a,b)

`,g=`
//case 1  //1
//case 2 //2
//case 3 //3,4  (1+3)
//case 3 //4,10  (1+3*3)
`,f=`
#### 过程解析：

++ 是个运算符 优先级高。 先运算再赋值
a=a++  先算表达式的值，再自增1
a= ++a 先自增1 再算表达式的值
`,V=i({__name:"AssignmentOperation",setup(u){return(v,o)=>(m(),p(n,{title:"++表达式运算和运算结果"},{"text-content":e(()=>[a(r,null,{title:e(()=>o[0]||(o[0]=[s(" Q:写出 "),_("code",null,"console.log() ",-1),s("的输出 ")])),_:1}),a(c,null,{question:e(()=>[a(t,{content:d,lang:"javascript"})]),answer:e(()=>[a(t,{content:g,lang:"javascript"}),a(l,{text:f,lang:"markdown"})]),_:1})]),_:1}))}});export{V as default};

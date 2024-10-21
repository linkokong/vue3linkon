import{C as r}from"./CodeHighLight-69e9ifWU.js";import{_ as s}from"./ExpansionPanel.vue_vue_type_style_index_0_lang-CSTMBoBC.js";import{C as a}from"./CodeAlert-Sgmpw6mN.js";import{Q as l}from"./QuestionTabs-TRrX1txu.js";import{e as i,U as c,o as u,f as p,w as e,i as o,l as b,u as m}from"./index-DqowDhzq.js";import"./monokai-sublime-CD9-rurh.js";import"./_commonjsHelpers-CqkleIqs.js";import"./VContainer-CsV1yrE_.js";const j=`const obj={
  arr:[],
  a:4
}
obj.sub=obj;
obj.arr.push(obj)
/**
* 拷贝后的新对象newObj可以进行以下比较
*/
console.log(newObj.arr!==obj.arr)
console.log(newObj.sub!==obj.sub)
console.log(newObj.arr[0]!==obj)
console.log(newObj.arr[0]===newObj)
/**
* 考点：
*   防止递归循环引用Converting circular structure
*   防止递归栈溢出 Maximum call stack size exceeded
*/
`,k=i({__name:"DeepClone",setup(_){const n=c.deepClone.toString().replace("/* @__PURE__ */ ","");return(f,t)=>(u(),p(s,{title:"深拷贝的循环引用问题"},{"text-content":e(()=>[o(a,null,{title:e(()=>t[0]||(t[0]=[b(" Q：有一个对象obj。实现一个深拷贝函数，使得比较均为true ")])),_:1}),o(l,null,{question:e(()=>[o(r,{content:j,lang:"javascript"})]),answer:e(()=>[o(r,{content:m(n),lang:"javascript"},null,8,["content"])]),_:1})]),_:1}))}});export{k as default};

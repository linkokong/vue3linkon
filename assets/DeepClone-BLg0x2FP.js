import{C as r}from"./CodeHighLight-Cmu8EE8r.js";import{_ as s}from"./ExpansionPanel.vue_vue_type_style_index_0_lang-zB7LKfCA.js";import{C as a}from"./CodeAlert-CIu82PVg.js";import{Q as l}from"./QuestionTabs-BM-ov4Ot.js";import{d as c,U as i,o as u,a as p,w as e,l as o,s as b,u as m}from"./index-D6aLrLJk.js";import"./monokai-sublime-CD9-rurh.js";import"./_commonjsHelpers-CqkleIqs.js";import"./VContainer-D2r3ldru.js";const j=`const obj={
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
`,k=c({__name:"DeepClone",setup(_){const n=i.deepClone.toString().replace("/* @__PURE__ */ ","");return(d,t)=>(u(),p(s,{title:"深拷贝的循环引用问题"},{"text-content":e(()=>[o(a,null,{title:e(()=>t[0]||(t[0]=[b(" Q：有一个对象obj。实现一个深拷贝函数，使得比较均为true ")])),_:1}),o(l,null,{question:e(()=>[o(r,{content:j,lang:"javascript"})]),answer:e(()=>[o(r,{content:m(n),lang:"javascript"},null,8,["content"])]),_:1})]),_:1}))}});export{k as default};

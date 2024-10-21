import{C as t}from"./CodeHighLight-BKoxJXzn.js";import{_ as n}from"./ExpansionPanel.vue_vue_type_style_index_0_lang-C2Vs6t4E.js";import{d as E,o as s,a as e,w as c,l as o}from"./index-BTDASzWO.js";import"./monokai-sublime-CD9-rurh.js";import"./_commonjsHelpers-CqkleIqs.js";const r=`//不好的设计：
const READ    = 1;
const WRITE   = 2;
const DELETE  = 3;
const CREATE  = 4;
const READ_AND_WRITE=5;         // 可读可写
const READ_AND_WRITE_CREATE=6;  // 可读可写可创建
`,_=`//利用二进制 同 与或运算 来实现：
const READ    = 0b000001;
const WRITE   = 0b000010;
const DELETE  = 0b000100;
const CREATE  = 0b001000;
const READ_AND_WRITE=READ | WRITE;                       // 可读可写
const READ_AND_WRITE_AND_CREATE=READ | WRITE | CREATE;  // 可读可写可创建

//判断 perm 是否包含可读权限：
const perm=READ | WRITE | DELETE;
console.log( (perm & READ) === READ)

//删除 perm 的可读权限
const newPerm= perm & ~READ;  //取反read之后，与perm进行与运算

`,d=E({__name:"BinaryPermission",setup(R){return(a,A)=>(s(),e(n,{title:"使用二进制散列值优雅的设置权限"},{"text-content":c(()=>[o(t,{content:r,lang:"javascript"}),o(t,{content:_,lang:"javascript"})]),_:1}))}});export{d as default};

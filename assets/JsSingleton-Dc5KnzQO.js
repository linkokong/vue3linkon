import{C as r}from"./CodeHighLight-BKoxJXzn.js";import{_ as l}from"./ExpansionPanel.vue_vue_type_style_index_0_lang-C2Vs6t4E.js";import{C as a}from"./CodeAlert-yloirZLt.js";import{d as c,o as i,a as m,w as e,l as s,s as t,y as n,u as p}from"./index-BTDASzWO.js";import"./monokai-sublime-CD9-rurh.js";import"./_commonjsHelpers-CqkleIqs.js";const u=`import Utils from "@/tools/Utils";
class testClass{
    constructor() {
    console.log('new testclass')
    }
}

const Test=Utils.singleton(testClass)

const v1=new Test()
const v2=new Test() //控制台会提示已存在
console.log(v1===v2) // true

`,T=c({__name:"JsSingleton",setup(_){return(d,o)=>(i(),m(l,{title:"使用proxy实现JS的单例"},{"text-content":e(()=>[s(a,null,{content:e(()=>o[0]||(o[0]=[t(" 使用 "),n("code",null,"proxy",-1),t("可禁止通过 "),n("code",null,"const v2= new v1.constructor()",-1),t(" 来创建新的实例 ")])),_:1}),s(r,{content:p(u),lang:"javascript"},null,8,["content"])]),_:1}))}});export{T as default};

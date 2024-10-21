import{C as r}from"./CodeHighLight-69e9ifWU.js";import{_ as l}from"./ExpansionPanel.vue_vue_type_style_index_0_lang-CSTMBoBC.js";import{C as c}from"./CodeAlert-Sgmpw6mN.js";import{e as a,o as i,f as m,w as e,i as s,l as t,t as n,u as p}from"./index-DqowDhzq.js";import"./monokai-sublime-CD9-rurh.js";import"./_commonjsHelpers-CqkleIqs.js";const u=`import Utils from "@/tools/Utils";
class testClass{
    constructor() {
    console.log('new testclass')
    }
}

const Test=Utils.singleton(testClass)

const v1=new Test()
const v2=new Test() //控制台会提示已存在
console.log(v1===v2) // true

`,T=a({__name:"JsSingleton",setup(_){return(f,o)=>(i(),m(l,{title:"使用proxy实现JS的单例"},{"text-content":e(()=>[s(c,null,{content:e(()=>o[0]||(o[0]=[t(" 使用 "),n("code",null,"proxy",-1),t("可禁止通过 "),n("code",null,"const v2= new v1.constructor()",-1),t(" 来创建新的实例 ")])),_:1}),s(r,{content:p(u),lang:"javascript"},null,8,["content"])]),_:1}))}});export{T as default};

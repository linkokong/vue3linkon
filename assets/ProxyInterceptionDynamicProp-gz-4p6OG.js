import{C as r}from"./CodeHighLight-Cmu8EE8r.js";import{_ as n}from"./ExpansionPanel.vue_vue_type_style_index_0_lang-zB7LKfCA.js";import{C as s}from"./CodeAlert-CIu82PVg.js";import{Q as i}from"./QuestionTabs-BM-ov4Ot.js";import{d as c,o as p,a as d,w as t,l as e,s as a,y as m}from"./index-D6aLrLJk.js";import"./monokai-sublime-CD9-rurh.js";import"./_commonjsHelpers-CqkleIqs.js";import"./VContainer-D2r3ldru.js";const l=`const r1= add[1][2][3]+4 //10
const r2= add[10][20][30]+40 //100
const r2= add[100][200][300]+400 //1000
`,u=`function createProxy(values=[]){
  return new Proxy({},{
    get(target,p){
      if(p===Symbol.toPrimitive){
        return ()=>values.reduce((a,b)=>a+b,0)
      }
      return createProxy([...values,+p])
    }
  })
}
const add =createProxy();
`,T=c({__name:"ProxyInterceptionDynamicProp",setup(x){return(_,o)=>(p(),d(n,{title:"动态属性的拦截"},{"text-content":t(()=>[e(s,null,{title:t(()=>o[0]||(o[0]=[a(" Q：创建一个 "),m("code",null,"add",-1),a(" 使其可以满足下列运算和结果 ")])),_:1}),e(i,null,{question:t(()=>[e(r,{content:l,lang:"javascript"})]),answer:t(()=>[e(r,{content:u,lang:"javascript"})]),_:1})]),_:1}))}});export{T as default};
import{C as r}from"./CodeHighLight-69e9ifWU.js";import{_ as n}from"./ExpansionPanel.vue_vue_type_style_index_0_lang-CSTMBoBC.js";import{C as s}from"./CodeAlert-Sgmpw6mN.js";import{Q as i}from"./QuestionTabs-TRrX1txu.js";import{e as c,o as p,f as m,w as t,i as e,l as a,t as d}from"./index-DqowDhzq.js";import"./monokai-sublime-CD9-rurh.js";import"./_commonjsHelpers-CqkleIqs.js";import"./VContainer-CsV1yrE_.js";const l=`const r1= add[1][2][3]+4 //10
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
`,T=c({__name:"ProxyInterceptionDynamicProp",setup(f){return(x,o)=>(p(),m(n,{title:"动态属性的拦截"},{"text-content":t(()=>[e(s,null,{title:t(()=>o[0]||(o[0]=[a(" Q：创建一个 "),d("code",null,"add",-1),a(" 使其可以满足下列运算和结果 ")])),_:1}),e(i,null,{question:t(()=>[e(r,{content:l,lang:"javascript"})]),answer:t(()=>[e(r,{content:u,lang:"javascript"})]),_:1})]),_:1}))}});export{T as default};

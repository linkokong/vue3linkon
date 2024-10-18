import{C as t}from"./CodeHighLight-BnWlyMHw.js";import{_ as e}from"./ExpansionPanel.vue_vue_type_style_index_0_lang-DryMMxSS.js";import{d as n,o as a,a as r,w as o,l as s,u as l}from"./index-DygiovCP.js";import"./monokai-sublime-CD9-rurh.js";import"./_commonjsHelpers-CqkleIqs.js";const i=`[]==![]  //true
[]==[] //false
['1']==true //true
['2']==true //true
['2']==false //false

//规则1：类型不一样，则转换成同一类型比较
//规则2：类型不一样对象类型，转换其对应的原始类型，再去比较规则1
1==[] //false
0==[] //true
NaN==NaN //false NaN和所有类型比较都是 false
null== undefined //true

// 对象类型转原始类型
[]==true //false
[]==false //true

// 对象转换成原始类型的机制.调用Symbol.toPrimitive 或者 valueOf 或者toString() 看值
[][Symbol.toPrimitive]
[].valueOf()
[].toString()
`,g=n({__name:"WeakEqual",setup(u){return(f,m)=>(a(),r(e,{title:"非严格相等"},{"text-content":o(()=>[s(t,{content:l(i),lang:"javascript"},null,8,["content"])]),_:1}))}});export{g as default};

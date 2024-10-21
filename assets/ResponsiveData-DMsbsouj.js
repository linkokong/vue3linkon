import{M as e}from"./MarkdownPreview-pR_3Cx8W.js";import{_ as n}from"./ExpansionPanel.vue_vue_type_style_index_0_lang-CSTMBoBC.js";import{e as a,U as o,o as r,f as s,w as i,i as c,u as m}from"./index-DqowDhzq.js";import"./monokai-sublime-CD9-rurh.js";import"./_commonjsHelpers-CqkleIqs.js";const p=`\`\`\`javascript
//以下这些方法的实现，都是通过数据变化来重新运行函数。
watchEffect(()=>{
    this.firstName,this.age
})
watch(()=>this.name,()=>{})
computed(){
    aa(){}
}

render(){
}
\`\`\`

- 当数据变化时，依赖数据的函数重新运行,说白了就是数据和函数的关系。
- 和组件，界面没有任何关系
- vue2和vue3的数据响应式的源码，是独立编写的，不依赖组件的生命周期和钩子函数等等
- vue3中，数据响应式是独立的 @vue/reactivity库。
`,d=a({__name:"ResponsiveData",setup(f){const t=o.formatMarkDown(p);return(_,u)=>(r(),s(n,{title:"响应式数据的本质"},{"text-content":i(()=>[c(e,{text:m(t),lang:"javascript"},null,8,["text"])]),_:1}))}});export{d as default};

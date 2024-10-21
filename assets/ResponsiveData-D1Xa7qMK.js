import{M as n}from"./MarkdownPreview-D120B7Cw.js";import{_ as e}from"./ExpansionPanel.vue_vue_type_style_index_0_lang-DGxgljQY.js";import{d as a,U as o,o as r,a as s,w as c,l as i,u as m}from"./index-DEE77wOJ.js";import"./monokai-sublime-CD9-rurh.js";import"./_commonjsHelpers-CqkleIqs.js";const p=`\`\`\`javascript
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
`,w=a({__name:"ResponsiveData",setup(_){const t=o.formatMarkDown(p);return(f,u)=>(r(),s(e,{title:"响应式数据的本质"},{"text-content":c(()=>[i(n,{text:m(t),lang:"javascript"},null,8,["text"])]),_:1}))}});export{w as default};

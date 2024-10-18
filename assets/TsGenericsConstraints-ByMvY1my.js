import{C as e}from"./CodeHighLight-BnWlyMHw.js";import{_ as t}from"./ExpansionPanel.vue_vue_type_style_index_0_lang-DryMMxSS.js";import{d as o,o as a,a as n,w as r,l as s,u as c}from"./index-DygiovCP.js";import"./monokai-sublime-CD9-rurh.js";import"./_commonjsHelpers-CqkleIqs.js";const i=`const user={
    name:'kong',
    age:30,
    location:'zh'
}

/**
 * 使用 ts 的 keyof 对 object 的 key 进行约束提醒。
 * @param {object} obj
 * @param {string} propName
 */
function handler<T extends object,K extends keyof T> (obj :T,propName:K){}

//调用时，传一个不存在的 key，会有错误提示
// @ts-ignore
handler(user,"aaa")
`,h=o({__name:"TsGenericsConstraints",setup(p){return(m,_)=>(a(),n(t,{title:"TS的泛型约束"},{"text-content":r(()=>[s(e,{content:c(i),lang:"javascript"},null,8,["content"])]),_:1}))}});export{h as default};

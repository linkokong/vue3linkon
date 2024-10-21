import{C as t}from"./CodeHighLight-Cmu8EE8r.js";import{_ as e}from"./ExpansionPanel.vue_vue_type_style_index_0_lang-zB7LKfCA.js";import{d as o,o as a,a as n,w as c,l as i}from"./index-D6aLrLJk.js";import"./monokai-sublime-CD9-rurh.js";import"./_commonjsHelpers-CqkleIqs.js";const s=`/**
* 基于字典顺序的排序 localeCompare
* 'zh-Hans-CN-u-co-pinyin' 是 Unicode 区域设置标记语言，用于表示简体中文拼音排序。如果有英文字符，也会根据拼音和字母顺序一起排序
* { sensitivity: 'accent' }表示在排序时，区分大小写和重音符号（例如 é 和 e 会被视为不同的字符）
*/
const names= ['叶良辰','龙傲天','赵日天','福尔康']
names.sort((a, b) => a.localeCompare(b, 'zh-Hans-CN-u-co-pinyin', { sensitivity: 'accent' }));
`,d=o({__name:"DictSort",setup(r){return(m,p)=>(a(),n(e,{title:"字典顺序排序"},{"text-content":c(()=>[i(t,{content:s,lang:"javascript"})]),_:1}))}});export{d as default};

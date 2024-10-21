import{M as t}from"./MarkdownPreview-pR_3Cx8W.js";import{_ as o}from"./ExpansionPanel.vue_vue_type_style_index_0_lang-CSTMBoBC.js";import{e,U as s,o as r,f as a,w as c,i as l,u as i}from"./index-DqowDhzq.js";import"./monokai-sublime-CD9-rurh.js";import"./_commonjsHelpers-CqkleIqs.js";const m=`## 码元
- 在JS里，每一个字符在内存里占用的空间是16位（2个字节），每一个16位空间就是一个码元
- 数字范围:一个码元可以表示范围就是0-65535（2^16,0xffff)
- 2个码元则可表示0-2^32次方范围

## 码点
- 1个字符需要2个码元来表示，称之为码点
- 1个码点可以对应多个码元

\`\`\`javascript
const str= '🦷🦷🦷🦷a'
//length返回字符占用的码元数
console.log(str.length) //输出：9（ 1个emoji文字占用2个码元）
console.log(str[0]) //输出：乱码，读取的第一个码元
console.log(str.slice(0,2)) //输出：🤔️，获取到完整字符


\`\`\`
`,k=e({__name:"CodeElementPoint",setup(f){const n=s.formatMarkDown(m);return(_,p)=>(r(),a(o,{title:"码元码点"},{"text-content":c(()=>[l(t,{text:i(n),lang:"markdown"},null,8,["text"])]),_:1}))}});export{k as default};

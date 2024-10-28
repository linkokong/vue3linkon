import{_ as s}from"./ExpansionPanel.vue_vue_type_style_index_0_lang-D9psg00O.js";import{C as r}from"./CodeAlert-B3RkFIQA.js";import{C as n}from"./CodeHighLight-D6HqHaaZ.js";import{Q as a}from"./QuestionTabs-CrKNQHH2.js";import{d as l,o as i,a as c,w as o,l as t,s as m}from"./index-DCBbo-ZP.js";import"./monokai-sublime-CD9-rurh.js";import"./_commonjsHelpers-CqkleIqs.js";import"./VContainer-e6QOzsG0.js";const p=`
console.log(0.1+0.2==0.3)
console.log(0.5-0.4 ==0.1)
console.log(0.5+0.25==0.75)
`,g=`// 写出下列输出
console.log(0.1+0.2==0.3)   //false
console.log(0.5-0.4 ==0.1)  //false
console.log(0.5+0.25==0.75) //true

/**
* 计算时，整数部分 会将十进制数字转换成二进制。小数部分不可以直接转换成二进制
*/
// 十进制：
34=3*10^1 + 4*10^0
3.14=3*10^1 + 1*10^-1 + 1*10^-2

// 二进制：逢2进1
101=1*2^2 + 0*2^1 + 1*2^0 =5
1.101=1*2^0 + 1*2^-1 + 0*2^-2 + 1*2^-3 =1.625
//猜想：这里有个规律。浮点数直接转成二进制的时候，最后一位肯定是5（1/2^n）。所以浮点数最后一位如果不是5，则肯定找不到有限的对应的2进制浮点数字。
//      同时小数部分是不能被1除尽的浮点，可找不到有限的对应二进制的浮点数字
//验证猜想：
0.1.toString(2)   // '0.0001100110011001100110011001100110011001100110011001101'
0.2.toString(2)   // '0.001100110011001100110011001100110011001100110011001101'
0.5.toString(2)   // '0.1'
0.25.toString(2)  // '0.01'
0.15.toString(2)  // '0.0010011001100110011001100110011001100110011001100110011' （1/15=0.066666666666666666666xxx）
`,h=l({__name:"FloatImprecise",setup(_){return(f,e)=>(i(),c(s,{title:"浮点运算不精确的原因"},{"text-content":o(()=>[t(r,null,{title:o(()=>e[0]||(e[0]=[m(" Q：浮点运算不精确的原因 ")])),_:1}),t(a,null,{question:o(()=>[t(n,{content:p,lang:"javascript"})]),answer:o(()=>[t(n,{content:g,lang:"javascript"})]),_:1})]),_:1}))}});export{h as default};

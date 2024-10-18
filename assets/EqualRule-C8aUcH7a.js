import{C as n}from"./CodeHighLight-BnWlyMHw.js";import{_ as r}from"./ExpansionPanel.vue_vue_type_style_index_0_lang-DryMMxSS.js";import{C as l}from"./CodeAlert-BYQCT3Yz.js";import{Q as i}from"./QuestionTabs-CIkanwnN.js";import{M as u}from"./MarkdownPreview-DtP-at91.js";import{d as s,o as c,a as m,w as t,l as e,s as a,y as f}from"./index-DygiovCP.js";import"./monokai-sublime-CD9-rurh.js";import"./_commonjsHelpers-CqkleIqs.js";import"./VContainer-ILrSQBox.js";const p=`if(a==1&&a==2&&a==3){
  console.log('成立')
}
`,v=`
### 答案 1 valueOf：
\`\`\` javascript
const a={
  count:1,
  valueOf(){
    console.log('valueOf被执行')
    return this.count++
  }
}
// 解释 每一次判断 1条件时，a为object，所以走到运算规则第五条。
//此时，会查找对象的原始类型，所以valueOf被调用了。调用之后返回1，并且count++
\`\`\`
### 答案 2 [Symbol.toPrimitive]：
\`\`\` javascript
let a = {
  [Symbol.toPrimitive]: ((hint) => {
    let value = 1;
    return () => value++;
  })()
};
\`\`\`
### 答案 3 toString：
\`\`\` javascript
const a={
  count:1,
  toString(){
    console.log('valueOf被执行')
    return this.count++
  }
}
\`\`\`
### 答案 4 使用Proxy：
\`\`\` javascript
function createAutoIncrementProxy(initialValue = 1) {
  let value = initialValue;
  return new Proxy({}, {
    get: function() {
      return () => value++;
    }
  });
}

// 使用示例
let a = createAutoIncrementProxy(1);
\`\`\`

### 等号运算规则：
从上到下按照规则比较，直到能得到确切结果为止
1.两端类型相同，比较值
2、两端只要 存在 NaN,返回 false
- NaN==[]  //false
3. undefined 和 null 只有与自身比较,或者互相比较时,才会返回true
  - undefined==null // true
  - null==null //true
  - undefined==undefined //true
  - null==[] //false

4.两端都是原始类型,转换成数字比较
5.一端是原始类型,一端是对象类型,把对象转换成原始类型后返回 第4步

### 如何转换原始类型
- 1.先看是否拥有 [Symbol.toPrimitive]方法，并调用
- 2.调用对象的 valueOf方法
- 3.调用toString方法

参考 src/components/javascript/_weakequal.ts
`,S=s({__name:"EqualRule",setup(d){return(_,o)=>(c(),m(r,{title:"等号运算规则",open:""},{"text-content":t(()=>[e(l,null,{title:t(()=>o[0]||(o[0]=[a(" Q：定义一个变量 "),f("code",null,"a",-1),a(" 使得下面的if判断成立 ")])),_:1}),e(i,null,{question:t(()=>[e(n,{content:p,lang:"javascript"})]),answer:t(()=>[e(u,{text:v,lang:"markdown"})]),_:1})]),_:1}))}});export{S as default};

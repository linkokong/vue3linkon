import{C as t}from"./CodeHighLight-HtiR7sVp.js";import{_ as n}from"./ExpansionPanel.vue_vue_type_style_index_0_lang-DGxgljQY.js";import{d as e,o as r,a,w as s,l as c}from"./index-DEE77wOJ.js";import"./monokai-sublime-CD9-rurh.js";import"./_commonjsHelpers-CqkleIqs.js";const o=`
console.log(Number.MAX_SAFE_INTEGER) //9007199254740991

/**
* 大位数相加(整数)
* @param {String} a
* @param {String} b
* @returns {String} 两数相加的结果
*/
function sum(a,b){
  a=a.toString()
  b=b.toString()
  const len =Math.max(a.length,b.length)
  a=a.padStart(len,'0')
  b=b.padStart(len,'0')
  let carry=0
  for( let i=len-1;i>=0;i--){
    const sum = +a[i]++b[i]+carry
    const r = sum %10
    const carry =Math.floor(sum/10)
    result=r+result
  }
  return result
}

/**
* 大位数相加(浮点)
* @param {String} a
* @param {String} b
* @returns {String} 两数相加的结果
*/
function sum(a,b){
  // 确保输入是字符串
  a = a.toString();
  b = b.toString();

  // 分离整数和小数部分
  const [intA, decA = ''] = a.split('.');
  const [intB, decB = ''] = b.split('.');

  // 对齐小数部分长度，填充0
  const maxDecLen = Math.max(decA.length, decB.length);
  const newDecA = decA.padEnd(maxDecLen, '0');
  const newDecB = decB.padEnd(maxDecLen, '0');

  // 对齐整数部分长度，填充0
  const maxIntLen = Math.max(intA.length, intB.length);
  const newIntA = intA.padStart(maxIntLen, '0');
  const newIntB = intB.padStart(maxIntLen, '0');

  // 定义变量保存进位和结果
  let carry = 0;
  let result = '';

  // 处理小数部分，从最后一位向前相加
  for (let i = maxDecLen - 1; i >= 0; i--) {
    const sum = +newDecA[i] + +newDecB[i] + carry;
    result = (sum % 10) + result;  // 当前位的结果
    carry = Math.floor(sum / 10);   // 进位
  }

  // 如果小数部分存在，加入小数点
  if (result.length > 0) {
    result = '.' + result;
  }

  // 处理整数部分，从最后一位向前相加
  for (let i = maxIntLen - 1; i >= 0; i--) {
    const sum = +newIntA[i] + +newIntB[i] + carry;
    result = (sum % 10) + result;
    carry = Math.floor(sum / 10);
  }

  // 如果还有剩余进位，加入结果最前面
  if (carry > 0) {
    result = carry + result;
  }

  // 返回结果，移除前置的0（如果有）
  return result.replace(/^0+(\\d)/, '$1').replace(/\\.0+$/, '');
}

`,h=e({__name:"BigIntAdd",setup(i){return(l,m)=>(r(),a(n,{title:"大整数相加"},{"text-content":s(()=>[c(t,{content:o,lang:"javascript"})]),_:1}))}});export{h as default};

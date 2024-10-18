import{C as a}from"./CodeHighLight-Ch5Pvwbt.js";import{_ as r}from"./ExpansionPanel.vue_vue_type_style_index_0_lang-BriNEfi_.js";import{C as o}from"./CodeAlert-CVzXLmUR.js";import{d as l,o as d,a as i,w as t,l as n,s as c}from"./index-BnkPjeMf.js";import"./monokai-sublime-CD9-rurh.js";import"./_commonjsHelpers-CqkleIqs.js";const m=`// 直接声明函数，无需立即执行
var addEventBefore = function(ele) {
  if (ele.addEventListener) {
    return function(ele, eventName, handler) {
      ele.addEventListener(eventName, handler);
    };
  } else if (ele.attachEvent) {
    return function(ele, eventName, handler) {
      ele.attachEvent('on' + eventName, handler);
    };
  } else {
    return function(ele, eventName, handler) {
      ele['on' + eventName] = handler;
    };
  }
};

// 使用 IIFE 优化，减少性能开销
// 在初始化时根据浏览器的兼容性来选择适当的事件绑定方法，这样后续的事件绑定不需要每次都检测浏览器特性
var addEventAfter = (function() {
  if (document.addEventListener) {
    // 如果支持 addEventListener
    return function(ele, eventName, handler) {
      ele.addEventListener(eventName, handler);
    };
  } else if (document.attachEvent) {
    // 如果支持 attachEvent (IE <= 8)
    return function(ele, eventName, handler) {
      ele.attachEvent('on' + eventName, handler);
    };
  } else {
    // 最后采用直接赋值的方法 (非常旧的浏览器)
    return function(ele, eventName, handler) {
      ele['on' + eventName] = handler;
    };
  }
})();
`,_=l({__name:"IIFEEfficiency",setup(s){return(v,e)=>(d(),i(r,{title:"使用立即执行函数（IIFE）提升运行效率"},{"text-content":t(()=>[n(o,null,{content:t(()=>e[0]||(e[0]=[c(" 利用立即执行函数()()，在函数调用前，就做好一些操作，可以降低一定的性能开销 ")])),_:1}),n(a,{content:m,lang:"javascript"})]),_:1}))}});export{_ as default};

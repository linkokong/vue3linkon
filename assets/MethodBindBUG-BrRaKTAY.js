import{M as e}from"./MarkdownPreview-pR_3Cx8W.js";import{_ as t}from"./ExpansionPanel.vue_vue_type_style_index_0_lang-CSTMBoBC.js";import{e as a,U as c,o,f as r,w as i,i as s,u as m}from"./index-DqowDhzq.js";import"./monokai-sublime-CD9-rurh.js";import"./_commonjsHelpers-CqkleIqs.js";const u=`\`\`\`javascript
//假设有这么一个防抖函数。这个函数是没有任何问题的
export function debounce(func,duration=200){
    let timerId
    function _exec(...args){
        clearTimeout(timerId)
        timerId=setTimeout(()=>{func.call(this,...args)},duration)
    }
    _exec.cancel=()=>{
        clearTimeout(timerId)
    }
    return _exec
}
\`\`\`

\`\`\`javascript
//某个组件中，使用了上面这个防抖函数，并且提供了一个调用防抖函数内的cancel函数的函数
<script>
import debounce from './debounce.js'
export default{
    data(){
        return {}
    },
    methods:{
        query:debounce (async function(q,cb){
            cb(await search(q))
        },1000),
        cancle(){
            //当调用cancel函数时，会报错，提示 undefined
            //this指向的是组件实例而并不是 methods，所以这里并不会指向防抖函数内的 cancel函数
            this.query.cancel() 
        }
    }
}
<\/script>

\`\`\`
- 在\`vue\`中，\`methods\` 内配置的函数，和 \`template\`页面内调用的函数并不是一个同一函数。
- \`methods\`内的函数，都是通过\`methods.xxx.bind(vm)\` 将\`method\`的\`xxx\`方法绑定到组件实例\`vm\`中了,所以\`this\`指向不一样。
- 在上面的例子中，要把\`query\`函数，定义到\`data\`中，才可以消除bug
`,w=a({__name:"MethodBindBUG",setup(d){const n=c.formatMarkDown(u);return(l,p)=>(o(),r(t,{title:"VUE函数绑定this的问题"},{"text-content":i(()=>[s(e,{text:m(n),lang:"markdown"},null,8,["text"])]),_:1}))}});export{w as default};

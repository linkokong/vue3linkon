import{C as e}from"./CodeHighLight-Ch5Pvwbt.js";import{_ as r}from"./ExpansionPanel.vue_vue_type_style_index_0_lang-BriNEfi_.js";import{C as l}from"./CodeAlert-CVzXLmUR.js";import{d as a,o as s,a as c,w as n,l as o,s as i,u as p}from"./index-BnkPjeMf.js";import"./monokai-sublime-CD9-rurh.js";import"./_commonjsHelpers-CqkleIqs.js";const m=`export const requestAPI = (opt: RequestInit) => {
    let controller: AbortController | null = null;
    return async (opt: RequestInit): Promise<any> => {
        // 如果之前的请求存在，则终止它
        if (controller) {
            controller.abort();
        }
        // 创建新的 AbortController
        controller = new AbortController();

        // 使用 fetch 发起请求并使用 abort controller
        return await fetch('https://aaa.demo.com', {
            ...opt,  // 传入 opt 的参数
            signal: controller.signal,  // 传入中止信号
        }).then(resp => resp.json());  // 返回解析后的响应
    };
};
`,A=a({__name:"FetchAbort",setup(u){return(f,t)=>(s(),c(r,{title:"请求的取消"},{"text-content":n(()=>[o(l,null,{title:n(()=>t[0]||(t[0]=[i(" 当同一时间发送了多次相同请求，响应顺序并不会按照发送顺序响应（服务器处理时间/网络传输时间等）。这时就需要把前一次的请求取消掉 ")])),_:1}),o(e,{content:p(m),lang:"javascript"},null,8,["content"])]),_:1}))}});export{A as default};

import{C as e}from"./CodeHighLight-BnWlyMHw.js";import{_ as t}from"./ExpansionPanel.vue_vue_type_style_index_0_lang-DryMMxSS.js";import{d as n,o as r,a as o,w as a,l as s,u as c}from"./index-DygiovCP.js";import"./monokai-sublime-CD9-rurh.js";import"./_commonjsHelpers-CqkleIqs.js";const d=`const url = 'http://longwait.com/api';
async function getResponse(content: string) {
    const resp = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content })
    });
    // 检查请求是否成功
    if (!resp.ok) {
        throw new Error(\`HTTP error! Status: \${resp.status}\`);
    }
    const reader = resp?.body?.getReader();
    if (!reader) {
        throw new Error('Response body is empty or not readable');
    }
    const decoder = new TextDecoder();
    let text = '';
    // 流式读取数据
    while (true) {
        const { done, value } = await reader.read();
        if (done) {
            break;
        }
        text += decoder.decode(value, { stream: true });
    }
    // 确保所有剩余数据都解码
    text += decoder.decode();
    return text;
}
`,w=n({__name:"DataStream",setup(i){return(p,l)=>(r(),o(t,{title:"网络流式传输"},{"text-content":a(()=>[s(e,{content:c(d),lang:"javascript"},null,8,["content"])]),_:1}))}});export{w as default};

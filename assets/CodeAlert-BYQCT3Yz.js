import{aS as z,p as F,aF as N,m as O,aT as R,ax as j,X as q,aU as E,aV as W,W as X,g as G,aL as M,aW as Q,h as U,af as Y,i as o,aN as Z,aX as H,aY as J,ay as K,a4 as ee,aZ as ae,a_ as te,ab as le,a5 as ne,$ as se,a$ as oe,l as t,b0 as re,aq as ie,aG as v,q as ce,aj as de,A as ue,o as m,a as y,w as f,aO as b,aQ as ve}from"./index-DygiovCP.js";const k=z("v-alert-title"),me=["success","info","warning","error"],ye=F({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:N,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>me.includes(e)},...O(),...R(),...j(),...q(),...E(),...W(),...X(),...G(),...M(),...Q({variant:"flat"})},"VAlert"),fe=U()({name:"VAlert",props:ye(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,r){let{emit:C,slots:a}=r;const i=Y(e,"modelValue"),n=o(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),_=o(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:P}=Z(e),{colorClasses:V,colorStyles:g,variantClasses:S}=H(_),{densityClasses:x}=J(e),{dimensionStyles:$}=K(e),{elevationClasses:h}=ee(e),{locationStyles:B}=ae(e),{positionClasses:A}=te(e),{roundedClasses:T}=le(e),{textColorClasses:I,textColorStyles:p}=ne(se(e,"borderColor")),{t:L}=oe(),c=o(()=>({"aria-label":L(e.closeLabel),onClick(s){i.value=!1,C("click:close",s)}}));return()=>{const s=!!(a.prepend||n.value),D=!!(a.title||e.title),w=!!(a.close||e.closable);return i.value&&t(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},P.value,V.value,x.value,h.value,A.value,T.value,S.value,e.class],style:[g.value,$.value,B.value,e.style],role:"alert"},{default:()=>{var d,u;return[re(!1,"v-alert"),e.border&&t("div",{key:"border",class:["v-alert__border",I.value],style:p.value},null),s&&t("div",{key:"prepend",class:"v-alert__prepend"},[a.prepend?t(v,{key:"prepend-defaults",disabled:!n.value,defaults:{VIcon:{density:e.density,icon:n.value,size:e.prominent?44:28}}},a.prepend):t(ie,{key:"prepend-icon",density:e.density,icon:n.value,size:e.prominent?44:28},null)]),t("div",{class:"v-alert__content"},[D&&t(k,{key:"title"},{default:()=>{var l;return[((l=a.title)==null?void 0:l.call(a))??e.title]}}),((d=a.text)==null?void 0:d.call(a))??e.text,(u=a.default)==null?void 0:u.call(a)]),a.append&&t("div",{key:"append",class:"v-alert__append"},[a.append()]),w&&t("div",{key:"close",class:"v-alert__close"},[a.close?t(v,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var l;return[(l=a.close)==null?void 0:l.call(a,{props:c.value})]}}):t(ce,de({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},c.value),null)])]}})}}}),be={};function ke(e,r){return m(),y(fe,{border:"top",color:"purple",variant:"outlined"},{default:f(()=>[e.$slots.title?(m(),y(k,{key:0},{default:f(()=>[b(e.$slots,"title",{},void 0,!0)]),_:3})):ve("",!0),b(e.$slots,"content",{},void 0,!0)]),_:3})}const _e=ue(be,[["render",ke],["__scopeId","data-v-1b4f7b17"]]);export{_e as C};
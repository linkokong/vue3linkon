import{p as y,m as S,aC as U,h as b,a3 as _,aD as z,L as g,l,a6 as w,a9 as N,aE as W,aF as I,ax as j,a2 as F,ac as B,ay as K,i as v,a7 as M,aG as D,aq as q,X as H,aH as J,W as X,g as R,aI as Q,a4 as Y,ab as Z,a1 as ee,aJ as ae,aK as ne,aL as le,aM as te,aN as se,au as oe,$ as i,d as ie,k as E,K as ce,v as de,x as ue,U as T,o as re,a as ve,w as P,y as pe,z as xe,aO as fe,u as me,t as Pe}from"./index-BnkPjeMf.js";const f=Symbol.for("vuetify:v-expansion-panel"),A=y({...S(),...U()},"VExpansionPanelText"),h=b()({name:"VExpansionPanelText",props:A(),setup(e,u){let{slots:n}=u;const a=_(f);if(!a)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:s,onAfterLeave:o}=z(e,a.isSelected);return g(()=>l(W,{onAfterLeave:o},{default:()=>{var t;return[w(l("div",{class:["v-expansion-panel-text",e.class],style:e.style},[n.default&&s.value&&l("div",{class:"v-expansion-panel-text__wrapper"},[(t=n.default)==null?void 0:t.call(n)])]),[[N,a.isSelected.value]])]}})),{}}}),L=y({color:String,expandIcon:{type:I,default:"$expand"},collapseIcon:{type:I,default:"$collapse"},hideActions:Boolean,focusable:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...S(),...j()},"VExpansionPanelTitle"),k=b()({name:"VExpansionPanelTitle",directives:{Ripple:F},props:L(),setup(e,u){let{slots:n}=u;const a=_(f);if(!a)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:s,backgroundColorStyles:o}=B(e,"color"),{dimensionStyles:t}=K(e),d=v(()=>({collapseIcon:e.collapseIcon,disabled:a.disabled.value,expanded:a.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly})),p=v(()=>a.isSelected.value?e.collapseIcon:e.expandIcon);return g(()=>{var x;return w(l("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":a.isSelected.value,"v-expansion-panel-title--focusable":e.focusable,"v-expansion-panel-title--static":e.static},s.value,e.class],style:[o.value,t.value,e.style],type:"button",tabindex:a.disabled.value?-1:void 0,disabled:a.disabled.value,"aria-expanded":a.isSelected.value,onClick:e.readonly?void 0:a.toggle},[l("span",{class:"v-expansion-panel-title__overlay"},null),(x=n.default)==null?void 0:x.call(n,d.value),!e.hideActions&&l(D,{defaults:{VIcon:{icon:p.value}}},{default:()=>{var m;return[l("span",{class:"v-expansion-panel-title__icon"},[((m=n.actions)==null?void 0:m.call(n,d.value))??l(q,null,null)])]}})]),[[M("ripple"),e.ripple]])}),{}}}),O=y({title:String,text:String,bgColor:String,...H(),...J(),...X(),...R(),...L(),...A()},"VExpansionPanel"),ye=b()({name:"VExpansionPanel",props:O(),emits:{"group:selected":e=>!0},setup(e,u){let{slots:n}=u;const a=Q(e,f),{backgroundColorClasses:s,backgroundColorStyles:o}=B(e,"bgColor"),{elevationClasses:t}=Y(e),{roundedClasses:d}=Z(e),p=v(()=>(a==null?void 0:a.disabled.value)||e.disabled),x=v(()=>a.group.items.value.reduce((r,c,V)=>(a.group.selected.value.includes(c.id)&&r.push(V),r),[])),m=v(()=>{const r=a.group.items.value.findIndex(c=>c.id===a.id);return!a.isSelected.value&&x.value.some(c=>c-r===1)}),G=v(()=>{const r=a.group.items.value.findIndex(c=>c.id===a.id);return!a.isSelected.value&&x.value.some(c=>c-r===-1)});return ee(f,a),g(()=>{const r=!!(n.text||e.text),c=!!(n.title||e.title),V=k.filterProps(e),$=h.filterProps(e);return l(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":a.isSelected.value,"v-expansion-panel--before-active":m.value,"v-expansion-panel--after-active":G.value,"v-expansion-panel--disabled":p.value},d.value,s.value,e.class],style:[o.value,e.style]},{default:()=>[l("div",{class:["v-expansion-panel__shadow",...t.value]},null),l(D,{defaults:{VExpansionPanelTitle:{...V},VExpansionPanelText:{...$}}},{default:()=>{var C;return[c&&l(k,{key:"title"},{default:()=>[n.title?n.title():e.title]}),r&&l(h,{key:"text"},{default:()=>[n.text?n.text():e.text]}),(C=n.default)==null?void 0:C.call(n)]}})]})}),{groupItem:a}}}),be=["default","accordion","inset","popout"],ge=y({flat:Boolean,...ae(),...ne(O(),["bgColor","collapseIcon","color","eager","elevation","expandIcon","focusable","hideActions","readonly","ripple","rounded","tile","static"]),...le(),...S(),...R(),variant:{type:String,default:"default",validator:e=>be.includes(e)}},"VExpansionPanels"),Ve=b()({name:"VExpansionPanels",props:ge(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:n}=u;const{next:a,prev:s}=te(e,f),{themeClasses:o}=se(e),t=v(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return oe({VExpansionPanel:{bgColor:i(e,"bgColor"),collapseIcon:i(e,"collapseIcon"),color:i(e,"color"),eager:i(e,"eager"),elevation:i(e,"elevation"),expandIcon:i(e,"expandIcon"),focusable:i(e,"focusable"),hideActions:i(e,"hideActions"),readonly:i(e,"readonly"),ripple:i(e,"ripple"),rounded:i(e,"rounded"),static:i(e,"static")}}),g(()=>l(e.tag,{class:["v-expansion-panels",{"v-expansion-panels--flat":e.flat,"v-expansion-panels--tile":e.tile},o.value,t.value,e.class],style:e.style},{default:()=>{var d;return[(d=n.default)==null?void 0:d.call(n,{prev:s,next:a})]}})),{next:a,prev:s}}}),he=ie({__name:"ExpansionPanel",props:{title:{type:String,default:" "},open:{type:Boolean,default:!1}},emits:["panelOpen"],setup(e,{emit:u}){const n=e,a=u,s=n.open?E([0]):E([]),o=E(null);return ce(s,t=>{t===0&&(a("panelOpen",!0),o.value&&T.scrollToElementWithOffset(o.value))}),de(()=>{const t=window.location.hash.substring(1);t&&n.title===decodeURI(t)&&(s.value=[0],ue(()=>{setTimeout(()=>{o.value&&T.scrollToElementWithOffset(o.value)},200)}))}),(t,d)=>(re(),ve(Ve,{modelValue:me(s),"onUpdate:modelValue":d[0]||(d[0]=p=>Pe(s)?s.value=p:null),height:"500"},{default:P(()=>[l(ye,null,{default:P(()=>[l(k,null,{default:P(()=>[pe("h3",{class:"text-orange",ref_key:"expansionRef",ref:o},xe(e.title),513)]),_:1}),l(h,null,{default:P(()=>[fe(t.$slots,"text-content")]),_:3})]),_:3})]),_:3},8,["modelValue"]))}});export{he as _};

import{p,m as v,az as b,h as F,aA as V,k as h,L as y,aB as R,l as k}from"./index-BnkPjeMf.js";const P=p({...v(),...b()},"VForm"),D=F()({name:"VForm",props:P(),emits:{"update:modelValue":o=>!0,submit:o=>!0},setup(o,i){let{slots:n,emit:l}=i;const r=V(o),s=h();function f(t){t.preventDefault(),r.reset()}function u(t){const a=t,e=r.validate();a.then=e.then.bind(e),a.catch=e.catch.bind(e),a.finally=e.finally.bind(e),l("submit",a),a.defaultPrevented||e.then(c=>{var m;let{valid:d}=c;d&&((m=s.value)==null||m.submit())}),a.preventDefault()}return y(()=>{var t;return k("form",{ref:s,class:["v-form",o.class],style:o.style,novalidate:!0,onReset:f,onSubmit:u},[(t=n.default)==null?void 0:t.call(n,r)])}),R(r,s)}});export{D as V};

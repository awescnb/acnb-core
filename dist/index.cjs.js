"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports[Symbol.toStringTag]="Module";function a(){const e=$("#loading");e.length&&e.fadeOut(300)}var f=e=>{a()};const i=Object.assign,c=e=>typeof e=="function";function u(){return{theme:null,config:{globalProperties:{}}}}function d(){return function(){const n=u(),o=new Set,s=n.theme={_context:n,version:"3.0",get config(){return n.config},set config(t){},use(t,...r){return o.has(t)||(t&&c(t.install)?(o.add(t),t.install(s,...r)):c(t)&&(o.add(t),t(s,...r))),s}};return s}}function h(e){return f(),{createTheme:d()}}function l(e){return h().createTheme()}const m=window.opts||{},g=(e,n,o)=>{const s=i({},e,o);return i({},s,n)},T=(e,n)=>o=>g(n,m[e],o);exports.createTheme=l;exports.defineOptions=T;

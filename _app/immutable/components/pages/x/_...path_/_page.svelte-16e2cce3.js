import{S as u,i as h,s as _,F as s,k as f,l as d,m as b,h as r,b as m,G as k,B as c,E as g,Q as w,e as i,R as y}from"../../../../chunks/index-935fee70.js";import{c as v}from"../../../../chunks/handle-markdown-24d052ed.js";import{p as C}from"../../../../chunks/stores-96295cf5.js";function E(n){return{c,l:c,m:c,p:c,d:c}}function S(n){let a,o=n[3]+"",e;return{c(){a=new w(!1),e=i(),this.h()},l(t){a=y(t,!1),e=i(),this.h()},h(){a.a=e},m(t,l){a.m(o,t,l),m(t,e,l)},p(t,l){l&1&&o!==(o=t[3]+"")&&a.p(o)},d(t){t&&r(e),t&&a.d()}}}function H(n){return{c,l:c,m:c,p:c,d:c}}function T(n){let a,o,e={ctx:n,current:null,token:null,hasCatch:!1,pending:H,then:S,catch:E,value:3};return s(o=n[0],e),{c(){a=f("section"),e.block.c()},l(t){a=d(t,"SECTION",{});var l=b(a);e.block.l(l),l.forEach(r)},m(t,l){m(t,a,l),e.block.m(a,e.anchor=null),e.mount=()=>a,e.anchor=null},p(t,[l]){n=t,e.ctx=n,l&1&&o!==(o=n[0])&&s(o,e)||k(e,n,l)},i:c,o:c,d(t){t&&r(a),e.block.d(),e.token=null,e=null}}}function q(n,a,o){let e,t,l;return g(n,C,p=>o(2,l=p)),n.$$.update=()=>{n.$$.dirty&4&&o(1,e="/"+l.params.path),n.$$.dirty&2&&o(0,t=v(e))},[t,e,l]}class I extends u{constructor(a){super(),h(this,a,q,T,_,{})}}export{I as default};
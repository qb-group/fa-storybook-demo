import{r as o}from"./_baseForOwn-4ea03334.js";/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}var y;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(y||(y={}));const J="popstate";function se(e){e===void 0&&(e={});function t(r,a){let{pathname:f,search:i,hash:c}=r.location;return R("",{pathname:f,search:i,hash:c},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:z(a)}return K(t,n,null,e)}function v(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function q(){return Math.random().toString(36).substr(2,8)}function k(e,t){return{usr:e.state,key:e.key,idx:t}}function R(e,t,n,r){return n===void 0&&(n=null),P({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?U(t):t,{state:n,key:t&&t.key||r||q()})}function z(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function U(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function K(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:f=!1}=r,i=a.history,c=y.Pop,s=null,u=h();u==null&&(u=0,i.replaceState(P({},i.state,{idx:u}),""));function h(){return(i.state||{idx:null}).idx}function m(){c=y.Pop;let l=h(),d=l==null?null:l-u;u=l,s&&s({action:c,location:p.location,delta:d})}function x(l,d){c=y.Push;let g=R(p.location,l,d);n&&n(g,l),u=h()+1;let E=k(g,u),w=p.createHref(g);try{i.pushState(E,"",w)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;a.location.assign(w)}f&&s&&s({action:c,location:p.location,delta:1})}function b(l,d){c=y.Replace;let g=R(p.location,l,d);n&&n(g,l),u=h();let E=k(g,u),w=p.createHref(g);i.replaceState(E,"",w),f&&s&&s({action:c,location:p.location,delta:0})}function C(l){let d=a.location.origin!=="null"?a.location.origin:a.location.href,g=typeof l=="string"?l:z(l);return v(d,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,d)}let p={get action(){return c},get location(){return e(a,i)},listen(l){if(s)throw new Error("A history only accepts one active listener");return a.addEventListener(J,m),s=l,()=>{a.removeEventListener(J,m),s=null}},createHref(l){return t(a,l)},createURL:C,encodeLocation(l){let d=C(l);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:x,replace:b,go(l){return i.go(l)}};return p}var D;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(D||(D={}));function V(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function F(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?U(e):e;return{pathname:n?n.startsWith("/")?n:G(n,t):t,search:Z(r),hash:H(a)}}function G(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function L(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Q(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function X(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=U(e):(a=P({},e),v(!a.pathname||!a.pathname.includes("?"),L("?","pathname","search",a)),v(!a.pathname||!a.pathname.includes("#"),L("#","pathname","hash",a)),v(!a.search||!a.search.includes("#"),L("#","search","hash",a)));let f=e===""||a.pathname==="",i=f?"/":a.pathname,c;if(r||i==null)c=n;else{let m=t.length-1;if(i.startsWith("..")){let x=i.split("/");for(;x[0]==="..";)x.shift(),m-=1;a.pathname=x.join("/")}c=m>=0?t[m]:"/"}let s=F(a,c),u=i&&i!=="/"&&i.endsWith("/"),h=(f||i===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||h)&&(s.pathname+="/"),s}const Y=e=>e.join("/").replace(/\/\/+/g,"/"),Z=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,H=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,A=["post","put","patch","delete"];new Set(A);const ee=["get",...A];new Set(ee);/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},O.apply(this,arguments)}const _=o.createContext(null),j=o.createContext(null),B=o.createContext(null),M=o.createContext({outlet:null,matches:[],isDataRoute:!1});function W(){return o.useContext(B)!=null}function te(){return W()||v(!1),o.useContext(B).location}function $(e){o.useContext(j).static||o.useLayoutEffect(e)}function ue(){let{isDataRoute:e}=o.useContext(M);return e?le():ne()}function ne(){W()||v(!1);let e=o.useContext(_),{basename:t,navigator:n}=o.useContext(j),{matches:r}=o.useContext(M),{pathname:a}=te(),f=JSON.stringify(Q(r).map(s=>s.pathnameBase)),i=o.useRef(!1);return $(()=>{i.current=!0}),o.useCallback(function(s,u){if(u===void 0&&(u={}),!i.current)return;if(typeof s=="number"){n.go(s);return}let h=X(s,JSON.parse(f),a,u.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Y([t,h.pathname])),(u.replace?n.replace:n.push)(h,u.state,u)},[t,n,f,a,e])}var S;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(S||(S={}));var I;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(I||(I={}));function ae(e){let t=o.useContext(_);return t||v(!1),t}function re(e){let t=o.useContext(M);return t||v(!1),t}function ie(e){let t=re(),n=t.matches[t.matches.length-1];return n.route.id||v(!1),n.route.id}function le(){let{router:e}=ae(S.UseNavigateStable),t=ie(I.UseNavigateStable),n=o.useRef(!1);return $(()=>{n.current=!0}),o.useCallback(function(a,f){f===void 0&&(f={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,O({fromRouteId:t},f)))},[e,t])}function ce(e){let{basename:t="/",children:n=null,location:r,navigationType:a=y.Pop,navigator:f,static:i=!1}=e;W()&&v(!1);let c=t.replace(/^\/*/,"/"),s=o.useMemo(()=>({basename:c,navigator:f,static:i}),[c,f,i]);typeof r=="string"&&(r=U(r));let{pathname:u="/",search:h="",hash:m="",state:x=null,key:b="default"}=r,C=o.useMemo(()=>{let p=V(u,c);return p==null?null:{location:{pathname:p,search:h,hash:m,state:x,key:b},navigationType:a}},[c,u,h,m,x,b,a]);return C==null?null:o.createElement(j.Provider,{value:s},o.createElement(B.Provider,{children:n,value:C}))}var T;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(T||(T={}));new Promise(()=>{});export{ce as R,te as a,se as c,ue as u};
//# sourceMappingURL=index-ae064081.js.map

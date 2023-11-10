import{j as e}from"./jsx-runtime-4ca860c5.js";import{r as o,$ as h}from"./index-61bf1805.js";import{c as T,R as v}from"./index-12c56e20.js";import{T as R,d as j,e as b,P as g,f as y,g as I}from"./index-6b1b2231.js";import{I as F}from"./chunk-BLYPNILM-1d134370.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-1e8dc08a.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_baseForOwn-561664b0.js";import"./index-d37d4223.js";import"./cloneDeep-2a5552fa.js";import"./_getPrototype-ec67d9a2.js";import"./index-356e4a49.js";import"./index-6d891c9c.js";/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const w="startTransition",m=h[w];function U(t){let{basename:f,children:x,future:S,window:d}=t,s=o.useRef();s.current==null&&(s.current=T({window:d,v5Compat:!0}));let r=s.current,[i,a]=o.useState({action:r.action,location:r.location}),{v7_startTransition:n}=S||{},c=o.useCallback(l=>{n&&m?m(()=>a(l)):a(l)},[a,n]);return o.useLayoutEffect(()=>r.listen(c),[r,c]),o.createElement(v,{basename:f,children:x,location:i.location,navigationType:i.action,navigator:r})}var u;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(u||(u={}));var p;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(p||(p={}));const Z={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},viewport:{viewports:F},backgrounds:{default:"layout",values:[{name:"layout",value:"#f5f5f5"}]},docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(R,{}),e.jsx(j,{}),e.jsx(b,{}),e.jsx(g,{}),e.jsx(y,{}),e.jsx(I,{})]})}},z={decorators:[t=>e.jsx(U,{children:e.jsx("div",{className:"flex",children:t()})})]};export{z as default,Z as parameters};
//# sourceMappingURL=preview-789696ff.js.map

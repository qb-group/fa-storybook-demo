import{j as e}from"./jsx-runtime-f8c26e3d.js";import{r as o,$ as h}from"./_baseForOwn-7166a1ea.js";import{c as T,R as v}from"./index-c1183eef.js";import{T as R,d as j,e as b,P as g,f as y,g as I}from"./index-79c95714.js";import{I as F}from"./chunk-BLYPNILM-1d134370.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-d5c474ce.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./_baseFindIndex-ec29a509.js";import"./_getPrototype-6cc0a58b.js";import"./index-356e4a49.js";import"./index-e918f4ae.js";/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const w="startTransition",u=h[w];function U(t){let{basename:f,children:x,future:S,window:d}=t,s=o.useRef();s.current==null&&(s.current=T({window:d,v5Compat:!0}));let r=s.current,[i,a]=o.useState({action:r.action,location:r.location}),{v7_startTransition:n}=S||{},c=o.useCallback(l=>{n&&u?u(()=>a(l)):a(l)},[a,n]);return o.useLayoutEffect(()=>r.listen(c),[r,c]),o.createElement(v,{basename:f,children:x,location:i.location,navigationType:i.action,navigator:r})}var m;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(m||(m={}));var p;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(p||(p={}));const W={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},viewport:{viewports:F},backgrounds:{default:"layout",values:[{name:"layout",value:"#f5f5f5"}]},docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(R,{}),e.jsx(j,{}),e.jsx(b,{}),e.jsx(g,{}),e.jsx(y,{}),e.jsx(I,{})]})}},Z={decorators:[t=>e.jsx(U,{children:e.jsx("div",{className:"flex",children:t()})})]};export{Z as default,W as parameters};
//# sourceMappingURL=preview-290b4375.js.map

import{j as e}from"./jsx-runtime-4ca860c5.js";import{r as i}from"./index-61bf1805.js";import{T as p}from"./index-5da8d75d.js";import{c as m}from"./index-f9f069f9.js";const f=({children:t})=>e.jsx(p,{variant:"caption",weight:500,color:"text-gray-800",children:t}),x=({variant:t="caption",size:r="base",weight:a=400,color:s="text-gray-700",children:l})=>e.jsx(p,{variant:t,size:r,weight:a,isParagraph:!0,color:s,children:l}),o=({id:t,content:r,hasArrow:a=!0,children:s})=>{const[l,n]=i.useState(!1),c=i.useRef(null),d=()=>{n(!0)},u=()=>{n(!1)};return e.jsxs("div",{className:"flex relative cursor-help",onMouseEnter:d,onMouseLeave:u,children:[s,l&&e.jsx(e.Fragment,{children:e.jsxs("div",{ref:c,id:t,className:m("flex flex-col gap-y-1 absolute -bottom-[0.875rem] left-1/2 z-[99] min-w-[20rem] w-fit py-2 px-3 bg-white rounded-card-md shadow-tooltip transform -translate-x-1/2 translate-y-full"),children:[r,a&&e.jsx("div",{className:"qb-tooltip-arrow"})]})})]})};o.Title=f;o.Body=x;const w=o;try{o.displayName="Tooltip",o.__docgenInfo={description:"",displayName:"Tooltip",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"ReactNode"}},hasArrow:{defaultValue:{value:"true"},description:"",name:"hasArrow",required:!1,type:{name:"boolean"}}}}}catch{}export{w as T};
//# sourceMappingURL=index-cc505eff.js.map

import{j as i}from"./jsx-runtime-4ca860c5.js";import{r as u}from"./index-61bf1805.js";import{T as p}from"./index-5da8d75d.js";import{c as x}from"./index-f9f069f9.js";const b={button:"",example:""},r=({variant:s="button",shouldMultiCheck:c=!1,list:n,initialSelect:m,onUpdateSelected:a})=>{const[l,o]=u.useState(m??[]),d=e=>{o(c?t=>t.includes(e)?t.filter(f=>f!==e):[...t,e]:[e])};return u.useEffect(()=>{a&&a(l)},[a,l]),i.jsx("ul",{className:"flex flex-col items-center grow gap-5",children:n==null?void 0:n.map(({key:e,label:t})=>i.jsx("li",{className:"flex w-full",children:i.jsx("button",{type:"button",className:x("inline-flex items-center justify-center grow min-h-[4rem] py-2 px-4 rounded-button-xl focus:[:not(:focus-visible):outline-none] focus-visible:outline-1 focus-visible:-outline-offset-1 focus-visible:outline-primary-500",b[s],l.includes(e)?"bg-gray-800":"bg-gray-300"),onClick:()=>d(e),children:i.jsx(p,{align:"center",color:l.includes(e)?"text-white":"text-gray-700",children:t})})},e))})},_=r;try{r.displayName="Picker",r.__docgenInfo={description:"",displayName:"Picker",props:{variant:{defaultValue:{value:"button"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"example"'}]}},shouldMultiCheck:{defaultValue:{value:"false"},description:"",name:"shouldMultiCheck",required:!1,type:{name:"boolean"}},list:{defaultValue:null,description:"",name:"list",required:!0,type:{name:"Item[]"}},initialSelect:{defaultValue:null,description:"",name:"initialSelect",required:!1,type:{name:"number[]"}},onUpdateSelected:{defaultValue:null,description:"",name:"onUpdateSelected",required:!1,type:{name:"((selected: number[]) => void)"}}}}}catch{}export{_ as P};
//# sourceMappingURL=index-6f540aa8.js.map

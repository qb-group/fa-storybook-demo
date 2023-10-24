import{j as a}from"./jsx-runtime-7ed143f6.js";import{r as N}from"./_baseForOwn-126b22f4.js";import{g as o,T as I}from"./index-636f3ace.js";import{u as E,a as j}from"./index-57cc85e9.js";import"./_commonjsHelpers-de833af9.js";import"./index-9d475cdf.js";import"./toNumber-b186eb87.js";const u=({isExpanded:n,activeItemId:i,onSelect:d,items:v})=>{const[t,l]=N.useState({expanded:!0,selectedId:i});N.useEffect(()=>{l(e=>({expanded:e.expanded,selectedId:i}))},[i]);const p=e=>{d==null||d({itemId:e})},h=e=>{if(t.expanded){const m=e.itemId===t.selectedId||e.subNav&&e.subNav.some(c=>c.itemId===t.selectedId)||!1;l({expanded:e.subNav&&e.subNav.length>0?!m:!1,selectedId:e.itemId})}else l({expanded:!!(e.subNav&&e.subNav.length>0),selectedId:e.itemId})};return a.jsx(a.Fragment,{children:v.length>0&&a.jsx("nav",{role:"navigation","aria-label":"side-navigation",className:"side-nav",children:a.jsx("ul",{className:"side-nav__list",children:v.map(e=>{const m=e.iconName,c=e.itemId===t.selectedId,f=t.expanded&&(c||e.subNav&&e.subNav.some(s=>s.itemId===t.selectedId)||!1);return a.jsxs(a.Fragment,{children:[a.jsx("li",{className:o("side-nav__item",{"side-nav__item--active":c}),children:a.jsxs("button",{type:"button",onClick:()=>{h(e),p(e.itemId)},className:o("side-nav__item-touch-area",{"side-nav__item-touch-area--expanded":n}),children:[m&&a.jsx("img",{src:`/assets/icons/ico-${e.iconName}.svg`,alt:`${e.iconName} icon`,className:"side-nav__item-icon"}),n&&a.jsx(I,{variant:"head",className:"side-nav__item-label",children:e.label})]})},e.itemId),e.subNav&&e.subNav.length>0&&f&&a.jsx("ul",{className:"side-nav__inner-list",children:e.subNav.map(s=>{const S=s.iconName;return a.jsx("li",{className:"side-nav__inner-item",children:a.jsxs("button",{type:"button",onClick:()=>{l({...t,selectedId:s.itemId}),p(s.itemId)},className:o("side-nav__inner-item-touch-area",{"side-nav__item--active":t.selectedId===s.itemId}),children:[S&&a.jsx("img",{src:`/assets/icons/ico-${e.iconName}.svg`,alt:`${e.iconName} icon`,className:"side-nav__inner-item-icon"}),a.jsx(I,{variant:"head",className:o("side-nav__inner-item-label",{"side-nav__inner-item-label--active":t.selectedId===s.itemId}),children:s.label})]})},s.itemId)})})]})})})})})},g=u;try{u.displayName="SideNav",u.__docgenInfo={description:"",displayName:"SideNav",props:{isExpanded:{defaultValue:null,description:"",name:"isExpanded",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"NavItemProps[]"}},activeItemId:{defaultValue:null,description:"",name:"activeItemId",required:!0,type:{name:"string"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"(({ itemId }: { itemId: string; }) => void)"}}}}}catch{}const O={title:"DESIGN-SYSTEM/layout/SideNav",component:g,tags:["autodocs"]},y=[{label:"OVERVIEW",iconName:"overview",itemId:"main"},{label:"고객정보관리",iconName:"customer",itemId:"management",subNav:[{label:"자산현황",itemId:""},{label:"투자목표",itemId:""},{label:"소득정보",itemId:""},{label:"기본정보",itemId:""},{label:"투자편향",itemId:""}]},{label:"마켓 콤파스",iconName:"navigate",itemId:"market"},{label:"넛지도구",iconName:"cube",itemId:"tools"},{label:"포트폴리오",iconName:"pie-chart",itemId:"portfolio"},{label:"계약관리",iconName:"document",itemId:"contract"}],V=()=>{const n=E(),i=j();return a.jsx(g,{isExpanded:!1,activeItemId:i.pathname,onSelect:({itemId:d})=>{n(d)},items:y})},r=V.bind({});var _,b,x;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const navigate = useNavigate();
  const location = useLocation();
  return <SideNav isExpanded={false} activeItemId={location.pathname} onSelect={({
    itemId
  }) => {
    navigate(itemId);
  }} items={MENU_SAMPLE} />;
}`,...(x=(b=r.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const C=["Default"];export{r as Default,C as __namedExportsOrder,O as default};
//# sourceMappingURL=SideNav.stories-e4c997a6.js.map

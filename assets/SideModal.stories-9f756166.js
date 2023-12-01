import{j as s}from"./jsx-runtime-4ca860c5.js";import{S as i,B as p}from"./index-aa2c32f6.js";import"./img_investment_bias_diagnosis_consultation_4x-2a96972d.js";import"./index-d4b5d7fe.js";import"./index-5da8d75d.js";import"./index-d648fc06.js";import{r as l}from"./index-61bf1805.js";import"./index-f9f069f9.js";import"./_commonjsHelpers-de833af9.js";import"./_baseForOwn-fcf16290.js";import"./index-9d475cdf.js";const E={title:"DESIGN-SYSTEM/ui/SideModal",component:i,tags:["autodocs"],argTypes:{}},m=()=>{const[t,o]=l.useState(!1);return s.jsxs(s.Fragment,{children:[s.jsx(p,{onClick:()=>o(!t),children:t?"Close":"Open"}),s.jsx(i,{isOpen:t,onClose:()=>o(!1),children:"test"})]})},e=m.bind({});e.args={};var n,r,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <>
      <Button onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Close' : 'Open'}</Button>
      <SideModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        test
      </SideModal>
    </>;
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const I=["Default"];export{e as Default,I as __namedExportsOrder,E as default};
//# sourceMappingURL=SideModal.stories-9f756166.js.map

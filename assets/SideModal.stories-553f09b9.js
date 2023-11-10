import{j as s}from"./jsx-runtime-4ca860c5.js";import{S as i,B as p}from"./index-fbaf4a77.js";import"./index-538b702c.js";import{r as l}from"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./_baseForOwn-561664b0.js";import"./index-9d475cdf.js";const C={title:"DESIGN-SYSTEM/ui/SideModal",component:i,tags:["autodocs"],argTypes:{}},d=()=>{const[t,o]=l.useState(!1);return s.jsxs(s.Fragment,{children:[s.jsx(p,{onClick:()=>o(!t),children:t?"Close":"Open"}),s.jsx(i,{isOpen:t,onClose:()=>o(!1),children:"test"})]})},e=d.bind({});e.args={};var n,r,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <>
      <Button onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Close' : 'Open'}</Button>
      <SideModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        test
      </SideModal>
    </>;
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const M=["Default"];export{e as Default,M as __namedExportsOrder,C as default};
//# sourceMappingURL=SideModal.stories-553f09b9.js.map

import{j as e}from"./jsx-runtime-c301395f.js";import{r as f}from"./_baseForOwn-4ea03334.js";import{S as O}from"./index-9cc570f0.js";import{d as l,C as j,T as x,B as C}from"./index-1a378a33.js";import"./_commonjsHelpers-de833af9.js";import"./index-9d475cdf.js";import"./toNumber-b8059529.js";const k={title:"DESIGN-SYSTEM/ui/Confirm",component:l,tags:["autodocs"],argTypes:{},decorators:[s=>e.jsx(j,{alignItems:"center",className:"py-6 px-8",children:e.jsx(s,{})})]},g=s=>{const[o,n]=f.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(C,{onClick:()=>n(a=>!a),children:"Open modal"}),e.jsx(l,{...s,isOpen:o,onClose:()=>n(!1)})]})},r=g.bind({});r.args={title:e.jsx(e.Fragment,{children:"타이틀을 넣어보세요. 길게 작성해보세요."}),onAfterOpen:()=>{},onAfterClose:()=>{alert("onClose 하셨군요?")},children:e.jsx(O,{children:e.jsx(x,{children:"컨텐츠를 자유롭게 작성해보세요."})}),closeLabel:"닫아요",successLabel:"확인했어요",contentLabel:"storybook-confirm",hasCustomActions:!1};const h=s=>{const[o,n]=f.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(C,{onClick:()=>n(a=>!a),children:"Open modal"}),e.jsx(l,{...s,isOpen:o,onClose:()=>n(!1)})]})},t=h.bind({});t.args={title:e.jsxs(e.Fragment,{children:["타이틀을 넣어보세요. 길게 작성해보세요. 모달의 너비가 얼마나 넓어지는지 체험해보세요.",e.jsx("br",{}),"줄바꿈하고 싶은 자리 뒤에 ","<br />"," 태그를 넣어보세요."]}),onAfterOpen:()=>{alert("isOpen을 true로 바꾸셨네요!")},onAfterClose:()=>{},children:e.jsx(O,{children:e.jsx(x,{children:"컨텐츠를 자유롭게 작성해보세요."})}),hasCustomActions:!1};var i,c,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  return <>
      <Button onClick={() => setIsOpen(prev => !prev)}>Open modal</Button>
      <Confirm {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>;
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,d,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  return <>
      <Button onClick={() => setIsOpen(prev => !prev)}>Open modal</Button>
      <Confirm {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>;
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const E=["Default","HasALotOfWords"];export{r as Default,t as HasALotOfWords,E as __namedExportsOrder,k as default};
//# sourceMappingURL=Confirm.stories-191d01a0.js.map

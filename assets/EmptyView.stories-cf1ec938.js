import{j as r}from"./jsx-runtime-4ca860c5.js";import{E as s,C as d}from"./index-fbaf4a77.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./_baseForOwn-561664b0.js";import"./index-9d475cdf.js";import"./index-538b702c.js";const f={title:"DESIGN-SYSTEM/ui/EmptyView",component:s,tags:["autodocs"],argTypes:{},decorators:[]},l=i=>r.jsx(s,{...i}),e=l.bind({});e.args={color:"text-gray-400",message:r.jsx(r.Fragment,{children:"데이터가 없습니다."})};const u=()=>r.jsx(d,{children:r.jsx(s,{color:"text-red-light",message:r.jsxs(r.Fragment,{children:["선택하신 항목이 없습니다. ",r.jsx("br",{}),"메뉴에서 추가할 항목을 선택해 주세요."]})})}),t=u.bind({});var a,o,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  return <EmptyView {...args} />;
}`,...(m=(o=e.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var n,p,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  return <Card>
      <EmptyView color="text-red-light" message={<>
            선택하신 항목이 없습니다. <br />
            메뉴에서 추가할 항목을 선택해 주세요.
          </>} />
    </Card>;
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const h=["Default","CardType"];export{t as CardType,e as Default,h as __namedExportsOrder,f as default};
//# sourceMappingURL=EmptyView.stories-cf1ec938.js.map

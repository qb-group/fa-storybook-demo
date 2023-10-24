import{j as e}from"./jsx-runtime-7ed143f6.js";import{e as a,C as T}from"./index-636f3ace.js";import"./_baseForOwn-126b22f4.js";import"./_commonjsHelpers-de833af9.js";import"./index-9d475cdf.js";import"./toNumber-b186eb87.js";const F={title:"DESIGN-SYSTEM/ui/Chip",component:a,tags:["autodocs"],argTypes:{variant:{control:"inline-radio",options:["filled","outlined","hashtag"]},color:{control:"inline-radio",options:["red","green","blue"]}},decorators:[r=>e.jsx(T,{children:r()})]},S=r=>e.jsx(a,{...r}),t=S.bind({});t.args={variant:"filled",color:"red",label:e.jsx(e.Fragment,{children:"filled"})};const O=["hi","hello","hey"],D=()=>e.jsx(a,{variant:"outlined",color:"red",label:"outlined"}),s=D.bind({}),_=()=>e.jsx(a,{variant:"hashtag",label:"hashtag"}),o=_.bind({}),A=()=>e.jsx("div",{className:"flex items-center gap-2",children:O.map(r=>e.jsx(a,{variant:"hashtag",color:"red",label:r},r))}),l=A.bind({}),E=()=>e.jsx(a,{color:"red",label:"clickable",onClick:()=>alert("Clickable!")}),i=E.bind({});var n,c,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  return <Chip {...args} />;
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,m,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return <Chip variant="outlined" color="red" label="outlined" />;
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,g,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  return <Chip variant="hashtag" label="hashtag" />;
}`,...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var C,x,v;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  return <div className="flex items-center gap-2">
      {MOCK_DATA.map(item => <Chip key={item} variant="hashtag" color="red" label={item} />)}
    </div>;
}`,...(v=(x=l.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var f,j,k;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return <Chip color="red" label="clickable" onClick={() => alert('Clickable!')} />;
}`,...(k=(j=i.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};const G=["Default","Outlined","Hashtag","List","Clickable"];export{i as Clickable,t as Default,o as Hashtag,l as List,s as Outlined,G as __namedExportsOrder,F as default};
//# sourceMappingURL=Chip.stories-6b0fbe75.js.map

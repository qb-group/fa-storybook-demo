import{j as e}from"./jsx-runtime-4ca860c5.js";import{r as v}from"./index-61bf1805.js";import{u as S,F as y,B as N,C as E}from"./index-5cb10bd9.js";import{R as s}from"./index-b1566cde.js";import{T as j}from"./index-f500090c.js";import"./_commonjsHelpers-de833af9.js";import"./index-f9f069f9.js";import"./_baseForOwn-fcf16290.js";import"./index-9d475cdf.js";import"./img_investment_bias_diagnosis_consultation_4x-2a96972d.js";import"./index-674584b1.js";import"./index-3e6b6589.js";const L={title:"DESIGN-SYSTEM/forms/RadioGroup",component:s,tags:["autodocs"],argTypes:{direction:{control:"inline-radio",options:["flex-row","flex-col","grid-row","grid-col"]},variant:{control:"inline-radio",options:["default","button","segment"]},items:{control:"inline-radio",options:[1,2,3,4,5]}}},T=[{value:1,label:"label-이렇게-길면은-어떻게-될까요?"},{value:2,label:"label-2"},{value:3,label:"label-3",disabled:!0},{value:4,label:"label-4"},{value:5,label:"label-5"},{value:6,label:"label-6",disabled:!0},{value:7,label:"label-7"},{value:8,label:"label-8"},{value:9,label:"label-9"}],M=[{value:1,label:"label-1"},{value:2,label:"label-2"},{value:3,label:"label-3",disabled:!0}],O=t=>{const a=S({defaultValues:{"storybook-radio":""}}),{handleSubmit:o}=a,[r,V]=v.useState(""),F=d=>{V(d.target.value)},C=d=>{alert(JSON.stringify(d))};return e.jsx(e.Fragment,{children:t.hasContext?e.jsx(y,{...a,children:e.jsxs("form",{className:"flex-1 flex flex-col",onSubmit:o(C),children:[e.jsx(s,{...t}),e.jsx(N,{type:"submit",className:"mt-8",children:"결과 확인"})]})}):e.jsxs("div",{className:"flex-1 flex flex-col",children:[e.jsx(s,{...t,onChange:F}),e.jsx("div",{className:"mt-10",children:e.jsxs(j,{variant:"head",size:"lg",color:"text-gray-900",children:["selected: ",r]})})]})})},l=O.bind({});l.args={direction:"grid-col",variant:"default",fullWidth:!1,name:"storybook-radio",items:4,gap:"gap-3",hasContext:!0,defaultValue:1,label:"골라봐요",required:!0,options:T};const G=()=>{const[t,a]=v.useState(""),o=r=>{a(r.target.value)};return e.jsxs("div",{children:[e.jsx(s,{name:"has-not-form",variant:"button",options:T,onChange:o,direction:"grid-row",items:2,gap:"gap-6",defaultValue:4}),e.jsx("div",{className:"mt-10",children:e.jsxs(j,{variant:"head",size:"lg",color:"text-gray-900",children:["selected: ",t]})})]})},n=G.bind({}),R=()=>{const t=S({defaultValues:{"storybook-segment-radio":""}}),{handleSubmit:a}=t,o=r=>{alert(JSON.stringify(r))};return e.jsx(E,{children:e.jsx(y,{...t,children:e.jsxs("form",{className:"flex-1 flex flex-col w-full",onSubmit:a(o),children:[e.jsx(s,{name:"storybook-segment-radio",variant:"segment",hasContext:!0,options:M,fullWidth:!0}),e.jsx(N,{type:"submit",className:"mt-8",children:"결과 확인"})]})})})},i=R.bind({});var m,u,c;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const formMethods = useForm<FormFields>({
    defaultValues: {
      'storybook-radio': ''
    }
  });
  const {
    handleSubmit
  } = formMethods;
  const [selectedValue, setSelectedValue] = useState<string | number>('');
  const selectionHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  const onSubmit = (data: unknown) => {
    alert(JSON.stringify(data));
  };
  return <>
      {args.hasContext ? <FormProvider {...formMethods}>
          <form className="flex-1 flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <RadioGroup {...args} />
            <Button type="submit" className="mt-8">
              결과 확인
            </Button>
          </form>
        </FormProvider> : <div className="flex-1 flex flex-col">
          <RadioGroup {...args} onChange={selectionHandler} />
          <div className="mt-10">
            <Typography variant="head" size="lg" color="text-gray-900">
              selected: {selectedValue}
            </Typography>
          </div>
        </div>}
    </>;
}`,...(c=(u=l.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var p,f,b;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const [selectedValue, setSelectedValue] = useState<string | number>('');
  const selectionHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  return <div>
      <RadioGroup name="has-not-form" variant="button" options={OPTIONS} onChange={selectionHandler} direction="grid-row" items={2} gap="gap-6" defaultValue={4} />
      <div className="mt-10">
        <Typography variant="head" size="lg" color="text-gray-900">
          selected: {selectedValue}
        </Typography>
      </div>
    </div>;
}`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var g,h,x;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const formMethods = useForm<FormFields>({
    defaultValues: {
      'storybook-segment-radio': ''
    }
  });
  const {
    handleSubmit
  } = formMethods;
  const onSubmit = (data: unknown) => {
    alert(JSON.stringify(data));
  };
  return <Card>
      <FormProvider {...formMethods}>
        <form className="flex-1 flex flex-col w-full" onSubmit={handleSubmit(onSubmit)}>
          <RadioGroup name="storybook-segment-radio" variant="segment" hasContext options={SEGMENT_OPTIONS} fullWidth />
          <Button type="submit" className="mt-8">
            결과 확인
          </Button>
        </form>
      </FormProvider>
    </Card>;
}`,...(x=(h=i.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const q=["Default","NotUsingForm","SegmentRadioGroup"];export{l as Default,n as NotUsingForm,i as SegmentRadioGroup,q as __namedExportsOrder,L as default};
//# sourceMappingURL=RadioGroup.stories-81abf4e6.js.map

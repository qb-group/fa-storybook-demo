import{j as e}from"./jsx-runtime-c301395f.js";import{r as f}from"./_baseForOwn-4ea03334.js";import{u as y,F as N}from"./index-256a9511.js";import{B as j,T as v}from"./index-886f8287.js";import"./index-2afc1e2a.js";import{R as r}from"./index-a17fd60a.js";import"./_commonjsHelpers-de833af9.js";import"./index-9d475cdf.js";import"./toNumber-b8059529.js";const I={title:"DESIGN-SYSTEM/forms/RadioGroup",component:r,tags:["autodocs"],argTypes:{direction:{control:"inline-radio",options:["flex-row","flex-col","grid-row","grid-col"]},variant:{control:"inline-radio",options:["default","button"]},items:{control:"inline-radio",options:[1,2,3,4,5]}}},b=[{value:1,label:"label-이렇게-길면은-어떻게-될까요?"},{value:2,label:"label-2"},{value:3,label:"label-3",disabled:!0},{value:4,label:"label-4"},{value:5,label:"label-5"},{value:6,label:"label-6",disabled:!0},{value:7,label:"label-7"},{value:8,label:"label-8"},{value:9,label:"label-9"}],T=t=>{const o=y({defaultValues:{"storybook-radio":""}}),{handleSubmit:s}=o,[n,x]=f.useState(""),h=i=>{x(i.target.value)},S=i=>{alert(JSON.stringify(i))};return e.jsx(e.Fragment,{children:t.hasContext?e.jsx(N,{...o,children:e.jsxs("form",{className:"flex-1 flex flex-col",onSubmit:s(S),children:[e.jsx(r,{...t}),e.jsx(j,{type:"submit",className:"mt-8",children:"결과 확인"})]})}):e.jsxs("div",{className:"flex-1 flex flex-col",children:[e.jsx(r,{...t,onChange:h}),e.jsx("div",{className:"mt-10",children:e.jsxs(v,{variant:"head",size:"lg",color:"text-gray-900",children:["selected: ",n]})})]})})},a=T.bind({});a.args={direction:"grid-col",variant:"default",fullWidth:!1,name:"storybook-radio",items:4,gap:"gap-3",hasContext:!0,label:"골라봐요",required:!0,options:b};const V=()=>{const[t,o]=f.useState(""),s=n=>{o(n.target.value)};return e.jsxs("div",{children:[e.jsx(r,{name:"has-not-form",options:b,onChange:s,direction:"grid-row",items:2,gap:"gap-6"}),e.jsx("div",{className:"mt-10",children:e.jsxs(v,{variant:"head",size:"lg",color:"text-gray-900",children:["selected: ",t]})})]})},l=V.bind({});var d,c,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
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
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,p,g;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [selectedValue, setSelectedValue] = useState<string | number>('');
  const selectionHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  return <div>
      <RadioGroup name="has-not-form" options={OPTIONS} onChange={selectionHandler} direction="grid-row" items={2} gap="gap-6" />
      <div className="mt-10">
        <Typography variant="head" size="lg" color="text-gray-900">
          selected: {selectedValue}
        </Typography>
      </div>
    </div>;
}`,...(g=(p=l.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const P=["Default","NotUsingForm"];export{a as Default,l as NotUsingForm,P as __namedExportsOrder,I as default};
//# sourceMappingURL=RadioGroup.stories-b3279e5d.js.map

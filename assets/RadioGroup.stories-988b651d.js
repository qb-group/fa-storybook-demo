import{j as e}from"./jsx-runtime-4ca860c5.js";import"./index-43f7a015.js";import"./index-62ab68bf.js";import{R as r}from"./index-8cf7e38c.js";import{u as y,F as N,B as V}from"./index-fbaf4a77.js";import{T as f}from"./index-538b702c.js";import{r as v}from"./index-61bf1805.js";import"./_baseForOwn-561664b0.js";import"./_commonjsHelpers-de833af9.js";import"./formatters-2cdf89d2.js";import"./dayjs.min-941aafe8.js";import"./index-9d475cdf.js";const z={title:"DESIGN-SYSTEM/forms/RadioGroup",component:r,tags:["autodocs"],argTypes:{direction:{control:"inline-radio",options:["flex-row","flex-col","grid-row","grid-col"]},variant:{control:"inline-radio",options:["default","button"]},items:{control:"inline-radio",options:[1,2,3,4,5]}}},b=[{value:1,label:"label-이렇게-길면은-어떻게-될까요?"},{value:2,label:"label-2"},{value:3,label:"label-3",disabled:!0},{value:4,label:"label-4"},{value:5,label:"label-5"},{value:6,label:"label-6",disabled:!0},{value:7,label:"label-7"},{value:8,label:"label-8"},{value:9,label:"label-9"}],j=t=>{const o=y({defaultValues:{"storybook-radio":""}}),{handleSubmit:s}=o,[n,x]=v.useState(""),h=i=>{x(i.target.value)},S=i=>{alert(JSON.stringify(i))};return e.jsx(e.Fragment,{children:t.hasContext?e.jsx(N,{...o,children:e.jsxs("form",{className:"flex-1 flex flex-col",onSubmit:s(S),children:[e.jsx(r,{...t}),e.jsx(V,{type:"submit",className:"mt-8",children:"결과 확인"})]})}):e.jsxs("div",{className:"flex-1 flex flex-col",children:[e.jsx(r,{...t,onChange:h}),e.jsx("div",{className:"mt-10",children:e.jsxs(f,{variant:"head",size:"lg",color:"text-gray-900",children:["selected: ",n]})})]})})},a=j.bind({});a.args={direction:"grid-col",variant:"default",fullWidth:!1,name:"storybook-radio",items:4,gap:"gap-3",hasContext:!0,defaultValue:1,label:"골라봐요",required:!0,options:b};const T=()=>{const[t,o]=v.useState(""),s=n=>{o(n.target.value)};return e.jsxs("div",{children:[e.jsx(r,{name:"has-not-form",options:b,onChange:s,direction:"grid-row",items:2,gap:"gap-6",defaultValue:4}),e.jsx("div",{className:"mt-10",children:e.jsxs(f,{variant:"head",size:"lg",color:"text-gray-900",children:["selected: ",t]})})]})},l=T.bind({});var d,c,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
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
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var m,p,g;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [selectedValue, setSelectedValue] = useState<string | number>('');
  const selectionHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  return <div>
      <RadioGroup name="has-not-form" options={OPTIONS} onChange={selectionHandler} direction="grid-row" items={2} gap="gap-6" defaultValue={4} />
      <div className="mt-10">
        <Typography variant="head" size="lg" color="text-gray-900">
          selected: {selectedValue}
        </Typography>
      </div>
    </div>;
}`,...(g=(p=l.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const B=["Default","NotUsingForm"];export{a as Default,l as NotUsingForm,B as __namedExportsOrder,z as default};
//# sourceMappingURL=RadioGroup.stories-988b651d.js.map

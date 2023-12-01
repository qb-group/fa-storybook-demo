import{j as e}from"./jsx-runtime-4ca860c5.js";import"./index-e331d16d.js";import{C as r}from"./index-fdfdd057.js";import"./index-e6477e2d.js";import{u as h,F as x,B as f}from"./index-aa2c32f6.js";import"./img_investment_bias_diagnosis_consultation_4x-2a96972d.js";import"./index-d4b5d7fe.js";import{T as b}from"./index-5da8d75d.js";import"./index-d648fc06.js";import{r as k}from"./index-61bf1805.js";import"./_baseForOwn-fcf16290.js";import"./_commonjsHelpers-de833af9.js";import"./formatters-2037c84a.js";import"./dayjs.min-941aafe8.js";import"./index-f9f069f9.js";import"./index-9d475cdf.js";const P={title:"DESIGN-SYSTEM/forms/Checkbox",component:r,tags:["autodocs"],argTypes:{label:{description:"checkbox의 라벨. 필수가 아닙니다."},name:{description:"checkbox의 name. 고유한 이름입니다."},size:{control:"inline-radio",options:["lg","md","sm","xs"]},color:{control:"inline-radio",options:["primary","secondary"]},reverse:{description:"checkbox의 icon과 label의 좌우 위치를 바꿉니다."},submit:{description:"form 요소 여부입니다."}}},g=t=>{const[a,m]=k.useState(!1),d=()=>{m(s=>!s)},l=h({defaultValues:{"storybook-checkbox":!1}}),{handleSubmit:p}=l,u=s=>{alert(JSON.stringify(s))};return e.jsx(e.Fragment,{children:t.hasContext?e.jsx(x,{...l,children:e.jsxs("form",{className:"flex flex-col",onSubmit:p(u),children:[e.jsx(r,{...t}),e.jsx(f,{type:"submit",className:"mt-8",children:"결과 확인"})]})}):e.jsxs("div",{className:"flex flex-col",children:[e.jsx(r,{...t,checked:a,onChange:d}),e.jsx("div",{className:"mt-10",children:a&&e.jsx(b,{variant:"head",size:"lg",color:"text-gray-900",children:"checked"})})]})})},o=g.bind({});o.args={label:"label",name:"storybook-checkbox",size:"md",color:"primary",reverse:!1,disabled:!1,defaultChecked:!0,hasContext:!1};var c,i,n;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const [selectedValue, setSelectedValue] = useState(false);
  const selectionHandler = () => {
    setSelectedValue(prev => !prev);
  };
  const formMethods = useForm<FormFields>({
    defaultValues: {
      'storybook-checkbox': false
    }
  });
  const {
    handleSubmit
  } = formMethods;
  const onSubmit = (data: unknown) => {
    alert(JSON.stringify(data));
  };
  return <>
      {args.hasContext ? <FormProvider {...formMethods}>
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <Checkbox {...args} />
            <Button type="submit" className="mt-8">
              결과 확인
            </Button>
          </form>
        </FormProvider> : <div className="flex flex-col">
          <Checkbox {...args} checked={selectedValue} onChange={selectionHandler} />
          <div className="mt-10">
            {selectedValue && <Typography variant="head" size="lg" color="text-gray-900">
                checked
              </Typography>}
          </div>
        </div>}
    </>;
}`,...(n=(i=o.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const _=["Default"];export{o as Default,_ as __namedExportsOrder,P as default};
//# sourceMappingURL=Checkbox.stories-c826e28f.js.map

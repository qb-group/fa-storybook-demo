import{j as e}from"./jsx-runtime-f8c26e3d.js";import{r as p}from"./_baseForOwn-7166a1ea.js";import{u as x,F as f}from"./index-98a37aa2.js";import"./index-605d1cec.js";import{C as r}from"./index-652d117f.js";import{B as b,T as g}from"./index-e0ffeaf3.js";import"./_commonjsHelpers-de833af9.js";import"./dayjs.min-941aafe8.js";import"./index-9d475cdf.js";import"./toNumber-f85bf064.js";const M={title:"DESIGN-SYSTEM/forms/Checkbox",component:r,tags:["autodocs"],argTypes:{label:{description:"checkbox의 라벨. 필수가 아닙니다."},name:{description:"checkbox의 name. 고유한 이름입니다."},size:{control:"inline-radio",options:["lg","md","sm","xs"]},color:{control:"inline-radio",options:["primary","tertiary"]},reverse:{description:"checkbox의 icon과 label의 좌우 위치를 바꿉니다."},submit:{description:"form 요소 여부입니다."}}},k=s=>{const[a,m]=p.useState(!1),d=()=>{m(t=>!t)},l=x({defaultValues:{"storybook-checkbox":!1}}),{handleSubmit:u}=l,h=t=>{alert(JSON.stringify(t))};return e.jsx(e.Fragment,{children:s.hasContext?e.jsx(f,{...l,children:e.jsxs("form",{className:"flex flex-col",onSubmit:u(h),children:[e.jsx(r,{...s}),e.jsx(b,{type:"submit",className:"mt-8",children:"결과 확인"})]})}):e.jsxs("div",{className:"flex flex-col",children:[e.jsx(r,{...s,checked:a,onChange:d}),e.jsx("div",{className:"mt-10",children:a&&e.jsx(g,{variant:"head",size:"lg",color:"text-gray-900",children:"checked"})})]})})},o=k.bind({});o.args={label:"label",name:"storybook-checkbox",size:"md",color:"primary",reverse:!1,hasContext:!1,disabled:!1};var c,i,n;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
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
}`,...(n=(i=o.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const z=["Default"];export{o as Default,z as __namedExportsOrder,M as default};
//# sourceMappingURL=Checkbox.stories-423915e3.js.map

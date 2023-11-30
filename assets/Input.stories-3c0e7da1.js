import{j as e}from"./jsx-runtime-4ca860c5.js";import{I as a}from"./index-9aa983f5.js";import"./index-1c0ac9e4.js";import"./index-b1566cde.js";import{u as f,F as h,B as g}from"./index-5cb10bd9.js";import"./img_investment_bias_diagnosis_consultation_4x-2a96972d.js";import"./index-674584b1.js";import"./index-f500090c.js";import"./index-3e6b6589.js";import{r as x}from"./index-61bf1805.js";import{c as b,a as y}from"./index.esm-2961b60f.js";import{o as v}from"./yup-32afb229.js";import"./_baseForOwn-fcf16290.js";import"./_commonjsHelpers-de833af9.js";import"./formatters-2037c84a.js";import"./dayjs.min-941aafe8.js";import"./index-f9f069f9.js";import"./index-9d475cdf.js";const S=b().shape({"storybook-input":y().required("필수 입력")}),R={title:"DESIGN-SYSTEM/forms/Input",component:a,tags:["autodocs"],argTypes:{type:{control:"select",options:["text","number","password","phone-number","date","custom-date","date-to-today","currency"]},flexDirection:{control:"inline-radio",options:["row","column"]},variant:{control:"inline-radio",options:["default","bordered","ghost"]},size:{control:"inline-radio",options:["lg","default","sm"]},align:{control:"inline-radio",options:["left","center","right"]},color:{control:"inline-radio",options:["default","primary","secondary"]}}},C=o=>{const s=f({resolver:v(S)}),{handleSubmit:u}=s,m=r=>{alert(JSON.stringify(r))},[c,d]=x.useState("Default Value"),p=r=>{d(r.target.value)};return e.jsx(e.Fragment,{children:o.hasContext===!0?e.jsx(h,{...s,children:e.jsxs("form",{className:"flex flex-col gap-y-10",onSubmit:u(m),children:[e.jsx(a,{...o}),e.jsx(g,{type:"submit",children:"저장"})]})}):e.jsx("div",{className:"flex flex-col gap-y-10",children:e.jsx(a,{...o,value:c,onChange:p})})})},t=C.bind({});t.args={name:"storybook-input",placeholder:"try controls",type:"text",variant:"bordered",size:"default",align:"left",color:"primary",label:"label",required:!0,defaultValue:"Default Value",disabled:!1,readOnly:!1,flexDirection:"column",iconName:"icon-basic-search",clearable:!0,onClick:void 0,unit:"",outside:!1,hasNegativeNumbers:!0,hasContext:!0,showCurrencyValue:!0};var n,i,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  const formMethods = useForm<FormFields>({
    resolver: yupResolver(formSchema)
  });
  const {
    handleSubmit
  } = formMethods;
  const onSubmit = (data: unknown) => {
    alert(JSON.stringify(data));
  };
  const [isValue, setIsValue] = useState<string | number>('Default Value');
  const handleChange = (e: ChangeEvent<HTMLInputElement> | {
    target: {
      name: string;
      value: string | number;
    };
  }) => {
    setIsValue(e.target.value);
  };
  return <>
      {args.hasContext === true ? <FormProvider {...formMethods}>
          <form className="flex flex-col gap-y-10" onSubmit={handleSubmit(onSubmit)}>
            <Input {...args} />
            <Button type="submit">저장</Button>
          </form>
        </FormProvider> : <div className="flex flex-col gap-y-10">
          <Input {...args} value={isValue} onChange={handleChange} />
        </div>}
    </>;
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const $=["Default"];export{t as Default,$ as __namedExportsOrder,R as default};
//# sourceMappingURL=Input.stories-3c0e7da1.js.map

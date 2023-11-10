import{j as e}from"./jsx-runtime-4ca860c5.js";import{I as a}from"./index-43f7a015.js";import"./index-62ab68bf.js";import"./index-8cf7e38c.js";import{u as f,F as h,B as g}from"./index-fbaf4a77.js";import"./index-538b702c.js";import{r as x}from"./index-61bf1805.js";import{c as b,a as y}from"./index.esm-2961b60f.js";import{o as S}from"./yup-ce9fdf22.js";import"./_baseForOwn-561664b0.js";import"./_commonjsHelpers-de833af9.js";import"./formatters-2cdf89d2.js";import"./dayjs.min-941aafe8.js";import"./index-9d475cdf.js";const v=b().shape({"storybook-input":y().required("필수 입력")}),_={title:"DESIGN-SYSTEM/forms/Input",component:a,tags:["autodocs"],argTypes:{type:{control:"select",options:["text","number","password","phone-number","date","custom-date","date-to-today","currency"]},flexDirection:{control:"inline-radio",options:["row","column"]},variant:{control:"inline-radio",options:["default","bordered","ghost"]},size:{control:"inline-radio",options:["lg","default","sm"]},align:{control:"inline-radio",options:["left","center","right"]},color:{control:"inline-radio",options:["default","primary","secondary"]}}},C=o=>{const s=f({resolver:S(v)}),{handleSubmit:u}=s,m=r=>{alert(JSON.stringify(r))},[c,d]=x.useState("Default Value"),p=r=>{d(r.target.value)};return e.jsx(e.Fragment,{children:o.hasContext===!0?e.jsx(h,{...s,children:e.jsxs("form",{className:"flex flex-col gap-y-10",onSubmit:u(m),children:[e.jsx(a,{...o}),e.jsx(g,{type:"submit",children:"저장"})]})}):e.jsx("div",{className:"flex flex-col gap-y-10",children:e.jsx(a,{...o,value:c,onChange:p})})})},t=C.bind({});t.args={name:"storybook-input",placeholder:"try controls",type:"text",variant:"bordered",size:"default",align:"left",color:"primary",label:"label",required:!0,defaultValue:"Default Value",disabled:!1,readOnly:!1,flexDirection:"column",iconName:"icon-basic-search",clearable:!0,onClick:()=>{},unit:"",outside:!1,showCurrencyValue:!0,hasContext:!0};var n,l,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
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
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const q=["Default"];export{t as Default,q as __namedExportsOrder,_ as default};
//# sourceMappingURL=Input.stories-c06bf7b4.js.map

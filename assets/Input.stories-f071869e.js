import{j as e}from"./jsx-runtime-c301395f.js";import{r as f}from"./_baseForOwn-4ea03334.js";import{u as h,F as g}from"./index-93002463.js";import{o as x}from"./yup-d0cd9880.js";import{c as b,a as y}from"./index.esm-2961b60f.js";import{I as a}from"./index-ea6158c3.js";import"./index-692f7a1b.js";import{B as S}from"./index-1a378a33.js";import"./_commonjsHelpers-de833af9.js";import"./index-9d475cdf.js";import"./toNumber-b8059529.js";const v=b().shape({"storybook-input":y().required("필수 입력")}),T={title:"DESIGN-SYSTEM/forms/Input",component:a,tags:["autodocs"],argTypes:{type:{control:"select",options:["text","number","password","phone-number","date","today-date","currency"]},flexDirection:{control:"inline-radio",options:["row","column"]},variant:{control:"inline-radio",options:["default","bordered","ghost"]},size:{control:"inline-radio",options:["lg","md","sm","xs"]},align:{control:"inline-radio",options:["left","center","right"]},color:{control:"inline-radio",options:["default","primary","tertiary"]}}},C=o=>{const s=h({resolver:x(v)}),{handleSubmit:u}=s,m=r=>{alert(JSON.stringify(r))},[c,d]=f.useState("Default Value"),p=r=>{d(r.target.value)};return e.jsx(e.Fragment,{children:o.hasContext===!0?e.jsx(g,{...s,children:e.jsxs("form",{className:"flex flex-col gap-y-10",onSubmit:u(m),children:[e.jsx(a,{...o}),e.jsx(S,{type:"submit",children:"저장"})]})}):e.jsx("div",{className:"flex flex-col gap-y-10",children:e.jsx(a,{...o,value:c,onChange:p})})})},t=C.bind({});t.args={name:"storybook-input",placeholder:"try controls",type:"text",variant:"bordered",size:"md",align:"left",color:"default",label:"label",required:!0,defaultValue:"Default Value",disabled:!1,flexDirection:"column",iconName:"icon-basic-search",clearable:!0,onClick:()=>{},unit:"",outside:!1,showCurrencyValue:!0,hasContext:!0};var n,l,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
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
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const O=["Default"];export{t as Default,O as __namedExportsOrder,T as default};
//# sourceMappingURL=Input.stories-f071869e.js.map

import{j as e}from"./jsx-runtime-c301395f.js";import{S as s,u as d,F as f}from"./index-256a9511.js";import{o as S}from"./yup-86a89233.js";import{c as p,a as h}from"./index.esm-2961b60f.js";import{C as x,B as b}from"./index-886f8287.js";import"./_baseForOwn-4ea03334.js";import"./_commonjsHelpers-de833af9.js";import"./index-9d475cdf.js";import"./toNumber-b8059529.js";const v=p().shape({select:h().required("Select correct item")}),M={title:"DESIGN-SYSTEM/forms/Select",component:s,tags:["autodocs"],argTypes:{variant:{control:"inline-radio",options:["title","item"]},flexDirection:{control:"inline-radio",options:["row","column"]},defaultValue:{control:"inline-radio",options:["1","2","3"]},maxRow:{control:"inline-radio",options:[3,4,5,6,7]}},decorators:[t=>e.jsx(x,{children:e.jsx(t,{})})]},F=t=>{const l=d({defaultValues:{select:""},resolver:S(v)}),{handleSubmit:m}=l,c=r=>{r.select?alert("SUCCESS"):alert("FAIL")},u=r=>{alert(`Item with value ${r}.`)};return e.jsx(e.Fragment,{children:t.hasContext?e.jsx(f,{...l,children:e.jsxs("form",{onSubmit:m(c),className:"inline-flex flex-col gap-y-10",children:[e.jsx(s,{...t}),e.jsx(b,{type:"submit",size:"sm",children:"NEXT"})]})}):e.jsx(s,{...t,resetThenSet:u,hasContext:!1})})},o=F.bind({});o.args={name:"select",label:"label",required:!1,flexDirection:"column",variant:"item",list:[{id:1,value:"1",label:"배우자 배우자 배우자 배우자 배우자 배우자 배우자 배우자 뭘 배우자?"},{id:2,value:"2",label:"자녀"},{id:3,value:"3",label:"기타가족"}],isEllipsis:!0,maxRow:5,disabled:!1,readonly:!1,hasContext:!0};var a,i,n;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  const formMethods = useForm<FormFields>({
    defaultValues: {
      select: ''
    },
    resolver: yupResolver(formSchema)
  });
  const {
    handleSubmit
  } = formMethods;
  const onSubmit: SubmitHandler<FormFields> = values => {
    if (values.select) {
      alert('SUCCESS');
    } else {
      alert('FAIL');
    }
  };
  const resetThenSet = (value: number) => {
    alert(\`Item with value \${value}.\`);
  };
  return <>
      {args.hasContext ? <FormProvider {...formMethods}>
          <form onSubmit={handleSubmit(onSubmit)} className="inline-flex flex-col gap-y-10">
            <Select {...args} />
            <Button type="submit" size="sm">
              NEXT
            </Button>
          </form>
        </FormProvider> : <Select {...args} resetThenSet={resetThenSet} hasContext={false} />}
    </>;
}`,...(n=(i=o.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const N=["Default"];export{o as Default,N as __namedExportsOrder,M as default};
//# sourceMappingURL=Select.stories-941609a9.js.map

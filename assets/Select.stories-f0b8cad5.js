import{j as e}from"./jsx-runtime-4ca860c5.js";import{d as s,C as d,u as f,F as S,B as p}from"./index-fbaf4a77.js";import{c as h,a as x}from"./index.esm-2961b60f.js";import{o as b}from"./yup-ce9fdf22.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./_baseForOwn-561664b0.js";import"./index-9d475cdf.js";import"./index-538b702c.js";const v=h().shape({select:x().required("Select correct item")}),M={title:"DESIGN-SYSTEM/forms/Select",component:s,tags:["autodocs"],argTypes:{variant:{control:"inline-radio",options:["title","item"]},flexDirection:{control:"inline-radio",options:["row","column"]},defaultValue:{control:"inline-radio",options:["1","2","3"]},maxRow:{control:"inline-radio",options:[3,4,5,6,7]}},decorators:[t=>e.jsx(d,{children:e.jsx(t,{})})]},F=t=>{const l=f({defaultValues:{select:""},resolver:b(v)}),{handleSubmit:m}=l,c=r=>{r.select?alert("SUCCESS"):alert("FAIL")},u=r=>{alert(`Item with value ${r}.`)};return e.jsx(e.Fragment,{children:t.hasContext?e.jsx(S,{...l,children:e.jsxs("form",{onSubmit:m(c),className:"inline-flex flex-col gap-y-10",children:[e.jsx(s,{...t}),e.jsx(p,{type:"submit",children:"NEXT"})]})}):e.jsx(s,{...t,resetThenSet:u,hasContext:!1})})},o=F.bind({});o.args={name:"select",label:"label",required:!1,flexDirection:"column",variant:"item",list:[{id:1,value:"1",label:"배우자 배우자 배우자 배우자 배우자 배우자 배우자 배우자 뭘 배우자?"},{id:2,value:"2",label:"자녀"},{id:3,value:"3",label:"기타가족"}],isEllipsis:!0,maxRow:4,disabled:!1,readonly:!1,hasContext:!0};var a,i,n;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
            <Button type="submit">NEXT</Button>
          </form>
        </FormProvider> : <Select {...args} resetThenSet={resetThenSet} hasContext={false} />}
    </>;
}`,...(n=(i=o.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const N=["Default"];export{o as Default,N as __namedExportsOrder,M as default};
//# sourceMappingURL=Select.stories-f0b8cad5.js.map

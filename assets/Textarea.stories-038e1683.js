import{j as o}from"./jsx-runtime-c301395f.js";import{o as l}from"./yup-86a89233.js";import{c as m,a as c}from"./index.esm-2961b60f.js";import{u as d,F as p}from"./index-256a9511.js";import"./index-2afc1e2a.js";import{a as s}from"./index-a17fd60a.js";import"./_baseForOwn-4ea03334.js";import"./_commonjsHelpers-de833af9.js";import"./index-886f8287.js";import"./index-9d475cdf.js";import"./toNumber-b8059529.js";const u=m().shape({"storybook-textarea":c().required("인풋 제대로 입력해주세요")}),E={title:"DESIGN-SYSTEM/forms/Textarea",component:s,tags:["autodocs"],argTypes:{type:{control:"select",options:["number","text","password"]},flexDirection:{control:"inline-radio",options:["row","column"]},variant:{control:"inline-radio",options:["bordered","ghost"]},size:{control:"inline-radio",options:["lg","md","sm","xs"]},align:{control:"inline-radio",options:["left","center","right"]},color:{control:"inline-radio",options:["primary","tertiary"]}}},f=i=>{const n=d({resolver:l(u)});return o.jsx(p,{...n,children:o.jsx(s,{...i})})},r=f.bind({});r.args={name:"storybook-textarea",placeholder:"try controls",variant:"bordered",size:"md",align:"left",color:"primary",label:"label",required:!0,defaultValue:"Default Value",disabled:!1,readOnly:!1,flexDirection:"column",clearable:!0};var e,t,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`args => {
  const formMethods = useForm<FormFields>({
    resolver: yupResolver(formSchema)
  });
  return <FormProvider {...formMethods}>
      <Textarea {...args} />
    </FormProvider>;
}`,...(a=(t=r.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const M=["Default"];export{r as Default,M as __namedExportsOrder,E as default};
//# sourceMappingURL=Textarea.stories-038e1683.js.map

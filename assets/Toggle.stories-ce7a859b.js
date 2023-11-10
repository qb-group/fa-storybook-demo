import{j as e}from"./jsx-runtime-4ca860c5.js";import"./index-751d9ea2.js";import{T as l}from"./index-7a536d77.js";import"./index-2c956aba.js";import{u as x,F as h,B as v}from"./index-890f3064.js";import{T as S}from"./index-741d507f.js";import{r as T}from"./index-61bf1805.js";import"./_baseForOwn-fcf16290.js";import"./_commonjsHelpers-de833af9.js";import"./formatters-2cdf89d2.js";import"./dayjs.min-941aafe8.js";import"./index-9d475cdf.js";const _={title:"DESIGN-SYSTEM/forms/Toggle",component:l,tags:["autodocs"],argTypes:{}},y=o=>{const[r,a]=T.useState(!1),m=x({defaultValues:{"storybook-toggle":1}}),{handleSubmit:f}=m,b=g=>{alert(JSON.stringify(g))};return e.jsx(e.Fragment,{children:o.hasContext?e.jsx(h,{...m,children:e.jsxs("form",{onSubmit:f(b),className:"flex flex-col",children:[e.jsx(l,{...o}),e.jsx(v,{type:"submit",className:"mt-8",children:"결과 확인"})]})}):e.jsxs("div",{className:"flex flex-col",children:[e.jsx(l,{...o,isToggled:r,onToggle:()=>a(g=>!g)}),e.jsx("div",{className:"mt-8",children:e.jsxs(S,{children:["isToggled: ",r?"true":"false"]})})]})})},s=y.bind({});s.args={name:"storybook-toggle",options:[{value:1,label:"직접입력"},{value:2,label:"마이데이터"}],hasContext:!0};const N=()=>{const[o,r]=T.useState(!1);return e.jsx(e.Fragment,{children:e.jsx(l,{name:"storybook-toggle-2",label:"storybook toggle 2",isToggled:o,onToggle:()=>r(a=>!a),options:[{value:1,label:"직접입력"},{value:2,label:"마이데이터"}]})})},t=N.bind({});t.args={};var i,n,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const [isToggled, setIsToggled] = useState(false);
  const formMethods = useForm<FormFields>({
    defaultValues: {
      'storybook-toggle': 1
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
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <Toggle {...args} />
            <Button type="submit" className="mt-8">
              결과 확인
            </Button>
          </form>
        </FormProvider> : <div className="flex flex-col">
          <Toggle {...args} isToggled={isToggled} onToggle={() => setIsToggled(prev => !prev)} />

          <div className="mt-8">
            <Typography>isToggled: {isToggled ? 'true' : 'false'}</Typography>
          </div>
        </div>}
    </>;
}`,...(d=(n=s.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var c,u,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const [isToggled, setIsToggled] = useState(false);
  return <>
      <Toggle name="storybook-toggle-2" label="storybook toggle 2" isToggled={isToggled} onToggle={() => setIsToggled(prev => !prev)} options={[{
      value: 1,
      label: '직접입력'
    }, {
      value: 2,
      label: '마이데이터'
    }]} />
    </>;
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const J=["Default","NotUsingForm"];export{s as Default,t as NotUsingForm,J as __namedExportsOrder,_ as default};
//# sourceMappingURL=Toggle.stories-ce7a859b.js.map

import{j as e}from"./jsx-runtime-7ed143f6.js";import{I as l}from"./index-92ff436f.js";import{u as b,F as f,S as h}from"./index-1ff8c9ba.js";import{G as m}from"./index-636f3ace.js";import{o as x}from"./yup-abc685f1.js";import{c as j,a as s}from"./index.esm-2961b60f.js";import"./_baseForOwn-126b22f4.js";import"./_commonjsHelpers-de833af9.js";import"./dayjs.min-941aafe8.js";import"./index-9d475cdf.js";import"./toNumber-b186eb87.js";const g=j().shape({userName:s().required("이름."),email:s().required("메일주소."),role:s().required("권한.")}),$={title:"DESIGN-SYSTEM/ui/Grid",component:m,tags:["autodocs"],argTypes:{flow:{control:"inline-radio",options:["row","column"]},item:{control:"select",options:[1,2,3,4,5,6]},gap:{control:"select",options:["none",1,2,3,4,5,6,7,8,9,10]},rowGap:{control:"select",options:["none",0,1,2,3,4,5,6,7,8,9,10]},columnGap:{control:"select",options:["none",0,1,2,3,4,5,6,7,8,9,10]}},decorators:[o=>{const a=b({defaultValues:{userName:"",term:"쿼터백 자산운용",email:"",tel:"",role:"일반"},resolver:x(g)});return e.jsx(f,{...a,children:e.jsx(o,{})})}]},G=o=>e.jsx(m,{...o}),S=[1,2,3,4,5,6,7,8,9,10,11],r=G.bind({});r.args={flow:"row",item:2,gap:3,children:e.jsx(e.Fragment,{children:S.map((o,a)=>e.jsxs("div",{className:"flex items-center justify-center p-4 bg-primary-500 rounded text-body-base text-white",children:["Item-",a+1]},a))})};const q=()=>e.jsxs(m,{flow:"column",item:2,gap:10,children:[e.jsx(l,{name:"userName",placeholder:"이름",label:"이름",required:!0}),e.jsx(l,{name:"term",placeholder:"소속.",label:"소속"}),e.jsx(l,{name:"email",placeholder:"메일주소.",label:"이메일 주소",required:!0}),e.jsx(l,{type:"tel",name:"tel",placeholder:"번호",label:"휴대폰 번호"}),e.jsx(h,{name:"role",label:"권한 설정",required:!0,list:[{id:1,value:1,label:"일반"},{id:2,value:2,label:"관리자"},{id:3,value:3,label:"시스템 관리자"}]})]}),t=q.bind({});var i,n,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:"args => <Grid {...args} />",...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var p,d,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return <Grid flow="column" item={2} gap={10}>
      <Input name="userName" placeholder="이름" label="이름" required />
      <Input name="term" placeholder="소속." label="소속" />
      <Input name="email" placeholder="메일주소." label="이메일 주소" required />
      <Input type="tel" name="tel" placeholder="번호" label="휴대폰 번호" />
      <Select name="role" label="권한 설정" required list={[{
      id: 1,
      value: 1,
      label: '일반'
    }, {
      id: 2,
      value: 2,
      label: '관리자'
    }, {
      id: 3,
      value: 3,
      label: '시스템 관리자'
    }]} />
    </Grid>;
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const O=["Default","Form"];export{r as Default,t as Form,O as __namedExportsOrder,$ as default};
//# sourceMappingURL=Grid.stories-3f85b0fa.js.map

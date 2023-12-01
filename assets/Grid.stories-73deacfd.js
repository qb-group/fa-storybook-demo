import{j as e}from"./jsx-runtime-4ca860c5.js";import{I as t}from"./index-e331d16d.js";import{G as m,u as b,F as x,d as f}from"./index-aa2c32f6.js";import{c as h,a as s}from"./index.esm-2961b60f.js";import{o as j}from"./yup-e2c7bbf4.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./_baseForOwn-fcf16290.js";import"./formatters-2037c84a.js";import"./dayjs.min-941aafe8.js";import"./index-f9f069f9.js";import"./index-5da8d75d.js";import"./index-9d475cdf.js";import"./img_investment_bias_diagnosis_consultation_4x-2a96972d.js";import"./index-d4b5d7fe.js";import"./index-d648fc06.js";const g=h().shape({userName:s().required("이름."),email:s().required("메일주소."),role:s().required("권한.")}),Y={title:"DESIGN-SYSTEM/ui/Grid",component:m,tags:["autodocs"],argTypes:{flow:{control:"inline-radio",options:["row","column"]},item:{control:"select",options:[1,2,3,4,5,6]},gap:{control:"select",options:["none",1,2,3,4,5,6,7,8,9,10]},rowGap:{control:"select",options:["none",0,1,2,3,4,5,6,7,8,9,10]},columnGap:{control:"select",options:["none",0,1,2,3,4,5,6,7,8,9,10]}},decorators:[o=>{const a=b({defaultValues:{userName:"",term:"쿼터백 자산운용",email:"",tel:"",role:"일반"},resolver:j(g)});return e.jsx(x,{...a,children:e.jsx(o,{})})}]},G=o=>e.jsx(m,{...o}),q=[1,2,3,4,5,6,7,8,9,10,11],r=G.bind({});r.args={flow:"row",item:2,gap:3,children:e.jsx(e.Fragment,{children:q.map((o,a)=>e.jsxs("div",{className:"flex items-center justify-center p-4 bg-primary-500 rounded-card-xs text-body-base text-white",children:["Item-",a+1]},a))})};const v=()=>e.jsxs(m,{flow:"column",item:2,gap:10,children:[e.jsx(t,{name:"userName",placeholder:"이름",label:"이름",required:!0}),e.jsx(t,{name:"term",placeholder:"소속.",label:"소속"}),e.jsx(t,{name:"email",placeholder:"메일주소.",label:"이메일 주소",required:!0}),e.jsx(t,{type:"tel",name:"tel",placeholder:"번호",label:"휴대폰 번호"}),e.jsx(f,{name:"role",label:"권한 설정",required:!0,list:[{id:1,value:1,label:"일반"},{id:2,value:2,label:"관리자"},{id:3,value:3,label:"시스템 관리자"}]})]}),l=v.bind({});var i,n,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:"args => <Grid {...args} />",...(p=(n=r.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,d,u;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(u=(d=l.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const k=["Default","Form"];export{r as Default,l as Form,k as __namedExportsOrder,Y as default};
//# sourceMappingURL=Grid.stories-73deacfd.js.map

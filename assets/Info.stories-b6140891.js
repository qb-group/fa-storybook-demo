import{j as e}from"./jsx-runtime-4ca860c5.js";import{I as p,C as x}from"./index-5cb10bd9.js";import{T as i}from"./index-f500090c.js";import{c as y}from"./index-f9f069f9.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./_baseForOwn-fcf16290.js";import"./index-9d475cdf.js";import"./img_investment_bias_diagnosis_consultation_4x-2a96972d.js";import"./index-674584b1.js";import"./index-3e6b6589.js";const h={16:"text-16",20:"text-20",24:"text-24"},n=({customizedListStyle:o=!1,iconSize:r=24,iconColor:g="text-gray-600",iconName:u="icon-check-checkmark-fill",typoSize:m="lg",children:a,shouldCustomizedContent:f=!1})=>e.jsxs("div",{className:"flex items-start gap-x-3",children:[o?e.jsx("div",{className:"inline-flex shrink-0",children:o}):e.jsx(p,{name:u,size:h[r],color:g}),f?e.jsx(e.Fragment,{children:a}):e.jsx(i,{size:m,color:"text-gray-800",children:a})]}),j={4:"gap-y-1",8:"gap-y-2",12:"gap-y-3",16:"gap-y-4",20:"gap-y-5",24:"gap-y-6"},v=({gap:o=24,children:r})=>e.jsx("div",{className:y("flex flex-col",j[o]),children:r});n.List=v;const s=n;try{n.displayName="Info",n.__docgenInfo={description:"",displayName:"Info",props:{customizedListStyle:{defaultValue:{value:"false"},description:"",name:"customizedListStyle",required:!1,type:{name:"ReactNode"}},iconName:{defaultValue:{value:"icon-check-checkmark-fill"},description:"",name:"iconName",required:!1,type:{name:"any"}},iconSize:{defaultValue:{value:"24"},description:"",name:"iconSize",required:!1,type:{name:"enum",value:[{value:"16"},{value:"20"},{value:"24"}]}},iconColor:{defaultValue:{value:"text-gray-600"},description:"",name:"iconColor",required:!1,type:{name:"string"}},typoSize:{defaultValue:{value:"lg"},description:"",name:"typoSize",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"base"'},{value:'"lg"'}]}},shouldCustomizedContent:{defaultValue:{value:"false"},description:"",name:"shouldCustomizedContent",required:!1,type:{name:"boolean"}}}}}catch{}const q={title:"DESIGN-SYSTEM/ui/Info",component:s,tags:["autodocs"],argTypes:{iconSize:{control:"inline-radio",options:[16,20,24]},typoSize:{control:"inline-radio",options:["xs","sm","base","lg"]}},decorators:[o=>e.jsx(x,{children:o()})]},I=o=>e.jsxs(s.List,{gap:24,children:[e.jsxs(s,{...o,children:[e.jsx("strong",{children:"3%"})," 의 수익률로 초기에 ",e.jsx("strong",{children:"20,000$"})," 을 투자자하고 매년"," ",e.jsx("strong",{children:"30,000$"})," 을 추가 투자했다고 가정할 시,",e.jsx("br",{})," 자녀가 만 18세 되는 2029년 기준"," ",e.jsx("i",{className:"inline-flex items-center justify-center w-6 h-6 bg-gray-300 rounded-button-full font-700",children:"A"})," ","예상 달성 금액 은 ",e.jsx("strong",{children:"약 187,384$"})," 입니다."]}),e.jsxs(s,{children:["자녀 ",e.jsx("strong",{children:"권덕배"})," 님이 ",e.jsx("strong",{children:"University of California, Los Angeles"}),"에 진학한다고 가정했을 시,",e.jsx("br",{})," 졸업까지 필요한"," ",e.jsx("i",{className:"inline-flex items-center justify-center w-6 h-6 bg-gray-300 rounded-button-full font-700",children:"B"})," ","예상 필요 금액은 ",e.jsx("strong",{children:"약 214,312$"})," 입니다."]}),e.jsx(s,{shouldCustomizedContent:!0,iconColor:"text-primary-500",children:e.jsxs("div",{className:"flex flex-col gap-y-1",children:[e.jsx(i,{size:"lg",weight:700,children:"권장 자산 배분안"}),e.jsx(i,{size:"lg",color:"text-gray-800",children:"미국 주식 85% 미국 채권 15%로 구성된 자산배분 포트폴리오 투자를 고려해보세요."})]})})]}),t=I.bind({});t.args={iconSize:24,iconColor:"text-gray-600",iconName:"icon-check-checkmark-fill",typoSize:"lg",shouldCustomizedContent:!1};var l,c,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`args => <Info.List gap={24}>
    <Info {...args}>
      <strong>3%</strong> 의 수익률로 초기에 <strong>20,000$</strong> 을 투자자하고 매년{' '}
      <strong>30,000$</strong> 을 추가 투자했다고 가정할 시,
      <br /> 자녀가 만 18세 되는 2029년 기준{' '}
      <i className="inline-flex items-center justify-center w-6 h-6 bg-gray-300 rounded-button-full font-700">
        A
      </i>{' '}
      예상 달성 금액 은 <strong>약 187,384$</strong> 입니다.
    </Info>
    <Info>
      자녀 <strong>권덕배</strong> 님이 <strong>University of California, Los Angeles</strong>에
      진학한다고 가정했을 시,
      <br /> 졸업까지 필요한{' '}
      <i className="inline-flex items-center justify-center w-6 h-6 bg-gray-300 rounded-button-full font-700">
        B
      </i>{' '}
      예상 필요 금액은 <strong>약 214,312$</strong> 입니다.
    </Info>
    <Info shouldCustomizedContent iconColor="text-primary-500">
      <div className="flex flex-col gap-y-1">
        <Typography size="lg" weight={700}>
          권장 자산 배분안
        </Typography>
        <Typography size="lg" color="text-gray-800">
          미국 주식 85% 미국 채권 15%로 구성된 자산배분 포트폴리오 투자를 고려해보세요.
        </Typography>
      </div>
    </Info>
  </Info.List>`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const w=["Default"];export{t as Default,w as __namedExportsOrder,q as default};
//# sourceMappingURL=Info.stories-b6140891.js.map

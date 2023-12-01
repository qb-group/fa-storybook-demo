import{j as d}from"./jsx-runtime-4ca860c5.js";import{r as m}from"./index-61bf1805.js";import{a as t}from"./index-aa2c32f6.js";import"./_commonjsHelpers-de833af9.js";import"./index-f9f069f9.js";import"./_baseForOwn-fcf16290.js";import"./index-9d475cdf.js";import"./index-5da8d75d.js";import"./img_investment_bias_diagnosis_consultation_4x-2a96972d.js";import"./index-d4b5d7fe.js";import"./index-d648fc06.js";const j={title:"DESIGN-SYSTEM/ui/Tabs",component:t,tags:["autodocs"],argTypes:{color:{control:"inline-radio",options:["primary","secondary","secondary"]}}},u=a=>{const[s,l]=m.useState(0),i=c=>{const{index:p}=c;l(p)};return d.jsx(t,{...a,currentIndex:s,list:[{no:1,label:"기본정보"},{no:2,label:"소득정보"},{no:3,label:"지출정보"},{no:4,label:"자산현황"},{no:5,label:"투자목표"}],onChange:i})},n=u.bind({});n.args={color:"primary",hasAnimated:!1};var e,r,o;n.parameters={...n.parameters,docs:{...(e=n.parameters)==null?void 0:e.docs,source:{originalSource:`args => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChangeIndex = (payload: {
    [key: string]: any;
  }) => {
    const {
      index
    } = payload;
    setCurrentIndex((index as number));
  };
  return <Tabs {...args} currentIndex={currentIndex} list={[{
    no: 1,
    label: '기본정보'
  }, {
    no: 2,
    label: '소득정보'
  }, {
    no: 3,
    label: '지출정보'
  }, {
    no: 4,
    label: '자산현황'
  }, {
    no: 5,
    label: '투자목표'
  }]} onChange={onChangeIndex} />;
}`,...(o=(r=n.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const D=["Default"];export{n as Default,D as __namedExportsOrder,j as default};
//# sourceMappingURL=Tabs.stories-722d578e.js.map

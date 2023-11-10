import{j as p}from"./jsx-runtime-4ca860c5.js";import{r as m}from"./index-61bf1805.js";import{a as t}from"./index-890f3064.js";import"./_commonjsHelpers-de833af9.js";import"./_baseForOwn-fcf16290.js";import"./index-9d475cdf.js";import"./index-741d507f.js";const T={title:"DESIGN-SYSTEM/ui/Tabs",component:t,tags:["autodocs"],argTypes:{color:{control:"inline-radio",options:["primary","secondary","secondary"]}}},u=a=>{const[s,l]=m.useState(0),i=c=>{const{index:d}=c;l(d)};return p.jsx(t,{...a,currentIndex:s,list:[{no:1,label:"기본정보"},{no:2,label:"소득정보"},{no:3,label:"지출정보"},{no:4,label:"자산현황"},{no:5,label:"투자목표"}],onChange:i})},n=u.bind({});n.args={color:"primary",hasAnimated:!1};var e,r,o;n.parameters={...n.parameters,docs:{...(e=n.parameters)==null?void 0:e.docs,source:{originalSource:`args => {
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
}`,...(o=(r=n.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const h=["Default"];export{n as Default,h as __namedExportsOrder,T as default};
//# sourceMappingURL=Tabs.stories-ec5adf46.js.map

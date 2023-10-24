import{j as p}from"./jsx-runtime-7ed143f6.js";import{r as m}from"./_baseForOwn-126b22f4.js";import{b as o}from"./index-636f3ace.js";import"./_commonjsHelpers-de833af9.js";import"./index-9d475cdf.js";import"./toNumber-b186eb87.js";const f={title:"DESIGN-SYSTEM/ui/Tabs",component:o,tags:["autodocs"],argTypes:{color:{control:"inline-radio",options:["primary","secondary","tertiary"]}}},u=a=>{const[s,l]=m.useState(0),i=c=>{const{index:d}=c;l(d)};return p.jsx(o,{...a,currentIndex:s,list:[{no:1,label:"기본정보"},{no:2,label:"소득정보"},{no:3,label:"지출정보"},{no:4,label:"자산현황"},{no:5,label:"투자목표"}],onChange:i})},n=u.bind({});n.args={color:"primary",hasAnimated:!1};var e,r,t;n.parameters={...n.parameters,docs:{...(e=n.parameters)==null?void 0:e.docs,source:{originalSource:`args => {
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
}`,...(t=(r=n.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const T=["Default"];export{n as Default,T as __namedExportsOrder,f as default};
//# sourceMappingURL=Tabs.stories-80a29105.js.map

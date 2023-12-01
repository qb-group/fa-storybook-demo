import{j as r}from"./jsx-runtime-4ca860c5.js";import{b as i}from"./index-aa2c32f6.js";import"./img_investment_bias_diagnosis_consultation_4x-2a96972d.js";import"./index-d4b5d7fe.js";import{T as n}from"./index-5da8d75d.js";import"./index-d648fc06.js";import{r as u}from"./index-61bf1805.js";import"./index-f9f069f9.js";import"./_commonjsHelpers-de833af9.js";import"./_baseForOwn-fcf16290.js";import"./index-9d475cdf.js";const j={title:"DESIGN-SYSTEM/ui/TabScreen",component:i,tags:["autodocs"],argTypes:{currentIndex:{control:"inline-radio",options:[0,1,2,3,4]}}},x=({currentIndex:e,...a})=>{const c=u.useMemo(()=>e===0?r.jsx(n,{size:"xs",children:"고객님의 기본정보 입력 후 가족의 정보를 추가할 수 있습니다."}):e===1?r.jsx(n,{size:"xs",children:"현재의 고정수입과 부가수입 또는 공동수입의 정보를 입력합니다."}):e===2?r.jsx(n,{size:"xs",children:"대출과 월 보험료는 포함하지 않고 예상되는 일반 지출을 입력합니다."}):e===3?r.jsxs(n,{size:"xs",children:["고객님의 금융자산과 부채를 추가하여 순자산 현황을 입력합니다.",r.jsx("br",{}),"마이데이터 연동하기를 통해 더욱 편리하고 정확한 금융자산 정보를 불러올수 있습니다."]}):e===4?r.jsx(n,{size:"xs",children:"예상되는 은퇴 연령과 투자 목표를 추가해주세요. 예) 새차 구입, 자녀 학자금, 휴가 계획 등"}):[],[e]);return r.jsx(i,{...a,children:c})},s=x.bind({});s.args={currentIndex:0};var t,o,p;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`({
  currentIndex,
  ...args
}: TabScreenProps) => {
  const step = useMemo(() => {
    if (currentIndex === 0) return <Typography size="xs">
          고객님의 기본정보 입력 후 가족의 정보를 추가할 수 있습니다.
        </Typography>;
    if (currentIndex === 1) return <Typography size="xs">
          현재의 고정수입과 부가수입 또는 공동수입의 정보를 입력합니다.
        </Typography>;
    if (currentIndex === 2) return <Typography size="xs">
          대출과 월 보험료는 포함하지 않고 예상되는 일반 지출을 입력합니다.
        </Typography>;
    if (currentIndex === 3) return <Typography size="xs">
          고객님의 금융자산과 부채를 추가하여 순자산 현황을 입력합니다.
          <br />
          마이데이터 연동하기를 통해 더욱 편리하고 정확한 금융자산 정보를 불러올수 있습니다.
        </Typography>;
    if (currentIndex === 4) return <Typography size="xs">
          예상되는 은퇴 연령과 투자 목표를 추가해주세요. 예) 새차 구입, 자녀 학자금, 휴가 계획 등
        </Typography>;
    return [];
  }, [currentIndex]);
  return <TabScreen {...args}>{step}</TabScreen>;
}`,...(p=(o=s.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const E=["Default"];export{s as Default,E as __namedExportsOrder,j as default};
//# sourceMappingURL=TabScreen.stories-a2ecf58f.js.map

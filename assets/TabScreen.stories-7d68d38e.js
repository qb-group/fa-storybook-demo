import{j as r}from"./jsx-runtime-7ed143f6.js";import{r as u}from"./_baseForOwn-126b22f4.js";import{c as p,T as n}from"./index-636f3ace.js";import"./_commonjsHelpers-de833af9.js";import"./index-9d475cdf.js";import"./toNumber-b186eb87.js";const f={title:"DESIGN-SYSTEM/ui/TabScreen",component:p,tags:["autodocs"],argTypes:{currentIndex:{control:"inline-radio",options:[0,1,2,3,4]}}},x=({currentIndex:e,...i})=>{const c=u.useMemo(()=>e===0?r.jsx(n,{size:"xs",children:"고객님의 기본정보 입력 후 가족의 정보를 추가할 수 있습니다."}):e===1?r.jsx(n,{size:"xs",children:"현재의 고정수입과 부가수입 또는 공동수입의 정보를 입력합니다."}):e===2?r.jsx(n,{size:"xs",children:"대출과 월 보험료는 포함하지 않고 예상되는 일반 지출을 입력합니다."}):e===3?r.jsxs(n,{size:"xs",children:["고객님의 금융자산과 부채를 추가하여 순자산 현황을 입력합니다.",r.jsx("br",{}),"마이데이터 연동하기를 통해 더욱 편리하고 정확한 금융자산 정보를 불러올수 있습니다."]}):e===4?r.jsx(n,{size:"xs",children:"예상되는 은퇴 연령과 투자 목표를 추가해주세요. 예) 새차 구입, 자녀 학자금, 휴가 계획 등"}):[],[e]);return r.jsx(p,{...i,children:c})},s=x.bind({});s.args={currentIndex:0};var t,o,a;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`({
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
}`,...(a=(o=s.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const l=["Default"];export{s as Default,l as __namedExportsOrder,f as default};
//# sourceMappingURL=TabScreen.stories-7d68d38e.js.map

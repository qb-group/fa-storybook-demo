import{j as e}from"./jsx-runtime-4ca860c5.js";import{r as a}from"./index-61bf1805.js";import{S as y}from"./index-7a02b60c.js";import{F as h}from"./index-220a2932.js";import{e as d,C as I,B as b,a as g,b as T}from"./index-aa2c32f6.js";import{T as s}from"./index-5da8d75d.js";import{I as S}from"./chunk-BLYPNILM-1d134370.js";import"./_commonjsHelpers-de833af9.js";import"./index-f9f069f9.js";/* empty css              */import"./img_investment_bias_diagnosis_consultation_4x-2a96972d.js";import"./index-d4b5d7fe.js";import"./index-d648fc06.js";import"./_baseForOwn-fcf16290.js";import"./index-9d475cdf.js";const A={title:"DESIGN-SYSTEM/ui/FullSizeModal",component:d,tags:["autodocs"],argTypes:{},decorators:[t=>e.jsx(I,{alignItems:"center",className:"py-6 px-8",children:e.jsx(t,{})})],parameters:{viewport:{viewports:S,defaultViewport:"ipad",defaultOrientation:"landscape"},layout:"fullscreen"}},j=()=>{const[t,l]=a.useState(!1),[r,x]=a.useState(0),u=o=>{const{index:f}=o;x(f)},m=a.useMemo(()=>r===0?e.jsx("div",{className:"flex flex-col",children:e.jsx(s,{size:"xs",children:"고객님의 기본정보 입력 후 가족의 정보를 추가할 수 있습니다."})}):r===1?e.jsx(s,{size:"xs",children:"현재의 고정수입과 부가수입 또는 공동수입의 정보를 입력합니다."}):r===2?e.jsx(s,{size:"xs",children:"대출과 월 보험료는 포함하지 않고 예상되는 일반 지출을 입력합니다."}):r===3?e.jsxs(s,{size:"xs",children:["고객님의 금융자산과 부채를 추가하여 순자산 현황을 입력합니다.",e.jsx("br",{}),"마이데이터 연동하기를 통해 더욱 편리하고 정확한 금융자산 정보를 불러올수 있습니다."]}):r===4?e.jsx(s,{size:"xs",children:"예상되는 은퇴 연령과 투자 목표를 추가해주세요. 예) 새차 구입, 자녀 학자금, 휴가 계획 등"}):[],[r]);return e.jsxs(e.Fragment,{children:[e.jsx(b,{onClick:()=>l(o=>!o),children:"Open first modal"}),e.jsxs(d,{isOpen:t,onClose:()=>l(!1),title:"신규 고객 등록",children:[e.jsxs(y,{children:[e.jsx("div",{className:"absolute z-10 mt-7",children:e.jsx(g,{variant:"box",currentIndex:r,list:[{no:1,label:"기본정보"},{no:2,label:"소득정보"},{no:3,label:"지출정보"},{no:4,label:"자산현황"},{no:5,label:"투자목표"}],onChange:u})}),e.jsx("div",{className:"grow flex flex-col w-full mt-[7.25rem]",children:e.jsx(T,{currentIndex:r,children:m})})]}),e.jsx(h,{})]})]})},n=j.bind({});n.args={};var i,p,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
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
  const step = useMemo(() => {
    if (currentIndex === 0) return <div className="flex flex-col">
          <Typography size="xs">
            고객님의 기본정보 입력 후 가족의 정보를 추가할 수 있습니다.
          </Typography>
        </div>;
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
  return <>
      <Button onClick={() => setIsOpen(prev => !prev)}>Open first modal</Button>
      <FullSizeModal isOpen={isOpen} onClose={() => setIsOpen(false)} title="신규 고객 등록">
        <Section>
          <div className="absolute z-10 mt-7">
            <Tabs variant="box" currentIndex={currentIndex} list={[{
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
          }]} onChange={onChangeIndex} />
          </div>
          <div className="grow flex flex-col w-full mt-[7.25rem]">
            <TabScreen currentIndex={currentIndex}>{step}</TabScreen>
          </div>
        </Section>
        <Footer />
      </FullSizeModal>
    </>;
}`,...(c=(p=n.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const G=["Default"];export{n as Default,G as __namedExportsOrder,A as default};
//# sourceMappingURL=FullSizeModal.stories-e3dfe2f8.js.map

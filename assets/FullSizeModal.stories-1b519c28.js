import{j as e}from"./jsx-runtime-c301395f.js";import{I as y}from"./chunk-BLYPNILM-1d134370.js";import{r as o}from"./_baseForOwn-4ea03334.js";import{S as h}from"./index-9cc570f0.js";import{F as I}from"./index-645e1b6c.js";import{F as d,C as b,T as s,B as g,b as T,c as S}from"./index-1a378a33.js";import"./_commonjsHelpers-de833af9.js";/* empty css              */import"./index-9d475cdf.js";import"./toNumber-b8059529.js";const _={title:"DESIGN-SYSTEM/ui/FullSizeModal",component:d,tags:["autodocs"],argTypes:{},decorators:[t=>e.jsx(b,{alignItems:"center",className:"py-6 px-8",children:e.jsx(t,{})})],parameters:{viewport:{viewports:y,defaultViewport:"ipad",defaultOrientation:"landscape"},layout:"fullscreen"}},j=()=>{const[t,l]=o.useState(!1),[r,x]=o.useState(0),u=a=>{const{index:f}=a;x(f)},m=o.useMemo(()=>r===0?e.jsx("div",{className:"flex flex-col",children:e.jsx(s,{size:"xs",children:"고객님의 기본정보 입력 후 가족의 정보를 추가할 수 있습니다."})}):r===1?e.jsx(s,{size:"xs",children:"현재의 고정수입과 부가수입 또는 공동수입의 정보를 입력합니다."}):r===2?e.jsx(s,{size:"xs",children:"대출과 월 보험료는 포함하지 않고 예상되는 일반 지출을 입력합니다."}):r===3?e.jsxs(s,{size:"xs",children:["고객님의 금융자산과 부채를 추가하여 순자산 현황을 입력합니다.",e.jsx("br",{}),"마이데이터 연동하기를 통해 더욱 편리하고 정확한 금융자산 정보를 불러올수 있습니다."]}):r===4?e.jsx(s,{size:"xs",children:"예상되는 은퇴 연령과 투자 목표를 추가해주세요. 예) 새차 구입, 자녀 학자금, 휴가 계획 등"}):[],[r]);return e.jsxs(e.Fragment,{children:[e.jsx(g,{onClick:()=>l(a=>!a),children:"Open first modal"}),e.jsxs(d,{isOpen:t,onClose:()=>l(!1),title:"신규 고객 등록",children:[e.jsxs(h,{children:[e.jsx("div",{className:"absolute z-10 mt-7",children:e.jsx(T,{variant:"box",currentIndex:r,list:[{no:1,label:"기본정보"},{no:2,label:"소득정보"},{no:3,label:"지출정보"},{no:4,label:"자산현황"},{no:5,label:"투자목표"}],onChange:u})}),e.jsx("div",{className:"grow flex flex-col w-full mt-[7.25rem]",children:e.jsx(S,{currentIndex:r,children:m})})]}),e.jsx(I,{})]})]})},n=j.bind({});n.args={};var i,c,p;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const k=["Default"];export{n as Default,k as __namedExportsOrder,_ as default};
//# sourceMappingURL=FullSizeModal.stories-1b519c28.js.map

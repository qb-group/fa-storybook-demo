import{j as e}from"./jsx-runtime-4ca860c5.js";import{r as c}from"./index-61bf1805.js";import{S as f}from"./index-7a02b60c.js";import{R as P,I as H,i as y,B as i,C as z,h as E}from"./index-5cb10bd9.js";import{F as G}from"./index-f575f549.js";import{T as s}from"./index-f500090c.js";import{c as u}from"./index-f9f069f9.js";import"./_commonjsHelpers-de833af9.js";import"./_baseForOwn-fcf16290.js";import"./index-9d475cdf.js";import"./img_investment_bias_diagnosis_consultation_4x-2a96972d.js";import"./index-674584b1.js";import"./index-3e6b6589.js";/* empty css              */const D={inline:"flex flex-col relative overflow-hidden min-w-[25rem] w-fit max-h-[42.5rem] my-6 mx-auto bg-white rounded-card-lg outline-none tablet:max-w-[60rem]",full:"flex flex-col relative w-full h-full bg-white outline-none"},$={inline:"grow flex flex-col",full:"grow flex flex-col w-full h-full"},W={left:"justify-start",center:"justify-center",right:"justify-end"},M=({onClose:n,title:o,align:l="left",canBeCustom:t=!1,hasShadow:r=!1})=>e.jsxs("div",{className:u("flex items-center shrink-0 z-[999] bg-white",r?"h-16 pr-2 pl-[1.875rem] border-b rounded-card-md shadow-[0_0.25rem_0.5rem_0_#00000024]":"py-5 pl-6",{"pr-[3.75rem]":n&&!r},{"pr-6":!n&&!r},{"pl-[3.75rem]":n&&l==="center"},W[l]),children:[o&&(t?e.jsx(e.Fragment,{children:o}):r?e.jsx("div",{className:"inline-flex px-4",children:e.jsx(s,{variant:"head",color:"text-gray-800",children:o})}):e.jsx(s,{size:"lg",weight:700,color:"text-gray-800",children:o})),n&&e.jsx("div",{className:u("inline-flex items-center justify-center shrink-0",r?"ml-auto":"absolute top-2 right-1"),children:e.jsx(H,{name:"icon-basic-close",size:r?"text-28":"text-24",color:"text-gray-600",onClick:n})})]}),v=({hasScrollbar:n=!1,isPaper:o=!1,children:l})=>e.jsx("div",{className:u("flex flex-col grow pb-6 px-6 scrollbar-custom",n?"overflow-y-scroll":"overflow-y-auto",{"scrollbar-custom--paper":o}),children:l}),I=({secondaryLabel:n="취소",onSecondaryClick:o,primaryLabel:l="확인",onPrimaryClick:t,useCustomElement:r})=>e.jsx("div",{className:u("shrink-0 flex pb-6 px-6"),children:e.jsx(y,{isFullWidth:!0,children:r||e.jsxs(e.Fragment,{children:[n&&o&&e.jsx(i,{flex:1,character:"modal",color:"secondary",onClick:o,children:n}),l&&t&&e.jsx(i,{flex:1,character:"modal",onClick:t,children:l})]})})}),p=({variant:n="inline",contentLabel:o,isOpen:l=!1,onRequestClose:t,shouldCloseOnOverlayClick:r=!1,onAfterOpen:d,onAfterClose:F,children:L})=>{const V=c.useId(),w=()=>{n!=="full"&&t&&t()};return e.jsx(P,{id:`${n}-modal-${V}`,role:`${n}-modal`,isOpen:l,contentLabel:o||"어떤 레이블인지 설명해주세요",portalClassName:"z-auto",ariaHideApp:!1,onAfterOpen:d,onAfterClose:F,onRequestClose:w,overlayClassName:"flex items-center justify-center fixed w-full h-full inset-0 z-[999] bg-black/50",contentElement:R=>e.jsx("div",{className:u("content-ele flex flex-col bg-white",$[n]),...R,children:L}),shouldCloseOnOverlayClick:r&&n!=="full",className:u("qb-modal__content",D[n])})};p.Header=M;p.Body=v;p.Footer=I;p.Copyright=G;const a=p;try{M.displayName="ModalHeader",M.__docgenInfo={description:"",displayName:"ModalHeader",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},variant:{defaultValue:{value:"inline"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"inline"'},{value:'"full"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},canBeCustom:{defaultValue:{value:"false"},description:"",name:"canBeCustom",required:!1,type:{name:"boolean"}},hasShadow:{defaultValue:{value:"false"},description:"",name:"hasShadow",required:!1,type:{name:"boolean"}}}}}catch{}try{v.displayName="ModalBody",v.__docgenInfo={description:"",displayName:"ModalBody",props:{hasScrollbar:{defaultValue:{value:"false"},description:"",name:"hasScrollbar",required:!1,type:{name:"boolean"}},isPaper:{defaultValue:{value:"false"},description:"",name:"isPaper",required:!1,type:{name:"boolean"}}}}}catch{}try{I.displayName="ModalFooter",I.__docgenInfo={description:"",displayName:"ModalFooter",props:{secondaryLabel:{defaultValue:{value:"취소"},description:"",name:"secondaryLabel",required:!1,type:{name:"string"}},onSecondaryClick:{defaultValue:null,description:"",name:"onSecondaryClick",required:!1,type:{name:"(() => void)"}},primaryLabel:{defaultValue:{value:"확인"},description:"",name:"primaryLabel",required:!1,type:{name:"string"}},onPrimaryClick:{defaultValue:null,description:"",name:"onPrimaryClick",required:!1,type:{name:"(() => void)"}},useCustomElement:{defaultValue:null,description:"",name:"useCustomElement",required:!1,type:{name:"ReactNode"}}}}}catch{}try{p.displayName="Modal",p.__docgenInfo={description:"",displayName:"Modal",props:{variant:{defaultValue:{value:"inline"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"inline"'},{value:'"full"'}]}},contentLabel:{defaultValue:null,description:"",name:"contentLabel",required:!1,type:{name:"string"}},isOpen:{defaultValue:{value:"false"},description:"",name:"isOpen",required:!1,type:{name:"boolean"}},onRequestClose:{defaultValue:null,description:"",name:"onRequestClose",required:!1,type:{name:"(() => void)"}},shouldCloseOnOverlayClick:{defaultValue:{value:"false"},description:"",name:"shouldCloseOnOverlayClick",required:!1,type:{name:"boolean"}},onAfterOpen:{defaultValue:null,description:"",name:"onAfterOpen",required:!1,type:{name:"(() => void)"}},onAfterClose:{defaultValue:null,description:"",name:"onAfterClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const pe={title:"DESIGN-SYSTEM/ui/Modal",component:a,tags:["autodocs"],argTypes:{},decorators:[n=>e.jsx(z,{alignItems:"center",className:"py-6 px-8",children:e.jsx(n,{})})],parameters:{}},Y=n=>{const[o,l]=c.useState(!1),[t,r]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs(y,{children:[e.jsx(i,{onClick:()=>l(d=>!d),children:"Open Inline Modal"}),e.jsx(i,{onClick:()=>r(d=>!d),children:"Open Full Size Modal"})]}),e.jsxs(a,{...n,isOpen:o,onRequestClose:()=>l(!1),children:[e.jsx(a.Header,{title:"신규 고객 등록",align:"center",onClose:()=>l(!1)}),e.jsx(a.Body,{children:e.jsx(f,{alignItems:"stretch",children:e.jsx(s,{children:"컨텐츠가 들어올 자리에요."})})}),e.jsx(a.Footer,{secondaryLabel:"고객인증",onSecondaryClick:()=>l(!1),primaryLabel:"베러에서 상세등록",onPrimaryClick:()=>{}})]}),e.jsxs(a,{...n,variant:"full",isOpen:t,children:[e.jsx(a.Header,{title:"신규 고객 등록",hasShadow:!0,onClose:()=>r(!1)}),e.jsxs(a.Body,{isPaper:!0,hasScrollbar:!0,children:[e.jsx(f,{alignItems:"stretch",children:e.jsx(s,{children:"컨텐츠가 들어올 자리에요."})}),e.jsx(a.Copyright,{})]})]})]})},m=Y.bind({});m.args={variant:"inline",contentLabel:"content label",shouldCloseOnOverlayClick:!0,onAfterOpen:void 0,onAfterClose:void 0};const J=n=>{const[o,l]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(y,{children:e.jsx(i,{onClick:()=>l(t=>!t),children:"Open Inline Modal"})}),e.jsxs(a,{...n,isOpen:o,onRequestClose:()=>l(!1),children:[e.jsx(a.Header,{title:"컨텐츠 내용이 길어지면 어떨까요?",onClose:()=>l(!1)}),e.jsx(a.Body,{children:e.jsxs(f,{alignItems:"stretch",children:[e.jsx("div",{className:"flex",children:e.jsx(s,{children:"만약에"})}),e.jsx("div",{className:"flex mt-10",children:e.jsx(s,{children:"말이에요."})}),e.jsx("div",{className:"flex mt-10",children:e.jsx(s,{children:"컨텐츠"})}),e.jsx("div",{className:"flex mt-10",children:e.jsx(s,{children:"길이가"})}),e.jsx("div",{className:"flex mt-10",children:e.jsx(s,{children:"너무"})}),e.jsx("div",{className:"flex mt-10",children:e.jsx(s,{children:"길어서"})}),e.jsx("div",{className:"flex mt-10",children:e.jsx(s,{children:"디바이스의"})}),e.jsx("div",{className:"flex mt-10",children:e.jsx(s,{children:"높이를"})}),e.jsx("div",{className:"flex mt-10",children:e.jsx(s,{children:"넘쳐버리게"})}),e.jsx("div",{className:"flex mt-10",children:e.jsx(s,{children:"된다면"})}),e.jsx("div",{className:"flex mt-10",children:e.jsx(s,{children:"어떻게"})}),e.jsx("div",{className:"flex mt-10",children:e.jsx(s,{children:"보여주어야"})}),e.jsx("div",{className:"flex mt-10",children:e.jsx(s,{children:"불편하지"})}),e.jsx("div",{className:"flex mt-10",children:e.jsx(s,{children:"않을까요?"})})]})}),e.jsx(a.Footer,{secondaryLabel:"고객인증",onSecondaryClick:()=>l(!1),primaryLabel:"베러에서 상세등록",onPrimaryClick:()=>{}})]})]})},h=J.bind({}),K=n=>{const[o,l]=c.useState(!1),[t,r]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(y,{children:e.jsx(i,{onClick:()=>l(d=>!d),children:"Open Inline Modal"})}),e.jsxs(a,{...n,isOpen:o,onRequestClose:()=>l(!1),children:[e.jsx(a.Header,{title:"컨텐츠 내용이 길어지면 어떨까요?",onClose:()=>l(!1)}),e.jsx(a.Body,{children:e.jsxs(f,{alignItems:"stretch",children:[e.jsx(s,{children:"Modal이 열린 상태에서 Confirm 또는 Alert을 띄워야할 때"}),e.jsx("div",{className:"flex my-5",children:e.jsx(i,{variant:"outline",character:"inline",onClick:()=>r(!0),children:"나를 터치해주세요"})})]})}),e.jsx(a.Footer,{onSecondaryClick:()=>l(!1),onPrimaryClick:()=>{}})]}),e.jsx(E,{isOpen:t,title:"Alert",onClose:()=>r(!1),children:"이제 그만 닫아주세요"})]})},x=K.bind({}),Q=n=>{const[o,l]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(y,{children:e.jsx(i,{onClick:()=>l(t=>!t),children:"Open Inline Modal"})}),e.jsxs(a,{...n,isOpen:o,onRequestClose:()=>l(!1),children:[e.jsx(a.Header,{title:"타이틀이 중앙에 있죠?",align:"center",onClose:()=>l(!1)}),e.jsx(a.Body,{children:e.jsx(f,{alignItems:"stretch",children:e.jsx(s,{children:"타이틀이 중앙에 있을 때"})})}),e.jsx(a.Footer,{onSecondaryClick:()=>l(!1),onPrimaryClick:()=>{}})]})]})},g=Q.bind({});var j,O,C;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  const [isInlineModalOpen, setIsInlineModalOpen] = useState(false);
  const [isFullSizeModalOpen, setIsFullSizeModalOpen] = useState(false);
  return <>
      <ButtonGroup>
        <Button onClick={() => setIsInlineModalOpen(prev => !prev)}>Open Inline Modal</Button>
        <Button onClick={() => setIsFullSizeModalOpen(prev => !prev)}>
          Open Full Size Modal
        </Button>
      </ButtonGroup>
      <Modal {...args} isOpen={isInlineModalOpen} onRequestClose={() => setIsInlineModalOpen(false)}>
        <Modal.Header title="신규 고객 등록" align="center" onClose={() => setIsInlineModalOpen(false)} />
        <Modal.Body>
          {/* Body 밑으로 Section 배치를 권장해요 */}
          <Section alignItems="stretch">
            <Typography>컨텐츠가 들어올 자리에요.</Typography>
          </Section>
        </Modal.Body>
        <Modal.Footer secondaryLabel="고객인증" onSecondaryClick={() => setIsInlineModalOpen(false)} primaryLabel="베러에서 상세등록" onPrimaryClick={() => {}} />
      </Modal>

      <Modal {...args} variant="full" isOpen={isFullSizeModalOpen}>
        <Modal.Header title="신규 고객 등록" hasShadow onClose={() => setIsFullSizeModalOpen(false)} />
        <Modal.Body isPaper hasScrollbar>
          {/* Body 밑으로 Section 배치를 권장해요 */}
          <Section alignItems="stretch">
            <Typography>컨텐츠가 들어올 자리에요.</Typography>
          </Section>
          <Modal.Copyright />
        </Modal.Body>
      </Modal>
    </>;
}`,...(C=(O=m.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var S,N,T;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  const [isInlineModalOpen, setIsInlineModalOpen] = useState(false);
  return <>
      <ButtonGroup>
        <Button onClick={() => setIsInlineModalOpen(prev => !prev)}>Open Inline Modal</Button>
      </ButtonGroup>
      <Modal {...args} isOpen={isInlineModalOpen} onRequestClose={() => setIsInlineModalOpen(false)}>
        <Modal.Header title="컨텐츠 내용이 길어지면 어떨까요?" onClose={() => setIsInlineModalOpen(false)} />
        <Modal.Body>
          {/* Body 밑으로 Section 배치를 권장해요 */}
          <Section alignItems="stretch">
            <div className="flex">
              <Typography>만약에</Typography>
            </div>
            <div className="flex mt-10">
              <Typography>말이에요.</Typography>
            </div>
            <div className="flex mt-10">
              <Typography>컨텐츠</Typography>
            </div>
            <div className="flex mt-10">
              <Typography>길이가</Typography>
            </div>
            <div className="flex mt-10">
              <Typography>너무</Typography>
            </div>
            <div className="flex mt-10">
              <Typography>길어서</Typography>
            </div>
            <div className="flex mt-10">
              <Typography>디바이스의</Typography>
            </div>
            <div className="flex mt-10">
              <Typography>높이를</Typography>
            </div>
            <div className="flex mt-10">
              <Typography>넘쳐버리게</Typography>
            </div>
            <div className="flex mt-10">
              <Typography>된다면</Typography>
            </div>
            <div className="flex mt-10">
              <Typography>어떻게</Typography>
            </div>
            <div className="flex mt-10">
              <Typography>보여주어야</Typography>
            </div>
            <div className="flex mt-10">
              <Typography>불편하지</Typography>
            </div>
            <div className="flex mt-10">
              <Typography>않을까요?</Typography>
            </div>
          </Section>
        </Modal.Body>
        <Modal.Footer secondaryLabel="고객인증" onSecondaryClick={() => setIsInlineModalOpen(false)} primaryLabel="베러에서 상세등록" onPrimaryClick={() => {}} />
      </Modal>
    </>;
}`,...(T=(N=h.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var B,_,b;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  const [isInlineModalOpen, setIsInlineModalOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  return <>
      <ButtonGroup>
        <Button onClick={() => setIsInlineModalOpen(prev => !prev)}>Open Inline Modal</Button>
      </ButtonGroup>
      <Modal {...args} isOpen={isInlineModalOpen} onRequestClose={() => setIsInlineModalOpen(false)}>
        <Modal.Header title="컨텐츠 내용이 길어지면 어떨까요?" onClose={() => setIsInlineModalOpen(false)} />
        <Modal.Body>
          {/* Body 밑으로 Section 배치를 권장해요 */}
          <Section alignItems="stretch">
            <Typography>Modal이 열린 상태에서 Confirm 또는 Alert을 띄워야할 때</Typography>
            <div className="flex my-5">
              <Button variant="outline" character="inline" onClick={() => setIsAlertOpen(true)}>
                나를 터치해주세요
              </Button>
            </div>
          </Section>
        </Modal.Body>
        <Modal.Footer onSecondaryClick={() => setIsInlineModalOpen(false)} onPrimaryClick={() => {}} />
      </Modal>
      <Confirm isOpen={isAlertOpen} title="Alert" onClose={() => setIsAlertOpen(false)}>
        이제 그만 닫아주세요
      </Confirm>
    </>;
}`,...(b=(_=x.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var k,A,q;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  const [isInlineModalOpen, setIsInlineModalOpen] = useState(false);
  return <>
      <ButtonGroup>
        <Button onClick={() => setIsInlineModalOpen(prev => !prev)}>Open Inline Modal</Button>
      </ButtonGroup>
      <Modal {...args} isOpen={isInlineModalOpen} onRequestClose={() => setIsInlineModalOpen(false)}>
        <Modal.Header title="타이틀이 중앙에 있죠?" align="center" onClose={() => setIsInlineModalOpen(false)} />
        <Modal.Body>
          {/* Body 밑으로 Section 배치를 권장해요 */}
          <Section alignItems="stretch">
            <Typography>타이틀이 중앙에 있을 때</Typography>
          </Section>
        </Modal.Body>
        <Modal.Footer onSecondaryClick={() => setIsInlineModalOpen(false)} onPrimaryClick={() => {}} />
      </Modal>
    </>;
}`,...(q=(A=g.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};const ue=["Default","ALotOfWords","OpenAlert","TitleAlignCenter"];export{h as ALotOfWords,m as Default,x as OpenAlert,g as TitleAlignCenter,ue as __namedExportsOrder,pe as default};
//# sourceMappingURL=Modal.stories-18a88e02.js.map

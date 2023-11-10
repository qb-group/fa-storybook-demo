import{j as e}from"./jsx-runtime-4ca860c5.js";import{r as f}from"./index-61bf1805.js";import{S as y}from"./index-2b88a2f5.js";import{R as k,I as q,h as g,B as m,C as F}from"./index-fbaf4a77.js";import{F as V}from"./index-19a690ef.js";import{c as d,T as n}from"./index-538b702c.js";import"./_commonjsHelpers-de833af9.js";import"./_baseForOwn-561664b0.js";import"./index-9d475cdf.js";/* empty css              */const L={inline:"flex flex-col relative overflow-hidden min-w-[25rem] w-fit h-fit max-h-[calc(100dvh-48px)] mx-auto bg-white rounded-card-lg outline-none tablet:max-w-[60rem]",full:"flex flex-col relative w-full h-full bg-white outline-none"},w={inline:"grow flex flex-col",full:"grow flex flex-col w-full h-full"},x=({onClose:l,title:o,canBeCustom:a=!1,hasShadow:s=!1})=>e.jsxs("div",{className:d("flex items-center shrink-0 bg-white",s?"h-16 pr-2 pl-[1.875rem] border-b rounded-card-md shadow-[0_0.25rem_0.5rem_0_#00000024]":"pt-5 pl-6",{"pr-[3.75rem]":l&&!s},{"pr-6":!l&&!s}),children:[o&&(a?e.jsx(e.Fragment,{children:o}):s?e.jsx("div",{className:"inline-flex px-4",children:e.jsx(n,{variant:"head",color:"text-gray-800",children:o})}):e.jsx(n,{size:"lg",weight:700,color:"text-gray-800",children:o})),l&&e.jsx("div",{className:d("inline-flex items-center justify-center shrink-0",s?"ml-auto":"absolute top-2 right-1"),children:e.jsx(q,{name:"icon-basic-close",size:s?"text-28":"text-24",color:"text-gray-600",onClick:l})})]}),h=({hasScrollbar:l=!1,isPaper:o=!1,children:a})=>e.jsx("div",{className:d("flex flex-col grow pt-5 pb-6 px-6 scrollbar-custom",l?"overflow-y-scroll":"overflow-y-auto",{"scrollbar-custom--paper":o}),children:a}),v=({secondaryLabel:l="취소",onSecondaryClick:o,primaryLabel:a="확인",onPrimaryClick:s,useCustomElement:i})=>e.jsx("div",{className:d("shrink-0 flex pb-6 px-6"),children:e.jsx(g,{isFullWidth:!0,children:i||e.jsxs(e.Fragment,{children:[l&&o&&e.jsx(m,{flex:1,character:"modal",color:"secondary",onClick:o,children:l}),a&&s&&e.jsx(m,{flex:1,character:"modal",onClick:s,children:a})]})})}),t=({variant:l="inline",contentLabel:o,isOpen:a=!1,onRequestClose:s,shouldCloseOnOverlayClick:i=!1,onAfterOpen:c,onAfterClose:_,children:S})=>{const b=f.useId(),T=()=>{l!=="full"&&s&&s()};return e.jsx(k,{id:`${l}-modal-${b}`,role:`${l}-modal`,isOpen:a,contentLabel:o||"어떤 레이블인지 설명해주세요",portalClassName:"z-auto",ariaHideApp:!1,onAfterOpen:c,onAfterClose:_,onRequestClose:T,overlayClassName:"flex items-center justify-center fixed w-full h-full inset-0 z-[9999] bg-black/50",contentElement:B=>e.jsx("div",{className:d("content-ele flex flex-col bg-white",w[l]),...B,children:S}),shouldCloseOnOverlayClick:i&&l!=="full",className:d("qb-modal__content",L[l])})};t.Header=x;t.Body=h;t.Footer=v;t.Copyright=V;const r=t;try{x.displayName="ModalHeader",x.__docgenInfo={description:"",displayName:"ModalHeader",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},variant:{defaultValue:{value:"inline"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"inline"'},{value:'"full"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},canBeCustom:{defaultValue:{value:"false"},description:"",name:"canBeCustom",required:!1,type:{name:"boolean"}},hasShadow:{defaultValue:{value:"false"},description:"",name:"hasShadow",required:!1,type:{name:"boolean"}}}}}catch{}try{h.displayName="ModalBody",h.__docgenInfo={description:"",displayName:"ModalBody",props:{hasScrollbar:{defaultValue:{value:"false"},description:"",name:"hasScrollbar",required:!1,type:{name:"boolean"}},isPaper:{defaultValue:{value:"false"},description:"",name:"isPaper",required:!1,type:{name:"boolean"}}}}}catch{}try{v.displayName="ModalFooter",v.__docgenInfo={description:"",displayName:"ModalFooter",props:{secondaryLabel:{defaultValue:{value:"취소"},description:"",name:"secondaryLabel",required:!1,type:{name:"string"}},onSecondaryClick:{defaultValue:null,description:"",name:"onSecondaryClick",required:!1,type:{name:"(() => void)"}},primaryLabel:{defaultValue:{value:"확인"},description:"",name:"primaryLabel",required:!1,type:{name:"string"}},onPrimaryClick:{defaultValue:null,description:"",name:"onPrimaryClick",required:!1,type:{name:"(() => void)"}},useCustomElement:{defaultValue:null,description:"",name:"useCustomElement",required:!1,type:{name:"ReactNode"}}}}}catch{}try{t.displayName="Modal",t.__docgenInfo={description:"",displayName:"Modal",props:{variant:{defaultValue:{value:"inline"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"inline"'},{value:'"full"'}]}},contentLabel:{defaultValue:null,description:"",name:"contentLabel",required:!1,type:{name:"string"}},isOpen:{defaultValue:{value:"false"},description:"",name:"isOpen",required:!1,type:{name:"boolean"}},onRequestClose:{defaultValue:null,description:"",name:"onRequestClose",required:!1,type:{name:"(() => void)"}},shouldCloseOnOverlayClick:{defaultValue:{value:"false"},description:"",name:"shouldCloseOnOverlayClick",required:!1,type:{name:"boolean"}},onAfterOpen:{defaultValue:null,description:"",name:"onAfterOpen",required:!1,type:{name:"(() => void)"}},onAfterClose:{defaultValue:null,description:"",name:"onAfterClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const K={title:"DESIGN-SYSTEM/ui/Modal",component:r,tags:["autodocs"],argTypes:{},decorators:[l=>e.jsx(F,{alignItems:"center",className:"py-6 px-8",children:e.jsx(l,{})})],parameters:{}},A=l=>{const[o,a]=f.useState(!1),[s,i]=f.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs(g,{children:[e.jsx(m,{onClick:()=>a(c=>!c),children:"Open Inline Modal"}),e.jsx(m,{onClick:()=>i(c=>!c),children:"Open Full Size Modal"})]}),e.jsxs(r,{...l,isOpen:o,onRequestClose:()=>a(!1),children:[e.jsx(r.Header,{title:"신규 고객 등록",onClose:()=>a(!1)}),e.jsx(r.Body,{children:e.jsx(y,{alignItems:"stretch",children:e.jsx(n,{children:"컨텐츠가 들어올 자리에요."})})}),e.jsx(r.Footer,{secondaryLabel:"고객인증",onSecondaryClick:()=>a(!1),primaryLabel:"베러에서 상세등록",onPrimaryClick:()=>{}})]}),e.jsxs(r,{...l,variant:"full",isOpen:s,children:[e.jsx(r.Header,{title:"신규 고객 등록",hasShadow:!0,onClose:()=>i(!1)}),e.jsxs(r.Body,{isPaper:!0,hasScrollbar:!0,children:[e.jsx(y,{alignItems:"stretch",children:e.jsx(n,{children:"컨텐츠가 들어올 자리에요."})}),e.jsx(r.Copyright,{})]})]})]})},p=A.bind({});p.args={variant:"inline",contentLabel:"content label",shouldCloseOnOverlayClick:!0,onAfterOpen:void 0,onAfterClose:void 0};const z=l=>{const[o,a]=f.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(g,{children:e.jsx(m,{onClick:()=>a(s=>!s),children:"Open Inline Modal"})}),e.jsxs(r,{...l,isOpen:o,onRequestClose:()=>a(!1),children:[e.jsx(r.Header,{title:"컨텐츠 내용이 길어지면 어떨까요?",onClose:()=>a(!1)}),e.jsx(r.Body,{children:e.jsxs(y,{alignItems:"stretch",children:[e.jsx("div",{className:"flex",children:e.jsx(n,{children:"만약에"})}),e.jsx("div",{className:"flex mt-10",children:e.jsx(n,{children:"말이에요."})}),e.jsx("div",{className:"flex mt-10",children:e.jsx(n,{children:"컨텐츠"})}),e.jsx("div",{className:"flex mt-10",children:e.jsx(n,{children:"길이가"})}),e.jsx("div",{className:"flex mt-10",children:e.jsx(n,{children:"너무"})}),e.jsx("div",{className:"flex mt-10",children:e.jsx(n,{children:"길어서"})}),e.jsx("div",{className:"flex mt-10",children:e.jsx(n,{children:"디바이스의"})}),e.jsx("div",{className:"flex mt-10",children:e.jsx(n,{children:"높이를"})}),e.jsx("div",{className:"flex mt-10",children:e.jsx(n,{children:"넘쳐버리게"})}),e.jsx("div",{className:"flex mt-10",children:e.jsx(n,{children:"된다면"})}),e.jsx("div",{className:"flex mt-10",children:e.jsx(n,{children:"어떻게"})}),e.jsx("div",{className:"flex mt-10",children:e.jsx(n,{children:"보여주어야"})}),e.jsx("div",{className:"flex mt-10",children:e.jsx(n,{children:"불편하지"})}),e.jsx("div",{className:"flex mt-10",children:e.jsx(n,{children:"않을까요?"})})]})}),e.jsx(r.Footer,{secondaryLabel:"고객인증",onSecondaryClick:()=>a(!1),primaryLabel:"베러에서 상세등록",onPrimaryClick:()=>{}})]})]})},u=z.bind({});var j,M,C;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
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
        <Modal.Header title="신규 고객 등록" onClose={() => setIsInlineModalOpen(false)} />
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
}`,...(C=(M=p.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var N,O,I;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
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
}`,...(I=(O=u.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};const Q=["Default","ALotOfWords"];export{u as ALotOfWords,p as Default,Q as __namedExportsOrder,K as default};
//# sourceMappingURL=Modal.stories-51ccb08b.js.map

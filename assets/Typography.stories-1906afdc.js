import{j as a}from"./jsx-runtime-4ca860c5.js";import{T as s}from"./index-674584b1.js";import{T as e}from"./index-f500090c.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./index-f9f069f9.js";const N={title:"DESIGN-SYSTEM/ui/Typography",component:e,tags:["autodocs"],argTypes:{variant:{control:"inline-radio",options:["head","body","caption"]},size:{control:"inline-radio",options:["xl","lg","base","sm","xs"]},weight:{control:"inline-radio",options:[400,500,700]}}},d=p=>a.jsx(e,{...p}),m=()=>a.jsxs("div",{className:"flex flex-row gap-x-12",children:[a.jsxs("div",{className:"flex flex-col",children:[a.jsx(s,{children:a.jsx(s.Title,{children:"Head"})}),a.jsxs("div",{className:"flex flex-col gap-y-1 mt-6",children:[a.jsxs("div",{className:"flex flex-row items-start gap-x-4",children:[a.jsx(e,{className:"text-black",children:"HeadXSmall"}),a.jsx(e,{variant:"head",size:"xs",children:"차이가 느껴지나요?"})]}),a.jsxs("div",{className:"flex flex-row items-start gap-x-4",children:[a.jsx(e,{className:"text-black",children:"HeadSmall"}),a.jsx(e,{variant:"head",size:"sm",children:"차이가 느껴지나요?"})]}),a.jsxs("div",{className:"flex flex-row items-start gap-x-4",children:[a.jsx(e,{className:"text-black",children:"HeadBase"}),a.jsx(e,{variant:"head",children:"차이가 느껴지나요?"})]}),a.jsxs("div",{className:"flex flex-row items-start gap-x-4",children:[a.jsx(e,{className:"text-black",children:"HeadLarge"}),a.jsx(e,{variant:"head",size:"lg",children:"차이가 느껴지나요?"})]}),a.jsxs("div",{className:"flex flex-row items-start gap-x-4",children:[a.jsx(e,{className:"text-black",children:"HeadXLarge"}),a.jsx(e,{variant:"head",size:"xl",children:"차이가 느껴지나요?"})]})]})]}),a.jsxs("div",{className:"flex flex-col",children:[a.jsx(s,{children:a.jsx(s.Title,{children:"Body"})}),a.jsxs("div",{className:"flex flex-col gap-y-1 mt-6",children:[a.jsxs("div",{className:"flex flex-row items-start gap-x-4",children:[a.jsx(e,{className:"text-black",children:"BodyXSmall"}),a.jsx(e,{size:"xs",children:"차이가 느껴지나요?"})]}),a.jsxs("div",{className:"flex flex-row items-start gap-x-4",children:[a.jsx(e,{className:"text-black",children:"BodySmall"}),a.jsx(e,{size:"sm",children:"차이가 느껴지나요?"})]}),a.jsxs("div",{className:"flex flex-row items-start gap-x-4",children:[a.jsx(e,{className:"text-black",children:"Typography"}),a.jsx(e,{children:"차이가 느껴지나요?"})]}),a.jsxs("div",{className:"flex flex-row items-start gap-x-4",children:[a.jsx(e,{className:"text-black",children:"BodyLarge"}),a.jsx(e,{size:"lg",children:"차이가 느껴지나요?"})]})]})]}),a.jsxs("div",{className:"flex flex-col",children:[a.jsx(s,{children:a.jsx(s.Title,{children:"Caption"})}),a.jsx("div",{className:"flex flex-col gap-y-1 mt-6",children:a.jsx("div",{className:"flex flex-row items-start gap-x-4",children:a.jsx(e,{variant:"caption",children:"차이가 느껴지나요?"})})})]})]}),l=d.bind({}),r=m.bind({});l.args={variant:"body",size:"base",isParagraph:!1,children:"아무 말이나 써볼래요?",className:void 0};var i,t,n;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:"args => <Typography {...args} />",...(n=(t=l.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var x,c,o;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <div className="flex flex-row gap-x-12">
      <div className="flex flex-col">
        <TitleArea>
          <TitleArea.Title>Head</TitleArea.Title>
        </TitleArea>
        <div className="flex flex-col gap-y-1 mt-6">
          <div className="flex flex-row items-start gap-x-4">
            <Typography className="text-black">HeadXSmall</Typography>
            <Typography variant="head" size="xs">
              차이가 느껴지나요?
            </Typography>
          </div>
          <div className="flex flex-row items-start gap-x-4">
            <Typography className="text-black">HeadSmall</Typography>
            <Typography variant="head" size="sm">
              차이가 느껴지나요?
            </Typography>
          </div>
          <div className="flex flex-row items-start gap-x-4">
            <Typography className="text-black">HeadBase</Typography>
            <Typography variant="head">차이가 느껴지나요?</Typography>
          </div>
          <div className="flex flex-row items-start gap-x-4">
            <Typography className="text-black">HeadLarge</Typography>
            <Typography variant="head" size="lg">
              차이가 느껴지나요?
            </Typography>
          </div>
          <div className="flex flex-row items-start gap-x-4">
            <Typography className="text-black">HeadXLarge</Typography>
            <Typography variant="head" size="xl">
              차이가 느껴지나요?
            </Typography>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <TitleArea>
          <TitleArea.Title>Body</TitleArea.Title>
        </TitleArea>
        <div className="flex flex-col gap-y-1 mt-6">
          <div className="flex flex-row items-start gap-x-4">
            <Typography className="text-black">BodyXSmall</Typography>
            <Typography size="xs">차이가 느껴지나요?</Typography>
          </div>
          <div className="flex flex-row items-start gap-x-4">
            <Typography className="text-black">BodySmall</Typography>
            <Typography size="sm">차이가 느껴지나요?</Typography>
          </div>
          <div className="flex flex-row items-start gap-x-4">
            <Typography className="text-black">Typography</Typography>
            <Typography>차이가 느껴지나요?</Typography>
          </div>
          <div className="flex flex-row items-start gap-x-4">
            <Typography className="text-black">BodyLarge</Typography>
            <Typography size="lg">차이가 느껴지나요?</Typography>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <TitleArea>
          <TitleArea.Title>Caption</TitleArea.Title>
        </TitleArea>
        <div className="flex flex-col gap-y-1 mt-6">
          <div className="flex flex-row items-start gap-x-4">
            <Typography variant="caption">차이가 느껴지나요?</Typography>
          </div>
        </div>
      </div>
    </div>;
}`,...(o=(c=r.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};const j=["Default","List"];export{l as Default,r as List,j as __namedExportsOrder,N as default};
//# sourceMappingURL=Typography.stories-1906afdc.js.map

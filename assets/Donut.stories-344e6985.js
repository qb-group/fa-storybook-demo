import{j as e}from"./jsx-runtime-4ca860c5.js";import{r as u}from"./index-61bf1805.js";import{c as N}from"./formatters-2037c84a.js";import{T as l}from"./index-0ac95d4e.js";import{D as i}from"./index-43d34181.js";import"./index-aa2c32f6.js";import"./img_investment_bias_diagnosis_consultation_4x-2a96972d.js";import"./index-d4b5d7fe.js";import{T as p}from"./index-5da8d75d.js";import"./index-d648fc06.js";import"./index-e331d16d.js";import"./index-fdfdd057.js";import{R as g}from"./index-e6477e2d.js";import"./_commonjsHelpers-de833af9.js";import"./dayjs.min-941aafe8.js";import"./index-9d475cdf.js";import"./debounce-09b11e6b.js";import"./_baseForOwn-fcf16290.js";import"./toNumber-1a41bb61.js";import"./index-f9f069f9.js";const oe={title:"DESIGN-SYSTEM/charts/Donut",component:i,tags:["autodocs"],argTypes:{legendPosition:{control:"inline-radio",options:["top","right","bottom","left"]},legendDirection:{control:"inline-radio",options:["row","column"]}}},a=[{label:"Taxable",value:12590342},{label:"Tax deferred",value:830023},{label:"Tax free",value:13211004}],c=["#5672de","#F09E35","#8dd88e"],O=t=>e.jsx(i,{...t}),o=O.bind({});o.args={width:400,height:400,itemSize:56,background:"transparent",title:e.jsxs(e.Fragment,{children:[e.jsx(l,{textAnchor:"middle",fontSize:40,dy:-20,className:"cursor-default",children:"Your"}),e.jsx(l,{textAnchor:"middle",fontSize:40,dy:20,className:"cursor-default",children:"Portfolio"})]}),data:a,colorSet:c,hasLegend:!0,legendPosition:"bottom",legendDirection:"row",renderStats:e.jsx("div",{className:"flex flex-col gap-y-10",children:a.map(({label:t,value:d})=>e.jsxs("div",{className:"flex flex-col gap-y-3",children:[e.jsx(p,{variant:"head",size:"xl",children:`${N(d)}원`}),e.jsx(p,{size:"lg",className:"text-gray-600",children:`${t} asset`})]},t))}),hasActiveTool:!0};const M=()=>{const[t,d]=u.useState("right"),[C,y]=u.useState("column"),L=m=>{d(m.target.value)},z=m=>{y(m.target.value)};return e.jsxs("div",{className:"flex-1 flex items-start justify-between",children:[e.jsx(i,{width:200,height:200,itemSize:40,data:a,colorSet:c,legendPosition:t,legendDirection:C}),e.jsxs("div",{className:"shrink-0 inline-flex flex-col gap-y-10 pr-12",children:[e.jsx(g,{name:"legend-position",label:"Legend Position:",gap:"gap-3",options:[{value:"top",label:"top"},{value:"right",label:"right"},{value:"bottom",label:"bottom"},{value:"left",label:"left"}],onChange:L,hasContext:!1}),e.jsx(g,{name:"legend-direction",label:"Legend Direction:",gap:"gap-3",options:[{value:"row",label:"row"},{value:"column",label:"column"}],onChange:z,hasContext:!1})]})]})},n=M.bind({}),_=()=>e.jsx(i,{width:200,height:200,itemSize:40,title:e.jsxs(e.Fragment,{children:[e.jsx(l,{textAnchor:"middle",fontSize:24,dy:-12,className:"cursor-default",children:"Your"}),e.jsx(l,{textAnchor:"middle",fontSize:24,dy:12,className:"cursor-default",children:"Portfolio"})]}),data:a,colorSet:c,hasLegend:!1}),r=_.bind({}),E=()=>e.jsx(i,{width:200,height:200,itemSize:40,data:a,colorSet:c,legendPosition:"bottom",hasActiveTool:!0}),s=E.bind({});var h,x,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:"args => <Donut {...args} />",...(f=(x=o.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var S,v,b;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const [selectedPosition, setSelectedPosition] = useState<DonutProps['legendPosition']>('right');
  const [selectedDirection, setSelectedDirection] = useState<DonutProps['legendDirection']>('column');
  const selectionHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedPosition((event.target.value as DonutProps['legendPosition']));
  };
  const selectionHandler2 = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedDirection((event.target.value as DonutProps['legendDirection']));
  };
  return <div className="flex-1 flex items-start justify-between">
      <Donut width={200} height={200} itemSize={40} data={MOCK_DATA} colorSet={COLOR_MAPS} legendPosition={selectedPosition} legendDirection={selectedDirection} />

      <div className="shrink-0 inline-flex flex-col gap-y-10 pr-12">
        <RadioGroup name="legend-position" label="Legend Position:" gap="gap-3" options={[{
        value: 'top',
        label: 'top'
      }, {
        value: 'right',
        label: 'right'
      }, {
        value: 'bottom',
        label: 'bottom'
      }, {
        value: 'left',
        label: 'left'
      }]} onChange={selectionHandler} hasContext={false} />
        <RadioGroup name="legend-direction" label="Legend Direction:" gap="gap-3" options={[{
        value: 'row',
        label: 'row'
      }, {
        value: 'column',
        label: 'column'
      }]} onChange={selectionHandler2} hasContext={false} />
      </div>
    </div>;
}`,...(b=(v=n.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var D,T,P;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <Donut width={200} height={200} itemSize={40} title={<>
          <Text textAnchor="middle" fontSize={24} dy={-12} className="cursor-default">
            Your
          </Text>
          <Text textAnchor="middle" fontSize={24} dy={12} className="cursor-default">
            Portfolio
          </Text>
        </>} data={MOCK_DATA} colorSet={COLOR_MAPS} hasLegend={false} />;
}`,...(P=(T=r.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var A,j,w;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <Donut width={200} height={200} itemSize={40} data={MOCK_DATA} colorSet={COLOR_MAPS} legendPosition="bottom" hasActiveTool />;
}`,...(w=(j=s.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};const ae=["Default","WithLegend","WithTitle","ShowValueWhenActive"];export{o as Default,s as ShowValueWhenActive,n as WithLegend,r as WithTitle,ae as __namedExportsOrder,oe as default};
//# sourceMappingURL=Donut.stories-344e6985.js.map

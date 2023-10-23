import{j as e}from"./jsx-runtime-c301395f.js";import{r as p,g as H}from"./_baseForOwn-4ea03334.js";import{b as N,C as V,L as C,E as W}from"./index-93002463.js";import{g as b,I as A}from"./index-1a378a33.js";const Z={primary:"qb-textarea--primary",tertiary:"qb-textarea--tertiary"},B={bordered:"qb-textarea--bordered",ghost:"qb-textarea--ghost"},D={lg:"qb-textarea--lg",md:"qb-textarea--md",sm:"qb-textarea--sm",xs:"qb-textarea--xs"},J={left:"qb-textarea--left",center:"qb-textarea--center",right:"qb-textarea--right"},K=({name:a,placeholder:n,disabled:t=!1,readOnly:r=!1,label:l,defaultValue:s,defaultHeight:o,required:i=!1,flexDirection:d="column",variant:u="bordered",size:c="md",align:g="left",color:q="primary",clearable:x=!1,autoComplete:k="off",...m})=>{const{control:y,reset:v,formState:_}=N(),f=H(_==null?void 0:_.errors,`${a}.message`,"");return e.jsx(V,{name:a,control:y,defaultValue:s,render:({field:{ref:z,...w}})=>{const G=T=>{const h=T.target;h.style.height="auto",h.style.height=`${h.scrollHeight}px`},O=T=>{const{target:h}=T;setTimeout(()=>{h.style.height=`${h.scrollHeight}px`},0)};return e.jsxs("div",{className:b("qb-textarea",{"qb-textarea--row":d==="row"},{"qb-textarea--disabled":t},{"qb-textarea--readonly":r},{"qb-textarea--clearable":x},B[u],D[c],J[g],Z[q]),children:[l&&e.jsx(C,{text:l,required:i,color:q}),e.jsx("div",{className:"qb-textarea__outside",children:e.jsxs("div",{className:"qb-textarea__actions",children:[e.jsx("textarea",{className:"qb-textarea__form",style:{height:o},rows:1,onInput:G,onFocus:O,ref:z,placeholder:n,disabled:t,readOnly:r,autoComplete:k,...w,value:w.value||""}),x&&w.value!==""&&!t&&!r&&e.jsx("button",{type:"button",className:"qb-textarea__clearable",onClick:()=>{v({[a]:""})},children:e.jsx(A,{name:"icon-basic-close",size:"text-[1.25rem]",color:"text-gray-600 hover:text-gray-700"})})]})}),f&&e.jsx(W,{text:f})]})},...m})},Q=p.memo(K),ie=Q;const S={default:"qb-radio--default",button:"qb-radio--button"},F={lg:"qb-radio--lg",md:"qb-radio--md",sm:"qb-radio--sm",xs:"qb-radio--xs"},P={primary:"qb-radio--primary",tertiary:"qb-radio--tertiary"},j=({name:a,label:n,id:t,variant:r="default",size:l="md",color:s="primary",fullWidth:o=!1,reverse:i=!1,disabled:d,...u})=>{const{control:c}=N();return e.jsx(V,{name:a,control:c,render:({field:{ref:g,onChange:q,...x}})=>e.jsxs("div",{className:b("qb-radio",S[r],F[l],P[s],{"qb-radio--reverse":i},{"qb-radio--disabled":d},{"qb-radio--full-width":o}),children:[e.jsx("input",{type:"radio",ref:g,id:t,...x,value:u.value,disabled:d,onChange:q,className:"qb-radio__form"}),r==="default"&&e.jsx("i",{className:"qb-radio__icon"}),n&&e.jsx("label",{htmlFor:t,className:"qb-radio__label",children:n})]})})},U=({variant:a="default",name:n,label:t,id:r,size:l="md",color:s="primary",fullWidth:o=!1,reverse:i=!1,hasContext:d=!1,disabled:u,...c})=>e.jsx(e.Fragment,{children:d?e.jsx(j,{variant:a,name:n,size:l,color:s,label:t,id:r,reverse:i,disabled:u,...c}):e.jsxs("div",{className:b("qb-radio",F[l],P[s],S[a],{"qb-radio--reverse":i},{"qb-radio--disabled":u},{"qb-radio--full-width":o}),children:[e.jsx("input",{type:"radio",name:n,id:r,disabled:u,className:"qb-radio__form",...c}),a==="default"&&e.jsx("i",{className:"qb-radio__icon"}),t&&e.jsx("label",{htmlFor:r,className:"qb-radio__label",children:t})]})}),X=p.memo(U),Y=X;try{j.displayName="ContextRadio",j.__docgenInfo={description:"",displayName:"ContextRadio",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"default"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'},{value:'"xs"'},{value:'"md"'}]}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"tertiary"'}]}},fullWidth:{defaultValue:{value:"false"},description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"((string | number) & (string | number | readonly string[]))"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},reverse:{defaultValue:{value:"false"},description:"",name:"reverse",required:!1,type:{name:"boolean"}},hasContext:{defaultValue:{value:"false"},description:"",name:"hasContext",required:!1,type:{name:"boolean"}}}}}catch{}const ee={1:"radio-group--items-1",2:"radio-group--items-2",3:"radio-group--items-3",4:"radio-group--items-4",5:"radio-group--items-5"},I=({direction:a="flex-row",variant:n="button",fullWidth:t=!1,name:r,label:l,required:s=!1,items:o=1,gap:i,options:d,onChange:u,hasContext:c=!1})=>{const g=p.useId(),x=a.includes("grid")&&ee[o]||"",k=()=>d.map(({value:m,label:y,disabled:v})=>{const _=m==null?void 0:m.toString().replace(/\s+/g,""),f=`${g}-${_}`;return e.jsx(p.Fragment,{children:c?e.jsx(j,{variant:n,fullWidth:t,id:f,value:m,label:y,name:r,disabled:v,onChange:u}):e.jsx(Y,{variant:n,fullWidth:t,id:f,value:m,label:y,name:r,disabled:v,onChange:u})},f)});return e.jsxs("div",{className:b("radio-group",{"radio-group--flex-row":a==="flex-row","radio-group--flex-column":a==="flex-col","radio-group--grid-row":a==="grid-row","radio-group--grid-column":a==="grid-col"},x),children:[l&&e.jsx(C,{text:l,required:s}),e.jsx("div",{className:b("radio-group__body",i),children:k()})]})},oe=I;try{I.displayName="RadioGroup",I.__docgenInfo={description:"",displayName:"RadioGroup",props:{direction:{defaultValue:{value:"flex-row"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"flex-row"'},{value:'"flex-col"'},{value:'"grid-row"'},{value:'"grid-col"'}]}},variant:{defaultValue:{value:"button"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"default"'}]}},fullWidth:{defaultValue:{value:"false"},description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},items:{defaultValue:{value:"1"},description:"",name:"items",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"}]}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:'Pick<RadioProps, "disabled" | "label" | "value">[]'}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}},defaultChecked:{defaultValue:null,description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}},hasContext:{defaultValue:{value:"false"},description:"",name:"hasContext",required:!1,type:{name:"boolean"}}}}}catch{}const E={lg:"qb-checkbox--lg",md:"qb-checkbox--md",sm:"qb-checkbox--sm",xs:"qb-checkbox--xs"},L={primary:"qb-checkbox--primary",tertiary:"qb-checkbox--tertiary"},$=({name:a,id:n,size:t="md",color:r="primary",disabled:l,reverse:s,label:o})=>{const{control:i}=N();return e.jsx(V,{name:a,control:i,render:({field:{ref:d,...u}})=>e.jsxs("div",{className:b("qb-checkbox",E[t],L[r],{"qb-checkbox--disabled":l},{"qb-checkbox--reverse":s}),children:[e.jsx("input",{type:"checkbox",id:n,className:"qb-checkbox__form",ref:d,disabled:l,...u}),e.jsx(A,{name:"icon-basic-check",className:"qb-checkbox__icon"}),e.jsx("label",{htmlFor:n,className:"qb-checkbox__label",children:o})]})})},ae=({name:a,label:n,size:t="md",color:r="primary",reverse:l=!1,hasContext:s=!1,disabled:o,...i})=>{const d=p.useId();return e.jsx(e.Fragment,{children:s?e.jsx($,{name:a,id:d,size:t,color:r,reverse:l,label:n}):e.jsxs("div",{className:b("qb-checkbox",E[t],L[r],{"qb-checkbox--disabled":o},{"qb-checkbox--reverse":l}),children:[e.jsx("input",{type:"checkbox",name:a,id:d,disabled:o,className:"qb-checkbox__form",...i}),e.jsx(A,{name:"icon-basic-check",className:"qb-checkbox__icon"}),e.jsx("label",{htmlFor:d,className:"qb-checkbox__label",children:n})]})})},le=p.memo(ae),de=le;try{$.displayName="ContextCheckbox",$.__docgenInfo={description:"",displayName:"ContextCheckbox",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'},{value:'"xs"'},{value:'"md"'}]}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"tertiary"'}]}},reverse:{defaultValue:{value:"false"},description:"",name:"reverse",required:!1,type:{name:"boolean"}},hasContext:{defaultValue:{value:"false"},description:"",name:"hasContext",required:!1,type:{name:"boolean"}}}}}catch{}const M=({name:a,id:n,label:t,required:r,options:l})=>{const{control:s}=N();return e.jsx(V,{control:s,name:a,render:({field:{value:o,onChange:i}})=>e.jsxs("div",{className:"qb-switch",children:[t&&e.jsx(C,{text:t,required:r}),e.jsx("input",{name:"name",id:n,type:"checkbox",checked:o===l[1].value,onChange:d=>{const u=d.target.checked?l[1].value:l[0].value;i(u)},className:"qb-switch__form"}),e.jsxs("label",{className:"qb-switch__actions",htmlFor:n,children:[e.jsx("span",{className:"qb-switch__label qb-switch__label--left",children:l==null?void 0:l[0].label}),e.jsx("span",{className:"qb-switch__label qb-switch__label--right",children:l==null?void 0:l[1].label})]})]})})},R=({name:a,isToggled:n,onToggle:t,label:r,required:l,options:s,hasContext:o=!1})=>{const i=p.useId();return e.jsx(e.Fragment,{children:o?e.jsx(M,{name:a,id:i,label:r,required:l,options:s}):e.jsxs("div",{className:"qb-switch",children:[r&&e.jsx(C,{text:r,required:l}),e.jsx("input",{name:"name",type:"checkbox",id:i,checked:n,onChange:t,className:"qb-switch__form"}),e.jsxs("label",{className:"qb-switch__actions",htmlFor:i,children:[e.jsx("span",{className:"qb-switch__label qb-switch__label--left",children:s==null?void 0:s[0].label}),e.jsx("span",{className:"qb-switch__label qb-switch__label--right",children:s==null?void 0:s[1].label})]})]})})},ue=R;try{M.displayName="ContextToggle",M.__docgenInfo={description:"",displayName:"ContextToggle",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number"}},isToggled:{defaultValue:null,description:"",name:"isToggled",required:!1,type:{name:"boolean"}},onToggle:{defaultValue:null,description:"",name:"onToggle",required:!1,type:{name:"(() => void)"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},hasContext:{defaultValue:{value:"false"},description:"",name:"hasContext",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ value: string | number; label: string; }[]"}}}}}catch{}try{R.displayName="Toggle",R.__docgenInfo={description:"",displayName:"Toggle",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number"}},isToggled:{defaultValue:null,description:"",name:"isToggled",required:!1,type:{name:"boolean"}},onToggle:{defaultValue:null,description:"",name:"onToggle",required:!1,type:{name:"(() => void)"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},hasContext:{defaultValue:{value:"false"},description:"",name:"hasContext",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ value: string | number; label: string; }[]"}}}}}catch{}export{de as C,oe as R,ie as T,ue as a,Y as b};
//# sourceMappingURL=index-d0eb6262.js.map

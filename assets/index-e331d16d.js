import{j as s}from"./jsx-runtime-4ca860c5.js";import{r as x,R as Z}from"./index-61bf1805.js";import{p as Se,q as we,j as fe,I as W,r as Ae}from"./index-aa2c32f6.js";import{f as Te}from"./_baseForOwn-fcf16290.js";import{c as Me,t as Ee,d as qe,a as Re,f as Fe}from"./formatters-2037c84a.js";import{c as ce}from"./index-f9f069f9.js";import{T as J}from"./index-5da8d75d.js";function Oe(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,n=Object.getOwnPropertySymbols(e);u<n.length;u++)a.indexOf(n[u])<0&&Object.prototype.propertyIsEnumerable.call(e,n[u])&&(t[n[u]]=e[n[u]]);return t}var X;(function(e){e.event="event",e.props="prop"})(X||(X={}));function H(){}function ke(e){var a,t=void 0;return function(){for(var n=[],u=arguments.length;u--;)n[u]=arguments[u];return a&&n.length===a.length&&n.every(function(d,v){return d===a[v]})||(a=n,t=e.apply(void 0,n)),t}}function re(e){return!!(e||"").match(/\d/)}function ne(e){return e==null}function Be(e){return typeof e=="number"&&isNaN(e)}function Le(e){return ne(e)||Be(e)||typeof e=="number"&&!isFinite(e)}function De(e){var a=x.useRef(e);a.current=e;var t=x.useRef(function(){for(var n=[],u=arguments.length;u--;)n[u]=arguments[u];return a.current.apply(a,n)});return t.current}function le(e,a){return Array(a+1).join(e)}function Pe(e){var a=e+"",t=a[0]==="-"?"-":"";t&&(a=a.substring(1));var n=a.split(/[eE]/g),u=n[0],d=n[1];if(d=Number(d),!d)return t+u;u=u.replace(".","");var v=1+d,N=u.length;return v<0?u="0."+le("0",Math.abs(v))+u:v>=N?u=u+le("0",v-N):u=(u.substring(0,v)||"0")+"."+u.substring(v),t+u}function oe(e,a){if(e.value=e.value,e!==null){if(e.createTextRange){var t=e.createTextRange();return t.move("character",a),t.select(),!0}return e.selectionStart||e.selectionStart===0?(e.focus(),e.setSelectionRange(a,a),!0):(e.focus(),!1)}}var Ue=ke(function(e,a){for(var t=0,n=0,u=e.length,d=a.length;e[t]===a[t]&&t<u;)t++;for(;e[u-1-n]===a[d-1-n]&&d-n>t&&u-n>t;)n++;return{from:{start:t,end:u-n},to:{start:t,end:d-n}}});function Ke(e,a,t){return Math.min(Math.max(e,a),t)}function ae(e){return Math.max(e.selectionStart,e.selectionEnd)}function ze(){return typeof navigator<"u"&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}function $e(e){var a=e.currentValue,t=e.formattedValue,n=e.currentValueIndex,u=e.formattedValueIndex;return a[n]===t[u]}function He(e,a,t,n,u,d,v){v===void 0&&(v=$e);var N=u.findIndex(function(B){return B}),A=e.slice(0,N);!a&&!t.startsWith(A)&&(a=A,t=A+t,n=n+A.length);for(var M=t.length,R=e.length,E={},h=new Array(M),p=0;p<M;p++){h[p]=-1;for(var o=0,j=R;o<j;o++){var S=v({currentValue:t,lastValue:a,formattedValue:e,currentValueIndex:p,formattedValueIndex:o});if(S&&E[o]!==!0){h[p]=o,E[o]=!0;break}}}for(var f=n;f<M&&(h[f]===-1||!d(t[f]));)f++;var I=f===M||h[f]===-1?R:h[f];for(f=n-1;f>0&&h[f]===-1;)f--;var _=f===-1||h[f]===-1?0:h[f]+1;return _>I?I:n-_<I-n?_:I}function se(e,a,t,n){var u=e.length;if(a=Ke(a,0,u),n==="left"){for(;a>=0&&!t[a];)a--;a===-1&&(a=t.indexOf(!0))}else{for(;a<=u&&!t[a];)a++;a>u&&(a=t.lastIndexOf(!0))}return a===-1&&(a=u),a}function We(e){for(var a=Array.from({length:e.length+1}).map(function(){return!0}),t=0,n=a.length;t<n;t++)a[t]=!!(re(e[t])||re(e[t-1]));return a}function Ge(e,a,t,n,u,d){d===void 0&&(d=H);var v=De(function(o,j){var S,f;return Le(o)?(f="",S=""):typeof o=="number"||j?(f=typeof o=="number"?Pe(o):o,S=n(f)):(f=u(o,void 0),S=n(f)),{formattedValue:S,numAsString:f}}),N=x.useState(function(){return v(ne(e)?a:e,t)}),A=N[0],M=N[1],R=function(o,j){o.formattedValue!==A.formattedValue&&M({formattedValue:o.formattedValue,numAsString:o.value}),d(o,j)},E=e,h=t;ne(e)&&(E=A.numAsString,h=!0);var p=v(E,h);return x.useMemo(function(){M(p)},[p.formattedValue]),[A,R]}function Ze(e){return e.replace(/[^0-9]/g,"")}function Je(e){return e}function Qe(e){var a=e.type;a===void 0&&(a="text");var t=e.displayType;t===void 0&&(t="input");var n=e.customInput,u=e.renderText,d=e.getInputRef,v=e.format;v===void 0&&(v=Je);var N=e.removeFormatting;N===void 0&&(N=Ze);var A=e.defaultValue,M=e.valueIsNumericString,R=e.onValueChange,E=e.isAllowed,h=e.onChange;h===void 0&&(h=H);var p=e.onKeyDown;p===void 0&&(p=H);var o=e.onMouseUp;o===void 0&&(o=H);var j=e.onFocus;j===void 0&&(j=H);var S=e.onBlur;S===void 0&&(S=H);var f=e.value,I=e.getCaretBoundary;I===void 0&&(I=We);var _=e.isValidInputCharacter;_===void 0&&(_=re);var B=e.isCharacterSame,D=Oe(e,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter","isCharacterSame"]),z=Ge(f,A,!!M,v,N,R),$=z[0],m=$.formattedValue,F=$.numAsString,P=z[1],T=x.useRef({formattedValue:m,numAsString:F}),O=function(r,i){T.current={formattedValue:r.formattedValue,numAsString:r.value},P(r,i)},k=x.useState(!1),U=k[0],Q=k[1],K=x.useRef(null),L=x.useRef({setCaretTimeout:null,focusTimeout:null});x.useEffect(function(){return Q(!0),function(){clearTimeout(L.current.setCaretTimeout),clearTimeout(L.current.focusTimeout)}},[]);var Y=v,y=function(r,i){var l=parseFloat(i);return{formattedValue:r,value:i,floatValue:isNaN(l)?void 0:l}},c=function(r,i,l){r.selectionStart===0&&r.selectionEnd===r.value.length||(oe(r,i),L.current.setCaretTimeout=setTimeout(function(){r.value===l&&r.selectionStart!==r.selectionEnd&&oe(r,i)},0))},q=function(r,i,l){return se(r,i,I(r),l)},ee=function(r,i,l){var V=I(i),b=He(i,m,r,l,V,_,B);return b=se(i,b,V),b},pe=function(r){var i=r.formattedValue;i===void 0&&(i="");var l=r.input,V=r.setCaretPosition;V===void 0&&(V=!0);var b=r.source,g=r.event,C=r.numAsString,w=r.caretPos;if(l){if(w===void 0&&V){var G=r.inputValue||l.value,te=ae(l);l.value=i,w=ee(G,i,te)}l.value=i,V&&w!==void 0&&c(l,w,i)}i!==m&&O(y(i,C),{event:g,source:b})};x.useEffect(function(){var r=T.current,i=r.formattedValue,l=r.numAsString;m!==i&&(m!==F||i!==l)&&O(y(m,F),{event:void 0,source:X.props})},[m,F]);var xe=K.current?ae(K.current):void 0,he=typeof window<"u"?x.useLayoutEffect:x.useEffect;he(function(){var r=K.current;if(m!==T.current.formattedValue&&r){var i=ee(T.current.formattedValue,m,xe);r.value=m,c(r,i,m)}},[m]);var ye=function(r,i,l){var V=Ue(m,r),b=Object.assign(Object.assign({},V),{lastValue:m}),g=N(r,b),C=Y(g);if(g=N(C,void 0),E&&!E(y(C,g))){var w=i.target,G=ae(w),te=ee(r,m,G);return w.value=m,c(w,te,m),!1}return pe({formattedValue:C,numAsString:g,inputValue:r,event:i,source:l,setCaretPosition:!0,input:i.target}),!0},Ve=function(r){var i=r.target,l=i.value,V=ye(l,r,X.event);V&&h(r)},be=function(r){var i=r.target,l=r.key,V=i.selectionStart,b=i.selectionEnd,g=i.value;g===void 0&&(g="");var C;if(l==="ArrowLeft"||l==="Backspace"?C=Math.max(V-1,0):l==="ArrowRight"?C=Math.min(V+1,g.length):l==="Delete"&&(C=V),C===void 0||V!==b){p(r);return}var w=C;if(l==="ArrowLeft"||l==="ArrowRight"){var G=l==="ArrowLeft"?"left":"right";w=q(g,C,G),w!==C&&r.preventDefault()}else l==="Delete"&&!_(g[C])?w=q(g,C,"right"):l==="Backspace"&&!_(g[C])&&(w=q(g,C,"left"));w!==C&&c(i,w,g),r.isUnitTestRun&&c(i,w,g),p(r)},_e=function(r){var i=r.target,l=i.selectionStart,V=i.selectionEnd,b=i.value;if(b===void 0&&(b=""),l===V){var g=q(b,l);g!==l&&c(i,g,b)}o(r)},Ne=function(r){r.persist&&r.persist();var i=r.target;K.current=i,L.current.focusTimeout=setTimeout(function(){var l=i.selectionStart,V=i.selectionEnd,b=i.value;b===void 0&&(b="");var g=q(b,l);g!==l&&!(l===0&&V===b.length)&&c(i,g,b),j(r)},0)},Ie=function(r){K.current=null,clearTimeout(L.current.focusTimeout),clearTimeout(L.current.setCaretTimeout),S(r)},Ce=U&&ze()?"numeric":void 0,ie=Object.assign({inputMode:Ce},D,{type:a,value:m,onChange:Ve,onKeyDown:be,onMouseUp:_e,onFocus:Ne,onBlur:Ie});if(t==="text")return u?Z.createElement(Z.Fragment,null,u(m,D)||null):Z.createElement("span",Object.assign({},D,{ref:d}),m);if(n){var je=n;return Z.createElement(je,Object.assign({},ie,{ref:d}))}return Z.createElement("input",Object.assign({},ie,{ref:d}))}const de={default:"",primary:"text-field--primary",secondary:"text-field--secondary"},ve={default:"",bordered:"input-bordered text-field--bordered",ghost:"input-ghost text-field--ghost"},me={default:"text-field--default",lg:"text-field--lg",sm:"text-field--sm"},ge={left:"text-field--left",center:"text-field--center",right:"text-field--right"},ue=({name:e,placeholder:a="",type:t="text",disabled:n=!1,readOnly:u=!1,label:d,required:v=!1,defaultValue:N,flexDirection:A="column",variant:M="bordered",size:R="default",align:E="left",color:h="primary",unit:p,outside:o=!1,iconName:j,clearable:S=!1,onClick:f,onChange:I,autoComplete:_="off",hasNegativeNumbers:B=!1,showCurrencyValue:D=!1,...z})=>{const{control:$,reset:m,formState:F,watch:P,setValue:T,getValues:O}=Se(),k=Te(F==null?void 0:F.errors,`${e}.message`,""),[U,Q]=x.useState(!1),K=x.useCallback(y=>{const{code:c}=y;c==="Minus"&&Q(q=>!q)},[]),L=x.useCallback(y=>{switch(y){case"custom-date":return Re;case"date-to-today":return qe;case"phone-number":return Ee;case"currency":return Me}},[]),Y=x.useCallback(y=>{switch(t){case"currency":{const c=Number(y),q=-Math.abs(c);return U?T(e,q):T(e,y)}case"date-to-today":{const c=Number(y.replace(/-/g,""));return T(e,c)}case"phone-number":{const c=y.replace(/-/g,"");return T(e,c)}default:return T(e,y)}},[U,t,T,e]);return x.useEffect(()=>{if(U)switch(t){case"currency":{const y=O(e);if(typeof y=="string"){const c=Number(y.replace(/,/g,"")),q=-Math.abs(c);isNaN(c)||T(e,U?q:c)}break}}},[U,t,O,e,T]),x.useEffect(()=>{I&&P((y,{name:c})=>{I({target:{name:c||"",value:O(c||"")}})})},[O,e,I,P]),s.jsx(we,{name:e,control:$,defaultValue:N,render:({field:{ref:y,...c}})=>s.jsxs("div",{className:ce("text-field",{"text-field--row":A==="row"},{"text-field--error":k},{"text-field--readonly":u},{"text-field--disabled":n},ve[M],me[R],ge[E],de[h]),children:[d&&s.jsx(fe,{text:d,required:v}),s.jsxs("div",{className:"text-field__outside",children:[s.jsxs("div",{className:"text-field__actions",children:[j&&(f?s.jsx("button",{type:"button",className:"text-field__icon-pressable focus-visible--outline",onClick:f,children:s.jsx(W,{name:j,className:"text-field__icon"})}):s.jsx(W,{name:j,className:"text-field__icon"})),t==="currency"||t==="custom-date"||t==="date-to-today"||t==="phone-number"?s.jsx(Qe,{className:"text-field__form",getInputRef:y,placeholder:a,disabled:n,autoComplete:_,...c,...t==="currency"&&B&&{onKeyDown:K},format:L(t),onValueChange:q=>{Y(q.value)},onChange:I}):s.jsx("input",{type:t,className:"text-field__form",ref:y,placeholder:a,disabled:n,autoComplete:_,...c,value:c.value||""}),!o&&p&&s.jsx(J,{className:"text-field__unit",children:p}),S&&!n&&!u&&c.value!==""&&s.jsx("button",{type:"button",className:"text-field__clearable focus-visible--outline",onClick:()=>{m({[e]:""}),Q(!1)},children:s.jsx(W,{name:"icon-check-hlep-fill-1",size:"text-24",color:"text-gray-700 hover:text-gray-600"})})]}),!!o&&p&&s.jsx(J,{className:"text-field__outside-unit",children:p})]}),k&&s.jsx(Ae,{text:k}),!k&&D&&t==="currency"&&s.jsx(J,{variant:"caption",className:"text-field__currency-format",children:Fe(O(e))})]}),...z})},Xe=({type:e="text",name:a,placeholder:t="",disabled:n=!1,readOnly:u=!1,labelWidth:d,label:v,defaultValue:N,required:A=!1,flexDirection:M="column",variant:R="bordered",size:E="default",align:h="left",color:p="primary",unit:o,outside:j=!1,iconName:S,clearable:f=!1,onClick:I,onChange:_,autoComplete:B="off",hasContext:D=!0,hasNegativeNumbers:z=!1,showCurrencyValue:$=!1,...m})=>{const[F,P]=x.useState(N||""),T=x.useCallback(()=>{P(""),_&&_({target:{name:a,value:""}})},[a,_]),O=k=>{P(k.target.value),_&&_({target:{name:a,value:k.target.value}})};return s.jsx(s.Fragment,{children:D?s.jsx(ue,{type:e,name:a,placeholder:t,disabled:n,readOnly:u,labelWidth:d,label:v,required:A,defaultValue:N,flexDirection:M,variant:R,size:E,align:h,color:p,unit:o,outside:j,iconName:S,clearable:f,onClick:I,autoComplete:B,onChange:_,hasNegativeNumbers:z,showCurrencyValue:$}):s.jsxs("div",{className:ce("text-field",{"text-field--row":M==="row"},{"text-field--readonly":u},{"text-field--disabled":n},ve[R],me[E],ge[h],de[p]),children:[v&&s.jsx(fe,{text:v,required:A,width:d}),s.jsxs("div",{className:"text-field__outside",children:[s.jsxs("div",{className:"text-field__actions",children:[S&&(I?s.jsx("button",{type:"button",className:"text-field__icon-pressable focus-visible--outline",onClick:I,children:s.jsx(W,{name:S,className:"text-field__icon"})}):s.jsx(W,{name:S,className:"text-field__icon"})),s.jsx("input",{name:a,className:"text-field__form",type:e,placeholder:t,value:F||"",onChange:O,disabled:n,readOnly:u,autoComplete:B,...m}),!j&&o&&s.jsx(J,{className:"text-field__unit",children:o}),f&&!n&&!u&&F!==""&&s.jsx("button",{type:"button",className:"text-field__clearable focus-visible--outline",onClick:T,children:s.jsx(W,{name:"icon-check-hlep-fill-1",size:"text-24",color:"text-gray-700 hover:text-gray-600"})})]}),!!j&&o&&s.jsx(J,{className:"text-field__outside-unit",children:o})]})]})})},Ye=x.memo(Xe),lt=Ye;try{ue.displayName="ContextInput",ue.__docgenInfo={description:"",displayName:"ContextInput",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},placeholder:{defaultValue:{value:""},description:"",name:"placeholder",required:!1,type:{name:"string"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:'HTMLInputTypeAttribute | "custom-date" | "date-to-today" | "phone-number" | "currency"'}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number"}},labelWidth:{defaultValue:null,description:"",name:"labelWidth",required:!1,type:{name:"string"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},flexDirection:{defaultValue:{value:"column"},description:"",name:"flexDirection",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},variant:{defaultValue:{value:"bordered"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"ghost"'},{value:'"bordered"'}]}},size:{defaultValue:{value:"default"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"lg"'},{value:'"sm"'}]}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},unit:{defaultValue:null,description:"",name:"unit",required:!1,type:{name:"string"}},outside:{defaultValue:{value:"false"},description:"",name:"outside",required:!1,type:{name:"boolean"}},iconName:{defaultValue:null,description:"",name:"iconName",required:!1,type:{name:"any"}},clearable:{defaultValue:{value:"false"},description:"",name:"clearable",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement> | { target: { name: string; value: string | number; }; }) => void)"}},autoComplete:{defaultValue:{value:"off"},description:"",name:"autoComplete",required:!1,type:{name:"enum",value:[{value:'"on"'},{value:'"off"'}]}},hasContext:{defaultValue:{value:"true"},description:"",name:"hasContext",required:!1,type:{name:"boolean"}},hasNegativeNumbers:{defaultValue:{value:"false"},description:"",name:"hasNegativeNumbers",required:!1,type:{name:"boolean"}},showCurrencyValue:{defaultValue:{value:"false"},description:"",name:"showCurrencyValue",required:!1,type:{name:"boolean"}}}}}catch{}export{lt as I};
//# sourceMappingURL=index-e331d16d.js.map

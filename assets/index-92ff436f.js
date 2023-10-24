import{j as c}from"./jsx-runtime-7ed143f6.js";import{r as N,R as H,h as je}from"./_baseForOwn-126b22f4.js";import{b as we,C as Ae,L as se,E as Me}from"./index-1ff8c9ba.js";import"./dayjs.min-941aafe8.js";import{g as fe,I as Z,T as W}from"./index-636f3ace.js";function Te(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r}var J;(function(e){e.event="event",e.props="prop"})(J||(J={}));function $(){}function Ee(e){var t,r=void 0;return function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return t&&n.length===t.length&&n.every(function(s,o){return s===t[o]})||(t=n,r=e.apply(void 0,n)),r}}function re(e){return!!(e||"").match(/\d/)}function ne(e){return e==null}function qe(e){return typeof e=="number"&&isNaN(e)}function Re(e){return ne(e)||qe(e)||typeof e=="number"&&!isFinite(e)}function Oe(e){var t=N.useRef(e);t.current=e;var r=N.useRef(function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return t.current.apply(t,n)});return r.current}function ie(e,t){return Array(t+1).join(e)}function Fe(e){var t=e+"",r=t[0]==="-"?"-":"";r&&(t=t.substring(1));var n=t.split(/[eE]/g),a=n[0],s=n[1];if(s=Number(s),!s)return r+a;a=a.replace(".","");var o=1+s,p=a.length;return o<0?a="0."+ie("0",Math.abs(o))+a:o>=p?a=a+ie("0",o-p):a=(a.substring(0,o)||"0")+"."+a.substring(o),r+a}function le(e,t){if(e.value=e.value,e!==null){if(e.createTextRange){var r=e.createTextRange();return r.move("character",t),r.select(),!0}return e.selectionStart||e.selectionStart===0?(e.focus(),e.setSelectionRange(t,t),!0):(e.focus(),!1)}}var Le=Ee(function(e,t){for(var r=0,n=0,a=e.length,s=t.length;e[r]===t[r]&&r<a;)r++;for(;e[a-1-n]===t[s-1-n]&&s-n>r&&a-n>r;)n++;return{from:{start:r,end:a-n},to:{start:r,end:s-n}}});function Be(e,t,r){return Math.min(Math.max(e,t),r)}function te(e){return Math.max(e.selectionStart,e.selectionEnd)}function ke(){return typeof navigator<"u"&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}function De(e){var t=e.currentValue,r=e.formattedValue,n=e.currentValueIndex,a=e.formattedValueIndex;return t[n]===r[a]}function ze(e,t,r,n,a,s,o){o===void 0&&(o=De);var p=a.findIndex(function(F){return F}),b=e.slice(0,p);!t&&!r.startsWith(b)&&(t=b,r=b+r,n=n+b.length);for(var I=r.length,j=e.length,_={},m=new Array(I),h=0;h<I;h++){m[h]=-1;for(var d=0,w=j;d<w;d++){var A=o({currentValue:r,lastValue:t,formattedValue:e,currentValueIndex:h,formattedValueIndex:d});if(A&&_[d]!==!0){m[h]=d,_[d]=!0;break}}}for(var f=n;f<I&&(m[f]===-1||!s(r[f]));)f++;var V=f===I||m[f]===-1?j:m[f];for(f=n-1;f>0&&m[f]===-1;)f--;var T=f===-1||m[f]===-1?0:m[f]+1;return T>V?V:n-T<V-n?T:V}function oe(e,t,r,n){var a=e.length;if(t=Be(t,0,a),n==="left"){for(;t>=0&&!r[t];)t--;t===-1&&(t=r.indexOf(!0))}else{for(;t<=a&&!r[t];)t++;t>a&&(t=r.lastIndexOf(!0))}return t===-1&&(t=a),t}function Pe(e){for(var t=Array.from({length:e.length+1}).map(function(){return!0}),r=0,n=t.length;r<n;r++)t[r]=!!(re(e[r])||re(e[r-1]));return t}function $e(e,t,r,n,a,s){s===void 0&&(s=$);var o=Oe(function(d,w){var A,f;return Re(d)?(f="",A=""):typeof d=="number"||w?(f=typeof d=="number"?Fe(d):d,A=n(f)):(f=a(d,void 0),A=n(f)),{formattedValue:A,numAsString:f}}),p=N.useState(function(){return o(ne(e)?t:e,r)}),b=p[0],I=p[1],j=function(d,w){d.formattedValue!==b.formattedValue&&I({formattedValue:d.formattedValue,numAsString:d.value}),s(d,w)},_=e,m=r;ne(e)&&(_=b.numAsString,m=!0);var h=o(_,m);return N.useMemo(function(){I(h)},[h.formattedValue]),[b,j]}function Ue(e){return e.replace(/[^0-9]/g,"")}function Ke(e){return e}function He(e){var t=e.type;t===void 0&&(t="text");var r=e.displayType;r===void 0&&(r="input");var n=e.customInput,a=e.renderText,s=e.getInputRef,o=e.format;o===void 0&&(o=Ke);var p=e.removeFormatting;p===void 0&&(p=Ue);var b=e.defaultValue,I=e.valueIsNumericString,j=e.onValueChange,_=e.isAllowed,m=e.onChange;m===void 0&&(m=$);var h=e.onKeyDown;h===void 0&&(h=$);var d=e.onMouseUp;d===void 0&&(d=$);var w=e.onFocus;w===void 0&&(w=$);var A=e.onBlur;A===void 0&&(A=$);var f=e.value,V=e.getCaretBoundary;V===void 0&&(V=Pe);var T=e.isValidInputCharacter;T===void 0&&(T=re);var F=e.isCharacterSame,L=Te(e,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter","isCharacterSame"]),z=$e(f,b,!!I,o,p,j),O=z[0],v=O.formattedValue,E=O.numAsString,B=z[1],R=N.useRef({formattedValue:v,numAsString:E}),Y=function(u,i){R.current={formattedValue:u.formattedValue,numAsString:u.value},B(u,i)},G=N.useState(!1),q=G[0],M=G[1],k=N.useRef(null),P=N.useRef({setCaretTimeout:null,focusTimeout:null});N.useEffect(function(){return M(!0),function(){clearTimeout(P.current.setCaretTimeout),clearTimeout(P.current.focusTimeout)}},[]);var ge=o,Q=function(u,i){var l=parseFloat(i);return{formattedValue:u,value:i,floatValue:isNaN(l)?void 0:l}},D=function(u,i,l){u.selectionStart===0&&u.selectionEnd===u.value.length||(le(u,i),P.current.setCaretTimeout=setTimeout(function(){u.value===l&&u.selectionStart!==u.selectionEnd&&le(u,i)},0))},U=function(u,i,l){return oe(u,i,V(u),l)},X=function(u,i,l){var x=V(i),y=ze(i,v,u,l,x,T,F);return y=oe(i,y,x),y},pe=function(u){var i=u.formattedValue;i===void 0&&(i="");var l=u.input,x=u.setCaretPosition;x===void 0&&(x=!0);var y=u.source,g=u.event,C=u.numAsString,S=u.caretPos;if(l){if(S===void 0&&x){var K=u.inputValue||l.value,ee=te(l);l.value=i,S=X(K,i,ee)}l.value=i,x&&S!==void 0&&D(l,S,i)}i!==v&&Y(Q(i,C),{event:g,source:y})};N.useEffect(function(){var u=R.current,i=u.formattedValue,l=u.numAsString;v!==i&&(v!==E||i!==l)&&Y(Q(v,E),{event:void 0,source:J.props})},[v,E]);var he=k.current?te(k.current):void 0,xe=typeof window<"u"?N.useLayoutEffect:N.useEffect;xe(function(){var u=k.current;if(v!==R.current.formattedValue&&u){var i=X(R.current.formattedValue,v,he);u.value=v,D(u,i,v)}},[v]);var ye=function(u,i,l){var x=Le(v,u),y=Object.assign(Object.assign({},x),{lastValue:v}),g=p(u,y),C=ge(g);if(g=p(C,void 0),_&&!_(Q(C,g))){var S=i.target,K=te(S),ee=X(u,v,K);return S.value=v,D(S,ee,v),!1}return pe({formattedValue:C,numAsString:g,inputValue:u,event:i,source:l,setCaretPosition:!0,input:i.target}),!0},be=function(u){var i=u.target,l=i.value,x=ye(l,u,J.event);x&&m(u)},Ve=function(u){var i=u.target,l=u.key,x=i.selectionStart,y=i.selectionEnd,g=i.value;g===void 0&&(g="");var C;if(l==="ArrowLeft"||l==="Backspace"?C=Math.max(x-1,0):l==="ArrowRight"?C=Math.min(x+1,g.length):l==="Delete"&&(C=x),C===void 0||x!==y){h(u);return}var S=C;if(l==="ArrowLeft"||l==="ArrowRight"){var K=l==="ArrowLeft"?"left":"right";S=U(g,C,K),S!==C&&u.preventDefault()}else l==="Delete"&&!T(g[C])?S=U(g,C,"right"):l==="Backspace"&&!T(g[C])&&(S=U(g,C,"left"));S!==C&&D(i,S,g),u.isUnitTestRun&&D(i,S,g),h(u)},Ie=function(u){var i=u.target,l=i.selectionStart,x=i.selectionEnd,y=i.value;if(y===void 0&&(y=""),l===x){var g=U(y,l);g!==l&&D(i,g,y)}d(u)},_e=function(u){u.persist&&u.persist();var i=u.target;k.current=i,P.current.focusTimeout=setTimeout(function(){var l=i.selectionStart,x=i.selectionEnd,y=i.value;y===void 0&&(y="");var g=U(y,l);g!==l&&!(l===0&&x===y.length)&&D(i,g,y),w(u)},0)},Ce=function(u){k.current=null,clearTimeout(P.current.focusTimeout),clearTimeout(P.current.setCaretTimeout),A(u)},Ne=q&&ke()?"numeric":void 0,ue=Object.assign({inputMode:Ne},L,{type:t,value:v,onChange:be,onKeyDown:Ve,onMouseUp:Ie,onFocus:_e,onBlur:Ce});if(r==="text")return a?H.createElement(H.Fragment,null,a(v,L)||null):H.createElement("span",Object.assign({},L,{ref:s}),v);if(n){var Se=n;return H.createElement(Se,Object.assign({},ue,{ref:s}))}return H.createElement("input",Object.assign({},ue,{ref:s}))}function We(e){const o=typeof e=="string"?Number(e.replace(/,/g,"")):e,p=Math.floor(o/1e8),b=Math.floor(o%1e8/1e4),I=Math.floor(o%1e4/1e3),j=Math.floor(o%1e3/100),_=Math.floor(o%100/10),m=Math.floor(o%10);return p+b+I+j+_+m===0?"":(p?p+"억 ":"")+(b?b+"만 ":"")+(I?I+"천 ":"")+(j?j+"백 ":"")+(_?_+"십 ":"")+(m||"")+"원"}const Ye=e=>{if(e==="")return"";const t=e.substring(0,4);let r=e.substring(4,6),n=e.substring(6,8);parseInt(r.substring(0,1))>1?r=`0${r}`:(parseInt(r)===0||parseInt(r)>12)&&(r=r.substring(0,1)),parseInt(n.substring(0,1))>3?n=`0${n}`:(parseInt(n)===0||parseInt(n)>31)&&(n=n.substring(0,1));const a=new Date().getFullYear().toString();if(parseInt(t.substring(0,1))>parseInt(a.substring(0,1)))return"";if(parseInt(t.substring(0,2))>parseInt(a.substring(0,2)))return t.substring(0,1);if(parseInt(t.substring(0,3))>parseInt(a.substring(0,3)))return t.substring(0,2);if(parseInt(t)>parseInt(a))return t.substring(0,3);let s=t;return r&&(s+=`-${r}`),n&&(s+=`-${n}`),s},Ge=e=>{if(e==="")return"";const t=e.substring(0,3),r=e.substring(3,7),n=e.substring(7,11);let a=t;return r&&(a+=`-${r}`),n&&(a+=`-${n}`),a},Ze=e=>e?Intl.NumberFormat("ko-KR").format(Number(e)):"";const de={default:"",primary:"text-field--primary",tertiary:"text-field--tertiary"},ce={default:"",bordered:"input-bordered text-field--bordered",ghost:"input-ghost text-field--ghost"},me={lg:"text-field--lg",md:"text-field--md",sm:"text-field--sm",xs:"text-field--xs"},ve={left:"text-field--left",center:"text-field--center",right:"text-field--right"},ae=({name:e,placeholder:t,type:r="text",disabled:n=!1,label:a,required:s=!1,defaultValue:o,flexDirection:p="column",variant:b="bordered",size:I="md",align:j="left",color:_="default",unit:m,outside:h=!1,iconName:d,clearable:w=!1,onClick:A,onChange:f,autoComplete:V="off",showCurrencyValue:T=!1,...F})=>{const{control:L,reset:z,formState:O,watch:v,setValue:E,getValues:B}=we(),R=je(O==null?void 0:O.errors,`${e}.message`,""),Y=N.useCallback(q=>{switch(q){case"today-date":return Ye;case"phone-number":return Ge;case"currency":return Ze}},[]),G=N.useCallback(q=>{switch(r){case"currency":{const M=Number(q.replace(/,/g,""));return E(e,M)}case"today-date":{const M=Number(q.replace(/-/g,""));return E(e,M)}case"phone-number":{const M=q.replace(/-/g,"");return E(e,M)}default:return E(e,q)}},[r,e,E]);return N.useEffect(()=>{f&&v((q,{name:M})=>{f({target:{name:M||"",value:B(M||"")}})})},[B,e,f,v]),c.jsx(Ae,{name:e,control:L,defaultValue:o,render:({field:{ref:q,...M}})=>c.jsxs("div",{className:fe("text-field",{"text-field--row":p==="row"},{"text-field--disabled":n},ce[b],me[I],ve[j],de[_]),children:[a&&c.jsx(se,{text:a,required:s,color:_}),c.jsxs("div",{className:"text-field__outside",children:[c.jsxs("div",{className:"text-field__actions",children:[d&&c.jsx("button",{type:"button",className:"text-field__icon-pressable",onClick:A,children:c.jsx(Z,{name:d,className:"text-field__icon"})}),r==="currency"||r==="today-date"||r==="phone-number"?c.jsx(He,{className:"text-field__form",getInputRef:q,placeholder:t,disabled:n,autoComplete:V,...M,format:Y(r),onValueChange:k=>{G(k.value)},onChange:f}):c.jsx("input",{type:r,className:"text-field__form",ref:q,placeholder:t,disabled:n,autoComplete:V,...M,value:M.value||""}),!h&&m&&c.jsx(W,{size:"xs",className:"text-field__unit",children:m}),w&&!n&&M.value!==""&&c.jsx("button",{type:"button",className:"text-field__clearable",onClick:()=>{z({[e]:""})},children:c.jsx(Z,{name:"icon-basic-close",size:"text-[1.25rem]",color:"text-gray-600 hover:text-gray-700"})})]}),!!h&&m&&c.jsx(W,{size:"xs",className:"text-field__outside-unit",children:m})]}),R&&c.jsx(Me,{text:R}),!R&&T&&r==="currency"&&c.jsx(W,{size:"sm",className:"text-field__currency-format",children:We(B(e))})]}),...F})},Je=({type:e="text",name:t,placeholder:r,disabled:n=!1,labelWidth:a,label:s,defaultValue:o,required:p=!1,flexDirection:b="column",variant:I="bordered",size:j="md",align:_="left",color:m="default",unit:h,outside:d=!1,iconName:w,clearable:A=!1,onClick:f,onChange:V,autoComplete:T="off",hasContext:F=!0,showCurrencyValue:L=!1,...z})=>{const[O,v]=N.useState(o||""),E=N.useCallback(()=>{v(""),V&&V({target:{name:t,value:""}})},[t,V]),B=R=>{v(R.target.value),V&&V({target:{name:t,value:R.target.value}})};return c.jsx(c.Fragment,{children:F?c.jsx(ae,{type:e,name:t,placeholder:r,disabled:n,labelWidth:a,label:s,required:p,defaultValue:o,flexDirection:b,variant:I,size:j,align:_,color:m,unit:h,outside:d,iconName:w,clearable:A,onClick:f,autoComplete:T,onChange:V,showCurrencyValue:L}):c.jsxs("div",{className:fe("text-field",{"text-field--row":b==="row"},{"text-field--disabled":n},ce[I],me[j],ve[_],de[m]),children:[s&&c.jsx(se,{text:s,required:p,width:a,color:m}),c.jsxs("div",{className:"text-field__outside",children:[c.jsxs("div",{className:"text-field__actions",children:[w&&c.jsx("button",{type:"button",className:"text-field__icon-pressable",onClick:f,children:c.jsx(Z,{name:w,className:"text-field__icon"})}),c.jsx("input",{name:t,className:"text-field__form",type:e,placeholder:r,value:O||"",onChange:B,disabled:n,autoComplete:T,...z}),!d&&h&&c.jsx(W,{size:"xs",className:"text-field__unit",children:h}),A&&!n&&O!==""&&c.jsx("button",{type:"button",className:"text-field__clearable",onClick:E,children:c.jsx(Z,{name:"icon-basic-close",size:"text-[1.25rem]",color:"text-gray-600 hover:text-gray-700"})})]}),!!d&&h&&c.jsx(W,{size:"xs",className:"text-field__outside-unit",children:h})]})]})})},Qe=N.memo(Je),at=Qe;try{ae.displayName="ContextInput",ae.__docgenInfo={description:"",displayName:"ContextInput",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:'HTMLInputTypeAttribute | "today-date" | "phone-number" | "currency"'}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number"}},labelWidth:{defaultValue:null,description:"",name:"labelWidth",required:!1,type:{name:"string"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},flexDirection:{defaultValue:{value:"column"},description:"",name:"flexDirection",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},variant:{defaultValue:{value:"bordered"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"bordered"'},{value:'"ghost"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'},{value:'"xs"'},{value:'"md"'}]}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},color:{defaultValue:{value:"default"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"tertiary"'}]}},unit:{defaultValue:null,description:"",name:"unit",required:!1,type:{name:"string"}},outside:{defaultValue:{value:"false"},description:"",name:"outside",required:!1,type:{name:"boolean"}},iconName:{defaultValue:null,description:"",name:"iconName",required:!1,type:{name:"any"}},clearable:{defaultValue:{value:"false"},description:"",name:"clearable",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement> | { target: { name: string; value: string | number; }; }) => void)"}},autoComplete:{defaultValue:{value:"off"},description:"",name:"autoComplete",required:!1,type:{name:"enum",value:[{value:'"on"'},{value:'"off"'}]}},hasContext:{defaultValue:{value:"true"},description:"",name:"hasContext",required:!1,type:{name:"boolean"}},showCurrencyValue:{defaultValue:{value:"false"},description:"",name:"showCurrencyValue",required:!1,type:{name:"boolean"}}}}}catch{}export{at as I};
//# sourceMappingURL=index-92ff436f.js.map

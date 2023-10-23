import{j as w}from"./jsx-runtime-c301395f.js";import{r as B,R as se,g as we}from"./_baseForOwn-4ea03334.js";import{b as Ce,C as Ne,L as be,E as De}from"./index-93002463.js";import{c as Te}from"./_commonjsHelpers-de833af9.js";import{g as $e,I as le,T as oe}from"./index-1a378a33.js";function Ae(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)n.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r}var fe;(function(e){e.event="event",e.props="prop"})(fe||(fe={}));function ue(){}function Oe(e){var n,r=void 0;return function(){for(var a=[],s=arguments.length;s--;)a[s]=arguments[s];return n&&a.length===n.length&&a.every(function(y,v){return y===n[v]})||(n=a,r=e.apply(void 0,a)),r}}function me(e){return!!(e||"").match(/\d/)}function ve(e){return e==null}function je(e){return typeof e=="number"&&isNaN(e)}function Ee(e){return ve(e)||je(e)||typeof e=="number"&&!isFinite(e)}function ke(e){var n=B.useRef(e);n.current=e;var r=B.useRef(function(){for(var a=[],s=arguments.length;s--;)a[s]=arguments[s];return n.current.apply(n,a)});return r.current}function pe(e,n){return Array(n+1).join(e)}function Le(e){var n=e+"",r=n[0]==="-"?"-":"";r&&(n=n.substring(1));var a=n.split(/[eE]/g),s=a[0],y=a[1];if(y=Number(y),!y)return r+s;s=s.replace(".","");var v=1+y,I=s.length;return v<0?s="0."+pe("0",Math.abs(v))+s:v>=I?s=s+pe("0",v-I):s=(s.substring(0,v)||"0")+"."+s.substring(v),r+s}function ye(e,n){if(e.value=e.value,e!==null){if(e.createTextRange){var r=e.createTextRange();return r.move("character",n),r.select(),!0}return e.selectionStart||e.selectionStart===0?(e.focus(),e.setSelectionRange(n,n),!0):(e.focus(),!1)}}var qe=Oe(function(e,n){for(var r=0,a=0,s=e.length,y=n.length;e[r]===n[r]&&r<s;)r++;for(;e[s-1-a]===n[y-1-a]&&y-a>r&&s-a>r;)a++;return{from:{start:r,end:s-a},to:{start:r,end:y-a}}});function Fe(e,n,r){return Math.min(Math.max(e,n),r)}function de(e){return Math.max(e.selectionStart,e.selectionEnd)}function Re(){return typeof navigator<"u"&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}function Be(e){var n=e.currentValue,r=e.formattedValue,a=e.currentValueIndex,s=e.formattedValueIndex;return n[a]===r[s]}function Ye(e,n,r,a,s,y,v){v===void 0&&(v=Be);var I=s.findIndex(function(G){return G}),D=e.slice(0,I);!n&&!r.startsWith(D)&&(n=D,r=D+r,a=a+D.length);for(var C=r.length,j=e.length,S={},$=new Array(C),_=0;_<C;_++){$[_]=-1;for(var g=0,L=j;g<L;g++){var Y=v({currentValue:r,lastValue:n,formattedValue:e,currentValueIndex:_,formattedValueIndex:g});if(Y&&S[g]!==!0){$[_]=g,S[g]=!0;break}}}for(var b=a;b<C&&($[b]===-1||!y(r[b]));)b++;var O=b===C||$[b]===-1?j:$[b];for(b=a-1;b>0&&$[b]===-1;)b--;var q=b===-1||$[b]===-1?0:$[b]+1;return q>O?O:a-q<O-a?q:O}function xe(e,n,r,a){var s=e.length;if(n=Fe(n,0,s),a==="left"){for(;n>=0&&!r[n];)n--;n===-1&&(n=r.indexOf(!0))}else{for(;n<=s&&!r[n];)n++;n>s&&(n=r.lastIndexOf(!0))}return n===-1&&(n=s),n}function He(e){for(var n=Array.from({length:e.length+1}).map(function(){return!0}),r=0,a=n.length;r<a;r++)n[r]=!!(me(e[r])||me(e[r-1]));return n}function ze(e,n,r,a,s,y){y===void 0&&(y=ue);var v=ke(function(g,L){var Y,b;return Ee(g)?(b="",Y=""):typeof g=="number"||L?(b=typeof g=="number"?Le(g):g,Y=a(b)):(b=s(g,void 0),Y=a(b)),{formattedValue:Y,numAsString:b}}),I=B.useState(function(){return v(ve(e)?n:e,r)}),D=I[0],C=I[1],j=function(g,L){g.formattedValue!==D.formattedValue&&C({formattedValue:g.formattedValue,numAsString:g.value}),y(g,L)},S=e,$=r;ve(e)&&(S=D.numAsString,$=!0);var _=v(S,$);return B.useMemo(function(){C(_)},[_.formattedValue]),[D,j]}function Ue(e){return e.replace(/[^0-9]/g,"")}function We(e){return e}function Pe(e){var n=e.type;n===void 0&&(n="text");var r=e.displayType;r===void 0&&(r="input");var a=e.customInput,s=e.renderText,y=e.getInputRef,v=e.format;v===void 0&&(v=We);var I=e.removeFormatting;I===void 0&&(I=Ue);var D=e.defaultValue,C=e.valueIsNumericString,j=e.onValueChange,S=e.isAllowed,$=e.onChange;$===void 0&&($=ue);var _=e.onKeyDown;_===void 0&&(_=ue);var g=e.onMouseUp;g===void 0&&(g=ue);var L=e.onFocus;L===void 0&&(L=ue);var Y=e.onBlur;Y===void 0&&(Y=ue);var b=e.value,O=e.getCaretBoundary;O===void 0&&(O=He);var q=e.isValidInputCharacter;q===void 0&&(q=me);var G=e.isCharacterSame,K=Ae(e,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter","isCharacterSame"]),W=ze(b,D,!!C,v,I,j),Z=W[0],M=Z.formattedValue,V=Z.numAsString,p=W[1],H=B.useRef({formattedValue:M,numAsString:V}),te=function(l,f){H.current={formattedValue:l.formattedValue,numAsString:l.value},p(l,f)},c=B.useState(!1),u=c[0],t=c[1],o=B.useRef(null),i=B.useRef({setCaretTimeout:null,focusTimeout:null});B.useEffect(function(){return t(!0),function(){clearTimeout(i.current.setCaretTimeout),clearTimeout(i.current.focusTimeout)}},[]);var m=v,d=function(l,f){var h=parseFloat(f);return{formattedValue:l,value:f,floatValue:isNaN(h)?void 0:h}},x=function(l,f,h){l.selectionStart===0&&l.selectionEnd===l.value.length||(ye(l,f),i.current.setCaretTimeout=setTimeout(function(){l.value===h&&l.selectionStart!==l.selectionEnd&&ye(l,f)},0))},N=function(l,f,h){return xe(l,f,O(l),h)},A=function(l,f,h){var E=O(f),k=Ye(f,M,l,h,E,q,G);return k=xe(f,k,E),k},F=function(l){var f=l.formattedValue;f===void 0&&(f="");var h=l.input,E=l.setCaretPosition;E===void 0&&(E=!0);var k=l.source,T=l.event,R=l.numAsString,U=l.caretPos;if(h){if(U===void 0&&E){var ie=l.inputValue||h.value,ce=de(h);h.value=f,U=A(ie,f,ce)}h.value=f,E&&U!==void 0&&x(h,U,f)}f!==M&&te(d(f,R),{event:T,source:k})};B.useEffect(function(){var l=H.current,f=l.formattedValue,h=l.numAsString;M!==f&&(M!==V||f!==h)&&te(d(M,V),{event:void 0,source:fe.props})},[M,V]);var P=o.current?de(o.current):void 0,ee=typeof window<"u"?B.useLayoutEffect:B.useEffect;ee(function(){var l=o.current;if(M!==H.current.formattedValue&&l){var f=A(H.current.formattedValue,M,P);l.value=M,x(l,f,M)}},[M]);var Q=function(l,f,h){var E=qe(M,l),k=Object.assign(Object.assign({},E),{lastValue:M}),T=I(l,k),R=m(T);if(T=I(R,void 0),S&&!S(d(R,T))){var U=f.target,ie=de(U),ce=A(l,M,ie);return U.value=M,x(U,ce,M),!1}return F({formattedValue:R,numAsString:T,inputValue:l,event:f,source:h,setCaretPosition:!0,input:f.target}),!0},re=function(l){var f=l.target,h=f.value,E=Q(h,l,fe.event);E&&$(l)},X=function(l){var f=l.target,h=l.key,E=f.selectionStart,k=f.selectionEnd,T=f.value;T===void 0&&(T="");var R;if(h==="ArrowLeft"||h==="Backspace"?R=Math.max(E-1,0):h==="ArrowRight"?R=Math.min(E+1,T.length):h==="Delete"&&(R=E),R===void 0||E!==k){_(l);return}var U=R;if(h==="ArrowLeft"||h==="ArrowRight"){var ie=h==="ArrowLeft"?"left":"right";U=N(T,R,ie),U!==R&&l.preventDefault()}else h==="Delete"&&!q(T[R])?U=N(T,R,"right"):h==="Backspace"&&!q(T[R])&&(U=N(T,R,"left"));U!==R&&x(f,U,T),l.isUnitTestRun&&x(f,U,T),_(l)},z=function(l){var f=l.target,h=f.selectionStart,E=f.selectionEnd,k=f.value;if(k===void 0&&(k=""),h===E){var T=N(k,h);T!==h&&x(f,T,k)}g(l)},J=function(l){l.persist&&l.persist();var f=l.target;o.current=f,i.current.focusTimeout=setTimeout(function(){var h=f.selectionStart,E=f.selectionEnd,k=f.value;k===void 0&&(k="");var T=N(k,h);T!==h&&!(h===0&&E===k.length)&&x(f,T,k),L(l)},0)},ne=function(l){o.current=null,clearTimeout(i.current.focusTimeout),clearTimeout(i.current.setCaretTimeout),Y(l)},ae=u&&Re()?"numeric":void 0,ge=Object.assign({inputMode:ae},K,{type:n,value:M,onChange:re,onKeyDown:X,onMouseUp:z,onFocus:J,onBlur:ne});if(r==="text")return s?se.createElement(se.Fragment,null,s(M,K)||null):se.createElement("span",Object.assign({},K,{ref:y}),M);if(a){var Ie=a;return se.createElement(Ie,Object.assign({},ge,{ref:y}))}return se.createElement("input",Object.assign({},ge,{ref:y}))}var Ke={exports:{}};(function(e,n){(function(r,a){e.exports=a()})(Te,function(){var r=1e3,a=6e4,s=36e5,y="millisecond",v="second",I="minute",D="hour",C="day",j="week",S="month",$="quarter",_="year",g="date",L="Invalid Date",Y=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,b=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,O={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(c){var u=["th","st","nd","rd"],t=c%100;return"["+c+(u[(t-20)%10]||u[t]||u[0])+"]"}},q=function(c,u,t){var o=String(c);return!o||o.length>=u?c:""+Array(u+1-o.length).join(t)+c},G={s:q,z:function(c){var u=-c.utcOffset(),t=Math.abs(u),o=Math.floor(t/60),i=t%60;return(u<=0?"+":"-")+q(o,2,"0")+":"+q(i,2,"0")},m:function c(u,t){if(u.date()<t.date())return-c(t,u);var o=12*(t.year()-u.year())+(t.month()-u.month()),i=u.clone().add(o,S),m=t-i<0,d=u.clone().add(o+(m?-1:1),S);return+(-(o+(t-i)/(m?i-d:d-i))||0)},a:function(c){return c<0?Math.ceil(c)||0:Math.floor(c)},p:function(c){return{M:S,y:_,w:j,d:C,D:g,h:D,m:I,s:v,ms:y,Q:$}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(c){return c===void 0}},K="en",W={};W[K]=O;var Z=function(c){return c instanceof H},M=function c(u,t,o){var i;if(!u)return K;if(typeof u=="string"){var m=u.toLowerCase();W[m]&&(i=m),t&&(W[m]=t,i=m);var d=u.split("-");if(!i&&d.length>1)return c(d[0])}else{var x=u.name;W[x]=u,i=x}return!o&&i&&(K=i),i||!o&&K},V=function(c,u){if(Z(c))return c.clone();var t=typeof u=="object"?u:{};return t.date=c,t.args=arguments,new H(t)},p=G;p.l=M,p.i=Z,p.w=function(c,u){return V(c,{locale:u.$L,utc:u.$u,x:u.$x,$offset:u.$offset})};var H=function(){function c(t){this.$L=M(t.locale,null,!0),this.parse(t)}var u=c.prototype;return u.parse=function(t){this.$d=function(o){var i=o.date,m=o.utc;if(i===null)return new Date(NaN);if(p.u(i))return new Date;if(i instanceof Date)return new Date(i);if(typeof i=="string"&&!/Z$/i.test(i)){var d=i.match(Y);if(d){var x=d[2]-1||0,N=(d[7]||"0").substring(0,3);return m?new Date(Date.UTC(d[1],x,d[3]||1,d[4]||0,d[5]||0,d[6]||0,N)):new Date(d[1],x,d[3]||1,d[4]||0,d[5]||0,d[6]||0,N)}}return new Date(i)}(t),this.$x=t.x||{},this.init()},u.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},u.$utils=function(){return p},u.isValid=function(){return this.$d.toString()!==L},u.isSame=function(t,o){var i=V(t);return this.startOf(o)<=i&&i<=this.endOf(o)},u.isAfter=function(t,o){return V(t)<this.startOf(o)},u.isBefore=function(t,o){return this.endOf(o)<V(t)},u.$g=function(t,o,i){return p.u(t)?this[o]:this.set(i,t)},u.unix=function(){return Math.floor(this.valueOf()/1e3)},u.valueOf=function(){return this.$d.getTime()},u.startOf=function(t,o){var i=this,m=!!p.u(o)||o,d=p.p(t),x=function(X,z){var J=p.w(i.$u?Date.UTC(i.$y,z,X):new Date(i.$y,z,X),i);return m?J:J.endOf(C)},N=function(X,z){return p.w(i.toDate()[X].apply(i.toDate("s"),(m?[0,0,0,0]:[23,59,59,999]).slice(z)),i)},A=this.$W,F=this.$M,P=this.$D,ee="set"+(this.$u?"UTC":"");switch(d){case _:return m?x(1,0):x(31,11);case S:return m?x(1,F):x(0,F+1);case j:var Q=this.$locale().weekStart||0,re=(A<Q?A+7:A)-Q;return x(m?P-re:P+(6-re),F);case C:case g:return N(ee+"Hours",0);case D:return N(ee+"Minutes",1);case I:return N(ee+"Seconds",2);case v:return N(ee+"Milliseconds",3);default:return this.clone()}},u.endOf=function(t){return this.startOf(t,!1)},u.$set=function(t,o){var i,m=p.p(t),d="set"+(this.$u?"UTC":""),x=(i={},i[C]=d+"Date",i[g]=d+"Date",i[S]=d+"Month",i[_]=d+"FullYear",i[D]=d+"Hours",i[I]=d+"Minutes",i[v]=d+"Seconds",i[y]=d+"Milliseconds",i)[m],N=m===C?this.$D+(o-this.$W):o;if(m===S||m===_){var A=this.clone().set(g,1);A.$d[x](N),A.init(),this.$d=A.set(g,Math.min(this.$D,A.daysInMonth())).$d}else x&&this.$d[x](N);return this.init(),this},u.set=function(t,o){return this.clone().$set(t,o)},u.get=function(t){return this[p.p(t)]()},u.add=function(t,o){var i,m=this;t=Number(t);var d=p.p(o),x=function(F){var P=V(m);return p.w(P.date(P.date()+Math.round(F*t)),m)};if(d===S)return this.set(S,this.$M+t);if(d===_)return this.set(_,this.$y+t);if(d===C)return x(1);if(d===j)return x(7);var N=(i={},i[I]=a,i[D]=s,i[v]=r,i)[d]||1,A=this.$d.getTime()+t*N;return p.w(A,this)},u.subtract=function(t,o){return this.add(-1*t,o)},u.format=function(t){var o=this,i=this.$locale();if(!this.isValid())return i.invalidDate||L;var m=t||"YYYY-MM-DDTHH:mm:ssZ",d=p.z(this),x=this.$H,N=this.$m,A=this.$M,F=i.weekdays,P=i.months,ee=i.meridiem,Q=function(z,J,ne,ae){return z&&(z[J]||z(o,m))||ne[J].slice(0,ae)},re=function(z){return p.s(x%12||12,z,"0")},X=ee||function(z,J,ne){var ae=z<12?"AM":"PM";return ne?ae.toLowerCase():ae};return m.replace(b,function(z,J){return J||function(ne){switch(ne){case"YY":return String(o.$y).slice(-2);case"YYYY":return p.s(o.$y,4,"0");case"M":return A+1;case"MM":return p.s(A+1,2,"0");case"MMM":return Q(i.monthsShort,A,P,3);case"MMMM":return Q(P,A);case"D":return o.$D;case"DD":return p.s(o.$D,2,"0");case"d":return String(o.$W);case"dd":return Q(i.weekdaysMin,o.$W,F,2);case"ddd":return Q(i.weekdaysShort,o.$W,F,3);case"dddd":return F[o.$W];case"H":return String(x);case"HH":return p.s(x,2,"0");case"h":return re(1);case"hh":return re(2);case"a":return X(x,N,!0);case"A":return X(x,N,!1);case"m":return String(N);case"mm":return p.s(N,2,"0");case"s":return String(o.$s);case"ss":return p.s(o.$s,2,"0");case"SSS":return p.s(o.$ms,3,"0");case"Z":return d}return null}(z)||d.replace(":","")})},u.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},u.diff=function(t,o,i){var m,d=this,x=p.p(o),N=V(t),A=(N.utcOffset()-this.utcOffset())*a,F=this-N,P=function(){return p.m(d,N)};switch(x){case _:m=P()/12;break;case S:m=P();break;case $:m=P()/3;break;case j:m=(F-A)/6048e5;break;case C:m=(F-A)/864e5;break;case D:m=F/s;break;case I:m=F/a;break;case v:m=F/r;break;default:m=F}return i?m:p.a(m)},u.daysInMonth=function(){return this.endOf(S).$D},u.$locale=function(){return W[this.$L]},u.locale=function(t,o){if(!t)return this.$L;var i=this.clone(),m=M(t,o,!0);return m&&(i.$L=m),i},u.clone=function(){return p.w(this.$d,this)},u.toDate=function(){return new Date(this.valueOf())},u.toJSON=function(){return this.isValid()?this.toISOString():null},u.toISOString=function(){return this.$d.toISOString()},u.toString=function(){return this.$d.toUTCString()},c}(),te=H.prototype;return V.prototype=te,[["$ms",y],["$s",v],["$m",I],["$H",D],["$W",C],["$M",S],["$y",_],["$D",g]].forEach(function(c){te[c[1]]=function(u){return this.$g(u,c[0],c[1])}}),V.extend=function(c,u){return c.$i||(c(u,H,V),c.$i=!0),V},V.locale=M,V.isDayjs=Z,V.unix=function(c){return V(1e3*c)},V.en=W[K],V.Ls=W,V.p={},V})})(Ke);function Ze(e){const v=typeof e=="string"?Number(e.replace(/,/g,"")):e,I=Math.floor(v/1e8),D=Math.floor(v%1e8/1e4),C=Math.floor(v%1e4/1e3),j=Math.floor(v%1e3/100),S=Math.floor(v%100/10),$=Math.floor(v%10);return I+D+C+j+S+$===0?"":(I?I+"억 ":"")+(D?D+"만 ":"")+(C?C+"천 ":"")+(j?j+"백 ":"")+(S?S+"십 ":"")+($||"")+"원"}const Je=e=>{if(e==="")return"";const n=e.substring(0,4);let r=e.substring(4,6),a=e.substring(6,8);parseInt(r.substring(0,1))>1?r=`0${r}`:(parseInt(r)===0||parseInt(r)>12)&&(r=r.substring(0,1)),parseInt(a.substring(0,1))>3?a=`0${a}`:(parseInt(a)===0||parseInt(a)>31)&&(a=a.substring(0,1));const s=new Date().getFullYear().toString();if(parseInt(n.substring(0,1))>parseInt(s.substring(0,1)))return"";if(parseInt(n.substring(0,2))>parseInt(s.substring(0,2)))return n.substring(0,1);if(parseInt(n.substring(0,3))>parseInt(s.substring(0,3)))return n.substring(0,2);if(parseInt(n)>parseInt(s))return n.substring(0,3);let y=n;return r&&(y+=`-${r}`),a&&(y+=`-${a}`),y},Ge=e=>{if(e==="")return"";const n=e.substring(0,3),r=e.substring(3,7),a=e.substring(7,11);let s=n;return r&&(s+=`-${r}`),a&&(s+=`-${a}`),s},Qe=e=>e?Intl.NumberFormat("ko-KR").format(Number(e)):"";const _e={default:"",primary:"text-field--primary",tertiary:"text-field--tertiary"},Me={default:"",bordered:"input-bordered text-field--bordered",ghost:"input-ghost text-field--ghost"},Ve={lg:"text-field--lg",md:"text-field--md",sm:"text-field--sm",xs:"text-field--xs"},Se={left:"text-field--left",center:"text-field--center",right:"text-field--right"},he=({name:e,placeholder:n,type:r="text",disabled:a=!1,label:s,required:y=!1,defaultValue:v,flexDirection:I="column",variant:D="bordered",size:C="md",align:j="left",color:S="default",unit:$,outside:_=!1,iconName:g,clearable:L=!1,onClick:Y,onChange:b,autoComplete:O="off",showCurrencyValue:q=!1,...G})=>{const{control:K,reset:W,formState:Z,watch:M,setValue:V,getValues:p}=Ce(),H=we(Z==null?void 0:Z.errors,`${e}.message`,""),te=B.useCallback(u=>{switch(u){case"today-date":return Je;case"phone-number":return Ge;case"currency":return Qe}},[]),c=B.useCallback(u=>{switch(r){case"currency":{const t=Number(u.replace(/,/g,""));return V(e,t)}case"today-date":{const t=Number(u.replace(/-/g,""));return V(e,t)}case"phone-number":{const t=u.replace(/-/g,"");return V(e,t)}default:return V(e,u)}},[r,e,V]);return B.useEffect(()=>{b&&M((u,{name:t})=>{b({target:{name:t||"",value:p(t||"")}})})},[p,e,b,M]),w.jsx(Ne,{name:e,control:K,defaultValue:v,render:({field:{ref:u,...t}})=>w.jsxs("div",{className:$e("text-field",{"text-field--row":I==="row"},{"text-field--disabled":a},Me[D],Ve[C],Se[j],_e[S]),children:[s&&w.jsx(be,{text:s,required:y,color:S}),w.jsxs("div",{className:"text-field__outside",children:[w.jsxs("div",{className:"text-field__actions",children:[g&&w.jsx("button",{type:"button",className:"text-field__icon-pressable",onClick:Y,children:w.jsx(le,{name:g,className:"text-field__icon"})}),r==="currency"||r==="today-date"||r==="phone-number"?w.jsx(Pe,{className:"text-field__form",getInputRef:u,placeholder:n,disabled:a,autoComplete:O,...t,format:te(r),onValueChange:o=>{c(o.value)},onChange:b}):w.jsx("input",{type:r,className:"text-field__form",ref:u,placeholder:n,disabled:a,autoComplete:O,...t,value:t.value||""}),!_&&$&&w.jsx(oe,{size:"xs",className:"text-field__unit",children:$}),L&&!a&&t.value!==""&&w.jsx("button",{type:"button",className:"text-field__clearable",onClick:()=>{W({[e]:""})},children:w.jsx(le,{name:"icon-basic-close",size:"text-[1.25rem]",color:"text-gray-600 hover:text-gray-700"})})]}),!!_&&$&&w.jsx(oe,{size:"xs",className:"text-field__outside-unit",children:$})]}),H&&w.jsx(De,{text:H}),!H&&q&&r==="currency"&&w.jsx(oe,{size:"sm",className:"text-field__currency-format",children:Ze(p(e))})]}),...G})},Xe=({type:e="text",name:n,placeholder:r,disabled:a=!1,labelWidth:s,label:y,defaultValue:v,required:I=!1,flexDirection:D="column",variant:C="bordered",size:j="md",align:S="left",color:$="default",unit:_,outside:g=!1,iconName:L,clearable:Y=!1,onClick:b,onChange:O,autoComplete:q="off",hasContext:G=!0,showCurrencyValue:K=!1,...W})=>{const[Z,M]=B.useState(v||""),V=B.useCallback(()=>{M(""),O&&O({target:{name:n,value:""}})},[n,O]),p=H=>{M(H.target.value),O&&O({target:{name:n,value:H.target.value}})};return w.jsx(w.Fragment,{children:G?w.jsx(he,{type:e,name:n,placeholder:r,disabled:a,labelWidth:s,label:y,required:I,defaultValue:v,flexDirection:D,variant:C,size:j,align:S,color:$,unit:_,outside:g,iconName:L,clearable:Y,onClick:b,autoComplete:q,onChange:O,showCurrencyValue:K}):w.jsxs("div",{className:$e("text-field",{"text-field--row":D==="row"},{"text-field--disabled":a},Me[C],Ve[j],Se[S],_e[$]),children:[y&&w.jsx(be,{text:y,required:I,width:s,color:$}),w.jsxs("div",{className:"text-field__outside",children:[w.jsxs("div",{className:"text-field__actions",children:[L&&w.jsx("button",{type:"button",className:"text-field__icon-pressable",onClick:b,children:w.jsx(le,{name:L,className:"text-field__icon"})}),w.jsx("input",{name:n,className:"text-field__form",type:e,placeholder:r,value:Z||"",onChange:p,disabled:a,autoComplete:q,...W}),!g&&_&&w.jsx(oe,{size:"xs",className:"text-field__unit",children:_}),Y&&!a&&Z!==""&&w.jsx("button",{type:"button",className:"text-field__clearable",onClick:V,children:w.jsx(le,{name:"icon-basic-close",size:"text-[1.25rem]",color:"text-gray-600 hover:text-gray-700"})})]}),!!g&&_&&w.jsx(oe,{size:"xs",className:"text-field__outside-unit",children:_})]})]})})},et=B.memo(Xe),it=et;try{he.displayName="ContextInput",he.__docgenInfo={description:"",displayName:"ContextInput",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:'HTMLInputTypeAttribute | "today-date" | "phone-number" | "currency"'}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number"}},labelWidth:{defaultValue:null,description:"",name:"labelWidth",required:!1,type:{name:"string"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},flexDirection:{defaultValue:{value:"column"},description:"",name:"flexDirection",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},variant:{defaultValue:{value:"bordered"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"bordered"'},{value:'"ghost"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'},{value:'"xs"'},{value:'"md"'}]}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},color:{defaultValue:{value:"default"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"tertiary"'}]}},unit:{defaultValue:null,description:"",name:"unit",required:!1,type:{name:"string"}},outside:{defaultValue:{value:"false"},description:"",name:"outside",required:!1,type:{name:"boolean"}},iconName:{defaultValue:null,description:"",name:"iconName",required:!1,type:{name:"any"}},clearable:{defaultValue:{value:"false"},description:"",name:"clearable",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement> | { target: { name: string; value: string | number; }; }) => void)"}},autoComplete:{defaultValue:{value:"off"},description:"",name:"autoComplete",required:!1,type:{name:"enum",value:[{value:'"on"'},{value:'"off"'}]}},hasContext:{defaultValue:{value:"true"},description:"",name:"hasContext",required:!1,type:{name:"boolean"}},showCurrencyValue:{defaultValue:{value:"false"},description:"",name:"showCurrencyValue",required:!1,type:{name:"boolean"}}}}}catch{}export{it as I};
//# sourceMappingURL=index-e568a962.js.map

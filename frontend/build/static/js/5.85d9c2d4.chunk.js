(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[5],{40:function(e,t,a){"use strict";var n=a(8),l=a(0),r=a.n(l);a(46);t.a=e=>e.href?r.a.createElement("a",{className:`button button--${e.size||"default"} ${e.inverse&&"button--inverse"} ${e.danger&&"button--danger"}`,href:e.href},e.children):e.to?r.a.createElement(n.b,{to:e.to,exact:e.exact,className:`button button--${e.size||"default"} ${e.inverse&&"button--inverse"} ${e.danger&&"button--danger"}`},e.children):r.a.createElement("button",{className:`button button--${e.size||"default"} ${e.inverse&&"button--inverse"} ${e.danger&&"button--danger"}`,type:e.type,onClick:e.onClick,disabled:e.disabled},e.children)},41:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(42),i=a(40);t.a=e=>l.a.createElement(r.a,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.showError,footer:l.a.createElement(i.a,{onClick:e.onClear},"Okay")},l.a.createElement("p",null,e.showError))},42:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(6),i=a.n(r),s=a(39),c=a(13);a(45);const o=e=>{const t=l.a.createElement("div",{className:"modal "+e.className,style:e.style},l.a.createElement("header",{className:"modal__header "+e.headerClass},l.a.createElement("h2",null,e.header)),l.a.createElement("form",{onSubmit:e.onSubmit?e.onSubmit:e=>{e.preventDefault()}},l.a.createElement("div",{className:"modal__content "+e.contentClass},e.children),l.a.createElement("footer",{className:"modal__footer "+e.footerClass},e.footer)));return i.a.createPortal(t,document.getElementById("modal-hook"))};t.a=e=>l.a.createElement(l.a.Fragment,null,e.show?l.a.createElement(c.a,{onClick:e.onCancel}):null,l.a.createElement(s.a,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal"},l.a.createElement(o,e)))},43:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(0);const l=()=>{const[e,t]=Object(n.useState)(!1),[a,l]=Object(n.useState)(),r=Object(n.useRef)([]),i=Object(n.useCallback)((async function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};console.log(`HTTP \uc694\uccad url --\x3e ${n} }\n${e.substring(0,22)} \n${e.substring(22)}`),t(!0);const c=new AbortController;r.current.push(c);try{const a=await fetch(e,{method:n,body:i,headers:s,signal:c.signal}),l=await a.json();if(r.current=r.current.filter(e=>e!==c),a.ok)return l;throw new Error(l.message)}catch(a){throw l(a.message),t(!1),a}finally{t(!1)}}),[]);return Object(n.useEffect)(()=>()=>{r.current.forEach(e=>e.abort())},[]),{isLoading:e,error:a,sendRequest:i,clearError:()=>{l(null)}}}},44:function(e,t,a){"use strict";var n=a(0),l=a.n(n);a(48);t.a=e=>l.a.createElement("div",{className:"card "+e.className,style:e.style},e.children)},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return r})),a.d(t,"d",(function(){return i}));const n=()=>({type:"REQUIRE"}),l=e=>({type:"MINLENGTH",val:e}),r=()=>({type:"EMAIL"}),i=(e,t)=>{let a=!0;for(const n of t)"REQUIRE"===n.type&&(a=a&&e.trim().length>0),"MINLENGTH"===n.type&&(a=a&&e.trim().length>=n.val),"MAXLENGTH"===n.type&&(a=a&&e.trim().length<=n.val),"MIN"===n.type&&(a=a&&+e>=n.val),"MAX"===n.type&&(a=a&&+e<=n.val),"EMAIL"===n.type&&(a=a&&/^\S+@\S+\.\S+$/.test(e));return a}},48:function(e,t,a){},49:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(47);a(50);const i=(e,t)=>{switch(t.type){case"CHANGE":return{...e,value:t.val,isValid:Object(r.d)(t.val,t.validators)};case"TOUCH":return{...e,isTouched:!0};default:return e}};t.a=e=>{const[t,a]=Object(n.useReducer)(i,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),{id:r,onInput:s}=e,{value:c,isValid:o}=t;Object(n.useEffect)(()=>{s(r,c,o)},[r,c,o,s]);const u=t=>{a({type:"CHANGE",val:t.target.value,validators:e.validators})},d=()=>{a({type:"TOUCH"})},m="input"===e.element?l.a.createElement("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:u,onBlur:d,value:t.value}):l.a.createElement("textarea",{id:e.id,rows:e.rows||3,onChange:u,onBlur:d,value:t.value});return l.a.createElement("div",{className:"form-control "+(!t.isValid&&t.isTouched&&"form-control--invalid")},l.a.createElement("label",{htmlFor:e.id},e.label),m,!t.isValid&&t.isTouched&&l.a.createElement("p",null,e.errorText))}},50:function(e,t,a){},51:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0);const l=(e,t)=>{switch(t.type){case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};case"INPUT_CHANGE":let a=!0;for(const n in e.inputs)e.inputs[n]&&(a=n===t.inputId?a&&t.isValid:a&&e.inputs[n].isValid);return{...e,inputs:{...e.inputs,[t.inputId]:{value:t.value,isValid:t.isValid}},isValid:a};default:return e}},r=(e,t)=>{const[a,r]=Object(n.useReducer)(l,{inputs:e,isValid:t}),i=Object(n.useCallback)((e,t)=>{r({type:"SET_DATA",inputs:e,formIsValid:t})},[]);return[a,Object(n.useCallback)((e,t,a)=>{r({type:"INPUT_CHANGE",inputId:e,value:t,isValid:a})},[]),i]}},54:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(1),i=a(49),s=a(40),c=a(44),o=a(12),u=a(41),d=a(47),m=a(10),p=a(51),E=a(43);a(54);t.default=()=>{const e=Object(n.useContext)(m.a),{isLoading:t,error:a,sendRequest:f,clearError:h}=Object(E.a)(),[b,v]=Object(n.useState)(),y=Object(r.h)().placeId,g=Object(r.g)(),[C,N,O]=Object(p.a)({title:{value:"",isValid:!1},description:{value:"",isValid:!1}},!1);Object(n.useEffect)(()=>{(async()=>{try{const e=await f("http://localhost:5000/api/places/"+y);v(e.place),O({title:{value:e.place.title,isValid:!0},description:{value:e.place.description,isValid:!0}},!0)}catch(e){}})()},[f,y,O]);return t?l.a.createElement("div",{className:"center"},l.a.createElement(o.a,null)):b||a?l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{showError:a,onClear:h}),!t&&b&&l.a.createElement("form",{className:"place-form",onSubmit:async t=>{t.preventDefault();try{await f("http://localhost:5000/api/places/"+y,"PATCH",JSON.stringify({title:C.inputs.title.value,description:C.inputs.description.value}),{"Content-Type":"application/json",Authorization:"Bearer "+e.token}),g.push("/"+e.userId+"/places")}catch(a){}}},l.a.createElement(i.a,{id:"title",element:"input",type:"text",label:"Title",validators:[Object(d.c)()],errorText:"Please enter a valid title.",onInput:N,initialValue:b.title,initialValid:!0}),l.a.createElement(i.a,{id:"description",element:"textarea",label:"Description",validators:[Object(d.b)(5)],errorText:"Please enter a valid description (min. 5 characters).",onInput:N,initialValue:b.description,initialValid:!0}),l.a.createElement(s.a,{type:"submit",disabled:!C.isValid},"UPDATE PLACE"))):l.a.createElement("div",{className:"center"},l.a.createElement(c.a,null,l.a.createElement("h2",null,"Could not find place!")))}}}]);
//# sourceMappingURL=5.85d9c2d4.chunk.js.map
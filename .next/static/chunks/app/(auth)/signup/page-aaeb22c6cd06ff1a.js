(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[129],{6985:function(e,t,n){Promise.resolve().then(n.bind(n,15))},6463:function(e,t,n){"use strict";var r=n(1169);n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}})},15:function(e,t,n){"use strict";n.d(t,{SignupForm:function(){return h}});var r=n(7437),a=n(2265),i=n(6463),o=n(3277),s=n(7147),l=n(8646),u=n(8214),d=n(5282),c=n(3667),p=n(4846);function f(){let e=(0,l._)(["\n            radial-gradient(\n              "," circle at ","px ","px,\n              var(--blue-500),\n              transparent 80%\n            )\n          "]);return f=function(){return e},e}let x=a.forwardRef((e,t)=>{let{className:n,options:i,...o}=e,[s,l]=a.useState(!1),[x,m]=a.useState(!1),[h,g]=a.useState(i[0]),b=a.useRef(null),v=(0,d.c)(0),w=(0,d.c)(0);return(0,r.jsxs)("div",{className:"relative",ref:b,children:[(0,r.jsx)(c.E.div,{style:{background:(0,p.Y)(f(),s?"100px":"0px",v,w)},onMouseMove:function(e){let{currentTarget:t,clientX:n,clientY:r}=e,{left:a,top:i}=t.getBoundingClientRect();v.set(n-a),w.set(r-i)},onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),className:"p-[2px] rounded-lg transition duration-300 group/input",children:(0,r.jsx)("div",{className:(0,u.cn)("flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm placeholder:text-neutral-400 dark:placeholder-text-neutral-600\n            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600\n            disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]\n            group-hover/input:shadow-none transition duration-400",n),onClick:()=>m(!x),children:h})}),x&&(0,r.jsx)("ul",{className:"absolute z-10 w-full bg-gray-50 dark:bg-zinc-800 shadow-md rounded-md overflow-auto",children:i.map((e,t)=>(0,r.jsx)("li",{onClick:()=>{g(e),m(!1)},className:"cursor-pointer px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition",children:e},t))})]})});x.displayName="Dropdown";var m=n(7138);function h(){let e=(0,i.useRouter)(),[t,n]=(0,a.useState)({name:"",email:"",password:"",role:"student"}),[l,u]=(0,a.useState)(!1),[d,c]=(0,a.useState)(null),p=e=>{let{name:t,value:r}=e.target;n(e=>({...e,[t]:r}))},f=async n=>{n.preventDefault(),c(null),u(!0);try{let n=await fetch("/api/auth/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),r=await n.json();if(!n.ok){let e=Array.isArray(r.message)?r.message.join(", "):"Signup failed";throw Error(e)}e.push("/dashboard")}catch(e){c(e.message)}finally{u(!1)}};return(0,r.jsxs)("div",{className:"max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black",children:[(0,r.jsx)("h2",{className:"font-bold text-xl text-neutral-800 dark:text-neutral-200",children:"Welcome to Test.ai"}),(0,r.jsx)("p",{className:"text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300",children:"Sign up for an account to start using the app."}),(0,r.jsxs)("div",{className:" mt-4 flex flex-row gap-2  ",children:[(0,r.jsx)("p",{children:"Already have an account?"}),(0,r.jsx)("button",{className:"cursor-pointer  text-blue-500 underline",children:(0,r.jsx)(m.default,{href:"/signin",children:"Sign in"})})]}),(0,r.jsxs)("form",{className:"my-8",onSubmit:f,children:[(0,r.jsxs)("div",{className:"flex flex-col space-y-4 mb-4",children:[(0,r.jsx)(o._,{htmlFor:"name",children:"Name"}),(0,r.jsx)(s.I,{id:"name",name:"name",placeholder:"Enter your name",type:"text",value:t.name,onChange:p}),(0,r.jsx)(o._,{htmlFor:"email",children:"Email Address"}),(0,r.jsx)(s.I,{id:"email",name:"email",placeholder:"Enter your email",type:"email",value:t.email,onChange:p}),(0,r.jsx)(o._,{htmlFor:"password",children:"Password"}),(0,r.jsx)(s.I,{id:"password",name:"password",placeholder:"********",type:"password",value:t.password,onChange:p}),(0,r.jsx)(o._,{htmlFor:"role",children:"Role"}),(0,r.jsx)(x,{id:"role",options:["Student","Working professional"],selectedOption:t.role.charAt(0).toUpperCase()+t.role.slice(1),setSelectedOption:e=>{n(t=>({...t,role:e.toLowerCase()}))}})]}),d&&(0,r.jsx)("p",{className:"text-red-500 m-2",children:d}),(0,r.jsx)("button",{className:"bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]",type:"submit",disabled:l,children:l?"Signing up...":"Sign up"})]})]})}},7147:function(e,t,n){"use strict";n.d(t,{I:function(){return c}});var r=n(8646),a=n(7437),i=n(2265),o=n(8214),s=n(5282),l=n(3667),u=n(4846);function d(){let e=(0,r._)(["\n      radial-gradient(\n        "," circle at ","px ","px,\n        var(--blue-500),\n        transparent 80%\n      )\n    "]);return d=function(){return e},e}let c=i.forwardRef((e,t)=>{let{className:n,type:r,...c}=e,[p,f]=i.useState(!1),x=(0,s.c)(0),m=(0,s.c)(0);return(0,a.jsx)(l.E.div,{style:{background:(0,u.Y)(d(),p?"100px":"0px",x,m)},onMouseMove:function(e){let{currentTarget:t,clientX:n,clientY:r}=e,{left:a,top:i}=t.getBoundingClientRect();x.set(n-a),m.set(r-i)},onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),className:"p-[2px] rounded-lg transition duration-300 group/input",children:(0,a.jsx)("input",{type:r,className:(0,o.cn)("flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent \n        file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 \n        focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600\n         disabled:cursor-not-allowed disabled:opacity-50\n         dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]\n         group-hover/input:shadow-none transition duration-400\n         ",n),ref:t,...c})})});c.displayName="Input"},3277:function(e,t,n){"use strict";n.d(t,{_:function(){return s}});var r=n(7437),a=n(2265),i=n(8364),o=n(8214);let s=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(i.f,{ref:t,className:(0,o.cn)("text-sm font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",n),...a})});s.displayName=i.f.displayName},8214:function(e,t,n){"use strict";n.d(t,{cn:function(){return i}});var r=n(4839),a=n(6164);function i(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,a.m6)((0,r.W)(t))}},8364:function(e,t,n){"use strict";n.d(t,{f:function(){return s}});var r=n(2265),a=n(5171),i=n(7437),o=r.forwardRef((e,t)=>(0,i.jsx)(a.WV.label,{...e,ref:t,onMouseDown:t=>{var n;t.target.closest("button, input, select, textarea")||(null===(n=e.onMouseDown)||void 0===n||n.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));o.displayName="Label";var s=o},5171:function(e,t,n){"use strict";n.d(t,{WV:function(){return s},jH:function(){return l}});var r=n(2265),a=n(4887),i=n(1538),o=n(7437),s=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=r.forwardRef((e,n)=>{let{asChild:r,...a}=e,s=r?i.g7:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,o.jsx)(s,{...a,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function l(e,t){e&&a.flushSync(()=>e.dispatchEvent(t))}},8646:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{_:function(){return r}})},8565:function(e,t,n){"use strict";n.d(t,{N:function(){return o}});var r=n(5282),a=n(9033),i=n(6219);function o(e,t){let n=(0,r.c)(t()),o=()=>n.set(t());return o(),(0,a.L)(()=>{let t=()=>i.Wi.preRender(o,!1,!0),n=e.map(e=>e.on("change",t));return()=>{n.forEach(e=>e()),(0,i.Pn)(o)}}),n}},4846:function(e,t,n){"use strict";n.d(t,{Y:function(){return i}});var r=n(8565),a=n(8322);function i(e,...t){let n=e.length;return(0,r.N)(t.filter(a.i),function(){let r="";for(let i=0;i<n;i++){r+=e[i];let n=t[i];n&&(r+=(0,a.i)(n)?n.get():n)}return r})}},5282:function(e,t,n){"use strict";n.d(t,{c:function(){return s}});var r=n(2265),a=n(804),i=n(9791),o=n(458);function s(e){let t=(0,o.h)(()=>(0,a.BX)(e)),{isStatic:n}=(0,r.useContext)(i._);if(n){let[,n]=(0,r.useState)(e);(0,r.useEffect)(()=>t.on("change",n),[])}return t}}},function(e){e.O(0,[967,138,667,971,23,744],function(){return e(e.s=6985)}),_N_E=e.O()}]);
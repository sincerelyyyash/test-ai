(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[166],{8045:function(e,t,s){Promise.resolve().then(s.bind(s,7520))},1765:function(e,t,s){"use strict";s.d(t,{$2:function(){return n},EF:function(){return l},HW:function(){return o},OB:function(){return i},P7:function(){return c},r7:function(){return d},zQ:function(){return a}}),s(4590);var r=s(8064),a=(0,r.$)("a18f3caa8936c15bf195e1c37d02fef5e0a23a51"),n=(0,r.$)("2f6c76f24d5939aee4e2efac0f9d592f7739abcd"),i=(0,r.$)("cec6511c6012591018a8abb38c5e0e8ab8320ac2"),l=(0,r.$)("b86ecc6d5690362205972786256030e39b40b4c7"),c=(0,r.$)("f2a94d884370614724e0162983f4f8332313e4e4"),o=(0,r.$)("9d6f14d8821bab9b959e840f793b10a07be88c0a"),d=(0,r.$)("2b26542d218fc73998a86464cad6afb0588db3b0")},7520:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return S}});var r=s(7437),a=s(2265),n=s(998),i=s(6463),l=s(1765),c=s(4867),o=s(8977),d=s(8214);let u=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(o.fC,{className:(0,d.cn)("grid gap-2",s),...a,ref:t})});u.displayName=o.fC.displayName;let m=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(o.ck,{ref:t,className:(0,d.cn)("aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",s),...a,children:(0,r.jsx)(o.z$,{className:"flex items-center justify-center",children:(0,r.jsx)(c.nQG,{className:"h-3.5 w-3.5 fill-primary"})})})});m.displayName=o.ck.displayName;var f=s(3277),x=e=>{let{question:t,index:s,onChange:a,userAnswer:n}=e;return(0,r.jsxs)("div",{className:"bg-white dark:bg-zinc-900 text-black dark:text-white shadow-md rounded-lg p-6 mb-6",children:[(0,r.jsxs)("h2",{className:"text-xl font-semibold mb-4",children:["Question ",s+1]}),(0,r.jsx)("p",{className:"mb-4",children:t.text}),(0,r.jsx)(u,{onValueChange:e=>a(e),value:n,className:"space-y-2",children:t.options.map((e,t)=>(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(m,{value:e,id:"q".concat(s,"-option").concat(t),className:"mr-2"}),(0,r.jsx)(f._,{htmlFor:"q".concat(s,"-option").concat(t),children:e})]},t))})]})},h=e=>{let{timeLimit:t}=e,s=60*t,[n,i]=(0,a.useState)(s);(0,a.useEffect)(()=>{let e=setInterval(()=>{i(e=>e>0?e-1:0)},1e3);return()=>clearInterval(e)},[]);let l=n/s*100;return(0,r.jsxs)("div",{className:"fixed top-4 bg-white text-black dark:bg-black dark:text-white dark:border right-4 p-2 rounded shadow-lg text-lg ".concat(l<=10?"bg-red-100 text-red-600":"bg-gray-100 mt-16"),children:["Time Left: ",(e=>{let t=e%60;return"".concat(Math.floor(e/60),":").concat(t<10?"0":"").concat(t)})(n)]})},b=s(2200),g=s(4962),p=s(3274),v=s(3667),y=s(4446);let j=e=>{let{className:t}=e;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:(0,d.cn)("w-6 h-6",t,"text-gray-900 dark:text-gray-100"),children:(0,r.jsx)("path",{d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})})},w=e=>{let{className:t}=e;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:(0,d.cn)("w-6 h-6",t,"text-gray-900 dark:text-gray-100"),children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",clipRule:"evenodd"})})},N=e=>{let{loadingStates:t,value:s=0}=e;return(0,r.jsx)("div",{className:"flex relative justify-start max-w-xl mx-auto flex-col mt-40",children:t.map((e,t)=>{let a=Math.abs(t-s);return(0,r.jsxs)(v.E.div,{className:"text-left flex gap-2 mb-4",initial:{opacity:0,y:-(40*s)},animate:{opacity:Math.max(1-.2*a,0),y:-(40*s)},transition:{duration:.5},children:[(0,r.jsxs)("div",{children:[t>s&&(0,r.jsx)(j,{className:"text-gray-900 dark:text-gray-100"}),t<=s&&(0,r.jsx)(w,{className:(0,d.cn)("text-gray-900 dark:text-gray-100",s===t&&"text-black dark:text-white opacity-100")})]}),(0,r.jsx)("span",{className:(0,d.cn)("text-gray-900 dark:text-gray-100",s===t&&"text-black dark:text-lime-500 opacity-100"),children:e.text})]},t)})})},k=e=>{let{loadingStates:t,loading:s,duration:n=2e3,loop:i=!0}=e,[l,c]=(0,a.useState)(0);return(0,a.useEffect)(()=>{if(!s){c(0);return}let e=setTimeout(()=>{c(e=>i?e===t.length-1?0:e+1:Math.min(e+1,t.length-1))},n);return()=>clearTimeout(e)},[l,s,i,t.length,n]),(0,r.jsx)(y.M,{mode:"wait",children:s&&(0,r.jsxs)(v.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"w-full h-full fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-2xl",children:[(0,r.jsx)("div",{className:"h-96 relative",children:(0,r.jsx)(N,{value:l,loadingStates:t})}),(0,r.jsx)("div",{className:"bg-gradient-to-t inset-x-0 z-20 bottom-0 bg-white dark:bg-black h-full absolute [mask-image:radial-gradient(900px_at_center,transparent_30%,white)]"})]})})};function S(e){let{params:t}=e,{testId:s}=t,{data:c,status:o}=(0,n.useSession)(),d=(0,i.useRouter)(),[u,m]=(0,a.useState)(null),[f,v]=(0,a.useState)({}),[y,j]=(0,a.useState)(0),[w,N]=(0,a.useState)(!1);(0,a.useEffect)(()=>{"unauthenticated"===o?(g.ZP.error("Please log in to take the test"),d.push("/signin")):"authenticated"===o&&S()},[o,d,s]);let S=async()=>{let e=await (0,l.OB)(s);e?m(e):(g.ZP.error("Test not found"),d.push("/"))},_=(e,t)=>{v(s=>({...s,[e]:t}))},P=async()=>{if(!c||!c.user){g.ZP.error("Please log in to submit the test");return}if(u.questions.filter(e=>!f[e._id]).length>0){g.ZP.error("You must answer all questions");return}N(!0);let e=await (0,l.EF)(s,f,c.user.id);N(!1),e.success?(g.ZP.success("Test submitted successfully"),d.push("/test-result/".concat(e.resultId))):(g.ZP.error(e.error||"Failed to submit test"),console.error("Submit error:",e.error))};if("loading"===o||!u)return(0,r.jsx)("div",{children:(0,r.jsx)(p.Z,{className:"h-8 w-8 animate-spin"})});if("unauthenticated"===o)return null;let z=u.questions[y],C=y===u.questions.length-1;return(0,r.jsxs)("div",{className:"container mx-auto max-w-3xl p-6",children:[(0,r.jsx)(h,{timeLimit:u.timeLimit,onTimeUp:()=>{g.ZP.error("Time's up! Submitting your test."),P()}}),(0,r.jsxs)("div",{className:"px-4",children:[(0,r.jsx)("h1",{className:"text-3xl font-bold mb-4",children:u.title}),(0,r.jsx)("p",{className:"mb-4",children:u.description}),(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("strong",{children:"Difficulty:"})," ",u.difficulty]}),(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("strong",{children:"Time Limit:"})," ",u.timeLimit," minutes"]}),(0,r.jsxs)("div",{className:"mb-6",children:[(0,r.jsx)("strong",{children:"Tags:"})," ",u.tags.join(", ")]})]}),(0,r.jsx)("div",{className:"space-y-8",children:(0,r.jsx)(x,{question:z,index:y,onChange:e=>_(z._id,e),userAnswer:f[z._id]},z._id)}),(0,r.jsxs)("div",{className:"mt-8 flex justify-between",children:[y>0&&(0,r.jsx)(b.z,{onClick:()=>{y>0&&j(y-1)},className:"w-1/2 mr-2",children:"Previous Question"}),C?(0,r.jsx)(b.z,{onClick:P,disabled:w,className:"w-1/2",children:w?"Submitting...":"Submit Test"}):(0,r.jsx)(b.z,{onClick:()=>{y<u.questions.length-1&&j(y+1)},className:"w-1/2",children:"Next Question"})]}),(0,r.jsx)(k,{loading:w,loadingStates:[{text:"Preparing your test submission..."},{text:"Validating your answers..."},{text:"Submitting your test..."},{text:"Test submitted successfully!"}],duration:2e3,loop:!1})]})}},2200:function(e,t,s){"use strict";s.d(t,{z:function(){return o}});var r=s(7437),a=s(2265),n=s(1538),i=s(2218),l=s(8214);let c=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),o=a.forwardRef((e,t)=>{let{className:s,variant:a,size:i,asChild:o=!1,...d}=e,u=o?n.g7:"button";return(0,r.jsx)(u,{className:(0,l.cn)(c({variant:a,size:i,className:s})),ref:t,...d})});o.displayName="Button"},3277:function(e,t,s){"use strict";s.d(t,{_:function(){return l}});var r=s(7437),a=s(2265),n=s(8364),i=s(8214);let l=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(n.f,{ref:t,className:(0,i.cn)("text-sm font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",s),...a})});l.displayName=n.f.displayName},8214:function(e,t,s){"use strict";s.d(t,{cn:function(){return n}});var r=s(4839),a=s(6164);function n(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,a.m6)((0,r.W)(t))}}},function(e){e.O(0,[310,967,998,667,934,301,798,971,23,744],function(){return e(e.s=8045)}),_N_E=e.O()}]);
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[301],{8030:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(2265);let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),u=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>!!e&&n.indexOf(e)===t).join(" ")};var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let l=(0,r.forwardRef)((e,t)=>{let{color:n="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:c,className:a="",children:f,iconNode:s,...d}=e;return(0,r.createElement)("svg",{ref:t,...i,width:o,height:o,stroke:n,strokeWidth:c?24*Number(l)/Number(o):l,className:u("lucide",a),...d},[...s.map(e=>{let[t,n]=e;return(0,r.createElement)(t,n)}),...Array.isArray(f)?f:[f]])}),c=(e,t)=>{let n=(0,r.forwardRef)((n,i)=>{let{className:c,...a}=n;return(0,r.createElement)(l,{ref:i,iconNode:t,className:u("lucide-".concat(o(e)),c),...a})});return n.displayName="".concat(e),n}},8149:function(e,t,n){n.d(t,{M:function(){return r}});function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}},976:function(e,t,n){n.d(t,{B:function(){return c}});var r=n(2265),o=n(8324),u=n(1584),i=n(1538),l=n(7437);function c(e){let t=e+"CollectionProvider",[n,c]=(0,o.b)(t),[a,f]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=e=>{let{scope:t,children:n}=e,o=r.useRef(null),u=r.useRef(new Map).current;return(0,l.jsx)(a,{scope:t,itemMap:u,collectionRef:o,children:n})};s.displayName=t;let d=e+"CollectionSlot",m=r.forwardRef((e,t)=>{let{scope:n,children:r}=e,o=f(d,n),c=(0,u.e)(t,o.collectionRef);return(0,l.jsx)(i.g7,{ref:c,children:r})});m.displayName=d;let p=e+"CollectionItemSlot",v="data-radix-collection-item",g=r.forwardRef((e,t)=>{let{scope:n,children:o,...c}=e,a=r.useRef(null),s=(0,u.e)(t,a),d=f(p,n);return r.useEffect(()=>(d.itemMap.set(a,{ref:a,...c}),()=>void d.itemMap.delete(a))),(0,l.jsx)(i.g7,{[v]:"",ref:s,children:o})});return g.displayName=p,[{Provider:s,Slot:m,ItemSlot:g},function(t){let n=f(e+"CollectionConsumer",t);return r.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(v,"]")));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])},c]}},8324:function(e,t,n){n.d(t,{b:function(){return u}});var r=n(2265),o=n(7437);function u(e,t=[]){let n=[],u=()=>{let t=n.map(e=>r.createContext(e));return function(n){let o=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:o}}),[n,o])}};return u.scopeName=e,[function(t,u){let i=r.createContext(u),l=n.length;function c(t){let{scope:n,children:u,...c}=t,a=n?.[e][l]||i,f=r.useMemo(()=>c,Object.values(c));return(0,o.jsx)(a.Provider,{value:f,children:u})}return n=[...n,u],c.displayName=t+"Provider",[c,function(n,o){let c=o?.[e][l]||i,a=r.useContext(c);if(a)return a;if(void 0!==u)return u;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}(u,...t)]}},7513:function(e,t,n){n.d(t,{gm:function(){return u}});var r=n(2265);n(7437);var o=r.createContext(void 0);function u(e){let t=r.useContext(o);return e||t||"ltr"}},3201:function(e,t,n){n.d(t,{M:function(){return c}});var r,o=n(2265),u=n(1336),i=(r||(r=n.t(o,2)))["useId".toString()]||(()=>void 0),l=0;function c(e){let[t,n]=o.useState(i());return(0,u.b)(()=>{e||n(e=>e??String(l++))},[e]),e||(t?`radix-${t}`:"")}},1383:function(e,t,n){n.d(t,{z:function(){return l}});var r=n(2265),o=n(4887),u=n(1584),i=n(1336),l=e=>{var t,n;let l,a;let{present:f,children:s}=e,d=function(e){var t,n;let[u,l]=r.useState(),a=r.useRef({}),f=r.useRef(e),s=r.useRef("none"),[d,m]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},r.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return r.useEffect(()=>{let e=c(a.current);s.current="mounted"===d?e:"none"},[d]),(0,i.b)(()=>{let t=a.current,n=f.current;if(n!==e){let r=s.current,o=c(t);e?m("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?m("UNMOUNT"):n&&r!==o?m("ANIMATION_OUT"):m("UNMOUNT"),f.current=e}},[e,m]),(0,i.b)(()=>{if(u){let e=e=>{let t=c(a.current).includes(e.animationName);e.target===u&&t&&o.flushSync(()=>m("ANIMATION_END"))},t=e=>{e.target===u&&(s.current=c(a.current))};return u.addEventListener("animationstart",t),u.addEventListener("animationcancel",e),u.addEventListener("animationend",e),()=>{u.removeEventListener("animationstart",t),u.removeEventListener("animationcancel",e),u.removeEventListener("animationend",e)}}m("ANIMATION_END")},[u,m]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:r.useCallback(e=>{e&&(a.current=getComputedStyle(e)),l(e)},[])}}(f),m="function"==typeof s?s({present:d.isPresent}):r.Children.only(s),p=(0,u.e)(d.ref,(l=null===(t=Object.getOwnPropertyDescriptor(m.props,"ref"))||void 0===t?void 0:t.get)&&"isReactWarning"in l&&l.isReactWarning?m.ref:(l=null===(n=Object.getOwnPropertyDescriptor(m,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in l&&l.isReactWarning?m.props.ref:m.props.ref||m.ref);return"function"==typeof s||d.isPresent?r.cloneElement(m,{ref:p}):null};function c(e){return(null==e?void 0:e.animationName)||"none"}l.displayName="Presence"},5171:function(e,t,n){n.d(t,{WV:function(){return l},jH:function(){return c}});var r=n(2265),o=n(4887),u=n(1538),i=n(7437),l=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=r.forwardRef((e,n)=>{let{asChild:r,...o}=e,l=r?u.g7:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(l,{...o,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function c(e,t){e&&o.flushSync(()=>e.dispatchEvent(t))}},3398:function(e,t,n){n.d(t,{Pc:function(){return y},ck:function(){return O},fC:function(){return T}});var r=n(2265),o=n(8149),u=n(976),i=n(1584),l=n(8324),c=n(3201),a=n(5171),f=n(5137),s=n(1715),d=n(7513),m=n(7437),p="rovingFocusGroup.onEntryFocus",v={bubbles:!1,cancelable:!0},g="RovingFocusGroup",[w,b,h]=(0,u.B)(g),[N,y]=(0,l.b)(g,[h]),[R,x]=N(g),M=r.forwardRef((e,t)=>(0,m.jsx)(w.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,m.jsx)(w.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,m.jsx)(A,{...e,ref:t})})}));M.displayName=g;var A=r.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:n,orientation:u,loop:l=!1,dir:c,currentTabStopId:g,defaultCurrentTabStopId:w,onCurrentTabStopIdChange:h,onEntryFocus:N,preventScrollOnEntryFocus:y=!1,...x}=e,M=r.useRef(null),A=(0,i.e)(t,M),E=(0,d.gm)(c),[S=null,C]=(0,s.T)({prop:g,defaultProp:w,onChange:h}),[T,O]=r.useState(!1),k=(0,f.W)(N),_=b(n),j=r.useRef(!1),[P,D]=r.useState(0);return r.useEffect(()=>{let e=M.current;if(e)return e.addEventListener(p,k),()=>e.removeEventListener(p,k)},[k]),(0,m.jsx)(R,{scope:n,orientation:u,dir:E,loop:l,currentTabStopId:S,onItemFocus:r.useCallback(e=>C(e),[C]),onItemShiftTab:r.useCallback(()=>O(!0),[]),onFocusableItemAdd:r.useCallback(()=>D(e=>e+1),[]),onFocusableItemRemove:r.useCallback(()=>D(e=>e-1),[]),children:(0,m.jsx)(a.WV.div,{tabIndex:T||0===P?-1:0,"data-orientation":u,...x,ref:A,style:{outline:"none",...e.style},onMouseDown:(0,o.M)(e.onMouseDown,()=>{j.current=!0}),onFocus:(0,o.M)(e.onFocus,e=>{let t=!j.current;if(e.target===e.currentTarget&&t&&!T){let t=new CustomEvent(p,v);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=_().filter(e=>e.focusable);I([e.find(e=>e.active),e.find(e=>e.id===S),...e].filter(Boolean).map(e=>e.ref.current),y)}}j.current=!1}),onBlur:(0,o.M)(e.onBlur,()=>O(!1))})})}),E="RovingFocusGroupItem",S=r.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:n,focusable:u=!0,active:i=!1,tabStopId:l,...f}=e,s=(0,c.M)(),d=l||s,p=x(E,n),v=p.currentTabStopId===d,g=b(n),{onFocusableItemAdd:h,onFocusableItemRemove:N}=p;return r.useEffect(()=>{if(u)return h(),()=>N()},[u,h,N]),(0,m.jsx)(w.ItemSlot,{scope:n,id:d,focusable:u,active:i,children:(0,m.jsx)(a.WV.span,{tabIndex:v?0:-1,"data-orientation":p.orientation,...f,ref:t,onMouseDown:(0,o.M)(e.onMouseDown,e=>{u?p.onItemFocus(d):e.preventDefault()}),onFocus:(0,o.M)(e.onFocus,()=>p.onItemFocus(d)),onKeyDown:(0,o.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){p.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,n){var r;let o=(r=e.key,"rtl"!==n?r:"ArrowLeft"===r?"ArrowRight":"ArrowRight"===r?"ArrowLeft":r);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return C[o]}(e,p.orientation,p.dir);if(void 0!==t){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let o=g().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===t)o.reverse();else if("prev"===t||"next"===t){var n,r;"prev"===t&&o.reverse();let u=o.indexOf(e.currentTarget);o=p.loop?(n=o,r=u+1,n.map((e,t)=>n[(r+t)%n.length])):o.slice(u+1)}setTimeout(()=>I(o))}})})})});S.displayName=E;var C={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function I(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.activeElement;for(let r of e)if(r===n||(r.focus({preventScroll:t}),document.activeElement!==n))return}var T=M,O=S},5137:function(e,t,n){n.d(t,{W:function(){return o}});var r=n(2265);function o(e){let t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...e)=>t.current?.(...e),[])}},1715:function(e,t,n){n.d(t,{T:function(){return u}});var r=n(2265),o=n(5137);function u({prop:e,defaultProp:t,onChange:n=()=>{}}){let[u,i]=function({defaultProp:e,onChange:t}){let n=r.useState(e),[u]=n,i=r.useRef(u),l=(0,o.W)(t);return r.useEffect(()=>{i.current!==u&&(l(u),i.current=u)},[u,i,l]),n}({defaultProp:t,onChange:n}),l=void 0!==e,c=l?e:u,a=(0,o.W)(n);return[c,r.useCallback(t=>{if(l){let n="function"==typeof t?t(e):t;n!==e&&a(n)}else i(t)},[l,e,i,a])]}},1336:function(e,t,n){n.d(t,{b:function(){return o}});var r=n(2265),o=globalThis?.document?r.useLayoutEffect:()=>{}},5238:function(e,t,n){n.d(t,{t:function(){return u}});var r=n(2265),o=n(1336);function u(e){let[t,n]=r.useState(void 0);return(0,o.b)(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let r,o;if(!Array.isArray(t)||!t.length)return;let u=t[0];if("borderBoxSize"in u){let e=u.borderBoxSize,t=Array.isArray(e)?e[0]:e;r=t.inlineSize,o=t.blockSize}else r=e.offsetWidth,o=e.offsetHeight;n({width:r,height:o})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}n(void 0)},[e]),t}}}]);
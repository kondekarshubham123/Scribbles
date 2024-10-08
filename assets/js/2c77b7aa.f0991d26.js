"use strict";(self.webpackChunkscribbles=self.webpackChunkscribbles||[]).push([[6623],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={description:"Author: @kondekarshubham123",tags:["Fast and slow pointers"]},a="2 - Linked List Cycle",s={unversionedId:"category/grokkingcodinginterview/fast-and-slow-pointers/linked-list-cycle",id:"category/grokkingcodinginterview/fast-and-slow-pointers/linked-list-cycle",title:"2 - Linked List Cycle",description:"Author: @kondekarshubham123",source:"@site/dsa/category/grokkingcodinginterview/2-fast-and-slow-pointers/0002-linked-list-cycle.md",sourceDirName:"category/grokkingcodinginterview/2-fast-and-slow-pointers",slug:"/category/grokkingcodinginterview/fast-and-slow-pointers/linked-list-cycle",permalink:"/Scribbles/dsa/category/grokkingcodinginterview/fast-and-slow-pointers/linked-list-cycle",draft:!1,editUrl:"https://github.com/kondekarshubham123/Scribbles/tree/main/dsa/category/grokkingcodinginterview/2-fast-and-slow-pointers/0002-linked-list-cycle.md",tags:[{label:"Fast and slow pointers",permalink:"/Scribbles/dsa/tags/fast-and-slow-pointers"}],version:"current",sidebarPosition:2,frontMatter:{description:"Author: @kondekarshubham123",tags:["Fast and slow pointers"]},sidebar:"tutorialSidebar",previous:{title:"1 - Happy Number",permalink:"/Scribbles/dsa/category/grokkingcodinginterview/fast-and-slow-pointers/happy-number"},next:{title:"3 - Middle of the linked list",permalink:"/Scribbles/dsa/category/grokkingcodinginterview/fast-and-slow-pointers/middle-of-the-linked-list"}},l={},c=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approch 1: Fast and slow pointers approch",id:"approch-1-fast-and-slow-pointers-approch",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},d=p("Tabs"),u=p("TabItem"),f=p("SolutionAuthor"),m={toc:c};function y(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2---linked-list-cycle"},"2 - Linked List Cycle"),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("h2",{id:"approch-1-fast-and-slow-pointers-approch"},"Approch 1: Fast and slow pointers approch"),(0,o.kt)(d,{mdxType:"Tabs"},(0,o.kt)(u,{value:"py",label:"Python",mdxType:"TabItem"},(0,o.kt)(f,{name:"@kondekarshubham123",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from linked_list import LinkedList\n\ndef detect_cycle(head):\n   if head == None or head.next == None:\n      return False\n   \n   slow_pointer = head\n   fast_pointer = head.next\n\n   while fast_pointer.next and fast_pointer.next.next and slow_pointer != fast_pointer:\n      slow_pointer = slow_pointer.next\n      fast_pointer = fast_pointer.next.next\n\n   return slow_pointer == fast_pointer\n")))))}y.isMDXComponent=!0}}]);
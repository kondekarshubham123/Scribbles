"use strict";(self.webpackChunkscribbles=self.webpackChunkscribbles||[]).push([[3069],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(t),m=o,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2551:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=t(7462),o=(t(7294),t(3905));const a={description:"Author: @kondekarshubham123",tags:["Fast and slow pointers"]},i="6 - Palindrome linked list",s={unversionedId:"category/grokkingcodinginterview/fast-and-slow-pointers/palindrome-linked-list",id:"category/grokkingcodinginterview/fast-and-slow-pointers/palindrome-linked-list",title:"6 - Palindrome linked list",description:"Author: @kondekarshubham123",source:"@site/dsa/category/grokkingcodinginterview/2-fast-and-slow-pointers/0006-palindrome-linked-list.md",sourceDirName:"category/grokkingcodinginterview/2-fast-and-slow-pointers",slug:"/category/grokkingcodinginterview/fast-and-slow-pointers/palindrome-linked-list",permalink:"/Scribbles/dsa/category/grokkingcodinginterview/fast-and-slow-pointers/palindrome-linked-list",draft:!1,editUrl:"https://github.com/kondekarshubham123/Scribbles/tree/main/dsa/category/grokkingcodinginterview/2-fast-and-slow-pointers/0006-palindrome-linked-list.md",tags:[{label:"Fast and slow pointers",permalink:"/Scribbles/dsa/tags/fast-and-slow-pointers"}],version:"current",sidebarPosition:6,frontMatter:{description:"Author: @kondekarshubham123",tags:["Fast and slow pointers"]},sidebar:"tutorialSidebar",previous:{title:"5 - Find the duplicate number",permalink:"/Scribbles/dsa/category/grokkingcodinginterview/fast-and-slow-pointers/find-the-duplicate-number"},next:{title:"repeated-dna-sequences",permalink:"/Scribbles/dsa/category/grokkingcodinginterview/sliding-window/repeated-dna-sequences"}},l={},d=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approch 1: Fast and slow pointers approch",id:"approch-1-fast-and-slow-pointers-approch",level:2}],p=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",n)},c=p("Tabs"),u=p("TabItem"),m=p("SolutionAuthor"),f={toc:d};function g(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"6---palindrome-linked-list"},"6 - Palindrome linked list"),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("h2",{id:"approch-1-fast-and-slow-pointers-approch"},"Approch 1: Fast and slow pointers approch"),(0,o.kt)(c,{mdxType:"Tabs"},(0,o.kt)(u,{value:"py",label:"Python",mdxType:"TabItem"},(0,o.kt)(m,{name:"@kondekarshubham123",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from linked_list import LinkedList\nfrom linked_list_reverse import reverse_linked_list\n\n\ndef get_middle_node(head):\n    slow = fast = head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n    return slow\n\ndef palindrome(head):\n\n    if head == None:\n        return True\n\n    middle = get_middle_node(head)\n    last = reverse_linked_list(middle)\n    curr = head\n\n    while last != None:\n\n        if(last.data != curr.data):\n            return False\n        \n        last = last.next\n        curr = curr.next\n\n    return True\n   \n")))))}g.isMDXComponent=!0}}]);
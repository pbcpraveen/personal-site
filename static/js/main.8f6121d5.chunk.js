(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{20:function(e,n,t){"use strict";var c=t(0),a=t(1),i=t(16),l=t(3),r=t(12),s=Object({NODE_ENV:"production",PUBLIC_URL:"/pbcpraveen.github.io",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),j=s.NODE_ENV,b=s.REACT_APP_GA_TRACKING_ID;"production"===j&&r.a.initialize(b);var o=function(){var e=Object(l.f)().pathname;return Object(a.useEffect)((function(){"production"===j&&(r.a.set({page:e}),r.a.pageview(e))}),[e]),null},u=t(5),h=t(32),d=[{index:!0,label:"Praveen Kumar Ramesh",path:"/"},{label:"Resume",path:"/resume"},{label:"Talks ans Teaching",path:"/talks"},{label:"Poems",path:"/poems"},{label:"Contact",path:"/contact"}],m=Object(a.lazy)((function(){return t.e(3).then(t.t.bind(null,57,7))})),O=function(){var e=Object(a.useState)(!1),n=Object(h.a)(e,2),t=n[0],i=n[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:t?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return i(!t)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return i(!t)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(a.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(m,{right:!0,isOpen:t,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:d.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,onClick:function(){return i(!t)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},p=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:d.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(u.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:d.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(O,{})]})},x=t(22),f=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",style:{align:"center"},children:[Object(c.jsx)(u.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat("/pbcpraveen.github.io","/images/me.jpg"),alt:"",style:{align:"center"}})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h3",{children:"Praveen Kumar Ramesh"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"mailto:pbcpraveen@gmail.com",children:"pbcpraveen@gmail.com"})})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsx)("p",{children:"Hi, I'm Praveen. I'm an aspiring researcher in the field of AI. I did my undergraduate majoring in Computer Science. Currenlty, I'm an Analyst at Goldman Sachs."}),Object(c.jsx)("ul",{className:"actions",children:Object(c.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(c.jsx)(u.b,{to:"/about",className:"button",children:"About Me"}):Object(c.jsx)(u.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(c.jsxs)("section",{id:"footer",children:[Object(c.jsx)(x.a,{}),Object(c.jsxs)("p",{className:"copyright",children:["\xa9 Praveen Kumar Ramesh ",Object(c.jsx)(u.b,{to:"/",children:"pbcpraveen.github.io"}),"."]})]})]})},v=function(){var e=Object(l.f)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},g=function(e){return Object(c.jsxs)(i.b,{children:[Object(c.jsx)(o,{}),Object(c.jsx)(v,{}),Object(c.jsxs)(i.a,{titleTemplate:"%s | Praveen Kumar R",defaultTitle:"Praveen Kumar R",defer:!1,children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(p,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(f,{})]})]})};g.defaultProps={children:null,fullPage:!1,title:null,description:"Praveen Kumar's personal website."};n.a=g},22:function(e,n,t){"use strict";var c=t(0),a=(t(1),t(26)),i=t(27),l=t(28),r=t(29),s=t(30),j=t(31),b=[{link:"https://github.com/pbcpraveen",label:"Github",icon:i.faGithub},{link:"https://www.facebook.com/pbcpraveen/",label:"Facebook",icon:l.faFacebookF},{link:"https://instagram.com/praveen_kumar28/",label:"Instagram",icon:r.faInstagram},{link:"https://www.linkedin.com/in/praveenkumar-99",label:"LinkedIn",icon:s.faLinkedinIn},{link:"mailto:pbcpraveen@gmail.com",label:"Email",icon:j.faEnvelope}];n.a=function(){return Object(c.jsx)("ul",{className:"icons",children:b.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(a.a,{icon:e.icon})})},e.label)}))})}},45:function(e,n,t){},46:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t(1),i=t.n(a),l=t(15),r=t(5),s=t(3),j=t(20),b=(t(45),Object(a.lazy)((function(){return t.e(4).then(t.bind(null,52))}))),o=Object(a.lazy)((function(){return t.e(5).then(t.bind(null,53))})),u=Object(a.lazy)((function(){return t.e(6).then(t.bind(null,54))})),h=Object(a.lazy)((function(){return t.e(9).then(t.bind(null,55))})),d=Object(a.lazy)((function(){return t.e(8).then(t.bind(null,56))})),m=Object(a.lazy)((function(){return t.e(7).then(t.bind(null,58))})),O=function(){return Object(c.jsx)(r.a,{basename:"/pbcpraveen.github.io",children:Object(c.jsx)(a.Suspense,{fallback:Object(c.jsx)(j.a,{}),children:Object(c.jsxs)(s.c,{children:[Object(c.jsx)(s.a,{exact:!0,path:"/",component:o}),Object(c.jsx)(s.a,{path:"/talks",component:h}),Object(c.jsx)(s.a,{path:"/poems",component:m}),Object(c.jsx)(s.a,{path:"/contact",component:b}),Object(c.jsx)(s.a,{path:"/resume",component:d}),Object(c.jsx)(s.a,{component:u,status:404})]})})})},p=function(){return Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(O,{})})},x=document.getElementById("root");x.hasChildNodes()?Object(l.hydrate)(Object(c.jsx)(p,{}),x):Object(l.render)(Object(c.jsx)(p,{}),x)}},[[46,1,2]]]);
//# sourceMappingURL=main.8f6121d5.chunk.js.map
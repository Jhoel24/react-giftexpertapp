(this["webpackJsonpgift-expert-app"]=this["webpackJsonpgift-expert-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(5),r=n.n(i),s=n(2),u=n(7),j=n(4),d=n.n(j),o=n(6),l=function(){var e=Object(o.a)(d.a.mark((function e(t){var n,a,c,i,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=Bih5jyNwK2J8Tm4NWnwjMAWC4uIEi5DR"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,i=c.data,r=i.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=n(0),b=function(e){e.id;var t=e.title,n=e.url;return Object(m.jsx)("div",{className:"col-md-4 mb-3",children:Object(m.jsxs)("div",{className:"card animate__animated animate__fadeInDownBig",children:[Object(m.jsx)("img",{src:n,alt:"{title}",className:"card-img-top img-thumbnail"}),Object(m.jsx)("div",{className:"card-text",children:Object(m.jsx)("p",{children:t})})]})})},p=function(e){var t=e.categoria,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),c=n[0],i=n[1];return Object(a.useEffect)((function(){l(e).then((function(e){i({data:e,loading:!1})}))}),[e]),c}(t),c=n.data,i=n.loading;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h3",{className:"animate__animated animate__fadeInDownBig",children:t}),i&&Object(m.jsx)("p",{className:"animate__animated animate__flash",children:"Loading"}),Object(m.jsx)("div",{className:"row",children:c.map((function(e){return Object(m.jsx)(b,Object(u.a)({},e),e.id)}))})]})},O=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(s.a)(n,2),i=c[0],r=c[1],u=Object(a.useState)(!1),j=Object(s.a)(u,2),d=j[0],o=j[1];return Object(m.jsxs)(m.Fragment,{children:[d?Object(m.jsx)("div",{className:"alert alert-danger",children:Object(m.jsx)("p",{className:"text-center text-uppercase fw-bold",children:"No puedes mandar un campo vac\xedo"})}):null,Object(m.jsx)("form",{onSubmit:function(e){if(e.preventDefault(),""===i)return o(!0),void setTimeout((function(){o(!1)}),1e3);t((function(e){return[i]})),r("")},children:Object(m.jsx)("div",{className:"input",children:Object(m.jsx)("input",{type:"text",value:i,onChange:function(e){r(e.target.value)}})})})]})},f=function(){var e=Object(a.useState)(["One Punch"]),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h2",{children:"GifExpertApp"}),Object(m.jsx)(O,{setCategories:c}),Object(m.jsx)("hr",{}),Object(m.jsx)("ol",{children:n.map((function(e){return Object(m.jsx)(p,{categoria:e},e)}))})]})};n(14);r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(f,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.de5c146b.chunk.js.map
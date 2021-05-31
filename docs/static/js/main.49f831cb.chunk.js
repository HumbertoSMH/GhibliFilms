(this["webpackJsonpghibli-films"]=this["webpackJsonpghibli-films"]||[]).push([[0],{32:function(e,c,t){},33:function(e,c,t){"use strict";t.r(c);var i=t(1),s=t(19),a=t.n(s),n=Object(i.createContext)(null),l=t(21),r=t(12),d=t(7),o="https://ghibliapi.herokuapp.com/films",j={method:"GET"},b=t(8),m=t(2),u=function(e,c){return""===(e=e.toLowerCase())?c:c.filter((function(c){return c.title.toLowerCase().includes(e)||c.description.toLowerCase().includes(e)}))},O=t(0),h=function(){var e=Object(m.h)().filmId,c=Object(i.useContext)(n),t=c.films,s=c.loading,a=function(e,c){return c.find((function(c){return c.id===e}))}(e,t);return Object(O.jsxs)(O.Fragment,{children:[s&&Object(O.jsx)("div",{className:"loading",children:Object(O.jsx)("img",{src:"https://i.gifer.com/origin/62/6207a5ce52cc8164c1b10a4e460d6df3_w200.gif",title:"loading gif"})}),a?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"col-sm-12 col-push-1 col-4 mt-25",children:Object(O.jsx)("img",{src:null===a||void 0===a?void 0:a.poster,title:"img",className:"film_picture"})}),Object(O.jsx)("div",{className:"col-sm-12 col-6 mt-25",children:Object(O.jsxs)("div",{className:"card",children:[Object(O.jsxs)("div",{className:"card_info",children:[Object(O.jsxs)("div",{className:"card_time",children:[Object(O.jsx)("i",{className:"far fa-clock"}),Object(O.jsx)("span",{children:null===a||void 0===a?void 0:a.running_time})]}),Object(O.jsxs)("div",{className:"card_rate",children:[Object(O.jsx)("i",{className:"far fa-star"}),Object(O.jsx)("span",{children:null===a||void 0===a?void 0:a.rt_score})]}),Object(O.jsxs)("div",{className:"card_date",children:[Object(O.jsx)("i",{className:"fas fa-calendar-alt"}),Object(O.jsx)("span",{children:null===a||void 0===a?void 0:a.release_date})]})]}),Object(O.jsx)("h3",{className:"card_title",children:null===a||void 0===a?void 0:a.title}),Object(O.jsxs)("h4",{className:"card_title_original_full",children:[null===a||void 0===a?void 0:a.original_title_romanised,Object(O.jsxs)("small",{children:["(",null===a||void 0===a?void 0:a.original_title,")"]})]}),Object(O.jsx)("p",{className:"card_text_full",children:null===a||void 0===a?void 0:a.description}),Object(O.jsxs)("p",{className:"card_director",children:[Object(O.jsx)("strong",{children:"Director:"})," ",null===a||void 0===a?void 0:a.director]}),Object(O.jsxs)("p",{className:"card_producer",children:[Object(O.jsx)("strong",{children:"Producer:"})," ",null===a||void 0===a?void 0:a.producer]}),Object(O.jsx)("div",{className:"card_link_container",children:Object(O.jsx)(b.b,{to:"/",className:"card_link",children:"Back"})})]})})]}):Object(O.jsxs)("div",{className:"film_not_found",children:[Object(O.jsx)("img",{src:"https://i.pinimg.com/564x/10/ce/21/10ce2159687d0e034a3e8f5a7db7f07c.jpg",title:"not-found"}),Object(O.jsx)("p",{children:"Ops! nothing to see here"}),Object(O.jsx)("div",{className:"card_link_container",children:Object(O.jsx)(b.b,{to:"/",className:"card_link",children:"Back"})})]})]})},f=function(e){var c=e.data,t=Object(m.g)(),s=Object(i.useState)([]),a=Object(d.a)(s,2),n=a[0],l=a[1],r=Object(i.useState)(!0),o=Object(d.a)(r,2),j=o[0],b=o[1],h=Object(i.useState)(0),f=Object(d.a)(h,2),x=f[0],g=f[1],v=[],p=13,_=38,N=40;Object(i.useEffect)((function(){l(u("",c))}),[c]);var k=function(){return Object(O.jsx)(O.Fragment,{})};return Object(O.jsxs)("section",{className:"autocomplete",children:[Object(O.jsx)("input",{type:"text",placeholder:"Search your film...",className:"autocomplete_input",onChange:function(e){var t=e.target.value;b(""===t),l(u(t,c))},onKeyDown:function(e){switch(e.keyCode){case p:-1!==x&&t.push("./film/".concat(v[x])),function(e){e.persist(),e.relatedTarget&&"autocomplete_link"===e.relatedTarget.className||(b(!0),g(-1))}(e);break;case _:x>-1&&g(x-1);break;case N:x<n.length-1&&g(x+1)}}}),Object(O.jsx)("ul",{className:"autocomplete_suggestions",children:!j&&n.map((function(e,c){return Object(O.jsx)("li",{className:x===c?"autocomplete_suggestion_active":null,children:Object(O.jsx)("a",{href:"./film/".concat(e.id),className:"autocomplete_link",ref:function(){v[c]=e.id},children:e.title})},c)}))}),Object(O.jsx)(k,{})]})},x=function(e){var c=e.id,t=e.rt_score,i=e.original_title_romanised,s=e.original_title,a=e.title,n=e.description,l=e.poster;return Object(O.jsx)("div",{className:"col-sm-12 col-md-6 col-4",children:Object(O.jsxs)("div",{className:"card",children:[Object(O.jsx)("div",{className:"card_picture",style:{backgroundImage:"url(".concat(l,")")}}),Object(O.jsx)("div",{className:"card_info",children:Object(O.jsxs)("div",{className:"card_rate",children:[Object(O.jsx)("i",{className:"far fa-star"}),Object(O.jsx)("span",{children:t})]})}),Object(O.jsx)("h3",{className:"card_title",children:a}),Object(O.jsxs)("h4",{className:"card_title_original",children:[i,Object(O.jsxs)("small",{children:["(",s,")"]})]}),Object(O.jsx)("p",{className:"card_text",children:n}),Object(O.jsx)("div",{className:"card_link_container",children:Object(O.jsx)(b.b,{to:"film/".concat(c),className:"card_link",children:"More info..."})})]})})},g=function(){var e=Object(i.useContext)(n),c=e.films,t=e.loading,s=Object(i.useState)([]),a=Object(d.a)(s,2),l=a[0],o=a[1];return Object(i.useEffect)((function(){o(u("",c))}),[c]),Object(O.jsxs)(O.Fragment,{children:[t&&Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"loading",children:Object(O.jsx)("img",{src:"https://i.gifer.com/origin/62/6207a5ce52cc8164c1b10a4e460d6df3_w200.gif",title:"loading gif"})})}),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(f,{data:c}),null===l||void 0===l?void 0:l.map((function(e){return Object(O.jsx)(x,Object(r.a)({},e),null===e||void 0===e?void 0:e.id)}))]})]})},v=function(){return Object(O.jsx)(b.a,{children:Object(O.jsx)("div",{className:"main__container",children:Object(O.jsxs)(m.d,{children:[Object(O.jsx)(m.b,{exact:!0,path:"/",component:g}),Object(O.jsx)(m.b,{exact:!0,path:"/film/:filmId",component:h}),Object(O.jsx)(m.a,{to:"/"})]})})})},p=t.p+"../static/media/studio-ghibli-logo.35cf807f.svg",_=function(){var e=function(){var e=Object(i.useState)(!0),c=Object(d.a)(e,2),t=c[0],s=c[1],a=Object(i.useState)([]),n=Object(d.a)(a,2),b=n[0],m=n[1],u=Object(i.useState)(null),O=Object(d.a)(u,2),h=O[0],f=O[1];return Object(i.useEffect)((function(){fetch(o,j).then((function(e){return e.json()})).then((function(e){e.forEach((function(e){var c;fetch((c=e.title,"".concat("https://www.omdbapi.com/?t=").concat(c,"&apikey=").concat("43172ad"))).then((function(e){return e.json()})).then((function(c){e=Object(r.a)(Object(r.a)({},e),{},{poster:c.Poster}),m((function(c){return[].concat(Object(l.a)(c),[e])}))}))}))})),s(!1),f(null)}),[o]),{loading:t,films:b,error:h}}(),c=e.films,t=e.loading;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"header",children:Object(O.jsx)("img",{src:p,className:"header__img"})}),Object(O.jsx)("div",{className:"main",children:Object(O.jsx)(n.Provider,{value:{films:c,loading:t},children:Object(O.jsx)(v,{})})})]})};t(32);a.a.render(Object(O.jsx)(_,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.49f831cb.chunk.js.map
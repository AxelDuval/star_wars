(this.webpackJsonpstar_wars=this.webpackJsonpstar_wars||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(8),s=c.n(n),r=c(5),l=(c(13),c(14),c(2)),i=(c(15),c(1));var j=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("header",{className:"bg-dark py-5",children:Object(i.jsxs)("section",{className:"container text-center text-white",children:[Object(i.jsx)("h1",{className:"text-warning",children:"Star wars"}),Object(i.jsx)("p",{className:"lead",children:"API Swapi"})]})}),Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(i.jsxs)("ul",{className:"navbar-nav",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{to:"star_wars/",className:"nav-link",children:"Accueil"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{to:"star_wars/recherche",className:"nav-link",children:"Recherche"})})]})})]})})]})};var b=function(){return Object(i.jsx)("footer",{className:"py-5 text-center bg-dark",children:Object(i.jsx)("section",{children:Object(i.jsx)("p",{className:"text-white",children:"Texte du footer"})})})},o=c(3);c(17);var u=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!1),r=Object(o.a)(s,2),l=r[0],j=r[1],b=Object(a.useState)([]),u=Object(o.a)(b,2),h=u[0],d=u[1];return Object(a.useEffect)((function(){fetch("https://swapi.dev/api/").then((function(e){return e.json()})).then((function(e){j(!0),d(e)}),(function(e){j(!0),n(e)}))}),[]),c?Object(i.jsxs)("div",{children:["Erreur : ",c.message]}):l?Object(i.jsx)("div",{className:"row justify-content-center mt-3",children:Object.keys(h).map((function(e,t){return Object(i.jsxs)("div",{className:"card col-3 m-2 p-0",children:[Object(i.jsx)("img",{className:"card-img-top",src:"https://c2.lestechnophiles.com/www.numerama.com/wp-content/uploads/2018/02/star-wars.jpg?resize=600,300",alt:"images"}),Object(i.jsx)("h5",{className:"card-title text-center p-5",children:e}),Object(i.jsx)("button",{className:"btn btn-warning",children:"Voir"})]},t)}))}):Object(i.jsx)("div",{children:"Chargement..."})};c(18);var h=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!1),r=Object(o.a)(s,2),l=r[0],j=r[1],b=Object(a.useState)([]),u=Object(o.a)(b,2),h=u[0],d=u[1],O=Object(a.useState)("1"),m=Object(o.a)(O,2),x=m[0],p=m[1];return Object(a.useEffect)((function(){fetch("https://swapi.dev/api/people/".concat(x,"/")).then((function(e){return e.json()})).then((function(e){j(!0),d(e)}),(function(e){j(!0),n(e)}))}),[x]),c?Object(i.jsxs)("div",{children:["Erreur : ",c.message]}):l?(console.log(h),console.log(x),0!==x.length?Object(i.jsxs)("div",{className:"row justify-content-center m-3 p-2",children:[Object(i.jsx)("form",{className:"mb-3",children:Object(i.jsx)("input",{className:"form-control",type:"number",placeholder:"Rechercher un personnage","aria-label":"Search",onInput:function(e){return p(e.target.value)}})}),Object.keys(h).map((function(e,t){return Object(i.jsx)("ul",{className:"m-2",children:Object(i.jsxs)("li",{children:[Object(i.jsx)("b",{children:e})," : ",h[e]]})},t)}))]}):Object(i.jsxs)("div",{className:"row justify-content-center m-3 p-2",children:[Object(i.jsx)("form",{className:"mb-3",children:Object(i.jsx)("input",{className:"form-control",type:"number",placeholder:"Rechercher un personnage","aria-label":"Search",onInput:function(e){return p(e.target.value)}})}),p("1")]})):Object(i.jsx)("div",{children:"Chargement..."})};var d=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(j,{}),Object(i.jsxs)(l.c,{children:[Object(i.jsx)(l.a,{path:"star_wars/",element:Object(i.jsx)(u,{})}),Object(i.jsx)(l.a,{path:"star_wars/recherche",element:Object(i.jsx)(h,{})})]}),Object(i.jsx)(b,{})]})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};s.a.render(Object(i.jsx)(r.a,{children:Object(i.jsx)(d,{})}),document.getElementById("root")),O()}},[[19,1,2]]]);
//# sourceMappingURL=main.7f9774f9.chunk.js.map
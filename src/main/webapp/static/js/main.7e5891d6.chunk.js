(this.webpackJsonpca3_frontend=this.webpackJsonpca3_frontend||[]).push([[0],{21:function(e,t,a){e.exports=a(34)},27:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);a(22);var n=a(0),r=a.n(n),o=a(15),c=a.n(o),l=(a(27),a(16)),s=a(4),u=a(17),i=a(18),m="https://martindoi.dk/examtest1";function f(e){return e.ok?e.json():Promise.reject({status:e.status,fullError:e.json()})}var E=new(function(){function e(){var t=this;Object(u.a)(this,e),this.setToken=function(e){localStorage.setItem("jwtToken",e)},this.getToken=function(){return localStorage.getItem("jwtToken")},this.loggedIn=function(){return null!=t.getToken()},this.logout=function(){localStorage.removeItem("jwtToken")},this.login=function(e,a){var n=t.makeOptions("POST",!0,{username:e,password:a}),r=fetch(m+"/api/login",n).then(f);return r.then((function(e){return t.setToken(e.token)})),r}}return Object(i.a)(e,[{key:"makeOptions",value:function(e,t,a){var n={method:e,headers:{"Content-type":"application/json",Accept:"application/json"}};return t&&this.loggedIn()&&(n.headers["x-access-token"]=this.getToken()),a&&(n.body=JSON.stringify(a)),n}}]),e}()),g=a(7);var p=function(e){var t=Object(n.useState)(!0),a=Object(s.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(!1),u=Object(s.a)(l,2),i=(u[0],u[1]);return Object(n.useEffect)((function(){i(!0),c(!1)}),[]),!o&&r.a.createElement("nav",{className:"header"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(g.c,{exact:!0,to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(g.c,{to:"/user"},"Test")),null==E.getToken()?r.a.createElement("li",{style:{float:"right"}},r.a.createElement(g.b,{to:"/login"},"Log in")):r.a.createElement("li",{style:{float:"right"}},r.a.createElement(g.b,{to:"/",onClick:function(){E.logout(),i(!1)}},"Log out"))))},d=a(8);var h=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),o=(a[0],a[1]),c=Object(n.useState)(""),l=Object(s.a)(c,2),u=l[0],i=l[1],m=Object(n.useState)(""),f=Object(s.a)(m,2),g=f[0],p=f[1],h=Object(n.useState)(!1),b=Object(s.a)(h,2),j=b[0],v=b[1];return j?r.a.createElement(d.a,{to:"/user"}):r.a.createElement("div",{className:"container container-small"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("h2",null,"Login"),r.a.createElement("br",null),r.a.createElement("form",{className:"form-signin",onSubmit:function(t){t.preventDefault(),E.login(u,g).then((function(t){e.logInState(t.roles),v(!0)})).catch((function(e){o("Wrong username or password")}))},onChange:function(e){o(""),"username"===e.target.id?i(e.target.value):p(e.target.value)}},r.a.createElement("div",{className:"form form-group"},r.a.createElement("input",{className:"form-control",placeholder:"User Name",id:"username"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",placeholder:"Password",id:"password"})," ",r.a.createElement("br",null),r.a.createElement("button",{className:"btn btn-primary"},"Login")))))};a(33);var b=function(e){var t=e.component,a=e.roles,n=Object(l.a)(e,["component","roles"]);return r.a.createElement(d.b,Object.assign({},n,{render:function(e){return null!=E.getToken()?r.a.createElement(t,Object.assign({},e,{roles:a})):r.a.createElement(d.a,{to:{pathname:"/login",state:{from:e.location}}})}}))};function j(){return r.a.createElement("div",{className:"data-wrapper centered-text"},r.a.createElement("h1",null,"Homepage"))}function v(e){var t=e.roles;return r.a.createElement("div",{className:"data-wrapper"},r.a.createElement("div",{className:"info-box"},r.a.createElement("h2",{className:"headline"},"Data recieved"),r.a.createElement("h4",null,"Roles:"),t.map((function(e,t){return r.a.createElement("h5",{key:t},e)}))))}var O=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],o=t[1];return r.a.createElement(g.a,null,r.a.createElement(p,null),r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/"},r.a.createElement(j,null)),r.a.createElement(d.b,{path:"/login"},r.a.createElement(h,{logInState:function(e){o(e)}})),r.a.createElement(b,{path:"/user",component:v,roles:a})))};c.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.7e5891d6.chunk.js.map
(this.webpackJsonpgifer=this.webpackJsonpgifer||[]).push([[0],{17:function(n,e,t){},21:function(n,e,t){"use strict";t.r(e);var a,i,r,c,o,s,u,l,p,b,d,h,j,g,x=t(0),f=t.n(x),m=t(9),O=t.n(m),v=(t(17),t(4)),w=t(2),k=t(3),y=k.a.div(a||(a=Object(w.a)(["\nposition: relative;\ndisplay: grid;\ngrid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));\ngrid-template-rows: repeat(auto-fill, minmax(15rem, 1fr));\nalign-items: center;\ngap: 10px;\nmargin: 0 1vw 20vh;\n"]))),C=k.a.div(i||(i=Object(w.a)(["\ndisplay: flex;\nflex-direction: column;\nflex-basis: 30vw;\nmargin: 1vh 0;\n"]))),I=k.a.img(r||(r=Object(w.a)(["\nposition: relative;\nwidth: 100%;\nheight: auto;\nborder-radius: 3%;\nbox-shadow: 0px 0px 7px 0px rgb(82, 82, 82);\ntransition: 0.4s ease-out;\nuser-select: none;\ncursor: pointer;\n\n&:hover {\n  transform: scale(1.02);\n  box-shadow: 0px 0px 13px 0px rgb(95, 95, 95);\n}\n"]))),F=t(1),R=function(n){return Object(F.jsx)(y,{children:n.gifsData.map((function(n){return Object(F.jsx)(C,{children:Object(F.jsx)(I,{src:n.images.original.url,alt:"some gif"})},n.id)}))})},S=k.a.footer(c||(c=Object(w.a)(["\nposition: fixed;\nbottom: 0;\nwidth: 100%;\ntext-align: center;\n"]))),T=k.a.h6(o||(o=Object(w.a)(["\nmargin: 1px;\n"]))),D=function(){var n=(new Date).getFullYear();return Object(F.jsxs)(S,{children:[Object(F.jsxs)(T,{children:["\xa9",n]}),Object(F.jsx)(T,{children:"Powered By GIPHY\u2122"}),Object(F.jsx)(T,{children:"All Rights Reserved"})]})},E=k.a.div(s||(s=Object(w.a)(["\n  position: fixed;\n  text-align: center;\n  right: 8vw;\n  bottom: 8vw;\n  background: transparent;\n"]))),L=k.a.a(u||(u=Object(w.a)(["\n  display: inline-block;\n  width: 4rem;\n  height: 4rem;\n  background: #e6fa8072;\n  border-radius: 50%;\n  line-height: 4rem;\n  text-align: center;\n  box-shadow: 0px 0px 7px 0px rgb(82, 82, 82);\n  cursor: pointer;\n  user-select: none;\n  transition: 0.4s;\n\n  &:hover {\n    background: #fa8072;\n    transform: scale(1.02);\n    box-shadow: 0px 0px 13px 0px rgb(95, 95, 95);\n  }\n"]))),P=function(n){return Object(F.jsx)(E,{children:Object(F.jsxs)(L,{onClick:n.handleChangeGifsLimit,children:["\u2716",n.limit]})})},V=Object(k.b)(l||(l=Object(w.a)(["\n  0% { background: papayawhip; transform: translateY(-100%); }\n  60% { background: papayawhip; transform: translateY(0); }\n  100% { background: salmon;  }\n"]))),G=k.a.h1(p||(p=Object(w.a)(["\nposition: relative;\npadding: 5px 0;\ntext-align: center;\nbackground: salmon;\nanimation: "," ease-out 1.5s;\n"])),V),Y=function(){return Object(F.jsx)(G,{children:"GIFs that keep on givin'"})},q=k.a.div(b||(b=Object(w.a)(["\nposition: relative;\nmargin: 0 1vw 0;\n"]))),B=k.a.form(d||(d=Object(w.a)(["\ntext-align: center;\nmargin: 10px;\n"]))),_=k.a.input(h||(h=Object(w.a)(["\noutline: 0;\n  border-width: 0 0 3px;\n  border-color: red;\n\n  ::placeholder {\n    text-align: center;\n  }\n\n  &:focus {\n    border-width: 0 0 3px;\n  border-color: salmon;\n}\n"]))),H=k.a.button(j||(j=Object(w.a)(["\nmargin: 0 10px;\npadding: 0 5px;\nborder: none;\ncursor: pointer;\n"]))),J=function(n){return Object(F.jsx)(q,{children:Object(F.jsxs)(B,{children:[Object(F.jsx)(_,{type:"text",placeholder:"what are you looking for?",value:n.inputText,autoFocus:!0,onChange:n.changeInputValue,ref:n.searchInput,onKeyPress:function(n){"Enter"===n.key&&n.preventDefault()}}),Object(F.jsx)(H,{onClick:n.clearInputValue,children:"\u2716"})]})})},K=k.a.div(g||(g=Object(w.a)(["\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: auto;\n  background: papayawhip;\n"])));var A=function(){var n="CCVpu71TxLgR0gsdR8aSRHoKyEWXjRNs",e=Object(x.useState)(10),t=Object(v.a)(e,2),a=t[0],i=t[1],r=Object(x.useState)("https://api.giphy.com/v1/gifs/search?q=&api_key=".concat(n,"&limit=").concat(a)),c=Object(v.a)(r,2),o=c[0],s=c[1],u=Object(x.useState)([]),l=Object(v.a)(u,2),p=l[0],b=l[1],d=Object(x.useState)(""),h=Object(v.a)(d,2),j=h[0],g=h[1],f=Object(x.useRef)(null);return Object(x.useEffect)((function(){var n=setTimeout((function(){fetch(o).then((function(n){if(n.ok)return n;throw Error("error")})).then((function(n){return n.json()})).then((function(n){b(n.data)})).catch((function(n){console.log(n)}))}),500);return function(){return clearTimeout(n)}}),[o]),Object(F.jsxs)(K,{children:[Object(F.jsx)(Y,{}),Object(F.jsx)(J,{changeInputValue:function(e){s("https://api.giphy.com/v1/gifs/search?q=".concat(e.target.value,"&api_key=").concat(n,"&limit=").concat(a)),g(e.target.value)},clearInputValue:function(e){e.preventDefault(),s("https://api.giphy.com/v1/gifs/search?q=&api_key=".concat(n,"&limit=").concat(a)),g(""),f.current.focus()},inputText:j,searchInput:f}),Object(F.jsx)(R,{gifsData:p}),Object(F.jsx)(D,{}),Object(F.jsx)(P,{limit:a,handleChangeGifsLimit:function(){i(a<15?a+5:5)}})]})},M=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,22)).then((function(e){var t=e.getCLS,a=e.getFID,i=e.getFCP,r=e.getLCP,c=e.getTTFB;t(n),a(n),i(n),r(n),c(n)}))};O.a.render(Object(F.jsx)(f.a.StrictMode,{children:Object(F.jsx)(A,{})}),document.getElementById("root")),M()}},[[21,1,2]]]);
//# sourceMappingURL=main.8ca56f49.chunk.js.map
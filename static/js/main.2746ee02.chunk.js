(this["webpackJsonpbingo-react"]=this["webpackJsonpbingo-react"]||[]).push([[0],{23:function(n,e,t){},24:function(n,e,t){"use strict";t.r(e);var r=t(1),c=t(0),a=t.n(c),o=t(12),i=t.n(o),u=t(8),l=function(){for(var n=new Array(25),e=0;e<25;e++)n[e]=12===e?1:0;return n},d=t(4),f=a.a.createContext(),s=function(n){var e=n.children,t=Object(c.useState)([]),a=Object(d.a)(t,2),o=a[0],i=a[1],u=Object(c.useState)(l),s=Object(d.a)(u,2),j=s[0],b=s[1],h=Object(c.useState)([]),x=Object(d.a)(h,2),O=x[0],v=x[1],g=Object(c.useState)(0),p=Object(d.a)(g,2),m=p[0],w=p[1],k=Object(c.useState)(40),M=Object(d.a)(k,2),C=M[0],E=M[1];return Object(c.useEffect)((function(){return i(function(){var n=new Array(25);n[12]="FREE";for(var e=0;e<5;){var t=Math.floor(15*Math.random())+1;-1===n.indexOf(t)&&(n[5*e]=t,e++)}for(e=0;e<5;){var r=Math.floor(15*Math.random())+16;-1===n.indexOf(r)&&(n[5*e+1]=r,e++)}for(e=0;e<4;){var c=Math.floor(15*Math.random())+31;-1===n.indexOf(c)&&(e<2?n[5*e+2]=c:n[5*e+7]=c,e++)}for(e=0;e<5;){var a=Math.floor(15*Math.random())+46;-1===n.indexOf(a)&&(n[5*e+3]=a,e++)}for(e=0;e<5;){var o=Math.floor(15*Math.random())+61;-1===n.indexOf(o)&&(n[5*e+4]=o,e++)}return n}())}),[]),Object(r.jsx)(f.Provider,{value:{board:o,marked:j,setMarked:b,called:O,setCalled:v,current:m,setCurrent:w,turns:C,setTurns:E},children:e})},j=t(2),b=t(3);function h(){var n=Object(j.a)(["\n  font-size: 2.5em;\n  text-align: center;\n"]);return h=function(){return n},n}function x(){var n=Object(j.a)(["\n  margin-top: 5vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-bottom: 5vh;\n"]);return x=function(){return n},n}function O(){var n=Object(j.a)(["\n  padding: 15px;\n  font-size: 1.5em;\n  background: black;\n  color: white;\n  font-weight: 700;\n  text-transform: uppercase;\n  margin: 0 auto;\n"]);return O=function(){return n},n}function v(){var n=Object(j.a)(["\n  width: 80px;\n  height: 80px;\n  color: white;\n  background-color: green;\n  border: 1px solid black;\n  font-weight: 700;\n  font-size: 1em;\n  line-height: 80px;\n  text-align: center;\n"]);return v=function(){return n},n}function g(){var n=Object(j.a)(["\n  width: 80px;\n  height: 80px;\n  color: ",";\n  background-color: ",";\n  border: 1px solid black;\n  font-weight: 700;\n  font-size: 2.5em;\n  line-height: 80px;\n  text-align: center;\n  cursor: pointer;\n"]);return g=function(){return n},n}function p(){var n=Object(j.a)(["\n  width: 410px;\n  margin: 50px auto;\n"]);return p=function(){return n},n}function m(){var n=Object(j.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]);return m=function(){return n},n}function w(){var n=Object(j.a)(["\n  display: flex;\n"]);return w=function(){return n},n}function k(){var n=Object(j.a)(["\n  width: 80px;\n  height: 80px;\n  color: black;\n  background-color: grey;\n  border: 1px solid black;\n  font-weight: 700;\n  font-size: 2.5em;\n  line-height: 80px;\n  text-align: center;\n"]);return k=function(){return n},n}var M=b.a.div(k()),C=b.a.div(w()),E=b.a.div(m()),y=b.a.div(p()),S=b.a.div(g(),(function(n){return n.selected?"white":"black"}),(function(n){return n.selected?"red":"white"})),z=b.a.div(v()),B=b.a.button(O()),G=b.a.div(x()),I=b.a.h1(h()),N=function(){var n,e=Object(c.useContext)(f),t=e.current,a=e.setCurrent,o=e.called,i=e.setCalled,l=e.turns,d=e.setTurns,s=function(){if(l>=0){for(var n=Math.floor(75*Math.random())+1;-1!==o.indexOf(n)&&o.length<75;)n=Math.floor(75*Math.random())+1;a(n),i((function(e){return[].concat(Object(u.a)(e),[n])})),d((function(n){return n-1}))}else window.location.reload()};return Object(c.useEffect)(s,[]),Object(r.jsxs)("div",{style:{textAlign:"center"},children:[Object(r.jsxs)("h3",{children:["Turns left: ",l>=0?l:0]}),Object(r.jsx)(I,{children:l>=0?(n=t,n>=61?"O-".concat(n):n>=46?"G-".concat(n):n>=31?"N-".concat(n):n>=16?"I-".concat(n):"B-".concat(n)):"GAME OVER"}),Object(r.jsx)(B,{onClick:s,children:l>=0?"next":"try again"})]})},A=function(){return Object(r.jsxs)(C,{children:[Object(r.jsx)(M,{children:"B"}),Object(r.jsx)(M,{children:"I"}),Object(r.jsx)(M,{children:"N"}),Object(r.jsx)(M,{children:"G"}),Object(r.jsx)(M,{children:"O"})]})},R=function(n){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),a=t[0],o=t[1],i=Object(c.useContext)(f),l=i.marked,s=i.setMarked,j=i.called;return Object(r.jsx)(S,{selected:a,onClick:function(){var e=n.index,t=n.value;if(j.indexOf(t)>-1){o((function(n){return!n}));var r=Object(u.a)(l);r[e]=1-r[e],s(r)}else alert("Wrong number!")},children:n.children})},F=function(){var n=Object(c.useContext)(f).board.map((function(n,e){return"FREE"===n?Object(r.jsx)(z,{children:"FREE"},n):Object(r.jsx)(R,{index:e,value:n,children:n},n)}));return Object(r.jsx)(E,{children:n})},T=function(){return Object(r.jsxs)(y,{children:[Object(r.jsx)(A,{}),Object(r.jsx)(F,{})]})},J=function(){var n=Object(c.useContext)(f).marked;return Object(r.jsx)(B,{onClick:function(){console.log(n);for(var e=[[0,5,10,15,20],[1,6,11,16,21],[2,7,12,17,22],[3,8,13,18,23],[4,9,14,19,24],[0,1,2,3,4],[5,6,7,8,9],[10,11,12,13,14],[15,16,17,18,19],[20,21,22,23,24],[0,6,12,18,24],[4,8,12,16,20]],t=0;t<12;t++){var r=0;if(e[t].map((function(e){return r+=n[e]})),5===r)return void alert("BINGO!")}alert("No bingo yet...")},children:"Submit"})},P=function(){return Object(r.jsxs)(G,{children:[Object(r.jsx)(N,{}),Object(r.jsx)(T,{}),Object(r.jsx)(J,{})]})};t(23);document.title="BINGO!",i.a.render(Object(r.jsx)(s,{children:Object(r.jsx)(P,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.2746ee02.chunk.js.map
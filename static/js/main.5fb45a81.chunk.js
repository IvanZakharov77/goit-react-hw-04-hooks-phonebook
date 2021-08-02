(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{15:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(8),i=n.n(r),o=(n(15),n(10)),s=n(2),u=n(9),l=n.n(u),b=n(0),d=function(e){var t=e.children;return Object(b.jsx)("div",{className:"Container",children:t})};n(25);function j(e){var t=e.onSubmit,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],i=c[1],o=Object(a.useState)(""),u=Object(s.a)(o,2),l=u[0],d=u[1],j=function(){i(""),d("")};return Object(b.jsxs)("form",{className:"formFilling",onSubmit:function(e){e.preventDefault(),t(r,l),j()},children:[Object(b.jsxs)("label",{children:["Name",Object(b.jsx)("input",{className:"inputContact",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r,onChange:function(e){i(e.currentTarget.value)}})]}),Object(b.jsxs)("label",{children:["Number phone",Object(b.jsx)("input",{className:"inputContact",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:l,onChange:function(e){d(e.currentTarget.value)}})]}),Object(b.jsx)("button",{className:"buttonAdd",type:"submit",children:"Add contact"})]})}n(7);var m=function(e){var t=e.ContactsData,n=e.onDeleteContact;return Object(b.jsx)("ul",{className:"contacts",children:t.map((function(e){var t=e.name,a=e.number,c=e.id;return Object(b.jsxs)("li",{className:"contacts-items",children:[Object(b.jsx)("span",{className:"contacts-name",children:t}),Object(b.jsx)("span",{className:"contacts-number",children:a}),Object(b.jsx)("button",{onClick:function(){return n(c)},children:"Delete"})]},c)}))})},f=(n(26),function(e){var t=e.value,n=e.onChange;return Object(b.jsx)("div",{className:"filter",children:Object(b.jsxs)("label",{children:["Find contacts by name",Object(b.jsx)("input",{type:"text",value:t,onChange:n})]})})}),h=function(){var e=Object(a.useState)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(s.a)(r,2),u=i[0],h=i[1];Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("contacts"));e&&c(e)}),[]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var O=n.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())}));return Object(b.jsxs)(d,{children:[Object(b.jsx)(j,{onSubmit:function(e,t){var a;a={id:l.a.generate(),name:e,number:t};var r=n.map((function(e){return e.name.toLowerCase()})),i=a.name.toLowerCase();if(r.find((function(e){return e===i})))return alert("such name already exists");c((function(e){return[a].concat(Object(o.a)(e))})),console.log(n)}}),Object(b.jsx)("div",{className:"contactsDiv",children:Object(b.jsx)(m,{ContactsData:O,onDeleteContact:function(e){c((function(t){return t.filter((function(t){return t.id!==e}))}))}})}),Object(b.jsx)(f,{value:u,onChange:function(e){h(e.target.value)}})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root")),O()},7:function(e,t,n){}},[[27,1,2]]]);
//# sourceMappingURL=main.5fb45a81.chunk.js.map
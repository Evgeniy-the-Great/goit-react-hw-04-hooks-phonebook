(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={filterInput:"Filter_filterInput__vat2A",filterLabel:"Filter_filterLabel__2ZJlQ"}},12:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n(11),o=n.n(c),r=n(13),s=n(1),i=n(7),l=n(21),u=n(6),b=n(3),j=n.n(b),m=n(0),d={name:"",number:""},f=function(t){var e=t.isThereThisContact,n=t.addContact,c=Object(a.useState)(d),o=Object(i.a)(c,2),r=o[0],l=o[1],b=function(t){var e=t.target,n=e.name,a=e.value;l((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(u.a)({},n,a))}))},f=function(){return l({name:"",number:""})};return Object(m.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(r.name)?alert("".concat(r.name," is already in contacts")):(n(r),f())},className:j.a.form,children:[Object(m.jsxs)("label",{className:j.a.label,children:["Name",Object(m.jsx)("input",{placeholder:"Jacob Mercer",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r.name,onChange:b,className:j.a.contactName})]}),Object(m.jsxs)("label",{className:j.a.label,children:["Number",Object(m.jsx)("input",{placeholder:"+38(093)223-77-88",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:r.number,onChange:b,className:j.a.contactName})]}),Object(m.jsx)("button",{type:"submit",children:"Add contact"})]})},O=n(8),h=n.n(O),x=function(t){var e=t.findContact,n=t.deleteContact;return Object(m.jsx)("ul",{className:h.a.contactList,children:e().map((function(t){return Object(m.jsxs)("li",{className:h.a.contactItem,children:[Object(m.jsxs)("p",{className:h.a.contactText,children:[t.name,": ",t.number]}),Object(m.jsx)("button",{type:"button",id:t.id,onClick:n,children:"Delete"})]},t.id)}))})},p=n(10),C=n.n(p),_=function(t){var e=t.filter,n=t.addToFilterState;return Object(m.jsxs)("label",{className:C.a.filterLabel,children:["Find contact by name",Object(m.jsx)("input",{type:"text",name:"filter",value:e,onChange:n,className:C.a.filterInput})]})},N=n(12),v=n.n(N),g={contacts:JSON.parse(localStorage.getItem("contacts"))||[],filter:""},L=function(){var t=Object(a.useState)(Object(s.a)({},g)),e=Object(i.a)(t,2),n=e[0],c=e[1];Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n.contacts))}),[n.contacts]);return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:v.a.box,children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsx)(f,{isThereThisContact:function(t){return n.contacts.some((function(e){return e.name.toLowerCase()===t.toLowerCase()}))},addContact:function(t){return c((function(e){return Object(s.a)(Object(s.a)({},e),{},{contacts:[].concat(Object(r.a)(e.contacts),[Object(s.a)({id:Object(l.a)()},t)])})}))}}),Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsx)(_,{addToFilterState:function(t){var e=t.target.value;c((function(t){return Object(s.a)(Object(s.a)({},t),{},{filter:e})}))},filter:n.filter}),Object(m.jsx)(x,{findContact:function(){return n.contacts.filter((function(t){return t.name.toLowerCase().includes(n.filter.toLowerCase())}))},deleteContact:function(t){var e=t.target.id;c((function(t){return Object(s.a)(Object(s.a)({},t),{},{contacts:t.contacts.filter((function(t){return t.id!==e}))})}))}})]})})};o.a.render(Object(m.jsx)(L,{}),document.getElementById("root"))},3:function(t,e,n){t.exports={form:"ContactForm_form__3uF92",contactName:"ContactForm_contactName__1y3Vt",label:"ContactForm_label__3FEXx"}},8:function(t,e,n){t.exports={contactList:"ContactList_contactList__2y6i7",contactItem:"ContactList_contactItem__2_Dhu",contactText:"ContactList_contactText__1mZw7"}}},[[19,1,2]]]);
//# sourceMappingURL=main.bcc635af.chunk.js.map
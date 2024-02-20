"use strict";(self.webpackChunkreact_phoneBook=self.webpackChunkreact_phoneBook||[]).push([[931],{5931:function(e,n,r){r.r(n),r.d(n,{default:function(){return $}});var t=r(824),a=r(5861),i=r(4687),o=r.n(i),s=r(6052),d=r(9434),l=r(6916),u=function(e){return e.contacts.contacts},c=function(e){return e.contacts.isLoading},m=(0,l.P1)([u,function(e){return e.filter}],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),h=r(1309),x=r(9589),p=r(89),f=r(9657),b=r(930),j=r(6336),g=r(9055),v=r(5705),C=function(e,n){return e.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}))},w=r(5218),y=r(184),k=function(){var e=(0,d.I0)(),n=(0,d.v9)(c),r=(0,d.v9)(u),i=(0,h.ff)("1px solid #805AD5","1px solid white"),l=(0,v.TA)({initialValues:{name:"",number:""},onSubmit:function(){var n=(0,a.Z)(o().mark((function n(t){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!C(r,t)){n.next=2;break}return n.abrupt("return",w.ZP.error("".concat(t.name," is already in contacts")));case 2:e((0,s.uK)(t)),m();case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}),m=function(){l.resetForm()};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(x.X,{children:"PhoneBook"}),(0,y.jsx)(t.xu,{bg:"dark",p:6,rounded:"lg",w:500,border:i,mt:5,children:(0,y.jsx)("form",{onSubmit:l.handleSubmit,children:(0,y.jsxs)(p.g,{spacing:4,align:"flex-start",children:[(0,y.jsxs)(f.NI,{children:[(0,y.jsx)(b.l,{htmlFor:"name",children:"Name"}),(0,y.jsx)(j.I,{onChange:l.handleChange,value:l.values.name,id:"name",name:"name",type:"text",variant:"filled",border:"1px solid white",_focus:{border:"1px solid #d5a6bd"},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,y.jsxs)(f.NI,{children:[(0,y.jsx)(b.l,{htmlFor:"number",children:"Phone Number"}),(0,y.jsx)(j.I,{onChange:l.handleChange,value:l.values.number,id:"number",name:"number",type:"tel",variant:"filled",border:"1px solid white ",_focus:{border:"1px solid #d5a6bd"},minLength:"10",maxLength:"13",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",required:!0})]}),(0,y.jsx)(g.z,{type:"submit",colorScheme:"purple",width:"full",disabled:n,children:"Add Contact"})]})})})]})},I=r(1634),z=r(9640),A=r(7425),S=function(){var e=(0,d.I0)();return(0,y.jsxs)(f.NI,{display:"flex",alignItems:"baseline",mt:5,children:[(0,y.jsx)(b.l,{htmlFor:"searchContact",fontSize:20,children:"Find contact"}),(0,y.jsxs)(t.xu,{position:"relative",children:[(0,y.jsx)(j.I,{id:"searchContact",type:"text",autoComplete:"off",onChange:function(n){var r=n.target.value;e((0,I.sP)(r.trim()))},w:377,_focus:{border:"1px solid #d5a6bd"}}),(0,y.jsx)(z.J,{as:A.RPM,position:"absolute",right:1,top:"20%",boxSize:"24px"})]})]})},F=r(9439),N=r(6661),L=r(2715),P=r(6108),_=r(8771),Z=r(8555),B=r(2791),E="Modal_Overlay__yoxbg",q=r(4164),D=r(9459),J=document.querySelector("#modal-root");function M(e){var n=e.onClose,r=e.name,a=e.number,i=e.id,o=(0,d.I0)();(0,B.useEffect)((function(){return window.addEventListener("keydown",l),function(){window.removeEventListener("keydown",l)}}));var l=function(e){"Escape"===e.code&&n()},u=(0,v.TA)({initialValues:{name:r,number:a},onSubmit:function(e){e.name===r&&e.number===a||(o((0,s.mP)({id:i,values:e})),n())}});return(0,q.createPortal)((0,y.jsx)("div",{className:E,onClick:function(e){e.target===e.currentTarget&&n()},children:(0,y.jsxs)(t.xu,{bg:"dark",p:6,rounded:"lg",w:500,border:"1px solid white",position:"relative",children:[(0,y.jsx)(P.h,{role:"group",size:"sm",position:"absolute",right:2,top:2,onClick:n,children:(0,y.jsx)(z.J,{as:D.T,_groupHover:{transform:"rotate(90deg)",transition:"transform 0.5s"}})}),(0,y.jsx)("form",{onSubmit:u.handleSubmit,children:(0,y.jsxs)(p.g,{spacing:4,align:"flex-start",children:[(0,y.jsxs)(f.NI,{children:[(0,y.jsx)(b.l,{htmlFor:"name",children:"Name"}),(0,y.jsx)(j.I,{onChange:u.handleChange,value:u.values.name,id:"name",name:"name",type:"text",variant:"filled",border:"1px solid white ",_focus:{border:"1px solid #d5a6bd",color:"white"},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,y.jsxs)(f.NI,{children:[(0,y.jsx)(b.l,{htmlFor:"number",children:"Phone Number"}),(0,y.jsx)(j.I,{onChange:u.handleChange,value:u.values.number,id:"number",name:"number",type:"tel",variant:"filled",border:"1px solid white ",_focus:{border:"1px solid #d5a6bd",color:"white"},required:!0,minLength:"10",maxLength:"13",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"})]}),(0,y.jsx)(g.z,{type:"submit",colorScheme:"purple",width:"full",children:"Edit"})]})})]})}),J)}var T=function(e){var n=e.name,r=e.number,a=e.id,i=(0,d.I0)(),o=(0,d.v9)(c),l=(0,B.useState)(!1),u=(0,F.Z)(l,2),m=u[0],x=u[1],p=(0,h.ff)("1px solid purple","1px solid  #D6BCFA"),f=function(){return x((function(e){return!e}))};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(N.HC,{mt:4,borderBottom:p,display:"flex",justifyContent:"space-between",alignItems:"center",w:"600px",mr:"10px",children:[(0,y.jsxs)(L.x,{fontSize:"lg",children:[n,": ",r]}),(0,y.jsxs)(t.xu,{children:[(0,y.jsx)(P.h,{mr:5,border:"none",colorScheme:"purple","aria-label":"Delete Contact",size:"md",icon:(0,y.jsx)(_.p,{}),onClick:function(){return function(e){i((0,s.GK)(e))}(a)},variant:"outline",disabled:o}),(0,y.jsx)(P.h,{border:"none",colorScheme:"purple","aria-label":"Edit Contact",size:"md",icon:(0,y.jsx)(Z.d,{}),onClick:f,variant:"outline",disabled:o})]})]}),m&&(0,y.jsx)(M,{onClose:f,name:n,number:r,id:a})]})},V=r(267),H=function(){var e=(0,d.v9)(c),n=(0,d.v9)(m);return(0,y.jsxs)(N.aV,{mt:7,display:"flex",flexDirection:"column-reverse",justifyContent:"flex-end",h:"300px",children:[e&&(0,y.jsx)(V.a,{}),n.map((function(e){var n=e.number,r=e.id,t=e.name;return(0,y.jsx)(T,{name:t,number:n,id:r},r)}))]})},K=r(4217),$=function(){var e=(0,d.I0)(),n=(0,d.v9)(K.Qb);return(0,B.useEffect)((function(){e((0,s.yF)())}),[e]),(0,y.jsxs)(t.xu,{padding:"20px 30px",children:[(0,y.jsx)(k,{}),(0,y.jsx)(S,{}),n&&(0,y.jsx)(H,{}),(0,y.jsx)(w.x7,{position:"top-right"})]})}}}]);
//# sourceMappingURL=931.d279f7ef.chunk.js.map
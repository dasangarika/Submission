(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{32:function(e,t,a){e.exports=a(55)},37:function(e,t,a){},38:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(29),c=a.n(r),s=(a(37),a(17)),o=a(18),m=a(19),u=a(20),i=a(22),h=a(21),d=(a(38),a(27),a(39),function(e){Object(i.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(s.a)({},e.target.name,e.target.value))},n.validate=function(){var e;n.state.fullname&&n.state.rollnumber&&n.state.class&&n.state.section||(alert("All Fields Are Compulsory"),e="Error"),Number(n.state.rollnumber)||(alert("Your rollNumber must be a number"),e="Error"),(n.state.class<1||n.state.class>12)&&(alert("Class must be in the range of 1 - 12"),e="Error");var t=n.state.section;return"A"!==t&&"B"!==t&&"C"!==t&&"D"!==t&&"E"!==t&&"F"!==t&&(alert("Section must be from A-F"),e="Error"),!e||(n.setState({nameError:e}),!1)},n.handlesubmit=function(e){alert("name: ".concat(n.state.fullname," Roll number: ").concat(n.state.rollnumber," Class: ").concat(n.state.class," Section: ").concat(n.state.section)),n.validate()&&alert("Form Successfully Submitted")},n.state={fullname:"",rollnumber:"",class:"",section:"",nameError:"",rollNumbererror:"",classerror:"",sectionerror:""},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("header",{className:"App-header"},l.a.createElement("h1",null,"Student Info")),l.a.createElement("div",{className:"jumbotron"},l.a.createElement("h2",null,"Add Student"),l.a.createElement("form",{onSubmit:this.handlesubmit},l.a.createElement("input",{type:"text",placeholder:"Enter the student name",Name:"fullname",value:this.state.fullname,onChange:this.handleChange}),l.a.createElement("div",null,this.state.nameError),l.a.createElement("br",null),l.a.createElement("input",{type:"text",placeholder:"Enter the Roll number",Name:"rollnumber",value:this.state.rollnumber,onChange:this.handleChange}),l.a.createElement("div",null,this.state.rollNumbererror),l.a.createElement("br",null),l.a.createElement("input",{type:"text",placeholder:"Enter the class",Name:"class",value:this.state.class,onChange:this.handleChange}),l.a.createElement("div",null,this.state.classerror),l.a.createElement("br",null),l.a.createElement("input",{type:"text",placeholder:"Enter the section",Name:"section",value:this.state.section,onChange:this.handleChange}),l.a.createElement("div",null,this.state.sectionerror),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",className:"Submit",value:"Add student"}))))}}]),a}(l.a.Component)),E=function(e){Object(i.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(s.a)({},e.target.name,e.target.value))},n.validate=function(){var e;return n.state.fullname&&n.state.teacherid&&n.state.class&&n.state.section||(alert("All Fields Are Compulsory"),e="Error"),n.state.fullname&&!n.state.class&&(alert("Teacher must teach a class"),e="Error"),!e||(n.setState({nameError:e}),!1)},n.handlesubmit=function(e){alert("Teacher Name: ".concat(n.state.fullname," Teacher id: ").concat(n.state.teacherid," Class & Section: ").concat(n.state.class)),n.validate()&&alert("Form Successfully Submitted")},n.state={fullname:"",teacherid:"",class:"",nameError:""},n}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("header",{className:"App-header"},l.a.createElement("h1",null,"Teacher Info")),l.a.createElement("div",{className:"jumbotron"},l.a.createElement("h2",null,"Add Teacher"),l.a.createElement("form",{onSubmit:this.handlesubmit},l.a.createElement("input",{type:"text",placeholder:"Enter the Teacher name",Name:"fullname",value:this.state.fullname,onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"text",placeholder:"Enter The Teacher Id",Name:"teacherid",value:this.state.teacherid,onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",null),l.a.createElement("input",{type:"text",placeholder:"Enter the classes with sections taught by the teacher",Name:"class",value:this.state.class,onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",className:"Submit",value:"Add Teacher"}),l.a.createElement("div",null,this.state.nameError))))}}]),a}(l.a.Component),b=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Contact US"),l.a.createElement("p",null,"Contact US page body content"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var p=a(16),v=a(9);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement("div",{className:"wrapper"},l.a.createElement("h1",null,"Home"),l.a.createElement("nav",{id:"sidebar"},l.a.createElement("h4",null,"Teacher"),l.a.createElement("h4",null,"Student"),l.a.createElement(p.a,null,l.a.createElement("div",null,l.a.createElement(v.c,null,l.a.createElement(v.a,{path:"/contact",component:b}))))),l.a.createElement("div",{id:"content"},l.a.createElement(d,null),l.a.createElement(E,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.f69dfa88.chunk.js.map
(this["webpackJsonpakshat-bais"]=this["webpackJsonpakshat-bais"]||[]).push([[0],{100:function(e,n,t){e.exports=t.p+"static/media/java.eaf164c0.jpg"},101:function(e,n,t){var a={"./skills-images/js.svg":102};function l(e){var n=r(e);return t(n)}function r(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}l.keys=function(){return Object.keys(a)},l.resolve=r,e.exports=l,l.id=101},102:function(e,n,t){e.exports=t.p+"static/media/js.2d2e31cc.svg"},103:function(e,n,t){var a={"./skills-images/docker.png":104};function l(e){var n=r(e);return t(n)}function r(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}l.keys=function(){return Object.keys(a)},l.resolve=r,e.exports=l,l.id=103},104:function(e,n,t){e.exports=t.p+"static/media/docker.2103c445.png"},105:function(e,n,t){var a={"./skills-images/elk.png":106};function l(e){var n=r(e);return t(n)}function r(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}l.keys=function(){return Object.keys(a)},l.resolve=r,e.exports=l,l.id=105},106:function(e,n,t){e.exports=t.p+"static/media/elk.56e55957.png"},107:function(e,n,t){var a={"./skills-images/react.png":108};function l(e){var n=r(e);return t(n)}function r(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}l.keys=function(){return Object.keys(a)},l.resolve=r,e.exports=l,l.id=107},108:function(e,n,t){e.exports=t.p+"static/media/react.47ce6e77.png"},109:function(e,n,t){},110:function(e,n,t){},127:function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),r=t(8),o=t.n(r),c=(t(67),t(68),t(9)),i=t(57),s=(t(69),t(148)),u=t(157),m=t(150),d=t(152),p=t(153),E=t(156),g=t(154),f=t(158),v=t(51),h=t.n(v);var b=function(){var e=a.useState(!1),n=Object(i.a)(e,2),t=n[0],l=n[1],r=Object(s.a)((function(e){var n;return Object(u.a)({root:Object(c.a)({background:"white",boxShadow:"none"},e.breakpoints.down("sm"),{height:"5vh"}),toolBarProps:{minHeight:"50px",justifyContent:"center"},sectionDesktop:Object(c.a)({display:"none",justifyContent:"center"},e.breakpoints.up("sm"),{display:"flex"}),sectionMobile:(n={color:"black",height:"50px"},Object(c.a)(n,e.breakpoints.down("sm"),{display:"flex"}),Object(c.a)(n,e.breakpoints.up("sm"),{display:"none"}),n),menuButtonProps:{color:"blue"},drawer:Object(c.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),drawerPaper:{width:240},dwarerItems:{marginTop:"50px"}})}))(),o=function(){l(!1)};return a.createElement(m.a,{position:"sticky",classes:{root:r.root}},a.createElement("div",{className:r.sectionDesktop},a.createElement(d.a,{classes:{root:r.toolBarProps}},a.createElement("ul",{id:"navigation-menu"},a.createElement("li",null,a.createElement("a",{href:"#"},"Home")),a.createElement("li",null,a.createElement("a",{href:"#experience"}," Work Experience")),a.createElement("li",null,a.createElement("a",{href:"#skills"},"Skills")),a.createElement("li",null,a.createElement("a",{href:"#contact"}," Contact"))))),a.createElement("div",{className:r.sectionMobile},a.createElement(d.a,null,a.createElement(p.a,{color:"inherit","aria-label":"open drawer",onClick:function(){l(!t)}},a.createElement(h.a,{classes:{root:r.menuButtonProps}})))),a.createElement(E.a,{variant:"temporary",anchor:"left",open:t,className:r.drawer,classes:{paper:r.drawerPaper},ModalProps:{onBackdropClick:o}},a.createElement("div",{className:"drawer-items"},a.createElement("div",null,"Hello ! Again !"),a.createElement("div",{className:r.dwarerItems},a.createElement(g.a,null),a.createElement(f.a,null,a.createElement("a",{href:"#",onClick:o},"Home")),a.createElement(g.a,null),a.createElement(f.a,null,a.createElement("a",{href:"#experience",onClick:o}," Work Experience")),a.createElement(g.a,null),a.createElement(f.a,null,a.createElement("a",{href:"#contact",onClick:o},"Contact"))))))},k=t(16),y=t(11),O=t(19),j=t(20),N=t(13),w=t(21),x=(t(75),t(155)),S=t(54),C=t.n(S),D=t(52),T=t.n(D),_=t(53),L=t.n(_),U=function(e){function n(e){var t;return Object(k.a)(this,n),(t=Object(O.a)(this,Object(j.a)(n).call(this,e))).state={loading:!1},t.downloadCv=t.downloadCv.bind(Object(N.a)(t)),t}return Object(w.a)(n,e),Object(y.a)(n,[{key:"downloadCv",value:function(){var e=this;console.log("downloading cv"),this.setState({loading:!0}),T()("https://akshat-profile-node.herokuapp.com/download/akshatcv",{method:"GET",responseType:"blob"}).then((function(n){e.setState({loading:!1});var t=new Blob([n.data],{type:"application/pdf"});L()(t,"akshat_bais_cv.pdf")}))}},{key:"render",value:function(){return a.createElement("section",{id:"#"},a.createElement("div",{className:"parent-column"},a.createElement("div",{className:"main-component"},a.createElement("div",{className:"profile-summary"},a.createElement("img",{className:"profile-picture",src:t(92),alt:""}),a.createElement("h3",{className:"body"},"Hey !!",a.createElement("br",null)," This is Akshat Singh Bais"),a.createElement("h4",{className:"body"}," < Full Stack Engineer />"),a.createElement("div",{className:"body"},"Technology Enthusiast. Demonstrated hand-on with several technologies both on front-end and back-end side. Love coding, developing logics and algorithms. Apart from development I enjoy reading books.You can scroll down to know more about me or download my CV."),a.createElement("div",{className:"download-cv"},a.createElement(x.a,{onClick:this.downloadCv},a.createElement(C.a,null),this.state.loading?"Downloading...":" Download CV"))))))}}]),n}(a.Component),F=(t(93),"./skills-images/");var P=function(e){function n(){return Object(k.a)(this,n),Object(O.a)(this,Object(j.a)(n).apply(this,arguments))}return Object(w.a)(n,e),Object(y.a)(n,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){console.log("Did mount")}},{key:"componentWillUnmount",value:function(){console.log("About to unmount")}},{key:"render",value:function(){return l.a.createElement("div",{id:"skills",className:"skills-component"},l.a.createElement("div",{className:"skills-summary"},l.a.createElement("h2",null,"Primary Skills"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("img",{src:t(95)(F+"angular.svg")})),l.a.createElement("li",null,l.a.createElement("img",{src:t(97)(F+"nodejs.png")})),l.a.createElement("li",null,l.a.createElement("img",{src:t(99)(F+"java.jpg")})),l.a.createElement("li",null,l.a.createElement("img",{src:t(101)(F+"js.svg")})),l.a.createElement("li",null,l.a.createElement("img",{src:t(103)(F+"docker.png")}))),l.a.createElement("h2",null,"Secondary Skills"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("img",{src:t(105)(F+"elk.png")})),l.a.createElement("li",null,l.a.createElement("img",{src:t(107)(F+"react.png")})),l.a.createElement("li",null,"C++"))))}}]),n}(l.a.Component),M={companies:[{companyName:"Tata Consultancy Service",projects:[{ProjectName:"Covenant Monitoring Engine",projectDescription:""},{project:"",projectDescription:""}]},{companyName:"Tata Consultancy Service",projects:[{projectName:"Enterprise Single Sign On",projectDescription:""},{project:"",projectDescription:""}]}]},A=(t(109),function(e){function n(e){var t;return Object(k.a)(this,n),(t=Object(O.a)(this,Object(j.a)(n).call(this,e))).state={workExperience:{}},t}return Object(w.a)(n,e),Object(y.a)(n,[{key:"componentWillMount",value:function(){this.setState({workExperience:M})}},{key:"render",value:function(){return console.log(this.state.workExperience),l.a.createElement("section",{id:"experience",className:"experience"},l.a.createElement(g.a,null),l.a.createElement("div",{className:"experience-start"},l.a.createElement("div",{className:"experience-items"},l.a.createElement("div",{className:"company-data"},l.a.createElement("div",{className:"company-logo"},"Logo "),l.a.createElement("div",{className:"company-name"},l.a.createElement("b",null,l.a.createElement("h3",null,"Viacom18")))),l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement("i",null,"From : Jan, 2019 - To : Dec, 2019"))),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("strong",null,l.a.createElement("u",null,"Project : Enterprise Single Sign on :"))),l.a.createElement("div",null,l.a.createElement("li",null,"A generic Enterprise SSO for all Viacom18 applications. Authenticating users using ",l.a.createElement("strong",null,"Passport with LDAP"),"and securing/authorizing the APIs using ",l.a.createElement("strong",null,"JWT")," tokens")),l.a.createElement("div",null,l.a.createElement("li",null,"Developed ",l.a.createElement("b",null,l.a.createElement("u",null,"Search Engine + Filter section"))," using ",l.a.createElement("strong",null,"node, mongo and Angular "),"capable of searching partial and full text")),l.a.createElement("br",null),l.a.createElement("li",null,l.a.createElement("strong",null,"Enterprise Single Sign On")," : Authenticating Viacom18 users using ldap and passport on node."),l.a.createElement("li",null,"Developed a generic ",l.a.createElement("strong",null,"pop-up module")," using Angular 7")))),l.a.createElement("div",{className:"experience-items"},l.a.createElement("div",{className:"company-data"},l.a.createElement("div",{className:"company-logo"},"Logo "),l.a.createElement("div",{className:"company-name"},l.a.createElement("b",null,l.a.createElement("h3",null,"Tata Consultancy Services")))),l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement("i",null,"From September 2016 - To : Jan, 2019"))),l.a.createElement("br",null),l.a.createElement("ul",null,l.a.createElement("li",null,"Responsible for building a ",l.a.createElement("strong",null,"monitoring engine")," for Lending Domain"),l.a.createElement("li",null,"Making ",l.a.createElement("strong",null,"REST Services, controllers")," and process components for business logics using ",l.a.createElement("strong",null," Java , Spring")),l.a.createElement("br",null),l.a.createElement("li",null,l.a.createElement("strong",null,l.a.createElement("u",null,"Global Error Handler and Logs for Audit Purpose"))),l.a.createElement("li",null,"As a part of this component, made directives in Angular which can be used in any application for logging user actions."),l.a.createElement("br",null),l.a.createElement("li",null,"Designing the database, writing queries and triggers using SQL/PLSQL. Writing ",l.a.createElement("strong",null,"Junit Test cases"),". Build using Jenkins and using fortify for detecting security patches"),l.a.createElement("br",null),l.a.createElement("li",null,"Served as Junior Business Analyst in Netherlands")))))}}]),n}(l.a.Component)),I=t(55),B=(t(110),t(56)),J=t.n(B),W=function(e){function n(e){var t;return Object(k.a)(this,n),(t=Object(O.a)(this,Object(j.a)(n).call(this,e))).state={name:"",contactNumber:0,InstitutionName:""},t.haandleFormSubmit=t.haandleFormSubmit.bind(Object(N.a)(t)),t.handleInput=t.handleInput.bind(Object(N.a)(t)),t}return Object(w.a)(n,e),Object(y.a)(n,[{key:"haandleFormSubmit",value:function(){}},{key:"handleInput",value:function(e){var n=e.currentTarget.name,t=e.currentTarget.value;this.setState(Object(I.a)({},this.state,Object(c.a)({},n,t)))}},{key:"render",value:function(){return console.log(this.state),l.a.createElement("section",{className:"contact",id:"contact"},l.a.createElement(g.a,null),l.a.createElement("div",{className:"contact-information"},l.a.createElement("div",{className:"message"},l.a.createElement("p",null,l.a.createElement("i",null,"If you like my profile and think my skills can be leveraged for your project and requirements. Kindly fill your information and leave a message. Thanks !!"))),l.a.createElement("div",{className:"message"},l.a.createElement("p",null,"PS : You can still leave a message along with your details if you want to get in touch regarding your personal projects or any sort of help. Happy development guys !")),l.a.createElement("form",{className:"form-details",onSubmit:this.haandleFormSubmit},l.a.createElement("div",{className:"form-control"},l.a.createElement("input",{title:"Full Name",name:"name",value:this.state.name,placeholder:"Please Enter Your Name",onChange:this.handleInput})),l.a.createElement("div",{className:"form-control"},l.a.createElement(J.a,null),l.a.createElement("input",{type:"number",name:"contactNumber",value:0==this.state.contactNumber?"":this.state.contactNumber,placeholder:"Please Enter Your Contact number",onChange:this.handleInput})),l.a.createElement("div",{className:"form-control-textarea"},l.a.createElement("textarea",{placeholder:"Leave a message"})))))}}]),n}(l.a.Component);t(111);var H=function(){return l.a.createElement("div",{className:"profile"},l.a.createElement(b,null),l.a.createElement("div",{className:"profile-body"},l.a.createElement(U,null),l.a.createElement(g.a,null),l.a.createElement(A,null),l.a.createElement(g.a,null),l.a.createElement(P,null),l.a.createElement(g.a,null),l.a.createElement(W,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},46:function(e,n){function t(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=46},62:function(e,n,t){e.exports=t(127)},67:function(e,n,t){},68:function(e,n,t){},69:function(e,n,t){},75:function(e,n,t){},92:function(e,n,t){e.exports=t.p+"static/media/asb.d63ad553.jpg"},93:function(e,n,t){},94:function(e,n){function t(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=94},95:function(e,n,t){var a={"./skills-images/angular.svg":96};function l(e){var n=r(e);return t(n)}function r(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}l.keys=function(){return Object.keys(a)},l.resolve=r,e.exports=l,l.id=95},96:function(e,n,t){e.exports=t.p+"static/media/angular.4c732369.svg"},97:function(e,n,t){var a={"./skills-images/nodejs.png":98};function l(e){var n=r(e);return t(n)}function r(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}l.keys=function(){return Object.keys(a)},l.resolve=r,e.exports=l,l.id=97},98:function(e,n,t){e.exports=t.p+"static/media/nodejs.d42672d4.png"},99:function(e,n,t){var a={"./skills-images/java.jpg":100};function l(e){var n=r(e);return t(n)}function r(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}l.keys=function(){return Object.keys(a)},l.resolve=r,e.exports=l,l.id=99}},[[62,1,2]]]);
//# sourceMappingURL=main.0647f98e.chunk.js.map
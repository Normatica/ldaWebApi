(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{230:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(22),l=a.n(o),i=(a(93),a(72)),s=a(73),c=a(86),u=a(74),d=a(87),p=a(12),m=(a(95),a(11)),h=a(78),b=a(17),E=a.n(b),v=a(32),f=a(79);a.n(f).a.config();var g={backend_page:"http://niebla.ing.puc.cl/interactive_lda",password:"asjkdajsalkdj123alskdlk123"},S={sendLDAData:function(e,t,a,n,r,o){return w.apply(this,arguments)},getDataBase:function(){return N.apply(this,arguments)},pin:function(){return y.apply(this,arguments)},uploadDatabase:function(e,t){return k.apply(this,arguments)},sendSeedOrInteractiveData:function(e,t,a,n,r,o,l,i){var s=new FormData;s.append("token",g.password),s.append("iterations",e),s.append("mode",t),s.append("alpha",a),s.append("database",r),s.append("beta",n),s.append("topics",o),s.append("nu",l),s.append("seeds",JSON.stringify(i));var c={method:"POST",body:s};return fetch("".concat(g.backend_page,"/lda"),c).then(function(e){return e.text()})}};function w(){return(w=Object(v.a)(E.a.mark(function e(t,a,n,r,o,l){var i,s;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(i=new FormData).append("token",g.password),i.append("iterations",t),i.append("mode",a),i.append("alpha",n),i.append("database",o),i.append("beta",r),i.append("topics",l),s={method:"POST",body:i},e.abrupt("return",fetch("".concat(g.backend_page,"/lda"),s).then(function(e){return e.text()}));case 10:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function y(){return(y=Object(v.a)(E.a.mark(function e(){var t;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST"},e.abrupt("return",fetch("".concat(g.backend_page,"/pin"),t).then(function(e){return e.text()}));case 2:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function N(){return(N=Object(v.a)(E.a.mark(function e(){var t;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST"},e.abrupt("return",fetch("".concat(g.backend_page,"/database"),t).then(function(e){return e.text()}).catch(function(e){return JSON.stringify([["NewGroups.5","New Groups (5 categor\xedas)"],["NewGroups.10","New Groups (10 categor\xedas)"]])}));case 2:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function k(){return(k=Object(v.a)(E.a.mark(function e(t,a){var n,r;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("token",g.password),n.append("file",t),n.append("name",a),r={method:"POST",body:n},e.abrupt("return",fetch("".concat(g.backend_page,"/uploadFile"),r).then(function(e){return e.text()}));case 6:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var O=a(81),D=a.n(O),C=a(83),T=a.n(C),A=a(85),L=a.n(A),j=a(84),x=a.n(j),B=a(80),I=a(41),R=a.n(I),_=window.matchMedia("(min-width: 1000px)"),J={contentHeaderMenuLink:{textDecoration:"none",color:"black",padding:8},content:{padding:"16px"}},M=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={docked:_.matches,sidebarOpen:!0,topics:5,words:{},useTopics:!1,results:[],databases:[],error:null,loaded:!1,mode:""},a.mediaQueryChanged=a.mediaQueryChanged.bind(Object(p.a)(Object(p.a)(a))),a.toggleOpen=a.toggleOpen.bind(Object(p.a)(Object(p.a)(a))),a.onSetOpen=a.onSetOpen.bind(Object(p.a)(Object(p.a)(a))),a.onSetSidebarOpen=a.onSetSidebarOpen.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;_.addListener(this.mediaQueryChanged),S.getDataBase().then(function(t){var a=JSON.parse(t);console.log(a),e.setState({databases:a,loaded:!0})})}},{key:"componentWillUnmount",value:function(){_.removeListener(this.mediaQueryChanged)}},{key:"onSetOpen",value:function(e){this.setState({open:e})}},{key:"mediaQueryChanged",value:function(){this.setState({docked:_.matches,open:!1})}},{key:"toggleOpen",value:function(e){this.setState({open:!this.state.open}),e&&e.preventDefault()}},{key:"renderCards",value:function(e){for(var t=this,a=[],n=0;n<e;n++)a.push(n);return a.map(function(e){return r.a.createElement(D.a,{className:"card",key:e},r.a.createElement(T.a,null,r.a.createElement(x.a,{variant:"h5",component:"h2"},"SEEDED"===t.state.mode?"Seed ".concat(e+1):"Constrain ".concat(e+1)),r.a.createElement(m.b,{initialValues:{word:""},onSubmit:function(a,n){var r;a.word&&(r=t.state.words,e in t.state.words||(r[e]=[]),r[e].push(a.word),t.setState({words:r}),n.resetForm());n.setSubmitting(!1)},validate:function(e){var t={};return e.word.includes(" ")&&(t.word="La palabra no puede contener espacio."),t},render:function(a){var n=a.values,o=a.handleBlur,l=a.handleChange,i=a.handleSubmit;return r.a.createElement("form",{onSubmit:i},r.a.createElement("div",{className:"input"},r.a.createElement("input",{type:"text",autoComplete:"off",name:"word",onChange:l,onBlur:o,value:n.word,disabled:!t.state.useTopics}),r.a.createElement(m.a,{name:"word",component:"div",className:"error"})),r.a.createElement("button",{className:"button",type:"submit",disabled:!t.state.useTopics},"Agregar palabra"),t.state.words[e]&&t.state.words[e].map(function(a,n){return r.a.createElement("div",{key:"".concat(e,"-").concat(n),className:"words"},a,r.a.createElement(L.a,{className:"deleteButton",size:"small",onClick:function(n){var r=t.state.words;r[e]=r[e].filter(function(e){return e!==a}),t.setState({words:r})}},"Delete"))}))}})))})}},{key:"onSetSidebarOpen",value:function(e){this.setState({sidebarOpen:e})}},{key:"render",value:function(){var e=this,t=r.a.createElement(h.a,{sidebar:r.a.createElement("div",{className:"sidebar"},r.a.createElement("h3",null," LDA's configuration "),r.a.createElement(m.b,{initialValues:{database:"NewGroups.5",mode:"LDA",iteration:100,topics:this.state.topics,nu:1,alpha:.1,beta:.001},onSubmit:function(t,a){e.setState({result:[],error:""}),"LDA"!==t.mode?S.sendSeedOrInteractiveData(t.iteration,t.mode,t.alpha,t.beta,t.database,t.topics,t.nu,e.state.words).then(function(n){var r={iteration:t.iteration,mode:t.mode,alpha:t.alpha,beta:t.beta,database:t.database,topics:t.topics},o=JSON.parse(n),l=e.state.results;"error"in o?e.setState({error:"Hubo un error"}):(r.result=o,l.push(r),e.setState({results:l})),a.setSubmitting(!1)}):S.sendLDAData(t.iteration,t.mode,t.alpha,t.beta,t.database,t.topics).then(function(n){var r={iteration:t.iteration,mode:t.mode,alpha:t.alpha,beta:t.beta,database:t.database,topics:t.topics},o=JSON.parse(n),l=e.state.results;"error"in o?e.setState({error:"Hubo un error"}):(r.result=o,l.push(r),e.setState({results:l})),a.setSubmitting(!1)})},validate:function(e){return{}},render:function(t){var a=t.values,n=t.handleBlur,o=t.handleChange,l=t.handleSubmit,i=t.isSubmitting;return r.a.createElement("form",{onSubmit:l,className:"form"},r.a.createElement("div",{className:"input"},r.a.createElement("label",null,"Database: "),r.a.createElement("select",{name:"database",onChange:o,onBlur:n},e.state.databases.map(function(e){return r.a.createElement("option",{key:e[0],value:e[0]},e[1])})),r.a.createElement(m.a,{name:"database",component:"div",className:"error"})),r.a.createElement("div",{className:"input"},r.a.createElement("label",null,"LDA Model: "),r.a.createElement("select",{name:"mode",onChange:function(t){o(t),"LDA"!==t.target.value?"INTERACTIVE"===t.target.value?e.setState({useTopics:!0,mode:"INTERACTIVE"}):e.setState({useTopics:!0,mode:"SEEDED"}):e.setState({useTopics:!1})},onBlur:n},r.a.createElement("option",{value:"LDA"},"LDA"),r.a.createElement("option",{value:"INTERACTIVE"},"Interactive LDA"),r.a.createElement("option",{value:"SEEDED"},"Seeded LDA"),r.a.createElement("option",{value:"BOTH"},"Seeded and Interactive LDA")),r.a.createElement(m.a,{name:"mode",component:"div",className:"error"})),r.a.createElement("div",{className:"input"},r.a.createElement("label",null,"Iterations: "),r.a.createElement("input",{type:"number",name:"iteration",onChange:o,onBlur:n,value:a.iteration}),r.a.createElement(m.a,{name:"iteration",component:"div",className:"error"})),r.a.createElement("div",{className:"input"},r.a.createElement("label",null,"Topics: "),r.a.createElement("input",{type:"number",name:"topics",min:2,onChange:function(t){var a=t.target.value;50>a>0&&Math.floor(a)===+a&&(e.setState({topics:a}),o(t))},onBlur:n,value:a.topics}),r.a.createElement(m.a,{name:"topics",component:"div",className:"error"})),r.a.createElement("div",{className:"input"},r.a.createElement("label",null,"Alpha:",r.a.createElement("span",{"data-tip":!0,"data-for":"alpha"}," (?) "),r.a.createElement(R.a,{id:"alpha",type:"info"},r.a.createElement("span",null,"Explicaci\xf3n alpha"))),r.a.createElement("input",{type:"number",name:"alpha",min:0,step:.001,onChange:o,onBlur:n,value:a.alpha}),r.a.createElement(m.a,{name:"alpha",component:"div",className:"error"})),r.a.createElement("div",{className:"input"},r.a.createElement("label",null,"Beta:",r.a.createElement("span",{"data-tip":!0,"data-for":"beta"}," (?) "),r.a.createElement(R.a,{id:"beta",type:"info"},r.a.createElement("span",null,"Explicaci\xf3n beta"))),r.a.createElement("input",{type:"number",name:"beta",min:0,step:.001,onChange:o,onBlur:n,value:a.beta}),r.a.createElement(m.a,{name:"beta",component:"div",className:"error"})),("INTERACTIVE"===a.mode||"BOTH"===a.mode)&&r.a.createElement("div",{className:"input"},r.a.createElement("label",null,"Nu:",r.a.createElement("span",{"data-tip":!0,"data-for":"nu"}," (?) "),r.a.createElement(R.a,{id:"nu",type:"info"},r.a.createElement("span",null,"Explicaci\xf3n nu"))),r.a.createElement("input",{type:"number",name:"nu",min:0,step:.001,onChange:o,onBlur:n,value:a.nu}),r.a.createElement(m.a,{name:"nu",component:"div",className:"error"})),r.a.createElement("button",{className:"button",type:"submit",disabled:i},"Run Topic Model"))}}),r.a.createElement("h3",null," Upload Database"),r.a.createElement(m.b,{initialValues:{file:null},onSubmit:function(t,a){t.file?S.uploadDatabase(t.file,t.file.name).then(function(t){var n=JSON.parse(t);e.setState({databases:n}),a.setSubmitting(!1)}):a.setSubmitting(!1)},render:function(e){var t=e.handleSubmit,a=e.setFieldValue,n=e.isSubmitting;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,r.a.createElement("input",{id:"file",name:"file",type:"file",onChange:function(e){a("file",e.currentTarget.files[0])},className:"form-control"})),r.a.createElement("button",{className:"button",type:"submit",disabled:n},"Upload File"))}})),docked:this.state.docked,open:this.state.open,onSetOpen:this.onSetOpen,contentClassName:"content",styles:{sidebar:{background:"#6B818C",width:"20%",minWidth:"200px",height:"100%"},root:{overflow:"scroll"},content:{height:"100%"}}},r.a.createElement("div",{className:"view"},!this.state.docked&&r.a.createElement("div",null,r.a.createElement("button",{onClick:this.toggleOpen,style:J.contentHeaderMenuLink},"Click here to open panel with LDA's configuration")),r.a.createElement("h1",null," Tradicional, Interactive & Seeded LDA"),this.state.useTopics&&r.a.createElement("div",null,r.a.createElement("p",null,"In this section you can include words in same topics and run LDA like an Semi-supervised model."),r.a.createElement("div",{className:"cards-flex"},this.renderCards(this.state.topics)))),!this.state.error&&r.a.createElement("div",{className:"view"},r.a.createElement("h1",null," Result "),this.state.results.slice(0).reverse().map(function(t,a){return r.a.createElement("div",{className:"topicResul",key:a},r.a.createElement("h1",null,e.state.results.length-a<10&&"Result 0".concat(e.state.results.length-a),e.state.results.length-a>=10&&"Result ".concat(e.state.results.length-a)),r.a.createElement("h4",null,"Iteracions: ".concat(t.iteration)),r.a.createElement("h4",null,"Alpha: ".concat(t.alpha)),r.a.createElement("h4",null,"Beta: ".concat(t.beta)),r.a.createElement("h4",null,"Topics: ".concat(t.topics)),r.a.createElement("h4",null,"Mode: ".concat(t.mode)),r.a.createElement("h4",null,"Database: ".concat(t.database)),t.result.map(function(e,t){return r.a.createElement("div",{key:"topic_"+t},t+1<10&&"Topic 0".concat(t+1),t+1>=10&&"Topic ".concat(t+1),e.map(function(e,a){return r.a.createElement("div",{className:"wordData",key:"word_".concat(t,"-").concat(a)},e[0]," - ",e[1])}))}))})),this.state.error&&r.a.createElement("div",{className:"view"},r.a.createElement("h1",null," Hubo un error con el servidor "))),a=r.a.createElement("div",null,r.a.createElement("div",{className:"loading"},r.a.createElement(B.ClipLoader,{sizeUnit:"px",size:300,color:"#123abc",loading:!0})),r.a.createElement("div",{className:"loading"},"Cargando servidor"));return this.state.loaded?t:a}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=a(233),F=r.a.createElement(V.a,{basename:"/ldaApi"},r.a.createElement("div",{className:"bgOverlay"},r.a.createElement(M,null)));l.a.render(F,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},88:function(e,t,a){e.exports=a(230)},93:function(e,t,a){},95:function(e,t,a){}},[[88,2,1]]]);
//# sourceMappingURL=main.01028e6c.chunk.js.map
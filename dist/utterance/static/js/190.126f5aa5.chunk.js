"use strict";(self.webpackChunkmturk=self.webpackChunkmturk||[]).push([[190],{9190:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});var s=n(8489),a=n(7853),i=n(4531),c=n(6148),r=n(8932),l=n(8128),o=n(2791),d=n(184),h=function(e){(0,r.Z)(n,e);var t=(0,l.Z)(n);function n(){return(0,a.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"render",value:function(){var e=this.props.onClickSkip;return(0,d.jsx)("div",{className:"home",children:(0,d.jsxs)("div",{className:"container",children:[(0,d.jsx)("div",{className:"row",children:(0,d.jsx)("div",{className:"col",children:(0,d.jsxs)("div",{className:"header text-center",children:[(0,d.jsx)("h1",{children:"Virtual Assistant++"}),(0,d.jsx)("h3",{children:(0,d.jsx)("span",{className:"bi bi-robot"})}),(0,d.jsx)("p",{children:"Your goal in this task is to write Complex Instructions to the perfect virtual assistant (better than Google assistant, Alexa or Siri)"})]})})}),(0,d.jsx)("div",{className:"row mb-5",children:(0,d.jsx)("div",{className:"col",children:(0,d.jsx)("div",{className:"mt-4 mb-4 d-grid gap-2 d-sm-flex justify-content-sm-center",children:(0,d.jsx)("button",{type:"button",className:"btn btn-primary btn-lg px-4",onClick:e,children:"Start"})})})})]})})}}]),n}(o.Component),m=function(e){(0,r.Z)(n,e);var t=(0,l.Z)(n);function n(){return(0,a.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"getRequirments",value:function(){return[{title:"Relevant",desc:"The different parts in your complex request should be related to one another. "},{title:"Can be done by a virtual assistant",desc:"Think of instructions that are possible for a virtual assistant to perform. As a rule of thumb, if a virtual assistant (like Siri or Alexa) can do each of the simple instructions that make the complex instruction, then it is valid."},{title:"Useful",desc:"Think about real-life scenarios where you could use this ideal virtual assistance in your favor."},{title:"Diverse",desc:"Don\u2019t repeat yourself. Think of instructions in different apps. "},{title:"Unambiguous",desc:"A person can clearly understand the intents within your instruction."}]}},{key:"render",value:function(){var e=this.getRequirments();return(0,d.jsxs)("div",{className:"instructions",children:[(0,d.jsx)("div",{className:"row",children:(0,d.jsx)("div",{className:"col",children:(0,d.jsxs)("div",{className:"header text-center",children:[(0,d.jsxs)("h1",{className:"text-center",children:[(0,d.jsx)("span",{className:"title-small",children:"Your task:"}),"Write Complex instructions"]}),(0,d.jsx)("p",{children:"Now, you think of something you can ask your virtual assistant that involves multiple apps (or the same app multiple times)."})]})})}),(0,d.jsx)("div",{className:"row",children:(0,d.jsxs)("div",{className:"col",children:[(0,d.jsx)("h3",{children:"Requirements"}),(0,d.jsx)("ol",{className:"requirements",children:e.map((function(e,t){return(0,d.jsxs)("li",{className:"requirement",children:[(0,d.jsx)("div",{className:"requirement-title bold",children:e.title}),(0,d.jsx)("div",{className:"requirement-desc",children:e.desc})]},t)}))})]})})]})}}]),n}(o.Component),u=function(e){(0,r.Z)(n,e);var t=(0,l.Z)(n);function n(){return(0,a.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"render",value:function(){var e=this.props,t=e.onClickNext,n=e.onClickBack;return(0,d.jsx)("div",{className:"instructions",children:(0,d.jsxs)("div",{className:"container",children:[(0,d.jsx)("div",{className:"row",children:(0,d.jsx)(m,{})}),(0,d.jsx)("div",{className:"row mb-3",children:(0,d.jsx)("div",{className:"col",children:(0,d.jsxs)("div",{className:"actions bottom mt-4 mb-4 d-grid gap-2 d-sm-flex justify-content-sm-center",children:[(0,d.jsx)("button",{type:"button",className:"btn btn-outline-secondary btn-lg px-4 gap-3",onClick:n,children:(0,d.jsx)("i",{className:"bi bi-chevron-left"})}),(0,d.jsx)("button",{type:"button",className:"btn btn-primary btn-lg px-4",onClick:t,children:(0,d.jsx)("i",{className:"bi bi-chevron-right"})})]})})})]})})}}]),n}(o.Component),p=n(2914),x=function(e){(0,r.Z)(n,e);var t=(0,l.Z)(n);function n(){return(0,a.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"renderAppsGrid",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,t=this.props.apps,n=[],s=0;s<t.length;s+=e)n.push((0,d.jsxs)("div",{className:"row",children:[(0,d.jsxs)("div",{className:"col-sm app",children:[(0,d.jsx)("div",{className:"app-icon text-center",children:(0,d.jsx)("span",{className:"bi bi-".concat(t[s].icon)})}),(0,d.jsx)("div",{className:"app-name text-center",children:t[s].name})]}),s+1<t.length&&(0,d.jsxs)("div",{className:"col-sm app",children:[(0,d.jsx)("div",{className:"app-icon text-center",children:(0,d.jsx)("span",{className:"bi bi-".concat(t[s+1].icon)})}),(0,d.jsx)("div",{className:"app-name text-center",children:t[s+1].name})]}),s+2<t.length&&(0,d.jsxs)("div",{className:"col-sm app",children:[(0,d.jsx)("div",{className:"app-icon text-center",children:(0,d.jsx)("span",{className:"bi bi-".concat(t[s+2].icon)})}),(0,d.jsx)("div",{className:"app-name text-center",children:t[s+2].name})]})]},s));return(0,d.jsx)("div",{className:"apps",children:n})}},{key:"render",value:function(){return(0,d.jsx)("div",{className:"smartphone",children:(0,d.jsx)("div",{className:"content",children:(0,d.jsx)("div",{className:"apps",children:(0,d.jsx)("div",{className:"container",children:this.renderAppsGrid()})})})})}}]),n}(o.Component),v=function(e){(0,r.Z)(n,e);var t=(0,l.Z)(n);function n(){return(0,a.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"getApps",value:function(){return[{name:"Map & Navigation",icon:"truck"},{name:"Weather",icon:"cloud-sun"},{name:"Calendar",icon:"calendar-date"},{name:"Reminders",icon:"bookmark"},{name:"Messages",icon:"chat"},{name:"Music & Podcasts",icon:"music-note-beamed"},{name:"Health",icon:"heart-pulse"},{name:"Mail",icon:"envelope"},{name:"Smart Home",icon:"house"},{name:"Events & Tickets",icon:"ticket-perforated"},{name:"Shopping",icon:"cart"},{name:"photos",icon:"camera"}]}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.description,s=e.examples,a=this.getApps();return(0,d.jsxs)("div",{className:"example",children:[(0,d.jsx)("div",{className:"row",children:(0,d.jsx)("div",{className:"col",children:(0,d.jsxs)("div",{className:"header text-center",children:[(0,d.jsx)("h1",{children:t}),(0,d.jsx)("div",{children:n})]})})}),(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{className:"col",children:(0,d.jsx)(x,{apps:a})}),(0,d.jsx)("div",{className:"col align-self-center",children:(0,d.jsx)("div",{className:"card card-block",children:(0,d.jsx)(p.Z,{variant:"dark",interval:"10000",children:s.map((function(e,t){return(0,d.jsx)(p.Z.Item,{className:"instruction-example positive-example",children:(0,d.jsx)("div",{className:"vertical-center-container",children:(0,d.jsxs)("div",{className:"vertical-center",children:[(0,d.jsx)("div",{className:"example-title utterance-text text-center",children:e.title}),e.caption&&(0,d.jsxs)("div",{className:"example-caption utterance-text text-center",children:[(0,d.jsx)("span",{className:"bi bi-".concat(a.find((function(t){return t.name===e.caption})).icon)}),e.caption,(0,d.jsx)("span",{})]})]})})},t)}))})})})]})]})}}]),n}(o.Component),k=function(e){(0,r.Z)(n,e);var t=(0,l.Z)(n);function n(){return(0,a.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"getTitle",value:function(){return"Simple instructions"}},{key:"getDescription",value:function(){return(0,d.jsxs)("p",{children:["You are given a mobile device with the following apps. You can ask your virtual assistant to perform ",(0,d.jsx)("span",{className:"bold",children:"Simple Instructions"})," using these apps."]})}},{key:"getExamples",value:function(){return[{title:"Remind me at 2 pm to call dad",caption:"Reminders"},{title:"Send a message to Louise and ask if I left my wallet in her car.",caption:"Messages"},{title:"If I leave Shakespeare in the Park at 6 pm, when will I get home?",caption:"Map & Navigation"},{title:"Is it going to snow through the spring in upstate new york?",caption:"Weather"}]}},{key:"render",value:function(){var e=this.props,t=e.onClickNext,n=e.onClickBack,s=this.getTitle(),a=this.getDescription(),i=this.getExamples();return(0,d.jsx)("div",{className:"simple",children:(0,d.jsxs)("div",{className:"container",children:[(0,d.jsx)(v,{title:s,description:a,examples:i,onClickNext:t,onClickBack:n}),(0,d.jsx)("div",{className:"row mb-3",children:(0,d.jsx)("div",{className:"col",children:(0,d.jsxs)("div",{className:"actions bottom mt-4 mb-4 d-grid gap-2 d-sm-flex justify-content-sm-center",children:[(0,d.jsx)("button",{type:"button",className:"btn btn-outline-secondary btn-lg px-4 gap-3",onClick:n,children:(0,d.jsx)("i",{className:"bi bi-chevron-left"})}),(0,d.jsx)("button",{type:"button",className:"btn btn-primary btn-lg px-4",onClick:t,children:(0,d.jsx)("i",{className:"bi bi-chevron-right"})})]})})})]})})}}]),n}(o.Component),j=function(e){(0,r.Z)(n,e);var t=(0,l.Z)(n);function n(){return(0,a.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"getTitle",value:function(){return"Complex instructions"}},{key:"getDescription",value:function(){return(0,d.jsxs)("p",{children:["A ",(0,d.jsx)("span",{className:"bold",children:"Complex Instruction"})," allows you to request multiple simple instructions in a single command from your virtual assistant. Instructions can be expressed in repetition, sequence and conditions."]})}},{key:"getExamples",value:function(){return[{title:"Text coach Nick that I will be late and ask Lauren if I left my keys in her car"},{title:"Is there a Coldplay concert in the park in July, August or September?"},{title:"Check my mail and my messages for any unread message from Dad from today"},{title:"Show me directions to the nearest pharmacy that is open now"}]}},{key:"render",value:function(){var e=this.props,t=e.onClickNext,n=e.onClickBack,s=this.getTitle(),a=this.getDescription(),i=this.getExamples();return(0,d.jsx)("div",{className:"simple",children:(0,d.jsxs)("div",{className:"container",children:[(0,d.jsx)(v,{title:s,description:a,examples:i,onClickNext:t,onClickBack:n}),(0,d.jsx)("div",{className:"row mb-3",children:(0,d.jsx)("div",{className:"col",children:(0,d.jsxs)("div",{className:"actions bottom mt-4 mb-4 d-grid gap-2 d-sm-flex justify-content-sm-center",children:[(0,d.jsx)("button",{type:"button",className:"btn btn-outline-secondary btn-lg px-4 gap-3",onClick:n,children:(0,d.jsx)("i",{className:"bi bi-chevron-left"})}),(0,d.jsx)("button",{type:"button",className:"btn btn-primary btn-lg px-4",onClick:t,children:(0,d.jsx)("i",{className:"bi bi-chevron-right"})})]})})})]})})}}]),n}(o.Component),b=n(9909),f=n(3360),N=function(e){return(0,d.jsxs)(b.Z,(0,s.Z)((0,s.Z)({},e),{},{size:"xl","aria-labelledby":"contained-modal-title-vcenter",animation:!1,centered:!0,children:[(0,d.jsx)(b.Z.Header,{children:(0,d.jsx)(b.Z.Title,{id:"contained-modal-title-vcenter",children:(0,d.jsx)("div",{className:"text-center",children:(0,d.jsx)("i",{className:"bi bi-life-preserver"})})})}),(0,d.jsx)(b.Z.Body,{children:(0,d.jsx)("div",{children:e.children})}),(0,d.jsx)(b.Z.Footer,{children:(0,d.jsx)(f.Z,{onClick:e.onHide,children:"Close"})})]}))},g=function(e){(0,r.Z)(n,e);var t=(0,l.Z)(n);function n(){return(0,a.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"render",value:function(){var e=this.props,t=e.show,n=e.onHide,s=e.children;return(0,d.jsx)("div",{className:"help",children:(0,d.jsx)(N,{show:t,onHide:n,children:s})})}}]),n}(o.Component),C=function(e){(0,r.Z)(n,e);var t=(0,l.Z)(n);function n(e){var s;(0,a.Z)(this,n),s=t.call(this,e);var i=e.utterance,r=e.context,l=e.contexts;return s.state={utterance:i,context:r||s.getRandomContext(l)},s.getApps=s.getApps.bind((0,c.Z)(s)),s.handleClickNext=s.handleClickNext.bind((0,c.Z)(s)),s.handleClickHelp=s.handleClickHelp.bind((0,c.Z)(s)),s.handleTextAreaChange=s.handleTextAreaChange.bind((0,c.Z)(s)),s.handleSwitchContextClick=s.handleSwitchContextClick.bind((0,c.Z)(s)),s}return(0,i.Z)(n,[{key:"componentDidUpdate",value:function(e,t){if(e.utterance!==this.props.utterance){var n=this.props.utterance;n=n||"",this.setState({utterance:n})}}},{key:"handleTextAreaChange",value:function(e){var t=this.props,n=t.index,s=t.utteranceLimit,a=t.disableTextOverflow,i=t.onUtteranceChange,c=this.state.context,r=e.target.value,l=!a||r.length<=s?r:this.state.utterance||"";this.setState({utterance:l}),i&&i(n,r,c)}},{key:"handleSwitchContextClick",value:function(){var e=this.props.contexts,t=this.getRandomContext(e);this.setState({context:t})}},{key:"getApps",value:function(){return[{name:"Map & Navigation",icon:"truck"},{name:"Weather",icon:"cloud-sun"},{name:"Calendar",icon:"calendar-date"},{name:"Reminders",icon:"bookmark"},{name:"Messages",icon:"chat"},{name:"Music & Podcasts",icon:"music-note-beamed"},{name:"Health",icon:"heart-pulse"},{name:"Mail",icon:"envelope"},{name:"Smart Home",icon:"house"},{name:"Events & Tickets",icon:"ticket-perforated"},{name:"Shopping",icon:"cart"},{name:"photos",icon:"camera"}]}},{key:"getRandomContext",value:function(e){var t=e[Math.floor(Math.random()*e.length)],n=this.props.onContextChange;return n&&n(t),t}},{key:"isUtteranceValid",value:function(){var e=this.props,t=e.conjunctionWords,n=e.utteranceLimit,s=this.state.utterance,a=t.reduce((function(e,t){return e.concat(t.verification||[t.display])}),[]),i=Boolean(s&&s.trim().length>0),c=Boolean(a&&a.length>0),r=i&&c&&a.filter((function(e){return-1!==s.toLowerCase().indexOf(e.trim().toLowerCase())})).length>0;return!i||s.split(" ").length<=2?(this.setState({valid:!1,errorMessage:(0,d.jsx)("span",{children:"Please be more creative."})}),!1):c&&!r?(this.setState({valid:!1,errorMessage:(0,d.jsxs)("span",{children:["Please use at least 1 of the following word: ",(0,d.jsx)("strong",{children:t.map((function(e){return e.display})).join(", ")}),"."]})}),!1):s.indexOf("?")>=0&&s.indexOf("?")<.5*s.length||s.trim().split("?").filter((function(e){return e.length>0})).length>1?(this.setState({valid:!1,errorMessage:(0,d.jsxs)("span",{children:["Please try to phrase the utterance as a ",(0,d.jsx)("strong",{children:"single"})," request (and not in multiple phrases)."]})}),!1):s.length>n?(this.setState({valid:!1,errorMessage:(0,d.jsx)("span",{children:"Your utterance is too long!"})}),!1):(this.setState({valid:!0}),!0)}},{key:"handleClickNext",value:function(e){e.preventDefault(),this.isUtteranceValid()&&this.props.onClickNext()}},{key:"handleClickHelp",value:function(e){this.setState({showHelp:!0})}},{key:"render",value:function(){var e=this,t=this.props,n=t.utteranceLimit,s=t.onClickBack,a=this.state,i=a.utterance,c=a.valid,r=a.errorMessage,l=a.showHelp,o=this.getApps();return l?(0,d.jsx)(g,{show:l,onHide:function(){return e.setState({showHelp:!1})},children:(0,d.jsx)(m,{})}):(0,d.jsxs)("div",{className:"utterance px-4 py-5 my-5",children:[(0,d.jsxs)("div",{className:"container",children:[(0,d.jsx)("div",{className:"row",children:(0,d.jsx)("div",{className:"col",children:(0,d.jsxs)("div",{className:"header text-center",children:[(0,d.jsxs)("h1",{className:"text-center",children:[(0,d.jsx)("span",{className:"title-small",children:"Your task:"}),"Write Complex instructions"]}),(0,d.jsx)("p",{children:"Follow the requirements and write a complex instruction to your virtual assistant. Use the following apps in your request."})]})})}),(0,d.jsxs)("div",{className:"row mt-3 mb-3",children:[(0,d.jsx)("div",{className:"col",children:(0,d.jsx)(x,{apps:o})}),(0,d.jsx)("div",{className:"col align-self-center",children:(0,d.jsxs)("div",{className:"card mt-4",children:[(0,d.jsx)("div",{className:"card-header",children:(0,d.jsxs)("h3",{className:"text-center",children:[(0,d.jsx)("span",{className:"intent-icon bi bi-keyboard"}),"Write here"]})}),(0,d.jsx)("div",{className:"card-body",children:(0,d.jsx)("div",{className:"row",children:(0,d.jsx)("div",{className:"col",children:(0,d.jsx)("form",{className:"g-3 needs-validation pt-1",onSubmit:this.handleSubmit,noValidate:!0,children:(0,d.jsxs)("div",{className:"has-validation",children:[(0,d.jsx)("label",{className:"form-label",style:{display:"none"},children:"Write a complex utterance"}),(0,d.jsx)("textarea",{className:"input-textarea utterance-text form-control mb-3 ".concat(!0===c?"is-valid":!1===c&&"is-invalid"),rows:"5",value:i,type:"text",id:"utterance","aria-describedby":"help",onChange:this.handleTextAreaChange,placeholder:"Type your complex utterance here...",required:!0}),(0,d.jsxs)("div",{className:"p-1 m-1",children:[(0,d.jsx)("span",{className:(i||"").length>n?"text-danger":"",children:(i||"").length})," / ",n]}),(0,d.jsx)("div",{className:"invalid-feedback",children:r})]})})})})})]})})]}),(0,d.jsx)("div",{className:"row mb-3",children:(0,d.jsx)("div",{className:"col",children:(0,d.jsxs)("div",{className:"actions bottom mt-4 d-grid gap-2 d-sm-flex justify-content-sm-center",children:[(0,d.jsx)("button",{type:"button",className:"btn btn-outline-secondary btn-lg px-4 gap-3",onClick:s,children:(0,d.jsx)("i",{className:"bi bi-chevron-left"})}),(0,d.jsx)("button",{type:"button",className:"btn btn-primary btn-lg px-4",onClick:this.handleClickNext,children:(0,d.jsx)("i",{className:"bi bi-chevron-right"})})]})})})]}),(0,d.jsx)("div",{className:"actions float",children:(0,d.jsxs)("button",{type:"button",className:"btn btn-outline-secondary btn-lg px-4 gap-3",onClick:this.handleClickHelp,children:[(0,d.jsx)("i",{className:"bi bi-life-preserver"}),"Help"]})})]})}}]),n}(o.Component),y=function(e){(0,r.Z)(n,e);var t=(0,l.Z)(n);function n(e){var s;return(0,a.Z)(this,n),(s=t.call(this,e)).state={feedback:""},s.handleSubmit=s.handleSubmit.bind((0,c.Z)(s)),s.handleClickBack=s.handleClickBack.bind((0,c.Z)(s)),s.handleTextAreaChange=s.handleTextAreaChange.bind((0,c.Z)(s)),s}return(0,i.Z)(n,[{key:"handleTextAreaChange",value:function(e){var t=this.props.onFeedbackChange,n=e.target.value;this.setState({feedback:n}),t&&t(n)}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.feedback;this.props.onSubmit(t)}},{key:"handleClickBack",value:function(e){e.preventDefault(),this.props.onClickBack()}},{key:"render",value:function(){var e=this.state.feedback;return(0,d.jsx)("div",{className:"thank-you",children:(0,d.jsxs)("div",{className:"container",children:[(0,d.jsx)("div",{className:"row",children:(0,d.jsx)("div",{className:"col",children:(0,d.jsx)("h2",{className:"text-muted text-center mb-3",children:"Thank You."})})}),(0,d.jsx)("div",{className:"row mt-3 mb-3",children:(0,d.jsx)("div",{className:"col",children:(0,d.jsxs)("div",{className:"card mt-4",children:[(0,d.jsx)("div",{className:"card-header",children:(0,d.jsxs)("h4",{className:"text-center",children:[(0,d.jsx)("span",{className:"intent-icon bi bi-megaphone"}),"Have any feedback?"]})}),(0,d.jsx)("div",{className:"card-body",children:(0,d.jsx)("div",{className:"row",children:(0,d.jsx)("div",{className:"col",children:(0,d.jsx)("form",{className:"g-3 needs-validation pt-1",onSubmit:this.handleSubmit,noValidate:!0,children:(0,d.jsx)("div",{className:"has-validation",children:(0,d.jsx)("textarea",{className:"feedback-textarea form-control mb-3",rows:"3",value:e,type:"text",id:"feedback-text","aria-describedby":"help",onChange:this.handleTextAreaChange,placeholder:"Enter your feedback here...",required:!0})})})})})})]})})}),(0,d.jsx)("div",{className:"row",children:(0,d.jsx)("div",{className:"col",children:(0,d.jsxs)("div",{className:"mt-4 d-grid gap-2 d-sm-flex justify-content-sm-center",children:[(0,d.jsx)("button",{type:"button",className:"btn btn-outline-secondary btn-lg px-4 gap-3",onClick:this.handleClickBack,children:(0,d.jsx)("i",{className:"bi bi-chevron-left"})}),(0,d.jsx)("button",{type:"button",className:"btn btn-primary btn-lg px-4",onClick:this.handleSubmit,children:"Finish"})]})})})]})})}}]),n}(o.Component),w=1,S=2,Z=3,I=4,B=5,T=6,A=function(e){(0,r.Z)(n,e);var t=(0,l.Z)(n);function n(e){var s;(0,a.Z)(this,n),s=t.call(this,e);var i=e.intents,r=e.constraints;return s.state={index:0,currentScreen:w,intentsSelections:i&&new Array(i.length),constraintsSelections:r&&new Array(r.length),workerResponses:[]},s.handleClickBack=s.handleClickBack.bind((0,c.Z)(s)),s.handleClickNext=s.handleClickNext.bind((0,c.Z)(s)),s.handleClickHelp=s.handleClickHelp.bind((0,c.Z)(s)),s.handleFeedbackChange=s.handleFeedbackChange.bind((0,c.Z)(s)),s.handleUtteranceChange=s.handleUtteranceChange.bind((0,c.Z)(s)),s.handleSelectIntent=s.handleSelectIntent.bind((0,c.Z)(s)),s.handleSelectConstraint=s.handleSelectConstraint.bind((0,c.Z)(s)),s.handleSelection=s.handleSelection.bind((0,c.Z)(s)),s}return(0,i.Z)(n,[{key:"submitToMTurk",value:function(){var e=this.props,t=e.intents,n=e.constraints,s=this.state,a=s.workerResponses,i=s.feedback,c=[],r=function(e){var s=a[e],i=s.utterance,r=s.context,l=s.selectedIntents,o=s.selectedConstraints,d=s.intentsSelections,h=s.constraintsSelections,m=l&&l.map((function(e){return t[e]})).join(" | "),u=o&&o.map((function(e){return n[e]})).join(" | "),p=l&&l.map((function(e,t){return i.substring(d[t][0],d[t][1])})).join(" | "),x=o&&o.map((function(e,t){return i.substring(h[t][0],h[t][1])})).join(" | "),v={utterance:i,context:r,intents:m,constraints:u,intentsAnnotations:p,constraintsAnnotations:x};c.push(v)};for(var l in a)r(l);var o=i;document.querySelector("crowd-form").onsubmit=function(){document.getElementById("worker-responses")&&(document.getElementById("worker-responses").value=JSON.stringify(c),document.getElementById("worker-feedback").value=o)},document.querySelector("crowd-form").submit()}},{key:"handleClickNext",value:function(){var e=this.state.currentScreen;if(e===T)this.submitToMTurk(this.state);else{var t=e+1;this.setState({currentScreen:t})}window.scrollTo(0,0)}},{key:"handleClickBack",value:function(){var e=this.state.currentScreen;if(e!==w){var t=e-1;this.setState({currentScreen:t})}window.scrollTo(0,0)}},{key:"handleClickHelp",value:function(){this.setState({showHelp:!0})}},{key:"handleFeedbackChange",value:function(e){this.setState({feedback:e})}},{key:"handleUtteranceChange",value:function(e,t,n){var a=this.state.workerResponses;a[e]=(0,s.Z)((0,s.Z)({},a[e]),{utterance:t,context:n,intentsSelections:[],constraintsSelections:[]}),this.setState({workerResponses:a})}},{key:"handleSelectIntent",value:function(e,t){var n=this.state.workerResponses;n[e]=(0,s.Z)((0,s.Z)({},n[e]),{selectedIntents:t,intentsSelections:[]}),this.setState({workerResponses:n})}},{key:"handleSelectConstraint",value:function(e,t){var n=this.state.workerResponses;n[e]=(0,s.Z)((0,s.Z)({},n[e]),{selectedConstraints:t,constraintsSelections:[]}),this.setState({workerResponses:n})}},{key:"handleSelection",value:function(e,t,n,a){var i=this.state.workerResponses;i[e]=(0,s.Z)((0,s.Z)({},i[e]),{intentsSelections:t,constraintsSelections:n,currentSelectionIndex:a}),this.setState({workerResponses:i})}},{key:"getDisplayedScreen",value:function(){var e=this.props,t=e.maxUtterances,n=e.contexts,s=e.maxLength,a=e.maxLengthPerIntent,i=e.minIntents,c=e.minConstraints,r=e.intents,l=e.constraints,o=e.conjunctionWords,m=e.minConjunctionWords,p=this.state,x=p.currentScreen,v=p.index,b=p.workerResponses,f=b.length>v?b[v]:{},N=f.utterance,g=f.context,A=s||a*r.length||250;return x===w?(0,d.jsx)(h,{onClickExample:this.handleClickHelp,onClickSkip:this.handleClickNext}):x===S?(0,d.jsx)(k,{onClickBack:this.handleClickBack,onClickNext:this.handleClickNext}):x===Z?(0,d.jsx)(j,{onClickBack:this.handleClickBack,onClickNext:this.handleClickNext}):x===I?(0,d.jsx)(u,{onClickBack:this.handleClickBack,onClickNext:this.handleClickNext}):x===B?(0,d.jsx)(C,{index:v,maxUtterances:t,utterance:N,utteranceLimit:A,minIntents:i,minConstraints:c,intents:r,constraints:l,conjunctionWords:o,minConjunctionWords:m,contexts:n,context:g,onUtteranceChange:this.handleUtteranceChange,onClickBack:this.handleClickBack,onClickHelp:this.handleClickHelp,onClickNext:this.handleClickNext}):x===T?(0,d.jsx)(y,{onFeedbackChange:this.handleFeedbackChange,onSubmit:this.handleClickNext,onClickBack:this.handleClickBack}):void 0}},{key:"render",value:function(){var e=this.getDisplayedScreen();return(0,d.jsx)("div",{className:"app",children:(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("main",{children:e})})})}}]),n}(o.Component),H=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"root",n=document.getElementById(t).getAttribute(e);return n&&!n.startsWith("${")?n:null},M=H("data-id"),R=H("data-max-utterances")?parseInt(H("data-max-utterances")):1,q=H("data-context"),W=H("data-contexts")?H("data-contexts").split("|").map((function(e){return e.trim()})):[],U=H("data-min-intents")&&parseInt(H("data-min-intents")),D=H("data-min-constraints")&&parseInt(H("data-min-constraints")),E=H("data-conjunction-words")?H("data-conjunction-words").split("|").map((function(e){return{display:e.trim().split(":")[0],verification:e.trim().split(":")[1].split(",")}})):[],L=H("min-conjunction-words")&&parseInt(H("min-conjunction-words")),F=H("data-quantifiers")?H("data-quantifiers").split("|").map((function(e){return e.trim()})):[],P=H("data-max-length")&&parseInt(H("data-max-length")),Y=H("data-max-length-per-intent")&&parseInt(H("data-max-length-per-intent")),O=[{name:"General knowledge",icon:"google"},{name:"Weather",icon:"cloud-sun"},{name:"Reminders",icon:"bookmark"},{name:"Calendar",icon:"calendar-date"},{name:"Events & Tickets",icon:"ticket-perforated"},{name:"Mail",icon:"envelope"},{name:"Messages",icon:"chat"},{name:"Map & Navigation",icon:"truck"},{name:"Shopping",icon:"cart"},{name:"Music & Podcasts",icon:"music-note-beamed"},{name:"Smart Home",icon:"house"},{name:"Health & Nutrition",icon:"heart-pulse"}],V=[],G=function(){return(0,d.jsx)("div",{className:"utterances",children:(0,d.jsx)(A,{id:M,context:q,contexts:W,maxUtterances:R,intents:O,minIntents:U,constraints:V,minConstraints:D,conjunctionWords:E,minConjunctionWords:L,linkWordIdx:null,quantifiers:F,quantifierIdx:null,maxLength:P,maxLengthPerIntent:Y})})}}}]);
//# sourceMappingURL=190.126f5aa5.chunk.js.map
!function(t){var e={};function r(s){if(e[s])return e[s].exports;var o=e[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(s,o,function(e){return t[e]}.bind(null,o));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=2)}({13:function(t,e){},2:function(t,e,r){"use strict";r.r(e),r(13),$(()=>{(new class{constructor(){this.$con=$(".container"),this.$title=$(".h3"),this.$name=$(".name"),this.$stuID=$(".stuID"),this.$major=$(".major"),this.$questionCh=$(".question-ch"),this.$papers=$(".papers"),this.$score=$(".score"),this.$submit=$(".btn")}init(){this.render(),this.submit()}render(){$.post("/api/showDetail",`email=${localStorage.getItem("stuEmail")}&id=${localStorage.getItem("id")}`).then(t=>{if((t=JSON.parse(t)).success){const e=t.data;this.$title.text(e.title),this.$name.text(e.name),this.$stuID.text(e.stuID),this.$major.text(e.major),this.$questionCh.text("选择题得分："+e.chScore),this.$score.text(e.chScore),this.createQuestion(e.answers),this.score()}}).catch(t=>{})}createQuestion(t){const e=t.length;for(let r=0;r<e;r++){let e=$("<div>").addClass("question").append($("<div>").addClass("q-title").text(t[r].title),$("<textarea>").addClass("form-control").attr({cols:20,rows:4,disabled:!0}).css({resize:"none"}).text(t[r].answer),$("<div>").append($("<input>").addClass("form-control set-score").attr({type:"text",placeholder:`评分，满分 ${t[r].score} 分`})));this.$papers.append(e)}}score(){let t=this,e=$(".set-score").toArray();for(let r=0;r<e.length;r++)$(e[r]).on("blur",r=>{let s=t.$questionCh.text(),o=parseInt(s.slice(6));for(let t=0;t<e.length;t++)o+=Number($(e[t]).val());t.$score.text(o)})}submit(){this.$submit.on("click",t=>{t.preventDefault(),$.post("/api/submitScore",`score=${this.$score.text()}&&email=${localStorage.getItem("stuEmail")}&id=${localStorage.getItem("id")}`).then(t=>{(t=JSON.parse(t)).success&&(alert("完成批阅"),login.assgin("/admin.html"))}).catch(t=>{})})}}).init()})}});
//# sourceMappingURL=exam_detail.bundle.js.map
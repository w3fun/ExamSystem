!function(t){var e={};function i(a){if(e[a])return e[a].exports;var o=e[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(a,o,function(e){return t[e]}.bind(null,o));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}({0:function(t,e,i){"use strict";i.r(e),i(6),$(document).ready(function(){(new class{constructor(){this.$navTab=$(".navbar-nav"),this.$conTab=$(".con-item"),this.$moreBtn=$(".btn-more"),this.$moreBlock=$(".more"),this.$list=$(".list-group"),this.$listCon=$(".list-con"),this.$examTitle=$("#chooseTitle"),this.$examType=$("#chooseType"),this.$examYear=$("#chooseYear"),this.$examMonth=$("#chooseMonth"),this.$examDay=$("#chooseDay"),this.$examTime=$("#chooseTime"),this.$examLoc=$("#chooseLoc"),this.$basicBtn=$("#basicBtn"),this.$qTitle=$("#questionDesc"),this.$qType=$("#questionType"),this.$qScore=$("#questionScore"),this.$qChoice=$(".questionChoice"),this.$qBtn=$(".questionBtn"),this.$examInfo=$(".exam-info"),this.$submit=$(".btn-submit"),this.exam={basic:null,question:[]}}init(){this.tab(),this.getMore(),this.listTab(),this.basicBtnClick(),this.qBtnClick(),this.submit()}tab(){this.$navTab.on("click",t=>{t.preventDefault();const e=$(t.target),i=e.index(".nav-link");2!==i&&(this.$navTab.children().toArray().map(t=>$(t).children()).forEach(t=>{$(t).hasClass("active")&&$(t).removeClass("active")}),e.addClass("active"),this.$conTab.toArray().forEach((t,e)=>{$(t).hide(),i===e&&$(t).show()}))})}getMore(){this.$moreBtn.toArray().forEach((t,e)=>{0===e?$(t).on("click",t=>{t.preventDefault();const e=$(t.target).parent().find(".card-title");this.$moreBlock.find(".h4").text(e.text()),this.$moreBlock.hide(),$.get("/api/examed_detail").done(t=>{const e=(t=JSON.parse(t)).data;t.ret&&e&&Highcharts.chart("more-content",e)}),this.$moreBlock.show()}):1===e?$(t).on("click",t=>{t.preventDefault();const e=$(t.target).parent().find(".card-title");this.$moreBlock.find(".h4").text(e.text()),this.$moreBlock.hide(),$.get("/api/exam_sign_detail").done(t=>{const e=(t=JSON.parse(t)).data;t.ret&&e&&Highcharts.chart("more-content",e)}),this.$moreBlock.show()}):$(t).on("click",t=>{t.preventDefault();const e=$(t.target).parent().find(".card-title");this.$moreBlock.find(".h4").text(e.text()),this.$moreBlock.hide(),$.get("/api/exam_categroy").done(t=>{const e=(t=JSON.parse(t)).data;t.ret&&e&&Highcharts.chart("more-content",e)}),this.$moreBlock.show()})})}listTab(){this.$list.on("click",t=>{t.preventDefault();const e=$(t.target),i=e.index();this.$list.children().toArray().forEach(t=>{$(t).hasClass("active")&&$(t).removeClass("active")}),e.addClass("active"),this.$listCon.toArray().forEach((t,e)=>{$(t).hide(),i===e&&$(t).show()})})}basicBtnClick(){this.$basicBtn.on("click",t=>{t.preventDefault(),this.exam.basic={title:this.$examTitle.val(),type:this.$examType.val(),date:`${this.$examYear.val()}/${this.$examMonth.val()}/${this.$examDay.val()}`,time:this.$examTime.val(),loc:this.$examLoc.val()},alert("提交成功"),this.clear()})}qBtnClick(){this.$qBtn.on("click",t=>{t.preventDefault();let e=this.$qType.val();e="单选"===e?"radio":"多选"===e?"checkbox":"other",this.exam.question.push({title:this.$qTitle.val(),type:e,score:this.$qScore.val(),choice:this.$qChoice.toArray().map(t=>$(t).val())}),console.log(this.exam),this.renderExamInfo(),alert("添加成功"),this.clear()})}renderExamInfo(){let t=0,e=this.exam.question.length;for(let i=0;i<e;i++)t+=parseInt(this.exam.question[i].score);let i=[`试卷名称：${this.exam.basic.title}`,`考试时间：${this.exam.basic.date} ${this.exam.basic.time}`,`考试地点：${this.exam.basic.loc}`,`试题数量：${e}`,`试题总分：${t}`];this.$examInfo.children().toArray().forEach((t,e)=>{$(t).text(i[e])})}clear(){$(".qform").find("input").toArray().forEach(t=>{$(t).val("")}),$(".qform").find("select").toArray().forEach(t=>{$(t).children().toArray().forEach((t,e)=>{$(t).attr("selected")&&$(t).removeAttr("selected"),0===e&&$(t).attr("selected","true")})})}submit(){this.exam.basic&&this.exam.question.length&&(this.$submit.removeClass("disabled").removeAttr("disabled"),this.$submit.on("click",t=>{t.preventDefault(),$.post("/api/exam_add",JSON.stringify(this.exam)).done(t=>{(t=JSON.parse(t)).ret&&"OK"===t.data.status&&alert("提交成功")})}))}}).init()})},6:function(t,e){}});
//# sourceMappingURL=admin.bundle.js.map
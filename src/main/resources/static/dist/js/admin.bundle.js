!function(t){var e={};function a(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=e,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(i,s,function(e){return t[e]}.bind(null,s));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=4)}({16:function(t,e){},4:function(t,e,a){"use strict";a.r(e),a(16),$(document).ready(function(){(new class{constructor(){this.$navTab=$(".navbar-nav"),this.$conTab=$(".con-item"),this.$moreBtn=$(".btn-more"),this.$moreBlock=$(".more"),this.$list=$(".list-group"),this.$listCon=$(".list-con"),this.$examTitle=$("#chooseTitle"),this.$examType=$("#chooseType"),this.$examYear=$("#chooseYear"),this.$examMonth=$("#chooseMonth"),this.$examDay=$("#chooseDay"),this.$examTime=$("#chooseTime"),this.$examLoc=$("#chooseLoc"),this.$basicBtn=$("#basicBtn"),this.$qTitle=$("#questionDesc"),this.$qType=$("#questionType"),this.$qScore=$("#questionScore"),this.$qChoice=$(".questionChoice"),this.$qAnswer=$("#choiceanswer"),this.$qBtn=$(".questionBtn"),this.$examInfo=$(".exam-info"),this.$submit=$(".btn-submit"),this.$pReading=$(".examd-papers .reading"),this.$pReaded=$(".examd-papers .readed"),this.$sReading=$(".examd-student .reading"),this.$sReaded=$(".examd-student .readed"),this.$logout=$("#logout"),this.exam={basic:null,question:[]}}init(){this.tab(),this.getMore(),this.listTab(),this.basicBtnClick(),this.qBtnClick(),this.submit(),this.renderExamResult(),this.logout()}tab(){this.$navTab.on("click",t=>{t.preventDefault();const e=$(t.target),a=e.index(".nav-link");2!==a&&(this.$navTab.children().toArray().map(t=>$(t).children()).forEach(t=>{$(t).hasClass("active")&&$(t).removeClass("active")}),e.addClass("active"),this.$conTab.toArray().forEach((t,e)=>{$(t).hide(),a===e&&$(t).show()}))})}getMore(){this.$moreBtn.toArray().forEach((t,e)=>{0===e?$(t).on("click",t=>{t.preventDefault();const e=$(t.target).parent().find(".card-title");this.$moreBlock.find(".h4").text(e.text()),this.$moreBlock.hide(),$.get("/api/examed_detail").done(t=>{const e=(t=JSON.parse(t)).data;t.ret&&e&&Highcharts.chart("more-content",e)}),this.$moreBlock.show()}):1===e?$(t).on("click",t=>{t.preventDefault();const e=$(t.target).parent().find(".card-title");this.$moreBlock.find(".h4").text(e.text()),this.$moreBlock.hide(),$.get("/api/exam_sign_detail").done(t=>{const e=(t=JSON.parse(t)).data;t.ret&&e&&Highcharts.chart("more-content",e)}),this.$moreBlock.show()}):$(t).on("click",t=>{t.preventDefault();const e=$(t.target).parent().find(".card-title");this.$moreBlock.find(".h4").text(e.text()),this.$moreBlock.hide(),$.get("/api/exam_categroy").done(t=>{const e=(t=JSON.parse(t)).data;t.ret&&e&&Highcharts.chart("more-content",e)}),this.$moreBlock.show()})})}listTab(){this.$list.on("click",t=>{t.preventDefault();const e=$(t.target),a=e.index();this.$list.children().toArray().forEach(t=>{$(t).hasClass("active")&&$(t).removeClass("active")}),e.addClass("active"),this.$listCon.toArray().forEach((t,e)=>{$(t).hide(),a===e&&$(t).show()})})}basicBtnClick(){this.$basicBtn.on("click",t=>{t.preventDefault(),this.exam.basic={describe:this.$examTitle.val(),type:this.$examType.val(),date:`${this.$examYear.val()}/${this.$examMonth.val()}/${this.$examDay.val()}`,time:this.$examTime.val(),location:this.$examLoc.val()};const e=this.exam.basic.time,a=parseInt(e.slice(0,2))-2+e.slice(2,5);this.exam.basic.deadline=a,alert("提交成功"),this.clear()})}qBtnClick(){this.$qBtn.on("click",t=>{t.preventDefault();let e=this.$qType.val();e="单选"===e?"radio":"多选"===e?"checkbox":"other",this.exam.question.push({describe:this.$qTitle.val(),type:e,score:this.$qScore.val(),content:this.$qChoice.toArray().map(t=>$(t).val()),answer:this.$qAnswer.val()}),console.log(this.exam),this.renderExamInfo(),alert("添加成功"),this.clear()})}renderExamInfo(){let t=0,e=this.exam.question.length;for(let a=0;a<e;a++)t+=parseInt(this.exam.question[a].score);let a=[`试卷名称：${this.exam.basic.describe}`,`考试时间：${this.exam.basic.date} ${this.exam.basic.time}`,`考试地点：${this.exam.basic.location}`,`试题数量：${e}`,`试题总分：${t}`];this.$examInfo.children().toArray().forEach((t,e)=>{$(t).text(a[e])})}clear(){$(".qform").find("input").toArray().forEach(t=>{$(t).val("")}),$(".qform").find("select").toArray().forEach(t=>{$(t).children().toArray().forEach((t,e)=>{$(t).attr("selected")&&$(t).removeAttr("selected"),0===e&&$(t).attr("selected","true")})})}submit(){this.$submit.on("click",t=>{console.log(JSON.stringify(this.exam));let e=`${`basic=${JSON.stringify(this.exam.basic)}`}&&${`questions=${JSON.stringify(this.exam.question)}`}`;console.log(e),t.preventDefault(),$.ajax({type:"POST",url:"/api/exam_add",data:e}).done(t=>{t=JSON.parse(t),console.log(t),t.ret&&"OK"===t.data.status&&alert("提交成功")})})}renderExamResult(){$.get("/api/showPapers").then(t=>{if((t=JSON.parse(t)).success){const e=t.readed,a=t.reading,i=document.createDocumentFragment();e.forEach(t=>{let e=$("<li>").addClass("readed-item").text(t.title).attr("title",t.id);$(i).append(e)}),this.$pReaded.append(i);const s=document.createDocumentFragment();a.forEach(t=>{let e=$("<li>").addClass("reading-item").text(t.title).attr("title",t.id);$(s).append(e)}),this.$pReading.append(s),this.handlePapersItemClick()}}).catch(t=>{})}handlePapersItemClick(){this.$pReaded.on("click",t=>{const e=$(t.target).attr("title");$.post("/api/showPStu",`id=${e}`).then(t=>{if(t=JSON.parse(t),console.log(t),t.success){const a=t.data,i=a.filter(t=>"readed"===t.status),s=a.filter(t=>"reading"===t.status),o=document.createDocumentFragment();i.forEach(t=>{let a=$("<li>").text(t.name).attr({"data-email":t.stuEmail,"data-paperId":e});$(o).append(a)}),this.$sReaded.append(o);const n=document.createDocumentFragment();s.forEach(t=>{let a=$("<li>").text(t.name).attr({"data-email":t.stuEmail,"data-paperId":e});$(n).append(a)}),this.$sReading.append(n)}}).catch(t=>{})}),this.$pReading.on("click",t=>{const e=$(t.target).attr("title");$.post("/api/showPStu",`id=${e}`).then(t=>{if((t=JSON.parse(t)).success){const a=t.data,i=a.filter(t=>"readed"===t.status),s=a.filter(t=>"reading"===t.status),o=document.createDocumentFragment();i.forEach(t=>{let a=$("<li>").text(t.name).attr({"data-email":t.stuEmail,"data-paperId":e});$(o).append(a)}),this.$sReaded.append(o);const n=document.createDocumentFragment();s.forEach(t=>{let a=$("<li>").text(t.name).attr({"data-email":t.stuEmail,"data-paperId":e});$(n).append(a)}),this.$sReading.append(n)}}).catch(t=>{})}),this.handleStuItemClick()}handleStuItemClick(){this.$sReaded.on("click",t=>{const e=$(t.target),a=e.attr("data-email"),i=e.attr("data-paperId");localStorage.setItem("stuEmail",a),localStorage.setItem("id",i),location.assign("/exam-detail.html")}),this.$sReading.on("click",t=>{const e=$(t.target),a=e.attr("data-email"),i=e.attr("data-paperId");localStorage.setItem("stuEmail",a),localStorage.setItem("id",i),location.assign("/exam_detail.html")})}logout(){this.$logout.on("click",()=>{$.get("/api/logout").then(t=>{alert("您已退出登录"),location.assign("/login")}).fail(t=>{})})}}).init()})}});
//# sourceMappingURL=admin.bundle.js.map
!function(t){var e={};function a(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=7)}({23:function(t,e){},7:function(t,e,a){"use strict";a.r(e),a(23),$(document).ready(function(){$.ajaxSetup({timeout:2e3}),(new class{constructor(){this.$avator=$("#avator"),this.$logout=$("#logout"),this.$examListForSign=$("#examListForSign"),this.$noExam=this.$examListForSign.find(".no-exam")}init(){this.getUser(),this.getExamList(),this.logout()}getUser(){$.get("/api/userinfo").then(t=>{const e=(t=JSON.parse(t)).data.username;t.ret&&e?this.$avator.text(e):this.$avator.text("游客")}).fail(t=>{this.$avator.text("游客")})}getExamList(){$.get("/api/exam_list_for_sign").then(t=>{const e=(t=JSON.parse(t)).data;if(t.ret&&e){this.$noExam.text("");const t=e.length;for(let a=0;a<t;a++)this.createCard(e[a])}else this.$noExam.text("暂无考试")}).fail(t=>{this.$noExam.text("暂无考试")})}logout(){this.$logout.on("click",()=>{$.get("/api/logout").then(t=>{alert("您已退出登录"),location.assign("/login")}).fail(t=>{})})}createCard(t){let e=$("<h4>").addClass("card-title").text(t.name),a=[$("<p>").addClass("card-text").text("考试时间："+t.date),$("<p>").addClass("card-text").text("报名截止："+t.deadline),$("<p>").addClass("card-text").text("考试地点："+t.location)],n=$("<button>").addClass("btn btn-sm btn-primary").attr("type","button").text("点击报名").val(t.token);t.isSigned&&n.addClass("disabled").attr("disabled","disabled").text("已报名"),n.on("click",t=>{t.preventDefault(),$.post("/api/user_sign_for_exam",{token:n.val()}).then(t=>{const e=(t=JSON.parse(t)).data;t.ret&&"OK"===e.status&&n.addClass("disabled").attr("disabled","disabled").text("已报名")})});let i=$("<div>").addClass("card-body");i.append(e).append(a[0]).append(a[1]).append(a[2]).append(n),this.$examListForSign.append($("<div>").addClass("col-4").append($("<div>").addClass("card").width("100%").append(i)))}}).init()})}});
//# sourceMappingURL=funExam.bundle.js.map
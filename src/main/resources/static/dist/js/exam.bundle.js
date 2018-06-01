!function(t){var e={};function a(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=1)}({1:function(t,e,a){"use strict";a.r(e),a(8),$(document).ready(function(){(new class{constructor(){this.$type=$(".hzone-type"),this.$time=$(".hzone-time"),this.$content=$(".content"),this.$form=$("<form>").addClass("exam-form"),this.$describe=$(".content-describe"),this.$submitAhead=$("<button>").addClass("btn btn-danger btn-sm btn-ahead").attr({"data-toggle":"modal","data-target":"#submitAlert"}).text("提前交卷"),this.$next=$("<button>").addClass("btn btn-primary btn-sm btn-next").text("下一题"),this.$items=$("<ul>").addClass("answer-items"),this.$confirmSubmit=$("#confirmSubmit"),this.current=0,this.result=[]}init(){this.renderInit(),this.nextItem(),this.aheadSubmit(),this.itemNav(),this.submit()}renderInit(){$.get("/api/exam").then(t=>{t=JSON.parse(t),console.log(t.ret);const e=t.data;t.ret&&e&&("radio"===e[0].type&&this.$type.text("单选"),this.describeInit(e[0].describe),this.contentInit(e[0].type,e[0].content),this.btnInit(),this.itemsInit(e.length),localStorage.setItem("exam",JSON.stringify(e)))}).then(()=>{})}contentInit(t,e){switch(t){case"radio":this.radioInit(e),this.$content.append(this.$form);break;case"checkbox":this.checkboxInit(e),this.$content.append(this.$form);break;default:this.defaultInit(e)}}itemsInit(t){for(let e=0;e<t;e++)0===e?this.$items.append($("<li>").addClass("answer-item active").text(e+1)):this.$items.append($("<li>").addClass("answer-item").text(e+1));$(".answer-card").append(this.$items)}btnInit(){this.$form.append($("<div>").addClass("text-right").append(this.$submitAhead,this.$next))}radioInit(t){for(let e=0,a=t.length;e<a;e++)this.$form.append($("<div>").addClass("custom-control custom-radio content-box").append($("<input>").addClass("custom-control-input").attr({type:"radio",name:"exam-radio",id:`exam-radio${e}`}),$("<label>").addClass("custom-control-label").attr("for",`exam-radio${e}`).text(t[e])))}checkboxInit(t){for(let e=0,a=t.length;e<a;e++)this.$form.append($("<div>").addClass("custom-control custom-checkbox content-box").append($("<input>").addClass("custom-control-input").attr({type:"checkbox",name:"exam-checkbox",id:`exam-checkbox${e}`}),$("<label>").addClass("custom-control-label").attr("for",`exam-checkbox${e}`).text(t[e])))}defaultInit(){this.$form.append($('<textarea col="50" raw="20">').addClass("content-box"))}describeInit(t){$(".content-describe").text(t)}nextItem(){this.$next.on("click",t=>{t.preventDefault(),this.save();const e=++this.current,a=JSON.parse(localStorage.getItem("exam"));if(a.length,e<a.length){e===a.length-1&&this.$next.text("完成并交卷");let t=a[e].type;"radio"===t?this.$type.text("单选"):"checkbox"===t?this.$type.text("多选"):this.$type.text("简答"),this.$describe.text(a[e].describe),this.replaceContent(a[e].type,a[e].content),this.$items.children().toArray().forEach((t,a)=>{$(t).hasClass("active")&&$(t).removeClass("active"),a===e&&$(t).addClass("active")})}else this.$next.attr({"data-toggle":"modal","data-target":"#submitAlert"}),this.isComplete()})}replaceContent(t,e){switch(this.$form.find("div.content-box").remove(),t){case"radio":this.replaceRadio(e);break;case"checkbox":this.replaceCheckbox(e);break;default:this.replaceDefault(e)}}replaceRadio(t){for(let e=t.length-1;e>=0;e--)this.$form.prepend($("<div>").addClass("custom-control custom-radio content-box").append($("<input>").addClass("custom-control-input").attr({type:"radio",name:"exam-radio",id:`exam-radio${e}`}),$("<label>").addClass("custom-control-label").attr("for",`exam-radio${e}`).text(t[e])))}replaceCheckbox(t){for(let e=t.length-1;e>=0;e--)this.$form.prepend($("<div>").addClass("custom-control custom-checkbox content-box").append($("<input>").addClass("custom-control-input").attr({type:"checkbox",name:"exam-checkbox",id:`exam-checkbox${e}`}),$("<label>").addClass("custom-control-label").attr("for",`exam-checkbox${e}`).text(t[e])))}replaceDefault(t){this.$form.prepend($("<div>").addClass("content-box").append($("<textarea>")))}aheadSubmit(){this.$submitAhead.on("click",t=>{t.preventDefault(),this.isComplete()})}itemNav(){this.$items.on("click",t=>{this.save();let e=$(t.target),a=e.index();this.$items.children().toArray().forEach(t=>{$(t).hasClass("active")&&$(t).removeClass("active")}),e.addClass("active"),this.current=a;const n=JSON.parse(localStorage.getItem("exam"));n.length,a===n.length-1?this.$next.text("完成并交卷"):this.$next.text("下一题"),this.$describe.text(n[a].describe),this.replaceContent(n[a].type,n[a].content),this.recover()})}save(){let t,e=$(".content-box").find("input"),a=$(".content-box").find("textarea"),n="",i=65;e.length?(t=e).toArray().forEach(t=>{t.checked&&(n+=String.fromCharCode(i)),i++}):(t=a,n=a.val()),n&&$(this.$items.children().toArray()[this.current]).addClass("answered"),this.result.splice(this.current,1,n)}recover(){let t,e=$(".content-box").find("input"),a=$(".content-box").find("textarea"),n=this.result[this.current],i="",o=65;if(n)if(e.length){t=e,i=n.split("").map(t=>t.charCodeAt(0));for(let e=0,a=t.length;e<a;e++){for(let a=0,n=i.length;a<n;a++)o===i[a]&&(t.toArray()[e].checked=!0);o++}}else t=a,a.val(n)}isComplete(){let t;this.result.length&&(t=this.result.every(t=>""!=t)),t?($(".modal-body").text("你已完成本次考试，确定提交？"),$(".modal-footer .btn-danger").text("确定提交"),$(".modal-footer .btn-primary").text("检查一下")):($(".modal-body").text("你还未完成本次考试，是否提交？"),$(".modal-footer .btn-danger").text("确定提交"),$(".modal-footer .btn-primary").text("继续做题"))}submit(){this.$confirmSubmit.on("click",t=>{t.preventDefault(),$.post("/api/exam_submit",JSON.stringify(this.result)).then(t=>{const e=(t=JSON.parse(t)).data;t.ret&&e&&($("#submitAlert").modal("hide"),location.assign("http://localhost:8080/personal.html"))})})}}).init()})},8:function(t,e){}});
//# sourceMappingURL=exam.bundle.js.map
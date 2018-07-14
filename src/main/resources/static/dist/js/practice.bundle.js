!function(t){var e={};function n(s){if(e[s])return e[s].exports;var r=e[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(s,r,function(e){return t[e]}.bind(null,r));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}({0:function(t,e,n){"use strict";var s=Object.prototype.hasOwnProperty,r="~";function a(){}function i(t,e,n,s,a){if("function"!=typeof n)throw new TypeError("The listener must be a function");var i=new function(t,e,n){this.fn=t,this.context=e,this.once=n||!1}(n,s||t,a),o=r?r+e:e;return t._events[o]?t._events[o].fn?t._events[o]=[t._events[o],i]:t._events[o].push(i):(t._events[o]=i,t._eventsCount++),t}function o(t,e){0==--t._eventsCount?t._events=new a:delete t._events[e]}function c(){this._events=new a,this._eventsCount=0}Object.create&&(a.prototype=Object.create(null),(new a).__proto__||(r=!1)),c.prototype.eventNames=function(){var t,e,n=[];if(0===this._eventsCount)return n;for(e in t=this._events)s.call(t,e)&&n.push(r?e.slice(1):e);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(t)):n},c.prototype.listeners=function(t){var e=r?r+t:t,n=this._events[e];if(!n)return[];if(n.fn)return[n.fn];for(var s=0,a=n.length,i=new Array(a);s<a;s++)i[s]=n[s].fn;return i},c.prototype.listenerCount=function(t){var e=r?r+t:t,n=this._events[e];return n?n.fn?1:n.length:0},c.prototype.emit=function(t,e,n,s,a,i){var o=r?r+t:t;if(!this._events[o])return!1;var c,h,l=this._events[o],d=arguments.length;if(l.fn){switch(l.once&&this.removeListener(t,l.fn,void 0,!0),d){case 1:return l.fn.call(l.context),!0;case 2:return l.fn.call(l.context,e),!0;case 3:return l.fn.call(l.context,e,n),!0;case 4:return l.fn.call(l.context,e,n,s),!0;case 5:return l.fn.call(l.context,e,n,s,a),!0;case 6:return l.fn.call(l.context,e,n,s,a,i),!0}for(h=1,c=new Array(d-1);h<d;h++)c[h-1]=arguments[h];l.fn.apply(l.context,c)}else{var u,f=l.length;for(h=0;h<f;h++)switch(l[h].once&&this.removeListener(t,l[h].fn,void 0,!0),d){case 1:l[h].fn.call(l[h].context);break;case 2:l[h].fn.call(l[h].context,e);break;case 3:l[h].fn.call(l[h].context,e,n);break;case 4:l[h].fn.call(l[h].context,e,n,s);break;default:if(!c)for(u=1,c=new Array(d-1);u<d;u++)c[u-1]=arguments[u];l[h].fn.apply(l[h].context,c)}}return!0},c.prototype.on=function(t,e,n){return i(this,t,e,n,!1)},c.prototype.once=function(t,e,n){return i(this,t,e,n,!0)},c.prototype.removeListener=function(t,e,n,s){var a=r?r+t:t;if(!this._events[a])return this;if(!e)return o(this,a),this;var i=this._events[a];if(i.fn)i.fn!==e||s&&!i.once||n&&i.context!==n||o(this,a);else{for(var c=0,h=[],l=i.length;c<l;c++)(i[c].fn!==e||s&&!i[c].once||n&&i[c].context!==n)&&h.push(i[c]);h.length?this._events[a]=1===h.length?h[0]:h:o(this,a)}return this},c.prototype.removeAllListeners=function(t){var e;return t?(e=r?r+t:t,this._events[e]&&o(this,e)):(this._events=new a,this._eventsCount=0),this},c.prototype.off=c.prototype.removeListener,c.prototype.addListener=c.prototype.on,c.prefixed=r,c.EventEmitter=c,t.exports=c},17:function(t,e){},4:function(t,e,n){"use strict";n.r(e),n(17);const s=new(n(0).EventEmitter);$(()=>{(new class{constructor(){this.data=null,this.current=null,this.index=0,this.answer=[],this.dom={examLang:$(".exam-lang"),examType:$(".exam-type"),currentNum:$(".current-num"),totalNum:$(".total-num"),des:$(".exam-des"),form:null,btns:$(".btn-group"),examUl:$(".exam-items")}}init(){this.getData(),s.on("getData",t=>{t.ret&&t.data&&(this.data=t,this.current=t.data[0],console.log(this.current),this.switchType(),this.updateHeader(),this.createMain(),this.createFooter(),this.hideLoading(),this.clickBtns(),this.clickItem())}),$.get("/api/userinfo").then(t=>{(t=JSON.parse(t)).ret&&(this.username=t.data.username,localStorage.setItem("prName",this.username),console.log(localStorage.getItem("prName")))})}getData(){this.showLoading(),$.get("api/back").done(t=>{console.log(t),t=JSON.parse(t),s.emit("getData",t)})}showLoading(){}hideLoading(){}switchType(){let t=this.data.data,e=t.length;for(let n=0;n<e;n++)switch(t[n].type){case"radio":t[n].type="单选";break;case"checkbox":t[n].type="多选";break;default:t[n].type="简答"}}updateHeader(){let t=this.index;this.dom.examLang.text(this.current.lang),this.dom.examType.text(this.current.type),this.dom.currentNum.text(t+1),this.dom.totalNum.text(this.data.data.length)}createMain(){this.dom.form=$("<form>").addClass("exam-form"),"单选"===this.current.type?this.createChoice("radio"):"多选"===this.current.type?this.createChoice("checkbox"):this.createDefault(),this.dom.des.text(this.current.description)}createChoice(t){for(let e=0;e<4;e++){let n=$("<input>").addClass("custom-control-input").attr({type:t,name:`exam-${t}`,id:`exam-${t}-${e}`}),s=$("<label>").addClass("custom-control-label").attr("for",`exam-${t}-${e}`).text(this.current.content[e]),r=$("<div>").addClass(`custom-control custom-${t}`).append(n,s);this.dom.form.append(r)}this.dom.des.after(this.dom.form)}createDefault(){let t=$("<textarea>").attr({col:100,row:20});this.dom.form.append(t),this.dom.des.after(this.dom.form)}updateMain(){this.dom.form.remove(),this.current=this.data.data[this.index],this.createMain()}createFooter(){const t=this.data.data;let e=document.createDocumentFragment();for(let n=0,s=t.length;n<s;n++){let t=document.createElement("li");t.innerHTML=n+1,t.classList="exam-item",0===n&&(t.classList+=" answering"),e.appendChild(t)}this.dom.examUl[0].appendChild(e)}updateFooter(t){let e=this.dom.examUl.children().toArray(),n="number"==typeof t?$(e[t]):$(t);e.forEach(t=>{$(t).hasClass("answering")&&$(t).removeClass("answering")}),n.addClass("answering")}clickBtns(){this.dom.btns.on("click",t=>{let e=t.target;$(e).hasClass("btn-next")?this.handleNext():this.handleAhead()})}clickItem(){this.dom.examUl.on("click",t=>{let e=t.target,n=this.data.data.length;this.save(),this.index=$(e).index(),this.current=this.data.data[this.index],this.updateHeader(),this.updateMain(),this.recover(),this.updateFooter(e),this.index===n-1?this.dom.btns.find(".btn-next").text("完成练习"):this.dom.btns.find(".btn-next").text("下一题")})}handleNext(){let t=this.data.data.length;this.index<t-1?(this.save(),this.current=this.data.data[++this.index],this.updateHeader(),this.updateMain(),this.recover(),this.updateFooter(this.index),this.index===t-1?this.dom.btns.find(".btn-next").text("完成练习"):this.dom.btns.find(".btn-next").text("下一题")):(this.index=t-1,this.submit())}handleAhead(){}save(){let t=this.dom.form,e=t.find("input").toArray(),n={ans:"",seq:this.index,type:this.current.type};e.length?(e.forEach((t,e)=>{t.checked&&(n.ans+=e)}),""===n.ans&&(n.ans=null)):n.ans=t.find("textarea").val()||null,""!==n.ans&&(this.answer[this.index]?this.answer[this.index].ans!==n.ans&&(this.answer[this.index].ans=n.ans):this.answer.push(n))}recover(){let t,e=this.index;if(this.answer[e]&&(t=this.answer[e].ans),t){let e=this.dom.form.find("input").toArray();if(e.length){let n=t.split(""),s=n.length;for(let t=0;t<s;t++)e.forEach((e,s)=>{n[t]==s&&(e.checked=!0)})}else this.dom.form.find("textarea").val(t)}}submit(){this.save(),this.handleAnswer(),alert("完成")}handleAnswer(){console.log(this.answer);let t=this.answer.map(t=>(console.log(t),"简答"!==t.type?null===t.ans?null:t.ans.split("").map(t=>String.fromCharCode(65+parseInt(t))).join(""):t.ans));$.post("/api/practice_submit",`answers=${JSON.stringify(t)}`).done(t=>{console.log(t),(t=JSON.parse(t)).success&&(localStorage.setItem("prResult",JSON.stringify(t)),location.href="./practice_detail.html")})}}).init()})}});
//# sourceMappingURL=practice.bundle.js.map
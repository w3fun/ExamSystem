!function(t){var e={};function s(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=7)}({7:function(t,e){$(document).ready(function(){(new class{constructor(){this.regx={email:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,pswd:/^[a-zA-Z0-9!@#$%^&*]{6,16}$/},this.$formIn=$("formIn"),this.$emailIn=$("emailIn"),this.$pswdIn=$("pswdIn"),this.$submitIn=$("#submitIn"),this.$logIn=$("#loginIn"),this.$formUp=$("formUp"),this.$emailUp=$("#emailUp"),this.$nameUp=$("#nameUp"),this.$pswdUp=$("#pswdUp"),this.$enPswdUp=$("#enPswdUp"),this.$valCode=$("#valCode"),this.$getValCodeBtn=$("#sendValCode"),this.$submitUp=$("#submitUp"),this.$logUp=$("#logUp"),this.flag={email:!1,name:!1,pswd:!1,enPswd:!1,valCode:!1}}init(){this.submitIn(),this.checkEmailUp(),this.checkNameUp(),this.checkPswdUp(),this.checkEnPswdUp(),this.getValCode(),this.submitUp()}checkEmailIn(){this.$emailIn.on("blur",t=>{const e=this.$emailIn.val();let s;e&&((s=this.check("email",e))?$.get("/api/isEmailExist").then(t=>{const e=(t=JSON.parse(t)).data;t.ret&&e?!1===e.isExist&&(this.fadeIn("该用户未被注册"),this.flag.email=!1):this.flag.email=!0}).fail(t=>{console.error(t)}):(this.fadeIn("用户名不正确"),this.flag.email=!1))})}checkPswdIn(){this.$pswdIn.on("blur",t=>{const e=this.$pswdIn.val();let s;e&&((s=this.check("pswd",e))?this.flag.pswd=!0:(this.fadeIn("密码不符合要求"),this.flag.pswd=!1))})}submitIn(){this.$submitIn.on("click",t=>{this.$formIn.submit()})}checkEmailUp(){this.$emailUp.on("blur",t=>{const e=this.$emailUp.val();let s;e&&((s=this.check("email",e))?$.get("/api/isEmailExist",`email=${e}`).then(t=>{!0===(t=JSON.parse(t)).ret?this.flag.email=!0:(this.fadeUp("邮箱已被注册"),this.flag.email=!1)}).fail(t=>{console.error(t)}):(this.fadeUp("邮箱格式不正确"),this.flag.email=!1))})}checkNameUp(){this.$nameUp.on("blur",t=>{const e=this.$nameUp.val();let s;e&&((s=this.check("name",e))?$.get("/api/isUsernameExist",`username=${e}`).then(t=>{!0===(t=JSON.parse(t)).ret?this.flag.name=!0:(this.fadeUp("用户名已被注册"),this.flag.name=!1)}).fail(t=>{console.error(t)}):(this.fadeUp("姓名不符合要求"),this.flag.name=!1))})}checkPswdUp(){this.$pswdUp.on("blur",t=>{const e=this.$pswdUp.val();let s;e&&((s=this.check("pswd",e))?this.flag.pswd=!0:(this.fadeUp("密码不符合要求"),this.flag.pswd=!1))})}checkEnPswdUp(){this.$enPswdUp.on("blur",t=>{const e=this.$enPswdUp.val();console.log(e),this.$pswdUp.val()!==e?(this.fadeUp("两次密码不一致"),this.flag.enPswd=!1):this.flag.enPswd=!0})}getValCode(){this.$getValCodeBtn.on("click",t=>{t.preventDefault();const e=this.$emailUp.val();$.post("/api/getValCode",`email=${e}`).then(t=>{const e=(t=JSON.parse(t)).data;t.ret&&e&&(this.$valCode.on("blur",t=>{console.log(111111),this.$valCode.val()!==e.valCode?(console.log("zxcvbnm"),this.fadeUp("验证码不正确"),this.flag.valCode=!1):this.flag.valCode=!0}),this.dealEmailCountingDown(this.$getValCodeBtn,function(t){t.addClass("disabled").attr("disabled","true")},function(t){t.removeClass("disabled").removeAttr("disabled")}))}).fail(t=>{this.flag.valCode=!1})})}submitUp(){this.$submitUp.on("click",t=>{console.log(this.flag),this.flag.email&&this.flag.name&&this.flag.pswd&&this.flag.enPswd&&this.flag.valCode?(console.log(1),this.$formUp.submit()):console.log(0)})}dealEmailCountingDown(t,e,s){t=t instanceof $?t:$(t),e&&e instanceof Function&&e(t),this.countingDown(t,60,s)()}countingDown(t,e,s){const i=this;return function(){e-=1,$(t).text(e+"秒后重新获取验证码");var n=null;0!==e?n=setTimeout(i.countingDown($(t),e,s),1e3):(clearTimeout(n),$(t).text("获取邮箱验证码"),s&&s instanceof Function&&s(t))}}fadeIn(t){this.$logIn.text(t).fadeIn("fast").fadeOut(2e3)}fadeUp(t){this.$logUp.text(t).fadeIn("fast").fadeOut(2e3)}check(t,e){let s="";switch(t){case"email":s=e.split(/\s*, \s*/g).every(t=>this.regx.email.test(t));break;case"name":s=!!e.length;break;case"pswd":s=e.length>=6&&e.length<=16}return console.log(s),s}}).init()})}});
//# sourceMappingURL=login.bundle.js.map
!function(t){var e={};function i(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=7)}({7:function(t,e){$(document).ready(function(){(new class{constructor(){this.regx={email:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,pswd:/^[a-zA-Z0-9!@#$%^&*]{6,16}$/},this.$formIn=$("formIn"),this.$emailIn=$("emailIn"),this.$pswdIn=$("pswdIn"),this.$submitIn=$("#submitIn"),this.$logIn=$("#loginIn"),this.$formUp=$("formUp"),this.$emailUp=$("#emailUp"),this.$nameUp=$("#nameUp"),this.$pswdUp=$("#pswdUp"),this.$enPswdUp=$("#enPwsdUp"),this.$valCode=$("#valCode"),this.$getValCodeBtn=$("#sendValCode"),this.$submitUp=$("#submitUp"),this.$logUp=$("#logUp"),this.flag={email:!1,name:!1,pswd:!1,enPswd:!1,valCode:!1}}init(){this.submitIn(),this.checkEmailUp(),this.checkNameUp(),this.checkPswdUp(),this.checkEnPswdUp(),this.getValCode(),this.submitUp()}checkEmailIn(){this.$emailIn.on("blur",t=>{const e=this.$emailIn.val();let i;e&&((i=this.check("email",e))?$.get("/api/isEmailExist").then(t=>{const e=(t=JSON.parse(t)).data;t.ret&&e?!1===e.isExist&&(this.fadeIn("该用户未被注册"),this.flag.email=!1):this.flag.email=!0}).fail(t=>{console.error(t)}):(this.fadeIn("用户名不正确"),this.flag.email=!1))})}checkPswdIn(){this.$pswdIn.on("blur",t=>{const e=this.$pswdIn.val();let i;e&&((i=this.check("pswd",e))?this.flag.pswd=!0:(this.fadeIn("密码不符合要求"),this.flag.pswd=!1))})}submitIn(){this.$submitIn.on("click",t=>{this.$formIn.submit()})}checkEmailUp(){this.$emailUp.on("blur",t=>{const e=this.$emailUp.val();let i;e&&((i=this.check("email",e))?$.get("/api/isEmailExsit",`email=${e}`).then(t=>{const e=(t=JSON.parse(t)).data;t.ret&&e?!0!==e.isExsit&&(this.fadeUp("邮箱已被注册"),this.flag.email=!1):this.flag.email=!0}).fail(t=>{console.error(t)}):(this.fadeUp("邮箱格式不正确"),this.flag.email=!1))})}checkNameUp(){this.$nameUp.on("blur",t=>{const e=this.$nameUp.val();let i;e&&((i=this.check("name",e))?$.get("/api/isUsernameExsit",`username=${username}`).then(t=>{const e=(t=JSON.parse(t)).data;t.ret&&e&&(!0!==e.isExsit?(this.fadeUp("用户名已被注册"),this.flag.name=!1):this.flag.name=!0)}).fail(t=>{console.error(t)}):(this.fadeUp("姓名不符合要求"),this.flag.name=!1))})}checkPswdUp(){this.$pswdUp.on("blur",t=>{const e=this.$pswdUp.val();let i;e&&((i=this.check("pswd",e))?this.flag.pswd=!0:(this.fadeUp("密码不符合要求"),this.flag.pswd=!1))})}checkEnPswdUp(){this.$enPswdUp.on("blur",t=>{const e=this.$enPswdUp.val();this.$pswdUp.val()!==e?(this.fadeUp("两次密码不一致"),this.flag.enPswd=!1):this.flag.enPswd=!0})}getValCode(){this.$getValCodeBtn.on("click",t=>{t.preventDefault(),$.get("/api/getValCode").then(t=>{const e=(t=JSON.parse(t)).data;t.ret&&e&&(this.$valCode.on("blur",t=>{this.$valCode.val()!==e.valCode?(this.fadeUp("验证码不正确"),this.flag.valCode=!1):this.flag.valCode=!0}),this.dealEmailCountingDown(this.$getValCodeBtn,function(t){t.addClass("disabled").attr("disabled","true")},function(t){t.removeClass("disabled").removeAttr("disabled")}))}).fail(t=>{this.flag.valCode=!1})})}submitUp(){this.$submitUp.on("click",t=>{this.flag.email&&this.flag.name&&this.flag.pswd&&this.flag.enPswd&&this.flag.valCode?(console.log(1),this.$formUp.submit()):console.log(0)})}dealEmailCountingDown(t,e,i){t=t instanceof $?t:$(t),e&&e instanceof Function&&e(t),this.countingDown(t,60,i)()}countingDown(t,e,i){const s=this;return function(){e-=1,$(t).text(e+"秒后重新获取验证码");var a=null;0!==e?a=setTimeout(s.countingDown($(t),e,i),1e3):(clearTimeout(a),$(t).text("获取邮箱验证码"),i&&i instanceof Function&&i(t))}}fadeIn(t){this.$logIn.text(t).fadeIn("fast").fadeOut(2e3)}fadeUp(t){this.$logUp.text(t).fadeIn("fast").fadeOut(2e3)}check(t,e){let i="";switch(t){case"email":i=e.split(/\s*, \s*/g).every(t=>this.regx.email.test(t));break;case"name":i=!!e.length;break;case"pswd":i=e.length>=6&&e.length<=16}return console.log(i),i}}).init()})}});
//# sourceMappingURL=login.bundle.js.map
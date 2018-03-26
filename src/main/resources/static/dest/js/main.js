"use strict";$(document).ready(pageReady);var REG={email:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,pswd:/^[a-zA-Z0-9!@#$%^&*]{6,16}$/},server="";function pageReady(){var a=$("#emailIn"),s=$("#pswdIn"),n=$("#submitIn");a.on("blur",checkValue(matchEmail)),a.on("focus",rmValidationClass),s.on("blur",checkValue(matchLength)),s.on("focus",rmValidationClass),n.on("click",function(n){n.preventDefault(),$.ajax({type:"POST",url:server+"/api/signin",data:JSON.stringify({email:a.val(),pswd:s.val()}),dataType:"json",contentType:"application/json",success:function(n){console.log(n)},error:function(n){console.error(n)}})});var i=$("#emailUp"),e=$("#nameUp"),t=$("#pswdUp"),o=($("#enPwsdUp"),$("#valCode")),l=$("#sendValCode"),r=$("#submitUp");i.on("blur",function(){$.ajax({type:"POST",url:server+"/api/isExist",data:JSON.stringify({emila:i.val()}),dataType:"json",contentType:"application/json",success:function(n){console.log(n)},error:function(n){console.error(n)}})}),i.on("focus",rmValidationClass),e.on("blur",checkValue(isNotEmptyForm)),e.on("focus",rmValidationClass),t.on("blur",checkValue(matchPswd)),l.on("click",function(n){n.preventDefault(),$.ajax({type:"GET",url:server+"/api/getValCode",dataType:"json",success:function(a){console.log(a),a=JSON.parse(a).valCode,o.on("blur",function(){var n=o.val();a===n?$(this).addClass("is-valid"):$(this).addClass("is-invalid")}),dealEmailCountingDown(l,function(n){n.addClass("disabled").attr("disabled","true")},function(n){n.removeClass("disabled").removeAttr("disabled")}),o.on("focus",function(){o.hasClass(".is-valid")&&o.removeClass(".is-valid"),o.hasClass("is-invalid")&&o.removeClass(".is-invalid")})},error:function(n){console.error(n)}})}),r.on("click",function(n){n.preventDefault(),$.ajax({type:"POST",url:server+"/api/signup",data:JSON.stringify({email:i.val(),name:e.val(),pswd:t.val()}),dataType:"json",contentType:"application/json",success:function(n){console.log(n)},error:function(n){console.error(n)}})})}function rmValidationClass(){$(this).hasClass(".is-valid")&&$(this).removeClass(".is-valid"),$(this).hasClass("is-invalid")&&($(this).removeClass(".is-invalid"),$(this.nextElementSibling).css({display:"none"}))}function addValidationClass(n){}function checkValue(a){return function(){var n=$(this).val();a(n)?$(this).addClass("is-valid"):$(this).addClass("is-invalid")}}function matchEmail(n){return n.split(/\s*, \s*/g).every(function(n){return REG.email.test(n)})}function matchLength(n,a,s){return a=a||6,s=s||16,n.length>=a&&n.length<=s}function isNotEmptyForm(n){return 0!==n.length}function matchPswd(n){return REG.pswd.test(n)}function dealEmailCountingDown(n,a,s){n=n instanceof $?n:$(n),a&&a instanceof Function&&a(n),countingDown(n,60,s)()}function countingDown(a,s,i){return function(){s-=1,$(a).text(s+"秒后重新获取验证码");var n=null;0!==s?n=setTimeout(countingDown($(a),s,i),1e3):(clearTimeout(n),$(a).text("获取邮箱验证码"),i&&i instanceof Function&&i(a))}}
//这里是注册页
function loadRegisterData() {
	$("#header").load("register.html header", function() {
		$(".moreBtn").on("click", function() {
			loadLoginData("user");
		})

		$("#back").on("click", function() {
			loadUserData();
		});
	});
	$("#content").load("register.html #registerContent", function() {
		$("input[type='text'],input[type='password']").on("blur", function() {
			if($(this).val() != "") {
				$(this).removeClass("error");
			}
		})
		$("#registerBtn").on("click", function() {
			//					alert("我要注册")
			var userID = $("#userID").val();
			var password = $("#password").val();
			var password2 = $("#password2").val();
			checkRegisterCode(userID, password, password2);
		})
	});

}
/**
 * 这里是前端判断输入信息合理的函数
 * @param {String} userID
 * @param {String} password
 * @param {String} password2
 */
function checkRegisterCode(userID, password, password2) {
	if(userID == "") {
		Toast("请输入用户名称", 2000);
		$("#userID").addClass("error");
	} else if(password == "") {
		$("#userID").removeClass("error");
		Toast("请输入密码", 2000);
		$("#password").addClass("error");
	} else if(password2 == "") {
		$("#password").removeClass("error");
		Toast("请再次输入密码", 2000);
		$("#password2").addClass("error");
	} else {
		if(password != password2) {
			$("#password2").addClass("error");
			$("#password").addClass("error");
			Toast("密码不一致", 2000);
		} else {
			$("#password2").removeClass("error");
			$("#password").removeClass("error");
			//这个方法在login.js中
			toAjax(userID,password,"register");
		}
	}
}
/**
 * 提交信息到服务器，验证信息
 * @param {Object} userID
 * @param {Object} password
 */
//function toRegister(userID,password){
//	$.ajax({
//		type:"post",
//		url:"http://datainfo.duapp.com/shopdata/userinfo.php",
//		data:{
//			"status":"register",
//			"userID":userID,
//			"password":password
//		},
//		beforeSend:function(){
//			$("#loadBox").show();
//		},
//		success:function(data){
//			$("#loadBox").hide();
//			console.log(data)
//			
//		}
//	});
//}

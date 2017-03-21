
//这里是登陆页面

function loadLoginData(type){
	$("#header").load("login.html header",function(){
			$(".moreBtn").on("click",function(){
				loadRegisterData();
			})
		
			$("#back").on("click",function(){
				if(type == "user"){
					loadUserData();
				}else if(type == "index"){
					loadHomeData();
				}
				
			});
		});
		$("#content").load("login.html #loginContent",function(){
			$("input[type='text'],input[type='password']").on("blur", function() {
			if($(this).val() != "") {
				$(this).removeClass("error");
			}
		})
		$("#loginBtn").on("click", function() {
			//alert("我要注册")
			var userID = $("#userID").val();
			var password = $("#password").val();
			checkLoginCode(userID, password,type);
		})
			
			
		});
	
	
}
function checkLoginCode(userID, password,type){
	if(userID == "") {
		Toast("请输入用户名称", 2000);
		$("#userID").addClass("error");
	} else if(password == "") {
		$("#userID").removeClass("error");
		Toast("请输入密码", 2000);
		$("#password").addClass("error");
	} else {
		$("#password").removeClass("error");
		toAjax(userID,password,"login",type);
	}
}
/**
 * 登录注册功能提交数据到服务器
 * @param {Object} userID
 * @param {Object} password
 * @param {Object} status
 */
function toAjax(userID,password,status,type){
	$.ajax({
		type:"post",
		url:"http://datainfo.duapp.com/shopdata/userinfo.php",
		data:{
			"status":status,
			"userID":userID,
			"password":password
		},
		beforeSend:function(){
			$("#loadBox").show();
		},
		success:function(data){
			$("#loadBox").hide();
//			console.log(data)
			run(data,status,type);
			
		}
	});
}
/**
 * 这里是从服务器获取的数据，data表示数据，type表示是从登录还是注册获取的数据
 * @param {String} data
 * @param {String} type
 */
function run(data,status,type){
	if(status == "login"){
		if(data == "0"){
			Toast("该用户不存在", 2000);
			$("#userID").addClass("error");
		}else if(data == "2"){
			Toast("密码错误", 2000);
			$("#password").addClass("error");
		}else{
			var result = JSON.parse(data);
			localStorage.setItem(isLogin,"true");
			localStorage.setItem(userImg,result.userimg_url);
			console.log(result);
			if(type == "user"){
				loadUserData();
			}else if(type == "index"){
				loadHomeData();
			}
		}
	}else if(status == "register"){
		if(data == "0"){
			Toast("该用户已存在", 2000);
			$("#userID").addClass("error");
		}else if(data == "1"){
			localStorage.setItem(isLogin,"true");
			localStorage.setItem(userName,userID);
			loadHomeData()
		}else{
			Toast("注册失败，稍后再试", 2000);
		}
	}
}

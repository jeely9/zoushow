

function loadUserInfoData(){
	//去登录
	$("#userBtn").find("span").eq(0).on("click",function(){
		loadLoginData("user");
	});
	//去注册
	$("#userBtn").find("span").eq(1).on("click",function(){
		loadRegisterData();
	});
	if(localStorage.getItem(isLogin) == "true"){
		$("#userImg").attr("src",localStorage.getItem(userImg));
		$("#userBtn").hide();
	}else{
		$("#userImg").attr("src","img/myXiu.jpg");
	}
}

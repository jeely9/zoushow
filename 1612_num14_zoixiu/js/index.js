var isLogin = "isLogin";
var userName = "userName";
var userImg = "userImg";
var pageCode = 0;
var $footer = $("#footer");
loadHomeData();
$footer.find("li").on("click",function(){
	$(this).addClass("active").siblings().removeClass("active");
	var index = $(this).index();
//	alert(typeof index)
	switch(index){
	
		case 0:
//			$("#content").html("首页")
			loadHomeData();
			break;
		case 1:
//			$("#content").html("分类")
			loadKindData();
			break;
		case 2:
//			$("#content").html("购物车")
			loadCartData();
			break;
		case 3:
//			$("#content").html("我的秀")
			loadUserData();
			break;
		case 4:
//			$("#content").html("更多")
			loadMoreData();
			break;
			}
});

/**
 * 这里是首页的页面
 */
function loadHomeData(){
	$("#header").load("home.html header",function(){
		loadSearchData();
		$("#test").on("click",function(){
			loadHomeListData();
//			$("#header").load("login.html header",function(){
//				loadLoginData("index");
//				$("#back").on("click",function(){
//					loadHomeData();
//				});
//			});
//			$("#content").load("login.html #loginContent");
		});
	});
	$("#content").load("home.html #homeContent",function(){
		 loadHomeBannerData();      
		 loadHomeListData();
	});
}
function loadKindData(){
	$("#header").load("kind.html header");
	$("#content").load("kind.html #kindContent");
}
function loadCartData(){
	$("#header").load("cart.html header");
	$("#content").load("cart.html #cartContent");
}
function loadUserData(){
	$("#header").load("myXiu.html header");
	$("#content").load("myXiu.html #userContent",function(){
		loadUserInfoData();
	});
}
function loadMoreData(){
	$("#header").load("more.html header");
	$("#content").load("more.html #moreContent",function (){
		loadMoreInfoData();
	});
}
/**
 * 这是一个模仿原生的Toast的功能，属于自动消失的提示框
 * @param {String} str
 * @param {Number} time
 */
function Toast(str,time){
	$("#toast").html(str);
	$("#toast").addClass("fadeIn");
	setTimeout(function(){
		$("#toast").removeClass("fadeIn").addClass("fadeOut");
		$("#toast").on("webkitAnimationEnd",function(){
			$(this).html("");
			$(this).removeClass("fadeOut");
			$(this).off("webkitAnimationEnd");
		})
	},time)
}

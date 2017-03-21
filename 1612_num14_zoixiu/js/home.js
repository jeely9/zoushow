/**
 * 这里是首页的banner图
 */
function loadHomeBannerData(){
	$.ajax({
		type:"get",
		url:"http://datainfo.duapp.com/shopdata/getBanner.php?callback=",
		dataType:"JSONP",
		success:function(data){
//			console.log(data)
			var len = data.length;
			var str = data.substring(1,len - 1);
//			console.log(str);
			var result = JSON.parse(str);
//			console.log(result);
//			var imgArrStr = result[0].goodsBenUrl;
//			var imgArr = JSON.parse(imgArrStr);
//			console.log(imgArr[0])
			for (var i in result) {
				var imgArrStr = result[i].goodsBenUrl;
				var imgArr = JSON.parse(imgArrStr);
				$("#myWrapper").append('<div class="swiper-slide"><img src="'+imgArr[0]+'"/></div>');
			}
			
			
			var mySwiper = new Swiper ('.swiper-container', {
			    loop: true,
			    autoplay:3000,
			    autoplayDisableOnInteraction:false,
			    // 如果需要分页器
			    pagination: '.swiper-pagination'
			    
			  });  
		}
	});
}


function loadHomeListData(){
	$.ajax({
		type:"get",
		url:"http://datainfo.duapp.com/shopdata/getGoods.php?callback=",
		data:{
			"pageCode":pageCode,
			"linenumber":5
		},
		dataType:"JSONP",
		beforeSend:function(){
			$("#toast1").show().html("正在加载列表");
		},
		success:function(data){
			var len = data.length;
			var str = data.substring(1,len - 1);
			var result = JSON.parse(str);
			if(result == "0"){
				$("#toast1").html("没有数据了");
				setTimeout(function(){
					$("#toast1").hide().html("");
				},1000)
			}else{
				$("#toast1").hide().html("");
			}
			
			console.log(result);
			for (var i in result) {
				var goodsListImg = result[i].goodsListImg;
				var goodsName = result[i].goodsName;
				var price = result[i].price;
				var discount = result[i].discount;
				var goodsID = result[i].goodsID;
				var realPrice = 0;
				if(discount == "0"){
					realPrice = price;
				}else{
					realPrice = price*discount/10;
				}
				
				$("#proList").append('<li goodsID="'+goodsID+'"><div class="proImg">'+
				'<img src="'+goodsListImg+'" alt="" /></div><div class="proInfo">'+
				'<p >'+goodsName+'</p>'+
				'<p ><span>￥'+realPrice+'</span><del>￥'+price+'</del></p>'+
				'<p>'+discount+'折</p>'+
				'<button class="addCart" goodsID="'+goodsID+'"><i class="fa fa-shopping-cart fa-2x"></i></button>'+
			'</div>'+
		'</li>');
			}
			pageCode++;
			$(".addCart").on("click",function(e){
				e.stopPropagation();
				
				alert("cart"+$(this).attr("goodsID"));
			});
			
			$("#proList").find("li").on("click",function(){
				
				alert("li"+$(this).attr("goodsID"));
			})
		}
		
		
	});
}

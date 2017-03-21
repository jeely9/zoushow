/**
 * 这里是搜索的页面
 */
function loadSearchData(){
	$("#searchBox").on("click",function(){
		$("#header").load("search.html header",function(){
			$("#back").on("click",function(){
				loadHomeData();
			});
		});
		$("#content").load("search.html #searchContent");
	});
	
	
}
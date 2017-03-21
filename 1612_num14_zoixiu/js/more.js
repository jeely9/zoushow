

function loadMoreInfoData(){
	$("#cancelBtn").on("click",function(){
		localStorage.setItem(isLogin,"false");
		loadUserData();
	});
}

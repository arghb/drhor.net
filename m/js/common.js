$(function(){  

   //导航展开
	$(".meau-btn").on("click",function(){
		$(this).next(".top-meau").stop(true,false).slideToggle()
	    return false;
	}); 	
	$(document).on("click",function(e){
	  if($(e.target).parent(".top-meau").length==0){
		$(".top-meau").hide();
	  }
	});
	
		//详细页展开更多
	 if(document.location.pathname.indexOf(".html")>-1  && $(".page").html().length<=15){
			var styleEle='<style type="text/css">'+
			  '.article-body{position:relative;height:1200px;overflow:hidden;}'+
			   '.viewFull {position:absolute; bottom:0; width:100%;z-index:999999; cursor:pointer;}'+
			   '.viewFull .bg{position:relative; width:100%; height:50px;text-align:center;background:#d8d8d8;opacity:0.8;}'+
			  '.viewFull span{ position:absolute;left:50%;top:0; display:inline-block; width:50px; height:50px;letter-spacing:5px; padding:8px 5px 0 5px; margin:-10px 0 0 -25px; text-align:center;line-height:22px; overflow:hidden; border-radius:50%;background:#f66; border:1px solid #eee; color:#fff;  font-size:18px; cursor:pointer;}'+
			'</style>';
			$("body").prepend(styleEle);
			$(".article-body").append('<div class="viewFull"><div class="bg"></div><span>展开全文</span></div>');
			$(".viewFull").on("click",function(){
				 $(".article-body").css("height",'auto');
				 $(this).hide();
			});

	 }

})
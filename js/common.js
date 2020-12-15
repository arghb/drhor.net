var TangMiZhi ={
	  //搜索框动画
	  searchAnimate:function(){ 
		 $(".search-area").focus(function(){
			
			$(this).parent().find("b").stop(true,false).animate({"top":"-25px"});
		}).blur(function(){
			
			$(this).parent().find("b").stop(true,false).animate({"top":"0"});
			
		});
		  
      },
     //焦点图
	slide:function(){
		var slide = $("#focus"); 
		var picsUl=slide.find(".focus-list ul");
		var pics = picsUl.find("li");
		var control=slide.find(".focus-control ul");
		var index=0;
		var timer=null;
		var len = pics.length;
		var picWidth =$(pics[0]).width();
		    picsUl.width(picWidth*len);
			for(var i=0;i<len;i++){
	
			  control.append('<li></li>');
	
			}
	    var controlLi= control.find("li");
		var toggle = function (i) {
				
				picsUl.stop(true,false).animate({
					marginLeft:	-picWidth*i
				},600);
				controlLi.removeClass("on").eq(i).addClass("on");
				
		
			};
		   toggle(0);
		  controlLi.mouseover(function () {

		            var inx = controlLi.index($(this));
		            if (inx !== index) {
		                index = inx;
		                toggle(index);
		            }

		   });
		 var autoPlay=function(){
	
			index = index < len - 1 ? ++index : 0;
			toggle(index);
			 
		};
		timer=setInterval(autoPlay,5000);
		slide.hover(function(){clearInterval(timer);},function(){
	
			 timer=setInterval(autoPlay,5000);
	
		});
		
	},
	//滚动固定 
    sideScroll:function(obj,bl){

            var side=$(obj.elem);
			var scrollHeight = side.offset().top;
		
            $(window).on('scroll', function(){
           
                   var st =parseInt($(document).scrollTop());
                   if(st>scrollHeight){
					
                      side.css({
                        "position":"fixed",
                         "top":"0",
                        "left":"auto",
                        "z-index":"999"
                      });
					 bl || $(".f-logo").show();
                   }else{
                        side.css({
                            "position":"relative",
                            "top":"auto",
                            "left":"auto"
                        });
					 bl || $(".f-logo").hide();
                   }

            });
			
	}
	
};
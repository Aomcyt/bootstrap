(function($){
	$(function(){
		$(window).on("resize",function(){
			var des=$(".description");
			var desWidth=des.width();
			var winWidth=$(window).width();
			
		}).trigger("resize");
		
	})
})(jQuery);
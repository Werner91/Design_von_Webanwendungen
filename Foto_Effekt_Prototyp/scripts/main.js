$( document ).ready(function() {
	$('a.lightbox').colorbox({rel:"lightbox"});
	$('a.iframe').colorbox({
		inline:true
	});

	$('.lupe').hover(function(){
		$(this).fadeTo("fast",1);
	},function(){
		$(this).fadeTo("fast",0);
	});
});

$(document).ready( function () {
	var offset = $(".sticky-nav").offset().top;
	$(window).scroll( function () {
		if($(window).scrollTop() > offset && !($(".sticky-nav").hasClass("sticky"))) {
			$(".sticky-nav").addClass("sticky");
		} else if ($(window).scrollTop() <= offset && ($(".sticky-nav").hasClass("sticky"))) {
			$(".sticky-nav").removeClass("sticky");
		}
	});
});
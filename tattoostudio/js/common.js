$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$(window).scroll(function() {
		if ($(this).scrollTop() > 1){
			$('header').addClass("sticky");
		}
		else{
			$('header').removeClass("sticky");
		}
	});

});

$(document).ready(function() {

	$('.preloader').delay(1000).fadeOut('slow');

	var $container = $(".masonry-container");
	$container.imagesLoaded(function () {
		$container.masonry({
			columnWidth: ".item",
			itemSelector: ".item"
		});
		$(".item").imagefill();
	});

	$(".popupimg").magnificPopup({
		type:'image',
		gallery:{
			enabled:true
		},
		removalDelay:300,
		mainClass:'mfp-fade'
	});

// Menu settings
$('#menuToggle, .menu-close').on('click', function(){
	$('#menuToggle').toggleClass('active');
	$('#theMenu').toggleClass('menu-open');
});

// Scroll Button Top
$(window).scroll(function() {
	if ($(this).scrollTop() > $(this).height()){
		$('.button_top').addClass('active');
	}
	else{
		$('.button_top').removeClass('active');
	}
});
			});


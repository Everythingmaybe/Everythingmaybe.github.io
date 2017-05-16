$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

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
					$('body').toggleClass('body-push-toright');
					$('#theMenu').toggleClass('menu-open');
				});

				// Scroll Button Top
				$(window).scroll(function() {
					if ($(this).scrollTop() > 1){
						$('.button_top').css("display","block");
					}
					else{
						$('.button_top').css("display","none");
					}
				});
			});



$(function() {
	$('#da-slider1').cslider();
	$('#da-slider2').cslider();
	$('#da-slider3').cslider();

	/*Smooth scrolls link*/
	$("body").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    /* Fixed menu */
	$(window).scroll(function(){
		if($(this).scrollTop()>120){
			$('#nav').addClass('fixed');
			$('.hidd').addClass('visible');
		}
		else if ($(this).scrollTop()<100){
			$('#nav').removeClass('fixed');
			$('.hidd').removeClass('visible');
		}
	});

	/* Mobile Menu */

	$( ".cross" ).hide();
	$( ".menu-mobile" ).hide();

	$( ".hamburger" ).click(function() {
		$( ".menu-mobile" ).slideToggle( "slow", function() {
			$( ".hamburger" ).hide();
			$( ".cross" ).show();
		});
	});

	$( ".cross" ).click(function() {
		$( ".menu-mobile" ).slideToggle( "slow", function() {
			$( ".cross" ).hide();
			$( ".hamburger" ).show();
		});
	});

	/*Radial Indicator */
	radialIndicator.defaults.radius = 62;
	radialIndicator.defaults.barColor = "#19BD9A";
	radialIndicator.defaults.fontColor = "#81868e";
	radialIndicator.defaults.barBgColor = "#81868e";
	radialIndicator.defaults.fontSize = 24;
	radialIndicator.defaults.fontWeight = "normal";
	radialIndicator.defaults.percentage = true;

	$('#indicatorBrand').radialIndicator();
	$('#indicatorDesign').radialIndicator();
	$('#indicatorUI').radialIndicator();

	var
	radialBrand = $('#indicatorBrand').data('radialIndicator'),
	radialDesign = $('#indicatorDesign').data('radialIndicator'),
	radialUI = $('#indicatorUI').data('radialIndicator');

	radialBrand.value(80);
	radialDesign.value(75);
	radialUI.value(60);


	/*Grid gallery*/
	var $container = $(".masonry-container");
	$container.imagesLoaded(function () {
		$container.masonry({
			columnWidth: ".item",
			itemSelector: ".item",
			horizontalOrder: true,
			//gutter: 10,
		});
	});

	/* Price-block hover */
	$('#second-price').hover(function() {
		$('.info-second').css("z-index","2");
	}, function() {
		$('.info-second').css("z-index","0");
	});

	/* Map open*/
	$(".map").click(function() {
		$(".map").fadeOut('400', function() {	
		});;
	});
});
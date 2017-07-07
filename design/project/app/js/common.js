$(function() {
	
		/* Nav */
	$('.nav .menu-opener').click(function() {
		$('.menu').slideToggle(400);
	});

	$('.close-menu').click(function() {
		$('.menu').slideToggle(400);
	});

	$('.nav-mobile .menu-opener').click(function() {
		$('.nav-mobile').toggleClass('open');
		$('.nav-mobile .menu-opener i').toggleClass('none');
	});

		/*Smooth scrolls link*/
	$("body").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

     /* Open Modal Window*/

     $('.item-view a').click( function(){
     	var parent = $(this).parents(".item");
     	$('.modal-window', parent).fadeIn('fast');
     });

     $('.modal-window .close-button').click(function() {
     	$('.modal-window').fadeOut('fast')
     });     

	/* Slider */
	function itemSlider(slider,navslider) {
		var 
		lenght_slider = $(slider).children.length,
		slides = $(slider).find($('.slide')),
		navs = $(navslider).find($('.slide-small')),
		selectIndex = 0;
		navs.eq(selectIndex).addClass('active');
		slides.eq(selectIndex).addClass('active');

		$(navslider).find('.arrow-left').click(function() {
			navs.eq(selectIndex).removeClass('active');
			slides.eq(selectIndex).removeClass('active');
			if (selectIndex == 0) {
				selectIndex = lenght_slider - 1;
			} else {--selectIndex};
			navs.eq(selectIndex).addClass('active');
			slides.eq(selectIndex).addClass('active');
		});

		$(navslider).find('.arrow-right').click(function() {
			navs.eq(selectIndex).removeClass('active');
			slides.eq(selectIndex).removeClass('active');
			if (selectIndex == lenght_slider - 1) {
				selectIndex = 0;
			} else {++selectIndex};
			navs.eq(selectIndex).addClass('active');
			slides.eq(selectIndex).addClass('active');
		});

		$(navslider).find('.slide-small').click(function() {
			navs.eq(selectIndex).removeClass('active');
			slides.eq(selectIndex).removeClass('active');
			selectIndex = $(this).index() - 1;
			navs.eq(selectIndex).addClass('active');
			slides.eq(selectIndex).addClass('active');
		});	
	};

   itemSlider(sliderTarget1,sliderNav1);
   itemSlider(sliderTarget2,sliderNav2);


});
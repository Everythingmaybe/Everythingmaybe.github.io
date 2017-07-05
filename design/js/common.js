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

});
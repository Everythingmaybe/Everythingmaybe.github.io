$(function() {

	/* Animate */

	$.fn.extend({
		animateCss: function (animationName) {
			var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			this.addClass('animated ' + animationName).one(animationEnd, function() {
				$(this).removeClass('animated ' + animationName);
			});
			return this;
		}
	});

	/* Slider */

	var slider1;

	slider1 = new iceSlider.hammerSlider({
		/* obrigatory */
		wrapper : '#slider1Wrapper',
		container : '#slider1Container', 
		item : '.slider1Item', 
		/* optionals */
		itemActiveClass : 'active',
		leftArrow : '.arrow-left',
		rightArrow : '.arrow-right',
		count : '#count',
		arrowInactiveClass : 'inactive',
		dots : '#slider1Dots',
		dotActiveClass : 'slider1-currentDot',
		autoSlide : false,
		setTime : 5000
	});
	slider1.init();

	$('.arrow-right,.arrow-left').click(function() {
		var current = +slider1.internal.currentItem+1;
		$('#count').html('0'+ current);

	});

	$('#slider1Dots>a').click(function() {
		var curren = $(this).attr('Index');
		$('#count').html('0'+ curren);
	})

	/* Animate */

	$( ".feature-block .link a").hover(function() {
		$(this).next('hr').width(65);
		$(this).parents('.feature-block').find('.icon, .title').css('opacity', '0.5');
	},
	function() {
		$(this).next('hr').width(35);
		$(this).parents('.feature-block').find('.icon, .title').css('opacity', '1');
	});

		/* Animate scroll */

	new WOW().init();

	$('#buttonSubmit').click(function(e){
		if (!($("#checkSubmit").prop("checked"))) {
			e.preventDefault();
			$("#formSubmit").animateCss('shake');
		}
	})

	var valedit = $('#editSubmit').val();

	$('#editSubmit').change(function() {
		if ($('#editSubmit').val() === valedit) {
			$('.placeholder').css('top', '10px');
		} else {
			$('.placeholder').css('top', '-10px');
		}

	});

});


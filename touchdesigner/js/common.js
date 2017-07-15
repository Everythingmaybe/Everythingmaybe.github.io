$(function() {

	$.fn.extend({
		animateCss: function (animationName,func) {
			var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			this.addClass('animated ' + animationName).one(animationEnd, function() {
				$(this).removeClass('animated ' + animationName);
				func();
			});
			return this;
		}
	});

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


	$('.dropCode').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		var link = '#' + $(this).attr('ref');

		if($(link).hasClass('open')) {
			$(this).removeClass('fa-chevron-circle-up').addClass('fa-chevron-circle-down');
			$(link).removeClass('open');
		} else {
			$(this).removeClass('fa-chevron-circle-down').addClass('fa-chevron-circle-up');
			$(link).addClass('open');
		}
		
	});

	$( ".feature-block .link a").hover(function() {
		$(this).next('hr').width(65);
		$(this).parents('.feature-block').find('.icon, .title').css('opacity', '0.5');
	},
	function() {
		$(this).next('hr').width(35);
		$(this).parents('.feature-block').find('.icon, .title').css('opacity', '1');
	});




});


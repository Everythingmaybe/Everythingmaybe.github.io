$(function() {
	$('#da-slider1').cslider();
	$('#da-slider2').cslider();
	$('#da-slider3').cslider();

	var $container = $(".masonry-container");
	$container.imagesLoaded(function () {
		$container.masonry({
			columnWidth: ".item",
			itemSelector: ".item",
			horizontalOrder: true,
			//gutter: 10,
		});
	});
});
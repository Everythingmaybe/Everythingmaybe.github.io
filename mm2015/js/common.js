$(function() {

	$("#theTarget").skippr({
		speed: 3000,
		autoPlay: false,
		autoPlayDuration: 15000,
	});

    /* Open/Close section */

    var
    openbool = false,
    heightelem = $('.open-section').height(),
    heightParent = $('.slider').height();
    $('.open-section').css({top: heightParent });
    $('.open-section').show();

    $(window).resize(function() {
    	var
      heightelem = $('.open-section').height(),
      heightParent = $('.slider').height();
      if (openbool) {
          $('.open-section').css({top:heightParent - heightelem});
          openbool = true;
      } else {
          $('.open-section').css({top: heightParent });
          openbool = false;
      }
  });

    $('.open').click(function() {
    	var
      heightelem = $('.open-section').height(),
      heightParent = $('.slider').height();
      if (openbool) {
          $('.open-section').css({top:heightParent });
          openbool = false;
          $('.open').addClass('close');
      } else {
          $('.open-section').css({top: heightParent - heightelem});
          openbool = true;
          $('.open').removeClass('close');
      }
  });

    /* Open/close reserv form */

    $('.cross').click(function() {
        $('.modal-window').fadeOut('400');
    });

    $('.reserv-link').on('click',function(e) {
        e.preventDefault();
        $('.modal-window').fadeIn('400');
    });

});
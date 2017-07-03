$(function() {

	$("#theTarget").skippr({
		speed: 3000,
		autoPlay: false,
		autoPlayDuration: 15000,
	});

    /* Menu open/close */

    $(".trigger-menu").click(function() {
      var ww = document.body.clientWidth;
      if (ww <= 600) {
        $('.nav').slideToggle('slow');
        $('.nav').toggleClass('nav-open');
      }
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
      ww = document.body.clientWidth,
      heightelem = $('.open-section').height(),
      heightParent = $('.slider').height();
      if (ww > 600) {
        $('.nav').show();
      };
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

    $('.block-form a').on('click',function(e) {
        e.preventDefault();
        $('.reg').toggleClass('reg-close');
        $('.accedi').toggleClass('log-open');
    });


});
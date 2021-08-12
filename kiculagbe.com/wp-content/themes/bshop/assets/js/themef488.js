// scroll
jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 36) {
    jQuery('.site-header').addClass('sticky');
    } else {
    jQuery('.site-header').removeClass('sticky');
    };
});

//Mega Menu Toggler
jQuery(function(){var s=jQuery(".menu-toggle"),u=jQuery(".responsive-menu-wrap");
s.on("click",function(){u.hasClass("hide")?(u.removeClass("hide").addClass("show"),
s.addClass("open")):(u.removeClass("show").addClass("hide"),s.removeClass("open"))})});

jQuery(document).ready(function($){
    var offset = 100;
    var speed = 250;
    var duration = 500;
        $(window).scroll(function(){
            if ($(this).scrollTop() < offset) {
                      $('.topbutton') .fadeOut(duration);
            } else {
                      $('.topbutton') .fadeIn(duration);
            }
        });
     $('.topbutton').on('click', function(){
            $('html, body').animate({scrollTop:0}, speed);
            return false;
            });
});

jQuery(document).ready(function() {
    "use strict";
    jQuery('#log-tab').click(function() {
        jQuery(this).addClass('active');
        jQuery('#reg-tab').removeClass('active');
   });
   jQuery('#reg-tab').click(function() {
        jQuery(this).addClass('active');
        jQuery('#log-tab').removeClass('active');
   });

    jQuery('#log-tab').click(function(event){event.preventDefault();
	    jQuery('#register-col').removeClass('open');
	    jQuery('#login-col').addClass('open');
	});
    jQuery('#reg-tab').click(function(event){event.preventDefault();
	    jQuery('#login-col').removeClass('open');
	    jQuery('#register-col').addClass('open');
	});
});
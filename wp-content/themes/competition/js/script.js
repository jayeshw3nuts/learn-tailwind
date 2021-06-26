
function LoadReadyResize()
{
	'use strict';
	
	
	
	
}


/*=============================================================================================*/
/* Load Function START Here*/
jQuery(window).on("load",function() {
	'use strict';
	
    
	
	
});
/* Load Function END Here*/
/*=============================================================================================*/

/*=============================================================================================*/
/* Ready Function START Here*/
jQuery(document).ready(function() {
	'use strict';
	
	/* Loadready Function */
	LoadReadyResize();
	/* Loadready Function */
	
	/*jQuery(".latest_media_home").slick({
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		//cssEase: '',
		//speed: 0,
		draggable: false,
		prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
  	});*/
	
	
	/*=====================================*/
	/* Homepage Footer Flag Slider : Start */
	jQuery('.home_bann_slider').owlCarousel({
		loop:false,
		margin:0,
		nav:false,
		dots:true,
		smartSpeed: 700,
		navText: [
			'<span aria-label="' + 'Previous' + '"></span>',
			'<span aria-label="' + 'Next' + '"></span>'
		],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
	/* Homepage Footer Flag Slider : End */
	/*=====================================*/

	//team_slider

	jQuery('.team_slider').owlCarousel({
		loop:false,
		margin:16,
		nav:true,
		dots:false,
		smartSpeed: 700,
		navText: [
			'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="21.4px" height="16.8px" viewBox="0 0 21.4 16.8" enable-background="new 0 0 21.4 16.8" xml:space="preserve"><g id="arrow-right" transform="translate(0 1.414)"><path id="Path" fill="none" stroke="#151515" stroke-width="2" stroke-miterlimit="10" d="M1.4,7h20"/><path id="Path-2" fill="none" stroke="#151515" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" d="M8.4,14l-7-7		l7-7"/></g></svg>',
			'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="21.4px" height="16.8px" viewBox="0 0 21.4 16.8" enable-background="new 0 0 21.4 16.8" xml:space="preserve"><g id="arrow-right" transform="translate(0 1.414)"><path id="Path" fill="none" stroke="#151515" stroke-width="2" stroke-miterlimit="10" d="M0,7h20"/><path id="Path-2" fill="none" stroke="#151515" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" d="M13,0l7,7		l-7,7"/></g></svg>'
		],
		responsive:{
			0:{
				items:2
			},
			600:{
				items:3
			},
			1000:{
				items:4
			}
		}
	});

	jQuery('.pro_slider_comm').owlCarousel({
		loop:false,
		margin:16,
		nav:true,
		dots:false,
		smartSpeed: 700,
		navText: [
			'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="21.4px" height="16.8px" viewBox="0 0 21.4 16.8" enable-background="new 0 0 21.4 16.8" xml:space="preserve"><g id="arrow-right" transform="translate(0 1.414)"><path id="Path" fill="none" stroke="#151515" stroke-width="2" stroke-miterlimit="10" d="M1.4,7h20"/><path id="Path-2" fill="none" stroke="#151515" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" d="M8.4,14l-7-7		l7-7"/></g></svg>',
			'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="21.4px" height="16.8px" viewBox="0 0 21.4 16.8" enable-background="new 0 0 21.4 16.8" xml:space="preserve"><g id="arrow-right" transform="translate(0 1.414)"><path id="Path" fill="none" stroke="#151515" stroke-width="2" stroke-miterlimit="10" d="M0,7h20"/><path id="Path-2" fill="none" stroke="#151515" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" d="M13,0l7,7		l-7,7"/></g></svg>'
		],
		responsive:{
			0:{
				items:2
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});

	var brandowl = jQuery('.brand_slider');
	brandowl.owlCarousel({
		loop:false,
		margin:0,
		nav:false,
		dots:false,
		smartSpeed: 700,
		navText: [
			'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="21.4px" height="16.8px" viewBox="0 0 21.4 16.8" enable-background="new 0 0 21.4 16.8" xml:space="preserve"><g id="arrow-right" transform="translate(0 1.414)"><path id="Path" fill="none" stroke="#151515" stroke-width="2" stroke-miterlimit="10" d="M1.4,7h20"/><path id="Path-2" fill="none" stroke="#151515" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" d="M8.4,14l-7-7		l7-7"/></g></svg>',
			'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="21.4px" height="16.8px" viewBox="0 0 21.4 16.8" enable-background="new 0 0 21.4 16.8" xml:space="preserve"><g id="arrow-right" transform="translate(0 1.414)"><path id="Path" fill="none" stroke="#151515" stroke-width="2" stroke-miterlimit="10" d="M0,7h20"/><path id="Path-2" fill="none" stroke="#151515" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" d="M13,0l7,7		l-7,7"/></g></svg>'
		],
		responsive:{
			0:{
				items:2
			},
			600:{
				items:2
			},
			1000:{
				items:4
			}
		}
	});
	
	jQuery('.brand_next').click(function() {
		brandowl.trigger('next.owl.carousel');
		//console.log(brandowl.trigger('page.count'));
	});
	// Go to the previous item
	jQuery('.brand_prev').click(function() {
		// With optional speed parameter
		// Parameters has to be in square bracket '[]'
		brandowl.trigger('prev.owl.carousel', [300]);
	});

	jQuery('.marquee').marquee({
		direction: 'left',
		duration: 10000,
	});

	
	var numberslider = jQuery("#second-number-val");
	numberslider.slick({ 
		slidesToShow: 1, 
		slidesToScroll: 1, 
		arrows: !1, 
		dots: !1, 
		infinite: false,
		autoplaySpeed: 5000, 
		vertical: !0, 
		asNavFor: "#process-slider-content-wrap" 
	});
	var textslider = jQuery("#process-slider-content-wrap");
	textslider.slick({ 
		slidesToShow: 1, 
		slidesToScroll: 1, 
		asNavFor: "#second-number-val", 
		dots: !1, 
		arrows: !1, 
		infinite: false,
		fade: !0 ,
		
	});
	jQuery("#our-process-slider-controller .slide-prev").click(function () {
		$("#process-slider-content-wrap").slick("slickPrev");
	});
	jQuery("#our-process-slider-controller .slide-next").click(function () {
		$("#process-slider-content-wrap").slick("slickNext");
	});

	textslider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
		//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
		var i = (currentSlide ? currentSlide : 0) + 1;
		//$status.text(i + '/' + slick.slideCount);
		//console.log(slick.slideCount);

		if(currentSlide === 0) {
			jQuery("#our-process-slider-controller .slide-prev").addClass("disable");
		} else {
			jQuery("#our-process-slider-controller .slide-prev").removeClass("disable");
		}

		if(currentSlide === slick.slideCount - 1) {
			jQuery("#our-process-slider-controller .slide-next").addClass("disable");
		} else {
			jQuery("#our-process-slider-controller .slide-next").removeClass("disable");
		}

	});
	

	jQuery(textslider).on('afterChange', function (event, slick, currentSlide) {
		
	});




	/*========================================*/
	/* For Custome Selectbox Function : Start */
		jQuery('select:not(.ignore)').niceSelect();      
		//FastClick.attach(document.body);
	/* For Custome Selectbox Function : End */
	/*========================================*/
	
	/*========================================*/
	/* For Wow Animation Function : Start */
		new WOW().init();
	/* Wow Animation End*/
	/*========================================*/
	
	jQuery(".lanboxdd .dropdown-menu span").on("click", function(e){
		e.preventDefault();
		var htmlvalue = jQuery(this).attr("data-name");
		jQuery(this).parents(".lanboxdd").find(".current").html(htmlvalue);
		jQuery(this).addClass("active");
    	jQuery(this).siblings().removeClass("active");
	});
	
	
	stickyheader();
	
	
});
/* Ready Function END Here*/
/*=============================================================================================*/


/*=============================================================================================*/
/* Resize Function START Here*/
jQuery(window).resize(function() {
	'use strict';
	stickyheader();
	LoadReadyResize();
	
});
/* Resize Function END Here*/
/*=============================================================================================*/



/*=====================================*/
/* Event Sidebar sticky Start */

var winscroll = 0;
var headerheight = 0;
var aboutnavofftop = 0;
var abtnavheight = 0;

function stickyheader() {

	winscroll = jQuery(window).scrollTop();
	if ( winscroll > 1 ) {
		jQuery("#header").addClass("showheader");
	} else {
		jQuery("#header").removeClass("showheader");
	}

	if(jQuery(".about_nav_wrap").length > 0) {
		abtnavheight = jQuery(".about_nav").outerHeight();
		jQuery(".about_nav_wrap").css("height", abtnavheight);

		if ( winscroll > 1 ) {
			setTimeout(function(){
				headerheight = jQuery(".header_wapper").outerHeight();
			},400 );
		}
		var aboutnavofftop = jQuery(".about_nav_wrap").offset().top;
		if ( winscroll > aboutnavofftop-headerheight) {
			jQuery(".about_nav_wrap").addClass("hasabtsticky");
			setTimeout(function(){
				jQuery(".about_nav").css("top", headerheight);
			},500 );
		} else {
			jQuery(".about_nav_wrap").removeClass("hasabtsticky");
			jQuery(".about_nav").css("top","auto");
		}
	}

}

jQuery(window).scroll(function() {
	
	
	var winscroll = jQuery(window).scrollTop();
	
	//console.log(rightbaroff+'--'+winscroll);
	//console.log(bottompos);
	
	if ( winscroll > 1 ) {
		jQuery("#header").addClass("showheader");
	} else {
		jQuery("#header").removeClass("showheader");
	}
	
	if ( winscroll > 1 ) {
		setTimeout(function(){
			headerheight = jQuery(".header_wapper").outerHeight();
		},400 );
	}

	if(jQuery(".about_nav_wrap").length > 0) {
		var aboutnavofftop = jQuery(".about_nav_wrap").offset().top;
		if ( winscroll > aboutnavofftop-headerheight) {
			jQuery(".about_nav_wrap").addClass("hasabtsticky");
			jQuery(".about_nav").css("top", headerheight);
		} else {
			jQuery(".about_nav_wrap").removeClass("hasabtsticky");
			jQuery(".about_nav").css("top","auto");
		}
	}
	
});
/* Event Sidebar sticky End */
/*=====================================*/



$(document).ready(function () {
    $(window)
        .resize(function () {
            if ($(window).width() >= 1024) {
                var $animation_elements = $(".animatewn");
                var $window = $(window);
                function check_if_in_view() {
                    var window_height = $window.height();
                    var window_top_position = $window.scrollTop();
                    var window_bottom_position = window_top_position + window_height - 100;
                    $.each($animation_elements, function () {
                        var $element = $(this);
                        var element_height = $element.outerHeight();
                        var element_top_position = $element.offset().top;
                        var element_bottom_position = element_top_position + element_height;
                        if (element_bottom_position >= window_top_position && element_top_position <= window_bottom_position) {
                            $element.addClass("in_screen");
                        } else {
                        }
                    });
                }
                $window.on("scroll resize", check_if_in_view);
                $window.trigger("scroll");
            } else {
                var $animation_elements = $(".animatewn");
                var $window = $(window);
                function check_if_in_view() {
                    var window_height = $window.height();
                    var window_top_position = $window.scrollTop();
                    var window_bottom_position = window_top_position + window_height - 50;
                    $.each($animation_elements, function () {
                        var $element = $(this);
                        var element_height = $element.outerHeight();
                        var element_top_position = $element.offset().top;
                        var element_bottom_position = element_top_position + element_height;
                        if (element_bottom_position >= window_top_position && element_top_position <= window_bottom_position) {
                            $element.addClass("in_screen");
                        } else {
                        }
                    });
                }
                $window.on("scroll resize", check_if_in_view);
                $window.trigger("scroll");
            }
        })
        .resize();
});



if(jQuery("#counter").length > 0) {
	var a = 0;
	$(window).scroll(function() {

		var oTop = $('#counter').offset().top - window.innerHeight;
		if (a == 0 && $(window).scrollTop() > oTop) {
			$('.counter-value').each(function() {
				var $this = $(this),
				countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				},

				{
					duration: 2000,
					easing: 'swing',
					step: function() {
					$this.text(Math.floor(this.countNum));
				},
					complete: function() {
						$this.text(this.countNum);
						//alert('finished');
					}
				});
			});
			a = 1;
		}

	});
}




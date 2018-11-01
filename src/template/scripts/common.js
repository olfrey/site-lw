$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');


	var panel = $('.panel'),
			panelClass = 'panel_scroll';

	$(window).on('load scroll', function () {
		var scrollTop = $(window).scrollTop();

		if (scrollTop > 1) {
			panel.addClass(panelClass);
		} else {
			panel.removeClass(panelClass);
		}

		$('.slide').each(function () {
			if (scrollTop > $(this).offset().top - 300) {
				$(this).addClass('slide_load');
			}
		})

	});

	var reviews = $('.reviews__list'),
			reviewsItem = $('.reviews__item'),
			reviewsItemTotal = reviewsItem.length,
			reviewsArrows = $('.reviews__arrows'),
			reviewsDots = $('.reviews__dots'),
			reviewsCurrent = $('.reviews__data-current'),
			reviewsTotal = $('.reviews__data-total');


	if (reviewsItemTotal < 10) {
		reviewsTotal.html('0' + reviewsItemTotal);
	} else{
		reviewsTotal.html(reviewsItemTotal);
	}

	reviews.slick({
		slidesToShow: 3,
		dots: true,
		appendArrows: reviewsArrows,
		appendDots: reviewsDots,
		responsive: [{
			breakpoint: 1270,
			settings: {
				slidesToShow: 2
			}} , {
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				adaptiveHeight: true
			}
		}]
	})
	reviews.on('afterChange', function(event, slick, direction){
	  var reviewItemIndex = direction + 1;
		if (reviewItemIndex < 10) {
			reviewsCurrent.html('0' + reviewItemIndex);
		} else{
			reviewsCurrent.html(reviewItemIndex);
		}
	});

	$("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top - 90 +"px"}, 1500);
    return false;
	});

});

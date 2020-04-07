var owl = $('.v-fall-main-slider');
var owl2 = $('.v-fall-main-block__container-carousel')
var owl3 = $('.showlaxy-main-slider');
var owl4 = $('.showlaxy-main-block__container-carousel')
var owl5 = $('.showlaxy-main-block__container-animate')
var owl6 = $('.ladines-main-slider');
var owl7 = $('.ladines-main-block__container-carousel')

// OWL initializers
owl.owlCarousel({
	center: true,
	items: 2,
	loop: true,
	margin: 10,
	autoWidth: true,
});

owl2.owlCarousel({
	items: 4,
	loop: true,
	margin: 26,
	autoWidth: true
});

owl3.owlCarousel({
	center: true,
	items: 2,
	loop: true,
	margin: 10,
	autoWidth: true,
});

owl4.owlCarousel({
	items: 4,
	loop: true,
	margin: 26,
	autoWidth: true
});

owl5.owlCarousel({
	items: 6,
	loop: true,
	margin: 27,
	autoWidth: true
});

owl6.owlCarousel({
	center: true,
	items: 2,
	loop: true,
	margin: 23,
	autoWidth: true,
});

owl7.owlCarousel({
	items: 4,
	loop: true,
	margin: 20,
	autoWidth: true
});

// Video mask and play
var video = $("video"),
	pauseButton = $(".v-fall-inner__video-btn");
	pauseButton.bind('click', function() {
	if (video.get(0).paused) {
		video.get(0).play();
	} else {
		video.get(0).pause();
	}
});

//Custom js
$(".v-fall-inner__content-slide").click(function() {
	$('.v-fall-inner__content-text').animate({
		height: 250
	})
})

$(".showlaxy-inner__content-slide").click(function() {
	$('.showlaxy-inner__content-text').animate({
	  height: 250
	})
})

$(document).on('click', '.ladines-main-block__item', function(e) {
	e.preventDefault();

	$('body').css('overflow', 'hidden');
	$('.ladines-modal').fadeIn();
})

$('.ladines-modal__close').click(function() {
	$('.ladines-modal').fadeOut();
	$('body').css('overflow', 'auto');
})

$(".ladines-inner__content-slide").click(function() {
	$('.ladines-inner__content-text').animate({
	  height: 250
	})
})

//Btn owl triggers
$('.v-fall-main-slide__next').click(function() {
	owl.trigger('next.owl.carousel', [300]);
})

$('.v-fall-main-slide__prev').click(function() {
	owl.trigger('prev.owl.carousel', [300]);
})

$('.v-fall-main-block__carousel-right').click(function() {
	owl2.trigger('next.owl.carousel', [300]);
})

$('.v-fall-main-block__carousel-left').click(function() {
	owl2.trigger('prev.owl.carousel', [300]);
})
      
$('.showlaxy-main-slide__next').click(function() {
	owl3.trigger('next.owl.carousel', [300]);
})

$('.showlaxy-main-block__carousel-right').click(function() {
	owl4.trigger('next.owl.carousel', [300]);
})
$('.showlaxy-main-block__carousel-left').click(function() {
	owl4.trigger('prev.owl.carousel', [300]);
})

$('.showlaxy-main-block__container-animate-next').click(function() {
	owl5.trigger('next.owl.carousel', [300]);
})

$('.ladines-main-slide__next').click(function() {
	owl6.trigger('next.owl.carousel', [300]);
})
$('.ladines-main-slide__prev').click(function() {
	owl6.trigger('prev.owl.carousel', [300]);
})

$('.ladines-main-block__carousel-right').click(function() {
	owl7.trigger('next.owl.carousel', [300]);
})
$('.ladines-main-block__carousel-left').click(function() {
	owl7.trigger('prev.owl.carousel', [300]);
})
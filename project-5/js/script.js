$(document).ready(function() {
	var owl = $('.owl-carousel');
	$('.owl-carousel').owlCarousel({
		loop:true,
		autoplay:true,
		margin:15,
		nav:true,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			1024:{
				items:2
			}
		}
	});
	
});
let section = document.querySelector(".skills");
let spans = document.querySelectorAll(".bar");
// var section = document.getElementById('skills');


window.onscroll = function(){
	if (window.scrollY >= section.offsetTop) {
		console.log("Reached Section Skills");
		spans.forEach((span) => {
			span.style.width = span.dataset.width;
		});
	}
};



// var offsetTop = $('#skills').offset().top;
// $(window).scroll(function() {
// 	var height = $(window).height();
// 	if ($(window).scrollTop()+height > offsetTop) {
// 		jQuery('.bar').each(function(){
// 			jQuery(this).find('.bar').animate({
// 				width:jQuery(this).attr('data-percent')
// 			},2000);
// 		});
// 	}
// });



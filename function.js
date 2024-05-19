// let section = document.querySelector(".skills");
// let spans = document.querySelectorAll(".bar");


// window.onscroll = function(){
// 	const section = document.getElementById("skills");
// 	const spans = section.querySelectorAll(".bar");
// 	if (window.scrollY >= section.offsetTop) {
// 		console.log("Reached Section Skills");
// 		spans.forEach((span) => {
// 			span.style.width = span.dataset.width;
// 		});

// 	}
// };


window.onscroll = function(){
	const section = document.getElementById("skills");
	const spans = section.querySelectorAll(".bar");

	// const html = document.querySelector(".html");
	// const css = section.querySelector(".css");
	// const photoshop = section.querySelector(".photoshop");
	// const illustrator = section.querySelector(".illustrator");
	// const javascript = section.querySelector(".javascript");
	
	if (window.scrollY >= section.offsetTop) {
		console.log("Reached Section Skills");
		spans.forEach((span) => {
			span.style.animation = "spans 5s forwards";
		});


		// html.style.animation = "html 5s forwards";
		// css.style.animation = "css 5s forwards";
		// photoshop.style.animation = "photoshop 5s forwards";
		// illustrator.style.animation = "illustrator 5s forwards";
		// javascript.style.animation = "javascript 5s forwards";

	}
};



$(document).ready(function(){
	$('.w3standards').remove(); // These are just to get things validated
	
	// var paper = Raphael('raphael');
	// 
	// paper.g.piechart(320, 240, 100, [10, 3, 1], { 	legend: ["Started", "Finished", "Delivered"], 
	// 																	legendpos: "west", 
	// 																	href: [ "http://pivotaltracker.com" ]});
	
	// var t = Raphael( $('#graphh').get(0) );
	// t.g.piechart(320, 240, 100, [55, 20, 13, 32, 5, 1, 2, 10]);
	
	$('.gravatar-replace').each(function() {
		$(this).replaceWith($.gravatar(this.innerText));	
	});
	
});

function main() {
	$("#main").hide();
	$("#main").fadeIn(1500);

	$(".content").hide();

	$("h3").on("click", function() {
		$(this).next().slideToggle(500);
		$(this).toggleClass("active");
	});
}

$(document).ready(main);

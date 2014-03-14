$(document).ready(function() {
	$(".menu .item").click(function() {
		var location = $(this).find(".titulo a").attr("href");
		if (location != undefined) {
			window.location=location; return false;
		}
	});
});
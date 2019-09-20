function resizeForMobile() {
	"use strict";
	if (typeof window.orientation !== 'undefined') {
		$("#header-image").css("width", "95%");
		$(".cubicle").css("width", "40%");
		$(".cubicle-image").css("width", "100%");
		$("#footer-image").css("width", "50%");
	}
}
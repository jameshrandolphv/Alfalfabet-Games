function resizeForMobile() {
	"use strict";
	if (typeof window.orientation !== 'undefined') {
		$("#container").css("width", "80%");
		$("body").css("font-size", "40px");
	}
}
(function () {

	"use strict";

	//sticky header on scroll up after scrolling down
	let lastScroll = 0;
	let isScrolled = false;
	window.addEventListener("scroll", function () {
		let topHeader = document.querySelector(".topheader");
		let currentScroll =
			window.pageYOffset ||
			document.documentElement.scrollTop ||
			document.body.scrollTop ||
			0;
		// var scrollDirection = currentScroll < lastScroll;
		let scrollDirection = currentScroll;
		let shouldToggle = isScrolled && scrollDirection;
		isScrolled = currentScroll > 100;
		topHeader.classList.toggle("active-topheader", shouldToggle);
		lastScroll = currentScroll;
	});
})()
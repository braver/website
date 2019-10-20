/* global window, document, Swipe, screenfull*/

window.mySwipe = new Swipe(document.getElementById("swipe"), {
	speed: 800,
	continuous: false,
	callback: function(index) {
		if (index > 0) {
			document.body.classList.add("initialized");
		} else {
			document.body.classList.remove("initialized");
		}
		if (index === window.mySwipe.getNumSlides() - 1) {
			document.body.classList.add("at-end");
		} else {
			document.body.classList.remove("at-end");
		}
	}
});

window.openAbout = function(event) {
	event.preventDefault();
	console.log(event);
	var pos = window.mySwipe.getPos().toString();
	document.body.classList.add("about-is-open");
	document.body.classList.remove("about-is-closed");
	document.querySelectorAll('.slide').forEach(function(i) {
		if (i.dataset.index !== pos) {
			i.classList.add("not-in-front");
		} else {
			i.classList.remove("not-in-front");
		}
	})
};
window.closeAbout = function() {
	document.body.classList.remove("about-is-open");
	document.body.classList.add("about-is-closed");
	document.querySelectorAll('.slide').forEach(function(i) {
		i.classList.remove("not-in-front");
	})
};

window.toggleFullscreen = function() {
	if (screenfull.isFullscreen) {
		screenfull.exit();
	} else if (screenfull.enabled) {
		screenfull.request();
	}
};

window.onload = function() {
	document.body.classList.add("loaded");
	if (!screenfull.enabled) {
		document.getElementById("fullscreen-button").remove();
	} else {
		document.addEventListener(screenfull.raw.fullscreenchange, function() {
			if (screenfull.isFullscreen) {
				document.body.classList.add("is-fullscreen");
			} else {
				document.body.classList.remove("is-fullscreen");
			}
		});
	}
};

// 27 = esc, 37 = left arrow, 38 = up, 39 = right
// http://unixpapa.com/js/key.html
// left & right don't trigger keypress in safari

window.onkeyup = function(event) {
	if (event.keyCode === 27 && document.body.classList.contains("about-is-open")) {
		window.closeAbout();
		event.preventDefault();
		event.stopPropagation();
	}
	if (event.keyCode === 37) {
		window.mySwipe.prev();
		event.preventDefault();
		event.stopPropagation();
	}
	if (event.keyCode === 39) {
		window.mySwipe.next();
		event.preventDefault();
		event.stopPropagation();
	}
	if (event.keyCode === 38) {
		window.toggleFullscreen();
		event.preventDefault();
		event.stopPropagation();
	}
};

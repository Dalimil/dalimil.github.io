$(function () {

	// skel.js
	skel.breakpoints({ 
		xlarge: '(max-width: 1800px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	// skel-layout.js
	skel.layout({ 
	    reset: "normalize",
	    grid: true,
	    containers: true
	});

	var $window = $(window);
	var $body = $('body');
	var $header = $('#header');

	// Disable animations/transitions until the page has loaded.
	$body.addClass('is-loading');

	$window.on('load', function() {
		$body.removeClass('is-loading');
	});

	// Touch?
	if (skel.vars.mobile) {
		// Turn on touch mode.
		$body.addClass('is-touch');

		// Height fix (mostly for iOS).
		window.setTimeout(function() {
			$window.scrollTop($window.scrollTop() + 1);
		}, 0);

	}

	// Header - Parallax background.
	var settings = {
		parallax: true, // Parallax background effect?
		parallaxFactor: 90 // Parallax factor (lower = more intense, higher = less intense).
	};
	// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
	if (skel.vars.browser == 'ie' || skel.vars.mobile) {
		settings.parallax = false;
	}

	if (settings.parallax) {
		skel.on('change', function() {

			if (skel.breakpoint('medium').active) {
				$window.off('scroll.strata_parallax');
				$header.css('background-position', 'top left, center center');
			}
			else {
				$header.css('background-position', 'left 0px');
				$window.on('scroll.strata_parallax', function() {
					$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
				});
			}

		});
	}

	$('.scrollup').click(function () {
		/* scroll back to projects */
		$("html, body").animate({
			scrollTop: $("#projects").offset().top
		}, 1000, 'easeInOutExpo');
		return false;
	});

	$('.scrolldown').click(function() {
		/* first disable all */
		$(".project-details").hide();

		var pSection = $(this).attr("href");
		$(pSection).show(); /* enable only this one */

		/* get href of itself and animate scroll */
		$("html, body").animate({
			scrollTop: $(pSection).offset().top
		}, 1000, 'easeInOutExpo');

		/* Text Shadow for the title */ 
		$(pSection).addClass("active-shadow");
		setTimeout(function() { $(pSection).removeClass("active-shadow"); }, 900);

		return false;
	});

	// Typing animation
	if(skel.vars.mobile) {
		$("#intro-header").hide();
	} else {
		$("#typed-animation").typed({
			strings: ["It's pronounced /'Dah-limil 'Ha-yek/^900", 
				"Computer Science undergraduate,<br />Developer and Hackathon enthusiast^1200!^4000!!"],
			/* stringsElement: $('#typed-strings'), */
			typeSpeed: 0,
			startDelay: 500,
			backDelay: 500,
			loop: false,
			contentType: 'html', // or text
		});
	}

	// Particles
	if(!skel.vars.mobile) {
		/*particlesJS("particles-js", {
		  "particles": {
		    "number": {
		      "value": 80,
		      "density": {
		        "enable": true,
		        "value_area": 800
		      }
		    },
		    "color": {
		      "value": "#ffffff"
		    },
		    "shape": {
		      "type": "circle",
		      "stroke": {
		        "width": 0,
		        "color": "#000000"
		      },
		      "polygon": {
		        "nb_sides": 5
		      },
		      "image": {
		        "src": "img/github.svg",
		        "width": 100,
		        "height": 100
		      }
		    },
		    "opacity": {
		      "value": 0.5,
		      "random": false,
		      "anim": {
		        "enable": false,
		        "speed": 1,
		        "opacity_min": 0.1,
		        "sync": false
		      }
		    },
		    "size": {
		      "value": 3,
		      "random": true,
		      "anim": {
		        "enable": false,
		        "speed": 40,
		        "size_min": 0.1,
		        "sync": false
		      }
		    },
		    "line_linked": {
		      "enable": true,
		      "distance": 150,
		      "color": "#ffffff",
		      "opacity": 0.4,
		      "width": 1
		    },
		    "move": {
		      "enable": true,
		      "speed": 6,
		      "direction": "none",
		      "random": false,
		      "straight": false,
		      "out_mode": "out",
		      "bounce": false,
		      "attract": {
		        "enable": false,
		        "rotateX": 600,
		        "rotateY": 1200
		      }
		    }
		  },
		  "interactivity": {
		    "detect_on": "canvas",
		    "events": {
		      "onhover": {
		        "enable": true,
		        "mode": "grab"
		      },
		      "onclick": {
		        "enable": true,
		        "mode": "push"
		      },
		      "resize": true
		    },
		    "modes": {
		      "grab": {
		        "distance": 140,
		        "line_linked": {
		          "opacity": 1
		        }
		      },
		      "bubble": {
		        "distance": 400,
		        "size": 40,
		        "duration": 2,
		        "opacity": 8,
		        "speed": 3
		      },
		      "repulse": {
		        "distance": 200,
		        "duration": 0.4
		      },
		      "push": {
		        "particles_nb": 4
		      },
		      "remove": {
		        "particles_nb": 2
		      }
		    }
		  },
		  "retina_detect": true
		});*/
	}

});

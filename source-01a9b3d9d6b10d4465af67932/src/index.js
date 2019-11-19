
import './css/main.css';

import $ from 'jquery';
import 'particles.js'; // window.particlesJS

/* Skel Lib - module-unfriendly so load like this */

/* skel.js v3.0.1 | (c) skel.io | MIT licensed */
var skel=function(){"use strict";var t={breakpointIds:null,events:{},isInit:!1,obj:{attachments:{},breakpoints:{},head:null,states:{}},sd:"/",state:null,stateHandlers:{},stateId:"",vars:{},DOMReady:null,indexOf:null,isArray:null,iterate:null,matchesMedia:null,extend:function(e,n){t.iterate(n,function(i){t.isArray(n[i])?(t.isArray(e[i])||(e[i]=[]),t.extend(e[i],n[i])):"object"==typeof n[i]?("object"!=typeof e[i]&&(e[i]={}),t.extend(e[i],n[i])):e[i]=n[i]})},newStyle:function(t){var e=document.createElement("style");return e.type="text/css",e.innerHTML=t,e},_canUse:null,canUse:function(e){t._canUse||(t._canUse=document.createElement("div"));var n=t._canUse.style,i=e.charAt(0).toUpperCase()+e.slice(1);return e in n||"Moz"+i in n||"Webkit"+i in n||"O"+i in n||"ms"+i in n},on:function(e,n){var i=e.split(/[\s]+/);return t.iterate(i,function(e){var a=i[e];if(t.isInit){if("init"==a)return void n();if("change"==a)n();else{var r=a.charAt(0);if("+"==r||"!"==r){var o=a.substring(1);if(o in t.obj.breakpoints)if("+"==r&&t.obj.breakpoints[o].active)n();else if("!"==r&&!t.obj.breakpoints[o].active)return void n()}}}t.events[a]||(t.events[a]=[]),t.events[a].push(n)}),t},trigger:function(e){return t.events[e]&&0!=t.events[e].length?(t.iterate(t.events[e],function(n){t.events[e][n]()}),t):void 0},breakpoint:function(e){return t.obj.breakpoints[e]},breakpoints:function(e){function n(t,e){this.name=this.id=t,this.media=e,this.active=!1,this.wasActive=!1}return n.prototype.matches=function(){return t.matchesMedia(this.media)},n.prototype.sync=function(){this.wasActive=this.active,this.active=this.matches()},t.iterate(e,function(i){t.obj.breakpoints[i]=new n(i,e[i])}),window.setTimeout(function(){t.poll()},0),t},addStateHandler:function(e,n){t.stateHandlers[e]=n},callStateHandler:function(e){var n=t.stateHandlers[e]();t.iterate(n,function(e){t.state.attachments.push(n[e])})},changeState:function(e){t.iterate(t.obj.breakpoints,function(e){t.obj.breakpoints[e].sync()}),t.vars.lastStateId=t.stateId,t.stateId=e,t.breakpointIds=t.stateId===t.sd?[]:t.stateId.substring(1).split(t.sd),t.obj.states[t.stateId]?t.state=t.obj.states[t.stateId]:(t.obj.states[t.stateId]={attachments:[]},t.state=t.obj.states[t.stateId],t.iterate(t.stateHandlers,t.callStateHandler)),t.detachAll(t.state.attachments),t.attachAll(t.state.attachments),t.vars.stateId=t.stateId,t.vars.state=t.state,t.trigger("change"),t.iterate(t.obj.breakpoints,function(e){t.obj.breakpoints[e].active?t.obj.breakpoints[e].wasActive||t.trigger("+"+e):t.obj.breakpoints[e].wasActive&&t.trigger("-"+e)})},generateStateConfig:function(e,n){var i={};return t.extend(i,e),t.iterate(t.breakpointIds,function(e){t.extend(i,n[t.breakpointIds[e]])}),i},getStateId:function(){var e="";return t.iterate(t.obj.breakpoints,function(n){var i=t.obj.breakpoints[n];i.matches()&&(e+=t.sd+i.id)}),e},poll:function(){var e="";e=t.getStateId(),""===e&&(e=t.sd),e!==t.stateId&&t.changeState(e)},_attach:null,attach:function(e){var n=t.obj.head,i=e.element;return i.parentNode&&i.parentNode.tagName?!1:(t._attach||(t._attach=n.firstChild),n.insertBefore(i,t._attach.nextSibling),e.permanent&&(t._attach=i),!0)},attachAll:function(e){var n=[];t.iterate(e,function(t){n[e[t].priority]||(n[e[t].priority]=[]),n[e[t].priority].push(e[t])}),n.reverse(),t.iterate(n,function(e){t.iterate(n[e],function(i){t.attach(n[e][i])})})},detach:function(t){var e=t.element;return t.permanent||!e.parentNode||e.parentNode&&!e.parentNode.tagName?!1:(e.parentNode.removeChild(e),!0)},detachAll:function(e){var n={};t.iterate(e,function(t){n[e[t].id]=!0}),t.iterate(t.obj.attachments,function(e){e in n||t.detach(t.obj.attachments[e])})},attachment:function(e){return e in t.obj.attachments?t.obj.attachments[e]:null},newAttachment:function(e,n,i,a){return t.obj.attachments[e]={id:e,element:n,priority:i,permanent:a}},init:function(){t.initMethods(),t.initVars(),t.initEvents(),t.obj.head=document.getElementsByTagName("head")[0],t.isInit=!0,t.trigger("init")},initEvents:function(){t.on("resize",function(){t.poll()}),t.on("orientationChange",function(){t.poll()}),t.DOMReady(function(){t.trigger("ready")}),window.onload&&t.on("load",window.onload),window.onload=function(){t.trigger("load")},window.onresize&&t.on("resize",window.onresize),window.onresize=function(){t.trigger("resize")},window.onorientationchange&&t.on("orientationChange",window.onorientationchange),window.onorientationchange=function(){t.trigger("orientationChange")}},initMethods:function(){document.addEventListener?!function(e,n){t.DOMReady=n()}("domready",function(){function t(t){for(r=1;t=n.shift();)t()}var e,n=[],i=document,a="DOMContentLoaded",r=/^loaded|^c/.test(i.readyState);return i.addEventListener(a,e=function(){i.removeEventListener(a,e),t()}),function(t){r?t():n.push(t)}}):!function(e,n){t.DOMReady=n()}("domready",function(t){function e(t){for(h=1;t=i.shift();)t()}var n,i=[],a=!1,r=document,o=r.documentElement,s=o.doScroll,c="DOMContentLoaded",d="addEventListener",u="onreadystatechange",l="readyState",f=s?/^loaded|^c/:/^loaded|c/,h=f.test(r[l]);return r[d]&&r[d](c,n=function(){r.removeEventListener(c,n,a),e()},a),s&&r.attachEvent(u,n=function(){/^c/.test(r[l])&&(r.detachEvent(u,n),e())}),t=s?function(e){self!=top?h?e():i.push(e):function(){try{o.doScroll("left")}catch(n){return setTimeout(function(){t(e)},50)}e()}()}:function(t){h?t():i.push(t)}}),Array.prototype.indexOf?t.indexOf=function(t,e){return t.indexOf(e)}:t.indexOf=function(t,e){if("string"==typeof t)return t.indexOf(e);var n,i,a=e?e:0;if(!this)throw new TypeError;if(i=this.length,0===i||a>=i)return-1;for(0>a&&(a=i-Math.abs(a)),n=a;i>n;n++)if(this[n]===t)return n;return-1},Array.isArray?t.isArray=function(t){return Array.isArray(t)}:t.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)},Object.keys?t.iterate=function(t,e){if(!t)return[];var n,i=Object.keys(t);for(n=0;i[n]&&e(i[n],t[i[n]])!==!1;n++);}:t.iterate=function(t,e){if(!t)return[];var n;for(n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])===!1)break},window.matchMedia?t.matchesMedia=function(t){return""==t?!0:window.matchMedia(t).matches}:window.styleMedia||window.media?t.matchesMedia=function(t){if(""==t)return!0;var e=window.styleMedia||window.media;return e.matchMedium(t||"all")}:window.getComputedStyle?t.matchesMedia=function(t){if(""==t)return!0;var e=document.createElement("style"),n=document.getElementsByTagName("script")[0],i=null;e.type="text/css",e.id="matchmediajs-test",n.parentNode.insertBefore(e,n),i="getComputedStyle"in window&&window.getComputedStyle(e,null)||e.currentStyle;var a="@media "+t+"{ #matchmediajs-test { width: 1px; } }";return e.styleSheet?e.styleSheet.cssText=a:e.textContent=a,"1px"===i.width}:t.matchesMedia=function(t){if(""==t)return!0;var e,n,i,a,r={"min-width":null,"max-width":null},o=!1;for(i=t.split(/\s+and\s+/),e=0;e<i.length;e++)n=i[e],"("==n.charAt(0)&&(n=n.substring(1,n.length-1),a=n.split(/:\s+/),2==a.length&&(r[a[0].replace(/^\s+|\s+$/g,"")]=parseInt(a[1]),o=!0));if(!o)return!1;var s=document.documentElement.clientWidth,c=document.documentElement.clientHeight;return null!==r["min-width"]&&s<r["min-width"]||null!==r["max-width"]&&s>r["max-width"]||null!==r["min-height"]&&c<r["min-height"]||null!==r["max-height"]&&c>r["max-height"]?!1:!0},navigator.userAgent.match(/MSIE ([0-9]+)/)&&RegExp.$1<9&&(t.newStyle=function(t){var e=document.createElement("span");return e.innerHTML='&nbsp;<style type="text/css">'+t+"</style>",e})},initVars:function(){var e,n,i,a=navigator.userAgent;e="other",n=0,i=[["firefox",/Firefox\/([0-9\.]+)/],["bb",/BlackBerry.+Version\/([0-9\.]+)/],["bb",/BB[0-9]+.+Version\/([0-9\.]+)/],["opera",/OPR\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)/],["edge",/Edge\/([0-9\.]+)/],["safari",/Version\/([0-9\.]+).+Safari/],["chrome",/Chrome\/([0-9\.]+)/],["ie",/MSIE ([0-9]+)/],["ie",/Trident\/.+rv:([0-9]+)/]],t.iterate(i,function(t,i){return a.match(i[1])?(e=i[0],n=parseFloat(RegExp.$1),!1):void 0}),t.vars.browser=e,t.vars.browserVersion=n,e="other",n=0,i=[["ios",/([0-9_]+) like Mac OS X/,function(t){return t.replace("_",".").replace("_","")}],["ios",/CPU like Mac OS X/,function(t){return 0}],["wp",/Windows Phone ([0-9\.]+)/,null],["android",/Android ([0-9\.]+)/,null],["mac",/Macintosh.+Mac OS X ([0-9_]+)/,function(t){return t.replace("_",".").replace("_","")}],["windows",/Windows NT ([0-9\.]+)/,null],["bb",/BlackBerry.+Version\/([0-9\.]+)/,null],["bb",/BB[0-9]+.+Version\/([0-9\.]+)/,null]],t.iterate(i,function(t,i){return a.match(i[1])?(e=i[0],n=parseFloat(i[2]?i[2](RegExp.$1):RegExp.$1),!1):void 0}),t.vars.os=e,t.vars.osVersion=n,t.vars.IEVersion="ie"==t.vars.browser?t.vars.browserVersion:99,t.vars.touch="wp"==t.vars.os?navigator.msMaxTouchPoints>0:!!("ontouchstart"in window),t.vars.mobile="wp"==t.vars.os||"android"==t.vars.os||"ios"==t.vars.os||"bb"==t.vars.os}};return t.init(),t}();!function(t,e){"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?module.exports=e():t.skel=e()}(this,function(){return skel}); // eslint-disable-line


$.fn.extend({
    animateCss: function (animationName, speedClass) {
    	speedClass = speedClass || "";
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        var fullAnimClass = 'animated ' + speedClass + ' ' + animationName;
        this.addClass(fullAnimClass).one(animationEnd, function() {
            $(this).removeClass(fullAnimClass);
        });
    }
});

class ScrollController {
	constructor() {
		if (ScrollController.instance) {
			return ScrollController.instance;
		}

		this.initialized = false;
		this.$header = $('#header');
		this.$window = $(window);
		this.$subnav = $("#project-subnav");
		this.$avatar = $(".image.avatar");
		this.parallaxFactor = 90; // Header movement; lower = more intense
		this.triggerTolerance = 50;
		this.collapseScrollTrigger = $(".project-details").offset().top - 100;
		this.subnavShown = false;
		this.scrollEventTimeout = null;
		ScrollController.instance = this;
	}

	init() {
		if (this.initialized) {
			return;
		}
		this.initialized = true;

		skel.on('change', () => {
			if (skel.breakpoint('medium').active) {
				this.$window.off('scroll.parallax_namespace');
				this.$header.css('background-position', 'top left, center center');
			} else {
				this.$header.css('background-position', 'left 0px');

				this.$window.on('scroll.parallax_namespace', () => {
					if (!this.scrollEventTimeout) {
						this.update(); // start animation on leading edge (because of click-jumps)
						this.scrollEventTimeout = setTimeout(() => {
							clearTimeout(this.scrollEventTimeout);
							this.scrollEventTimeout = null;
							this.update(); // since we may have missed it during those 400ms
						}, 400);
					}
					// doing this on every scroll is performance-heavy, but parallax is cool...
					this.$header.css(
						'background-position',
						'left ' + (-1 * this.$window.scrollTop() / this.parallaxFactor) + 'px'
					);
				});
			}
		});
	}

	update() {
		const scrollTop = this.$window.scrollTop();
		if (!this.subnavShown && scrollTop > this.collapseScrollTrigger + this.triggerTolerance) {
			this.showSubnav();
		} else if (this.subnavShown && scrollTop < this.collapseScrollTrigger - this.triggerTolerance) {
			this.hideSubnav();
		}
	}

	hideSubnav() {
		this.subnavShown = false;
		this.$subnav.removeClass("fadeInUp").addClass("fadeOutDown");
		this.toggleAvatar(true);
	}

	showSubnav() {
		this.subnavShown = true;
		this.toggleAvatar(false);
		this.$subnav.removeClass("fadeOutDown").addClass("fadeInUp");
	}

	toggleAvatar(show) {
		const slideDelay = 200;
		if (show) {
			// Expand space first
			this.$avatar.css("opacity", "0").removeClass("fadeOutUp").animate({ height: 'toggle' });
			setTimeout(() => {
				this.$avatar.css("opacity", "").addClass("fadeInDown");
			}, 150);
		} else {
			setTimeout(() => {
				// Collapse space after a while
				this.$avatar.animate({ height: 'toggle' });
			}, slideDelay);
			this.$avatar.removeClass("fadeInDown").addClass("fadeOutUp");
		}
	}
}


class App {
	static init() {
		const $window = $(window);
		const $body = $('body');

		// Disable animations/transitions until the page has loaded.
		$body.addClass('is-loading');
		$window.on('load', function() {
			$body.removeClass('is-loading');
		});

		// Click event on project thumbnails
		App.initLinkScrolls();

		if (skel.vars.mobile) {
			// ----------- MOBILE ----------------
			// Turn on touch mode.
			$body.addClass('is-touch');

			// Height fix (mostly for iOS).
			window.setTimeout(function() {
				$window.scrollTop($window.scrollTop() + 1);
			}, 0);
		} else {
			// ----------- NOT MOBILE -------------
			// Load particles
			App.initParticles();

			// Header parallax + Subnav project menu toggle
			const scrollController = new ScrollController();
			scrollController.init();
		}

		// window.onload takes too long (too many images)
		setTimeout(() => {
			$("#loader").fadeOut("slow");
		}, 1000);
	}

	static initLinkScrolls() {
		const $header = $('#header');
		const applyPreJumpHeaderFix = () => {
			if (!skel.vars.mobile) {
				$header.css("transition", "background-position 0.5s ease-in-out");
				setTimeout(() => {
					$header.css("transition", "");
				}, 1000);
			}
		};

		$('.scrollup').click(function () {
			/* FadeIn all thumbs */
			const $projectThumbs = $("#projects article");
			$projectThumbs.each(function(index, element) {
				$(element).animateCss("fadeInUp");
			});
			applyPreJumpHeaderFix();
			window.scrollTo(0, $("#projects").offset().top);
		
			/* Enable all */
			$(".project-details").show();
			return false;
		});

		App.lastClickTime = null;

		$('.scrolldown').click(function() {
			// Prevent fast switching and double-clicks 
			if (App.lastClickTime && App.lastClickTime + 800 > Date.now()) {
				return false;
			}
			App.lastClickTime = Date.now();

			/* First disable all */
			$(".project-details").hide();

			const $projectSection = $($(this).attr("href"));
			/* Enable only this one */
			$projectSection.show();
			applyPreJumpHeaderFix();
			window.scrollTo(0, $projectSection.offset().top);

			$projectSection.animateCss("fadeInUpAbs");
			$projectSection.find("h1").animateCss("pulse");
			return false;
		});
	}

	static initParticles() {
		window.particlesJS("particles-js", {
		  "particles": {
		    "number": {
		      "value": 80, "density": { "enable": true, "value_area": 800 }
		    },
		    "color": { "value": "#ffffff" },
		    "shape": {
		      "type": "circle",
		      "stroke": { "width": 0, "color": "#000000" },
		      "polygon": { "nb_sides": 5 },
		      "image": { "src": "img/not-used.svg", "width": 100, "height": 100 }
		    },
		    "opacity": {
		      "value": 0.5, "random": false,
		      "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false }
		    },
		    "size": {
		      "value": 3, "random": true,
		      "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false }
		    },
		    "line_linked": {
		      "enable": true,
		      "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1
		    },
		    "move": {
		      "enable": true, "speed": 2, "direction": "none",
		      "random": false, "straight": false, "out_mode": "out", "bounce": false,
		      "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 }
		    }
		  },
		  "interactivity": {
		    "detect_on": "canvas",
		    "events": {
		      "onhover": { "enable": false, "mode": "bubble" },
		      "onclick": { "enable": true, "mode": "repulse" },
		      "resize": true
		    },
		    "modes": {
		      "grab": { "distance": 140, "line_linked": { "opacity": 1 } },
		      "bubble": {
		        "distance": 400, "size": 4, "duration": 2, "opacity": 8, "speed": 3
		      },
		      "repulse": { "distance": 80, "duration": 0.4 },
		      "push": { "particles_nb": 4 },
		      "remove": { "particles_nb": 2 }
		    }
		  },
		  "retina_detect": true
		});
	}
}

/* Main */
$(function () {
	skel.breakpoints({ 
		xlarge: '(max-width: 1800px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	App.init();
});


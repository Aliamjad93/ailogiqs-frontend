/*-----------------------------------------------------------------

Template Name: AiLogiQs - AI Startup & Technology HTML Template 
Author:  ailogiqs-team
Author URI: https://themeforest.net/user/ailogiqs-teamportfolio
Version: 1.0.0
Description: AiLogiQs - AI Startup & Technology HTML Template <

-------------------------------------------------------------------
CSS TABLE OF CONTENTS
-------------------------------------------------------------------

01. header
02. animated text with swiper slider
03. magnificPopup
04. counter up
05. wow animation
06. nice select
07. swiper slider
08. search popup
09. mousecursor 


------------------------------------------------------------------*/

(function($) {
    "use strict";

    // Every Swiper instance created by the last init run. Swiper's autoplay
    // timers keep firing after its DOM is detached, so leaking instances across
    // client-side navigations burns CPU for the rest of the session.
    var __swipers__ = [];

    // Stand-in returned when a slider's root element isn't on the page. Every
    // property access yields a chainable no-op function, so the template's
    // `new Swiper(...).on(...)` / `.controller.control = ...` chains keep
    // working on pages that simply don't include that slider.
    function __swiperStub__() {
        var target = function() {};
        var handler = {
            get: function(t, p) {
                // Not thenable, or awaiting the instance would hang.
                if (p === "then" || p === Symbol.toPrimitive) return undefined;
                if (p in t) return t[p];
                return function() { return handler.proxy; };
            },
            set: function(t, p, v) { t[p] = v; return true; },
        };
        handler.proxy = new Proxy(target, handler);
        return handler.proxy;
    }

    // Runs before every init. jQuery handlers are namespaced under ".ailogiqs"
    // so they can be removed wholesale; without this, a scroll or body-click
    // handler bound on one page stays bound on every page visited after it.
    function __teardown__() {
        __swipers__.forEach(function(s) {
            try { s.destroy(true, true); } catch (e) {}
        });
        __swipers__.length = 0;

        var $body = $(document.body);
        $body.off(".ailogiqs");
        $(window).off(".ailogiqs");

        // nice-select replaces <select> with generated markup; remove both.
        try {
            $(".nice-select").each(function() {
                var $ns = $(this);
                var $select = $ns.prev("select");
                $ns.remove();
                $select.show().removeClass("ns-hidden");
            });
        } catch (e) {}

        $(".mean-container .mean-bar").remove();
    }

    // Wrapped so React/Next can re-run all template JS (sliders, counters, wow
    // animations, mobile menu, nice-select, etc.) whenever a new page mounts.
    window.AiLogiQsInitTemplate = function() {

        __teardown__();

        // Shadow the global Swiper constructor for the duration of this call so
        // every `new Swiper(...)` below is registered and guarded.
        var __NativeSwiper = window.Swiper;
        var Swiper = function(selector, options) {
            var root = typeof selector === "string"
                ? document.querySelector(selector)
                : selector;
            if (!__NativeSwiper || !root) return __swiperStub__();
            var instance = new __NativeSwiper(selector, options);
            __swipers__.push(instance);
            return instance;
        };
			//>> Mobile Menu Js Start <<//
			$("#mobile-menu").meanmenu({
				meanMenuContainer: ".mobile-menu",
				meanScreenWidth: "1199",
				meanExpand: ['<i class="far fa-plus"></i>'],
			});

			//>> Sidebar Toggle Js Start <<//
			$(".offcanvas__close,.offcanvas__overlay").on("click.ailogiqs", function () {
				$(".offcanvas__info").removeClass("info-open");
				$(".offcanvas__overlay").removeClass("overlay-open");
			});
			$(".sidebar__toggle").on("click.ailogiqs", function () {
				$(".offcanvas__info").addClass("info-open");
				$(".offcanvas__overlay").addClass("overlay-open");
			});

			//>> Body Overlay Js Start <<//
			$(".body-overlay").on("click.ailogiqs", function () {
				$(".offcanvas__area").removeClass("offcanvas-opened");
				$(".df-search-area").removeClass("opened");
				$(".body-overlay").removeClass("opened");
			});

			//>> Sticky Header Js Start <<//

			$(window).off("scroll.ailogiqs.sticky").on("scroll.ailogiqs.sticky", function () {
				if ($(this).scrollTop() > 250) {
					$("#header-sticky").addClass("sticky");
				} else {
					$("#header-sticky").removeClass("sticky");
				}
			});

			//>> Video Popup Start <<//
			$(".img-popup").magnificPopup({
				type: "image",
				gallery: {
					enabled: true,
				},
			});

			$(".video-popup").magnificPopup({
				type: "iframe",
				callbacks: {},
			});

			//>> Counterup Start <<//
			$(".count").counterUp({
				delay: 15,
				time: 4000,
			});

			//>> Wow Animation Start <<//
			// WOW 1.3.0 finds its trigger points with offsetTop/offsetParent
			// walks, which stay in layout (canvas) pixels inside the 0.9
			// "Laptop stage" zoom (see public/css/overrides.css), while it
			// compares them against the physical scroll position. Every
			// reveal therefore fired ~11% of its document offset late, and
			// boxes whose canvas offset ended up past the last scrollable
			// pixel -- every box in the footer -- never fired at all and
			// stayed at visibility: hidden. getBoundingClientRect already
			// includes the zoom, so measuring with it puts both sides of
			// the comparison in the same pixels. Prototype-level, so the
			// re-inits on client-side routes inherit it too.
			if (window.WOW) {
				window.WOW.prototype.offsetTop = function (el) {
					return el.getBoundingClientRect().top + window.pageYOffset;
				};
			}
			new WOW().init();

			//>> Nice Select Start <<//
			$("select").niceSelect();

			//>> Hero-3 Slider Start <<//

			// Hero Slider Start <<//
			const sliderActive1 = ".news-hero-slider";
			// Fade + loop cannot coexist here. Swiper clones the slides to fake an
			// endless loop, and its fade effect leaves the cloned active slide at
			// opacity 1 next to the real one, so two covers (and two "Read More"
			// buttons) painted at the same time. rewind cycles back to the first
			// slide without cloning anything, which is what lets the fade hide
			// every inactive slide. 900ms keeps an arrow click feeling immediate;
			// the theme's 2000ms read as though nothing happened.
			const sliderInit1 = new Swiper(sliderActive1, {
				loop: false,
				rewind: true,
				slidesPerView: 1,
				effect: "fade",
				// Fade options live under fadeEffect in this Swiper (8.3.2); a
				// top-level crossFade is ignored. Without it, the incoming slide
				// fades in on top of the outgoing one and BOTH rest at opacity 1,
				// which is the two-covers-at-once overlap. crossFade fades the
				// outgoing slide out as the incoming one fades in.
				fadeEffect: { crossFade: true },
				speed: 900,
				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
				},
				navigation: {
					// Not swapped: .array-prev is the left button ("Previous
					// article") and .array-next the right one. The theme wired
					// these back to front, so the right arrow walked backwards.
					nextEl: ".array-next",
					prevEl: ".array-prev",
				},
			});

			// content animation when active start here
			function animated_swiper(selector, init) {
				var animated = function animated() {
					$(selector + " [data-animation]").each(function () {
						var anim = $(this).data("animation");
						var delay = $(this).data("delay");
						var duration = $(this).data("duration");
						$(this)
							.removeClass("anim" + anim)
							.addClass(anim + " animated")
							.css({
								webkitAnimationDelay: delay,
								animationDelay: delay,
								webkitAnimationDuration: duration,
								animationDuration: duration,
							})
							.one("animationend", function () {
								$(this).removeClass(anim + " animated");
							});
					});
				};
				animated();
				init.on("slideChange", function () {
					$(sliderActive1 + " [data-animation]").removeClass("animated");
				});
				init.on("slideChange", animated);
			}

			animated_swiper(sliderActive1, sliderInit1);

			//>> Brand Slider Start <<//
			if ($(".brand-slider").length > 0) {
				const brandSlider = new Swiper(".brand-slider", {
					spaceBetween: 30,
					speed: 2000,
					centeredSlides: true,
					loop: true,
					autoplay: {
						delay: 2000,
						disableOnInteraction: false,
					},
					breakpoints: {
						1199: {
							slidesPerView: 5,
						},
						991: {
							slidesPerView: 3,
						},
						767: {
							slidesPerView: 2,
						},
						575: {
							slidesPerView: 2,
						},
						400: {
							slidesPerView: 1,
						},
						0: {
							slidesPerView: 1,
						},
					},
				});
			}

			//>> Testimonial Slider Start <<//
			if ($(".testimonail-slider").length > 0) {
				const testimonailSlider = new Swiper(".testimonail-slider", {
					spaceBetween: 30,
					speed: 2000,
					loop: true,
					autoplay: {
						delay: 2000,
						disableOnInteraction: false,
					},
					breakpoints: {
						991: {
							slidesPerView: 1,
						},
						767: {
							slidesPerView: 1,
						},
						575: {
							slidesPerView: 1,
						},
						400: {
							slidesPerView: 1,
						},
						0: {
							slidesPerView: 1,
						},
					},
				});
			}

			if ($(".testimonial-slider-2").length > 0) {
				const testimonialSlider2 = new Swiper(".testimonial-slider-2", {
					spaceBetween: 30,
					speed: 3000,
					loop: true,
					autoplay: {
						delay: 3000,
						disableOnInteraction: false,
					},
					navigation: {
						prevEl: ".array-next",
						nextEl: ".array-prev",
					},
				});
			}

			if ($(".testimonial-slider-3").length > 0) {
				const testimonialSlider3 = new Swiper(".testimonial-slider-3", {
					spaceBetween: 30,
					speed: 3000,
					loop: true,
					autoplay: {
						delay: 3000,
						disableOnInteraction: false,
					},
				});
			}

			//>> Showcase Slider Start <<//
			if ($(".showcase-slider").length > 0) {
				const showcaseSlider = new Swiper(".showcase-slider", {
					spaceBetween: 30,
					speed: 2000,
					loop: true,
					autoplay: {
						delay: 2000,
						disableOnInteraction: false,
					},
					breakpoints: {
						991: {
							slidesPerView: 3,
						},
						767: {
							slidesPerView: 2,
						},
						575: {
							slidesPerView: 1,
						},
						400: {
							slidesPerView: 1,
						},
						0: {
							slidesPerView: 1,
						},
					},
				});
			}

			//>> Testimonial Slider Start <<//
			if ($(".banner-slide-wrapper").length > 0) {
				const bannerSlideWrapper = new Swiper(".banner-slide-wrapper", {
					spaceBetween: 30,
					speed: 2000,
					loop: true,
					effect: "fade",
					autoplay: {
						delay: 2000,
						disableOnInteraction: true,
					},
					breakpoints: {
						991: {
							slidesPerView: 1,
						},
						767: {
							slidesPerView: 1,
						},
						575: {
							slidesPerView: 1,
						},
						400: {
							slidesPerView: 1,
						},
						0: {
							slidesPerView: 1,
						},
					},
				});
			}

			   //>> Custom Accordion Tabs <<//
			$(".accordion-single .header-area").on("click", function () {
				if ($(this).closest(".accordion-single").hasClass("active")) {
					$(this).closest(".accordion-single").removeClass("active");
					$(this).next(".content-area").slideUp();
				} else {
					$(".accordion-single").removeClass("active");
					$(this).closest(".accordion-single").addClass("active");
					$(".content-area").not($(this).next(".content-area")).slideUp();
					$(this).next(".content-area").slideToggle();
				}
			});

			//>> team Slider Start <<//
			if($('.team-slider').length > 0) {
				const TeamSlider = new Swiper(".team-slider", {
					spaceBetween: 30,
					speed: 1300,
					loop: true,
					autoplay: {
						delay: 2000,
						disableOnInteraction: false,
					},
					navigation: {
						nextEl: ".array-prev",
						prevEl: ".array-next",
					},
					breakpoints: {
						1199: {
							slidesPerView: 4,
						},
						991: {
							slidesPerView: 3,
						},
						767: {
							slidesPerView: 2,
						},
						575: {
							slidesPerView: 2,
						},
						0: {
							slidesPerView: 1,
						},
					},
				});
			}
				
			//>> Testimonial Slider Start <<//
			if($('.testimonial-slider-5').length > 0) {
				const TestimonialSlider5 = new Swiper(".testimonial-slider-5", {
					spaceBetween: 30,
					speed: 1300,
					loop: true,
					autoplay: {
						delay: 1000,
						disableOnInteraction: false,
					},
					navigation: {
						nextEl: ".array-prev",
						prevEl: ".array-next",
					},
					breakpoints: {
						1199: {
							slidesPerView: 3,
						},
						991: {
							slidesPerView: 3,
						},
						767: {
							slidesPerView: 2,
						},
						575: {
							slidesPerView: 1,
						},
						0: {
							slidesPerView: 1,
						},
					},
				});
			}

			//>> Offer Slider Start <<//
			if($('.offer-slider').length > 0) {
				const OfferSlider = new Swiper(".offer-slider", {
					spaceBetween: 30,
					speed: 1300,
					loop: true,
					autoplay: {
						delay: 1000,
						disableOnInteraction: false,
					},
					navigation: {
						nextEl: ".array-prev",
						prevEl: ".array-next",
					},
					breakpoints: {
						1199: {
							slidesPerView: 3,
						},
						991: {
							slidesPerView: 3,
						},
						767: {
							slidesPerView: 2,
						},
						575: {
							slidesPerView: 1,
						},
						0: {
							slidesPerView: 1,
						},
					},
				});
			}

			// Left Side: Testimonial Content Slider
    if ($('.testimonial-slider-6').length > 0 && $('.swiper-image').length > 0) {

        const imageSwiper = new Swiper('.swiper-image', {
        effect: 'cards',
        grabCursor: true,
        loop: true,
        keyboard: {
        enabled: true,
        onlyInViewport: false,
        },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        cardsEffect: {
        rotate: 0,
        perSlideRotate: 0,
        perSlideOffset: 3
        },
        });
        
        const contentSwiper = new Swiper('.testimonial-slider-6', {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        },
        navigation: {
        nextEl: '.array-prev',
        prevEl: '.array-next',
        },
        breakpoints: {
        0: { slidesPerView: 1 },
        575: { slidesPerView: 1 },
        767: { slidesPerView: 1 },
        991: { slidesPerView: 1 },
        1199: { slidesPerView: 1 },
        1399: { slidesPerView: 1 },
        },
        });
        
        // Link the two Swipers
        contentSwiper.controller.control = imageSwiper;
        imageSwiper.controller.control = contentSwiper;
        }

			//>> Progress Bar Js Start <<//
			$(".progress-bar").waypoint(
				function () {
					$(".progress-bar").css({
						animation: "animate-positive 2.6s",
						opacity: "1",
					});
				},
				{ offset: "75%" }
			);


			

			//>> Back To Top Slider Start <<//
			$(window).off("scroll.ailogiqs.backtop").on("scroll.ailogiqs.backtop", function () {
				if ($(this).scrollTop() > 20) {
					$("#back-top").addClass("show");
				} else {
					$("#back-top").removeClass("show");
				}
			});
			$("#back-top").off("click.ailogiqs").on("click.ailogiqs", function () {
				$("html, body").animate({ scrollTop: 0 }, 800);
				return false;
			});

			//>> Search Popup Start <<//
			const $searchWrap = $(".search-wrap");
			const $navSearch = $(".nav-search");
			const $searchClose = $("#search-close");

			$(".search-trigger").off("click.ailogiqs").on("click.ailogiqs", function (e) {
				e.preventDefault();
				$searchWrap.animate({ opacity: "toggle" }, 500);
				$navSearch.add($searchClose).addClass("open");
			});

			$(".search-close").off("click.ailogiqs").on("click.ailogiqs", function (e) {
				e.preventDefault();
				$searchWrap.animate({ opacity: "toggle" }, 500);
				$navSearch.add($searchClose).removeClass("open");
			});

			function closeSearch() {
				$searchWrap.fadeOut(200);
				$navSearch.add($searchClose).removeClass("open");
			}

			$(document.body).off("click.ailogiqs").on("click.ailogiqs", function (e) {
				closeSearch();
			});

			$(".search-trigger, .main-search-input").off("click.ailogiqs").on("click.ailogiqs", function (e) {
				e.stopPropagation();
			});

			//>> Mouse Cursor Start <<//
			function mousecursor() {
				if ($("body")) {
					const e = document.querySelector(".cursor-inner"),
						t = document.querySelector(".cursor-outer");
					if (!e || !t) return; // guard: React hasn't painted these nodes yet
					let n,
						i = 0,
						o = !1;
					(window.onmousemove = function (s) {
						o ||
							(t.style.transform =
								"translate(" + s.clientX + "px, " + s.clientY + "px)"),
							(e.style.transform =
								"translate(" + s.clientX + "px, " + s.clientY + "px)"),
							(n = s.clientY),
							(i = s.clientX);
					}),
						$("body").on("mouseenter.ailogiqs", "a, .cursor-pointer", function () {
							e.classList.add("cursor-hover"),
								t.classList.add("cursor-hover");
						}),
						$("body").on("mouseleave.ailogiqs", "a, .cursor-pointer", function () {
							($(this).is("a") &&
								$(this).closest(".cursor-pointer").length) ||
								(e.classList.remove("cursor-hover"),
								t.classList.remove("cursor-hover"));
						}),
						(e.style.visibility = "visible"),
						(t.style.visibility = "visible");
				}
			}
			$(function () {
				mousecursor();
			});
		}; // End AiLogiQsInitTemplate Function

    // NOTE: intentionally NOT auto-run on $(document).ready here. Next.js
    // renders this markup on the server and hydrates the nav/cursor nodes
    // afterwards, so calling this before hydration finishes would hit null
    // elements. Instead, src/components/layout/TemplateRuntime.jsx calls
    // window.AiLogiQsInitTemplate() once on mount, and again after every
    // client-side navigation. Re-runs are safe: __teardown__() destroys the
    // previous Swiper instances and un-binds the previous jQuery handlers.



    // NOTE: the preloader's dismissal lives in React now -- the loader effect
    // in src/components/layout/TemplateRuntime.jsx adds the `loaded` class and
    // then hides the element. It used to run from here as well, on a window
    // "load" handler; on fast loads that handler beat hydration, so the class
    // landed on the element while React was still diffing it and React
    // reported a hydration mismatch on every fast reload.
   

})(jQuery); // End jQuery


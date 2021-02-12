$(document).ready(function() {
	//  ========= Variables =========
	var body = $('body'),
	html = body.width(),
			timer; // for disable scroll
	// ========= =========== =========== ===========

	// Disable hover effect when client scrolles the page
	$(window).on('scroll',function() {
		clearTimeout(timer);
		if(!body.hasClass('disable-hover')) {
			body.addClass('disable-hover');
		}

		timer = setTimeout(function() {
			body.removeClass('disable-hover');
		}, 200);
	});

	// ========= Smooth scrolling to the acnhors ===========
	$('.js-smooth-scroll-link').on('click', function (e) {
		e.preventDefault();
		var id = $(this).attr('href'),
		top = $(id).offset().top;

		$('html, body').animate({scrollTop: top}, 'slow');
	});	
	// ========= =========== =========== ===========

	// Popup
	$('.js-open-consultation-popup-btn').on('click',function(e) {
		e.preventDefault();
		$('.js-consultation-popup').fadeIn(300);
		$('html').addClass('is-fixed');
	});

	$('.js-open-order-popup-btn').on('click',function(e) {
		e.preventDefault();
		var orderPopup = $('.js-order-popup');
		var title = $(this).attr('data-product-title');

		orderPopup.find('input[name=form_subject]').val(title);

		orderPopup.fadeIn(300);
		$('html').addClass('is-fixed');
	});




	$('.js-close-popup-btn').on('click',function(e) {
		e.preventDefault();
		$(this).parents('.js-popup').fadeOut(300);
		$('html').removeClass('is-fixed');
	});

	$('.popup__overflow').on('click', function(e) {
		e.stopPropagation();

		var content = $(this).find('.popup__body');

		if(!content.is(e.target) && content.has(e.target).length === 0) {
			$('html').removeClass('is-fixed');
			$('.js-popup').fadeOut(300);
		}

	});
	// ========= =========== =========== ===========

	$('.menu-item-has-children').each(function() {
		var btn = '<button class="btn-toggle js-toggle-submenu-btn" type="button"></button>';
		var link = $(this).find('> a');
		$(btn).insertAfter(link);

	});

	$('.js-toggle-submenu-btn').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('is-active');
		$(this).parents('LI').find('UL').stop().slideToggle(150);
	});

	

	$('.js-open-menu-btn').on('click',function(e) {
		e.preventDefault();
		$(this).toggleClass('is-active');
		$('.js-menu').toggleClass('is-opened');


		if ($('.js-callback').hasClass('is-opened')) {
			$('.js-callback').removeClass('is-opened');
			$('.languages').removeClass('is-active');
			$('html').addClass('is-fixed');
			$('.header .logo').addClass('is-hidden');
			$('.header-tools .js-open-callback-btn').removeClass('is-active');
		} else {
			$('html').toggleClass('is-fixed');
			$('.header .logo').toggleClass('is-hidden')
		}


	});

	$('.js-open-callback-btn').on('click',function(e) {
		e.preventDefault();
		
		var headerBtn = $('.header-tools .js-open-callback-btn');

		if (headerBtn.hasClass('is-active')) {
			headerBtn.removeClass('is-active');
		} else {
			headerBtn.addClass('is-active');
		}

		$('.js-callback').toggleClass('is-opened');
		$('.languages').toggleClass('is-active');

		if ($('.js-menu').hasClass('is-opened')) {
			$('.js-menu').removeClass('is-opened');
			$('.js-open-menu-btn').removeClass('is-active');
			$('html').addClass('is-fixed');
			$('.header .logo').addClass('is-hidden');
		} else {
			$('html').toggleClass('is-fixed');
			$('.header .logo').toggleClass('is-hidden');
		}

		
		
		
		
	});

	// Popup
	$('.js-open-popup-btn').on('click',function(e) {
		e.preventDefault();
		$('.js-popup').fadeIn(300);
		$('html').addClass('is-fixed');
	});


	$('.js-close-popup-btn').on('click',function(e) {
		e.preventDefault();
		$(this).parents('.js-popup').fadeOut(300);
		$('html').removeClass('is-fixed');
	});

	$('.popup__overflow').on('click', function(e) {
		e.stopPropagation();

		var content = $(this).find('.popup__body');

		if(!content.is(e.target) && content.has(e.target).length === 0) {
			$('html').removeClass('is-fixed');
			$('.js-popup').fadeOut(300);
		}

	});
	// ========= =========== =========== ===========

	// Sliders

	var advantagesSliderInit = $('.js-advantages-slider');

	if (advantagesSliderInit.length > 0) {
		var advantagesSlider = new Swiper(advantagesSliderInit, {
			slidesPerView: 'auto',
			spaceBetween: 90,
			centeredSlides: true,
			loop: true,
			pagination: {
				el: '.js-advantages-slider-pagination',
				clickable: true
			},
			navigation: {
				nextEl: '.js-advantages-slider-nav-btn-next',
				prevEl: '.js-advantages-slider-nav-btn-prev',
			}
		});

		var totalAdvantagesSliderSlides = parseInt($('.advantages-slider-counter__total').attr('data-total-slides'));



		advantagesSlider.on('slideChange', function () {
			var ind = advantagesSlider.realIndex + 1;
			var current = $('.advantages-slider-counter__current');

			if (current.length > 0) {
				if (ind == 0) {
					current.html('01');
				}
				if (totalAdvantagesSliderSlides >= 10) {
					current.html(ind);
				} else {
					current.html('0'+ind);
				}
			}
		});
	}

	var portfolioSliderInit = $('.js-portfolio-slider');

	if (portfolioSliderInit.length > 0) {
		var portfolioSlider = new Swiper(portfolioSliderInit, {
			slidesPerView: 'auto',
			spaceBetween: 150,
			centeredSlides: true,
			loop: true,
			pagination: {
				el: '.js-portfolio-slider-pagination',
				clickable: true
			},
			navigation: {
				nextEl: '.js-portfolio-slider-nav-btn-next',
				prevEl: '.js-portfolio-slider-nav-btn-prev',
			}
		});

		
	}

	$('.js-toggle-faq-answer-btn').on('click', function(e) {
		e.preventDefault();
		var faq = $(this).parents('.faq');
		faq.toggleClass('is-active');
		faq.find('.faq__answer').stop().slideToggle(150);

	});

	// Fixed product panel
	var controls = $('.js-fixed-nav-panel');

	if(controls.length > 0 ) {
		var controlsOffset = controls.offset().top;
		var controlsHeight = controls.innerHeight();

		$(window).on('scroll', function(e) {
			var scroll = $(this).scrollTop();

			if(scroll > controlsOffset) {
				$('.sect__product-promo').css('padding-bottom', controlsHeight + 'px');
				controls.addClass('is-fixed');
				$('.header-tools').addClass('add-gutter');
				if (html < 1200) {
					$('.sect__product-promo').css('padding-bottom', 0 + 'px');
				}
			} else {
				controls.removeClass('is-fixed');
				$('.header-tools').removeClass('add-gutter');
				$('.sect__product-promo').css('padding-bottom', 0 + 'px');
			}
		});

		$(window).on('scroll', function() {
			var sections = $('.js-section');

			sections.each(function(i, el) {
				var top = $(el).offset().top - 100;
				var bottom = top +$(el).height();
				var scroll = $(window).scrollTop();

				var id = $(el).attr('id');

				if(scroll > top && scroll < bottom) {
					$('.js-fixed-nav-panel a.is-active').removeClass('is-active');
					$('.js-fixed-nav-panel a[href="#'+id+'"]').addClass('is-active');

				}
			});
		});
		
		controls.on('click', 'a', function(e) {
			e.preventDefault();
			var self = $(this);

			var id = self.attr('href'),
				top = $(id).offset().top -50;


			$('.js-fixed-nav-panel a').removeClass('is-active');
			self.addClass('is-active');
			

			$('html, body').animate({scrollTop: top}, 'slow');
		});

	}

	$('.js-tab-content').not(":first").hide();
	$('.js-tab-btn:first').addClass('is-active');

	$('.js-tab-btn').on('click', function(e) {
		e.preventDefault();
		$('.js-tab-content').removeClass('is-active');
		$('.js-tab-btn').removeClass('is-active').eq($(this).index()).addClass('is-active');
		$('.js-tab-content').hide().eq($(this).index()).fadeIn().addClass('is-active');
	}).eq(0).addClass('is-active');


	$('[data-fancybox]').fancybox();


	var tables = $('.page-article-content table');

	if (tables.length > 0) {

		tables.each(function() {
			$(this).wrap('<div class="table-wrap">');
		});

	}

	// ========= Ajax form ===========
	$('.form-input').on('focus', function() {
		var self = $(this);
		var label = self.parents('.form-group__label');

		label.addClass('is-active');
	});

	$('.form-input').on('blur', function() {
		var self = $(this);
		var label = self.parents('.form-group__label');




		if (label.hasClass('is-active') && self.val() || self.val() !== '') {
			label.addClass('is-valid');
		} else {
			label.removeClass('is-valid');
			label.removeClass('is-active');
		}

		
	});

	$('.js-required-input').on('focus',function() {
		var formGroupLabel = $(this).parents('.form-group__label');
		var formGroupDiv = $(this).parents('.form-group');

		if (formGroupLabel) {
			if(formGroupLabel.hasClass('is-error')) {
				formGroupLabel.removeClass('is-error');
			}
		}

		if (formGroupDiv) {
			if(formGroupDiv.hasClass('is-error')) {
				formGroupDiv.removeClass('is-error');
			}
		}

	});

	$('.simple-form').submit(function(e) {
		e.preventDefault();

		var self = $(this);
		inputs = self.find('.js-required-input'),
		flag = true;

		

		// Validate
		$(inputs).each(function() {
			if(!$(this).val() || $(this).val() == "") {
				$(this).parents('.form-group__label').addClass('is-error');
				flag = false;
			}
		});

		if(!flag) {return false;}

		$.ajax({
			type: "POST",
			url: "/wp-content/themes/stelya-theme/mail.php", //Change
			data: self.serialize()
		}).done(function() {
			$('.js-popup').fadeOut(150);
			$('.js-callback').removeClass('is-opened');
			$('.js-open-callback-btn').removeClass('is-active');
			$('.js-thanks-popup').fadeIn(150);
			$('html').addClass('is-fixed');
			setTimeout(function() {
				$('.js-thanks-popup').fadeOut(150);
				$('html').removeClass('is-fixed');
				self.find('.form-group__label').each(function() {
					$(this).removeClass('is-active');
				});
				self.trigger("reset");
			}, 2500);
		});

	});

	$('.request-form').submit(function(e) {
		e.preventDefault();

		var self = $(this);
		inputs = self.find('.js-required-input'),
		flag = true;

		

		// Validate
		$(inputs).each(function() {
			if(!$(this).val() || $(this).val() == "") {
				$(this).parents('.form-group').addClass('is-error');
				flag = false;
			}
		});

		if(!flag) {return false;}

		$.ajax({
			type: "POST",
			url: "/wp-content/themes/stelya-theme/mail.php", //Change
			data: self.serialize()
		}).done(function() {
			$('.js-thanks-popup').fadeIn(150);
			$('html').addClass('is-fixed');
			setTimeout(function() {
				$('.js-thanks-popup').fadeOut(150);
				$('html').removeClass('is-fixed');
				self.trigger("reset");
			}, 2500);
		});

	});

	$('.subscribe-form').submit(function(e) {
		e.preventDefault();

		var self = $(this);
	

		$.ajax({
			type: "POST",
			url: "/wp-content/themes/stelya-theme/mail.php", //Change
			data: self.serialize()
		}).done(function() {
			$('.js-thanks-subscribe-popup').fadeIn(150);
			$('html').addClass('is-fixed');
			setTimeout(function() {
				$('.js-thanks-subscribe-popup').fadeOut(150);
				$('html').removeClass('is-fixed');
				self.trigger("reset");
			}, 2500);
		});

	});
	// ========= =========== =========== ===========

	$('input[type=tel]').inputmask({
		'mask': '+38 (999) 999-9999',
		'clearIncomplete': false,
		'showMaskOnHover': false
	});


	setTimeout(function(){
		$('body').addClass('is-loaded');
	}, 2000);





});

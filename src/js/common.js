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

	$('.js-open-menu-btn').on('click',function(e) {
		e.preventDefault();
		$(this).toggleClass('is-active');
	});

	$('.js-open-callback-btn').on('click',function(e) {
		e.preventDefault();
		$(this).toggleClass('is-active');
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


	$('[data-fancybox]').fancybox();

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
		var formGroup = $(this).parents('.form-group__label');

		if(formGroup.hasClass('is-error')) {
			formGroup.removeClass('is-error');
		}


		// var value = $(this).val();

		// if(value || value !== '') {
			
		// }
	});

	$('form').submit(function(e) {
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
			url: "mail.php", //Change
			data: self.serialize()
		}).done(function() {
			// add active clases
			setTimeout(function() {
				// remove active classes
				self.trigger("reset");
			}, 2000);
		});

	});
	// ========= =========== =========== ===========

	$('input[type=tel]').inputmask({
		'mask': '+38 (999) 999-9999',
		'clearIncomplete': false,
		'showMaskOnHover': false
	});





});

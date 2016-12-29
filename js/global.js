/*-------------------------------------------------------------------------------------------------------------------------------*/
/*This is main JS file that contains custom style rules used in this template*/
/*-------------------------------------------------------------------------------------------------------------------------------*/
/* Template Name: Site Title*/
/* Version: 1.0 Initial Release*/
/* Build Date: 22-04-2015*/
/* Author: Unbranded*/
/* Website: http://moonart.net.ua/site/ 
/* Copyright: (C) 2015 */
/*-------------------------------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------*/
/* TABLE OF CONTENTS: */
/*--------------------------------------------------------*/
/* 01 - VARIABLES */
/*-------------------------------------------------------------------------------------------------------------------------------*/

jQuery(function($) {



/**

 * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.3
 */

(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(!e)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,e,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);
    /************************************************************************************ TO TOP STARTS */

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });


	"use strict";

	/*================*/
	/* 01 - VARIABLES */
	/*================*/
	var swipers = [], winW, winH, winScr, $container, _isresponsive, smPoint = 768, mdPoint = 992, lgPoint = 1200, addPoint = 1600, _ismobile = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i);

	/*========================*/
	/* 02 - page calculations */
	/*========================*/
	function pageCalculations(){
		winW = $(window).width();
		winH = $(window).height();
		if($('.menu-button').is(':visible')) _isresponsive = true;
		else _isresponsive = false;
	}

	/*=================================*/
	/* 03 - function on document ready */
	/*=================================*/
	pageCalculations();	

	/*============================*/
	/* 04 - function on page load */
	/*============================*/
	$(window).load(function(){
		$('#loader-wrapper').fadeOut();
		initSwiper();

        $('#menu-menubar-menu > .menu-item-has-children > a').append('<i class="menu-toggle fa fa-angle-down"></i>');

		if($('.isotope').length){
			var initValue = $('.isotope-nav').find('.selected a').attr('data-filter');
			$container.isotope({itemSelector: '.isotope-item', filter: initValue,masonry:{gutter:0,columnWidth:'.grid-sizer'}});	
		}		
	});

	/*==============================*/
	/* 05 - function on page scroll */
	/*==============================*/	
	$(window).on("scroll", function() {
		winScr = $(window).scrollTop();
		if (winScr > 150){
			$(".tt-header.sticky").addClass("stick");
		} else {
			$(".tt-header.sticky").removeClass("stick");
		}	
	});		
	/*==============================*/
	/* 05 - function on page resize */
	/*==============================*/
	function resizeCall(){
		pageCalculations();

		$('.swiper-container.initialized[data-slides-per-view="responsive"]').each(function(){
			var thisSwiper = swipers['swiper-'+$(this).attr('id')], $t = $(this), slidesPerViewVar = updateSlidesPerView($t);
			thisSwiper.params.slidesPerView = slidesPerViewVar;
			thisSwiper.reInit();
			var paginationSpan = $t.find('.pagination span');
			var paginationSlice = paginationSpan.hide().slice(0,(paginationSpan.length+1-slidesPerViewVar));
			if(paginationSlice.length<=1 || slidesPerViewVar>=$t.find('.swiper-slide').length) $t.addClass('pagination-hidden');
			else $t.removeClass('pagination-hidden');
			paginationSlice.show();
		});
	}
	if(!_ismobile){
		$(window).resize(function(){
			resizeCall();
		});
	} else{
		window.addEventListener("orientationchange", function() {
			resizeCall();
		}, false);
	}

	/*=====================*/
	/* 07 - swiper sliders */
	/*=====================*/
	function initSwiper(){
		var initIterator = 0;
		$('.swiper-container').each(function(){								  
			var $t = $(this);								  

			var index = 'swiper-unique-id-'+initIterator;

			$t.addClass('swiper-'+index + ' initialized').attr('id', index);
			$t.find('.pagination').addClass('pagination-'+index);

			var autoPlayVar = parseInt($t.attr('data-autoplay'),10);
			var centerVar = parseInt($t.attr('data-center'),10);
			var simVar = ($t.closest('.circle-description-slide-box').length)?false:true;

			var slidesPerViewVar = $t.attr('data-slides-per-view');
			if(slidesPerViewVar == 'responsive'){
				slidesPerViewVar = updateSlidesPerView($t);
			}
			else if(slidesPerViewVar!='auto') slidesPerViewVar = parseInt(slidesPerViewVar, 10);

			var loopVar = parseInt($t.attr('data-loop'),10);
			var speedVar = parseInt($t.attr('data-speed'),10);

			swipers['swiper-'+index] = new Swiper('.swiper-'+index,{
				speed: speedVar,
				pagination: '.pagination-'+index,
				loop: loopVar,
				paginationClickable: true,
				autoplay: autoPlayVar,
				slidesPerView: slidesPerViewVar,
				keyboardControl: true,
				calculateHeight: true, 
				simulateTouch: simVar,
				centeredSlides: centerVar,
				roundLengths: true,
				onInit: function(swiper){
					$t.find('.swiper-slide-active .text-animation').each(function( index ) {
						$(this).addClass('animated ' + $(this).attr("data-animation"));		
					});			
				},					
				onSlideChangeEnd: function(swiper){
					var activeIndex = (loopVar===true)?swiper.activeIndex:swiper.activeLoopIndex;
					var qVal = $t.find('.swiper-slide-active').attr('data-val');
					$t.find('.swiper-slide[data-val="'+qVal+'"]').addClass('active');
					
					$t.find('.swiper-slide-active .text-animation').each(function( index ) {
						$(this).addClass('animated ' + $(this).attr("data-animation"));		
					});					
				},
				onSlideChangeStart: function(swiper){
					$t.find('.swiper-slide.active').removeClass('active');
					if($t.hasClass('thumbnails-preview')){
						var activeIndex = (loopVar===1)?swiper.activeLoopIndex:swiper.activeIndex;
						swipers['swiper-'+$t.next().attr('id')].swipeTo(activeIndex);
						$t.next().find('.current').removeClass('current');
						$t.next().find('.swiper-slide[data-val="'+activeIndex+'"]').addClass('current');
					}
					$t.find('.swiper-slide-active .text-animation').each(function( index ) {
						$(this).removeClass('animated ' + $(this).attr("data-animation"));		
					});
				},
				onSlideClick: function(swiper){
					if($t.hasClass('thumbnails')) {
						swipers['swiper-'+$t.prev().attr('id')].swipeTo(swiper.clickedSlideIndex);
					}
					if($t.parent().hasClass('tt-product-slider')) {
						var activeIndex = swiper.clickedSlideIndex;
						var imgProduct = $t.find('.swiper-slide[data-val="'+activeIndex+'"] .tt-product-slide').attr('data-slide');
						$t.find('.swiper-slide.hovered').removeClass('hovered');
						$t.find('.swiper-slide[data-val="'+activeIndex+'"]').addClass('hovered');

						preload(imgProduct);
					}
				}
			});
			swipers['swiper-'+index].reInit();
			if($t.attr('data-slides-per-view')=='responsive'){
				var paginationSpan = $t.find('.pagination span');
				var paginationSlice = paginationSpan.hide().slice(0,(paginationSpan.length+1-slidesPerViewVar));
				if(paginationSlice.length<=1 || slidesPerViewVar>=$t.find('.swiper-slide').length) $t.addClass('pagination-hidden');
				else $t.removeClass('pagination-hidden');
				paginationSlice.show();
			}
			initIterator++;
		});

	}

	function updateSlidesPerView(swiperContainer){
		if(winW>=addPoint) return parseInt(swiperContainer.attr('data-add-slides'),10);
		else if(winW>=lgPoint) return parseInt(swiperContainer.attr('data-lg-slides'),10);
		else if(winW>=mdPoint) return parseInt(swiperContainer.attr('data-md-slides'),10);
		else if(winW>=smPoint) return parseInt(swiperContainer.attr('data-sm-slides'),10);
		else return parseInt(swiperContainer.attr('data-xs-slides'),10);
	}

	//swiper arrows
	$('.swiper-arrow-left').on('click', function(){
		swipers['swiper-'+$(this).parent().attr('id')].swipePrev();
	});

	$('.swiper-arrow-right').on('click', function(){
		swipers['swiper-'+$(this).parent().attr('id')].swipeNext();
	});

	//custom swiper arrows
	$('.custom-arrow-left').on('click', function(){
		swipers['swiper-'+$(this).siblings('.swiper-container').attr('id')].swipePrev();
	});
	$('.custom-arrow-right').on('click', function(){
		swipers['swiper-'+$(this).siblings('.swiper-container').attr('id')].swipeNext();
	});	

    function preload(image) {
        var img = new Image ();
        img.onload = function() {
        	$('.tt-product-bigimg img').remove();
        	$('.tt-product-bigimg').append(img).removeClass('active');
        };
    	img.src = image;
    	img.className = "img-responsive";
    	$('.tt-product-bigimg').addClass('active');       
    }   

	/*==============================*/
	/* 08 - buttons, clicks, hovers */
	/*==============================*/
	//menu
	$('.cmn-toggle-switch').on('click', function(e){
		$(this).toggleClass('active');
		$(this).siblings('.toggle-block').slideToggle();
		e.preventDefault();
	});
	$(document).on('click', '.main-nav .menu-toggle', function(e){
		$(this).closest('li').addClass('active').siblings('.active').removeClass('active');
		$(this).closest('li').siblings('.parent').find('ul').slideUp();
		$(this).parent().siblings('ul').slideToggle();
		e.preventDefault();
	});
	$(document).on('click', '.main-nav .menu-toggle-inner', function(e){
		$(this).closest('li').addClass('active').siblings('.active').removeClass('active');
		$(this).closest('li').siblings('li').find('ul').slideUp();
		$(this).parent().siblings('ul').slideToggle();
		e.preventDefault();
	});
	
	$('.main-nav > ul > .menu-item-has-children > a').append('<i class="menu-toggle fa fa-angle-down"></i>');

	//search	
    $('.tt-top-search').on('click', function(e){
		$('.tt-search-popup').addClass('open');
		e.preventDefault();
	});
	$('.tt-search-popup .close,.tt-search-overlay').on('click', function(e){
		$('.tt-search-popup').removeClass('open');
		e.preventDefault();
	});

	//timer
  	function format(number){
    	if(number===0){
      		return '00';
    	}else if (number < 10) {
          	return '0' + number;
      	} else{
          	return ''+number;
      	}
    }	
	function setTimer(final_date, obj){         
		var today = new Date(),
			finalTime = new Date(final_date),
			interval = finalTime - today;
		if(interval<0) interval = 0;
		var days = parseInt(interval/(1000*60*60*24),10),
			daysLeft = interval%(1000*60*60*24),
			hours = parseInt(daysLeft/(1000*60*60),10),
			hoursLeft = daysLeft%(1000*60*60),
			minutes = parseInt(hoursLeft/(1000*60),10),
			minutesLeft = hoursLeft%(1000*60),
			seconds = parseInt(minutesLeft/(1000),10);
		$(obj).find('.days').text(format(days));
		$(obj).find('.hours').text(format(hours));
		$(obj).find('.minutes').text(format(minutes));
		$(obj).find('.seconds').text(format(seconds));
	}
	$(".tt-timer" ).each(function() {
	 	var final_date  = $(this).data('finaldate'),
	 		obj = this;
		setTimer(final_date, obj);
		setInterval(function(){setTimer(final_date, obj);}, 1000);	 	
	});

    //Tabs
	var tabFinish = 0;
	$('.tt-nav-tab-item').on('click', function(){		
	    var $t = $(this);
	    if(tabFinish || $t.hasClass('active')) return false;
	    tabFinish = 1;
	    $t.closest('.tt-nav-tab').find('.tt-nav-tab-item').removeClass('active');
	    $t.addClass('active');
	    var index = $t.parent().parent().find('.tt-nav-tab-item').index(this);
	    $t.parents('.tt-tab-nav-wrapper').find('.tt-tab-select select option:eq('+index+')').prop('selected', true);
	    $t.closest('.tt-tab-wrapper').find('.tt-tab-info:visible').fadeOut(500, function(){
	    	var $tabActive  = $t.closest('.tt-tab-wrapper').find('.tt-tab-info').eq(index);
	    	$tabActive.css('display','block').css('opacity','0');
	    	tabReinit($tabActive.parents('.tt-tab-wrapper'));
	    	$tabActive.animate({opacity:1});
	    	 tabFinish = 0;
	    });
	});
	$('.tt-tab-select select').on('change', function(){
	    var $t = $(this);
	    if(tabFinish) return false;
	    tabFinish = 1;    
	    var index = $t.find('option').index($(this).find('option:selected'));
	    $t.closest('.tt-tab-nav-wrapper').find('.tt-nav-tab-item').removeClass('active');
	    $t.closest('.tt-tab-nav-wrapper').find('.tt-nav-tab-item:eq('+index+')').addClass('active');
	    $t.closest('.tt-tab-wrapper').find('.tt-tab-info:visible').fadeOut(500, function(){
	    	var $tabActive  = $t.closest('.tt-tab-wrapper').find('.tt-tab-info').eq(index);
	    	$tabActive.css('display','block').css('opacity','0');
	    	tabReinit($tabActive.parents('.tt-tab-wrapper'));
	    	$tabActive.animate({opacity:1});
	    	 tabFinish = 0;
	    });
	});
	function tabReinit($tab){
		$tab.find('.swiper-container').each(function(){
			var thisSwiper = swipers['swiper-'+$(this).attr('id')], $t = $(this);
			thisSwiper.reInit();	
		});			
	}					

	/*accordion*/
	$('.tt-accordion-title').on( 'click', function() {
		if($(this).hasClass('active')){
			$(this).siblings('.tt-accordion-body').slideUp();
			$(this).removeClass('active');
		} else{
			$(this).closest('.tt-accordion').find('.tt-accordion-title.active').removeClass('active');
			$(this).closest('.tt-accordion').find('.tt-accordion-body').slideUp('slow');
			$(this).toggleClass('active');
			$(this).siblings('.tt-accordion-body').slideToggle('slow');
		}
	});

	$('.tt-searchbar-view').on( 'click', function(e) {
		var $t = $(this),
			view = $t.attr('data-view');
		$t.siblings('.tt-searchbar-view.active').removeClass('active');
		$t.addClass('active');
		$t.parent('.tt-searchbar-top').siblings('.tt-seachbar-content').attr('data-view',view);
		e.preventDefault();
	});

	/*counters*/
	$('.tt-counter').viewportChecker({
		offset: 100,
		callbackFunction: function(elem, action){
			elem.find('.tt-counter-number').countTo();		
		}		
	});

	/*tt-comment-more*/
    $('.tt-comment-more').on('click', function (e) {
    	var $commentWrapper =  $(this).siblings('.tt-comment'),
    		cloneHtml = $commentWrapper.children('li').slice(0,2).clone();
       $commentWrapper.append(cloneHtml);
       e.preventDefault(); 
    });

	//isotope filter
	$container = $('.isotope-content');
	$('.isotope-nav').on( 'click', 'a', function(e) {
		var filterValue = $(this).attr('data-filter');
		var $buttonGroup = $(this).parent().parent();
		var index = $buttonGroup.find('li').index($(this).parent());
		$buttonGroup.siblings('.isotope-select').find('option:eq('+index+')').prop('selected', true);
		$container.isotope({ filter: filterValue });
		$buttonGroup.find('.selected').removeClass('selected');
		$(this).parent().addClass('selected');
		e.preventDefault();
	});
	$('.isotope-select select').on( 'change', function() {
		var filterValue = $(this).find('option:selected').val();
		var index = $(this).find('option').index($(this).find('option:selected'));
		$container.isotope({ filter: filterValue });
		var $buttonGroup = $(this).parents('.isotope-select').siblings('.isotope-nav');
		$buttonGroup.find('.selected').removeClass('selected');
		$buttonGroup.find('li').eq(index).addClass('selected');
	});

	//progress bar
	$('.tt-progress-block').viewportChecker({
		classToAdd: 'counted',
		offset: 100,
		callbackFunction: function(elem, action){
			if($(elem).not('.counted')){
				elem.find('.tt-progress-count').countTo();
				var $progress_bar = $(elem).find('.tt-progress-bar');
				var speed = parseInt($progress_bar.attr("data-speed"),10);
				var to = $progress_bar.attr("data-to");			
				$progress_bar.animate({width: to+"%"}, {duration: speed});				
			}	
		}		
	});

	/*revolution slider*/
	if ($('.rev_slider_wrapper').length) {
		$(".rev_slider").revolution({
			sliderType:"standard",
			sliderLayout:"auto",
			delay:500000000,
			navigation: {
				arrows:{enable:true} 
			}, 
			gridwidth:1140,
			gridheight:700 
		});
	}

	/*=====================*/
	/* 12 - LIGHT-BOX */
	/*=====================*/
	
	/*activity indicator functions*/
	var activityIndicatorOn = function(){
		$('<div id="imagelightbox-loading"><div></div></div>').appendTo('body');
	};
	var activityIndicatorOff = function(){
		$('#imagelightbox-loading').remove();
	};
	
	/*close button functions*/
	var closeButtonOn = function(instance){
		$('<button type="button" id="imagelightbox-close" title="Close"></button>').appendTo('body').on('click touchend', function(){ $(this).remove(); instance.quitImageLightbox(); return false; });
	};
	var closeButtonOff = function(){
		$('#imagelightbox-close').remove();
	};
	
	/*overlay*/
	var overlayOn = function(){$('<div id="imagelightbox-overlay"></div>').appendTo('body');};
	var overlayOff = function(){$('#imagelightbox-overlay').remove();};
	
	/*caption*/
	var captionOff = function(){$('#imagelightbox-caption').remove();};
	var captionOn = function(){
		var description = $('a[href="' + $('#imagelightbox').attr('src') + '"] img').attr('alt');
		if(description.length)
			$('<div id="imagelightbox-caption">' + description +'</div>').appendTo('body');
	};

	/*arrows*/
    var arrowsOn = function(instance, selector) {
        var $arrows = $('<button type="button" class="imagelightbox-arrow imagelightbox-arrow-left"><i class="fa fa-chevron-left"></i></button><button type="button" class="imagelightbox-arrow imagelightbox-arrow-right"><i class="fa fa-chevron-right"></i></button>');
        $arrows.appendTo('body');
        $arrows.on('click touchend', function(e) {
            e.preventDefault();
            var $this = $(this);
            if( $this.hasClass('imagelightbox-arrow-left')) {
                instance.loadPreviousImage();
            } else {
                instance.loadNextImage();
            }
            return false;
        });
    };	
	var arrowsOff = function(){$('.imagelightbox-arrow').remove();};	
			
	var selectorG = '.lightbox';
	if($(selectorG).length){
		var instanceG = $(selectorG).imageLightbox({
			quitOnDocClick:	false,
			onStart:		function() {arrowsOn(instanceG, selectorG);overlayOn(); closeButtonOn(instanceG);},
			onEnd:			function() {arrowsOff();captionOff(); overlayOff(); closeButtonOff(); activityIndicatorOff();},
			onLoadStart: 	function() {captionOff(); activityIndicatorOn();},
			onLoadEnd:	 	function() {$('.imagelightbox-arrow').css('display', 'block');captionOn(); activityIndicatorOff();}
		});		
	}

});

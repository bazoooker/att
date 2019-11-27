


$(window).load(function(){
    // $('#preloader').slideUp(400);
    // $('.wrapper').removeClass('h-no-scroll');
});




// sticky-header
var didScroll;
var lastScrollTop = 0;
var delta = 20;
var navbarHeight = $('.sticky-header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
    // console.log($(window).scrollTop());
});

setInterval(function() {
    if (didScroll) {
        if ($(window).scrollTop() > 600) {
            hasScrolled();
            didScroll = false;

        }else {
            $('.sticky-header').removeClass('active');
        }
    } 
}, 500);

function hasScrolled() {
    var st = $(this).scrollTop();


        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        if (st > lastScrollTop && st > navbarHeight){
                $('.sticky-header').removeClass('active');
                if( $(window).width() < 768 ) {
                    $('.btn-burger').fadeOut(100);
                }
                console.log('hide sticky');
        } else {
            if(st + $(window).height() < $(document).height()) {
                $('.sticky-header').addClass('active');
                if( $(window).width() < 768 ) {
                    $('.btn-burger').fadeIn(100);
                }
                console.log('show sticky');
            }
        }
        
        lastScrollTop = st;
};


// function moveScroller() {
//     var $anchor = $("#scroller-anchor-top");
//     var $anchorBottom = $("#scroller-anchor-bottom");
//     var $scroller = $('#scroller');

//     var move = function() {
//         var st = $(window).scrollTop();
//         var ot = $anchor.offset().top;
//         var ot2 = $anchorBottom.offset().top;
//         var $scrollerWidthMaster = $('#scroller-width-master').outerWidth()-16;
//         console.log($scrollerWidthMaster);

//         if(st > ot) {
//             $scroller.css({
//                 position: "fixed",
//                 top: "20px",
//                 width: $scrollerWidthMaster,
//             });
//         } else if (st > ot2) {
//             $scroller.css({
//                 position: "relative",
//             });
//             alert('hit bottom');
//         } else {
//             $scroller.css({
//                 position: "relative",
//                 top: ""
//             });
//         }
//     };
//     $(window).scroll(move);
//     move();
// }


$(document).ready(function(){

  //   $(function() {
  //   moveScroller();
  // });


    // tour-thumb hovers ----------
    if($(window).width() > 768) {
        $('.js-tour-thumb').mouseenter(function() {
            var self = $(this);
            self.addClass('active');
        });
        $('.js-tour-thumb').mouseleave(function() {
            var self = $(this);
            self.removeClass('active');
        });


        // tour-thumb hovers ----------
        $('.js-news-thumb').mouseenter(function() {
            var self = $(this);
            self.addClass('active');
        });
        $('.js-news-thumb').mouseleave(function() {
            var self = $(this);
            self.removeClass('active');
        });

    } else {
        $('.tour-thumb').addClass('active');
        // $('.js-news-thumb').addClass('active');
    }



    // $('.js-hover-tour-item').mouseenter(function() {
    //     var self = $(this);
    //     $('.js-hover-tour-item').addClass('not-active');
    //     self.removeClass('not-active');
    // });
    // $('.js-hover-tour-item').mouseleave(function() {
    //     $('.js-hover-tour-item').removeClass('not-active');
    // });






    // about us slider main --------
    var swiperDoubleMain = new Swiper('.js-double-slider-main', {
      slidesPerView: 1,
      speed: 800,
      effect: "fade",
      autoplay: {
        delay: 3000,
      },
      pagination: {
            el: '.js-double-slider-main .swiper-pagination',
            clickable: true,
        },
        on: {
            slideChange: function () {
                var curActiveIndex = swiperDoubleMain.activeIndex;
                // console.log(curActiveIndex);
                if(!swiperDoubleSecond.isEnd) {
                    swiperDoubleSecond.slideTo((curActiveIndex+1), 1200);
                } else {
                    swiperDoubleSecond.slideTo(0, 1200)
                }
            },
        },
    });
    // about us slider second --------
    var swiperDoubleSecond = new Swiper('.js-double-slider-second', {
        slidesPerView: 1,
        initialSlide: 1,
        effect: "fade",
        speed: 1200,
        keyboardControl: false,
        mousewheelControl: false,
        touchRatio: 0,
    });









    // reviews text slider --------
    var swiperOffer = new Swiper('.js-offer-slider', {
        slidesPerView: 1,
        autoplay: true,
        speed: 1100,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
          },
    });








    // reviews user-thumbs slider --------
    var swiperReviewsThumbs = new Swiper('.js-reviews-thumbs', {
        slidesPerView: 3,
        spaceBetween: 16,
        centeredSlides: true,
        initialSlide: 1,
        navigation: {
            nextEl: '.js-reviews-next',
            prevEl: '.js-reviews-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                initialSlide: 0,
            }
        }
    });
    
    // reviews text slider --------
    var swiperReviewsText = new Swiper('.js-reviews-text', {
        slidesPerView: 1,
        initialSlide: 1,
        touchRatio: 0,
        
    });

    // reviews text slider --------
    var swiperReviewsZoom = new Swiper('.js-review-zoom', {
        slidesPerView: 1,
        effect: 'fade',
        initialSlide: 1,
        duration: 100,
        touchRatio: 0,
        on: {
            slideChange: function () {
                $('.swiper-slide-fraction-current').addClass('active');
                setTimeout(function() {
                $('.swiper-slide-fraction-current').removeClass('active');

                },200);
                $('#review-total').html('0' + ((swiperReviewsText.slides.length).toString()).slice(-2));
                $('#review-current').html('0' + ((swiperReviewsText.activeIndex+1).toString()).slice(-2));
            },
        }
    });

    $('.js-review-sync').click(function() {

        var clickedSlide = $('.js-review-sync').index(this);
        swiperReviewsText.slideTo(clickedSlide);
        swiperReviewsZoom.slideTo(clickedSlide);
        swiperReviewsThumbs.slideTo(clickedSlide);

        console.log(clickedSlide);
    });

    $('.js-review-next').click(function() {
        swiperReviewsText.slideNext();
        swiperReviewsZoom.slideNext();
        swiperReviewsThumbs.slideNext();
    });
    $('.js-review-prev').click(function() {
        swiperReviewsText.slidePrev();
        swiperReviewsZoom.slidePrev();
        swiperReviewsThumbs.slidePrev();
    });

    // initial inject of slides numbers
    $('#review-total').html('0' + ((swiperReviewsText.slides.length).toString()).slice(-2));
    $('#review-current').html('0' + ((swiperReviewsText.activeIndex+1).toString()).slice(-2));




    var swiperModal = new Swiper('.js-modal-slider', {
      slidesPerView: 1,
      speed: 800,
      effect: "fade",
      autoplay: {
        delay: 3000,
      },
      pagination: {
            el: '.js-modal-slider .swiper-pagination',
            clickable: true,
        },
    });

    




    // form labels----------------------------

    // remove floating if user
    $('.js-floating-label').each(function() {
        if($(this).val()!=""){
            $(this).parent().find('.signup-form-floating-placeholder').addClass('float');
        }
    });

    // floating on focus
    $('.js-floating-label').blur();
    $('.js-floating-label').on('focus', function() {
        $(this).parent().find('.signup-form-floating-placeholder').addClass('float');
    });
    $('.js-floating-label').on('blur', function() {
        if($(this).val()!=""){} else {
            $(this).parent().find('.signup-form-floating-placeholder').removeClass('float');
        };
    });








        // $('.js-read-more').click(function(e) {
        //     e.preventDefault();
        //     if( !$(this).hasClass('read-more__link_active') ) {
        //         $(this).addClass('read-more__link_active');
        //         $(this).next().slideDown(300);
        //     }else {
        //         $(this).removeClass('read-more__link_active');
        //         $(this).next().slideUp(300);
        //     }
        // });



    $(".js-scroll-to-section").click(function(event) {
        event.preventDefault();
        var targetSection = $(this).attr("data-scrollTo");
        $('html, body').animate({
            scrollTop: $("#"+targetSection).offset().top -150
        }, 800);
    });

    // $(".js-scroll-to-section-from-menu").click(function(event) {
    //     event.preventDefault();
    //     $('#mobile-menu').removeClass('active');
    //     $('.page-wrapper').removeClass('no-scroll');
    //     var targetSection = $(this).attr("data-scrollTo");
    //     $('html, body').animate({
    //         scrollTop: $("#"+targetSection).offset().top -150
    //     }, 800);
    // });



    new WOW().init();
        $('select').niceSelect();
    // $.stellar();
    // $('.js-mask-tel').mask('+7 (999) 999-99-99', {placeholder:"_"});

    // --------------------
    // анимация фигур



    $('.js-mobile-menu').click(function(e) {
        var self = $(this);
        // закрываем
        if( (self.hasClass('is-active')) ) {
                // self.removeClass('animation-in-progress');
                $('.mobile-menu').removeClass('active');
                self.removeClass('is-active');
                $('.overlay.js-close-mobile-menu').fadeOut(200);
            }

        // открываем
        else {
            self.addClass('animation-in-progress');
            $('.mobile-menu').addClass('active');
            self.addClass('is-active');
            $('.overlay.js-close-mobile-menu').fadeIn(200);
        }
    });
    $('.js-close-mobile-menu').click(function() {

        $('.mobile-menu').removeClass('active');
        $('.hamburger').removeClass('is-active');
        $(this).fadeOut(200);
    });
































$('#form-on-main input').parent().removeClass('success error');
$('#form-in-modal input').parent().removeClass('success error');


$('#form-on-main--name').on('input', function() {
    var nameField = $('#form-on-main--name').val().length;
    var telField = $('#form-on-main--tel').val().length;

    if( nameField < 4 ) {
        $('#form-on-main--name').parent().addClass('error').removeClass('success');
        $('#form-on-main--name').parent().find('.message-error').fadeIn(300);
        $('#form-on-main .btn').addClass('disabled');
    }else {
        $('#form-on-main--name').parent().addClass('success').removeClass('error');
        $('#form-on-main--name').parent().find('.message-error').fadeOut(300);
    }
    if( nameField > 3 && telField > 11) {
        $('#form-on-main .btn').removeClass('disabled');
    } 
});


$('#form-on-main--tel').on('input', function() {
    var nameField = $('#form-on-main--name').val().length;
    var telField = $('#form-on-main--tel').val().length;
    console.log(telField);

    if( telField < 12 ) {
        $('#form-on-main--tel').parent().addClass('error').removeClass('success');
        $('#form-on-main--tel').parent().find('.message-error').fadeIn(300);
        $('#form-on-main .btn').addClass('disabled');
    }else {
        $('#form-on-main--tel').parent().addClass('success').removeClass('error');
        $('#form-on-main--tel').parent().find('.message-error').fadeOut(300);
    }
    if( nameField > 3 && telField > 11) {
        $('#form-on-main .btn').removeClass('disabled');
    } 
});

$('#form-on-main--tel').focus(function() {
    console.log('tel focus');
    var self = $(this);
    console.log(self.val().length);
    if(self.val().length < 3) {
        self.val('+7');
    }
});











$('#form-in-modal--name').on('input', function() {
    var nameField = $('#form-in-modal--name').val().length;
    var telField = $('#form-in-modal--tel').val().length;

    if( nameField < 4 ) {
        $('#form-in-modal--name').parent().addClass('error').removeClass('success');
        $('#form-in-modal--name').parent().find('.message-error').fadeIn(300);
        $('#form-in-modal .btn').addClass('disabled');
    }else {
        $('#form-in-modal--name').parent().addClass('success').removeClass('error');
        $('#form-in-modal--name').parent().find('.message-error').fadeOut(300);
    }
    if( nameField > 3 && telField > 11) {
        $('#form-in-modal .btn').removeClass('disabled');
    } 
});


$('#form-in-modal--tel').on('input', function() {
    var nameField = $('#form-in-modal--name').val().length;
    var telField = $('#form-in-modal--tel').val().length;
    console.log(telField);

    if( telField < 12 ) {
        $('#form-in-modal--tel').parent().addClass('error').removeClass('success');
        $('#form-in-modal--tel').parent().find('.message-error').fadeIn(300);
        $('#form-in-modal .btn').addClass('disabled');
    }else {
        $('#form-in-modal--tel').parent().addClass('success').removeClass('error');
        $('#form-in-modal--tel').parent().find('.message-error').fadeOut(300);
    }
    if( nameField > 3 && telField > 11) {
        $('#form-in-modal .btn').removeClass('disabled');
    } 
});

$('#form-in-modal--tel').focus(function() {
    var self = $(this);
    console.log(self.val().length);
    if(self.val().length < 3) {
        self.val('+7');
    }
});













    // $('#form-on-main input').on('input', function() {
    //     var nameField = $('#form-on-main--name').val().length;
    //     var telField = $('#form-on-main--tel').val().length;

    //     if( nameField < 4 ) {
    //         $('#form-on-main--name').parent().addClass('error').removeClass('success');
    //         $('#form-on-main--name').parent().find('.message-error').show(300);
    //         $('#form-on-main .btn').addClass('disabled');
    //     }else {
    //         $('#form-on-main--name').parent().addClass('success').removeClass('error');
    //         $('#form-on-main--name').parent().find('.message-error').hide(300);
    //     }
    //     if( telField < 12 ) {
    //         $('#form-on-main--tel').parent().addClass('error').removeClass('success');
    //         $('#form-on-main--tel').parent().find('.message-error').show(300);
    //         $('#form-on-main .btn').addClass('disabled');
    //     }else {
    //         $('#form-on-main--tel').parent().addClass('success').removeClass('error');
    //         $('#form-on-main--tel').parent().find('.message-error').hide(300);
    //     }
    //     if( nameField > 3 && telField > 11) {
    //         $('#form-on-main .btn').removeClass('disabled');
    //     } 
    // });



      // google.charts.load("current", {packages:["corechart"]});
      // google.charts.setOnLoadCallback(drawChart);
      // function drawChart() {
      //   var data = google.visualization.arrayToDataTable([
      //     ['Task', 'Hours per Day'],
      //     ['Маршруты на моторных лодках', 6874],
      //     ['Доставка ГЭС-Патмос и обратно', 7129],
      //     ['Маршрут четыре порога', 507],
      //     ['Маршрут два порога', 1683],
      //     ['Прогулочные маршруты', 2008]
      //   ]);

      //   var options = {
      //     pieHole: 0.6,
      //     legend: 'none',
      //     backgroundColor: 'none',
      //     slices: {
      //       0: { color: 'FF984E' },
      //       1: { color: 'CBDC80' },
      //       2: { color: 'FFBD5A' },
      //       3: { color: '35E0AD' },
      //       4: { color: 'FC564B' }
      //     }
      //   };

      //   var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
      //   chart.draw(data, options);
      // }






    // --------------------
    // анимация лодки


    // анимация лодки мск-хабаровск







    // --------------------
    // icon-text hover
    // $('.js-icon-text-hover').mouseenter(function() {
    //     if ($(window).width() > 768) {
    //         $(this).addClass('icon-text_active');
    //     }
    // });

    // $('.js-icon-text-hover').mouseleave(function() {
    //     if ($(window).width() > 768) {
    //         $(this).removeClass('icon-text_active');
    //     }
    // });
    // --------------------





    // --------------------
    // аккордеоны
    $('.js-accordeon').click(function() {
        let accordIsOpen = $(this).parent().hasClass('accordeon_active');
        $('.accordeon').removeClass('accordeon_active');
        $('.accordeon').find('.accordeon__content').slideUp(300);
        if(accordIsOpen) {
            $(this).parent().removeClass('accordeon_active');
            $(this).parent().find('.accordeon__content').slideUp(300);
        }else {
            $(this).parent().addClass('accordeon_active');
            $(this).parent().find('.accordeon__content').slideDown(300);
        }
    });

    // --------------------










    // var swiperFeedback = new Swiper('.js-feedback-slider', {
    //   slidesPerView: 3,
    //   spaceBetween: 20,
    //   navigation: {
    //     nextEl: '.feedback-slider__nav .swiper-button-next',
    //     prevEl: '.feedback-slider__nav .swiper-button-prev',
    //   },
    //   breakpoints: {
    //     992: {
    //       slidesPerView: 2,
    //       spaceBetween: 30
    //     },
    //     768: {
    //       slidesPerView: 1,
    //       spaceBetween: 20
    //     }
    //   }
    // });

    // var swiper = new Swiper('.js-slider-gallery', {
    //   slidesPerView: 5,
    //   spaceBetween: 0,
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //   },
    //   freeMode: true,
    // });



    // function favMsge() {
    //     var timer;
    //     $('#success-msg').removeClass('visible');
    //     clearTimeout(timer);

    //     if ( !$(thisProd).hasClass('product-thumb_in-fav') ) {
    //         $(thisProd).addClass('product-thumb_in-fav');
    //         $('#fav-message-add').addClass('visible');

    //         timer = setTimeout( function() {
    //             $('#fav-message-add').removeClass('visible');
    //         }, 900);
    //     }else {
    //         clearTimeout(timer);
    //         $(thisProd).removeClass('product-thumb_in-fav');
    //         $('#fav-message-del').addClass('visible');

    //         timer = setTimeout( function() {
    //             $('#fav-message-del').removeClass('visible');
    //         }, 900);
    //     }
    // }




    // --------------------------
    // КРАСИВЫЕ СЕЛЕКТЫ


    // --------------------------






    // --------------------------
    // СКРОЛЛ ДО СЕКЦИИ


    // $("#scrollToFeatures").click(function() {
    //     $([document.documentElement, document.body]).animate({
    //         scrollTop: $("#scrollToFeatures").offset().top
    //     }, 600);
    // });

    //---------------------------






    // ---------------------------
    // ОТКРЫТИЕ-ЗАКРЫТИЕ МОБИЛЬНОГО МЕНЮ


    // $('.js-open-mobile-menu').on('click', function() {
    //     if( !$('#mobile-menu').hasClass('active') ) {
    //         $('#mobile-menu').addClass('active');
    //         $('.page-wrapper').addClass('no-scroll');
    //         console.log('wooooops!!!!')
    //     } else {
    //         $('#mobile-menu').removeClass('active');
    //         $('.page-wrapper').removeClass('no-scroll');
    //         console.log('wooooops!!!!')
    //     }
    // });

    $(document).on( 'keydown', function ( e ) {
        if ( e.keyCode === 27 ) {
            $('.js-close-mobile-menu').click();
            $('.js-modal-close').click();
        }
    });
    // ---------------------------







    // ---------------------------
    // ФОРМА С ВСПЛЫВАЮЩИМ ПЛЕЙСХОЛДЕРОМ


    $('.js-floating-label').blur();

    $('.js-floating-label').on('focus', function() {
        $(this).parent().find('.signup-form__floating-placeholder').addClass('float');
        $(this).parent().addClass('active');
    });

    $('.js-floating-label').on('blur', function() {
        if($(this).val()!=""){} else {
            $(this).parent().find('.signup-form__floating-placeholder').removeClass('float');
            $(this).parent().removeClass('active');
        };
    });
    // ---------------------------







    // ---------------------------
    // ПРИЛИПАЮЩИЙ ХЕДЕР

    function showStickyHeader() {
        if ( window.pageYOffset > 293 ) {
           $('.sticky-header').addClass('visible');
        }
        else {
            $('.sticky-header').removeClass('visible');
        }
    };

    $(window).scroll(showStickyHeader); 
    // ---------------------------







    // ---------------------------
    // МОДАЛКИ



    $(".js-open-modal").on('click', function(e){
        e.preventDefault();
        $('.message').removeClass('message_visible');

        $('.modal').removeClass('modal_active');
        $('.overlay_modal').fadeOut(400);                          

        var modalName = $(this).data('target');                        
        var modal = $('#' + modalName);

        if( $(modal).hasClass('hidden') ) {
            $(modal).removeClass('hidden');
            if($(window).width() < 768) {
                $('.btn-burger').fadeOut(200);   
            }
        } else {
            $(modal).addClass('hidden');                          
            if($('.sticky-header').hadClass('active') && $(window).width() < 768) {
                $('.btn-burger').fadeIn(200);   
            }
            // $('.wrapper').removeClass('dark');
            // $('.overlay_modal').fadeOut(400);                          
        }
    });

    $(".js-modal-close").on('click', function(){
        $('.modal').addClass('hidden');
        if($('.sticky-header').hasClass('active') && $(window).width() < 768 ) {
            $('.btn-burger').fadeIn(200);   
        }
        // $('.wrapper').removeClass('dark');
        // $('.overlay_modal').fadeOut(400);                          
    });
    // ---------------------------



$('.js-show-signup-message-success').on('click', function(){

	var form=$('.signup-form');
        $(form).ajaxSubmit({  
            url: "/ajax/"+$(form).data('file')+".php",
            data: $(form).serialize(),
            dataType: "JSON",
            type: "POST",
            success: function(data){
                if(data.done) {
			$('.js-show-signup-message-success').html('<i class="fa fa-check" aria-hidden="true"></i>&nbsp;&nbsp;Отправлено!');
			$('.signup-form').find('input[type=text]').val('');
                } else {
			$('.signup-form').find('.modal-errors').show();
			$('.signup-form').find('.modal-errors').html(data.message);
			setTimeout("$('.signup-form').find('.modal-errors').hide()",1000);
                }
            },
            complete: function(){
            }
        });
	return false;
});
$('.modal#callback .js-show-success-message').on('click', function(){

	var form=$('.modal#callback form');
        $(form).ajaxSubmit({  
            url: "/ajax/"+$(form).data('file')+".php",
            data: $(form).serialize(),
            dataType: "JSON",
            type: "POST",
            success: function(data){
                if(data.done) {
			$('.modal#callback form').find('input[type=text]').val('');
		        var timer;
		            $('.message').addClass('message_visible');
		            clearTimeout(timer);


		            timer = setTimeout( function() {
	                $('.modal').removeClass('modal_active');
	                $('.overlay_modal').fadeOut(400); 
	            }, 2000);

                } else {
			$('.modal#callback form').find('.modal-errors').show();
			$('.modal#callback form').find('.modal-errors').html(data.message);
			setTimeout("$('.modal#callback form').find('.modal-errors').hide()",1000);
                }
            },
            complete: function(){
            }
        });
	return false;
});

$('.modal#write .js-show-success-message').on('click', function(){

	var form=$('.modal#write form');
        $(form).ajaxSubmit({  
            url: "/ajax/"+$(form).data('file')+".php",
            data: $(form).serialize(),
            dataType: "JSON",
            type: "POST",
            success: function(data){
                if(data.done) {
			$('.modal#write form').find('input[type=text]').val('');
		        var timer;
		            $('.message').addClass('message_visible');
		            clearTimeout(timer);


		            timer = setTimeout( function() {
	                $('.modal').removeClass('modal_active');
	                $('.overlay_modal').fadeOut(400); 
	            }, 2000);

                } else {
			$('.modal#write form').find('.modal-errors').show();
			$('.modal#write form').find('.modal-errors').html(data.message);
			setTimeout("$('.modal#write form').find('.modal-errors').hide()",1000);
                }
            },
            complete: function(){
            }
        });
	return false;
});

 
    // ---------------------------
    // НАВЕРХ СТРАНИЦЫ

    function showToTopButton() {
        if ( window.pageYOffset > 500 ) {
           $('.to-top').addClass('to-top_visible')
        }
        else {
            $('.to-top').removeClass('to-top_visible')
        }
    }; 

    function scrollToTop() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    }; 
    $('.js-scroll-to-top').click(scrollToTop);
    $(window).scroll(showToTopButton);    
    // ---------------------------





});


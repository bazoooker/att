


$(window).load(function(){
    $('#preloader').slideUp(400);
    $('.wrapper').removeClass('h-no-scroll');
});





$(window).scroll(function() {

    // $('.js-trigger-boat').each(function() {
    //     if( $(this).visible(true) ) {
    //         if(!$('.js-trigger-boat').hasClass('triggered')) {
    //             $('.js-trigger-boat').addClass('triggered');
    //             var pathBoatWave = anime.path('#pathForFloatingBoat path');
    //             console.log('trigger!');
    //             anime({
    //                 targets: '.js-raft-float',
    //                 translateX: pathBoatWave('x'),
    //                 translateY: pathBoatWave('y'),
    //                 rotate: pathBoatWave('angle'),
    //                 easing: 'linear',
    //                 duration: 10000,
    //                 begin: function(anim) {
    //                     console.log('anim begin');
    //                 },
    //                 complete: function(anim) {
    //                     $('.js-trigger-boat').removeClass('triggered');
    //                 }
    //             }) 
    //         }
    //     }        
    // });


    // $('.js-trigger-boat-on-map').each(function() {
    //     if( $(this).visible(true) ) {
    //         if(!$('.js-trigger-boat-on-map').hasClass('triggered')) {
    //             $('.js-trigger-boat-on-map').addClass('triggered');
    //             var pathBoatMap = anime.path('#pathForMapBoat path');
    //             console.log('trigger!');
    //             anime({
    //                 targets: '.js-raft-on-map',
    //                 translateX: pathBoatMap('x'),
    //                 translateY: pathBoatMap('y'),
    //                 rotate: pathBoatMap('angle'),
    //                 easing: 'linear',
    //                 duration: 6000,
    //                 begin: function(anim) {
    //                     console.log('anim begin');
    //                 },
    //                 complete: function(anim) {
    //                     $('.js-move-boat-on-map').removeClass('triggered');
    //                 }
    //             }) 
    //         }
    //     }        
    // });

});

// var getNewPhotos = function(){
//     $(".gallerycontainer").load( "/ajax/gallery.php", function() {
//         setTimeout( function() {
//             $('#gallery').removeClass('reload');
//         },1500);
//     });
// };

// function reloadgallery(){
//     $('#gallery').addClass('reload');
//         setTimeout(getNewPhotos,600);
// };

$(document).ready(function(){
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
    // $.stellar();

    $('.js-mask-tel').mask('+7 (999) 999-99-99', {placeholder:"_"});

    // --------------------
    // анимация фигур

    // $('.js-animate-shape-on-hover').mouseenter(function() {

        // !!! 
        // чтобы схема работала, нужно:
        // 1. присвоить класс .js-animate-shape-on-hover родительскому контейнеру
        // 2. присводить ему дата-таргет, идентичный id svg-фигуры внути
        // 3. присвоить svg-фигуре ай-ди

        // var animTarget = $(this).data('target');
        // var pathFrom = $(this).find('path.path-1').attr('d');
        // var pathTo = $(this).find('path.path-2').attr('d');

        // anime({
        //     targets: "#"+animTarget,
        //     d: [
        //         { value: pathFrom },
        //         { value: pathTo },
        //         { value: pathFrom },
        //     ],
        //     easing: 'easeOutQuad',
        //     duration: 5000,
        // });
    });

    // --------------------



    // $('.js-made-by-anim').on('mouseenter', function() {
    //     $(this).addClass('made-by_active');
    // });
    // $('.js-made-by-anim').on('mouseleave', function() {
    //     $(this).removeClass('made-by_active');
    // })





    // --------------------
    // icon-text hover
    $('.js-icon-text-hover').mouseenter(function() {
        if ($(window).width() > 768) {
            $(this).addClass('icon-text_active');
        }
    });

    $('.js-icon-text-hover').mouseleave(function() {
        if ($(window).width() > 768) {
            $(this).removeClass('icon-text_active');
        }
    })
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











    // $('.js-hero-slider-controls').click(function() {
    //     let heroSlideTo = $(this).data('slideto');        
    //     $('.js-hero-slider-controls').removeClass('bullets__dot_active');
    //     $(this).addClass('bullets__dot_active');
    //     swiperHero.slideTo(heroSlideTo, 200);        
    //     $('.hero__text-slide').hide();
    //     $('.hero__text-slide#text-slide-'+heroSlideTo).show();
    // });




   var swiperHero = new Swiper('.js-hero-slider', {
        speed:  350,
      spaceBetween: 0,
      effect: 'fade',
      autoplay: {
        delay: 6000,
      },
      on: {
        init: function () {
          // console.log('swiper initialized');
        },
      },
    });
    swiperHero.on('slideChange', function () {
        $('.js-hero-slider-controls').removeClass('bullets__dot_active');
        $('.js-hero-slider-controls').eq(swiperHero.activeIndex).addClass('bullets__dot_active');
        $('.hero__text-slide').hide();
        $('.hero__text-slide#text-slide-'+swiperHero.activeIndex).show();
        // $('.hero__text-slide').eq(heroSlideTo).addClass('hero__text-slide_active');
    });
    swiperHero.on('transitionStart', function () {
        $('.hero__photo').addClass('hero__photo_animated');
        
    });
    swiperHero.on('transitionEnd', function () {
        $('.hero__photo').removeClass('hero__photo_animated');
    });






    var swiperFeedback = new Swiper('.js-feedback-slider', {
      slidesPerView: 3,
      spaceBetween: 20,
      navigation: {
        nextEl: '.feedback-slider__nav .swiper-button-next',
        prevEl: '.feedback-slider__nav .swiper-button-prev',
      },
      breakpoints: {
        992: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20
        }
      }
    });

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







    // ---------------------------
    // ОТКРЫТИЕ-ЗАКРЫТИЕ МОБИЛЬНОГО МЕНЮ


    // $('.js-open-mobile-menu').on('click', function() {
    //     if( !$('#mobile-menu').hasClass('active') ) {
    //         $('#mobile-menu').addClass('active');
    //         $('.page-wrapper').addClass('no-scroll');
    //     } else {
    //         $('#mobile-menu').removeClass('active');
    //         $('.page-wrapper').removeClass('no-scroll');
    //     }
    // });

    $(document).on( 'keydown', function ( e ) {
        if ( e.keyCode === 27 ) {
                // функция....
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

        if( !$(modal).hasClass('modal_active') ) {
            $(modal).addClass('modal_active');
            $('.overlay_modal').fadeIn(400);                          
        } else {
            $(modal).removeClass('modal_active');                          
            $('.overlay_modal').fadeOut(400);                          
        }
    });

    $(".js-modal-close").on('click', function(){
        $('.modal').removeClass('modal_active');
        $('.overlay_modal').fadeOut(400);                          
    });
    // ---------------------------



// $('.js-show-signup-message-success').on('click', function(){

// 	var form=$('.signup-form');
//         $(form).ajaxSubmit({  
//             url: "/ajax/"+$(form).data('file')+".php",
//             data: $(form).serialize(),
//             dataType: "JSON",
//             type: "POST",
//             success: function(data){
//                 if(data.done) {
// 			$('.js-show-signup-message-success').html('<i class="fa fa-check" aria-hidden="true"></i>&nbsp;&nbsp;Отправлено!');
// 			$('.signup-form').find('input[type=text]').val('');
//                 } else {
// 			$('.signup-form').find('.modal-errors').show();
// 			$('.signup-form').find('.modal-errors').html(data.message);
// 			setTimeout("$('.signup-form').find('.modal-errors').hide()",1000);
//                 }
//             },
//             complete: function(){
//             }
//         });
// 	return false;
// });


// $('.modal#callback .js-show-success-message').on('click', function(){

// 	var form=$('.modal#callback form');
//         $(form).ajaxSubmit({  
//             url: "/ajax/"+$(form).data('file')+".php",
//             data: $(form).serialize(),
//             dataType: "JSON",
//             type: "POST",
//             success: function(data){
//                 if(data.done) {
// 			$('.modal#callback form').find('input[type=text]').val('');
// 		        var timer;
// 		            $('.message').addClass('message_visible');
// 		            clearTimeout(timer);


// 		            timer = setTimeout( function() {
// 	                $('.modal').removeClass('modal_active');
// 	                $('.overlay_modal').fadeOut(400); 
// 	            }, 2000);

//                 } else {
// 			$('.modal#callback form').find('.modal-errors').show();
// 			$('.modal#callback form').find('.modal-errors').html(data.message);
// 			setTimeout("$('.modal#callback form').find('.modal-errors').hide()",1000);
//                 }
//             },
//             complete: function(){
//             }
//         });
// 	return false;
// });



// $('.modal#write .js-show-success-message').on('click', function(){

// 	var form=$('.modal#write form');
//         $(form).ajaxSubmit({  
//             url: "/ajax/"+$(form).data('file')+".php",
//             data: $(form).serialize(),
//             dataType: "JSON",
//             type: "POST",
//             success: function(data){
//                 if(data.done) {
// 			$('.modal#write form').find('input[type=text]').val('');
// 		        var timer;
// 		            $('.message').addClass('message_visible');
// 		            clearTimeout(timer);


// 		            timer = setTimeout( function() {
// 	                $('.modal').removeClass('modal_active');
// 	                $('.overlay_modal').fadeOut(400); 
// 	            }, 2000);

//                 } else {
// 			$('.modal#write form').find('.modal-errors').show();
// 			$('.modal#write form').find('.modal-errors').html(data.message);
// 			setTimeout("$('.modal#write form').find('.modal-errors').hide()",1000);
//                 }
//             },
//             complete: function(){
//             }
//         });
// 	return false;
// });

 
    // ---------------------------
    // НАВЕРХ СТРАНИЦЫ

    // function showToTopButton() {
    //     if ( window.pageYOffset > 500 ) {
    //        $('.to-top').addClass('to-top_visible')
    //     }
    //     else {
    //         $('.to-top').removeClass('to-top_visible')
    //     }
    // }; 

    // function scrollToTop() {
    //   $("html, body").animate({ scrollTop: 0 }, "slow");
    //   return false;
    // }; 
    // ---------------------------




    // $('.js-scroll-to-top').click(scrollToTop);
    // $(window).scroll(showToTopButton);    

// });



            /*  jQuery Nice Select - v1.1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
 
(function($) {

  $.fn.niceSelect = function(method) {
    
    // Methods
    if (typeof method == 'string') {      
      if (method == 'update') {
        this.each(function() {
          var $select = $(this);
          var $dropdown = $(this).next('.nice-select');
          var open = $dropdown.hasClass('open');
          
          if ($dropdown.length) {
            $dropdown.remove();
            create_nice_select($select);
            
            if (open) {
              $select.next().trigger('click');
            }
          }
        });
      } else if (method == 'destroy') {
        this.each(function() {
          var $select = $(this);
          var $dropdown = $(this).next('.nice-select');
          
          if ($dropdown.length) {
            $dropdown.remove();
            $select.css('display', '');
          }
        });
        if ($('.nice-select').length == 0) {
          $(document).off('.nice_select');
        }
      } else {
        console.log('Method "' + method + '" does not exist.')
      }
      return this;
    }
      
    // Hide native select
    this.hide();
    
    // Create custom markup
    this.each(function() {
      var $select = $(this);
      
      if (!$select.next().hasClass('nice-select')) {
        create_nice_select($select);
      }
    });
    
    function create_nice_select($select) {
      $select.after($('<div></div>')
        .addClass('nice-select')
        .addClass($select.attr('class') || '')
        .addClass($select.attr('disabled') ? 'disabled' : '')
        .attr('tabindex', $select.attr('disabled') ? null : '0')
        .html('<span class="current"></span><ul class="list"></ul>')
      );
        
      var $dropdown = $select.next();
      var $options = $select.find('option');
      var $selected = $select.find('option:selected');
      
      $dropdown.find('.current').html($selected.data('display') || $selected.text());
      
      $options.each(function(i) {
        var $option = $(this);
        var display = $option.data('display');

        $dropdown.find('ul').append($('<li></li>')
          .attr('data-value', $option.val())
          .attr('data-display', (display || null))
          .addClass('option' +
            ($option.is(':selected') ? ' selected' : '') +
            ($option.is(':disabled') ? ' disabled' : ''))
          .html($option.text())
        );
      });
    }
    
    /* Event listeners */
    
    // Unbind existing events in case that the plugin has been initialized before
    $(document).off('.nice_select');
    
    // Open/close
    $(document).on('click.nice_select', '.nice-select', function(event) {
      var $dropdown = $(this);
      
      $('.nice-select').not($dropdown).removeClass('open');
      $dropdown.toggleClass('open');
      
      if ($dropdown.hasClass('open')) {
        $dropdown.find('.option');  
        $dropdown.find('.focus').removeClass('focus');
        $dropdown.find('.selected').addClass('focus');
      } else {
        $dropdown.focus();
      }
    });
    
    // Close when clicking outside
    $(document).on('click.nice_select', function(event) {
      if ($(event.target).closest('.nice-select').length === 0) {
        $('.nice-select').removeClass('open').find('.option');  
      }
    });
    
    // Option click
    $(document).on('click.nice_select', '.nice-select .option:not(.disabled)', function(event) {
      var $option = $(this);
      var $dropdown = $option.closest('.nice-select');
      
      $dropdown.find('.selected').removeClass('selected');
      $option.addClass('selected');
      
      var text = $option.data('display') || $option.text();
      $dropdown.find('.current').text(text);
      
      $dropdown.prev('select').val($option.data('value')).trigger('change');
    });

    // Keyboard events
    $(document).on('keydown.nice_select', '.nice-select', function(event) {    
      var $dropdown = $(this);
      var $focused_option = $($dropdown.find('.focus') || $dropdown.find('.list .option.selected'));
      
      // Space or Enter
      if (event.keyCode == 32 || event.keyCode == 13) {
        if ($dropdown.hasClass('open')) {
          $focused_option.trigger('click');
        } else {
          $dropdown.trigger('click');
        }
        return false;
      // Down
      } else if (event.keyCode == 40) {
        if (!$dropdown.hasClass('open')) {
          $dropdown.trigger('click');
        } else {
          var $next = $focused_option.nextAll('.option:not(.disabled)').first();
          if ($next.length > 0) {
            $dropdown.find('.focus').removeClass('focus');
            $next.addClass('focus');
          }
        }
        return false;
      // Up
      } else if (event.keyCode == 38) {
        if (!$dropdown.hasClass('open')) {
          $dropdown.trigger('click');
        } else {
          var $prev = $focused_option.prevAll('.option:not(.disabled)').first();
          if ($prev.length > 0) {
            $dropdown.find('.focus').removeClass('focus');
            $prev.addClass('focus');
          }
        }
        return false;
      // Esc
      } else if (event.keyCode == 27) {
        if ($dropdown.hasClass('open')) {
          $dropdown.trigger('click');
        }
      // Tab
      } else if (event.keyCode == 9) {
        if ($dropdown.hasClass('open')) {
          return false;
        }
      }
    });

    // Detect CSS pointer-events support, for IE <= 10. From Modernizr.
    var style = document.createElement('a').style;
    style.cssText = 'pointer-events:auto';
    if (style.pointerEvents !== 'auto') {
      $('html').addClass('no-csspointerevents');
    }
    
    return this;

  };

}(jQuery));





    $('select').niceSelect();
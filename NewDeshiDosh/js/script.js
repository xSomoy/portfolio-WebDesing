$(function () {
    'use strict';

    // Sticky Menu Start 

    var navOffSet = $('#menuPart').offset().top;

    $(window).on('scroll', function () {
        var scrolled = $(this).scrollTop();
        if (scrolled > navOffSet) {
            $('#menuPart').addClass('menuFix');
        } else {
            $('#menuPart').removeClass('menuFix');
        }
    })

    // Sticky Menu End 

    //    Banner Slider  Start

    $('.bannerInner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

  ]
    });

    //    Banner Slider  End

    // Product Slider Start 

    $('.productSlider1').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true,
        prevArrow: '<i class="fas fa-chevron-left prv_arr"></i>',
        nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

  ]
    });

    // Product Slider End


    $('.venobox').venobox({
        framewidth: 'auto',
        frameheight: 'auto',
        spinner: 'cube-grid',
        border: '5px',
    });

    // Smooth Scroll Start 

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top + 0
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    // Smooth Scroll End

    //     Back To Top Start

    $('.back2top').on('click', function () {
        $('html,body').animate({
            scrollTop: 0,
        }, 1000);
    });

    $(window).on('scroll', function () {
        var backScroll = $(this).scrollTop();
        if (backScroll > 200) {
            $('.back2top').fadeIn();
        } else {
            $('.back2top').fadeOut();
        }
    });

    $(window).on('load', function () {
        $('.preLoader').delay(1000).fadeOut();
    })

    //     Back To Top End


    //     Pre Loader

    $(window).on('load', function () {
        $('.pre_loader').delay(1000).fadeOut(500);
    });

});

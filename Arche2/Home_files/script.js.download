$(function () {
    'use strict';

    // Pre-loader js start
    $(window).on("load", function(){
        $('.pre_loader').delay(500).fadeOut(500);
    });
    
    
    // Menu js start
    var jony = $(".menu_head").offset().top;
    $(window).on("scroll", function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > jony) {
            $(".menu_head").addClass("menu_fix");
        } else {
            $(".menu_head").removeClass("menu_fix");
        }
    });

    // Banner slider js start
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slider-nav',
        autoplay: false,
        speed: 1500,
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true,
        arrows: false,
        centerMode: true,
        centerPadding: 0,
        speed: 1500,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            }
        ]
    });


    //About counter js start
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // Service slider js
    $('.service_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        infinite: true,
        dots: true,
        speed: 1000,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                }
            },
        ]
    });

    // Service slider mobile js
    $('.service_slider_mobile').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        infinite: true,
        dots: true,
        speed: 1000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
        ]
    });

    // project veno box start
    $('.venobox').venobox({
        spinner: "three-bounce",
        spinColor: "#d9b257",
    });

    // test slider js
    $('.test_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        infinite: true,
        dots: true,
        autoplay: true,
        speed: 1000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
        ]
    });

    // Progress bar js start
    $('#bar1').barfiller({
        barColor: '#d9b257',
        tooltip: true,
        duration: 1000,
        animateOnResize: true,
        symbol: "%"
    });
    $('#bar2').barfiller({
        barColor: '#d9b257',
        tooltip: true,
        duration: 1000,
        animateOnResize: true,
        symbol: "%"
    });

    $('#bar3').barfiller({
        barColor: '#d9b257',
        tooltip: true,
        duration: 1000,
        animateOnResize: true,
        symbol: "%"
    });

    $('#bar4').barfiller({
        barColor: '#d9b257',
        tooltip: true,
        duration: 1000,
        animateOnResize: true,
        symbol: "%"
    });


});

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

    //    Banner Slider  


    $('.bannerBigSlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        speed: 3000,
        asNavFor: '.bannerSmallSlider'

    });
    $('.bannerSmallSlider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.bannerBigSlider',
        dots: false,
        centerMode: true,
        speed: 3000,
        focusOnSelect: true,
        centerPadding: 0,
        arrows: false
    });


    //    Counter Up Start 

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //    Counter Up End 


    //    Service Slider Start 

//    $('.serviceImgSlider').slick({
//        slidesToShow: 1,
//        slidesToScroll: 1,
//        dots: true,
//        arrows: false,
//        infinite: true
//    });

    //    Service Slider End 

});

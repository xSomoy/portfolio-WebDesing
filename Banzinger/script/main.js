$('.ss0').on({
    mouseenter: function () {
        $('.ss0ol').slideUp(300);
    },
    mouseleave: function () {
        $('.ss0ol').slideDown(300);
    }
});

$('.ss1').on({
    mouseenter: function () {
        $('.ss1ol').slideUp(300);
    },
    mouseleave: function () {
        $('.ss1ol').slideDown(300);
    }
});

$('.ss2').on({
    mouseenter: function () {
        $('.ss2ol').slideUp(300);
    },
    mouseleave: function () {
        $('.ss2ol').slideDown(300);
    }
});

$('.ss3').on({
    mouseenter: function () {
        $('.ss3ol').slideUp(300);
    },
    mouseleave: function () {
        $('.ss3ol').slideDown(300);
    }
});

$('.pac1').on({
    mouseenter: function () {
        $('.pac1').addClass('scaleUp');
        $('.pac2').addClass('scaleDown');

    },
    mouseleave: function () {
        $('.pac1').removeClass('scaleUp');
        $('.pac2').removeClass('scaleDown');
    }
});

$('.pac3').on({
    mouseenter: function () {
        $('.pac3').addClass('scaleUp');
        $('.pac2').addClass('scaleDown');

    },
    mouseleave: function () {
        $('.pac3').removeClass('scaleUp');
        $('.pac2').removeClass('scaleDown');
    }
});

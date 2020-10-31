$(function () {

    $('.menu__slider').slick({
        // infinite: true,
        speed: 2500,
        dots: true,
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    });

    $('.review__slider').slick({
        speed: 1500,
        dots: true,
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    })


});
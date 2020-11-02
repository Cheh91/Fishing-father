$(function () {

    $('.menu__slider').slick({
        // infinite: true,
        speed: 2500,
        dots: true,
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        responsive: [
            {
                breakpoint: 701,
                settings: {
                prevArrow: false,
                nextArrow: false
                }
            }
        ]
    });

    $('.review__slider').slick({
        speed: 1500,
        dots: true,
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        responsive: [
            {
                breakpoint: 701,
                settings: {
                prevArrow: false,
                nextArrow: false
                }
            }
        ]
    })

});

const topMobileBtn = document.querySelector(".top__wrapper-mobile-btn");
const headerWrapper = document.querySelector(".header__wrapper");
const topSearch = document.querySelector(".top__wrapper-mobile-search");
const topInner = document.querySelector(".top__inner");


const openMenu = () => {
    headerWrapper.classList.toggle("open");
}

topMobileBtn.addEventListener("click", openMenu);


const openSearch = () => {
    topInner.classList.toggle("open");
}

topSearch.addEventListener("click", openSearch);

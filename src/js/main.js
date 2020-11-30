//include('bootstrap.min.js')
$(document).ready(function () {
    $(".menu-toggle__close").click(function () {
        $(".menu-toggle").removeClass("active")
        $(".menu-toggle__inner").removeClass("active")
        $("body").removeClass("overflow")
    });
    $(".product__buy").click(function () {
        $(".cart").addClass("active")
        $(".cart__inner").addClass("active")
        $("body").addClass("overflow")
    });
    $(".cart__close").click(function () {
        $(".cart").removeClass("active")
        $(".cart__inner").removeClass("active")
        $("body").removeClass("overflow")
    });
    $(".search__icon__close").click(function () {
        $("body").removeClass("overflow")
        $(".search").removeClass("active")
        $(".search__inner").removeClass("active")
    });
    if ($("#menu-toggle").length) {

        $(document).on('click', function (e) {
            if ($(e.target).closest('.menu__btn').length || $(e.target).hasClass('menu-toggle')) {
                $("body").toggleClass('overflow')
                $(".menu-toggle").toggleClass('active')
                $(".menu-toggle__inner").toggleClass('active')
            }
        })
    }
    if ($("#cart").length) {

        $(document).on('click', function (e) {
            if ($(e.target).closest('.cart__btn, .product__buy__btn').length || $(e.target).hasClass('cart')) {
                $("body").toggleClass('overflow')
                $(".cart").toggleClass('active')
                $(".cart__inner").toggleClass('active')
            }
            if ($(e.target).closest('.remove_item').length) {
                $(e.target).closest('.cart__order_item').fadeOut(500)
                setTimeout(function () {
                    $(e.target).closest('.cart__order_item').remove()
                }, 1000);
            }
        })
    }
    if ($("#search").length) {

        $(document).on('click', function (e) {
            if ($(e.target).closest('.search__btn').length || $(e.target).hasClass('search')) {
                $("body").toggleClass('overflow')
                $(".search").toggleClass('active')
                $(".search__inner").toggleClass('active')
            }
        })
    }
    $(document).on('click', '.counter', function (e) {
        if ($(e.target).closest('.counter')) {
            const input = $(e.target).closest('.counter').find('input')[0];

            if ($(e.target).closest('.counter_subtract').length && input.value > 1) {
                input.value = --input.value;
                $(input).trigger('change');
            }
            if ($(e.target).closest('.counter_add').length) {
                input.value = ++input.value;
                $(input).trigger('change');
            }
        }
    });
    $(".home-slider .home-slider__image").on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        let page = Math.ceil(((currentSlide || 0) + 1) / 1);
        let numPages = Math.ceil(slick.slideCount / 1);
        $(".home-slider .slides-num").html(`<span>0${page}</span><span class="num__all"> / 0${numPages}</span>`);
    });
    $('.home-slider__image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        speed: 500,
        cssEase: 'linear',
        arrows: true,
        asNavFor: '.home-slider__text'
    });
    $('.home-slider__text').slick({
        asNavFor: '.home-slider__image',
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        speed: 500,
        arrows: false,
        fade: true,
    });
    $(".top-sales .top-sales__slider .product__list").slick({
        slidesToShow: 6,
        slidesToScroll: 5,
        dots: false,
        arrows: true,
        nextArrow: '.top-sales .next_arrow',
        prevArrow: '.top-sales .previous_arrow',
        focusOnSelect: false,
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    dots: false,
                    slidesToShow: 5,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    dots: false,
                    slidesToShow: 4,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $(".brands .brands__slider .brands__list").slick({
        slidesToShow: 7,
        slidesToScroll: 6,
        dots: false,
        arrows: true,
        nextArrow: '.brands .next_arrow',
        prevArrow: '.brands .previous_arrow',
        focusOnSelect: false,
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    dots: false,
                    slidesToShow: 5,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
        ]
    });
    $(".home-review .home-review__slider .home-review__list").slick({
        slidesToShow: 4,
        slidesToScroll: 3,
        dots: false,
        arrows: true,
        nextArrow: '.home-review .next_arrow',
        prevArrow: '.home-review .previous_arrow',
        focusOnSelect: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: false,
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    variableWidth: true,
                    slidesToScroll: 1,
                }
            },
        ]
    });
    $(".catalog__other .catalog__other__slider .product__list").slick({
        slidesToShow: 5,
        slidesToScroll: 4,
        dots: false,
        arrows: true,
        nextArrow: '.catalog__other .next_arrow',
        prevArrow: '.catalog__other .previous_arrow',
        focusOnSelect: false,
        responsive: [
            {
                breakpoint: 1768,
                settings: {
                    dots: false,
                    slidesToShow: 4,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    dots: false,
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $(".catalog-review .catalog-review__slider .catalog-review__list").slick({
        slidesToShow: 4,
        slidesToScroll: 3,
        dots: false,
        arrows: true,
        nextArrow: '.catalog-review .next_arrow',
        prevArrow: '.catalog-review .previous_arrow',
        focusOnSelect: false,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    dots: false,
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    variableWidth: true,
                    slidesToScroll: 1,
                }
            },
        ]
    });
});
//include('jquery.inputmask.bundle.min.js');
$(".popup_callback__input.popup_callback__input--tel").inputmask("+38(999)999-99-99");
$(".popup_opt_price__input.popup_opt_price__input--tel").inputmask("+38(999)999-99-99");
$(".popup_reminder__input.popup_reminder__input--tel").inputmask("+38(999)999-99-99");
$(document).ready(function () {
    $('.stepper').activateStepper();
})
//include('stepper.js')
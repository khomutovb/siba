//include('bootstrap.min.js')
//include('jquery.spincrement.min.js')
//include('repair_equipment.js')
$(document).ready(function () {
    if ($(".rellax").length) {
        const rellaxin = document.querySelectorAll(".rellax");

        rellaxin.forEach(el => {

            const rellax = new Rellax(el, {
                relativeToWrapper: true,
                wrapper: el.parentElement
            });

            window.addEventListener("scroll", () => { // fix to init
                rellax.refresh();
            });

        });
    }

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
    $(".menu-toggle__close").click(function () {
        $(".menu-toggle").removeClass("active")
        $(".menu-toggle__inner").removeClass("active")
        $("body").removeClass("overflow")
    });
    $(".product__buy, .product-page__btn__buy").click(function () {
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
    $(".filter__btn__close").click(function () {
        $("body").removeClass('overflow')
        $(".left-sidebar").removeClass('active')
        $(".left-sidebar__inner").removeClass("active")
    });
    $('.product_reviews_show').click(function () {
        $('.product_reviews_item').removeClass("product_reviews_item_hide");
        $('.product_reviews_show').addClass("product_reviews_item_hide");
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
    $('.cart__step').each(function () {
        var eventFired = 0;
        var valueShort = $(this).attr("data-short");
        if ($(window).width() < 476) {
            $(this).text(valueShort)
        }

        $(window).on('resize', function () {
            if (!eventFired) {
                if ($(window).width() < 476) {
                    $(this).text(valueShort)
                }
            }
        });
    });
    if ($("#cart").length) {

        $(document).on('click', function (e) {
            if ($(e.target).closest('.cart__btn').length || $(e.target).hasClass('cart')) {
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
    if ($("#left-sidebar").length) {

        $(document).on('click', function (e) {
            if ($(e.target).closest('.filter__btn').length || $(e.target).hasClass('left-sidebar')) {
                $("body").toggleClass('overflow')
                $(".left-sidebar").toggleClass('active')
                $(".left-sidebar__inner").toggleClass("active")
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
    $(".product-slider").slick({
        slidesToShow: 1,
        infinite: true,
        dots: true,
        arrows: true,
        speed: 600,
        cssEase: 'linear',
        customPaging: function (slick, index) {
            var image = $(slick.$slides[index]).find('img').attr('src');
            if (image === undefined) {
                return (
                    '<img style="height: 24px" src="img/svg/product-youtube.svg" alt="youtube" /> '
                )
            }
            else {
                return (
                    '<img src="' + image + '" alt="" /> '
                )
            }
        }
    });
    $(".similar-product .similar-product__slider .product__list").slick({
        slidesToShow: 6,
        slidesToScroll: 5,
        dots: false,
        arrows: true,
        nextArrow: '.similar-product .next_arrow',
        prevArrow: '.similar-product .previous_arrow',
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
    $(".viewed-product .viewed-product__slider .product__list").slick({
        slidesToShow: 6,
        slidesToScroll: 5,
        dots: false,
        arrows: true,
        nextArrow: '.viewed-product .next_arrow',
        prevArrow: '.viewed-product .previous_arrow',
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
    $(".analog-product .analog-product__slider .product__list").slick({
        slidesToShow: 6,
        slidesToScroll: 5,
        dots: false,
        arrows: true,
        nextArrow: '.analog-product .next_arrow',
        prevArrow: '.analog-product .previous_arrow',
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
    if ($("#similar-product").length) {
        $(window).scroll(function () {
            var hT = $('#similar-product').offset().top,
                hH = $('#similar-product').outerHeight(),
                wH = $(window).height(),
                wS = $(this).scrollTop();
            console.log((hT - wH), wS);
            if (wS > (hT + hH - wH + 350)) {
                $('header').addClass('shadow');
            }
            else {
                $('header').removeClass('shadow');
            }
        });
    }
    if ($(".benefits__inner").length) {
        $(document).ready(function () {

            var show = true;
            var countbox = ".benefits__inner";
            $(window).on("scroll load resize", function () {
                if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
                var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
                var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
                var w_height = $(window).height(); // Высота окна браузера
                var d_height = $(document).height(); // Высота всего документа
                var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
                if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
                    $(".counter-animation__title").css('opacity', '1');
                    $('.benefits__number').css('opacity', '1');
                    $('.benefits__number').spincrement({
                        thousandSeparator: "",
                        duration: 2000
                    });

                    show = false;
                }
            });

        });
    }
    if ($(".catalog__products").length) {
        $(document).ready(function () {

            var show = true;
            var countbox = ".catalog__products";
            $(window).on("scroll load resize", function () {
                if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
                var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
                var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
                var w_height = $(window).height(); // Высота окна браузера
                var d_height = $(document).height(); // Высота всего документа
                var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
                if (w_top + 800 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
                    $(".catalog__products .product__item").css('animation', '0.3s ease-in-out both fade-in');
                    show = false;
                }
            });

        });
    }
    $(".popup_callback__input.popup_callback__input--tel").inputmask("+38(999)999-99-99", { "clearIncomplete": true });
    $(".popup_opt_price__input.popup_opt_price__input--tel").inputmask("+38(999)999-99-99", { "clearIncomplete": true });
    $(".popup_reminder__input.popup_reminder__input--tel").inputmask("+38(999)999-99-99", { "clearIncomplete": true });
    $(".form-buy__input--tel").inputmask("+38(999)999-99-99", { "clearIncomplete": true });
    $(".breadcrumb-item").eq(-2).addClass("prev");
    $(function () {
        $("form[name='subscribe']").validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2,
                },
                email: {
                    required: true,
                    email: true
                },
                massage: {
                    required: true
                }
            },
            submitHandler: function (form) {
                form.submit();
            }
        });
        $("form[name='callback']").validate({
            rules: {
                telephone: {
                    required: true,
                    minlength: 6,
                },
            },
            submitHandler: function (form) {
                form.submit();
            }
        });
        $("form[name='opt_price']").validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2,
                },
                telephone: {
                    required: true,
                },
                companyName: {
                    required: true,
                },
                email: {
                    email: true
                },
                massage: {
                    required: true
                }
            },
            submitHandler: function (form) {
                form.submit();
            }
        });
        $("form[name='cart__form']").validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2,
                },
                telephone: {
                    required: true,
                },
                email: {
                    email: true,
                    required: true,
                },
                massage: {
                    required: true
                }
            },
            submitHandler: function (form) {
                form.submit();
            }
        });
        $("form[name='product_respond']").validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2,
                },
                massage: {
                    required: true
                },
                rating: {
                    required: true
                }

            },
            errorPlacement: function (error, element) {
                if (element.is(":radio")) {
                    error.appendTo(element.parents('.input__group'));
                }
                else { // This is the default behavior 
                    error.insertAfter(element);
                }
            },
            submitHandler: function (form) {
                form.submit();
            }
        });
        $("form[name='modal__product_respond']").validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2,
                },
                massage: {
                    required: true
                },
                rating: {
                    required: true
                }
            },
            errorPlacement: function (error, element) {
                if (element.is(":radio")) {
                    error.appendTo(element.parents('.input__group'));
                }
                else { // This is the default behavior 
                    error.insertAfter(element);
                }
            },
            submitHandler: function (form) {
                form.submit();
            }
        });
    });
    $('.stepper').activateStepper();
});
//include('jquery.inputmask.bundle.min.js');
//include('stepper.js')
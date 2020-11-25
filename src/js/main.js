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
        speed: 900,
        cssEase: 'linear',
        arrows: true,
        asNavFor: '.home-slider__text'
    });
    $('.home-slider__text').slick({
        asNavFor: '.home-slider__image',
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        speed: 900,
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
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 550,
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
                breakpoint: 1200,
                settings: {
                    dots: false,
                    slidesToShow: 4,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
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
    });
});
//include('jquery.inputmask.bundle.min.js');
$(".popup_callback__input.popup_callback__input--tel").inputmask("+38(999)999-99-99");
$(".popup_opt_price__input.popup_opt_price__input--tel").inputmask("+38(999)999-99-99");
$(document).ready(function () {
    $('.stepper').activateStepper();
})

function validateStepOne() {
    // Extract the checked checkboxes from the first step
    if ($('.step').first().find('input[type="checkbox"]:checked').length)
        return true;
    return false;
}

function validateStepThree() {
    var validation = true;
    if ($('.step:nth-child(3) input[type="text"]').val().indexOf('materialize') === -1)
        validation = false;
    if ($('.step:nth-child(3) input[type="checkbox"]:checked').length === 0)
        validation = false;
    return validation;

}

function nextStepThreeHandler() {
    if (validateStepThree())
        $('.stepper').nextStep();
    else {
        $('.stepper ').destroyFeedback(); $('.stepper').getStep($('.stepper').getActiveStep()).addClass('wrong');
    }
}

$(".cart__submit").click(function () {
    if ($('.step').first().hasClass('active')) {
        $('.stepper').openStep(2);
        setTimeout(function () {
            $(".cart__submit").removeAttr("type")
            $(".cart__submit").text("Оформить заказ")
        }, 100);
    }
});
var firstStep = $('.step').first();
var lastStep = $('.step').last();
firstStep.click(function () {
    setTimeout(function () {
        $(".cart__submit").attr('type','button')
        $(".cart__submit").text("Далее")
    }, 100);
})
lastStep.click(function () {
    setTimeout(function () {
        $(".cart__submit").removeAttr("type")
            $(".cart__submit").text("Оформить заказ")
    }, 100);
})

var validation = $.isFunction($.fn.valid) ? 1 : 0;

$.fn.isValid = function () {
    if (validation) {
        return this.valid();
    } else {
        return true;
    }
};

if (validation) {
    $.validator.setDefaults({
        errorClass: 'invalid',
        validClass: "valid",
        errorPlacement: function (error, element) {
            if (element.is(':radio') || element.is(':checkbox')) {
                error.insertBefore($(element).parent());
            } else {
                error.insertAfter(element); // default error placement.
                // element.closest('label').data('error', error);
                // element.next().attr('data-error', error);
            }
        },
        success: function (element) {
            if (!$(element).closest('li').find('label.invalid:not(:empty)').length) {
                $(element).closest('li').removeClass('wrong');
            }
        }
    });

    // When parallel stepper is defined we need to consider invisible and
    // hidden fields
    if ($('.stepper.parallel').length) $.validator.setDefaults({ ignore: '' });
}

$.fn.getActiveStep = function () {
    var active = this.find('.step.active');
    return $(this.children('.step:visible')).index($(active)) + 1;
};

$.fn.activateStep = function (callback) {
    if ($(this).hasClass('step')) return;
    var stepper = $(this).closest('ul.stepper');
    stepper.find('>li').removeAttr("data-last");
    $(this).addClass("step").stop().css({ 'width': '0%', 'display': 'inherit' }).animate({ width: '100%' }, 400, function () {
        $(this).css({ 'height': 'auto', 'margin-bottom': '', 'display': 'inherit' }); if (callback) callback();
        stepper.find('>li.step').last().attr('data-last', 'true');
    });
};

$.fn.deactivateStep = function (callback) {
    if (!$(this).hasClass('step')) return;
    var stepper = $(this).closest('ul.stepper');
    stepper.find('>li').removeAttr("data-last");
    $(this).stop().animate({ width: '0%' }, 400, function () {
        $(this).removeClass("step").hide().css({ 'height': 'auto', 'margin-bottom': '', 'display': 'none', 'width': '' });
        if (callback) callback();
        stepper.find('>li.step').last().attr('data-last', 'true');
    });
};

$.fn.showError = function (error) {
    if (validation) {
        var name = this.attr('name');
        var form = this.closest('form');
        var obj = {};
        obj[name] = error;
        form.validate().showErrors(obj);
        this.closest('li').addClass('wrong');
    } else {
        this.removeClass('valid').addClass('invalid');
        this.next().attr('data-error', error);
    }
};

$.fn.activateFeedback = function () {
    var active = this.find('.step.active:not(.feedbacking)').addClass('feedbacking').find('.step-content');
    active.prepend('<div class="wait-feedback"> <div class="preloader-wrapper active"> <div class="spinner-layer spinner-blue"> <div class="circle-clipper left"> <div class="circle"></div></div><div class="gap-patch"> <div class="circle"></div></div><div class="circle-clipper right"> <div class="circle"></div></div></div><div class="spinner-layer spinner-red"> <div class="circle-clipper left"> <div class="circle"></div></div><div class="gap-patch"> <div class="circle"></div></div><div class="circle-clipper right"> <div class="circle"></div></div></div><div class="spinner-layer spinner-yellow"> <div class="circle-clipper left"> <div class="circle"></div></div><div class="gap-patch"> <div class="circle"></div></div><div class="circle-clipper right"> <div class="circle"></div></div></div><div class="spinner-layer spinner-green"> <div class="circle-clipper left"> <div class="circle"></div></div><div class="gap-patch"> <div class="circle"></div></div><div class="circle-clipper right"> <div class="circle"></div></div></div></div></div>');
};

$.fn.destroyFeedback = function () {
    var active = this.find('.step.active.feedbacking');
    if (active) {
        active.removeClass('feedbacking');
        active.find('.wait-feedback').remove();
    }
    return true;
};

$.fn.resetStepper = function (step) {
    if (!step) step = 1;
    var form = $(this).closest('form');
    $(form)[0].reset();
    Materialize.updateTextFields();
    return $(this).openStep(step);
};

$.fn.submitStepper = function (step) {
    var form = this.closest('form');
    if (form.isValid()) {
        form.submit();
    }
};

$.fn.nextStep = function (callback, activefb, e) {
    var stepper = this;
    var settings = $(stepper).data('settings');
    var form = this.closest('form');
    var active = this.find('.step.active');
    var next = $(this.children('.step:visible')).index($(active)) + 2;
    var feedback = active.find('.next-step').length > 1 ? (e ? $(e.target).data("feedback") : undefined) : active.find('.next-step').data("feedback");
    // If the stepper is parallel, we want to validate the input of the current active step. Not all elements.
    if ((settings.parallel && $(active).validateStep()) || (!settings.parallel && form.isValid())) {
        if (feedback && activefb) {
            if (settings.showFeedbackLoader) stepper.activateFeedback();
            return window[feedback].call();
        }
        active.removeClass('wrong').addClass('done');
        this.openStep(next, callback);
        return this.trigger('nextstep');
    } else {
        return active.removeClass('done').addClass('wrong');
    }
};

$.fn.prevStep = function (callback) {
    var active = this.find('.step.active');
    if (active.hasClass('feedbacking')) return;
    var prev = $(this.children('.step:visible')).index($(active));
    active.removeClass('wrong');
    this.openStep(prev, callback);
    return this.trigger('prevstep');
};

$.fn.openStep = function (step, callback) {
    var settings = $(this).closest('ul.stepper').data('settings');
    var $this = this;
    var step_num = step - 1;
    step = this.find('.step:visible:eq(' + step_num + ')');
    if (step.hasClass('active')) return;
    var active = this.find('.step.active');
    var next;
    var prev_active = next = $(this.children('.step:visible')).index($(active));
    var order = step_num > prev_active ? 1 : 0;
    if (active.hasClass('feedbacking')) $this.destroyFeedback();
    active.closeAction(order);
    step.openAction(order, function () {
        if (settings.autoFocusInput) step.find('input:enabled:visible:first').focus();
        $this.trigger('stepchange').trigger('step' + (step_num + 1));
        if (step.data('event')) $this.trigger(step.data('event'));
        if (callback) callback();
    });
};

$.fn.closeAction = function (order, callback) {
    var closable = this.removeClass('active').find('.step-content');
    if (order == 1) {
        closable.animate({ left: '-100%' }, function () { closable.css({ display: 'none', left: '0%' }, callback); });
    } else {
        closable.animate({ left: '100%' }, function () { closable.css({ display: 'none', left: '0%' }, callback); });
    }
};

$.fn.openAction = function (order, callback) {
    var openable = this.removeClass('done').addClass('active').find('.step-content');
    if (order == 1) {
        openable.css({ left: '100%', display: 'block' }).animate({ left: '0%' }, callback);
    } else {
        openable.css({ left: '-100%', display: 'block' }).animate({ left: '0%' }, callback);
    }
};

$.fn.activateStepper = function (options) {
    var settings = $.extend({
        linearStepsNavigation: true,
        autoFocusInput: true,
        showFeedbackLoader: true,
        autoFormCreation: true,
        parallel: false // By default we don't assume the stepper is parallel
    }, options);
    $(document).on('click', function (e) {
        if (!$(e.target).parents(".stepper").length) {
            $('.stepper.focused').removeClass('focused');
        }
    });

    $(this).each(function () {
        var $stepper = $(this);
        if (!$stepper.parents("form").length && settings.autoFormCreation) {
            var method = $stepper.data('method');
            var action = $stepper.data('action');
            var method = (method ? method : "GET");
            action = (action ? action : "?");
            $stepper.wrap('<form action="' + action + '" method="' + method + '"></form>');
        }

        $stepper.data('settings', { linearStepsNavigation: settings.linearStepsNavigation, autoFocusInput: settings.autoFocusInput, showFeedbackLoader: settings.showFeedbackLoader, parallel: $stepper.hasClass('parallel') });
        $stepper.find('li.step.active').openAction(1);
        $stepper.find('>li').removeAttr("data-last");
        $stepper.find('>li.step').last().attr('data-last', 'true');

        $stepper.on("click", '.step:not(.active)', function () {
            var object = $($stepper.children('.step:visible')).index($(this));
            if ($stepper.data('settings').parallel && validation) { // Invoke parallel stepper behaviour
                $(this).addClass('temp-active');
                $stepper.validatePreviousSteps()
                $stepper.openStep(object + 1);
                $(this).removeClass('temp-active');
            } else if (!$stepper.hasClass('linear')) {
                $stepper.openStep(object + 1);
            } else if (settings.linearStepsNavigation) {
                var active = $stepper.find('.step.active');
                if ($($stepper.children('.step:visible')).index($(active)) + 1 == object) {
                    $stepper.nextStep(undefined, true, undefined);
                } else if ($($stepper.children('.step:visible')).index($(active)) - 1 == object) {
                    $stepper.prevStep(undefined);
                }
            }
        }).on("click", '.next-step', function (e) {
            e.preventDefault();
            $stepper.nextStep(undefined, true, e);
        }).on("click", '.previous-step', function (e) {
            e.preventDefault();
            $stepper.prevStep(undefined);
        }).on("click", "button:submit:not(.next-step, .previous-step)", function (e) {
            e.preventDefault();
            feedback = e ? $(e.target).data("feedback") : undefined;
            var form = $stepper.closest('form');
            if (form.isValid()) {
                if (feedback) {
                    stepper.activateFeedback();
                    return window[feedback].call();
                }
                form.submit();
            }
        }).on("click", function () {
            $('.stepper.focused').removeClass('focused');
            $(this).addClass('focused');
        });
    });
};

/**
 * Return the step element on given index.
 *
 * @param step, index of the step to be returned
 * @returns {*}, the step requested
 */
$.fn.getStep = function (step) {
    var settings = $(this).closest('ul.stepper').data('settings');
    var $this = this;
    var step_num = step - 1;
    step = this.find('.step:visible:eq(' + step_num + ')');
    return step;
};

/**
 * Run validation over all previous steps from the steps this
 * function is called on.
 */
$.fn.validatePreviousSteps = function () {
    var active = $(this).find('.step.temp-active');
    var index = $(this.children('.step')).index($(active));
    // We assume that the validator is set to ignore nothing.
    $(this.children('.step')).each(function (i) {
        if (i >= index) {
            $(this).removeClass('wrong done');
        } else {
            $(this).validateStep();
        }
    });
};

/**
 * Validate the step that this function is called on.
 */
$.fn.validateStep = function () {
    var stepper = this.closest('ul.stepper');
    var form = this.closest('form');
    var step = $(this);
    // Retrieve the custom validator for that step if exists.
    var validator = step.find('.next-step').data("validator");
    if (this.validateStepInput()) { // If initial base validation succeeded go on
        if (validator) { // If a custom validator is given also call that validator
            if (window[validator].call()) {
                step.removeClass('wrong').addClass('done');
                return true;
            }
            else {
                step.removeClass('done').addClass('wrong');
                return false;
            }
        }
        step.removeClass('wrong').addClass('done');
        return true;
    } else {
        step.removeClass('done').addClass('wrong');
        return false;
    }
};

/**
 * Uses the validation variable set by the stepper constructor
 * to run standard validation on the current step.
 * @returns {boolean}
 */
$.fn.validateStepInput = function () {
    var valid = true;
    if (validation) {
        // Find all input fields dat need validation in current step.
        $(this).find('input.validate').each(function () {
            if (!$(this).valid()) {
                valid = false;
                return false;
            }
        });
    }
    return valid;
};
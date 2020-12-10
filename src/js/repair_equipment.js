$(document).ready(function () {
  // accordions
  (function ($) {
    var allPanels = $('.accordion_left > dd').hide();
    $('.accordion_left > dt > a').click(function () {
      allPanels.slideUp();
      $('.accordion_left > dt > a > .repair_equipment_services_closeimg').removeClass("show_closeimg");
      $('.accordion_left > dt > a > .repair_equipment_services_openimg').removeClass("hide_openimg");
      $(this).parent().next().slideDown();
      $('.accordion_left > dt > a').removeClass("main_color");
      $(this).addClass("main_color");
      var acc = $(this).children('div:nth(1)');
      $(acc).addClass("show_closeimg");
      var acc = $(this).children('div:nth(0)');
      $(acc).addClass("hide_openimg");
      return false;
    });
  })(jQuery);
  (function ($) {
    var allPanels2 = $('.accordion_left > dd');
    $('.repair_equipment_services_closeimg').click(function () {
      allPanels2.slideUp();
      $('.accordion_left > dt > a').removeClass("main_color");
      $('.repair_equipment_services_closeimg').removeClass("show_closeimg");
      $('.repair_equipment_services_openimg').removeClass("hide_openimg");
      return false;
    });
  })(jQuery);
  (function ($) {
    var allPanels = $('.accordion_right > dd').hide();
    $('.accordion_right > dt > a').click(function () {
      allPanels.slideUp();
      $('.accordion_right > dt > a > .repair_equipment_services_closeimg').removeClass("show_closeimg");
      $('.accordion_right > dt > a > .repair_equipment_services_openimg').removeClass("hide_openimg");
      $(this).parent().next().slideDown();
      $('.accordion_right > dt > a').removeClass("main_color");
      $(this).addClass("main_color");
      var acc = $(this).children('div:nth(1)');
      $(acc).addClass("show_closeimg");
      var acc = $(this).children('div:nth(0)');
      $(acc).addClass("hide_openimg");
      return false;
    });
  })(jQuery);
  (function ($) {
    var allPanels2 = $('.accordion_right > dd');
    $('.repair_equipment_services_closeimg').click(function () {
      allPanels2.slideUp();
      $('.accordion_right > dt > a').removeClass("main_color");
      $('.repair_equipment_services_closeimg').removeClass("show_closeimg");
      $('.repair_equipment_services_openimg').removeClass("hide_openimg");
      return false;
    });
  })(jQuery);
});
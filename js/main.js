$(".footer-top").click(function () {
 $("body,html").animate({
  scrollTop: 0
 }, 800);
});
$(".reviews-soc-btn").on("click", function (e) {
 e.preventDefault();
 $(this).hide();
 $(".reviews-soc-wrap a").show();
});
$(".reviews-video-btn").on("click", function (e) {
 e.preventDefault();
 $(this).hide();
 $(".reviews-video-block").show();
});
$('.home-slider').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: true,
 fade: true,
 slide: '.home-slide',
 prevArrow: ".home-slider-prev",
 nextArrow: ".home-slider-next"
});
$('.lend-comparison-slider').slick({
 slidesToShow: 3,
 slidesToScroll: 1,
 arrows: true,
 responsive: [{
  breakpoint: 992,
  settings: {
   slidesToShow: 2
  }
 },
 {
  breakpoint: 768,
  settings: {
   slidesToShow: 1
  }
 },
 {
  breakpoint: 576,
  settings: {
   slidesToShow: 1
  }
 }]
});
$('.lend-other-btn').on('click', function (e) {
 e.preventDefault();
 $('.lend-comparison').toggle();
 $('.lend-comparison-slider').slick('setPosition');
});
$('.lend-comparison').toggle();
// $('audio').audioPlayer({
//   classPrefix: 'audioplayer'
// });
$('.contacts-call-form-phone input').inputmask("(999) 999-99-99");
$(".contacts-call-form-time-drop").niceScroll({
 cursorcolor: "#95E977"
});
$('.contacts-call-form-time-block').on("click", function () {
 $(this).find('.contacts-call-form-time-drop').toggle();
 $(this).find('.contacts-call-form-time-drop').getNiceScroll().resize();
});
$('.contacts-call-form-time-drop-block').on("click", function () {
 $(this).closest('.contacts-call-form-time-drop').find('.contacts-call-form-time-drop-block').removeClass('contacts-call-form-time-drop-block-active');
 $(this).addClass('contacts-call-form-time-drop-block-active');
 $(this).closest('.contacts-call-form-time-block').find('span').html($(this).html());
});
$('.contacts-call-form-phone input').inputmask("(999) 999-99-99")
$(".contacts-call-form-country-drop").niceScroll({
 cursorcolor: "#95E977"
});
$('.contacts-call-form-country').on("click", function () {
 $(this).find('.contacts-call-form-country-drop').toggle();
 $(this).find('.contacts-call-form-country-drop').getNiceScroll().resize();
});
$('.contacts-call-form-country-drop-block').on("click", function () {
 $(this).closest('.contacts-call-form-country-drop').find('.contacts-call-form-country-drop-block').removeClass('contacts-call-form-country-drop-block-active');
 $(this).addClass('contacts-call-form-country-drop-block-active');
 $(this).closest('.contacts-call-form-country').find('span').html($(this).html());
 if ($(this).attr('id') == 'contRu') {
  $(this).closest('.contacts-call-form-phone').find('input').inputmask("(999) 999-99-99");
  $(this).closest('.contacts-call-form-phone').find('input').attr('placeholder', "(___) ___-__-__");
 }
 if ($(this).attr('id') == 'contKz') {
  $(this).closest('.contacts-call-form-phone').find('input').inputmask("(999) 999-99-99");
  $(this).closest('.contacts-call-form-phone').find('input').attr('placeholder', "(___) ___-__-__");
 }
 if ($(this).attr('id') == 'contBu') {
  $(this).closest('.contacts-call-form-phone').find('input').inputmask("(99) 999-99-99");
  $(this).closest('.contacts-call-form-phone').find('input').attr('placeholder', "(__) ___-__-__");
 }
});
$('.lend-quiz-slider').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: true,
 infinite: false,
 fade: true,
 prevArrow: ".lend-quiz-prev",
 nextArrow: ".lend-quiz-next"
});
$('.lend-quiz-photo').on('click', function (e) {
 e.preventDefault();
 $('.lend-quiz-slider').slick('slickGoTo', 5);
});
$('.lend-quiz-soc-block1').on('click', function () {
 $('.lend-quiz-vk1').show();
 $('.lend-quiz-vk2').hide();
});
$('.lend-quiz-soc-block2').on('click', function () {
 $('.lend-quiz-vk2').show();
 $('.lend-quiz-vk1').hide();
});
$('.lend-quiz-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
 if (currentSlide == 5) {
  $('.lend-quiz-btns, .lend-quiz-nav').hide();
 }
});
$('.lend-quiz-btn').on("click", function () {
 $('.lend-quiz-slider').slick("slickNext");
});
$('.lend-quiz-btn-o').on("click", function () {
 $('.lend-quiz-slider').slick("slickPrev");
});
$('.lend-quiz-select-title').on("click", function () {
 $(this).closest('.lend-quiz-select-wrap').toggleClass("lend-quiz-select-wrap-active");
});
$('.lend-quiz-select-cont-block').on("click", function () {
 $(this).closest('.lend-quiz-select-wrap').removeClass("lend-quiz-select-wrap-active");
 $(this).closest('.lend-quiz-select-wrap').find('.lend-quiz-select-title').html($(this).text());
});

$('.reviews-dispute-slider').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: true,
 fade: true,
 prevArrow: ".reviews-dispute-prev",
 nextArrow: ".reviews-dispute-next"
});
$('.contacts-create-slider').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: true,
 fade: true,
 slide: '.contacts-create-slide',
 prevArrow: ".contacts-create-slider-prev",
 nextArrow: ".contacts-create-slider-next"
});
$('.project-top-slider').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: true,
 fade: true,
 slide: '.project-top-slider-block',
 prevArrow: ".project-top-slider-prev",
 nextArrow: ".project-top-slider-next"
});
$('.home-when-slider').slick({
 slidesToShow: 4,
 slidesToScroll: 1,
 arrows: true,
 dots: true,
 prevArrow: ".home-when-prev",
 nextArrow: ".home-when-next",
 responsive: [{
  breakpoint: 992,
  settings: {
   slidesToShow: 3
  }
 },
 {
  breakpoint: 768,
  settings: {
   slidesToShow: 2
  }
 },
 {
  breakpoint: 576,
  settings: {
   slidesToShow: 1
  }
 }]
});
$('.pay-slider').slick({
 slidesToShow: 4,
 slidesToScroll: 1,
 arrows: true,
 dots: true,
 prevArrow: ".pay-prev",
 nextArrow: ".pay-next",
 responsive: [{
  breakpoint: 1200,
  settings: {
   slidesToShow: 3
  }
 },
 {
  breakpoint: 992,
  settings: {
   slidesToShow: 2
  }
 },
 {
  breakpoint: 576,
  settings: {
   slidesToShow: 1
  }
 }]
});
$('.about-team-slider').slick({
 slidesToShow: 4,
 slidesToScroll: 1,
 arrows: true,
 prevArrow: ".about-team-prev",
 nextArrow: ".about-team-next",
 responsive: [{
  breakpoint: 1200,
  settings: {
   slidesToShow: 3
  }
 },
 {
  breakpoint: 992,
  settings: {
   slidesToShow: 2
  }
 },
 {
  breakpoint: 576,
  settings: {
   slidesToShow: 1
  }
 }]
});
$('.about-docs-slider').slick({
 slidesToShow: 4,
 slidesToScroll: 1,
 arrows: true,
 dots: true,
 slide: '.about-docs-wrap',
 prevArrow: ".about-docs-prev",
 nextArrow: ".about-docs-next",
 responsive: [{
  breakpoint: 1200,
  settings: {
   slidesToShow: 3
  }
 },
 {
  breakpoint: 992,
  settings: {
   slidesToShow: 2
  }
 },
 {
  breakpoint: 576,
  settings: {
   slidesToShow: 1
  }
 }]
});
$('.order-slider').slick({
 slidesToShow: 3,
 slidesToScroll: 1,
 arrows: true,
 dots: true,
 prevArrow: ".order-prev",
 nextArrow: ".order-next",
 responsive: [{
  breakpoint: 992,
  settings: {
   slidesToShow: 2
  }
 },
 {
  breakpoint: 768,
  settings: {
   slidesToShow: 1
  }
 },
 {
  breakpoint: 576,
  settings: {
   slidesToShow: 1
  }
 }]
});
$('.del-slider').slick({
 slidesToShow: 4,
 slidesToScroll: 1,
 arrows: true,
 dots: true,
 prevArrow: ".del-top-prev",
 nextArrow: ".del-top-next",
 responsive: [{
  breakpoint: 1200,
  settings: {
   slidesToShow: 3
  }
 },
 {
  breakpoint: 992,
  settings: {
   slidesToShow: 2
  }
 },
 {
  breakpoint: 768,
  settings: {
   slidesToShow: 1
  }
 }]
});
$(".home-brand-block").on("click", function (e) {
 e.preventDefault();
 $(".home-brand-wrap2").hide();
 $(".home-brand-wrap3").show();
});
$(".home-brand-back").on("click", function (e) {
 e.preventDefault();
 $(".home-brand-wrap3").hide();
 $(".home-brand-wrap2").show();
});
$(".quest-top-block-title").on("click", function () {
 $(".quest-top-block-descr").not($(this).next(".quest-top-block-descr")).removeClass("quest-top-block-descr-active");
 $(".quest-top-block").not($(this).closest(".quest-top-block")).removeClass("quest-top-block-active");
 $(".quest-top-block-title").not($(this)).removeClass("quest-top-block-title-active");
 $(this).next(".quest-top-block-descr").toggleClass("quest-top-block-descr-active");
 $(this).toggleClass("quest-top-block-title-active");
 $(this).closest(".quest-top-block").toggleClass("quest-top-block-active");
});
(function ($) {
 $(function () {

  $('.contacts-tabs').on('click', '.contacts-tabs-block:not(.contacts-tabs-block-active)', function () {
   $(this)
    .addClass('contacts-tabs-block-active').siblings().removeClass('contacts-tabs-block-active')
    .closest('div.contacts-top-cont').find('div.contacts-main-block').removeClass('contacts-main-block-active').eq($(this).index()).addClass('contacts-main-block-active');
  });

 });
})(jQuery);
(function ($) {
 $(function () {

  $('.lend-reviews-tabs').on('click', '.lend-reviews-tabs-block:not(.lend-reviews-tabs-block-active)', function () {
   $(this)
    .addClass('lend-reviews-tabs-block-active').siblings().removeClass('lend-reviews-tabs-block-active')
    .closest('div.lend-reviews-wrap').find('div.lend-reviews-cont-block').removeClass('lend-reviews-cont-block-active').eq($(this).index()).addClass('lend-reviews-cont-block-active');
  });

 });
})(jQuery);
(function ($) {
 $(function () {

  $('.lend-period-time').on('click', '.lend-period-time-block:not(.lend-period-time-block-active)', function () {
   $(this)
    .addClass('lend-period-time-block-active').siblings().removeClass('lend-period-time-block-active')
    .closest('div.lend-period').find('div.lend-period-block').removeClass('lend-period-block-active').eq($(this).index()).addClass('lend-period-block-active');
  });

 });
})(jQuery);
(function ($) {
 $(function () {

  $('.about-info-tabs').on('click', '.about-info-tabs-block:not(.about-info-tabs-block-active)', function () {
   $(this)
    .addClass('about-info-tabs-block-active').siblings().removeClass('about-info-tabs-block-active')
    .closest('div.about-info-cont').find('div.about-info-main').removeClass('about-info-main-active').eq($(this).index()).addClass('about-info-main-active');
  });

 });
})(jQuery);
(function ($) {
 $(function () {

  $('.lend-period-pr-tabs').on('click', '.lend-period-pr-tabs-block:not(.lend-period-pr-tabs-block-active)', function () {
   $(this)
    .addClass('lend-period-pr-tabs-block-active').siblings().removeClass('lend-period-pr-tabs-block-active')
    .closest('div.lend-period').find('div.lend-period-pr-right-block').removeClass('lend-period-pr-right-block-active').eq($(this).index()).addClass('lend-period-pr-right-block-active');
  });

 });
})(jQuery);

$(".projects-filter-block-cont").niceScroll({
 cursorcolor: "#95E977"
});
$(".project-review-photo-cont").niceScroll({
 cursorcolor: "#95E977"
});
$(".project-top-info-wrap").niceScroll({
 cursorcolor: "#95E977"
});
$(".project-top-photos-block").niceScroll({
 cursorcolor: "#95E977"
});

$(".projects-filter-block-title").on("click", function () {
 $(this).next(".projects-filter-block-cont").toggleClass("projects-filter-block-cont-active");
 $(this).toggleClass("projects-filter-block-title-active");
 $(this).closest(".projects-filter-block").toggleClass("projects-filter-block-active");
 $(this).next(".projects-filter-block-cont").getNiceScroll().resize();
});
$().fancybox({
 selector: '.project-top-photos-block a'
});
ymaps.ready(function () {
 var myMap = new ymaps.Map('map', {
  center: [53.444140, 56.036490],
  zoom: 15
 }, {
  searchControlProvider: 'yandex#search'
 }),

  // Создаём макет содержимого.
  MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
   '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  ),

  myPlacemark = new ymaps.Placemark([53.440157, 56.044498], {
   hintContent: 'Наш офис'
  }, {
   // Опции.
   // Необходимо указать данный тип макета.
   iconLayout: 'default#image',
   // Своё изображение иконки метки.
   iconImageHref: 'img/map.png',
   // Размеры метки.
   iconImageSize: [114, 137],
   // Смещение левого верхнего угла иконки относительно
   // её "ножки" (точки привязки).
   iconImageOffset: [-57, -137]
  });


 myMap.geoObjects
  .add(myPlacemark);
});
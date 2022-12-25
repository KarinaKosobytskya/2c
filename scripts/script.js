$(document).ready(function () {
  $('.bxslider').bxSlider({
    pager: false,
  });
});
$(document).ready(function () {
  $('.accordion').accordion({
    defaultOpen: ''
  });
});

$(document).ready(function ($) {
  $('.primary-nav-trigger').on('click', function () {
    $('.menu-icon').toggleClass('is-Clicked');
    $('.primary-nav').toggleClass('is-visible');
    $('body').toggleClass('overflow-hidden');
  });
});
import * as $ from 'jquery';
import 'bootstrap';
import '@popperjs/core';
import 'slick-carousel';

window['jQuery'] = window['$'] = $;

$('.slider-wrapper').slick({
  dots: true,
  dotsClass: 'slick-custom-dots',
  mobileFirst: true,
  autoplaySpeed: 5000,
  speed: 2000,
  slidesToShow: 2,
  slidesToScroll: 2,
  autoplay: true,
  infinite: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
});

$('.menu-mobile-icon').on('click', (e) => {
  e.stopPropagation();
  $('.menu-mobile-wrapper').toggleClass('open');
});
$('.mask-layout').on('click', (e) => {
  e.stopPropagation();
  $('.menu-mobile-wrapper').removeClass('open');
});

$('.slider-for-detail').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slider-nav-detail',
});
$('.slider-nav-detail').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for-detail',
  arrows: false,
  dots: false,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
});

$('.slider-news').slick({
  dots: true,
  dotsClass: 'slick-custom-dots',
  mobileFirst: true,
  autoplaySpeed: 5000,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  infinite: true,
  arrows: false,
});

$('.slider-home').slick({
  dots: true,
  dotsClass: 'slick-custom-dots',
  mobileFirst: true,
  autoplaySpeed: 5000,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  infinite: true,
  arrows: false,
});

$('.show-pass-toggle').on('click', () => {
  const id = $(this).data('id');
  $(`.show-pass[data-id=${id}]`).attr('type', 'text');
});

$(window).on('load', () => {
  const heightMenuMega = $('#megamenu').height();
  $('.menu-mega__block').height(heightMenuMega - 20);
});

$(window).on('resize', () => {
  const heightMenuMega = $('#megamenu').height();
  $('.menu-mega__block').height(heightMenuMega - 20);
});

$('.menu-toggle').on('click', (e) => {
  e.stopPropagation();
  const { id } = e.target.dataset;
  $(`#menu-mobile-nav li[data-id=${id}]`).toggleClass('active');
  if ($(`#menu-mobile-nav li[data-id=${id}] .menu-toggle[data-id=${id}]`).hasClass('icon-up')) {
    $(`#menu-mobile-nav li[data-id=${id}] .menu-toggle[data-id=${id}]`).removeClass('icon-up');
    $(`#menu-mobile-nav li[data-id=${id}] .menu-toggle[data-id=${id}]`).addClass('icon-down');
  } else {
    $(`#menu-mobile-nav li[data-id=${id}] .menu-toggle[data-id=${id}]`).removeClass('icon-down');
    $(`#menu-mobile-nav li[data-id=${id}] .menu-toggle[data-id=${id}]`).addClass('icon-up');
  }

  $(`#menu-mobile-nav ul[data-id=${id}]`).toggleClass('display');
});

// eslint-disable-next-line no-undef
$(window).on('load', () => {
  $('#loginModal').modal('show');
});

// if (module.hot) {
//   module.hot.accept();
// }

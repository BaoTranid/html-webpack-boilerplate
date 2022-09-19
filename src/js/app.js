import $ from 'jquery';
import 'bootstrap';
import '@popperjs/core';
import 'slick-carousel';

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

// if (module.hot) {
//   module.hot.accept();
// }

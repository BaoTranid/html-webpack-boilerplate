import $ from 'jquery';
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

// if (module.hot) {
//   module.hot.accept();
// }

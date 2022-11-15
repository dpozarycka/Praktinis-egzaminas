const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  allowSlideNext: true,
  allowSlidePrev: true,
  speed: 1000,
  autoplay: {
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
      delay: 2000
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
      1000: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        allowSlideNext: false,
        allowSlidePrev: false,
        autoplay: false
      }
    }
});


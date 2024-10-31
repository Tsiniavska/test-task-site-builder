const initSwiper = () => {
  new Swiper('.swiper', {
    loop: true,
    slidesPerView: 2.5,
    centeredSlides: false,
    spaceBetween: 20,
    pagination: {
      clickable: true,
    },
    navigation: {
      nextEl: '.custom-swiper-button-next',
      prevEl: '.custom-swiper-button-prev',
    },
  });
};

export default initSwiper;

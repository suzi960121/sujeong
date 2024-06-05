/*
inspiration
https://dribbble.com/shots/4684682-Aquatic-Animals
*/
var bullet = ['공동인증서', '증명 발급 서비스', '전자계약 서비스'];
var swiper = new Swiper(".swiper", {
    loop: true, 
    spaceBetween: 1,
    slidesPerView: 2,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 3,
    //   slideShadows: true,

    },
    keyboard: {
      enabled: true
    },
    mousewheel: {
      thresholdDelta: 70
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
            renderBullet: function (index, className) {
            return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
          }
      },

    // breakpoints: {
    //   640: {
    //     slidesPerView: 2
    //   },
    //   768: {
    //     slidesPerView: 1
    //   },
    //   1024: {
    //     slidesPerView: 2
    //   },
    //   1920: {
    //     slidesPerView: 3
    //   }
    // }
  });
  
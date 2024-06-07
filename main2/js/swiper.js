

var bullet = ['01', '02', '03'];
const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".hero .swiper", {
      lazy: true,
      parallax: true,
      loop: true, 
      grabCursor: true,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false
      },
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          translate: ["-20%", 0, -1],
        },
        next: {
          translate: ["100%", 0, 0],
          // scale: ["150%"],
        },
      },
      pagination: {
        el: '.hero .swiper-pagination',
        clickable: true,
            renderBullet: function (index, className) {
            return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
          }
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });

    // $('.stop').on('click', function(){
    //   swiper.stop();
    //   return false;
    // });


var bullet = ['공동인증서', '증명 발급 서비스', '전자계약 서비스'];
var swiper = new Swiper(".normaldiv .swiper", {
    loop: true, 
    reverseDirection: true,
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
      slideShadows: true,

    },
    keyboard: {
      enabled: true
    },
    mousewheel: {
      thresholdDelta: 70
    },
    loop: true,
    pagination: {
      el: ".normaldiv .swiper-pagination",
      clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      pagination: {
        el: '.normaldiv .swiper-pagination',
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
  

  // document.querySelector('video').playbackRate = 0.2;





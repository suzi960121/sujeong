// Hero fade in
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('show');
      }, index * 300); // 500ms delay between each element
    });
  });


  // scroll fade
  document.addEventListener('DOMContentLoaded', () => {
    const options = {
      threshold: 0.3 // Trigger when 10% of the element is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, options);

    document.querySelectorAll('.scroll-fade-in').forEach(el => {
      observer.observe(el);
    });
  });

// smooth scroll
  // document.addEventListener('DOMContentLoaded', () => {
  //   const container = document.querySelector('[data-scroll-container]');
  //   let lastScrollY = window.scrollY;
  //   let currentScrollY = window.scrollY;
  //   let ticking = false;

  //   const updateScroll = () => {
  //     currentScrollY = window.scrollY;
  //     const deltaY = lastScrollY - currentScrollY;
  //     const translateY = Math.max(0, -currentScrollY);

  //     container.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${translateY}, 0, 1)`;
  //     container.style.opacity = 1;
  //     container.style.pointerEvents = 'all';

  //     lastScrollY = currentScrollY;
  //     ticking = false;
  //   };

  //   const requestTick = () => {
  //     if (!ticking) {
  //       requestAnimationFrame(updateScroll);
  //       ticking = true;
  //     }
  //   };

  //   window.addEventListener('scroll', requestTick);

  //   // 스크롤을 맨 위로 이동하는 기능
  //   document.getElementById('scrollToTop').addEventListener('click', (event) => {
  //     event.preventDefault();
  //     window.scrollTo({
  //       top: 0,
  //       behavior: 'smooth'
  //     });
  //   });
  // });
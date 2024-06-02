 //  스크롤을 맨 위로 이동하는 기능
 document.getElementById('scrollToTop').addEventListener('click', (event) => {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

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

  const tabs = document.querySelectorAll('.navtab');
  const contents = document.querySelectorAll('.content');
  const underline = document.querySelector('.underline');

  function updateUnderline() {
    const activeTab = document.querySelector('.navtab.active');
    underline.style.width = `${activeTab.offsetWidth}px`;
    underline.style.left = `${activeTab.offsetLeft}px`;
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const target = tab.getAttribute('data-target');
      contents.forEach(content => {
        if (content.id === target) {
          content.classList.add('active');
        } else {
          content.classList.remove('active');
        }
      });
      updateUnderline();
    });
  });

  window.addEventListener('resize', updateUnderline);
  updateUnderline();

 
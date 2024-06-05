gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");
let section60 = gsap.utils.toArray(".panel60");
let section40 = gsap.utils.toArray(".panel40");
let sections2 = gsap.utils.toArray(".panel2");


  let scrollTween = gsap.to(sections, {
    //    xPercent: (i) => -100 * i,
    xPercent: (i) => (i + 1) == sections.length ? -100 * (i - 1) : -100 * i,
    //    duration: (i) => 0.5 * i,
    duration: (i) => (i + 1) == sections.length ? 0.5 * (i - 1) : 0.5 * i,
    ease: "none", // <-- IMPORTANT!
    scrollTrigger: {
      start: "left 100px",
      trigger: ".container",
      pin: true,
      markers: true,
      scrub: 0.1,
      end: "+=3000 bottom"
    }
  });
  let scrollTween2 = gsap.to(sections2, {
    //    xPercent: (i) => -100 * i,
    xPercent: 0,
    xPercent: (i) => (i + 1) == sections2.length ? 100 * (i - 1) : 100 * i,
    //    duration: (i) => 0.5 * i,
    duration: (i) => (i + 1) == sections2.length ? 0.5 * (i - 1) : 0.5 * i,
    ease: "none", // <-- IMPORTANT!
    scrollTrigger: {
      trigger: ".container2",
      pin: true,
      markers: true,
      scrub: 0.1,
      end: "+=3000 bottom"
    }
  });


  // text reveal Animation
  const tl = gsap.timeline();

  tl.from(".line span", 1.8, {
    y: 156,
    ease: "power4.out",
    delay: 1,
    // skewY: 7,
    // skewX: 50,
    stagger: {
      amount: 0.3
    }
  });
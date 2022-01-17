const swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: true,
  },
  effect: "fade",
  speed: 1000,
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },
});

const swiper_sidebar = new Swiper(".sale-product-swiper", {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-120%", 0, -500],
    },
    next: {
      shadow: true,
      translate: ["120%", 0, -500],
    },
  },
  speed: 1000,
  grabCursor: true,
});

const swiper_arrivals = new Swiper(".arrivals", {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: true,
  },
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["-100%", 0, 0],
    },
  },
  speed: 1000,
  navigation: {
    nextEl: ".arrivals-next",
    prevEl: ".arrivals-prev",
  },
});

const swiper_comments = new Swiper(".comment-swiper", {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  speed: 1000,
});

const swiper_blogs = new Swiper(".blog-swiper", {
  spaceBetween: 30,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  grabCursor: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
  speed: 1000,
});

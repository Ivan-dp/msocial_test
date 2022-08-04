import Swiper, { Navigation, Pagination } from "swiper";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    // 320: {
    //   slidesPerView: 1,
    //   // spaceBetween: 20
    // },
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    640: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    // when window width is >= 640px
    960: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  spaceBetween: 10,
  modules: [Navigation, Pagination],

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

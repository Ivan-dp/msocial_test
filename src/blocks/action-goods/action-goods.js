import Swiper, { Navigation, Pagination } from "swiper"; // Импортирую swiper в js файл

// Подключаю стили swiper

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

// Инициализирую плагин swiper в блоке .swiper

const swiper = new Swiper(".swiper", {
  // Устанавливаю положение swiper

  direction: "horizontal",

  // Устанавливаю повторяющуюся промотку sliders

  loop: true,

  // Устанавливаю параметры для разных размеров экранов

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    960: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },

  // Устанавливаю расстояние между slides

  spaceBetween: 10,

  // Использую кнопки навигации и пагинацию

  modules: [Navigation, Pagination],
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

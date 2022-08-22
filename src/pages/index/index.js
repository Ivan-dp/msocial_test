// Подключаю основной файл стилей в файл js

import "./index.scss";

// Подключаю файл action-goods.js в котором подключен плагин swiper

import "../../blocks/action-goods/action-goods.js";

// Присваиваю переменным определённые DOM-элементы по селекторам

var menuButton = document.querySelector(".menu-button");
var menu = document.querySelector(".menu-drop");

// Устанавливаю слушатель события click, что бы при нажатии на клавишу menu-button появлялось выпадающее меню

menuButton.addEventListener("click", function () {
  menuButton.classList.toggle("menu-button-active");
  menu.classList.toggle("menu-drop-active");
});

// Устанавливаю слушатель события click, что бы при повторном нажатии на клавишу menu-button, выпадающее меню скрывалось

document.addEventListener("scroll", function () {
  menu.classList.remove("menu-drop-active");
});

// Присваиваю переменным определённые DOM-элементы по селекторам

var logInButton = document.querySelector(".log-in-btn");
var popup = document.querySelector(".popup");
var popupClose = document.querySelector(".popup__close");
var signInButton = document.querySelector(".sign-in-btn");

// Устанавливаю слушатель события click, что бы при нажатии на клавишу log-in-btn или sign-in-btn, появлялось модальное окно

logInButton.addEventListener("click", function () {
  logInButton.classList.toggle("log-in-btn-active");
  popup.classList.toggle("popup-active");
});

signInButton.addEventListener("click", function () {
  signInButton.classList.toggle("sign-in-btn-active");
  popup.classList.toggle("popup-active");
});

// Устанавливаю слушатель события click, что бы при повторном нажатии на клавишу log-in-btn или sign-in-btn, модальное окно скрывалось

popupClose.addEventListener("click", function () {
  popup.classList.remove("popup-active");
});

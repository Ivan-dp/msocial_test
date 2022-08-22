import "./index.scss";
import "../../blocks/action-goods/action-goods.js";

var menuButton = document.querySelector(".menu-button");
var menu = document.querySelector(".menu-drop");

menuButton.addEventListener("click", function () {
  menuButton.classList.toggle("menu-button-active");
  menu.classList.toggle("menu-drop-active");
});

document.addEventListener("scroll", function () {
  menu.classList.remove("menu-drop-active");
});

var logInButton = document.querySelector(".log-in-btn");
var popup = document.querySelector(".popup");
var popupClose = document.querySelector(".popup__close");

var signInButton = document.querySelector(".sign-in-btn");

logInButton.addEventListener("click", function () {
  logInButton.classList.toggle("log-in-btn-active");
  popup.classList.toggle("popup-active");
});

popupClose.addEventListener("click", function () {
  popup.classList.remove("popup-active");
});

signInButton.addEventListener("click", function () {
  signInButton.classList.toggle("sign-in-btn-active");
  popup.classList.toggle("popup-active");
});

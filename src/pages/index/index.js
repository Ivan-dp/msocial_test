import "./index.scss";
import "../../blocks/action-goods/action-goods.js";

console.log("It works!");

console.log(window);

var menuButton = document.querySelector(".menu-button");
var menu = document.querySelector(".menu-drop");

menuButton.addEventListener("click", function () {
  menuButton.classList.toggle("menu-button-active");
  menu.classList.toggle("menu-drop-active");
});

var logInButton = document.querySelector(".log-in-btn");
var logIn = document.querySelector(".popup-log-in");

var signInButton = document.querySelector(".sign-in-btn");
var signIn = document.querySelector(".popup-sign-in");

logInButton.addEventListener("click", function () {
  logInButton.classList.toggle("log-in-btn-active");
  logIn.classList.toggle("popup-log-in-active");
});

signInButton.addEventListener("click", function () {
  signInButton.classList.toggle("sign-in-btn-active");
  signIn.classList.toggle("popup-sign-in-active");
});

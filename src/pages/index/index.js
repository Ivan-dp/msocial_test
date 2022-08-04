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

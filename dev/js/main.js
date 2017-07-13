; "use strict"

window.onload = function () {

const nav = document.querySelector(".main-nav");
const toggle = nav.querySelector(".main-nav__toggle");

nav.classList.remove("main-nav--no-js");

toggle.addEventListener("click", function(e){
	nav.classList.toggle("main-nav--open");
	toggle.classList.toggle("main-nav__toggle--open")
});

};
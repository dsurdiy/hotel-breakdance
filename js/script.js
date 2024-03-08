"use strict"

window.addEventListener("scroll", pageScroll);
document.addEventListener("click", documentActions);

function pageScroll() {
   scrollY > 10
      ? document.querySelector(".header").classList.add("scroll")
      : document.querySelector(".header").classList.remove("scroll");
}

function documentActions(e) {
   const targetElement = e.target;

   if (targetElement.closest(".menu-icon")) {
      document.body.classList.toggle("menu-open");
   }

   if (targetElement.closest(".menu__link")) {
      if (document.body.classList.contains("menu-open")) {
         document.body.classList.remove("menu-open")
      }
   }
}
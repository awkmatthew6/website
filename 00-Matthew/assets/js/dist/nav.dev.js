"use strict";

//
//    Toggle Mobile Navigation
//
var navbarMenu = document.querySelector("#navigation #navbar-menu");
var hamburgerMenu = document.querySelector("#navigation .hamburger-menu");
hamburgerMenu.addEventListener('click', function () {
  var isNavOpen = navbarMenu.classList.contains("open");

  if (!isNavOpen) {
    hamburgerMenu.setAttribute("aria-expanded", true);
    hamburgerMenu.classList.add("clicked");
    navbarMenu.classList.add("open");
  } else {
    hamburgerMenu.setAttribute("aria-expanded", false);
    hamburgerMenu.classList.remove("clicked");
    navbarMenu.classList.remove("open");
  }
});
//# sourceMappingURL=nav.dev.js.map

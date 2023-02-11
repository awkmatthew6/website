"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
* Template Name: Gp - v4.9.1
* Template URL: https://bootstrapmade.com/gp-free-multipurpose-html-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function () {
  "use strict";
  /**
   * Easy selector helper function
   */

  var select = function select(el) {
    var all = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    el = el.trim();

    if (all) {
      return _toConsumableArray(document.querySelectorAll(el));
    } else {
      return document.querySelector(el);
    }
  };
  /**
   * Easy event listener function
   */


  var on = function on(type, el, listener) {
    var all = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var selectEl = select(el, all);

    if (selectEl) {
      if (all) {
        selectEl.forEach(function (e) {
          return e.addEventListener(type, listener);
        });
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };
  /**
   * Easy on scroll event listener 
   */


  var onscroll = function onscroll(el, listener) {
    el.addEventListener('scroll', listener);
  };
  /**
   * Navbar links active state on scroll
   */


  var navbarlinks = select('#navbar .scrollto', true);

  var navbarlinksActive = function navbarlinksActive() {
    var position = window.scrollY + 200;
    navbarlinks.forEach(function (navbarlink) {
      if (!navbarlink.hash) return;
      var section = select(navbarlink.hash);
      if (!section) return;

      if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    });
  };

  window.addEventListener('load', navbarlinksActive);
  onscroll(document, navbarlinksActive);
  /**
   * Scrolls to an element with header offset
   */

  var scrollto = function scrollto(el) {
    var header = select('#header');
    var offset = header.offsetHeight;
    var elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    });
  };
  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */


  var selectHeader = select('#header');

  if (selectHeader) {
    var headerScrolled = function headerScrolled() {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled');
      } else {
        selectHeader.classList.remove('header-scrolled');
      }
    };

    window.addEventListener('load', headerScrolled);
    onscroll(document, headerScrolled);
  }
  /**
   * Back to top button
   */


  var backtotop = select('.back-to-top');

  if (backtotop) {
    var toggleBacktotop = function toggleBacktotop() {
      if (window.scrollY > 100) {
        backtotop.classList.add('active');
      } else {
        backtotop.classList.remove('active');
      }
    };

    window.addEventListener('load', toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }
  /**
   * Mobile nav toggle
   */


  on('click', '.mobile-nav-toggle', function (e) {
    select('#navbar').classList.toggle('navbar-mobile');
    this.classList.toggle('bi-list');
    this.classList.toggle('bi-x');
  });
  /**
   * Mobile nav dropdowns activate
   */

  on('click', '.navbar .dropdown > a', function (e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault();
      this.nextElementSibling.classList.toggle('dropdown-active');
    }
  }, true);
  /**
   * Scrool with ofset on links with a class name .scrollto
   */

  on('click', '.scrollto', function (e) {
    if (select(this.hash)) {
      e.preventDefault();
      var navbar = select('#navbar');

      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile');
        var navbarToggle = select('.mobile-nav-toggle');
        navbarToggle.classList.toggle('bi-list');
        navbarToggle.classList.toggle('bi-x');
      }

      scrollto(this.hash);
    }
  }, true);
  /**
   * Scroll with ofset on page load with hash links in the url
   */

  window.addEventListener('load', function () {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });
  /**
   * Preloader
   */

  var preloader = select('#preloader');

  if (preloader) {
    window.addEventListener('load', function () {
      preloader.remove();
    });
  }
  /**
   * Clients Slider
   */


  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });
  /**
   * Porfolio isotope and filter
   */

  window.addEventListener('load', function () {
    var portfolioContainer = select('.portfolio-container');

    if (portfolioContainer) {
      var portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });
      var portfolioFilters = select('#portfolio-flters li', true);
      on('click', '#portfolio-flters li', function (e) {
        e.preventDefault();
        portfolioFilters.forEach(function (el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');
        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function () {
          AOS.refresh();
        });
      }, true);
    }
  });
  /**
   * Initiate portfolio lightbox 
   */

  var portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });
  /**
   * Portfolio details slider
   */

  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });
  /**
   * Testimonials slider
   */

  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });
  /**
   * Animation on scroll
   */

  window.addEventListener('load', function () {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });
  /**
   * Initiate Pure Counter 
   */

  new PureCounter();
})(); //
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
//# sourceMappingURL=main.dev.js.map

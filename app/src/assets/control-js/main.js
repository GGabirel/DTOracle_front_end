/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n* Template Name: Vesperr - v4.7.0\r\n* Template URL: https://bootstrapmade.com/vesperr-free-bootstrap-template/\r\n* Author: BootstrapMade.com\r\n* License: https://bootstrapmade.com/license/\r\n*/\r\n(function() {\r\n  \"use strict\";\r\n\r\n  /**\r\n   * Easy selector helper function\r\n   */\r\n  const select = (el, all = false) => {\r\n    el = el.trim()\r\n    if (all) {\r\n      return [...document.querySelectorAll(el)]\r\n    } else {\r\n      return document.querySelector(el)\r\n    }\r\n  }\r\n\r\n  /**\r\n   * Easy event listener function\r\n   */\r\n  const on = (type, el, listener, all = false) => {\r\n    let selectEl = select(el, all)\r\n    if (selectEl) {\r\n      if (all) {\r\n        selectEl.forEach(e => e.addEventListener(type, listener))\r\n      } else {\r\n        selectEl.addEventListener(type, listener)\r\n      }\r\n    }\r\n  }\r\n\r\n  /**\r\n   * Easy on scroll event listener \r\n   */\r\n  const onscroll = (el, listener) => {\r\n    el.addEventListener('scroll', listener)\r\n  }\r\n\r\n  /**\r\n   * Navbar links active state on scroll\r\n   */\r\n  let navbarlinks = select('#navbar .scrollto', true)\r\n  const navbarlinksActive = () => {\r\n    let position = window.scrollY + 200\r\n    navbarlinks.forEach(navbarlink => {\r\n      if (!navbarlink.hash) return\r\n      let section = select(navbarlink.hash)\r\n      if (!section) return\r\n      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {\r\n        navbarlink.classList.add('active')\r\n      } else {\r\n        navbarlink.classList.remove('active')\r\n      }\r\n    })\r\n  }\r\n  window.addEventListener('load', navbarlinksActive)\r\n  onscroll(document, navbarlinksActive)\r\n\r\n  /**\r\n   * Scrolls to an element with header offset\r\n   */\r\n  const scrollto = (el) => {\r\n    let header = select('#header')\r\n    let offset = header.offsetHeight\r\n\r\n    if (!header.classList.contains('header-scrolled')) {\r\n      offset -= 20\r\n    }\r\n\r\n    let elementPos = select(el).offsetTop\r\n    window.scrollTo({\r\n      top: elementPos - offset,\r\n      behavior: 'smooth'\r\n    })\r\n  }\r\n\r\n  /**\r\n   * Toggle .header-scrolled class to #header when page is scrolled\r\n   */\r\n  let selectHeader = select('#header')\r\n  if (selectHeader) {\r\n    const headerScrolled = () => {\r\n      if (window.scrollY > 100) {\r\n        selectHeader.classList.add('header-scrolled')\r\n      } else {\r\n        selectHeader.classList.remove('header-scrolled')\r\n      }\r\n    }\r\n    window.addEventListener('load', headerScrolled)\r\n    onscroll(document, headerScrolled)\r\n  }\r\n\r\n  /**\r\n   * Back to top button\r\n   */\r\n  let backtotop = select('.back-to-top')\r\n  if (backtotop) {\r\n    const toggleBacktotop = () => {\r\n      if (window.scrollY > 100) {\r\n        backtotop.classList.add('active')\r\n      } else {\r\n        backtotop.classList.remove('active')\r\n      }\r\n    }\r\n    window.addEventListener('load', toggleBacktotop)\r\n    onscroll(document, toggleBacktotop)\r\n  }\r\n\r\n  /**\r\n   * Mobile nav toggle\r\n   */\r\n  on('click', '.mobile-nav-toggle', function(e) {\r\n    select('#navbar').classList.toggle('navbar-mobile')\r\n    this.classList.toggle('bi-list')\r\n    this.classList.toggle('bi-x')\r\n  })\r\n\r\n  /**\r\n   * Mobile nav dropdowns activate\r\n   */\r\n  on('click', '.navbar .dropdown > a', function(e) {\r\n    if (select('#navbar').classList.contains('navbar-mobile')) {\r\n      e.preventDefault()\r\n      this.nextElementSibling.classList.toggle('dropdown-active')\r\n    }\r\n  }, true)\r\n\r\n  /**\r\n   * Scrool with ofset on links with a class name .scrollto\r\n   */\r\n  on('click', '.scrollto', function(e) {\r\n    if (select(this.hash)) {\r\n      e.preventDefault()\r\n\r\n      let navbar = select('#navbar')\r\n      if (navbar.classList.contains('navbar-mobile')) {\r\n        navbar.classList.remove('navbar-mobile')\r\n        let navbarToggle = select('.mobile-nav-toggle')\r\n        navbarToggle.classList.toggle('bi-list')\r\n        navbarToggle.classList.toggle('bi-x')\r\n      }\r\n      scrollto(this.hash)\r\n    }\r\n  }, true)\r\n\r\n  /**\r\n   * Scroll with ofset on page load with hash links in the url\r\n   */\r\n  window.addEventListener('load', () => {\r\n    if (window.location.hash) {\r\n      if (select(window.location.hash)) {\r\n        scrollto(window.location.hash)\r\n      }\r\n    }\r\n  });\r\n\r\n  /**\r\n   * Testimonials slider\r\n   */\r\n  new Swiper('.testimonials-slider', {\r\n    speed: 600,\r\n    loop: true,\r\n    autoplay: {\r\n      delay: 5000,\r\n      disableOnInteraction: false\r\n    },\r\n    slidesPerView: 'auto',\r\n    pagination: {\r\n      el: '.swiper-pagination',\r\n      type: 'bullets',\r\n      clickable: true\r\n    },\r\n    breakpoints: {\r\n      320: {\r\n        slidesPerView: 1,\r\n        spaceBetween: 20\r\n      },\r\n\r\n      1200: {\r\n        slidesPerView: 2,\r\n        spaceBetween: 20\r\n      }\r\n    }\r\n  });\r\n\r\n  /**\r\n   * Porfolio isotope and filter\r\n   */\r\n  \r\n  window.addEventListener('load', () => {\r\n    let portfolioContainer = select('.portfolio-container');\r\n    if (portfolioContainer) {\r\n      let portfolioIsotope = new Isotope(portfolioContainer, {\r\n        itemSelector: '.portfolio-item',\r\n        layoutMode: 'fitRows'\r\n      });\r\n\r\n      let portfolioFilters = select('#portfolio-flters li', true);\r\n\r\n      on('click', '#portfolio-flters li', function(e) {\r\n        e.preventDefault();\r\n        portfolioFilters.forEach(function(el) {\r\n          el.classList.remove('filter-active');\r\n        });\r\n        \r\n        this.classList.add('filter-active');\r\n\r\n        portfolioIsotope.arrange({\r\n          filter: this.getAttribute('data-filter')\r\n        });\r\n        portfolioIsotope.on('arrangeComplete', function() {\r\n          AOS.refresh()\r\n        });\r\n      }, true);\r\n    }\r\n\r\n  });\r\n\r\n  /* 用户中心的接包者信息选择播放 */\r\n  window.addEventListener('load', () => {\r\n    let portfolioContainer = select('.portfolio-accepted-container');\r\n    if (portfolioContainer) {\r\n      let portfolioIsotope = new Isotope(portfolioContainer, {\r\n        itemSelector: '.portfolio-accepted-item',\r\n        layoutMode: 'fitRows'\r\n      });\r\n      \r\n      let portfolioFilters = select('#portfolio-accepted-filters li', true);\r\n\r\n      on('click', '#portfolio-accepted-filters li', function(e) {\r\n        e.preventDefault();\r\n        portfolioFilters.forEach(function(el) {\r\n          el.classList.remove('filter-accepted-all');\r\n        });\r\n        this.classList.add('filter-accepted-all');\r\n\r\n        portfolioIsotope.arrange({\r\n          filter: this.getAttribute('data-filter')\r\n        });\r\n        portfolioIsotope.on('arrangeComplete', function() {\r\n          AOS.refresh()\r\n        });\r\n      }, true);\r\n    }\r\n\r\n  });\r\n\r\n  /* 用户中心的发包者信息选择播放 */\r\n  window.addEventListener('load', () => {\r\n    let portfolioContainer = select('.portfolio-released-container');\r\n    if (portfolioContainer) {\r\n      let portfolioIsotope = new Isotope(portfolioContainer, {\r\n        itemSelector: '.portfolio-released-item',\r\n        layoutMode: 'fitRows'\r\n      });\r\n      \r\n      let portfolioFilters = select('#portfolio-released-filters li', true);\r\n\r\n      on('click', '#portfolio-released-filters li', function(e) {\r\n        e.preventDefault();\r\n        portfolioFilters.forEach(function(el) {\r\n          el.classList.remove('filter-released-all');\r\n        });\r\n        this.classList.add('filter-released-all');\r\n\r\n        portfolioIsotope.arrange({\r\n          filter: this.getAttribute('data-filter')\r\n        });\r\n        portfolioIsotope.on('arrangeComplete', function() {\r\n          AOS.refresh()\r\n        });\r\n      }, true);\r\n    }\r\n\r\n  });\r\n\r\n  /**\r\n   * Initiate portfolio lightbox \r\n   */\r\n  const portfolioLightbox = GLightbox({\r\n    selector: '.portfolio-lightbox'\r\n  });\r\n\r\n  /**\r\n   * Portfolio details slider\r\n   */\r\n  new Swiper('.portfolio-details-slider', {\r\n    speed: 400,\r\n    loop: true,\r\n    autoplay: {\r\n      delay: 5000,\r\n      disableOnInteraction: false\r\n    },\r\n    pagination: {\r\n      el: '.swiper-pagination',\r\n      type: 'bullets',\r\n      clickable: true\r\n    }\r\n  });\r\n\r\n  /**\r\n   * Animation on scroll\r\n   */\r\n  window.addEventListener('load', () => {\r\n    AOS.init({\r\n      duration: 1000,\r\n      easing: 'ease-in-out',\r\n      once: true,\r\n      mirror: false\r\n    })\r\n  });\r\n\r\n})()\n\n//# sourceURL=webpack:///./src/assets/js/main.js?");

/***/ })

/******/ });
/**
 * Template Name: Vesperr
 * Template URL: https://bootstrapmade.com/vesperr-free-bootstrap-template/
 * Updated: Jun 14 2024 with Bootstrap v5.3.3
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

(function () {
  "use strict";

  // Utility function to select elements
  const select = (selector, all = false) =>
    all
      ? [...document.querySelectorAll(selector)]
      : document.querySelector(selector);

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = select("body");
    const selectHeader = select("#header");
    if (
      !selectHeader.classList.contains("scroll-up-sticky") &&
      !selectHeader.classList.contains("sticky-top") &&
      !selectHeader.classList.contains("fixed-top")
    ) {
      return;
    }
    window.scrollY > 100
      ? selectBody.classList.add("scrolled")
      : selectBody.classList.remove("scrolled");
  }

  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = select(".mobile-nav-toggle");
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener("click", () => {
      select("body").classList.toggle("mobile-nav-active");
      mobileNavToggleBtn.classList.toggle("bi-list");
      mobileNavToggleBtn.classList.toggle("bi-x");
    });
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  select("#navmenu a", true).forEach((navmenu) => {
    navmenu.addEventListener("click", () => {
      if (select(".mobile-nav-active")) {
        select("body").classList.remove("mobile-nav-active");
        mobileNavToggleBtn.classList.add("bi-list");
        mobileNavToggleBtn.classList.remove("bi-x");
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  select(".navmenu .toggle-dropdown", true).forEach((toggleDropdown) => {
    toggleDropdown.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle("active");
      this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = select("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  const scrollTop = select(".scroll-top");
  if (scrollTop) {
    function toggleScrollTop() {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    }

    scrollTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    window.addEventListener("load", toggleScrollTop);
    document.addEventListener("scroll", toggleScrollTop);
  }

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 600,
        easing: "ease-in-out",
        once: true,
        mirror: false,
      });
    }
  }
  window.addEventListener("load", aosInit);

  /**
   * Initiate glightbox
   */
  if (typeof GLightbox !== "undefined") {
    const glightbox = GLightbox({
      selector: ".glightbox",
    });
  }

  /**
   * Initiate Pure Counter
   */
  if (typeof PureCounter !== "undefined") {
    new PureCounter();
  }

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    if (typeof Swiper !== "undefined") {
      select(".init-swiper", true).forEach(function (swiperElement) {
        const config = JSON.parse(
          swiperElement.querySelector(".swiper-config").innerHTML.trim()
        );

        if (swiperElement.classList.contains("swiper-tab")) {
          initSwiperWithCustomPagination(swiperElement, config);
        } else {
          new Swiper(swiperElement, config);
        }
      });
    }
  }
  window.addEventListener("load", initSwiper);

  /**
   * Init isotope layout and filters
   */
  if (typeof Isotope !== "undefined" && typeof imagesLoaded !== "undefined") {
    select(".isotope-layout", true).forEach(function (isotopeItem) {
      const layout = isotopeItem.getAttribute("data-layout") ?? "masonry";
      const filter = isotopeItem.getAttribute("data-default-filter") ?? "*";
      const sort = isotopeItem.getAttribute("data-sort") ?? "original-order";

      imagesLoaded(
        isotopeItem.querySelector(".isotope-container"),
        function () {
          const initIsotope = new Isotope(
            isotopeItem.querySelector(".isotope-container"),
            {
              itemSelector: ".isotope-item",
              layoutMode: layout,
              filter: filter,
              sortBy: sort,
            }
          );

          isotopeItem
            .querySelectorAll(".isotope-filters li")
            .forEach(function (filters) {
              filters.addEventListener(
                "click",
                function () {
                  isotopeItem
                    .querySelector(".isotope-filters .filter-active")
                    .classList.remove("filter-active");
                  this.classList.add("filter-active");
                  initIsotope.arrange({
                    filter: this.getAttribute("data-filter"),
                  });
                  if (typeof aosInit === "function") {
                    aosInit();
                  }
                },
                false
              );
            });
        }
      );
    });
  }

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener("load", function () {
    if (window.location.hash) {
      const section = select(window.location.hash);
      if (section) {
        setTimeout(() => {
          const scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: "smooth",
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  function navmenuScrollspy() {
    select(".navmenu a", true).forEach((navmenulink) => {
      if (!navmenulink.hash) return;
      const section = select(navmenulink.hash);
      if (!section) return;
      const position = window.scrollY + 200;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        select(".navmenu a.active", true).forEach((link) =>
          link.classList.remove("active")
        );
        navmenulink.classList.add("active");
      } else {
        navmenulink.classList.remove("active");
      }
    });
  }
  window.addEventListener("load", navmenuScrollspy);
  document.addEventListener("scroll", navmenuScrollspy);
})();

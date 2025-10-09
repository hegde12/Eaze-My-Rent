'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * close navbar when click on any navbar link
 */

for (let i = 0; i < navbarLinks.length; i++) { navElemArr.push(navbarLinks[i]); }

/**
 * addd event on all elements for toggling navbar
 */

for (let i = 0; i < navElemArr.length; i++) {
  if (!navElemArr[i]) continue; // safety guard
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);

    // Accessibility attributes
    const isActive = navbar.classList.contains('active');
    if (navOpenBtn) navOpenBtn.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    navbar.setAttribute('aria-hidden', isActive ? 'false' : 'true');
  });
}

function plusSlides(n, sliderId) {
  const slider = document.getElementById(sliderId);
  const slides = slider.querySelectorAll('.slide');
  let current = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
  slides[current].classList.remove('active');
  let next = (current + n + slides.length) % slides.length;
  slides[next].classList.add('active');
}


/**
 * header active state
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 400 ? header.classList.add("active")
    : header.classList.remove("active");
}); 

/**
 * Toggle nearby locations list
 */
function toggleNearby(event) {
  event.preventDefault();
  const button = event.currentTarget;
  const targetId = button.getAttribute('aria-controls');
  const targetList = document.getElementById(targetId);
  const chevronIcon = button.querySelector('ion-icon[name*="chevron"]');
  
  if (!targetList) return;
  
  // Toggle visibility
  const isHidden = targetList.hasAttribute('hidden');
  
  if (isHidden) {
    targetList.removeAttribute('hidden');
    button.setAttribute('aria-expanded', 'true');
    if (chevronIcon) chevronIcon.setAttribute('name', 'chevron-up-outline');
  } else {
    targetList.setAttribute('hidden', '');
    button.setAttribute('aria-expanded', 'false');
    if (chevronIcon) chevronIcon.setAttribute('name', 'chevron-down-outline');
  }
}
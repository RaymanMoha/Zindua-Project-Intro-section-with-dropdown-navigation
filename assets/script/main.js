`use strict`;
const hamburgerBtn = document.querySelectorAll(`.js-btn`);
const mobileNavBar = document.querySelector(`.js-nav-container`);
const modalBg = document.querySelector(`.js-modal-bg`);

const linkDropdown = document.querySelectorAll(`.js-dropdown`);

// hamburger button function: display and close mobile navigation
hamburgerBtn.forEach((el) => {
  el.addEventListener(`click`, () => {
    mobileNavBar.classList.toggle(`open`);
    modalBg.classList.toggle(`open`);
    document.querySelector(`body`).classList.toggle(`disable-scroll`);
  });
});

// mobile navigation dropdown
linkDropdown.forEach((el) => {
  el.addEventListener(`click`, () => {
    event.preventDefault();
    el.nextElementSibling.classList.toggle(`display-links`);

    if (el.nextElementSibling.classList.contains(`display-links`)) {
      el.classList.add(`hide-links-arrow`);
    } else {
      el.classList.remove(`hide-links-arrow`);
    }
  });
});

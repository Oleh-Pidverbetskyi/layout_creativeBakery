'use strict';

const menu = document.querySelector('.btn, btn__off');
const mobileNavigation = document.querySelector('.nav');
const main = document.querySelector('.main');
const checkbox = document.querySelector('.toggle--checkbox');

menu.addEventListener('click', () => {
  mobileNavigation.classList.toggle('nav--active');
});

main.addEventListener('click', () => {
  if (mobileNavigation.classList.contains('nav--active')) {
    mobileNavigation.classList.toggle('nav--active');
    checkbox.checked = false;
  }
});

const links = document.querySelectorAll('.nav__link');

links.forEach((item) =>
  item.addEventListener('click', () => {
    if (mobileNavigation.classList.contains('nav--active')) {
      mobileNavigation.classList.toggle('nav--active');
      checkbox.checked = false;
    }
  })
);

const form = document.querySelector('.feedback__form');
const inputs = document.querySelectorAll('.feedback__form-input');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  inputs.forEach((input) => {
    input.value = '';
  });
});

const formShops = document.querySelector('.form');
const selects = document.querySelectorAll('.form__city');

formShops.addEventListener('submit', (event) => {
  event.preventDefault();

  selects.forEach((input) => {
    input.value = '';
  });
});

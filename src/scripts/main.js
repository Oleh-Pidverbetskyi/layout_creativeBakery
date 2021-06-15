'use strict';

const menu = document.querySelector('.btn');
const mobileNavigation = document.querySelector('.nav');

menu.addEventListener('click', (event) => {
  mobileNavigation.classList.toggle('nav--active');
  event.stopImmediatePropagation();
});

const form = document.querySelector('.feedback__form');
const inputs = document.querySelectorAll('.feedback__form-input');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  inputs.forEach((input) => {
    input.value = '';
  });
});

const formShops = document.querySelector('.form');
const selects = document.querySelectorAll('.form__city');

formShops.addEventListener('submit', (e) => {
  e.preventDefault();

  selects.forEach((input) => {
    input.value = '';
  });
});

'use strict';

let btnCatalog = document.querySelector('.navigation__link--plus');
let navCatalog = document.querySelector('.navigation__wrap-catalog');

btnCatalog.addEventListener('click', function() {
  navCatalog.classList.toggle('js-visible');
  this.classList.toggle('navigation__link--plus-js');
});

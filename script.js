'use strict';

let btnCatalog = document.querySelector('.navigation__link--js');
let navCatalog = document.querySelector('.navigation__list-catalog');

btnCatalog.addEventListener('click', function() {
  navCatalog.classList.toggle('js-visible');
});

var humburger = document.querySelector('.burger__menu');
var close = document.querySelector('.header__close');
var header = document.querySelector('.header');
var handrer = function(e) {
  header.classList.toggle('header_fullcreen');
};


humburger.addEventListener('click', handrer);

close.addEventListener('click', handrer);
var humburger = document.querySelector('.burger__menu');
var close = document.querySelector('.header__close');
var header = document.querySelector('.header');
var handrer = function(e) {
  header.classList.toggle('header_fullcreen');
};


humburger.addEventListener('click', handrer);

close.addEventListener('click', handrer);


// var humburger = document.querySelector('.burger__menu')
// var close = document.querySelector('.header__close');

// humburger.addEventListener('click', function(e){
//   var header = document.querySelector('.header');
//   header.classList.add('header_fullcreen');
// });
// close.addEventListener('click', function(e){
//   var header = document.querySelector('.header');
//   header.classList.remove('header_fullcreen');
// });
var composition = document.querySelector('.composition');
var close = document.querySelector('.composition__close');
close.addEventListener('click', function(e){
 composition.style.display="none";
 

});

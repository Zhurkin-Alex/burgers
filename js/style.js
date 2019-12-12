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


// Крестик для слайдера
// var composition = document.querySelector('.composition');
// var close = document.querySelector('.composition__close');
// close.addEventListener('click', function(e){
//  composition.style.display="none";
 // });

 function Slider (selector) {
   var slider = document.querySelector(selector);
   var list = slider.querySelector('ul');
   var countslides = list.children.length;
   var activeSlide = 0;
   
   slider.addEventListener('click', function(e){
    var target = e.target.closest('.scroll-btn');
    console.log(target)

    if (target.classlist.contains('scroll-btn') ){
     console.log(target)
    }
   })
 }
 var slider1 = new Slider('#slider1');
console.log(slider1);
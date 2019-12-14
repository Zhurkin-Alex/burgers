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

 function Slider (selector, settings) {
   var slider = document.querySelector(selector);
   var list = slider.querySelector('ul');
   var countslides = list.children.length;
   var activeSlide = 0;
   
   list.style.transition = `${settings.duration || .5}s ${settings.animate || 'ease-in'}`;


   slider.addEventListener('click', (e) =>{
    var target = e.target.closest('.scroll-btn');
    

    if (target && target.classList.contains('scroll-btn') ){
      e.preventDefault();
      var vector = target.dataset.vector;
     
      this[vector]();
    }
   });

   this.previous = function(){
     if (activeSlide > 0) {
      activeSlide--;
     }else if (settings.loop){
      activeSlide = countslides;
    }
    
    translateX();
  }
  
  this.next = function () {
    if (activeSlide<countslides -1){
      activeSlide++;
    } else if (settings.loop){
      activeSlide = 0;
    }
    
    translateX();
  }

 function translateX(){
    list.style.transform = `translate(${-(activeSlide * 100)}%)`;
  }
 }

 var slider1 = new Slider('#slider1', {
   loop: true,
   animate: 'cubic-bezier(0,.06,.99,.38)',
   duration: .4
 });

//   setInterval(function(){
//    slider1.next();
//  },5000);
// console.log(slider1);

window.addEventListener('keydown', (e)=> {
if ( e.keyCode === 39){
  slider1.next();
}
if ( e.keyCode === 37){
  slider1.previous();
}
})




function Accordion (selector) {
var acco = document.querySelector(selector);
var items = acco.children;
acco.addEventListener('click', function (e){
  var target = e.target.closest('.menu__trigger');

  if(target) {
   e.preventDefault();

   if (target.parentNode.classList.contains('active')){
    return target.parentNode.classList.remove('active');
   }
  
   for (let index = 0; index < items.length; index++)     {
     const element = items[index];

     element.classList.remove('active');

     target.parentNode.classList.add('active');
   }
  }
})
}
var aco = new Accordion ('#acco');
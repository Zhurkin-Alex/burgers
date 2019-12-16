
// ------Главный экран открытие меню--------
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



  // --------Слайдер - бургеры-----------
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
      activeSlide = countslides -1;
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



// ------меню, вертикальный слайдер, открытие и закрытие---------
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


// ----------------форма отправки-------------

const myForm = document.querySelector('#myForm');
const sendButton = document.querySelector('#sendButton')

sendButton.addEventListener('click', function(event){
  event.preventDefault();

  // if (validateForm(myForm)) {
  //   const data = {
  //     name: myForm.elements.name.value,
  //     phone: myForm.elements.phone.value,
  //     comment: myForm.elements.comment.value

  //   };
  
  const formData = new FormData();
  formData.append('name',  myForm.elements.name.value);
  formData.append('phone',  myForm.elements.phone.value);
  formData.append('comment',  myForm.elements.comment.value);
  formData.append('to',  'niherane-neponytno@mail.com');
  
  
  if (validateForm(myForm)) {
    // const xhr = new XMLHttpRequest();
    // xhr.responseType = 'json';
    // xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
    // // xhr.send(JSON.stringify(data));
    // xhr.send(formData);
    // xhr.addEventListener('load', () =>{
     
    // });
    const xhr = new XMLHttpRequest();
    xhr.open('POST','https://webdev-api.loftschool.com/sendmail');
    xhr.send(formData);
   
  }
});

 function validateForm(form) {
 let valid = true;

 if(!validateField(form.elements.name)){
   valid = false;
 }
 if(!validateField(form.elements.phone)){
   valid = false;
 }
 if(!validateField(form.elements.comment)){
   valid = false;
 }

 return valid;
 }


 function validateField(field) {
  field.nextElementSibling.textContent = field.validationMessage;
  return field.checkValidity();
 }




//  ---------------оверлей------------------
// var revievs__btn = document.querySelector('.revievs__btn');
// var close = document.querySelector('.overlay__close');
// var header = document.querySelector('.revievs__hover');
// var handrer = function(e) {
//   header.classList.toggle('header_fullcreen');
// };


// revievs__btn.addEventListener('click', handrer);

// close.addEventListener('click', handrer);


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





//  ----------горизонтальный аккардион team ---------
function Accordion (selector) {
  var acco = document.querySelector(selector);
  var items = acco.children;
  acco.addEventListener('click', function (e){
    var target = e.target.closest('.accordeon__title');
  
    if(target) {
     
  
     if (target.parentNode.classList.contains('accordeon__item-active')){
      return target.parentNode.classList.remove('accordeon__item-active');
     }
    
     for (let index = 0; index < items.length; index++)     {
       const element = items[index];
  
       element.classList.remove('accordeon__item-active');
  
       target.parentNode.classList.add('accordeon__item-active');
     }
    }
  })
  }
  var aco = new Accordion ('#acco-team');
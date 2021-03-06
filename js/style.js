
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
    xhr.responseType = 'json';
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



//  ------номер телефона------------
var selector = document.getElementById("mask");

var im = new Inputmask("+7(999)-9-999-999");
im.mask(selector);



//  ---------------оверлей revievs------------------

// const openButton = document.querySelector("#openOverlay");
// const overlayElement = document.querySelector(".revievs__overlay");

// openButton.addEventListener("click", function() {
//   overlayElement.style.display = "flex";
// });

// const closeElement = overlayElement.querySelector(".revievs__close");
// closeElement.addEventListener("click", function(e) {
//   e.preventDefault();
//   overlayElement.style.display = "none";
// });

// overlayElement.addEventListener("click", function(e) {
//   if (e.target === overlayElement) {
//     closeElement.click();
//   }
// });


// -------popap-------
function commentsPopup () {
  const openPopup = document.querySelectorAll('.js-feedback-modal');
  const popup = document.querySelector('.overlay');
  const closePopup = popup.querySelector('.js-close');
  const popupTitle = popup.querySelector('.overlay__title');
  const popupText = popup.querySelector('.overlay__text');
  

  for (let i=0; i < openPopup.length; i++) {
    openPopup[i].addEventListener('click', function() {
      
        popup.style.display = 'inline-block';
        let thisParent = this.parentNode;
        let name = thisParent.querySelector('.revievs__name').innerText;
        let content = thisParent.querySelector('.revievs__text p').innerText;
        
        popupTitle.innerText = name;
        popupText.innerText = content;
    })
    
}
closePopup.addEventListener('click', function(e) {
    
  event.preventDefault();
  popup.style.display = 'none';
})
popup.addEventListener('click', function(e) {
if(e.target.classList.contains('popup')) {
    closePopup.click();
}
})
}
commentsPopup();

// ------меню, вертикальный слайдер, открытие и закрытие---------
function Accordion (selector) {
  var acco = document.querySelector(selector);
  var items = acco.children;
  acco.addEventListener('click', function (e){
    var target = e.target.closest('.trigger');
  
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
//  ----------горизонтальный аккардион team ---------
 var acoteam = new Accordion ('#acco-team');








 //  -------карта-------



var marks=[
  [59.95392884288849, 30.306516487550038],
  [59.94553565102462, 30.294020394385132],
  [59.93205652126081, 30.360318918179757],
  [59.944210874795665, 30.35880354786377],
  [59.936169580924854, 30.32199819798399]

]

ymaps.ready(init);
function init(){
// Создание карты.
var myMap = new ymaps.Map("map", {
  // Координаты центра карты.
  // Порядок по умолчанию: «широта, долгота».
  // Чтобы не определять координаты центра карты вручную,
  // воспользуйтесь инструментом Определение координат.
  center: [59.94435203, 30.32271703],
  // Уровень масштабирования. Допустимые значения:
  // от 0 (весь мир) до 19.
  zoom: 13,
  controls: []

});

var clusterer = new ymaps.Clusterer();
myMap.geoObjects.add(clusterer);

  //   myMap.events.add('click', function (e) {
  //     // Получение координат щелчка
  //     var coords = e.get('coords');
  //     console.log(coords)
  //     // alert(coords.join(', '));
  //     createPlacemark(coords)
  // });

  function createPlacemark(coords){
  var myPlacemark = new ymaps.Placemark(coords, {
    hintContent: 'Собственный значок метки',
    balloonContent: coords
}, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: 'img/icons/map-marker.svg',
    // Размеры метки.
    iconImageSize: [30, 42],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-5, -38]
});
  clusterer.add(myPlacemark);
  }

  marks.forEach(function(coords){
    createPlacemark(coords)
  })
}





// -----перелистывание страниц----

const sections = $(".section");
const display = $(".maincontent");
let inScroll = false;

const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();

const performTransition = sectionEq =>{
if (inScroll === false){
  inScroll = true;
  const position = sectionEq * -100;

  sections
  .eq(sectionEq)
  .addClass("active-sections")
  .siblings()
  .removeClass("active-sections");
  
    display.css({
      transform:`translateY(${position}%)`
    });

    setTimeout(() => {
    inScroll = false;
    
    $(".fixed-menu__item ")
    .eq(sectionEq)
    .addClass("active__fixed")
    .siblings()
    .removeClass("active__fixed");
    }, 1300);
}

};

const scrollToSection = direction => {
const activeSection = sections.filter('.active-sections');
const nextSection = activeSection.next();
const prevSection = activeSection.prev();
if (direction === "next" && nextSection.length ){
performTransition(nextSection.index());
}
if (direction === "prev" && prevSection.length ){
  performTransition(prevSection.index());
}

};



$(window).on("wheel", e =>{
const deltaY = e.originalEvent.deltaY;



if(deltaY >0) {
  scrollToSection("next");
}
if(deltaY <0) {
  scrollToSection("prev");
}

});

$(document).on("keydown", e =>{

const tagName= e.target.tagName.toLowerCase();
if(tagName !== "input" && tagName !== "textarea"){
  switch(e.keyCode){
    case 38:
      scrollToSection("prev");
      break;
      case 40:
        scrollToSection("next");
        break;
  
  }
}
});

$('[data-scroll-to]').on("click", e => {
  e.preventDefault();
  const $this = $(e.currentTarget);
  const target = $this.attr("data-scroll-to");
  
  performTransition (target);

});

if(isMobile){
  $("body").swipe({
    swipe: function(
      event, 
      direction, 
      distance, 
      duration, 
      fingerCount, 
      fingerData) 
      {
      const scrollDirections = direction === "up" ? "next" : "prev";  
    scrollToSection(scrollDirections);
    }
  });
  
};



// ------video------



// let player;
// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('yt-player', {
//     height: '360',
//     width: '640',
//     videoId: 'M7lc1UVf-VE',
//     events: {
//       // 'onReady': onPlayerReady,
//       // 'onStateChange': onPlayerStateChange
//     },
//     playerVars: {
//       controls: 0,
//       disablekb: 0,
//       showinfo: 0,
//       rel: 0,
//       autoplay: 0,
//       modestbranding: 0
//     }
//   });
// }
// $('.player__start').on("click", e => {
//   player.playVideo();
// })

let player;

const formatTime = timeSec => {
  const roundTime = Math.round(timeSec);

  const minutes = Math.floor(roundTime / 60);
  const seconds = roundTime - minutes * 60;

  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${minutes}:${formattedSeconds}`;
};

const onPlayerReady = () => {
  let interval;
  let durationSec = player.getDuration();

  $(".player__duration-estimate").text(formatTime(durationSec));

  if (typeof interval !== "undefined") {
    clearInterval(interval);
  }

  interval = setInterval(() => {
    const completedSec = player.getCurrentTime();
    const completedPercent = (completedSec / durationSec) * 100;

    $(".player__playback-button").css({
      left: `${completedPercent}%`
    });

    $(".player__duration-completed").text(formatTime(completedSec));
  }, 1000);
};

const eventsInit = () => {
  $(".player__start").on("click", e => {
    e.preventDefault();
    const btn = $(e.currentTarget);

    if (btn.hasClass("paused")) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  });

  $(".player__playback").on("click", e => {
    const bar = $(e.currentTarget);
    const newButtonPosition = e.pageX - bar.offset().left;
    const buttonPosPercent = (newButtonPosition / bar.width()) * 100;
    const newPlayerTimeSec = (player.getDuration() / 100) * buttonPosPercent;

    $(".player__playback-button").css({
      left: `${buttonPosPercent}%`
    });

    player.seekTo(newPlayerTimeSec);
  });

  $(".player__splash").on("click", e => {
    player.playVideo();
  });
};

const onPlayerStateChange = event => {
  const playerButton = $(".player__start");
  /*
  -1 (воспроизведение видео не начато)
  0 (воспроизведение видео завершено)
  1 (воспроизведение)
  2 (пауза)
  3 (буферизация)
  5 (видео подают реплики).
   */
  switch (event.data) {
    case 1: 
      $('.player__wrapper').addClass('active-video');
      playerButton.addClass("paused");
      break;
    case 2: 
      playerButton.removeClass("paused");
      break;
  }
};

function onYouTubeIframeAPIReady() {
  player = new YT.Player("yt-player", {
    height: "405",
    width: "660",
    videoId: "zmg_jOwa9Fc",
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    },
    playerVars: {
      controls: 0,
      disablekb: 0,
      showinfo: 0,
      rel: 0,
      autoplay: 0,
      modestbranding: 0
    }
  });
}

eventsInit();
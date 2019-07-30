$('.ba-slider').slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: false,
            prevArrow: '.ba-slider-arrow__prev',
            nextArrow: '.ba-slider-arrow__next',
            autoplay: true,
            autoplaySpeed: 3000, 
});


var vm = new Vue({
  el: '#sliderV',
  data: {
    users: [
      { id: 0, 
        name:'Keliy Merkon', 
        position:'Disigner', 
        img:'imgs/people1.jpg', 
    social:{
        fb: 'https://www.facebook.com/',
        in: 'https://www.instagram.com/?hl=en'
      }},
      { id: 1,  
        name:'Ema Waston', 
        position:'HR', 
        img:'imgs/people2.jpg', 
        social:{
        fb: 'https://www.facebook.com/',
        in: 'https://www.instagram.com/?hl=en'
      }},
      { id: 2, 
        name:'Emelly Geem', 
        position:'QA',       
        img:'imgs/people3.jpg', 
        social:{
        fb: 'https://www.facebook.com/',
        in: 'https://www.instagram.com/?hl=en'
      }},
      { id: 3, 
        name:'Jack Vilson', 
        position:'Developer',       
        img:'imgs/people4.jpg', 
        social:{
        fb: 'https://www.facebook.com/',
        in: 'https://www.instagram.com/?hl=en'
      }},
      { id: 4, 
        name:'Jhon Show', 
        position:'SEO',       
        img:'imgs/people5.jpg', 
        social:{
        fb: 'https://www.facebook.com/',
        in: 'https://www.instagram.com/?hl=en'
      }},
      { id: 5, 
        name:'Mack Men', 
        position:'Back-End',       
        img:'imgs/people6.jpg', 
        social:{
        fb: 'https://www.facebook.com/',
        in: 'https://www.instagram.com/?hl=en'
      }},

    ]
  }
});

(function($){
 'use strict'
         $(function(){
        $('.ba-sliderV').slick({
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 3,
            arrows: true,
            fade: false,
            prevArrow: '.ba-slider-arrow__prev',
            nextArrow: '.ba-slider-arrow__next',
            // autoplay: true,
            // autoplaySpeed: 3000, 
        });
    });
}(jQuery));


;function initMap() {
    var uluru = {lat: 49.2347128, lng: 28.399594};
    var map = new google.maps.Map(document.getElementById('map'), 
    {
    zoom: 6,
    center: uluru,

  });


var marker = new google.maps.Marker({
  position: uluru,
  map: map
});


  }
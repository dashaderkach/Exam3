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
    social:[
        {sent:'https://www.linkedin.com/feed/', sentImg:'imgs/linkedin.svg'},
        {sent:'https://myaccount.google.com/', sentImg:'imgs/google-plus.svg'},
        {sent:'https://www.facebook.com/', sentImg:'imgs/facebook.svg'},
        {sent:'https://twitter.com/?lang=ru', sentImg:'imgs/twitter.svg'},
    ]},
      { id: 1,  
        name:'Ema Waston', 
        position:'HR', 
        img:'imgs/people2.jpg', 
      social:[
        {sent:'https://www.linkedin.com/feed/', sentImg:'imgs/linkedin.svg'},
        {sent:'https://myaccount.google.com/', sentImg:'imgs/google-plus.svg'},
        {sent:'https://www.facebook.com/', sentImg:'imgs/facebook.svg'},
        {sent:'https://twitter.com/?lang=ru', sentImg:'imgs/twitter.svg'},
    ]},
      { id: 2, 
        name:'Emelly Geem', 
        position:'QA',       
        img:'imgs/people3.jpg', 
        social:[
        {sent:'https://www.linkedin.com/feed/', sentImg:'imgs/linkedin.svg'},
        {sent:'https://myaccount.google.com/', sentImg:'imgs/google-plus.svg'},
        {sent:'https://www.facebook.com/', sentImg:'imgs/facebook.svg'},
        {sent:'https://twitter.com/?lang=ru', sentImg:'imgs/twitter.svg'},
    ]},
      { id: 3, 
        name:'Jack Vilson', 
        position:'Developer',       
        img:'imgs/people4.jpg', 
        social:[
        {sent:'https://www.linkedin.com/feed/', sentImg:'imgs/linkedin.svg'},
        {sent:'https://myaccount.google.com/', sentImg:'imgs/google-plus.svg'},
        {sent:'https://www.facebook.com/', sentImg:'imgs/facebook.svg'},
        {sent:'https://twitter.com/?lang=ru', sentImg:'imgs/twitter.svg'},
    ]},
      { id: 4, 
        name:'Jhon Show', 
        position:'SEO',       
        img:'imgs/people5.jpg', 
        social:[
        {sent:'https://www.linkedin.com/feed/', sentImg:'imgs/linkedin.svg'},
        {sent:'https://myaccount.google.com/', sentImg:'imgs/google-plus.svg'},
        {sent:'https://www.facebook.com/', sentImg:'imgs/facebook.svg'},
        {sent:'https://twitter.com/?lang=ru', sentImg:'imgs/twitter.svg'},
    ]},
      { id: 5, 
        name:'Mack Men', 
        position:'Back-End',       
        img:'imgs/people6.jpg', 
        social:[
        {sent:'https://www.linkedin.com/feed/', sentImg:'imgs/linkedin.svg'},
        {sent:'https://myaccount.google.com/', sentImg:'imgs/google-plus.svg'},
        {sent:'https://www.facebook.com/', sentImg:'imgs/facebook.svg'},
        {sent:'https://twitter.com/?lang=ru', sentImg:'imgs/twitter.svg'},
    ]},

]}

});

;(function($){
 'use strict'
         $(function(){
        $('.ba-sliderV').slick({
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            fade: false,
            prevArrow: '.ba-slider-arrow__prev',
            nextArrow: '.ba-slider-arrow__next',
            autoplay: true,
            autoplaySpeed: 3000, 
        });
    });
}(jQuery));


;function initMap() {
    var markerPoint = {lat: -7.9618361, lng: 112.6334224};
    var center = {lat: -7.9679666, lng: 112.6277044}
    var map = new google.maps.Map(document.getElementById('map'), 
    {
        zoom: 15,
        center: center,
        disableDefaultUI: true,
        styles: [
  {
    "stylers": [
      {
        "color": "#9d9ff0"
      },
      {
        "weight": 2.5
      }
    ]
  },
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative",
    "stylers": [
      {
        "weight": 1
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#c749ff"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#7775dc"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#fffb00"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "transit.station.bus",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#4b53f3"
      }
    ]
  },
  {
    "featureType": "transit.station.bus",
    "elementType": "labels.icon",
    "stylers": [
      {
        "color": "#4b53f3"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#9d9ff0"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]
    });


    var marker = new google.maps.Marker({
      position: markerPoint,
      map: map,
      title: 'Here you can find us',
      icon:'imgs/map2.svg',
    });

  };


$('.homeIconsMapBlock').click(function(){
      $('.homeIconsMapBlock-hide').toggle(1000);
   });

$('.phoneIconsMapBlock').click(function(){
      $('.phoneIconsMapBlock-hide').toggle(1000);
   });



$('#scroll').on("click", scrollToUp);
    
    function scrollToUp(ev) {

        var id = $(this).attr('href');
        id = '#' + id;
        var top;
        top = $("#Home").offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 3000);
    };


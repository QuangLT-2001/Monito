$('.seller__slider').slick({
     infinite: true,
     slidesToShow: 7,
     slidesToScroll: 3,
     responsive: [
          {
               breakpoint: 992,
               settings: {
                    slidesToShow: 4,
                    autoplay: true
               }
          }
     ]
});
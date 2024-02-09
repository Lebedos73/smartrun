$(document).ready(function () {
  $('.carousel__inner').slick({
    speed: 1000,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/left_solid.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/right_solid.png"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          arrows: false
        }
      }
    ]
  });
});
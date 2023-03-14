
$(function () {

  // onboarding welcomescreen slider
  var swiper = new Swiper(".onboarding__slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    speed: 500,
  });


  // screen tab
  $('.tab-btn').on('click', function () {
    var dataClass = $(this).attr('data-tab');
    $('.tab-screen').removeClass('active-tab').hide();
    $('.' + dataClass).addClass('active-tab').fadeIn();
    // return false;
  });


});
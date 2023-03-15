
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
  });

  // toggle-password
  $('.toggle-password').click(function () {
    if ($('.password').attr('type') == 'password') {
      $(this).parent('.inputfield').children('.password').attr('type', 'text');
      $(this).parent('.inputfield').removeClass('hidepass');
    } else {
      $(this).parent('.inputfield').children('.password').attr('type', 'password');
      $(this).parent('.inputfield').addClass('hidepass');
    }
  });


  // error button 
  
  $('.error-close').on('click', function () {
    $('#error-message').hide();
  });






});
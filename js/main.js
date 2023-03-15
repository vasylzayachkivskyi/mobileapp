
$(function () {

// resize height
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

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
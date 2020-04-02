
$(document).ready(function () {
  //burger-menu
  $(document).ready(function () {
    var menuButton = $('.menu__btn'),
        menu = $('.menu');
  
    menuButton.on('click', function () {
      menuButton.toggleClass('menu__btn--active');
      menu.toggleClass('menu--active');
    })

  }); 

  // up-arrow jquery
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

  $('.scrollup').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

  // youtube video
  var player;
  $('.play__img').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '100',
      width: '100%',
      videoId: 'vCd2kEA9Dv0',
      events: {
        'onReady': videoPlay
      }
    });
  })

  function videoPlay(event) {
    event.target.playVideo();
  };
  
  // swiper-slider
  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
     navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  })

  new WOW().init();

})
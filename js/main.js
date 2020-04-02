
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
  }
  

})
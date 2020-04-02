
var menuButton = document.querySelector('.menu__btn');
var menu = document.querySelector('.menu');
menuButton.addEventListener('click', function () {
  menuButton.classList.toggle('menu__btn--active');
  menu.classList.toggle('menu--active');  
})

$(document).ready(function () {
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
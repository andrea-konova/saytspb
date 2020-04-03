
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

  // modal windows
  var modal = $('.modal'),
    modalBtn = $('[data-toggle=modal]'),
    closeBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  var thanks = $('.thanks'),
  thanksClose = $('.thanks__close');

  thanksClose.on('click', function () {
    thanks.toggleClass('thanks--visible');
  });

  // form validation
  $.validator.methods.email = function (value, element) {
    return this.optional(element) || /.+@.+\..+/.test(value); 
  };
  // cost__form
  $('.cost__form').validate({
    errorElement: "em",
    errorClass: "invalid",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userEmail: {
        required: true,
        email: true
      },
      userSite: {
        required: true
      },
      userMessage: {
        required: true,
        minlength: 17
      },
       
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче 2 букв",
        maxlength: "Имя не длиннее 15 букв"
      },
      userEmail: {
        required: "Заполните поле",
        email: "Некорректный email"
      },
      userSite: {
        required: "Заполните поле",
      },
      userMessage: {
        required: "Заполните поле",
        minlength: "Cообщение слишком короткое"
      },
    },
    
    // отправка формы через ajax 
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "./send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          thanks.addClass('thanks--visible');
        },
        error: function (response) {
          console.error('Ошибка запроса ' + response);
        }
      });
    }
  });
  
  // questions__form
  $('.questions__form').validate({
    errorElement: "em",
    errorClass: "invalid",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userEmail: {
        required: true,
        email: true
      },
      userPhone: {
        required: true
      },
      userMessage: {
        required: true,
        minlength: 17
      },
       
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче 2 букв",
        maxlength: "Имя не длиннее 15 букв"
      },
      userEmail: {
        required: "Заполните поле",
        email: "Некорректный email"
      },
      userPhone: {
        required: "Заполните поле",
      },
      userMessage: {
        required: "Заполните поле",
        minlength: "сообщение слишком короткое"
      },
    },
    
    // отправка формы через ajax 
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "./send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          thanks.addClass('thanks--visible');
        },
        error: function (response) {
          console.error('Ошибка запроса ' + response);
        }
      });
    }
  });

  // mask for tel
  $('[type=tel]').mask('+7(000) 000-00-00', { placeholder: "+7 (___) ___-__-__" });

})
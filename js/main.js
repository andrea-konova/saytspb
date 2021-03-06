
$(document).ready(function () {
  //fixed-menu
  var $menu = $("#menu");
             
  $(window).scroll(function(){
      if ( $(this).scrollTop() > 100 && $menu.hasClass("default") ){
          $menu.fadeOut('fast',function(){
              $(this).removeClass("default")
                      .addClass("fixed")
                      .fadeIn('fast');
          });
      } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
          $menu.fadeOut('fast',function(){
              $(this).removeClass("fixed")
                      .addClass("default")
                      .fadeIn('fast');
          });
      }
  });

  //burger-menu
  var menuButton = $('.header__btn'),
      menu = $('.menu');

  menuButton.on('click', function () {
    menuButton.toggleClass('header__btn--active');
    menu.toggleClass('menu--active');
  })

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

  // anchor links
  jQuery(function ($) {
    $('a[href*="#"]').on('click.smoothscroll', function (e) {
      var hash = this.hash, _hash = hash.replace(/#/, ''), theHref = $(this).attr('href').replace(/#.*/, '');
      if (theHref && location.href.replace(/#.*/, '') != theHref) return;
      var $target = _hash === '' ? $('body') : $(hash + ', a[name="' + _hash + '"]').first();
      if (!$target.length) return;
      e.preventDefault();
      $('html, body').stop().animate({ scrollTop: $target.offset().top - 0 }, 500, 'swing', function () {
        window.location.hash = hash;
      });
    });
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

  // wow animate
  new WOW().init();

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
        required: true
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
        required: true,
        minlength: 17
      },
      userMessage: {
        required: true
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
        minlength: "Некорректный номер"
      },
      userMessage: {
        required: "Заполните поле",
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

  // modal__form
  $('.modal__form').validate({
    errorElement: "i",
    errorClass: "mistake",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
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
      userPhone: {
        required: "Заполните поле",
        minlength: "Некорректный номер"
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
          modal.removeClass('modal--visible');
          thanks.addClass('thanks--visible');
        },
        error: function (response) {
          console.error('Ошибка запроса ' + response);
        }
      });
    }
  });

  // mask for tel
  $('[type=tel]').mask('+7(000) 000-00-00', { placeholder: "+7 (999) 888-88-88" });

  $('[type=phone]').mask('+7(000) 000-00-00', { placeholder: "Ваш номер телефона" });
})
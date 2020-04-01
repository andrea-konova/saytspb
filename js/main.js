
var menuButton = document.querySelector('.menu__btn');
var menu = document.querySelector('.menu');
menuButton.addEventListener('click', function () {
  menuButton.classList.toggle('menu__btn--active');
  menu.classList.toggle('menu--active');  
})


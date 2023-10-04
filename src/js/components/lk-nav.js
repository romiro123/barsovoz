const navOpen = document.querySelector('.menu-nav__btn-open');
// const navClose = document.querySelector('.lk-nav__btn-close');
const nav = document.querySelector('.menu-nav');


document.addEventListener('click', function (event) {
  if (event.target.closest('.menu-nav__btn-open')) {
    nav.classList.add('menu-nav-open-js');
  }
  else {
    nav.classList.remove('menu-nav-open-js');
  }
})

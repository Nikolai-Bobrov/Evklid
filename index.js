
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  lazy: true,
// пагинация
  pagination: {
    el: '.swiper-pagination',
    clickable: true,

  },
  a11y: {
    paginationBulletMessage: 'Слайд {{index}}',
  },

// навигация
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'fade',

});

document.querySelectorAll('.card__button').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.card__button').forEach(function(btn){
      btn.classList.remove('card__button--active')});
    e.currentTarget.classList.add('card__button--active');

    document.querySelectorAll('.we-work__akardeon_step').forEach(function(tabsBtn){
      tabsBtn.classList.remove('we-work__akardeon_step--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('we-work__akardeon_step--active');
  });
});

new Accordion('.accordion-list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active'
});

let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__nav");
let menuLink = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',

  function() {

  burger.classList.toggle('burger--active');

  menu.classList.toggle('header__nav--active');

  document.body.classList.toggle('stop-scroll');
})

menuLink.forEach(function (el){
  el.addEventListener('click', function (){

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  })
})

let search = document.querySelector('.header__search-btn');
let modalSearch = document.querySelector('.modal__header__search');
let closeSearch = document.querySelector('.header__search-close-btn');

search.addEventListener('click', function (){
  search.classList.toggle('header__search-btn-noactive');
  modalSearch.classList.toggle('modal__header__search--active');
})
closeSearch.addEventListener('click', function (){
  search.classList.remove('header__search-btn-noactive');
  modalSearch.classList.remove('modal__header__search--active')
})

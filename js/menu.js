var mainNav = document.querySelector(".main-nav__items");
var mainNav_toggle__open = document.querySelector(".main-nav__toggle--open");
var mainNav_toggle__close = document.querySelector(".main-nav__toggle--close");
var overlay = document.querySelector(".overlay-transparent");


mainNav_toggle__open.addEventListener("click", function(event){
  event.preventDefault();
  mainNav.classList.add("element","element--shown");
  mainNav_toggle__open.classList.add("element","element--hidden");
  mainNav_toggle__close.classList.add("element","element--shown");
  overlay.classList.add("element","element--shown");
});

mainNav_toggle__close.addEventListener("click", function(event){
  event.preventDefault();
  mainNav.classList.remove("element","element--shown");
  mainNav_toggle__open.classList.remove("element","element--hidden");
  mainNav_toggle__close.classList.remove("element","element--shown");
  overlay.classList.remove("element","element--shown");
});

overlay.addEventListener("click", function(event){
  mainNav.classList.remove("element","element--shown");
  mainNav_toggle__open.classList.remove("element","element--hidden");
  mainNav_toggle__close.classList.remove("element","element--shown");
  overlay.classList.remove("element","element--shown");
})

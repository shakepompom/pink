var btnSubmit = document.querySelector(".modal-content__btn--submit");
var btnMistake = document.querySelector(".modal-content__btn--mistake");
var modalSubmit = document.querySelector(".modal-content__competition--submit");
var modalMistake = document.querySelector(".modal-content__competition--mistake");
var btnClose1 = document.querySelector(".btn--close-1");
var btnClose2 = document.querySelector(".btn--close-2");
// var overlay = document.querySelector(".overlay-transparent");

btnSubmit.addEventListener("click", function(event){
  event.preventDefault();
  modalSubmit.classList.add("element","element--shown");
});

btnClose1.addEventListener("click", function(event){
  event.preventDefault();
  modalSubmit.classList.remove("element","element--shown");
});

btnMistake.addEventListener("click", function(event){
  event.preventDefault();
  modalMistake.classList.add("element","element--shown");
});

btnClose2.addEventListener("click", function(event){
  event.preventDefault();
  modalMistake.classList.remove("element","element--shown");
});

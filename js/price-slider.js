var column = document.querySelectorAll(".price__tariff--column-2");
var pricePage1 = document.querySelector(".price-slider__bullet1");
var pricePage2 = document.querySelector(".price-slider__bullet2");
var pricePage3 = document.querySelector(".price-slider__bullet3");

pricePage1.addEventListener("click", function(event) {
  event.preventDefault();
  $(".price__tariff--column-2").css("margin-left", "0px");
  pricePage1.classList.add("price-slider__bullet--active");
  pricePage2.classList.remove("price-slider__bullet--active");
  pricePage3.classList.remove("price-slider__bullet--active");
});

pricePage2.addEventListener("click", function(event) {
  event.preventDefault();
  $(".price__tariff--column-2").css("margin-left", "-280px");
  pricePage2.classList.add("price-slider__bullet--active");
  pricePage1.classList.remove("price-slider__bullet--active");
  pricePage3.classList.remove("price-slider__bullet--active");
});

pricePage3.addEventListener("click", function(event) {
  event.preventDefault();
  $(".price__tariff--column-2").css("margin-left", "-560px");
  pricePage3.classList.add("price-slider__bullet--active");
  pricePage1.classList.remove("price-slider__bullet--active");
  pricePage2.classList.remove("price-slider__bullet--active");
});

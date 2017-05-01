// jcarousel.js

(function($) {
    $(function() {
        var jcarousel = $('.jcarousel');

        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth();

                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })
            .jcarousel({
                wrap: 'circular'
            });

        $('.jcarousel__control--prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel__control--next')
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel__pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('jcarousel__pagination--active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('jcarousel__pagination--active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });
    });
})(jQuery);

// map.js

ymaps.ready(init);
        var myMap,
            myPlacemark;

        function init(){
            myMap = new ymaps.Map("map", {
                center: [59.938631, 30.323055],
                zoom: 17,
                controls: []
            });

            myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {}, {
                iconLayout: "default#image",
                iconImageHref: "images/icon-map-marker.svg",
                iconImageSize: [36, 36],
                iconImageOffset: [-18, -18]
            });

            myMap.geoObjects.add(myPlacemark);
        }



// price-slider.js

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

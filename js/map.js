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

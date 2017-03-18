ymaps.ready(init);
        var myMap,
            myPlacemark;

        function init(){
            myMap = new ymaps.Map("map", {
                center: [59.938631, 30.323055],
                zoom: 17,
                controls: []
            });

            myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
                // hintContent: 'Москва!',
                // balloonContent: 'Столица России'
            });

            myMap.geoObjects.add(myPlacemark);
        }

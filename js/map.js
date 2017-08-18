ymaps.ready(init);

var myMap, place1, place2, place3, myAction;

function init(){     
    myMap = new ymaps.Map ("mymap", {
        center: [55.829876, 28.285694],
        zoom: 5,
        duration: 1
    });
    
    place1 = new ymaps.Placemark([54.829876, 38.285694], {  balloonContent: 'Московская область, Каширский район, п. Новоселки' });
    
    place2 = new ymaps.Placemark([59.883462, 30.266254],  { balloonContent: 'г. Санкт-Петербург, пр. Стачек, д. 48/2 ' });

    place3 = new ymaps.Placemark([54.881349, 38.067305], { balloonContent: 'Московская Область, Московская Область, г. Ступино, ул. Калинина 1А, деловой центр «Логос», оф. №309 ' });
    
    myMap.geoObjects.add(place1);
    myMap.geoObjects.add(place2);
    myMap.geoObjects.add(place3);
    
    myAction1 = new ymaps.map.action.Single({
          center: place1.geometry.getCoordinates(),
          zoom: 18,
          duration: 1000
          
    });
    
    myAction2 = new ymaps.map.action.Single({
          center: place2.geometry.getCoordinates(),
          zoom: 18,
          duration: 1000
    });

        myAction3 = new ymaps.map.action.Single({
          center: place3.geometry.getCoordinates(),
          zoom: 18,
          duration: 1000
    });

}

$("#link1").click(function(){
    myMap.action.execute(myAction1);
});
$("#link2").click(function(){
    myMap.action.execute(myAction2);
});

$("#link3").click(function(){
    myMap.action.execute(myAction3);
});



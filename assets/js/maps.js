function initMap() {
  var center = { lat: 57.074732, lng: -5.592170 };
  var locations = [
    ['Ladhar Bheinn<br>\
    Knoydart<br>\
   <a href="https://goo.gl/maps/L8ETMBt7cRA2">Get Directions</a>',  57.074732, -5.592170],
    ['Luinne Bheinn<br>\
    Knoydart<br>\
   <a href="https://goo.gl/maps/PY1abQhuW9C2">Get Directions</a>', 57.049542, -5.516111],
    ['Meall Buidhe<br>\
    146 South Lake Avenue #106, At Shoppers Lane, Pasadena, CA 91101<br>\
    <a href="https://goo.gl/maps/eUmyNuMyYNN2">Get Directions</a>', 57.032051, -5.545687],
    ['Sgùrr na Cìche<br>\
    Knoydart<br>\
    <a href="https://goo.gl/maps/Cp2TZoeGCXw">Get Directions</a>', 57.012912, -5.456042],
  ];
var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: center
  });
var infowindow =  new google.maps.InfoWindow({});
var marker, count;
for (count = 0; count < locations.length; count++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[count][1], locations[count][2]),
      map: map,
      title: locations[count][0]
    });
google.maps.event.addListener(marker, 'click', (function (marker, count) {
      return function () {
        infowindow.setContent(locations[count][0]);
        infowindow.open(map, marker);
      }
    })(marker, count));
  }
}




/*function initMap() {
        const ladharbheinn = { lat: 57.074732, lng: -5.592170 };
        const map = new google.maps.Map(document.getElementById('map'), {
          zoom: 11,
          center: ladharbheinn
        });

        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1>Ladhar Bheinn</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Ladhar Bheinn</b> is the highest ' +
            'sandstone rock formation in the southern part of the '+
            'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
            'south west of the nearest large town, Alice Springs; 450&#160;km '+
            '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
            'features of the Uluru - Kata Tjuta National Park. Uluru is '+
            'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
            'Aboriginal people of the area. It has many springs, waterholes, '+
            'rock caves and ancient paintings. Uluru is listed as a World '+
            'Heritage Site.</p>'+
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        var marker = new google.maps.Marker({
          position: ladharbheinn,
          map: map,
          title: 'Ladhar Bheinn'
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      }*/
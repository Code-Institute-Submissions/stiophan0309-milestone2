function initMap() {
    var ladharBheinn = { lat: 57.074732, lng: -5.592170 };
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: {
            lat: 57.056025,
            lng: -5.542526
        }
    });

    var contentString = '<div id="map">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
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

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 57.038273, lng: -5.685858 }, /* A Inverie Pier */
        { lat: 57.037474, lng: -5.682667 }, /* B The Old Forge */
        { lat: 57.103380, lng: -5.380410 }, /* C Kinlochhourn  */
        { lat: 56.970180, lng: -5.321517 }, /* D Strathan */
        { lat: 57.028766, lng: -5.661768 }, /* E Kilchoan Estate */
        { lat: 57.082106, lng: -5.767767 }, /* F Airor */
        { lat: 57.040644, lng: -5.697784 }, /* G Creag Eiridh */
        { lat: 57.037327, lng: -5.730222 }, /* H Glaschoille House */
        { lat: 57.031709, lng: -5.666478 }, /* I The Old Byre, Knoydart House */
        { lat: 57.032765, lng: -5.670364 }, /* J Knoydart Foundation Bunkhouse & Campsite */
        /* { lat: 57.074732, lng: -5.592170 }, /* Ladhar Bheinn */
        { lat: 57.049542, lng: -5.516111 }, /* Luinne Bheinn */
        { lat: 57.032051, lng: -5.545687 }, /* Meall Buidhe */
        { lat: 57.012912, lng: -5.456042 }  /* Sgùrr na Cìche */
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });

        var marker = new google.maps.Marker({
          position: ladharBheinn,
          map: map,
          title: 'Ladhar Bheinn'
        });

        marker.addListener('click', function() {
        infowindow.open(map, marker);
        });

    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}

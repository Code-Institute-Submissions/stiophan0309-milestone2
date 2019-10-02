function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: {
            lat: 57.056025,
            lng: -5.542526
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 57.040790, lng: -5.697839 }, /* The Old Forge */
        { lat: 57.038134, lng: -5.685941 }, /* Knoydart Pier */
        { lat: 57.074732, lng: -5.592170 },  /* Ladhar Bheinn */
        { lat: 57.012912, lng: -5.456042 }  /*Sgùrr na Cìche */
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    }); 

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}

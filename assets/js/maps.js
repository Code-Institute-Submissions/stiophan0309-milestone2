function initMap() {

        var styledMapType = new google.maps.StyledMapType(
            [{
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#ebe3cd"
                    }]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#523735"
                    }]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "color": "#f5f1e6"
                    }]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#c9b2a6"
                    }]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#dcd2be"
                    }]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#ae9e90"
                    }]
                },
                {
                    "featureType": "administrative.neighborhood",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "landscape.natural",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#dfd2ae"
                    }]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#dfd2ae"
                    }]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#93817c"
                    }]
                },
                {
                    "featureType": "poi.business",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#a5b076"
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#447530"
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#ff0000"
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#ff0000"
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#229516"
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#e9bc62"
                    }]
                },
                {
                    "featureType": "road.highway.controlled_access",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#e98d58"
                    }]
                },
                {
                    "featureType": "road.highway.controlled_access",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#db8555"
                    }]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#806b63"
                    }]
                },
                {
                    "featureType": "transit",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#dfd2ae"
                    }]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#8f7d77"
                    }]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "color": "#ebe3cd"
                    }]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#dfd2ae"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#2a93f0"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#92998d"
                    }]
                }
            ], { name: "Styled Map" });


        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 11,
            center: {
                lat: 57.056025,
                lng: -5.542526
            },
            mapTypeControlOptions: {
                mapTypeIds: ['satellite', 'styled_map']
            }
        });

        //Associate the styled map with the MapTypeId and set it to display.
        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');

        var locations = [
            ["Inverie", 57.038531, -5.684935],
            ["Kinlochhourn", 57.104270, -5.387123],
            ["Strathan", 56.969871, -5.326304],
            ["Kilchoan Estate", 57.028939, -5.661221],
            ["Camusblathan", 57.082002, -5.768341],
            ["Creag Eiridh", 57.040676, -5.702373],
            ["Glaschoille House", 57.037605, -5.730124],
            ["Lochside", 57.040524, -5.697796],
            ["Ladhar Bheinn", 57.056025, -5.542526],
            ["Luinne Bheinn", 57.049542, -5.516111],
            ["Meall Buidhe", 57.032051, -5.545687],
            ["Sgùrr na Cìche", 57.012912, -5.456042]
        ];

        var content = [
            ['Inverie', '<div class="content">' +
                "<h3>Inverie</h3>" +
                "<img src='https://upload.wikimedia.org/wikipedia/commons/0/04/Inverie_-_geograph.org.uk_-_920860.jpg'>" +
                "<p>Inverie (pop. 70), is the main village and settlement on the Knoydart peninsula, and due to it not being connected to the national road network it has a Guiness National Record for remoteness</p>" +
                "<p><a class='btn btn-sm' href='https://en.wikipedia.org/wiki/Inverie' target='_blank'><span class='sr-only'>Click Here</span>Click Here for more info</a></p>" +
                "</div>"
            ],
            ['Kinlochhourn', '<div class="content">' +
                "<h3>Kinloch Hourn</h3>" +
                "<img src='https://www.undiscoveredscotland.co.uk/knoydart/kinlochhourn/images/kinlochhourn-450.jpg'>" +
                "<p>Kinloch Hourn is reached by a single track road from the A87 near Invergarry and is one of the most popular places to access Knoydart</p>" +
                "<p><a class='btn btn-sm' href='https://www.walkhighlands.co.uk/Forum/viewtopic.php?f=9&t=24694' target='_blank'><span class='sr-only'>Click Here</span>Click Here for more info</a></p>" +
                "</div>"
            ],
            ['Strathan', '<div class="content">' +
                "<h3>Strathan (Loch Arkaig)</h3>" +
                "<img src='https://s0.geograph.org.uk/geophotos/03/57/05/3570579_97392282.jpg'>" +
                "<p>Strathan is a hamlet at the head of Loch Arkaig and is accessed via Spean Bridge on the A82.  This is usually the most common wakling route from the south and then via Glen Dessary to Sourlies at the head of Loch Nevis</p>" +
                "<p><a class='btn btn-sm' href='https://www.walkhighlands.co.uk/Forum/viewtopic.php?f=25&t=8154' target='_blank'><span class='sr-only'>Click Here</span>Click Here for more info</a></p>" +
                "</div>"
            ],
            ['Kilchoan Estate', '<div class="content">' +
                "<h3>Kilchoan Estate</h3>" +
                "<img src='https://static.wixstatic.com/media/03ba02_d3f0ff9563a1422ca6e8bdc6a0fb1f47.jpg/v1/fill/w_262,h_192,al_c,q_80,usm_0.66_1.00_0.01/03ba02_d3f0ff9563a1422ca6e8bdc6a0fb1f47.jpg'>" +
                "<p>Kilchoan Estate, located to the south east of Inverie offers 5 self catering properties and one bunkhouse including Tigh na Dobhran pictured above</p>" +
                "<p><a class='btn btn-sm' href='https://www.kilchoan-knoydart.com/accommodation' target='_blank'><span class='sr-only'>Click Here</span>Click Here for more info</a></p>" +
                "</div>"
            ],
            ['Camusblathan', '<div class="content">' +
                "<h3>Camusblathan</h3>" +
                "<img src='http://www.camusblathan.co.uk/____impro/1/onewebmedia/3295319d90-DSC_0011%20%281%29.jpg?etag=%2228037-599054ae%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=366,254&extract=30,0,304,254'>" +
                "<p>Camusblathan is a gorgeous cottage by the sea, with incredible views. It is located in Airor, on the western tip of Knoydart on the Sound of Sleat looking over to Skye</p>" +
                "<p><a class='btn btn-sm' href='http://www.camusblathan.co.uk' target='_blank'><span class='sr-only'>Click Here</span>Click Here for more info</a></p>" +
                "</div>"
            ],
            ['Creag Eiridh', '<div class="content">' +
                "<h3>Creag Eiridh</h3>" +
                "<img src='http://www.creageiridh.co.uk/wp-content/uploads/2016/03/TheHouse_008-300x300.jpg'>" +
                "<p>In a secluded rural holiday location charming Creag Eiridh is a recently refurbished and immaculately presented 4-bedroom luxury holiday house. It is situated in a breathtaking position on the northern shore of Loch Nevis in the Western Highlands of Scotland</p>" +
                "<p><a class='btn btn-sm' href='http://www.creageiridh.co.uk' target='_blank'><span class='sr-only'>Click Here</span>Click Here for more info</a></p>" +
                "</div>"
            ],
            ['Glaschoille House', '<div class="content">' +
                "<h3>Glaschoille House</h3>" +
                "<img src='https://bestscottishcottages.co.uk/?page_type=show_image&img=Glaschoille_Exterior3.jpg&q=65'>" +
                "<p>Glaschoille House as well as being a self-catering holiday home is also a wedding venue located 2 miles west of Inverie</p>" +
                "<p><a class='btn btn-sm' href='https://www.glaschoille.co.uk' target='_blank'><span class='sr-only'>Click Here</span>Click Here for more info</a></p>" +
                "</div>"
            ],
            ['Lochside', '<div class="content">' +
                "<h3>Lochside</h3>" +
                "<img src='https://i.pinimg.com/474x/f5/36/57/f53657b236a384c805076ebdc799cf39.jpg'>" +
                "<p>Lochside is a superb holiday cottage located in Inverie with amongst other things, a hot tub</p>" +
                "<p><a class='btn btn-sm' href='http://www.lochsideknoydart.co.uk' target='_blank'><span class='sr-only'>Click Here</span>Click Here for more info</a></p>" +
                "</div>"
            ],
            ['Ladhar Bheinn', '<div class="content">' +
                "<h3>Ladhar Bheinn</h3>" +
                "<img src='https://upload.wikimedia.org/wikipedia/commons/2/2e/Ladhar_Bheinn.jpg'>" +
                "<p>Ladhar Bheinn is the highest munro on the Knoydart peninsula and regarded by many as one of the finest mountains in Scotland.  It has dramatic ridges, huge crags and offers superb views</p>" +
                "<p><a class='btn btn-sm' href='https://www.walkhighlands.co.uk/munros/ladhar-bheinn' target='_blank'><span class='sr-only'>Click Here</span>Click Here for more info</a></p>" +
                "</div>"
            ],
            ['Luinne Bheinn', '<div class="content">' +
                "<h3>Luinne Bheinn</h3>" +
                "<img src='https://images.on-this.website/22407_13680161084ffb09045cf75.jpg'>" +
                "<p>Luinne Bheinn, often misprounced as 'Loony Bin' is a very rough and rocky mountain on the head of Knoydart, and is quite often climbed along with Meall Buidhe</p>" +
                "<p><a class='btn btn-sm' href='https://www.walkhighlands.co.uk/munros/luinne-bheinn' target='_blank'><span class='sr-only'>Click Here</span>Click Here for more info</a></p>" +
                "</div>"
            ],
            ['Meall Buidhe', '<div class="content">' +
                "<h3>Meall Buidhe</h3>" +
                "<img src='http://www.munromagic.com/MunroImages/CNV00028.jpg'>" +
                "<p>Meall Buidhe (lit. Yellow Knoll) is one of three munros on Knoydart and due to it's rocky slopes, requires considerable effort during ascent</p>" +
                "<p><a class='btn btn-sm' href='https://www.walkhighlands.co.uk/munros/meall-buidhe-knoydart' target='_blank'><span class='sr-only'>Click Here</span>Click Here for more info</a></p>" +
                "</div>"
            ],
            ['Sgùrr na Cìche', '<div class="content">' +
                "<h3>Sgùrr na Cìche</h3>" +
                "<img src='https://upload.wikimedia.org/wikipedia/commons/f/f5/Sgurr_na_Ciche.jpg'>" +
                "<p>Sgùrr na Cìche sits on the edge of Knoydart and is a fine example of a conical shaped mountain and once climbed it offers magnificent views of Loch Nevis</p>" +
                "<p><a class='btn btn-sm' href='https://www.walkhighlands.co.uk/munros/sgurr-na-ciche' target='_blank'><span class='sr-only'>Click Here</span>Click Here for more info</a></p>" +
                "</div>"
            ]
        ];
        var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var gmarkers = [];
        var infowindow = new google.maps.InfoWindow({});
        for (var i = 0; i < locations.length; i++) {
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map,
                title: locations[i][0],
                label: labels[i % labels.length]
            });

            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    infowindow.setContent(content[i][1]);
                    infowindow.open(map, marker);
                };
            })(marker, i));
            gmarkers.push(marker);
        }

        var markerCluster = new MarkerClusterer(map, gmarkers, {
            imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
        });

    }

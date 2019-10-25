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
            ["Ladhar Bheinn", 57.056025, -5.542526],
            ["Nora Barnacle's House", 53.2730267, -9.0546251],
            ["Thoor Ballylee Yeats Tower", 53.1031496, -8.7750506],
            ["Cathaoir Synge", 53.0843409, -9.6124936],
            ["Lake Isle of Innisfree", 54.2465530, -8.358062],
            ["Benbulbin", 54.3666661, -8.4788218],
            ["Lissadell House", 54.3467148, -8.583131],
            ["Yeats Building", 54.2721304, -8.4772024],
            ["Kerry Writers Museum", 52.4447289, -9.4862804],
            ["John B. Keane's Pub", 52.4470431, -9.4856969],
            ["Glenties Cemetery - Resting place of Playwright Brian Friel", 54.7866719, -8.2833222],
            ["James Joyce House", 53.3463009, -6.2838749],
            ["James Joyce Tower & Museum", 53.288654, -6.1158117],
            ["James Joyce Centre", 53.3542008, -6.2599808],
            ["Oscar Wilde House", 53.341214, -6.2503741]
        ];

        var content = [
            ['Ladhar Bheinn', '<div id="content">' +
                "<h3>Ladhar Bheinn</h3>" +
                "<p>Ladhar Bheinn is the highest munro on the Knoydart peninsula</p>" +
                "<p><a class='btn btn-sm' href='www.druid.ie' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
                "</div>"
            ],
            ["Nora Barnacle's House", "<div>" +
                "<h3>Nora Barnacle's House</h3>" +
                "<p>This terrace house is located in Galway City opposite of St Nicholas Church. It was built in the late 1800s and was home to James Joyce’s wife, Nora Barnacle. Joyce also spent considerable time here when he was writing in the 20th century. The building has been restored, but it’s admittedly showing some signs of wear.</p>" +
                "<p>Joyce used the house and the tragic tale of Michael Feeney based a section the final short story in Dubliners,'The Dead'. Michael Feeney wason these incidents. Barnacle and Feeney fell in love as teenager before he of typhoid and pneumonia.</p>" +
                "<p><a class='btn btn-sm' href='http://www.irishtourist.com/details/nora-barnacle-house-museum.shtml' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
                "</div>"
            ],
            ["Thoor Ballylee Yeats Tower", "<div>" +
                "<h3>Thoor Ballylee Yeats Tower</h3>" +
                "<p>This urteenth century Hiberno-Norman toweris closely associated with the poet WB Yeats</p>" +
                "<p><a class='btn btn-sm' href='https://yeatsthoorballylee.org/visit/' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a></p>" +
                "</div>"
            ],
            ["Cathaoir Synge", "<div>" +
                "<h3>Cathaoir Synge</h3>" +
                "<p>Cathaoir Synge or 'Synge Chair' was a location used to write by the writer J.M. Synge who had a long association with the Aran Islands.  He lived on Inis Meáin for considerable time between 1898 and 1902 and drew inspiration from the island culture. Many of Synge most famous works, e.g. ‘Riders To The Sea’ and ‘The Playboy of The Western World were writtten at this spot.</p>" +
                "< p > <a class='btn btn-sm' href='http://www.aranislands.ie/cathaoir-synge/' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a> < /p>" +
                "</div>"
            ],
            ["Lake Isle of Innisfree", "<div>" +
                "<h3>Lake Isle of Innisfree</h3>" +
                "<p>The Lake Isle of Innisfree a beautiful island just off the south coast of Lough Gill. It was the inspiration for the peom by WB Yeats of the same name.</p>" +
                "<p> <a class='btn btn-sm' href='https://sligotours.ie/locations/lake-isle-of-innisfree/' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a> </p>" +
                "</div>"
            ],
            ["Benbulbin", "<div>" +
                "<h3>Ben bulbin</h3>" +
                "<p>Ben bulbin, sometimes spelled Benbulbin or Benbulben, is a large flat-topped rock formation in County Sligo, Ireland. It is part of the Dartry Mountains, in an area sometimes called 'Yeats Country'. Benbulbin is featured in WB Yeats peom 'Under Ben Bulben'.</p>" +
                "<p> <a class='btn btn-sm' href='https://sligowalks.ie/walks/benbulbin-gortarowey-looped-walk/' target='_blank'><span class='sr-only'>Walking Tour</span>Walking Tour</a> </p>" +
                "</div>"
            ],
            ["Lissadell House", "<div>" +
                "<h3>Lissadell House</h3>" +
                "<p>Lissadell House is a neo-classical Greek revivalist style country house located in County Silgo. </p>" +
                "<p>The house was a holiday retreat of WB Yeats who imortalised it with the opening lines of his poem: 'In Memory of Eva Gore-Booth and Con Markiewicz' </p>" +
                "<p> <a class='btn btn-sm' href='http://lissadellhouse.com/' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a> </p>" +
                "</div>"
            ],
            ["Yeats Building", "<div>" +
                "<h3>Yeats Building - Yeats Society</h3>" +
                "<p>The Yeats Building is centrally located on Hyde Bridge, in Sligo Town Centre. This beautiful building is the home of the Yeats Society, Sligo since 1973.</p>" +
                "<p> <a class='btn btn-sm' href='https://www.yeatssociety.com/' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a> </p>" +
                "</div>"
            ],
            ["Kerry Writers Museum", "<div>" +
                "<h3>Kerry Writers Museum</h3>" +
                "<p>Kerry Writers’ Museum collects, safeguards, holds in trust, displays and interprets a variety of material and objects relating to the rich literary heritage of County Kerry, and the cultural, social & political heritage of Listowel & North Kerry.</p>" +
                "<p> <a class='btn btn-sm' href='http://www.kerrywritersmuseum.com' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a> </p>" +
                "</div>"
            ],
            ["John B. Keane's Pub", "<div>" +
                "<h3>John B Keane's Pub</h3>" +
                "<p>This pub was previously owned and run by renowned playwrite John B Keane. At the counter, after closing time, Keane wrote his many masterpieces. The pub is now run by Keane's son Billy, who is also a writer and broadcaster.</p>" +
                "<p> <a class='btn btn-sm' href='http://www.gokerry.ie/businesses/john-b-keanes-bar/' target='_blank'><span class='sr-only'>Click Here</span>Click Here</a> </p>" +
                "</div>"
            ],
            ["Glenties Cemetery - Resting place of Playwright Brian Friel", "<div>" +
                "<h3>Glenties Cemetery</h3>" +
                "<p>Resting place of Playwright Brian Friel</p>" +
                "</div>"
            ],
            ["", "<div>" +
                "<h3>James Joyce House</h3>" +
                "<p> Stately 18 th - century Georgian residence & setting for Joyce 's short story, 'The Dead.'</p>" +
                "</div>"
            ],
            ["James Joyce Tower & Museum", "<div>" +
                "<h3>James Joyce Tower & Museum</h3>" +
                "<p>Martello tower containing Joyce memorabilia where the author stayed and his novel Ulysses begins.</p>" +
                "</div>"
            ],
            ["James Joyce Centre", "<div>" +
                "<h3>James Joyce Centre</h3>" +
                "<p>The James Joyce Centre is a museum in Dublin, Ireland, dedicated to promoting an understanding of the life and works of James Joyce</p>" +
                "</div>"
            ],
            ["Oscar Wilde House", "<div>" +
                "<h3>James Joyce Centre</h3>" +
                "<p>Oscar Wilde 's restored childhood home, known for its Georgian architecture & period furnishings.</p>" +
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

function initMap() {

        const styledMapType = new google.maps.StyledMapType(
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


        const map = new google.maps.Map(document.getElementById("map"), {
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

        const locations = [
            ["Inverie", 57.038531, -5.684935],
            ["Kinlochhourn", 57.104270, -5.387123],
            ["Strathan", 56.969871, -5.326304],
            ["Camusblathan", 57.082002, -5.768341],
            ["Creag Eiridh", 57.040676, -5.702373],
            ["Doune Bay Lodge", 57.065444, -5.789139],
            ["Doune Stone Lodges", 57.041087, -5.697855],
            ["The Gathering", 57.039995, -5.685998],
            ["Glaschoille House", 57.037605, -5.730124],
            ["Ivy Cottage", 57.038540, -5.685291],
            ["Kilchoan Estate", 57.028939, -5.661221],
            ["Knoydart Foundation Bunkhouse", 57.032865, -5.670375],
            ["Knoydart Foundation Campsite", 57.029742, -5.669467],
            ["Knoydart Hide", 57.037842, -5.683945],
            ["Knoydart House", 57.038013, -5.683956],
            ["Knoydart Lodge", 57.033227, -5.668983],
            ["Knoydart River Cottage", 57.029372, -5.664948],
            ["Knoydart Snug", 57.032067, -5.666617],
            ["Lochside House", 57.040524, -5.697796],
            ["The Old Byre", 57.032067, -5.666617],
            ["Westfield", 57.040926, -5.713411],
            ["The Old Forge", 57.037579, -5.682700],
            ["Ladhar Bheinn", 57.056025, -5.542526],
            ["Luinne Bheinn", 57.049542, -5.516111],
            ["Meall Buidhe", 57.032051, -5.545687],
            ["Sgùrr na Cìche", 57.012912, -5.456042]
        ];

        const content = [
            ['Inverie', '<div class="card h-100 card mb-3">' +
                "<h3>Inverie</h3>" +
                "<img class='card-img-top img-fluid' src='https://upload.wikimedia.org/wikipedia/commons/0/04/Inverie_-_geograph.org.uk_-_920860.jpg' alt='Inverie'>" +
                "<p>Inverie (pop. 70), is the main village and settlement on the Knoydart peninsula, and due to it not being connected to the national road network it has a Guiness National Record for remoteness</p>" +
                "<p><a class='btn btn-sm' href='https://en.wikipedia.org/wiki/Inverie' target='_blank' rel='nooperner' aria-label='Inverie'><span class='sr-only'>Click Here</span>Click Here for more info</a></p>" +
                "</div>"
            ],
            ['Kinlochhourn', '<div class="card h-100 card mb-3">' +
                "<h3>Kinloch Hourn</h3>" +
                "<img class='card-img-top img-fluid' src='https://www.undiscoveredscotland.co.uk/knoydart/kinlochhourn/images/kinlochhourn-450.jpg' alt='Kinloch Hourn'>" +
                "<p>Kinloch Hourn is reached by a single track road from the A87 near Invergarry and is one of the most popular places to access Knoydart</p>" +
                "<p><a class='btn btn-sm' href='https://www.walkhighlands.co.uk/Forum/viewtopic.php?f=9&t=24694' target='_blank' rel='nooperner' aria-label='Kinloch Hourn'><span class='sr-only'>Click Here</span>Click Here for more info</a></p>" +
                "</div>"
            ],
            ['Strathan', '<div class="card h-100 card mb-3">' +
                "<h3>Strathan (Loch Arkaig)</h3>" +
                "<img class='card-img-top img-fluid' src='https://s0.geograph.org.uk/geophotos/03/57/05/3570579_97392282.jpg' alt='Strathan'>" +
                "<p>Strathan is a hamlet at the head of Loch Arkaig and is accessed via Spean Bridge on the A82.  This is usually the most common wakling route from the south and then via Glen Dessary to Sourlies at the head of Loch Nevis</p>" +
                "<p><a class='btn btn-sm' href='https://www.walkhighlands.co.uk/Forum/viewtopic.php?f=25&t=8154' target='_blank' rel='nooperner' aria-label='Strathan'><span class='sr-only'>Click Here</span>Click Here for more info</a></p>" +
                "</div>"
            ],
            ['Camusblathan', '<div class="card h-100 card mb-3">' +
                "<h3>Camusblathan</h3>" +
                "<img class='card-img-top img-fluid' class='card-img-top img-fluid' src='https://www.camusblathan.co.uk/____impro/1/onewebmedia/3295319d90-DSC_0011%20%281%29.jpg?etag=%2228037-599054ae%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=366,254&extract=30,0,304,254' alt='Camusblathan'>" +
                "<p>Camusblathan is a gorgeous cottage by the sea, with incredible views. It is located in Airor, on the western tip of Knoydart on the Sound of Sleat looking over to Skye</p>" +
                "<p><a class='btn btn-sm' href='https://www.camusblathan.co.uk' target='_blank' rel='nooperner' aria-label='Camusblathan'><span class='sr-only'>Click Here</span>Click Here for more info</a></p>" +
                "</div>"
            ],
            ['Creag Eiridh', '<div class="card h-100 card mb-3">' +
                "<h3>Creag Eiridh</h3>" +
                "<img class='card-img-top img-fluid' src='https://www.creageiridh.co.uk/wp-content/uploads/2016/03/TheHouse_008-300x300.jpg' alt='Creag Eiridh'>" +
                "<p>In a secluded rural holiday location charming Creag Eiridh is a recently refurbished and immaculately presented 4-bedroom luxury holiday house. It is situated in a breathtaking position on the northern shore of Loch Nevis in the Western Highlands of Scotland</p>" +
                "<p><a class='btn btn-sm' href='http://www.creageiridh.co.uk' target='_blank' rel='nooperner' aria-label='Creag Eiridh'><span class='sr-only'>Click Here</span>Click Here for more info</a></p>" +
                "</div>"
            ],
           ['Doune Bay Lodge', '<div class="card h-100 card mb-3">' +
                "<h3>Doune Bay Lodge</h3>" +
                "<img class='card-img-top img-fluid' src='https://s0.geograph.org.uk/geophotos/04/56/85/4568584_359e8d6f.jpg' alt='Doune Bay Lodge'>" +
                "<p>Doune Bay Lodge is a small family run hotel located on the western tip of Knoydart</p>" +
                "<p><a class='btn btn-sm' href='https://www.doune-knoydart.co.uk' target='_blank' rel='nooperner' aria-label='Doune Bay Lodge'><span class='sr-only'>Click Here</span>Click Here for more info</a></p>" +
                "</div>"
            ],
           ['Doune Stone Lodges', '<div class="card h-100 card mb-3">' +
                "<h3>Doune Stone Lodges</h3>" +
                "<img class='card-img-top img-fluid' src='https://dimg.visitscotland.com/wsimgs/20170923_065812_6971792.jpg' alt='Doune Stone Lodges'>" +
                "<p>Doune Stone Lodges are run by the same family as per Doune Bay lodge and they will collect guests from Mallaig by their own personal boats.</p>" +
                "<p><a class='btn btn-sm' href='https://www.doune-knoydart.co.uk' target='_blank' rel='nooperner' aria-label='Doune Stone Lodges'><span class='sr-only'>Click Here</span>Click Here for more info</a></p>" +
                "</div>"
            ],
            ['The Gathering', '<div class="card h-100 card mb-3">' +
                "<h3>The Gathering</h3>" +
                "<img class='card-img-top img-fluid' src='https://bestscottishcottages.co.uk/?page_type=show_image&img=the-gathering-1.jpg&q=65' alt='The Gathering'>" +
                "<p>The Gathering is located in Inverie village and runs on it's own hydro-electricity system and offers stunning views and modern facilities</p>" +
                "<p><a class='btn btn-sm' href='https://www.thegatheringknoydart.co.uk' target='_blank' rel='nooperner' aria-label='The Gathering'><span class='sr-only'>Click Here</span>Click Here for more info</a></p>" +
                "</div>"
            ],
            ['Glaschoille House', '<div class="card h-100 card mb-3">' +
                "<h3>Glaschoille House</h3>" +
                "<img class='card-img-top img-fluid' src='https://bestscottishcottages.co.uk/?page_type=show_image&img=Glaschoille_Exterior3.jpg&q=65' alt='Glaschoille House'>" +
                "<p>Glaschoille House as well as being a self-catering holiday home is also a wedding venue located 2 miles west of Inverie</p>" +
                "<p><a class='btn btn-sm' href='https://www.glaschoille.co.uk' target='_blank' rel='nooperner' aria-label='Glaschoille House'><span class='sr-only'>Click Here</span>Click Here for more info</a></p>" +
                "</div>"
            ],
            ['Ivy Cottage', '<div class="card h-100 card mb-3">' +
                "<h3>Ivy Cottage</h3>" +
                "<img class='card-img-top img-fluid' src='https://www.assc.co.uk/wp-content/uploads/asscmembers/3043/2070/0277kq25_medium.jpg' alt='Ivy Cottage'>" +
                "<p>Ivy Cottage is a Traditional Highland Estate holiday cottage on the remote Knoydart Peninsula, a haven for hill walkers, mountaineers, wildlife enthusiasts and those who just want to get away from the hurly-burly of urban life</p>" +
                "<p><a class='btn btn-sm' href='http://www.ivycottageknoydart.co.uk' target='_blank' rel='nooperner' aria-label='Ivy Cottage'><span class='sr-only'>Click Here</span>Click Here for more info</a></p>" +
                "</div>"
            ],
            ['Kilchoan Estate', '<div class="card h-100 card mb-3">' +
                "<h3>Kilchoan Estate</h3>" +
                "<img class='card-img-top img-fluid' src='https://static.wixstatic.com/media/03ba02_d3f0ff9563a1422ca6e8bdc6a0fb1f47.jpg/v1/fill/w_262,h_192,al_c,q_80,usm_0.66_1.00_0.01/03ba02_d3f0ff9563a1422ca6e8bdc6a0fb1f47.jpg' alt='Kilchoan Estate'>" +
                "<p>Kilchoan Estate, located to the south east of Inverie offers 5 self catering properties and one bunkhouse including Tigh na Dobhran pictured above</p>" +
                "<p><a class='btn btn-sm' href='https://www.kilchoan-knoydart.com/accommodation' target='_blank' rel='nooperner' aria-label='Kilchoan Estate'><span class='sr-only'>Click Here</span>Click Here for more info</a></p>" +
                "</div>"
            ],
            ['The Knoydart Foundation Bunkhouse', '<div class="card h-100 card mb-3">' +
                "<h3>The Knoydart Foundation Bunkhouse</h3>" +
                "<img class='card-img-top img-fluid' src='https://media-cdn.tripadvisor.com/media/photo-s/04/0c/32/32/knoydart-foundation-bunkhouse.jpg' alt='The Knoydart Foundation Bunkhouse'>" +
                "<p>Knoydart Foundation Bunkhouse is a community run enterprise which re-invests any income to local community projects and it runs on green hydro power, ideal for the environmentally minded.  The Bunkhouse is half a mile south-east of Inverie village and offers discounts on school, youth, Scouts and Duke of Edinburgh's Award groups</p>" +
                "<p><a class='btn btn-sm' href='https://www.knoydart-foundation.com/bunkhouse/about-the-bunkhouse/' target='_blank' rel='nooperner' aria-label='The Knoydart Foundation Bunkhouse'><span class='sr-only'>Click Here</span>Click Here for more info</a></p>" +
                "</div>"
            ],
           ['The Knoydart Foundation Campsite', '<div class="card h-100 card mb-3">' +
                "<h3>The Knoydart Foundation Campsite</h3>" +
                "<img class='card-img-top img-fluid' src='https://images.campsites.co.uk/campsite/26169/6cea409e-7785-49ce-a3fc-ced6a109ca5b/480/270/either/long-beach-campsite-knoydart.jpg' alt='The Knoydart Foundation Campsite'>" +
                "<p>The Long Beach Campsite run by the Knoydart Foundation is located on the shores of Loch Nevis adjacent to the Knoydart Foundation Bunkhouse and is ideal for the more adventurous.   It is a multi-use site and social events take place as well</p>" +
                "<p><a class='btn btn-sm' href='https://www.knoydart-foundation.com/coming-to-knoydart/other-accommodation/camping/' target='_blank' rel='nooperner' aria-label='The Knoydart Foundation Campsite'><span class='sr-only'>Click Here</span>Click Here for more info</a></p>" +
                "</div>"
            ],
            ['Knoydart Hide', '<div class="card h-100 card mb-3">' +
                "<h3>Knoydart Hide</h3>" +
                "<img class='card-img-top img-fluid' src='https://dimg.visitscotland.com/wsimgs/Emily_and_Gareth_Knoydart_Hide_2014-9_942083541.jpg' alt='Knoydart Hide'>" +
                "<p>Knoydart hide is luxury self-catering accomodation aimed at privacy and offers a luxury spa, a hot tub and a masseuse</p>" +
                "<p><a class='btn btn-sm' href='https://www.knoydarthide.co.uk' target='_blank' rel='nooperner' aria-label='Knoydart Hide'><span class='sr-only'>Click Here</span>Click Here for more info</a></p>" +
                "</div>"
            ],
           ['Knoydart House', '<div class="card h-100 card mb-3">' +
                "<h3>Knoydart House</h3>" +
                "<img class='card-img-top img-fluid' src='https://static.independent.co.uk/s3fs-public/thumbnails/image/2011/03/19/18/581626.bin?width=1000&height=614&fit=bounds&format=pjpg&auto=webp&quality=70&crop=16:9,offset-y0.5' alt='Knoydart House'>" +
                "<p>Knoydart House Studio Room boasts a hot tub and a masseuse</p>" +
                "<p><a class='btn btn-sm' href='https://www.knoydarthouse.co.uk' target='_blank' rel='nooperner' aria-label='Knoydart House'><span class='sr-only'>Click Here</span>Click Here for more info</a></p>" +
                "</div>"
            ],
          ['Knoydart Lodge', '<div class="card h-100 card mb-3">' +
                "<h3>Knoydart Lodge</h3>" +
                "<img class='card-img-top img-fluid' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZ2Q3abjZvdp1Q9RFeMMMhrh2xH94SplXv6ut9-FIMF10JG5ce' alt='Knoydart Lodge'>" +
                "<p>Knoydart Lodge is a high quality, low cost bunkhouse style self-catering facility for groups of 2-20</p>" +
                "<p><a class='btn btn-sm' href='https://www.knoydartlodge.co.uk' target='_blank' rel='nooperner' aria-label='Knoydart Lodge'><span class='sr-only'>Click Here</span>Click Here for more info</a></p>" +
                "</div>"
            ],
          ['Knoydart River Cottage', '<div class="card h-100 card mb-3">' +
                "<h3>Knoydart River Cottage</h3>" +
                "<img class='card-img-top img-fluid' src='https://static.wixstatic.com/media/76d3b2_e792a39f5bb240209da63eabfe041e39~mv2.jpg' alt='Knoydart River Cottage'>" +
                "<p>Knoydart River Cottage is a luxury bed & breakfast offering three en-suite bedrooms each with their own private outdoor space. Located next to Inverie River, with spectacular views of the surrounding mountains and out to Loch Nevis, the cottage sleeps six to eight people, small groups and family bookings are available</p>" +
                "<p><a class='btn btn-sm' href='https://www.knoydartrivercottage.co.uk' target='_blank' rel='nooperner' aria-label='Knoydart River Cottage'><span class='sr-only'>Click Here</span>Click Here for more info</a></p>" +
                "</div>"
            ],
            ['Knoydart Snug', '<div class="card h-100 card mb-3">' +
                "<h3>Knoydart Snug</h3>" +
                "<img class='card-img-top img-fluid' src='https://westernislescruises.co.uk/wp-content/uploads/2016/12/dob-900x675.jpg' alt='Knoydart Snug'>" +
                "<p>Knoydart Snugs is located at The Old Byre with independent access and run by the Old Forge and includes a window table to dine at The Old Forge pub</p>" +
                "<p><a class='btn btn-sm' href='https://www.theoldforge.co.uk/knoydart-snug.html' target='_blank' rel='nooperner' aria-label='Knoydart Snug'><span class='sr-only'>Click Here</span>Click Here for more info</a></p>" +
                "</div>"
            ],
            ['Lochside House', '<div class="card h-100 card mb-3">' +
                "<h3>Lochside</h3>" +
                "<img class='card-img-top img-fluid' src='https://i.pinimg.com/474x/f5/36/57/f53657b236a384c805076ebdc799cf39.jpg' alt='Lochside'>" +
                "<p>Lochside is a superb holiday cottage located in Inverie with amongst other things, a hot tub</p>" +
                "<p><a class='btn btn-sm' href='https://www.lochsideknoydart.co.uk' target='_blank' rel='nooperner' aria-label='Lochside'><span class='sr-only'>Click Here</span>Click Here for more info</a></p>" +
                "</div>"
            ],
           ['The Old Byre', '<div class="card h-100 card mb-3">' +
                "<h3>The Old Byre</h3>" +
                "<img class='card-img-top img-fluid' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAvbh-hm8clkAdtB6KYJM4OugFuMsgQE5pYRMJwGG_Urn7OiiX' alt='The Old Byre'>" +
                "<p>The Old Byre is 15 minutes from Inverie Pier and has five bedrooms and can take up to 14 people</p>" +
                "<p><a class='btn btn-sm' href='https://www.theoldbyreknoydart.com' target='_blank' rel='nooperner' aria-label='The Old Byre'><span class='sr-only'>Click Here</span>Click Here for more info</a></p>" +
                "</div>"
            ],
          ['Westfield', '<div class="card h-100 card mb-3">' +
                "<h3>Westfield</h3>" +
                "<img class='card-img-top img-fluid' src='https://lid.zoocdn.com/1024/768/a1538b7b8d8dcebc2bf121b88051d5a93c0a75ac.jpg' alt='Westside'>" +
                "<p>Westfield is a stunning beachfront house in Inverie and has 2 bedrooms to let and has easy access for wheelchairs</p>" +
                "<p><a class='btn btn-sm' href='https://www.airbnb.co.uk/rooms/16254776?source_impression_id=p3_1573853076_75Uz%2BI0tr%2FpLdmqs' target='_blank' rel='nooperner' aria-label='Westfield'><span class='sr-only'>Click Here</span>Click Here for more info</a></p>" +
                "</div>"
            ],
            ['The Old Forge', '<div class="card h-100 card mb-3">' +
                "<h3>The Old Forge</h3>" +
                "<img class='card-img-top img-fluid' src='https://cdn-b.william-reed.com/var/wrbm_gb_hospitality/storage/images/1/7/9/6/1026971-1-eng-GB/My-Pub-The-Old-Forge-Inverie_wrbm_large.jpg' alt='The Old Forge'>" +
                "<p>The Old Forge is Bitain's remotes pub and is often the highlight of the peninsula, a warm welcome is assured</p>" +
                "<p><a class='btn btn-sm' href='http://www.theoldforge.co.uk' target='_blank' rel='nooperner' aria-label='The Old Forge'><span class='sr-only'>Click Here</span>Click Here for more info</a></p>" +
                "</div>"
            ],
            ['Ladhar Bheinn', '<div class="card h-100 card mb-3">' +
                "<h3>Ladhar Bheinn</h3>" +
                "<img class='card-img-top img-fluid' src='https://upload.wikimedia.org/wikipedia/commons/2/2e/Ladhar_Bheinn.jpg' alt='Ladhar Bheinn'>" +
                "<p>Ladhar Bheinn is the highest munro on the Knoydart peninsula and regarded by many as one of the finest mountains in Scotland.  It has dramatic ridges, huge crags and offers superb views</p>" +
                "<p><a class='btn btn-sm' href='https://www.walkhighlands.co.uk/munros/ladhar-bheinn' target='_blank' rel='nooperner' aria-label='Ladhar Bheinn'><span class='sr-only'>Click Here</span>Click Here for more info</a></p>" +
                "</div>"
            ],
            ['Luinne Bheinn', '<div class="card h-100 card mb-3">' +
                "<h3>Luinne Bheinn</h3>" +
                "<img class='card-img-top img-fluid' src='https://images.on-this.website/22407_13680161084ffb09045cf75.jpg' alt='Luinne Bheinn'>" +
                "<p>Luinne Bheinn, often misprounced as 'Loony Bin' is a very rough and rocky mountain on the head of Knoydart, and is quite often climbed along with Meall Buidhe</p>" +
                "<p><a class='btn btn-sm' href='https://www.walkhighlands.co.uk/munros/luinne-bheinn' target='_blank' rel='nooperner' aria-label='Luinne Bheinn'><span class='sr-only'>Click Here</span>Click Here for more info</a></p>" +
                "</div>"
            ],
            ['Meall Buidhe', '<div class="card h-100 card mb-3">' +
                "<h3>Meall Buidhe</h3>" +
                "<img class='card-img-top img-fluid' src='https://www.munromagic.com/MunroImages/CNV00028.jpg' alt='Meall Buidhe'>" +
                "<p>Meall Buidhe (lit. Yellow Knoll) is one of three munros on Knoydart and due to it's rocky slopes, requires considerable effort during ascent</p>" +
                "<p><a class='btn btn-sm' href='https://www.walkhighlands.co.uk/munros/meall-buidhe-knoydart' target='_blank' rel='nooperner' aria-label='Meall Buidhe'><span class='sr-only'>Click Here</span>Click Here for more info</a></p>" +
                "</div>"
            ],
            ['Sgùrr na Cìche', '<div class="card h-100 card mb-3">' +
                "<h3>Sgùrr na Cìche</h3>" +
                "<img class='card-img-top img-fluid' src='https://upload.wikimedia.org/wikipedia/commons/f/f5/Sgurr_na_Ciche.jpg' alt='Sgùrr na Cìche'>" +
                "<p>Sgùrr na Cìche sits on the edge of Knoydart and is a fine example of a conical shaped mountain and once climbed it offers magnificent views of Loch Nevis</p>" +
                "<p><a class='btn btn-sm' href='https://www.walkhighlands.co.uk/munros/sgurr-na-ciche' target='_blank' rel='nooperner' aria-label='Sgùrr na Cìche'><span class='sr-only'>Click Here</span>Click Here for more info</a></p>" +
                "</div>"
            ]
        ];
        const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const gmarkers = [];
        const infowindow = new google.maps.InfoWindow({});
        for (let i = 0; i < locations.length; i++) {
            let marker = new google.maps.Marker({
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

        const markerCluster = new MarkerClusterer(map, gmarkers, {
            imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
        });

    }

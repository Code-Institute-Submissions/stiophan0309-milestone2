{"filter":false,"title":"maps.js","tooltip":"/assets/js/maps.js","undoManager":{"mark":54,"position":54,"stack":[[{"start":{"row":0,"column":0},"end":{"row":26,"column":0},"action":"insert","lines":["function initMap() {","    var map = new google.maps.Map(document.getElementById(\"map\"), {","        zoom: 3,","        center: {","            lat: 46.619261,","            lng: -33.134766","        }","    });","","    var labels = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\";","","    var locations = [","        { lat: 40.785091, lng: -73.968285 },","        { lat: 41.084045, lng: -73.874245 },","        { lat: 40.754932, lng: -73.984016 }","    ];","","    var markers = locations.map(function(location, i) {","        return new google.maps.Marker({","            position: location,","            label: labels[i % labels.length]","        });","    });","","    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });","}",""],"id":1}],[{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"remove","lines":["3"],"id":2}],[{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":["1"],"id":3},{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"insert","lines":["5"]}],[{"start":{"row":4,"column":17},"end":{"row":4,"column":18},"action":"insert","lines":["-"],"id":4}],[{"start":{"row":4,"column":19},"end":{"row":4,"column":20},"action":"remove","lines":["6"],"id":5},{"start":{"row":4,"column":18},"end":{"row":4,"column":19},"action":"remove","lines":["4"]}],[{"start":{"row":4,"column":18},"end":{"row":4,"column":19},"action":"insert","lines":["5"],"id":6},{"start":{"row":4,"column":19},"end":{"row":4,"column":20},"action":"insert","lines":["7"]}],[{"start":{"row":4,"column":26},"end":{"row":4,"column":27},"action":"remove","lines":["1"],"id":7},{"start":{"row":4,"column":25},"end":{"row":4,"column":26},"action":"remove","lines":["6"]},{"start":{"row":4,"column":24},"end":{"row":4,"column":25},"action":"remove","lines":["2"]},{"start":{"row":4,"column":23},"end":{"row":4,"column":24},"action":"remove","lines":["9"]},{"start":{"row":4,"column":22},"end":{"row":4,"column":23},"action":"remove","lines":["1"]},{"start":{"row":4,"column":21},"end":{"row":4,"column":22},"action":"remove","lines":["6"]}],[{"start":{"row":4,"column":21},"end":{"row":4,"column":22},"action":"insert","lines":["0"],"id":8},{"start":{"row":4,"column":22},"end":{"row":4,"column":23},"action":"insert","lines":["4"]},{"start":{"row":4,"column":23},"end":{"row":4,"column":24},"action":"insert","lines":["2"]}],[{"start":{"row":4,"column":24},"end":{"row":4,"column":25},"action":"insert","lines":["8"],"id":9}],[{"start":{"row":4,"column":24},"end":{"row":4,"column":25},"action":"remove","lines":["8"],"id":10}],[{"start":{"row":4,"column":24},"end":{"row":4,"column":25},"action":"insert","lines":["9"],"id":11},{"start":{"row":4,"column":25},"end":{"row":4,"column":26},"action":"insert","lines":["8"]},{"start":{"row":4,"column":26},"end":{"row":4,"column":27},"action":"insert","lines":["9"]}],[{"start":{"row":5,"column":18},"end":{"row":5,"column":27},"action":"remove","lines":["33.134766"],"id":12}],[{"start":{"row":5,"column":18},"end":{"row":5,"column":19},"action":"insert","lines":["5"],"id":13},{"start":{"row":5,"column":19},"end":{"row":5,"column":20},"action":"insert","lines":["."]}],[{"start":{"row":5,"column":20},"end":{"row":5,"column":21},"action":"insert","lines":["3"],"id":14},{"start":{"row":5,"column":21},"end":{"row":5,"column":22},"action":"insert","lines":["5"]},{"start":{"row":5,"column":22},"end":{"row":5,"column":23},"action":"insert","lines":["3"]},{"start":{"row":5,"column":23},"end":{"row":5,"column":24},"action":"insert","lines":["3"]},{"start":{"row":5,"column":24},"end":{"row":5,"column":25},"action":"insert","lines":["0"]},{"start":{"row":5,"column":25},"end":{"row":5,"column":26},"action":"insert","lines":["2"]}],[{"start":{"row":11,"column":0},"end":{"row":11,"column":1},"action":"insert","lines":["/"],"id":15},{"start":{"row":11,"column":1},"end":{"row":11,"column":2},"action":"insert","lines":["*"]}],[{"start":{"row":22,"column":7},"end":{"row":22,"column":8},"action":"insert","lines":[" "],"id":16},{"start":{"row":22,"column":8},"end":{"row":22,"column":9},"action":"insert","lines":["*"]},{"start":{"row":22,"column":9},"end":{"row":22,"column":10},"action":"insert","lines":["/"]}],[{"start":{"row":5,"column":17},"end":{"row":5,"column":18},"action":"remove","lines":["-"],"id":17}],[{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"remove","lines":["1"],"id":18}],[{"start":{"row":11,"column":0},"end":{"row":11,"column":2},"action":"remove","lines":["/*"],"id":19}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":1},"action":"insert","lines":["/"],"id":20},{"start":{"row":9,"column":1},"end":{"row":9,"column":2},"action":"insert","lines":["*"]}],[{"start":{"row":26,"column":0},"end":{"row":26,"column":1},"action":"insert","lines":["*"],"id":21},{"start":{"row":26,"column":1},"end":{"row":26,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":22,"column":9},"end":{"row":22,"column":10},"action":"remove","lines":["/"],"id":22},{"start":{"row":22,"column":8},"end":{"row":22,"column":9},"action":"remove","lines":["*"]}],[{"start":{"row":8,"column":0},"end":{"row":8,"column":1},"action":"insert","lines":["}"],"id":23}],[{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":["2"],"id":24}],[{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"remove","lines":["2"],"id":25}],[{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":["1"],"id":26}],[{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"remove","lines":["5"],"id":27},{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"remove","lines":["1"]}],[{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":["5"],"id":28},{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"insert","lines":["0"]}],[{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"remove","lines":["0"],"id":29},{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"remove","lines":["5"]}],[{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":["3"],"id":30}],[{"start":{"row":5,"column":17},"end":{"row":5,"column":18},"action":"insert","lines":["-"],"id":31}],[{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"remove","lines":["3"],"id":32}],[{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":["5"],"id":33}],[{"start":{"row":5,"column":17},"end":{"row":5,"column":18},"action":"remove","lines":["-"],"id":34}],[{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"remove","lines":["5"],"id":35}],[{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":["3"],"id":36}],[{"start":{"row":4,"column":17},"end":{"row":4,"column":18},"action":"remove","lines":["-"],"id":37}],[{"start":{"row":4,"column":25},"end":{"row":4,"column":26},"action":"remove","lines":["9"],"id":38},{"start":{"row":4,"column":24},"end":{"row":4,"column":25},"action":"remove","lines":["8"]},{"start":{"row":4,"column":23},"end":{"row":4,"column":24},"action":"remove","lines":["9"]},{"start":{"row":4,"column":22},"end":{"row":4,"column":23},"action":"remove","lines":["2"]},{"start":{"row":4,"column":21},"end":{"row":4,"column":22},"action":"remove","lines":["4"]},{"start":{"row":4,"column":20},"end":{"row":4,"column":21},"action":"remove","lines":["0"]}],[{"start":{"row":4,"column":20},"end":{"row":4,"column":21},"action":"insert","lines":["0"],"id":39},{"start":{"row":4,"column":21},"end":{"row":4,"column":22},"action":"insert","lines":["5"]},{"start":{"row":4,"column":22},"end":{"row":4,"column":23},"action":"insert","lines":["6"]},{"start":{"row":4,"column":23},"end":{"row":4,"column":24},"action":"insert","lines":["0"]},{"start":{"row":4,"column":24},"end":{"row":4,"column":25},"action":"insert","lines":["2"]},{"start":{"row":4,"column":25},"end":{"row":4,"column":26},"action":"insert","lines":["5"]}],[{"start":{"row":5,"column":17},"end":{"row":5,"column":18},"action":"insert","lines":["-"],"id":40}],[{"start":{"row":5,"column":25},"end":{"row":5,"column":26},"action":"remove","lines":["2"],"id":41},{"start":{"row":5,"column":24},"end":{"row":5,"column":25},"action":"remove","lines":["0"]},{"start":{"row":5,"column":23},"end":{"row":5,"column":24},"action":"remove","lines":["3"]},{"start":{"row":5,"column":22},"end":{"row":5,"column":23},"action":"remove","lines":["3"]},{"start":{"row":5,"column":21},"end":{"row":5,"column":22},"action":"remove","lines":["5"]},{"start":{"row":5,"column":20},"end":{"row":5,"column":21},"action":"remove","lines":["3"]}],[{"start":{"row":5,"column":20},"end":{"row":5,"column":21},"action":"insert","lines":["5"],"id":42},{"start":{"row":5,"column":21},"end":{"row":5,"column":22},"action":"insert","lines":["4"]},{"start":{"row":5,"column":22},"end":{"row":5,"column":23},"action":"insert","lines":["2"]},{"start":{"row":5,"column":23},"end":{"row":5,"column":24},"action":"insert","lines":["5"]},{"start":{"row":5,"column":24},"end":{"row":5,"column":25},"action":"insert","lines":["2"]},{"start":{"row":5,"column":25},"end":{"row":5,"column":26},"action":"insert","lines":["6"]}],[{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":["1"],"id":43}],[{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"insert","lines":[" "],"id":44}],[{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"remove","lines":[" "],"id":45}],[{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"remove","lines":["3"],"id":46},{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"remove","lines":["1"]}],[{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":["5"],"id":47}],[{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"remove","lines":["5"],"id":48}],[{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":["8"],"id":49}],[{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"remove","lines":["8"],"id":50}],[{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":["1"],"id":51},{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"insert","lines":["5"]}],[{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"remove","lines":["5"],"id":52}],[{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"insert","lines":["2"],"id":53}],[{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"remove","lines":["2"],"id":54}],[{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"insert","lines":["0"],"id":55}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":2,"column":16},"end":{"row":2,"column":16},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1568234131777,"hash":"8e9b359cd3a80c92eeda54bbeefbcfae0e9e1757"}
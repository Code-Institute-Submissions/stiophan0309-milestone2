        fetch('assets/data/accommodation.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        function appendData(data) {
            var mainContainer = document.getElementsByClassName('card-deck')[0];
            for (var i = 0; i < data.length; i++) {
                var div = document.createElement("div");
                div.innerHTML =  '<div class="card h-100 card mb-3">' +
                                 '<img class="card-img-top img-fluid" src="' + data[i].image + '" class="card-img-top" alt="' + data[i].name + '">' + 
                                 '<div class="card-body">' + 
                                    '<h5 class="card-title">' + data[i].name + '<span class="badge badge-danger letter">' + data[i].letter + '</span></h5>' +
                                    '<p class="card-text">' + data[i].type + '</p>' +
                                    '<p class="card-text">' + data[i].description + '</p>' + 
                                    '<a href="' + data[i].url + '" class="btn btn-info" target="_blank">' + 'Home Page' + '</a>' + 
                                 '</div>' + 
                                 '</div>';

                mainContainer.appendChild(div);
            }
        }
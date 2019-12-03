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
            let mainContainer = document.getElementById('cards');
            for (let i = 0; i < data.length; i++) {
                let div = document.createElement("div");
                div.innerHTML =  div.innerHTML = `
                                                <div class="card">
                                                    <img class="card-img-top img-fluid" src="${data[i].image}" alt="${data[i].name}">
                                                    <div class="card-body">
                                                        <h5 class="card-title">${data[i].name}<span class="badge badge-danger letter">${data[i].letter}</span></h5>
                                                        <p class="card-text">${data[i].type}</p><p class="card-text">${data[i].description}</p>
                                                   </div>
                                                    <div class="card-footer">
                                                        <a href="${data[i].url}" class="btn btn-info" target="_blank" rel="noopener" aria-label="${data[i].name}"}>Home Page</a>
                                                    </div>
  
                                                </div>`

                mainContainer.appendChild(div);
            }
        }
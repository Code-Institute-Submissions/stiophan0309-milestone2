document.addEventListener('DOMContentLoaded', function() {
   
    $('.nav-link').click(function(e){
        let divCoords = $(e.target.hash).offset();
        let height = $('header').height();
        e.preventDefault();
        window.scrollTo({
        left: divCoords.left, 
        top: divCoords.top - height,
        behavior: 'smooth'
        });
    });

}, false);
       $(function() {
            const navbar = $(".scroll");
            $(window).scroll(function() {    
                const scroll = $(window).scrollTop();
            
                if (scroll >= 200) {
                    navbar.removeClass('scroll').addClass("navbar1");
                } else {
                    navbar.removeClass("navbar1").addClass('scroll');
                }
            });
        });

$(".nav-item a[href^='#']").on('click', function(e) {
   // prevent default anchor click behavior
   e.preventDefault();

   // animate
   $('html, body').animate({
       scrollTop: $(this.hash).offset().top - 150
     }, 300, function(){
     });
});

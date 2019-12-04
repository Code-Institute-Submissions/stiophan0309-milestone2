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

$(document).ready(function(){

    function hideLoader() {
        $('#content').fadeOut('slow');
        $('#loader').delay(500).fadeOut("slow");
        $('body').delay(600).css({'overflow':'visible'});  
    }

    setTimeout(hideLoader, 4000);

    
    $(document).on("scroll", function() {
        var windowScrolled = $(window).scrollTop();

        if (windowScrolled >= 45) {
            $("#header").addClass("header--sticky");
        } else if (windowScrolled < 45){
            $("#header").removeClass("header--sticky");
        }
    });
});
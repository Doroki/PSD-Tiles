$(function(){
    $(".main-menu__link").on("click", function(e){
        e.preventDefault();
        
        var target = $(this.getAttribute('href')),
            distance = target.offset().top,
            valueToScroll = target.hasClass('hide') ? valueToScroll = distance-120 : valueToScroll = distance-60;  
        
        if( target.length ) {
            $('html, body').stop().animate({
                scrollTop: valueToScroll
                }, 1000);
            }

        if($("#menu").hasClass("main-menu--show")) {
            $("#menu").removeClass("main-menu--show");
        }
    });
});
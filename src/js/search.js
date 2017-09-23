$(function(){

    var focused;

    $(".social__link--search").on("click", function(e){
        e.preventDefault();

        if(focused){
            $("#search").blur();
            focused = false;
        } else {
            $("#search").focus();
            focused = true;
        }
    });

    $(".social__link--search").hover(function(e) {
        e.stopPropagation();
        focused = $("#search").is(":focus");
    });
});
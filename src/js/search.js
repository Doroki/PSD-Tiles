$(function(){

    var focused;

    $("#search").on("click", function(e){
        e.stopPropagation();
    });

    $(".social__link--search").on("click", function(e){
        e.preventDefault();

        console.log("jest");
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
$(function(){

    $(".header__button").on("click", function(){ // show menu
        $(".main-menu").toggleClass("main-menu--show");
    })

///////////////////////////////

    function checkSocial(e){ // animate social checkbox 
        $(this).toggleClass("check-icon--unchecked");
        $(this).toggleClass("check-icon--checked");
    }

    $(".check-icon").on("change", checkSocial);


/////////////////////////////
    $(".dot--dark").on("click", function(e){ //info section dots
        if(!($(e.target).hasClass("dot--dark--actual"))) {
            $(".dot--dark").removeClass("dot--dark--actual");
            $(e.target).addClass("dot--dark--actual");

            var infoArray = [];
            $.each($(".info__content"), function(i){
                infoArray[i] = $(".info__content")[i];
            });

            var newInfoContent = infoArray.reverse();

            $(".info__container").html(newInfoContent);
        }
    });
/////////////
    $(".about__item").on("click", function(e){ //about section tabs
        var buttonIndex = $(".about__item").index(e.target);
        
        if(!($(e.target).hasClass("about__item--active"))) {
            $(".about__item").removeClass("about__item--active");
            $(".about__item").eq(buttonIndex).addClass("about__item--active");

            $(".about__articles").css("display", "none");
            $(".about__articles").eq(buttonIndex).fadeIn("slow");
        }
    });
//////////////

    $("#blog").on("click", function(){
        $("#blog-menu").toggleClass("blog--show");
        hideForSmallMobile();
    });

    function hideForSmallMobile() {
        $(".list__item").find("span").toggleClass("hidden");
        $(".list__item").last().toggleClass("hidden");
        $(".blog__item").not(":first-child").toggleClass("hidden");
    }
});

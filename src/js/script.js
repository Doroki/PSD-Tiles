$(function(){

 // ==== Main menu - show ==== //
    $(".header__button").on("click", function(){ // show menu
        $(".main-menu").toggleClass("main-menu--show");
    })
    
    
// ==== switch social checkbox icons ==== //
    $(".check-icon").on("change", function(e){ 
        $(this).toggleClass("check-icon--unchecked");
        $(this).toggleClass("check-icon--checked");
    }

// ==== Section info - dot buttons ==== //
    $(".dot--dark").on("click", function(e){
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
    
// ==== Section about switch tabs ==== //
    $(".about__item").on("click", function(e){
        var buttonIndex = $(".about__item").index(e.target);
        
        if(!($(e.target).hasClass("about__item--active"))) {
            $(".about__item").removeClass("about__item--active");
            $(".about__item").eq(buttonIndex).addClass("about__item--active");

            $(".about__articles").css("display", "none");
            $(".about__articles").eq(buttonIndex).fadeIn("slow");
        }
    });

// ==== Animate slide blog menu ==== //
    $("#blog").on("click", function(){
        
        if($("#blog-menu").hasClass("blog--show")) {
            $("#blog-menu").animate({"width": "0px"}, 700)
            $("#blog-menu").removeClass("blog--show");
            $(".list__content").removeClass("list__content--hidden");
        } else {
            $("#blog-menu").animate({"width": "220px"}, 700)
            $("#blog-menu").addClass("blog--show");
            $(".list__content").addClass("list__content--hidden");
        }
    });

    
// ==== "Read more/less" button ==== //
    $(".button-more").on("click", function(){

        if($(this).text() === "Read more") {
            $(this).text("Read less");
            $(this).siblings("#ellipsis").hide();
            $(this).siblings("[class*='content--hidden']").show();

        } else {
            $(this).text("Read more");
            $(this).prev("#ellipsis").show();
            $(this).siblings("[class*='content--hidden']").hide();
        }
        
    });
});

$(document).ready(function(){
    var slideNumber = 1;
    var timer;

    function sliderAnimation(){
        slideNumber++;        

        if(slideNumber >= 5) slideNumber = 1;
        else if(slideNumber <= 0) slideNumber = 5;

        $(".slider__content").addClass("slider__content--hidden");
        $(".slider__content--slide"+slideNumber).removeClass("slider__content--hidden");
        
        markDot();

        timer = setTimeout (sliderAnimation, 5000);
    }

    function markDot() {
        var dots = $("#dot-container").children();
        dots.removeClass("dot--actual");
        dots.eq(slideNumber - 1).addClass("dot--actual");
    }

    function changeSlideByDot(e) {
        if(!($(e.target).hasClass("dot--actual"))){
            var dots = $("#dot-container").children();
            var dotIndex = dots.index(e.target);

            slideNumber = dotIndex;
            clearTimeout(timer);
            sliderAnimation();
        }        
    }

    function previewSlide() {
        slideNumber = slideNumber-2;
        clearTimeout(timer);
        sliderAnimation();
    }

    function nextSlide() {
        clearTimeout(timer);
        sliderAnimation();
    }

    $("#dot-container").on("click", changeSlideByDot);
    $("#preview").on("click", previewSlide);
    $("#next").on("click", nextSlide);
    $(document).ready(sliderAnimation);
});
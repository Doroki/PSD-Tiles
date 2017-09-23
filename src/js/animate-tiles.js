document.addEventListener("DOMContentLoaded", function(){

    var slider = document.querySelector("#slider"),
        mainElements = {
            naviChildren: document.querySelector("#navi").children,
            activChildren: document.querySelector("#activ").children,
            othersChildren: document.querySelector("#others").children,
        },
        elementsArray = [slider],
        topPosition,
        bottomPosition;

    for(var item in mainElements) {
        for(var i = 0; i<mainElements[item].length; i++) {
            elementsArray.push(mainElements[item][i]);
        }
    }

    function animateElements(){
        elementsArray.forEach(function(element) {
            topPosition = element.getBoundingClientRect().bottom;
            bottomPosition = element.getBoundingClientRect().top - window.innerHeight;

            if(topPosition < 0 || bottomPosition > 0) {
                element.classList.remove("show");
                element.classList.add("hide");
            } else {
                element.classList.add("show");
                element.classList.remove("hide");
            }
        });
    }

    document.addEventListener("scroll", animateElements);
});
document.addEventListener("DOMContentLoaded", function(){
    
    var correctBowser; 
    
    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) {
        correctBowser = true;
    } else if(navigator.userAgent.indexOf("Chrome") != -1 ) {
        correctBowser = true;
    } else if(navigator.userAgent.indexOf("Safari") != -1) {
        correctBowser = true;
    } else if(navigator.userAgent.indexOf("Firefox") != -1 ) {
        correctBowser = true;
    } else {
        correctBowser = false;
    }

    if(correctBowser === false) {
        alert(
            'Unfortunately, due to the poor support for "Grid layout", the page may not work properly on older browsers and Internet Explorer. Please use one of the browsers like: \n\nChrome, \nMozilla \nFirefox, \nSafari, \nOpera.'
        );
    }

});
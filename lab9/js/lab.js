$("#myName").append("<button id='button-challenge'>Make Special</button>");

$(document).ready(function(){
    $("#button-challenge").click(function(){
        $("#myName").toggleClass("change");
    });
});

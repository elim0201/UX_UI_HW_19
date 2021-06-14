console.log("Your index.js files is loaded correctly!");

$(document).ready(function(){

    $('.flexDiv').hover(
        // trigger when mouse hover
        function(){
            $(this).animate({
                marginTop: "-=5%",
            },200);
        },
        //trugger when mouse out
        function(){
            $(this).animate({
                marginTop: "0%"
            },200);
        }
    );
});

$(document).ready(function(){

    $('.project').hover(
        // trigger when mouse hover
        function(){
            $(this).animate({
                marginTop: "-=5%",
            },200);
        },
        //trugger when mouse out
        function(){
            $(this).animate({
                marginTop: "0%"
            },200);
        }
    );
});


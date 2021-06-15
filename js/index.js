console.log("Your index.js files is loaded correctly!");

$(document).ready(function(){

    $('.flexDiv').hover(
        // trigger when mouse hover
        function(){
            $(this).animate({
                marginTop: "-=2%",
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



// scroll reveal //
ScrollReveal(options);


ScrollReveal().reveal('#mySkills', { delay: 2000});
ScrollReveal().reveal('#myWork', { delay: 5000});
ScrollReveal().reveal('#contactMe', { delay: 10000});
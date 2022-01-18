$(document).ready(function(){
    $(".sns1 li:nth-of-type(1)").click(function(){
        $(".section-nine-more1").show();
        $(".section-nine-more2").css("display", "none");
        $(".section-nine-more3").css("display", "none");
    });

    $(".sns1 li:nth-of-type(2)").click(function(){
        $(".section-nine-more2").show().css("display", "flex");
        $(".section-nine-more1").css("display", "none");
        $(".section-nine-more3").css("display", "none");
    });

    $(".sns1 li:nth-of-type(3)").click(function(){
        $(".section-nine-more3").show().css("display", "flex");
        $(".section-nine-more1").css("display", "none");
        $(".section-nine-more2").css("display", "none");
    });
})
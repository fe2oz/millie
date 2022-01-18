$(document).ready(function(){
    $("#sfmb li").click(function(){
        $("#sfmb li").removeClass("active");
        $(this).addClass("active");
    });

    $(".sns1 li").click(function(){
        $(".sns1 li").removeClass("active2");
        $(this).addClass("active2");
    });

    $(".snmt1 li").click(function(){
        $(".snmt1 li").removeClass("active3");
        $(this).addClass("active3");
    });

    
});
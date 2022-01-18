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

    $("#snmt2 li").click(function(){
        $("#snmt2 li").removeClass("active4");
        $(this).addClass("active4");
    });

    $("#snmt3 li").click(function(){
        $("#snmt3 li").removeClass("active5");
        $(this).addClass("active5");
    });
});
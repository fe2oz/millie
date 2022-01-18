$(document).ready(function(){
    var scroll_pos = 0;
    $(document).scroll(function(){
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 800){
            $("#header").css("background-color", "rgba(255, 255, 255, 0.8)");
            $("#header").css("border-bottom", "1px solid #242424");
            $(".right-menu nav ul li").css("color", "black");
            $(".right-menu nav ul li:nth-of-type(2)").css("background-color", "#242424");
            $(".right-menu nav ul li:nth-of-type(2)").css("color", "#fff");
            $(".left-menu img").css("filter", "invert(1)");
        }else{
            $("#header").css("background-color", "#a7a39a");
            $("#header").css("border-bottom", "1px solid #fff");
            $(".right-menu nav ul li").css("color", "#fff");
            $(".right-menu nav ul li:nth-of-type(2)").css("background-color", "#ffeb60");
            $(".right-menu nav ul li:nth-of-type(2)").css("color", "#242424");
            $(".left-menu img").css("filter", "invert(0)");
        }
    })
})
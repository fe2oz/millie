$(document).ready(function(){
    $("#sfmb li:nth-of-type(1)").click(function(){
        $(".sfb1").css("display", "flex");
        $(".sfb2").css("display", "none");
        $(".sfb3").css("display", "none");
        $(".sfb4").css("display", "none");
        $(".sfb5").css("display", "none");
    });
    $("#sfmb li:nth-of-type(2)").click(function(){
        $(".sfb2").css("display", "flex");
        $(".sfb1").css("display", "none");
        $(".sfb3").css("display", "none");
        $(".sfb4").css("display", "none");
        $(".sfb5").css("display", "none");
    });
    $("#sfmb li:nth-of-type(3)").click(function(){
        $(".sfb3").css("display", "flex");
        $(".sfb1").css("display", "none");
        $(".sfb2").css("display", "none");
        $(".sfb4").css("display", "none");
        $(".sfb5").css("display", "none");
    });
    $("#sfmb li:nth-of-type(4)").click(function(){
        $(".sfb4").css("display", "flex");
        $(".sfb1").css("display", "none");
        $(".sfb2").css("display", "none");
        $(".sfb3").css("display", "none");
        $(".sfb5").css("display", "none");
    });
    $("#sfmb li:nth-of-type(5)").click(function(){
        $(".sfb5").css("display", "flex");
        $(".sfb1").css("display", "none");
        $(".sfb2").css("display", "none");
        $(".sfb3").css("display", "none");
        $(".sfb4").css("display", "none");
    });
})



$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"주식", size:"50"},
    headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
})
.done(function(msg) {
    console.log(msg);

    $(".sfb1-1").append("<img src="+msg.documents[0].thumbnail+"/>");
    $(".sfb1-1").append("<h2>"+msg.documents[0].title+"</h2>");
    $(".sfb1-1").append("<h3>"+msg.documents[0].authors+"</h3>");

    $(".sfb1-2").append("<img src="+msg.documents[1].thumbnail+"/>");
    $(".sfb1-2").append("<h2>"+msg.documents[1].title+"</h2>");
    $(".sfb1-2").append("<h3>"+msg.documents[1].authors+"</h3>");

    $(".sfb1-3").append("<img src="+msg.documents[2].thumbnail+"/>");
    $(".sfb1-3").append("<h2>"+msg.documents[2].title+"</h2>");
    $(".sfb1-3").append("<h3>"+msg.documents[2].authors+"</h3>");

    $(".sfb1-4").append("<img src="+msg.documents[4].thumbnail+"/>");
    $(".sfb1-4").append("<h2>"+msg.documents[4].title+"</h2>");
    $(".sfb1-4").append("<h3>"+msg.documents[4].authors+"</h3>");

    $(".sfb1-5").append("<img src="+msg.documents[5].thumbnail+"/>");
    $(".sfb1-5").append("<h2>"+msg.documents[5].title+"</h2>");
    $(".sfb1-5").append("<h3>"+msg.documents[5].authors+"</h3>");

    $(".sfb1-6").append("<img src="+msg.documents[6].thumbnail+"/>");
    $(".sfb1-6").append("<h2>"+msg.documents[6].title+"</h2>");
    $(".sfb1-6").append("<h3>"+msg.documents[6].authors+"</h3>");

    $(".sfb1-7").append("<img src="+msg.documents[7].thumbnail+"/>");
    $(".sfb1-7").append("<h2>"+msg.documents[7].title+"</h2>");
    $(".sfb1-7").append("<h3>"+msg.documents[7].authors+"</h3>");
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"영어", size:"50"},
    headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
})
.done(function(msg) {
    console.log(msg);

    $(".sfb2-1").append("<img src="+msg.documents[0].thumbnail+"/>");
    $(".sfb2-1").append("<h2>"+msg.documents[0].title+"</h2>");
    $(".sfb2-1").append("<h3>"+msg.documents[0].authors+"</h3>");

    $(".sfb2-2").append("<img src="+msg.documents[1].thumbnail+"/>");
    $(".sfb2-2").append("<h2>"+msg.documents[1].title+"</h2>");
    $(".sfb2-2").append("<h3>"+msg.documents[1].authors+"</h3>");

    $(".sfb2-3").append("<img src="+msg.documents[2].thumbnail+"/>");
    $(".sfb2-3").append("<h2>"+msg.documents[2].title+"</h2>");
    $(".sfb2-3").append("<h3>"+msg.documents[2].authors+"</h3>");

    $(".sfb2-4").append("<img src="+msg.documents[4].thumbnail+"/>");
    $(".sfb2-4").append("<h2>"+msg.documents[4].title+"</h2>");
    $(".sfb2-4").append("<h3>"+msg.documents[4].authors+"</h3>");

    $(".sfb2-5").append("<img src="+msg.documents[5].thumbnail+"/>");
    $(".sfb2-5").append("<h2>"+msg.documents[5].title+"</h2>");
    $(".sfb2-5").append("<h3>"+msg.documents[5].authors+"</h3>");

    $(".sfb2-6").append("<img src="+msg.documents[6].thumbnail+"/>");
    $(".sfb2-6").append("<h2>"+msg.documents[6].title+"</h2>");
    $(".sfb2-6").append("<h3>"+msg.documents[6].authors+"</h3>");

    $(".sfb2-7").append("<img src="+msg.documents[7].thumbnail+"/>");
    $(".sfb2-7").append("<h2>"+msg.documents[7].title+"</h2>");
    $(".sfb2-7").append("<h3>"+msg.documents[7].authors+"</h3>");
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"고전", size:"50"},
    headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
})
.done(function(msg) {
    console.log(msg);

    $(".sfb3-1").append("<img src="+msg.documents[0].thumbnail+"/>");
    $(".sfb3-1").append("<h2>"+msg.documents[0].title+"</h2>");
    $(".sfb3-1").append("<h3>"+msg.documents[0].authors+"</h3>");

    $(".sfb3-2").append("<img src="+msg.documents[1].thumbnail+"/>");
    $(".sfb3-2").append("<h2>"+msg.documents[1].title+"</h2>");
    $(".sfb3-2").append("<h3>"+msg.documents[1].authors+"</h3>");

    $(".sfb3-3").append("<img src="+msg.documents[2].thumbnail+"/>");
    $(".sfb3-3").append("<h2>"+msg.documents[2].title+"</h2>");
    $(".sfb3-3").append("<h3>"+msg.documents[2].authors+"</h3>");

    $(".sfb3-4").append("<img src="+msg.documents[4].thumbnail+"/>");
    $(".sfb3-4").append("<h2>"+msg.documents[4].title+"</h2>");
    $(".sfb3-4").append("<h3>"+msg.documents[4].authors+"</h3>");

    $(".sfb3-5").append("<img src="+msg.documents[5].thumbnail+"/>");
    $(".sfb3-5").append("<h2>"+msg.documents[5].title+"</h2>");
    $(".sfb3-5").append("<h3>"+msg.documents[5].authors+"</h3>");

    $(".sfb3-6").append("<img src="+msg.documents[6].thumbnail+"/>");
    $(".sfb3-6").append("<h2>"+msg.documents[6].title+"</h2>");
    $(".sfb3-6").append("<h3>"+msg.documents[6].authors+"</h3>");

    $(".sfb3-7").append("<img src="+msg.documents[7].thumbnail+"/>");
    $(".sfb3-7").append("<h2>"+msg.documents[7].title+"</h2>");
    $(".sfb3-7").append("<h3>"+msg.documents[7].authors+"</h3>");
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"인테리어", size:"50"},
    headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
})
.done(function(msg) {
    console.log(msg);
    $(".sfb4-1").append("<img src="+msg.documents[0].thumbnail+"/>");
    $(".sfb4-1").append("<h2>"+msg.documents[0].title+"</h2>");
    $(".sfb4-1").append("<h3>"+msg.documents[0].authors+"</h3>");
    $(".sfb4-2").append("<img src="+msg.documents[1].thumbnail+"/>");
    $(".sfb4-2").append("<h2>"+msg.documents[1].title+"</h2>");
    $(".sfb4-2").append("<h3>"+msg.documents[1].authors+"</h3>");
    $(".sfb4-3").append("<img src="+msg.documents[2].thumbnail+"/>");
    $(".sfb4-3").append("<h2>"+msg.documents[2].title+"</h2>");
    $(".sfb4-3").append("<h3>"+msg.documents[2].authors+"</h3>");
    $(".sfb4-4").append("<img src="+msg.documents[4].thumbnail+"/>");
    $(".sfb4-4").append("<h2>"+msg.documents[4].title+"</h2>");
    $(".sfb4-4").append("<h3>"+msg.documents[4].authors+"</h3>");
    $(".sfb4-5").append("<img src="+msg.documents[5].thumbnail+"/>");
    $(".sfb4-5").append("<h2>"+msg.documents[5].title+"</h2>");
    $(".sfb4-5").append("<h3>"+msg.documents[5].authors+"</h3>");
    $(".sfb4-6").append("<img src="+msg.documents[6].thumbnail+"/>");
    $(".sfb4-6").append("<h2>"+msg.documents[6].title+"</h2>");
    $(".sfb4-6").append("<h3>"+msg.documents[6].authors+"</h3>");
    $(".sfb4-7").append("<img src="+msg.documents[7].thumbnail+"/>");
    $(".sfb4-7").append("<h2>"+msg.documents[7].title+"</h2>");
    $(".sfb4-7").append("<h3>"+msg.documents[7].authors+"</h3>");
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"다이어트", size:"50"},
    headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
})
.done(function(msg) {
    console.log(msg);
    $(".sfb5-1").append("<img src="+msg.documents[0].thumbnail+"/>");
    $(".sfb5-1").append("<h2>"+msg.documents[0].title+"</h2>");
    $(".sfb5-1").append("<h3>"+msg.documents[0].authors+"</h3>");
    $(".sfb5-2").append("<img src="+msg.documents[1].thumbnail+"/>");
    $(".sfb5-2").append("<h2>"+msg.documents[1].title+"</h2>");
    $(".sfb5-2").append("<h3>"+msg.documents[1].authors+"</h3>");
    $(".sfb5-3").append("<img src="+msg.documents[2].thumbnail+"/>");
    $(".sfb5-3").append("<h2>"+msg.documents[2].title+"</h2>");
    $(".sfb5-3").append("<h3>"+msg.documents[2].authors+"</h3>");
    $(".sfb5-4").append("<img src="+msg.documents[4].thumbnail+"/>");
    $(".sfb5-4").append("<h2>"+msg.documents[4].title+"</h2>");
    $(".sfb5-4").append("<h3>"+msg.documents[4].authors+"</h3>");
    $(".sfb5-5").append("<img src="+msg.documents[5].thumbnail+"/>");
    $(".sfb5-5").append("<h2>"+msg.documents[5].title+"</h2>");
    $(".sfb5-5").append("<h3>"+msg.documents[5].authors+"</h3>");
    $(".sfb5-6").append("<img src="+msg.documents[6].thumbnail+"/>");
    $(".sfb5-6").append("<h2>"+msg.documents[6].title+"</h2>");
    $(".sfb5-6").append("<h3>"+msg.documents[6].authors+"</h3>");
    $(".sfb5-7").append("<img src="+msg.documents[7].thumbnail+"/>");
    $(".sfb5-7").append("<h2>"+msg.documents[7].title+"</h2>");
    $(".sfb5-7").append("<h3>"+msg.documents[7].authors+"</h3>");
});
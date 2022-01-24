$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"데미안", size:"50"},
    headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
})
.done(function(msg) {
    console.log(msg);

    $(".stb2-1").append("<img src="+msg.documents[3].thumbnail+"/>");
    $(".stb2-1").append("<h2>"+msg.documents[3].title+"</h2>");
    $(".stb2-1").append("<h3>"+msg.documents[3].authors+"</h3>");
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"노르웨이의 숲", size:"50"},
    headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
})
.done(function(msg) {
    console.log(msg);

    $(".stb2-2").append("<img src="+msg.documents[2].thumbnail+"/>");
    $(".stb2-2").append("<h2>"+msg.documents[2].title+"</h2>");
    $(".stb2-2").append("<h3>"+msg.documents[2].authors+"</h3>");
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"명상록", size:"50"},
    headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
})
.done(function(msg) {
    console.log(msg);

    $(".stb2-3").append("<img src="+msg.documents[4].thumbnail+"/>");
    $(".stb2-3").append("<h2>"+msg.documents[4].title+"</h2>");
    $(".stb2-3").append("<h3>"+msg.documents[4].authors+"</h3>");
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"눈표범", size:"50"},
    headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
})
.done(function(msg) {
    console.log(msg);

    $(".stb2-4").append("<img src="+msg.documents[0].thumbnail+"/>");
    $(".stb2-4").append("<h2>"+msg.documents[0].title+"</h2>");
    $(".stb2-4").append("<h3>"+msg.documents[0].authors+"</h3>");
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"어린 왕자", size:"50"},
    headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
})
.done(function(msg) {
    console.log(msg);

    $(".stb2-5").append("<img src="+msg.documents[2].thumbnail+"/>");
    $(".stb2-5").append("<h2>"+msg.documents[2].title+"</h2>");
    $(".stb2-5").append("<h3>"+msg.documents[2].authors+"</h3>");
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"김영하", size:"50"},
    headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
})
.done(function(msg) {
    console.log(msg);

    $(".stb2-6").append("<img src="+msg.documents[1].thumbnail+"/>");
    $(".stb2-6").append("<h2>"+msg.documents[1].title+"</h2>");
    $(".stb2-6").append("<h3>"+msg.documents[1].authors+"</h3>");
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"니체의 말", size:"50"},
    headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
})
.done(function(msg) {
    console.log(msg);

    $(".stb2-7").append("<img src="+msg.documents[1].thumbnail+"/>");
    $(".stb2-7").append("<h2>"+msg.documents[1].title+"</h2>");
    $(".stb2-7").append("<h3>"+msg.documents[1].authors+"</h3>");
});
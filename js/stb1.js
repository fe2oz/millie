$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"구미호 식당", size:"50"},
    headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
})
.done(function(msg) {
    console.log(msg);

    $(".stb1-1").append("<img src="+msg.documents[3].thumbnail+"/>");
    $(".stb1-1").append("<h2>"+msg.documents[3].title+"</h2>");
    $(".stb1-1").append("<h3>"+msg.documents[3].authors+"</h3>");
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"오즈의", size:"50"},
    headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
})
.done(function(msg) {
    console.log(msg);

    $(".stb1-2").append("<img src="+msg.documents[3].thumbnail+"/>");
    $(".stb1-2").append("<h2>"+msg.documents[3].title+"</h2>");
    $(".stb1-2").append("<h3>"+msg.documents[3].authors+"</h3>");
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"불편한", size:"50"},
    headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
})
.done(function(msg) {
    console.log(msg);

    $(".stb1-3").append("<img src="+msg.documents[7].thumbnail+"/>");
    $(".stb1-3").append("<h2>"+msg.documents[7].title+"</h2>");
    $(".stb1-3").append("<h3>"+msg.documents[7].authors+"</h3>");
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"구의", size:"50"},
    headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
})
.done(function(msg) {
    console.log(msg);

    $(".stb1-4").append("<img src="+msg.documents[1].thumbnail+"/>");
    $(".stb1-4").append("<h2>"+msg.documents[1].title+"</h2>");
    $(".stb1-4").append("<h3>"+msg.documents[1].authors+"</h3>");
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"세계", size:"50"},
    headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
})
.done(function(msg) {
    console.log(msg);

    $(".stb1-5").append("<img src="+msg.documents[41].thumbnail+"/>");
    $(".stb1-5").append("<h2>"+msg.documents[41].title+"</h2>");
    $(".stb1-5").append("<h3>"+msg.documents[41].authors+"</h3>");
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"동주", size:"50"},
    headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
})
.done(function(msg) {
    console.log(msg);

    $(".stb1-6").append("<img src="+msg.documents[5].thumbnail+"/>");
    $(".stb1-6").append("<h2>"+msg.documents[5].title+"</h2>");
    $(".stb1-6").append("<h3>"+msg.documents[5].authors+"</h3>");
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"전락", size:"50"},
    headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
})
.done(function(msg) {
    console.log(msg);

    $(".stb1-7").append("<img src="+msg.documents[11].thumbnail+"/>");
    $(".stb1-7").append("<h2>"+msg.documents[11].title+"</h2>");
    $(".stb1-7").append("<h3>"+msg.documents[11].authors+"</h3>");
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"박연준", size:"50"},
    headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
})
.done(function(msg) {
    console.log(msg);

    $(".stb4-1").append("<img src="+msg.documents[1].thumbnail+"/>");
    $(".stb4-1").append("<h2>"+msg.documents[1].title+"</h2>");
    $(".stb4-1").append("<h3>"+msg.documents[1].authors+"</h3>");
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"배를 엮다", size:"50"},
    headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
})
.done(function(msg) {
    console.log(msg);

    $(".stb4-2").append("<img src="+msg.documents[0].thumbnail+"/>");
    $(".stb4-2").append("<h2>"+msg.documents[0].title+"</h2>");
    $(".stb4-2").append("<h3>"+msg.documents[0].authors+"</h3>");
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"박경리의 말", size:"50"},
    headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
})
.done(function(msg) {
    console.log(msg);

    $(".stb4-3").append("<img src="+msg.documents[0].thumbnail+"/>");
    $(".stb4-3").append("<h2>"+msg.documents[0].title+"</h2>");
    $(".stb4-3").append("<h3>"+msg.documents[0].authors+"</h3>");
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"오만과 편견", size:"50"},
    headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
})
.done(function(msg) {
    console.log(msg);

    $(".stb4-4").append("<img src="+msg.documents[0].thumbnail+"/>");
    $(".stb4-4").append("<h2>"+msg.documents[0].title+"</h2>");
    $(".stb4-4").append("<h3>"+msg.documents[0].authors+"</h3>");
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"도리언 그레이", size:"50"},
    headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
})
.done(function(msg) {
    console.log(msg);

    $(".stb4-5").append("<img src="+msg.documents[0].thumbnail+"/>");
    $(".stb4-5").append("<h2>"+msg.documents[0].title+"</h2>");
    $(".stb4-5").append("<h3>"+msg.documents[0].authors+"</h3>");
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"수레바퀴 아래", size:"50"},
    headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
})
.done(function(msg) {
    console.log(msg);

    $(".stb4-6").append("<img src="+msg.documents[0].thumbnail+"/>");
    $(".stb4-6").append("<h2>"+msg.documents[0].title+"</h2>");
    $(".stb4-6").append("<h3>"+msg.documents[0].authors+"</h3>");
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"모리와 함께한", size:"50"},
    headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
})
.done(function(msg) {
    console.log(msg);

    $(".stb4-7").append("<img src="+msg.documents[0].thumbnail+"/>");
    $(".stb4-7").append("<h2>"+msg.documents[0].title+"</h2>");
    $(".stb4-7").append("<h3>"+msg.documents[0].authors+"</h3>");
});
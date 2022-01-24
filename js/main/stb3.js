$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"밤의 사색", size:"50"},
    headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
})
.done(function(msg) {
    console.log(msg);

    $(".stb3-1").append("<img src="+msg.documents[1].thumbnail+"/>");
    $(".stb3-1").append("<h2>"+msg.documents[1].title+"</h2>");
    $(".stb3-1").append("<h3>"+msg.documents[1].authors+"</h3>");
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"이정명", size:"50"},
    headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
})
.done(function(msg) {
    console.log(msg);

    $(".stb3-2").append("<img src="+msg.documents[2].thumbnail+"/>");
    $(".stb3-2").append("<h2>"+msg.documents[2].title+"</h2>");
    $(".stb3-2").append("<h3>"+msg.documents[2].authors+"</h3>");
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"작별 인사", size:"50"},
    headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
})
.done(function(msg) {
    console.log(msg);

    $(".stb3-3").append("<img src="+msg.documents[2].thumbnail+"/>");
    $(".stb3-3").append("<h2>"+msg.documents[2].title+"</h2>");
    $(".stb3-3").append("<h3>"+msg.documents[2].authors+"</h3>");
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"동물농장", size:"50"},
    headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
})
.done(function(msg) {
    console.log(msg);

    $(".stb3-4").append("<img src="+msg.documents[0].thumbnail+"/>");
    $(".stb3-4").append("<h2>"+msg.documents[0].title+"</h2>");
    $(".stb3-4").append("<h3>"+msg.documents[0].authors+"</h3>");
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"반 고흐", size:"50"},
    headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
})
.done(function(msg) {
    console.log(msg);

    $(".stb3-5").append("<img src="+msg.documents[0].thumbnail+"/>");
    $(".stb3-5").append("<h2>"+msg.documents[0].title+"</h2>");
    $(".stb3-5").append("<h3>"+msg.documents[0].authors+"</h3>");
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"차라투스트라", size:"50"},
    headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
})
.done(function(msg) {
    console.log(msg);

    $(".stb3-6").append("<img src="+msg.documents[0].thumbnail+"/>");
    $(".stb3-6").append("<h2>"+msg.documents[0].title+"</h2>");
    $(".stb3-6").append("<h3>"+msg.documents[0].authors+"</h3>");
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"유토피아", size:"50"},
    headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
})
.done(function(msg) {
    console.log(msg);

    $(".stb3-7").append("<img src="+msg.documents[0].thumbnail+"/>");
    $(".stb3-7").append("<h2>"+msg.documents[0].title+"</h2>");
    $(".stb3-7").append("<h3>"+msg.documents[0].authors+"</h3>");
});
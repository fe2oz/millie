$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query:"지적", size:"50"},
    headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
})
.done(function(msg) {
    console.log(msg);

    $("#stm1").append("<li>"+"<img src="+msg.documents[0].thumbnail+"/>"+"</li>");
    $("#stm1").append("<li>"+"<img src="+msg.documents[1].thumbnail+"/>"+"</li>");
    $("#stm1").append("<li>"+"<img src="+msg.documents[2].thumbnail+"/>"+"</li>");
    $("#stm1").append("<li>"+"<img src="+msg.documents[3].thumbnail+"/>"+"</li>");
    $("#stm1").append("<li>"+"<img src="+msg.documents[4].thumbnail+"/>"+"</li>");
    $("#stm1").append("<li>"+"<img src="+msg.documents[5].thumbnail+"/>"+"</li>");
    $("#stm1").append("<li>"+"<img src="+msg.documents[6].thumbnail+"/>"+"</li>");
    $("#stm1").append("<li>"+"<img src="+msg.documents[7].thumbnail+"/>"+"</li>");
    $("#stm1").append("<li>"+"<img src="+msg.documents[8].thumbnail+"/>"+"</li>");
    $("#stm1").append("<li>"+"<img src="+msg.documents[9].thumbnail+"/>"+"</li>");
    $("#stm1").append("<li>"+"<img src="+msg.documents[10].thumbnail+"/>"+"</li>");

    $("#stm1").append("<li>"+"<img src="+msg.documents[11].thumbnail+"/>"+"</li>");
    $("#stm1").append("<li>"+"<img src="+msg.documents[12].thumbnail+"/>"+"</li>");
    $("#stm1").append("<li>"+"<img src="+msg.documents[13].thumbnail+"/>"+"</li>");
    $("#stm1").append("<li>"+"<img src="+msg.documents[14].thumbnail+"/>"+"</li>");
    $("#stm1").append("<li>"+"<img src="+msg.documents[15].thumbnail+"/>"+"</li>");
    $("#stm1").append("<li>"+"<img src="+msg.documents[16].thumbnail+"/>"+"</li>");
    $("#stm1").append("<li>"+"<img src="+msg.documents[17].thumbnail+"/>"+"</li>");
    $("#stm1").append("<li>"+"<img src="+msg.documents[18].thumbnail+"/>"+"</li>");
    $("#stm1").append("<li>"+"<img src="+msg.documents[19].thumbnail+"/>"+"</li>");
    $("#stm1").append("<li>"+"<img src="+msg.documents[20].thumbnail+"/>"+"</li>");
    
    $("#stm1").append("<li>"+"<img src="+msg.documents[21].thumbnail+"/>"+"</li>");
    $("#stm1").append("<li>"+"<img src="+msg.documents[22].thumbnail+"/>"+"</li>");
    $("#stm1").append("<li>"+"<img src="+msg.documents[23].thumbnail+"/>"+"</li>");
    $("#stm1").append("<li>"+"<img src="+msg.documents[24].thumbnail+"/>"+"</li>");
    $("#stm1").append("<li>"+"<img src="+msg.documents[25].thumbnail+"/>"+"</li>");
    $("#stm1").append("<li>"+"<img src="+msg.documents[26].thumbnail+"/>"+"</li>");
    $("#stm1").append("<li>"+"<img src="+msg.documents[27].thumbnail+"/>"+"</li>");
    $("#stm1").append("<li>"+"<img src="+msg.documents[28].thumbnail+"/>"+"</li>");
    $("#stm1").append("<li>"+"<img src="+msg.documents[29].thumbnail+"/>"+"</li>");
    $("#stm1").append("<li>"+"<img src="+msg.documents[30].thumbnail+"/>"+"</li>");
});
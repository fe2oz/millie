$(document).ready(function(){
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"도리언 그레이의 초상"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            

        });

        $(function () {
          $.get("./test_txt/test.txt", function (data) {
            $("#tmpBox").html(data);
          })
  
        });
});

$(document).ready(function(){
    $("#so1 li").click(function(){
        $("#so1 li").removeClass("active");
        $(this).addClass("active");
    });


});

$(function(){
  $.get("text/txt.txt", function(data) {
    $(".section-two").html(data)
  });
});
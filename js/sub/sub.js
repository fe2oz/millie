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

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"오스카 와일드", size:"50"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".seven-2-1").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".seven-2-1").append("<span>"+msg.documents[0].title+"</span>");
            $(".seven-2-1").append("<label>"+"<div>"+msg.documents[0].price+"<span>"+"원"+"</span>"+"</div>"+"<div>"+msg.documents[0].sale_price+"<span>"+"원"+"</span>"+"</div>"+"</label>");
            $(".seven-2-2").append("<img src="+msg.documents[3].thumbnail+"/>");
            $(".seven-2-2").append("<span>"+msg.documents[3].title+"</span>");
            $(".seven-2-2").append("<label>"+"<div>"+msg.documents[3].price+"<span>"+"원"+"</span>"+"</div>"+"<div>"+msg.documents[0].sale_price+"<span>"+"원"+"</span>"+"</div>"+"</label>");
            $(".seven-2-3").append("<img src="+msg.documents[5].thumbnail+"/>");
            $(".seven-2-3").append("<span>"+msg.documents[5].title+"</span>");
            $(".seven-2-3").append("<label>"+"<div>"+msg.documents[5].price+"<span>"+"원"+"</span>"+"</div>"+"<div>"+msg.documents[0].sale_price+"<span>"+"원"+"</span>"+"</div>"+"</label>");
            $(".seven-2-4").append("<img src="+msg.documents[8].thumbnail+"/>");
            $(".seven-2-4").append("<span>"+msg.documents[8].title+"</span>");
            $(".seven-2-4").append("<label>"+"<div>"+msg.documents[8].price+"<span>"+"원"+"</span>"+"</div>"+"<div>"+msg.documents[0].sale_price+"<span>"+"원"+"</span>"+"</div>"+"</label>");
            $(".seven-2-5").append("<img src="+msg.documents[10].thumbnail+"/>");
            $(".seven-2-5").append("<span>"+msg.documents[10].title+"</span>");
            $(".seven-2-5").append("<label>"+"<div>"+msg.documents[10].price+"<span>"+"원"+"</span>"+"</div>"+"<div>"+msg.documents[0].sale_price+"<span>"+"원"+"</span>"+"</div>"+"</label>");
            $(".seven-2-6").append("<img src="+msg.documents[20].thumbnail+"/>");
            $(".seven-2-6").append("<span>"+msg.documents[20].title+"</span>");
            $(".seven-2-6").append("<label>"+"<div>"+msg.documents[20].price+"<span>"+"원"+"</span>"+"</div>"+"<div>"+msg.documents[0].sale_price+"<span>"+"원"+"</span>"+"</div>"+"</label>");
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"인간 실격"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-1-1").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-1-1").append("<span>"+msg.documents[0].title+"</span>");
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"죄와 벌"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-1-2").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-1-2").append("<span>"+msg.documents[0].title+"</span>");
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"해변의 카프카"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-1-3").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-1-3").append("<span>"+msg.documents[0].title+"</span>");
            $(".slides-1-4").append("<img src="+msg.documents[1].thumbnail+"/>");
            $(".slides-1-4").append("<span>"+msg.documents[1].title+"</span>");
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"지구 끝의 온실"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-1-5").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-1-5").append("<span>"+msg.documents[0].title+"</span>");
        });
    
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"아몬드"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-1-6").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-1-6").append("<span>"+msg.documents[0].title+"</span>");
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"밝은 밤"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-1-7").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-1-7").append("<span>"+msg.documents[0].title+"</span>");
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"옷소매 붉은"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-1-8").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-1-8").append("<span>"+msg.documents[0].title+"</span>");
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"허상의 어릿광대"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-1-9").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-1-9").append("<span>"+msg.documents[0].title+"</span>");
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"1984"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-1-10").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-1-10").append("<span>"+msg.documents[0].title+"</span>");
        });

     $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"장미의 이름은 장미"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-1-11").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-1-11").append("<span>"+msg.documents[0].title+"</span>");
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"완전한 행복"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-1-12").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-1-12").append("<span>"+msg.documents[0].title+"</span>");
        });
});

$(document).ready(function(){
    $("#so1 li").click(function(){
        $("#so1 li").removeClass("active");
        $(this).addClass("active");
    });

    $(document).scroll(function(){
      var scroll_value = $(this).scrollTop();
        if(scroll_value > 6000){
          $("#so1 li:nth-of-type(2)").addClass("active");
          $("#so1 li:nth-of-type(1)").removeClass("active");
        }else{
          $("#so1 li:nth-of-type(1)").addClass("active");
          $("#so1 li:nth-of-type(2)").removeClass("active");
        }
    });

    $("#next").click(function(){
      next();
    });
    $("#prev").click(function(){
      prev();
    });

    function next(){
      var slidesOne_value = $("#s1").width();
      $(".slides-1 ul:first").stop().animate({marginLeft:-slidesOne_value}, function(){
        $(".slides-1 ul:last").appendTo(".slides-1");
      });
    }
});


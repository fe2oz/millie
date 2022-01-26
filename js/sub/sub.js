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

            $(".slides-1-1-1").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-1-1-1").append("<span>"+msg.documents[0].title+"</span>");
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"죄와 벌"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-1-1-2").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-1-1-2").append("<span>"+msg.documents[0].title+"</span>");
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"해변의 카프카"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-1-1-3").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-1-1-3").append("<span>"+msg.documents[0].title+"</span>");
            $(".slides-1-1-4").append("<img src="+msg.documents[1].thumbnail+"/>");
            $(".slides-1-1-4").append("<span>"+msg.documents[1].title+"</span>");
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"지구 끝의 온실"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-1-1-5").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-1-1-5").append("<span>"+msg.documents[0].title+"</span>");
        });
    
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"아몬드"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-1-1-6").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-1-1-6").append("<span>"+msg.documents[0].title+"</span>");
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"밝은 밤"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-1-2-7").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-1-2-7").append("<span>"+msg.documents[0].title+"</span>");
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"옷소매 붉은"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-1-2-8").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-1-2-8").append("<span>"+msg.documents[0].title+"</span>");
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"허상의 어릿광대"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-1-2-9").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-1-2-9").append("<span>"+msg.documents[0].title+"</span>");
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"1984"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-1-2-10").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-1-2-10").append("<span>"+msg.documents[0].title+"</span>");
        });

     $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"장미의 이름은 장미"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-1-2-11").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-1-2-11").append("<span>"+msg.documents[0].title+"</span>");
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"완전한 행복"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-1-2-12").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-1-2-12").append("<span>"+msg.documents[0].title+"</span>");
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"죄와 벌"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-2-1-1").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-2-1-1").append("<span>"+msg.documents[0].title+"</span>");
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"셰익스피어"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-2-1-2").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-2-1-2").append("<span>"+msg.documents[0].title+"</span>");
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"연금술사"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-2-1-3").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-2-1-3").append("<span>"+msg.documents[0].title+"</span>");
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"만년"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-2-1-4").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-2-1-4").append("<span>"+msg.documents[0].title+"</span>");
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"사양"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-2-1-5").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-2-1-5").append("<span>"+msg.documents[0].title+"</span>");
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"웃음과 망각"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-2-1-6").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-2-1-6").append("<span>"+msg.documents[0].title+"</span>");
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"카라마조프"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-2-2-7").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-2-2-7").append("<span>"+msg.documents[0].title+"</span>");
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"안나 카레니나"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-2-2-8").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-2-2-8").append("<span>"+msg.documents[0].title+"</span>");
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"1984"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-2-2-9").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-2-2-9").append("<span>"+msg.documents[0].title+"</span>");
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"셰익스피어"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-2-2-10").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-2-2-10").append("<span>"+msg.documents[0].title+"</span>");
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"만년"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-2-2-11").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-2-2-11").append("<span>"+msg.documents[0].title+"</span>");
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"사양"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-2-2-12").append("<img src="+msg.documents[2].thumbnail+"/>");
            $(".slides-2-2-12").append("<span>"+msg.documents[2].title+"</span>");
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"오스카 와일드 작품선"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-3-1-1").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-3-1-1").append("<span>"+msg.documents[0].title+"</span>");
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"거인의 포트폴리오"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-3-1-2").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-3-1-2").append("<span>"+msg.documents[0].title+"</span>");
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"시크릿"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-3-1-3").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-3-1-3").append("<span>"+msg.documents[0].title+"</span>");
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"불변사를 철저하게"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-3-1-4").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-3-1-4").append("<span>"+msg.documents[0].title+"</span>");
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"영어 전치사"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-3-1-5").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-3-1-5").append("<span>"+msg.documents[0].title+"</span>");
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"미국 영어발음"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-3-1-6").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-3-1-6").append("<span>"+msg.documents[0].title+"</span>");
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"세진 쌤의"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-3-2-7").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-3-2-7").append("<span>"+msg.documents[0].title+"</span>");
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"The House on"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-3-2-8").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-3-2-8").append("<span>"+msg.documents[0].title+"</span>");
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"가치 투자의"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-3-2-9").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-3-2-9").append("<span>"+msg.documents[0].title+"</span>");
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"마우스 브리더"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-3-2-10").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-3-2-10").append("<span>"+msg.documents[0].title+"</span>");
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"멀리 나는 새는 집이"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-3-2-11").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-3-2-11").append("<span>"+msg.documents[0].title+"</span>");
        });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"앉은뱅이꽃"},
        headers: {Authorization: "KakaoAK 58f6d0b6aa8f0767623a8d35f4ef2f61"}
      })
        .done(function( msg ) {
            console.log(msg);

            $(".slides-3-2-12").append("<img src="+msg.documents[0].thumbnail+"/>");
            $(".slides-3-2-12").append("<span>"+msg.documents[0].title+"</span>");
        });
});

$(document).ready(function(){
    $("#so1 li").click(function(){
        $("#so1 li").removeClass("active");
        $(this).addClass("active");
    });

    $(document).scroll(function(){
      var scroll_value = $(this).scrollTop();
        if(scroll_value > 0){ //책정보
          $("#so1 li:nth-of-type(1)").addClass("active");
          $("#so1 li:nth-of-type(2)").removeClass("active");
          $("#so1 li:nth-of-type(3)").removeClass("active");
          $("#so1 li:nth-of-type(4)").removeClass("active");
          $("#so1 li:nth-of-type(5)").removeClass("active");
        }

        if(scroll_value > 5600){ //이벤트 기획전
          $("#so1 li:nth-of-type(2)").addClass("active");
          $("#so1 li:nth-of-type(1)").removeClass("active");
          $("#so1 li:nth-of-type(3)").removeClass("active");
          $("#so1 li:nth-of-type(4)").removeClass("active");
          $("#so1 li:nth-of-type(5)").removeClass("active");
        }

        if(scroll_value > 6000){ // 추천도서
          $("#so1 li:nth-of-type(3)").addClass("active");
          $("#so1 li:nth-of-type(1)").removeClass("active");
          $("#so1 li:nth-of-type(2)").removeClass("active");
          $("#so1 li:nth-of-type(4)").removeClass("active");
          $("#so1 li:nth-of-type(5)").removeClass("active");
        }

        if(scroll_value > 7000){ // 리뷰
          $("#so1 li:nth-of-type(4)").addClass("active");
          $("#so1 li:nth-of-type(1)").removeClass("active");
          $("#so1 li:nth-of-type(2)").removeClass("active");
          $("#so1 li:nth-of-type(3)").removeClass("active");
          $("#so1 li:nth-of-type(5)").removeClass("active");
        }

        if(scroll_value > 7800){ // 리뷰
          $("#so1 li:nth-of-type(5)").addClass("active");
          $("#so1 li:nth-of-type(1)").removeClass("active");
          $("#so1 li:nth-of-type(2)").removeClass("active");
          $("#so1 li:nth-of-type(3)").removeClass("active");
          $("#so1 li:nth-of-type(4)").removeClass("active");
        }

    });

    $("#next").click(function(){
      next();
    });
    $("#prev").click(function(){
      prev();
    });

    $("#next1").click(function(){
      nextOne();
    });
    $("#prev1").click(function(){
      prevTwo();
    });

    $("#next2").click(function(){
      nextTwo();
    });
    $("#prev2").click(function(){
      prevThree();
    });

    function next(){
      var slidesOne_value = $(".slides-1-1").width();
      $("#s1").stop().animate({marginLeft: -slidesOne_value}, 800, function(){
        $("#s1 li:first").appendTo("#s1");
        $("#s1").css({marginLeft:0})
      });
    }

    function prev(){
      var slidesOne_value = $(".slides-1-2").width();
      $("#s1 li:last").prependTo("#s1");
      $("#s1").css({marginLeft: -slidesOne_value});
      $("#s1").stop().animate({marginLeft:0}, 800)
    }

    function nextOne(){
      var slidesOne_value = $(".slides-1-1").width();
      $("#s2").stop().animate({marginLeft: -slidesOne_value}, 800, function(){
        $("#s2 li:first").appendTo("#s2");
        $("#s2").css({marginLeft:0})
      });
    }

    function prevTwo(){
      var slidesOne_value = $(".slides-1-2").width();
      $("#s2 li:last").prependTo("#s2");
      $("#s2").css({marginLeft: -slidesOne_value});
      $("#s2").stop().animate({marginLeft:0}, 800)
    }

    function nextTwo(){
      var slidesOne_value = $(".slides-1-1").width();
      $("#s3").stop().animate({marginLeft: -slidesOne_value}, 800, function(){
        $("#s3 li:first").appendTo("#s3");
        $("#s3").css({marginLeft:0})
      });
    }

    function prevThree(){
      var slidesOne_value = $(".slides-1-2").width();
      $("#s3 li:last").prependTo("#s3");
      $("#s3").css({marginLeft: -slidesOne_value});
      $("#s3").stop().animate({marginLeft:0}, 800)
    }

});


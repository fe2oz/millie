$(document).ready(function(){
    var chars = $('#snmp1 li').width();

    $("#snmt1 li:nth-of-type(1)").click(function(){
        $("#snmp1").stop().animate({marginLeft: 0});
    });

    $("#snmt1 li:nth-of-type(2)").click(function(){
        $("#snmp1").stop().animate({marginLeft: -chars});
    });

    $("#snmt1 li:nth-of-type(3)").click(function(){
        $("#snmp1").stop().animate({marginLeft: -chars * 2});
    });

    $("#snmt1 li:nth-of-type(4)").click(function(){
        $("#snmp1").stop().animate({marginLeft: -chars * 3});
    });

    $("#snmt2 li:nth-of-type(1)").click(function(){
        $("#snmp2").stop().animate({marginLeft: 0});
    });

    $("#snmt2 li:nth-of-type(2)").click(function(){
        $("#snmp2").stop().animate({marginLeft: -chars});
    });

    $("#snmt2 li:nth-of-type(3)").click(function(){
        $("#snmp2").stop().animate({marginLeft: -chars * 2});
    });

    $("#snmt2 li:nth-of-type(4)").click(function(){
        $("#snmp2").stop().animate({marginLeft: -chars * 3});
    });

    $("#snmt3 li:nth-of-type(1)").click(function(){
        $("#snmp3").stop().animate({marginLeft: 0});
    });

    $("#snmt3 li:nth-of-type(2)").click(function(){
        $("#snmp3").stop().animate({marginLeft: -chars});
    });

    $("#snmt3 li:nth-of-type(3)").click(function(){
        $("#snmp3").stop().animate({marginLeft: -chars * 2});
    });
    
});
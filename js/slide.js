$(document).ready(function(){
    var lis = document.getElementById("snmt1");
    var lisNum = lis.getElementsByTagName("li");
    lisNum = 0;

    const imgLis = document.getElementById("snmp1");
    const imgLisNum = imgLis.getElementsByTagName("li");

        for(var i=0; i<lisNum.length; i++){
            lisNum.onclick = function(){
                alert(i)
            }
        }

});
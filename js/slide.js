$(document).ready(function(){
    var lis,
        lisNum;
        imgLis,
        imgLisNum

    lis = document.getElementById("snmt1");
    lisNum = lis.children();
    imgLis = document.getElementById("snmp1");
    imgLisNum = imgLis.children();

    for(var i=0; i<lisNum.length; i++){
        lisNum[i].addEventListener("click", function(){
            for(var j=0; j<imgLisNum.length; j++){
                imgLisNum[j].style.left = "-200px";
            }
        });
    }
});
$(document).ready(function(){
    const lis,
        lisNum,
        imgLis,
        imgLisNum

    lis = document.getElementById("snmt1");
    lisNum = lis.children;
    imgLis = document.getElementById("snmp1");
    imgLisNum = imgLis.children;

    lisNum.addEventListener("click", function(){
        alert(lisNum.index)
    })
});
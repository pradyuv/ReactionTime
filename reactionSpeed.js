
window.onload=appear();
var start;
var reacted;
    

function appear(){
    var randomY=Math.random()*(innerHeight/2)
    var randomX=Math.random()*innerWidth
    var randomHeight, randomWidth =Math.random()*200
    document.getElementById("reactBox").style.display='block';
    document.getElementById("reactBox").style.top=randomY+'px'
    document.getElementById("reactBox").style.left=randomX+"px"
   


    start=Date.now();
    
}
function disappear(){
    document.getElementById("reactBox").style.display='none';
    reacted =Date.now();
    var reactTime = (reacted-start)/1000;
    document.getElementById("reactTime").innerHTML=reactTime +" seconds!";
    var randomDelay=((Math.random()*3))*1000
    setTimeout(appear,randomDelay);
}

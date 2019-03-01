function rolldice() {
    var p1=document.getElementById("p1-score");
    var c1=document.getElementById("c0-score");
    var player1=Math.floor(Math.random() *6 +1);
    p1.innerHTML=player1;
    if(player1=== 0){
        $(".btn1").hide()
        $(".btn2").show()
    }
function roll() {
    var p2=document.getElementById("p2-score");
    var c2=document.getElementById("c1-score");
    var player2=Math.floor(Math.random() *6 +1);
    p2.innerHTML=player2;
    if(player2===0){
        $(".btn2").hide
        $(".btn1").show
    }
}
}


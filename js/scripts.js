 function dice(){
    return Math.floor(Math.random() *6) +1;
}
   $(document).ready(function() {
   $("#roll").click(function(){
    var num = dice();
    if(num == 1){
        $(".btn2").show();
        $(".btn1").hide();
        
    }
    $("#p1-score").text(num)

    $("#rollDice").click(function(){
    var num = dice();
    if(num == 1){
        $(".btn1").show();
        $(".btn2").hide();
    }
    $("#p2-score").text(num)
    
    })
    
    })
   })

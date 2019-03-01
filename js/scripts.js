 function dice(){
    return Math.floor(Math.random() *6) +1;
}
   $(document).ready(function() {
   $("#roll").click(function(){
    var num1 = dice();
    $("#p1-score").text(num1)
    if(num1 == 1){
        $(".btn2").show();
        $(".btn1").hide();
        
    }
})
    

    $("#rollDice").click(function(){
    var num2 = dice();
    $("#p2-score").text(num2)
    if(num2 == 1){
        $(".btn1").show();
        $(".btn2").hide();
    }
    
    
    })
    
    
   })

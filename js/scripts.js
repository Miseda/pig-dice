 function dice(){
    return Math.floor(Math.random() *6) +1;
}
   $(document).ready(function() {
   $("#roll").click(function(){
    var num1 = dice();
    $("#p1-score").text(num1)
    $("#c0-score").text(total)
    var total= 0;
    var num1A= [dice()];

    if(num1 == 1){
        $(".btn2").show();
        $(".btn1").hide();
    }else{
      num1A.forEach(function(num){
        total += num;
      });
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

    document.getElementById("hold")
    $("#hold").click(function(){
      $(".btn1").hide();
      $(".btn2").show();
      $("#hold2").show();
      $("#hold").hide();
    })

    $("#hold2").click(function(){
      $(".btn1").show();
      $(".btn2").hide();
      $("#hold").show();
      $("#hold2").hide();


    });
    $("form#gaming").submit(function(event){
      event.preventDefault();
    });
    var p1Name = parseInt($("input#p1N").val());
    var p2Name = parseInt($("input#p2N").val());

    $("#entry").click(function(){
    $(".game").show();
    $(".opening").hide();
    $("#p1-name").text(p1Name);
    $("#p2-name").text(p1Name);
    });

   $("#newGame").click(function(){
    $(".game").hide();
    $(".opening").show();


  });



   })

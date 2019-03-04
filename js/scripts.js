 function dice(){
    return Math.floor(Math.random() *6) +1;
}
var total = [];

   $(document).ready(function() {
   $("#roll").click(function(){
    var num1 = dice();
    total.push(num1);
    var add= 0;
    total.forEach(function(tot){
      add += tot
    });
    $("#p1-score").text(num1)
    $("#c0-score").text(add)



    if(num1 == 1){
        $(".btn2").show();
        $(".btn1").hide();
        add = 0
        $("#c0-score").text(add);
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
      var p1Name = $("input#p1N").val();
      var p2Name = $("input#p2N").val();
      $("#p1-name").text(p1Name);
      $("#p2-name").text(p2Name);
      $(".game").show();
      $(".opening").hide();
    });




   $("#newGame").click(function(){
    $(".game").hide();
    $(".opening").show();


  });



   })

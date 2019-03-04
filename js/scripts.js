 function dice(){
    return Math.floor(Math.random() *6) +1;
}
function empty(){
  total = [];
  total2 = [];
}


var total = [];
var total2 = [];

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
        empty(total)
        $("#c0-score").text(add);
    }else if (add >= 100)
      alert("You are the winner!!!")

})



    $("#rollDice").click(function(){
    var num2 = dice();
    total2.push(num2);
    var adds = 0;

    total2.forEach(function(tots){
    adds += tots ;
    });
    $("#p2-score").text(num2)
    $("#c1-score").text(adds);


    if(num2 == 1){
        $(".btn1").show();
        $(".btn2").hide();
        add2 = 0
        empty(total2);
        $("#c1-score").text(add2)
    }
    else if ( adds >= 100)
      alert("You are the winner!!!")

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
    $("#p1-score").text(0);
    $("#c0-score").text(0);
    $("#p2-score").text(0);
    $("#c1-score").text(0);
    $(".btn1").show();
    $(".btn2").hide();
    total.length = 0;
    total2.length = 0;
    function resetFields() {
    $("#p1N").val("");
    $("#p2N").val("");
}

  });



   })

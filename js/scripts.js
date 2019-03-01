function dice(){
    return Math.floor(Math.random() *6) +1
}
   $(document).ready(function() {
   $("button#roll").click(function(){
    $("#p1-score").text(dice())
    })
   })

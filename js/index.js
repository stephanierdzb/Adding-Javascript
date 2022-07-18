//var gridcontainer = document.getElementsByClassName("grid-container1");
//var x = document.getElementsByTagName("BODY")[0];

//$(document).ready(function(){
//    $(".button").click(function(){
 // $(".grid-container1").fadeIn(3000);
 // });  
//});  

//window.onload = function() {
    //if (window.jQuery) {  
      // jQuery is loaded  
        //alert("Yeah!");
   // } else {
        // jQuery is not loaded
       // alert("Doesn't Work");
   //// }
//}

//window.onload = function() {
  //gridcontainer.style   
  //setTimeout(gridcontainer, 3000) 

////}

//unction fade(gridcontainer) {
   // var op = 1;  // initial opacity
    //var timer = setInterval(function () {
        //if (op <= 0.1){
            //clearInterval(timer);
           // gridcontainer.style.display = 'none';
       // }
        //gridcontainer.style.opacity = op;
        //gridcontainer.style.filter = 'alpha(opacity=' + op * 100 + ")";
        //op -= op * 0.1;
    //}, 50);
//

console.log("your index.js file is loaded correctly");

$(".dropdown").on("click", function(){
    $('.menuItems').slideToggle();
});
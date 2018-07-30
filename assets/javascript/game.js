
var heroSelected = false;
var enemySelected = false;


$('#luke').click(function(){
   // $(this).data('clicked', true);
   // console.log(true);
   if(heroSelected){
        enemySelected = true;
        $("#luke").appendTo($("#chooseEnemy"));
   }else{
       heroSelected = true;
       $("#luke").appendTo($("#Your-Character"));
   }
});

$('#mara').click(function(){
    // $(this).data('clicked', true);
    // console.log(true);
    if(heroSelected){
         enemySelected = true;
         $("#mara").appendTo($("#chooseEnemy"));
    }else{
        heroSelected = true;
        $("#mara").appendTo($("#Your-Character"));
    }
 });

//  $('#luke').click(function(){
//     // $(this).data('clicked', true);
//     // console.log(true);
//     if(heroSelected){
//          enemySelected = true;
//          $("#luke").appendTo($("#chooseEnemy"));
//     }else{
//         heroSelected = true;
//         $("#luke").appendTo($("#Your-Character"));
//     }
//  });

//  $('#luke').click(function(){
//     // $(this).data('clicked', true);
//     // console.log(true);
//     if(heroSelected){
//          enemySelected = true;
//          $("#luke").appendTo($("#chooseEnemy"));
//     }else{
//         heroSelected = true;
//         $("#luke").appendTo($("#Your-Character"));
//     }
//  });

//var lukeClicked = false;


//$(document).ready(function() {
//hide resart
    //$("#restart").hide();
    //var lukeClicked = false;
//move characters on click

   // $("#luke").click(function(){
  //      lukeClicked = true;
//    });

   // if(lukeClicked) {
        //clicked element, do-some-stuff
 //       console.log("luke");
  //  }
//})













//if($("#luke").click(function(){
  //  $("#luke").appendTo($("#Your-Character"))
//})) { $("#mara").click(function(){
 //   $("#mara").appendTo($("#chooseEnemy"));
   // })
    //$("#kyle").click(function(){
    //$("#kyle").appendTo($("#chooseEnemy"));
   // })
   // $("#kiadimundi").click(function(){
    //$("#kiadimundi").appendTo($("#chooseEnemy"));
    //})

//};




   // $("#luke").click(function(){
     //   $("#luke").appendTo($("#Your-Character"));
   // })
   // $("#mara").click(function(){
       // $("#mara").appendTo($("#Your-Character"));
   // })
   // $("#kyle").click(function(){
     //   $("#kyle").appendTo($("#Your-Character"));
    //})
    //$("#kiadimundi").click(function(){
      //  $("#kiadimundi").appendTo($("#Your-Character"));
    //})
//});
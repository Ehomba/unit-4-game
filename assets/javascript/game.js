
var heroSelected = false;
var enemySelected = false;

function Character( name, health, offense, defense ){
    this.name = name
    this.health = health
    this.offense = offense
    this.defense = defense
    // this.sayName = function(){
    //     console.log('Hello my name is ' + this.name);
    // }
}


var lukeSkyWalker = new Character('Luke Skywalker', 200, 15, 25);
var marajade = new Character('Mara Jade', 220, 5, 20);
var kylekatarn = new Character('Kyle Katarn', 180, 25, 20);
var kiadimundi = new Character('Ki-Adi-Mundi', 160, 40, 20);


var characterRooster = [ lukeSkyWalker, marajade, kylekatarn, kiadimundi ];

//hide reset and attack buttons on document load 
$(document).ready(function() {
    $('#restart').hide();
    if(!enemySelected) {
        $('#attack').hide();
    }
 });

//reload document on reset button click
$("#restart").click(function() {
    location.reload();
  });

$('#luke').click(function(){
   // $(this).data('clicked', true);
   // console.log(true);
   if(!heroSelected){
        heroSelected = lukeSkyWalker;
        $("#luke").appendTo($("#Your-Character"));
        $("#mara").appendTo($("#chooseEnemy"))
        $("#kyle").appendTo($("#chooseEnemy"))
        $("#kiadimundi").appendTo($("#chooseEnemy"))
   }else if( heroSelected &&  heroSelected != lukeSkyWalker && !enemySelected){
        enemySelected = lukeSkyWalker;
       $("#luke").appendTo($("#defender"));
       $('#attack').show();
   }
});

$('#mara').click(function(){
    // $(this).data('clicked', true);
    // console.log(true);
    if(!heroSelected){
        heroSelected = marajade;
        $("#mara").appendTo($("#Your-Character"));
        $("#luke").appendTo($("#chooseEnemy"))
        $("#kyle").appendTo($("#chooseEnemy"))
        $("#kiadimundi").appendTo($("#chooseEnemy"))
   }else if( heroSelected && heroSelected != marajade && !enemySelected){
        enemySelected = marajade;
       $("#mara").appendTo($("#defender"));
       $('#attack').show();
   }
 });

 $('#kyle').click(function(){
    // $(this).data('clicked', true);
    // console.log(true);
    if(!heroSelected){
        heroSelected = kylekatarn;
        $("#kyle").appendTo($("#Your-Character"));
        $("#luke").appendTo($("#chooseEnemy"))
        $("#mara").appendTo($("#chooseEnemy"))
        $("#kiadimundi").appendTo($("#chooseEnemy"))
   }else if( heroSelected && heroSelected != kylekatarn && !enemySelected){
        enemySelected = kylekatarn;
       $("#kyle").appendTo($("#defender"));
       $('#attack').show();
   }
 });

 $('#kiadimundi').click(function(){
    // $(this).data('clicked', true);
    // console.log(true);
    if(!heroSelected){
        heroSelected = kiadimundi;
        $("#kiadimundi").appendTo($("#Your-Character"));
        $("#luke").appendTo($("#chooseEnemy"))
        $("#mara").appendTo($("#chooseEnemy"))
        $("#kyle").appendTo($("#chooseEnemy"))
   }else if( heroSelected && heroSelected != kiadimundi && !enemySelected){
        enemySelected = kiadimundi;
       $("#kiadimundi").appendTo($("#defender"));
       $('#attack').show();
   }
 });

 //attack

 $('#attack').click(function(){
    //losing health
    var enemyHP = enemySelected.health -= heroSelected.offense;
    var newHP = heroSelected.health -= enemySelected.defense

    document.getElementById("game-message").innerHTML = "You dealt " + heroSelected.offense + " damage to " + enemySelected.name + "<div>" + 
    enemySelected.name + " dealt " + enemySelected.defense + " to " + heroSelected.name;
    


    //adding to hero attack power, and not being able to do it without an enemy 
    if(heroSelected === lukeSkyWalker && enemySelected != false) {
        heroSelected.offense += 10;
        console.log(heroSelected.offense)
        document.getElementById("lukeHealth").innerHTML = newHP;
    }
    if(heroSelected === marajade && enemySelected != false) {
        heroSelected.offense += 10;
        document.getElementById("maraHealth").innerHTML = newHP;
    }
    if(heroSelected === kylekatarn && enemySelected != false) {
        heroSelected.offense += 10;
        document.getElementById("kyleHealth").innerHTML = newHP;
    }
    if(heroSelected === kiadimundi && enemySelected != false) {
        heroSelected.offense += 15;
        document.getElementById("kiHealth").innerHTML = newHP;
    }

    //enemy health
    if(enemySelected === marajade){
        document.getElementById("maraHealth").innerHTML = enemyHP;
        }
    if(enemySelected === lukeSkyWalker){
        document.getElementById("lukeHealth").innerHTML = enemyHP;
        
    }
    if(enemySelected === kylekatarn){
        document.getElementById("kyleHealth").innerHTML = enemyHP;
        }
    if(enemySelected === kiadimundi){
        document.getElementById("kiHealth").innerHTML = enemyHP;
        }

    //make those enemies dissappear!
    if(enemySelected === marajade && enemySelected.health <= 0){
        $("#mara").hide();
        enemySelected = false;
    }
    if(enemySelected === lukeSkyWalker && enemySelected.health <= 0){
        $("#luke").hide();
        enemySelected = false;
    }
    if(enemySelected === kylekatarn && enemySelected.health <= 0){
        $("#kyle").hide();
        enemySelected = false;
    }
    if(enemySelected === kiadimundi && enemySelected.health <= 0){
        $("#kiadimundi").hide();
        enemySelected = false;
    }

    //what happens when you lose
    if(heroSelected.health <= 0 && $('#defender > :hidden').length != 3) {
        document.getElementById("game-message").innerHTML = "Sorry! Try a different Character or Enemy order!";
        $('#attack').hide();
        $('#restart').show();
    }
    
    //what happens when you win
    if($('#defender > :hidden').length === 3) {
        document.getElementById("game-message").innerHTML = "You win! Restart to play again!";
        $('#restart').show();

    }
      console.log(enemySelected.health, 'enemy health');
      console.log(heroSelected.health, 'hero health');
      console.log(heroSelected.offense, 'hero attack');
 });
let buttonColors = ["red", "blue", "green", "yellow"]

var gamePattern = [];
var userClickedPattern = [];


var started = false;

var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});


$(".btn").click(function(){
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  checkAnswer(userClickedPattern.length-1);

  playsound(userChosenColor);
  animatePress(userChosenColor);
});

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
      console.log("success");
    }
    if (userClickedPattern.length === gamePattern.length){
        setTimeout(function(){
          nextSequence();
        }, 1000);
    }
    else{
      console.log("wrong");
    }
}

userClickedPattern = [];

function nextSequence(){

    level++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.random();
    var randomNumber = Math.floor(randomNumber*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playsound(randomChosenColor);


    }



function playsound(name){
  var audio = new Audio("sounds/" + name + ".mp3")
  audio.play();
}

function animatePress(currentColor){
  $("#" + currentColor).addClass("pressed");

  setTimeout (function (){
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

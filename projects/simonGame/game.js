let array = ["red","blue","green","yellow"];
let gamePattern = [];
let userClickPattern =[];

let level = 0;
let start = 0;


$(".btn").click(function (){
  var userChosenColor = $(this).attr("id");
  userClickPattern.push(userChosenColor);
  animatePress(userChosenColor);
  playSound(userChosenColor);
  checkPattern(userClickPattern.length-1);
});

function checkPattern(currLength){
  if(gamePattern[currLength]===userClickPattern[currLength]){
    if(gamePattern.length===userClickPattern.length){
      setTimeout(function (){
        nextSequence();
      },1000);
    }
  }
  else{
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    startOver();
  }
}

$(document).on("keypress",function(){
  if(start===0){
    nextSequence();
    start=1;
  }
});

function nextSequence(){
  userClickPattern = [];
  level++;
  $("#level-title").text("Level "+level);
  let randomNumber = Math.floor(Math.random()*4);
  let randomChosenColor = array[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
  animatePress(randomChosenColor);
  playSound(randomChosenColor);
}

function animatePress(name){
  $("#"+name).fadeOut(100).fadeIn(100);
}
function playSound(name){
  let audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}
function startOver(){
  start = 0;
  gamePattern = [];
  level = 0;
}

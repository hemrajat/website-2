var pressed=0;
var clas;
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var button = this.innerHTML;
    playSound(button);
    animation(button);
  });
}
function animation(key){
  document.querySelector("."+key).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+key).classList.remove("pressed");
  }, 100);
}
function playSound(key){
  switch (key) {
    case ("w"):
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case ("a"):
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case ("s"):
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case ("d"):
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case ("j"):
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case ("k"):
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case ("l"):
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    default:

  }
}
document.addEventListener("keypress",function(event){
  var ek = event.key;
  animation(event.key);
  playSound(event.key);
})

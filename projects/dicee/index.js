document.querySelector(".throw").addEventListener("click",function (){
  var randomNumber1 = Math.ceil(Math.random()*6);
  var randomNumber2 = Math.ceil(Math.random()*6);
  // alert(randomNumber1);
  // alert(randomNumber2);
  function setImage(number,image_class){
      var image = "images/dice"+number+".png";
      document.querySelector(image_class).src = image;
  }

  if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = "Player 1 wins";
  }
  else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent = "Player 2 wins";
  }
  else{
    document.querySelector("h1").textContent = "Draw";
  }

  setImage(randomNumber1,".img1");
  setImage(randomNumber2,".img2");

});

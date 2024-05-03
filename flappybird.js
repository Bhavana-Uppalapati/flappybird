const space= document.getElementById("space");
var result = document.getElementById("result_box");
var text = document.getElementById("text");
var game  = document.getElementById("game");
var bird = document.getElementById('bird')
var block = document.getElementById("block")
// let game_msg = document.getElementById('h1')
var jumping = 0;
var score = 0;

//animation 

space.addEventListener("animationiteration", hole)

function hole(){
    var random = -((Math.random()*350) +150)
   space.style.top = random + "px"
   score++;
}

//fall and game over
 var fall = setInterval(function(){
     var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
      if(jumping == 0)
      {bird.style.top = (birdTop + 2) + "px";}

      var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))
      var spaceTop = parseInt(window.getComputedStyle(space).getPropertyValue("top"))
      var hTop = (500 + spaceTop);
      if((birdTop > 450) || ((blockLeft<50)&& (blockLeft > -50) && ((birdTop < hTop) || (birdTop > hTop + 100 )))){
          result.style.display = "block";
          text.innerText = `Score : ${score}`;
          score = 0;
        clearInterval(fall)
         
}
},10)
//jump
function jump(){
   jumping = 1;

   var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
   if(birdTop > 6){bird.style.top = (birdTop - 60 ) + "px"}

   setTimeout(function(){
       jumping = 0
   }, 100)
}

window.addEventListener("keydown", jump)

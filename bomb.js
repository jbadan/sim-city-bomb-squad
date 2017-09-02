document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded");
});

var bombDefused = false;
var bombActive = true; 
var clockRunning = true; 
var startTime = 30; 
var startMilli = 999;


var background = document.getElementById("background");
var blue = document.getElementById("blue");
var green = document.getElementById("green");
var red = document.getElementById("red");
var white = document.getElementById("white");
var yellow = document.getElementById("yellow");
var colorArray = [blue, green, red, white, yellow];


var colorsThatEqualOne = [];
var colorsThatEqualTwo = [];

//clock countdown - milliseconds broken :(
function countDown(){
  if(clockRunning === true){
    var counterLoop = setInterval(function(){
      var seconds = startTime--;
      var milliseconds = startMilli--;
      document.getElementById("timer").textContent = "0:00:"+seconds+"."+milliseconds;
      document.getElementById("timer").style.color = "red";
      if(seconds ===0 || clockRunning === false){
          clearInterval(counterLoop);
          setTimeout(function(){
            background.style.backgroundImage = "url('img/explosion.jpg')"}, 750);
        };
      }, 1000);
    };
  }

//creates two arrays: colorsThatEqualOne and colorsThatEqualTwo
function giveRandomValue(){
  for(i = 0; i < colorArray.length; i++){
    if(Math.floor((Math.random()*2)+1) === 1){
      colorsThatEqualOne.push(colorArray[i]);
    }else{
      colorsThatEqualTwo.push(colorArray[i]);
    }
  };
}
// keep adding what happens with if it is in the array
if(colorsThatEqualOne.includes(blue)){
  blue.src = "img/cut-blue-wire.png";
}

blue.onclick = function(){
  blue.src = "img/cut-blue-wire.png";
  if(blueRandomNumber === 2){
    clockRunning = false;
  }; 
}

red.onclick = function(){
  red.src = "img/cut-red-wire.png";
  var randomNumber = Math.floor((Math.random()*2)+1); 
  if(redRandomNumber === 2){
    clockRunning = false;
  }; 
}
green.onclick = function(){
  green.src = "img/cut-green-wire.png";
  var randomNumber = Math.floor((Math.random()*2)+1); 
  if(greenRandomNumber === 2){
    clockRunning = false;
  }; 
}
white.onclick = function(){
  white.src = "img/cut-white-wire.png";
  var randomNumber = Math.floor((Math.random()*2)+1); 
  if(whiteRandomNumber === 2){
    clockRunning = false;
  }; 
}
yellow.onclick = function(){
  yellow.src = "img/cut-yellow-wire.png";
  var randomNumber = Math.floor((Math.random()*2)+1); 
  if(yellowRandomNumber === 2){
    clockRunning = false;
  }; 
};

countDown();
giveRandomValue();
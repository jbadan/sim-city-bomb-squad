document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded");
});

var bombDefused = false;
var clockRunning = true; 
var startTime = 30; 
var startMilli = 999;


var background = document.getElementById("background");
var time = document.getElementById("timer");
var blue = document.getElementById("blue");
var green = document.getElementById("green");
var red = document.getElementById("red");
var white = document.getElementById("white");
var yellow = document.getElementById("yellow");
var colorArray = [blue, green, red, white, yellow];
var reset = document.getElementById("reset"); 

var clicked = [
  {blue: false},
  {red: false},
  {green: false},
  {white: false},
  {yellow: false}
]

var colorsThatEqualOne = [];
var colorsThatEqualTwo = [];
var clickedAndOne =[];


//clock countdown - milliseconds broken :(
function countDown(){
  if(clockRunning === true){
    var counterLoop = setInterval(function(){
      var seconds = startTime--;
      document.getElementById("timer").textContent = "0:00:"+seconds;
      document.getElementById("timer").style.color = "red";
      if(bombDefused === true){
        clearInterval(counterLoop);
        time.style.color= "green"; 
      }else if((seconds ===0 || clockRunning === false)&&bombDefused===false){
          clearInterval(counterLoop);
          setTimeout(function(){
            background.style.backgroundImage = "url('img/explosion.jpg')"}, 750);
      }}, 1000);
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

//this function checks if both arrays are equal --- bomb defused
function checkIfEqual(){
  if (clickedAndOne.length === colorsThatEqualOne.length){ 
        bombDefused = true;
  }
};

blue.onclick = function(){
  clicked[0].blue === true; 
  blue.src = "img/cut-blue-wire.png";
  if(colorsThatEqualTwo.includes(blue)){
    clockRunning === false; 
  }; 
  if(colorsThatEqualOne.includes(blue)){
    clickedAndOne.push(1);
  };
  checkIfEqual();
}

red.onclick = function(){
  clicked[1].red === true; 
  red.src = "img/cut-red-wire.png";
  if(colorsThatEqualTwo.includes(red)){
    clockRunning = false;
  }; 
  if(colorsThatEqualOne.includes(red)){
    clickedAndOne.push(1);
  }
  checkIfEqual();
}

green.onclick = function(){
  green.src = "img/cut-green-wire.png";
  clicked[2].green === true; 
  if(colorsThatEqualTwo.includes(green)){
    clockRunning = false;
  }; 
  if(colorsThatEqualOne.includes(green)){
    clickedAndOne.push(1);
  }
  checkIfEqual();
}

white.onclick = function(){
  clicked[3].white === true; 
  white.src = "img/cut-white-wire.png";
  if(colorsThatEqualTwo.includes(white)){
    clockRunning = false;
  }; 
  if(colorsThatEqualOne.includes(white)){
    clickedAndOne.push(1);
  }
  checkIfEqual();
}

yellow.onclick = function(){
  clicked[4].yellow === true; 
  yellow.src = "img/cut-yellow-wire.png";
  if(colorsThatEqualTwo.includes(yellow)){
    clockRunning = false;
  }; 
  if(colorsThatEqualOne.includes(yellow)){
    clickedAndOne.push(1);
  }
  checkIfEqual();
};

reset.onclick = function(){
  background.style.backgroundImage = "url('img/simcity.jpg')";
  bombDefused = false;
  startTime = 30;
  clockRunning = true;
  blue.src= "img/uncut-blue-wire.png";
  green.src = "img/uncut-green-wire.png";
  red.src = "img/uncut-red-wire.png";
  white.src = "img/uncut-white-wire.png";
  yellow.src = "img/uncut-yellow-wire.png";
  colorsThatEqualOne = [];
  colorsThatEqualOne = [];
  colorsThatEqualTwo = [];
  clickedAndOne =[];
  clicked = [
      {blue: false},
      {red: false},
      {green: false},
      {white: false},
      {yellow: false}
    ];
  countDown();
  giveRandomValue();
}

countDown();
giveRandomValue();
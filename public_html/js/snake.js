var snake;
var snakelength;
var snakesize;

var context;
var screenwidth;
var screenheight;

gameinitialize();
gamedraw();

function gameinitialize() {
   var canvas = document.getElementById("game-screen");
   context = canvas.getContext("2d");
   
   screenwidth= window.innerWidth;
   screenheight= window.innerHeight;
   
   canvas.width= screenwidth;
   canvas.height= screenheight;
   
}
    

function gameloop() {
    
}

function gamedraw() {
    context.fillStyle= "rgb(247, 12, 177)";
    context.fillRect(0, 0, screenwidth, screenheight);
}

 function snakeinitialize() {
    snake= []; 
    snakelegth= 5;
    snakesize= 20;
    
    for (var index=0; index < snakelength; index++) {
        snake.push({
            
            
        });
    }
 }
function snakedraw () {
    
}

function snakeupdate() {
    
}
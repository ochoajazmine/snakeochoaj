var snake;
var snakelength;
var snakesize;

var food;

var context;
var screenwidth;
var screenheight;

gameinitialize();
snakeInitialize();
foodInitialize();
setInterval(gameLoop, 1000/30);

function gameinitialize() {
   var canvas = document.getElementById("game-screen");
   context = canvas.getContext("2d");
   
   screenWidth = window.innerWidth;
   screenHeight = window.innerHeight;
   
   canvas.width= screenWidth;
   canvas.height= screenHeight;
   
}
    

function gameLoop() {
    gameDraw();
    snakeUpdate();
    snakeDraw();
    foodDraw();
}

function gameDraw() {
    context.fillStyle= "rgb(247, 12, 177)";
    context.fillRect(0, 0, screenWidth, screenHeight);
}

 function snakeInitialize() {
    snake= []; 
    snakelegth= 5;
    snakesize= 20;
    
    for (var index = snakeLength - 1; index >= 0; index--) {
        snake.push({
            x: index,
            y: 0     
        });
    }
 }
function snakeDraw () {
    for(var index = 0; index < snake.length; index++) {
        context.fillStyle = "white";
        context.fillRect(snake[index].x * snakeSize, snake[index].y * snakeSize, snakeSize, snakeSize);
    }
}

function snakeUpdate() {
    var snakeHeadX = snake[0].x;
    var snakeHeadY = snake[0].y;
    
    snakeHeadX++;
    
    var snakeTail = snake.pop();
    snakeTail.x = snakeHeadX;
    snakeTail.y = snakeHeadY;
    snake.unshift(snakeTail);
}

function foodInitialize() {
    food = {
        x: 0,
        y: 0
    };
}

function foodDraw() {
    context.fillStyle = "white";
    context.fillRect(food.x, food.y, snakeSize, snakeSize);

}
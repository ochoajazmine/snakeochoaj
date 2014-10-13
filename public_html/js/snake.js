var snake;

var context;
var screenwidth;
var screenhieght;

function gameinitialize() {
   var canvas = document.getelementsbyid(" game-screen");
   context = canvas. getcontext ("2nd");
   
   screenwidth= window.innerwidth;
   screenhieght= window.innerHeight;
   
   canvas. width= screenwidth;
   canvas. height= screenheight;
   
}
    

function gameloop() {
    
}

function gamedraw() {
    context.fillstyle= " rgb( 247, 12, 177)";
    context.fillrect(0, 0, screenwidth, screenheight);
}

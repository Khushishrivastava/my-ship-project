var shipImage
var ship
var sea
var seaImage
function preload(){
shipImage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImage = loadImage("sea.png");

}

function setup(){
  createCanvas(400,400);
 //creating ship
sea = createSprite(0,10,10,10)
sea.addImage(seaImage);

ship = createSprite(200,200,80,70) ;
ship.addAnimation("shipmoving",shipImage);
sea.velocityX= -8
sea.scale
//adding scale position to the ship
ship.scale= 0.15;
ship.x = 50
}

function draw() {
  background("blue");
 
//reset background
if(sea.x<0){
  sea.x = sea.width/2;
}
drawSprites()
}


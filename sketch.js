var fixedRect, movingRect;
var gameObject1,gameObject2;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="green";
  movingRect=createSprite(200,400,50,50);
  movingRect.shapeColor="green";
  gameObject1=createSprite(200,100,50,50);
  gameObject1.shapeColor="green";
  gameObject2=createSprite(700,100,50,50);
  gameObject2.shapeColor="green";
  gameObject1.velocityX=3;
  gameObject2.velocityX=-3;
}

function draw() {
  background(255,255,255);
  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  
 if(isTouching(movingRect,gameObject2)){
  gameObject2.shapeColor="red";
  movingRect.shapeColor="red";
 }else{
  gameObject2.shapeColor="green";
  movingRect.shapeColor="green";
 }
  bounceOff(gameObject1,gameObject2);

  drawSprites();
}


var fixedRect, movingRect;
var car, wall
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car = createSprite(400,600,80,50);
  car.shapeColor = "yellow";
  wall = createSprite(40,600,40,80);
  wall.shapeColor = "blue"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  car.velocityX=-5

  // if(isTouching(car,wall)){
  //   textSize(30)

  //   text("The car crashed", 200,300)
  // }
bounceOff(car,wall)
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
    return true
}
else {
  return false
}
}
function bounceOff(object1,object2){
  if(object1.x-object2.x< object2.width/2+object1/width/2 && 
    object2.x-object1.x<object2.width/2+object1.width/2){
      object1.velocityX=object1.velocityX * (-1)
      object2.velocityX=object2.velocityX * (-1)
 }
 else (object1.x-object2.x< object2.height/2+object1/height/2 && 
    object2.x-object1.x<object2.height/2+object1.height/2)
    {
      object1.velocityY=object1.velocityY * (-1)
      object2.velocityY=object2.velocityY * (-1)
 }
  
}



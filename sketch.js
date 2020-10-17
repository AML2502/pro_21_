var bullet,wall;
var speed,weight,damage,thickness;
function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50,200,50,50);
  wall=createSprite(1200,200,thickness,height/2);
  bullet.velocityX= speed;
  wall.shapeColor=color(80,80,80);
  bullet.shapeColor="white"
}
function hasCollided(bullet,wall)
{ 
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>= wallLeftEdge)
  {
   return true
  } 
  return false
}
function draw() {
  background("black");
  drawSprites();
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damae=0.5*weight*speed*speed/(thickness*thickness*thickness);


    if(damae>10)
    {
      wall.shapeColor=color(255,0,0)
    }



    if(damae<10)
    {
      wall.shapeColor=color(0,255,0)
    }
  }
}
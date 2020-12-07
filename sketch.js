var car ,wall;
var speed,weight;




function setup() {
  createCanvas(1600,400);
  wall=createSprite(200, 200, 50, 50);
  car=createSprite(200, 200, 50, 50);


  car.velocityX=5;

  speed=random(25,31);
  weight=random(400,15000);
  

}

function draw() {
  background("black");
  if(wall.x-car.x<(car.weight+wall.width)/2){
car.velociityX=0;
var deformation=0.5*weight*speed*speed/22509;
if(deformation>180){

car.shapecolor=color("yellow");
wall.shapecolor=color("white")
}
if(deformation<180 && deformation>100){

  car.shapecolor=color("green");
  wall.shapecolor=color("white")


}

if(deformation<100){


  car.shapecolor=color("red");
  wall.shapecolor=color("white")
  
}



  }

  drawSprites();
}
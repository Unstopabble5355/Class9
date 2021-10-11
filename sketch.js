var box;
function setup() {
  createCanvas(1500,500);
   box=createSprite(200,200,30,30);
  box.shapeColor="black";
}

function draw() 
{
  background("cyan");
  if(keyIsDown(RIGHT_ARROW)){
    box.position.x=box.position.x+1;

  }
  if(keyIsDown(LEFT_ARROW)){
box.position.x=box.position.x-5;
  }
  if(keyIsDown(UP_ARROW)){
box.position.y=box.position.y-5;


  }
  if(keyIsDown(DOWN_ARROW)){
box.position.y=box.position.y+5;
  }
drawSprites();
}





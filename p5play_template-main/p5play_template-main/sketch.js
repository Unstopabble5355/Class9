
function setup(){
  createCanvas(400,400);
 var box=createSprite(150,150,20,20);
}
function draw(){
background("yellow")
if(keyIsDown(RIGHT_ARROW)){
background("red");
}
drawsprites();
}


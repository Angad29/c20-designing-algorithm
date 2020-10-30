var mr,fr

function setup() {
  createCanvas(800,400);
 fr = createSprite(200, 200, 50, 50);
fr.shapeColor = "blue";
fr.debug = "true";
mr = createSprite(200,200,75,25);
mr.shapeColor="blue";
mr.debug = "true";
}

function draw() {
  background(0);
  
  mr.x = World.mouseX;
  mr.y = World.mouseY;

if(mr.x - fr.x < mr.width/2 + fr.width/2 && fr.x - mr.x < fr.width/2 + mr.width/2 &&
  mr.y - fr.y <mr.width/2 + fr.width/2 && fr.y - mr.y < fr.width/2 + mr.width/2 ){
    fr.shapeColor = "pink";
    mr.shapeColor = "pink";

  }

else{
  fr.shapeColor = "blue";
  mr.shapeColor = "blue";
}

  drawSprites();
}
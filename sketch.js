var fr,mr;

function setup() {
  createCanvas(800,400);
  fr=createSprite(400, 200, 50, 50);
  mr=createSprite(600, 200, 50, 80);

  fr.shapeColor="skyblue";
  mr.shapeColor="green";
}

function draw() {

  mr.x=mouseX;
  mr.y=mouseY;

  background(0);  

  if((mr.x-fr.x<=mr.width/2+fr.width/2)&&
  (fr.x-mr.x<=mr.width/2+fr.width/2)&&(mr.y-fr.y<=mr.height/2+fr.height/2)&&(fr.y-mr.y<=mr.height/2+fr.height/2))
  {
    fr.shapeColor="red";
    mr.shapeColor="red";

  }

  else{
    fr.shapeColor="skyblue";
    mr.shapeColor="green";

  }
  drawSprites();
}
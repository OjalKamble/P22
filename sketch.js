var fairy1,fairy1Img;
var fairy2,fairy2Img;
var back,backImg;
var star,starImg;
var edges
function preload()
{
   //preload the images here
  fairy1Img = loadImage("fairy1.png");
  fairy2Img = loadImage("fairy2.png");
  backImg = loadImage("starnight.png")
  starImg = loadImage("star.png")
}

function setup() {
  createCanvas(800, 750);
  back = createSprite(400,375,20,20);
  back.addImage("back",backImg)
  
  fairy1 = createSprite(100,550,20,20);
  fairy1.addImage("fairy1",fairy1Img);
  fairy1.scale = 0.2;
  fairy1.setCollider("rectangle",0,0,1000,900);
  //fairy1.debug = true
 
  star = createSprite(700,60,20,20);
  star.addImage("star",starImg);
  star.scale = 0.2;
  star.setCollider("rectangle",0,0,200,200);
  //star.debug = true;
  star.velocityY = 3

}


function draw() {
  background("white");

  edges= createEdgeSprites();
  fairy1.collide(edges);

  if(keyDown("right")){
fairy1.x = fairy1.x+6
}

  if(keyDown("left")){
fairy1.x = fairy1.x-6
}

if(fairy1.isTouching(star)){
star.velocityY=0;
}

  drawSprites();
}

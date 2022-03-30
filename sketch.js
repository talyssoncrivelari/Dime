let rect1, rect1IMG;

function preload() {
  rect1IMG = loadImage("RBA0.png");
}

function setup() {

createCanvas(windowWidth, windowHeight);
rect1 = createSprite(windowWidth/10 + 512, windowHeight/2);
rect1.shapeColor = "white";
rect1.addImage(rect1IMG);
rect1.scale =  windowWidth/1024;
rect1.rotation = 90;
}

function draw() {
  
  background(0);

  drawSprites();
}
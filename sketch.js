let rect1, rect1IMG;
let play, playIMG;

function preload() {
  rect1IMG = loadImage("RBA0.png");
  playIMG = loadImage("PlayBotton0.png");
}

function setup() {

createCanvas(windowWidth, windowHeight);
rect1 = createSprite(windowWidth / 2 + 140, windowHeight/2);
rect1.addImage(rect1IMG);
rect1.scale = 0.3;
rect1.rotation = 90;
//play = createSprite(windowWidth - 300, windowHeight/2);
//play.addImage(playIMG);
//play.scale = windowHeight - 666.92;
//play.rotation = 90;
}

function draw() {
  
  background(0);

  drawSprites();
}
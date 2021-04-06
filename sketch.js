
var welcome, welcomeImage


function setup() {
  createCanvas(displayWidth, displayHeight);
  welcome = createSprite(displayWidth/2, displayHeight/2);
  welcome.addImage(welcomeImage);
}




function preload() {
  welcomeImage = loadImage("Images/ChickensWorldIntro.JPG")


}

function draw() {
  background(255,255,255);  
  drawSprites();
}
var car, carimg;
var trackimg;
var mud, mudimg;

function preload() {
  carimg = loadImage("car1.png");
  trackimg = loadImage("track.jpg");
  mudimg = loadImage("mud-.png");
}
function setup() {
  createCanvas(750,800);
  car = createSprite(250, 700);
  car.addImage(carimg);
}

function draw() {
  background(0);
  image(trackimg, 0, -7000, 0, 0);


  if(keyDown("left")) {
    car.x-=10;
  }
  
   if(keyDown("right")) {
     car.x+=10;
   }

    car.y-=10;


   camera.position.y = car.y;

  drawSprites();
  spawnMud();
}

function spawnMud() {
 if (frameCount % 100 === 0) {
  mud = createSprite(random(50, 750), 0, 5, 5);
  mud.addImage(mudimg);
  mud.scale = 0.05;
  mud.velocityY = 10;
 }
}
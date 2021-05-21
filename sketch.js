const  Engine = Matter.Engine;
const  World = Matter.World;
const  Bodies = Matter.Bodies;

  var snowfall = [];

function preload(){

  bg = loadImage("snow1.jpg");
  boyImage = loadImage("boyimage.jpg");

}

function setup() {

  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  boy = createSprite(400, 200, 50, 50);
  boy.addImage(boyImage);
  boy.scale = 0.2

  ground = createSprite(400,310,800,10);
  ground.visible = false;

  if(frameCount % 150 === 0){
    for( var k = 0; k < 100 ; k++){

      snowfall.push(new Snow(random(40,760),random(0,400),5));
      
    }
  }

  
}

function draw() {
  background(bg);  

  Engine.update(engine);

  boy.collide(ground);

  if(keyCode === UP_ARROW){
    boy.velocityY = -1;
  }

  if(keyCode === LEFT_ARROW){
    boy.x = boy.x - 10
  }

  if(keyCode === RIGHT_ARROW){
    boy.x = boy.x + 10
  }
  
  boy.velocityY = boy.velocityY + 0.25;

  for( var k = 0; k < snowfall.length ; k++){
    snowfall[k].display();
    snowfall[k].updateY();
  }

  

  drawSprites();
}
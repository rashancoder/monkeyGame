var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime = 0
var ground;
var rand;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");

}






function setup() {
  createCanvas(600, 200);

  monkey = createSprite(50, 160, 20, 50);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(200, 180, 400, 20);
  ground.x = ground.width / 2;
  ground.velocityX = -4;
  console.log(ground.x)
}

function draw() {
  background("white");
  fill("black");
  textSize(20);
  fill("black");
  text("survival time : " + survivalTime, 100, 50);
  survivalTime = Math.ceil(frameCount / frameRate());


  if (keyDown("space") && monkey.y >= 100) {
    monkey.velocityY = -12;

  }

  monkey.velocityY = monkey.velocityY + 0.8

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  monkey.collide(ground);

  //spawn the bananas
  spawnbanana();

  //spawn obstacles on ground
  spawnobstacles();
  drawSprites();
}

function spawnbanana() {

  if (frameCount % 80 === 0) {
    banana = createSprite(200, 100, 10, 10);
    banana.addImage(bananaImage)
    banana.x = Math.round(random(600, 10))
    banana.scale = 0.1;
    banana.velocityY = 3;
    //giving lifetime to the variable
    banana.lifetime = 200;




  }
}

function spawnobstacles() {
  if (frameCount % 300 === 0) {
    obstacles = createSprite(600, 165, 10, 30);
    obstacles.velocityX = -4;





    obstacles.scale = 0.5;
    obstacles.lifetime = 600;


  }
}
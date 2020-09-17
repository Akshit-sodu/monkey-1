var monkey , monkey_running
var banana ,bananaImage, obstacle,obstacleImage
var FoodGroup, obstacleGroup
var score
var Yourscore=0;

function preload(){
   
  monkey_running =  loadAnimation("sprite_0.png","sprite_1.png",
 "sprite_2.png","sprite_3.png","sprite_4.png",
  "sprite_5.png","sprite_6.png","sprite_7.png",
  "sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}

function setup() {
// createCanvas(windowWidth, windowHeight);
  
    monkey=createSprite(35,338,0,0);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,390,900,10);
  ground.velocityX=-3;
  ground.x=ground.width/2;
  console.log(ground.x)

  FoodGroup = new Group();
  obstaclesGroup = new Group();

  score = 0;
 }

function draw() {
  background("lightblue");
      
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
     
    if(keyDown("space") ) {
      monkey.velocityY = -5;
    }
    monkey.velocityY = monkey.velocityY + 0.18;
  
    monkey.collide(ground);   
    spawnFood();
    spawnObstacles();
 
    drawSprites();
  
  if(obstaclesGroup.isTouching(monkey)){
   ground.velocityX = 0;
   monkey.velocityY = 0;
   obstaclesGroup.setVelocityXEach(0);
   FoodGroup.setVelocityXEach(0); 
   obstaclesGroup.setLifetimeEach(-1);
   FoodGroup.setLifetimeEach(-1);
        
    }
  
  stroke("red"); textSize(25);
  fill("red");
  yourscore = Math.ceil(frameCount/frameRate()) 
  text("Your Score: "+ yourscore, 210,35);
}

function spawnFood() {
  if (frameCount % 50 === 0) {
    banana = createSprite(600);
    banana.y = random(290,10);    
    banana.velocityX = -5;
    banana.lifetime = 300;
    banana.addImage(bananaImage);
    banana.scale=0.05;
    FoodGroup.add(banana);
    
    monkey.depth = banana.depth ;
    }
}

function spawnObstacles() {
  if(frameCount % 250 === 0) {
    obstacle = createSprite(400,368,10,10);
    obstacle.velocityX = -6;
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.12;
    obstacle.lifetime = 100;
    obstaclesGroup.add(obstacle);
  }
}

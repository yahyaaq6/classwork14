var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud,clouds1;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  ground1=loadImage("ground2.png")
  clouds1=loadImage("cloud.png")
  obstacle1=loadImage("obstacle1.png")
  obstacle2=loadImage("obstacle2.png")
  obstacle3=loadImage("obstacle3.png")
  obstacle4=loadImage("obstacle4.png")
  obstacle5=loadImage("obstacle5.png")
  obstacle6=loadImage("obstacle6.png")
  
}

function setup() {
  createCanvas(600, 200);
  
  //create a trex sprite
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  

  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50
  
  //create ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("paper",ground1)

  invisibleGround = createSprite(200,190,400,10);
invisibleGround.visible=false
}

function draw() {
  background(0);
  console.log(frameCount)
 
  //jumping the trex on space key press
  if(keyDown("space")&& trex.y>=90) {
    trex.velocityY = -10;
  }
  ground.velocityX=-3
  trex.velocityY = trex.velocityY + 0.8
  
 if (ground.x<0){
   ground.x=ground.width/2
 }
 //stop trex from falling down 
  trex.collide(invisibleGround);
  clouds();
  spwanobstacle();
  drawSprites();
}
function clouds (){

  if (frameCount%60==0){
    cloud=createSprite(600,100,40,10);
    cloud.velocityX=-4
    cloud.addImage("paper1",clouds1)
    cloud.y=Math.round(random(10,60))
    cloud.scale=0.5
    cloud.lifetime=200
  }
}
  function spwanobstacle () {
    if (frameCount%60==0){
      obstacle=createSprite(600,165,10,40);
      obstacle.velocityX=-3
      var rand=Math.round(random(1,6))
  
      switch(rand){
        
        case 1: obstacle.addImage(obstacle1)
                break;
  
        case 2: obstacle.addImage(obstacle2)
                break;
        case 3: obstacle.addImage(obstacle3)
                break;
        case 4: obstacle.addImage(obstacle4)
                break;
        case 5: obstacle.addImage(obstacle5)
                break;
        case 6: obstacle.addImage(obstacle6)
                break;
        default: break
      }
      obstacle.scale=0.5
      obstacle.lifetime=200
      cloud.deepth=trex.deepth
      trex.deepth=trex.deepth+1


  }
  





  }

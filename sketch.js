var trex;
function preload(){
  trexImg = loadAnimation("trex1.png","trex3.png","trex4.png")
  groundImg = loadImage("ground2.png")
}
function setup() {
  createCanvas(600,200);
  trex = createSprite(30,170)
  trex.addAnimation("trex_running",trexImg)
  trex.scale=0.5

  ground = createSprite(300,180,600,20)
  ground.addImage(groundImg)
  ground.velocityX = -3
  invisibleground = createSprite(300,190,600,20)
  
  invisibleground.visible=false 
}

function draw() {
  background(220);
  if(keyDown("space")){
    trex.velocityY = -10
  }
  // add gravity
  trex.velocityY = trex.velocityY + 0.8
  console.log(ground.x)
  //scrolling backgroun
  if(ground.x<0){
    ground.x = ground.width/2
  }
  //trex collide to the ground
  trex.collide(invisibleground)
  drawSprites()
}
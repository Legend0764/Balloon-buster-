

var pinkballoon;
var bowImage;
var ground;
var groundImage;
var ground2;
var balloon1Image;
var redballoon;
var redballoonImage;
var greenballoon;
var blueballoon;


var blueballoonImage;

var greenballoonImage;
var bow1;
var bowImage;
var arrow;
var arrowImage;
var score;

var arrowGroup;
var redGroup;
var blueB;
var greenGroup;
var pinkGroup;







function preload() {
  //load your images here 
  groundImage = loadImage("background0.png");
  balloon1Image = loadImage("pink_balloon0.png");

  redballoonImage = loadImage("red_balloon0.png");
  blueballoonImage = loadImage("blue_balloon0.png");
  greenballoonImage = loadImage("green_balloon0.png");
  bowImage = loadImage("bow0.png");
  arrowImage =loadImage("arrow0.png");


}

function setup() {
 
  createCanvas(600, 600);

  //add code here
  ground = createSprite(600, 200, 400, 20);
  ground.addImage("ground", groundImage);
  ground.x = ground.width / 2;
  ground.scale =2;
  
  var select_balloon =Math.round(random(1,4));
  console.log(select_balloon);
  
  redGroup = new Group();
  blueGroup = new Group();
  greenGroup = new Group();
  pinkGroup = new Group();
  arrowGroup = new Group();
  
  if (World.frameCount % 100 == 0) { if (select_balloon == 1) { redballoon(); } 
  else if (select_balloon == 2) { 
    greenballoon(); } 
    else if (select_balloon == 3) { 
      blueballoon(); }
    else {
      pinkballoon(); } }
  
  
  
  
 


 

 
  


 












  




  bow1 = createSprite(380, 175, 20, 50);
  bow1.addImage("bow1", bowImage);
  
 score = 0;


}

function draw() {
   
   text("Score:" + score,420, 50);
  
  

  //add code here
  if (keyDown("space")) {
    createArrow();
  
  
   
    
    
    
  }
  
 bow1.y = World.mouseY;
 

  ground.velocityX = -4

  if (ground.x < 0) {
    ground.x = ground.width / 3
  }
  
  if(arrowGroup.isTouching(redGroup)) {
    redGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }
  
  if(arrowGroup.isTouching(pinkGroup)) {
    pinkGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+2;
  }
  if(arrowGroup.isTouching(blueGroup)) {
    blueGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+4;
  }
  
  if(arrowGroup.isTouching(greenGroup)) {
    greenGroup.destroyEach();
    greenGroup.destroyEach();
    score=score+6;
  }
  
  

  
  
 
   
  
  
  
  
  
 
  redballoon();
  blueballoon();
  greenballoon();
  pinkballoon();
  
      
      
      
      

  drawSprites();


}

function Createarrow() {
  var arrow =createSprite(250,175,20,50);
  return arrow;
}

function redballoon() {
   if(frameCount % 80 ==0) {
  var red =createSprite(0,Math.round(random(20,370)), 10,
     10);
  red.addImage(redballoonImage);
     
   
  red.velocityX =3;
  
      red.lifetime=130;
     redGroup.add(red);
  
  red.scale=0.1;
   }
  
                        
 
  
}
function blueballoon() {
   if(frameCount % 85 ==0) {
  var blue =createSprite(0,Math.round(random(20,370)), 10,
     10);
  blue.addImage(blueballoonImage);
     
   blue.lifetime=130;  
  blue.velocityX =3;
     blueGroup.add(blue);
    
    
  
  blue.scale=0.1;
   }
}

function greenballoon() {
   if(frameCount % 95 ==0) {
  var green =createSprite(0,Math.round(random(20,370)), 10,
     10);
  green.addImage(greenballoonImage);
     
   green.lifetime=130;  
  green.velocityX =3;
     greenGroup.add(green);
     
  
  green.scale=0.1;
   }
}

function pinkballoon() {
   if(frameCount % 105 ==0) {
  var pink =createSprite(0,Math.round(random(20,370)), 10,
     10);
  pink.addImage(balloon1Image);
     
     
   pink.lifetime=130;  
 pink.velocityX =3;
     pinkGroup.add(pink);
  
  
   }
}

function createArrow() {
   arrow =createSprite(360,100,20,50);
    arrow.addImage("arrow",arrowImage);
     arrow.scale=0.2;
    arrow.velocityX=-3;
    arrow.y =bow1.y;
  arrowGroup.add(arrow);
  return arrow;
}





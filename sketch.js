var sword,swordImage;
var PLAY=1;
var END=0;
var gameState=1;
var fruitGroup;
var enemyGroup;
var fruit1,fruit2,fruit3,fruit4;
var alien1;



function preload(){
  
  swordImage=loadImage("sword.png");
  fruit1=loadImage("fruit1.png");
  fruit2=loadImage("fruit2.png");
  fruit3=loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png");
  fruit4=loadImage("fruit4.png")
  alien1Img=loadAnimation("alien1.png","alien2.png")
  gameoverImg=loadImage("gameover.png")

   }



function setup(){
  createCanvas(600,600)
  sword  = createSprite(60, 200, 20, 20);
sword.addImage(swordImage);
  sword.scale=0.7 
  sword.setCollider("rectangle",0,0,40,40)
  score=0
  fruitGroup=new Group ()
  enemyGroup=new Group ()
  
  
}





 
function draw(){
background("#adcbe3")
 
 if(gameState===PLAY){
   sword.y=World.mouseY;
  sword.x=World.mouseX;
  fruit();
  Enemy();
  
  if(fruitGroup.isTouching(sword)){
    fruitGroup.destroyEach()
    score=score+2
  }
  
  
  else{
    if(enemyGroup.isTouching(sword)){
gameState=END
fruitGroup.destroyEach()
enemyGroup.destroyEach()
fruitGroup.setVelocityXEach(0)
enemyGroup.setVelocityXEach(0)
sword.addImage(gameoverImg);
sword.scale=2
sword.x=250
sword.y= 300
    }
  }
    
}
  
  
  drawSprites();
  textSize (30)
  text("score: "+score,200,30)
 
}


function fruit(){
  if(World.frameCount%80===0){
    var fruits=createSprite(400,200,40,40);
    fruits.scale=0.2;
    r=Math.round(random(1,4));
    if (r==1){
      fruits.addImage(fruit1);
    }
    else if(r==2){
    fruits.addImage(fruit2);
    }
    else if(r==3){
    fruits.addImage(fruit3);
    }
    else {
      fruits.addImage(fruit4);
    }
    
    fruits.y=Math.round(random(5,340))
    fruits.velocityX=-7
    fruits.setLifetime=100
    fruitGroup.add(fruits)
    
  }
    
    
  }
  function Enemy(){
    if(World.frameCount%200===0) {
    alien1=createSprite(400,200,20,20);
    alien1.addAnimation("moving",alien1Img);
    alien1.y=Math.round(random(100,300));
    alien1.velocityX=-8;
    alien1.setLifetime=50;

    enemyGroup.add(alien1)
    }
  }
    

  
  


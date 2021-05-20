var virus,virusImg,virusGrp;
var injection,injectionImg;
var med,medImg,medGrp;
var score=0;
var gameState="play";
var go,gi;


function preload(){
  
virusImg=loadImage("images.jfif");
injectionImg=loadImage("injection.png")
medImg=loadImage("med.png"); 
  gi=loadImage("glitch.jpg");
}

function setup(){
  
createCanvas(400,400);
injection=createSprite(50,50,0,10);
injection.addImage(injectionImg);
injection.scale=0.1;

virusGrp=new Group();
medGrp=new Group();
}

function draw(){
background("white");

  
  if(gameState==="play"){
    spawnvirus();
enemy();
injection.x=mouseX;
injection.y=mouseY;

 if(virusGrp.isTouching(injection)){
virusGrp.destroyEach();
  score=score+2;
  }   
    
}
  


  
  if(medGrp.isTouching(injection)){
    gameState="end";
  }
    
    if(gameState==="end"){
      medGrp.destroyEach();
    virusGrp.destroyEach();
    medGrp.setVelocityXEach();
    virusGrp.setVelocityXEach();
      injection.destroy();
      game();
     
     
      
    }
    
  
  
  
drawSprites();
  textSize(25); 
  text("Score : "+ score,250,50);

  
  
}


function spawnvirus(){
if(frameCount%60===0){
virus=createSprite(200,200,10,10);
virus.y=Math.round(random(50,400));
virus.addImage(virusImg);
virus.scale=0.3;
virus.velocityX=-3;
virusGrp.add(virus);



}
}

function enemy(){
if(frameCount%200===0){
med=createSprite(400,200,20,20);
med.addImage(medImg);
med.y=Math.round(random(100,300));
med.scale=0.3;
med.velocityX=-5;
medGrp.add(med);
  

}
}
function game(){
  
  var go=createSprite(180,180);
  go.addImage(gi);
  go.scale=0.8;
}
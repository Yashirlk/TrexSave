var trex,
trex_running , 
trex_colide; 
var ground, invisivelGround, groundImage; 

function preload(){ 
trex_running = loadAnimation("trex1.png" ,"trex3.png" , "trex4.png"); 
trex_colide = loadAnimation("trex_collided.png"); 
groundImage = loadImage("ground2.png");
//falta nuvem
nuvemImagem = loadImage("cloud.png");
obstaculo1 = loadImage (obstacle1.png)
obstaculo2 = loadImage (obstacle2.png)
obstaculo3 = loadImage (obstacle3.png)
obstaculo4 = loadImage (obstacle4.png)
obstaculo5 = loadImage (obstacle5.png)
obstaculo6 = loadImage (obstacle6.png)
 } 


function setup(){ 
createCanvas(600,200); 

//crie um sprite de trex 
trex = createSprite(50,160,20,50); 
ground = createSprite(200,190,400,20);
 
trex.addAnimation("running" , trex_running); 
trex.scale = 0.5; 
trex.x = 50; 
//falta ponto e virgula
ground.velocityX = -4 ;
ground.addImage("ground" , groundImage); 
ground.x = ground.width/2;
 
invisivelGround = createSprite(200,190,400,10); 
invisivelGround.visible = false; } 

function draw(){ 
background("white")
//retirar 
//ground.velocityX = 2; 
//drawSprites(); //Retirar 

if(keyDown("space")&& trex.y>= 100){ //Condição incompleta 
 trex.velocityY = -10; 
} 
trex.velocityY = trex.velocityY + 0.8; 
if(ground.x<0){ 
ground.x = ground.width/2; 
} 

trex.collide(invisivelGround); 
drawSprites(); 
gerarNuvens(); 
} 
function gerarNuvens(){ 
  if(frameCount%50 == 0){
nuvem = createSprite(600,100,40,10);
 nuvem.velocityX = -3;
 nuvem.addImage(nuvemImagem);
 nuvem.scale = 0.4;
 nuvem.depth = trex.depth;
trex.depth = trex.depth+1;
nuvem.lifetime = 200;
}

}
function gerarObstaculos(){
  if(frameCount%50 == 0){
    var obstaculo = createSprite(600,165,18,40);
    obstaculo.velocityX = -6
    obstaculo.addImage(obstaculo1);
}
}
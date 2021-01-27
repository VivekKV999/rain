const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var man_ww,man;
//var drops = [];

function preload()
{
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");
    man_ww=loadAnimation( "images/w8.png","images/w7.png","images/w6.png","images/w5.png","images/w4.png","images/w3.png","images/w2.png","images/w1.png")  
}

function setup()
{

createCanvas(400,633.5)
//canvas(CENTER) 
engine = Engine.create();
world = engine.world;
   

man=createSprite(200,550)
man.addAnimation("moving",man_ww)
man.scale=0.25
  
//gg=new Ground(200,642.5,400,15);
uu=new umb(205,515,45);

//r1=new drop(100,100,5);
//r2=new drop(115,115,5);
//r3=new drop(125,115,5);
//r4=new drop(135,115,5);
//r5=new drop(145,115,5);
//r6=new drop(155,115,5);
//r7=new drop(165,115,5);
//r8=new drop(175,115,5);
///r9=new drop(185,115,5);
//11=new drop (195,115,5);

 


Engine.run(engine);
}

function draw(){
    Engine.update(engine);
    background(0)
    rand = Math.round(random(1,4));
    console.log(rand)
    if(frameCount%10===0){
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
       
       
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
        
    } 
  uu.display();
         
 
  
 //r1.display();
 
 
    drawSprites(); 
}   


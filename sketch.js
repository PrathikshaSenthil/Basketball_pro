
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground,ground2;
var paper;
var Rdustbin,Bdustbin,Ldustbin,Rdustbin,Bdustbin;
var dustbin;
var bg,bgImg;

function preload()
{
	
 bgImg=loadImage("background.jpg");

}

function setup() {
	createCanvas(680, 500);


	engine = Engine.create();
	world = engine.world;

  
  
  
	//Create the Bodies Here.
	paper = new Paper (100,250,10,10);
 


   Bdustbin =new Dustbin (650,150,20,200);
  
  	ground = new Ground (400,470,800,50);
	ground2 = new Ground (40,150,20,1000); 
    ground3 = new Ground (640,150,75,10); 
    ground4 = new Ground (570,145,10,50); 
   ground5 = new Ground (685,15,20,1000); 
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 // background(rgb(242, 128, 210));
   background("lightblue");
  ground2.display();
  ground3.display();
  ground4.display();
  ground5.display();
  
 bg = createSprite(300,250);
  bg.addImage(bgImg);
  bg.scale=3;
  bg.depth=-3;
  
  
  Engine.update(engine);
  drawSprites();

paper.display();

  Bdustbin.display();
  ground.display();
   
 
  


}


function keyPressed(){

	if(keyCode=== UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:14,y:-23})
	}

}


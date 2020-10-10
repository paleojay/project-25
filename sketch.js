
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,height,1200,20);
    bin1 = new bin(1000,320,150,PI/5);
  paper1= new paper(200,200);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  paper1.display();
  ground.display();
  bin1.display();
  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:75,y:-75});
   }
}




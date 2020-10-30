var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,landimg,landSprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png");

	landimg=loadImage("land.jpg");
}

function setup() {
	createCanvas(800, 500);
	rectMode(CENTER);
	

	landSprite=createSprite(200,200);
	landSprite.addImage(landimg);
	landSprite.scale=4.5;

	packageSprite=createSprite(width/2, 170, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.3;
	packageSprite.visible=false;

	helicopterSprite=createSprite(width/2, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=1

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);
groundSprite.visible=false
	


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 170 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 460, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  //background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y;
  
  landSprite.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

  Matter.Body.setStatic(packageBody,false); 
  packageSprite.visible=true 
  }
}




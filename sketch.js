
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
var angle1=1
var angle2=250
var angle3=300
function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	var plane_options ={
		isStatic: true
	  };
	  var rotatores_options ={
		isStatic: true
	  };
    var particle_opitions ={
      restitution:0.4,
      friction:0.02
      };

	//Crie os Corpos aqui.
	plane= Bodies.rectangle(200,390,400,20,plane_options);

	b1= Bodies.rectangle(300,250,50,20,plane_options);
	b2= Bodies.rectangle(100,250,50,20,plane_options);

	r1=Bodies.rectangle(200,150,50,20,rotatores_options);
	r2=Bodies.rectangle(200,150,50,20,rotatores_options);
	r3=Bodies.rectangle(200,150,50,20,rotatores_options);

  p1=Bodies.circle(220,10,10,particle_opitions)
  p2=Bodies.circle(220,10,10,particle_opitions)
  p3=Bodies.circle(220,10,10,particle_opitions)
  p4=Bodies.circle(220,10,10,particle_opitions)
  p5=Bodies.circle(220,10,10,particle_opitions)

	
	World.add(world,plane);

	World.add(world,b1);
	World.add(world,b2);

	World.add(world,r1);
	World.add(world,r2);
	World.add(world,r3);
  World.add(world,p1);
  World.add(world,p2);
  World.add(world,p3);
  World.add(world,p4);
  World.add(world,p5);

	Engine.run(engine);
  
	rectMode(CENTER);
    ellipseMode(RADIUS);
}


function draw() {
  rectMode(CENTER);
  background("red");
  Engine.update(engine);

  drawSprites();

  Matter.Body.rotate(r1,angle1)
  push()
  translate(r1.position.x, r1.position.y)
  rotate(angle1)
  rect(0,0,150,20)
  pop()
  angle1 +=10.0

  Matter.Body.rotate(r2,angle2)
  push()
  translate(r2.position.x, r2.position.y)
  rotate(angle2)
  rect(0,0,150,20)
  pop()
  angle2 +=10.0

  Matter.Body.rotate(r3,angle3)
  push()
  translate(r3.position.x, r3.position.y)
  rotate(angle3)
  rect(0,0,150,20)
  pop()
  angle3 +=10.0
  
fill("purple")
 rect(plane.position.x, plane.position.y,400,20)
 fill("green")
 rect(b1.position.x, b1.position.y,100,20)
 fill("yellow")
 rect(b2.position.x, b2.position.y,100,20)
 
 fill("yellow")
ellipse(p1.position.x,p1.position.y,10);
fill("yellow")
ellipse(p2.position.x,p2.position.y,10);
fill("yellow")
ellipse(p3.position.x,p3.position.y,10);
fill("yellow")
ellipse(p4.position.x,p4.position.y,10);
fill("yellow")
ellipse(p5.position.x,p5.position.y,10);

}




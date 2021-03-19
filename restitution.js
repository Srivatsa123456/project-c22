const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ball1,ball2

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }
var opt={
 restitution:1.0
}
   object= Bodies.rectangle(20,390,400,400,object_options);
    World.add(world,object);
ball1=Bodies.circle(200,200,20,opt)
World.add(world,ball1)
ball2=Bodies.circle(150,200,20,opt)
World.add(world,ball2)

   


    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,400,400);
    ellipseMode(RADIUS);
    ellipse(ball1.position.x,ball1.position.y,20)
    ellipseMode(RADIUS);
    ellipse(ball2.position.x,ball2.position.y,20)
}

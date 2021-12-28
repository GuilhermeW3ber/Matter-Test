
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var box;
var ground;
var angle=60;
var poly;
var aImg, bImg, cImg;

function preload(){
  aImg=loadImage("ghost3.png");
  bImg=loadImage("cube.png");
  cImg=loadImage("AB.png");
}
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var lat_resolution={
    restitution:0.95,
    frictionAir: 0.5
  }
  
  var rectangle_options={
    restitution: 1,
    frictionAir:0.1
  }
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(25,100,60,ball_options);
  World.add(world,ball);
  
  rectangle= Bodies.rectangle(300,200,30,100, rectangle_options);
  World.add(world,rectangle);

  box= Bodies.rectangle(160,200,30,100, lat_resolution);
  World.add(world,box);


  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  //ellipse(ball.position.x,ball.position.y,20);
  image(aImg, ball.position.x,ball.position.y,100,100);
  rect(ground.position.x,ground.position.y,400,20);
  image(bImg, rectangle.position.x,rectangle.position.y,60,60);
  image(cImg,box.position.x, box.position.y, 100,80);

  
  
}


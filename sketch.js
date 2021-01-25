const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;


function preload() {
   // polygonImage = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(3000,1200);
    engine = Engine.create();
    world = engine.world;

   // polygon = new Box(50,200,20,20);
    //polygon = Bodies.circle(50,200,40);
   // World.add(world,polygon);
    //slingshot1 = new SlingShot(polygon.body,{x:100,y:200});

  //  slingshot1 = new SlingShot(polygon,{x:100,y:200});

    ground1 = new Ground(1000,1150, 6000, 20);
    ball1 = new Ball(100,100,150,150);
    block1 = new Box(1500,100,100,100);
    block2 = new Box(1500,100,100,100);
    block3 = new Box(1500,100,100,100);
    block4 = new Box(1500,100,100,100);
    block5 = new Box(1500,100,100,100);
    block6 = new Box(1500,100,100,100);
    block7 = new Box(1500,100,100,100);
    block8 = new Box(1500,100,100,100);
    block9 = new Box(1600,100,100,100);
    block10 = new Box(1600,100,100,100);
    block11 = new Box(1600,100,100,100);
    block12 = new Box(1600,100,100,100);
    block13 = new Box(1600,100,100,100);
    block14 = new Box(1600,100,100,100);
    block15 = new Box(1600,100,100,100);
    block16 = new Box(1600,100,100,100);
    block17 = new Box(1700,100,100,100);
    block18 = new Box(1700,100,100,100);
    block19 = new Box(1700,100,100,100);
    block20 = new Box(1700,100,100,100);
    block21 = new Box(1700,100,100,100);
    block22 = new Box(1700,100,100,100);
    block23 = new Box(1700,100,100,100);
    block24 = new Box(1700,100,100,100);
    rope1 = new Rope(ball1.body,{x:1000, y:200});
}

function draw(){
   background("grey");
    ground1.display();

    ball1.display();
    rope1.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    
    Engine.update(engine);
}
function mouseDragged(){
   Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


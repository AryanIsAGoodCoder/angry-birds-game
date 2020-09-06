const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,pig1,log1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    ground = new Ground(600,height,1200,20);
    log1 = new Log (100,300,100,PI/2);
    pig1 = new Pig(200,200);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log("this is box2.body.position x " + box2.body.position.x);
    console.log("this is box2.body.position y " + box2.body.position.y);
    console.log("this is box2.body.angle" + box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    ground.display();
}
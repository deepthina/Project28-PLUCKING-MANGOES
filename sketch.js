
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;


var treeObj, stoneObj, groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8;
var world, boy;

var stone;
var sling;

function preload() {
	boy = loadImage("images/boy.png");
}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1 = new mango(1100, 100, 30);
	mango2 = new mango(900, 140, 30);
	mango3 = new mango(900, 240, 30);
	mango4 = new mango(1200, 240, 30);
	mango5 = new mango(1000, 240, 30);
	mango6 = new mango(1000, 100, 30);
	mango7 = new mango(920, 300, 30);
	mango8 = new mango(1150, 200, 30);

	treeObj = new tree(1050, 580);
	groundObject = new ground(width / 2, 600, width, 20);

	stone = new Stone(230, 420, 55);

	sling = new Slingshot(stone.body, { x: 230, y: 420 });

	Engine.run(engine);

}

function draw() {

	background(230);
	textSize(20);
	text(" Press Space to hit more mangoes", 100, 100);

	Engine.update(engine);
	//Add code for displaying text here!
	image(boy, 200, 340, 200, 300);


	treeObj.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();

	groundObject.display();

	stone.display();

	sling.display();

	detectCollision(stone, mango1);
	detectCollision(stone, mango2);
	detectCollision(stone, mango3);
	detectCollision(stone, mango4);
	detectCollision(stone, mango5);
	detectCollision(stone, mango6);
	detectCollision(stone, mango7);
	detectCollision(stone, mango8);

}


function mouseDragged() {
	Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY })
}


function mouseReleased() {
	sling.fly();
}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body, { x: 230, y: 420 });
		sling.attach(stone.body);
	}
}

function detectCollision(obj1, obj2) {

	obj2Position = obj2.body.position;
	obj1Position = obj1.body.position;

	if (obj2Position.x - obj1Position.x <= obj2.r + obj1.r
		&& obj1Position.x - obj2Position.x <= obj2.r + obj1.r
		&& obj2Position.y - obj1Position.y <= obj2.r + obj1.r
		&& obj1Position.y - obj2Position.y <= obj2.r + obj1.r) {

		Matter.Body.setStatic(obj2.body, false);
	}
}
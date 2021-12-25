const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage, playerimage


function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //create player base body
  playerBase = Bodies.rectangle(150, 450, 200, 200, { isStatic: true });
  World.add(world, playerBase);
  //create player body
  player = Bodies.rectangle(210,270,100,250,{isStatic:true});
  World.add(world,player);


}

function draw() {
  background(backgroundImg);

  //show the player image using image() function
  image(playerimage,player.position.x,player.position.y,50,180)
  //show the playerbase image using image() function
  image(baseimage,playerBase.position.x,playerBase.position.y,180,50)

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}

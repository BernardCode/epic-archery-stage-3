const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase;
var computer, computerBase;
var computerArcher, playerArcher;
var arrows = [];
var arrow;
var playerArrow;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
 

  computerBase = new ComputerBase(width - 300,random(450, height - 300),180,150);
  computer = new Computer(width - 285,computerBase.body.position.y - 153,50,180);

  computerArcher = new ComputerArcher(computer.body.position.x+15,computer.body.position.y-95,100,100,PI/2);
  playerArcher = new PlayerArcher(player.body.position.x-15,player.body.position.y,100,100,-PI/2);
  //Create an arrow Object
  
  
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);


  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display();

  for(var i=0;i<arrows.length;i++) {
      arrows[i].display();
  }
}

function keyReleased () {
  if(keyCode===32) {
    //console.log("keyReleased");
    arrows[arrows.length-1].shoot();
  }


}
function keyPressed () {
  if(keyCode===32) {
    //console.log("space pressed");
    playerArrow = new PlayerArrow(playerArcher.x+60,playerArcher.y-50,50,7);
    arrows.push(playerArrow);
  }


function showArrows(Playerarrow,index) {
  

}

}
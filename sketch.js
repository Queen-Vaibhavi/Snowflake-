const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var bgImg,mita,mitaImg;
var flakes = [];

function preload(){
  bgImg = loadImage("snowfall background.jpg");
penguin = loadImage("Image-Of-Doraemon-With-Friends-In-Winter-removebg-preview");
  
}

function setup() {
  createCanvas(900,750);
 
  engine = Engine.create();
  world = engine.world;

  for(var i = 0; i < 100; i++){
    flakes.push(new Snow(random(0 ,900),random(0,750)));
  }

  all5 = createSprite(100,450,50,50);
  all5.addImage(penguin);

}

function draw() {
  background(bgImg);  
  Engine.update(engine);
  drawSprites();

  //display the plinkos 
  for (var x = 0; x < flakes.length; x++) {
    flakes[x].display();   
    if( flakes[x].body.position.y > 750){
      Body.setPosition(flakes[x].body,{x: random(0,900), y: random(0,750)});
    }
  }



}
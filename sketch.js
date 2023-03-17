var dragon, dragonFlyingImg;
var fireball, fireballImg;
var PLAY = 1;
var END = 0;
var gamestates = PLAY;
var gameover, restart;
var Dino1, Dino2, Dino3, Dino4, Dino5, Dino6, Dino7, Dino8, Dino9, Dino10;
var DinoGroup;
var bg, bgImg;

function preLoad(){
  dragonFlyingImg = loadAnimation ("Dino/Dino1.png", "Dino/dino2.png", "Dino/dino3.png", "Dino/dino4.png", "Dino/dino5.png", "Dino/dino6.png", "Dino/dino7.png", "Dino/dino8.png", "Dino/dino9.png", "Dino/dino10.png")
  fireballImg = loadImage("fireBall.png")
  bgImg = loadImage("bg3.png")
}

function setup() {
  createCanvas(1200, 700);
  bg = createSprite (0, 500); 
  bg.addImage(bgImg);
  bg.scale = 2.5; 
  bg.velocityX = -2; 
}

function draw() {
  background("white") 
  if(bg.x <0){ 
  bg.x = 1200;
 }
}


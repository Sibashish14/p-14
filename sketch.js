var garden,gardenImg;
var cat,catImg;
var rat,ratImg;
var cat2Img,rat2Img;
var PLAY=0;
var END=1;
var state=PLAY;
function preload(){
   gardenImg=loadImage("images/garden.png");
   catImg=loadImage("images/cat1.png");
   ratImg=loadImage("images/mouse1.png");
   cat2Img=loadImage("images/cat2.png");
   rat2Img=loadImage("images/mouse2.png");
}
function setup(){
    createCanvas(1000,800);
    garden=createSprite(500,400);
    garden.addImage(gardenImg);
    cat=createSprite(700,500);
    cat.addImage(catImg);
    cat.scale=0.125;
    rat=createSprite(300,500);
    rat.addImage(ratImg);
    rat.scale=0.125;
}
function draw(){
    background("white");
    if(state===PLAY){
    keyPressed();
    }
    if((rat.x-cat.x<rat.width/2+cat.width/2)&&(cat.x-rat.x<cat.width/2+rat.width/2)){
       state=END;
       cat.addImage(cat2Img);
       rat.addImage(rat2Img);
    }
}
function keyPressed(){
    if(keyCode === LEFT_ARROW){
     cat.addImage(cat2Img);
     cat.x=cat.x-2;
     rat.addImage(rat2Img)
}
 }
var rect1, rect2;

function setup(){
    createCanvas(800,800);

    rect1 = createSprite(400, 50, 50, 50);
    rect1.shapeColor = 'green';
    rect1.debug = true;
    
    rect2    = createSprite(400, 750, 50, 50);
    rect2.shapeColor = 'green';
    rect2.debug = true;

    rect1.velocityY=5;
    rect2.velocityY=-5;

}

function draw(){
  background("LightGreen");

  if  (rect1.x-rect2.x<rect1.width/2+rect2.width/2&&
    rect2.x-rect1.x<rect1.width/2+rect2.width/2 ){
  
  rect1.velocityX *=-1;
  rect2.velocityX *=-1;
  
  }

  if  (rect1.y-rect2.y<rect1.height/2+rect2.height/2&&
    rect2.y-rect1.y<rect1.height/2+rect2.height/2 ){
  
  rect1.velocityY *=-1;
  rect2.velocityY *=-1;
  
  }




drawSprites();



}


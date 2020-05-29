                                                                                                                                      var ball,img,paddle, gameState;
function preload() {
  ballimg = loadImage('ball.png');
  paddleimg=loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
  ball=createSprite(60,300,20,20);
  ball.addImage (ballimg); 
  ball.velocityX=0;  
  paddle=createSprite(390,200,20,100);
  paddle.addImage(paddleimg)
  gameState = "serve";

}

function draw() {
  background(205,153,0);
  
  
  if (gameState === "serve") {
    text("Press Space to Serve",150,180);
  }
  if(ball.isTouching(paddle)){
    hitSound.play();
    ball.x = ball.x - 5;
    ball.velocityX = -ball.velocityX;
  }
 if (keyDown("space") && gameState == "serve") {
    ball.velocityX = 5;
    ball.velocityY = 5;
    gameState = "play";
  }
  if (ball.x > 400){
     ball.x = 200;
    ball.y = 200;
    ball.velocityX = 0;
    ball.velocityY = 0;
    gameState = "serve";
  }

  
  edges=createEdgeSprites();
  //Bounce Off the Left Edge only
  ball.bounceOff(edges[0]); 
  if(ball.isTouching(edges[0])){
    hitSound.play();
    ball.x = ball.x + 5;
    ball.velocityX = -ball.velocityX;
  }  if (ball.isTouching(edges[2]) || ball.isTouching(edges[3])) {
    ball.bounceOff(edges[2]);
    ball.bounceOff(edges[3]);
    wall_hitSound.play();
  }
  if(keyDown(UP_ARROW))
  {
    paddle.y=paddle.y-20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y=paddle.y+20
  }
  

  drawSprites();
}




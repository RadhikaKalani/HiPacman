function setup() {
  //creating canvas
  createCanvas(640, 480);
  width = 640;
  height = 480;
  }

function draw() {
  //no outline
  noStroke(0);
  
  //pacman yellow face
  fill(255,255,0);
  ellipse(width/2, height/2, 250);
  
  //mouth
  fill(255);
  triangle(width/2, height/2, width/2 + 250, height/2 - 50, width ,height/2 + 250/2);
  
  //eye
  fill(0);
  ellipse(350, 180, 20);
  
  //change color
  if (mouseIsPressed == true) {
     fill(0, 0, 255);
     ellipse(width/2, height/2, 250);
    
    fill(0);
    rect(240, 200, 20, 100);
    rect(260, 240, 50, 20);
    rect(290, 200, 20, 100);
    rect(320, 200, 20, 100);
    rect(360, 200, 15, 100);
    rect(360, 310, 15, 20);
  }
  
}
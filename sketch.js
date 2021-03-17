var h,m,s;
var h_hand, m_hand, s_hand;

//

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
  
}

function draw() {
  background(255,255,255);
  translate(400,400);
  rotate(-90);
  h = hour();
  m = minute();
  s = second();

  h_hand = map(h%12,0,12,0,360);
  m_hand = map(m,0,60,0,360);
  s_hand = map(s,0,60,0,360);

  push();
  rotate(s_hand);
  stroke(0,0,0);
  strokeWeight(5);
  line(0,0,100,0);

  push();
  rotate(m_hand);
  stroke(0,0,0);
  strokeWeight(8);
  line(0,0,100,0);

  push();
  rotate(h_hand);
  stroke(0,0,0);
  strokeWeight(10);
  line(0,0,100,0);

  //drawing seconds hand
  push();
  rotate(scAngle); //rotate the hand based on angle calculated
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  stroke(255,20,150);
  point(0,0);
  strokeWeight(5);
  noFill();
  stroke("red");
  arc(0,0,300,0,h_hand)
  stroke("blue");
  arc(0,0,290,290,0,m_hand)
  stroke("green");
  arc(0,0,280,280,0,s_hand)

  drawSprites();
}

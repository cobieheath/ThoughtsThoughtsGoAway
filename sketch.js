var cnv,inp;
var stage = "typing";
var cc = 255
function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  inp.position(x + width/2 - 100,y + height/2 - 215);
}

function setup() {
  cnv = createCanvas(500, 700);
  inp = createInput();
  inp.position(width/2,height/2);
inp.size(200, 40);
inp.input(myInputEvent);
centerCanvas();
rectMode(CENTER);
}

function myInputEvent() {
  console.log('you are typing: ', this.value().length);
  cc = 255 - (this.value().length *2);
  if (cc <= 100){
    cc = 100
  }
}

function windowResized() {
  centerCanvas();
}

var h = 0
var y = 0
function draw() {
  background(70, 231, 241);
  
  if (stage == "raining") {
    
    fill(46, 89, 158)
    rect(width/2, y*6, 200, 400) //rain 
    if (y > 140) {
      stage = "flowering";
    }
  }
  if (stage == "flowering"){
    fill(70, 215, 19)
    rect(width/2, 625, 10, h++) //stem
    if (h >= 120) {
      h = 120
      fill(252, 240, 63)
      ellipse(width/2, 550, 20)
      ellipse(width/2,580,20)
      ellipse((width/2)-15, 565,20)
      ellipse((width/2)+15, 565,20)
      fill(151, 66, 41)
      ellipse(width/2, 565, 20)
      push()
      translate((width/2 + 10), 625)
      rotate(45)
      fill (70,215,19)
      ellipse(0, 0, 15, 30)
      pop()
      push()
      translate((width/2 - 10), 625)
      rotate(-45)
      fill(70,215,19)
      ellipse(0,0,15,30)
      pop()
    }
  }
  fill(70, 231, 241)
  rect(width/2, 0, 500, 320) //sky
  fill(31, 188, 24)
  noStroke()
  rect(width/2, 665, 500, 75) //ground
  fill(cc)
  ellipse(250, 125, 125)
  ellipse(200, 150, 125)
  ellipse(300, 150, 125)
  ellipse(350, 161, 100)
  ellipse(150, 161, 100)
  ellipse(250, 161, 100)
  y++;
  cc++;
}

function keyPressed() {
  if (keyCode === ENTER) {
    stage = "raining"
    inp.value('');
    y = 0;
  }
}
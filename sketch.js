// rain animation
// flower growing
// cloud changing color
// rain based on value of input

var cnv,inp;
var stage = "typing";

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
  console.log('you are typing: ', this.value());
}

function windowResized() {
  centerCanvas();
}

let enterTime

function draw() {
  background(106, 175, 184);
  if (stage == "raining") {
    fill(46, 89, 158)
    rect(width/2, frameCount, 200, 400)
    if (millis() - enterTime >= 3000) {
      stage = "flowering"
    }
  }
  fill(106, 175, 184)
  rect(width/2, 0, 500, 320)
  fill(81, 148, 88)
  noStroke()
  rect(width/2, 665, 500, 75)
  fill(255)
  ellipse(250, 125, 125)
  ellipse(200, 150, 125)
  ellipse(300, 150, 125)
  ellipse(350, 161, 100)
  ellipse(150, 161, 100)
  ellipse(250, 161, 100)
}

function keyPressed() {
  if (keyCode === ENTER) {
    stage = "raining"
    // record the current timestamp (millis()) in a variable called enterPressedTimestamp
    enterTime = millis();

  }
}
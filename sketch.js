var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(500, 700);
  centerCanvas();
  let inp = createInput();
  inp.position(50,50);
inp.size(200, 40);
inp.input(myInputEvent);
}

function myInputEvent() {
  console.log('you are typing: ', this.value());
}

function windowResized() {
  centerCanvas();
}

function draw() {
  background(106, 175, 184);
  fill(81, 148, 88)
  noStroke()
  rect(0, 625, 500, 75)
  fill(255,255,255)
  ellipse(250, 125, 125)
  ellipse(200, 150, 125)
  ellipse(300, 150, 125)
  ellipse(350, 161, 100)
  ellipse(140, 161, 100)
  ellipse(260, 161, 100)
}


let emitter;

let purple;
let pink;

function setup() {
  createCanvas(windowWidth, windowHeight);
  emitter = new Emitter(width / 2, height / 2);

  purple = color(51, 8, 71);
  pink = color(237, 7, 122);
}

function draw() {
  // Repeat a 2-second animation cycle
  let t = (millis() % 3000) / 3000;

  // Smooth fade in and fade out
  let amt = (1 - cos(TWO_PI * t)) / 2;

  let bgColor = lerpColor(purple, pink, amt);

  background(bgColor);

  emitter.updatePosition(mouseX, mouseY);
  emitter.emit(50);
  emitter.show();
  emitter.update();
}

/*let emitter;

function setup() {
  createCanvas(windowWidth, windowHeight);
  emitter = new Emitter(width / 2, height / 2);
}

function draw() {
  background(51, 8, 71); 
  emitter.updatePosition(mouseX, mouseY);
  emitter.emit(50);
  emitter.show();
  emitter.update();
}*/

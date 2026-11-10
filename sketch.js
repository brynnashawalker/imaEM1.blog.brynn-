let emitter;

let purple;
let pink;

function setup() {
  createCanvas(windowWidth, windowHeight);
  emitter = new Emitter(width / 2, height / 2);

  purple = color(51, 8, 71);
  pink = color(255, 105, 180);
}

function draw() {
  // Calculate a repeating 2-second cycle
  let t = (millis() % 2000) / 1000;

  // Smoothly fade between the two colors
  let amt;

  if (t < 1) {
    amt = t;
    background(lerpColor(purple, pink, amt));
  } else {
    amt = t - 1;
    background(lerpColor(pink, purple, amt));
  }

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

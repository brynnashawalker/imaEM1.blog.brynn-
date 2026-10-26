let emitter;

function setup() {
  createCanvas(windowWidth, windowHeight);
  emitter = new Emitter(width / 1, height / 1);
}

function draw() {
  /* background(51, 8, 71); */
  emitter.updatePosition(mouseX, mouseY);
  emitter.emit(5);
  emitter.show();
  emitter.update();
}

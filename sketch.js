let emitter;

function setup() {
  createCanvas(windowWidth, windowHeight);
  emitter = new Emitter(width / 4, height / 4);
}

function draw() {
  background(51, 8, 71); 
  emitter.updatePosition(mouseX, mouseY);
  emitter.emit(50);
  emitter.show();
  emitter.update();
}

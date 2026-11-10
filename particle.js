
class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(0.5, 2));
    this.acc = createVector(0, 0);
    this.r = 4;
    this.lifetime = 255;
    this.settled = false;
  }

  finished() {
    return this.lifetime < 0;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  edges() {
    // Bottom collision
    if (this.pos.y >= height - this.r) {
      this.pos.y = height - this.r;
      this.vel.y = 0;
      this.vel.x *= 0.9;
      this.settled = true;
    }

    // Side collisions
    if (this.pos.x >= width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -0.5;
    } else if (this.pos.x <= this.r) {
      this.pos.x = this.r;
      this.vel.x *= -0.5;
    }
  }

  update() {
    if (!this.settled) {
      // Gravity
      this.applyForce(createVector(0, 0.15));

      this.vel.add(this.acc);
      this.pos.add(this.vel);

      // Air resistance
      this.vel.mult(0.99);
    }

    this.acc.set(0, 0);

    // Keep settled particles visible
    if (!this.settled) {
      this.lifetime -= 1;
    }
  }

  show() {
    stroke(255, this.lifetime);
    strokeWeight(2);
    fill(255, this.lifetime);

    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}
/*
class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(0.5, 2));
    this.acc = createVector(0, 0);
    this.r = 4;
    this.lifetime = 255;
  }

  finished() {
    return this.lifetime < 0;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  edges() {
    if (this.pos.y >= height - this.r) {
      this.pos.y = height - this.r;
      this.vel.y *= -1;
    }

    if (this.pos.x >= width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -1;
    } else if (this.pos.x <= this.r) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    }
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);

    this.lifetime -= 5;
  }

  show() {
    stroke(255, this.lifetime);
    strokeWeight(2);
    fill(255, this.lifetime);

    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}
*/

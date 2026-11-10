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
    return false; // Keep particles visible
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update(particles) {
    if (!this.settled) {
      // Apply gravity
      this.applyForce(createVector(0, 0.15));

      this.vel.add(this.acc);
      this.pos.add(this.vel);

      this.acc.set(0, 0);

      // Floor collision
      if (this.pos.y >= height - this.r) {
        this.pos.y = height - this.r;
        this.settled = true;
        this.vel.set(0, 0);
      }

      // Collision with other particles
      for (let other of particles) {
        if (other === this) continue;

        let d = dist(
          this.pos.x,
          this.pos.y,
          other.pos.x,
          other.pos.y
        );

        let minDist = this.r + other.r;

        if (d < minDist && other.settled) {
          let angle = atan2(
            this.pos.y - other.pos.y,
            this.pos.x - other.pos.x
          );

          this.pos.x = other.pos.x + cos(angle) * minDist;
          this.pos.y = other.pos.y + sin(angle) * minDist;

          this.settled = true;
          this.vel.set(0, 0);
        }
      }

      // Keep particles inside the canvas
      this.pos.x = constrain(
        this.pos.x,
        this.r,
        width - this.r
      );
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

// Vector2 helper class
class Vector2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static fromAngle(angle) {
    return new Vector2(Math.cos(angle), Math.sin(angle));
  }

  add(v) {
    return new Vector2(this.x + v.x, this.y + v.y);
  }

  subtract(v) {
    return new Vector2(this.x - v.x, this.y - v.y);
  }

  div(v) {
    return new Vector2(this.x / v.x, this.y / v.y);
  }

  scale(s) {
    return new Vector2(this.x * s, this.y * s);
  }

  normalize() {
    const mag = this.magnitude();
    return new Vector2(this.x / mag, this.y / mag);
  }

  magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  toString() {
    return `${this.x},${this.y}`;
  }
}

export default Vector2;
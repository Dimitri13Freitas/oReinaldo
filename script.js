/** @type {HTMLCanvasElement} */
class Player {
  constructor(x, y, size, speed, ctx) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
    this.ctx = ctx;
    this.keys = {};
    window.addEventListener("keydown", (e) => (this.keys[e.key] = true));
    window.addEventListener("keyup", (e) => (this.keys[e.key] = false));
  }

  update() {
    this.move();
    if (this.keys["ArrowUp"]) console.log("fire");
  }

  move() {
    if (this.keys["w"] && this.y > 0) this.y -= this.speed;
    if (this.keys["a"] && this.x > 0) this.x -= this.speed;
    if (this.keys["s"] && this.y < windowHeight - this.size)
      this.y += this.speed;
    if (this.keys["d"] && this.x < windowWidth - this.size)
      this.x += this.speed;
  }
  draw() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }

  loop() {
    this.update();
    this.draw();
    requestAnimationFrame(() => this.loop());
  }
}

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const windowWidth = window.innerWidth * 0.7;
const windowHeight = window.innerHeight;

canvas.width = windowWidth;
canvas.height = windowHeight;

canvas.style.background = "white";
const player = new Player(50, 50, 30, 3, ctx);
player.loop();

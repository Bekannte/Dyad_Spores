let t = 0; // time variable
let saveButton, clearButton, mouseButton;

function setup() {
  createCanvas(500, 500);
  noStroke();
  fill(0);
}

function draw() {
  background(237,234,219,10); 
  

  for (let x = 0; x <= width; x = x + 150) {
    for (let y = 0; y <= height; y = y + 150) {
      const xAngle = map(0, 0, width, 4 * PI, 4 * PI, true);
      const yAngle = map(0, 0, height, 4 * PI, 4 * PI, true);

      const angle = xAngle * (x / width) + yAngle * (y / height);


      const myX = x + 30 * cos(3 * HALF_PI * t + angle);
      const myY = y + 30 * sin(3 * PI * t + angle);
      const meX = x + 20 * cos(3 * PI * t);
      const meY = y + 20 * sin(3 * HALF_PI * t);

      push(); // second push
      rect(myX, myY, 30); 
      fill(255,100,0);
      ellipse(meX, meY, 40); 
      pop();
    }
  }

  t = t + 0.01;

}
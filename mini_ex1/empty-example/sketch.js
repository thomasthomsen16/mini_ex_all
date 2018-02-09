var y = 500;
var x = 500;

function setup() {
createCanvas(700,700)
background('lightblue')

}

function draw() {

stroke('blues')
fill('pink')
  y = y - 5;
    if (y < 0) {
      y = 500;
}

x = x -5;
  if (x<0){
    x = 500;
  }
  ellipse(350,350,x,y)
}

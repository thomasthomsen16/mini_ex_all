
var xline = 0
var yline = 0
var xline2 = 0
var yline2 = 0


function setup() {

createCanvas(500,500);

background ('pink')

frameRate(5);

}

function draw() {

stroke(random([0],[250]), random([0],[250]), random([0],[250]))


yline = yline + 5;
  if (yline>height) {
    yline = 0;
    }

xline = xline + 50;
  if (xline>width) {
    xline = 0;
    }

yline2 = yline2 + 100;
  if (yline2>height) {
    yline2 = 0;
    }

xline2 = xline2 + 5;
  if (xline2<500) {
    xline2 = 0;
    }
line(xline,yline,xline2, yline2)

}

function mousePressed() {
  background('pink')


}

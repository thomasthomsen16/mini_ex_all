var img;
var smallPoint, largePoint;
var control = 0;

function preload() {
  img = loadImage("assets/Splash.jpg");
  img2 = loadImage("assets/Imran.jpg")
}

function setup() {
  createCanvas(2000,2000);
  smallPoint = 4;
  largePoint = 40;
  imageMode(CENTER);
  noStroke();
  background(255);

  // loading the pixels from the images
  img.loadPixels();
  img2.loadPixels();


}

function draw() {

// this variables draws the circles in relation to the x-pos of the mouseX
  var pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  // setting up two variables for grabbing random x and y pos from the images
  var x = [floor(random(img.width)),floor(random(img2.width))];
  var y = [floor(random(img2.height)),floor(random(img2.height))];
  // getting the colors from each image using the get() function and the above variables
  var pic1 = img.get(x[0],y[0]);
  var pic2 = img2.get(x[1],y[1]);
//
  var pix = [pic1,pic2]
/* using a for loop to grab the pixelcolor for images and shifting between them
in the fill() funcion*/
    for(var i = 0; i<pix.length;i++){
      fill(pix[i], 20);
      if(i>pix.length){
        i=0
      }
    }
/* drawing the cirles using a for loop to shift between the x and y pos for
each image and using the pointillize variable to set the size of each circle*/
    for (var i=0; i<x.length;i++){
      ellipse(x[i], y[i], pointillize, pointillize);
        if(i>1){
          i=0;
        }
    }
}

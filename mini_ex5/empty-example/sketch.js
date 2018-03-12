// the different variables for the speed of the lines as an array
var speed = [0,89,69,39,199];

// img variable for the titel
var img;

// the variable for all the meteors
let meteor = [];

function preload() {

//  preloading the titel

  img = loadImage('assets/SpaceStuff-3000.png')

// preloading the music

musicSpace = loadSound('assets/Spacemusic.mp3')

}

function setup() {

  createCanvas(windowWidth,windowHeight);

// playing the music

musicSpace.setVolume(0.9);
musicSpace.play();

// createing a new space with color and size

  spaceship = new Spaceship (color(0,0,255),25);

// creating a series of meteors

meteor[0] = new Meteor(color(random(155,255)),width*0.05,0,20,10);
meteor[1] = new Meteor(color(random(155,255)),width*0.1,0,30,5);
meteor[2] = new Meteor(color(random(155,255)),width*0.2,0,40,13);
meteor[3] = new Meteor(color(random(155,255)),width*0.3,0,35,10);
meteor[4] = new Meteor(color(random(155,255)),width*0.4,0,20,7);
meteor[5] = new Meteor(color(random(155,255)),width*0.5,0,15,9);
meteor[6] = new Meteor(color(random(155,255)),width*0.6,0,34,6.7);
meteor[7] = new Meteor(color(random(155,255)),width*0.7,0,40,5,9);
meteor[8] = new Meteor(color(random(155,255)),width*0.8,0,16.7,10.9);
meteor[9] = new Meteor(color(random(155,255)),width*0.9,0,32,7.8);
meteor[10] = new Meteor(color(random(155,255)),width*0.99,0,20,7);

}

function draw() {

background('black');

//displaying the titel

image(img,img.width/2,50);

//drawing the lines for moving effect

speed[0] = speed[0] + 20;

  if (speed[0] > height) {
    speed[0] = 0;
  }

  for (var i = 0; i < width; i +=80) {
    stroke('white');
    line(i,speed[0],i,speed[0]+1);
  }

  speed[1] = speed[1] + 66;

    if (speed[1] > height) {
      speed[1] = 0;
    }

    for (var i = 5; i < width; i +=90) {
      stroke('white');
      line(i,speed[1],i,speed[1]+1);
    }

  speed[2] = speed[2] + 49;

    if (speed[2] > height) {
      speed[2] = 0;
    }

    for (var i = 10; i < width; i +=80) {
        stroke('white');
        line(i,speed[2],i,speed[2]+1);
    }

    speed[3] = speed[3] + 33

      if (speed[3] > height) {
          speed[3] = 0;
      }

      for (var i = 7.5; i < width; i +=120) {
        stroke('white');
        line(i,speed[3],i,speed[3]+1);
      }

    speed[4] = speed[4] + 69

      if (speed[4] > height) {
                speed[4] = 0;
      }

      for (var i = 7.5; i < width; i +=89) {
          stroke('white');
          line(i,speed[4],i,speed[4]+1);
      }

// displaying the spaceship

spaceship.display();

// displaying all of the meteors

  for (let i= 0; i <meteor.length; i++){
    meteor[i].move();
    meteor[i].display();
  }


}

// the class for the spaceship
class Spaceship {

  constructor(getcolor, size) {
    this.getcolor = getcolor;
    this.size = size;
  }

  display() {
    //the outline and the color of the spaceship
    noStroke();
    fill(this.getcolor)
    //body of the spaceship
    triangle(mouseX,mouseY,mouseX+this.size,mouseY-this.size,mouseX+this.size*2,mouseY);
    // body of the engine
    fill(169,169,169)
    rect(mouseX+this.size/2,mouseY,this.size,this.size*0.40);
  }
}


// constructing the class for the meteor
class Meteor {

//setting up the parameters for the meteor
  constructor(getcolor,xpos,ypos,size,speed,){
    this.getcolor = getcolor;
    this.pos = new createVector(xpos,ypos);
    this.size = size;
    this.speed = speed;
  }

// the shape of the meteor.
  display() {
    noStroke();
    fill(this.getcolor);
    ellipse (this.pos.x,this.pos.y,this.size,this.size);


  }

// setting up the move parameter for the meteor
  move() {
    this.pos.y+=this.speed
    if (this.pos.y>height) {
      this.pos.y = 0;
    }
  }

}

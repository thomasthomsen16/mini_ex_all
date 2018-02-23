var x = 0; // defining the x-position variabel
var y = 0; // defining the y-position variabel
var throbber = []; // defining
var count=0;


function setup(){

createCanvas(1000,1000);

frameRate(2.6);
background('black')


}

function draw(){
for(var i =0; i<throbber.length;i++) {
  throbber[i].display();
}
if (mouseIsPressed){
x = mouseX
y = mouseY

/*
adding 1 to the array throbber [], so that an extra textrot gets displayed
*/
  throbber[count]= new textrot(10,x,y);
  count++;
} else {
  noStroke();
  fill(0,0,0,100)
  rect(0,0,width,height);

  }
}


/*
// function for the rotating textrot with the antal being the number of
rotating texts and x & y being the x-y position for the text
*/

function textrot(antal,x,y) {
this.display= function() {
push();
translate(x,y)
var cir = 360/antal*(frameCount%antal)
rotate(radians(cir));
fill('white');
text('please wait',30,30);
pop();
  }

}

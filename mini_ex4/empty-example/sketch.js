var input1;
var button;
var lexicon;
var buttonposx = 200
var buttonposy = 200
var nounCount = 0; /* a variabel used for outputting text in relation to the
number of nouns*/

function setup() {
createCanvas(1200,1000);
background('grey');


lexicon = new RiLexicon();
button = createButton('Click here when finished')
input1 = createInput('');

/*when button is pressed, the program will proces the function "ProcesRita"
*/
input1.changed(ProcesRita);
button.mousePressed(ProcesRita);
input1.size(800);


}


function ProcesRita() {
nounCount = 0;
  var s = input1.value();
  // the RiString() function is a text container object used for text analysis
  var rs = new RiString(s);
  var words = rs.words();
  /* the pos() function gets returns the part-of-speech tag for the word. A noun
  will have the tag 'nn'. The function uses PENN tag set */
  var pos = rs.pos();

var output = '';

/* this for-loops searches the input for nouns using the pos() function and the
built in lexicon, RiLexicon(), in Rita. When it finds a noun, it adds 1 to the
variabel 'nounCount' */
  for( var i = 0; i<words.length; i++){
     if (pos[i] == 'nn') {
       console.log(pos[i]);
       nounCount++;
      }
    }
}

function draw() {
button.position(buttonposx, buttonposy);
input1.position(buttonposx+160.48,buttonposy)

fill('black');
textSize(32)
textAlign(CENTER);
text('Write a short poem',width/2,100);

/* a series of if statements outputting text in relation the number of nouns
 using the 'nounCount' variabel.*/

if(nounCount > 10 ){
  baggrund();
  text('you seem distressed', width/2,400)

} else if (nounCount > 8 ) {
  baggrund();
  text('are you having a good day?',width/2,400)

} else if (nounCount>6) {
  baggrund();
  text('have you lost someone close to you?', width/2,400)

} else if (nounCount>4) {
  baggrund();
  text('are you lost for words?', width/2,400)

} else if (nounCount>2) {
  baggrund();
  text('everything seems hard at first', width/2,400)

}

}

function mousePressed() {
console.log(mouseX, mouseY);

}

/* a function for setting up the background, so that when the 'Click here When
finished' button resets the program */
function baggrund() {
background('grey');
  fill('black');
  textSize(32);
  textAlign(CENTER);
  text('Write a short poem',width/2,100);

}

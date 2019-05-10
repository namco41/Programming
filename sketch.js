var diam1=0
var text1=0

//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
   //an RGB color for the canvas' background
  //circle
  background(173,216,230);
  stroke(255,255,127) // an RGB color for the circle's border
  fill(16,16,16,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(width/2,height/2,diam1,diam1); // center of canvas, 20px dia
  diam1=diam1+10 // ellipse expansion
  textSize(40);
  textFont("Helvetica")
  textStyle(ITALIC);
  textAlign(CENTER);
  text("Lasers!",250,250);
  triangle(mouseX,mouseY,250,245); // incorrectly coded triangle that yeiled an interesting result
  ellipse(mouseX,mouseY,20,20); // pointer ellipse
	
triangle(random(width),random(height),20,20) // another incorrectly coded triangle that gave me LASERS!


  function mousePressed(){text1=text1+10} // could not get working

}

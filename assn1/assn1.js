function drawNameWithLines ()
{
  // insert your code here to draw the letters of your name 
  // using only lines()
  // The D 
  line(25, 25, 25, 100);
  line(25, 25, 40, 40);
  line(40, 40, 50, 60);
  line(50, 60, 50, 70);
  line(50, 70, 40, 85);
  line(40, 85, 25, 100);
  
  
  // The F
  line(80, 25, 80, 100);
  line(80, 25, 115, 25);
  line(80, 50, 115, 50);
  
  
}

function drawNameWithTriangles ()
{
  // insert your code here to draw the letters of your name 
  // using only ltriangles()
  // triangle (34, 45, 100, 100, 12, 255);
  x1 = 25;
  y1 = 150;
  
  x2 = 25;
  y2 = 175;
  
  x3 = 50;
  y3 = 150;
  // Top half of D
  triangle(x1,y1,x2,y2,x3,y3);
  triangle(x1,y1-10,x2,y2-10,x3-5,y3-10);
  triangle(x1,y1-20,x2,y2-20,x3-15,y3-20);
  triangle(x1,y1-30,x2,y2-30,x3-25,y3-30);
  
  // Bottom half of D
  triangle(x1,y1,x2,y2-10,x3-5,y3+10);
  triangle(x1,y1+20,x2,y2-20,x3-15,y3+20);
  triangle(x1,y1+30,x2,y2-30,x3-25,y3+30);
  
  
  // The F
  triangle(80, 125, 80, 175, 85, 125)
  triangle(80, 125, 115, 125, 80, 130)
  triangle(80, 140, 115, 140, 80, 145)
  

}

// -----------------------------------------------------------
//
//  Do not edit below this lne
//
// -----------------------------------------------------------

let doLine;
let doTri;
let lineColor;
let fillColor;
let backgroundColor;

function setup() {
  createCanvas(500, 500);
  backgroundColor = color (150, 150, 150);
  background(backgroundColor);
  doLine = false;
  doTri = false;
  lineColor = color (0, 0, 0);
  fillColor = color (255, 0, 0);
}

function draw ()
{
  if (doLine) stroke(lineColor); else stroke (backgroundColor);
  drawNameWithLines();
  
  if (doTri) {
     fill(fillColor);
     stroke(fillColor);
  }
  else {
    fill(backgroundColor);
    stroke(backgroundColor);
  }
  drawNameWithTriangles();
}

function keyPressed()
{
  if (key == 'l') doLine = !doLine;
  if (key == 't') doTri = !doTri;
}
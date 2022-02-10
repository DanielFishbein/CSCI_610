function myLine(x1, y1, x2, y2) {
    // insert your code here to draw a line from (x1, y1) to (x2, y2) 
    // using only calls to point().

    // your code should implement the Midpoint algorithm
    
  // Vertical line
  if(x1==x2){
    for(let y = y1; y < y2; y++){
      point(x1,y)
    }
  }
// Horizontal line
if(y1==y2){
  for(x = x1; x < x2; x++){
      point(x,y1)
    }
}
  // Positive line
  else if((y1 < y2) && (x1 < x2)){
    print("hello")
    dy = y2 - y1,
    dx = x2 - x1;
    dE = 2 * dy;
    dNE = 2 * (dy - dx);
    d = dE - dx;  /* 2*dy – dx */
    y = y1
    for(let x = x1; x < x2; x++){
      point(x, y);
      if (d <= 0) { /* choose E */
          d += dE;
      }
      else { /* choose NE */
          y++;
          d += dNE;
      }
    } 
  }
  // negitive line
  else if((y1 > y2) && (x1 < x2)){
    dy = y2 - y1,
    dx = x2 - x1;
    dE = 2 * dy;
    dNE = 2 * (dy - dx);
    d = dE - dx;  /* 2*dy – dx */
    y = y1
    for(x = x1; x < x2; x++){
      point(x, y);
      if (d >= 0) { /* choose E */
          d += dE;
      }
      else { /* choose NE */
          y--;
          d += dNE;
      }
    } 
  }
}

    



function myTriangle(x0, y0, x1, y1, x2, y2) {
    // insert your code here to draw a triangle with vertices (x0, y0), (x1, y1) and (x2, y2) 
    // using only calls to point().

    // your code should implement the the algorithm presented in the video
    for(point_y = 0; point_y < 500; point_y++){
        for(point_x = 0; point_x < 500; point_x ++){
          E0 = (point_x - x0)*(y1 - y0) - (point_y - y0)*(x1 - x0)
          E1 = (point_x - x1)*(y2 - y1) - (point_y - y1)*(x2 - x1)
          E2 = (point_x - x2)*(y0 - y2) - (point_y - y2)*(x0 - x2)
          if((E0 > 0) && (E1 > 0) && (E2 > 0)){
            point(point_x,point_y)
          }
        }
      }




}

// --------------------------------------------------------------------------------------------
//
//  Do not edit below this lne
//
// --------------------------------------------------------------------------------------------

let doMine;
let scene;
let backgroundColor;

function setup() {
    createCanvas(500, 500);
    doMine = true;
    scene = 1;
    backgroundColor = color(150, 150, 150);
    background(backgroundColor);
}

function draw() {
    fill(0, 0, 0);
    if (doMine) text("my solution", 20, 475);
    else text("reference", 20, 475);

    if (scene == 1) doLines();
    if (scene == 2) doHouse();

}

function doHouse() {
    if (!doMine) {
        fill(255, 0, 0);
        stroke(255, 0, 0);
        triangle(200, 300, 300, 200, 200, 200);
        triangle(300, 300, 300, 200, 200, 300);
        fill(0, 0, 255);
        stroke(0, 0, 255);
        triangle(200, 200, 300, 200, 250, 150);
        stroke(0, 255, 0);
        fill(0, 255, 0);
        triangle(250, 300, 275, 300, 250, 250);
        triangle(275, 300, 275, 250, 250, 250);
    }
    else {
        fill(128, 0, 0);
        stroke(128, 0, 0);
        myTriangle(200, 300, 300, 200, 200, 200);
        myTriangle(300, 300, 300, 200, 200, 300);
        fill(0, 0, 128);
        stroke(0, 0, 128);
        myTriangle(200, 200, 300, 200, 250, 150);
        stroke(0, 128, 0);
        fill(0, 128, 0);
        myTriangle(250, 300, 275, 300, 250, 250);
        myTriangle(275, 300, 275, 250, 250, 250);
    }
}

function doLines() {
    if (!doMine) {
        stroke(255, 255, 255);
        line(50, 250, 450, 250);
        line(250, 50, 250, 450);
        line(50, 450, 450, 50);
        line(50, 50, 450, 450);
    }
    else {
        stroke(0, 0, 0);
        // straight line
        myLine(50, 250, 450, 250);
        // virtical line
        myLine(250, 50, 250, 450);
        
        
        // positive line
        myLine(50, 450, 450, 50);
        // negitive line
        myLine(50, 50, 450, 450);
    }
}

function keyPressed() {
    if (key == '1') {
        background(backgroundColor);
        scene = 1;
    }

    if (key == '2') {
        background(backgroundColor);
        scene = 2;
    }

    if (key == 'm') {
        background(backgroundColor);
        doMine = !doMine;
    }
}
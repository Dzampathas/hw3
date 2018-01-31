// Rudy Playground

// This is a static, p5-like environment.

// You can draw lines and other shapes here, set colors, etc.,
// just as you would with p5. No setup() or draw() functions needed.

// Here are some commands to get you started:
//  line(10, 10, width-10, height-10);   -- draw a diagonal line
//  line(10, height-10, width-10, 10);   -- draw another
//  colorMode(HSB);                      -- start coloring with Hue, Saturation, Brightness
//  stroke(0, 255, 255);                 -- stroke with a nice red color
//  noFill();                            -- and don't fill
//  rect(10, 10, width-20, height-20);   -- draw a rectangle

function dimitriPatch(x, y) {
  fill(0,30,0);
  stroke(0,30,0);
  rect(x, y, 100, 100);
  fill(0, 200, 255);
  ellipse(x + 50,y + 50, 90, 90);
  
  fill(255,100,120);
  rect(x + 50, y + 50, 30, 30);
  rect(x + 20, y + 50, 30, 30);
  rect(x + 50, y + 20, 30, 30);
  rect(x + 20, y + 20, 30, 30);
  
  noStroke();
  fill(30,150,230);
  for(var i = 0; i < 4; i ++){
    rect(x + i*25.25 -1, y -1, 26,26);
  }
  for(i = 0; i < 4; i ++){
    rect(x + i*25.25 -1, y + 75.75, 26,26);
  }
   stroke(0,30,0);
  fill(80,190,150);
  ellipse(x + 50,y + 50, 25.25, 25.25);
  noFill();
  strokeWeight(2);
  stroke(0, 200, 255);
  ellipse(x + 50,y + 50, 50, 50);
  ellipse(x + 50,y + 50, 85, 85);
  ellipse(x + 50,y + 50, 95, 95);
  
  
  
  
  // your code here!
}

background(255);

dimitriPatch(0, 0);
dimitriPatch(width-100, height-100);

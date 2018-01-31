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


for(var i = 0; i < width; i += width/40) {
 line(i, 0, i, height);
}

background(255,255,255);

for(var i = 0; i < height; i += height/40) {
 line(0, i, width, i);
}

background(255,255,255);

for(var i = width; i > 0; i -= width/40) {
 line(width, i, i, height);
}
for(var i = width; i > 0; i -= width/40) {
 line(i, 0, 0, i);
}

background(255,255,255);
noFill();
for(var i = 1; i < 500; i += i/5) {
 	ellipse(width/2,height/2,i, i);
}

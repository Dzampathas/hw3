background(0,0,0);

for(var x = 0; x < 13; x ++) {
 for(var y = 0; y < 13; y ++){
   noStroke();
   fill(255,255,255);
  	ellipse(13 + width/13 * x,13 + height/13 * y, 20, 20);
 }
}

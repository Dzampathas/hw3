var size = 10

noFill();
//loop for everything
for( var b = 1; b < 6; b ++) {
  //loop for the single square
  for( var i = 0; i < 4; i ++) {
   rect(width/6 * b -(size + i*size)/2,height/2 -(size + i*size)/2, size + i*size, size + i*size);
  }
}

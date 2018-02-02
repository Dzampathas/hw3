for(var i = 0; i < width/2; i += 5) {
 line(i,0, i, i * 2); 
}
for( var i = width/2; i < width; i += 5) {
  line(i, 0, i, height);
}

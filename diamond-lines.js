//top will be at width/2 height 0

for( var i = 0; i < height/2 ; i += 5) {
 line(width/2 - i, i, width/2 + i, i); 
}

//middle will be at width height/2

for( var i = height/2; i < height; i+= 5){
  line(0 + i - height/2, i, width - (i - height/2), i)
}

//bottom will be at width/2 height 100%

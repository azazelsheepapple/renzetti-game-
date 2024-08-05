function setup() {
  createCanvas(400, 400);

  carinhapos = [width/2, height/2]
  background (210)
  won = false
  level = 0
  right = true

  textFont("Comic Sans MS")
  textSize(30)
  textAlign(CENTER, CENTER)
  
}

 function mouseClicked(){

   if(!won){
     if(dist(mouseX, mouseY, carinhapos[0], carinhapos[1]) < 20)
     {
       won = true
      background (0,255,0)
     }
   } 
   else{
     won = false
     level += 1
    background (210)
   }
   
 }

function draw() {
  fill(255,255,0)
  ellipse(carinhapos[0], carinhapos [1], 50,50);

  fill(255,0,0)
  ellipse(carinhapos[0], carinhapos[1] + 10, 20, 1)
  
  fill(0)
  ellipse(carinhapos[0] - 10, carinhapos[1] - 5, 5, 5)
  ellipse(carinhapos[0] + 10, carinhapos[1] - 5, 5, 5)

var sound;

function setup() {
	createCanvas(400,400);
	background(100,150,200);

	sound = loadSound('chimes.wav');
	//console.log("Setup!!!!");
}

function draw() {
	background(100,150,200);
  ellipse(mouseX,mouseY,60,60);
  //console.log("Drawing!!!");

  if (mouseX > width/2 && mouseY > height/2){
    background(200,150,100);
    ellipse(mouseX,mouseY,60,60);
    if (!sound.isPlaying()){
      console.log("Play the sound!");
      sound.play();
    }
  }
  else{
    sound.stop();
  }
}
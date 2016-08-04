var video;
var slider;

function setup() {
	canvas = createCanvas(640, 480, WEBGL);
	canvas.id('p5canvas');

	video = createVideo('media/reptile.mov',  function(){
		console.log("Video is loaded!");
		initSerious();
  });
}

function initSerious(){
	video.size(640, 480);
	video.id('p5video');
	
	video.play();
	//video.loop()
	
	video.hide();

	var seriously = new Seriously();

	var src = seriously.source('#p5video');
	var target = seriously.target('#p5canvas');

	slider = createSlider(0, 0.1, 0.05, 0.01);
	slider.id('blur-slider');
	var blur = seriously.effect('blur');
	blur.amount = '#blur-slider';
	blur.source = src;
	target.source = blur;

	// var chroma = seriously.effect('chroma');
	// chroma.source = src;
	// target.source = chroma;
	// var r = 70 / 255;
	// var g = 183 / 255;
	// var b = 82 / 255;
	// chroma.screen = [r,g,b,1];

	seriously.go();
}

/*
var toggle = true;
function mousePressed(){
	background(255);
	if(toggle){
		$('canvas').css('background-color','white');
	}
	else{
		$('canvas').css('background-color','pink');
	}
	toggle = !toggle;
}
*/

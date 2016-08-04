var video;
var slider;

function setup() {
  canvas = createCanvas(640, 480, WEBGL);
  canvas.id('p5canvas');
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.id('p5video');
  
  video.hide();

  var seriously = new Seriously();
  var src = seriously.source('#p5video');
  var target = seriously.target('#p5canvas');

  slider = createSlider(0, 1, 0.5, 0.01);
  slider.id('blur-slider');

  var blur = seriously.effect('blur');
  blur.amount = '#blur-slider';
  blur.source = src;
  target.source = blur;

  // var chroma = seriously.effect('chroma');
  // chroma.source = src;
  // target.source = chroma;
  // var r = 255/255;
  // var g = 255/255;
  // var b = 255/255;
  // chroma.screen = [r,g,b,1];

  seriously.go();
}



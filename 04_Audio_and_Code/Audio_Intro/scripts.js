var sound = new Howl({
  urls: ['chimes.wav'],
  onload: function(){
		console.log("Sound is loaded!!!");
		setUpEvents();
  }
});


function setUpEvents(){

	$('#play-button').click(function(){
		console.log("Play was pressed!");
		sound.play();
	});


	$('#stop-button').click(function(){
		console.log("Stop playing.");
		sound.stop();
	});

}
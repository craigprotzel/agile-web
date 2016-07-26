var sound;

function setClickEvents(){
	$('#play').click(function(){
		sound.play();
	});
	$('#pause').click(function(){
		sound.pause();
	});
}

function createHowl(link){
	sound = new Howl({
		src: ['chimes.wav'],
		onload: function() {
			console.log("Loaded!");
			$("button#play").css('background-color', 'green');
			setClickEvents();
		}
	});
}

$(document).ready(function(){
	createHowl();
});
var videos = [
	{
		title: "How To Make A Cappucino",
		iframe : '<iframe width="640" height="360" src="http://www.youtube-nocookie.com/embed/2Ao5b6uqI40?rel=0" frameborder="0" allowfullscreen></iframe>',
		description: "This is the first of 3 videos. It's teaches you how to make a cappucino!"
	},
	{
		title: "How To Make A Mocha",
		iframe : '<iframe width="640" height="360" src="http://www.youtube-nocookie.com/embed/aEHBmi1927g?rel=0" frameborder="0" allowfullscreen></iframe>',
		description: "This is the second of 3 videos. It's teaches you how to make a mocha!"
	},
	{
		title: "How To Make A Macchiato",
		iframe : '<iframe width="640" height="360" src="http://www.youtube-nocookie.com/embed/pPxWxY7kXG4?rel=0" frameborder="0" allowfullscreen></iframe>',
		description: "This is the last of 3 videos. It's teaches you how to make a macchiato!"
	}
];

$( document ).ready( function(){

	$('#buttonOne').click(function(){
		console.log("We clicked Button One!");
		$('#videoTitle').html(videos[0].title);
		$('#video').html(videos[0].iframe);
		$('#videoDescription').html(videos[0].description);
	});

	$('#buttonTwo').click(function(){
		console.log("We clicked Button Two!");
		$('#videoTitle').html(videos[1].title);
		$('#video').html(videos[1].iframe);
		$('#videoDescription').html(videos[1].description);
	});

	$('#buttonThree').click(function(){
		console.log("We clicked Button Three!");
		$('#videoTitle').html(videos[2].title);
		$('#video').html(videos[2].iframe);
		$('#videoDescription').html(videos[2].description);
	});

});

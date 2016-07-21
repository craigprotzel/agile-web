//Wait for the document to be ready
$(document).ready(function(){

	$('#left-circle').click(function(){
		console.log("Clicked left circle!");
		$('#mySVG').css("background-color", "red");
	});

	$('#right-circle').click(function(){
		console.log("Clicked left circle!");
		$('#mySVG').css("background-color", "blue");
	});

	$('#mouth').click(function(){
		console.log("CLicked mouth");
		$('#mySVG').css("background-color", "aqua");
	});

});

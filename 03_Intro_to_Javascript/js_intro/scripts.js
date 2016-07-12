//alert("Hello Class");

console.log('Hello Class');

/*
//Button Event Code
var theButton = document.getElementById('the-button');

var num = 1;

var changeText = function(){
	console.log("Change the text!!!");
	console.log("You pressed me " + num + " times.");

	var theDiv = document.getElementById('the-div');
	theDiv.innerHTML = "You pressed me " + num + " times.";

	num = num + 1;
};

//theButton.onclick = doSomething;
theButton.addEventListener('click', changeText, false);
*/

//Box Event Code
var theBox = document.getElementById('the-box');

var boxClick = function(){
	console.log("The box was clicked!");
};

theBox.addEventListener('click', boxClick, false);

var num = 1;
$('#the-button').click(function(){
	//Do this when the button is pressed

	//var theDiv = document.getElementById('the-div');
	//theDiv.innerHTML = "You pressed me " + num + " times.";
	$('#the-div').html("You pressed me " + num + " times.");

	num = num + 1;
});











'use strict';

var randomArrayString = function (textArray) {    // textArray being "input"

var randomNumber = Math.floor(Math.random()*textArray.length); // local variable

return textArray[randomNumber] /* output */;

}


$("name").click(function() {
	var textArray = new Array("victrola", "vivace", "stumptown", "bauhaus", "cherry st"),
	randomNumber = textArray[Math.floor( Math.random() * textArray.length)];
	$('textArray').text( randomNumber );
});
'use strict';

$(function() {

	$('#suggestionButton').on('click', function() {
		var textArray = new Array("victrola", "vivace", "stumptown", "bauhaus", "cherry st");
		var randomElememt = textArray[Math.floor(Math.random() * textArray.length)];
		$('#shopName').text(randomElememt);
	});

});
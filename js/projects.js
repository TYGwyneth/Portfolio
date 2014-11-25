$(document).ready(function(){

	// Randomize list
	var ul = document.getElementById('projectList');
		for (var i = ul.children.length; i >= 0; i--) {
		    ul.appendChild(ul.children[Math.random() * i | 0]);
		}

	// Make list stuff draggable
	$(function() {
    	$( "li" ).draggable();
    	$( "#smiley" ).draggable();
  	});

});
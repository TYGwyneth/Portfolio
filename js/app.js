$(document).ready(function(){

	//var paddingValue = Math.floor((Math.random()*100)+0);
	//$(".grid li").css({ "margin": paddingValue });
	
	// Make list stuff draggable
	$(function() {
    	$( "li" ).draggable();
    	$( "#smiley" ).draggable();
  	});

	// Left Menu
	leftMenu = false;
	$(function(){
	$('#menuButton').sidr();
	$('#menuButton').click(function() {
		$('body').css({'width':'80%','overflow':'hidden'});

		if (!leftMenu) {
			$('.menuButtonLine:nth-child(3)').css({'visibility':'hidden'});
			$('#header .menuButtonLine').css({'margin-bottom':'-2px'});
			$('.menuButtonLine:first-child').css({'transform':'rotate(45deg)'});
			$('.menuButtonLine:nth-child(2)').css({'transform':'rotate(135deg)'});
			$('.menuButtonLine:first-child').css({'width':'13px'});
			$('.menuButtonLine:nth-child(2)').css({'width':'13px'});
			leftMenu = true;
		}
		else {
			$('.menuButtonLine:first-child').css({'transform':'rotate(0deg)'});
			$('.menuButtonLine:nth-child(3)').css({'visibility':'visible'});
			$('.menuButtonLine:nth-child(2)').css({'transform':'rotate(0deg)'});
			$('#header .menuButtonLine').css({'margin-bottom':'2px'});
			$('.menuButtonLine:first-child').css({'width':'10px'});
			$('.menuButtonLine:nth-child(2)').css({'width':'10px'});
			leftMenu = false;
		};
		
	});
	});

	// Scroll to show header

	$('#footer').hide();

	$(window).scroll(function() {
		if($(window).scrollTop()>$(window).width() * 9/16 * 0.7){
			//$('#footer').css({'background':'#f9f9f9'});
			$('#footer').slideDown();
		}
		else if($(window).scrollTop()<$(window).width() * 9/16 * 0.7){
			
			$('#footer').slideUp();
		}
	});

	// Randomize list
	var ul = document.getElementById('projectList');
		for (var i = ul.children.length; i >= 0; i--) {
		    ul.appendChild(ul.children[Math.random() * i | 0]);
		}

	// Random smiley links
	$('#smiley').click(function () {
	var randomlinks=new Array()
	randomlinks[0]="http://www.dietraumdeutung.com"
	randomlinks[1]="http://tygwyneth.github.io/AllOutOfApps/"
	randomlinks[2]="http://tygwyneth.github.io/BirdInCup/"
	randomlinks[3]="http://tygwyneth.github.io/prism/"
	randomlinks[4]="http://tygwyneth.github.io/2d3d/"
	randomlinks[5]="http://tygwyneth.github.io/TheGame/"
	window.open(randomlinks[Math.floor(Math.random()*randomlinks.length)]);
	});
	
});
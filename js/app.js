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

	// Gradient Thingy

	var colors = new Array(
	  [62,35,255],
	  [60,255,60],
	  [255,35,98],
	  [45,175,230],
	  [255,0,255],
	  [255,128,0]);

	var step = 0;
	//color table indices for: 
	// current color left
	// next color left
	// current color right
	// next color right
	var colorIndices = [0,1,2,3];

	//transition speed
	var gradientSpeed = 0.002;

	function updateGradient()
	{
	var c0_0 = colors[colorIndices[0]];
	var c0_1 = colors[colorIndices[1]];
	var c1_0 = colors[colorIndices[2]];
	var c1_1 = colors[colorIndices[3]];

	var istep = 1 - step;
	var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
	var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
	var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
	var color1 = "#"+((r1 << 16) | (g1 << 8) | b1).toString(16);

	var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
	var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
	var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
	var color2 = "#"+((r2 << 16) | (g2 << 8) | b2).toString(16);

	 $('#sideMenuWrap').css({
	   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
	    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});

	  step += gradientSpeed;
	  if ( step >= 1 )
	  {
	    step %= 1;
	    colorIndices[0] = colorIndices[1];
	    colorIndices[2] = colorIndices[3];
	    
	    //pick two new target color indices
	    //do not pick the same as the current one
	    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
	    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
	    
	  }
	}

	setInterval(updateGradient,10);

	// Let's talk about....

	function clearBox(elementID)
	{
	    document.getElementById(elementID).innerHTML = "";
	}

	var talkAboutList = new Array(
		["Something"],
		["Gender"],
		["Me"],
		["&"],
		["You"],
		["Kioku"],
		["Seinfeld"],
		["Sex"]);

	function insertWordToTalkAbout(){
		$(".talkAbout").append(talkAboutList[Math.floor(Math.random()*talkAboutList.length)]);
	}

	window.setInterval(function(){
		$(".talkAbout").fadeOut( "fast", function (){
			$(".talkAbout").html("");
			insertWordToTalkAbout();
		});
		$(".talkAbout").fadeIn();
	}, 5000);

	$('#menuButton').click(function () {
		$(".talkAbout").html("");
		insertWordToTalkAbout();
	});
	
});
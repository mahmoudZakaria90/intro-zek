//Entry
require('./_render.js');


function init(){
	var audio = document.getElementsByTagName('audio')[0];
	audio.play();
	audio.volume = .1;
	setTimeout(function(){
		document.querySelector('.intro').className += ' display';
	} ,2000)
}

window.onload = function() {
	init();
	document.body.className = "loaded"
}
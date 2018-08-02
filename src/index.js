/*
	Title: Malico's Portfolio site
	Author: Malico Klash
*/
"use strict";
/*	Animation */
var text = document.getElementById('text');
var button = document.getElementById('btn');
var textTracker = 1;
var timer; // Timer global variable
/**
 * This functions loads the content of keywords
 * @return void
 */
function loadDoc() {
	var keywords;
  	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (xhttp.readyState == 4 && xhttp.status == 200) {
	    	keywords = xhttp.responseText;
	    	animation_body(JSON.parse(keywords));
	    }
  };
  xhttp.open("GET", "js/keywords.json", true);
  xhttp.send();
}
/**
 * starts all the functions that have to do with animation 
 * @return void
 */
var animation = function (){
	loadDoc();
}
// key functions 
button.addEventListener("click", function (){
	this.dataset.function();
})
function hello(){
	console.log("hello");
}
function hire(){
	console.log('hire');
}
/**
 * Actual animation body, loads and removes text
 * @param  {objects} slides each animation object [btn, text, function name]
 * @return {void}
 */
var animation_body = function (slides){
	/**
	 * Toolges the content of the button
	 * @param  {text} btn_text innerhtml
	 * @return {void}          
	 */
	var toogleButton = function (btn_text = null){
		if(btn_text == null){
			button.classList.remove('btn-show');
			button.classList.add('btn-hide');
		} else {
			button.innerHTML = btn_text;
			button.classList.remove('btn-hide');
			button.classList.add('btn-show');
		}
	}
	var loadText = function(){
		toogleButton(slides[textTracker - 1].btn);
		var animatedText = slides[textTracker - 1].keyword;
		var pointer = 0;
		text.innerHTML = "";
		button.dataset.function = slides[textTracker - 1].function;
		timer = setInterval(
			function(){
				text.innerHTML += animatedText[pointer];
				pointer++;
				if(pointer == animatedText.length){
					clearInterval(timer);
					textTracker++;
					setTimeout(
						function(){
							removeText(slides.length);
						}, 4000);
				}
			}, 100);
		
	 }
	 var removeText = function(n){
	 	toogleButton();
	 	var animatedText = text.innerHTML;
	 	var pointer = animatedText.length;
	 	timer = setInterval(
	 		function(){
	 			text.innerHTML = animatedText.substring(0, pointer--);
	 			if(pointer < 0){
	 				clearInterval(timer);
	 				if(textTracker >n) 
	 					textTracker = 1;
	 				setTimeout(
	 					function (){
	 						loadText();
	 					}, 1000);
	 			}
	 		}, 40);
	 	
	 }
 	loadText();
}
/*
	Load Events
*/
window.onload = function(){
	animation();
};
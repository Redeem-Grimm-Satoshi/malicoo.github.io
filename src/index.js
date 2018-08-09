/*
	Title: Malico's Portfolio site
	Author: Malico Klash
*/
"use strict";
/*	Animation */
var text = document.getElementById('text');
var button = document.querySelector("#btn");
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
  xhttp.open("GET", "js/keywords.json");
  xhttp.send();
}
/**
 * starts all the functions that have to do with animation 
 * @return void
 */

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
loadDoc();


function fade_ins(){
	var slides = document.getElementsByClassName('slide');
	
	for(var j = 0; j < slides.length; j++){
		slides[j].classList.add('slide-hide');
	}	
	var time;
	var j = 1;
	time = setInterval(function (){
		slides[j-1].classList.remove('slide-hide');
		slides[j-1].classList.add('slide-show');
		j++;
		if(j > slides.length){
			clearInterval(time);
		}
	}, 1000)
}
fade_ins();
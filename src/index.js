/*
	Title: Malico's Portfolio site
	Author: Malico Klash
*/
"use strict";
/*
	Tabs and all its animation
	--------------------------
*/
var menu = document.querySelector('.menu');
var menuItems = menu.childNodes;
var tabs = ['about', 'contact', 'hire'];
var slides = document.querySelectorAll('.slide');

for (var i = 0; i < menuItems.length; i++) {
	// Adds event listeners to the menu items
	menuItems[i].addEventListener('click', function (event){
		event.preventDefault();
		changeTab(event.target);
	}, false);
}

var changeTab = function (element){
	// This is the function that is invoked when the user clicks on the tabs
	clearTab();
	makeNewTab(element);
}

function clearTab(){
	for (var i = 0; i < menuItems.length; i++) {
		if(menuItems[i].classList)
			menuItems[i].classList.remove('active');
	}
	for (var i = 0; i < slides.length; i++) {
		slides[i].classList.remove('show');
	}
}
function makeNewTab(newTab){
	newTab.classList.add('active');
	document.querySelector("."+newTab.dataset.tab).classList.add('show');
}

/*
	Animation
	---------
	Author: Malico - 2016
*/
var text = document.getElementById('text');
var textHolder = [];
var textTracker = 1;
var timer; // Timer global variable

textHolder[0] = 'Hi.';
textHolder[1] = 'My Name is Malico Klash.';
textHolder[2] = "I'm a Software Developer!"

var animation = function (){
	loadText();

}
var loadText = function(){
	var animatedText = textHolder[textTracker - 1];
	var pointer = 0;
	text.innerHTML = "";
	timer = setInterval(
		function(){
			text.innerHTML += animatedText[pointer];
			pointer++;
			if(pointer == animatedText.length){
				clearInterval(timer);
				textTracker++;
				setTimeout(
					function(){
						removeText();
					}, 4000);
			}
		}, 100);
	
 }
 var removeText = function(){
 	var animatedText = text.innerHTML;
 	var pointer = animatedText.length;
 	timer = setInterval(
 		function(){
 			text.innerHTML = animatedText.substring(0, pointer--);
 			if(pointer < 0){
 				clearInterval(timer);
 				if(textTracker > textHolder.length) 
 					textTracker = 1;
 				setTimeout(
 					function (){
 						loadText();
 					}, 1000);
 			}
 		}, 40);
 	
 }

/*
	ReadMore
*/
var modal = document.querySelectorAll('.modal_button');

for (var i = 0; i < modal.length; i++) {
	modal[i].addEventListener('click', function (event){
		activateModal(event.target.dataset.slide);
	}, false);
}	

var activateModal = function (modalSlide){
	
}

/*
	Load Events
*/
window.onload = function(){
	animation();
};
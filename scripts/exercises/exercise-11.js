"use strict"

/* 
--------------------
	EXERCISE 11
--------------------
	
	Write a function called "frontBack" which takes the following parameters:
		- text: String

	Given a string, return a new string where the first and last chars have been exchanged.
*/

const frontBack = (text) => {
/*	if (!text){
		return "";
	}
	
	var array = text.split("");
	var firstCharacter = array.shift();
	var lastCharacter = array.splice(-1,1);
	array.unshift(lastCharacter[0]);
	array.push(firstCharacter);
	
	return array.join("");
*/
	if (!text){
		return "";
	}
	
	if (text.length == 1) {
		return text;
	}
	
	const first = text.charAt(0); 						// See what made charAt
	const middle = text.slice(1, text.length -1);
	const last = text.charAt(text.length -1);
	
	return last + middle + first;	
}

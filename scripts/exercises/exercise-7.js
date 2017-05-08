"use strict"

/* 
--------------------
	EXERCISE 7
--------------------
	
	Write a function called "stringWithE" which takes the following parameters:
		- text: String
		
	
	Return true if the given string contains between 1 and 3 'e' chars
*/

const stringWithE = text => {
	
	if(!text){
		return false;
	}
	
	let counter = 0;
	
	for (var i = 0; i < text.length; i++) {
		if(text[i] === "e"){
			counter++;
		}
	}
	
	return (counter >= 1 && counter <= 3);
};
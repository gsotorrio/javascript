"use strict"

/* 
--------------------
	EXERCISE 6
--------------------
	
	Write a function called "mixStart" which takes the following parameters:
		- text: String
		
	Return true if the given string begins with "mix". 
	Except the 'm' can be anything, so "pix", "9ix"...all count.
*/

const mixStart = (text) => {
	if (text == null || text.length < 3){
		return false;
	}
	
	return (text.slice(1, 3) === "ix");	
}
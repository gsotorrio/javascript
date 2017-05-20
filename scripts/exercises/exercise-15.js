"use strict"

/* 
--------------------
	EXERCISE 15
--------------------
	
	Write a function called "startOz" which takes the following parameters:
		- text: String

	Given a string, return a string made of the first 2 chars (if present). 
	However, include first char only if it is 'o'.
	And include the second only if it is 'z'.	
*/

const startOz = (text) => {
	
	if(text.slice(0,2) == "oz"){
		return "oz";
	}
	if(text.slice(0,1) == "o" && text.slice(1,2) != "z"){
		return "o";
	}
	if(text.slice(0,1) != "o" && text.slice(1,2) == "z"){
		return "z";
	}
	
	return "";
}

"use strict"

/* 
--------------------
	EXERCISE 7
--------------------
	
	Write a function called "stringWithE" which takes the following parameters:
		- text: String
		
	
	Return true if the given string contains between 1 and 3 'e' chars
*/

const stringWithE = (text) => {
	
	if (!text || (text.match(/e/g)).length > 3 || (text.split("e").length -1) == 0){
		return false;
	}
	
	return (text.slice(0,1) == "e" || text.slice(1,2) == "e" || text.slice(2,3) == "e");	
}
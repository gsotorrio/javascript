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
	
	if (!text || text.replace(/[^e]/g, "").length > 3 || text.replace(/[^e]/g, "").length == 0){
		return false;
	}
	
	return (text.replace(/[^e]/g, "").length <= 3);	
}
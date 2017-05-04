"use strict"

/* 
--------------------
	EXERCISE 3
--------------------

	Write a function called "missingChar" which takes the following parameters:
		- text: String
		- number: Number

	Given a valid string and a number X, 
	return a new string where the char at index X has been removed.

	Example:
		- text = "Guillermo"
		- number = "5"
		- result = "Guillrmo"
		
	If the function receives a no valid string, it throws an exception error with the following message:
		- Exception message: "Text cannot be empty"
	 
	If the number is not within the text's length range, it throws an error:
		- Exception message: "Number cannot be negative or bigger than text length"
*/

const missingChar = (text, number) => {
	if (text == "" || text == null) {
		return "Text cannot be empty";
	}
	
	if (number < 0 || number > text.length){
		return "Number cannot be negative or bigger than text length";
	}
	
	return text.slice(0, number - 1) + text.slice(number);
};



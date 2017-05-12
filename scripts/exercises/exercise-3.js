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

const throwExceptionEmpty = (message) => {
	this.message = message;
	this.name = "throwExceptionEmpty";
}

const throwException = (message) => {
	this.message = message;
}


const missingChar = (text, number) => {
		if (text == null) {
			throw new throwExceptionEmpty("Text cannot be empty");
		}
		
		return text.slice(0, number - 1) + text.slice(number);
	

	
	
		
	
	
		//if (number <= 0 || number > text.length){
		//	throw Error("Number cannot be negative or bigger than text length");
		//}
	
};



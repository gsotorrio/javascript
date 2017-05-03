"use strict"

/* 
--------------------
	EXERCISE 2
--------------------

	Write a function called "diff21" which takes the following parameters:
		- number: Number

	Given a number X, 
	the function returns the absolute difference between X and 21, 
	except returns double the absolute difference if X is over 21.
*/

var diff21 = (number) => {
	let result = 21 - number;
	
	if (number > 21){
		result = (number - 21)*2;
	}
	
	return result;
};
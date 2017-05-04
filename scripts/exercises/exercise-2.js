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

const diff21 = (number) => {
	
	
	if (number > 21){
		return (number - 21)*2;
	}
	
	return 21 - number;
};

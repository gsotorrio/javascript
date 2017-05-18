"use strict"

/* 
--------------------
	EXERCISE 12
--------------------
	
	Write a function called "multipleOf35" which takes the following parameters:
		- value: Number

	
	Return true if the given non-negative number is a multiple of 3 or a multiple of 5. 
	Return false if it is a negative number.
*/

const multipleOf35 = (number) => {
	if (number < 0){
		return false;
	}
	
	return (number % 3 == 0 || number % 5 == 0)
}
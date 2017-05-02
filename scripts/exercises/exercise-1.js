"use strict"

/* 
--------------------
	EXERCISE 1
--------------------

	Write a function called "sleepIn" which takes the following parameters:
		- weekday: Boolean
		- vacation: Boolean

	The parameter weekday is true if it is a weekday.
	The parameter vacation is true if we are on holidays. 
	We sleep in if it is not a weekday or we're on holidays. 
	The function returns true if we sleep in.
*/

function sleepIn(weekday, vacation){
		if (vacation == true || weekday == false){
			return true;
		}
		else {
			return false;
		}		
}
"use strict"

/* 
--------------------
	EXERCISE 9
--------------------
	
	Write a function called "parrotTrouble" which takes the following parameters:
		- isTalking: Boolean
		- hour: Number

	We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..24. 
	We are in trouble if the parrot is talking and the hour is before 7 or after 20. 
	Return true if we are in trouble.
*/

const parrotTrouble = (isTalking, hour) => {
	return (isTalking && (hour < 7 || hour > 20));
}
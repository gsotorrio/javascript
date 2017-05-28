"use strict"

/* 
--------------------
	EXERCISE 18
--------------------

Write a function called "sumDouble" which takes the following parameters:
		- x: Number
		- y: Number


Given two int values, return their sum. Unless the two values are the same, 
then return double their sum.
*/

const sumDouble = (x, y) => {
	if (x != y) {
		return x + y;
	}
	
	return (x + y)*2;
}


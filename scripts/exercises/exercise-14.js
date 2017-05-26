"use strict"

/* 
--------------------
	EXERCISE 14
--------------------
	
	Write a function called "loneTeen" which takes the following parameters:
		- x: Number
		- y: Number

	We'll say that a number is "teen" if it is in the range 13..19 inclusive. 
	Given 2 int values, return true if one or the other is teen, but not both.
*/

const loneTeen = (x, y) => {
	/*
	if (x >= 13 && x <= 19 && y >= 13 && y <= 19){
		return false;
	}
	
	return (x >= 13 && x <= 19 || y >= 13 && y <= 19);
	*/
	
	return !(x >= 13 && x <= 19 && y >= 13 && y <= 19);
}
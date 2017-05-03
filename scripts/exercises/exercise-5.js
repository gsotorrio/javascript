"use strict"

/* 
--------------------
	EXERCISE 4
--------------------

	Write a function called "hasTeen" which takes the following parameters:
		- x: Number
		- y: Number
		- z: Number
		
	We'll say that a number is "teen" if it is in the range 13..19 inclusive. 
	Given 3 int values, return true if 1 or more of them are teen.
*/

var hasTeen = (x, y, z) => {
	
	return (x>=13 && x<=19) ||
		   (y>=13 && y<=19) ||
		   (z>=13 && z<=19);
};
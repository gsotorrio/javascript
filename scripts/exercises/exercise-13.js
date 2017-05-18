"use strict"

/* 
--------------------
	EXERCISE 13
--------------------
	
	Write a function called "icyHot" which takes the following parameters:
		- temp1: Number
		- temp2: Number

	
	Given two temperatures, return true if one is less than 0 and the other is greater than 100.
*/

const icyHot = (temp1, temp2) => {
	if(temp1 > 100 && temp2 > 100 || temp1 == 100 && temp2 > 100 || temp1 < 0 && temp2 == 0 || temp1 < 0 && temp2 < 0){
		return false;
	}
	
	return (temp1 < 0 || temp2 < 0 && temp1 > 100 || temp2 > 100);
}
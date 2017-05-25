"use strict"

/* 
--------------------
	EXERCISE 10
--------------------
	
	Write a function called "posNeg" which takes the following parameters:
		- x: Number
		- y: Number
		- isNegative: Boolean

	Given 2 int values, return true if one is negative and one is positive. 
	Except if the parameter "isNegative" is true, then return true only if both are negative.
*/

const posNeg = (x, y, isNegative) => {
	//if(isNegative && x < 0 && y < 0){
	//	return true;
	//}
	
	//if (isNegative && x < 0 && y >= 0 || x >= 0 && y < 0){
	//	return false;
	//}
	
//	return (x < 0 && y >= 0 || x >= 0 && y < 0);

if(isNegative)
{
	return (x < 0 && y < 0);
}

return (x < 0 && y > 0) || (x > 0 && y < 0); // Doubt: it is more correct (x < 0 && y >= 0) || (x >= 0 && y < 0)
}
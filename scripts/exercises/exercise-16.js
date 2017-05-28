"use strict"

/* 
--------------------
	EXERCISE 16
--------------------

Write a function called "in3050" which takes the following parameters:
		- x: Number
		- y: Number

Given 2 int values, return true 
if they are both in the range 30..40 inclusive,
or they are both in the range 40..50 inclusive.
*/

const in3050 = (x, y) => {
	return (x >= 30 && x <= 40 && y >= 30 && y <= 40 || x >= 40 && x <= 50 && y >= 40 && y <= 50);
}

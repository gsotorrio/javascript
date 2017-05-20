"use strict"

/* 
--------------------
	EXERCISE 17
--------------------

Write a function called "lastDigit" which takes the following parameters:
		- x: Number
		- y: Number

Given two non-negative int values, return true if they have the same last digit.
For instance: 27 and 57. 
Note that the % "mod" operator computes remainders, so 17 % 10 is 7.
*/

const lastDigit = (x, y) => {
	return x.toString().split('').pop() == y.toString().split('').pop();
	return false;
}
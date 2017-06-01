"use strict"

/* 
--------------------
	EXERCISE 30
--------------------
	
	Write a function called "isBlackJack" which takes the following parameters:
		- cards: Array
		
	The function should return the "best game" counting all the cards.
	For instance:
	- [8, 1, 2] = 21
	- [9, 10, 1] = 20
	- [8, 1, 5, 7, 4] = 25 
*/

const isBlackJack = (cards) => {
	var index = cards.indexOf(1);
	var result = 0;
	
	for (var i =0; i < cards.length; i++){
			 result += cards[i];
		}	
		
	if(index == -1){
		return result;
	}
	
	if (index != -1 && result >11) {
		return result;
	}
	return result + 10;
}
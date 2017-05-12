QUnit.module("Exercise 30", () => {
	
	let cards;
	
	test("isBlackJack should return SUM when there are not aces", assert => {
		
		// Arrange
		cards = [10, 5, 7];
		const expected = 22;
		
		// Act
		var actual = isBlackJack(cards);
		
		// Assert
		assert.equal(actual, expected, "Passed!. 10 + 5 + 7 = 22");
	});
	
	test("isBlackJack should return SUM when ace cannot be used as 11", assert => {
		
		// Arrange
		cards = [3, 5, 1, 7];
		const expected = 16;
		
		// Act
		var actual = isBlackJack(cards);
		
		// Assert
		assert.equal(actual, expected, "Passed!. 3 + 5 + 1 + 7 = 16");
	});
	
	test("isBlackJack should return SUM plus 11 when ace can be used as 11", assert => {
		
		// Arrange
		cards = [3, 2, 1, 4];
		const expected = 20;
		
		// Act
		var actual = isBlackJack(cards);
		
		// Assert
		assert.equal(actual, expected, "Passed!. 3 + 2 + 1 + 4 = 20");
	});
	
	test("isBlackJack should use only one ace as 11", assert => {
		
		// Arrange
		cards = [1, 1, 1, 1, 1];
		const expected = 15;
		
		// Act
		var actual = isBlackJack(cards);
		
		// Assert
		assert.equal(actual, expected, "Passed!. 1 + 1 + 1 + 1 = 15");
	});
});
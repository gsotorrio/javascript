QUnit.module("Exercise 20", () => {
	
	let cards;
	
	test("isBlackJack should return SUM when there are not onces", assert => {
		
		// Arrange
		cards = [10, 5, 7];
		const expected = 22;
		
		// Act
		var actual = isBlackJack(cards);
		
		// Assert
		assert.equal(actual, expected, "Passed!. 10 + 5 + 7 = 22");
	});
});
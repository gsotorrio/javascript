QUnit.module("Exercise 2", () => {
	
	var number, expected;
	
	test("diff21 should return the absolute different between number and 21", assert => {
		
		// Arrange
		number = 10;
		expected = 11;
		
		// Act
		var actual = diff21(number);
		
		// Assert
		assert.equal(actual, expected, "Passed!. Example: (21 - 10) = 11");
	});
	
	test("diff21 should return double the absolute difference when number is greater than 21", assert => {
		
		// Arrange
		number = 25;
		expected = 8;
		
		// Act
		var actual = diff21(number);
		
		// Assert
		assert.equal(actual, expected, "Passed!. Example (25 - 21) = 4 x 2 = 8")
	});
});
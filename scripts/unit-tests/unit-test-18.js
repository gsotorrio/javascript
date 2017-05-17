QUnit.module("Exercise 18", () => {
	
	let x, y, expected;
	
	test("sumDouble should return double the sum when both numbers are the same", assert => {
		
		// Arrange
		x = y = 121;
		expected = 484;
		
		// Act
		const actual = sumDouble(x, y);
		
		// Assert
		assert.equal(actual, expected, "Passed!. x = 121 & y = 121. sum = 484");
	});
	
	test("sumDouble should return the sum when both numbers are not the same", assert => {
		
		// Arrange
		x = 10;
		y = 121;
		expected = 131;
		
		// Act
		const actual = sumDouble(x, y);
		
		// Assert
		assert.equal(actual, expected, "Passed!. x = 10 & y = 121. sum = 131");
	});
});
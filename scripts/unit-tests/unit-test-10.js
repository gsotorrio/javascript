QUnit.module("Exercise 10", () => {
	
	let x, y, isNegative;
	
	test("posNeg should return TRUE when one number is negative and the other positive", assert => {
		
		// Arrange
		x = -1;
		y = 1;
		isNegative = false;
		
		// Act
		const result = posNeg(x, y, isNegative);
		
		// Assert
		assert.ok(result, "Passed!. x was negative and y was positive.");
	});
	
	test("posNeg should return TRUE when both number are negative and isNegative is true", assert => {
		
		// Arrange
		x = -1;
		y = -1;
		isNegative = true;
		
		// Act
		const result = posNeg(x, y, isNegative);
		
		// Assert
		assert.ok(result, "Passed!. Both are negative and isNegative is true.");
	});
	
	test("posNeg should return FALSE when isNegative is true but only one number is negative", assert => {
		
		// Arrange
		x = -1;
		y = 1;
		isNegative = true;
		
		// Act
		const result = posNeg(x, y, isNegative);
		
		// Assert
		assert.notOk(result, "Passed!. isNegative was true and only x was negative.");
	});
});
QUnit.module("Exercise 10", () => {
	
	let x, y, isNegative;
	
	test("posNeg should return TRUE when isNegative is true and x and y negative", assert => {
		
		// Arrange
		x = -1;
		y = -1;
		isNegative = true;
		
		// Act
		const result = posNeg(x, y, isNegative);
		
		// Assert
		assert.ok(result, "Passed!. x and y are negative.");
	});
	
	test("posNeg should return FALSE when isNegative is true and one number is positive and the other negative", assert => {
		
		// Arrange
		x = -1;
		y = 1;
		isNegative = true;
		
		// Act
		const result = posNeg(x, y, isNegative);
		
		// Assert
		assert.notOk(result, "Passed!. x is positive and y is negative.");
	});
	
	test("posNeg should return FALSE when isNegative is true and both numbers are positive", assert => {
		
		// Arrange
		x = 1;
		y = 1;
		isNegative = true;
		
		// Act
		const result = posNeg(x, y, isNegative);
		
		// Assert
		assert.notOk(result, "Passed!. x and y are positive.");
	});
	
	test("posNeg should return FALSE when isNegative is true and both numbers are zero", assert => {
		
		// Arrange
		x = 0;
		y = 0;
		isNegative = true;
		
		// Act
		const result = posNeg(x, y, isNegative);
		
		// Assert
		assert.notOk(result, "Passed!. x and y are zero.");
	});
	
	test("posNeg should return TRUE when isNegative is false and one number is positive and the other negative", assert => {
		
		// Arrange
		x = -1;
		y = 1;
		isNegative = false;
		
		// Act
		const result = posNeg(x, y, isNegative);
		
		// Assert
		assert.ok(result, "Passed!. x is positive and y is negative.");
	});
	
	test("posNeg should return FALSE when isNegative is false and both numbers are negative", assert => {
		
		// Arrange
		x = -1;
		y = -1;
		isNegative = false;
		
		// Act
		const result = posNeg(x, y, isNegative);
		
		// Assert
		assert.notOk(result, "Passed!. x and y are negative.");
	});
	
	test("posNeg should return FALSE when isNegative is false and both numbers are positive", assert => {
		
		// Arrange
		x = 1;
		y = 1;
		isNegative = false;
		
		// Act
		const result = posNeg(x, y, isNegative);
		
		// Assert
		assert.notOk(result, "Passed!. x and y are positive.");
	});
	
	test("posNeg should return FALSE when isNegative is false and both numbers are zero", assert => {
		
		// Arrange
		x = 0;
		y = 0;
		isNegative = false;
		
		// Act
		const result = posNeg(x, y, isNegative);
		
		// Assert
		assert.notOk(result, "Passed!. x and y are zero.");
	});
});
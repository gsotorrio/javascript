QUnit.module("Exercise 17", () => {
	
	let x, y;
	
	test("lastDigit should return FALSE when last digit is different", assert => {
		// Arrange
		x = 27;
		y = 72;
		
		// Act
		var result = lastDigit(x, y);
		
		// Assert
		assert.notOk(result, "Passed!. x = 27 and y = 72")
	});
	
	test("lastDigit should return TRUE when last digit is the same", assert => {
		// Arrange
		x = 27;
		y = 807;
		
		// Act
		var result = lastDigit(x, y);
		
		// Assert
		assert.ok(result, "Passed!. x = 27 and y = 807")
	});
});
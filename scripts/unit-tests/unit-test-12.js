QUnit.module("Exercise 12", () => {
	
	let value;
	
	test("multipleOf35 should return FALSE when value is negative", assert => {
		
		// Arrange
		value = -1;
		
		// Act
		var result = multipleOf35(value);
		
		// Assert
		assert.notOk(result, "Passed!. Value was -1");
	});
	
	test("multipleOf35 should return FALSE when value is not multiple of 3 and not multiple of 5", assert => {
		
		// Arrange
		value = 22;
		
		// Act
		var result = multipleOf35(value);
		
		// Assert
		assert.notOk(result, "Passed!. Value was 22. No multiple of 3 or 5.");
	});
	
	test("multipleOf35 should return TRUE when value is multiple of 3 or 5", assert => {
		
		// Arrange
		value = 9;
		
		// Act
		var result = multipleOf35(value);
		
		// Assert
		assert.ok(result, "Passed!. Value was 9. No multiple of 3.");
	});
});
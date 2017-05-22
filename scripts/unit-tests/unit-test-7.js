QUnit.module("Exercise 7", () => {
	
	let text;
	
	test("stringWithE should return FALSE when text is empty", assert => {
		
		// Arrange
		text = "";
		
		// Act
		const result = stringWithE(text);
		
		// Assert
		assert.notOk(result, "Passed!. Text was empty.")
	});
	
	test("stringWithE should return FALSE when text is null", assert => {
		
		// Arrange
		text = null;
		
		// Act
		const result = stringWithE(text);
		
		// Assert
		assert.notOk(result, "Passed!. Text was null.")
	});
	
	test("stringWithE should return FALSE when text is undefined", assert => {
		
		// Arrange
		text = undefined;
		
		// Act
		const result = stringWithE(text);
		
		// Assert
		assert.notOk(result, "Passed!. Text was undefined.")
	});
	
	test("stringWithE should return FALSE when text doesn't have any 'e'", assert => {
		
		// Arrange
		text = "javascript";
		
		// Act
		const result = stringWithE(text);
		
		// Assert
		assert.notOk(result, "Passed!. Text didn't have any 'e'.")
	});
	
	test("stringWithE should return FALSE when text have more than 3 'e'", assert => {
		
		// Arrange
		text = "Helen Stepe";
		
		// Act
		const result = stringWithE(text);
		
		// Assert
		assert.notOk(result, "Passed!. Text had 4 'e'.")
	});
	
	test("stringWithE should return TRUE when text have 1, 2 or 3 'e'", assert => {
		
		// Arrange
		text = "You and Helen";
		
		// Act
		const result = stringWithE(text);
		
		// Assert
		assert.ok(result, "Passed!. Text had 2 'e'.")
	});
});
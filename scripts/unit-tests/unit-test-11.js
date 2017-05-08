QUnit.module("Exercise 11", () => {
	
	let text;
	
	test("frontBack should return empty when text is empty", assert => {
		
		// Arrange
		text = "";
		const expected = "";
		
		// Act
		var actual = frontBack(text);
		
		// Assert
		assert.equal(actual, expected, "Passed!. Text was empty.");
	});
	
	test("frontBack should return empty when text is null", assert => {
		
		// Arrange
		text = null;
		const expected = "";
		
		// Act
		var actual = frontBack(text);
		
		// Assert
		assert.equal(actual, expected, "Passed!. Text was null.");
	});
	
	test("frontBack should return empty when text is undefined", assert => {
		
		// Arrange
		text = undefined;
		const expected = "";
		
		// Act
		var actual = frontBack(text);
		
		// Assert
		assert.equal(actual, expected, "Passed!. Text was undefined.");
	});
	
	test("frontBack should return the same text when text is just a character", assert => {
		
		// Arrange
		text = "a";
		const expected = "a";
		
		// Act
		var actual = frontBack(text);
		
		// Assert
		assert.equal(actual, expected, "Passed!. Text was 'a'.");
	});
	
	test("frontBack should return a text with the first and the last characters interchanged", assert => {
		
		// Arrange
		text = "abc";
		const expected = "cba";
		
		// Act
		var actual = frontBack(text);
		
		// Assert
		assert.equal(actual, expected, "Passed!. Text was 'abc' and the result 'cba'.");
	});
});
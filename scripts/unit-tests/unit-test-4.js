QUnit.module("Exercise 4", () => {
	
	var text;
	
	test("backAround should return an empty string when text's length is zero", assert => {
		
		// Arrange
		text = "";
		expected = "";
		
		// Act
		var actual = backAround(text);
		
		// Assert
		assert.equal(actual, expected, "Passed!. Text was empty");
	});
	
	test("backAround should return an empty string when text is null", assert => {
		
		// Arrange
		text = null;
		expected = "";
		
		// Act
		var actual = backAround(text);
		
		// Assert
		assert.equal(actual, expected, "Passed!. Text was null");
	});
	
	test("backAround should return an empty string when text is undefined", assert => {
		
		// Arrange
		expected = "";
		
		// Act
		var actual = backAround(text);
		
		// Assert
		assert.equal(actual, expected, "Passed!. Text was undefined");
	});
	
	test("backAround should return a new text with the last character added to the front and back", assert => {
		
		// Arrange
		text = "cat";
		expected = "tcatt";
		
		// Act
		var actual = backAround(text);
		
		// Assert
		assert.equal(actual, expected, "Passed!. cat => tcatt");
	});
});
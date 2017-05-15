QUnit.module("Exercise 15", () => {
	
	let text;
	
	test("startOz should return 'oz' when text starts with 'oz'", assert => {
		
		// Arrange
		text = "ozymandias";
		const expected = "oz";
		
		// Act
		const actual = startOz(text);
		
		// Assert
		assert.equal(actual, expected, "Passed!. Text was ozymandias");
	});
	
	test("startOz should return 'o' when text starts with 'o' but second character is not 'z'", assert => {
		
		// Arrange
		text = "oxz";
		const expected = "o";
		
		// Act
		const actual = startOz(text);
		
		// Assert
		assert.equal(actual, expected, "Passed!. Text was oxz");
	});
	
	test("startOz should return 'z' when text doesn't start with 'o' but second character is 'z'", assert => {
		
		// Arrange
		text = "bzoo";
		const expected = "z";
		
		// Act
		const actual = startOz(text);
		
		// Assert
		assert.equal(actual, expected, "Passed!. Text was bzoo");
	});
	
	test("startOz should return empty string when text doesn't start with 'oz', 'o' or 'z'", assert => {
		
		// Arrange
		text = "robert";
		const expected = "";
		
		// Act
		const actual = startOz(text);
		
		// Assert
		assert.equal(actual, expected, "Passed!. Text was robert");
	});
});
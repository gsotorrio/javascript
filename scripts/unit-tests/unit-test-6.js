QUnit.module("Exercise 6", () => {
	
	var text;
	
	test("mixStart should return FALSE when text is empty", assert => {
		
		// Arrange
		text = "";
		
		// Act
		var result = mixStart(text);
		
		// Assert
		assert.equal(result, false, "Passed!. Text was empty");
	});
	
	test("mixStart should return FALSE when text is null", assert => {
		
		// Arrange
		text = null;
		
		// Act
		var result = mixStart(text);
		
		// Assert
		assert.equal(result, false, "Passed!. Text was null");
	});
	
	test("mixStart should return FALSE when text is undefined", assert => {
		
		// Act
		var result = mixStart(text);
		
		// Assert
		assert.equal(result, false, "Passed!. Text was undefined");
	});
	
	test("mixStart should return FALSE when text is less than 3 length", assert => {
		
		// Arrange
		text = "hi";
		
		// Act
		var result = mixStart(text);
		
		// Assert
		assert.notOk(result, "Passed!. Text was 2 length");
	});
	
	test("mixStart should return FALSE when text does not start with a combination of 'mix'", assert => {
		
		// Arrange
		text = "mid the gap";
		
		// Act
		var result = mixStart(text);
		
		// Assert
		assert.notOk(result, "Passed!. Text started with 'mid'");
	});
	
	test("mixStart should return TRUE when text starts with a combination of 'mix'", assert => {
		
		// Arrange
		text = "gix the gap";
		
		// Act
		var result = mixStart(text);
		
		// Assert
		assert.ok(result, "Passed!. Text started with 'gix'");
	});
});
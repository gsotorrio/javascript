QUnit.module("Exercise 3", () => {
	
	var text, number;
	
	test("missingChar should return an error message when text is empty", assert => {
		
		// Arrange
		text = "";
		
		// Act & Assert
		  assert.throws(
			() => { missingChar(text, number); },
			(error) => { return error.toString() === "Text cannot be empty";},
			"Passed!. Text was empty"
		  );
	});
	
	test("missingChar should return an error message when text is null", assert => {
		
		// Arrange
		text = null;
		
		// Act & Assert
		  assert.throws(
			() => { missingChar(text, number); },
			(error) => { return error.toString() === "Text cannot be empty";},
			"Passed!. Text was null"
		  );
	});
	
	test("missingChar should return an error message when text is undefined", assert => {
		
		// Act & Assert
		  assert.throws(
			() => { missingChar(text, number); },
			(error) => { return error.toString() === "Text cannot be empty";},
			"Passed!. Text was undefined"
		  );
	});
	
	test("missingChar should return a new string with a missing character", assert => {
		
		// Arrange
		text = "Guillermo";
		number = 5;
		var expected = "Guillrmo";
		
		// Act
		var actual = missingChar(text, number);
		
		// Assert
		assert.equal(actual, expected, "Passed!!");
	});
});
QUnit.module("Exercise 14", () => {
	
	let x, y;
	
	test("loneTeen should return FALSE when x and y are teen", assert => {
		
		// Arrange
		x = 13
		y = 19;
		
		// Act
		var result = loneTeen(x, y);
		
		// Assert
		assert.notOk(result, "Passed!. x = 13 and y = 19");
	});
	
	test("loneTeen should return TRUE when x is teen but not y", assert => {
		
		// Arrange
		x = 13
		y = 25;
		
		// Act
		var result = loneTeen(x, y);
		
		// Assert
		assert.ok(result, "Passed!. x = 13 and y = 25");
	});
	
	test("loneTeen should return TRUE when y is teen but not x", assert => {
		
		// Arrange
		x = 5
		y = 15;
		
		// Act
		var result = loneTeen(x, y);
		
		// Assert
		assert.ok(result, "Passed!. x = 5 and y = 15");
	});
});
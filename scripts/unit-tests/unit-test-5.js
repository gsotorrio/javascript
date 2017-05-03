QUnit.module("Exercise 5", () => {
	
	var x, y, z;
	
	test("hasTeen should return FALSE if there are not numbers between 13 and 19", assert => {
		
		// Arrange
		x = y = z = 5;
		
		// Act
		var result = hasTeen(x, y, z);
		
		// Assert
		assert.equal(result, false, "Passed!. Any of the number was between 13 and 19");
	});
	
	test("hasTeen should return TRUE if any of the number is 13", assert => {
		
		// Arrange
		x = 13;
		y = z = 5;
		
		// Act
		var result = hasTeen(x, y, z);
		
		// Assert
		assert.ok(result, "Passed!. One of the numbers was 13");
	});
	
	test("hasTeen should return TRUE if any of the number is 19", assert => {
		
		// Arrange
		x = 19;
		y = z = 5;
		
		// Act
		var result = hasTeen(x, y, z);
		
		// Assert
		assert.ok(result, "Passed!. One of the numbers was 19");
	});
	
	test("hasTeen should return TRUE if one of numbers is between 13 and 19", assert => {
		
		// Arrange
		x = 15;
		y = z = 5;
		
		// Act
		var result = hasTeen(x, y, z);
		
		// Assert
		assert.ok(result, "Passed!. One number was between 13 and 19");
	});
});
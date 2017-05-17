QUnit.module("Exercise 16", () =>{
	
	let x, y;
	
	test("in3050 should return FALSE when X is in range 30-40 but Y isn't", assert => {
		
		// Arrange
		x = 35;
		y = 13;
		
		// Act 
		var result = in3050(x, y);
		
		// Assert
		assert.notOk(result, "Passed!. x = 35 & y = 13")
	});
	
	test("in3050 should return FALSE when Y is in range 30-40 but X isn't", assert => {
		
		// Arrange
		x = 63;
		y = 37;
		
		// Act 
		var result = in3050(x, y);
		
		// Assert
		assert.notOk(result, "Passed!. x = 63 & y = 37")
	});
	
	test("in3050 should return FALSE when X is in range 40-50 but Y isn't", assert => {
		
		// Arrange
		x = 45;
		y = 13;
		
		// Act 
		var result = in3050(x, y);
		
		// Assert
		assert.notOk(result, "Passed!. x = 45 & y = 13")
	});
	
	test("in3050 should return FALSE when Y is in range 40-50 but X isn't", assert => {
		
		// Arrange
		x = 55;
		y = 43;
		
		// Act 
		var result = in3050(x, y);
		
		// Assert
		assert.notOk(result, "Passed!. x = 55 & y = 43")
	});
	
	test("in3050 should return FALSE when no number is in 30-40", assert => {
		
		// Arrange
		x = 13;
		y = 43;
		
		// Act 
		var result = in3050(x, y);
		
		// Assert
		assert.notOk(result, "Passed!. x = 13 & y = 43")
	});
	
	test("in3050 should return FALSE when no number is in 40-50", assert => {
		
		// Arrange
		x = 13;
		y = 5;
		
		// Act 
		var result = in3050(x, y);
		
		// Assert
		assert.notOk(result, "Passed!. x = 13 & y = 5")
	});
	
	test("in3050 should return TRUE when both numbers are in 30-40", assert => {
		
		// Arrange
		x = 30;
		y = 40;
		
		// Act 
		var result = in3050(x, y);
		
		// Assert
		assert.ok(result, "Passed!. x = 30 & y = 40")
	});
	
	test("in3050 should return TRUE when both numbers are in 40-50", assert => {
		
		// Arrange
		x = 40;
		y = 50;
		
		// Act 
		var result = in3050(x, y);
		
		// Assert
		assert.ok(result, "Passed!. x = 40 & y = 50")
	});
});
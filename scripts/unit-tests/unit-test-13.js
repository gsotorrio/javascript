QUnit.module("Exercise 13", () => {
	
	let temp1, temp2;
	
	test("icyHot should return FALSE when temp1 and temp2 > 100", assert => {
		
		// Arrange
		temp1 = 150;
		temp2 = 300;
		
		// Act
		const result = icyHot(temp1, temp2);
		
		// Assert
		assert.notOk(result, "Passed!. temp1 = 150 and temp2 = 300");
	});
	
	test("icyHot should return FALSE when temp1 = 100 and temp2 > 100", assert => {
		
		// Arrange
		temp1 = 100;
		temp2 = 300;
		
		// Act
		const result = icyHot(temp1, temp2);
		
		// Assert
		assert.notOk(result, "Passed!. temp1 = 100 and temp2 = 300");
	});
	
	test("icyHot should return FALSE when temp1 and temp2 = 100", assert => {
		
		// Arrange
		temp1 = 100;
		temp2 = 100;
		
		// Act
		const result = icyHot(temp1, temp2);
		
		// Assert
		assert.notOk(result, "Passed!. temp1 = 100 and temp2 = 100");
	});
	
	test("icyHot should return FALSE when temp1 < 100 and temp2 = 100", assert => {
		
		// Arrange
		temp1 = 50;
		temp2 = 100;
		
		// Act
		const result = icyHot(temp1, temp2);
		
		// Assert
		assert.notOk(result, "Passed!. temp1 = 50 and temp2 = 100");
	});
	
	test("icyHot should return FALSE when temp1 and temp2 < 100", assert => {
		
		// Arrange
		temp1 = 30;
		temp2 = 70;
		
		// Act
		const result = icyHot(temp1, temp2);
		
		// Assert
		assert.notOk(result, "Passed!. temp1 = 30 and temp2 = 70");
	});
	
	test("icyHot should return FALSE when temp1 = 0 and temp2 < 100", assert => {
		
		// Arrange
		temp1 = 0;
		temp2 = 70;
		
		// Act
		const result = icyHot(temp1, temp2);
		
		// Assert
		assert.notOk(result, "Passed!. temp1 = 0 and temp2 = 70");
	});
	
	test("icyHot should return FALSE when temp1 and temp2 = 0", assert => {
		
		// Arrange
		temp1 = 0;
		temp2 = 0;
		
		// Act
		const result = icyHot(temp1, temp2);
		
		// Assert
		assert.notOk(result, "Passed!. temp1 = 0 and temp2 = 0");
	});
	
	test("icyHot should return FALSE when temp1 < 0 and temp2 = 0", assert => {
		
		// Arrange
		temp1 = -50;
		temp2 = 0;
		
		// Act
		const result = icyHot(temp1, temp2);
		
		// Assert
		assert.notOk(result, "Passed!. temp1 = -50 and temp2 = 0");
	});
	
	test("icyHot should return FALSE when temp1 and temp2 < 0", assert => {
		
		// Arrange
		temp1 = -30;
		temp2 = -70;
		
		// Act
		const result = icyHot(temp1, temp2);
		
		// Assert
		assert.notOk(result, "Passed!. temp1 = -30 and temp2 = -70");
	});
	
	test("icyHot should return TRUE when temp1 < 0 and temp2 > 100", assert => {
		
		// Arrange
		temp1 = -30;
		temp2 = 170;
		
		// Act
		const result = icyHot(temp1, temp2);
		
		// Assert
		assert.ok(result, "Passed!. temp1 = -30 and temp2 = 170");
	});
	
	test("icyHot should return TRUE when temp1 > 100 and temp2 < 100", assert => {
		
		// Arrange
		temp1 = 150;
		temp2 = -15;
		
		// Act
		const result = icyHot(temp1, temp2);
		
		// Assert
		assert.ok(result, "Passed!. temp1 = 150 and temp2 = -15");
	});
});
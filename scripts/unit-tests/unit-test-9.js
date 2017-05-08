QUnit.module("Exercise 9", () => {
	
	let isTalking, hour;
	
	test("parrotTrouble should return FALSE when the parrot is not talking", assert => {
		
		// Arrange
		isTalking = false;
		hour = 10;
		
		// Act
		const result = parrotTrouble(isTalking, hour);
		
		// Assert
		assert.notOk(result, "Passed!. We aren't in trouble. The parrot is not talking.");
	});
	
	test("parrotTrouble should return TRUE when the parrot is talking before 7:00", assert => {
		
		// Arrange
		isTalking = true;
		hour = 6;
		
		// Act
		const result = parrotTrouble(isTalking, hour);
		
		// Assert
		assert.ok(result, "Passed!. We aren in trouble. The parrot is talking at 6:00.");
	});
	
	test("parrotTrouble should return TRUE when the parrot is talking after 20:00", assert => {
		
		// Arrange
		isTalking = true;
		hour = 22;
		
		// Act
		const result = parrotTrouble(isTalking, hour);
		
		// Assert
		assert.ok(result, "Passed!. We are in trouble. The parrot is talking at 22:00.");
	});
});
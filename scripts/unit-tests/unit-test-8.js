QUnit.module("Exercise 8", () => {
	
	let aSmile, bSmile;
	
	test("monkeyTrouble should return TRUE when both monkeys are smilling", assert => {
		
		// Arrange
		aSmile = bSmile = true;
		
		// Act
		const result = monkeyTrouble(aSmile, bSmile);
		
		// Assert
		assert.ok(result, "Passed!. We are in trouble. Both monkeys smiling");
	});
	
	test("monkeyTrouble should return TRUE when both monkeys aren't smilling", assert => {
		
		// Arrange
		aSmile = bSmile = false;
		
		// Act
		const result = monkeyTrouble(aSmile, bSmile);
		
		// Assert
		assert.ok(result, "Passed!. We are in trouble. Both monkeys are not smiling");
	});
	
	test("monkeyTrouble should return FALSE when only one monkey is smilling", assert => {
		
		// Arrange
		aSmile = false;
		bSmile = true;
		
		// Act
		const result = monkeyTrouble(aSmile, bSmile);
		
		// Assert
		assert.notOk(result, "Passed!. We aren't in trouble. One monkey is smiling but the other one is not");
	});
});
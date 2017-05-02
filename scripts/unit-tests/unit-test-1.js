const { test } = QUnit;

QUnit.module("Exercise 1", () => {
	
	var weekday, vacation;
	
	test("sleepIn should return TRUE during a weekday on vacation", assert => {
		
		// Arrange
		weekday = true;
		vacation = true;
		
		// Act
		var result = sleepIn(weekday, vacation);
		
		// Assert
		assert.ok(result, "Passed!. We sleep during holidays");
	});
	
	test("sleepIn should return FALSE during a weekday and no vacation", assert => {
			
		// Arrange
		weekday = true;
		vacation = false;
		
		// Act
		var result = sleepIn(weekday, vacation);
		
		// Assert
		assert.notOk(result, "Passed!. We cannot sleep during a weekday without holidays");
	});
	
	test("sleepIn should return TRUE during the weekend", assert => {
		
		// Arrange
		weekday = false;
		vacation = false;
		
		// Act
		var result = sleepIn(weekday, vacation);
		
		// Assert
		assert.ok(result, "Passed!. We sleep during the weekends");
	});
});
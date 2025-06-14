// Import the function sum from the app.js file
const { fromEuroToDollar, sum, fromDollarToYen, fromYenToPound } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", () => {

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("1 dollar should be 146.26 japan yen", () => {
    const yen = fromDollarToYen(1);
    const expected = 0.934579 * 156.5; 
    expect(fromDollarToYen(1)).toBe(expected); 
})

test("1000 yen should be 5.56 pounds", () => {
    const yen = fromYenToPound(1000);
    const expected = 6.391 * 0.87;
    expect(fromDollarToYen(1000)).toBe(expected); 
})
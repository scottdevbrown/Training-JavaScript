/* Count the occurrences of distinct elements in the given 2D array. The given input is an array, the elements of which are arrays of strings. 
The result is an object whose property names are the values from the arrays and their value is the number of their occurrences.
  Sample I/O:
   Input:  const input = [
                ["a", "b", "c"],
                ["c", "d", "f"],
                ["d", "f", "g"],
             ];

   Output:  { a: 1, b: 1, c: 2, d: 2, f: 2, g: 1}
  */
function factorial(n) {
    if (n < 0) return undefined; // Factorial is not defined for negative numbers
    
    // Create an array with the length of n, using the Array constructor
    const numbers = new Array(n).fill(0).map((_, i) => i + 1);
    
    // Use reduce to calculate the factorial
    return numbers.reduce((acc, curr) => acc * curr, 1);
}

// Sample usage
console.log(factorial(6)); // Outputs: 720
/* Count the occurrences of distinct letters in the given 2D array. The given input is an array, the letters of which are arrays of strings. 
The countLetter is an object whose property names are the values from the arrays and their value is the number of their occurrences.
  Sample I/O:
   Input:  const input = [
                ["a", "b", "c"],
                ["c", "d", "f"],
                ["d", "f", "g"],
             ];

   Output:  { a: 1, b: 1, c: 2, d: 2, f: 2, g: 1}
  */
   const input = [
    ["a", "b", "c"],
    ["c", "d", "f"],
    ["d", "f", "g"],
 ];

 calculateOccurrance = (input) => {

  countLetter = {}
  //convert 2D to 1D array and get occurrance
  input.flat().map(letter => {
    countLetter[letter] = (countLetter[letter] || 0) + 1
    }
  )

  return countLetter

 }

 console.log(calculateOccurrance(input))
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
  const inputArray = [
    ["a", "b", "c"],
    ["c", "d", "f"],
    ["d", "f", "g"],
 ];

 calculateOccurrance = (inputArray) => {
  result = {}
  //convert 2D to 1D array and get occurrance
  inputArray.flat().forEach(element => {
    result[element] = (result[element] || 0) + 1
    }
  )
  return result
 }
 console.log(calculateOccurrance(inputArray))
/* If the given input is a number, you should return the factorial of that number. 
The factorial of a natural number n is the product of the positive integers less than or equal to n. So, 2! = 2, 3! = 6, 4! = 24 and so on.
  Sample I/O:
   Input:  6
   Output: 720
*/

function factorial(n) {
  // ensure n is not a negative number
  if (n < 0) {
    return "Factorial is not defined for negative number"
  }

  //generate array of n elements and fill with zero
  const numbers = Array(n).fill(0)

  //create array of 1 ~ n and calaulate factorial of n
  return numbers.map((_, index) => index + 1).reduce((pre, curr) => pre * curr)
}
console.log(factorial(-1))

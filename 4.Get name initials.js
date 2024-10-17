/* The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.
  Sample I/O: 
   Input:  "George Raymond Richard Martin";
   Output: "GRRM"
*/

const input = "George Raymond Richard Martin"
const abbrStr = (input) => {
   return input.split(' ').map(unit => unit[0]).join('')
}
console.log(abbrStr(input))

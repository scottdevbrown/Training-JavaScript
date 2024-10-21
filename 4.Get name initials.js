/* The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.
  Sample I/O: 
   Input:  "George Raymond Richard Martin";
   Output: "GRRM"
*/
const pharse = "George Raymond Richard Martin"

const getNameInitial = (pharse) =>{
   return pharse.split(' ').map(word => word[0]).join("")
}

console.log(getNameInitial(pharse))
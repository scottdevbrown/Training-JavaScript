/* The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.
  Sample I/O: 
   Input:  "George Raymond Richard Martin";
   Output: "GRRM"
*/
const strInput="George Raymond Richard Martin"
let result=[];
let lastAbbr = strInput.lastIndexOf(" ");
var strLen=strInput.length;
result.push(strInput[0]);
const abbrStr = (strInput) => {
  let j=1;
  while(j<lastAbbr){
    j=strInput.indexOf(" ",j);
    j=j+1;
    result.push(strInput[j]);
  }
    return result.join('');
}
console.log(abbrStr(strInput))

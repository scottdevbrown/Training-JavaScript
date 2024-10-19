/* Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.
  Sample I/O:
   Input:  const input = [
    { name: "John", age: 13},
    { name: "Mark", age: 56},
    { name: "Rachel", age: 45},
    { name: "Nate", age: 67},
    { name: "Jennifer", age: 65}
  ];
   Output: [13, 67, 54]
*/
const input = [
  { name: "John", age: 13},
  { name: "Mark", age: 56},
  { name: "Rachel", age: 45},
  { name: "Nate", age: 67},
  { name: "Jennifer", age: 65}
];
const valueField = (inputs) =>{
  let result = [];
  ageArray = inputs.map(input => input['age']).sort()
  minValue = ageArray[0]
  maxValue = ageArray[inputs.length-1]
  minusValue = maxValue - minValue
  result.push(minValue, maxValue, minusValue)
  return result;
}
console.log(valueField(input))
// map(input  => input['age']).sort((a,b) => a - b)

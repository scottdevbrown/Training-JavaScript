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
const inputs = [
  { name: "John", age: 13},
  { name: "Mark", age: 56},
  { name: "Rachel", age: 45},
  { name: "Nate", age: 67},
  { name: "Jennifer", age: 65}
];

const extractAge = (inputs) =>{
  ageArray = inputs.map(input => input.age).sort()
  maxAge = ageArray[inputs.length-1]
  minAge = ageArray[0]
  diffAge = maxAge - minAge
  return {maxAge, minAge, diffAge}
}

console.log(extractAge(inputs))
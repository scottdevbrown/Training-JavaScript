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

const values = [1,3,4,5,6]

const extractAge = (inputs) =>{
  maxAge = inputs.map(input => input.age).reduce((prev, curr)=>Math.max(prev, curr))
  minAge = inputs.map(input => input.age).reduce((prev, curr)=>Math.min(prev, curr))
  diffAge = maxAge - minAge
  return {maxAge, minAge, diffAge}
}

console.log(extractAge(inputs))
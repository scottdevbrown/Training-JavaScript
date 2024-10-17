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
const valueField = (inputs) => {
  let result=[];
  let valueField = inputs.map(input => input['age']);
  let minValue = Math.min.apply(null, valueField);
  let maxValue = Math.max.apply(null, valueField)
  result.push(minValue, maxValue, maxValue-minValue);
  return result;
}
console.log(valueField(input));
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
var valuePush=[];
const valueField = (inputs) => {
  for(const input of inputs) 
    valuePush.push(input['age'])
}
console.log(valueField[input]);
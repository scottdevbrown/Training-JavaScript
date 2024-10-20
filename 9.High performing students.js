/* You are given an array of objects representing a group of students, each with a name and an array of test scores. 
Your task is to use map, filter, and reduce to calculate the average test score for each student, and then return an array of objects 
containing only the students who have an average score above 90.
  Sample I/O:
   Input:  students = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "Jack", scores: [100, 100, 100] }
  ];

   Output:  [ { name: 'Jack', average: 100 }  ]
*/

students = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "Jack", scores: [100, 100, 100] }
  ];
  
  function averageArray(array) {
    if (!array.lengh) {
      return array.reduce((pre, curr) => pre + curr) / array.length 
    } else {
      return 0
    }

    
  }

  findHighStudent = (students, benchmark) => {
    averageStudents = students.map(student => {
        averageScore = {}
        averageScore["name"] = student.name
        averageScore["average"] = averageArray(student.scores)
        return averageScore        
      })
    return averageStudents.filter(student => (student.average > benchmark))
  }

  console.log(findHighStudent(students, 90))
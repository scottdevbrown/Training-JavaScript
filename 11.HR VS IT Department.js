/* You are given an array of objects representing a collection of employees, each with a name, salary, and department. 
Your task is to use map, filter, and reduce to calculate the average salary for each department and then return an array 
of objects containing only the departments that have an average salary above 65000.

 Sample I/O:
   Input:  employees = [
  { name: "John", salary: 50000, department: "IT" },
  { name: "Jane", salary: 60000, department: "HR" },
  { name: "Bob", salary: 55000, department: "IT" },
  { name: "Sophie", salary: 75000, department: "HR" },
  { name: "Mike", salary: 65000, department: "IT" },
  { name: "Emily", salary: 80000, department: "HR" },
  { name: "David", salary: 70000, department: "IT" },
 ];

   Output:  [
  { department: 'HR', average: 71666 }
 ]
*/


employees = [
  { name: "John", salary: 50000, department: "IT" },
  { name: "Jane", salary: 60000, department: "HR" },
  { name: "Bob", salary: 55000, department: "IT" },
  { name: "Sophie", salary: 75000, department: "HR" },
  { name: "Mike", salary: 65000, department: "IT" },
  { name: "Emily", salary: 80000, department: "HR" },
  { name: "David", salary: 70000, department: "IT" },
 ];

const greaterThan = 65000

  const getHighSalary = (employees, greaterThan) => {
    const departmentArray = {}
    employees.map(employee => {
      if (!departmentArray[employee.department]) {
        departmentArray[employee.department] = [employee.salary]
      } else {
        departmentArray[employee.department].push(employee.salary)
      }      
    })

    averageArray = Object.keys(departmentArray).map(department => {
      averageItem = {}
      averageItem["department"] = department
      if (departmentArray[department].length) {
        averageItem["average"] = Math.floor(departmentArray[department].reduce((a, b) => a + b) / departmentArray[department].length)
      } else {
        averageItem["average"] = 0
      }      
      return averageItem
    })

    return averageArray.filter(averageItem => averageItem.average > greaterThan)     
  }
    
  console.log(getHighSalary(employees, 65000))
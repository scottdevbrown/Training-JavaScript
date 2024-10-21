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


const products = [
  
 ];

const avearageFilter = (products) => {
  let salaryArrayByCategory = [];
  let averageValueArrayByCategory = [];
  products.map(product => {
    if (salaryArrayByCategory[product.department]) 
      salaryArrayByCategory[product.department].push(product.salary);
    else salaryArrayByCategory[product.department] = [product.salary];
  })

  let categoryArray = Object.keys(salaryArrayByCategory) // return key words

  categoryArray.map(departmentName => {
    let avergageByCategory = { department: '', average: 0 };
    if (salaryArrayByCategory[departmentName].length == 0) {
      console.log('Warning: There exists no products');
      return [];
    }

    avergageByCategory.average = Math.floor(salaryArrayByCategory[departmentName].reduce((sum, value) => sum + value)/salaryArrayByCategory[departmentName].length);
    avergageByCategory.department = departmentName;
    averageValueArrayByCategory.push(avergageByCategory);
  })

  return averageValueArrayByCategory.filter(department => department.average > 65000);
}

console.log(avearageFilter(products));

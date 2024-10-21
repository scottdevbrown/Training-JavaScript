/* You are given an array of objects representing a collection of products, each with a name, price, and category. 
Your task is to use map, filter, and reduce to calculate the average price of products in each category, and then 
return an array of objects containing only the categories that have an average price above 50.

 Sample I/O: 
   Input:  products = [
  { name: "Product 1", price: 20, category: "Electronics" },
  { name: "Product 2", price: 30, category: "Clothes" },
  { name: "Product 3", price: 40, category: "Electronics" },
  { name: "Product 4", price: 50, category: "Clothes" },
  { name: "Product 5", price: 60, category: "Clothes" },
  { name: "Product 6", price: 70, category: "Electronics" },
  { name: "Product 7", price: 80, category: "Clothes" },
  { name: "Product 8", price: 90, category: "Electronics" },
  ];
   Output:  [ 
  { category: 'Clothes', average: 55 },
  { category: 'Electronics', average: 55 }
  ]
*/

  products = [
  { name: "Product 1", price: 20, category: "Electronics" },
  { name: "Product 2", price: 30, category: "Clothes" },
  { name: "Product 3", price: 40, category: "Electronics" },
  { name: "Product 4", price: 50, category: "Clothes" },
  { name: "Product 5", price: 60, category: "Clothes" },
  { name: "Product 6", price: 70, category: "Electronics" },
  { name: "Product 7", price: 80, category: "Clothes" },
  { name: "Product 8", price: 90, category: "Electronics" },
  ];

  const greaterThan = 50

  const getHighPrice = (products, greaterThan) => {
    const categoryArray = {}
    products.map(product => {
      if (!categoryArray[product.category]) {
        categoryArray[product.category] = [product.price]
      } else {
        categoryArray[product.category].push(product.price)
      }      
    })

    averageArray = Object.keys(categoryArray).map(category => {
      averageItem = {}
      averageItem["category"] = category
      if (categoryArray[category].length) {
        averageItem["average"] = categoryArray[category].reduce((a, b) => a + b) / categoryArray[category].length
      } else {
        averageItem["average"] = 0
      }      
      return averageItem
    })

    return averageArray.filter(averageItem => averageItem.average > greaterThan)     
  }
    
  console.log(getHighPrice(products, 50))


// const categoryStats = products.reduce((acc, { price, category }) => {
//     // If the category doesn't exist in the accumulator, initialize it
//     if (!acc[category]) {
//         acc[category] = { total: 0, count: 0 };
//     }
//     // Update total price and count
//     acc[category].total += price;
//     acc[category].count += 1;
//     return acc;
// }, {});
// // console.log(categoryStats);

// // Step 2: Calculate average price for each category
// const averages = Object.keys(categoryStats).map(category => {
//     const { total, count } = categoryStats[category];
//     return {
//         category: category,
//         average: total / count
//     };
// });

// // Step 3: Filter categories with an average price above 50
// const result = averages.filter(item => item.average > 50);

// // Output the result
// console.log(result);
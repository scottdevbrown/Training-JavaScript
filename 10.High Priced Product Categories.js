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


const products = [
  { name: "Product 1", price: 20, category: "Electronics" },
  { name: "Product 2", price: 30, category: "Clothes" },
  { name: "Product 3", price: 40, category: "Electronics" },
  { name: "Product 4", price: 50, category: "Clothes" },
  { name: "Product 5", price: 60, category: "Clothes" },
  { name: "Product 6", price: 70, category: "Electronics" },
  { name: "Product 7", price: 80, category: "Clothes" },
  { name: "Product 8", price: 90, category: "Electronics" },
  ];

const avearageFilter = (products) => {
  let priceArrayByCategory = [];
  let averageValueArrayByCategory = [];
  products.map(product => {
    if (priceArrayByCategory[product.category]) 
      priceArrayByCategory[product.category].push(product.price);
    else priceArrayByCategory[product.category] = [product.price];
  })
  let categoryArray = Object.keys(priceArrayByCategory) // return key words
  categoryArray.map(categoryName => {
    let avergageByCategory = { category: '', average: 0 };
    avergageByCategory.average = priceArrayByCategory[categoryName].reduce((sum, value) => sum + value)/priceArrayByCategory[categoryName].length;
    avergageByCategory.category = categoryName;
    averageValueArrayByCategory.push(avergageByCategory);
  })
  return averageValueArrayByCategory.filter(category => category.average > 50);
}

console.log(avearageFilter(products));



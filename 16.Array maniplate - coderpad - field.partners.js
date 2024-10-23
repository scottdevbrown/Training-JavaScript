/*
Excerise 1.1
EXAMPLE_PRODUCTS = [
  {
    id: 'prod:1',
    name: 'product 1a',
    productCategories: [
      'A'
    ]
  },
  {
    id: 'prod:2',
    name: 'product 2b',
    productCategories: [
      'A'
    ]
  },
  {
    id: 'prod:3',
    name: 'product 3c',
    productCategories: [
      'A',
      'B'
    ]
  },
  {
    id: 'prod:4',
    name: 'product 4d',
    productCategories: [
      'A',
      'C',
      'D'
    ]
  }
]

We have a list products. They are children of categories (A,B,C,D). We need a function that takes one of the given arrays of products & returns a list of unique categories. Let's assume the input structure is fine (i.e. don't waste time checking if input data is bad.)

Expected results:

const results = ['A', 'B', 'C', 'D']



Excercise 1.2
// same input

Now we still want a unique list of categories, but we'd like to know which products are their children. You can use or modify solution from 1.1 or start from scratch, up to you.

Expected results:

const results = [
  {
    id: 'A',
    products: [
        {id: 'prod:1', name: 'product 1a'},
        {id: 'prod:2', name: 'product 2b'},
        {id: 'prod:3', name: 'product 3c'},
        {id: 'prod:4', name: 'product 4d'}
    ]
  },
  {
    id: 'B',
    products: [
    {id: 'prod:3', name: 'product 3c'}
    ]
  },
// etc, C & D
]



Excercise 2.1

const DEFAULT_TRANSACTIONS = [
  {date: '2020-01-01', quantity: 100},
  {date: '2020-01-02', quantity: 10},
  {date: '2020-01-03', quantity: -50},
  {date: '2020-01-04', quantity: 200},
  {date: '2020-01-05', quantity: 5},
]

You have a list of transaction on a product, quantity changes over time (or, think of it like a bank list of transactions.) Let's say we know they're in order, from earliest to latest. We want to know what the resulting balance at the end of the period is.

Expected output:

265


Excercise 2.2
// same input

This time, we need to display a table of the product's balance over time.

Date, Change (+/-), Resulting Balance

2020-01-01, 100, 100
2020-01-02, 10, 10
2020-01-03, -50, 60
2020-01-04, 200, 260
2020-01-05, 5, 265

This should just be a data structure like [{date, quantityChange, resultingBalance}]

Expected result:

[
    {date: '2020-01-01', quantity: 100, resultingBalance: 100},
    {date: '2020-01-02', quantity: 10, resultingBalance: 110},
    {date: '2020-01-03', quantity: -50, resultingBalance: 60},
    {date: '2020-01-04', quantity: 200, resultingBalance: 260},
    {date: '2020-01-05', quantity: 5, resultingBalance: 265},
]



Excercise 3.1
const BOX = [
    ['green', 'green', 'green', 'green', 'green'],
    ['green', 'green', 'green', 'green', 'green'],
    ['green', 'blue', 'blue', 'green', 'green'],
    ['green', 'blue', 'blue', 'green', 'green'],
    ['green', 'blue', 'blue', 'green', 'green'],
    ['green', 'green', 'green', 'green', 'green'],
]

Given the data structure representing a table of coloured "cells", find the top left and bottom right coordinates of the blue box. Assume there will always be one box of blue in the rectangle and it will always be a rectangle.

Expected output:

{x: 1, y: 2}
{x: 2, y: 4}
*/

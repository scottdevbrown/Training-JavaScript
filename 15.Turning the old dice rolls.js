/*There are two sets of traditional six-faced dice, represented by two arrays A and B consisting of N and M integers respectively. 
Each array element has a value between 1 and 6, inclusive, representing the value of the corresponding die.
Write a function:
function solution (A, B):
that, given two arrays A and B, returns the minimum number of dice to be turned in order to make the sums of dice in both sets equal, or 1 if this is not possible.

Examples:
1. Given A = [5], B = [1, 1, 6], the function should return 1. We have to turn the third die in B from 6 to 3; then the arrays will have the same sums (5=1+1+3).
2. Given A = [2, 3, 1, 1, 2], B = [5, 4, 6], the function should return 2. We can turn last two dice in B to get [5, 1, 3], then the arrays will have the same sums.
3. Given A = [5, 4, 1, 2, 6, 5], B = [2], the function should return 6. We can turn five dice in A to get [1, 1, 1, 1, 1, 1] and one dice in B to get [6], then the arrays will have the same sums.
4. Given A = [1, 2, 3, 4, 3, 2, 1]. B = [6], the function should return -1, because it is not possible for the arrays to have the same sums.
Write an efficient algorithm for the following assumptions:
N and M are integers within the range [1..100,000];
each element of arrays A and B is an integer within the range [1..6]
*/


const inputA = [2, 3, 1, 1, 2];
const inputB = [5, 4, 6];

const minimumModify = (inputA, inputB) => {
    let differenceArray = [];
    let differenceValue = inputA.reduce((total, value) => total + value) - inputB.reduce((total, value) => total + value);
    
    if (differenceValue == 0) return 0;
    
    if ((inputA.length > inputB.length * 6) && (inputA.length * 6 < inputB.length))
        return -1
    
    if (differenceValue > 0) {
        differenceArray = [...inputA.map(differ => differ - 1), ...inputB.map(differ => 6 - differ)];
    } else {
        differenceArray = [...inputA.map(differ => 6 - differ), ...inputB.map(differ => differ -1)];
    }
    
    differenceArray.sort((a, b) => b - a);
    let threshold = 0;
    let i = 0;
    
    while (Math.abs(differenceValue) > threshold) {
        threshold += differenceArray[i]
        i++;
    }

    return i;
}

console.log(minimumModify(inputA, inputB))

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


//A = [5], B = [1, 1, 6]
//A = [2, 3, 1, 1, 2], B = [5, 4, 6]
//A = [1, 2, 3, 4, 3, 2, 1], B = [6]
A = [5, 4, 1, 2, 6, 5], B = [2]

solution = (A, B) => {
    sumA = A.reduce((a, b) => a + b)
    lengthA = A.length
    sumB = B.reduce((a, b) => a + b)
    lengthB = B.length

    if (sumA == sumB) {
        return 0
    }

    delta = Math.abs(sumA - sumB) 

    X = (sumA > sumB) ? A : B
    Y = (sumA < sumB) ? A : B  
    deltaX = X.map(a => a - 1)
    deltaY = Y.map(b => 6 - b)
    totalDeltaArray = deltaX.concat(deltaY).sort((a, b) => a - b).reverse()
    count = 0
    for (let index = 0; index < totalDeltaArray.length; index++) {
        delta -= totalDeltaArray[index]
        count++
        if (delta <= 0) {
            return count
        }
    }

    return -1
}

console.log(solution(A, B))
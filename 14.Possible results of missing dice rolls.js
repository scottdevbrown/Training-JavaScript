/*You have just rolled a dice several times. The N roll results that you remember are described by an array A. 
However, there are F rolls whose results you have forgotten. The arithmetic mean of all of the roll results (the sum of all the roll results divided by the number of rolls) equals M.
What are the possible results of the missing rolls?
Write a function:
function solution (A, F, M);
that, given an array A of length N, an integer F and an integer M, returns an array containing possible results of the missed rolls. 
The returned array should contain F integers from 1 to 6 (valid dice rolls). If such an array does not exist then the function should return [0].

Examples:
1. Given A = [3, 2, 4, 3], F = 2, M = 4, your function should return [6,6]. The arithmetic mean of all the rolls is (3+2+4+3+6+6)/6=24/6=4.
2. Given A = [1, 5, 6], F = 4, M = 3, your function may return [2, 1, 2, 4] or [6, 1, 1, 1] (among others).
3. Given A= [1, 2, 3, 4], F = 4, M = 6, your function should return [0]. It is not possible to obtain such a mean.
4. Given A = [6, 1], F = 1, M = 1, your function should return [0]. It is not possible to obtain such a mean.
Write an efficient algorithm for the following assumptions:
N and F are integers within the range [1..100,000];
each element of array A is an integer within the range [1..6]. 
M is an integer within the range [1..6].
*/

recursivefunction = (predictArrays, currArray, restSum, restRolls, slope) => {
    let avg = Math.floor(restSum / restRolls)
    let minValue = Math.max(1, restSum - avg * (restRolls - 1))
    let maxValue = Math.min(slope, restSum - (restRolls - 1))
        
    if (restRolls <= 1) {
      currArray.push(restSum)
      predictArrays.push(currArray.slice())
      currArray.pop(restSum) 
            // currArray = []
      return predictArrays
    }
    
    for (let candidate = maxValue; candidate >= minValue; candidate--) {
        // let tmpArray = currArray
        currArray.push(candidate)      
        recursivefunction(predictArrays, currArray, restSum - candidate, restRolls - 1, candidate)
        currArray.pop(candidate)  
    }
    }
    
    solution = (A, F, M) => {
        predictArrays = []
        currArray = []
        totalSum = M * (A.length + F)
        rememberSum = A.reduce((a, b) => a + b)
        forgotSum = totalSum - rememberSum
        if (forgotSum < F || forgotSum > F * 6) {
            return 0
        }
        slope = 6
        recursivefunction(predictArrays, currArray, forgotSum, F, slope)
        return predictArrays
    }
    
    A = [3, 2, 4, 3], F = 2, M = 4
    //A = [1, 5, 6], F = 4, M = 3
    console.log(solution(A, F, M))
    
    
    
    // function solution(A, F, M) {
    //     const N = A.length;
    //     const total_sum = (N + F) * M;         // Total desired sum
    //     const current_sum = A.reduce((acc, val) => acc + val, 0); // Current sum of known rolls
    //     const missing_sum = total_sum - current_sum; // Required sum for missing rolls
    
    //     // Check if missing_sum is valid
    //     if (missing_sum < F || missing_sum > 6 * F) {
    //         return [0]; // Invalid case
    //     }
    
    //     // Create the result array initialized with 1s
    //     const result = new Array(F).fill(1);
    //     let required_increase = missing_sum - F; // Amount to distribute beyond the initial 1s
    
    //     for (let i = 0; i < F && required_increase > 0; i++) {
    //         // Distribute the remaining required sum up to a maximum of 6 for each roll
    //         const add = Math.min(required_increase, 5); // Maximum increase possible from 1 to 6 is 5
    //         result[i] += add; // Add to the current roll
    //         required_increase -= add; // Decrease the required increase
    //     }
    
    //     return result;
    // }
    
    // // Example usage
    // console.log(solution([3, 2, 4, 3], 2, 4)); // Output: [6, 6]
    // console.log(solution([1, 5, 6], 4, 3)); // Output: Array with valid missing rolls
    // console.log(solution([1, 2, 3, 4], 4, 6)); // Output: [0]
    // console.log(solution([6, 1], 1, 1)); // Output: [0]
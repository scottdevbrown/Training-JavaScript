/*You are given a string S consisting of letters 'a' and 'b'. You want to split it into three separate nonempty parts. The lengths of the parts can differ from one another.  
In how many ways can you split mathrm{S} into three parts, such that each part contains the same number of letters ' a '?  
Write a function:  
class Solution { public int solution(String S); }  
that, given a string S of length N, returns the number of possible ways of splitting S as described above.  
  
Examples:
1. Given S = "babaa", the function should return 2. The possible splits are: "ba | ba | a" and "bab | a | a".
2. Given S = "ababa", the function should return 4. The possible splits are: "a | ba | ba", "a | bab | a", "ab a | ba" and "ab | ab | a".
3. Given S = "aba", the function should return 0. It is impossible to split S as required.
4. Given S = "bbbbb", the function should return 6. The possible splits are: "b | b | bbb", "b | bb | bb", "b | bbb | b", "bb | b | bb", "bb | bb | b" and "bbb | b | b". Each part contains the same number of letters 'a', i.e. 0.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..40,000]; string S contains only letters 'a' and 'b'.
*/
const input = 'abagbab'

//formula induced [1,i][i+1,j][j+1,n] i:fix-> count of [i+1,j]:n-1-(i+1)+1->n-i-1
const  strSplit = (input) => {
    let result = [];
    let strCount = input.split('').filter( letter => letter == 'a' ).length;
    
    if(strCount==0) {
        return (input.length - 1) * (input.length - 2) / 2;
    }

    if(strCount % 3 != 0) {
        return 0
    } else {
        result = input.split('').reduce((total, letter) => ({
            index: total['index'] + (letter == 'a' ? 1 : 0),
            count1: total['count1'] + (total['index'] == strCount / 3 ? 1 : 0),
            count2: total['count2'] + (total['index'] == strCount *2 / 3 ? 1 : 0)
        }), { index: 0, count1: 0, count2: 0 })

        return result['count1'] * result['count2'];
    }
}

console.log(strSplit(input));

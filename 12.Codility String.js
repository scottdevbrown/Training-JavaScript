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

const  strSplit = (input) => {

    let result = [];
    let strCount = input.split('').filter( letter => letter == 'a' ).length;

    if(strCount % 3 != 0) {
        return 0
    } else {
        if( strCount == 0) {
            return (input.length - 1) * (input.length - 2) / 2; //formula induced
        } else {
            result = input.split('').reduce((total, letter) => ({

                index1: total['index1'] + (letter == 'a' ? 1 : 0),
                index2: total['index2'] + (total['index1'] == strCount / 3 ? 1 : 0),
                index3: total['index3'] + (total['index1'] == strCount *2 / 3 ? 1 : 0)

            }), { index1: 0, index2: 0, index3: 0 })

            return result['index2'] * result['index3'];

        }
    }
}

console.log(strSplit(input));

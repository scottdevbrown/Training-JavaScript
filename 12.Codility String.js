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

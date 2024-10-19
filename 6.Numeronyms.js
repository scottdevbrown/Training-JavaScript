/* Devs like to abbreviate everything: k8s means Kubernetes, a11y means accessibility, l10n means localization. 
You get the Dev numeronyms by taking the first and the last letter and counting the number of letters in between. 
Words that have less than 4 letters aren't abbreviated, because that would just be odd. 
The input is a sentence, and you should abbreviate every word that is 4 letters long or longer. 
There won't be any punctuation in the sentence. g2d l2k e6e

  Sample I/O:
   Input:  "Every developer likes to mix kubernetes and javascript"
   Output: "E3y d7r l3s to mix k8s and j8t"
   
*/

const srcSentence = "Every developer likes to mix kubernetes and javascript"
// srcSentence.lastIndexOf()
//  const howManyLetters = (phrse) => {
//   //counter
//   let result = 0

//   for(const index in phrse){
//     result  = Number(index)+1
//   }
//   return result
//  }
 let result =""
 let result_word
words = srcSentence.split(' ')

for(let word of words){
  let wordLength = word.length
  if(wordLength > 4){
    let firstChar = word[0]
    let lastChar = word[wordLength - 1]
    result_word = firstChar + lastChar
  }
  else{
    result_word = word
  }
  result += result_word
}

// console.log(srcSentence.lastIndexOf(" "))
console.log(srcSentence.length)
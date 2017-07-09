function isIt(word) {
//  word = "level";
  let palindrome = true;
  let length = word.length;
  //console.log(word.length);


    //console.log(palindrome);
    for (let i = 0; i < length/2; i++) {
      if(word[i] !== word[length - 1 -i]) {
        palindrome = false;
      }
    }
  return palindrome
  console.log(palindrome);
}
module.exports = isIt;

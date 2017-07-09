function containsVowel(input) {

  if (input.match(/[aeiou)]/i)) {
    return true;
  }else {
    return false;
  }
}
module.exports = containsVowel;

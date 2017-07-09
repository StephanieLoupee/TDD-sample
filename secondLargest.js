function secondLargest(numberArray) {

  function sortHighLow(a,b) {
    return b-a;
  }

  numberArray.sort(sortHighLow);
  let secondLargest = numberArray[1];

  return secondLargest;

};

module.exports = secondLargest;

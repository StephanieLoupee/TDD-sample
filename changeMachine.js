function changeMachine(amount) {

//  let amount = 59;
  let twenties = 0;
  let tens = 0;
  let fives = 0;
  let ones = 0;

  while (amount >= 20) {
    twenties = twenties + 1;
    amount = amount - 20;
  }
  while (amount >= 10) {
    tens = tens + 1;
    amount = amount - 10;
  }
  while (amount >= 5) {
    fives = fives + 1;
    amount = amount - 5;
  }
  ones = amount;

let billArray = [twenties, tens, fives, ones];
return billArray;
}

module.exports = changeMachine;

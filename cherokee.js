function population(startingPopulation, birthRate, numberOfWeeks) {
  // let startingPopulation = 200;
  // let birthRate = 0.1;
  // let numberOfWeeks = 5;
  let i = 0;

  function NewPop() {
    let newPopulation = Math.trunc(startingPopulation + (startingPopulation * birthRate));
    startingPopulation = newPopulation;
  }

  while (i < numberOfWeeks) {
    NewPop();
    i = i + 1;
  }

  //console.log("There will be " + startingPopulation + " Cherokee Hares after " + i + " weeks.");
  return startingPopulation;
}
  module.exports = population;

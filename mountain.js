function tallestMountain(mountainArray) {
  return Math.max.apply(Math, mountainArray);
}

let mountain = tallestMountain([1,2,3])
console.log(mountain)

module.exports = tallestMountain;

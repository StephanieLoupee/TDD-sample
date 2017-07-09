function avg(a,b,c) {

  return Math.round((((a + b + c) / 3) +0.00001) * 100) / 100;
}
  module.exports = avg;

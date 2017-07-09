var population = require('../cherokee');
var chai = require('chai');
var expect = chai.expect;


describe('population(100, .1, 5)', function() {
   context('startingPopulation = 100, birthRate= .1, weeks = 5', function() {
     it('returns 160 as the new population', function() {

       var result = population(100, .1, 5);
       expect(result).to.equal(160);
     });
  });

  context('startingPopulation = 100, birthRate= .1, weeks = 9', function() {
    it('returns 233 as the new population', function() {

      var result = population(100, .1, 9);
      expect(result).to.equal(233);
    });
 });
});

describe('population(100, .2, 5)', function() {
   context('startingPopulation = 100, birthRate= .2, weeks = 5', function() {
     it('returns 247 as the new population', function() {

       var result = population(100, .2, 5);
       expect(result).to.equal(247);
     });
  });

  context('startingPopulation = 100, birthRate= .2, weeks = 9', function() {
    it('returns 511 as the new population', function() {

      var result = population(100, .2, 9);
      expect(result).to.equal(511);
    });
 });
});

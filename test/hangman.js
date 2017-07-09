var howMany = require('../hangman');
var chai = require('chai');
var expect = chai.expect;


describe('howMany(" industrialist ", "i")', function() {
   context('when word is " industrialist " and letter is "i"', function() {
     it('returns 3 as the letter count', function() {

       var result = howMany(" industrialist ", "i");
       expect(result).to.equal(3);
     });
  });
});

describe('howMany(" industrialist ", "c")', function() {
   context('when word is " industrialist " and letter is "c"', function() {
     it('returns 0 as the letter count', function() {

       var result = howMany(" industrialist ", "c");
       expect(result).to.equal(0);
     });
   });
});

describe('howMany("progression", "r")', function() {
   context('when word is "progression" and letter is "r"', function() {
     it('returns 2 as the letter count', function() {

       var result = howMany("progression", "r");
       expect(result).to.equal(2);
     });
   });
});

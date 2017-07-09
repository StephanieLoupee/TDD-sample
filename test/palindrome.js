var isIt = require('../palindrome');
var chai = require('chai');
var expect = chai.expect;


describe('isIt("level")', function() {
   context('when entered word is "level"', function() {
     it('returns "true"', function() {

       var result = isIt("level");
       expect(result).to.equal(true);
     });
  });
});

describe('isIt("uneven")', function() {
   context('when entered word is "uneven"', function() {
     it('returns "false"', function() {

       var result = isIt("uneven");
       expect(result).to.equal(false);
     });
  });
});

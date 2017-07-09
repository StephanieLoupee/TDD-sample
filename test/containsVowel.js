var containsVowel = require('../containsVowel');
var chai = require('chai');
var expect = chai.expect;


describe('containsVowel(" industrialist ")', function() {
   context('when input is " industrialist "', function() {
     it('returns true', function() {
       var result = containsVowel(" industrialist ");
       expect(result).to.equal(true);
     });
  });

  context('when input is " xzrthpd "', function() {
    it('returns false', function() {
      var result = containsVowel(" xzrthpd ");
      expect(result).to.equal(false);
    });
  });

  context('when input is " EVERYONE "', function() {
    it('returns true', function() {
      var result = containsVowel(" EVERYONE ");
      expect(result).to.equal(true);
    });
  });
});

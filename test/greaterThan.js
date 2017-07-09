var greaterThan = require('../greaterThan');
var chai = require('chai');
var expect = chai.expect;


describe('greaterThan(a, b)', function() {
   context('when input is (1, 2)', function() {
     it('returns false', function() {

       var result = greaterThan(1, 2);
       expect(result).to.equal(false);
     });
  });

  context('when input is (2, 1)', function() {
    it('returns true', function() {

      var result = greaterThan(2, 1);
      expect(result).to.equal(true);
    });
  });

  context('when input is (1234, 1123)', function() {
    it('returns true', function() {

      var result = greaterThan(2, 1);
      expect(result).to.equal(true);
    });
  });
});

var avg = require('../average');
var chai = require('chai');
var expect = chai.expect;


describe('average(a, b, c)', function() {
   context('avg of (1, 2, 3)', function() {
     it('returns 2', function() {

       var result = avg(1, 2, 3);
       expect(result).to.equal(2);
     });
  });

  context('avg of (1, 1, 1)', function() {
    it('returns 1', function() {

      var result = avg(1, 1, 1);
      expect(result).to.equal(1);
    });
  });

  context('avg of (385, 267, 12)', function() {
    it('returns 221.33', function() {

      var result = avg(385, 267, 12);
      expect(result).to.equal(221.33);
    });
  });

});

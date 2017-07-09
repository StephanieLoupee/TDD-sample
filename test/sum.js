var add = require('../sum');
var chai = require('chai');
var expect = chai.expect;


describe('add(1, 0)', function() {
   context('sum of (1, 0)', function() {
     it('returns 1', function() {

       var result = add(1, 0);
       expect(result).to.equal(1);
     });
  });

  context('sum of (22, 47)', function() {
    it('returns 69', function() {

      var result = add(22, 47);
      expect(result).to.equal(69);
    });
  });

  context('sum of (0, 342)', function() {
    it('returns 342', function() {

      var result = add(0, 342);
      expect(result).to.equal(342);
    });
  });

});

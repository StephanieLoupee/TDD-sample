var changeMachine = require('../changeMachine');
var chai = require('chai');
var expect = chai.expect;

const assertArrays = require('chai-arrays');
chai.use(assertArrays);

describe('changeMachine(20)', function() {
   context('when amount is 20', function() {
     it('returns [1, 0, 0, 0]', function() {

       var result = changeMachine(20);
       expect(result).to.be.equalTo([1, 0, 0, 0]);
     });
   });
})

describe('changeMachine(59)', function() {
    context('when amount is 59', function() {
      it('returns [2, 1, 1, 4]', function() {

        var result = changeMachine(59);
        expect(result).to.be.equalTo([2, 1, 1, 4]);
      });
    });
});

describe('changeMachine(10)', function() {
    context('when amount is 10', function() {
      it('returns [0, 1, 0, 0]', function() {

        var result = changeMachine(10);
        expect(result).to.be.equalTo([0, 1, 0, 0]);
      });
    });
});

describe('changeMachine(5)', function() {
    context('when amount is 5', function() {
      it('returns [0, 0, 1, 0]', function() {

        var result = changeMachine(5);
        expect(result).to.be.equalTo([0, 0, 1, 0]);
      });
    });
});

describe('changeMachine(1)', function() {
    context('when amount is 1', function() {
      it('returns [0, 0, 0, 1]', function() {

        var result = changeMachine(1);
        expect(result).to.be.equalTo([0, 0, 0, 1]);
      });
    });
});

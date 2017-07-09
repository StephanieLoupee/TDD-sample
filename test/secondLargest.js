var secondLargest = require('../secondLargest');
var chai = require('chai');
var expect = chai.expect;

describe('secondLargest()', function() {
    context('when input is [5287, 14386, 6270]', function() {
      it('returns 6270 as secondLargest', function() {

        var second = secondLargest([5287, 14386, 6270]);
        expect(second).to.equal(6270);
      });
    });

    context('when input is [8, 7, 5, 3, 10, 27, 86, 32]', function() {
      it('returns 32 as secondLargest', function() {

        var second = secondLargest([8, 7, 5, 3, 10, 27, 86, 32]);
        expect(second).to.equal(32);
      });
    });

    context('when input is [8]', function() {
      it('returns undefined as secondLargest', function() {

        var second = secondLargest([8]);
        expect(second).to.equal(undefined);
      });
    });
  });

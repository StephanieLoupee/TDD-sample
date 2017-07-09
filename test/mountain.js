var tallestMountain = require('../mountain');
var chai = require('chai');
var expect = chai.expect;

describe('tallestMountain()', function() {
    context('when mount heights are [5287, 14386, 6270]', function() {
      it('returns 14386 as highest mountain', function() {

        var mountain = tallestMountain([5287, 14386, 6270]);
        expect(mountain).to.equal(14386);
      });
    });
  });

  describe('tallestMountain()', function() {
      context('when mount heights are [12432, 1123, 11232]', function() {
        it('returns 12432 as highest mountain', function() {

          var mountain = tallestMountain([12432, 1123, 11232]);
          expect(mountain).to.equal(12432);
        });
      });
  });

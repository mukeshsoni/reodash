import reduce from '../../src/array/reduce'
import chai from 'chai'
let expect = chai.expect

describe('reduce', function () {
    it('should add number', function () {
        expect(reduce([1,2,4], (a, b) => a + b)).to.equal(7)
    });
});

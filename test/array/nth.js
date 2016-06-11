import nth from '../../src/array/nth'
import chai from 'chai'
let expect = chai.expect

describe('nth', function () {
    it('should nth arr values as per the function provided', function () {
        expect(nth([2, 1, 3, 5, 0], 3)).to.eql(5)
        expect(nth([2, 1, 3, 5, 0])).to.eql(2)
        expect(nth([])).to.eql(undefined)
        expect(nth([1, 3], 5)).to.eql(undefined)
    });
});

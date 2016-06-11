import last from '../../src/array/last'
import chai from 'chai'
let expect = chai.expect

describe('last', function () {
    it('should last arr values as per the function provided', function () {
        expect(last([2, 1])).to.eql(1)
        expect(last([2, 1, 5, 9, 0])).to.eql(0)
        expect(last([])).to.eql(undefined)
    });
});

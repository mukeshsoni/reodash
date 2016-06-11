import initial from '../../src/array/initial'
import chai from 'chai'
let expect = chai.expect

describe('initial', function () {
    it('should initial arr values as per the function provided', function () {
        expect(initial([2, 1])).to.eql([2])
        expect(initial([2, 1, 9])).to.eql([2, 1])
        expect(initial([])).to.eql([])
    });
});

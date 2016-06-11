import drop from '../../src/array/drop'
import chai from 'chai'
let expect = chai.expect

describe('drop', function () {
    it('should drop arr values as per the function provided', function () {
        expect(drop([1, 2, 3])).to.eql([2, 3])
        expect(drop([1, 2, 3], 2)).to.eql([3])
        expect(drop([1, 2, 3], 5)).to.eql([])
        expect(drop([1, 2, 3], 0)).to.eql([1, 2, 3])
    });
});

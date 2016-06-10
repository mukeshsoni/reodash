import filter from '../src/filter'
import chai from 'chai'
let expect = chai.expect

describe('map', function () {
    it('should filter arr values as per the function provided', function () {
        let greaterThan10 = (a) => a > 10
        expect(filter([10, 12, 4, 16, 9], greaterThan10)).to.eql([12, 16])
    });
});

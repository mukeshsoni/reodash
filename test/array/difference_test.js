import difference from '../../src/array/difference'
import chai from 'chai'
let expect = chai.expect

describe('difference', function () {
    it('should difference arr values as per the function provided', function () {
        expect(difference([2, 1], [2, 3])).to.eql([1])
    })
})

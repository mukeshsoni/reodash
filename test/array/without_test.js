import without from '../../src/array/without'
import chai from 'chai'
let expect = chai.expect

describe('without', function () {
    it('should return array without values specified', function () {
        expect(without([2, 1, 2, 3], 1, 2)).to.eql([3])
    })
})

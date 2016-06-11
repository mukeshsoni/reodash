import takeRight from '../../src/array/takeRight'
import chai from 'chai'
let expect = chai.expect

describe('takeRight', function () {
    it('should takeRight arr values as per the function provided', function () {
        expect(takeRight([2, 1, 3])).to.eql([3])
        expect(takeRight([2, 1, 3], 2)).to.eql([1, 3])
        expect(takeRight([2], 3)).to.eql([2])
        expect(takeRight([2, 1], 0)).to.eql([])
    })
})

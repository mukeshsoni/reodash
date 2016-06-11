import take from '../../src/array/take'
import chai from 'chai'
let expect = chai.expect

describe('take', function () {
    it('should take arr values as per the function provided', function () {
        expect(take([2, 1, 3])).to.eql([2])
        expect(take([2, 1, 3], 2)).to.eql([2, 1])
        expect(take([2], 3)).to.eql([2])
        expect(take([2, 1], 0)).to.eql([])
    })
})

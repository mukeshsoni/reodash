import tail from '../../src/array/tail'
import chai from 'chai'
let expect = chai.expect

describe('tail', function () {
    it('should tail arr values as per the function provided', function () {
        expect(tail([2, 1, 3])).to.eql([1, 3])
        expect(tail([])).to.eql([])
        expect(tail([2])).to.eql([])
    })
})
